import type { Metadata } from "next";
import { MaturaSubjectView } from "@/components/MaturaSubjectView";
import { getMaturaRecords } from "@/server";

export const metadata: Metadata = {
  title: "Matura Chemia — Arkusze CKE | Medycyna",
  description:
    "Autentyczne arkusze CKE z chemii (2015–2024) z kluczem odpowiedzi. Filtruj według roku i działu tematycznego.",
};

export default function MaturaChemiaPage() {
  return (
    <MaturaSubjectView
      sidebarTitle="⚗️ Chemia"
      subjectName="Chemia"
      records={getMaturaRecords("chemia")}
    />
  );
}
