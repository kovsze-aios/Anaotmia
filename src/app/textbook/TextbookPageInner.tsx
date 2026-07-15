"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { TextbookLayout } from "@/components/TextbookLayout";
import { ActiveRecall } from "@/components/ActiveRecall";
import { getDomain } from "@/data/textbook";
import type { TextbookDomain } from "@/types/textbook";

function getDefaultDomain(domains: TextbookDomain[]): TextbookDomain | null {
  return domains.length > 0 ? domains[0] : null;
}

export function TextbookPageInner({ domains }: { domains: TextbookDomain[] }) {
  const searchParams = useSearchParams();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<{
    id: string;
    title: string;
    type: string;
  } | null>(null);
  const initialized = useRef(false);

  /* Restore or set initial section on mount / param change */
  useEffect(() => {
    const domainParam = searchParams.get("domain");
    if (domainParam) {
      const domain = getDomain(domainParam);
      if (domain && domain.sections.length > 0) {
        const first = domain.sections[0];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSectionId((prev) => prev !== first.id ? first.id : prev);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSection((prev) => prev?.id !== first.id ? first : prev);
      }
    }
  }, [searchParams]);

  const handleSectionSelect = useCallback(
    (domainId: string, sectionId: string) => {
      setActiveSectionId(sectionId);
      const domain = getDomain(domainId);
      const section = domain?.sections.find((s) => s.id === sectionId) ?? null;
      setActiveSection(section);
    },
    []
  );

  return (
    <TextbookLayout
      domains={domains}
      activeSection={activeSectionId}
      onSectionSelect={handleSectionSelect}
    >
      {activeSection && (
        <>
          <h1 className="text-3xl font-bold tracking-tight mb-8">
            {activeSection.title}
          </h1>
          <ActiveRecallSection
            domain={getDomain(
              domains.find((d) =>
                d.sections.some((s) => s.id === activeSection.id)
              )?.id ?? ""
            )}
            section={activeSection}
          />
        </>
      )}
    </TextbookLayout>
  );
}

function ActiveRecallSection({
  domain,
  section,
}: {
  domain: TextbookDomain | null;
  section: { id: string; title: string; type: string };
}) {
  const items = useMemo(() => {
    if (!domain) return [];
    return domain.sections.find((s) => s.id === section.id)?.items ?? [];
  }, [domain, section.id]);

  if (items.length === 0) {
    return <p className="text-zinc-500 italic">Brak elementów w tej sekcji.</p>;
  }

  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="mb-4">
          <ActiveRecall
            question={item.question}
            answer={item.answer}
            examRef={item.examRef}
          />
        </div>
      ))}
    </>
  );
}
