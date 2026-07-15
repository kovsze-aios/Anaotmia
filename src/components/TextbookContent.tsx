"use client";

import React from "react";
import { ActiveRecall } from "./ActiveRecall";
import { AnatomyFigure } from "./AnatomyFigure";
import type { TextbookSection } from "@/types/textbook";

interface TextbookContentProps {
  section: TextbookSection;
}

export function TextbookContent({ section }: TextbookContentProps) {
  return (
    <article className="textbook-article">
      <h1 className="textbook-article__title">{section.title}</h1>

      <div className="high-yield-section mb-8">
        <h3 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase mb-3">
          Szybka Powtórka (High-Yield)
        </h3>
        {section.recallQuestions.length > 0 && (
          <div className="flex flex-col gap-2">
            {section.recallQuestions.map((q) => (
              <ActiveRecall
                key={q.id}
                question={q.question}
                answer={q.answer}
                examRef={q.examRef}
              />
            ))}
          </div>
        )}
      </div>

      <div className="deep-theory-section border-t border-zinc-100 dark:border-zinc-800 pt-6">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between bg-zinc-100 px-4 py-3 font-semibold dark:bg-zinc-900 list-none">
            Rozwiń pełny opis akademicki (Bochenek/Lewiński)
            <span className="transition group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-4 prose prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed textbook-article__content">
            {section.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={index} className="textbook-paragraph">{block.text}</p>;
                case "heading": {
                  const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
                  return <Tag key={index} className={`textbook-heading h${block.level}`}>{block.text}</Tag>;
                }
                case "list":
                  return (
                    <ul key={index} className="textbook-list">
                      {block.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  );
                case "table":
                  return (
                    <div key={index} className="textbook-table-wrapper">
                      <table className="textbook-table">
                        {block.headers.length > 0 && (
                          <thead><tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                        )}
                        <tbody>
                          {block.rows.map((row, i) => (
                            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                case "image":
                  return <AnatomyFigure key={index} src={block.src} caption={block.caption} source={block.source} />;
                default:
                  return null;
              }
            })}
          </div>
        </details>
      </div>
    </article>
  );
}
