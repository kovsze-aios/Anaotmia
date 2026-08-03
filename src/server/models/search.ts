/**
 * Search schemas.
 *
 * These live in `models/` rather than beside the service so the UI can import
 * them with `import type` without touching the module that pulls in the
 * textbook repositories.
 */

export type Subject = "Anatomia" | "Biologia" | "Chemia" | "Fizjologia";

/** What `GET /api/search` returns per hit — deliberately slim. */
export interface SearchResult {
  id: string;
  title: string;
  subject: Subject;
  url: string;
  icon?: string;
}
