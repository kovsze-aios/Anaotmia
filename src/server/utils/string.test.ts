import { describe, it, expect } from "vitest";
import { makeExcerpt } from "./string";

describe("makeExcerpt", () => {
  it("returns undefined for empty text", () => {
    expect(makeExcerpt()).toBeUndefined();
    expect(makeExcerpt("")).toBeUndefined();
    expect(makeExcerpt("   ")).toBeUndefined();
  });

  it("cleans continuous whitespace to a single space", () => {
    expect(makeExcerpt("hello   world")).toBe("hello world");
    expect(makeExcerpt(" hello \n world ")).toBe("hello world");
  });

  it("truncates and appends ellipsis if over max", () => {
    expect(makeExcerpt("hello world", 5)).toBe("hello…");
  });

  it("does not append ellipsis if exact max", () => {
    expect(makeExcerpt("hello world", 11)).toBe("hello world");
  });

  it("handles whitespace at the truncation boundary correctly", () => {
    expect(makeExcerpt("hello   world", 6)).toBe("hello…");
  });
});
