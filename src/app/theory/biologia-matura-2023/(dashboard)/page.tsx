import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Biologia — Matura Nowa Podstawa (Formuła 2023+)",
  description:
    "Podręcznik maturalny z biologii (Poziom Rozszerzony, Formuła 2023+) podzielony na 11 działów CKE z wytycznymi, pułapkami egzaminacyjnymi i czasownikami operacyjnymi.",
};

export default function BiologiaMatura2023Page() {
  return (
    <TheorySubjectLanding
      basePath="/theory/biologia-matura-2023"
      heading="Biologia — Matura Nowa Podstawa (Formuła 2023+)"
      scopeHeading="Podstawa Programowa CKE 2023+ (Działy I–XI)"
      intro="Kompletny podręcznik maturalny z biologii na poziomie rozszerzonym (Formuła 2023+). Każdy rozdział jest zmapowany do wymagań szczegółowych CKE i zakończony sekcją „🎯 Wytyczne CKE i Pewniaki Maturalne”."
      domainsLabel="Wybierz jeden z 11 działów podstawy programowej CKE:"
      domains={getNavDomains("biologia-matura-2023")}
    />
  );
}
