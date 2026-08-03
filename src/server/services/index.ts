/**
 * Service layer — the public face of the data tier.
 *
 * Pages, layouts and API routes read data through these functions; they are the
 * only part of `src/server` anything outside it is allowed to import.
 */

export {
  getTheoryDomains,
  getAnatomyDomains,
  getAnatomyDomain,
  getTheorySection,
  getAnatomySectionWithDomain,
  type TheorySubject,
} from "./textbook.service";

export {
  getMaturaSubject,
  getMaturaRecords,
  getMaturaRecord,
  getMaturaTopics,
  filterQuestionsByTopic,
  type MaturaSubjectId,
} from "./matura.service";

export {
  toNavDomain,
  getNavDomains,
  getSidebarNavigation,
} from "./navigation.service";

export {
  searchTerms,
  SEARCH_SUBJECTS,
  SEARCH_RESULT_LIMIT,
  type Subject,
  type SearchResult,
} from "./search.service";
