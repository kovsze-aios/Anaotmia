"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Columns2,
  FileText,
  Maximize2,
  Moon,
  Pause,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import type { CkeMetadata } from "@/server/models";
import type {
  CkeAnimatedStep,
  CkeExamSheet,
  CkeExamTask,
  CkeSubTask,
  CkeTaskMedia,
} from "@/types/curriculum";
import {
  buildDefaultAnimatedSteps,
  filterCkeTasks,
  getCkeExamSheets,
  getCkeTasksForChapter,
  getCkeTasksForSubject,
} from "@/data/cke-exams";
import { CkeStatusBadge } from "./CkeFormulaControls";

/**
 * Inside each chapter: NOIR callout box showing official CKE section code,
 * requirement IDs, Formula 2015 vs 2023+ differences, and common CKE exam traps.
 */
export function CkeChapterCallout({ metadata }: { metadata?: CkeMetadata }) {
  if (!metadata) return null;

  const traps = metadata.examTraps ?? metadata.examTips ?? [];
  const reqIds = metadata.ckeRequirementIds ?? metadata.requirementCodes ?? [];
  const hasContent =
    Boolean(metadata.diffs2015vs2023) || traps.length > 0 || reqIds.length > 0;

  if (!hasContent) return null;

  return (
    <aside
      aria-label="Wymagania CKE i pułapki egzaminacyjne"
      className="mb-8 rounded-xl border border-zinc-800 bg-zinc-950/95 p-5 text-zinc-100 shadow-sm"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <CkeStatusBadge tier={metadata.tier} status={metadata.status} />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
            {metadata.ckeSectionCode ?? metadata.sectionCode}
          </span>
        </div>
        {reqIds.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {reqIds.slice(0, 6).map((code) => (
              <span
                key={code}
                className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400"
              >
                {code}
              </span>
            ))}
          </div>
        )}
      </div>

      {metadata.diffs2015vs2023 && (
        <div className="mb-3 rounded-lg border border-indigo-900/50 bg-indigo-950/30 px-3.5 py-2.5 text-xs leading-relaxed text-indigo-200">
          <span className="font-semibold uppercase tracking-wider text-indigo-300">
            Różnice Formuła 2015 vs 2023+:{" "}
          </span>
          {metadata.diffs2015vs2023}
        </div>
      )}

      {traps.length > 0 && (
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <AlertTriangle className="size-3.5" aria-hidden="true" />
            Pułapki CKE i czasowniki operacyjne:
          </p>
          <ul className="space-y-1 text-xs leading-relaxed text-zinc-300">
            {traps.slice(0, 3).map((trap, idx) => (
              <li key={idx} className="ml-4 list-disc">
                {trap}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

const PHASE_LABELS: Record<CkeAnimatedStep["phase"], { short: string; accent: string }> = {
  "analiza-ryciny": {
    short: "1. Rycina i dane",
    accent: "border-cyan-700/70 bg-cyan-950/60 text-cyan-200",
  },
  "czasownik-operacyjny": {
    short: "2. Czasownik CKE",
    accent: "border-amber-700/70 bg-amber-950/60 text-amber-200",
  },
  mechanizm: {
    short: "3. Mechanizm",
    accent: "border-indigo-700/70 bg-indigo-950/60 text-indigo-200",
  },
  "klucz-cke": {
    short: "4. Klucz 1:1",
    accent: "border-emerald-700/70 bg-emerald-950/60 text-emerald-200",
  },
};

export function CkeMediaGallery({
  media,
  highlightDiagram,
}: {
  media: CkeTaskMedia[];
  highlightDiagram: boolean;
}) {
  const [darkFilter, setDarkFilter] = useState(false);
  const [zoomed, setZoomed] = useState<CkeTaskMedia | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (zoomed) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [zoomed]);

  if (media.length === 0) return null;

  return (
    <div className="my-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          Materiał graficzny arkusza CKE ({media.length})
        </span>
        <button
          type="button"
          onClick={() => setDarkFilter((prev) => !prev)}
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
        >
          {darkFilter ? <Sun className="size-3 text-amber-300" /> : <Moon className="size-3 text-indigo-300" />}
          {darkFilter ? "Oryginał CKE (Jasne tło)" : "Kontrast NOIR (Odwróć)"}
        </button>
      </div>

      <div className={`grid gap-3 ${media.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
        {media.map((item) => (
          <figure
            key={item.id}
            className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
              highlightDiagram
                ? "border-cyan-400/80 ring-2 ring-cyan-500/30"
                : "border-zinc-800"
            } ${darkFilter ? "bg-zinc-950" : "bg-white"}`}
          >
            {highlightDiagram && (
              <div className="bg-cyan-950/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                🔍 Krok 1 (lemo-opuscar): Zwróć uwagę na etykiety, osie i zależności na rycinie
              </div>
            )}
            <div className="relative min-h-[180px] p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.caption ?? "Rycina z arkusza maturalnego CKE"}
                width={960}
                height={600}
                loading="lazy"
                decoding="async"
                className={`mx-auto max-h-96 w-auto object-contain transition-all ${
                  darkFilter ? "invert contrast-125 brightness-95" : ""
                }`}
              />
              {highlightDiagram && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 animate-pulse rounded-lg border-2 border-dashed border-cyan-400/80 bg-cyan-400/10"
                />
              )}
              <button
                type="button"
                onClick={() => setZoomed(item)}
                aria-label="Powiększ rycinę CKE 1:1"
                className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md border border-zinc-700/80 bg-zinc-950/90 px-2 py-1 text-[10px] font-semibold text-zinc-100 opacity-90 shadow hover:bg-zinc-900"
              >
                <Maximize2 className="size-3" />
                Powiększ 1:1
              </button>
            </div>
            {item.caption && (
              <figcaption className="border-t border-zinc-800/40 bg-zinc-950/95 px-3 py-1.5 text-[11px] text-zinc-400">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Native Baseline <dialog> lightbox with Escape & backdrop dismissal */}
      <dialog
        ref={dialogRef}
        aria-label="Podgląd ryciny CKE 1:1"
        onClose={() => setZoomed(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setZoomed(null);
        }}
        className="m-auto max-h-[92vh] max-w-4xl overflow-auto rounded-2xl border border-zinc-700 bg-white p-4 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {zoomed && (
          <div>
            <button
              type="button"
              onClick={() => setZoomed(null)}
              aria-label="Zamknij podgląd ryciny"
              className="sticky top-0 float-right inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-2.5 py-1.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-800 focus-ring"
            >
              <X className="size-3.5" />
              Zamknij (Esc)
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoomed.imageUrl}
              alt={zoomed.caption ?? "Rycina CKE 1:1"}
              width={1200}
              height={800}
              decoding="async"
              className="mx-auto max-h-[80vh] w-auto object-contain"
            />
            {zoomed.caption && (
              <p className="mt-3 text-center text-xs font-medium text-zinc-700">
                {zoomed.caption}
              </p>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}

export function InteractiveTruthTable({
  tableData,
}: {
  tableData: NonNullable<CkeSubTask["interactiveTableData"]>;
}) {
  const [answers, setAnswers] = useState<Record<number, "P" | "F">>({});
  const [checked, setChecked] = useState(false);

  const score = tableData.rows.reduce(
    (acc, row, idx) => (answers[idx] === row.correctAnswer ? acc + 1 : acc),
    0,
  );

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/90 text-[11px] uppercase tracking-wider text-zinc-400">
              <th className="px-3 py-2 font-semibold">{tableData.headers[0] ?? "Stwierdzenie"}</th>
              <th className="w-28 px-3 py-2 text-center font-semibold">
                {tableData.headers[1] ?? "P / F"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, idx) => {
              const chosen = answers[idx];
              const isCorrect = checked && chosen === row.correctAnswer;
              const isWrong = checked && chosen !== row.correctAnswer;
              return (
                <tr
                  key={idx}
                  className={`border-b border-zinc-800/70 transition-colors ${
                    isCorrect
                      ? "bg-emerald-950/25"
                      : isWrong
                        ? "bg-rose-950/25"
                        : "hover:bg-zinc-900/40"
                  }`}
                >
                  <td className="px-3 py-2.5 leading-relaxed text-zinc-200">
                    {row.statement}
                    {checked && (
                      <span
                        className={`ml-2 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                          isCorrect
                            ? "bg-emerald-900/60 text-emerald-200"
                            : "bg-rose-900/60 text-rose-200"
                        }`}
                      >
                        {isCorrect ? "✓ Dobrze" : `✗ Klucz CKE: ${row.correctAnswer}`}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center">
                    <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5">
                      {(["P", "F"] as const).map((letter) => (
                        <button
                          key={letter}
                          type="button"
                          onClick={() => {
                            setAnswers((prev) => ({ ...prev, [idx]: letter }));
                            if (checked) setChecked(false);
                          }}
                          className={`min-w-[2.1rem] rounded-md px-2 py-1 text-xs font-bold transition-colors ${
                            chosen === letter
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "text-zinc-400 hover:text-zinc-100"
                          }`}
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 bg-zinc-900/70 px-3 py-2">
        <span className="text-[11px] text-zinc-400">
          {checked
            ? `Wynik P/F: ${score} / ${tableData.rows.length} poprawnych ocen`
            : "Zaznacz P (Prawda) lub F (Fałsz) dla każdego stwierdzenia"}
        </span>
        <div className="flex items-center gap-2">
          {checked && (
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setChecked(false);
              }}
              className="rounded-md border border-zinc-700 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:bg-zinc-800"
            >
              Wyczyść
            </button>
          )}
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="rounded-md border border-emerald-700/70 bg-emerald-950/70 px-3 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-900/70"
          >
            ✓ Sprawdź tabelę P/F
          </button>
        </div>
      </div>
    </div>
  );
}

export function CalculationScratchpad({ defaultOpen }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const [notes, setNotes] = useState("");

  return (
    <div className="my-2.5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
      >
        <Calculator className="size-3.5 text-sky-400" aria-hidden="true" />
        {open ? "Ukryj brudnopis / kratkę CKE" : "📐 Brudnopis / Kratka obliczeniowa CKE"}
      </button>

      {open && (
        <div
          className="mt-2 rounded-xl border border-zinc-800 p-3"
          style={{
            backgroundColor: "#0a0d12",
            backgroundImage:
              "linear-gradient(to right, rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-sky-300/80">
            <span>Miejsce na obliczenia / równania reakcji (brudnopis CKE)</span>
            {notes && (
              <button
                type="button"
                onClick={() => setNotes("")}
                className="text-zinc-400 hover:text-zinc-200"
              >
                Wyczyść kratkę
              </button>
            )}
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Zapisz dane, wzór (np. n = m/M, pV = nRT), równanie reakcji lub tok rozumowania..."
            className="w-full resize-y bg-transparent font-mono text-xs leading-[18px] text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
          />
        </div>
      )}
    </div>
  );
}

export function CkeLemoSolutionPlayer({
  steps,
  officialAnswerKey,
  officialKeyCropUrl,
  onPhaseChange,
}: {
  steps: CkeAnimatedStep[];
  officialAnswerKey: string;
  officialKeyCropUrl?: string;
  onPhaseChange?: (phase: CkeAnimatedStep["phase"] | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const safeSteps = useMemo(() => steps, [steps]);
  const currentStep = safeSteps[activeIndex] ?? safeSteps[0];

  useEffect(() => {
    if (!expanded) {
      onPhaseChange?.(null);
      return;
    }
    onPhaseChange?.(currentStep?.phase ?? null);
  }, [expanded, currentStep?.phase, onPhaseChange]);

  useEffect(() => {
    if (!isPlaying || !expanded) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => {
        if (prev + 1 >= safeSteps.length) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3400);
    return () => window.clearInterval(timer);
  }, [isPlaying, expanded, safeSteps.length]);

  const progressPct = Math.round(((activeIndex + 1) / Math.max(1, safeSteps.length)) * 100);

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => {
          setExpanded((prev) => !prev);
          if (expanded) setIsPlaying(false);
        }}
        aria-expanded={expanded}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-colors hover:border-emerald-700 hover:bg-emerald-950/40 focus-ring"
      >
        <Sparkles className="size-3.5 text-emerald-400" aria-hidden="true" />
        {expanded
          ? "Ukryj odtwarzacz rozwiązania lemo-opuscar i klucz CKE"
          : "▶ Odtwórz analizę krok po kroku (lemo-opuscar + Klucz CKE)"}
        <ChevronDown
          className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {expanded && currentStep && (
        <div className="mt-3 overflow-hidden rounded-xl border border-emerald-900/60 bg-zinc-950/95 shadow-inner">
          {/* Player toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/90 bg-zinc-900/90 px-3.5 py-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  if (!isPlaying && activeIndex === safeSteps.length - 1) {
                    setActiveIndex(0);
                  }
                  setIsPlaying((p) => !p);
                }}
                className="inline-flex items-center gap-1.5 rounded-md border border-emerald-700/80 bg-emerald-950/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-900/80"
              >
                {isPlaying ? <Pause className="size-3" /> : <Play className="size-3" />}
                {isPlaying ? "Pauza" : "Odtwórz auto"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex((i) => Math.max(0, i - 1));
                }}
                disabled={activeIndex === 0}
                aria-label="Poprzedni krok"
                className="rounded-md border border-zinc-800 bg-zinc-950 p-1 text-zinc-300 hover:bg-zinc-800 disabled:opacity-40"
              >
                <ChevronLeft className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex((i) => Math.min(safeSteps.length - 1, i + 1));
                }}
                disabled={activeIndex >= safeSteps.length - 1}
                aria-label="Następny krok"
                className="rounded-md border border-zinc-800 bg-zinc-950 p-1 text-zinc-300 hover:bg-zinc-800 disabled:opacity-40"
              >
                <ChevronRight className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex(0);
                }}
                aria-label="Od początku"
                className="rounded-md border border-zinc-800 bg-zinc-950 p-1 text-zinc-400 hover:text-zinc-100"
              >
                <RotateCcw className="size-3" />
              </button>
            </div>

            <div className="flex flex-wrap gap-1">
              {safeSteps.map((st, idx) => {
                const meta = PHASE_LABELS[st.phase] ?? PHASE_LABELS["klucz-cke"];
                const active = idx === activeIndex;
                return (
                  <button
                    key={st.stepNumber}
                    type="button"
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveIndex(idx);
                    }}
                    className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-all ${
                      active
                        ? `${meta.accent} scale-[1.02] shadow-sm`
                        : idx < activeIndex
                          ? "border-emerald-900/60 bg-emerald-950/30 text-emerald-400/90"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {meta.short}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="h-1 w-full bg-zinc-900">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Active step body */}
          <div key={currentStep.stepNumber} className="space-y-3 p-4 text-xs leading-relaxed">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-zinc-100">{currentStep.title}</h4>
              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                Krok {activeIndex + 1} / {safeSteps.length}
              </span>
            </div>

            {currentStep.highlightQuote && (
              <div className="rounded-lg border border-amber-800/50 bg-amber-950/25 px-3 py-2 text-[11px] text-amber-200">
                <span className="font-semibold uppercase tracking-wider text-amber-300">
                  Słowo kluczowe / cytat CKE:{" "}
                </span>
                <span className="font-mono">{currentStep.highlightQuote}</span>
              </div>
            )}

            <div
              className="prose prose-xs prose-invert max-w-none leading-relaxed text-zinc-200"
              dangerouslySetInnerHTML={{ __html: currentStep.explanationHtml }}
            />

            {currentStep.phase === "klucz-cke" && (
              <div className="space-y-2.5 border-t border-zinc-800 pt-3">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  Oficjalne kryteria oceniania CKE (1 pkt vs 0 pkt):
                </p>
                <p className="whitespace-pre-line rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-3 text-xs leading-relaxed text-zinc-200">
                  {officialAnswerKey}
                </p>
                {officialKeyCropUrl && (
                  <div className="rounded-lg border border-zinc-800 bg-white p-2">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                      Oryginalny wycinek z Zasad Oceniania CKE:
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={officialKeyCropUrl}
                      alt="Oficjalny wycinek z klucza CKE"
                      width={800}
                      height={320}
                      loading="lazy"
                      decoding="async"
                      className="mx-auto max-h-72 w-auto object-contain"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SubTaskBlock({
  subTask,
  onPhaseChange,
}: {
  subTask: CkeSubTask;
  onPhaseChange?: (phase: CkeAnimatedStep["phase"] | null) => void;
}) {
  const steps = useMemo(
    () => buildDefaultAnimatedSteps(subTask),
    [subTask],
  );

  return (
    <div className="rounded-lg border border-zinc-800/90 bg-zinc-900/55 p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-bold text-zinc-100">
            Zadanie {subTask.subTaskNumber}
          </span>
          <span className="rounded border border-emerald-800/60 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            {subTask.operationalVerb}
          </span>
        </div>
        <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-zinc-300">
          0–{subTask.points} pkt
        </span>
      </div>

      <div
        className="prose prose-sm prose-invert max-w-none leading-relaxed text-zinc-200"
        dangerouslySetInnerHTML={{ __html: subTask.promptHtml }}
      />

      {subTask.interactiveTableData && (
        <InteractiveTruthTable tableData={subTask.interactiveTableData} />
      )}

      {(subTask.taskType === "calculation-grid" || subTask.points >= 2) && (
        <CalculationScratchpad defaultOpen={subTask.taskType === "calculation-grid"} />
      )}

      <CkeLemoSolutionPlayer
        steps={steps}
        officialAnswerKey={subTask.officialAnswerKey}
        officialKeyCropUrl={subTask.officialKeyCropUrl}
        onPhaseChange={onPhaseChange}
      />
    </div>
  );
}

export function ExamTaskCard({
  task,
  onOpenPdfPage,
}: {
  task: CkeExamTask;
  onOpenPdfPage?: (pageNo: number) => void;
}) {
  const [activePhase, setActivePhase] = useState<CkeAnimatedStep["phase"] | null>(null);
  const subTasks = task.subTasks ?? [];
  const hasMultipleSubTasks = subTasks.length > 1;
  const singleSub = subTasks.length === 1 ? subTasks[0] : undefined;
  const normalizedParentPrompt = task.promptHtml.replace(/\s+/g, " ").trim();
  const normalizedSinglePrompt = singleSub?.promptHtml.replace(/\s+/g, " ").trim() ?? "";
  const showParentPrompt =
    !singleSub ||
    normalizedParentPrompt !== normalizedSinglePrompt;

  const fallbackSteps = useMemo(
    () => buildDefaultAnimatedSteps(task),
    [task],
  );

  return (
    <article
      id={`cke-task-${task.id}`}
      className="rounded-xl border border-zinc-800 bg-zinc-950/90 p-5 text-zinc-100 transition-colors"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={
              task.formula === "2023"
                ? "rounded border border-indigo-800/70 bg-indigo-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300"
                : "rounded border border-amber-800/70 bg-amber-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300"
            }
          >
            Formuła {task.formula}
          </span>
          <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[11px] font-mono text-zinc-200">
            CKE {task.year} ({task.month}) • {task.taskNumber}
          </span>
          <span className="rounded border border-emerald-800/60 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            {task.operationalVerb}
          </span>
          {task.pdfPageNumber && (
            <button
              type="button"
              onClick={() => onOpenPdfPage?.(task.pdfPageNumber!)}
              className="inline-flex items-center gap-1 rounded border border-sky-800/60 bg-sky-950/50 px-2 py-0.5 text-[10px] font-medium text-sky-200 hover:bg-sky-900/60"
            >
              <FileText className="size-3" aria-hidden="true" />
              Strona {task.pdfPageNumber} arkusza
            </button>
          )}
        </div>
        <span className="text-xs font-bold tabular-nums text-zinc-300">
          0–{task.points} pkt
        </span>
      </div>

      {showParentPrompt && (
        <div
          className="prose prose-sm prose-invert max-w-none leading-relaxed text-zinc-200"
          dangerouslySetInnerHTML={{ __html: task.promptHtml }}
        />
      )}

      {task.media && task.media.length > 0 && (
        <CkeMediaGallery
          media={task.media}
          highlightDiagram={activePhase === "analiza-ryciny"}
        />
      )}

      {hasMultipleSubTasks ? (
        <div className="mt-4 space-y-3">
          {subTasks.map((st) => (
            <SubTaskBlock
              key={st.subTaskNumber}
              subTask={st}
              onPhaseChange={setActivePhase}
            />
          ))}
        </div>
      ) : singleSub ? (
        <div className="mt-3">
          {!showParentPrompt ? (
            <div
              className="prose prose-sm prose-invert max-w-none leading-relaxed text-zinc-200"
              dangerouslySetInnerHTML={{ __html: singleSub.promptHtml }}
            />
          ) : (
            <div
              className="prose prose-sm prose-invert mt-2 max-w-none rounded-lg border border-zinc-800/70 bg-zinc-900/40 p-3 leading-relaxed text-zinc-200"
              dangerouslySetInnerHTML={{ __html: singleSub.promptHtml }}
            />
          )}
          {singleSub.interactiveTableData && (
            <InteractiveTruthTable tableData={singleSub.interactiveTableData} />
          )}
          {(singleSub.taskType === "calculation-grid" || task.taskType === "calculation-grid") && (
            <CalculationScratchpad defaultOpen />
          )}
          <CkeLemoSolutionPlayer
            steps={buildDefaultAnimatedSteps(singleSub)}
            officialAnswerKey={singleSub.officialAnswerKey}
            officialKeyCropUrl={singleSub.officialKeyCropUrl}
            onPhaseChange={setActivePhase}
          />
        </div>
      ) : (
        <div className="mt-3">
          {task.interactiveTableData && (
            <InteractiveTruthTable tableData={task.interactiveTableData} />
          )}
          <CkeLemoSolutionPlayer
            steps={fallbackSteps}
            officialAnswerKey={task.officialAnswerKey}
            officialKeyCropUrl={task.officialKeyCropUrl}
            onPhaseChange={setActivePhase}
          />
        </div>
      )}
    </article>
  );
}

/**
 * Bottom section rendered inside textbook chapters showing matching CKE exam
 * tasks with official answer keys and lemo-opuscar animated justifications.
 */
export function CkeExamTasksSection({
  subject,
  chapterId,
  chapterTitle,
  sectionCode,
}: {
  subject?: string;
  chapterId: string;
  chapterTitle: string;
  sectionCode?: string;
}) {
  const tasks = useMemo(
    () =>
      getCkeTasksForChapter({
        subject,
        chapterId,
        chapterTitle,
        sectionCode,
      }),
    [subject, chapterId, chapterTitle, sectionCode],
  );

  if (tasks.length === 0) return null;

  return (
    <section
      id="zadania-maturalne-cke"
      aria-labelledby="cke-chapter-tasks-heading"
      className="mt-10 border-t border-zinc-800 pt-8"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2
          id="cke-chapter-tasks-heading"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          📄 Zadania Maturalne CKE z tego tematu (Klucz 1:1 + Animowana analiza)
        </h2>
        <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
          {tasks.length} {tasks.length === 1 ? "wiązka CKE" : "wiązek CKE"}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <ExamTaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

/**
 * Searchable & filterable 1:1 CKE Exam Sheets Repository shown when the user
 * switches to `mode: 'cke-exams'`. Includes full-sheet navigation, interactive
 * CKE task bundles + lemo-opuscar animated walkthroughs, and 1:1 PDF Split-View.
 */
export function CkeExamSheetsRepositoryView({
  subject,
  onExitExamMode,
}: {
  subject?: string;
  onExitExamMode?: () => void;
}) {
  const sheets = useMemo(() => getCkeExamSheets(subject), [subject]);
  const allTasks = useMemo(() => getCkeTasksForSubject(subject), [subject]);

  const [presentationMode, setPresentationMode] = useState<"interactive" | "pdf-split">(
    "interactive",
  );
  const [selectedSheetId, setSelectedSheetId] = useState<string>(() => sheets[0]?.id ?? "all");
  const [formulaFilter, setFormulaFilter] = useState<"all" | "2015" | "2023">("all");
  const [yearFilter, setYearFilter] = useState<number | "all">("all");
  const [search, setSearch] = useState("");
  const [activePdfPage, setActivePdfPage] = useState<number>(4);
  const [onlyCurrentPageTasks, setOnlyCurrentPageTasks] = useState<boolean>(false);
  const [pdfDarkFilter, setPdfDarkFilter] = useState<boolean>(false);

  const activeSheet: CkeExamSheet | undefined = useMemo(
    () => sheets.find((s) => s.id === selectedSheetId) ?? sheets[0],
    [sheets, selectedSheetId],
  );

  const years = useMemo(
    () => Array.from(new Set(allTasks.map((t) => t.year))).sort((a, b) => b - a),
    [allTasks],
  );

  const taskPool = useMemo(() => {
    if (selectedSheetId !== "all") {
      const sheet = sheets.find((s) => s.id === selectedSheetId);
      if (sheet) return sheet.tasks;
    }
    return allTasks;
  }, [selectedSheetId, sheets, allTasks]);

  const filtered = useMemo(
    () =>
      filterCkeTasks(taskPool, {
        formula: formulaFilter,
        year: yearFilter,
        search,
      }),
    [taskPool, formulaFilter, yearFilter, search],
  );

  const displayedTasks = useMemo(() => {
    if (presentationMode === "pdf-split" && onlyCurrentPageTasks) {
      const onPage = filtered.filter((t) => t.pdfPageNumber === activePdfPage);
      if (onPage.length > 0) return onPage;
    }
    return filtered;
  }, [presentationMode, onlyCurrentPageTasks, filtered, activePdfPage]);

  const pageUrls = activeSheet?.pageImageUrls ?? [];
  const totalPages = pageUrls.length;
  const clampedPage = totalPages > 0 ? Math.min(Math.max(1, activePdfPage), totalPages) : 1;
  const currentPageImageUrl = pageUrls[clampedPage - 1];

  const handleOpenPdfPage = (pageNo: number) => {
    setActivePdfPage(pageNo);
    setPresentationMode("pdf-split");
  };

  const handleJumpToTask = (task: CkeExamTask) => {
    if (task.pdfPageNumber) {
      setActivePdfPage(task.pdfPageNumber);
    }
    const el = document.getElementById(`cke-task-${task.id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-label="Repozytorium Oficjalnych Arkuszy CKE 1:1"
      className="my-6 space-y-5 rounded-xl border border-zinc-800 bg-zinc-950/95 p-5 text-zinc-100"
    >
      {/* Top Header & Dual Presentation Mode Toggle */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-100">
            <FileText className="size-5 text-emerald-400" aria-hidden="true" />
            📄 Pełne Arkusze Maturalne CKE 1:1 (Ryciny + Player Krok Po Kroku)
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            Kompletne arkusze CKE od Zadania 1. do ostatniego, z wyciętymi rycinami, interaktywnymi tabelami P/F i animowanym kluczem egzaminatora.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div
            role="tablist"
            aria-label="Tryb prezentacji arkusza CKE"
            className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-1 text-xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={presentationMode === "interactive"}
              onClick={() => setPresentationMode("interactive")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-semibold transition-colors ${
                presentationMode === "interactive"
                  ? "bg-emerald-600 text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              <Zap className="size-3.5" aria-hidden="true" />
              Widok Interaktywny CKE + AI Player
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={presentationMode === "pdf-split"}
              onClick={() => {
                if (selectedSheetId === "all" && sheets[0]) {
                  setSelectedSheetId(sheets[0].id);
                }
                setPresentationMode("pdf-split");
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-semibold transition-colors ${
                presentationMode === "pdf-split"
                  ? "bg-sky-600 text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              <Columns2 className="size-3.5" aria-hidden="true" />
              Widok Oryginalnego Arkusza 1:1 (PDF Split-View)
            </button>
          </div>

          {onExitExamMode && (
            <button
              type="button"
              onClick={onExitExamMode}
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 focus-ring"
            >
              ← Wróć do podręcznika
            </button>
          )}
        </div>
      </div>

      {/* Sheet selector pills */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {sheets.map((sheet) => {
            const active = selectedSheetId === sheet.id;
            return (
              <button
                key={sheet.id}
                type="button"
                onClick={() => {
                  setSelectedSheetId(sheet.id);
                  setActivePdfPage(4);
                }}
                className={`rounded-lg border px-3 py-1.5 text-left text-xs transition-colors ${
                  active
                    ? "border-emerald-600 bg-emerald-950/60 font-semibold text-emerald-200"
                    : "border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
                }`}
              >
                <span>{sheet.title}</span>
                <span className="ml-2 rounded bg-zinc-950/80 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                  {sheet.tasks.length} wiązek / {sheet.totalTasks} zad. • {sheet.totalPoints} pkt
                </span>
              </button>
            );
          })}
          {presentationMode === "interactive" && (
            <button
              type="button"
              onClick={() => setSelectedSheetId("all")}
              className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                selectedSheetId === "all"
                  ? "border-indigo-500 bg-indigo-950/60 font-semibold text-indigo-200"
                  : "border-zinc-800 bg-zinc-900/70 text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Wszystkie roczniki ({allTasks.length} wiązek)
            </button>
          )}
        </div>
      </div>

      {/* Filters bar */}
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="relative flex items-center sm:col-span-1">
          <Search className="pointer-events-none absolute left-3 size-3.5 text-zinc-500" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Szukaj (np. fruktoza, PCR, pirogronian, P/F)..."
            aria-label="Szukaj zadań maturalnych CKE"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-1.5 pl-8 pr-3 text-xs text-zinc-100 placeholder:text-zinc-500 focus-ring"
          />
        </label>

        <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 p-1 text-xs">
          {(["all", "2023", "2015"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFormulaFilter(f)}
              className={`flex-1 rounded px-2 py-1 font-medium transition-colors ${
                formulaFilter === f
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {f === "all" ? "Wszystkie formuły" : `Formuła ${f}`}
            </button>
          ))}
        </div>

        <select
          value={yearFilter === "all" ? "all" : String(yearFilter)}
          onChange={(e) =>
            setYearFilter(e.target.value === "all" ? "all" : Number(e.target.value))
          }
          aria-label="Filtruj po roku matury CKE"
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-100 focus-ring"
        >
          <option value="all">Wszystkie roczniki CKE</option>
          {years.map((y) => (
            <option key={y} value={y}>
              Matura {y}
            </option>
          ))}
        </select>
      </div>

      {/* Horizontal Quick-Jump Pill Bar across ALL tasks 1..N */}
      {filtered.length > 0 && (
        <div
          aria-label="Szybka nawigacja po zadaniach arkusza"
          className="flex flex-wrap items-center gap-1 rounded-lg border border-zinc-800/80 bg-zinc-900/50 p-2"
        >
          <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Zadania ({filtered.length}):
          </span>
          {filtered.map((t) => {
            const num = t.taskNumber.replace(/^Zadanie\s+/i, "");
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleJumpToTask(t)}
                className={`rounded border px-2 py-0.5 text-[11px] font-mono transition-colors ${
                  presentationMode === "pdf-split" && t.pdfPageNumber === clampedPage
                    ? "border-sky-600 bg-sky-950/70 text-sky-200"
                    : "border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-emerald-700 hover:text-emerald-200"
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Content Area: Interactive vs 1:1 PDF Split-View */}
      {filtered.length === 0 ? (
        <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 p-6 text-center text-xs text-zinc-400">
          Brak zadań CKE spełniających wybrane kryteria wyszukiwania dla tego przedmiotu.
        </div>
      ) : presentationMode === "pdf-split" && totalPages > 0 ? (
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Left sticky original PDF page 1:1 viewer */}
          <div className="lg:col-span-6">
            <div className="sticky top-4 space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActivePdfPage((p) => Math.max(1, p - 1))}
                    disabled={clampedPage <= 1}
                    className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40"
                  >
                    <ChevronLeft className="size-3.5" />
                    Poprzednia
                  </button>
                  <select
                    value={clampedPage}
                    onChange={(e) => setActivePdfPage(Number(e.target.value))}
                    aria-label="Wybierz stronę oryginalnego arkusza CKE"
                    className="rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-mono text-zinc-100"
                  >
                    {pageUrls.map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        Strona {idx + 1} / {totalPages}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => setActivePdfPage((p) => Math.min(totalPages, p + 1))}
                    disabled={clampedPage >= totalPages}
                    className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40"
                  >
                    Następna
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPdfDarkFilter((d) => !d)}
                    className="rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-[11px] text-zinc-300 hover:text-white"
                  >
                    {pdfDarkFilter ? "☀️ Papier CKE" : "🌙 NOIR"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOnlyCurrentPageTasks((o) => !o)}
                    className={`rounded-md border px-2 py-1 text-[11px] font-medium ${
                      onlyCurrentPageTasks
                        ? "border-sky-600 bg-sky-950/70 text-sky-200"
                        : "border-zinc-700 bg-zinc-950 text-zinc-300"
                    }`}
                  >
                    {onlyCurrentPageTasks ? "Filtr: bieżąca strona" : "Wszystkie zadania"}
                  </button>
                </div>
              </div>

              <div className="max-h-[78vh] overflow-auto rounded-lg border border-zinc-800 bg-white p-1">
                {currentPageImageUrl && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={currentPageImageUrl}
                    alt={`Oryginalna strona ${clampedPage} arkusza CKE`}
                    width={960}
                    height={1358}
                    loading="lazy"
                    decoding="async"
                    className={`mx-auto w-full object-contain ${
                      pdfDarkFilter ? "invert contrast-125 brightness-95" : ""
                    }`}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right synchronized tasks + lemo-opuscar player column */}
          <div className="flex flex-col gap-4 lg:col-span-6">
            {displayedTasks.map((task) => (
              <ExamTaskCard
                key={task.id}
                task={task}
                onOpenPdfPage={handleOpenPdfPage}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((task) => (
            <ExamTaskCard
              key={task.id}
              task={task}
              onOpenPdfPage={totalPages > 0 ? handleOpenPdfPage : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
