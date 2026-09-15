import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Anatomia — Inteligentny Podręcznik Medyczny",
  description:
    "Zagadnienia z anatomii zmapowane pod wymagania akademickie oraz maturalne. Active Recall, pytania egzaminacyjne i pełne opisy akademickie.",
};

export default function TeoriaAnatomiaPage() {
  // Only the chapter tree is needed here, and every action is a navigation —
  // so this page ships no client JavaScript at all.
  return (
    <TheorySubjectLanding
      basePath="/theory/anatomia"
      heading="Inteligentny Podręcznik Medyczny"
      intro={
        <>
          Wybierz interesujący Cię dział z panelu bocznego lub poniższego menu, aby rozpocząć
          aktywną naukę z systemem <strong>Active Recall</strong>.
        </>
      }
      scopeHeading="Zakres Materiału Egzaminacyjnego"
      domainsLabel="Zagadnienia zmapowane pod wymagania akademickie oraz maturalne Formuły 2015:"
      domains={getNavDomains("anatomia")}
    />
  );
}
