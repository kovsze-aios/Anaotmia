import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Biologia — Podręcznik i Arkusze CKE",
  description:
    "Zintegrowany podręcznik z biologii: pełny kurs akademicki i maturalny podzielony na działy oraz oficjalne arkusze CKE 1:1 (2015–2024).",
};

export default function TeoriaBiologiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/biologia"
      heading="Biologia — Podręcznik i Arkusze CKE"
      intro="Jedno źródło prawdy: kompletny podręcznik biologii podzielony na działy wraz z sekcją Matura zawierającą oryginalne arkusze CKE 1:1 (Formuła 2023+ oraz Formuła 2015)."
      domainsLabel="Materiał podzielony na główne działy biologii:"
      domains={getNavDomains("biologia")}
    />
  );
}
