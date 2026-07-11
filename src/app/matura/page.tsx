import Link from "next/link";

export default function MaturaPage() {
  return (
    <div className="l-container" style={{ padding: "60px 0" }}>
      <h1 style={{ fontFamily: "var(--font-pluto-light)", fontSize: 36, color: "#495354", marginBottom: 8 }}>
        Trening Maturalny — Formuła 2015
      </h1>
      <p style={{ fontSize: 16, color: "#666", marginBottom: 40, lineHeight: 1.6 }}>
        Rozwiązuj autentyczne arkusze CKE z poprzednich lat. Wybierz przedmiot i zacznij naukę z Active Recall.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 700 }}>
        <Link
          href="/matura/biologia"
          className="matura-card"
        >
          <span className="matura-card__icon">🧬</span>
          <h2 className="matura-card__title">Biologia</h2>
          <p className="matura-card__desc">
            Arkusze CKE 2015–2024 z kluczem odpowiedzi. Filtruj według roku i działu.
          </p>
          <span className="matura-card__cta">Przejdź do zadań →</span>
        </Link>

        <Link
          href="/matura/chemia"
          className="matura-card"
        >
          <span className="matura-card__icon">⚗️</span>
          <h2 className="matura-card__title">Chemia</h2>
          <p className="matura-card__desc">
            Arkusze CKE 2015–2024 z kluczem odpowiedzi. Filtruj według roku i działu.
          </p>
          <span className="matura-card__cta">Przejdź do zadań →</span>
        </Link>
      </div>
    </div>
  );
}
