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

import type { CkeMetadata, CkeFormula, CkeTopicStatus } from "@/server/models/textbook";

export type { CkeMetadata, CkeFormula, CkeTopicStatus };

export interface StructuredChapter {
  chapterTitle: string;
  toc: TableOfContentsItem[];
  pages: TextbookPage[];
  chapterQuiz: ChapterQuizItem[];
  ckeMetadata?: CkeMetadata;
}

export type {
  TextbookSection,
  TextbookDomain,
  RecallQuestion,
  ContentBlock,
  AcademicSource,
} from "@/server/models";


