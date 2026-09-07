import { describe, expect, it } from "vitest";

import { buildPaginationItems } from "./advanced-pagination";

/** Renders the item list as "1 … 45 46 47 … 120" so failures read clearly. */
function render(currentPage: number, totalPages: number, siblingCount?: number) {
  return buildPaginationItems(currentPage, totalPages, siblingCount)
    .map((item) => (item.type === "ellipsis" ? "…" : String(item.page)))
    .join(" ");
}

describe("buildPaginationItems", () => {
  it("windows around the current page in the middle of a long range", () => {
    expect(render(46, 120)).toBe("1 … 45 46 47 … 120");
  });

  it("expands the run near the start instead of stranding an ellipsis", () => {
    expect(render(1, 120)).toBe("1 2 3 4 5 … 120");
    expect(render(3, 120)).toBe("1 2 3 4 5 … 120");
  });

  it("mirrors that behaviour near the end", () => {
    expect(render(120, 120)).toBe("1 … 116 117 118 119 120");
    expect(render(118, 120)).toBe("1 … 116 117 118 119 120");
  });

  it("shows every page when they all fit", () => {
    expect(render(3, 7)).toBe("1 2 3 4 5 6 7");
    expect(render(1, 1)).toBe("1");
  });

  it("never renders an ellipsis in place of a single hidden page", () => {
    // Page 4 of 120 hides only page 2..2 on the left if truncated there, so the
    // left side must stay expanded rather than swapping one number for "…".
    expect(render(4, 120)).toBe("1 2 3 4 5 … 120");
    expect(render(117, 120)).toBe("1 … 116 117 118 119 120");
  });

  it("keeps a constant width so the control does not jump as you page", () => {
    const widths = new Set<number>();
    for (let page = 1; page <= 120; page++) {
      widths.add(buildPaginationItems(page, 120).length);
    }
    expect([...widths]).toEqual([7]);
  });

  it("honours a wider sibling count", () => {
    expect(render(46, 120, 2)).toBe("1 … 44 45 46 47 48 … 120");
    expect(render(1, 120, 2)).toBe("1 2 3 4 5 6 7 … 120");
  });

  it("clamps a current page outside the range", () => {
    expect(render(0, 120)).toBe(render(1, 120));
    expect(render(999, 120)).toBe(render(120, 120));
    expect(render(-5, 120)).toBe(render(1, 120));
  });

  it("returns nothing when there are no pages", () => {
    expect(buildPaginationItems(1, 0)).toEqual([]);
    expect(buildPaginationItems(1, -3)).toEqual([]);
  });

  it("never repeats a page number", () => {
    for (const total of [8, 9, 20, 120, 1000]) {
      for (const page of [1, 2, 3, 4, 5, Math.floor(total / 2), total - 1, total]) {
        const pages = buildPaginationItems(page, total)
          .filter((i) => i.type === "page")
          .map((i) => (i as { page: number }).page);
        expect(new Set(pages).size, `page ${page} of ${total}`).toBe(pages.length);
      }
    }
  });

  it("always keeps the page numbers in ascending order", () => {
    for (const page of [1, 2, 46, 60, 119, 120]) {
      const pages = buildPaginationItems(page, 120)
        .filter((i) => i.type === "page")
        .map((i) => (i as { page: number }).page);
      expect([...pages].sort((a, b) => a - b), `page ${page}`).toEqual(pages);
    }
  });

  it("always includes the first, last and current pages", () => {
    for (const page of [1, 2, 7, 46, 99, 119, 120]) {
      const pages = buildPaginationItems(page, 120)
        .filter((i) => i.type === "page")
        .map((i) => (i as { page: number }).page);
      expect(pages, `page ${page}`).toContain(1);
      expect(pages, `page ${page}`).toContain(120);
      expect(pages, `page ${page}`).toContain(page);
    }
  });
});
