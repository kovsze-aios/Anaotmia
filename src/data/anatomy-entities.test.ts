import { describe, expect, it } from "vitest";
import { findTextbookAnatomyTerms } from "@/lib/anatomyLinks";
import { ANATOMICAL_ENTITIES, findAnatomicalEntityByTerm, getAnatomicalEntity } from "./anatomy-entities";

describe("Anatomical Entities Registry & Textbook Linker", () => {
  it("resolves textbook anatomy terms including serce and nerki", () => {
    const matches = findTextbookAnatomyTerms("Serce pompuje krew przez nerki oraz wątrobę.");
    const targets = matches.map((m) => m.englishName);
    expect(targets).toContain("heart");
    expect(targets).toContain("kidney");
    expect(targets).toContain("liver");
  });

  it("provides detailed Polish and Latin sub-pins on getAnatomicalEntity('heart')", () => {
    const heart = getAnatomicalEntity("heart");
    expect(heart).toBeDefined();
    expect(heart!.pins.length).toBeGreaterThan(0);
    for (const pin of heart!.pins) {
      expect(pin.labelPl.trim().length).toBeGreaterThan(0);
      expect(pin.labelLat.trim().length).toBeGreaterThan(0);
    }
  });

  it("finds entities by Polish inflected forms and keeps all core entities populated", () => {
    expect(Object.keys(ANATOMICAL_ENTITIES).length).toBeGreaterThanOrEqual(16);
    expect(findAnatomicalEntityByTerm("wątrobą")?.meshId).toBe("liver");
    expect(findAnatomicalEntityByTerm("serca")?.meshId).toBe("heart");
  });
});
