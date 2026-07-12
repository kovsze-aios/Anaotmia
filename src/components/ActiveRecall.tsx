"use client";

import { useState } from "react";

interface ActiveRecallProps {
  question: string;
  answer: string;
  examRef?: string;
}

export function ActiveRecall({ question, answer, examRef }: ActiveRecallProps) {
  const [revealed, setRevealed] = useState(false);

  /* Transform fill-in-the-blank gaps to NOIR-style underscores */
  const renderQuestion = (text: string) => {
    // Split on "__________" or "___" (3+ underscores) and render as styled gaps
    const parts = text.split(/(_{3,})/);
    return parts.map((part, i) => {
      if (/^_{3,}$/.test(part)) {
        return (
          <span
            key={i}
            className="inline-block border-b-2 border-zinc-600 mx-1 min-w-[80px] text-center"
            style={{ letterSpacing: "2px" }}
          >
            {"__________"}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div
      className={`active-recall-new transition-all duration-300 ease-in-out ${
        revealed ? "ring-1 ring-zinc-700" : ""
      }`}
    >
      <button
        className="active-recall-new__trigger"
        onClick={() => setRevealed(!revealed)}
        aria-expanded={revealed}
      >
        <div className="active-recall-new__question">
          {renderQuestion(question)}
        </div>
        <span
          className={`active-recall-new__indicator transition-all duration-300 ease-in-out ${
            revealed ? "rotate-90" : ""
          }`}
        >
          {revealed ? "▼" : "▶"}
        </span>
      </button>

      {revealed && (
        <div className="active-recall-new__answer transition-all duration-300 ease-in-out">
          <div className="active-recall-new__answer-label">
            ▸ Klucz odpowiedzi
          </div>
          <p className="active-recall-new__answer-text">{answer}</p>
          {examRef && (
            <div className="active-recall-new__examref">
              Źródło: {examRef}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
