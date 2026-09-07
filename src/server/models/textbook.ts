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

export interface StructuredChapter {
  chapterTitle: string;
  toc: TableOfContentsItem[];
  pages: TextbookPage[];
  chapterQuiz: ChapterQuizItem[];
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
}

export interface TextbookDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon?: string;
  sections: TextbookSection[];
}

