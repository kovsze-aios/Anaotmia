import type { Metadata } from "next";
import { Topbar } from "@/components/Topbar";
import { Topics } from "@/components/Topics";
import { Footer } from "@/components/Footer";
import { AtlasStage } from "@/components/atlas/AtlasStage";
import { getSidebarNavigation } from "@/server";

// Route metadata is rendered on the server and cannot follow the client-side
// language switcher without giving up static generation, so it is written in
// English — the primary language, and what crawlers index.
export const metadata: Metadata = {
  title: "3D Atlas — Interactive human anatomy | Medycyna",
  description:
    "Interactive 3D anatomy atlas: 2,234 structures across 15 systems. Rotate, explode and explore a model of the human body, then move on to the textbook.",
};

export default function Home() {
  // Resolved on the server; only the small link projection reaches the client.
  const navigation = getSidebarNavigation();

  return (
    <main>
      <Topbar navigation={navigation} />
      {/*
        The atlas is the flagship feature, but the WebGL viewer and its ~30 MB of
        geometry only load once the visitor opts in — see `AtlasStage`.
      */}
      <AtlasStage />
      <div className="l-container">
        <Topics />
      </div>
      <Footer />
    </main>
  );
}
