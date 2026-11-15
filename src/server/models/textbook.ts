export interface RecallQuestion {
  id: string;
  question: string;
  answer: string;
  examRef?: string;
}

export interface ContentBlockParagraph {
  type: "paragraph";
  text: string;
}

export interface ContentBlockImage {
  type: "image";
  src: string;
  caption: string;
  source: string;
}

export interface ContentBlockHeading {
  type: "heading";
  level: 2 | 3 | 4;
  text: string;
}

export interface ContentBlockList {
  type: "list";
  items: string[];
}

export interface ContentBlockTable {
  type: "table";
  headers: string[];
  rows: string[][];
}

export type ContentBlock =
  | ContentBlockParagraph
  | ContentBlockImage
  | ContentBlockHeading
  | ContentBlockList
  | ContentBlockTable;

export interface TableOfContentsItem {
  title: string;
  anchorId: string;
}

export interface TextbookPage {
  pageNumber: number;
  htmlContent: string;
}

export interface ChapterQuizItem {
  question: string;
  answer: string;
}

import type {
  CurriculumTier,
  CurriculumViewMode,
  CkeRequirementMapping,
  CkeExamTask,
  CkeTaskMedia,
  CkeAnimatedStep,
  CkeSubTask,
  CkeTaskType,
  CkeExamSheet,
} from "@/types/curriculum";

import type {
  FigureHotspot,
  FigureAnimationStep,
  SvgSchematicTheme,
  TextbookFigure,
} from "@/types/textbook-figures";

export type {
  CurriculumTier,
  CurriculumViewMode,
  CkeRequirementMapping,
  CkeExamTask,
  CkeTaskMedia,
  CkeAnimatedStep,
  CkeSubTask,
  CkeTaskType,
  CkeExamSheet,
  FigureHotspot,
  FigureAnimationStep,
  SvgSchematicTheme,
  TextbookFigure,
};

export type CkeFormula = "2015" | "2023" | "academic";
export type CkeTopicStatus =
  | "core"
  | "2015-only"
  | "2023-only"
  | CurriculumTier;

export interface CkeMetadata {
  tier?: CurriculumTier;
  formulas: CkeFormula[];
  sectionCode: string; // e.g., "Dział III"
  ckeSectionCode?: string; // e.g., "Dział III: Energia i metabolizm"
  requirementCodes: string[]; // e.g., ["III.2.a", "III.2.b"]
  ckeRequirementIds?: string[];
  status: CkeTopicStatus;
  diffs2015vs2023?: string;
  examTraps?: string[];
  examTips?: string[]; // CKE traps & operational verbs tips
  licenseAttribution?: string;
  processingMode?: "DIRECT_ADAPTATION" | "CONCEPT_SYNTHESIS";
}

export interface StructuredChapter {
  chapterTitle: string;
  toc: TableOfContentsItem[];
  pages: TextbookPage[];
  chapterQuiz: ChapterQuizItem[];
  ckeMetadata?: CkeMetadata;
  licenseAttribution?: string;
  processingMode?: "DIRECT_ADAPTATION" | "CONCEPT_SYNTHESIS";
}

export interface AcademicSource {
  title: string;
  content: string;
}

export interface TextbookSection {
  id: string;
  title: string;
  summary?: string;
  academic_detail?: string;
  academic_sources?: AcademicSource[];
  content: ContentBlock[];
  recallQuestions: RecallQuestion[];
  maturaQuestions?: string[];
  pages?: TextbookPage[];
  toc?: TableOfContentsItem[];
  chapterQuiz?: ChapterQuizItem[];
  ckeMetadata?: CkeMetadata;
  licenseAttribution?: string;
  processingMode?: "DIRECT_ADAPTATION" | "CONCEPT_SYNTHESIS";
}

export interface TextbookDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon?: string;
  sections: TextbookSection[];
}


