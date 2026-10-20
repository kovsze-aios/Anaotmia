import { describe, it, expect } from "vitest";
import { makeExcerpt } from "./excerpt";

describe("makeExcerpt", () => {
  it("returns undefined for empty or whitespace-only strings", () => {
    expect(makeExcerpt("")).toBeUndefined();
    expect(makeExcerpt(undefined)).toBeUndefined();
    expect(makeExcerpt("   ")).toBeUndefined();
    expect(makeExcerpt("\n\t  ")).toBeUndefined();
  });

  it("trims leading and trailing whitespace", () => {
    expect(makeExcerpt("  hello  ")).toBe("hello");
  });

  it("collapses multiple internal whitespaces to a single space", () => {
    expect(makeExcerpt("hello   world\n\t!")).toBe("hello world !");
  });

  it("does not truncate if under or equal to max length", () => {
    expect(makeExcerpt("0123456789", 10)).toBe("0123456789");
    expect(makeExcerpt("123456789", 10)).toBe("123456789");
  });

  it("truncates and adds ellipsis if over max length", () => {
    expect(makeExcerpt("0123456789A", 10)).toBe("0123456789…");
    expect(makeExcerpt("hello world this is a test", 11)).toBe("hello world…");
  });

  it("handles whitespace at truncation boundary properly", () => {
    // If the 10th char is a space, and there's more text, it shouldn't leave a trailing space
    // e.g. "012345678 9" max=10 -> "012345678 " (without ellipsis) if no more text, but there is "9".
    // 10 chars: "012345678 " -> trailing space removed, add ellipsis
    expect(makeExcerpt("012345678 9", 10)).toBe("012345678…");
  });

  it("does not add ellipsis if trailing text is only whitespace", () => {
    expect(makeExcerpt("0123456789   ", 10)).toBe("0123456789");
  });
});
