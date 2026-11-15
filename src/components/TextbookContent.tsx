"use client";

import React, { useEffect, useMemo, useState } from "react";
import { TableOfContents, ToCItem } from "./TableOfContents";
import { ActiveRecall } from "./ActiveRecall";
import { AnatomyFigure } from "./AnatomyFigure";
import type { TextbookSection, ContentBlock } from "@/server/models";
import { formatOcrText, getSectionWordCount, uniqueId } from "@/lib/textbookFormatting";
import { AnatomicalTextLinker, AnatomyRichText } from "./textbook/AnatomyRichText";
import { TextbookFigureCard } from "./textbook/TextbookFigureCard";
import { getFiguresForChapter } from "@/data/textbook-figures";
import {
  CkeStatusBadge,
  CurriculumModeSwitcher,
  isTierRequiredInMode,
  useCurriculumViewMode,
} from "./matura/CkeFormulaControls";
import {
  CkeChapterCallout,
  CkeExamSheetsRepositoryView,
  CkeExamTasksSection,
} from "./matura/CkeExamTasksSection";


function parseMarkdownContent(text: string = "") {

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
  subject?: string;
  /**
   * Turns chapter words that name an anatomical structure into links into the
   * 3D atlas. Off by default: the atlas models human anatomy, so the terms
   * mean something in the anatomy and physiology corpora and would be noise in
   * a chemistry chapter that happens to mention "jelito".
   */
  linkAnatomy?: boolean;
}

function ContentBlockRenderer({
  block,
  linkAnatomy = false,
}: {
  block: ContentBlock;
  linkAnatomy?: boolean;
}) {
  switch (block.type) {
    case "paragraph":
      return linkAnatomy ? (
        <AnatomicalTextLinker
          html={`<p>${block.text}</p>`}
          className="textbook-paragraph"
        />
      ) : (
        <p className="textbook-paragraph">{block.text}</p>
      );
    case "heading": {
      const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
      return <Tag className={`textbook-heading h${block.level}`}>{block.text}</Tag>;
    }
    case "list":
      return (
        <ul className="textbook-list">
          {block.items.map((item, i) => (
            <li key={i}>
              {linkAnatomy ? (
                <AnatomicalTextLinker
                  html={item}
                  className="inline"
                />
              ) : (
                item
              )}
            </li>
          ))}
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

export function TextbookContent({
  section,
  subject,
  linkAnatomy = false,
}: TextbookContentProps) {
  const [viewMode, setViewMode] = useCurriculumViewMode(subject);

  // The corpus is static per route, so the count is stable — memoising it
  // stops a full text rescan on every re-render (theme toggle, etc.).
  const wordCount = useMemo(() => getSectionWordCount(section), [section]);
  const readingTime = Math.ceil(wordCount / 200) || 1;
  const chapterFigures = useMemo(
    () =>
      getFiguresForChapter({
        subject,
        chapterId: section.id,
        chapterTitle: section.title,
      }),
    [subject, section.id, section.title],
  );
  const hasCke = Boolean(section.ckeMetadata);
  const isChapterRequiredInMode =
    !section.ckeMetadata ||
    isTierRequiredInMode(
      viewMode,
      section.ckeMetadata.tier ?? section.ckeMetadata.status,
      section.ckeMetadata.formulas,
    );

  return (
    <article className="textbook-article relative pt-4">
      <ScrollProgressBar />

      {hasCke && (
        <div className="mb-5 rounded-xl border border-zinc-800 bg-zinc-950/90 p-3">
          <CurriculumModeSwitcher
            value={viewMode}
            onChange={setViewMode}
            compact
          />
        </div>
      )}

      {hasCke && viewMode === "cke-exams" ? (
        <CkeExamSheetsRepositoryView
          subject={subject}
          onExitExamMode={() => setViewMode("full")}
        />
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h1 className="textbook-article__title !mb-0">{section.title}</h1>
            {section.ckeMetadata && (
              <div className="flex flex-wrap items-center gap-2">
                <CkeStatusBadge
                  tier={section.ckeMetadata.tier}
                  status={section.ckeMetadata.status}
                />
                <span className="rounded border border-zinc-700/80 bg-zinc-900/90 px-2 py-0.5 text-[11px] font-semibold text-zinc-300">
                  {section.ckeMetadata.sectionCode}
                </span>
                {section.ckeMetadata.requirementCodes.slice(0, 4).map((code) => (
                  <span
                    key={code}
                    className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400"
                  >
                    {code}
                  </span>
                ))}
              </div>
            )}
            <span className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full whitespace-nowrap border border-zinc-200 dark:border-zinc-700 font-medium">
              ⏱ Czas czytania: ~{readingTime} min
            </span>
          </div>

          {section.ckeMetadata && !isChapterRequiredInMode && (
            <div className="mb-6 rounded-lg border border-amber-800/60 bg-amber-950/30 px-4 py-2.5 text-xs text-amber-200">
              Ten temat ma oznaczenie{" "}
              <strong>
                {section.ckeMetadata.tier === "academic-extra"
                  ? "EXTRA / STUDIA"
                  : section.ckeMetadata.tier === "cke-2015-only"
                    ? "FORMUŁA 2015"
                    : "NOWA 2023+"}
              </strong>{" "}
              i wykracza poza wybrany filtr egzaminacyjny (czytany jako materiał poszerzający).
            </div>
          )}

          <CkeChapterCallout metadata={section.ckeMetadata} />

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

      {chapterFigures.length > 0 && (
        <section
          aria-label="Ryciny i schematy anatomiczne"
          className="mb-8"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Ryciny i schematy
            </h2>
            <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
              {chapterFigures.length}{" "}
              {chapterFigures.length === 1 ? "rycina" : "ryciny"}
            </span>
          </div>
          {chapterFigures.map((fig) => (
            <TextbookFigureCard key={fig.id} figure={fig} />
          ))}
        </section>
      )}

      {section.pages && section.pages.length > 0 && (
        <div className="structured-pages-section flex flex-col gap-8 mb-8">
          {section.toc && section.toc.length > 0 && (
            <TableOfContents
              items={section.toc.map((t) => ({ id: t.anchorId, title: t.title, level: 3 }))}
            />
          )}
          {section.pages.map((page, pageIndex) => {
            const isCkeGuidelinesPage = page.htmlContent.includes(
              "Wytyczne CKE i Pewniaki Maturalne",
            );
            return (
              <section
                key={pageIndex}
                className={
                  isCkeGuidelinesPage
                    ? "page-card bg-zinc-950/95 border border-zinc-700 rounded-xl p-6 shadow-md text-zinc-100"
                    : "page-card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm"
                }
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <span>Strona {page.pageNumber}</span>
                  <span
                    className={
                      isCkeGuidelinesPage
                        ? "bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 rounded text-zinc-200"
                        : "bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-600 dark:text-zinc-300"
                    }
                  >
                    {isCkeGuidelinesPage ? "Klucz CKE i Pewniaki" : "Microlearning"}
                  </span>
                </div>
                {linkAnatomy ? (
                  <AnatomyRichText
                    html={page.htmlContent}
                    className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed"
                  />
                ) : (
                  <div
                    className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: page.htmlContent }}
                  />
                )}
              </section>
            );
          })}
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
                  <ContentBlockRenderer
                    key={index}
                    block={block}
                    linkAnatomy={linkAnatomy}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })()}

      <CkeExamTasksSection
        subject={subject}
        chapterId={section.id}
        chapterTitle={section.title}
        sectionCode={section.ckeMetadata?.sectionCode}
      />

      {(section.licenseAttribution ?? section.ckeMetadata?.licenseAttribution) && (
        <footer
          data-testid="license-attribution-footer"
          className="mt-8 rounded-lg border border-zinc-800/80 bg-zinc-950/60 px-4 py-2.5 text-xs text-zinc-400"
        >
          📜 {section.licenseAttribution ?? section.ckeMetadata?.licenseAttribution}
        </footer>
      )}
        </>
      )}
    </article>
  );
}
