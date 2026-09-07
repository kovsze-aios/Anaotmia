"use client";

import { useEffect, useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

export type PaginationItem =
  | { type: "page"; page: number }
  | { type: "ellipsis"; side: "left" | "right" };

/**
 * Builds the windowed page list.
 *
 * Exported separately from the component because the windowing is the part
 * worth testing: it is pure, and every off-by-one shows up here rather than in
 * the markup. See `advanced-pagination.test.ts`.
 *
 * The slot count is held constant so the control does not change width as the
 * user pages through — `siblingCount * 2 + 5` covers first, last, current, its
 * two siblings, and the two ellipsis positions.
 */
export function buildPaginationItems(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): PaginationItem[] {
  const total = Math.max(0, Math.floor(totalPages));
  if (total === 0) return [];

  const current = Math.min(Math.max(Math.floor(currentPage), 1), total);
  const slots = siblingCount * 2 + 5;

  // Few enough to show every page: no truncation needed.
  if (total <= slots) {
    return Array.from({ length: total }, (_, i) => ({ type: "page", page: i + 1 }));
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  // An ellipsis only earns its place when it hides more than one page. The left
  // one stands in for pages 2..leftSibling-1, so it hides a single page when
  // leftSibling is 3 — and swapping one number for "…" costs the same width
  // while telling the reader less. Same reasoning mirrored on the right.
  const showLeftEllipsis = leftSibling - 2 > 1;
  const showRightEllipsis = total - 1 - rightSibling > 1;

  const items: PaginationItem[] = [];
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  if (!showLeftEllipsis && showRightEllipsis) {
    // Near the start: run 1…N, then jump to the last page.
    const leftCount = siblingCount * 2 + 3;
    for (const page of range(1, leftCount)) items.push({ type: "page", page });
    items.push({ type: "ellipsis", side: "right" });
    items.push({ type: "page", page: total });
    return items;
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    // Near the end: mirror image of the above.
    const rightCount = siblingCount * 2 + 3;
    items.push({ type: "page", page: 1 });
    items.push({ type: "ellipsis", side: "left" });
    for (const page of range(total - rightCount + 1, total)) {
      items.push({ type: "page", page });
    }
    return items;
  }

  if (showLeftEllipsis && showRightEllipsis) {
    items.push({ type: "page", page: 1 });
    items.push({ type: "ellipsis", side: "left" });
    for (const page of range(leftSibling, rightSibling)) {
      items.push({ type: "page", page });
    }
    items.push({ type: "ellipsis", side: "right" });
    items.push({ type: "page", page: total });
    return items;
  }

  return range(1, total).map((page) => ({ type: "page", page }));
}

/** 44px minimum in both axes — the touch target floor on mobile. */
const CONTROL =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-lg px-2.5 text-sm " +
  "font-medium tabular-nums transition-colors select-none focus-ring " +
  "disabled:pointer-events-none disabled:opacity-40";

export interface AdvancedPaginationProps {
  /** 1-based. Values outside `1..totalPages` are clamped. */
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Pages shown either side of the current one. Default 1 → five numbers max. */
  siblingCount?: number;
  /** Set false to hide the direct-jump field on cramped layouts. */
  showJumpInput?: boolean;
  className?: string;
}

export function AdvancedPagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showJumpInput = true,
  className,
}: AdvancedPaginationProps) {
  const { t, n } = useI18n();
  const inputId = useId();
  const errorId = useId();
  const [draft, setDraft] = useState("");
  const [invalid, setInvalid] = useState(false);

  const total = Math.max(0, Math.floor(totalPages));
  const current = Math.min(Math.max(Math.floor(currentPage), 1), Math.max(total, 1));

  // A stale error would otherwise persist after the page changed underneath it.
  useEffect(() => {
    setInvalid(false);
  }, [currentPage]);

  // One page needs no pagination, and zero pages needs no control at all.
  if (total < 2) return null;

  const items = buildPaginationItems(current, total, siblingCount);

  const go = (page: number) => {
    if (page < 1 || page > total || page === current) return;
    onPageChange(page);
  };

  const submitJump = (e?: React.FormEvent) => {
    e?.preventDefault();
    const parsed = Number(draft.trim());
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > total) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setDraft("");
    if (parsed !== current) onPageChange(parsed);
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <nav aria-label={t.pagination.label}>
        <ul className="flex flex-wrap items-center gap-1">
          <li>
            <button
              type="button"
              onClick={() => go(current - 1)}
              disabled={current <= 1}
              aria-label={t.pagination.previous}
              className={cn(
                CONTROL,
                "text-muted-foreground hover:bg-muted hover:text-foreground active:translate-y-px",
              )}
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
          </li>

          {items.map((item) =>
            item.type === "ellipsis" ? (
              <li key={`ellipsis-${item.side}`} aria-hidden="true">
                <span
                  className={cn(CONTROL, "text-muted-foreground pointer-events-none")}
                >
                  …
                </span>
              </li>
            ) : (
              <li key={`page-${item.page}`}>
                <button
                  type="button"
                  onClick={() => go(item.page)}
                  aria-current={item.page === current ? "page" : undefined}
                  aria-label={(item.page === current
                    ? t.pagination.currentPage
                    : t.pagination.goToPage
                  ).replace("{page}", n(item.page))}
                  className={cn(
                    CONTROL,
                    item.page === current
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground active:translate-y-px",
                  )}
                >
                  {n(item.page)}
                </button>
              </li>
            ),
          )}

          <li>
            <button
              type="button"
              onClick={() => go(current + 1)}
              disabled={current >= total}
              aria-label={t.pagination.next}
              className={cn(
                CONTROL,
                "text-muted-foreground hover:bg-muted hover:text-foreground active:translate-y-px",
              )}
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </li>
        </ul>
        {/* Screen-reader announcement; the same text is shown visually below. */}
        <span className="sr-only" aria-live="polite">
          {t.pagination.status
            .replace("{current}", n(current))
            .replace("{total}", n(total))}
        </span>
      </nav>

      {showJumpInput && (
        <div className="flex flex-col gap-1.5">
          <form
            onSubmit={submitJump}
            className="flex items-center gap-2"
            // A form makes Enter work natively, without a keydown handler.
            noValidate
          >
            <label htmlFor={inputId} className="sr-only">
              {t.pagination.jumpToPage}
            </label>
            {/*
              `type="text"` with a numeric inputMode rather than `type="number"`:
              it still raises the numeric keypad on mobile, but avoids the
              spinner buttons and the scroll-wheel-changes-the-value trap.
            */}
            <input
              id={inputId}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="off"
              value={draft}
              placeholder={t.pagination.jumpToPage}
              aria-invalid={invalid || undefined}
              aria-describedby={invalid ? errorId : undefined}
              onChange={(e) => {
                setDraft(e.target.value);
                if (invalid) setInvalid(false);
              }}
              // Enter is handled explicitly rather than left to the form's
              // implicit submission. `preventDefault` suppresses the implicit
              // path, so there is exactly one submit route no matter how the
              // browser treats Enter in a single-input form — and the jump can
              // never fire twice.
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submitJump();
                }
              }}
              className={cn(
                // Wide enough for the longest placeholder across the six
                // locales — "Zu Seite springen…" — without clipping.
                "h-11 w-48 rounded-lg border bg-background px-3 text-sm tabular-nums",
                "placeholder:text-muted-foreground/70 transition-colors focus-ring",
                invalid ? "border-destructive" : "border-input hover:border-ring/60",
              )}
            />
            <button
              type="submit"
              className={cn(
                CONTROL,
                "border border-input hover:bg-muted hover:text-foreground active:translate-y-px",
              )}
            >
              {t.pagination.go}
            </button>
          </form>

          <p
            id={errorId}
            role="alert"
            className={cn(
              "text-xs",
              invalid ? "text-destructive" : "text-muted-foreground",
            )}
          >
            {invalid
              ? t.pagination.invalidPage.replace("{total}", n(total))
              : t.pagination.status
                  .replace("{current}", n(current))
                  .replace("{total}", n(total))}
          </p>
        </div>
      )}
    </div>
  );
}
