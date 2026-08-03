"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { TextbookLayout } from "@/components/TextbookLayout";
import { TextbookContent } from "@/components/TextbookContent";
import type { TextbookSection, NavDomain } from "@/server/models";
import { getSection } from "@/services/sectionService";

export interface TheorySubjectViewProps {
  /** Route this subject lives at, e.g. `/theory/biologia`. */
  basePath: string;
  heading: string;
  intro: React.ReactNode;
  /** Sentence introducing the domain grid on the welcome screen. */
  domainsLabel: string;
  /**
   * Nav projection only — section content is fetched on demand via
   * `/api/section`, keeping the multi-megabyte corpora out of the page payload.
   */
  domains: NavDomain[];
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

  const [activeSection, setActiveSection] = useState<TextbookSection | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const requestIdRef = useRef(0);

  // Routes are `/theory/<subject>`, so the subject id is derivable.
  const subject = basePath.replace("/theory/", "");

  const loadSection = useCallback(
    async (sectionId: string) => {
      const requestId = ++requestIdRef.current;
      setIsLoading(true);
      setActiveSection(null);
      try {
        const section = await getSection(subject, sectionId);
        if (requestId !== requestIdRef.current) return;
        setActiveSection(section);
      } catch (error) {
        if (requestId !== requestIdRef.current) return;
        console.error("Failed to load section", error);
        setActiveSection(null);
      } finally {
        if (requestId === requestIdRef.current) setIsLoading(false);
      }
    },
    [subject],
  );

  useEffect(() => {
    if (!domainParam) return;
    const domain = domains.find((d) => d.id === domainParam);
    if (domain && domain.sections.length > 0) {
      void loadSection(domain.sections[0].id);
      // Clean up the URL to not show the ?domain= query parameter
      router.replace(basePath, { scroll: false });
    }
  }, [domainParam, domains, router, basePath, loadSection]);

  const handleSectionSelect = useCallback(
    (domainId: string, sectionId: string) => {
      const domain = domains.find((d) => d.id === domainId);
      if (!domain) return;
      void loadSection(sectionId);
    },
    [domains, loadSection],
  );

  return (
    <TextbookLayout
      domains={domains}
      activeSection={activeSection?.id ?? null}
      onSectionSelect={handleSectionSelect}
    >
      {isLoading ? (
        <div className="textbook-loading" role="status">
          <span aria-hidden="true">⏳</span> Ładowanie rozdziału…
        </div>
      ) : activeSection ? (
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
                  className="textbook-welcome__domain-btn flex items-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors w-full text-left focus-ring"
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
