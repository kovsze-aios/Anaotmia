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

      <div className="textbook-article__content">
        {section.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className="textbook-paragraph">
                  {block.text}
                </p>
              );
            case "heading": {
              const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
              return (
                <Tag key={index} className={`textbook-heading h${block.level}`}>
                  {block.text}
                </Tag>
              );
            }
            case "list":
              return (
                <ul key={index} className="textbook-list">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "table":
              return (
                <div key={index} className="textbook-table-wrapper">
                  <table className="textbook-table">
                    {block.headers.length > 0 && (
                      <thead>
                        <tr>
                          {block.headers.map((h, i) => (
                            <th key={i}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {block.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            case "image":
              return (
                <AnatomyFigure
                  key={index}
                  src={block.src}
                  caption={block.caption}
                  source={block.source}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      {section.recallQuestions.length > 0 && (
        <div className="textbook-article__recall-section">
          <h3 className="textbook-article__recall-header">
            Sprawdź swoją wiedzę (Active Recall)
          </h3>
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
    </article>
  );
}
