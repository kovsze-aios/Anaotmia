import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Fizyka i Biofizyka Medyczna — Biblioteka OER",
  description:
    "Kompendium fizyki klasycznej i współczesnej dla kandydatów na medycynę oraz kierunki ścisłe na bazie OpenStax University Physics Vol. 1–3.",
};

export default function TeoriaFizykaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/fizyka"
      heading="Fizyka — Pełna Wiedza i Biofizyka (OER)"
      intro="Moduł oparty o podręczniki OpenStax University Physics Vol. 1–3 (CC BY 4.0): od hydrodynamiki krążenia i termodynamiki po fizykę promieniowania RTG i rezonansu MRI."
      domainsLabel="Działy fizyki i biofizyki:"
      domains={getNavDomains("fizyka")}
    />
  );
}
