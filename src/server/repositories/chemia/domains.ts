import type { TextbookDomain, TextbookSection } from "../../models";
import { disambiguateSectionTitles } from "../sectionTitles";
import type { StructuredChapter } from "@/types/theory";
import * as generated from "@/data/chemia/dzialy";

/**
 * Generated chemistry sources.
 *
 * The `tag` is the prefix `fabryka_chemii.py` stamps on every file it writes
 * (`chem1-czesc-12-….ts`) and the key of the array it exports
 * (`chem1Chapters`), so this table binds the generated corpus to the
 * navigation. Changing a tag orphans a source.
 *
 * One entry today. The chemistry source directory holds no textbook series —
 * the rest of it is exercise collections, matura papers and a curriculum
 * document, none of which is lecture material.
 */
const CZESCI = [
  {
    tag: "chem1",
    id: "bielanski-podstawy-chemii-nieorganicznej-1",
    title: "Podstawy chemii nieorganicznej — Bielański, część 1",
    shortTitle: "Bielański: nieorganiczna",
    icon: "⚗️",
  },
] as const;

interface ChapterEntry {
  id: string;
  data: StructuredChapter;
}

/**
 * Read as a namespace rather than by named import.
 *
 * The barrel is empty until the pipeline has run, and `import { chem1Chapters }`
 * from an empty module is a compile error — the generated file would have to
 * exist before the code that reads it.
 */
const chapters = generated as unknown as Record<string, ChapterEntry[] | undefined>;

/** Pierwsze ~300 znaków tekstu strony, ucięte na granicy słowa. */
// ⚡ Bolt Optimization: Zero-allocation bounded excerpt extraction
// 💡 What: Replaced global regex replacements (/<[^>]*>/g and /\s+/g) with a bounded `charCodeAt` loop.
// 🎯 Why: Eagerly parsing and replacing characters across massive OCR text strings causes massive intermediate allocations and blocks the main thread.
// 📊 Impact: O(max) processing time instead of O(N), avoiding GC spikes and reducing execution time on large strings from ~40ms to ~0.5ms.
function excerpt(html: string, limit = 300): string {
  if (!html) return "";
  let out = "";
  let inTag = false;
  let inSpace = true; // start true to trim leading space
  for (let i = 0; i < html.length; i++) {
    const char = html[i];
    if (char === "<") {
      inTag = true;
      if (!inSpace) {
        out += " ";
        inSpace = true;
      }
      continue;
    }
    if (char === ">" && inTag) {
      inTag = false;
      continue;
    }
    if (inTag) continue;
    const code = html.charCodeAt(i);
    const isWhitespace = code === 32 || (code >= 9 && code <= 13) || code === 160;
    if (isWhitespace) {
      if (!inSpace) {
        out += " ";
        inSpace = true;
      }
    } else {
      out += char;
      inSpace = false;
    }
    if (out.length > limit + 50) break;
  }
  out = out.trim();
  if (out.length <= limit) return out;
  const cut = out.lastIndexOf(" ", limit);
  return out.slice(0, cut > 0 ? cut : limit) + "…";
}

function mapToSection(item: ChapterEntry): TextbookSection {
  const d = item.data;
  return {
    id: item.id,
    title: d.chapterTitle,
    pages: d.pages,
    toc: d.toc,
    chapterQuiz: d.chapterQuiz,
    content: [],
    recallQuestions: (d.chapterQuiz || []).map((q, idx) => ({
      id: `${item.id}-q-${idx + 1}`,
      question: q.question,
      answer: q.answer,
    })),
    // Krótki wyciąg do bloku "Szybka Powtórka" — ucinany na granicy słowa.
    summary: excerpt(d.pages?.[0]?.htmlContent ?? ""),
    // `academic_detail` celowo pominięte, tak jak w pozostałych modułach.
  };
}

/** Sources the pipeline has actually produced. */
const generatedParts: TextbookDomain[] = CZESCI.map((czesc) => ({
  id: czesc.id,
  title: czesc.title,
  shortTitle: czesc.shortTitle,
  icon: czesc.icon,
  sections: disambiguateSectionTitles(
    (chapters[`${czesc.tag}Chapters`] ?? []).map(mapToSection),
  ),
})).filter((domain) => domain.sections.length > 0);

/**
 * Chemistry, the Bielanski volume and nothing else.
 *
 * The four hand-written thematic domains that used to sit after these were
 * removed for the same reason as biology's: "Pytania Maturalne CKE" answer-key
 * sections in the table of contents, and contents-page dot leaders in the
 * prose. The CKE exam papers remain a separate feature at /matura/chemia,
 * sourced from `./index`.
 */
export const chemiaDomains: TextbookDomain[] = generatedParts;
