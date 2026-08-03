import { Topbar } from "@/components/Topbar";
import { Hero } from "@/components/Hero";
import { Topics } from "@/components/Topics";
import { Footer } from "@/components/Footer";
import { getSidebarNavigation } from "@/server";

export default function Home() {
  // Resolved on the server; only the small link projection reaches the client.
  const navigation = getSidebarNavigation();

  return (
    <main>
      <Topbar navigation={navigation} />
      <Hero />
      <div className="l-container">
        <Topics />
      </div>
      <Footer />
    </main>
  );
}
