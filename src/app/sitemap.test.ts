import { describe, expect, it } from "vitest";

import sitemap from "./sitemap";
import robots from "./robots";
import { getTheoryDomains, type TheorySubject } from "@/server";

const SUBJECTS: TheorySubject[] = ["anatomia", "fizjologia", "biologia", "chemia"];
const entries = sitemap();
const urls = entries.map((e) => e.url);

describe("sitemap", () => {
  it("lists every chapter of every subject", () => {
    let expected = 0;
    for (const subject of SUBJECTS) {
      for (const domain of getTheoryDomains(subject)) {
        for (const section of domain.sections) {
          expected += 1;
          const url = `/theory/${subject}/${section.id}`;
          expect(
            urls.some((u) => u.endsWith(url)),
            `missing ${url}`,
          ).toBe(true);
        }
      }
    }
    // The corpus is four figures; a sitemap that quietly shrank to the static
    // routes would still be a valid document, just an empty promise.
    expect(expected).toBeGreaterThan(1500);
  });

  it("contains no duplicates", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });

  /**
   * `?domain=` selects a chapter on the client and is stripped from the URL
   * immediately afterwards, so every value of it returns the same prerendered
   * document. Listing those would submit a thousand duplicates of three pages.
   */
  it("lists no query-string URLs", () => {
    for (const url of urls) {
      expect(url, url).not.toContain("?");
    }
  });

  it("uses absolute URLs, which is what crawlers require", () => {
    for (const url of urls) {
      expect(url, url).toMatch(/^https?:\/\//);
    }
  });

  it("includes each subject landing page and the site root", () => {
    expect(urls.some((u) => /\/$/.test(u) || u.endsWith(".pl"))).toBe(true);
    for (const subject of SUBJECTS) {
      expect(urls.some((u) => u.endsWith(`/theory/${subject}`)), subject).toBe(true);
    }
  });
});

describe("robots", () => {
  const rules = robots();

  it("points at the sitemap", () => {
    expect(rules.sitemap).toMatch(/\/sitemap\.xml$/);
  });

  it("leaves the whole theory corpus crawlable", () => {
    const rule = Array.isArray(rules.rules) ? rules.rules[0] : rules.rules;
    expect(rule.allow).toBe("/");
    const disallow = [rule.disallow ?? []].flat();
    for (const path of disallow) {
      expect(path.startsWith("/theory"), `blocks ${path}`).toBe(false);
    }
  });

  it("keeps crawlers out of the JSON API", () => {
    const rule = Array.isArray(rules.rules) ? rules.rules[0] : rules.rules;
    expect([rule.disallow ?? []].flat()).toContain("/api/");
  });
});
