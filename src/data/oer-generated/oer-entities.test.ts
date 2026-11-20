import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT_DIR = path.resolve(process.cwd());
const OER_DIR = path.join(ROOT_DIR, "src", "data", "oer-generated");

const UNRENDERED_ENTITY_REGEX =
  /&(?:alpha|beta|gamma|Delta|delta|epsilon|eta|theta|lambda|mu|nu|pi|rho|sigma|Sigma|tau|Phi|chi|omega|nbsp|ndash|mdash|rarr|larr|uarr|darr|le|ge|ne|approx|plusmn|deg|times|minus|middot|radic|int|infin|frac12|langle|rangle|prop|prime|#x27);/g;

const ANY_HTML_ENTITY_REGEX =
  /&(?:[a-zA-Z][a-zA-Z0-9]{1,12}|#[0-9]{2,6}|#x[0-9a-fA-F]{2,6});/g;

function walkDataFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDataFiles(full));
    } else if (entry.name.endsWith(".json") || entry.name.endsWith(".ts")) {
      results.push(full);
    }
  }
  return results;
}

describe("HTML Entity Sanitization & OER Source Hygiene", () => {
  it("contains zero raw HTML entities across src/data/oer-generated/*.json", () => {
    const jsonFiles = fs
      .readdirSync(OER_DIR)
      .filter((f) => f.endsWith(".json"))
      .sort();
    expect(jsonFiles.length).toBeGreaterThan(0);

    for (const fileName of jsonFiles) {
      const content = fs.readFileSync(path.join(OER_DIR, fileName), "utf-8");
      const matches = content.match(ANY_HTML_ENTITY_REGEX) ?? [];
      expect(matches, `Unexpected entities in ${fileName}`).toEqual([]);
    }
  });

  it("contains zero raw HTML entities in courses, PDF overlays, and OER department repo", () => {
    const targets = [
      path.join(ROOT_DIR, "src", "data", "courses.ts"),
      path.join(ROOT_DIR, "src", "data", "cke-exams", "cke-pdf-overlays.json"),
      path.join(
        ROOT_DIR,
        "src",
        "server",
        "repositories",
        "oer-departments",
        "index.ts",
      ),
    ];

    for (const filePath of targets) {
      let content = fs.readFileSync(filePath, "utf-8");
      if (filePath.endsWith(path.join("oer-departments", "index.ts"))) {
        // Exclude the HTML entity decoder's own regex literals in stripHtmlTags().
        content = content
          .split("\n")
          .filter((line) => !line.includes(".replace(/"))
          .join("\n");
      }
      const matches = content.match(ANY_HTML_ENTITY_REGEX) ?? [];
      expect(matches, `Unexpected entities in ${filePath}`).toEqual([]);
    }
  });

  it("contains zero unrendered typographic/Greek HTML entities anywhere in src/data/", () => {
    const dataFiles = walkDataFiles(path.join(ROOT_DIR, "src", "data"));
    for (const filePath of dataFiles) {
      if (filePath.endsWith("oer-entities.test.ts")) continue;
      const content = fs.readFileSync(filePath, "utf-8");
      const matches = content.match(UNRENDERED_ENTITY_REGEX) ?? [];
      expect(matches, `Unrendered entities in ${filePath}`).toEqual([]);
    }
  });

  it("contains zero book emoji or duplicated parenthetical source names in OER repo", () => {
    const oerRepo = fs.readFileSync(
      path.join(
        ROOT_DIR,
        "src",
        "server",
        "repositories",
        "oer-departments",
        "index.ts",
      ),
      "utf-8",
    );
    expect(oerRepo).not.toContain("📚");
    expect(oerRepo).not.toContain(
      "Farmakodynamika (OpenStax Pharmacology for Nurses)",
    );
    expect(oerRepo).not.toContain(
      "Farmakologia ogólna (OpenStax Pharmacology for Nurses)",
    );
  });
});
