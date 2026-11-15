import type {
  NavDomain,
  SidebarNavigation,
  TextbookDomain,
} from "../models";
import {
  biologiaTheory,
  chemiaTheory,
  fizjologiaTheory,
  getDomains,
  biologiaMatura2023Theory,
  chemiaMatura2023Theory,
  fizykaTheory,
  matematykaTheory,
  biochemiaTheory,
  neurobiologiaTheory,
  farmakologiaTheory,
  informatykaTheory,
} from "../repositories";
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
    sections: domain.sections.map((section) =>
      section.ckeMetadata
        ? {
            id: section.id,
            title: section.title,
            ckeStatus: section.ckeMetadata.status,
            tier: section.ckeMetadata.tier,
            formulas: section.ckeMetadata.formulas,
            requirementCodes: section.ckeMetadata.requirementCodes,
          }
        : {
            id: section.id,
            title: section.title,
          },
    ),
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

  const maturaBiology = [
    {
      href: "/theory/biologia-matura-2023",
      label: "🟢 Biologia — Nowa Matura (Formuła 2023+)",
      badge: "NOWA 2023+",
      formula: "2023" as const,
    },
    {
      href: "/theory/biologia-matura-2015",
      label: "🟡 Biologia — Matura Formuła 2015",
      badge: "FORMUŁA 2015",
      formula: "2015" as const,
    },
    ...biologiaMatura2023Theory.map((domain) => {
      const first = domain.sections[0];
      return {
        href: first
          ? `/theory/biologia-matura-2023/${first.id}`
          : "/theory/biologia-matura-2023",
        label: `${domain.icon ?? "🧬"} ${domain.shortTitle}`,
      };
    }),
  ];

  const maturaChemistry = [
    {
      href: "/theory/chemia-matura-2023",
      label: "🟢 Chemia — Nowa Matura (Formuła 2023+)",
      badge: "NOWA 2023+",
      formula: "2023" as const,
    },
    {
      href: "/theory/chemia-matura-2015",
      label: "🟡 Chemia — Matura Formuła 2015",
      badge: "FORMUŁA 2015",
      formula: "2015" as const,
    },
    ...chemiaMatura2023Theory.map((domain) => {
      const first = domain.sections[0];
      return {
        href: first
          ? `/theory/chemia-matura-2023/${first.id}`
          : "/theory/chemia-matura-2023",
        label: `${domain.icon ?? "⚗️"} ${domain.shortTitle}`,
      };
    }),
  ];

  const toDepartmentLinks = (subject: string, domains: TextbookDomain[]) =>
    domains.map((domain) => {
      const first = domain.sections[0];
      return {
        href: first ? `/theory/${subject}/${first.id}` : `/theory/${subject}`,
        label: `${domain.icon ?? "📚"} ${domain.shortTitle}`,
      };
    });

  return {
    anatomy,
    physiology,
    biology,
    chemistry,
    maturaBiology,
    maturaChemistry,
    physics: toDepartmentLinks("fizyka", fizykaTheory),
    mathematics: toDepartmentLinks("matematyka", matematykaTheory),
    biochemistry: toDepartmentLinks("biochemia", biochemiaTheory),
    neurobiology: toDepartmentLinks("neurobiologia", neurobiologiaTheory),
    pharmacology: toDepartmentLinks("farmakologia", farmakologiaTheory),
    informatics: toDepartmentLinks("informatyka", informatykaTheory),
  };
}

