#!/usr/bin/env node
/**
 * Coverage report for the 3D atlas terminology dictionary.
 *
 * The atlas manifest is not ours. It is fetched at runtime from a pinned
 * commit of `ashemag/human-atlas` on jsDelivr and carries an English `name`
 * per mesh and nothing else — no `pl`, no `la`, no synonyms. There is
 * therefore no local JSON to enrich: the Polish and Latin terms live in
 * `src/i18n/anatomy-terms-pl.ts`, and `translateAnatomyName()` joins the two
 * at render time.
 *
 * That split is deliberate — the English name is the mesh's identity
 * everywhere in the viewer — but it means dictionary coverage is invisible
 * until something measures it. This script is that something: it pulls the
 * manifest for the pinned commit, applies the same lookup rules the UI uses,
 * and prints what is covered, what is not, and what is worth adding next.
 *
 * Usage:
 *   node scripts/audit-atlas-terms.mjs              # summary
 *   node scripts/audit-atlas-terms.mjs --missing 40 # + top uncovered names
 *   node scripts/audit-atlas-terms.mjs --json       # machine-readable
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TERMS = path.join(ROOT, "src/i18n/anatomy-terms-pl.ts");
const SERVICE = path.join(ROOT, "src/services/atlasService.ts");
const CACHE = path.join(ROOT, "node_modules/.cache/atlas-manifest.json");

/** Same shape `translateAnatomyName()` strips before a dictionary lookup. */
const LATERAL = /^(left|right)\s+(.+)$/i;

function readPinnedCommit() {
  const src = fs.readFileSync(SERVICE, "utf8");
  const match = src.match(/ATLAS_COMMIT\s*=\s*"([0-9a-f]{7,40})"/);
  if (!match) throw new Error("ATLAS_COMMIT not found in src/services/atlasService.ts");
  return match[1];
}

/**
 * Dictionary keys, read out of the TypeScript source.
 *
 * Parsing the source rather than importing it keeps this script free of a
 * TypeScript loader; the file is a flat object literal, so a line-anchored
 * match on the key is exact.
 */
function readDictionaryKeys() {
  const src = fs.readFileSync(TERMS, "utf8");
  const keys = new Set();
  const re = /^ {2}(?:"([^"]+)"|([A-Za-z][A-Za-z0-9]*)):\s*\{/gm;
  for (const m of src.matchAll(re)) keys.add((m[1] ?? m[2]).toLowerCase());
  return keys;
}

async function loadManifest(commit) {
  if (fs.existsSync(CACHE)) {
    const cached = JSON.parse(fs.readFileSync(CACHE, "utf8"));
    if (cached.__commit === commit) return cached;
  }
  const url = `https://cdn.jsdelivr.net/gh/ashemag/human-atlas@${commit}/public/models/atlas.json`;
  process.stderr.write(`fetching manifest for ${commit.slice(0, 10)}…\n`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`manifest fetch failed: ${response.status}`);
  const manifest = await response.json();
  manifest.__commit = commit;
  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  fs.writeFileSync(CACHE, JSON.stringify(manifest));
  return manifest;
}

function baseName(name) {
  const m = LATERAL.exec(name);
  return (m ? m[2] : name).trim().toLowerCase();
}

const argv = process.argv.slice(2);
const wantJson = argv.includes("--json");
const missingIdx = argv.indexOf("--missing");
const missingCount = missingIdx === -1 ? 0 : Number(argv[missingIdx + 1] ?? 25);

const commit = readPinnedCommit();
const keys = readDictionaryKeys();
const manifest = await loadManifest(commit);
const parts = manifest.parts ?? [];

const covered = (name) => keys.has(baseName(name));

const partsCovered = parts.filter((p) => covered(p.name)).length;
const distinct = [...new Set(parts.map((p) => p.name))];
const distinctCovered = distinct.filter(covered).length;

/** Uncovered base names, ranked by how many meshes carry them. */
const missing = new Map();
for (const p of parts) {
  if (covered(p.name)) continue;
  const b = baseName(p.name);
  missing.set(b, (missing.get(b) ?? 0) + 1);
}
const ranked = [...missing].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

const report = {
  commit,
  dictionaryEntries: keys.size,
  parts: parts.length,
  partsCovered,
  partsCoveredPct: +((100 * partsCovered) / parts.length).toFixed(1),
  distinctNames: distinct.length,
  distinctCovered,
  uncoveredBaseNames: ranked.length,
};

if (wantJson) {
  console.log(JSON.stringify({ ...report, topMissing: ranked.slice(0, 200) }, null, 2));
} else {
  console.log(`atlas manifest   : ${commit.slice(0, 10)}`);
  console.log(`dictionary       : ${report.dictionaryEntries} entries`);
  console.log(
    `meshes covered   : ${partsCovered}/${parts.length} (${report.partsCoveredPct}%)`,
  );
  console.log(`distinct names   : ${distinctCovered}/${distinct.length}`);
  console.log(`still English    : ${ranked.length} base names`);
  if (missingCount > 0) {
    console.log(`\ntop ${missingCount} uncovered names, by mesh count:`);
    for (const [name, count] of ranked.slice(0, missingCount)) {
      console.log(`  x${String(count).padEnd(3)} ${name}`);
    }
  }
}
