import Fuse from "fuse.js";
import { getDomains } from "@/data/textbook";
import { biologiaTheory } from "@/data/biologia/theory";
import { chemiaTheory } from "@/data/chemia/theory";

export type Subject = "Anatomia" | "Biologia" | "Chemia";

export interface SearchItem {
  id: string;
  title: string;
  subject: Subject;
  url: string;
  summary?: string;
  academic_detail?: string;
  icon?: string;
}

const buildSearchIndex = (): SearchItem[] => {
  const items: SearchItem[] = [];

  // Anatomy
  const anatomyDomains = getDomains();
  for (const domain of anatomyDomains) {
    for (const section of domain.sections) {
      items.push({
        id: section.id,
        title: section.title,
        subject: "Anatomia",
        url: `/theory/anatomia/${section.id}`,
        summary: section.summary,
        academic_detail: section.academic_detail,
        icon: "🩺",
      });
    }
  }

  // Biology
  for (const domain of biologiaTheory) {
    for (const section of domain.sections) {
      items.push({
        id: section.id,
        title: section.title,
        subject: "Biologia",
        url: `/theory/biologia#${section.id}`,
        summary: section.summary,
        academic_detail: section.academic_detail,
        icon: "🌿",
      });
    }
  }

  // Chemistry
  for (const domain of chemiaTheory) {
    for (const section of domain.sections) {
      items.push({
        id: section.id,
        title: section.title,
        subject: "Chemia",
        url: `/theory/chemia#${section.id}`,
        summary: section.summary,
        academic_detail: section.academic_detail,
        icon: "🧪",
      });
    }
  }

  return items;
};

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.5 },
    { name: 'id', weight: 0.3 },
    { name: 'summary', weight: 0.1 },
    { name: 'academic_detail', weight: 0.1 }
  ],
  threshold: 0.4,
  ignoreLocation: true,
  // Bolt: removed includeMatches: true since we do not use the matches array,
  // saving CPU and memory during search
};

let fuseInstance: Fuse<SearchItem> | null = null;

// Bolt: Eagerly parsing massive domain data structures or initializing heavy libraries (like `Fuse.js`)
// at the module level blocks the main thread during app load. Lazily initialize it here.
const getFuseInstance = (): Fuse<SearchItem> => {
  if (!fuseInstance) {
    const searchData = buildSearchIndex();
    fuseInstance = new Fuse(searchData, fuseOptions);
  }
  return fuseInstance;
};

// Bolt: Export fuse using a Proxy to preserve backward compatibility for any modules directly importing it,
// without triggering eager initialization.
export const fuse = new Proxy({} as Fuse<SearchItem>, {
  get: (target, prop) => Reflect.get(getFuseInstance(), prop),
  set: (target, prop, value) => Reflect.set(getFuseInstance(), prop, value),
});

export const searchTerms = (query: string) => {
  if (!query) return [];
  // Bolt: limit search results to 15 — prevents excessive CPU computation from Fuse.js
  // ranking massive result sets and avoids huge array re-renders in the CommandList
  return getFuseInstance().search(query, { limit: 15 }).map(result => result.item);
};
