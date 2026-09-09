import type { Metadata } from "next";

import {
  TheoryChapterPage,
  theoryChapterParams,
} from "@/components/TheoryChapterPage";
import { getTheorySectionWithDomain } from "@/server";
import { absoluteUrl, chapterDescription } from "@/lib/seo";

const SUBJECT = "chemia" as const;
const SUBJECT_LABEL = "Chemia";

interface Props {
  params: Promise<{ id: string }>;
}

// Prerendered at build time. The corpus is static, and these are the pages the
// sitemap points search engines at, so there is no reason to render them per
// request.
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
  // The root layout's template appends "| Medycyna", so the title carries the
  // topic and nothing else.
  const title = section.title;
  const description = chapterDescription(section);
  const url = absoluteUrl(`/theory/chemia/${section.id}`);
  const ogImage = `/api/og?title=${encodeURIComponent(section.title)}&domain=${encodeURIComponent(domain.title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      // Social cards carry no title template, so the brand is spelled out.
      title: `${section.title} | Medycyna`,
      description,
      type: "article",
      url,
      siteName: "Medycyna",
      locale: "pl_PL",
      images: [{ url: ogImage, width: 1200, height: 630, alt: section.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${section.title} | Medycyna`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ChemiaChapterPage({ params }: Props) {
  const { id } = await params;
  return <TheoryChapterPage subject={SUBJECT} subjectLabel={SUBJECT_LABEL} id={id} />;
}
