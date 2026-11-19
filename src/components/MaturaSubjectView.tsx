"use client";

import Link from "next/link";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Home } from "lucide-react";
import { ActiveRecall } from "@/components/ActiveRecall";
import { CkeSolvedPdfSheetViewer } from "@/components/matura/CkeExamTasksSection";
import { getCkeExamSheets } from "@/data/cke-exams";
import type { CkeExamSheet } from "@/types/curriculum";
import type { MaturaYearRecord } from "@/server/models";
import { HIDE_SCROLLBAR } from "@/lib/utils";

export interface MaturaSubjectViewProps {
  /** Heading shown in the sidebar, e.g. "🧬 Biologia". */
  sidebarTitle: string;
  /** Subject name used in the content heading, e.g. "Biologia". */
  subjectName: string;
  /** Supplied by the server page — this component never reads data itself. */
  records: MaturaYearRecord[];
}

type UnifiedExamEntry =
  | {
      kind: "cke-sheet";
      id: string;
      year: number;
      month: string;
      label: string;
      shortLabel: string;
      badge: string;
      sheet: CkeExamSheet;
    }
  | {
      kind: "legacy-record";
      id: string;
      year: number;
      month: string;
      label: string;
      shortLabel: string;
      badge: string;
      record: MaturaYearRecord;
    };

function formatSectionLabel(sectionId: string): string {
  const m = sectionId.match(/dzial-(i+|v|x|iv|vi+|ix|xi+)/i);
  if (!m) return sectionId;
  return `Dział ${m[1].toUpperCase()}`;
}

function MaturaSubjectViewInner({
  sidebarTitle,
  subjectName,
  records,
}: MaturaSubjectViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const subjectKey: "biologia" | "chemia" = subjectName
    .toLowerCase()
    .includes("chem")
    ? "chemia"
    : "biologia";

  const ckeSheets = useMemo(() => getCkeExamSheets(subjectKey), [subjectKey]);

  const entries = useMemo<UnifiedExamEntry[]>(() => {
    const sheetEntries: UnifiedExamEntry[] = ckeSheets.map((sheet) => ({
      kind: "cke-sheet",
      id: sheet.id,
      year: sheet.year,
      month: sheet.month,
      label: `${sheet.year} — ${sheet.month} (Formuła ${sheet.formula})`,
      shortLabel: `${sheet.year} (${sheet.month}) • ${sheet.totalPoints} pkt`,
      badge: `1:1 • ${sheet.totalPoints} pkt`,
      sheet,
    }));

    const legacyEntries: UnifiedExamEntry[] = records.map((record) => ({
      kind: "legacy-record",
      id: `legacy-${record.year}-${record.month}`,
      year: record.year,
      month: record.month,
      label: `${record.year} — ${record.month} (Archiwum CKE)`,
      shortLabel: `${record.year} — ${record.month}`,
      badge: `${record.questions.length} zad.`,
      record,
    }));

    return [...sheetEntries, ...legacyEntries];
  }, [ckeSheets, records]);

  const sheetParam = searchParams.get("arkusz");
  const yearParamRaw = searchParams.get("rok");
  const yearParam = yearParamRaw ? Number(yearParamRaw) : NaN;

  const selectedEntry: UnifiedExamEntry | undefined = useMemo(() => {
    if (sheetParam) {
      const byId = entries.find((e) => e.id === sheetParam);
      if (byId) return byId;
    }
    if (Number.isInteger(yearParam)) {
      const byYear = entries.find((e) => e.year === yearParam);
      if (byYear) return byYear;
    }
    return entries[0];
  }, [entries, sheetParam, yearParam]);

  const topicParam = searchParams.get("dzial");
  const [filterTopic, setFilterTopic] = useState<string | null>(topicParam);

  // Keep topic filter in sync with browser back/forward
  useEffect(() => {
    setFilterTopic(topicParam);
  }, [topicParam]);

  // Normalise URL on first visit so selected exam is shareable
  useEffect(() => {
    if (!selectedEntry) return;
    const hasArkusz = searchParams.has("arkusz");
    const hasRok = searchParams.has("rok");
    if (!hasArkusz && !hasRok) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("arkusz", selectedEntry.id);
      params.set("rok", String(selectedEntry.year));
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, selectedEntry, router]);

  const selectEntry = useCallback(
    (entry: UnifiedExamEntry) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("arkusz", entry.id);
      params.set("rok", String(entry.year));
      params.delete("dzial");
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const changeTopic = useCallback(
    (topic: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (topic) params.set("dzial", topic);
      else params.delete("dzial");
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const activeSheet =
    selectedEntry?.kind === "cke-sheet" ? selectedEntry.sheet : undefined;
  const activeLegacy =
    selectedEntry?.kind === "legacy-record" ? selectedEntry.record : undefined;

  // Sidebar topic categories (CKE Działy for 1:1 sheets, or legacy topicCategory)
  const topics = useMemo(() => {
    if (activeSheet) {
      const set = new Set<string>();
      for (const task of activeSheet.tasks) {
        for (const tid of task.relatedTopicIds) {
          set.add(formatSectionLabel(tid));
        }
      }
      return Array.from(set);
    }
    if (activeLegacy) {
      return [...new Set(activeLegacy.questions.map((q) => q.topicCategory))];
    }
    return [];
  }, [activeSheet, activeLegacy]);

  const filteredSheetTasks = useMemo(() => {
    if (!activeSheet) return [];
    if (!filterTopic) return activeSheet.tasks;
    return activeSheet.tasks.filter((t) =>
      t.relatedTopicIds.some((id) => formatSectionLabel(id) === filterTopic),
    );
  }, [activeSheet, filterTopic]);

  const filteredLegacyQuestions = useMemo(() => {
    if (!activeLegacy) return [];
    return filterTopic
      ? activeLegacy.questions.filter((q) => q.topicCategory === filterTopic)
      : activeLegacy.questions;
  }, [activeLegacy, filterTopic]);

  const selectedExamLabel = selectedEntry
    ? selectedEntry.kind === "cke-sheet"
      ? `Matura ${selectedEntry.year} (${selectedEntry.month}, Formuła ${selectedEntry.sheet.formula})`
      : `Matura ${selectedEntry.year} (${selectedEntry.month})`
    : `Arkusze CKE`;

  return (
    <div className="matura-layout">
      {/* Sidebar */}
      <aside className={`matura-sidebar ${HIDE_SCROLLBAR} overscroll-contain`}>
        <div className="matura-sidebar__header flex-col items-stretch gap-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              title="Wróć na stronę główną platformy"
            >
              <Home className="size-3.5" aria-hidden="true" />
              Strona główna
            </Link>
            <Link
              href="/matura"
              className="focus-ring rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            >
              ← Matura
            </Link>
          </div>
          <h2>{sidebarTitle}</h2>
        </div>

        {/* Year / 1:1 Sheet selector */}
        <div className="matura-sidebar__section">
          <h3 className="matura-sidebar__label">Wybierz arkusz / rok</h3>
          <div className="matura-sidebar__year-list">
            {entries.map((entry) => {
              const active = selectedEntry?.id === entry.id;
              return (
                <button
                  key={entry.id}
                  type="button"
                  className={`matura-sidebar__year-btn focus-ring flex items-center justify-between gap-2 ${
                    active ? "matura-sidebar__year-btn--active" : ""
                  }`}
                  onClick={() => selectEntry(entry)}
                >
                  <span className="truncate">{entry.label}</span>
                  <span
                    className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-mono ${
                      entry.kind === "cke-sheet"
                        ? "border border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                        : "border border-zinc-200 bg-white text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                    }`}
                  >
                    {entry.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic filter */}
        <div className="matura-sidebar__section">
          <h3 className="matura-sidebar__label">Filtruj według działu</h3>
          <button
            type="button"
            className={`matura-sidebar__topic-btn focus-ring ${
              filterTopic === null ? "matura-sidebar__topic-btn--active" : ""
            }`}
            onClick={() => changeTopic(null)}
          >
            Wszystkie ({activeSheet ? activeSheet.tasks.length : activeLegacy?.questions.length ?? 0})
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className={`matura-sidebar__topic-btn focus-ring ${
                filterTopic === topic ? "matura-sidebar__topic-btn--active" : ""
              }`}
              onClick={() => changeTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Metadata & Global Nav shortcuts */}
        <div className="matura-sidebar__info space-y-3">
          {activeSheet ? (
            <div>
              <p className="matura-sidebar__exam-code">
                Arkusz: {activeSheet.symbol ?? activeSheet.id}
              </p>
              <p className="matura-sidebar__question-count">
                Wiązek: {filteredSheetTasks.length} • Zadania:{" "}
                {activeSheet.totalTasks} • Suma: {activeSheet.totalPoints} pkt
              </p>
            </div>
          ) : activeLegacy ? (
            <div>
              <p className="matura-sidebar__exam-code">
                Arkusz: {activeLegacy.examCode}
              </p>
              <p className="matura-sidebar__question-count">
                Liczba zadań: {filteredLegacyQuestions.length}
              </p>
            </div>
          ) : null}

          <div className="flex flex-col gap-1.5 border-t border-zinc-200 pt-3 dark:border-zinc-800/80">
            <Link
              href={`/theory/${subjectKey}-matura-2023`}
              className="focus-ring rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-xs text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            >
              📘 Podręcznik {subjectName} 2023+
            </Link>
            <Link
              href="/atlas"
              className="focus-ring rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-xs text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            >
              🫀 Interaktywny Atlas 3D Pro
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="matura-content !w-full !max-w-6xl pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="matura-content__inner">
          {/* Unified Breadcrumb Navigation Bar matching TheoryReaderPage */}
          <nav aria-label="Okruszki" className="mb-3 w-full text-sm">
            <ol className="flex flex-wrap items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Strona główna
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/matura"
                  className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Trening Maturalny
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/matura/${subjectKey}`}
                  className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {subjectName}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="truncate font-medium text-zinc-800 dark:text-zinc-200"
              >
                {selectedExamLabel}
              </li>
            </ol>
          </nav>

          <h1 className="matura-content__title">
            {subjectName} — {selectedExamLabel}
          </h1>
          <p className="matura-content__subtitle">
            {activeSheet
              ? `Kompletny arkusz CKE 1:1 (${activeSheet.totalPoints} pkt, ${activeSheet.totalTasks} zadań) z oryginalnymi stronami PDF i naniesionymi rozwiązaniami.`
              : "Kliknij zadanie, aby odsłonić oficjalną odpowiedź z klucza CKE."}
          </p>

          {activeSheet ? (
            filteredSheetTasks.length === 0 ? (
              <div className="matura-empty">
                <p>
                  Brak zadań spełniających kryteria w tym arkuszu. Wyczyść filtr lub wybierz inny arkusz.
                </p>
              </div>
            ) : (
              <CkeSolvedPdfSheetViewer
                sheet={activeSheet}
                filterTasks={filteredSheetTasks}
              />
            )
          ) : filteredLegacyQuestions.length === 0 ? (
            <div className="matura-empty">
              <p>
                Brak zadań dla tego roku. Wybierz inny arkusz z listy po lewej.
              </p>
            </div>
          ) : (
            <div className="matura-questions">
              {filteredLegacyQuestions.map((q) => (
                <div key={q.id} className="matura-question">
                  <div className="matura-question__header">
                    <span className="matura-question__number">
                      Zadanie {q.questionNumber}
                    </span>
                    <span className="matura-question__points">
                      {q.points} pkt
                    </span>
                    <span className="matura-question__topic">
                      {q.topicCategory}
                    </span>
                  </div>

                  {q.instruction && (
                    <div className="matura-question__instruction">
                      <p>{q.instruction}</p>
                    </div>
                  )}

                  <div className="matura-question__text">
                    <p>{q.questionText}</p>
                  </div>

                  <ActiveRecall
                    question={`Zadanie ${q.questionNumber} — zobacz odpowiedź`}
                    answer={q.officialCkeAnswer}
                    examRef={`CKE ${q.year}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

/**
 * `useSearchParams` requires a Suspense boundary — provided here so the pages
 * stay simple server components.
 */
export function MaturaSubjectView(props: MaturaSubjectViewProps) {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-zinc-400">Ładowanie arkusza CKE...</div>}>
      <MaturaSubjectViewInner {...props} />
    </Suspense>
  );
}
