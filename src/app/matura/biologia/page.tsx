import { MaturaSubjectView } from "@/components/MaturaSubjectView";
import { getMaturaRecords } from "@/server";

export default function MaturaBiologiaPage() {
  return (
    <MaturaSubjectView
      sidebarTitle="🧬 Biologia"
      subjectName="Biologia"
      records={getMaturaRecords("biologia")}
    />
  );
}
