import type { Metadata } from "next";
import Link from "next/link";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { getSidebarNavigation } from "@/server";

export const metadata: Metadata = {
  title: "Podręcznik — Anatomia, Fizjologia, Biologia, Chemia | Medycyna",
  description:
    "Interaktywny podręcznik z pytaniami Active Recall: anatomia i fizjologia akademicka oraz biologia i chemia w zakresie matury Formuła 2015.",
};

const subjects = [
  {
    title: "Anatomia",
    subtitle: "Podręcznik akademicki",
    description:
      "8 działów anatomicznych — od osteologii po narządy zmysłów. Pełen zakres egzaminu WF.",
    href: "/theory/anatomia",
    icon: "🩺",
    color: "#3a5062",
  },
  {
    title: "Fizjologia",
    subtitle: "Podręcznik akademicki",
    description:
      "Zasady działania ludzkiego organizmu. Neurofizjologia, krążenie, mięśnie.",
    href: "/theory/fizjologia",
    icon: "🫀",
    color: "#e63946",
  },
  {
    title: "Biologia",
    subtitle: "Matura Formuła 2015",
    description:
      "Cytologia, metabolizm, genetyka, botanika i fizjologia człowieka. Teoria + arkusze CKE.",
    href: "/theory/biologia",
    icon: "🌿",
    color: "#2e7d32",
  },
  {
    title: "Chemia",
    subtitle: "Matura Formuła 2015",
    description:
      "Chemia nieorganiczna i organiczna. Stechiometria, reakcje, arkusze CKE.",
    href: "/theory/chemia",
    icon: "🧪",
    color: "#6a1b9a",
  },
];

const examSheets = [
  { title: "Arkusze CKE — Biologia", href: "/matura/biologia", icon: "📝" },
  { title: "Arkusze CKE — Chemia", href: "/matura/chemia", icon: "📝" },
];

export default function TheoryIndexPage() {
  const navigation = getSidebarNavigation();

  return (
    <main>
      <Topbar navigation={navigation} />
      <div className="l-container">
        <div className="topics">
          <h2>Podręcznik</h2>
          <p className="topics__subtitle">
            Wybierz przedmiot, aby przejść do interaktywnego podręcznika z
            pytaniami Active Recall
          </p>

          <div className="topics__subjectboxes">
            {subjects.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="subject-card focus-ring"
              >
                <div className="subject-card__img" style={{ background: card.color }}>
                  <span className="subject-card__icon">{card.icon}</span>
                </div>
                <div className="subject-card__content">
                  <div className="subject-card__subtitle">{card.subtitle}</div>
                  <div className="subject-card__title">{card.title}</div>
                  <div className="subject-card__desc">{card.description}</div>
                  <div className="subject-card__cta">Przejdź do przedmiotu →</div>
                </div>
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: "60px" }}>Arkusze maturalne</h2>
          <p className="topics__subtitle">
            Autentyczne arkusze CKE (2015–2024) z kluczem odpowiedzi
          </p>
          <div className="topics__subjectboxes">
            {examSheets.map((sheet) => (
              <Link
                key={sheet.href}
                href={sheet.href}
                className="subject-card focus-ring"
              >
                <div className="subject-card__img" style={{ background: "#455a64" }}>
                  <span className="subject-card__icon">{sheet.icon}</span>
                </div>
                <div className="subject-card__content">
                  <div className="subject-card__subtitle">Matura Formuła 2015</div>
                  <div className="subject-card__title">{sheet.title}</div>
                  <div className="subject-card__cta">Przejdź do arkuszy →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
