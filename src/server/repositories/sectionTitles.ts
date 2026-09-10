import type { TextbookSection } from "../models";

/**
 * Makes repeated chapter titles distinguishable in navigation.
 *
 * The ingestion pipelines split a long topic into page-sized packets, because
 * the source books reprint the topic title as a running header on every page
 * of it. Each packet is then titled from the heading it opens with, so one
 * topic can arrive as four chapters all called "Hybrydyzacja orbitali a
 * symetria cząsteczek" — which is what the sidebar and table of contents were
 * showing.
 *
 * The content behind each is genuinely different, so merging them would lose
 * material and change URLs that are already in the sitemap. Numbering them
 * keeps every chapter addressable and tells the reader these are consecutive
 * parts of one topic rather than a rendering glitch.
 *
 * Only titles that actually repeat are touched; a unique title is returned
 * unchanged, so the common case reads exactly as before.
 */
export function disambiguateSectionTitles(sections: TextbookSection[]): TextbookSection[] {
  const totals = new Map<string, number>();
  for (const section of sections) {
    totals.set(section.title, (totals.get(section.title) ?? 0) + 1);
  }

  const seen = new Map<string, number>();
  return sections.map((section) => {
    const total = totals.get(section.title) ?? 1;
    if (total < 2) return section;

    const ordinal = (seen.get(section.title) ?? 0) + 1;
    seen.set(section.title, ordinal);
    return { ...section, title: `${section.title} (część ${ordinal}/${total})` };
  });
}
