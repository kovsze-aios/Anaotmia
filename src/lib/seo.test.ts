import { describe, expect, it } from "vitest";

import type { TextbookSection } from "@/server/models";
import {
  META_DESCRIPTION_LIMIT,
  absoluteUrl,
  chapterDescription,
  toPlainText,
  truncateOnWord,
} from "./seo";

function section(overrides: Partial<TextbookSection>): TextbookSection {
  return {
    id: "x",
    title: "X",
    content: [],
    recallQuestions: [],
    ...overrides,
  } as TextbookSection;
}

describe("absoluteUrl", () => {
  it("produces an absolute URL either way the path is written", () => {
    expect(absoluteUrl("/theory")).toMatch(/^https?:\/\/.+\/theory$/);
    expect(absoluteUrl("theory")).toBe(absoluteUrl("/theory"));
  });
});

describe("toPlainText", () => {
  it("strips markup and collapses whitespace", () => {
    expect(toPlainText("<p>Serce  <strong>bije</strong>.</p>\n<p>Dalej.</p>")).toBe(
      "Serce bije . Dalej.",
    );
  });
});

describe("truncateOnWord", () => {
  it("leaves short text alone and adds no ellipsis", () => {
    expect(truncateOnWord("Krótki opis.", 50)).toBe("Krótki opis.");
  });

  it("cuts on a word boundary rather than mid-word", () => {
    const out = truncateOnWord("Kość udowa jest najdłuższą kością szkieletu", 20);
    expect(out.endsWith("…")).toBe(true);
    expect(out.length).toBeLessThanOrEqual(21);
    // The last kept token must be a whole word from the input.
    const lastWord = out.slice(0, -1).trim().split(" ").pop()!;
    expect("Kość udowa jest najdłuższą kością szkieletu".split(" ")).toContain(lastWord);
  });
});

describe("chapterDescription", () => {
  it("prefers the chapter's own summary", () => {
    expect(chapterDescription(section({ summary: "Serce jest pompą mięśniową." }))).toBe(
      "Serce jest pompą mięśniową.",
    );
  });

  it("falls back to the first page body when there is no summary", () => {
    expect(
      chapterDescription(
        section({
          pages: [{ pageNumber: 1, htmlContent: "<p>Wątroba leży pod przeponą.</p>" }],
        }),
      ),
    ).toBe("Wątroba leży pod przeponą.");
  });

  /**
   * The whole point of drawing from content: a description built from the
   * title is identical boilerplate across every page, and search engines
   * discard it in favour of a snippet of their own choosing.
   */
  it("never exceeds what a search engine will show", () => {
    const long = section({ summary: "Zdanie o anatomii. ".repeat(40) });
    const out = chapterDescription(long);
    expect(out.length).toBeLessThanOrEqual(META_DESCRIPTION_LIMIT + 1);
    expect(out.endsWith("…")).toBe(true);
  });

  it("returns an empty string rather than throwing on an empty chapter", () => {
    expect(chapterDescription(section({}))).toBe("");
  });
});
