"use client";

import { useState, useEffect } from "react";

interface ActiveRecallProps {
  question: string;
  answer: string;
  examRef?: string;
}

export function ActiveRecall({ question, answer, examRef }: ActiveRecallProps) {
  const [revealed, setRevealed] = useState(false);
  const [dark, setDark] = useState(false);

  /* Watch for .dark class on <html> */
  useEffect(() => {
    const html = document.documentElement;
    const checkDark = () => {
      const isDark = html.classList.contains("dark");
      setDark((prevDark) => (prevDark !== isDark ? isDark : prevDark));
    };

    // Initial check (avoiding synchronous setState issue if possible, but actually we just delay it or rely on functional update)
    // Wait for a microtask to avoid cascading renders warning
    Promise.resolve().then(checkDark);

    const obs = new MutationObserver(() => {
      checkDark();
    });
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

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

  /* Theme-aware answer box styles */
  const answerBoxClass = dark
    ? "bg-white text-black font-mono"    // NOIR: high-contrast white block
    : "bg-zinc-900 text-zinc-100 font-mono"; // Light: stark dark container

  const answerLabelClass = dark
    ? "text-black"
    : "text-zinc-100";

  const answerTextClass = dark
    ? "text-black"
    : "text-zinc-100";

  const examRefClass = dark
    ? "text-zinc-600 border-zinc-300"
    : "text-zinc-400 border-zinc-600";

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
