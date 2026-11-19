"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  GraduationCap,
  Lock,
  PlayCircle,
  Users,
} from "lucide-react";
import type { SportNotesCourse, SportNotesLesson } from "@/data/courses";
import { getFigureById } from "@/data/textbook-figures";
import { TextToSpeechPlayer } from "@/components/reader/TextToSpeechPlayer";
import { TextbookFigureCard } from "@/components/textbook/TextbookFigureCard";

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

  return (
    <div className="l-container pb-10 pt-[max(2.25rem,calc(env(safe-area-inset-top)+1rem))]">
      {/* Breadcrumb Bar */}
      <nav aria-label="Okruszki" className="pb-4 text-sm">
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
              href="/kursy"
              className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Kursy i Szkolenia
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="truncate font-medium text-zinc-800 dark:text-zinc-200"
          >
            {course.title}
          </li>
        </ol>
      </nav>

      {/* Course Header */}
      <header className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-2.5 py-0.5 font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <GraduationCap className="size-3.5" aria-hidden="true" />
            {course.categoryLabel}
          </span>
          <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            {course.level}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-zinc-500 dark:text-zinc-400">
            <Clock className="size-3.5" aria-hidden="true" />
            {course.duration}
          </span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-100">
          {course.title}
        </h1>
        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {course.subtitle}
        </p>
      </header>

      {/* Two-Column Layout: Syllabus Accordion + Active Lesson Player */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Interactive Syllabus Accordion */}
        <aside className="space-y-4 lg:col-span-5">
          <div className="flex items-center justify-between">
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
                    <span>{mod.title}</span>
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
                              {lesson.isFreePreview ? (
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
                                <p className="text-xs font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                                  {lesson.title}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                                  <span className="font-mono">{lesson.duration}</span>
                                  {lesson.isFreePreview && (
                                    <span className="rounded border border-zinc-300 bg-white px-1.5 py-0 text-[10px] font-semibold uppercase tracking-wider text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
                                      Darmowy podgląd
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

          {/* Community & Signup Card */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200">
              <Users className="size-4" aria-hidden="true" />
              Społeczność SportNotes
            </div>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Dołącz do społeczności SportNotes na Facebooku, aby otrzymywać
              nowe notatki anatomiczne, case studies treningowe oraz informacje
              o kolejnych edycjach kursów.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/SportNotes"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                SportNotes na Facebooku
              </a>
              <Link
                href="/theory"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <BookOpen className="size-3.5" aria-hidden="true" />
                Baza wiedzy OER
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Column: Active Lesson Preview + Zofia Audio + Figure + Links */}
        <section
          aria-label="Podgląd aktywnej lekcji"
          className="lg:col-span-7"
        >
          {activeLesson && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {activeLesson.isFreePreview
                      ? "Lekcja otwarta (Darmowy podgląd)"
                      : "Streszczenie modułu kursu"}
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-zinc-950 dark:text-zinc-100">
                    {activeLesson.title}
                  </h2>
                </div>
                <span className="rounded border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  {activeLesson.duration}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {activeLesson.summary}
              </p>

              {/* Neural Voice Zofia Audio Reader */}
              <div className="mb-5">
                <TextToSpeechPlayer
                  chapterId={activeLesson.id}
                  title={activeLesson.title}
                  html={activeLesson.contentHtml}
                  basePath={`/kursy/${course.slug}`}
                />
              </div>

              {/* Lesson Prose */}
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

              {/* Inline Monograph Illustration (lemo-opuscar SVG) */}
              {inlineFigure && (
                <div className="mt-6">
                  <TextbookFigureCard figure={inlineFigure} />
                </div>
              )}

              {/* Direct Bridge to Full Open-Access Textbook Chapter */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Powiązany materiał teoretyczny w otwartej bazie wiedzy:
                </span>
                <Link
                  href={activeLesson.relatedTheoryPath}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  <BookOpen className="size-3.5" aria-hidden="true" />
                  Otwórz pełny rozdział podręcznika →
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
