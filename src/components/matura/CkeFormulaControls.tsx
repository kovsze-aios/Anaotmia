"use client";

import type { CkeFormula, CkeTopicStatus } from "@/server/models";
import { cn } from "@/lib/utils";

export type FormulaFilterMode = "all" | "2023" | "2015";

export function CkeStatusBadge({
  status,
  className,
}: {
  status?: CkeTopicStatus;
  className?: string;
}) {
  if (!status) return null;

  if (status === "2023-only") {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase",
          "bg-indigo-950/70 text-indigo-300 border-indigo-800/60",
          className,
        )}
      >
        NOWA 2023+
      </span>
    );
  }

  if (status === "2015-only") {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase",
          "bg-amber-950/70 text-amber-300 border-amber-800/60",
          className,
        )}
      >
        FORMUŁA 2015
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase",
        "bg-emerald-950/70 text-emerald-300 border-emerald-800/60",
        className,
      )}
    >
      CKE RDZEŃ
    </span>
  );
}

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
              "flex-1 rounded-md px-2.5 py-1.5 font-medium transition-colors focus-ring whitespace-nowrap",
              active
                ? opt.id === "2023"
                  ? "bg-indigo-950/90 text-indigo-200 border border-indigo-700/60 shadow-sm"
                  : opt.id === "2015"
                    ? "bg-amber-950/90 text-amber-200 border border-amber-700/60 shadow-sm"
                    : "bg-emerald-950/80 text-emerald-200 border border-emerald-800/60 shadow-sm"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
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
