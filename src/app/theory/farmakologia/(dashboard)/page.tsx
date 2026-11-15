import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Farmakologia Kliniczna — Biblioteka OER",
  description:
    "Farmakokinetyka LADME, metabolizm wątrobowy CYP450, interakcje lek–receptor oraz indeks terapeutyczny (OpenStax Pharmacology for Nurses).",
};

export default function TeoriaFarmakologiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/farmakologia"
      heading="Farmakologia — LADME i Receptory (OER)"
      intro="Zintegrowany podręcznik farmakologii ogólnej oparty o OpenStax Pharmacology (CC BY 4.0): losy leku w ustroju, agoniści, antagoniści i bezpieczeństwo farmakoterapii."
      domainsLabel="Działy farmakologii:"
      domains={getNavDomains("farmakologia")}
    />
  );
}
