import Link from "next/link";

const topics = [
  {
    title: "Osteologia i Artrologia",
    description:
      "Kości, stawy i więzadła &mdash; budowa szkieletu, klasyfikacja stawów, mechanika ruchu. <strong>Podstawa egzaminu WF.</strong>",
    domain: "osteology",
    icon: "🦴",
    color: "#4a90d9",
  },
  {
    title: "Miologia",
    description:
      "Mięśnie, przyczepy, unerwienie i funkcje. <strong>Kluczowe grupy mięśniowe</strong> wymagane na egzaminie z anatomii.",
    domain: "myology",
    icon: "💪",
    color: "#e74c3c",
  },
  {
    title: "Układ Nerwowy",
    description:
      "Ośrodkowy i obwodowy układ nerwowy, drogi nerwowe, nerwy czaszkowe. <strong>Najczęściej egzaminowany dział.</strong>",
    domain: "nervous",
    icon: "🧠",
    color: "#2ecc71",
  },
  {
    title: "Układ Endokrynny",
    description:
      "Gruczoły dokrewne, hormony i ich działanie. <strong>Przyswój mechanizmy regulacji</strong> — częste pytania egzaminacyjne.",
    domain: "endocrine",
    icon: "🔬",
    color: "#9b59b6",
  },
  {
    title: "Układ Krążenia i Oddechowy",
    description:
      "Serce, naczynia krwionośne, płuca i drogi oddechowe. <strong>Anatomia funkcjonalna</strong> dwóch powiązanych układów.",
    domain: "cardiovascular-respiratory",
    icon: "❤️",
    color: "#f39c12",
  },
  {
    title: "Układ Pokarmowy",
    description:
      "Od jamy ustnej po odbytnicę &mdash; <strong>budowa i funkcja</strong> przewodu pokarmowego i gruczołów trawiennych.",
    domain: "digestive",
    icon: "🍽️",
    color: "#1abc9c",
  },
  {
    title: "Układ Moczowo-Płciowy",
    description:
      "Nerki, drogi moczowe, narządy rozrodcze. <strong>Pytania WF</strong> często łączą anatomię z fizjologią tych układów.",
    domain: "urinary-reproductive",
    icon: "🫘",
    color: "#e67e22",
  },
  {
    title: "Narządy Zmysłów",
    description:
      "Oko, ucho, skóra &mdash; <strong>budowa receptorów</strong> i dróg przewodzenia. Ostatni, ale równie ważny dział.",
    domain: "sensory",
    icon: "👁️",
    color: "#3498db",
  },
];

export function Topics() {
  return (
    <div className="topics">
      <h2>Działy egzaminu Medycyna</h2>
      <p className="topics__subtitle">
        Kliknij dział, aby przejść do interaktywnego podręcznika z pytaniami
        Active Recall
      </p>
      <div className="topics__topicboxes">
        {topics.map((topic) => (
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
              <div
                className="topicbox__description"
                dangerouslySetInnerHTML={{ __html: topic.description }}
              />
              <div className="topicbox__cta">Przejdź do działu →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
