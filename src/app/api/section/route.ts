import { NextResponse, type NextRequest } from "next/server";
import { getTheorySection, type TheorySubject } from "@/server";

const SUBJECTS: readonly TheorySubject[] = [
  "anatomia",
  "biologia",
  "chemia",
  "fizjologia",
];

/**
 * GET /api/section?subject=<id>&id=<sectionId>
 *
 * Returns one section's full content. Theory pages render only the nav
 * projection (NavDomain) and fetch the selected section on demand — this is
 * what keeps the multi-megabyte chemia/biologia corpora out of the RSC payload.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject");
  const sectionId = searchParams.get("id")?.trim();

  if (!subject || !sectionId) {
    return NextResponse.json(
      { error: "Missing subject or id parameter" },
      { status: 400 },
    );
  }

  if (!SUBJECTS.includes(subject as TheorySubject)) {
    return NextResponse.json({ error: "Unknown subject" }, { status: 400 });
  }

  const section = getTheorySection(subject as TheorySubject, sectionId);
  if (!section) {
    return NextResponse.json({ error: "Section not found" }, { status: 404 });
  }

  return NextResponse.json({ section });
}
