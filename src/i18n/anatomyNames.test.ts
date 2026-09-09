import { describe, expect, it } from "vitest";

import {
  translateAnatomyName,
  anatomySearchHaystack,
  hasAnatomyTranslation,
} from "./anatomyNames";
import { ANATOMY_TERMS_PL } from "./anatomy-terms-pl";

describe("translateAnatomyName", () => {
  // Anatomical nomenclature is not interface copy. Latin is the standard a
  // student is examined on and the textbook corpus is Polish in every locale,
  // so the label does not follow the language switcher; gating it meant
  // switching to English silently removed the terminology.
  it("renders Polish and Latin whatever the interface language is", () => {
    for (const locale of ["en", "pl", "de", "fr", "it", "es"] as const) {
      expect(translateAnatomyName("Liver", locale), locale).toBe("Wątroba (Hepar)");
    }
  });

  it("still falls back to English when a term is not in the dictionary", () => {
    expect(translateAnatomyName("Nonexistent structure", "pl")).toBe(
      "Nonexistent structure",
    );
    expect(translateAnatomyName("Nonexistent structure", "en")).toBe(
      "Nonexistent structure",
    );
  });

  it("renders Polish with the Latin term in parentheses", () => {
    expect(translateAnatomyName("Liver", "pl")).toBe("Wątroba (Hepar)");
    expect(translateAnatomyName("Heart", "pl")).toBe("Serce (Cor)");
    expect(translateAnatomyName("femur", "pl")).toBe("Kość udowa (Femur)");
  });

  it("is case-insensitive about the dataset's capitalisation", () => {
    expect(translateAnatomyName("LIVER", "pl")).toBe("Wątroba (Hepar)");
    expect(translateAnatomyName("  Liver  ", "pl")).toBe("Wątroba (Hepar)");
  });

  it("agrees the side adjective with the noun's grammatical gender", () => {
    // feminine — kość
    expect(translateAnatomyName("Left femur", "pl")).toBe("Lewa kość udowa (Femur)");
    expect(translateAnatomyName("Right kidney", "pl")).toBe("Prawa nerka (Ren)");
    // masculine — mięsień
    expect(translateAnatomyName("Left pectoralis major", "pl")).toBe(
      "Lewy mięsień piersiowy większy (Musculus pectoralis major)",
    );
    // neuter — płuco
    expect(translateAnatomyName("Left lung", "pl")).toBe("Lewe płuco (Pulmo)");
    expect(translateAnatomyName("Right lung", "pl")).toBe("Prawe płuco (Pulmo)");
  });

  it("lowercases the base term after a side adjective", () => {
    // "Lewa Kość udowa" would be wrong; only the adjective is capitalised.
    expect(translateAnatomyName("Left femur", "pl")).not.toContain("Kość");
    expect(translateAnatomyName("Left femur", "pl")).toContain("kość");
  });

  it("falls back to English for structures it does not know", () => {
    expect(translateAnatomyName("Gingiva of upper jaw", "pl")).toBe(
      "Gingiva of upper jaw",
    );
    // A side qualifier on an unknown base must not be half-translated.
    expect(translateAnatomyName("Left gingiva of upper jaw", "pl")).toBe(
      "Left gingiva of upper jaw",
    );
    // Compound forms beyond a leading side qualifier are left alone.
    expect(translateAnatomyName("Long head of left triceps brachii", "pl")).toBe(
      "Long head of left triceps brachii",
    );
  });

  it("handles empty input without throwing", () => {
    expect(translateAnatomyName("", "pl")).toBe("");
  });
});

describe("anatomy dictionary integrity", () => {
  it("keys are lowercase and trimmed, or lookups would silently never match", () => {
    for (const key of Object.keys(ANATOMY_TERMS_PL)) {
      expect(key, `key "${key}"`).toBe(key.toLowerCase().trim());
    }
  });

  it("every entry has a Polish term, a Latin term and a gender", () => {
    for (const [key, term] of Object.entries(ANATOMY_TERMS_PL)) {
      expect(term.pl.length, key).toBeGreaterThan(0);
      expect(term.latin.length, key).toBeGreaterThan(0);
      expect(["m", "f", "n"], key).toContain(term.gender);
    }
  });

  it("every entry actually resolves through the interceptor", () => {
    for (const key of Object.keys(ANATOMY_TERMS_PL)) {
      expect(hasAnatomyTranslation(key, "pl"), key).toBe(true);
      expect(hasAnatomyTranslation(`Left ${key}`, "pl"), `Left ${key}`).toBe(true);
    }
  });

  /**
   * The required display contract: `Polska nazwa (Terminus latinus)`.
   *
   * Checked against every entry rather than a sample, because an entry that
   * silently loses its Latin half still renders — it just renders wrong, and
   * only to whoever happens to click that structure.
   */
  it("renders every entry as 'Polish (Latin)'", () => {
    for (const [key, term] of Object.entries(ANATOMY_TERMS_PL)) {
      expect(translateAnatomyName(key), key).toBe(`${term.pl} (${term.latin})`);
      expect(translateAnatomyName(key), key).toMatch(/^[^()]+ \([^()]+\)$/);
    }
  });

  it("never leaves an entry in English", () => {
    for (const key of Object.keys(ANATOMY_TERMS_PL)) {
      expect(translateAnatomyName(key), key).not.toBe(key);
    }
  });

  it("covers the major structures a student meets in the viewer", () => {
    // Measured against the pinned manifest by scripts/audit-atlas-terms.mjs:
    // 403 entries reach 735 of the 2,234 meshes. Guard the dictionary size so
    // a bad merge cannot quietly shrink it back.
    expect(Object.keys(ANATOMY_TERMS_PL).length).toBeGreaterThanOrEqual(380);

    // A spread of what the expansion added, one per system.
    for (const [english, expected] of [
      ["Splenic artery", "Tętnica śledzionowa (Arteria splenica)"],
      ["Portal vein", "Żyła wrotna (Vena portae)"],
      ["Hippocampus", "Hipokamp (Hippocampus)"],
      ["Left piriformis", "Lewy mięsień gruszkowaty (Musculus piriformis)"],
      ["Right first rib", "Prawe żebro pierwsze (Costa prima)"],
      ["Cornea", "Rogówka (Cornea)"],
      ["Rectum", "Odbytnica (Rectum)"],
    ] as const) {
      expect(translateAnatomyName(english), english).toBe(expected);
    }
  });
});

describe("anatomySearchHaystack", () => {
  it("matches the English name in either locale", () => {
    expect(anatomySearchHaystack("Liver", "en")).toContain("liver");
    expect(anatomySearchHaystack("Liver", "pl")).toContain("liver");
  });

  it("also matches the Polish and Latin forms when translated", () => {
    const hay = anatomySearchHaystack("Liver", "pl");
    expect(hay).toContain("wątroba");
    expect(hay).toContain("hepar");
  });

  it("matches a lateral structure by its Polish form", () => {
    expect(anatomySearchHaystack("Left lung", "pl")).toContain("lewe płuco");
  });

  it("is lowercase throughout, so callers can compare a lowercased query", () => {
    const hay = anatomySearchHaystack("Left Femur", "pl");
    expect(hay).toBe(hay.toLowerCase());
  });
});
