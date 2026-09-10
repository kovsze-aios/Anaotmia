import { describe, expect, it } from "vitest";

import { LINKABLE_TERM_COUNT, findAnatomyTerms } from "./anatomyLinks";

const surfaces = (text: string) => findAnatomyTerms(text).map((m) => m.surface);
const names = (text: string) => findAnatomyTerms(text).map((m) => m.englishName);

describe("findAnatomyTerms", () => {
  it("finds a structure in its dictionary form", () => {
    expect(surfaces("Wątroba jest największym gruczołem.")).toEqual(["Wątroba"]);
    expect(names("Wątroba jest największym gruczołem.")).toEqual(["liver"]);
  });

  /**
   * The reason a plain substring search is not enough: "Czaszka" occurs 41
   * times in the anatomy corpus and never once in the nominative.
   */
  it("finds inflected forms, which is how the corpus actually reads", () => {
    expect(surfaces("Podstawa czaszki jest nierówna.")).toEqual(["czaszki"]);
    expect(names("Podstawa czaszki jest nierówna.")).toEqual(["skull"]);
    expect(surfaces("Badanie wątroby i śledziony.")).toEqual(["wątroby", "śledziony"]);
  });

  it("matches multi-word terms whole rather than by their first word", () => {
    expect(surfaces("Rdzeń kręgowy biegnie w kanale.")).toEqual(["Rdzeń kręgowy"]);
    expect(names("Żyła główna górna uchodzi do serca.")).toEqual(["superior vena cava"]);
  });

  /**
   * Polish makes adjectives from the same stem. "czaszk-" + "owe" is
   * *cranial*, not *skull*; linking it would point an adjective at a mesh.
   */
  it("rejects adjectives derived from a term's stem", () => {
    expect(surfaces("Nerwy czaszkowe wychodzą z mózgowia")).not.toContain("czaszkowe");
    expect(surfaces("mięsień żuchwowo-gnykowy")).not.toContain("żuchwowo");
    // but a term that is itself adjectival still matches
    expect(surfaces("Pęcherz moczowy leży w miednicy")).toContain("Pęcherz moczowy");
  });

  /**
   * Words that mean the structure and something else at least as often. In a
   * textbook "jądro" is far more likely a brain or cell nucleus than a testis,
   * and sending a reader to a 3D testis from a paragraph about the caudate
   * nucleus is worse than not linking at all.
   */
  it("never links a word whose Polish meaning is ambiguous", () => {
    for (const text of [
      "Jądro tej struktury jest wyraźne.",
      "Most zbudowany jest z włókien.",
      "Wyspa jest ukryta w bruździe.",
      "Skorupa otacza tę warstwę.",
      "Trzon ma kształt trójścienny.",
    ]) {
      expect(findAnatomyTerms(text), text).toEqual([]);
    }
  });

  /**
   * A multi-word term built on an ambiguous word is itself unambiguous, so it
   * still links: "jądro" alone could be anything, "Jądro ogoniaste" is the
   * caudate nucleus and nothing else.
   */
  it("still links an unambiguous term built on an ambiguous word", () => {
    expect(names("Jądro ogoniaste leży w ścianie komory bocznej.")).toContain(
      "caudate nucleus",
    );
  });

  /**
   * Known limit, recorded rather than worked around. Polish palatalises the
   * stem in some cases — "czaszka" becomes "czaszce" in the locative, k to c —
   * and stem matching cannot follow that. Those occurrences go unlinked. The
   * feature is a way in to the 3D model, so a missed link costs a reader
   * nothing; a wrong one would cost them trust.
   */
  it("misses stem-alternating cases, and that is the safe direction to fail", () => {
    expect(surfaces("W czaszce mieści się mózgowie.")).toEqual(["mózgowie"]);
  });

  it("returns matches in order and never overlapping", () => {
    const found = findAnatomyTerms(
      "Wątroba, trzustka i śledziona leżą w jamie brzusznej.",
    );
    expect(found.map((m) => m.pl)).toEqual(["Wątroba", "Trzustka", "Śledziona"]);
    for (let i = 1; i < found.length; i += 1) {
      expect(found[i].start).toBeGreaterThanOrEqual(found[i - 1].end);
    }
  });

  it("does not match inside a longer word", () => {
    expect(findAnatomyTerms("sercowaty")).toEqual([]);
    expect(findAnatomyTerms("przedsercowy")).toEqual([]);
  });

  /**
   * Hydration depends on this: the server and the client both run the parser
   * over the same string and must produce the same tree.
   */
  it("is deterministic", () => {
    const text = "Wątroba, czaszki i rdzeń kręgowy oraz miednica.";
    expect(findAnatomyTerms(text)).toEqual(findAnatomyTerms(text));
  });

  it("carries both the Polish and Latin term for the label", () => {
    const [match] = findAnatomyTerms("Trzustka leży zaotrzewnowo.");
    expect(match.pl).toBe("Trzustka");
    expect(match.latin).toBe("Pancreas");
  });

  it("handles empty and term-free input", () => {
    expect(findAnatomyTerms("")).toEqual([]);
    expect(findAnatomyTerms("Reakcja przebiega w roztworze wodnym.")).toEqual([]);
  });

  it("recognises a useful share of the dictionary", () => {
    expect(LINKABLE_TERM_COUNT).toBeGreaterThan(300);
  });
});
