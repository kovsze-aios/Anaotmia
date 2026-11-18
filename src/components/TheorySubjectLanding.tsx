"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { NavDomain } from "@/server/models";
import { CkeExamSheetsRepositoryView } from "./matura/CkeExamTasksSection";

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

const MATURA_SUBJECTS = new Set(["biologia", "chemia", "fizyka", "matematyka"]);

export function TheorySubjectLanding({
  basePath,
  heading,
  intro,
  domainsLabel,
  scopeHeading = "Zakres Materiału",
  domains,
}: TheorySubjectLandingProps) {
  const [expandedDomainIds, setExpandedDomainIds] = useState<Set<string>>(
    () => new Set(),
  );

  const visibleDomains = domains.filter((d) => d.sections.length > 0);
  const rawSlug = basePath.split("/").filter(Boolean).pop() ?? "";
  const subjectSlug = rawSlug.replace(/-matura-(?:2015|2023)$/, "");
  const isMaturaSubject = MATURA_SUBJECTS.has(subjectSlug);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const domainParam = params.get("domain");
    if (domainParam && domains.some((d) => d.id === domainParam)) {
      setExpandedDomainIds((prev) => {
        if (prev.has(domainParam)) return prev;
        const next = new Set(prev);
        next.add(domainParam);
        return next;
      });
    }
  }, [domains]);

  const toggleDomain = (domainId: string) => {
    setExpandedDomainIds((prev) => {
      const next = new Set(prev);
      if (next.has(domainId)) {
        next.delete(domainId);
      } else {
        next.add(domainId);
      }
      return next;
    });
  };

  return (
    <div className="textbook-welcome">
      <h1>{heading}</h1>
      <p>{intro}</p>

      <div className="textbook-welcome__exam">
        <h2 className="w-fit rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
          {scopeHeading}
        </h2>
        <p>{domainsLabel}</p>
        <div className="textbook-welcome__domain-grid">
          {visibleDomains.map((domain) => {
            const isExpanded = expandedDomainIds.has(domain.id);
            return (
              <div
                key={domain.id}
                className={isExpanded ? "sm:col-span-2" : undefined}
              >
                <button
                  type="button"
                  onClick={() => toggleDomain(domain.id)}
                  aria-expanded={isExpanded}
                  className="textbook-welcome__domain-btn flex items-center justify-between gap-2 focus-ring"
                >
                  <span className="truncate font-medium">
                    {domain.icon} {domain.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-zinc-500">
                    <span className="tabular-nums">{domain.sections.length}</span>
                    <span aria-hidden="true">{isExpanded ? "▾" : "▸"}</span>
                  </span>
                </button>

                {isExpanded && (
                  <ul className="mt-2 space-y-1 rounded-lg border border-zinc-800 bg-zinc-950/90 p-2.5">
                    {domain.sections.map((section, idx) => (
                      <li key={section.id}>
                        <Link
                          href={`${basePath}/${section.id}`}
                          className="flex items-start gap-2 rounded-md px-2.5 py-2 text-xs leading-relaxed text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-ring"
                        >
                          <span className="shrink-0 font-mono text-zinc-500">
                            {idx + 1}.
                          </span>
                          <span>{section.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        System oparty na metodzie aktywnego przypominania (<em>Active Recall</em>) — kliknij na
        pytanie w tekście, aby odsłonić oficjalny klucz odpowiedzi.
      </p>

      {isMaturaSubject && (
        <>
          <hr className="my-10 border-t border-zinc-800" />
          <section id="sekcja-matura" aria-labelledby="matura-section-heading">
            <div className="mb-4">
              <h2
                id="matura-section-heading"
                className="text-xl font-bold tracking-tight text-zinc-100"
              >
                Matura
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Arkusze CKE z poprzednich lat (2015–2024) oraz arkusze próbne i diagnostyczne z
                oryginalnymi stronami PDF i naniesionymi rozwiązaniami.
              </p>
            </div>
            <CkeExamSheetsRepositoryView subject={subjectSlug} />
          </section>
        </>
      )}
    </div>
  );
}

