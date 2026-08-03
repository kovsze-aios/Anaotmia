import { describe, expect, it } from "vitest";
import {
  formatOcrText,
  generateId,
  uniqueId,
  countWords,
  getSectionWordCount,
} from "./textbookFormatting";
import type { TextbookSection } from "@/server/models";

describe("formatOcrText", () => {
  it("treats CRLF the same as LF (paragraph breaks preserved)", () => {
    expect(formatOcrText("akapit 1\r\n\r\nakapit 2")).toBe("akapit 1\n\nakapit 2");
    expect(formatOcrText("linia 1\r\nlinia 2")).toBe("linia 1 linia 2");
  });

  it("strips OCR page markers", () => {
    expect(formatOcrText("tekst--- STRONA 12 ---tekst")).toBe("teksttekst");
  });

  it("joins single newlines (OCR line wrap) into spaces", () => {
    expect(formatOcrText("pierwsza\ndruga")).toBe("pierwsza druga");
  });

  it("keeps paragraph breaks (double newlines)", () => {
    expect(formatOcrText("akapit 1\n\nakapit 2")).toBe("akapit 1\n\nakapit 2");
  });

  it("trims surrounding whitespace", () => {
    expect(formatOcrText("  tekst  ")).toBe("tekst");
  });

  it("returns an empty string for empty input", () => {
    expect(formatOcrText("")).toBe("");
  });
});

describe("generateId / uniqueId", () => {
  it("slugifies headings into anchor ids", () => {
    expect(generateId("Budowa typowego stawu")).toBe("budowa-typowego-stawu");
  });

  it("strips punctuation but keeps Polish letters", () => {
    expect(generateId("Nerwy czaszkowe (XII) — opis")).toBe("nerwy-czaszkowe-xii-opis");
  });

  it("deduplicates repeated headings", () => {
    const used = new Map<string, number>();
    const first = uniqueId("Budowa", used);
    const second = uniqueId("Budowa", used);
    expect(first).toBe("budowa");
    expect(second).toBe("budowa-2");
    expect(used.get("budowa")).toBe(2);
  });
});

describe("countWords", () => {
  it("counts words separated by various whitespace", () => {
    expect(countWords("jeden dwa\ttrzy\ncztery\rdziewięć")).toBe(5);
  });

  it("treats non-breaking space as whitespace", () => {
    expect(countWords("jeden\u00a0dwa\u00a0trzy")).toBe(3);
  });

  it("ignores leading and trailing whitespace", () => {
    expect(countWords("  jeden dwa  ")).toBe(2);
  });

  it("returns 0 for empty strings", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
  });
});

describe("getSectionWordCount", () => {
  const base: TextbookSection = {
    id: "test",
    title: "Test",
    content: [],
    recallQuestions: [],
  };

  it("counts summary, detail, sources and content together", () => {
    const section: TextbookSection = {
      ...base,
      summary: "jeden dwa",
      academic_detail: "trzy cztery",
      academic_sources: [{ title: "Bochenek", content: "pięć sześć" }],
      content: [
        { type: "paragraph", text: "siedem osiem" },
        { type: "heading", level: 3, text: "dziewięć" },
        { type: "list", items: ["nie liczone"] },
      ],
    };
    expect(getSectionWordCount(section)).toBe(9);
  });

  it("ignores undefined optional fields", () => {
    expect(getSectionWordCount(base)).toBe(0);
  });
});
