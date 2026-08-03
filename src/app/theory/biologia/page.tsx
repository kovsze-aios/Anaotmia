import { TheorySubjectView } from "@/components/TheorySubjectView";
import { getTheoryDomains } from "@/server";

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
