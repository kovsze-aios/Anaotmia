import type { Metadata } from "next";
import { MaturaSubjectView } from "@/components/MaturaSubjectView";
import { getMaturaRecords } from "@/server";

export const metadata: Metadata = {
  title: "Matura Biologia — Arkusze CKE | Medycyna",
  description:
    "Autentyczne arkusze CKE z biologii (2015–2024) z kluczem odpowiedzi. Filtruj według roku i działu tematycznego.",
};

export default function MaturaBiologiaPage() {
  return (
    <MaturaSubjectView
      sidebarTitle="🧬 Biologia"
      subjectName="Biologia"
      records={getMaturaRecords("biologia")}
    />
  );
}
