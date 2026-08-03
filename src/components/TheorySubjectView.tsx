"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { TextbookLayout } from "@/components/TextbookLayout";
import { TextbookContent } from "@/components/TextbookContent";
import type { TextbookDomain, TextbookSection } from "@/server/models";

export interface TheorySubjectViewProps {
  /** Route this subject lives at, e.g. `/theory/biologia`. */
  basePath: string;
  heading: string;
  intro: React.ReactNode;
  /** Sentence introducing the domain grid on the welcome screen. */
  domainsLabel: string;
  /** Supplied by the server page — this component never reads data itself. */
  domains: TextbookDomain[];
}

function TheorySubjectViewInner({
  basePath,
  heading,
  intro,
  domainsLabel,
  domains,
}: TheorySubjectViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const domainParam = searchParams.get("domain");

  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<TextbookSection | null>(
    null,
  );

  useEffect(() => {
    if (domainParam) {
      const domain = domains.find((d) => d.id === domainParam);
      if (domain && domain.sections.length > 0) {
        const firstSection = domain.sections[0];
        setActiveSectionId(firstSection.id);
        setActiveSection(firstSection);
        // Clean up the URL to not show the ?domain= query parameter
        router.replace(basePath, { scroll: false });
      }
    }
  }, [domainParam, domains, router, basePath]);

  const handleSectionSelect = useCallback(
    (domainId: string, sectionId: string) => {
      setActiveSectionId(sectionId);
      const domain = domains.find((d) => d.id === domainId);
      if (domain) {
        const section = domain.sections.find((s) => s.id === sectionId);
        setActiveSection(section ?? null);
      }
    },
    [domains],
  );

  return (
    <TextbookLayout
      domains={domains}
      activeSection={activeSectionId}
      onSectionSelect={handleSectionSelect}
    >
      {activeSection ? (
        <TextbookContent section={activeSection} />
      ) : (
        <div className="textbook-welcome">
          <h1>{heading}</h1>
          <p>{intro}</p>
          <div className="textbook-welcome__exam">
            <h2>Działy tematyczne</h2>
            <p>{domainsLabel}</p>
            <div className="textbook-welcome__domain-grid">
              {domains.map((d) => (
                <Link
                  key={d.id}
                  href={`${basePath}?domain=${d.id}`}
                  className="textbook-welcome__domain-btn flex items-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
                >
                  {d.icon} {d.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </TextbookLayout>
  );
}

/**
 * Shared interactive shell for every theory subject. `useSearchParams` requires
 * a Suspense boundary, so it is provided here rather than in each page.
 */
export function TheorySubjectView(props: TheorySubjectViewProps) {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <TheorySubjectViewInner {...props} />
    </Suspense>
  );
}
