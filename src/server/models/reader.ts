/**
 * View models for the e-reader (book viewer) reading flow.
 *
 * Like `navigation.ts`, these are deliberately light projections. The textbook
 * corpus is ~3.7 MB of HTML across 796 chapters; the reader chrome needs ids,
 * titles and ordering, never content. Keeping that separation is what lets the
 * table-of-contents drawer be a client component without dragging the corpus
 * into the browser bundle.
 *
 * Three levels, matching how the printed set is organised:
 *
 *   Tom (volume)      → a `TextbookDomain`
 *     Rozdział (chapter) → a `TextbookSection`, and one route
 *       Temat (topic)      → a heading inside that chapter, an in-page anchor
 *
 * The route unit is the chapter, so paging left/right moves chapter to chapter
 * and crosses volume boundaries seamlessly; topics are anchors within the page.
 */

/** A heading inside a chapter — an in-page anchor target. */
export interface ReaderTopic {
  /** Anchor id, matching the `id` attribute in the chapter's HTML. */
  anchorId: string;
  title: string;
}

/** One chapter: a single route in the reading sequence. */
export interface ReaderChapter {
  id: string;
  title: string;
  /** 1-based position in the whole reading sequence, across all volumes. */
  order: number;
}

/**
 * A volume as the drawer lists it, without its chapters.
 *
 * Shipping every volume's chapter list put all 796 titles on every chapter
 * page and cost ~104 kB of payload. The drawer only ever expands one volume at
 * a time, so other volumes carry just a count and an entry point; opening one
 * navigates to its first chapter, which is where its chapters get sent.
 */
export interface ReaderVolumeSummary {
  id: string;
  title: string;
  shortTitle: string;
  icon?: string;
  chapterCount: number;
  /** Entry point used when the reader opens a volume they are not in. */
  firstChapterId?: string;
}

/** The book's volume list. Chapters for the open volume come with the position. */
export interface ReaderSpine {
  volumes: ReaderVolumeSummary[];
  totalChapters: number;
}

/** Where a neighbouring chapter sits, for the prev/next controls. */
export interface ReaderNeighbour {
  id: string;
  title: string;
  /** Shown when the jump crosses into a different volume. */
  volumeShortTitle: string;
  crossesVolume: boolean;
}

/**
 * Everything the reader chrome needs about the chapter currently open.
 *
 * `prev`/`next` are resolved server-side from the global ordering, which is why
 * neither the chapter records nor the 796 generated data files carry
 * `prevTopicId`/`nextTopicId` of their own: neighbours are a property of the
 * sequence, not of a chapter, and hand-maintaining them across 796 files would
 * desynchronise the first time a chapter was inserted or reordered.
 */
export interface ReaderPosition {
  chapterId: string;
  title: string;
  /** 1-based index of this chapter across the whole book. */
  order: number;
  totalChapters: number;
  volumeId: string;
  volumeTitle: string;
  volumeShortTitle: string;
  /** Chapters of the volume being read — the only expanded level in the drawer. */
  volumeChapters: ReaderChapter[];
  /** Headings inside this chapter, for the drawer's third level. */
  topics: ReaderTopic[];
  prev?: ReaderNeighbour;
  next?: ReaderNeighbour;
}
