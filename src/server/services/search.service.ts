import Fuse from "fuse.js";
import type { SearchResult, Subject, TextbookDomain } from "../models";
import {
  biologiaTheory,
  chemiaTheory,
  fizjologiaTheory,
  getDomains,
  getBiologiaRecords,
  getChemiaRecords,
} from "../repositories";

export type { SearchResult, Subject };

/** All subjects, in the order the search UI groups them. */
export const SEARCH_SUBJECTS: readonly Subject[] = [
  "Anatomia",
  "Biologia",
  "Chemia",
  "Fizjologia",
  "Matura",
];

/**
 * An indexed entry. `searchBody` (summary + academic detail for sections, the
 * question text for matura items) is matched against but never returned — it is
 * the bulk of the corpus, and the UI only renders the title and a short
 * excerpt. See {@link SearchResult}.
 */
interface SearchItem {
  id: string;
  title: string;
  subject: Subject;
  url: string;
  icon?: string;
  excerpt?: string;
  searchBody?: string;
}

/** A one-line preview of the matched text, shown under the result title. */
const makeExcerpt = (text?: string, max = 160): string | undefined => {
  if (!text) return undefined;

  // ⚡ Bolt: Slice text to a safe length before running the global regex.
  // This prevents severe CPU/memory overhead when initializing the search index
  // on massive multi-megabyte textbook sections.
  const safeText = text.length > max * 3 ? text.slice(0, max * 3) : text;

  const clean = safeText.replace(/\s+/g, " ").trim();
  if (!clean) return undefined;
  return clean.length > max ? `${clean.slice(0, max).trimEnd()}…` : clean;
};

const THEORY_SOURCES: ReadonlyArray<{
  subject: Subject;
  icon: string;
  domains: () => TextbookDomain[];
  url: (sectionId: string) => string;
}> = [
  {
    subject: "Anatomia",
    icon: "🩺",
    domains: getDomains,
    url: (id) => `/theory/anatomia/${id}`,
  },
  {
    subject: "Biologia",
    icon: "🌿",
    domains: () => biologiaTheory,
    url: (id) => `/theory/biologia#${id}`,
  },
  {
    subject: "Chemia",
    icon: "🧪",
    domains: () => chemiaTheory,
    url: (id) => `/theory/chemia#${id}`,
  },
  {
    subject: "Fizjologia",
    icon: "🫀",
    domains: () => fizjologiaTheory,
    url: (id) => `/theory/fizjologia#${id}`,
  },
];

const MATURA_SOURCES: ReadonlyArray<{
  icon: string;
  urlPrefix: string;
  records: () => ReturnType<typeof getBiologiaRecords>;
}> = [
  { icon: "🧬", urlPrefix: "/matura/biologia", records: getBiologiaRecords },
  { icon: "⚗️", urlPrefix: "/matura/chemia", records: getChemiaRecords },
];

const buildSearchIndex = (): SearchItem[] => {
  const items: SearchItem[] = [];

  for (const source of THEORY_SOURCES) {
    for (const domain of source.domains()) {
      for (const section of domain.sections) {
        items.push({
          id: section.id,
          title: section.title,
          subject: source.subject,
          url: source.url(section.id),
          icon: source.icon,
          excerpt: makeExcerpt(section.summary) ?? makeExcerpt(section.academic_detail),
          searchBody: [section.summary, section.academic_detail]
            .filter(Boolean)
            .join("\n"),
        });
      }
    }
  }

  for (const source of MATURA_SOURCES) {
    for (const record of source.records()) {
      for (const question of record.questions) {
        items.push({
          id: `matura-${record.year}-${question.questionNumber}`,
          title: `Matura ${record.year} ${record.month} — ${question.topicCategory}`,
          subject: "Matura",
          url: `${source.urlPrefix}?rok=${record.year}`,
          icon: source.icon,
          excerpt: makeExcerpt(question.questionText),
          searchBody: [
            question.topicCategory,
            question.instruction,
            question.questionText,
            question.officialCkeAnswer,
          ]
            .filter(Boolean)
            .join("\n"),
        });
      }
    }
  }

  return items;
};

const fuseOptions = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "id", weight: 0.2 },
    { name: "searchBody", weight: 0.3 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  // includeMatches is off — we never use the matches array, saving CPU and
  // memory during search.
};

// Lazy initialization of the search index and Fuse instance. Building the index
// walks every section and matura question of every subject, so doing it at
// module scope would cost that work on the first request that merely imports
// this module. Deferring it to the first actual search keeps cold starts cheap.
let fuseInstance: Fuse<SearchItem> | null = null;

const getFuse = (): Fuse<SearchItem> => {
  if (!fuseInstance) {
    fuseInstance = new Fuse(buildSearchIndex(), fuseOptions);
  }
  return fuseInstance;
};

/** Default result cap, mirrored by the API route. */
export const SEARCH_RESULT_LIMIT = 15;

export const searchTerms = (
  query: string,
  limit: number = SEARCH_RESULT_LIMIT,
): SearchResult[] => {
  if (!query) return [];

  // Limit search results — prevents excessive CPU computation from Fuse.js
  // ranking massive result sets and avoids huge array re-renders in the UI.
  return getFuse()
    .search(query, { limit })
    .map(({ item }) => ({
      id: item.id,
      title: item.title,
      subject: item.subject,
      url: item.url,
      icon: item.icon,
      excerpt: item.excerpt,
    }));
};
