"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  findAnatomyTerms,
  findTextbookAnatomyTerms,
  type AnatomyTermMatch,
} from "@/lib/anatomyLinks";
import { getAnatomicalEntity } from "@/data/anatomy-entities";

/**
 * Renders chapter HTML as React, linking the anatomy it mentions with a
 * Two-Tier UX:
 *   - First-Occurrence Anti-Clutter Rule: links only the 1st occurrence of
 *     each unique anatomical entity per page/section.
 *   - Tier 1 (Zero WebGL): lightweight NOIR hover preview card (250ms debounce)
 *     showing Polish/Latin name, system badge, 1-sentence summary, and CTA.
 *   - Tier 2 (Click): opens the Contextual 3D Inspector Drawer focused on the
 *     corresponding organ mesh + sub-pins.
 */

/** Safe structural tags the ingestion pipelines may produce. */
const ALLOWED = new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "ul",
  "ol",
  "li",
  "h2",
  "h3",
  "h4",
  "span",
  "code",
  "sub",
  "sup",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "blockquote",
]);

/** Void elements never have a closing tag. */
const VOID = new Set(["br"]);

const TAG = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
};

function decode(text: string): string {
  return text.replace(
    /&(?:nbsp|amp|lt|gt|quot|apos|#39);/g,
    (m) => ENTITIES[m] ?? m,
  );
}

/** `id` and `start` are the only attributes the pipeline may emit. */
function readAttrs(raw: string): { id?: string; start?: number } {
  const out: { id?: string; start?: number } = {};
  const id = /\bid\s*=\s*"([^"]*)"/.exec(raw);
  if (id) out.id = id[1];
  const start = /\bstart\s*=\s*"(\d+)"/.exec(raw);
  if (start) out.start = Number(start[1]);
  return out;
}

export interface AnatomyRichTextProps {
  html: string;
  /** Called with the BodyParts3D name / meshId when a linked structure is clicked. */
  onSelectTerm?: (englishName: string, label: string) => void;
  /** Off for subjects the 3D atlas does not cover. */
  linkTerms?: boolean;
  className?: string;
}

export interface ParseChapterHtmlOptions {
  /** Only link the first occurrence of each entity per parsed block/page. Default: true. */
  firstOccurrenceOnly?: boolean;
  /** Match explicit short entity forms (e.g. "serce", "nerka", "płuco") in addition to stem matcher. */
  useExtendedEntities?: boolean;
  onHoverMatch?: (match: AnatomyTermMatch, rect: DOMRect | null) => void;
  onLeaveMatch?: () => void;
}

interface Frame {
  tag: string;
  attrs: { id?: string; start?: number };
  children: React.ReactNode[];
}

interface ActivePreview {
  match: AnatomyTermMatch;
  top: number;
  left: number;
}

export function AnatomyRichText({
  html,
  onSelectTerm,
  linkTerms = true,
  className,
}: AnatomyRichTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [preview, setPreview] = useState<ActivePreview | null>(null);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const handleHoverMatch = useCallback(
    (match: AnatomyTermMatch, rect: DOMRect | null) => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
      openTimerRef.current = setTimeout(() => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        let top = 8;
        let left = 8;
        if (rect && containerRect) {
          top = Math.max(0, rect.bottom - containerRect.top + 8);
          left = Math.max(
            0,
            Math.min(
              rect.left - containerRect.left,
              Math.max(0, containerRect.width - 330),
            ),
          );
        }
        setPreview({ match, top, left });
      }, 250);
    },
    [],
  );

  const handleLeaveMatch = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    closeTimerRef.current = setTimeout(() => {
      setPreview(null);
    }, 140);
  }, []);

  const nodes = React.useMemo(
    () =>
      parseChapterHtml(html, linkTerms, onSelectTerm, {
        firstOccurrenceOnly: true,
        useExtendedEntities: true,
        onHoverMatch: handleHoverMatch,
        onLeaveMatch: handleLeaveMatch,
      }),
    [html, linkTerms, onSelectTerm, handleHoverMatch, handleLeaveMatch],
  );

  const entity = preview
    ? (preview.match.entity ?? getAnatomicalEntity(preview.match.englishName))
    : undefined;

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {nodes}
      {preview && (
        <div
          role="tooltip"
          data-testid="anatomy-hover-card"
          onMouseEnter={() => {
            if (closeTimerRef.current) {
              clearTimeout(closeTimerRef.current);
              closeTimerRef.current = null;
            }
          }}
          onMouseLeave={handleLeaveMatch}
          style={{ top: preview.top, left: preview.left }}
          className="absolute z-50 w-80 max-w-[90vw] rounded-xl bg-zinc-950/95 border border-zinc-800 p-3.5 text-left text-zinc-200 shadow-2xl backdrop-blur-md"
        >
          <div className="mb-1.5 flex items-start justify-between gap-2">
            <div>
              <div className="text-sm font-bold text-zinc-100">
                {entity?.namePl ?? preview.match.pl}
              </div>
              <div className="text-xs italic text-zinc-400">
                {entity?.nameLat ?? preview.match.latin}
              </div>
            </div>
            <span className="shrink-0 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              {entity?.system ?? "Anatomia"}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-zinc-300">
            {entity?.summary ??
              `${entity?.namePl ?? preview.match.pl} (${entity?.nameLat ?? preview.match.latin}) — struktura anatomiczna człowieka.`}
          </p>
        </div>
      )}
    </div>
  );
}

/** Semantic alias requested by the Contextual 3D Atlas Pro architecture. */
export const AnatomicalTextLinker = AnatomyRichText;

export function parseChapterHtml(
  html: string,
  linkTerms: boolean,
  onSelectTerm?: (englishName: string, label: string) => void,
  options: ParseChapterHtmlOptions = {},
): React.ReactNode[] {
  const root: Frame = { tag: "#root", attrs: {}, children: [] };
  const stack: Frame[] = [root];
  const seenEntities = new Set<string>();
  const firstOccurrenceOnly = options.firstOccurrenceOnly ?? true;
  let cursor = 0;
  let key = 0;

  const top = () => stack[stack.length - 1];

  const pushText = (raw: string) => {
    if (!raw) return;
    const text = decode(raw);
    if (!text) return;
    top().children.push(
      ...(linkTerms
        ? linkify(text, onSelectTerm, () => key++, seenEntities, {
            ...options,
            firstOccurrenceOnly,
          })
        : [text]),
    );
  };

  for (const match of html.matchAll(TAG)) {
    const [whole, closing, rawName, rawAttrs] = match;
    const name = rawName.toLowerCase();

    pushText(html.slice(cursor, match.index));
    cursor = match.index + whole.length;

    // Anything outside the allow-list is dropped, tag and all. The text around
    // it survives, so a stray tag costs a wrapper, never a sentence.
    if (!ALLOWED.has(name)) continue;

    if (VOID.has(name)) {
      top().children.push(<br key={`br-${key++}`} />);
      continue;
    }

    if (closing) {
      // Ignore a close with no matching open rather than unwinding the stack.
      const openIndex = stack.findIndex((f) => f.tag === name);
      if (openIndex <= 0) continue;
      while (stack.length - 1 >= openIndex) {
        const frame = stack.pop()!;
        stack[stack.length - 1].children.push(element(frame, key++));
      }
      continue;
    }

    stack.push({ tag: name, attrs: readAttrs(rawAttrs), children: [] });
  }

  pushText(html.slice(cursor));

  // Close anything the source left open.
  while (stack.length > 1) {
    const frame = stack.pop()!;
    stack[stack.length - 1].children.push(element(frame, key++));
  }

  return root.children;
}

function element(frame: Frame, key: number): React.ReactNode {
  const Tag = frame.tag as keyof React.JSX.IntrinsicElements;
  return (
    <Tag
      key={`${frame.tag}-${key}`}
      id={frame.attrs.id}
      start={frame.attrs.start}
    >
      {frame.children}
    </Tag>
  );
}

/** Splits a text node around the anatomical structures it mentions. */
function linkify(
  text: string,
  onSelectTerm: ((englishName: string, label: string) => void) | undefined,
  nextKey: () => number,
  seenEntities: Set<string>,
  options: ParseChapterHtmlOptions,
): React.ReactNode[] {
  const matches = options.useExtendedEntities
    ? findTextbookAnatomyTerms(text)
    : findAnatomyTerms(text);
  if (matches.length === 0) return [text];

  const out: React.ReactNode[] = [];
  let at = 0;

  for (const m of matches) {
    const entityKey = (m.entity?.id ?? m.englishName).toLowerCase();
    if (options.firstOccurrenceOnly && seenEntities.has(entityKey)) {
      continue;
    }
    seenEntities.add(entityKey);

    if (m.start > at) out.push(text.slice(at, m.start));
    const displayLabel = `${m.pl} (${m.latin})`;
    out.push(
      <button
        key={`term-${nextKey()}`}
        type="button"
        data-anatomy-link="true"
        data-entity-id={entityKey}
        onClick={() => onSelectTerm?.(m.englishName, displayLabel)}
        onMouseEnter={(e) =>
          options.onHoverMatch?.(m, e.currentTarget.getBoundingClientRect())
        }
        onMouseLeave={() => options.onLeaveMatch?.()}
        onFocus={(e) =>
          options.onHoverMatch?.(m, e.currentTarget.getBoundingClientRect())
        }
        onBlur={() => options.onLeaveMatch?.()}
        title={displayLabel}
        className={
          "anatomy-term text-zinc-100 underline decoration-zinc-600 decoration-dotted " +
          "underline-offset-4 hover:decoration-zinc-300 transition-colors cursor-help " +
          "border-0 bg-transparent p-0 font-inherit focus-ring rounded-xs"
        }
      >
        {m.surface}
      </button>,
    );
    at = m.end;
  }

  if (at < text.length) out.push(text.slice(at));
  return out.length > 0 ? out : [text];
}
