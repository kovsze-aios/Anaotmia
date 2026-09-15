import type {
  ReaderChapter,
  ReaderNeighbour,
  ReaderPosition,
  ReaderSpine,
  ReaderTopic,
  ReaderVolumeSummary,
} from "../models";
import { getTheoryDomains, type TheorySubject } from "./textbook.service";

/**
 * Builds the reading spine for a subject.
 *
 * The ordering is exactly the domain order declared in that subject's
 * repository, flattened across volumes — so paging forward from the last
 * chapter of Tom 1 lands on the first chapter of Tom 2 without the UI knowing
 * anything about volume boundaries.
 *
 * Derived rather than stored: neighbours and indices are a property of the
 * sequence. Writing `prevId`/`nextId` into each generated data file would go
 * stale the first time a chapter was inserted, and the pipeline would have to
 * rewrite every neighbour on each run.
 *
 * Only the open volume's chapters travel to the client. Sending all of them put
 * ~104 kB of titles on every chapter page for a drawer that shows one volume at
 * a time.
 */

interface FlatEntry {
  chapter: ReaderChapter;
  volumeId: string;
  volumeTitle: string;
  volumeShortTitle: string;
}

interface BuiltSpine {
  spine: ReaderSpine;
  flat: FlatEntry[];
  chaptersByVolume: Map<string, ReaderChapter[]>;
}

/**
 * Built per subject and kept.
 *
 * The spine used to be a single cached object over the anatomy repository,
 * because anatomy was the only subject with a reading view. Every subject has
 * one now, and they have different chapters, so the cache is keyed by subject
 * rather than shared.
 */
const cache = new Map<TheorySubject, BuiltSpine>();
const positionCache = new Map<TheorySubject, Map<string, ReaderPosition>>();

function build(subject: TheorySubject): BuiltSpine {
  let order = 0;
  const flat: FlatEntry[] = [];
  const chaptersByVolume = new Map<string, ReaderChapter[]>();
  const volumes: ReaderVolumeSummary[] = [];

  for (const domain of getTheoryDomains(subject)) {
    const chapters = domain.sections.map<ReaderChapter>((section) => ({
      id: section.id,
      title: section.title,
      order: ++order,
    }));

    chaptersByVolume.set(domain.id, chapters);
    volumes.push({
      id: domain.id,
      title: domain.title,
      shortTitle: domain.shortTitle,
      icon: domain.icon,
      chapterCount: chapters.length,
      firstChapterId: chapters[0]?.id,
    });

    for (const chapter of chapters) {
      flat.push({
        chapter,
        volumeId: domain.id,
        volumeTitle: domain.title,
        volumeShortTitle: domain.shortTitle,
      });
    }
  }

  return { spine: { volumes, totalChapters: order }, flat, chaptersByVolume };
}

function built(subject: TheorySubject): BuiltSpine {
  let entry = cache.get(subject);
  if (!entry) {
    entry = build(subject);
    cache.set(subject, entry);
  }
  return entry;
}

/** Volume list for the drawer. Chapters travel with `getReaderPosition`. */
export function getReaderSpine(subject: TheorySubject): ReaderSpine {
  return built(subject).spine;
}

/**
 * Topics inside a chapter.
 *
 * Generated chapters carry an explicit `toc`; the older hand-written ones do
 * not, so their headings are read out of the content blocks instead. Either way
 * a topic is only useful if it has an anchor to scroll to.
 */
function topicsFor(subject: TheorySubject, sectionId: string): ReaderTopic[] {
  for (const domain of getTheoryDomains(subject)) {
    const section = domain.sections.find((s) => s.id === sectionId);
    if (!section) continue;

    if (section.toc?.length) {
      return section.toc.map((t) => ({ anchorId: t.anchorId, title: t.title }));
    }

    return (section.content ?? [])
      .filter((block) => block.type === "heading")
      .map((block) => {
        const title = "text" in block ? block.text : "";
        return {
          anchorId: title
            .toLowerCase()
            .replace(/[^a-z0-9À-ſ]+/g, "-")
            .replace(/^-|-$/g, ""),
          title,
        };
      })
      .filter((t) => t.title && t.anchorId);
  }
  return [];
}

function buildPositions(subject: TheorySubject): Map<string, ReaderPosition> {
  const { spine, flat, chaptersByVolume } = built(subject);

  const toNeighbour = (
    entry: FlatEntry | undefined,
    fromVolumeId: string,
  ): ReaderNeighbour | undefined =>
    entry && {
      id: entry.chapter.id,
      title: entry.chapter.title,
      volumeShortTitle: entry.volumeShortTitle,
      crossesVolume: entry.volumeId !== fromVolumeId,
    };

  const map = new Map<string, ReaderPosition>();
  flat.forEach((entry, i) => {
    map.set(entry.chapter.id, {
      chapterId: entry.chapter.id,
      title: entry.chapter.title,
      order: entry.chapter.order,
      totalChapters: spine.totalChapters,
      volumeId: entry.volumeId,
      volumeTitle: entry.volumeTitle,
      volumeShortTitle: entry.volumeShortTitle,
      volumeChapters: chaptersByVolume.get(entry.volumeId) ?? [],
      topics: topicsFor(subject, entry.chapter.id),
      prev: toNeighbour(flat[i - 1], entry.volumeId),
      next: toNeighbour(flat[i + 1], entry.volumeId),
    });
  });
  return map;
}

/** Position, neighbours, sibling chapters and topics for one chapter. */
export function getReaderPosition(
  subject: TheorySubject,
  chapterId: string,
): ReaderPosition | undefined {
  let positions = positionCache.get(subject);
  if (!positions) {
    positions = buildPositions(subject);
    positionCache.set(subject, positions);
  }
  return positions.get(chapterId);
}
