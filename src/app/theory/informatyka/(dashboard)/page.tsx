import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Informatyka i Bioinformatyka — Biblioteka OER",
  description:
    "Algorytmy dopasowania sekwencji DNA (Needleman–Wunsch, BLAST), Python (NumPy, Pandas) oraz podstawy analizy danych biomedycznych.",
};

export default function TeoriaInformatykaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/informatyka"
      heading="Informatyka i Bioinformatyka — Python i Algorytmy (OER)"
      intro="Połączenie algorytmiki (Think Python, Bioinformatics Algorithms) z praktyczną analizą danych medycznych oraz sekwencji genomowych."
      domainsLabel="Działy informatyki i bioinformatyki:"
      domains={getNavDomains("informatyka")}
    />
  );
}
