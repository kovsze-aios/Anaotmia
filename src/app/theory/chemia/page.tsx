"use client";

import { useState, useCallback } from "react";
import { TextbookLayout } from "@/components/TextbookLayout";
import { TextbookContent } from "@/components/TextbookContent";
import { chemiaTheory } from "@/data/chemia/theory";
import type { TextbookSection } from "@/types/textbook";

export default function TeoriaChemiaPage() {
  const domains = chemiaTheory;
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<TextbookSection | null>(
    null,
  );

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
          <h1>Chemia — Teoria (Formuła 2015)</h1>
          <p>
            Kompleksowy materiał teoretyczny zgodny z podstawą programową CKE.
            Każdy rozdział zawiera wbudowane pytania Active Recall zaczerpnięte
            z autentycznych arkuszy maturalnych.
          </p>
          <div className="textbook-welcome__exam">
            <h2>Działy tematyczne</h2>
            <p>Materiał podzielony na główne działy chemii:</p>
            <ol className="textbook-welcome__domains">
              {domains.map((d) => (
                <li key={d.id}>{d.icon} {d.title}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </TextbookLayout>
  );
}
