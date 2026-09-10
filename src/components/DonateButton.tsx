"use client";

import { useI18n } from "@/i18n";

/**
 * Where the button will point once a payment provider is chosen.
 *
 * A same-page anchor on purpose: an external `href` that is not live yet would
 * be a dead outbound link, and swapping one constant is the whole change when
 * the Stripe or Buy Me a Coffee URL exists. Add `target="_blank"` and
 * `rel="noopener noreferrer"` at the same time — and say so in the label,
 * which is why the wording here does not promise a new tab yet.
 */
const DONATE_HREF = "#donate";

/**
 * Support button for the footer.
 *
 * A client component so the label follows the language switcher, kept separate
 * from `Footer` so the footer itself stays a server component — this is the
 * only part of it that needs the locale context.
 *
 * Text only. The heart that used to sit beside the label is gone: with the
 * words visible the icon was decoration, and the footer reads cleaner without
 * it. `title` and `aria-label` are absent for the same reason — the visible
 * text is already the accessible name, so a tooltip repeating it is noise for
 * pointer users and duplication for screen readers.
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
