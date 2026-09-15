import Link from "next/link";

import type { NavDomain } from "@/server/models";

/**
 * A subject's entry page: pick a part, start reading.
 *
 * This replaced `TheorySubjectView`, which fetched a chapter over
 * `/api/section` and rendered it inline. That made a third reading layout —
 * after anatomy's reader and the static chapter routes — and it was the one
 * without the paginated view, the table-of-contents drawer, the read-aloud
 * player or the 3D term links, because those all live on the chapter route it
 * never navigated to.
 *
 * Linking to the chapter instead means there is one reader, and it is the good
 * one. It also costs nothing at runtime: this is a server component rendering
 * links, so the corpus never reaches the browser and there is no loading state
 * to sit through.
 *
 * Deliberately the same markup as the anatomy dashboard, down to the class
 * names, so the four subjects present identically.
 */

export interface TheorySubjectLandingProps {
  /** Route the chapters live under, e.g. `/theory/biologia`. */
  basePath: string;
  heading: string;
  intro: React.ReactNode;
  /** Sentence introducing the grid. */
  domainsLabel: string;
  /** Heading over the grid. Anatomy names its exam scope specifically. */
  scopeHeading?: string;
  /** Nav projection only — chapter content never travels with it. */
  domains: NavDomain[];
}

export function TheorySubjectLanding({
  basePath,
  heading,
  intro,
  domainsLabel,
  scopeHeading = "Zakres Materiału",
  domains,
}: TheorySubjectLandingProps) {
  return (
    <div className="textbook-welcome">
      <h1>{heading}</h1>
      <p>{intro}</p>

      <div className="textbook-welcome__exam">
        {/* Neutral chip: a blue badge was the loudest non-NOIR element on the
            textbook landing view. Border carries the emphasis instead of hue. */}
        <h2 className="w-fit rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
          {scopeHeading}
        </h2>
        <p>{domainsLabel}</p>
        <div className="textbook-welcome__domain-grid">
          {domains
            // A domain with no chapters has nothing to open, and a dead card is
            // worse than an absent one.
            .filter((domain) => domain.sections.length > 0)
            .map((domain) => (
              <Link
                key={domain.id}
                href={`${basePath}/${domain.sections[0].id}`}
                className="textbook-welcome__domain-btn focus-ring"
              >
                {domain.icon} {domain.title}
              </Link>
            ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        System oparty na metodzie aktywnego przypominania (<em>Active Recall</em>) — kliknij na
        pytanie w tekście, aby odsłonić oficjalny klucz odpowiedzi.
      </p>
    </div>
  );
}
