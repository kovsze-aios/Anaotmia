"use client";

import Link from "next/link";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Columns2,
  FileText,
  Home,
  Search,
  Zap,
} from "lucide-react";
import { ActiveRecall } from "@/components/ActiveRecall";
import { ExamTaskCard } from "@/components/matura/CkeExamTasksSection";
import { filterCkeTasks, getCkeExamSheets } from "@/data/cke-exams";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [presentationMode, setPresentationMode] = useState<"interactive" | "pdf-split">(
    "interactive",
  );
  const [activePdfPage, setActivePdfPage] = useState<number>(4);
  const [onlyCurrentPageTasks, setOnlyCurrentPageTasks] = useState<boolean>(false);
  const [pdfDarkFilter, setPdfDarkFilter] = useState<boolean>(false);

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
      setActivePdfPage(4);
      setOnlyCurrentPageTasks(false);
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
    let list = filterCkeTasks(activeSheet.tasks, { search: searchQuery });
    if (filterTopic) {
      list = list.filter((t) =>
        t.relatedTopicIds.some((id) => formatSectionLabel(id) === filterTopic),
      );
    }
    return list;
  }, [activeSheet, filterTopic, searchQuery]);

  const pageUrls = activeSheet?.pageImageUrls ?? [];
  const totalPages = pageUrls.length;
  const clampedPage =
    totalPages > 0 ? Math.min(Math.max(1, activePdfPage), totalPages) : 1;
  const currentPageImageUrl = pageUrls[clampedPage - 1];

  const displayedSheetTasks = useMemo(() => {
    if (
      activeSheet &&
      presentationMode === "pdf-split" &&
      onlyCurrentPageTasks
    ) {
      const onPage = filteredSheetTasks.filter(
        (t) => t.pdfPageNumber === clampedPage,
      );
      if (onPage.length > 0) return onPage;
    }
    return filteredSheetTasks;
  }, [
    activeSheet,
    presentationMode,
    onlyCurrentPageTasks,
    filteredSheetTasks,
    clampedPage,
  ]);

  const filteredLegacyQuestions = useMemo(() => {
    if (!activeLegacy) return [];
    const byTopic = filterTopic
      ? activeLegacy.questions.filter((q) => q.topicCategory === filterTopic)
      : activeLegacy.questions;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return byTopic;
    return byTopic.filter((item) =>
      `${item.questionNumber} ${item.instruction} ${item.questionText} ${item.officialCkeAnswer} ${item.topicCategory}`
        .toLowerCase()
        .includes(q),
    );
  }, [activeLegacy, filterTopic, searchQuery]);

  const selectedExamLabel = selectedEntry
    ? selectedEntry.kind === "cke-sheet"
      ? `Matura ${selectedEntry.year} (${selectedEntry.month}, Formuła ${selectedEntry.sheet.formula})`
      : `Matura ${selectedEntry.year} (${selectedEntry.month})`
    : `Arkusze CKE`;

  const isSplitView = Boolean(
    activeSheet && presentationMode === "pdf-split" && totalPages > 0,
  );

  const handleOpenPdfPage = useCallback((pageNo: number) => {
    setActivePdfPage(pageNo);
    setPresentationMode("pdf-split");
  }, []);

  const handleJumpToTask = useCallback((taskId: string, pageNo?: number) => {
    if (pageNo) setActivePdfPage(pageNo);
    const el = document.getElementById(`cke-task-${taskId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="matura-layout">
      {/* Sidebar */}
      <aside className={`matura-sidebar ${HIDE_SCROLLBAR} overscroll-contain`}>
        <div className="matura-sidebar__header flex-col items-stretch gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
              title="Wróć na stronę główną platformy"
            >
              <Home className="size-3.5" aria-hidden="true" />
              Strona główna
            </Link>
            <Link
              href="/matura"
              className="focus-ring rounded-md border border-zinc-800 bg-zinc-900/70 px-2 py-1 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
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
                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800"
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
                Wiązek: {displayedSheetTasks.length} • Zadania:{" "}
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

          <div className="flex flex-col gap-1.5 border-t border-zinc-800/80 pt-3">
            <Link
              href={`/theory/${subjectKey}-matura-2023`}
              className="focus-ring rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              📘 Podręcznik {subjectName} 2023+
            </Link>
            <Link
              href="/atlas"
              className="focus-ring rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              🫀 Interaktywny Atlas 3D Pro
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`matura-content !w-full ${
          isSplitView ? "!max-w-7xl" : "!max-w-4xl"
        }`}
      >
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
              ? `Kompletny arkusz CKE 1:1 (${activeSheet.totalPoints} pkt, ${activeSheet.totalTasks} zadań) z oryginalnymi rycinami PNG, tabelami P/F i odtwarzaczem lemo-opuscar.`
              : "Kliknij zadanie, aby odsłonić oficjalną odpowiedź z klucza CKE."}
          </p>

          {/* Controls: Search + 1:1 PDF Split-View Toggle */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/90 p-3">
            <label className="relative flex min-w-[220px] flex-1 items-center">
              <Search
                className="pointer-events-none absolute left-3 size-3.5 text-zinc-500"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Szukaj zadania po haśle (np. ATP, enzym, pH, P/F)..."
                aria-label="Szukaj zadań w tym arkuszu"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-1.5 pl-8 pr-3 text-xs text-zinc-100 placeholder:text-zinc-500 focus-ring"
              />
            </label>

            {activeSheet && totalPages > 0 && (
              <div
                role="tablist"
                aria-label="Tryb prezentacji arkusza CKE"
                className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-1 text-xs"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={presentationMode === "interactive"}
                  onClick={() => setPresentationMode("interactive")}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-semibold transition-colors ${
                    presentationMode === "interactive"
                      ? "bg-emerald-600 text-white"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  <Zap className="size-3.5" aria-hidden="true" />
                  Widok Interaktywny 1:1
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={presentationMode === "pdf-split"}
                  onClick={() => setPresentationMode("pdf-split")}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-semibold transition-colors ${
                    presentationMode === "pdf-split"
                      ? "bg-sky-600 text-white"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  <Columns2 className="size-3.5" aria-hidden="true" />
                  Widok Oryginalnego Arkusza 1:1 (PDF Split-View)
                </button>
              </div>
            )}
          </div>

          {activeSheet ? (
            <>
              {/* Sheet metadata & quick-jump task pills */}
              <div className="mb-5 space-y-2.5 rounded-xl border border-zinc-800 bg-zinc-950/90 p-3.5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded border border-emerald-800/70 bg-emerald-950/60 px-2 py-0.5 font-semibold text-emerald-200">
                    <FileText className="size-3.5" aria-hidden="true" />
                    {activeSheet.symbol ?? activeSheet.id}
                  </span>
                  <span className="rounded border border-indigo-800/60 bg-indigo-950/60 px-2 py-0.5 font-semibold text-indigo-200">
                    Formuła {activeSheet.formula}
                  </span>
                  <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-zinc-300">
                    {activeSheet.tasks.length} wiązek • {activeSheet.totalTasks}{" "}
                    zadań • {activeSheet.totalPoints} pkt
                  </span>
                </div>

                {filteredSheetTasks.length > 0 && (
                  <div
                    aria-label="Szybka nawigacja po zadaniach arkusza"
                    className="flex flex-wrap items-center gap-1 border-t border-zinc-800/70 pt-2.5"
                  >
                    <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Zadania ({filteredSheetTasks.length}):
                    </span>
                    {filteredSheetTasks.map((t) => {
                      const num = t.taskNumber.replace(/^Zadanie\s+/i, "");
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() =>
                            handleJumpToTask(t.id, t.pdfPageNumber)
                          }
                          className={`rounded border px-2 py-0.5 text-[11px] font-mono transition-colors ${
                            isSplitView && t.pdfPageNumber === clampedPage
                              ? "border-sky-600 bg-sky-950/70 text-sky-200"
                              : "border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-emerald-700 hover:text-emerald-200"
                          }`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {filteredSheetTasks.length === 0 ? (
                <div className="matura-empty">
                  <p>
                    Brak zadań spełniających kryteria w tym arkuszu. Wyczyść filtr lub wybierz inny arkusz.
                  </p>
                </div>
              ) : isSplitView ? (
                <div className="grid gap-5 lg:grid-cols-12">
                  {/* Left sticky 1:1 original CKE page scan */}
                  <div className="lg:col-span-6">
                    <div className="sticky top-4 space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              setActivePdfPage((p) => Math.max(1, p - 1))
                            }
                            disabled={clampedPage <= 1}
                            className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40"
                          >
                            <ChevronLeft className="size-3.5" />
                            Poprzednia
                          </button>
                          <select
                            value={clampedPage}
                            onChange={(e) =>
                              setActivePdfPage(Number(e.target.value))
                            }
                            aria-label="Wybierz stronę oryginalnego arkusza CKE"
                            className="rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-mono text-zinc-100"
                          >
                            {pageUrls.map((_, idx) => (
                              <option key={idx + 1} value={idx + 1}>
                                Strona {idx + 1} / {totalPages}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            onClick={() =>
                              setActivePdfPage((p) =>
                                Math.min(totalPages, p + 1),
                              )
                            }
                            disabled={clampedPage >= totalPages}
                            className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40"
                          >
                            Następna
                            <ChevronRight className="size-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setPdfDarkFilter((d) => !d)}
                            className="rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-[11px] text-zinc-300 hover:text-white"
                          >
                            {pdfDarkFilter ? "☀️ Papier CKE" : "🌙 NOIR"}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setOnlyCurrentPageTasks((o) => !o)
                            }
                            className={`rounded-md border px-2 py-1 text-[11px] font-medium ${
                              onlyCurrentPageTasks
                                ? "border-sky-600 bg-sky-950/70 text-sky-200"
                                : "border-zinc-700 bg-zinc-950 text-zinc-300"
                            }`}
                          >
                            {onlyCurrentPageTasks
                              ? "Filtr: bieżąca strona"
                              : "Wszystkie zadania"}
                          </button>
                        </div>
                      </div>

                      <div className="max-h-[78vh] overflow-auto rounded-lg border border-zinc-800 bg-white p-1">
                        {currentPageImageUrl && (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={currentPageImageUrl}
                            alt={`Oryginalna strona ${clampedPage} arkusza CKE`}
                            width={960}
                            height={1358}
                            loading="lazy"
                            decoding="async"
                            className={`mx-auto w-full object-contain ${
                              pdfDarkFilter
                                ? "invert contrast-125 brightness-95"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right synchronized 1:1 tasks */}
                  <div className="flex flex-col gap-4 lg:col-span-6">
                    {displayedSheetTasks.map((task) => (
                      <ExamTaskCard
                        key={task.id}
                        task={task}
                        onOpenPdfPage={handleOpenPdfPage}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {filteredSheetTasks.map((task) => (
                    <ExamTaskCard
                      key={task.id}
                      task={task}
                      onOpenPdfPage={
                        totalPages > 0 ? handleOpenPdfPage : undefined
                      }
                    />
                  ))}
                </div>
              )}
            </>
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
