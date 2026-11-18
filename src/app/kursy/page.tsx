import type { Metadata } from "next";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { CoursesCatalogView } from "@/components/courses/CoursesCatalogView";
import { getSidebarNavigation } from "@/server";

export const metadata: Metadata = {
  title: "Kursy i Szkolenia — Anatomia, Fizjologia, Biochemia Sportu i Matura CKE",
  description:
    "Ustrukturyzowane kursy w ekosystemie SportNotes z lektorem Zofia, interaktywnymi rycinami oraz bezpłatnym dostępem do bazy akademickiej i arkuszy CKE.",
  openGraph: {
    siteName: "SportNotes",
  },
};

export default function KursyPage() {
  const navigation = getSidebarNavigation();

  return (
    <main>
      <Topbar navigation={navigation} />
      <CoursesCatalogView />
      <Footer />
    </main>
  );
}
