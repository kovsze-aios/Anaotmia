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
  CkeMetadata,
  CkeFormula,
  CkeTopicStatus,
  CurriculumTier,
  CurriculumViewMode,
  CkeRequirementMapping,
  CkeExamTask,
  CkeTaskMedia,
  CkeAnimatedStep,
  CkeSubTask,
  CkeTaskType,
  CkeExamSheet,
} from "@/server/models/textbook";

export type {
  CkeMetadata,
  CkeFormula,
  CkeTopicStatus,
  CurriculumTier,
  CurriculumViewMode,
  CkeRequirementMapping,
  CkeExamTask,
  CkeTaskMedia,
  CkeAnimatedStep,
  CkeSubTask,
  CkeTaskType,
  CkeExamSheet,
};

export interface StructuredChapter {
  chapterTitle: string;
  toc: TableOfContentsItem[];
  pages: TextbookPage[];
  chapterQuiz: ChapterQuizItem[];
  ckeMetadata?: CkeMetadata;
  licenseAttribution?: string;
  processingMode?: "DIRECT_ADAPTATION" | "CONCEPT_SYNTHESIS";
}

export type {
  TextbookSection,
  TextbookDomain,
  RecallQuestion,
  ContentBlock,
  AcademicSource,
} from "@/server/models";


