import type { TextbookSection } from "@/server/models";
import { apiClient, ApiError } from "./apiClient";

/**
 * UI-facing access to `GET /api/section`. Returns `null` for a missing
 * section, throws for transport/5xx errors.
 */
export async function getSection(
  subject: string,
  id: string,
  options: { signal?: AbortSignal } = {},
): Promise<TextbookSection | null> {
  try {
    const { section } = await apiClient.get<{ section: TextbookSection }>(
      `/api/section?subject=${encodeURIComponent(subject)}&id=${encodeURIComponent(id)}`,
      { signal: options.signal },
    );
    return section;
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null;
    throw error;
  }
}
