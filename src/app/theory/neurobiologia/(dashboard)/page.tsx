import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Neurobiologia i Elektrofizjologia — Biblioteka OER",
  description:
    "Potencjały błonowe, równanie Nernsta, transmisja synaptyczna oraz mechanizmy pamięci LTP (Foundations of Neuroscience OER).",
};

export default function TeoriaNeurobiologiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/neurobiologia"
      heading="Neurobiologia — Neuron i Synapsy (OER)"
      intro="Opracowano na podstawie Foundations of Neuroscience (Michigan State University, CC BY-NC-SA 4.0) oraz OpenStax A&P 2e: biofizyka kanałów jonowych i neuroplastyczność."
      domainsLabel="Działy neurobiologii:"
      domains={getNavDomains("neurobiologia")}
    />
  );
}
