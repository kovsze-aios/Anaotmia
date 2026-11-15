import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Biologia — Pełna Wiedza + Matura CKE (2015 & 2023+)",
  description:
    "Zintegrowany podręcznik z biologii: pełen zakres naukowy i akademicki OER oraz filtrowanie pod wymagania CKE (Formuła 2015, Nowa Matura 2023+ i oficjalne arkusze CKE).",
};

export default function TeoriaBiologiaPage() {
  return (
    <TheorySubjectLanding
      basePath="/theory/biologia"
      heading="Biologia — Pełna Wiedza + Matura CKE"
      intro="Jedno źródło prawdy: pełna treść biologii z przełącznikiem między Pełną Wiedzą (OER + studia), Nową Maturą 2023+, Formułą 2015 oraz repozytorium arkuszy CKE."
      domainsLabel="Materiał podzielony na główne działy biologii:"
      domains={getNavDomains("biologia")}
    />
  );
}
