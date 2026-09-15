import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Chemia — Teoria (Formuła 2015)",
  description:
    "Kompleksowy materiał teoretyczny z chemii zgodny z podstawą programową CKE. Rozdziały z pytaniami Active Recall z autentycznych arkuszy maturalnych.",
};

export default function TeoriaChemiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/chemia"
      heading="Chemia — Teoria (Formuła 2015)"
      intro="Kompleksowy materiał teoretyczny zgodny z podstawą programową CKE. Każdy rozdział zawiera wbudowane pytania Active Recall zaczerpnięte z autentycznych arkuszy maturalnych."
      domainsLabel="Materiał podzielony na główne działy chemii:"
      domains={getNavDomains("chemia")}
    />
  );
}
