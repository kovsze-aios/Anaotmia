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
  "biologia-matura-2015": true,
  "biologia-matura-2023": true,
  "chemia-matura-2015": false,
  "chemia-matura-2023": false,
  fizyka: false,
  matematyka: false,
  biochemia: true,
  neurobiologia: true,
  farmakologia: true,
  informatyka: false,
};

const MATURA_PAIR: Partial<
  Record<
    TheorySubject,
    {
      formula2023Path: string;
      formula2015Path: string;
      activeFormula: "2023" | "2015";
      companionChapterId: (id: string) => string;
    }
  >
> = {
  "biologia-matura-2023": {
    formula2023Path: "/theory/biologia-matura-2023",
    formula2015Path: "/theory/biologia-matura-2015",
    activeFormula: "2023",
    companionChapterId: (id) => id.replace(/^bm23-/, "bm15-"),
  },
  "biologia-matura-2015": {
    formula2023Path: "/theory/biologia-matura-2023",
    formula2015Path: "/theory/biologia-matura-2015",
    activeFormula: "2015",
    companionChapterId: (id) => id.replace(/^bm15-/, "bm23-"),
  },
  "chemia-matura-2023": {
    formula2023Path: "/theory/chemia-matura-2023",
    formula2015Path: "/theory/chemia-matura-2015",
    activeFormula: "2023",
    companionChapterId: (id) => id.replace(/^cm23-/, "cm15-"),
  },
  "chemia-matura-2015": {
    formula2023Path: "/theory/chemia-matura-2023",
    formula2015Path: "/theory/chemia-matura-2015",
    activeFormula: "2015",
    companionChapterId: (id) => id.replace(/^cm15-/, "cm23-"),
  },
};

export function TheoryReaderPage({ subject, subjectLabel, id }: TheoryReaderPageProps) {
  const found = getTheorySectionWithDomain(subject, id);
  if (!found) notFound();

  const { section, domain } = found;
  const basePath = `/theory/${subject}`;
  const maturaPair = MATURA_PAIR[subject];

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
    author: { "@type": "Organization", name: "SportNotes" },
    publisher: { "@type": "Organization", name: "SportNotes" },
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

      {maturaPair && (
        <div className="mx-auto mb-4 w-full max-w-3xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-950/90 px-3 py-2 text-xs">
            <span className="font-semibold tracking-wider uppercase text-zinc-400">
              🎓 Tryb podstawy CKE:
            </span>
            <div className="inline-flex items-center gap-1.5">
              <Link
                href={
                  maturaPair.activeFormula === "2023"
                    ? `${maturaPair.formula2023Path}/${section.id}`
                    : `${maturaPair.formula2023Path}/${maturaPair.companionChapterId(section.id)}`
                }
                className={
                  maturaPair.activeFormula === "2023"
                    ? "rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 font-semibold text-zinc-100"
                    : "rounded-md px-2.5 py-1 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }
              >
                Formuła 2023+ (Nowa)
              </Link>
              <Link
                href={
                  maturaPair.activeFormula === "2015"
                    ? `${maturaPair.formula2015Path}/${section.id}`
                    : `${maturaPair.formula2015Path}/${maturaPair.companionChapterId(section.id)}`
                }
                className={
                  maturaPair.activeFormula === "2015"
                    ? "rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1 font-semibold text-zinc-100"
                    : "rounded-md px-2.5 py-1 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }
              >
                Formuła 2015
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Centred reading column — comfortable measure for long-form prose. */}
      <div className="mx-auto w-full max-w-3xl px-4">
        <TextbookContent
          section={section}
          subject={subject}
          linkAnatomy={LINKS_ANATOMY[subject]}
        />
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
