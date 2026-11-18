"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Maximize2,
  PenLine,
  X,
} from "lucide-react";
import type { CkeMetadata } from "@/server/models";
import type {
  CkeAnimatedStep,
  CkeExamSheet,
  CkeExamTask,
  CkePdfOverlayAnnotation,
  CkeSubTask,
  CkeTaskMedia,
} from "@/types/curriculum";
import {
  buildDefaultAnimatedSteps,
  getCkeExamSheets,
  getCkeTasksForChapter,
  getPdfOverlaysForPage,
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
        <div className="mb-3 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3.5 py-2.5 text-xs leading-relaxed text-zinc-300">
          <span className="font-semibold uppercase tracking-wider text-zinc-100">
            Różnice Formuła 2015 vs 2023+:{" "}
          </span>
          {metadata.diffs2015vs2023}
        </div>
      )}

      {traps.length > 0 && (
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-200">
            <AlertTriangle className="size-3.5 text-zinc-400" aria-hidden="true" />
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

export function CkeMediaGallery({
  media,
  highlightDiagram,
}: {
  media: CkeTaskMedia[];
  highlightDiagram?: boolean;
}) {
  void highlightDiagram;
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
      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
        Materiał graficzny arkusza CKE ({media.length})
      </p>

      <div className={`grid gap-3 ${media.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
        {media.map((item) => (
          <figure
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-white"
          >
            <div className="relative min-h-[180px] p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.caption ?? "Rycina z arkusza maturalnego CKE"}
                width={960}
                height={600}
                loading="lazy"
                decoding="async"
                onClick={() => setZoomed(item)}
                className="mx-auto max-h-96 w-auto cursor-zoom-in object-contain"
              />
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
                      ? "bg-zinc-900/90"
                      : isWrong
                        ? "bg-zinc-900/50"
                        : "hover:bg-zinc-900/40"
                  }`}
                >
                  <td className="px-3 py-2.5 leading-relaxed text-zinc-200">
                    {row.statement}
                    {checked && (
                      <span
                        className={`ml-2 inline-block rounded border px-1.5 py-0.5 text-[10px] font-semibold ${
                          isCorrect
                            ? "border-zinc-700 bg-zinc-800 text-zinc-100"
                            : "border-zinc-800 bg-zinc-900 text-zinc-300"
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
                              ? "bg-zinc-100 text-zinc-950 shadow-sm"
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
            className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-[11px] font-semibold text-zinc-100 hover:bg-zinc-700"
          >
            ✓ Sprawdź tabelę P/F
          </button>
        </div>
      </div>
    </div>
  );
}

export function CalculationScratchpad({ defaultOpen }: { defaultOpen?: boolean }) {
  void defaultOpen;
  return null;
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
  void onPhaseChange;
  const [expanded, setExpanded] = useState(false);

  const reasoningSteps = useMemo(
    () => steps.filter((step) => step.phase !== "klucz-cke"),
    [steps],
  );

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 focus-ring"
      >
        {expanded ? "Ukryj odpowiedź" : "Zobacz odpowiedź i klucz CKE"}
        <ChevronDown
          className={`size-3.5 text-zinc-400 transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {expanded && (
        <div className="mt-3 space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-xs leading-relaxed text-zinc-300">
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-200">
              <CheckCircle2 className="size-3.5 text-zinc-400" aria-hidden="true" />
              Oficjalne kryteria oceniania CKE:
            </p>
            <p className="whitespace-pre-line rounded-lg border border-zinc-800 bg-zinc-950/80 p-3 text-xs leading-relaxed text-zinc-100">
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

          {reasoningSteps.length > 0 && (
            <div className="space-y-3 border-t border-zinc-800/80 pt-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Uzasadnienie krok po kroku:
              </p>
              <ol className="space-y-3">
                {reasoningSteps.map((step) => (
                  <li
                    key={step.stepNumber}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3"
                  >
                    <h4 className="mb-1.5 text-xs font-semibold text-zinc-100">
                      {step.title}
                    </h4>
                    <div
                      className="prose prose-xs prose-invert max-w-none leading-relaxed text-zinc-300"
                      dangerouslySetInnerHTML={{ __html: step.explanationHtml }}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SubTaskBlock({
  subTask,
}: {
  subTask: CkeSubTask;
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
          <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
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

      <CkeLemoSolutionPlayer
        steps={steps}
        officialAnswerKey={subTask.officialAnswerKey}
        officialKeyCropUrl={subTask.officialKeyCropUrl}
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
          <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
            Formuła {task.formula}
          </span>
          <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[11px] font-mono text-zinc-200">
            CKE {task.year} ({task.month}) • {task.taskNumber}
          </span>
          <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
            {task.operationalVerb}
          </span>
          {task.pdfPageNumber && (
            <button
              type="button"
              onClick={() => onOpenPdfPage?.(task.pdfPageNumber!)}
              className="inline-flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100"
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
        <CkeMediaGallery media={task.media} />
      )}

      {hasMultipleSubTasks ? (
        <div className="mt-4 space-y-3">
          {subTasks.map((st) => (
            <SubTaskBlock key={st.subTaskNumber} subTask={st} />
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
          <CkeLemoSolutionPlayer
            steps={buildDefaultAnimatedSteps(singleSub)}
            officialAnswerKey={singleSub.officialAnswerKey}
            officialKeyCropUrl={singleSub.officialKeyCropUrl}
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
          📄 Zadania Maturalne CKE z tego tematu
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
 * Renders one CKE exam PDF page (either scanned PNG `/cke-assets/.../page_*.png`
 * or authentic A4 CKE vector sheet layout for digital sheets) with toggleable
 * `lemo-opuscar` solved overlays directly on the sheet.
 */
export function CkeSolvedPdfPageOverlay({
  pageNumber,
  totalPages,
  pageImageUrl,
  annotations,
  pageTasks,
  solvedMode,
  onToggleSolved,
}: {
  sheetId?: string;
  pageNumber: number;
  totalPages: number;
  pageImageUrl?: string;
  annotations: CkePdfOverlayAnnotation[];
  pageTasks: CkeExamTask[];
  solvedMode: boolean;
  onToggleSolved?: (solved: boolean) => void;
}) {
  const [zoomOpen, setZoomOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (zoomOpen) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [zoomOpen]);

  const deduplicatedAnnotations = useMemo(() => {
    const seen = new Set<string>();
    const grouped: Array<CkePdfOverlayAnnotation & { combinedAnswers: string[] }> = [];
    for (const ann of annotations) {
      const key = (ann.subTaskNumber ?? ann.taskNumber).trim();
      if (!seen.has(key)) {
        seen.add(key);
        grouped.push({
          ...ann,
          combinedAnswers: ann.answerText ? [ann.answerText] : [],
        });
      } else {
        const existing = grouped.find(
          (g) => (g.subTaskNumber ?? g.taskNumber).trim() === key,
        );
        if (existing && ann.answerText && !existing.combinedAnswers.includes(ann.answerText)) {
          existing.combinedAnswers.push(ann.answerText);
        }
      }
    }
    return grouped;
  }, [annotations]);

  const renderPaperCanvas = (isZoom = false) => {
    if (pageImageUrl) {
      return (
        <div
          className={`@container relative w-full overflow-hidden rounded-lg border border-zinc-800 bg-white ${
            isZoom ? "min-w-[720px] sm:min-w-[920px]" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pageImageUrl}
            alt={`Strona ${pageNumber} oryginalnego arkusza CKE`}
            width={960}
            height={1358}
            loading={isZoom ? "eager" : "lazy"}
            decoding="async"
            className="block h-auto w-full select-none object-contain"
          />

          {solvedMode &&
            annotations.map((ann) => {
              const trimmed = ann.answerText.trim();
              const isShortToken =
                trimmed.length <= 4 ||
                (ann.boxType === "table-fill" && trimmed.length <= 6);
              const isMultiRowTf =
                Boolean(ann.truthChoices && ann.truthChoices.length > 1) &&
                ann.boxType === "true-false";

              return (
                <div
                  key={ann.id}
                  style={{
                    left: `${ann.xPct}%`,
                    top: `${ann.yPct}%`,
                    width: `${ann.widthPct}%`,
                    height: `${Math.max(2.2, ann.heightPct)}%`,
                  }}
                  aria-label={`Odpowiedź do zadania ${ann.subTaskNumber ?? ann.taskNumber}: ${ann.answerText}`}
                  className={`pointer-events-none absolute z-10 flex select-none overflow-hidden bg-transparent font-[family-name:var(--font-handwriting)] text-[#1b365d] mix-blend-multiply ${
                    isShortToken
                      ? "items-center justify-center text-center text-[clamp(11px,2.2cqw,24px)] font-bold leading-none"
                      : ann.boxType === "table-fill"
                        ? "-rotate-[0.35deg] items-center justify-start px-[0.8%] text-left text-[clamp(8.5px,1.5cqw,16px)] font-semibold leading-[1.05]"
                        : isMultiRowTf
                          ? "flex-col items-end justify-around pr-[3%] text-[clamp(10px,1.9cqw,20px)] font-bold leading-none"
                          : "-rotate-[0.25deg] items-start justify-start px-[0.5%] pt-[0.2%] text-left text-[clamp(9px,1.55cqw,17px)] font-semibold leading-[1.28]"
                  }`}
                >
                  {isMultiRowTf && ann.truthChoices ? (
                    ann.truthChoices.map((choice, idx) => (
                      <span key={idx} className="inline-block tracking-wide">
                        {choice}
                      </span>
                    ))
                  ) : ann.boxType === "multiple-choice" &&
                    ann.markedOptions &&
                    ann.markedOptions.length > 0 &&
                    trimmed.length <= 8 ? (
                    <span>{ann.markedOptions.join(", ")}</span>
                  ) : (
                    <span className="w-full break-words">{trimmed}</span>
                  )}
                </div>
              );
            })}
        </div>
      );
    }

    // Authentic A4 Vector Paper Fallback for sheets without PNG page scans (e.g. Trial / Fizyka / Matematyka)
    return (
      <div className="w-full rounded-lg border border-zinc-800 bg-white p-5 text-zinc-900 shadow-inner sm:p-7">
        <div className="mb-4 flex items-center justify-between border-b border-zinc-300 pb-2 text-[11px] font-mono text-zinc-600">
          <span>CKE • Strona {pageNumber} z {totalPages}</span>
          <span className="inline-flex items-center gap-1">
            {solvedMode ? (
              <>
                <PenLine className="size-3 text-[#1b365d]" aria-hidden="true" />
                <span className="font-medium text-[#1b365d]">Wypełnienie długopisem</span>
              </>
            ) : (
              "Arkusz do rozwiązania"
            )}
          </span>
        </div>

        <div className="space-y-6">
          {pageTasks.map((task) => {
            const subItems =
              task.subTasks && task.subTasks.length > 0
                ? task.subTasks
                : [
                    {
                      subTaskNumber: task.taskNumber.replace(/^Zadanie\s+/i, ""),
                      points: task.points,
                      taskType: task.taskType ?? "open-text",
                      promptHtml: task.promptHtml,
                      operationalVerb: task.operationalVerb,
                      officialAnswerKey: task.officialAnswerKey,
                      interactiveTableData: task.interactiveTableData,
                      animatedSteps: task.animatedSteps ?? [],
                    },
                  ];

            return (
              <div key={task.id} className="space-y-3 border-b border-zinc-200 pb-5 last:border-b-0">
                {task.subTasks && task.subTasks.length > 0 && (
                  <div
                    className="prose prose-sm max-w-none font-serif text-zinc-900"
                    dangerouslySetInnerHTML={{ __html: task.promptHtml }}
                  />
                )}

                {subItems.map((sub) => {
                  const ann = annotations.find(
                    (a) => a.subTaskNumber === sub.subTaskNumber,
                  );
                  return (
                    <div key={sub.subTaskNumber} className="space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <div
                          className="prose prose-sm max-w-none font-serif text-zinc-900"
                          dangerouslySetInnerHTML={{ __html: sub.promptHtml }}
                        />
                        <span className="shrink-0 font-mono text-[11px] font-semibold text-zinc-600">
                          (0–{sub.points})
                        </span>
                      </div>

                      {sub.interactiveTableData && (
                        <table className="w-full border-collapse border border-zinc-400 text-xs">
                          <thead>
                            <tr className="bg-zinc-100">
                              <th className="border border-zinc-400 px-2.5 py-1.5 text-left font-semibold">
                                {sub.interactiveTableData.headers[0] ?? "Stwierdzenie"}
                              </th>
                              <th className="w-24 border border-zinc-400 px-2.5 py-1.5 text-center font-semibold">
                                {sub.interactiveTableData.headers[1] ?? "P / F"}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {sub.interactiveTableData.rows.map((row, idx) => (
                              <tr key={idx}>
                                <td className="border border-zinc-400 px-2.5 py-1.5">
                                  {row.statement}
                                </td>
                                <td className="border border-zinc-400 px-2.5 py-1.5 text-center">
                                  {solvedMode ? (
                                    <span className="font-[family-name:var(--font-handwriting)] text-xl font-bold text-[#1b365d]">
                                      {row.correctAnswer}
                                    </span>
                                  ) : (
                                    <span className="font-mono font-bold text-zinc-500">P / F</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}

                      {!sub.interactiveTableData && (
                        <div className="border-b border-dashed border-zinc-400 px-2 py-1.5 text-xs">
                          {solvedMode ? (
                            <p className="whitespace-pre-line font-[family-name:var(--font-handwriting)] text-lg font-semibold leading-snug text-[#1b365d]">
                              {ann?.answerText ?? sub.officialAnswerKey}
                            </p>
                          ) : (
                            <div className="space-y-2 py-1 font-mono tracking-widest text-zinc-400 opacity-60">
                              <div>............................................................................</div>
                              <div>............................................................................</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 p-3.5 text-zinc-100">
      {/* Page Header Bar with Synced Toggle + Zoom */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-xs font-semibold text-zinc-200">
            Strona {pageNumber} / {totalPages}
          </span>
          {deduplicatedAnnotations.length > 0 && (
            <span className="text-[11px] text-zinc-400">
              {deduplicatedAnnotations.length}{" "}
              {deduplicatedAnnotations.length === 1 ? "zadanie" : "zadań"}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onToggleSolved && (
            <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => onToggleSolved(false)}
                className={`rounded-md px-2 py-1 font-medium transition-colors ${
                  !solvedMode
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Pusty
              </button>
              <button
                type="button"
                onClick={() => onToggleSolved(true)}
                className={`inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium transition-colors ${
                  solvedMode
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <PenLine className="size-3 text-zinc-300" aria-hidden="true" />
                Rozwiązany
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-300 hover:border-zinc-700 hover:text-zinc-100 focus-ring"
          >
            <Maximize2 className="size-3" aria-hidden="true" />
            Powiększ 1:1
          </button>
        </div>
      </div>

      {/* Main Layout: Full-Width Authentic Paper + Collapsible Key Drawer Below */}
      <div className="w-full">{renderPaperCanvas(false)}</div>

      {solvedMode && deduplicatedAnnotations.length > 0 && (
        <details className="group mt-3 rounded-lg border border-zinc-800/90 bg-zinc-900/50">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-zinc-200">
            <span className="inline-flex items-center gap-1.5">
              <PenLine className="size-3.5 text-zinc-400" aria-hidden="true" />
              Uzasadnienie i Klucz CKE ({deduplicatedAnnotations.length})
            </span>
            <ChevronDown
              className="size-3.5 text-zinc-500 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="space-y-2.5 border-t border-zinc-800/80 p-3">
            {deduplicatedAnnotations.map((ann) => (
              <div
                key={`margin-${ann.id}`}
                className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-3 text-xs"
              >
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-1.5">
                  <span className="font-bold text-zinc-100">
                    Zadanie {ann.subTaskNumber ?? ann.taskNumber}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {ann.operationalVerb && (
                      <span className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-zinc-300">
                        {ann.operationalVerb}
                      </span>
                    )}
                    {ann.pointsLabel && (
                      <span className="font-mono text-[10px] text-zinc-400">
                        {ann.pointsLabel}
                      </span>
                    )}
                  </div>
                </div>
                <p className="whitespace-pre-line font-medium leading-relaxed text-zinc-100">
                  {ann.combinedAnswers.join(" • ")}
                </p>
                {ann.marginNote && (
                  <p className="mt-1.5 border-t border-zinc-800/80 pt-1.5 text-[11px] leading-relaxed text-zinc-400">
                    {ann.marginNote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </details>
      )}

      {/* Fullscreen Zoom Modal Preserving Handwritten Ink Coordinates & Native Pinch-Zoom */}
      <dialog
        ref={dialogRef}
        aria-label={`Podgląd 1:1 — Strona ${pageNumber}`}
        onClose={() => setZoomOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setZoomOpen(false);
        }}
        className="m-auto max-h-[94dvh] w-[min(98vw,1120px)] overflow-auto rounded-2xl border border-zinc-700 bg-zinc-950 p-3 text-zinc-100 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm sm:p-4"
      >
        {zoomOpen && (
          <div className="space-y-3">
            <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-950/95 px-3 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md">
              <span className="text-xs font-semibold text-zinc-200">
                Strona {pageNumber} / {totalPages}
              </span>
              {onToggleSolved && (
                <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => onToggleSolved(false)}
                    className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
                      !solvedMode
                        ? "bg-zinc-800 text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    Pusty arkusz
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleSolved(true)}
                    className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-colors ${
                      solvedMode
                        ? "bg-zinc-800 text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <PenLine className="size-3.5 text-zinc-200" aria-hidden="true" />
                    Arkusz rozwiązany
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={() => setZoomOpen(false)}
                className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 focus-ring"
              >
                <X className="size-3.5" aria-hidden="true" />
                Zamknij (Esc)
              </button>
            </div>
            <div className="touch-pan-x touch-pan-y touch-pinch-zoom overscroll-contain overflow-auto">
              {renderPaperCanvas(true)}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

/**
 * Displays the full sequence of CKE PDF pages for a selected sheet with
 * the global toggle:
 * `[ Pusty arkusz | Arkusz rozwiązany ]`
 */
export function CkeSolvedPdfSheetViewer({
  sheet,
  initialSolved = true,
  filterTasks,
}: {
  sheet: CkeExamSheet;
  initialSolved?: boolean;
  filterTasks?: CkeExamTask[];
}) {
  const [solvedMode, setSolvedMode] = useState<boolean>(initialSolved);
  const [showAllPages, setShowAllPages] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);

  const pageUrls = sheet.pageImageUrls ?? [];
  const activeTaskList = filterTasks ?? sheet.tasks;

  const taskPages = useMemo(() => {
    if (pageUrls.length > 0) {
      return pageUrls.map((_, i) => i + 1);
    }
    const maxTaskPage = Math.max(
      1,
      ...sheet.tasks.map((t) => t.pdfPageNumber ?? 1),
    );
    return Array.from({ length: maxTaskPage }, (_, i) => i + 1);
  }, [pageUrls, sheet.tasks]);

  // Default to the first page that actually contains exam tasks (skip cover page when starting single-page mode)
  useEffect(() => {
    const firstContentPage =
      activeTaskList.find((t) => typeof t.pdfPageNumber === "number")?.pdfPageNumber ??
      (taskPages.length >= 2 ? 2 : 1);
    setActivePage(Math.min(Math.max(1, firstContentPage), taskPages.length));
  }, [sheet.id, taskPages.length, activeTaskList]);

  const totalPages = taskPages.length;
  const clampedPage = Math.min(Math.max(1, activePage), totalPages);
  const visiblePageNumbers = showAllPages ? taskPages : [clampedPage];

  return (
    <div className="space-y-4">
      {/* Primary Sheet Header + Blank/Solved Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/95 p-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-semibold text-zinc-100">
              {sheet.symbol ?? sheet.id}
            </span>
            <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-medium text-zinc-300">
              Formuła {sheet.formula === "2023" ? "2023+ (2015+)" : "2015"}
            </span>
            <span className="font-mono text-zinc-400">
              {sheet.totalTasks} zadań • {sheet.totalPoints} pkt • {totalPages} str.
            </span>
          </div>
          <h3 className="text-sm font-bold text-zinc-100">{sheet.title}</h3>
        </div>

        <div
          role="group"
          aria-label="Tryb prezentacji arkusza CKE"
          className="inline-flex flex-wrap rounded-lg border border-zinc-800 bg-zinc-900 p-1 text-xs"
        >
          <button
            type="button"
            onClick={() => setSolvedMode(false)}
            aria-pressed={!solvedMode}
            className={`rounded-md border px-3 py-1.5 font-semibold transition-colors ${
              !solvedMode
                ? "border-zinc-600 bg-zinc-800 text-zinc-100 shadow-sm"
                : "border-transparent text-zinc-400 hover:text-zinc-100"
            }`}
          >
            Pusty arkusz (Do rozwiązania)
          </button>
          <button
            type="button"
            onClick={() => setSolvedMode(true)}
            aria-pressed={solvedMode}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-semibold transition-colors ${
              solvedMode
                ? "border-zinc-600 bg-zinc-800 text-zinc-100 shadow-sm"
                : "border-transparent text-zinc-400 hover:text-zinc-100"
            }`}
          >
            <PenLine className="size-3.5 text-zinc-200" aria-hidden="true" />
            Arkusz rozwiązany (Długopisem CKE)
          </button>
        </div>
      </div>

      {/* Sticky Page Navigation Bar Respecting Mobile Safe-Area Notch */}
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-950/95 px-3 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-1.5">
          {!showAllPages && (
            <>
              <button
                type="button"
                onClick={() => setActivePage((p) => Math.max(1, p - 1))}
                disabled={clampedPage <= 1}
                className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40"
              >
                <ChevronLeft className="size-3.5" aria-hidden="true" />
                Poprzednia
              </button>
              <select
                value={clampedPage}
                onChange={(e) => setActivePage(Number(e.target.value))}
                aria-label="Wybierz stronę arkusza CKE"
                className="rounded-md border border-zinc-700 bg-zinc-950 px-2.5 py-1 font-mono text-xs text-zinc-100"
              >
                {taskPages.map((pNo) => (
                  <option key={pNo} value={pNo}>
                    Strona {pNo} / {totalPages}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
                disabled={clampedPage >= totalPages}
                className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 disabled:opacity-40"
              >
                Następna
                <ChevronRight className="size-3.5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setShowAllPages((prev) => !prev)}
          className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
        >
          {showAllPages
            ? "Widok pojedynczej strony"
            : `Rozwiń wszystkie strony (${totalPages})`}
        </button>
      </div>

      {/* Rendered Sequence of Original Exam Pages */}
      <div className="space-y-6">
        {visiblePageNumbers.map((pageNo) => {
          const pageImg = pageUrls[pageNo - 1];
          const annotations = getPdfOverlaysForPage(sheet.id, pageNo, activeTaskList);
          const tasksOnPage = activeTaskList.filter(
            (t) => (t.pdfPageNumber ?? 1) === pageNo,
          );
          return (
            <CkeSolvedPdfPageOverlay
              key={`${sheet.id}-p${pageNo}`}
              sheetId={sheet.id}
              pageNumber={pageNo}
              totalPages={totalPages}
              pageImageUrl={pageImg}
              annotations={annotations}
              pageTasks={tasksOnPage}
              solvedMode={solvedMode}
              onToggleSolved={setSolvedMode}
            />
          );
        })}
      </div>
    </div>
  );
}

/**
 * Divided Matura section repository rendered below theory chapters and in Matura views:
 * - Selector between Formula 2023+ (2015+) and Formula 2015
 * - Grouped into:
 *   1) Arkusze CKE z poprzednich lat (2015–2024)
 *   2) Arkusze Próbne (CKE / Diagnostyczne)
 * - Displays authentic 1:1 CKE PDF pages with blank vs solved overlay toggle.
 */
export function CkeExamSheetsRepositoryView({
  subject,
  onExitExamMode,
}: {
  subject?: string;
  onExitExamMode?: () => void;
}) {
  const sheets = useMemo(() => getCkeExamSheets(subject), [subject]);

  const [formula, setFormula] = useState<"2023" | "2015">("2023");
  const [selectedSheetId, setSelectedSheetId] = useState<string>("");

  useEffect(() => {
    const paramFormula = new URLSearchParams(window.location.search).get("formula");
    if (paramFormula === "2015" || paramFormula === "2023") {
      setFormula(paramFormula);
    }
  }, []);

  const formulaSheets = useMemo(
    () => sheets.filter((s) => s.formula === formula),
    [sheets, formula],
  );

  const officialSheets = useMemo(
    () => formulaSheets.filter((s) => (s.sheetCategory ?? "official") === "official"),
    [formulaSheets],
  );

  const trialSheets = useMemo(
    () => formulaSheets.filter((s) => s.sheetCategory === "trial"),
    [formulaSheets],
  );

  const activeSheet: CkeExamSheet | undefined = useMemo(
    () =>
      formulaSheets.find((s) => s.id === selectedSheetId) ??
      officialSheets[0] ??
      trialSheets[0] ??
      sheets[0],
    [formulaSheets, selectedSheetId, officialSheets, trialSheets, sheets],
  );

  return (
    <section
      aria-label="Repozytorium Arkuszy Maturalnych CKE"
      className="my-4 space-y-6 rounded-xl border border-zinc-800 bg-zinc-950/95 p-5 text-zinc-100"
    >
      {/* Top Header & Formula 2023+ (2015+) / Formula 2015 Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
        <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-1 text-xs">
          <button
            type="button"
            onClick={() => setFormula("2023")}
            aria-pressed={formula === "2023"}
            className={`rounded-md border px-3 py-1.5 font-semibold transition-colors ${
              formula === "2023"
                ? "border-zinc-600 bg-zinc-800 text-zinc-100 shadow-sm"
                : "border-transparent text-zinc-400 hover:text-zinc-100"
            }`}
          >
            Formuła 2023+ (2015+)
          </button>
          <button
            type="button"
            onClick={() => setFormula("2015")}
            aria-pressed={formula === "2015"}
            className={`rounded-md border px-3 py-1.5 font-semibold transition-colors ${
              formula === "2015"
                ? "border-zinc-600 bg-zinc-800 text-zinc-100 shadow-sm"
                : "border-transparent text-zinc-400 hover:text-zinc-100"
            }`}
          >
            Formuła 2015
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

      {/* Group 1: Official Past CKE Exams (2015–2024) */}
      {officialSheets.length > 0 && (
        <div className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Arkusze CKE z poprzednich lat (2015–2024)
          </h3>
          <div className="flex flex-wrap gap-2">
            {officialSheets.map((sheet) => {
              const active = activeSheet?.id === sheet.id;
              return (
                <button
                  key={sheet.id}
                  type="button"
                  onClick={() => setSelectedSheetId(sheet.id)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                    active
                      ? "border-zinc-500 bg-zinc-800 font-semibold text-zinc-100"
                      : "border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="size-3.5 text-zinc-400" aria-hidden="true" />
                    <span>{sheet.title}</span>
                  </div>
                  <span className="mt-1 block font-mono text-[10px] text-zinc-400">
                    {sheet.totalTasks} zadań • {sheet.totalPoints} pkt
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Group 2: Trial / Diagnostic CKE Sheets */}
      {trialSheets.length > 0 && (
        <div className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Arkusze Próbne (CKE / Diagnostyczne)
          </h3>
          <div className="flex flex-wrap gap-2">
            {trialSheets.map((sheet) => {
              const active = activeSheet?.id === sheet.id;
              return (
                <button
                  key={sheet.id}
                  type="button"
                  onClick={() => setSelectedSheetId(sheet.id)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                    active
                      ? "border-zinc-500 bg-zinc-800 font-semibold text-zinc-100"
                      : "border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="size-3.5 text-zinc-400" aria-hidden="true" />
                    <span>{sheet.title}</span>
                  </div>
                  <span className="mt-1 block font-mono text-[10px] text-zinc-400">
                    {sheet.totalTasks} zadań • {sheet.totalPoints} pkt
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Sheet Solved PDF Page Viewer */}
      {activeSheet ? (
        <CkeSolvedPdfSheetViewer sheet={activeSheet} />
      ) : (
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center text-xs text-zinc-400">
          Brak arkuszy maturalnych dla wybranego filtra.
        </div>
      )}
    </section>
  );
}
