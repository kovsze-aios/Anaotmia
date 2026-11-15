import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Biochemia Akademicka i Enzymologia — Biblioteka OER",
  description:
    "Kinetyka enzymatyczna Michaelisa–Mentena, termodynamika reakcji oraz szczegółowa regulacja szlaków metabolicznych (Biochemistry Free For All OER).",
};

export default function TeoriaBiochemiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/biochemia"
      heading="Biochemia — Enzymologia i Metabolizm (OER)"
      intro="Rozszerzenie biochemiczne dla olimpijczyków i studentów medycyny (Biochemistry Free For All, CC BY-NC-SA): kinetyka ilościowa, regulacja allosteryczna i energetyka komórki."
      domainsLabel="Działy biochemii:"
      domains={getNavDomains("biochemia")}
    />
  );
}
