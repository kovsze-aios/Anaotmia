import type { Metadata } from "next";
import { TheorySubjectView } from "@/components/TheorySubjectView";
import { getTheoryDomains } from "@/server";

export const metadata: Metadata = {
  title: "Biologia — Teoria (Formuła 2015) | Medycyna",
  description:
    "Kompleksowy materiał teoretyczny z biologii zgodny z podstawą programową CKE. Rozdziały z pytaniami Active Recall z autentycznych arkuszy maturalnych.",
};

export default function TeoriaBiologiaPage() {
  return (
    <TheorySubjectView
      basePath="/theory/biologia"
      heading="Biologia — Teoria (Formuła 2015)"
      intro="Kompleksowy materiał teoretyczny zgodny z podstawą programową CKE. Każdy rozdział zawiera wbudowane pytania Active Recall zaczerpnięte z autentycznych arkuszy maturalnych."
      domainsLabel="Materiał podzielony na główne działy biologii:"
      domains={getTheoryDomains("biologia")}
    />
  );
}
