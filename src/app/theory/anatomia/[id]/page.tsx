import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { TextbookContent } from "@/components/TextbookContent";
import { getAnatomyDomains, getAnatomySectionWithDomain } from "@/server";

interface Props {
  params: Promise<{ id: string }>;
}

// Every anatomy section is prerendered at build time. The textbook corpus is
// static, so there is no reason to pay per-request rendering — and these are
// the most-linked pages on the site (sidebar, welcome grid, search, OG).
export function generateStaticParams() {
  return getAnatomyDomains().flatMap((domain) =>
    domain.sections.map((section) => ({ id: section.id })),
  );
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const found = getAnatomySectionWithDomain(id);

  if (!found) {
    return {
      title: "Rozdział nie znaleziony - Interaktywny Podręcznik Medyczny",
    };
  }

  const { section, domain } = found;
  const title = `${section.title} - Interaktywny Podręcznik Medyczny`;
  const description = `Opanuj temat ${section.title} dzięki aktywnym fiszkom Active Recall i pełnym opisom akademickim Bochenka.`;

  // Encode parameters for dynamic OG image
  const ogTitle = encodeURIComponent(section.title);
  const ogDomain = encodeURIComponent(domain.title);
  const ogImage = `/api/og?title=${ogTitle}&domain=${ogDomain}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: section.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function TextbookSectionPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const found = getAnatomySectionWithDomain(id);

  if (!found) {
    notFound();
  }

  return <TextbookContent section={found.section} />;
}
