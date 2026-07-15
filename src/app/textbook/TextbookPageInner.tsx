"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TextbookLayout } from "@/components/TextbookLayout";
import { TextbookContent } from "@/components/TextbookContent";
import { getDomains, getDomain } from "@/data/textbook";
import type { TextbookSection } from "@/types/textbook";

export function TextbookPageInner() {
  const domains = getDomains();
  const searchParams = useSearchParams();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<TextbookSection | null>(
    null,
  );

  // Auto-select first section of domain from query param
  useEffect(() => {
    const domainParam = searchParams.get("domain");
    if (domainParam) {
      const domain = getDomain(domainParam);
      if (domain && domain.sections.length > 0) {
        const first = domain.sections[0];
        setActiveSectionId((prev) => (prev === first.id ? prev : first.id));
        setActiveSection((prev) => (prev?.id === first.id ? prev : first));
      }
    }
  }, [searchParams]);

  const handleSectionSelect = useCallback(
    (domainId: string, sectionId: string) => {
      setActiveSectionId(sectionId);
      const domain = getDomain(domainId);
      if (domain) {
        const section = domain.sections.find((s) => s.id === sectionId);
        setActiveSection(section ?? null);
      }
    },
    [],
  );

  const handleDomainClick = useCallback(
    (domainId: string) => {
      const domain = getDomain(domainId);
      if (domain && domain.sections.length > 0) {
        handleSectionSelect(domainId, domain.sections[0].id);
      }
    },
    [handleSectionSelect],
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
          <h1>Inteligentny Podręcznik Medyczny</h1>
          <p>
            Wybierz interesujący Cię dział z panelu bocznego lub poniższego menu,
            aby rozpocząć aktywną naukę z systemem <strong>Active Recall</strong>.
          </p>

          <div className="textbook-welcome__exam">
            <h2>Zakres Materiału Egzaminacyjnego</h2>
            <p>Zagadnienia zmapowane pod wymagania akademickie oraz maturalne Formuły 2015:</p>
            <div className="textbook-welcome__domain-grid">
              {domains.map((domain) => (
                <button
                  key={domain.id}
                  className="textbook-welcome__domain-btn"
                  onClick={() => handleDomainClick(domain.id)}
                >
                  {domain.icon} {domain.title}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            System oparty na metodzie aktywnego przypominania (<em>Active Recall</em>) — kliknij
            na pytanie w tekście, aby odsłonić oficjalny klucz odpowiedzi.
          </p>
        </div>
      )}
    </TextbookLayout>
  );
}
