import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { TextbookContent } from "@/components/TextbookContent";
import { getDomains } from "@/data/textbook";

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Ensure dynamic rendering to read the [id] correctly
export const dynamic = 'force-dynamic';

function getSectionAndDomain(sectionId: string) {
  const domains = getDomains();
  for (const domain of domains) {
    const section = domain.sections.find((s) => s.id === sectionId);
    if (section) {
      return { section, domain };
    }
  }
  return null;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const found = getSectionAndDomain(id);

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

export default function TextbookSectionPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const found = getSectionAndDomain(id);

  if (!found) {
    notFound();
  }

  return <TextbookContent section={found.section} />;
}
