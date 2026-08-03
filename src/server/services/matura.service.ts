import type { MaturaQuestion, MaturaSubject, MaturaYearRecord } from "../models";
import {
  biologia,
  chemia,
  getBiologiaRecords,
  getBiologiaRecord,
  getChemiaRecords,
  getChemiaRecord,
} from "../repositories";

/** Subjects that have archived CKE exam papers. */
export type MaturaSubjectId = "biologia" | "chemia";

export function getMaturaSubject(subject: MaturaSubjectId): MaturaSubject {
  return subject === "biologia" ? biologia : chemia;
}

export function getMaturaRecords(subject: MaturaSubjectId): MaturaYearRecord[] {
  return subject === "biologia" ? getBiologiaRecords() : getChemiaRecords();
}

export function getMaturaRecord(
  subject: MaturaSubjectId,
  year: number,
  month: string,
): MaturaYearRecord | undefined {
  return subject === "biologia"
    ? getBiologiaRecord(year, month)
    : getChemiaRecord(year, month);
}

/**
 * The distinct topic categories in a set of questions, in first-appearance
 * order, used to build the sidebar filter. Lives here rather than in the page
 * so the derivation is shared and unit-testable.
 */
export function getMaturaTopics(questions: MaturaQuestion[]): string[] {
  return Array.from(new Set(questions.map((q) => q.topicCategory)));
}

/** Filters questions down to a single topic category; `null` means "all". */
export function filterQuestionsByTopic(
  questions: MaturaQuestion[],
  topic: string | null,
): MaturaQuestion[] {
  return topic ? questions.filter((q) => q.topicCategory === topic) : questions;
}
