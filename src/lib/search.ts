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
        url: `/textbook?domain=${domain.id}#${section.id}`,
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

const searchData = buildSearchIndex();

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.5 },
    { name: 'id', weight: 0.3 },
    { name: 'summary', weight: 0.1 },
    { name: 'academic_detail', weight: 0.1 }
  ],
  threshold: 0.4,
  ignoreLocation: true,
  includeMatches: true,
};

export const fuse = new Fuse(searchData, fuseOptions);

export const searchTerms = (query: string) => {
  if (!query) return [];
  return fuse.search(query).map(result => result.item);
};
