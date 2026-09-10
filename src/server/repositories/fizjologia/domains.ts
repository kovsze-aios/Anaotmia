import type { TextbookDomain, TextbookSection } from "../../models";
import { disambiguateSectionTitles } from "../sectionTitles";
import type { StructuredChapter } from "@/types/theory";
import * as generated from "@/data/fizjologia/dzialy";

/**
 * The physiology textbook, in reading order.
 *
 * Ten chapters, exactly as Lewiński orders them. The `tag` is the prefix the
 * pipeline stamps on every file it writes (`dzial4-czesc-12-….ts`) and the key
 * of the array it exports (`dzial4Chapters`), so this table is what binds the
 * generated corpus to the navigation. Changing a tag orphans a chapter.
 */
const DZIALY = [
  { tag: "dzial1", id: "dzial-1-wprowadzenie", title: "Wprowadzenie", shortTitle: "Wprowadzenie", icon: "🔬" },
  { tag: "dzial2", id: "dzial-2-uklad-ruchu", title: "Układ ruchu", shortTitle: "Układ ruchu", icon: "🦴" },
  { tag: "dzial3", id: "dzial-3-wymiana-gazowa", title: "Wymiana gazowa", shortTitle: "Wymiana gazowa", icon: "🫁" },
  { tag: "dzial4", id: "dzial-4-krazenie", title: "Krążenie", shortTitle: "Krążenie", icon: "❤️" },
  { tag: "dzial5", id: "dzial-5-trawienie", title: "Pobieranie i trawienie pokarmów", shortTitle: "Trawienie", icon: "🍽️" },
  { tag: "dzial6", id: "dzial-6-osmoregulacja-i-wydalanie", title: "Osmoregulacja i wydalanie", shortTitle: "Wydalanie", icon: "💧" },
  { tag: "dzial7", id: "dzial-7-rozrod", title: "Rozród", shortTitle: "Rozród", icon: "👶" },
  { tag: "dzial8", id: "dzial-8-koordynacja", title: "Koordynacja funkcji życiowych", shortTitle: "Koordynacja", icon: "🧠" },
  { tag: "dzial9", id: "dzial-9-metabolizm-i-termoregulacja", title: "Metabolizm i termoregulacja", shortTitle: "Metabolizm", icon: "🔥" },
  { tag: "dzial10", id: "dzial-10-uklad-odpornosciowy", title: "Układ odpornościowy", shortTitle: "Odporność", icon: "🛡️" },
] as const;

interface ChapterEntry {
  id: string;
  data: StructuredChapter;
}

/**
 * Read as a namespace rather than by named import.
 *
 * The barrel is empty until the pipeline has run, and `import { dzial4Chapters }`
 * from an empty module is a compile error — the module would have to exist
 * before the code that reads it, which is the wrong way round for generated
 * content. Reading the namespace lets the same build work with nothing
 * generated and with all ten chapters generated.
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
    // `academic_detail` celowo pominięte, tak jak w module anatomii: budowało
    // drugą, pozbawioną znaczników kopię rozdziału, której nic nie renderuje.
  };
}

/** Chapters the pipeline has actually produced. */
const generatedDomains: TextbookDomain[] = DZIALY.map((dzial) => ({
  id: dzial.id,
  title: dzial.title,
  shortTitle: dzial.shortTitle,
  icon: dzial.icon,
  sections: disambiguateSectionTitles(
    (chapters[`${dzial.tag}Chapters`] ?? []).map(mapToSection),
  ),
})).filter((domain) => domain.sections.length > 0);

/**
 * The physiology module.
 *
 * The five interim headings this used to fall back to are gone: they were
 * titles with no body, kept only until the pipeline had run, and it has. The
 * ten generated chapters stand on their own.
 */
export const fizjologiaTheory: TextbookDomain[] = generatedDomains;
