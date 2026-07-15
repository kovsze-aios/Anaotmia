"use client";

import { useState } from "react";

interface ActiveRecallProps {
  question: string;
  answer: string;
  examRef?: string;
}

export function ActiveRecall({ question, answer, examRef }: ActiveRecallProps) {
  const [revealed, setRevealed] = useState(false);

  // ⚡ Bolt Optimization: Removed use of MutationObserver and component-level
  // `dark` state. Instead of firing an observer and triggering a React state update
  // on *every single* ActiveRecall component whenever the theme is toggled,
  // we now use standard Tailwind `dark:` variants. This turns an O(N) memory
  // and performance cost (N = number of questions on the page) into O(1) pure CSS.


  /* Transform fill-in-the-blank gaps */
  const renderQuestion = (text: string) => {
    const parts = text.split(/(_{3,})/);
    return parts.map((part, i) => {
      if (/^_{3,}$/.test(part)) {
        return (
          <span
            key={i}
            className="inline-block border-b-2 border-current mx-1 min-w-[80px] text-center opacity-50"
            style={{ letterSpacing: "2px" }}
          >
            {"__________"}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  /* Theme-aware answer box styles using Tailwind dark: variants */
  const answerBoxClass = "font-mono bg-zinc-900 text-zinc-100 dark:bg-white dark:text-black";
  const answerLabelClass = "text-zinc-100 dark:text-black";
  const answerTextClass = "text-zinc-100 dark:text-black";
  const examRefClass = "text-zinc-400 border-zinc-600 dark:text-zinc-600 dark:border-zinc-300";

  return (
    <div
      className={`active-recall-new transition-all duration-300 ease-in-out ${
        revealed ? "ring-1 ring-zinc-400" : ""
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
        <div className={`active-recall-new__answer transition-all duration-300 ease-in-out ${answerBoxClass}`}>
          <div className={`active-recall-new__answer-label ${answerLabelClass}`}>
            ▸ Klucz odpowiedzi
          </div>
          <p className={`active-recall-new__answer-text ${answerTextClass}`}>{answer}</p>
          {examRef && (
            <div className={`active-recall-new__examref ${examRefClass}`}>
              Źródło: {examRef}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
