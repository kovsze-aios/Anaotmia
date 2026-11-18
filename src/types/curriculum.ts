export type CurriculumTier =
  | "cke-core"
  | "cke-2023-only"
  | "cke-2015-only"
  | "academic-extra";

export type CurriculumViewMode =
  | "full"
  | "matura-2023"
  | "matura-2015"
  | "cke-exams";

export const CURRICULUM_VIEW_MODE_STORAGE_KEY = "curriculum_view_mode";

export interface CkeRequirementMapping {
  tier: CurriculumTier;
  formulas: ("2015" | "2023" | "academic")[];
  ckeSectionCode?: string; // e.g., "Dział III: Energia i metabolizm"
  ckeRequirementIds?: string[]; // Official CKE point codes, e.g., ["III.2.a", "III.4"]
  diffs2015vs2023?: string; // Explicit note on what changed between F2015 and F2023+
  examTraps?: string[]; // Common CKE mistakes & operational verb rules
}

export type CkeTaskType =
  | "open-text"
  | "true-false-table"
  | "multiple-choice"
  | "matching"
  | "calculation-grid";

export interface CkeTaskMedia {
  id: string;
  type: "diagram" | "chart" | "micrograph" | "chemical-scheme" | "table" | "page-crop";
  imageUrl: string;
  caption?: string;
  boundingBox?: [number, number, number, number];
  pdfPageNumber?: number;
}

export interface CkeAnimatedStep {
  stepNumber: number;
  phase: "analiza-ryciny" | "czasownik-operacyjny" | "mechanizm" | "klucz-cke";
  title: string;
  explanationHtml: string;
  highlightQuote?: string;
  calloutBoxCoords?: [number, number, number, number];
}

export interface CkeSubTask {
  subTaskNumber: string;
  points: number;
  taskType: CkeTaskType;
  promptHtml: string;
  operationalVerb: string;
  interactiveTableData?: {
    headers: string[];
    rows: { statement: string; correctAnswer: string }[];
  };
  officialAnswerKey: string;
  officialKeyCropUrl?: string;
  animatedSteps: CkeAnimatedStep[];
}

export interface CkeExamTask {
  id: string; // e.g., "CKE-BIO-2023-MAJ-ZAD12"
  year: number;
  month: "maj" | "czerwiec" | "sierpien" | "pokazowy" | "probny";
  formula: "2015" | "2023";
  subject: "biologia" | "chemia" | "fizyka" | "matematyka";
  taskNumber: string;
  points: number;
  relatedTopicIds: string[]; // Links the task directly to textbook chapters
  promptHtml: string; // Full task stem, chemical equations, or experimental setup
  operationalVerb: string; // e.g., "Wykaż", "Wyjaśnij", "Uzasadnij", "Oblicz"
  officialAnswerKey: string; // Exact CKE scoring criteria (1 pkt za..., 0 pkt gdy...)
  stepByStepJustification: string; // Deep didactic explanation: Przyczyna -> Mechanizm -> Skutek
  sheetId?: string;
  pdfPageNumber?: number;
  pageImageUrl?: string;
  media?: CkeTaskMedia[];
  subTasks?: CkeSubTask[];
  taskType?: CkeTaskType;
  interactiveTableData?: {
    headers: string[];
    rows: { statement: string; correctAnswer: string }[];
  };
  officialKeyCropUrl?: string;
  animatedSteps?: CkeAnimatedStep[];
}

export interface CkePdfOverlayAnnotation {
  id: string;
  taskNumber: string;
  subTaskNumber?: string;
  pageNumber: number;
  boxType: "open-answer" | "true-false" | "multiple-choice" | "calculation-grid" | "table-fill" | "margin-callout";
  xPct: number;
  yPct: number;
  widthPct: number;
  heightPct: number;
  pointsLabel?: string;
  operationalVerb?: string;
  answerText: string;
  marginNote?: string;
  markedOptions?: string[];
  truthChoices?: ("P" | "F")[];
}

export interface CkeExamSheet {
  id: string;
  subject: "biologia" | "chemia" | "fizyka" | "matematyka";
  year: number;
  month: "maj" | "czerwiec" | "sierpien" | "pokazowy" | "probny";
  formula: "2015" | "2023";
  sheetCategory?: "official" | "trial";
  symbol?: string;
  title: string;
  totalPoints: number;
  totalTasks: number;
  pageImageUrls?: string[];
  tasks: CkeExamTask[];
}

/**
 * Normalizes legacy status strings ('core' | '2015-only' | '2023-only')
 * and CurriculumTier values into a canonical CurriculumTier.
 * Any missing value defaults safely to 'cke-core'.
 */
export function normalizeCurriculumTier(tierOrStatus?: string): CurriculumTier {
  switch (tierOrStatus) {
    case "cke-2023-only":
    case "2023-only":
      return "cke-2023-only";
    case "cke-2015-only":
    case "2015-only":
      return "cke-2015-only";
    case "academic-extra":
      return "academic-extra";
    case "cke-core":
    case "core":
    default:
      return "cke-core";
  }
}

/**
 * Determines whether a chapter/topic with the given tier/formulas is active
 * (not dimmed/hidden) under the selected CurriculumViewMode.
 */
export function isTierRequiredInMode(
  mode: CurriculumViewMode,
  tierOrStatus?: string,
  formulas?: readonly string[],
): boolean {
  if (mode === "full" || mode === "cke-exams") return true;

  const tier = normalizeCurriculumTier(tierOrStatus);

  if (mode === "matura-2023") {
    if (tier === "cke-core" || tier === "cke-2023-only") return true;
    if (tier === "academic-extra" || tier === "cke-2015-only") return false;
    return formulas ? formulas.includes("2023") : false;
  }

  if (mode === "matura-2015") {
    if (tier === "cke-core" || tier === "cke-2015-only") return true;
    if (tier === "academic-extra" || tier === "cke-2023-only") return false;
    return formulas ? formulas.includes("2015") : false;
  }

  return true;
}
