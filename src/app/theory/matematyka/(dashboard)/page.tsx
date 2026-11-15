import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Matematyka i Biostatystyka — Biblioteka OER",
  description:
    "Analiza matematyczna (Calculus Vol. 1–3), modele wykładnicze oraz statystyka kliniczna (twierdzenie Bayesa, wartość p) w medycynie opartej na faktach.",
};

export default function TeoriaMatematykaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/matematyka"
      heading="Matematyka i Statystyka — Podstawa i Studia (OER)"
      intro="Podręcznik oparty o OpenStax Calculus oraz Introductory Statistics 2e: od rachunku różniczkowego po testowanie hipotez i biostatystykę medyczną."
      domainsLabel="Działy matematyki i statystyki:"
      domains={getNavDomains("matematyka")}
    />
  );
}
