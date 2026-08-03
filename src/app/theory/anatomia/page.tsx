import Link from "next/link";
import { getNavDomains } from "@/server";

export default function TextbookPage() {
  // Only the chapter tree is needed here, and every action is a navigation —
  // so this page ships no client JavaScript at all.
  const domains = getNavDomains("anatomia");

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
          {domains
            .filter((domain) => domain.sections.length > 0)
            .map((domain) => (
              <Link
                key={domain.id}
                href={`/theory/anatomia/${domain.sections[0].id}`}
                className="textbook-welcome__domain-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
              >
                {domain.icon} {domain.title}
              </Link>
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
