"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TextbookLayout } from "@/components/TextbookLayout";
import { TextbookContent } from "@/components/TextbookContent";
import { getDomains, getDomain } from "@/data/textbook";
import type { TextbookSection } from "@/types/textbook";

const domainGridItems = [
  { id: "osteology", label: "🦴 Osteologia i Artrologia" },
  { id: "myology", label: "💪 Miologia (Układ Mięśniowy)" },
  { id: "nervous", label: "🧠 Układ Nerwowy" },
  { id: "endocrine", label: "🔬 Układ Dokrewny" },
  { id: "cardiovascular-respiratory", label: "❤️ Układ Krążenia i Oddechowy" },
  { id: "digestive", label: "🍇 Układ Pokarmowy" },
  { id: "urinary-reproductive", label: "🫘 Układ Moczowo-Płciowy" },
  { id: "sensory", label: "👁️ Narządy Zmysłów" },
];

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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSectionId(first.id);
        setActiveSection(first);
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
              {domainGridItems.map((item) => (
                <button
                  key={item.id}
                  className="textbook-welcome__domain-btn"
                  onClick={() => handleDomainClick(item.id)}
                >
                  {item.label}
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
