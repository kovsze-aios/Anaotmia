import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { SPORTNOTES_COURSES, getCourseBySlug } from "./courses";
import { getFigureById } from "./textbook-figures";
import { getTheorySectionWithDomain, type TheorySubject } from "@/server";

const MANIFEST_PATH = path.resolve(
  process.cwd(),
  "src",
  "data",
  "cke-exams",
  "cke-sheets-manifest.json",
);

describe("SportNotes Courses & Flagship Matura Blueprint", () => {
  it("exposes dedicated Biologia PR and Chemia PR flagship courses under matura-cke track", () => {
    const bio = getCourseBySlug("matura-biologia-rozszerzona");
    const chem = getCourseBySlug("matura-chemia-rozszerzona");

    expect(bio).toBeDefined();
    expect(chem).toBeDefined();
    expect(bio?.track).toBe("matura-cke");
    expect(chem?.track).toBe("matura-cke");
    expect(bio?.modules).toHaveLength(5);
    expect(chem?.modules).toHaveLength(5);
  });

  it("keeps Sport & Health courses cleanly separated under sport-zdrowie track", () => {
    const sportCourses = SPORTNOTES_COURSES.filter(
      (c) => c.track === "sport-zdrowie",
    );
    expect(sportCourses).toHaveLength(3);
  });

  it("equips every Matura lesson with >= 2 CKE traps, >= 1 CKE 1:1 practice link, and recall checklist", () => {
    const maturaCourses = SPORTNOTES_COURSES.filter(
      (c) => c.track === "matura-cke",
    );
    const manifest = JSON.parse(
      fs.readFileSync(MANIFEST_PATH, "utf-8"),
    ) as Record<string, unknown>;

    for (const course of maturaCourses) {
      for (const mod of course.modules) {
        for (const lesson of mod.lessons) {
          expect(
            lesson.ckeTraps?.length ?? 0,
            `${lesson.id} traps`,
          ).toBeGreaterThanOrEqual(2);
          expect(
            lesson.ckePractice?.length ?? 0,
            `${lesson.id} ckePractice`,
          ).toBeGreaterThanOrEqual(1);
          expect(
            lesson.recallChecklist?.length ?? 0,
            `${lesson.id} recallChecklist`,
          ).toBeGreaterThanOrEqual(3);

          for (const link of lesson.ckePractice ?? []) {
            const url = new URL(link.href, "https://sportnotes.pl");
            const arkuszId = url.searchParams.get("arkusz");
            expect(arkuszId, `${lesson.id} arkusz param`).toBeTruthy();
            expect(
              Object.prototype.hasOwnProperty.call(manifest, arkuszId!),
              `Missing CKE sheet in manifest: ${arkuszId}`,
            ).toBe(true);
          }
        }
      }
    }
  });

  it("resolves every referenced figureId and chapter route in every course lesson", () => {
    for (const course of SPORTNOTES_COURSES) {
      for (const mod of course.modules) {
        for (const lesson of mod.lessons) {
          if (lesson.figureId) {
            expect(
              getFigureById(lesson.figureId),
              `Missing figure ${lesson.figureId} in ${lesson.id}`,
            ).toBeDefined();
          }

          const match = lesson.relatedTheoryPath.match(
            /^\/theory\/([^/]+)\/([^/?#]+)$/,
          );
          if (match) {
            const [, subject, chapterId] = match;
            const resolved = getTheorySectionWithDomain(
              subject as TheorySubject,
              chapterId,
            );
            expect(
              resolved,
              `Broken relatedTheoryPath ${lesson.relatedTheoryPath} in ${lesson.id}`,
            ).toBeDefined();
          }
        }
      }
    }
  });
});
