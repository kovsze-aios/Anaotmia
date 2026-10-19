import type { Metadata } from "next";

import { TheoryReaderPage, theoryChapterParams } from "@/components/TheoryReaderPage";
import { getTheorySectionWithDomain } from "@/server";
import { absoluteUrl, chapterDescription } from "@/lib/seo";

const SUBJECT = "biologia-matura-2015" as const;
const SUBJECT_LABEL = "Biologia — Formuła 2015";
const BASE_PATH = "/theory/biologia-matura-2015";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return theoryChapterParams(SUBJECT);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const found = getTheorySectionWithDomain(SUBJECT, id);

  if (!found) {
    return { title: "Rozdział nie znaleziony" };
  }

  const { section, domain } = found;
  const title = `${section.title} — Formuła 2015`;
  const description = chapterDescription(section);
  const url = absoluteUrl(`${BASE_PATH}/${section.id}`);
  const ogImage = `/api/og?title=${encodeURIComponent(section.title)}&domain=${encodeURIComponent(domain.title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${section.title} | Matura Biologia 2015 | Medycyna`,
      description,
      type: "article",
      url,
      siteName: "Medycyna",
      locale: "pl_PL",
      images: [{ url: ogImage, width: 1200, height: 630, alt: section.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${section.title} | Matura Biologia 2015 | Medycyna`,
      description,
      images: [ogImage],
    },
  };
}

export default async function BiologiaMatura2015ChapterPage({ params }: Props) {
  const { id } = await params;
  return <TheoryReaderPage subject={SUBJECT} subjectLabel={SUBJECT_LABEL} id={id} />;
}
