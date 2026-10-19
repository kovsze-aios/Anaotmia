import { describe, expect, it } from "vitest";
import {
  biologiaMatura2015Theory,
  biologiaMatura2023Theory,
  chemiaMatura2015Theory,
  chemiaMatura2023Theory,
} from "./index";
import { matchesFormulaFilter } from "@/components/matura/CkeFormulaControls";

describe("Matura CKE Textbooks & Curriculum Matrices", () => {
  it("exposes Biology Matura 2023+ and 2015 with all 11 CKE domains (Działy I–XI)", () => {
    expect(biologiaMatura2023Theory.length).toBe(11);
    expect(biologiaMatura2015Theory.length).toBe(11);

    for (const domain of biologiaMatura2023Theory) {
      expect(domain.sections.length).toBeGreaterThan(0);
      for (const section of domain.sections) {
        expect(section.ckeMetadata).toBeDefined();
        expect(section.ckeMetadata?.formulas.length).toBeGreaterThan(0);
        expect(["core", "2015-only", "2023-only"]).toContain(
          section.ckeMetadata?.status
        );
        expect(
          section.pages?.some((p) => p.htmlContent.includes("Wytyczne CKE"))
        ).toBe(true);
      }
    }
  });

  it("exposes Chemistry Matura 2023+ and 2015 with all 13 CKE domains (Działy I–XIII)", () => {
    expect(chemiaMatura2023Theory.length).toBe(13);
    expect(chemiaMatura2015Theory.length).toBe(13);

    for (const domain of chemiaMatura2023Theory) {
      expect(domain.sections.length).toBeGreaterThan(0);
      for (const section of domain.sections) {
        expect(section.ckeMetadata).toBeDefined();
        expect(section.ckeMetadata?.formulas.length).toBeGreaterThan(0);
        expect(["core", "2015-only", "2023-only"]).toContain(
          section.ckeMetadata?.status
        );
        expect(
          section.pages?.some((p) => p.htmlContent.includes("Wytyczne CKE"))
        ).toBe(true);
      }
    }
  });

  it("supports formula filtering across core, 2023-only, and 2015-only topics", () => {
    const bioSections = biologiaMatura2023Theory.flatMap((d) => d.sections);
    const chemSections = chemiaMatura2023Theory.flatMap((d) => d.sections);

    const hasBio2023Only = bioSections.some(
      (s) => s.ckeMetadata?.status === "2023-only"
    );
    const hasBio2015Only = bioSections.some(
      (s) => s.ckeMetadata?.status === "2015-only"
    );
    const hasChem2023Only = chemSections.some(
      (s) => s.ckeMetadata?.status === "2023-only"
    );
    const hasChem2015Only = chemSections.some(
      (s) => s.ckeMetadata?.status === "2015-only"
    );

    expect(hasBio2023Only).toBe(true);
    expect(hasBio2015Only).toBe(true);
    expect(hasChem2023Only).toBe(true);
    expect(hasChem2015Only).toBe(true);

    expect(matchesFormulaFilter("all", ["2015", "2023"], "core")).toBe(true);
    expect(matchesFormulaFilter("2023", ["2023"], "2023-only")).toBe(true);
    expect(matchesFormulaFilter("2023", ["2015"], "2015-only")).toBe(false);
    expect(matchesFormulaFilter("2015", ["2015"], "2015-only")).toBe(true);
    expect(matchesFormulaFilter("2015", ["2023"], "2023-only")).toBe(false);
  });
});
