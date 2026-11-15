import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Chemia — Pełna Wiedza + Matura CKE (2015 & 2023+)",
  description:
    "Zintegrowany podręcznik z chemii ogólnej, fizycznej i organicznej z filtrami Formuła 2023+, Formuła 2015, treściami akademickimi OER i zadaniami CKE.",
};

export default function TeoriaChemiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/chemia"
      heading="Chemia — Pełna Wiedza + Matura CKE"
      intro="Jedno źródło prawdy: kompletny korpus chemiczny (Bielański + OER + CKE) z natychmiastowym filtrowaniem pod Maturę 2023+, Maturę 2015 i Oficjalne Arkusze CKE."
      domainsLabel="Materiał podzielony na główne działy chemii:"
      domains={getNavDomains("chemia")}
    />
  );
}
