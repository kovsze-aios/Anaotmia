import type { Metadata } from "next";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { TheoryIndex } from "@/components/TheoryIndex";
import { getSidebarNavigation } from "@/server";

export const metadata: Metadata = {
  title: "Textbook — Anatomy, Physiology, Biology, Chemistry | Medycyna",
  description:
    "Interactive textbook with Active Recall questions: academic anatomy and physiology, plus biology and chemistry for the Polish Matura 2015 syllabus.",
};

export default function TheoryIndexPage() {
  // Resolved on the server; only the small link projection reaches the client.
  const navigation = getSidebarNavigation();

  return (
    <main>
      <Topbar navigation={navigation} />
      <div className="l-container">
        <TheoryIndex />
      </div>
      <Footer />
    </main>
  );
}
