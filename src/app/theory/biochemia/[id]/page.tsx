import type { Metadata } from "next";
import { TheoryReaderPage, theoryChapterParams } from "@/components/TheoryReaderPage";
import { getTheorySectionWithDomain } from "@/server";
import { absoluteUrl, chapterDescription } from "@/lib/seo";

const SUBJECT = "biochemia" as const;
const SUBJECT_LABEL = "Biochemia";
const BASE_PATH = "/theory/biochemia";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return theoryChapterParams(SUBJECT);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const found = getTheorySectionWithDomain(SUBJECT, id);
  if (!found) return { title: "Rozdział nie znaleziony" };

  const { section, domain } = found;
  const title = section.title;
  const description = chapterDescription(section);
  const url = absoluteUrl(`${BASE_PATH}/${section.id}`);
  const ogImage = `/api/og?title=${encodeURIComponent(section.title)}&domain=${encodeURIComponent(domain.title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${section.title} | SportNotes`,
      description,
      type: "article",
      url,
      siteName: "SportNotes",
      locale: "pl_PL",
      images: [{ url: ogImage, width: 1200, height: 630, alt: section.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${section.title} | SportNotes`,
      description,
      images: [ogImage],
    },
  };
}

export default async function BiochemiaChapterPage({ params }: Props) {
  const { id } = await params;
  return <TheoryReaderPage subject={SUBJECT} subjectLabel={SUBJECT_LABEL} id={id} />;
}
