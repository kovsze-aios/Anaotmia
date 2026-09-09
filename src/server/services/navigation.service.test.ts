import { describe, it, expect } from "vitest";
import {
  classifyChemistry,
  getNavDomains,
  getSidebarNavigation,
  toNavDomain,
} from "./navigation.service";
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
    expect(nav.physiology.length).toBeGreaterThan(0);
    expect(nav.biology.length).toBeGreaterThan(0);
    expect(nav.chemistryInorganic.length).toBeGreaterThan(0);
    expect(nav.chemistryOrganic.length).toBeGreaterThan(0);
  });

  // Every anatomy domain points at the same route, so `label` — not `href` —
  // is the only field usable as a React key. Guards against a regression that
  // produced duplicate-key warnings.
  it.each([
    ["anatomy", nav.anatomy],
    ["physiology", nav.physiology],
    ["biology", nav.biology],
    ["chemistryInorganic", nav.chemistryInorganic],
    ["chemistryOrganic", nav.chemistryOrganic],
  ] as const)("has unique labels within %s", (_group, links) => {
    const labels = links.map((l) => l.label);
    expect(new Set(labels).size).toBe(labels.length);
  });

  // Physiology has no per-section route, so each link carries its chapter in
  // the query. Without that the drawer would render ten links to one page and
  // the accordion would be decoration.
  it("deep-links every physiology chapter to a distinct domain", () => {
    const targets = nav.physiology.map((l) => l.href);
    expect(targets.length).toBeGreaterThan(1);
    expect(new Set(targets).size).toBe(targets.length);
    for (const href of targets) {
      expect(href.startsWith("/theory/fizjologia?domain=")).toBe(true);
    }
  });

  it("splits chemistry without overlap", () => {
    const inorganic = new Set(nav.chemistryInorganic.map((l) => l.label));
    for (const link of nav.chemistryOrganic) {
      expect(inorganic.has(link.label)).toBe(false);
    }
  });

  // The split keys on words in the title, so it only covers titles phrased to
  // suit it. These are the cases that motivated the third bucket: the genitive
  // title of the generated volume matches neither keyword, and before "other"
  // existed it fell out of the drawer with nothing reporting a problem.
  it.each([
    ["Chemia nieorganiczna — kwasy, zasady, sole", "inorganic"],
    ["Budowa atomu i wiązania chemiczne", "inorganic"],
    ["Stechiometria — podstawy obliczeń chemicznych", "inorganic"],
    ["Chemia organiczna — węglowodory i grupy funkcyjne", "organic"],
    ["Podstawy chemii nieorganicznej — Bielański, część 1", "other"],
  ] as const)("classifies %s as %s", (label, group) => {
    expect(classifyChemistry(label)).toBe(group);
  });

  // Whatever the keyword groups do not claim must still be rendered, so the
  // three buckets have to account for every chemistry domain.
  it("loses no chemistry domain between the three buckets", () => {
    const bucketed = [
      ...nav.chemistryInorganic,
      ...nav.chemistryOrganic,
      ...nav.chemistryOther,
    ].map((l) => l.label);

    expect(new Set(bucketed).size).toBe(bucketed.length);
    expect(bucketed.length).toBe(getTheoryDomains("chemia").length);
  });
});
