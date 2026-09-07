import { describe, expect, it } from "vitest";

import {
  translateAnatomyName,
  anatomySearchHaystack,
  hasAnatomyTranslation,
} from "./anatomyNames";
import { ANATOMY_TERMS_PL } from "./anatomy-terms-pl";

describe("translateAnatomyName", () => {
  it("returns the original English string for the English locale", () => {
    expect(translateAnatomyName("Liver", "en")).toBe("Liver");
    expect(translateAnatomyName("Left femur", "en")).toBe("Left femur");
  });

  it("leaves locales without an anatomy dictionary untouched", () => {
    for (const locale of ["de", "fr", "it", "es"] as const) {
      expect(translateAnatomyName("Liver", locale)).toBe("Liver");
    }
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

  it("covers a meaningful baseline of major structures", () => {
    expect(Object.keys(ANATOMY_TERMS_PL).length).toBeGreaterThanOrEqual(50);
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
