/**
 * Data schemas for the whole application.
 *
 * Anything that describes the *shape* of domain data lives here. UI code may
 * import these with `import type` (types are erased at compile time, so no data
 * crosses the bundle boundary); it must never import from `../repositories`.
 */

export type {
  RecallQuestion,
  ContentBlock,
  ContentBlockParagraph,
  ContentBlockImage,
  ContentBlockHeading,
  ContentBlockList,
  ContentBlockTable,
  AcademicSource,
  TextbookSection,
  TextbookDomain,
} from "./textbook";

export type {
  MaturaQuestion,
  MaturaYearRecord,
  MaturaSubject,
} from "./matura";

export type {
  NavSection,
  NavDomain,
  NavLink,
  SidebarNavigation,
} from "./navigation";

export type { Subject, SearchResult } from "./search";
