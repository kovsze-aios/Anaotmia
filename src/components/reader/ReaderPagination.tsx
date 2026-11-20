"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ReaderPosition } from "@/server/models";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export interface ReaderPaginationProps {
  position: ReaderPosition;
  /** Subject route the chapters live under, e.g. `/theory/fizjologia`. */
  basePath: string;
}

/** 44px minimum height, strict symmetry inside CSS Grid cells (`min-w-0`). */
const CONTROL =
  "group flex h-full min-h-[4.5rem] w-full min-w-0 items-center justify-between gap-3 rounded-xl border px-4 py-3.5 " +
  "transition-colors focus-ring";

/**
 * Sequential prev/next controls.
 *
 * Neighbours come from the server-computed reading spine, so paging past the
 * last chapter of a volume lands on the first chapter of the next one without
 * this component knowing volumes exist. When a jump does cross a volume, the
 * label says so — otherwise the reader silently changes book.
 */
export function ReaderPagination({ position, basePath }: ReaderPaginationProps) {
  const { t, n } = useI18n();
  const { prev, next } = position;

  return (
    <nav
      aria-label={t.reader.jumpToChapter}
      className="mx-auto mt-12 w-full max-w-3xl px-4 pb-16 sm:pb-24"
    >
      <p className="mb-4 text-center text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
        {t.reader.chapterOf
          .replace("{current}", n(position.order))
          .replace("{total}", n(position.totalChapters))}
      </p>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {prev && (
          <Link
            href={`${basePath}/${prev.id}`}
            rel="prev"
            className={cn(
              CONTROL,
              "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50",
              "dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60",
            )}
          >
            <ChevronLeft
              className="size-5 shrink-0 text-zinc-400 transition-transform group-hover:-translate-x-0.5 dark:text-zinc-500"
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 text-left">
              <span className="block text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {t.reader.previous}
              </span>
              <span className="mt-0.5 block break-words line-clamp-2 text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                {prev.title}
              </span>
              {prev.crossesVolume && (
                <span className="mt-0.5 block truncate text-[11px] text-zinc-400 dark:text-zinc-500">
                  {prev.volumeShortTitle}
                </span>
              )}
            </span>
          </Link>
        )}

        {next && (
          <Link
            href={`${basePath}/${next.id}`}
            rel="next"
            className={cn(
              CONTROL,
              !prev && "sm:col-start-2",
              "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50",
              "dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60",
            )}
          >
            <span className="min-w-0 flex-1 text-right">
              <span className="block text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {t.reader.next}
              </span>
              <span className="mt-0.5 block break-words line-clamp-2 text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                {next.title}
              </span>
              {next.crossesVolume && (
                <span className="mt-0.5 block truncate text-[11px] text-zinc-400 dark:text-zinc-500">
                  {t.reader.newVolume} {next.volumeShortTitle}
                </span>
              )}
            </span>
            <ChevronRight
              className="size-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 dark:text-zinc-500"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}
