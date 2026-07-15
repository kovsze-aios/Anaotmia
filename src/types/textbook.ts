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

export interface TextbookSection {
  id: string;
  title: string;
  summary?: string;
  academic_detail?: string;
  academic_sources?: { author: string; content: ContentBlock[] }[];
  content: ContentBlock[];
  recallQuestions: RecallQuestion[];
}

export interface TextbookDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon?: string;
  sections: TextbookSection[];
}
