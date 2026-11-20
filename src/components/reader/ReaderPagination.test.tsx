import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import pl from "@/i18n/dictionaries/pl";
import type { ReaderPosition } from "@/server/models";
import { ReaderPagination } from "./ReaderPagination";

vi.mock("@/i18n", () => ({
  useI18n: () => ({
    t: pl,
    n: (val: number) => String(val),
  }),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => React.createElement("a", { href, ...rest }, children),
}));

const BASE_POSITION: ReaderPosition = {
  chapterId: "ch-2",
  title: "Rozdział bieżący",
  order: 2,
  totalChapters: 12,
  volumeId: "vol-1",
  volumeTitle: "Tom 1",
  volumeShortTitle: "Tom 1",
  volumeChapters: [],
  topics: [],
  prev: {
    id: "ch-1",
    title:
      "Bardzo długi tytuł poprzedniego rozdziału z farmakodynamiki i parametrów EC50",
    volumeShortTitle: "Tom 1",
    crossesVolume: false,
  },
  next: {
    id: "ch-3",
    title:
      "Bardzo długi tytuł następnego rozdziału o receptorach i indeksie terapeutycznym w praktyce",
    volumeShortTitle: "Tom 1",
    crossesVolume: false,
  },
};

describe("ReaderPagination", () => {
  it("renders a strict symmetrical 2-column grid with overflow protection classes", () => {
    const html = renderToStaticMarkup(
      React.createElement(ReaderPagination, {
        position: BASE_POSITION,
        basePath: "/theory/farmakologia",
      }),
    );

    expect(html).toContain("max-w-3xl");
    expect(html).toContain("grid-cols-1");
    expect(html).toContain("sm:grid-cols-2");
    expect(html).toContain("min-w-0");
    expect(html).toContain("break-words");
    expect(html).toContain("line-clamp-2");
    expect(html).toContain('rel="prev"');
    expect(html).toContain('rel="next"');
  });

  it("aligns the Next card to the second column on chapter 1 when prev is absent", () => {
    const html = renderToStaticMarkup(
      React.createElement(ReaderPagination, {
        position: { ...BASE_POSITION, order: 1, prev: undefined },
        basePath: "/theory/farmakologia",
      }),
    );

    expect(html).not.toContain('rel="prev"');
    expect(html).toContain('rel="next"');
    expect(html).toContain("sm:col-start-2");
  });
});
