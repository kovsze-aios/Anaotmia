import type { Metadata } from "next";
import { Topbar } from "@/components/Topbar";
import { Topics } from "@/components/Topics";
import { Footer } from "@/components/Footer";
import { AtlasStage } from "@/components/atlas/AtlasStage";
import { getSidebarNavigation } from "@/server";

export const metadata: Metadata = {
  title: "Atlas 3D — Interaktywna anatomia człowieka | Medycyna",
  description:
    "Interaktywny atlas anatomiczny 3D: 2 234 struktury w 15 układach. Obracaj, rozkładaj i badaj model ciała człowieka, a potem przejdź do podręcznika teorii.",
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
