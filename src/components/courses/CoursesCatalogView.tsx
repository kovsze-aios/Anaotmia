"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, Clock, GraduationCap, Layers, PlayCircle } from "lucide-react";
import {
  COURSE_CATEGORIES,
  SPORTNOTES_COURSES,
  type SportNotesCourseCategory,
} from "@/data/courses";

export function CoursesCatalogView() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | SportNotesCourseCategory
  >("all");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "all") return SPORTNOTES_COURSES;
    return SPORTNOTES_COURSES.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="l-container pb-10 pt-[max(2.25rem,calc(env(safe-area-inset-top)+1rem))]">
      {/* Breadcrumb Navigation */}
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
          <li
            aria-current="page"
            className="truncate font-medium text-zinc-800 dark:text-zinc-200"
          >
            Kursy i Szkolenia
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <GraduationCap className="size-3.5" aria-hidden="true" />
          SportNotes Training Ecosystem
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-100">
          SportNotes — Kursy i Szkolenia
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Ustrukturyzowane ścieżki edukacyjne dla społeczności{" "}
          <strong className="font-semibold text-zinc-900 dark:text-zinc-200">
            SportNotes
          </strong>
          : łączymy darmową bazę akademicką (OER + Atlas 3D + Arkusze CKE) z praktycznym
          programem dla trenerów, fizjoterapeutów, studentów medycyny i maturzystów.
        </p>

        {/* Quick Ecosystem Links */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
          <Link
            href="/theory"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            <BookOpen className="size-3.5" aria-hidden="true" />
            Przeglądaj darmowe podręczniki
          </Link>
          <Link
            href="/matura"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            Centrum Maturalne CKE 1:1
          </Link>
        </div>
      </header>

      {/* Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filtruj kursy według kategorii"
        className="mb-6 flex flex-wrap gap-2"
      >
        {COURSE_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedCategory(cat.id)}
              className={`focus-ring rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                active
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredCourses.map((course) => {
          const lessonCount = course.modules.reduce(
            (sum, m) => sum + m.lessons.length,
            0,
          );
          const freeCount = course.modules.reduce(
            (sum, m) => sum + m.lessons.filter((l) => l.isFreePreview).length,
            0,
          );

          return (
            <article
              key={course.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                    {course.categoryLabel}
                  </span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400">
                    {course.level}
                  </span>
                </div>

                <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
                  <Link
                    href={`/kursy/${course.slug}`}
                    className="focus-ring rounded-sm hover:underline"
                  >
                    {course.title}
                  </Link>
                </h2>

                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {course.subtitle}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Layers className="size-3.5" aria-hidden="true" />
                    {lessonCount} lekcji
                  </span>
                  {freeCount > 0 && (
                    <span className="inline-flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-200">
                      <PlayCircle className="size-3.5" aria-hidden="true" />
                      {freeCount} otwarte lekcje preview
                    </span>
                  )}
                </div>

                <Link
                  href={`/kursy/${course.slug}`}
                  className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  Otwórz program i lekcje preview →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
