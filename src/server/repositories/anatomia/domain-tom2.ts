import type { TextbookDomain, TextbookSection } from "../../models";
import { disambiguateSectionTitles } from "../sectionTitles";
import type { StructuredChapter } from "@/types/theory";
import { tom2Chapters } from "@/data/anatomia/tomy";

/** Pierwsze ~300 znaków tekstu strony, ucięte na granicy słowa. */
function excerpt(html: string, limit = 300): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  const cut = text.lastIndexOf(" ", limit);
  return text.slice(0, cut > 0 ? cut : limit) + "…";
}

function mapToSection(item: { id: string; data: StructuredChapter }): TextbookSection {
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
    // Krótki wyciąg do bloku "Szybka Powtórka" — ucinany na granicy słowa,
    // żeby nie kończył się w połowie wyrazu.
    summary: excerpt(d.pages?.[0]?.htmlContent ?? ""),
    // `academic_detail` celowo pominięte. Budowało drugą, pozbawioną
    // znaczników kopię całego rozdziału, a TextbookContent renderuje to pole
    // wyłącznie gdy `!section.pages` — czyli tutaj nigdy. Kopia i tak jechała
    // do przeglądarki w payloadzie RSC: 3,51 MB w skali korpusu.
  };
}

export const tom2Domain: TextbookDomain = {
  id: "tom-2-konczyna-gorna-i-dolna",
  title: "Tom 2: Kończyna Górna i Kończyna Dolna",
  shortTitle: "Tom 2: Kończyny",
  icon: "🦾",
  sections: disambiguateSectionTitles(tom2Chapters.map(mapToSection)),
};
