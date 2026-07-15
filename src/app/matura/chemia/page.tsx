"use client";

import { useState, useMemo } from "react";
import { ActiveRecall } from "@/components/ActiveRecall";
import { getChemiaRecords } from "@/data/chemia";

export default function MaturaChemiaPage() {
  const records = getChemiaRecords();
  const [selectedYear, setSelectedYear] = useState(2016);
  const [filterTopic, setFilterTopic] = useState<string | null>(null);

  const currentRecord = useMemo(
    () => records.find((r) => r.year === selectedYear),
    [records, selectedYear]
  );
  const questions = useMemo(
    () => currentRecord?.questions ?? [],
    [currentRecord]
  );

  const filtered = filterTopic
    ? questions.filter((q) => q.topicCategory === filterTopic)
    : questions;

  const topics = useMemo(
    () => [...new Set(questions.map((q) => q.topicCategory))],
    [questions]
  );

  return (
    <div className="matura-layout">
      {/* Sidebar */}
          <aside className="matura-sidebar">
            <div className="matura-sidebar__header">
              <a href="/matura" className="matura-sidebar__back">
                <span>←</span> Matura
              </a>
              <h2>⚗️ Chemia</h2>
            </div>

            {/* Year selector */}
            <div className="matura-sidebar__section">
              <h3 className="matura-sidebar__label">Wybierz rok</h3>
              <div className="matura-sidebar__year-list">
                {records.map((r) => (
                  <button
                    key={r.year}
                    className={`matura-sidebar__year-btn ${
                      selectedYear === r.year
                        ? "matura-sidebar__year-btn--active"
                        : ""
                    }`}
                    onClick={() => setSelectedYear(r.year)}
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
                className={`matura-sidebar__topic-btn ${
                  filterTopic === null ? "matura-sidebar__topic-btn--active" : ""
                }`}
                onClick={() => setFilterTopic(null)}
              >
                Wszystkie
              </button>
              {topics.map((topic) => (
                <button
                  key={topic}
                  className={`matura-sidebar__topic-btn ${
                    filterTopic === topic
                      ? "matura-sidebar__topic-btn--active"
                      : ""
                  }`}
                  onClick={() => setFilterTopic(topic)}
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
                Chemia — Matura {selectedYear} ({currentRecord?.month})
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
