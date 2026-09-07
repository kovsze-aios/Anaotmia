"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ReaderPosition } from "@/server/models";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export interface ReaderPaginationProps {
  position: ReaderPosition;
}

/** 44px minimum in both axes, matching the touch-target floor used elsewhere. */
const CONTROL =
  "group flex min-h-11 flex-1 items-center gap-3 rounded-xl border px-4 py-3 " +
  "transition-colors focus-ring";

/**
 * Sequential prev/next controls.
 *
 * Neighbours come from the server-computed reading spine, so paging past the
 * last chapter of a volume lands on the first chapter of the next one without
 * this component knowing volumes exist. When a jump does cross a volume, the
 * label says so — otherwise the reader silently changes book.
 */
export function ReaderPagination({ position }: ReaderPaginationProps) {
  const { t, n } = useI18n();
  const { prev, next } = position;

  return (
    <nav
      aria-label={t.reader.jumpToChapter}
      className="mx-auto mt-12 w-full max-w-3xl px-4 pb-16"
    >
      <p className="mb-3 text-center text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
        {t.reader.chapterOf
          .replace("{current}", n(position.order))
          .replace("{total}", n(position.totalChapters))}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        {prev ? (
          <Link
            href={`/theory/anatomia/${prev.id}`}
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
            <span className="min-w-0 text-left">
              <span className="block text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {t.reader.previous}
              </span>
              <span className="block truncate text-sm text-zinc-800 dark:text-zinc-200">
                {prev.title}
              </span>
              {prev.crossesVolume && (
                <span className="block truncate text-[11px] text-zinc-400 dark:text-zinc-500">
                  {prev.volumeShortTitle}
                </span>
              )}
            </span>
          </Link>
        ) : (
          <div
            className={cn(CONTROL, "border-dashed border-zinc-200 dark:border-zinc-800")}
            aria-hidden="true"
          >
            <ChevronLeft className="size-5 shrink-0 text-zinc-300 dark:text-zinc-700" />
            <span className="text-sm text-zinc-400 dark:text-zinc-600">
              {t.reader.startOfBook}
            </span>
          </div>
        )}

        {next ? (
          <Link
            href={`/theory/anatomia/${next.id}`}
            rel="next"
            className={cn(
              CONTROL,
              "justify-end border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50",
              "dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60",
            )}
          >
            <span className="min-w-0 text-right">
              <span className="block text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {t.reader.next}
              </span>
              <span className="block truncate text-sm text-zinc-800 dark:text-zinc-200">
                {next.title}
              </span>
              {next.crossesVolume && (
                <span className="block truncate text-[11px] text-zinc-400 dark:text-zinc-500">
                  {t.reader.newVolume} {next.volumeShortTitle}
                </span>
              )}
            </span>
            <ChevronRight
              className="size-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 dark:text-zinc-500"
              aria-hidden="true"
            />
          </Link>
        ) : (
          <div
            className={cn(
              CONTROL,
              "justify-end border-dashed border-zinc-200 dark:border-zinc-800",
            )}
            aria-hidden="true"
          >
            <span className="text-sm text-zinc-400 dark:text-zinc-600">
              {t.reader.endOfBook}
            </span>
            <ChevronRight className="size-5 shrink-0 text-zinc-300 dark:text-zinc-700" />
          </div>
        )}
      </div>
    </nav>
  );
}
