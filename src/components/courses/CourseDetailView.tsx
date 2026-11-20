"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Lock,
  PlayCircle,
  Users,
} from "lucide-react";
import type { SportNotesCourse, SportNotesLesson } from "@/data/courses";
import { getFigureById } from "@/data/textbook-figures";
import { TextToSpeechPlayer } from "@/components/reader/TextToSpeechPlayer";
import { TextbookFigureCard } from "@/components/textbook/TextbookFigureCard";

interface CourseProgressState {
  completedLessonIds: string[];
  checkedRecallByLesson: Record<string, number[]>;
}

const EMPTY_PROGRESS: CourseProgressState = {
  completedLessonIds: [],
  checkedRecallByLesson: {},
};

function getStorageKey(courseId: string): string {
  return `sportnotes:course-progress:v1:${courseId}`;
}

export function CourseDetailView({ course }: { course: SportNotesCourse }) {
  const allLessons = useMemo(
    () => course.modules.flatMap((m) => m.lessons),
    [course],
  );

  const initialLesson = useMemo(
    () => allLessons.find((l) => l.isFreePreview) ?? allLessons[0],
    [allLessons],
  );

  const [activeLessonId, setActiveLessonId] = useState<string>(
    initialLesson?.id ?? "",
  );
  const [openModuleIds, setOpenModuleIds] = useState<Record<string, boolean>>(
    () => {
      const init: Record<string, boolean> = {};
      for (const mod of course.modules) {
        init[mod.id] = true;
      }
      return init;
    },
  );
  const [progress, setProgress] = useState<CourseProgressState>(EMPTY_PROGRESS);
  const [hydratedCourseId, setHydratedCourseId] = useState<string | null>(null);

  // Hydrate client progress from localStorage after mount to stay hydration-safe.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(getStorageKey(course.id));
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CourseProgressState>;
        setProgress({
          completedLessonIds: Array.isArray(parsed.completedLessonIds)
            ? parsed.completedLessonIds
            : [],
          checkedRecallByLesson:
            parsed.checkedRecallByLesson &&
            typeof parsed.checkedRecallByLesson === "object"
              ? parsed.checkedRecallByLesson
              : {},
        });
      } else {
        setProgress(EMPTY_PROGRESS);
      }
    } catch {
      setProgress(EMPTY_PROGRESS);
    } finally {
      setHydratedCourseId(course.id);
    }
  }, [course.id]);

  // Persist changes when progress updates for the active hydrated course.
  useEffect(() => {
    if (hydratedCourseId !== course.id) return;
    try {
      window.localStorage.setItem(
        getStorageKey(course.id),
        JSON.stringify(progress),
      );
    } catch {
      // Ignore storage quota / private mode failures gracefully.
    }
  }, [course.id, hydratedCourseId, progress]);

  const activeLesson: SportNotesLesson | undefined = useMemo(
    () => allLessons.find((l) => l.id === activeLessonId) ?? initialLesson,
    [allLessons, activeLessonId, initialLesson],
  );

  const inlineFigure = useMemo(
    () =>
      activeLesson?.figureId ? getFigureById(activeLesson.figureId) : undefined,
    [activeLesson],
  );

  const toggleModule = (modId: string) => {
    setOpenModuleIds((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const completedSet = useMemo(
    () => new Set(progress.completedLessonIds),
    [progress.completedLessonIds],
  );
  const completedCount = useMemo(
    () => allLessons.filter((l) => completedSet.has(l.id)).length,
    [allLessons, completedSet],
  );
  const progressPct =
    allLessons.length > 0
      ? Math.round((completedCount / allLessons.length) * 100)
      : 0;

  const isLessonCompleted = activeLesson
    ? completedSet.has(activeLesson.id)
    : false;

  const recallItems = activeLesson
    ? (activeLesson.recallChecklist ?? activeLesson.keyTakeaways)
    : [];

  const checkedIndices = useMemo(() => {
    if (!activeLesson) return new Set<number>();
    return new Set(progress.checkedRecallByLesson[activeLesson.id] ?? []);
  }, [activeLesson, progress.checkedRecallByLesson]);

  const toggleLessonComplete = (lessonId: string) => {
    setProgress((prev) => {
      const exists = prev.completedLessonIds.includes(lessonId);
      return {
        ...prev,
        completedLessonIds: exists
          ? prev.completedLessonIds.filter((id) => id !== lessonId)
          : [...prev.completedLessonIds, lessonId],
      };
    });
  };

  const toggleChecklistItem = (lessonId: string, idx: number) => {
    setProgress((prev) => {
      const cur = prev.checkedRecallByLesson[lessonId] ?? [];
      const next = cur.includes(idx)
        ? cur.filter((i) => i !== idx)
        : [...cur, idx];
      return {
        ...prev,
        checkedRecallByLesson: {
          ...prev.checkedRecallByLesson,
          [lessonId]: next,
        },
      };
    });
  };

  return (
    <div className="l-container pb-16 sm:pb-24 pt-[max(2.25rem,calc(env(safe-area-inset-top)+1rem))]">
      {/* Breadcrumb Bar */}
      <nav aria-label="Okruszki" className="pb-4 text-sm">
        <ol className="flex min-w-0 flex-wrap items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
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
              href="/kursy"
              className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Kursy i Szkolenia
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="min-w-0 truncate font-medium text-zinc-800 dark:text-zinc-200"
          >
            {course.title}
          </li>
        </ol>
      </nav>

      {/* Course Header */}
      <header className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-2.5 py-0.5 font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <GraduationCap className="size-3.5 shrink-0" aria-hidden="true" />
            {course.categoryLabel}
          </span>
          <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            {course.level}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-zinc-500 dark:text-zinc-400">
            <Clock className="size-3.5 shrink-0" aria-hidden="true" />
            {course.duration}
          </span>
          {course.supportedFormulas?.map((f) => (
            <span
              key={f}
              className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              Formuła {f}
            </span>
          ))}
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-100">
          {course.title}
        </h1>
        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {course.subtitle}
        </p>

        {course.examSheetHubPath && (
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={course.examSheetHubPath}
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              <FileText className="size-3.5 shrink-0" aria-hidden="true" />
              <span>Otwórz pełne arkusze CKE 1:1</span>
              <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        )}
      </header>

      {/* Two-Column Layout: Sticky Syllabus Accordion + 4-Step Active Lesson Panel */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Progress Bar + Interactive Syllabus Accordion + Community */}
        <aside className="min-w-0 space-y-4 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
          {/* Course Progress Bar */}
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                Ukończono {completedCount} / {allLessons.length} lekcji
              </span>
              <span className="font-mono tabular-nums text-zinc-500 dark:text-zinc-400">
                {progressPct}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Postęp realizacji kursu"
              className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900"
            >
              <div
                className="h-full rounded-full bg-zinc-900 transition-[width] duration-300 dark:bg-zinc-100"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Sylabus kursu ({allLessons.length} lekcji)
            </h2>
          </div>

          <div className="space-y-3">
            {course.modules.map((mod) => {
              const isOpen = openModuleIds[mod.id] ?? true;
              return (
                <div
                  key={mod.id}
                  className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <button
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    aria-expanded={isOpen}
                    className="focus-ring flex w-full items-center justify-between gap-2 bg-zinc-50/80 px-4 py-3 text-left text-xs font-bold text-zinc-900 transition-colors hover:bg-zinc-100 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-900"
                  >
                    <span className="min-w-0 break-words">{mod.title}</span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-zinc-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                      {mod.lessons.map((lesson) => {
                        const isActive = lesson.id === activeLesson?.id;
                        const done = completedSet.has(lesson.id);
                        return (
                          <button
                            key={lesson.id}
                            type="button"
                            onClick={() => setActiveLessonId(lesson.id)}
                            className={`focus-ring flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition-colors ${
                              isActive
                                ? "bg-zinc-100 dark:bg-zinc-900"
                                : "hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                            }`}
                          >
                            <div className="flex min-w-0 items-start gap-2.5">
                              {done ? (
                                <CheckCircle2
                                  className="mt-0.5 size-4 shrink-0 text-zinc-900 dark:text-zinc-100"
                                  aria-hidden="true"
                                />
                              ) : lesson.isFreePreview ? (
                                <PlayCircle
                                  className="mt-0.5 size-4 shrink-0 text-zinc-700 dark:text-zinc-200"
                                  aria-hidden="true"
                                />
                              ) : (
                                <Lock
                                  className="mt-0.5 size-3.5 shrink-0 text-zinc-400 dark:text-zinc-500"
                                  aria-hidden="true"
                                />
                              )}
                              <div className="min-w-0">
                                <p className="break-words text-xs font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                                  {lesson.title}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                                  <span className="font-mono">
                                    {lesson.duration}
                                  </span>
                                  {lesson.isFreePreview && (
                                    <span className="rounded border border-zinc-300 bg-white px-1.5 py-0 text-[10px] font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
                                      Darmowy podgląd
                                    </span>
                                  )}
                                  {done && (
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                                      Opanowano
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Community & Resources Card */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200">
              <Users className="size-4 shrink-0" aria-hidden="true" />
              Społeczność SportNotes
            </div>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Dołącz do społeczności SportNotes na Facebooku, aby otrzymywać
              nowe notatki anatomiczne, omówienia arkuszy CKE oraz informacje o
              kolejnych modułach kursów.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/SportNotes"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                SportNotes na Facebooku
              </a>
              <Link
                href="/theory"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <BookOpen className="size-3.5 shrink-0" aria-hidden="true" />
                Baza wiedzy OER
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Column: 4-Step Learning Loop Active Lesson Panel */}
        <section
          aria-label="Podgląd aktywnej lekcji"
          className="min-w-0 lg:col-span-7"
        >
          {activeLesson && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              {/* Lesson Header */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {activeLesson.isFreePreview
                      ? "Krok 1 · Pigułka merytoryczna (Lekcja otwarta)"
                      : "Krok 1 · Pigułka merytoryczna modułu"}
                  </span>
                  <h2 className="mt-1 break-words text-xl font-bold text-zinc-950 dark:text-zinc-100">
                    {activeLesson.title}
                  </h2>
                </div>
                <span className="shrink-0 rounded border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  {activeLesson.duration}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {activeLesson.summary}
              </p>

              {/* Floating Zofia Neural Audio Reader */}
              <TextToSpeechPlayer
                chapterId={activeLesson.id}
                title={activeLesson.title}
                html={activeLesson.contentHtml}
                basePath={`/kursy/${course.slug}`}
              />

              {/* Step 1: Lesson Prose */}
              <div
                className="prose prose-sm max-w-none leading-relaxed text-zinc-800 dark:prose-invert dark:text-zinc-200"
                dangerouslySetInnerHTML={{ __html: activeLesson.contentHtml }}
              />

              {/* Key Takeaways */}
              {activeLesson.keyTakeaways.length > 0 && (
                <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h3 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Kluczowe wnioski z lekcji
                  </h3>
                  <ul className="space-y-2">
                    {activeLesson.keyTakeaways.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-3.5 shrink-0 text-zinc-500 dark:text-zinc-400"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Step 1: Inline Monograph Illustration (lemo-opuscar SVG) */}
              {inlineFigure && (
                <div className="mt-6">
                  <TextbookFigureCard figure={inlineFigure} />
                </div>
              )}

              {/* Direct Bridge to Full Open-Access Textbook Chapter */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/40">
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Pełne opracowanie w bazie podręcznika:
                </span>
                <Link
                  href={activeLesson.relatedTheoryPath}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  <BookOpen className="size-3.5 shrink-0" aria-hidden="true" />
                  <span>Otwórz pełny rozdział podręcznika →</span>
                </Link>
              </div>

              {/* Step 2: CKE Examiner Traps (0 pkt vs 1 pkt) */}
              {activeLesson.ckeTraps && activeLesson.ckeTraps.length > 0 && (
                <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle
                      className="size-4 shrink-0 text-zinc-700 dark:text-zinc-300"
                      aria-hidden="true"
                    />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                      Krok 2 · Pułapki Egzaminatora CKE (0 pkt vs 1 pkt)
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {activeLesson.ckeTraps.map((trap, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-zinc-200 bg-zinc-50/40 p-4 dark:border-zinc-800 dark:bg-zinc-900/30"
                      >
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="min-w-0 rounded-lg border border-dashed border-zinc-300 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950">
                            <span className="inline-block rounded border border-zinc-300 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                              0 pkt · Typowy błąd
                            </span>
                            <p className="mt-2 break-words text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {trap.mistake}
                            </p>
                          </div>

                          <div className="min-w-0 rounded-lg border border-zinc-300 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-900">
                            <span className="inline-block rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white dark:bg-zinc-100 dark:text-zinc-950">
                              1 pkt · Wzorzec CKE
                            </span>
                            <p className="mt-2 break-words text-xs font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                              {trap.modelAnswer}
                            </p>
                          </div>
                        </div>

                        <p className="mt-3 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                          <strong className="font-semibold text-zinc-700 dark:text-zinc-300">
                            Dlaczego klucz ucina punkt:
                          </strong>{" "}
                          {trap.whyZeroPoints}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: CKE 1:1 Practice Links */}
              {activeLesson.ckePractice &&
                activeLesson.ckePractice.length > 0 && (
                  <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                    <div className="mb-3 flex items-center gap-2">
                      <FileText
                        className="size-4 shrink-0 text-zinc-700 dark:text-zinc-300"
                        aria-hidden="true"
                      />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                        Krok 3 · Zadania CKE 1:1 do Przećwiczenia
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {activeLesson.ckePractice.map((sheetLink) => (
                        <Link
                          key={sheetLink.href + sheetLink.label}
                          href={sheetLink.href}
                          className="focus-ring group flex min-w-0 flex-col justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                        >
                          <div>
                            <p className="break-words text-xs font-bold text-zinc-900 dark:text-zinc-100">
                              {sheetLink.label}
                            </p>
                            {sheetLink.taskHint && (
                              <p className="mt-1 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {sheetLink.taskHint}
                              </p>
                            )}
                          </div>
                          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-800 transition-transform group-hover:translate-x-0.5 dark:text-zinc-200">
                            Otwórz arkusz 1:1
                            <ArrowRight className="size-3 shrink-0" aria-hidden="true" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              {/* Step 4: Active Recall Checklist & Mastery Toggle */}
              <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="size-4 shrink-0 text-zinc-700 dark:text-zinc-300"
                      aria-hidden="true"
                    />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                      Krok 4 · Postęp Lekcji (Checklista Active Recall)
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleLessonComplete(activeLesson.id)}
                    aria-pressed={isLessonCompleted}
                    className={`focus-ring inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isLessonCompleted
                        ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950"
                        : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <Check className="size-3.5 shrink-0" aria-hidden="true" />
                    <span>
                      {isLessonCompleted
                        ? "Lekcja opanowana"
                        : "Oznacz lekcję jako opanowaną"}
                    </span>
                  </button>
                </div>

                {recallItems.length > 0 && (
                  <ul className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                    {recallItems.map((item, idx) => {
                      const isChecked = checkedIndices.has(idx);
                      return (
                        <li key={idx}>
                          <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() =>
                                toggleChecklistItem(activeLesson.id, idx)
                              }
                              className="mt-0.5 size-4 shrink-0 accent-zinc-900 dark:accent-zinc-100"
                            />
                            <span
                              className={
                                isChecked
                                  ? "line-through opacity-60"
                                  : undefined
                              }
                            >
                              {item}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
