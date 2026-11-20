"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  GraduationCap,
  Layers,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import {
  COURSE_TRACKS,
  SPORTNOTES_COURSES,
  type SportNotesCourse,
  type SportNotesCourseTrack,
} from "@/data/courses";

function CourseCard({ course }: { course: SportNotesCourse }) {
  const lessonCount = course.modules.reduce(
    (sum, m) => sum + m.lessons.length,
    0,
  );
  const freeCount = course.modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.isFreePreview).length,
    0,
  );

  return (
    <article className="flex min-w-0 flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider">
          <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            {course.categoryLabel}
          </span>
          <span className="font-mono text-zinc-500 dark:text-zinc-400">
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
          <Link
            href={`/kursy/${course.slug}`}
            className="focus-ring rounded-sm hover:underline"
          >
            {course.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {course.subtitle}
        </p>

        {course.supportedFormulas && course.supportedFormulas.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {course.supportedFormulas.map((f) => (
              <span
                key={f}
                className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                Formuła {f}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5 shrink-0" aria-hidden="true" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Layers className="size-3.5 shrink-0" aria-hidden="true" />
            {lessonCount} lekcji
          </span>
          {freeCount > 0 && (
            <span className="inline-flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-200">
              <PlayCircle className="size-3.5 shrink-0" aria-hidden="true" />
              {freeCount} otwarte lekcje preview
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/kursy/${course.slug}`}
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <span>Otwórz plan kursu</span>
            <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
          </Link>
          {course.examSheetHubPath && (
            <Link
              href={course.examSheetHubPath}
              className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <FileText className="size-3.5 shrink-0" aria-hidden="true" />
              <span>Arkusze 1:1</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function CoursesCatalogView() {
  const [selectedTrack, setSelectedTrack] = useState<
    "all" | SportNotesCourseTrack
  >("all");

  const maturaCourses = useMemo(
    () => SPORTNOTES_COURSES.filter((c) => c.track === "matura-cke"),
    [],
  );

  const sportCourses = useMemo(
    () => SPORTNOTES_COURSES.filter((c) => c.track === "sport-zdrowie"),
    [],
  );

  const showMatura = selectedTrack === "all" || selectedTrack === "matura-cke";
  const showSport =
    selectedTrack === "all" || selectedTrack === "sport-zdrowie";

  return (
    <div className="l-container pb-16 sm:pb-24 pt-[max(2.25rem,calc(env(safe-area-inset-top)+1rem))]">
      {/* Breadcrumb Navigation */}
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
          <li
            aria-current="page"
            className="min-w-0 truncate font-medium text-zinc-800 dark:text-zinc-200"
          >
            Kursy i Szkolenia
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <GraduationCap className="size-3.5 shrink-0" aria-hidden="true" />
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
          : oddzielne plany maturalne CKE w modelu 1:1 oraz specjalistyczne
          moduły dla trenerów, fizjoterapeutów i studentów medycyny.
        </p>

        {/* Quick Ecosystem Links */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
          <Link
            href="/theory"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            <BookOpen className="size-3.5 shrink-0" aria-hidden="true" />
            Przeglądaj darmowe podręczniki
          </Link>
          <Link
            href="/matura"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            <FileText className="size-3.5 shrink-0" aria-hidden="true" />
            Centrum Maturalne CKE 1:1
          </Link>
        </div>
      </header>

      {/* Track Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filtruj ścieżki kursów"
        className="mb-8 flex flex-wrap gap-2"
      >
        {COURSE_TRACKS.map((track) => {
          const active = selectedTrack === track.id;
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedTrack(track.id)}
              className={`focus-ring rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                active
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              }`}
            >
              {track.label}
            </button>
          );
        })}
      </div>

      {/* Track 1: Flagship Matura Courses */}
      {showMatura && (
        <section
          aria-labelledby="track-matura-heading"
          className={showSport ? "mb-12" : undefined}
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Ścieżka 1 · Model Nauki 1:1
              </p>
              <h2
                id="track-matura-heading"
                className="mt-1 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100"
              >
                Kursy Maturalne CKE (Formuła 2015 & 2023+)
              </h2>
            </div>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              {maturaCourses.length} flagowe przedmioty PR
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {maturaCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Subtle Blueprint Roadmap Notice */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/60 px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
            <Sparkles
              className="mt-0.5 size-4 shrink-0 text-zinc-500 dark:text-zinc-400"
              aria-hidden="true"
            />
            <p>
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                Rozszerzalny model kursów maturalnych:
              </strong>{" "}
              ten sam schemat 4-etapowej pętli nauki (Pigułka + Rycina · Pułapki
              0 vs 1 pkt · Arkusz CKE 1:1 · Checklista Active Recall) zostanie
              wkrótce rozszerzony na kolejne przedmioty egzaminacyjne: Matematykę
              PR, Fizykę PR oraz Geografię PR.
            </p>
          </div>
        </section>
      )}

      {/* Track 2: Sport & Health Courses */}
      {showSport && (
        <section aria-labelledby="track-sport-heading">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Ścieżka 2 · Medycyna, Fizjoterapia i Trening
              </p>
              <h2
                id="track-sport-heading"
                className="mt-1 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100"
              >
                Kursy Sportowe i Nauki o Zdrowiu
              </h2>
            </div>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              {sportCourses.length} specjalistyczne kursy
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sportCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
