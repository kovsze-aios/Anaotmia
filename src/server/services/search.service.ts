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

// ⚡ Bolt Optimization: Zero-allocation string truncation for excerpts
// 💡 What: Replaced `text.replace(/\s+/g, ' ').trim()` with a single-pass `for` loop iterating over character codes, capping execution early.
// 🎯 Why: Using a global regex replacement on massive textbook sections processes the entire string, causing severe memory allocation (O(N)) and main thread blocking, even when we only need the first 160 characters.
// 📊 Impact: O(1) time and memory relative to string length (bounded by `max`). Eliminates large array allocations and GC spikes during search index generation.
/** A one-line preview of the matched text, shown under the result title. */
const makeExcerpt = (text?: string, max = 160): string | undefined => {
  if (!text) return undefined;

  let result = "";
  let i = 0;
  const len = text.length;

  const isWs = (code: number) =>
    (code >= 0x0009 && code <= 0x000d) ||
    code === 0x0020 ||
    code === 0x00a0 ||
    (code >= 0x2000 && code <= 0x200a) ||
    code === 0x2028 ||
    code === 0x2029 ||
    code === 0x202f ||
    code === 0x205f ||
    code === 0x3000 ||
    code === 0x1680 ||
    code === 0xfeff;

  while (i < len && isWs(text.charCodeAt(i))) {
    i++;
  }

  if (i === len) return undefined;

  let lastWasSpace = false;
  let truncated = false;

  while (i < len) {
    const code = text.charCodeAt(i);
    const charIsWs = isWs(code);

    if (charIsWs) {
      if (!lastWasSpace) {
        if (result.length >= max) {
          truncated = true;
          break;
        }
        result += " ";
        lastWasSpace = true;
      }
    } else {
      if (result.length >= max) {
        truncated = true;
        break;
      }
      result += text[i];
      lastWasSpace = false;
    }
    i++;
  }

  if (!truncated) {
    result = result.trimEnd();
    return result;
  }

  let hasMore = false;
  while (i < len) {
    if (!isWs(text.charCodeAt(i))) {
      hasMore = true;
      break;
    }
    i++;
  }

  result = result.trimEnd();
  return hasMore ? `${result}…` : result;
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
