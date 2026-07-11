"use client";

import { useState } from "react";

interface ActiveRecallProps {
  question: string;
  answer: string;
  examRef?: string;
}

export function ActiveRecall({ question, answer, examRef }: ActiveRecallProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="active-recall-new">
      <button
        className="active-recall-new__trigger"
        onClick={() => setRevealed(!revealed)}
        aria-expanded={revealed}
      >
        <div className="active-recall-new__question">
          <span>{question}</span>
        </div>
        <span className="active-recall-new__indicator">
          {revealed ? "▼" : "▶"}
        </span>
      </button>

      {revealed && (
        <div className="active-recall-new__answer">
          <div className="active-recall-new__answer-label">Odpowiedź oficjalna:</div>
          <p className="active-recall-new__answer-text">{answer}</p>
          {examRef && (
            <div className="active-recall-new__examref">Źródło: {examRef}</div>
          )}
        </div>
      )}
    </div>
  );
}
