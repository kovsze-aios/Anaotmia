import type { Metadata } from "next";
import { TheorySubjectView } from "@/components/TheorySubjectView";
import { getTheoryDomains } from "@/server";

export const metadata: Metadata = {
  title: "Fizjologia — Teoria | Medycyna",
  description:
    "Kompleksowy materiał teoretyczny z fizjologii. Każdy rozdział zawiera wbudowane pytania Active Recall.",
};

export default function TeoriaFizjologiaPage() {
  return (
    <TheorySubjectView
      basePath="/theory/fizjologia"
      heading="Fizjologia — Teoria"
      intro="Kompleksowy materiał teoretyczny. Każdy rozdział zawiera wbudowane pytania Active Recall."
      domainsLabel="Materiał podzielony na główne działy fizjologii:"
      domains={getTheoryDomains("fizjologia")}
    />
  );
}
