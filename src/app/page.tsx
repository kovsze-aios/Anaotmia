import { Hero } from "@/components/Hero";
import { Topics } from "@/components/Topics";

export default function Home() {
  return (
    <div id="panel">
      <Hero />
      <div className="l-container">
        <Topics />
      </div>
    </div>
  );
}
