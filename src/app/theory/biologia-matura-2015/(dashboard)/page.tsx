import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Biologia — Matura Formuła 2015",
  description:
    "Podręcznik maturalny z biologii (Poziom Rozszerzony, Formuła 2015) podzielony na 11 działów CKE z pełną systematyką bezkręgowców, cyklami pasożytów i kluczem CKE.",
};

export default function BiologiaMatura2015Page() {
  return (
    <TheorySubjectLanding
      basePath="/theory/biologia-matura-2015"
      heading="Biologia — Matura Formuła 2015"
      scopeHeading="Podstawa Programowa CKE Formuła 2015 (Działy I–XI)"
      intro="Kompletny podręcznik maturalny z biologii dla zdających w Formule 2015. Uwzględnia rozszerzoną systematykę bezkręgowców, pełne cykle rozwojowe pasożytów oraz wytyczne klucza CKE."
      domainsLabel="Wybierz jeden z 11 działów podstawy programowej CKE:"
      domains={getNavDomains("biologia-matura-2015")}
    />
  );
}
