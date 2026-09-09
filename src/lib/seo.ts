import type { TextbookSection } from "@/server/models";

/**
 * Canonical origin for absolute URLs.
 *
 * Sitemaps, Open Graph and JSON-LD all require absolute URLs — a relative one
 * is silently dropped by most crawlers rather than reported — so this is the
 * single place the origin is decided.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anatomia2026.pl";

/** Joins a route onto the canonical origin. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Upper bound on a meta description.
 *
 * Google truncates the snippet around 155–160 characters on desktop and less
 * on mobile. Going past it does not hurt ranking, but the tail is never read,
 * and a description cut mid-word by the search engine looks worse than one cut
 * deliberately here.
 */
export const META_DESCRIPTION_LIMIT = 155;

/** Strips tags and collapses whitespace, leaving plain readable prose. */
export function toPlainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Truncates on a word boundary, adding an ellipsis only when it actually cut. */
export function truncateOnWord(text: string, limit = META_DESCRIPTION_LIMIT): string {
  if (text.length <= limit) return text;
  const cut = text.lastIndexOf(" ", limit - 1);
  return `${text.slice(0, cut > 0 ? cut : limit - 1).trimEnd()}…`;
}

/**
 * The `<meta name="description">` for one chapter.
 *
 * Drawn from the chapter's own prose rather than a template. A description
 * generated from the title ("Opanuj temat X…") is the same sentence on every
 * one of 1,730 pages, which search engines treat as boilerplate and replace
 * with their own snippet; real text from the page is what earns the snippet.
 *
 * `summary` is preferred because the pipeline already cut it on a word
 * boundary; the first page body is the fallback for hand-written chapters that
 * predate it.
 */
export function chapterDescription(section: TextbookSection): string {
  const source =
    section.summary?.trim() ||
    toPlainText(section.pages?.[0]?.htmlContent ?? "") ||
    "";
  return truncateOnWord(toPlainText(source));
}
