"use client";

import { Heart } from "lucide-react";

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
 * Square support button for the footer.
 *
 * A client component so the label follows the language switcher, kept separate
 * from `Footer` so the footer itself stays a server component — this is the
 * only part of it that needs the locale context.
 *
 * `size-11` rather than the 40px in the brief: 44px is the touch-target floor
 * the rest of the app holds to (reader controls, pagination, the ToC tab), and
 * this is a tap target on a phone. Still perfectly square.
 */
export function DonateButton() {
  const { t } = useI18n();

  return (
    <a
      href={DONATE_HREF}
      title={t.footer.donate}
      aria-label={t.footer.donate}
      className={
        "group inline-flex size-11 shrink-0 items-center justify-center rounded-lg border " +
        "border-zinc-200 bg-white text-zinc-500 transition-colors focus-ring " +
        "hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 " +
        "dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 " +
        "dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
      }
    >
      {/* Fills in on hover — the whole state change, no colour introduced.
          The palette stays NOIR; the heart just goes solid. */}
      <Heart
        className="size-5 transition-[fill] group-hover:fill-current"
        aria-hidden="true"
      />
    </a>
  );
}
