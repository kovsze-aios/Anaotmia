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
          <h1>Smart Anatomy Textbook</h1>
          <p>
            Select a domain from the sidebar to begin studying. Content is
            organized around the 2026 WF exam blueprint and sourced from
            Bochenek, Reicher, and Lewiński textbooks.
          </p>

          <div className="textbook-welcome__exam">
            <h2>Exam Topics Covered</h2>
            <p>44 exam questions mapped across 8 domains:</p>
            <ol className="textbook-welcome__domains">
              <li>🦴 Osteology &amp; Arthrology</li>
              <li>💪 Myology</li>
              <li>🧠 Nervous System</li>
              <li>🔬 Endocrine System</li>
              <li>❤️ Cardiovascular &amp; Respiratory</li>
              <li>🍽️ Digestive System</li>
              <li>🫘 Urinary &amp; Reproductive</li>
              <li>👁️ Sensory Organs</li>
            </ol>
          </div>

          <p className="text-sm text-muted-foreground">
            Built with Active Recall — click any question to reveal the answer
            and test yourself.
          </p>
        </div>
      )}
    </TextbookLayout>
  );
}
