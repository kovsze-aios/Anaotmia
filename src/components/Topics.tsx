import Link from "next/link";

const subjectCards = [
  {
    title: "Anatomia",
    subtitle: "Podręcznik akademicki",
    description: (
      <>8 działów anatomicznych — od osteologii po narządy zmysłów. <strong>Pełen zakres egzaminu WF.</strong></>
    ),
    href: "/textbook",
    icon: "🩺",
    color: "#3a5062",
  },
  {
    title: "Biologia",
    subtitle: "Matura Formuła 2015",
    description: (
      <>Cytologia, Metabolizm, Genetyka, Botanika i Fizjologia człowieka. <strong>Teoria + arkusze CKE.</strong></>
    ),
    href: "/theory/biologia",
    icon: "🌿",
    color: "#2e7d32",
  },
  {
    title: "Chemia",
    subtitle: "Matura Formuła 2015",
    description: (
      <>Chemia nieorganiczna i organiczna. <strong>Stechiometria, reakcje, arkusze CKE.</strong></>
    ),
    href: "/theory/chemia",
    icon: "🧪",
    color: "#6a1b9a",
  },
];

const anatomyTopics = [
  {
    title: "Osteologia i Artrologia",
    description: (
      <>Kości, stawy i więzadła — budowa szkieletu, klasyfikacja stawów, mechanika ruchu. <strong>Podstawa egzaminu WF.</strong></>
    ),
    domain: "osteology",
    icon: "🦴",
    color: "#4a90d9",
  },
  {
    title: "Miologia",
    description: (
      <>Mięśnie, przyczepy, unerwienie i funkcje. <strong>Kluczowe grupy mięśniowe</strong> wymagane na egzaminie z anatomii.</>
    ),
    domain: "myology",
    icon: "💪",
    color: "#e74c3c",
  },
  {
    title: "Układ Nerwowy",
    description: (
      <>Ośrodkowy i obwodowy układ nerwowy, drogi nerwowe, nerwy czaszkowe. <strong>Najczęściej egzaminowany dział.</strong></>
    ),
    domain: "nervous",
    icon: "🧠",
    color: "#2ecc71",
  },
  {
    title: "Układ Endokrynny",
    description: (
      <>Gruczoły dokrewne, hormony i ich działanie. <strong>Przyswój mechanizmy regulacji</strong> — częste pytania egzaminacyjne.</>
    ),
    domain: "endocrine",
    icon: "🔬",
    color: "#9b59b6",
  },
  {
    title: "Układ Krążenia i Oddechowy",
    description: (
      <>Serce, naczynia krwionośne, płuca i drogi oddechowe. <strong>Anatomia funkcjonalna</strong> dwóch powiązanych układów.</>
    ),
    domain: "cardiovascular-respiratory",
    icon: "❤️",
    color: "#f39c12",
  },
  {
    title: "Układ Pokarmowy",
    description: (
      <>Od jamy ustnej po odbytnicę — <strong>budowa i funkcja</strong> przewodu pokarmowego i gruczołów trawiennych.</>
    ),
    domain: "digestive",
    icon: "🍽️",
    color: "#1abc9c",
  },
  {
    title: "Układ Moczowo-Płciowy",
    description: (
      <>Nerki, drogi moczowe, narządy rozrodcze. <strong>Pytania WF</strong> często łączą anatomię z fizjologią tych układów.</>
    ),
    domain: "urinary-reproductive",
    icon: "🫘",
    color: "#e67e22",
  },
  {
    title: "Narządy Zmysłów",
    description: (
      <>Oko, ucho, skóra — <strong>budowa receptorów</strong> i dróg przewodzenia. Ostatni, ale równie ważny dział.</>
    ),
    domain: "sensory",
    icon: "👁️",
    color: "#3498db",
  },
];

export function Topics() {
  return (
    <div className="topics">
      {/* ─── Multi-Subject Selector ─── */}
      <h2>Wybierz przedmiot</h2>
      <p className="topics__subtitle">
        Kliknij kartę przedmiotu, aby przejść do interaktywnego podręcznika z
        pytaniami Active Recall
      </p>

      <div className="topics__subjectboxes">
        {subjectCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="subject-card"
          >
            <div
              className="subject-card__img"
              style={{ background: card.color }}
            >
              <span className="subject-card__icon">{card.icon}</span>
            </div>
            <div className="subject-card__content">
              <div className="subject-card__subtitle">{card.subtitle}</div>
              <div className="subject-card__title">{card.title}</div>
              <div className="subject-card__desc">
                {card.description}
              </div>
              <div className="subject-card__cta">Przejdź do przedmiotu →</div>
            </div>
          </Link>
        ))}
      </div>

      {/* ─── Anatomy Sub-Chapter Grid ─── */}
      <h2 style={{ marginTop: "60px" }}>Działy egzaminu — Anatomia</h2>
      <p className="topics__subtitle">
        Lub wybierz bezpośrednio interesujący Cię dział anatomiczny
      </p>
      <div className="topics__topicboxes">
        {anatomyTopics.map((topic) => (
          <Link
            key={topic.domain}
            href={`/textbook?domain=${topic.domain}`}
            className="topicbox"
          >
            <div
              className="topicbox__img"
              style={{ background: topic.color }}
            >
              <span
                className="topicbox__icon"
                style={{
                  fontSize: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {topic.icon}
              </span>
            </div>
            <div className="topicbox__content">
              <div className="topicbox__title">{topic.title}</div>
<<<<<<< HEAD
              <div className="topicbox__description">{topic.description}</div>
=======
              <div className="topicbox__description">
              <div className="topicbox__description">
                {topic.description}
              </div>
      </div>
    </div>
  );
}
