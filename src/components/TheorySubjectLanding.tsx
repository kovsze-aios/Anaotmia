"use client";

import { useState } from "react";
import Link from "next/link";

import type { NavDomain } from "@/server/models";
import {
  CkeFormulaSwitcher,
  CkeStatusBadge,
  defaultFormulaForPath,
  matchesFormulaFilter,
  type FormulaFilterMode,
} from "./matura/CkeFormulaControls";

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
  const hasCkeMetadata = domains.some((d) =>
    d.sections.some((s) => Boolean(s.ckeStatus)),
  );
  const [formulaFilter, setFormulaFilter] = useState<FormulaFilterMode>(() =>
    defaultFormulaForPath(basePath),
  );

  return (
    <div className="textbook-welcome">
      <h1>{heading}</h1>
      <p>{intro}</p>

      {hasCkeMetadata && (
        <div className="my-5 flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-950/90 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
              🎓 Filtr wymagań egzaminacyjnych CKE:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <CkeStatusBadge status="core" />
              <CkeStatusBadge status="2023-only" />
              <CkeStatusBadge status="2015-only" />
            </div>
          </div>
          <CkeFormulaSwitcher value={formulaFilter} onChange={setFormulaFilter} />
        </div>
      )}

      <div className="textbook-welcome__exam">
        <h2 className="w-fit rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
          {scopeHeading}
        </h2>
        <p>{domainsLabel}</p>
        <div className="textbook-welcome__domain-grid">
          {domains
            .map((domain) => {
              const matchingSections = hasCkeMetadata
                ? domain.sections.filter((s) =>
                    matchesFormulaFilter(formulaFilter, s.formulas, s.ckeStatus),
                  )
                : domain.sections;
              return { domain, matchingSections };
            })
            .filter(({ matchingSections }) => matchingSections.length > 0)
            .map(({ domain, matchingSections }) => {
              const has2023Only = matchingSections.some(
                (s) => s.ckeStatus === "2023-only",
              );
              const has2015Only = matchingSections.some(
                (s) => s.ckeStatus === "2015-only",
              );
              return (
                <Link
                  key={domain.id}
                  href={`${basePath}/${matchingSections[0].id}`}
                  className="textbook-welcome__domain-btn flex items-center justify-between gap-2 focus-ring"
                >
                  <span>
                    {domain.icon} {domain.title}
                  </span>
                  {hasCkeMetadata && (
                    <span className="flex shrink-0 items-center gap-1">
                      {has2023Only && <CkeStatusBadge status="2023-only" />}
                      {has2015Only && <CkeStatusBadge status="2015-only" />}
                      {!has2023Only && !has2015Only && (
                        <CkeStatusBadge status="core" />
                      )}
                    </span>
                  )}
                </Link>
              );
            })}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        System oparty na metodzie aktywnego przypominania (<em>Active Recall</em>) — kliknij na
        pytanie w tekście, aby odsłonić oficjalny klucz odpowiedzi.
      </p>
    </div>
  );
}

