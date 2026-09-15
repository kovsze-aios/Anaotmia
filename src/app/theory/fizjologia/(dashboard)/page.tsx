import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Fizjologia — Teoria",
  description:
    "Kompleksowy materiał teoretyczny z fizjologii. Każdy rozdział zawiera wbudowane pytania Active Recall.",
};

export default function TeoriaFizjologiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/fizjologia"
      heading="Fizjologia — Teoria"
      intro="Kompleksowy materiał teoretyczny. Każdy rozdział zawiera wbudowane pytania Active Recall."
      domainsLabel="Materiał podzielony na główne działy fizjologii:"
      domains={getNavDomains("fizjologia")}
    />
  );
}
