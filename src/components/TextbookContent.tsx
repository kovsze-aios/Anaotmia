"use client";

import React, { useEffect, useMemo, useState } from "react";
import { TableOfContents, ToCItem } from "./TableOfContents";
import { ActiveRecall } from "./ActiveRecall";
import { AnatomyFigure } from "./AnatomyFigure";
import type { TextbookSection, ContentBlock } from "@/types/textbook";


function generateId(text: string) {
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-');
}

function parseMarkdownContent(text: string) {
  const parts = text.split(/^(#{1,6})\s+(.+)$/gm);
  const nodes: React.ReactNode[] = [];
  const headers: ToCItem[] = [];

  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) {
      nodes.push(<span key={`text-${i}`}>{parts[i]}</span>);
    }
    if (i + 1 < parts.length) {
      const level = parts[i + 1].length;
      const title = parts[i + 2];
      const id = generateId(title);
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

      const textSizeClass = level === 2 ? 'text-2xl' : level === 3 ? 'text-xl' : 'text-lg';
      nodes.push(
        <Tag key={`h-${i}`} id={id} className={`scroll-mt-20 font-bold mt-6 mb-4 ${textSizeClass}`}>
          {title}
        </Tag>
      );
      headers.push({ level, title, id });
    }
  }
  return { nodes, headers };
}

interface TextbookContentProps {
  section: TextbookSection;
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="textbook-paragraph">{block.text}</p>;
    case "heading": {
      const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
      return <Tag className={`textbook-heading h${block.level}`}>{block.text}</Tag>;
    }
    case "list":
      return (
        <ul className="textbook-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case "table":
      return (
        <div className="textbook-table-wrapper">
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
      return <AnatomyFigure src={block.src} caption={block.caption} source={block.source} />;
    default:
      return null;
  }
}

function getSectionWordCount(section: TextbookSection): number {
  let count = 0;

  const countWords = (text: string) => text.split(/\s+/).filter(word => word.length > 0).length;

  if (section.summary) count += countWords(section.summary);
  if (section.academic_detail) count += countWords(section.academic_detail);

  if (section.academic_sources) {
    section.academic_sources.forEach(src => {
      count += countWords(src.content);
    });
  }

  if (section.content) {
    section.content.forEach(block => {
      if (block.type === 'paragraph' || block.type === 'heading') {
        count += countWords(block.text);
      }
    });
  }

  return count;
}

function MarkdownBlock({ text }: { text: string }) {
  const { nodes, headers } = useMemo(() => parseMarkdownContent(text), [text]);
  return (
    <>
      <TableOfContents items={headers} />
      <div className="mt-4 prose prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed textbook-article__content whitespace-pre-wrap">
        {nodes}
      </div>
    </>
  );
}
}

export function TextbookContent({ section }: TextbookContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const wordCount = getSectionWordCount(section);
  const readingTime = Math.ceil(wordCount / 200) || 1;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;

      requestAnimationFrame(() => setScrollProgress((totalScroll / windowHeight) * 100));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="textbook-article relative pt-4">
      <div
        className="fixed top-0 left-0 h-[2px] bg-blue-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <h1 className="textbook-article__title !mb-0">{section.title}</h1>
        <span className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full whitespace-nowrap border border-zinc-200 dark:border-zinc-700 font-medium">
          ⏱ Czas czytania: ~{readingTime} min
        </span>
      </div>

      <div className="high-yield-section mb-8">
        <h3 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase mb-3">
          Szybka Powtórka (High-Yield)
        </h3>

        {section.summary && (
          <div className="mb-6 prose prose-zinc dark:prose-invert max-w-none text-justify">
            {section.summary.split('\n').map((line, idx) => {
              if (line.trim().startsWith('-')) {
                return <li key={idx} className="ml-4 list-disc">{line.replace(/^-\s*/, '')}</li>;
              }
              return <p key={idx}>{line}</p>;
            })}
          </div>
        )}

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

      {(() => {
        const sources = section.academic_sources || [];
        const hasAcademicDetail = !!section.academic_detail;
        const hasContentBlocks = section.content && section.content.length > 0;

        let sourceCount = sources.length;
        if (hasAcademicDetail) sourceCount++;
        if (hasContentBlocks) sourceCount++;

        if (sourceCount === 0) return null;

        return (
          <div className="deep-theory-section border-t border-zinc-100 dark:border-zinc-800 pt-6">
            {sources.length === 1 ? (
              <>
                <h3 className="text-xl font-bold mb-4">Pełny opis akademicki</h3>
                <MarkdownBlock text={sources[0].content} />
              </>
            ) : sources.length > 1 ? (
              <div className="flex flex-col gap-4">
                {sources.map((src, i) => (
                  <details key={i} className="group">
                    <summary
                      className="flex cursor-pointer items-center justify-between bg-zinc-100 px-4 py-3 font-semibold dark:bg-zinc-900 list-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          e.currentTarget.parentElement?.toggleAttribute('open');
                        }
                      }}
                    >
                      {src.title}
                      <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-4"><MarkdownBlock text={src.content} /></div>
                  </details>
                ))}
              </div>
            ) : (
              // Fallback for single source in academic_detail or content blocks
              <>
                <h3 className="text-xl font-bold mb-4">Pełny opis akademicki</h3>
                {hasAcademicDetail && (
                  <MarkdownBlock text={section.academic_detail || ""} />
                )}
                {hasContentBlocks && (
                  <div className="mt-4 prose prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed textbook-article__content">
                    {section.content.map((block, index) => (
                      <ContentBlockRenderer key={index} block={block} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        );
      })()}
    </article>
  );
}
