import { Topbar } from "@/components/Topbar";
import { Hero } from "@/components/Hero";
import { Topics } from "@/components/Topics";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Hero />
      <div className="l-container">
        <Topics />
      </div>
      <Footer />
    </main>
  );
}
