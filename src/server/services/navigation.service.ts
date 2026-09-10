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

/**
 * Everything the global drawer renders, as flat links.
 *
 * Chemistry used to be split into inorganic and organic groups by keywords in
 * the domain titles. That split described the hand-written thematic domains,
 * which have been removed; one generated volume remains and it is listed like
 * any other subject.
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
    chemistry,
  };
}
