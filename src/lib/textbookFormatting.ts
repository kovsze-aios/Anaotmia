import type { TextbookSection } from "@/server/models";

/**
 * Pure text/formatting helpers shared by the textbook UI. Kept free of React
 * and data-tier imports so they are trivially unit-testable.
 */

/** Normalises OCR output: CRLF, page markers, and single newlines. */
export function formatOcrText(text: string): string {
  if (!text) return "";
  let formatted = text.replace(/\r\n/g, "\n");
  formatted = formatted.replace(/---\s*STRONA\s+\d+\s*---/gi, "");
  // Bolt: Regex optimized to avoid negative lookbehinds which are slower in V8 for massive OCR strings.
  formatted = formatted.replace(/([^\n])\n(?!\n)/g, "$1 ");
  return formatted.trim();
}

/** Slugifies heading text into an anchor id. */
export function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Like `generateId`, but guarantees uniqueness within a document by tracking
 * occurrences: the second identical heading becomes `title-2`, and so on.
 * Without this, duplicate anchors break both the ToC and deep links.
 */
export function uniqueId(text: string, used: Map<string, number>): string {
  const base = generateId(text);
  const count = used.get(base) ?? 0;
  used.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

/**
 * Zero-allocation word count. Using `(text.match(/\S+/g) || []).length` would
 * create large intermediate arrays (O(N) memory) for multi-megabyte OCR texts,
 * causing GC pauses. Iterating character codes avoids all heap allocations.
 */
export function countWords(text: string): number {
  let wordCount = 0;
  let inWord = false;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // Space (32), tab (9), LF (10), CR (13), non-breaking space (160).
    const isWhitespace = code === 32 || (code >= 9 && code <= 13) || code === 160;
    if (isWhitespace) {
      inWord = false;
    } else if (!inWord) {
      inWord = true;
      wordCount++;
    }
  }
  return wordCount;
}

/** Total word count of a section across summary, detail, sources and content. */
export function getSectionWordCount(section: TextbookSection): number {
  let count = 0;

  if (section.summary) count += countWords(section.summary);
  if (section.academic_detail) count += countWords(section.academic_detail);

  if (section.academic_sources) {
    section.academic_sources.forEach((src) => {
      count += countWords(src.content);
    });
  }

  if (section.content) {
    section.content.forEach((block) => {
      if (block.type === "paragraph" || block.type === "heading") {
        count += countWords(block.text);
      }
    });
  }

  return count;
}
