import type { TextbookDomain, TextbookSection } from "../models";
import {
  getDomains as getAnatomyDomainsFromRepo,
  getDomain as getAnatomyDomainFromRepo,
  biologiaTheory,
  chemiaTheory,
  fizjologiaTheory,
  biologiaMatura2015Theory,
  biologiaMatura2023Theory,
  chemiaMatura2015Theory,
  chemiaMatura2023Theory,
} from "../repositories";

/** The subjects that have a theory textbook. */
export type TheorySubject =
  | "anatomia"
  | "biologia"
  | "chemia"
  | "fizjologia"
  | "biologia-matura-2015"
  | "biologia-matura-2023"
  | "chemia-matura-2015"
  | "chemia-matura-2023";

/**
 * Reads every subject's domains through one entry point so callers never have
 * to know which repository a subject lives in.
 */
export function getTheoryDomains(subject: TheorySubject): TextbookDomain[] {
  switch (subject) {
    case "anatomia":
      return getAnatomyDomainsFromRepo();
    case "biologia":
      return biologiaTheory;
    case "chemia":
      return chemiaTheory;
    case "fizjologia":
      return fizjologiaTheory;
    case "biologia-matura-2015":
      return biologiaMatura2015Theory;
    case "biologia-matura-2023":
      return biologiaMatura2023Theory;
    case "chemia-matura-2015":
      return chemiaMatura2015Theory;
    case "chemia-matura-2023":
      return chemiaMatura2023Theory;
  }
}

/** Anatomy is the only subject routed per-section, so it keeps direct helpers. */
export function getAnatomyDomains(): TextbookDomain[] {
  return getAnatomyDomainsFromRepo();
}

export function getAnatomyDomain(id: string): TextbookDomain | undefined {
  return getAnatomyDomainFromRepo(id);
}

/** Finds a section by id across every domain of a subject. */
export function getTheorySection(
  subject: TheorySubject,
  sectionId: string,
): TextbookSection | undefined {
  for (const domain of getTheoryDomains(subject)) {
    const section = domain.sections.find((s) => s.id === sectionId);
    if (section) return section;
  }
  return undefined;
}

/**
 * Finds a section together with the domain that owns it, for any subject.
 *
 * Chapter pages need the domain as well as the section — for the breadcrumb,
 * for the sibling list, and for the volume name in Open Graph — and looking it
 * up twice would walk the corpus twice.
 */
export function getTheorySectionWithDomain(
  subject: TheorySubject,
  sectionId: string,
): { domain: TextbookDomain; section: TextbookSection } | undefined {
  for (const domain of getTheoryDomains(subject)) {
    const section = domain.sections.find((s) => s.id === sectionId);
    if (section) return { domain, section };
  }
  return undefined;
}

/** Finds an anatomy section together with the domain that owns it. */
export function getAnatomySectionWithDomain(
  sectionId: string,
): { domain: TextbookDomain; section: TextbookSection } | undefined {
  for (const domain of getAnatomyDomainsFromRepo()) {
    const section = domain.sections.find((s) => s.id === sectionId);
    if (section) return { domain, section };
  }
  return undefined;
}
