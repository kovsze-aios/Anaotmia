import Link from "next/link";
import { notFound } from "next/navigation";

import { TextbookContent } from "@/components/TextbookContent";
import {
  getTheoryDomains,
  getTheorySectionWithDomain,
  type TheorySubject,
} from "@/server";
import { absoluteUrl, chapterDescription } from "@/lib/seo";

export interface TheoryChapterPageProps {
  subject: TheorySubject;
  /** Display name of the subject, for the breadcrumb. */
  subjectLabel: string;
  id: string;
}

/**
 * One indexable chapter, for the subjects that are not anatomy.
 *
 * Physiology, biology and chemistry were served entirely from a single static
 * page each, with `?domain=` selecting a chapter on the client — and
 * `TheorySubjectView` strips that parameter as soon as it has read it. Three
 * consequences, all bad for indexing: every `?domain=` value returned
 * byte-identical HTML, the parameter addressed a *domain* rather than a
 * chapter, and 1,043 chapters had no URL of their own at any point. Listing
 * those query strings in a sitemap would have submitted a thousand duplicates
 * of three pages.
 *
 * This gives each chapter a real route, prerendered at build time, so there is
 * something for `generateMetadata`, Open Graph and the sitemap to point at.
 * Anatomy keeps its own richer reader route; this is the same idea without the
 * table-of-contents drawer.
 */
export function TheoryChapterPage({ subject, subjectLabel, id }: TheoryChapterPageProps) {
  const found = getTheorySectionWithDomain(subject, id);
  if (!found) notFound();

  const { section, domain } = found;
  const basePath = `/theory/${subject}`;

  // Siblings give crawlers a path between chapters. A sitemap alone leaves
  // 1,043 pages with no inbound link, which reads as an orphaned tier.
  const siblings = domain.sections;
  const index = siblings.findIndex((s) => s.id === section.id);
  const previous = index > 0 ? siblings[index - 1] : undefined;
  const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: section.title,
    description: chapterDescription(section),
    articleSection: domain.title,
    inLanguage: "pl",
    author: { "@type": "Organization", name: "Medycyna" },
    publisher: { "@type": "Organization", name: "Medycyna" },
    mainEntityOfPage: absoluteUrl(`${basePath}/${section.id}`),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Podręcznik", item: absoluteUrl("/theory") },
      { "@type": "ListItem", position: 3, name: subjectLabel, item: absoluteUrl(basePath) },
      {
        "@type": "ListItem",
        position: 4,
        name: section.title,
        item: absoluteUrl(`${basePath}/${section.id}`),
      },
    ],
  };

  return (
    <div className="min-h-screen pb-8 pt-4">
      <nav aria-label="Okruszki" className="mx-auto w-full max-w-3xl px-4 pb-2 text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
          <li>
            <Link href="/" className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100">
              Strona główna
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/theory" className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100">
              Podręcznik
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={basePath} className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100">
              {subjectLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="truncate text-zinc-900 dark:text-zinc-100">
            {section.title}
          </li>
        </ol>
      </nav>

      <div className="mx-auto w-full max-w-3xl px-4">
        <p className="mb-4 text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
          {domain.icon} {domain.title}
        </p>
        {/* The atlas models human anatomy, so its terms mean something in
            physiology and biology and would be noise in inorganic chemistry. */}
        <TextbookContent section={section} linkAnatomy={subject !== "chemia"} />
      </div>

      <nav
        aria-label="Nawigacja po rozdziałach"
        className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-3 px-4 sm:flex-row"
      >
        {previous && (
          <Link
            href={`${basePath}/${previous.id}`}
            rel="prev"
            className="flex min-h-11 flex-1 items-center rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors hover:bg-zinc-50 focus-ring dark:border-zinc-800 dark:hover:bg-zinc-900/60"
          >
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                Poprzedni rozdział
              </span>
              <span className="block truncate text-zinc-800 dark:text-zinc-200">
                {previous.title}
              </span>
            </span>
          </Link>
        )}
        {next && (
          <Link
            href={`${basePath}/${next.id}`}
            rel="next"
            className="flex min-h-11 flex-1 items-center justify-end rounded-xl border border-zinc-200 px-4 py-3 text-right text-sm transition-colors hover:bg-zinc-50 focus-ring dark:border-zinc-800 dark:hover:bg-zinc-900/60"
          >
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                Następny rozdział
              </span>
              <span className="block truncate text-zinc-800 dark:text-zinc-200">{next.title}</span>
            </span>
          </Link>
        )}
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}

/** Every chapter id of a subject, for `generateStaticParams`. */
export function theoryChapterParams(subject: TheorySubject): { id: string }[] {
  return getTheoryDomains(subject).flatMap((domain) =>
    domain.sections.map((section) => ({ id: section.id })),
  );
}
