import type { TextbookDomain, TextbookSection } from "../../models";
import type { StructuredChapter } from "@/types/theory";
import * as generated from "@/data/chemia/dzialy";
import { chemiaTheory as legacyDomains } from "./theory";

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
function excerpt(html: string, limit = 300): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  const cut = text.lastIndexOf(" ", limit);
  return text.slice(0, cut > 0 ? cut : limit) + "…";
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
  sections: (chapters[`${czesc.tag}Chapters`] ?? []).map(mapToSection),
})).filter((domain) => domain.sections.length > 0);

/**
 * Chemistry, generated sources first and the existing domains after them.
 *
 * Additive, like biology and unlike physiology: `theory.ts` here is 5.1 MB of
 * real material across four domains, so none of it is discarded. The academic
 * volume and the exam-oriented domains cover overlapping ground, but choosing
 * between them is a content decision rather than a wiring one.
 */
export const chemiaDomains: TextbookDomain[] = [...generatedParts, ...legacyDomains];
