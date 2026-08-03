import type { Metadata } from "next";
import { TheorySubjectView } from "@/components/TheorySubjectView";
import { getTheoryDomains } from "@/server";

export const metadata: Metadata = {
  title: "Chemia — Teoria (Formuła 2015) | Medycyna",
  description:
    "Kompleksowy materiał teoretyczny z chemii zgodny z podstawą programową CKE. Rozdziały z pytaniami Active Recall z autentycznych arkuszy maturalnych.",
};

export default function TeoriaChemiaPage() {
  return (
    <TheorySubjectView
      basePath="/theory/chemia"
      heading="Chemia — Teoria (Formuła 2015)"
      intro="Kompleksowy materiał teoretyczny zgodny z podstawą programową CKE. Każdy rozdział zawiera wbudowane pytania Active Recall zaczerpnięte z autentycznych arkuszy maturalnych."
      domainsLabel="Materiał podzielony na główne działy chemii:"
      domains={getTheoryDomains("chemia")}
    />
  );
}
