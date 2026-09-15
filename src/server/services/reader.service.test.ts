import { describe, expect, it } from "vitest";

import { getReaderPosition, getReaderSpine } from "./reader.service";
import { getTheoryDomains, type TheorySubject } from "./textbook.service";

/**
 * The spine used to be built once over the anatomy repository, because anatomy
 * was the only subject with a reading view. All four read through it now, so
 * the invariants below are checked per subject — and, in the last block, that
 * one subject's spine cannot answer for another's chapters.
 */

const SUBJECTS: TheorySubject[] = ["anatomia", "fizjologia", "biologia", "chemia"];

/** First chapter id of a subject, or undefined if it has no chapters. */
function firstChapterId(subject: TheorySubject): string | undefined {
  for (const domain of getTheoryDomains(subject)) {
    if (domain.sections.length > 0) return domain.sections[0].id;
  }
  return undefined;
}

/** Every chapter id of a subject, in reading order. */
function allChapterIds(subject: TheorySubject): string[] {
  return getTheoryDomains(subject).flatMap((domain) =>
    domain.sections.map((section) => section.id),
  );
}

describe.each(SUBJECTS)("reader spine — %s", (subject) => {
  it("counts every chapter in the subject", () => {
    expect(getReaderSpine(subject).totalChapters).toBe(allChapterIds(subject).length);
  });

  it("lists a non-empty volume set with entry points", () => {
    const { volumes } = getReaderSpine(subject);
    expect(volumes.length).toBeGreaterThan(0);

    for (const volume of volumes) {
      // A volume the drawer can open has to say where to open it.
      if (volume.chapterCount > 0) {
        expect(volume.firstChapterId).toBeTruthy();
      }
    }
  });

  it("carries no chapter bodies into the client projection", () => {
    // The corpora are megabytes of HTML. The spine is titles and counts, and
    // this is what keeps the drawer a cheap client component.
    const serialized = JSON.stringify(getReaderSpine(subject));
    expect(serialized).not.toContain("<p>");
    expect(serialized).not.toContain("htmlContent");
  });
});

describe.each(SUBJECTS)("reader position — %s", (subject) => {
  it("resolves the first chapter with no predecessor", () => {
    const id = firstChapterId(subject);
    expect(id).toBeDefined();

    const position = getReaderPosition(subject, id!);
    expect(position).toBeDefined();
    expect(position!.order).toBe(1);
    expect(position!.prev).toBeUndefined();
  });

  it("chains prev/next consistently across the whole sequence", () => {
    const ids = allChapterIds(subject);

    ids.forEach((id, i) => {
      const position = getReaderPosition(subject, id);
      expect(position, `no position for ${id}`).toBeDefined();
      expect(position!.order).toBe(i + 1);
      // Neighbours are derived from the flattened order, so they must agree
      // with it at every index — including across volume boundaries.
      expect(position!.next?.id).toBe(ids[i + 1]);
      expect(position!.prev?.id).toBe(ids[i - 1]);
    });
  });

  it("marks a jump that leaves the current volume", () => {
    // The last chapter of a volume pages into the next one, and the pagination
    // control says so only if `crossesVolume` is set.
    const volumes = getTheoryDomains(subject).filter((d) => d.sections.length > 0);
    if (volumes.length < 2) return;

    const lastOfFirst = volumes[0].sections[volumes[0].sections.length - 1];
    const position = getReaderPosition(subject, lastOfFirst.id);

    expect(position!.next).toBeDefined();
    expect(position!.next!.crossesVolume).toBe(true);
    expect(position!.next!.id).toBe(volumes[1].sections[0].id);
  });

  it("returns the sibling chapters of the open volume only", () => {
    const id = firstChapterId(subject)!;
    const position = getReaderPosition(subject, id)!;
    const volume = getTheoryDomains(subject).find((d) => d.id === position.volumeId);

    expect(position.volumeChapters).toHaveLength(volume!.sections.length);
    expect(position.volumeChapters.map((c) => c.id)).toEqual(
      volume!.sections.map((s) => s.id),
    );
  });

  it("gives every topic an anchor to scroll to", () => {
    const position = getReaderPosition(subject, firstChapterId(subject)!)!;
    for (const topic of position.topics) {
      expect(topic.anchorId).toBeTruthy();
      expect(topic.title).toBeTruthy();
    }
  });

  it("does not resolve an unknown chapter", () => {
    expect(getReaderPosition(subject, "nie-ma-takiego-rozdzialu")).toBeUndefined();
  });
});

describe("subjects stay separate", () => {
  it("will not resolve one subject's chapter under another", () => {
    for (const subject of SUBJECTS) {
      const own = new Set(allChapterIds(subject));

      for (const other of SUBJECTS) {
        if (other === subject) continue;
        const foreign = allChapterIds(other).find((id) => !own.has(id));
        if (!foreign) continue;

        expect(
          getReaderPosition(subject, foreign),
          `${subject} resolved ${other}'s chapter ${foreign}`,
        ).toBeUndefined();
      }
    }
  });

  it("gives each subject its own totals", () => {
    const totals = SUBJECTS.map((s) => getReaderSpine(s).totalChapters);
    // A shared cache across subjects would hand every one of them the same
    // spine — the bug this keying replaced.
    expect(new Set(totals).size).toBeGreaterThan(1);
  });
});
