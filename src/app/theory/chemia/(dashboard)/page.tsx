import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Chemia — Podręcznik i Arkusze CKE",
  description:
    "Zintegrowany podręcznik z chemii ogólnej, fizycznej i organicznej podzielony na działy oraz oficjalne arkusze maturalne CKE 1:1.",
};

export default function TeoriaChemiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/chemia"
      heading="Chemia — Podręcznik i Arkusze CKE"
      intro="Jedno źródło prawdy: kompletny korpus chemiczny (chemia ogólna, nieorganiczna, organiczna i fizyczna) z działem Matura i oficjalnymi arkuszami CKE 1:1 (Formuła 2023+ oraz 2015)."
      domainsLabel="Materiał podzielony na główne działy chemii:"
      domains={getNavDomains("chemia")}
    />
  );
}
