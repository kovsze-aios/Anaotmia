import type { TextbookDomain, TextbookSection } from "../models";
import {
  getDomains as getAnatomyDomainsFromRepo,
  getDomain as getAnatomyDomainFromRepo,
  biologiaTheory,
  chemiaTheory,
  fizjologiaTheory,
} from "../../data";

/** The subjects that have a theory textbook. */
export type TheorySubject = "anatomia" | "biologia" | "chemia" | "fizjologia";

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
