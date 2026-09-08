import type { TextbookDomain } from "../../models";

/**
 * Interim headings, shown only until the corpus exists.
 *
 * These are titles with no body — the same kind of placeholder the anatomy
 * module was stripped of. They stay for one reason: `fabryka_fizjologii.py`
 * has not been run yet, and a subject with zero domains breaks the guarantee
 * the navigation and search tests encode (every subject indexes something).
 *
 * `domains.ts` drops this list the moment the pipeline produces a real
 * chapter, so the first run removes them without anyone editing this file.
 * When that has happened, delete it.
 */
export const fizjologiaPlaceholders: TextbookDomain[] = [
  {
    id: "neurofizjologia",
    title: "Neurofizjologia",
    shortTitle: "Neurofizjologia",
    icon: "🧠",
    sections: [
      {
        id: "neuro-1",
        title: "Podstawy Neurofizjologii",
        content: [],
        recallQuestions: [],
      }
    ]
  },
  {
    id: "krazenie",
    title: "Fizjologia układu krążenia",
    shortTitle: "Krążenie",
    icon: "❤️",
    sections: [
      {
        id: "krazenie-1",
        title: "Podstawy układu krążenia",
        content: [],
        recallQuestions: [],
      }
    ]
  },
  {
    id: "miesnie",
    title: "Fizjologia mięśni",
    shortTitle: "Mięśnie",
    icon: "💪",
    sections: [
      {
        id: "miesnie-1",
        title: "Podstawy fizjologii mięśni",
        content: [],
        recallQuestions: [],
      }
    ]
  },
  {
    id: "gastroenterologia",
    title: "Gastroenterologia",
    shortTitle: "Gastro",
    icon: "🍽️",
    sections: [
      {
        id: "gastro-1",
        title: "Podstawy gastroenterologii",
        content: [],
        recallQuestions: [],
      }
    ]
  },
  {
    id: "nerki",
    title: "Fizjologia nerek",
    shortTitle: "Nerki",
    icon: "🫘",
    sections: [
      {
        id: "nerki-1",
        title: "Podstawy fizjologii nerek",
        content: [],
        recallQuestions: [],
      }
    ]
  }
];
