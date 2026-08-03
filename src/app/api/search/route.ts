import { NextResponse, type NextRequest } from "next/server";
import { SEARCH_RESULT_LIMIT, searchTerms } from "@/server";

/**
 * GET /api/search?q=<query>&limit=<n>
 *
 * Runs the fuzzy index server-side. Keeping it here — rather than importing the
 * index into the search component — is what keeps the textbook corpus out of
 * the client bundle; only the matched titles and URLs travel over the wire.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const limitParam = Number(searchParams.get("limit"));
  const limit =
    Number.isFinite(limitParam) && limitParam > 0
      ? Math.min(Math.floor(limitParam), SEARCH_RESULT_LIMIT)
      : SEARCH_RESULT_LIMIT;

  return NextResponse.json({ results: searchTerms(query, limit) });
}
