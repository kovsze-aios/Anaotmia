import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { biologiaDomains } from "./domains";
import { biologiaTheory as legacyDomains } from "./theory";

/** The pipeline that fills this module. */
const PIPELINE = path.resolve(__dirname, "../../../../fabryka_biologii.py");

describe("biologia repository", () => {
  it("exposes domains with unique ids", () => {
    const ids = biologiaDomains.map((d) => d.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });

  /**
   * The series is added to biology, not swapped in for it.
   *
   * `theory.ts` is 3.7 MB of real material — twenty sections across cytologia,
   * genetyka, metabolizm, botanika and fizjologia człowieka. The physiology
   * bootstrap could drop its five headings because they were empty; these are
   * not, and losing them to a wiring change would be silent.
   */
  it("keeps every existing thematic domain", () => {
    const ids = new Set(biologiaDomains.map((d) => d.id));
    expect(legacyDomains.length).toBeGreaterThan(0);
    for (const domain of legacyDomains) {
      expect(ids.has(domain.id), `lost existing domain ${domain.id}`).toBe(true);
    }
  });

  /**
   * The tags are a contract across two languages.
   *
   * `fabryka_biologii.py` names every file and every exported array after its
   * part tag; `domains.ts` reads `${tag}Chapters` back. Nothing at compile time
   * connects the two, so a tag renamed on one side orphans a whole part of the
   * series — the corpus lands on disk and the UI never shows it, with no error
   * anywhere.
   */
  it("keeps its part tags in step with the pipeline", () => {
    const script = fs.readFileSync(PIPELINE, "utf8");
    const block = script.match(/CZESCI: dict\[str, dict\[str, str\]\] = \{([\s\S]*?)\n\}/);
    expect(block, "CZESCI table not found in fabryka_biologii.py").toBeTruthy();

    const pythonTags = [...block![1].matchAll(/"(bio\d+)":/g)].map((m) => m[1]);
    const tsTags = [
      ...fs
        .readFileSync(path.resolve(__dirname, "domains.ts"), "utf8")
        .matchAll(/tag:\s*"(bio\d+)"/g),
    ].map((m) => m[1]);

    expect(pythonTags.length).toBe(4);
    expect(tsTags).toEqual(pythonTags);
  });
});
