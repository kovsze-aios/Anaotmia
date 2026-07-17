"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { getDomains, getDomain } from "@/data/textbook";

export default function TextbookPage() {
  const domains = getDomains();
  const router = useRouter();

  const handleDomainClick = useCallback(
    (domainId: string) => {
      const domain = getDomain(domainId);
      if (domain && domain.sections.length > 0) {
        router.push(`/textbook/${domain.sections[0].id}`);
      }
    },
    [router],
  );

  return (
    <div className="textbook-welcome">
      <h1>Inteligentny Podręcznik Medyczny</h1>
      <p>
        Wybierz interesujący Cię dział z panelu bocznego lub poniższego menu, aby rozpocząć aktywną
        naukę z systemem <strong>Active Recall</strong>.
      </p>

      <div className="textbook-welcome__exam">
        <h2 className="w-fit rounded-md bg-blue-100 px-2 py-1 text-blue-900 dark:bg-blue-900 dark:text-blue-100">Zakres Materiału Egzaminacyjnego</h2>
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
        System oparty na metodzie aktywnego przypominania (<em>Active Recall</em>) — kliknij na
        pytanie w tekście, aby odsłonić oficjalny klucz odpowiedzi.
      </p>
    </div>
  );
}
