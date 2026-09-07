"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from "./config";
import { DICTIONARIES, type Dictionary } from "./dictionaries";

interface I18nValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  /** The active dictionary. Named `t` so call sites read as `t.nav.atlas`. */
  t: Dictionary;
  /** Locale-aware number formatting — 2,234 / 2 234 / 2.234. */
  n: (value: number) => string;
  /** Picks the right plural form for `value` in the active locale. */
  plural: (value: number) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

/**
 * Locale state for the UI shell.
 *
 * The locale lives in `localStorage`, not in the URL or a cookie, and that is a
 * deliberate trade-off. Reading a cookie in the root layout — or moving to
 * `/[lang]/…` routes — would opt every page into dynamic rendering and give up
 * the ~50 statically prerendered pages this site is built on.
 *
 * The cost is that the server always renders English (the primary language),
 * so a visitor who has chosen another language sees one frame of English while
 * hydrating. This mirrors how `useTheme` already behaves here.
 */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Runs after hydration, so the server and first client render agree.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored) && stored !== DEFAULT_LOCALE) setLocaleState(stored);
    } catch {
      // localStorage can be unavailable (private mode, sandboxed iframe).
    }
  }, []);

  // Keep `<html lang>` truthful for screen readers, translation tools and SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Persisting is best-effort; the switch still applies for this session.
    }
  }, []);

  const value = useMemo<I18nValue>(() => {
    const dictionary = DICTIONARIES[locale];
    const numberFormat = new Intl.NumberFormat(locale);
    const pluralRules = new Intl.PluralRules(locale);
    return {
      locale,
      setLocale,
      t: dictionary,
      n: (v: number) => numberFormat.format(v),
      plural: (v: number) => dictionary.plurals[pluralRules.select(v)],
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside <I18nProvider>.");
  }
  return value;
}
