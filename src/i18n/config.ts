/**
 * Locale configuration for the UI shell.
 *
 * Polish is the primary language: it is what the server renders and the
 * fallback when no explicit visitor preference is stored.
 */

export const LOCALES = ["en", "pl", "de", "fr", "it", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pl";

/** Storage key for the visitor's choice. Mirrors how the theme is persisted. */
export const LOCALE_STORAGE_KEY = "locale";

/**
 * Native names, as shown in the switcher. A language is always listed in its
 * own language — a French speaker looks for "Français", not "French".
 */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  es: "Español",
};

/** Short code shown in the collapsed switcher button. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  pl: "PL",
  de: "DE",
  fr: "FR",
  it: "IT",
  es: "ES",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
