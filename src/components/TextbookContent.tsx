"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { TableOfContents, ToCItem } from "./TableOfContents";
import { ActiveRecall } from "./ActiveRecall";
import { AnatomyFigure } from "./AnatomyFigure";
import type { TextbookSection, ContentBlock } from "@/server/models";
import type { TextbookFigure } from "@/types/textbook-figures";
import { formatOcrText, getSectionWordCount, uniqueId } from "@/lib/textbookFormatting";
import { AnatomicalTextLinker, AnatomyRichText } from "./textbook/AnatomyRichText";
import { TextbookFigureCard } from "./textbook/TextbookFigureCard";
import { getFiguresForChapter } from "@/data/textbook-figures";


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

function scoreTextForFigure(text: string, figure: TextbookFigure): number {
  const normalized = text.replace(/<[^>]+>/g, " ").toLowerCase();
  const terms = [
    figure.titlePl,
    ...figure.hotspots.map((h) => h.labelPl),
  ]
    .join(" ")
    .toLowerCase()
    .split(/[^a-ząćęłńóśźż0-9]+/)
    .filter((w) => w.length >= 4);

  let score = 0;
  for (const term of new Set(terms)) {
    if (normalized.includes(term)) score += 1;
  }
  return score;
}

type HtmlWithFigureSegment =
  | { kind: "html"; html: string }
  | { kind: "figure"; figure: TextbookFigure };

function interleaveFiguresInHtml(
  html: string,
  figures: TextbookFigure[],
): HtmlWithFigureSegment[] {
  if (figures.length === 0) {
    return [{ kind: "html", html }];
  }

  const boundaryRegex = /<\/(?:p|h[2-4]|ul|ol|table)>/gi;
  const boundaries: number[] = [];
  let match: RegExpExecArray | null;
  while ((match = boundaryRegex.exec(html)) !== null) {
    boundaries.push(match.index + match[0].length);
  }

  if (boundaries.length === 0) {
    return [
      { kind: "html", html },
      ...figures.map((figure): HtmlWithFigureSegment => ({ kind: "figure", figure })),
    ];
  }

  const blockChunks: string[] = [];
  let prev = 0;
  for (const endPos of boundaries) {
    blockChunks.push(html.slice(prev, endPos));
    prev = endPos;
  }
  const trailing = html.slice(prev);

  const figsByBlock = new Map<number, TextbookFigure[]>();
  const usedBlockIndices = new Set<number>();

  figures.forEach((figure, figIdx) => {
    let bestIdx = Math.min(
      Math.floor(((figIdx + 1) * blockChunks.length) / (figures.length + 1)),
      blockChunks.length - 1,
    );
    let bestScore = 0;

    for (let i = 0; i < blockChunks.length; i++) {
      const score = scoreTextForFigure(blockChunks[i], figure);
      if (score > bestScore || (score === bestScore && score > 0 && !usedBlockIndices.has(i))) {
        bestScore = score;
        bestIdx = i;
      }
    }

    usedBlockIndices.add(bestIdx);
    const list = figsByBlock.get(bestIdx) ?? [];
    list.push(figure);
    figsByBlock.set(bestIdx, list);
  });

  const segments: HtmlWithFigureSegment[] = [];
  let currentHtml = "";

  blockChunks.forEach((chunk, idx) => {
    currentHtml += chunk;
    const figs = figsByBlock.get(idx);
    if (figs && figs.length > 0) {
      if (currentHtml) {
        segments.push({ kind: "html", html: currentHtml });
        currentHtml = "";
      }
      for (const figure of figs) {
        segments.push({ kind: "figure", figure });
      }
    }
  });

  currentHtml += trailing;
  if (currentHtml.trim()) {
    segments.push({ kind: "html", html: currentHtml });
  }

  return segments;
}

export function TextbookContent({
  section,
  subject,
  linkAnatomy = false,
}: TextbookContentProps) {
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

  // Map chapter figures to their most relevant prose page so each figure appears inline.
  const figuresByPageIndex = useMemo(() => {
    const map = new Map<number, TextbookFigure[]>();
    if (!section.pages || section.pages.length === 0 || chapterFigures.length === 0) {
      return map;
    }

    const contentPageIndices = section.pages
      .map((p, idx) => ({ p, idx }))
      .filter(({ p }) => !p.htmlContent.includes("Wytyczne CKE i Pewniaki Maturalne"))
      .map(({ idx }) => idx);

    const candidateIndices =
      contentPageIndices.length > 0
        ? contentPageIndices
        : section.pages.map((_, idx) => idx);

    chapterFigures.forEach((figure, figIdx) => {
      let bestPageIdx = candidateIndices[figIdx % candidateIndices.length];
      let bestScore = 0;

      for (const pageIdx of candidateIndices) {
        const s = scoreTextForFigure(section.pages![pageIdx].htmlContent, figure);
        if (s > bestScore) {
          bestScore = s;
          bestPageIdx = pageIdx;
        }
      }

      const list = map.get(bestPageIdx) ?? [];
      list.push(figure);
      map.set(bestPageIdx, list);
    });

    return map;
  }, [section.pages, chapterFigures]);

  const unplacedFiguresForBlocks =
    !section.pages || section.pages.length === 0 ? chapterFigures : [];

  return (
    <article className="textbook-article relative pt-4">
      <ScrollProgressBar />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h1 className="textbook-article__title !mb-0">{section.title}</h1>
        <span className="whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800">
          ⏱ Czas czytania: ~{readingTime} min
        </span>
      </div>

      <div className="high-yield-section mb-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
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
        <div className="structured-pages-section mb-8 flex flex-col gap-8">
          {section.toc && section.toc.length > 0 && (
            <TableOfContents
              items={section.toc.map((t) => ({ id: t.anchorId, title: t.title, level: 3 }))}
            />
          )}
          {section.pages.map((page, pageIndex) => {
            const pageFigures = figuresByPageIndex.get(pageIndex) ?? [];
            const segments = interleaveFiguresInHtml(page.htmlContent, pageFigures);

            return (
              <section
                key={pageIndex}
                className="page-card rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:border-zinc-800">
                  <span>Strona {page.pageNumber}</span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    Microlearning
                  </span>
                </div>
                <div className="space-y-4">
                  {segments.map((seg, segIdx) =>
                    seg.kind === "figure" ? (
                      <TextbookFigureCard key={seg.figure.id} figure={seg.figure} />
                    ) : linkAnatomy ? (
                      <AnatomyRichText
                        key={`html-${segIdx}`}
                        html={seg.html}
                        className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed"
                      />
                    ) : (
                      <div
                        key={`html-${segIdx}`}
                        className="prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: seg.html }}
                      />
                    ),
                  )}
                </div>
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

        if (allSources.length === 0 && !hasContentBlocks && unplacedFiguresForBlocks.length === 0) {
          return null;
        }

        const contentBlocks = section.content ?? [];
        const figureInsertIndexByBlock = new Map<number, TextbookFigure[]>();
        const remainingForSources: TextbookFigure[] = [];

        if (unplacedFiguresForBlocks.length > 0) {
          if (hasContentBlocks) {
            unplacedFiguresForBlocks.forEach((fig, idx) => {
              let bestIdx = Math.min(idx, contentBlocks.length - 1);
              let bestScore = 0;
              contentBlocks.forEach((b, bIdx) => {
                const txt =
                  "text" in b
                    ? b.text
                    : "items" in b
                      ? b.items.join(" ")
                      : "";
                const s = scoreTextForFigure(txt, fig);
                if (s > bestScore) {
                  bestScore = s;
                  bestIdx = bIdx;
                }
              });
              const arr = figureInsertIndexByBlock.get(bestIdx) ?? [];
              arr.push(fig);
              figureInsertIndexByBlock.set(bestIdx, arr);
            });
          } else {
            remainingForSources.push(...unplacedFiguresForBlocks);
          }
        }

        return (
          <div className="deep-theory-section border-t border-zinc-100 pt-6 dark:border-zinc-800">
            {allSources.length === 1 ? (
              <>
                <h3 className="mb-4 text-xl font-bold">Pełny opis akademicki</h3>
                <MarkdownBlock text={allSources[0].content} />
              </>
            ) : allSources.length > 1 ? (
              <div className="flex flex-col gap-4">
                {allSources.map((src, i) => (
                  <details key={i} className="group" open={false}>
                    <summary
                      className="flex cursor-pointer items-center justify-between rounded bg-zinc-100 px-4 py-3 font-semibold list-none [&::-webkit-details-marker]:hidden focus-ring dark:bg-zinc-900"
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

            {remainingForSources.map((fig) => (
              <TextbookFigureCard key={fig.id} figure={fig} />
            ))}

            {hasContentBlocks && (
              <div className="mt-4 prose prose-sm md:prose-base prose-zinc dark:prose-invert max-w-none text-justify leading-relaxed textbook-article__content">
                {contentBlocks.map((block, index) => (
                  <React.Fragment key={index}>
                    <ContentBlockRenderer
                      block={block}
                      linkAnatomy={linkAnatomy}
                    />
                    {(figureInsertIndexByBlock.get(index) ?? []).map((fig) => (
                      <TextbookFigureCard key={fig.id} figure={fig} />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {(() => {
        const baseMaturaSubject = subject?.replace(/-matura-(?:2015|2023)$/, "");
        const isMaturaSubject =
          baseMaturaSubject === "biologia" ||
          baseMaturaSubject === "chemia" ||
          baseMaturaSubject === "fizyka" ||
          baseMaturaSubject === "matematyka";

        if (!isMaturaSubject || !baseMaturaSubject) return null;

        const formulaSuffix = subject?.includes("2015") ? "?formula=2015" : "";
        return (
          <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <Link
              href={`/theory/${baseMaturaSubject}${formulaSuffix}#sekcja-matura`}
              className="focus-ring group flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Zadania maturalne CKE z tego działu
                </p>
                <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                  Pełne arkusze CKE 1:1 z oryginalnymi stronami PDF i kluczem odpowiedzi
                </p>
              </div>
              <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-zinc-700 transition-transform group-hover:translate-x-0.5 dark:text-zinc-300">
                Przejdź do arkuszy 1:1 →
              </span>
            </Link>
          </div>
        );
      })()}

      {(section.licenseAttribution ?? section.ckeMetadata?.licenseAttribution) && (
        <footer
          data-testid="license-attribution-footer"
          className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:text-zinc-400"
        >
          📜 {section.licenseAttribution ?? section.ckeMetadata?.licenseAttribution}
        </footer>
      )}
    </article>
  );
}
