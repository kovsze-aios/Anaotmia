"use client";

import Link from "next/link";

import type { NavDomain } from "@/server/models";
import {
  CurriculumModeSwitcher,
  CkeStatusBadge,
  isTierRequiredInMode,
  useCurriculumViewMode,
} from "./matura/CkeFormulaControls";
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

export function TheorySubjectLanding({
  basePath,
  heading,
  intro,
  domainsLabel,
  scopeHeading = "Zakres Materiału",
  domains,
}: TheorySubjectLandingProps) {
  const hasCkeMetadata = domains.some((d) =>
    d.sections.some((s) => Boolean(s.ckeStatus || s.tier)),
  );
  const [viewMode, setViewMode] = useCurriculumViewMode(basePath);
  const subjectSlug = basePath.split("/").filter(Boolean).pop();

  return (
    <div className="textbook-welcome">
      <h1>{heading}</h1>
      <p>{intro}</p>

      {hasCkeMetadata && (
        <div className="my-5 flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-950/90 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
              🎓 Tryb programu nauczania i wymagań CKE:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <CkeStatusBadge status="core" compact />
              <CkeStatusBadge status="2023-only" compact />
              <CkeStatusBadge status="2015-only" compact />
              <CkeStatusBadge tier="academic-extra" compact />
            </div>
          </div>
          <CurriculumModeSwitcher value={viewMode} onChange={setViewMode} />
        </div>
      )}

      {hasCkeMetadata && viewMode === "cke-exams" ? (
        <CkeExamSheetsRepositoryView
          subject={subjectSlug}
          onExitExamMode={() => setViewMode("full")}
        />
      ) : (
        <div className="textbook-welcome__exam">
          <h2 className="w-fit rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            {scopeHeading}
          </h2>
          <p>{domainsLabel}</p>
          <div className="textbook-welcome__domain-grid">
            {domains
              .filter((d) => d.sections.length > 0)
              .map((domain) => {
                const matchingSections = hasCkeMetadata
                  ? domain.sections.filter((s) =>
                      isTierRequiredInMode(
                        viewMode,
                        s.tier ?? s.ckeStatus,
                        s.formulas,
                      ),
                    )
                  : domain.sections;

                const isRequiredDomain = matchingSections.length > 0;
                const targetSection =
                  matchingSections[0] ?? domain.sections[0];

                const hasExtra = domain.sections.some(
                  (s) => s.tier === "academic-extra",
                );
                const has2023Only = domain.sections.some(
                  (s) =>
                    s.tier === "cke-2023-only" || s.ckeStatus === "2023-only",
                );
                const has2015Only = domain.sections.some(
                  (s) =>
                    s.tier === "cke-2015-only" || s.ckeStatus === "2015-only",
                );
                const allExtraOnly =
                  hasExtra &&
                  domain.sections.every((s) => s.tier === "academic-extra");

                return (
                  <Link
                    key={domain.id}
                    href={`${basePath}/${targetSection.id}`}
                    className={`textbook-welcome__domain-btn flex items-center justify-between gap-2 transition-opacity focus-ring ${
                      isRequiredDomain ? "" : "opacity-40"
                    }`}
                  >
                    <span>
                      {domain.icon} {domain.title}
                    </span>
                    {hasCkeMetadata && (
                      <span className="flex shrink-0 flex-wrap items-center gap-1">
                        {allExtraOnly ? (
                          <CkeStatusBadge tier="academic-extra" compact />
                        ) : (
                          <>
                            {!has2023Only && !has2015Only && (
                              <CkeStatusBadge status="core" compact />
                            )}
                            {has2023Only && (
                              <CkeStatusBadge status="2023-only" compact />
                            )}
                            {has2015Only && (
                              <CkeStatusBadge status="2015-only" compact />
                            )}
                            {hasExtra && (
                              <CkeStatusBadge tier="academic-extra" compact />
                            )}
                          </>
                        )}
                      </span>
                    )}
                  </Link>
                );
              })}
          </div>
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        System oparty na metodzie aktywnego przypominania (<em>Active Recall</em>) — kliknij na
        pytanie w tekście, aby odsłonić oficjalny klucz odpowiedzi.
      </p>
    </div>
  );
}

