import { describe, it, expect } from "vitest";
import { getNavDomains, getSidebarNavigation, toNavDomain } from "./navigation.service";
import { getTheoryDomains, type TheorySubject } from "./textbook.service";

const SUBJECTS: TheorySubject[] = ["anatomia", "biologia", "chemia", "fizjologia"];

describe("toNavDomain", () => {
  it("keeps only navigation fields and drops section content", () => {
    const [domain] = getTheoryDomains("anatomia");
    const nav = toNavDomain(domain);

    expect(nav).toEqual({
      id: domain.id,
      title: domain.title,
      shortTitle: domain.shortTitle,
      icon: domain.icon,
      sections: domain.sections.map((s) => ({ id: s.id, title: s.title })),
    });

    for (const section of nav.sections) {
      expect(Object.keys(section).sort()).toEqual(["id", "title"]);
    }
  });

  it("carries no content payload for any subject", () => {
    for (const subject of SUBJECTS) {
      const serialized = JSON.stringify(getNavDomains(subject));
      expect(serialized).not.toContain('"content"');
      expect(serialized).not.toContain('"academic_detail"');
      expect(serialized).not.toContain('"recallQuestions"');
    }
  });
});

describe("getNavDomains", () => {
  it.each(SUBJECTS)("returns domains with unique ids for %s", (subject) => {
    const ids = getNavDomains(subject).map((d) => d.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(SUBJECTS)("returns unique section ids within each %s domain", (subject) => {
    for (const domain of getNavDomains(subject)) {
      const ids = domain.sections.map((s) => s.id);
      expect(new Set(ids).size, `duplicate section id in ${domain.id}`).toBe(
        ids.length,
      );
    }
  });
});

describe("getSidebarNavigation", () => {
  const nav = getSidebarNavigation();

  it("produces links for every group", () => {
    expect(nav.anatomy.length).toBeGreaterThan(0);
    expect(nav.biology.length).toBeGreaterThan(0);
    expect(nav.chemistryInorganic.length).toBeGreaterThan(0);
    expect(nav.chemistryOrganic.length).toBeGreaterThan(0);
  });

  // Every anatomy domain points at the same route, so `label` — not `href` —
  // is the only field usable as a React key. Guards against a regression that
  // produced duplicate-key warnings.
  it.each([
    ["anatomy", nav.anatomy],
    ["biology", nav.biology],
    ["chemistryInorganic", nav.chemistryInorganic],
    ["chemistryOrganic", nav.chemistryOrganic],
  ] as const)("has unique labels within %s", (_group, links) => {
    const labels = links.map((l) => l.label);
    expect(new Set(labels).size).toBe(labels.length);
  });

  it("splits chemistry without overlap", () => {
    const inorganic = new Set(nav.chemistryInorganic.map((l) => l.label));
    for (const link of nav.chemistryOrganic) {
      expect(inorganic.has(link.label)).toBe(false);
    }
  });
});
