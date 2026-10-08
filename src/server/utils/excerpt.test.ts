import { describe, it, expect } from "vitest";
import { makeExcerpt } from "./excerpt";

describe("makeExcerpt", () => {
  it("returns undefined for empty text", () => {
    expect(makeExcerpt("")).toBeUndefined();
    expect(makeExcerpt(undefined)).toBeUndefined();
  });

  it("returns undefined for only whitespace", () => {
    expect(makeExcerpt("   \n\t  ")).toBeUndefined();
  });

  it("collapses whitespace and trims", () => {
    expect(makeExcerpt("  Hello \n\t World  ")).toBe("Hello World");
  });

  it("does not add ellipsis if text fits", () => {
    expect(makeExcerpt("Hello World", 160)).toBe("Hello World");
  });

  it("adds ellipsis if text is truncated", () => {
    const result = makeExcerpt("Hello World", 5);
    expect(result).toBe("Hello…"); // "Hello" is length 5, so "Hello…" is returned
  });

  it("handles long text without whitespace properly", () => {
    expect(makeExcerpt("A".repeat(200), 10)).toBe("A".repeat(10) + "…");
  });

  it("handles edge case of remaining text being only whitespace", () => {
    expect(makeExcerpt("A".repeat(10) + "      ", 10)).toBe("A".repeat(10));
  });

  it("handles remaining text having non-whitespace characters", () => {
    expect(makeExcerpt("A".repeat(10) + " B", 10)).toBe("A".repeat(10) + "…");
  });
});
