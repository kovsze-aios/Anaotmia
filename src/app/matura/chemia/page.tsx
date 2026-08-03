import { MaturaSubjectView } from "@/components/MaturaSubjectView";
import { getMaturaRecords } from "@/server";

export default function MaturaChemiaPage() {
  return (
    <MaturaSubjectView
      sidebarTitle="⚗️ Chemia"
      subjectName="Chemia"
      records={getMaturaRecords("chemia")}
    />
  );
}
