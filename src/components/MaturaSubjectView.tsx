"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ActiveRecall } from "@/components/ActiveRecall";
import type { MaturaYearRecord } from "@/server/models";

export interface MaturaSubjectViewProps {
  /** Heading shown in the sidebar, e.g. "🧬 Biologia". */
  sidebarTitle: string;
  /** Subject name used in the content heading, e.g. "Biologia". */
  subjectName: string;
  /** Supplied by the server page — this component never reads data itself. */
  records: MaturaYearRecord[];
}

function MaturaSubjectViewInner({
  sidebarTitle,
  subjectName,
  records,
}: MaturaSubjectViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // The year and topic filter live in the URL (`?rok=2020&dzial=Genetyka`) so
  // the selection survives reloads, works with the back button, and can be
  // deep-linked (search results point here with `?rok=`).
  const firstYear = records[0]?.year ?? 0;
  const yearParam = Number(searchParams.get("rok"));
  const selectedYear =
    Number.isInteger(yearParam) && records.some((r) => r.year === yearParam)
      ? yearParam
      : firstYear;

  const topicParam = searchParams.get("dzial");
  const [filterTopic, setFilterTopic] = useState<string | null>(topicParam);

  // Keep the filter in sync when navigating back/forward.
  useEffect(() => {
    setFilterTopic(topicParam);
  }, [topicParam]);

  // Normalise the URL on first visit so the selected year is always shareable.
  useEffect(() => {
    if (!searchParams.has("rok") && firstYear !== 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("rok", String(firstYear));
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, firstYear, router]);

  const currentRecord = useMemo(
    () => records.find((r) => r.year === selectedYear),
    [records, selectedYear],
  );
  const questions = useMemo(
    () => currentRecord?.questions ?? [],
    [currentRecord],
  );

  const topics = useMemo(
    () => [...new Set(questions.map((q) => q.topicCategory))],
    [questions],
  );

  // Memoize filtered array to avoid O(N) reallocation on every render when
  // navigating or performing non-filter interactions
  const filtered = useMemo(() => {
    return filterTopic
      ? questions.filter((q) => q.topicCategory === filterTopic)
      : questions;
  }, [filterTopic, questions]);

  const changeYear = useCallback(
    (year: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("rok", String(year));
      // A topic that doesn't exist in the new year would show an empty list —
      // drop it instead.
      const yearTopics = new Set(
        records.find((r) => r.year === year)?.questions.map((q) => q.topicCategory),
      );
      if (filterTopic && !yearTopics.has(filterTopic)) params.delete("dzial");
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams, records, filterTopic],
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

  return (
    <div className="matura-layout">
      {/* Sidebar */}
      <aside className="matura-sidebar">
        <div className="matura-sidebar__header">
          <a href="/matura" className="matura-sidebar__back focus-ring rounded-sm">
            <span>←</span> Matura
          </a>
          <h2>{sidebarTitle}</h2>
        </div>

        {/* Year selector */}
        <div className="matura-sidebar__section">
          <h3 className="matura-sidebar__label">Wybierz rok</h3>
          <div className="matura-sidebar__year-list">
            {records.map((r) => (
              <button
                key={r.year}
                className={`matura-sidebar__year-btn focus-ring ${
                  selectedYear === r.year
                    ? "matura-sidebar__year-btn--active"
                    : ""
                }`}
                onClick={() => changeYear(r.year)}
              >
                {r.year} — {r.month}
              </button>
            ))}
          </div>
        </div>

        {/* Topic filter */}
        <div className="matura-sidebar__section">
          <h3 className="matura-sidebar__label">Filtruj według działu</h3>
          <button
            className={`matura-sidebar__topic-btn focus-ring ${
              filterTopic === null ? "matura-sidebar__topic-btn--active" : ""
            }`}
            onClick={() => changeTopic(null)}
          >
            Wszystkie
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              className={`matura-sidebar__topic-btn focus-ring ${
                filterTopic === topic
                  ? "matura-sidebar__topic-btn--active"
                  : ""
              }`}
              onClick={() => changeTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        {currentRecord && (
          <div className="matura-sidebar__info">
            <p className="matura-sidebar__exam-code">
              Arkusz: {currentRecord.examCode}
            </p>
            <p className="matura-sidebar__question-count">
              Liczba zadań: {filtered.length}
            </p>
          </div>
        )}
      </aside>

      {/* Main content */}
      <main className="matura-content">
        <div className="matura-content__inner">
          <h1 className="matura-content__title">
            {subjectName} — Matura {selectedYear} ({currentRecord?.month})
          </h1>
          <p className="matura-content__subtitle">
            Kliknij zadanie, aby odsłonić oficjalną odpowiedź z klucza CKE.
          </p>

          {filtered.length === 0 ? (
            <div className="matura-empty">
              <p>Brak zadań dla tego roku. Wybierz inny rok lub dodaj dane.</p>
            </div>
          ) : (
            <div className="matura-questions">
              {filtered.map((q) => (
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
    <Suspense fallback={<div>Ładowanie...</div>}>
      <MaturaSubjectViewInner {...props} />
    </Suspense>
  );
}
