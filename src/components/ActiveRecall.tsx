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
    <div
      className={`active-recall ${revealed ? "active-recall--revealed" : ""}`}
    >
      <button
        className="active-recall__trigger"
        onClick={() => setRevealed(!revealed)}
        aria-expanded={revealed}
      >
        <span className="active-recall__icon">{revealed ? "🔓" : "🔒"}</span>
        <div className="active-recall__text">
          <span className="active-recall__label">Active Recall</span>
          <span className="active-recall__question">{question}</span>
        </div>
        {examRef && (
          <span className="active-recall__examref">Egzamin {examRef}</span>
        )}
      </button>

      {revealed && (
        <div className="active-recall__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
