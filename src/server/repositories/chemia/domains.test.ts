import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { chemiaDomains } from "./domains";
import { chemiaTheory as legacyDomains } from "./theory";

/** The pipeline that fills this module. */
const PIPELINE = path.resolve(__dirname, "../../../../fabryka_chemii.py");

describe("chemia repository", () => {
  it("exposes domains with unique ids", () => {
    const ids = chemiaDomains.map((d) => d.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });

  /**
   * The generated volume is added to chemistry, not swapped in for it.
   *
   * `theory.ts` is 5.1 MB of real material across four domains. Losing any of
   * it to a wiring change would be silent.
   */
  it("keeps every existing thematic domain", () => {
    const ids = new Set(chemiaDomains.map((d) => d.id));
    expect(legacyDomains.length).toBeGreaterThan(0);
    for (const domain of legacyDomains) {
      expect(ids.has(domain.id), `lost existing domain ${domain.id}`).toBe(true);
    }
  });

  /**
   * The tags are a contract across two languages.
   *
   * `fabryka_chemii.py` names every file and every exported array after its
   * tag; `domains.ts` reads `${tag}Chapters` back. Nothing at compile time
   * connects the two, so a tag renamed on one side orphans a whole source —
   * the corpus lands on disk and the UI never shows it, with no error.
   */
  it("keeps its tags in step with the pipeline", () => {
    const script = fs.readFileSync(PIPELINE, "utf8");
    const block = script.match(/CZESCI: dict\[str, dict\[str, str\]\] = \{([\s\S]*?)\n\}/);
    expect(block, "CZESCI table not found in fabryka_chemii.py").toBeTruthy();

    const pythonTags = [...block![1].matchAll(/"(chem\d+)":/g)].map((m) => m[1]);
    const tsTags = [
      ...fs
        .readFileSync(path.resolve(__dirname, "domains.ts"), "utf8")
        .matchAll(/tag:\s*"(chem\d+)"/g),
    ].map((m) => m[1]);

    expect(pythonTags.length).toBeGreaterThan(0);
    expect(tsTags).toEqual(pythonTags);
  });
});
