import type {
  NavDomain,
  SidebarNavigation,
  TextbookDomain,
} from "../models";
import { biologiaTheory, chemiaTheory, fizjologiaTheory, getDomains } from "../repositories";
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

/** Which chemistry group a domain's label belongs to. */
export type ChemistryGroup = "inorganic" | "organic" | "other";

/**
 * Sorts a chemistry domain into the CKE syllabus split.
 *
 * Exported so the classification can be tested against a title directly. The
 * grouping is keyword-based, which means it only recognises titles phrased to
 * suit it: "Podstawy chemii nieorganicznej" is genitive and contains neither
 * "nieorganiczna" nor "organiczna", so both filters miss it. It used to fall
 * out of the drawer entirely at that point, with nothing reporting a problem.
 * Returning "other" instead of nothing is what makes the split exhaustive.
 *
 * "nieorganiczna" contains "organiczna", so the inorganic test has to run
 * first — otherwise the inorganic domains land in both groups.
 */
export function classifyChemistry(label: string): ChemistryGroup {
  if (
    label.includes("nieorganiczna") ||
    label.includes("atomu") ||
    label.includes("Stechiometria")
  ) {
    return "inorganic";
  }
  if (label.includes("organiczna")) return "organic";
  return "other";
}


/**
 * Everything the global drawer renders, as flat links.
 *
 * The chemistry split mirrors the printed CKE syllabus: inorganic topics and
 * calculations in one group, organic chemistry in the other.
 */
export function getSidebarNavigation(): SidebarNavigation {
  // Deep-link to each domain's first section — matching the welcome grid —
  // so the drawer skips the landing page and lands on content.
  const anatomy = getDomains().map((domain) => {
    const firstSection = domain.sections[0];
    return {
      href: firstSection ? `/theory/anatomia/${firstSection.id}` : "/theory/anatomia",
      label: `${domain.icon} ${domain.title}`,
    };
  });

  // Physiology is not routed per section — the whole subject lives at one
  // page — so its links carry the domain in the query instead. The page opens
  // that chapter and drops the parameter, which is what makes ten links to one
  // route land somewhere different each time.
  const physiology = fizjologiaTheory.map((domain) => ({
    href: `/theory/fizjologia?domain=${encodeURIComponent(domain.id)}`,
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

  return {
    anatomy,
    physiology,
    biology,
    chemistryInorganic: chemistry.filter((l) => classifyChemistry(l.label) === "inorganic"),
    chemistryOrganic: chemistry.filter((l) => classifyChemistry(l.label) === "organic"),
    chemistryOther: chemistry.filter((l) => classifyChemistry(l.label) === "other"),
  };
}
