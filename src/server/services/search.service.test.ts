import { describe, it, expect } from "vitest";
import { SEARCH_RESULT_LIMIT, searchTerms } from "./search.service";

describe("searchTerms", () => {
  it("returns nothing for an empty query", () => {
    expect(searchTerms("")).toEqual([]);
    expect(searchTerms("   ".trim())).toEqual([]);
  });

  it("finds sections by title", () => {
    const results = searchTerms("serce");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => /serce/i.test(r.title))).toBe(true);
  });

  it("indexes physiology alongside the other subjects", () => {
    const subjects = new Set(
      ["serce", "komórka", "mięsień", "układ"].flatMap((q) =>
        searchTerms(q, SEARCH_RESULT_LIMIT).map((r) => r.subject),
      ),
    );
    expect(subjects.has("Fizjologia")).toBe(true);
  });

  it("never returns the bulky match-only fields", () => {
    for (const result of searchTerms("komórka")) {
      expect(Object.keys(result).sort()).toEqual([
        "icon",
        "id",
        "subject",
        "title",
        "url",
      ]);
    }
  });

  it("respects the result limit", () => {
    expect(searchTerms("a").length).toBeLessThanOrEqual(SEARCH_RESULT_LIMIT);
    expect(searchTerms("a", 3).length).toBeLessThanOrEqual(3);
  });

  it("points every result at a routable url", () => {
    for (const result of searchTerms("układ")) {
      expect(result.url.startsWith("/theory/")).toBe(true);
    }
  });
});
