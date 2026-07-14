#!/usr/bin/env node
// Downloads all assets from kenhub.com for the clone project

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const SEO_DIR = path.join(PUBLIC_DIR, 'seo');
const FONTS_DIR = path.join(PUBLIC_DIR, 'fonts');

// Ensure directories exist
[PUBLIC_DIR, IMAGES_DIR, SEO_DIR, FONTS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Download a file with retries
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith('https') ? https : http;

    const doRequest = (attempt = 1) => {
      protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, response => {
        // Handle redirects
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          const redirectUrl = new URL(response.headers.location, url).href;
          downloadFile(redirectUrl, dest).then(resolve).catch(reject);
          return;
        }

        if (response.statusCode !== 200) {
          if (attempt < 3) {
            setTimeout(() => doRequest(attempt + 1), 1000 * attempt);
            return;
          }
          reject(new Error(`HTTP ${response.statusCode} for ${url}`));
          return;
        }

        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(dest);
        });
      }).on('error', err => {
        fs.unlink(dest, () => {});
        if (attempt < 3) {
          setTimeout(() => doRequest(attempt + 1), 1000 * attempt);
        } else {
          reject(err);
        }
      });
    };

    doRequest();
  });
}

async function downloadBatch(items, concurrency = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(
      batch.map(item => {
        console.log(`  Downloading: ${item.url.slice(0, 80)}...`);
        return downloadFile(item.url, item.dest)
          .then(() => ({ name: item.name, status: 'ok' }))
          .catch(err => ({ name: item.name, status: 'error', error: err.message }));
      })
    );
    results.push(...batchResults);
    batchResults.forEach(r => {
      if (r.status === 'fulfilled') {
        console.log(`  ${r.value.status === 'ok' ? '✅' : '❌'} ${r.value.name}: ${r.value.status === 'ok' ? 'downloaded' : r.value.error}`);
      }
    });
  }
  return results;
}

async function main() {
  console.log('🚀 Launching browser to discover assets...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('https://www.kenhub.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Discover all assets via browser JS
  const assets = await page.evaluate(() => {
    const results = [];

    // Images
    document.querySelectorAll('img').forEach(img => {
      const src = img.src || img.getAttribute('data-src');
      if (src && src.startsWith('http') && !src.includes('cookie')) {
        results.push({ type: 'image', url: src, alt: img.alt || '' });
      }
      // Also capture noscript fallback images
      const noscript = img.closest('[data-lazy-load]')?.querySelector('noscript img');
      if (noscript) {
        const nsSrc = noscript.getAttribute('src');
        if (nsSrc && nsSrc.startsWith('http')) {
          results.push({ type: 'image', url: nsSrc, alt: noscript.alt || '' });
        }
      }
    });

    // Favicons
    document.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch"]').forEach(link => {
      if (link.href) results.push({ type: 'favicon', url: link.href });
    });

    // OG image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) results.push({ type: 'og-image', url: ogImage.content });

    // Font files
    [...document.styleSheets].forEach(sheet => {
      try {
        [...sheet.cssRules].forEach(rule => {
          if (rule.type === 5 && rule.style.src) { // FONT_FACE_RULE
            const srcs = rule.style.src.match(/url\(["']?([^"')]+)["']?\)/g);
            if (srcs) srcs.forEach(s => {
              const url = s.replace(/url\(["']?|["']?\)/g, '');
              results.push({ type: 'font', url: url.startsWith('http') ? url : new URL(url, sheet.href || window.location.href).href });
            });
          }
        });
      } catch(_e) {}
    });

    // SVG sprite
    document.querySelectorAll('use').forEach(use => {
      const href = use.getAttribute('href');
      if (href && href.startsWith('http')) {
        const baseUrl = href.split('#')[0];
        if (!results.find(r => r.url === baseUrl)) {
          results.push({ type: 'sprite', url: baseUrl });
        }
      }
    });

    // Background images
    document.querySelectorAll('[style*="background-image"]').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
      if (match && match[1].startsWith('http')) {
        results.push({ type: 'bg-image', url: match[1] });
      }
    });

    return results;
  });

  console.log(`\n📦 Found ${assets.length} assets:`);
  const types = {};
  assets.forEach(a => { types[a.type] = (types[a.type] || 0) + 1; });
  Object.entries(types).forEach(([t, c]) => console.log(`  ${t}: ${c}`));

  // Deduplicate
  const seen = new Set();
  const unique = assets.filter(a => {
    if (seen.has(a.url)) return false;
    seen.add(a.url);
    return true;
  });

  console.log(`\n🔍 ${unique.length} unique assets to download...`);

  // Download favicons
  const faviconDownloads = unique.filter(a => a.type === 'favicon' || a.type === 'og-image').map(a => {
    const ext = path.extname(new URL(a.url).pathname) || '.png';
    const name = a.type === 'og-image' ? 'og-image' : `favicon${ext}`;
    return { url: a.url, dest: path.join(SEO_DIR, name), name };
  });

  // Download images
  const imageDownloads = unique.filter(a => a.type === 'image' || a.type === 'bg-image' || a.type === 'sprite').map((a, i) => {
    const urlObj = new URL(a.url);
    const pathname = urlObj.pathname;
    const basename = path.basename(pathname);
    const name = basename || `image-${i}${path.extname(pathname) || '.webp'}`;
    const dest = path.join(IMAGES_DIR, name);
    return { url: a.url, dest, name };
  });

  // Download fonts
  const fontDownloads = unique.filter(a => a.type === 'font').map((a, i) => {
    const urlObj = new URL(a.url);
    const pathname = urlObj.pathname;
    const basename = path.basename(pathname).split('?')[0];
    // Clean up the weird digested naming
    const name = basename.includes('.digested.')
      ? `pluto-font-${i}${path.extname(basename) || '.woff2'}`
      : basename || `font-${i}.woff2`;
    const dest = path.join(FONTS_DIR, name);
    return { url: a.url, dest, name };
  });

  console.log(`\n📥 Downloading favicons...`);
  await downloadBatch(faviconDownloads);

  console.log(`\n📥 Downloading images...`);
  await downloadBatch(imageDownloads, 3);

  console.log(`\n📥 Downloading fonts...`);
  await downloadBatch(fontDownloads);

  // Extract the SVG sprite for icon components
  const spriteUrl = unique.find(a => a.type === 'sprite')?.url;
  if (spriteUrl) {
    console.log(`\n📥 Downloading SVG sprite...`);
    const spriteDest = path.join(IMAGES_DIR, 'icons-sprite.svg');
    await downloadFile(spriteUrl, spriteDest).then(() => console.log('  ✅ SVG sprite saved')).catch(e => console.log(`  ❌ SVG sprite: ${e.message}`));
  }

  await browser.close();
  console.log('\n✅ Asset download complete!');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
