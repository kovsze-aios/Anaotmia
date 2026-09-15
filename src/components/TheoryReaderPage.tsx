import Link from "next/link";
import { notFound } from "next/navigation";

import { TextbookContent } from "@/components/TextbookContent";
import { ReaderToc } from "@/components/reader/ReaderToc";
import { ReaderPagination } from "@/components/reader/ReaderPagination";
import { TextToSpeechPlayer } from "@/components/reader/TextToSpeechPlayer";
import {
  getReaderPosition,
  getReaderSpine,
  getTheoryDomains,
  getTheorySectionWithDomain,
  type TheorySubject,
} from "@/server";
import { absoluteUrl, chapterDescription } from "@/lib/seo";

/**
 * The reading view, for every subject.
 *
 * There used to be two of these. Anatomy had the paginated microlearning view,
 * the right-hand table-of-contents drawer, sequential pagination and the
 * read-aloud player; physiology, biology and chemistry had a plainer page with
 * prev/next links and nothing else, and their landing pages loaded chapters
 * client-side into a third layout again. Three ways to read the same shape of
 * content, and only one of them good.
 *
 * This is that one, parameterised by subject. Everything that differed between
 * them was a hardcoded `/theory/anatomia` path, so the reader components now
 * take a `basePath` and the spine is built per subject rather than once for
 * anatomy.
 */

export interface TheoryReaderPageProps {
  subject: TheorySubject;
  /** Display name of the subject, for the breadcrumb. */
  subjectLabel: string;
  id: string;
}

/** The 3D atlas models human anatomy; its terms are noise in inorganic chemistry. */
const LINKS_ANATOMY: Record<TheorySubject, boolean> = {
  anatomia: true,
  fizjologia: true,
  biologia: true,
  chemia: false,
};

export function TheoryReaderPage({ subject, subjectLabel, id }: TheoryReaderPageProps) {
  const found = getTheorySectionWithDomain(subject, id);
  if (!found) notFound();

  const { section, domain } = found;
  const basePath = `/theory/${subject}`;

  // Resolved server-side; only the light projections cross to the client,
  // never the chapter corpus.
  const spine = getReaderSpine(subject);
  const position = getReaderPosition(subject, section.id);

  const sectionUrl = absoluteUrl(`${basePath}/${section.id}`);
  const domainUrl = absoluteUrl(`${basePath}/${domain.sections[0]?.id ?? ""}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: section.title,
    description: chapterDescription(section),
    articleSection: domain.title,
    inLanguage: "pl",
    author: { "@type": "Organization", name: "Medycyna" },
    publisher: { "@type": "Organization", name: "Medycyna" },
    mainEntityOfPage: sectionUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Podręcznik", item: absoluteUrl("/theory") },
      { "@type": "ListItem", position: 3, name: subjectLabel, item: absoluteUrl(basePath) },
      { "@type": "ListItem", position: 4, name: domain.title, item: domainUrl },
      { "@type": "ListItem", position: 5, name: section.title, item: sectionUrl },
    ],
  };

  return (
    // The reading view does not sit inside the dashboard's sidebar layout, so
    // it supplies its own shell: full-height ground and the vertical rhythm the
    // old `.textbook-content` wrapper used to provide.
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
            <Link href={basePath} className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100">
              {subjectLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="truncate">
            <Link
              href={`${basePath}/${domain.sections[0]?.id ?? ""}`}
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

      {/* Centred reading column — comfortable measure for long-form prose. */}
      <div className="mx-auto w-full max-w-3xl px-4">
        <TextbookContent section={section} linkAnatomy={LINKS_ANATOMY[subject]} />
      </div>

      {position && <ReaderPagination position={position} basePath={basePath} />}
      {position && <ReaderToc spine={spine} position={position} basePath={basePath} />}

      {/* Reads the chapter aloud and turns the page when it ends. Only the
          page bodies are handed over: `summary` is an excerpt of the first
          one, so including it would have the chapter open by repeating
          itself, and the recall questions are meant to be answered, not
          listened to. */}
      <TextToSpeechPlayer
        chapterId={section.id}
        title={section.title}
        html={(section.pages ?? []).map((page) => page.htmlContent).join("\n")}
        nextChapterId={position?.next?.id}
        basePath={basePath}
      />

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
