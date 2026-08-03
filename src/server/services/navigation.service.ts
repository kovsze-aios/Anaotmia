import type {
  NavDomain,
  SidebarNavigation,
  TextbookDomain,
} from "../models";
import { biologiaTheory, chemiaTheory, getDomains } from "../repositories";
import { getTheoryDomains, type TheorySubject } from "./textbook.service";

/**
 * Strips a domain down to what navigation renders. Dropping `content`,
 * `summary`, `academic_detail` and friends here is what lets a client
 * component render the chapter tree without the textbook corpus travelling
 * with it.
 */
export function toNavDomain(domain: TextbookDomain): NavDomain {
  return {
    id: domain.id,
    title: domain.title,
    shortTitle: domain.shortTitle,
    icon: domain.icon,
    sections: domain.sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
  };
}

/** The chapter tree for one subject, content removed. */
export function getNavDomains(subject: TheorySubject): NavDomain[] {
  return getTheoryDomains(subject).map(toNavDomain);
}

/**
 * Everything the global drawer renders, as flat links.
 *
 * The chemistry split mirrors the printed CKE syllabus: inorganic topics and
 * calculations in one group, organic chemistry in the other.
 */
export function getSidebarNavigation(): SidebarNavigation {
  const anatomy = getDomains().map((domain) => ({
    href: "/theory/anatomia",
    label: `${domain.icon} ${domain.title}`,
  }));

  const biology = biologiaTheory.map((domain) => ({
    href: "/theory/biologia",
    label: `${domain.icon} ${domain.title}`,
  }));

  const chemistry = chemiaTheory.map((domain) => ({
    href: "/theory/chemia",
    label: `${domain.icon} ${domain.title}`,
  }));

  const isInorganic = (label: string) =>
    label.includes("nieorganiczna") ||
    label.includes("atomu") ||
    label.includes("Stechiometria");

  // "nieorganiczna" contains "organiczna", so the organic check must exclude
  // the inorganic domains explicitly — otherwise they land in both groups.
  const isOrganic = (label: string) =>
    !isInorganic(label) && label.includes("organiczna");

  return {
    anatomy,
    biology,
    chemistryInorganic: chemistry.filter((l) => isInorganic(l.label)),
    chemistryOrganic: chemistry.filter((l) => isOrganic(l.label)),
  };
}
