"use client";

import { useCallback, useEffect, useState } from "react";
import type { CkeFormula, CkeTopicStatus } from "@/server/models";
import {
  CURRICULUM_VIEW_MODE_STORAGE_KEY,
  isTierRequiredInMode,
  normalizeCurriculumTier,
  type CurriculumTier,
  type CurriculumViewMode,
} from "@/types/curriculum";
import { cn } from "@/lib/utils";

export type FormulaFilterMode = "all" | "2023" | "2015";
export { isTierRequiredInMode };

const VIEW_MODE_CHANGE_EVENT = "curriculum-view-mode-change";

function inferInitialMode(pathOrSubject?: string): CurriculumViewMode {
  if (pathOrSubject) {
    if (pathOrSubject.includes("2023")) return "matura-2023";
    if (pathOrSubject.includes("2015")) return "matura-2015";
  }
  return "full";
}

function isValidCurriculumViewMode(val: unknown): val is CurriculumViewMode {
  return (
    val === "full" ||
    val === "matura-2023" ||
    val === "matura-2015" ||
    val === "cke-exams"
  );
}

/**
 * Shared 4-Mode curriculum view state persisted in `localStorage` under
 * `curriculum_view_mode` and synchronized across components (landing grid,
 * left chapter nav, chapter header, and right-side TOC drawer).
 */
export function useCurriculumViewMode(
  pathOrSubject?: string,
): [CurriculumViewMode, (next: CurriculumViewMode) => void] {
  const [mode, setModeState] = useState<CurriculumViewMode>(() =>
    inferInitialMode(pathOrSubject),
  );

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CURRICULUM_VIEW_MODE_STORAGE_KEY);
      if (isValidCurriculumViewMode(saved)) {
        setModeState(saved);
        return;
      }
    } catch {
      // Ignore storage access errors in private mode / SSR guards.
    }
    setModeState(inferInitialMode(pathOrSubject));
  }, [pathOrSubject]);

  useEffect(() => {
    const onCustomChange = (evt: Event) => {
      const detail = (evt as CustomEvent<CurriculumViewMode>).detail;
      if (isValidCurriculumViewMode(detail)) {
        setModeState(detail);
      }
    };
    const onStorageChange = (evt: StorageEvent) => {
      if (
        evt.key === CURRICULUM_VIEW_MODE_STORAGE_KEY &&
        isValidCurriculumViewMode(evt.newValue)
      ) {
        setModeState(evt.newValue);
      }
    };
    window.addEventListener(VIEW_MODE_CHANGE_EVENT, onCustomChange);
    window.addEventListener("storage", onStorageChange);
    return () => {
      window.removeEventListener(VIEW_MODE_CHANGE_EVENT, onCustomChange);
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  const setMode = useCallback((next: CurriculumViewMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(CURRICULUM_VIEW_MODE_STORAGE_KEY, next);
      window.dispatchEvent(
        new CustomEvent<CurriculumViewMode>(VIEW_MODE_CHANGE_EVENT, {
          detail: next,
        }),
      );
    } catch {
      // Ignore storage write errors.
    }
  }, []);

  return [mode, setMode];
}

const MONOCHROME_BADGE_CLASS =
  "inline-flex shrink-0 items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-zinc-900/90 text-zinc-300 border-zinc-800";

export function CkeStatusBadge({
  status,
  tier,
  compact = false,
  className,
}: {
  status?: CkeTopicStatus | CurriculumTier;
  tier?: CurriculumTier;
  compact?: boolean;
  className?: string;
}) {
  if (!status && !tier) return null;

  const resolvedTier = normalizeCurriculumTier(tier ?? status);
  const label =
    resolvedTier === "cke-2023-only"
      ? compact
        ? "NOWA 2023+"
        : "NOWA MATURA 2023+"
      : resolvedTier === "cke-2015-only"
        ? "FORMUŁA 2015"
        : resolvedTier === "academic-extra"
          ? "EXTRA / STUDIA"
          : compact
            ? "CKE RDZEŃ"
            : "CKE RDZEŃ (2015 + 2023)";

  return <span className={cn(MONOCHROME_BADGE_CLASS, className)}>{label}</span>;
}

/**
 * 4-Mode Segmented Control Switcher:
 * 1) Full Knowledge (100% + Extra)
 * 2) Matura 2023+ (Nowa)
 * 3) Matura 2015 (Stara)
 * 4) Official CKE Exams
 */
export function CurriculumModeSwitcher({
  value,
  onChange,
  className,
  compact = false,
}: {
  value: CurriculumViewMode;
  onChange: (mode: CurriculumViewMode) => void;
  className?: string;
  compact?: boolean;
}) {
  const options: {
    id: CurriculumViewMode;
    label: string;
    shortLabel: string;
  }[] = [
    {
      id: "full",
      label: "🔬 Pełna Wiedza (100% + Extra)",
      shortLabel: "🔬 Pełna (100%)",
    },
    {
      id: "matura-2023",
      label: "🎓 Matura 2023+ (Nowa)",
      shortLabel: "🎓 Matura 2023+",
    },
    {
      id: "matura-2015",
      label: "📜 Matura 2015 (Stara)",
      shortLabel: "📜 Matura 2015",
    },
    {
      id: "cke-exams",
      label: "📄 Oficjalne Arkusze CKE",
      shortLabel: "📄 Arkusze CKE",
    },
  ];

  return (
    <div
      role="group"
      aria-label="Przełącznik trybu programu nauczania i arkuszy CKE"
      className={cn(
        "grid w-full grid-cols-2 gap-1 rounded-lg border border-zinc-800 bg-zinc-950/90 p-1 text-xs",
        !compact && "sm:grid-cols-4",
        className,
      )}
    >
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            aria-pressed={active}
            className={cn(
              "rounded-md border px-2 py-1.5 font-medium transition-colors focus-ring truncate text-center",
              active
                ? "border-zinc-700 bg-zinc-800 text-zinc-100 shadow-sm"
                : "border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
            )}
            title={opt.label}
          >
            {compact ? opt.shortLabel : opt.label}
          </button>
        );
      })}
    </div>
  );
}

/** Legacy 3-mode switcher retained for backwards compatibility. */
export function CkeFormulaSwitcher({
  value,
  onChange,
  className,
  compact = false,
}: {
  value: FormulaFilterMode;
  onChange: (mode: FormulaFilterMode) => void;
  className?: string;
  compact?: boolean;
}) {
  const options: { id: FormulaFilterMode; label: string; shortLabel: string }[] = [
    { id: "all", label: "Wszystkie", shortLabel: "Wszystkie" },
    { id: "2023", label: "Formuła 2023+ (Nowa)", shortLabel: "Formuła 2023+" },
    { id: "2015", label: "Formuła 2015", shortLabel: "Formuła 2015" },
  ];

  return (
    <div
      role="group"
      aria-label="Filtr formuły maturalnej CKE"
      className={cn(
        "inline-flex w-full items-center rounded-lg border border-zinc-800 bg-zinc-950/90 p-1 text-xs",
        className,
      )}
    >
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            aria-pressed={active}
            className={cn(
              "flex-1 rounded-md border px-2.5 py-1.5 font-medium transition-colors focus-ring whitespace-nowrap",
              active
                ? "border-zinc-700 bg-zinc-800 text-zinc-100 shadow-sm"
                : "border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
            )}
          >
            {compact ? opt.shortLabel : opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function matchesFormulaFilter(
  mode: FormulaFilterMode,
  formulas?: CkeFormula[],
  status?: CkeTopicStatus,
): boolean {
  if (mode === "all") return true;
  if (formulas && formulas.length > 0) {
    return formulas.includes(mode);
  }
  if (!status || status === "core") return true;
  if (mode === "2023") return status === "2023-only";
  if (mode === "2015") return status === "2015-only";
  return true;
}

export function defaultFormulaForPath(pathOrSubject?: string): FormulaFilterMode {
  if (!pathOrSubject) return "all";
  if (pathOrSubject.includes("2023")) return "2023";
  if (pathOrSubject.includes("2015")) return "2015";
  return "all";
}
