import { describe, expect, it } from "vitest";
import {
  BIOLOGY_CKE_TASKS,
  CHEMISTRY_CKE_TASKS,
  buildDefaultAnimatedSteps,
  filterCkeTasks,
  getCkeExamSheets,
  getCkeTasksForChapter,
} from "./index";

describe("1:1 Full CKE Exam Corpus, Media & Animated Walkthroughs", () => {
  it("provides full extracted Biology and Chemistry exam sheets (>20 bundles and >40 subtasks each)", () => {
    expect(BIOLOGY_CKE_TASKS.length).toBeGreaterThan(20);
    expect(CHEMISTRY_CKE_TASKS.length).toBeGreaterThan(20);

    const bioSubtasks = BIOLOGY_CKE_TASKS.flatMap((t) => t.subTasks ?? []);
    const chemSubtasks = CHEMISTRY_CKE_TASKS.flatMap((t) => t.subTasks ?? []);
    expect(bioSubtasks.length).toBeGreaterThan(40);
    expect(chemSubtasks.length).toBeGreaterThan(40);

    expect(BIOLOGY_CKE_TASKS.some((t) => (t.media?.length ?? 0) > 0)).toBe(true);
    expect(CHEMISTRY_CKE_TASKS.some((t) => (t.media?.length ?? 0) > 0)).toBe(true);

    expect(bioSubtasks.some((st) => Boolean(st.interactiveTableData?.rows.length))).toBe(true);
    expect(chemSubtasks.some((st) => Boolean(st.interactiveTableData?.rows.length))).toBe(true);

    for (const sub of [...bioSubtasks.slice(0, 15), ...chemSubtasks.slice(0, 15)]) {
      expect(sub.animatedSteps.length).toBe(4);
      expect(sub.animatedSteps.map((s) => s.phase)).toEqual([
        "analiza-ryciny",
        "czasownik-operacyjny",
        "mechanizm",
        "klucz-cke",
      ]);
    }
  });

  it("groups Biology and Chemistry tasks into ordered full CKE sheets with 60-point exams", () => {
    const bioSheets = getCkeExamSheets("biologia");
    const chemSheets = getCkeExamSheets("chemia");

    expect(bioSheets.length).toBeGreaterThanOrEqual(2);
    expect(chemSheets.length).toBeGreaterThanOrEqual(2);

    const bio2024 = bioSheets.find((s) => s.year === 2024 && s.month === "maj");
    const bio2023 = bioSheets.find((s) => s.year === 2023 && s.month === "maj");
    const chem2024 = chemSheets.find((s) => s.year === 2024 && s.month === "maj");
    const chem2023 = chemSheets.find((s) => s.year === 2023 && s.month === "maj");

    expect(bio2024?.totalPoints).toBe(60);
    expect(bio2023?.totalPoints).toBe(60);
    expect(chem2024?.totalPoints).toBe(60);
    expect(chem2023?.totalPoints).toBe(60);

    expect(bio2024?.pageImageUrls?.length).toBeGreaterThanOrEqual(28);
    expect(chem2024?.pageImageUrls?.length).toBeGreaterThanOrEqual(28);
  });

  it("supports chapter-level matching, subtask search, and default lemo-opuscar steps fallback", () => {
    const bioChTasks = getCkeTasksForChapter({
      subject: "biologia",
      chapterId: "bio1-czesc-17-aminokwasy-budowa-wlasciwosci-i-klasyfikacja",
      chapterTitle: "Aminokwasy i białka",
      sectionCode: "Dział I",
    });
    expect(bioChTasks.length).toBeGreaterThan(0);

    const chemCalcFiltered = filterCkeTasks(CHEMISTRY_CKE_TASKS, {
      formula: "2023",
      year: 2024,
      search: "oblicz",
    });
    expect(chemCalcFiltered.length).toBeGreaterThan(0);

    const fallbackSteps = buildDefaultAnimatedSteps({
      promptHtml: "<p>Wyjaśnij rolę ATP w transporcie aktywnym.</p>",
      operationalVerb: "Wyjaśnij",
      officialAnswerKey: "1 pkt za wskazanie hydrolizy ATP do ADP i Pi dostarczającej energii.",
    });
    expect(fallbackSteps).toHaveLength(4);
    expect(fallbackSteps[3].phase).toBe("klucz-cke");
  });
});
