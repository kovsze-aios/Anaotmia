import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Chemia — Matura Nowa Podstawa (Formuła 2023+)",
  description:
    "Podręcznik maturalny z chemii (Poziom Rozszerzony, Formuła 2023+) podzielony na 13 działów CKE z obliczeniami z Prawa Hessa, iloczynem rozpuszczalności Kso, projekcjami Fischera i kluczem CKE.",
};

export default function ChemiaMatura2023Page() {
  return (
    <TheorySubjectLanding
      basePath="/theory/chemia-matura-2023"
      heading="Chemia — Matura Nowa Podstawa (Formuła 2023+)"
      scopeHeading="Podstawa Programowa CKE 2023+ (Działy I–XIII)"
      intro="Kompletny podręcznik maturalny z chemii na poziomie rozszerzonym (Formuła 2023+). Obejmuje wszystkie 13 działów CKE — od budowy atomu i termochemii (Prawo Hessa, Kso) po pełną chemię organiczną i stereochemię (projekcje Fischera i Hawortha)."
      domainsLabel="Wybierz jeden z 13 działów podstawy programowej CKE:"
      domains={getNavDomains("chemia-matura-2023")}
    />
  );
}
