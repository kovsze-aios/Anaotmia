"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight, List, X } from "lucide-react";

import type { ReaderPosition, ReaderSpine } from "@/server/models";
import { useI18n } from "@/i18n";
import { HIDE_SCROLLBAR, cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

/**
 * Frames the drawer gets to lay itself out before the auto-scroll gives up.
 * ~20 frames is a third of a second at 60Hz — long enough for the portal and
 * the slide-in, short enough that a list with nothing to scroll costs nothing.
 */
const MAX_SCROLL_ATTEMPTS = 20;

export interface ReaderTocProps {
  spine: ReaderSpine;
  position: ReaderPosition;
  /** Subject route the chapters live under, e.g. `/theory/biologia`. */
  basePath: string;
}

/**
 * Right-hand table of contents for the reading view.
 *
 * Three levels, matching the printed set: Tom → Rozdział → Temat. Volumes are
 * native `<details>` so the open/closed state costs no JavaScript and survives
 * without client state; the volume being read starts open and every other one
 * starts closed, which keeps 796 chapter links out of the initial paint.
 *
 * Topics are only rendered under the chapter currently open, because they are
 * in-page anchors — they only mean anything on the page you are already on.
 */
export function ReaderToc({ spine, position, basePath }: ReaderTocProps) {
  const { t, n } = useI18n();
  const [open, setOpen] = useState(false);
  const currentChapter = useRef<HTMLAnchorElement>(null);

  /**
   * Brings the chapter being read into view when the drawer opens.
   *
   * A volume runs to a couple of hundred chapters, so the list opened at the
   * top and left the reader scrolling to find where they already were —
   * further every chapter they advanced.
   *
   * The scroll cannot run on the effect itself: the drawer renders into a
   * portal and slides in, so on the frame the effect fires the list may not be
   * mounted yet, and scrolling a panel with no resolved height is silently a
   * no-op. So it waits for a frame on which the list is both present and
   * actually scrollable, then scrolls once and stops.
   *
   * Once, deliberately — `scrollIntoView` restarts a smooth scroll from
   * wherever the list currently is, so calling it every frame would pin the
   * list in place instead of moving it.
   *
   * `block: "center"` rather than "start" so the chapters either side stay
   * visible — that is what makes the list read as a position in the book
   * rather than a jump.
   */
  useEffect(() => {
    if (!open) return;

    let frame = 0;
    let attempts = 0;

    const attempt = () => {
      const node = currentChapter.current;
      const list = node?.closest<HTMLElement>("[data-toc-list]");

      if (node && list && list.scrollHeight > list.clientHeight) {
        node.scrollIntoView({ block: "center", behavior: "smooth" });
        return;
      }

      // A short volume never becomes scrollable, and there is nothing to
      // scroll to; the cap is what stops that case spinning a frame loop for
      // as long as the drawer stays open.
      if (++attempts < MAX_SCROLL_ATTEMPTS) frame = requestAnimationFrame(attempt);
    };

    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [open, position.chapterId]);

  return (
    <>
      {/* Floating trigger, pinned to the right edge of the reading view. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.reader.openToc}
        aria-expanded={open}
        className={cn(
          // min-w-11/min-h-11 keeps the 44px touch-target floor used across
          // the app; the default padding left it a pixel short.
          "fixed right-0 top-1/2 z-40 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-l-xl border border-r-0 border-zinc-200 bg-white/90 py-4 pl-3 pr-2.5 shadow-lg backdrop-blur transition-colors focus-ring",
          "hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/90 dark:hover:bg-zinc-900",
        )}
      >
        <List className="size-5 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
        <span className="sr-only">{t.reader.toc}</span>
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-full gap-0 p-0 sm:max-w-md"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
            <div>
              <SheetTitle className="text-base font-semibold">{t.reader.toc}</SheetTitle>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                {t.reader.chapterOf
                  .replace("{current}", n(position.order))
                  .replace("{total}", n(position.totalChapters))}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.reader.closeToc}
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-ring dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label={t.reader.toc}
            // Marks the scrolling element for the auto-scroll effect, which has
            // to know whether this panel is scrollable yet before it tries.
            data-toc-list=""
            className={cn("min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3", HIDE_SCROLLBAR)}
          >
            {spine.volumes.map((volume) => {
              const isCurrentVolume = volume.id === position.volumeId;

              // Volumes other than the one being read are entry points, not
              // trees: their chapters are not in this payload, so opening one
              // navigates to its first chapter, where they are.
              if (!isCurrentVolume) {
                return (
                  <Link
                    key={volume.id}
                    href={
                      volume.firstChapterId
                        ? `${basePath}/${volume.firstChapterId}`
                        : basePath
                    }
                    onClick={() => setOpen(false)}
                    className="mb-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-ring dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                  >
                    <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
                    {volume.icon && <span aria-hidden="true">{volume.icon}</span>}
                    <span className="flex-1 truncate">{volume.shortTitle}</span>
                    <span className="shrink-0 text-xs font-normal tabular-nums text-zinc-400 dark:text-zinc-500">
                      {n(volume.chapterCount)}
                    </span>
                  </Link>
                );
              }

              return (
                <details key={volume.id} open className="group mb-1 rounded-lg">
                  <summary
                    className={cn(
                      "flex cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors focus-ring [&::-webkit-details-marker]:hidden",
                      "text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900",
                    )}
                  >
                    <ChevronRight
                      className="size-4 shrink-0 transition-transform group-open:rotate-90"
                      aria-hidden="true"
                    />
                    {volume.icon && <span aria-hidden="true">{volume.icon}</span>}
                    <span className="flex-1 truncate">{volume.shortTitle}</span>
                    <span className="shrink-0 text-xs font-normal tabular-nums text-zinc-400 dark:text-zinc-500">
                      {n(volume.chapterCount)}
                    </span>
                  </summary>

                  <ul className="mb-2 ml-4 border-l border-zinc-200 pl-2 dark:border-zinc-800">
                    {position.volumeChapters.map((chapter) => {
                      const isCurrent = chapter.id === position.chapterId;
                      return (
                        <li key={chapter.id}>
                          <Link
                            ref={isCurrent ? currentChapter : undefined}
                            href={`${basePath}/${chapter.id}`}
                            onClick={() => setOpen(false)}
                            aria-current={isCurrent ? "page" : undefined}
                            data-current={isCurrent || undefined}
                            className={cn(
                              "block rounded-md px-3 py-2 text-[13px] leading-snug transition-colors focus-ring",
                              isCurrent
                                ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-200",
                            )}
                          >
                            <span className="mr-2 tabular-nums text-zinc-400 dark:text-zinc-600">
                              {n(chapter.order)}
                            </span>
                            {chapter.title}
                          </Link>

                          {/* Topics are in-page anchors, so they are only
                              meaningful under the chapter already open. */}
                          {isCurrent && position.topics.length > 0 && (
                            <ul className="mb-2 ml-3 border-l border-zinc-200 pl-3 dark:border-zinc-800">
                              {position.topics.map((topic) => (
                                <li key={topic.anchorId}>
                                  <a
                                    href={`#${topic.anchorId}`}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md px-2 py-1.5 text-xs leading-snug text-zinc-500 transition-colors hover:text-zinc-900 focus-ring dark:text-zinc-500 dark:hover:text-zinc-200"
                                  >
                                    {topic.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </details>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
