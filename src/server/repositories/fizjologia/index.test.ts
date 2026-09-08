import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { fizjologiaTheory } from "./index";

/** The pipeline that fills this module. */
const PIPELINE = path.resolve(__dirname, "../../../../fabryka_fizjologii.py");

describe("fizjologia repository", () => {
  it("exposes domains with unique ids", () => {
    const ids = fizjologiaTheory.map((d) => d.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every domain a title, short title and icon", () => {
    for (const domain of fizjologiaTheory) {
      expect(domain.title.length).toBeGreaterThan(0);
      expect(domain.shortTitle.length).toBeGreaterThan(0);
      expect(domain.icon).toBeTruthy();
    }
  });

  /**
   * The tags are a contract across two languages.
   *
   * `fabryka_fizjologii.py` names every file and every exported array after
   * its chapter tag; `domains.ts` reads `${tag}Chapters` back. Nothing at
   * compile time connects the two, so a tag renamed on one side orphans a
   * whole chapter — the corpus lands on disk and the UI simply never shows
   * it, with no error anywhere. This is the only place that can catch it.
   */
  it("keeps its chapter tags in step with the pipeline", () => {
    const script = fs.readFileSync(PIPELINE, "utf8");
    const block = script.match(/DZIALY: dict\[str, dict\[str, str\]\] = \{([\s\S]*?)\n\}/);
    expect(block, "DZIALY table not found in fabryka_fizjologii.py").toBeTruthy();

    const pythonTags = [...block![1].matchAll(/"(dzial\d+)":/g)].map((m) => m[1]);
    const tsTags = [
      ...fs
        .readFileSync(path.resolve(__dirname, "domains.ts"), "utf8")
        .matchAll(/tag:\s*"(dzial\d+)"/g),
    ].map((m) => m[1]);

    expect(pythonTags.length).toBe(10);
    expect(tsTags).toEqual(pythonTags);
  });
});
