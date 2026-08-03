import type { SearchResult, Subject } from "@/server/models/search";
import { apiClient } from "./apiClient";

export type { SearchResult, Subject };

interface SearchResponse {
  results: SearchResult[];
}

/**
 * Middle layer between the search UI and `GET /api/search`. The component owns
 * no knowledge of transport or query shape — it just awaits results.
 */
export async function searchSections(
  query: string,
  options: { signal?: AbortSignal } = {},
): Promise<SearchResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const { results } = await apiClient.get<SearchResponse>(
    `/api/search?q=${encodeURIComponent(trimmed)}`,
    { signal: options.signal },
  );

  return results;
}
