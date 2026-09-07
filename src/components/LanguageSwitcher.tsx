"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";

import { useI18n } from "@/i18n/I18nProvider";
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT, type Locale } from "@/i18n/config";

/**
 * Language switcher for the top bar.
 *
 * Deliberately not built on the Base UI popup primitives: those portal to
 * `document.body`, which is what put the atlas's sheets and combobox underneath
 * the viewer. This menu is a plain absolutely-positioned element inside the top
 * bar, so it has no stacking context to escape.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape, and return focus to the trigger.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Move focus into the menu so it is keyboard-operable from the moment it opens.
  useEffect(() => {
    if (!open) return;
    const active = listRef.current?.querySelector<HTMLButtonElement>(
      '[data-selected="true"]',
    );
    (active ?? listRef.current?.querySelector("button"))?.focus();
  }, [open]);

  const choose = (next: Locale) => {
    setLocale(next);
    setOpen(false);
    triggerRef.current?.focus();
  };

  /** Roving arrow-key navigation across the options. */
  const onListKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [],
    );
    if (items.length === 0) return;
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    const delta = e.key === "ArrowDown" ? 1 : -1;
    items[(index + delta + items.length) % items.length].focus();
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.topbar.language} — ${t.topbar.languageCurrent}: ${LOCALE_LABELS[locale]}`}
        title={t.topbar.language}
        className="theme-pill flex h-8 items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 text-xs font-medium text-zinc-800 transition-colors hover:bg-zinc-50 focus-ring dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{LOCALE_SHORT[locale]}</span>
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          aria-label={t.topbar.language}
          onKeyDown={onListKeyDown}
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[168px] overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 shadow-lg shadow-black/5 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/40"
        >
          {LOCALES.map((code) => {
            const selected = code === locale;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={selected}
                data-selected={selected}
                lang={code}
                onClick={() => choose(code)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors focus-ring ${
                  selected
                    ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                    : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/70"
                }`}
              >
                <span className="w-6 shrink-0 text-[10px] font-semibold tracking-wide text-zinc-400 dark:text-zinc-500">
                  {LOCALE_SHORT[code]}
                </span>
                <span className="flex-1">{LOCALE_LABELS[code]}</span>
                {selected && (
                  <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
