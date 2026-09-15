"use client";

import { useI18n } from "@/i18n";

/** Where support goes. External, so the link opens in a new tab. */
const DONATE_HREF = "https://buycoffee.to/sportnotes.ai";

/**
 * Support button for the footer.
 *
 * A client component so the label follows the language switcher, kept separate
 * from `Footer` so the footer itself stays a server component — this is the
 * only part of it that needs the locale context.
 *
 * Text only. The heart that used to sit beside the label is gone: with the
 * words visible the icon was decoration, and the footer reads cleaner without
 * it.
 *
 * `aria-label` is the one place the visible text is not the whole accessible
 * name. The link now leaves the site for buycoffee.to in a new tab, and a new
 * tab that opens unannounced is disorienting for screen reader users, so the
 * name says so where the visible label stays short.
 *
 * Hover moves the border, surface and text one step, which is the whole state
 * change; no colour is introduced.
 *
 * 44px tall — the touch-target floor the reader controls, pagination and the
 * ToC tab all hold to — and only as wide as its content.
 */
export function DonateButton() {
  const { t } = useI18n();

  return (
    <a
      href={DONATE_HREF}
      target="_blank"
      // `noopener` keeps buycoffee.to from reaching back through
      // `window.opener`; `noreferrer` withholds the referring URL.
      rel="noopener noreferrer"
      aria-label={t.footer.donateAria}
      className={
        "inline-flex h-11 shrink-0 items-center rounded-lg border px-4 " +
        "text-sm font-medium transition-colors focus-ring " +
        "border-zinc-200 bg-white text-zinc-700 " +
        "hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 " +
        "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 " +
        "dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
      }
    >
      {t.footer.donate}
    </a>
  );
}
