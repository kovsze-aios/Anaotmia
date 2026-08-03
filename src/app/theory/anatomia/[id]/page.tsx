import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TextbookContent } from "@/components/TextbookContent";
import { getAnatomyDomains, getAnatomySectionWithDomain } from "@/server";

interface Props {
  params: Promise<{ id: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anatomia2026.pl";

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
      url: `${SITE_URL}/theory/anatomia/${section.id}`,
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

  const { section, domain } = found;
  const sectionUrl = `${SITE_URL}/theory/anatomia/${section.id}`;
  const domainUrl = `${SITE_URL}/theory/anatomia/${domain.sections[0]?.id ?? ""}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: section.title,
    description: `Opanuj temat ${section.title} dzięki aktywnym fiszkom Active Recall i pełnym opisom akademickim Bochenka.`,
    author: { "@type": "Organization", name: "Medycyna" },
    publisher: { "@type": "Organization", name: "Medycyna" },
    mainEntityOfPage: sectionUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Anatomia", item: `${SITE_URL}/theory/anatomia` },
      { "@type": "ListItem", position: 3, name: domain.title, item: domainUrl },
      { "@type": "ListItem", position: 4, name: section.title, item: sectionUrl },
    ],
  };

  return (
    <>
      <nav aria-label="Okruszki" className="px-4 pt-3 text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
          <li>
            <Link href="/" className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100">
              Strona główna
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/theory/anatomia" className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100">
              Anatomia
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={domainUrl}
              className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {domain.title}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="truncate text-zinc-900 dark:text-zinc-100">
            {section.title}
          </li>
        </ol>
      </nav>

      <TextbookContent section={section} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
