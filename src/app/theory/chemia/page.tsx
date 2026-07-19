"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { TextbookLayout } from "@/components/TextbookLayout";
import { TextbookContent } from "@/components/TextbookContent";
import { chemiaTheory } from "@/data/chemia/theory";
import type { TextbookSection } from "@/types/textbook";

function ChemiaTheoryInner() {
  const domains = chemiaTheory;
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
        router.replace("/theory/chemia", { scroll: false });
      }
    }
  }, [domainParam, domains, router]);

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
            <div className="textbook-welcome__domain-grid">
              {domains.map((d) => (
                <Link
                  key={d.id}
                  href={`/theory/chemia?domain=${d.id}`}
                  className="textbook-welcome__domain-btn flex items-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors w-full text-left"
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

export default function TeoriaChemiaPage() {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <ChemiaTheoryInner />
    </Suspense>
  );
}
