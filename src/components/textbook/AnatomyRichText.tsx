"use client";

import React from "react";

import { findAnatomyTerms } from "@/lib/anatomyLinks";

/**
 * Renders chapter HTML as React, linking the anatomy it mentions.
 *
 * This replaces `dangerouslySetInnerHTML` for the anatomy corpus. Not because
 * that was unsafe — the ingestion pipeline validates every chapter against an
 * allow-list before it is written — but because a raw HTML string cannot carry
 * an `onClick`, and the terms have to become interactive.
 *
 * The parser accepts exactly the tags the pipeline emits and drops anything
 * else, so the allow-list is enforced twice: once when the corpus is written
 * and once when it is read. A tag that somehow reached the data would render
 * as its text, never as an element.
 *
 * It is a pure function of the HTML string, which is what keeps hydration
 * quiet: the server and the client walk the same input and build the same
 * tree, with no DOM measurement or randomness anywhere in it.
 */

/** Exactly the tags `fabryka_*.py` is allowed to produce. */
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
  "h3",
  "h4",
  "span",
]);

/** Void elements never have a closing tag. */
const VOID = new Set(["br"]);

const TAG = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
};

function decode(text: string): string {
  return text.replace(/&(?:nbsp|amp|lt|gt|quot|apos|#39);/g, (m) => ENTITIES[m] ?? m);
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
  /** Called with the BodyParts3D name when a linked structure is clicked. */
  onSelectTerm: (englishName: string, label: string) => void;
  /** Off for subjects the 3D atlas does not cover. */
  linkTerms?: boolean;
  className?: string;
}

interface Frame {
  tag: string;
  attrs: { id?: string; start?: number };
  children: React.ReactNode[];
}

export function AnatomyRichText({
  html,
  onSelectTerm,
  linkTerms = true,
  className,
}: AnatomyRichTextProps) {
  const nodes = React.useMemo(
    () => parseChapterHtml(html, linkTerms, onSelectTerm),
    [html, linkTerms, onSelectTerm],
  );
  return <div className={className}>{nodes}</div>;
}

export function parseChapterHtml(
  html: string,
  linkTerms: boolean,
  onSelectTerm: (englishName: string, label: string) => void,
): React.ReactNode[] {
  const root: Frame = { tag: "#root", attrs: {}, children: [] };
  const stack: Frame[] = [root];
  let cursor = 0;
  let key = 0;

  const top = () => stack[stack.length - 1];

  const pushText = (raw: string) => {
    if (!raw) return;
    const text = decode(raw);
    if (!text) return;
    top().children.push(
      ...(linkTerms ? linkify(text, onSelectTerm, () => key++) : [text]),
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
    <Tag key={`${frame.tag}-${key}`} id={frame.attrs.id} start={frame.attrs.start}>
      {frame.children}
    </Tag>
  );
}

/** Splits a text node around the anatomical structures it mentions. */
function linkify(
  text: string,
  onSelectTerm: (englishName: string, label: string) => void,
  nextKey: () => number,
): React.ReactNode[] {
  const matches = findAnatomyTerms(text);
  if (matches.length === 0) return [text];

  const out: React.ReactNode[] = [];
  let at = 0;

  for (const m of matches) {
    if (m.start > at) out.push(text.slice(at, m.start));
    out.push(
      <button
        key={`term-${nextKey()}`}
        type="button"
        onClick={() => onSelectTerm(m.englishName, `${m.pl} (${m.latin})`)}
        title={`${m.pl} (${m.latin}) — pokaż w Atlasie 3D`}
        className={
          "anatomy-term cursor-pointer border-0 bg-transparent p-0 font-inherit " +
          "text-inherit underline decoration-dotted underline-offset-4 " +
          "decoration-zinc-400 transition-colors hover:decoration-solid " +
          "hover:text-zinc-950 dark:decoration-zinc-600 dark:hover:text-white focus-ring"
        }
      >
        {m.surface}
      </button>,
    );
    at = m.end;
  }

  if (at < text.length) out.push(text.slice(at));
  return out;
}
