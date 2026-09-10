"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TableOfContents, ToCItem } from "./TableOfContents";
import { ActiveRecall } from "./ActiveRecall";
import { AnatomyFigure } from "./AnatomyFigure";
import type { TextbookSection, ContentBlock } from "@/server/models";
import { formatOcrText, getSectionWordCount, uniqueId } from "@/lib/textbookFormatting";
import { AnatomyRichText } from "./textbook/AnatomyRichText";
import { AtlasPeekDrawer } from "./textbook/AtlasPeekDrawer";


function parseMarkdownContent(text: string) {

  const parts = text.split(/^(#{1,6})\s+(.+)$/gm);
  const nodes: React.ReactNode[] = [];
  const headers: ToCItem[] = [];
  const usedIds = new Map<string, number>();

  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) {
      const formattedText = formatOcrText(parts[i]);
      const paragraphs = formattedText.split(/\n\n+/);
      const paraNodes = paragraphs.filter(p => p.trim() !== "").map((p, idx) => <p key={`text-${i}-${idx}`}>{p}</p>);
      nodes.push(<React.Fragment key={`frag-${i}`}>{paraNodes}</React.Fragment>);
    }
    if (i + 1 < parts.length) {
      const level = parts[i + 1].length;
      const title = parts[i + 2];
      const id = uniqueId(title, usedIds);
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
  /**
   * Turns chapter words that name an anatomical structure into links into the
   * 3D atlas. Off by default: the atlas models human anatomy, so the terms
   * mean something in the anatomy and physiology corpora and would be noise in
   * a chemistry chapter that happens to mention "jelito".
   */
  linkAnatomy?: boolean;
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

function MarkdownBlock({ text }: { text: string }) {
  const { nodes, headers } = useMemo(() => parseMarkdownContent(text), [text]);
  return (
    <>
      <TableOfContents items={headers} />
      <div className="mt-4 prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed textbook-article__content">
        {nodes}
      </div>
    </>
  );
}

// Bolt: Extracted scroll progress state into a separate component
// to prevent the entire TextbookContent from re-rendering on every scroll event.
function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div
      className="fixed top-0 left-0 h-[2px] bg-zinc-900 dark:bg-zinc-100 z-50 transition-all duration-150"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export function TextbookContent({ section, linkAnatomy = false }: TextbookContentProps) {
  // Which structure the 3D drawer is showing, if any. Null keeps the viewer
  // unmounted, so its chunk is never even fetched until a reader asks.
  const [atlasFocus, setAtlasFocus] = useState<{ name: string; label: string } | null>(
    null,
  );
  const openAtlas = useCallback(
    (name: string, label: string) => setAtlasFocus({ name, label }),
    [],
  );
  const closeAtlas = useCallback(() => setAtlasFocus(null), []);

  // The corpus is static per route, so the count is stable — memoising it
  // stops a full text rescan on every re-render (theme toggle, etc.).
  const wordCount = useMemo(() => getSectionWordCount(section), [section]);
  const readingTime = Math.ceil(wordCount / 200) || 1;

  return (
    <article className="textbook-article relative pt-4">
      <ScrollProgressBar />

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
          <div className="mb-6 prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify">
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

      {section.pages && section.pages.length > 0 && (
        <div className="structured-pages-section flex flex-col gap-8 mb-8">
          {section.toc && section.toc.length > 0 && (
            <TableOfContents
              items={section.toc.map((t) => ({ id: t.anchorId, title: t.title, level: 3 }))}
            />
          )}
          {section.pages.map((page) => (
            <section
              key={page.pageNumber}
              className="page-card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                <span>Strona {page.pageNumber}</span>
                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-600 dark:text-zinc-300">
                  Microlearning
                </span>
              </div>
              {linkAnatomy ? (
                <AnatomyRichText
                  html={page.htmlContent}
                  onSelectTerm={openAtlas}
                  className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed"
                />
              ) : (
                <div
                  className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: page.htmlContent }}
                />
              )}
            </section>
          ))}
        </div>
      )}

      {(() => {
        const allSources = [];
        if (!section.pages && section.academic_detail) {
          allSources.push({ title: "Notatki", content: section.academic_detail });
        }
        if (section.academic_sources) {
          allSources.push(...section.academic_sources);
        }

        const hasContentBlocks = section.content && section.content.length > 0;

        if (allSources.length === 0 && !hasContentBlocks) return null;

        return (
          <div className="deep-theory-section border-t border-zinc-100 dark:border-zinc-800 pt-6">

            {allSources.length === 1 ? (
              <>
                <h3 className="text-xl font-bold mb-4">Pełny opis akademicki</h3>
                <MarkdownBlock text={allSources[0].content} />
              </>
            ) : allSources.length > 1 ? (
              <div className="flex flex-col gap-4">
                {allSources.map((src, i) => (
                  <details key={i} className="group" open={false}>
                    <summary
                      className="flex cursor-pointer items-center justify-between bg-zinc-100 px-4 py-3 font-semibold dark:bg-zinc-900 list-none [&::-webkit-details-marker]:hidden focus-ring rounded"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          e.currentTarget.parentElement?.toggleAttribute('open');
                        }
                      }}
                    >
                      Rozwiń pełny opis akademicki: {src.title}
                    </summary>
                    <div className="px-4"><MarkdownBlock text={src.content} /></div>
                  </details>
                ))}
              </div>
            ) : null}

            {hasContentBlocks && (
              <div className="mt-4 prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed textbook-article__content">
                {section.content.map((block, index) => (
                  <ContentBlockRenderer key={index} block={block} />
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {linkAnatomy && (
        <AtlasPeekDrawer
          focusName={atlasFocus?.name ?? null}
          label={atlasFocus?.label ?? ""}
          onClose={closeAtlas}
        />
      )}
    </article>
  );
}
