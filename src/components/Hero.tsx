import Link from "next/link";

export function Hero() {
  return (
    <div className="l-hero">
      <div className="l-container">
        <div className="hero">
          <h1>
            Inteligentny podręcznik
            <br className="hidden-md" />
            <strong> do anatomii</strong>
          </h1>
          <p>
            Stworzony pod ramy egzaminu <strong>Anatomia 2026 WF</strong>.
            Oparty na sprawdzonych źródłach — Bochenek, Reicher, Lewiński.
          </p>
          <Link href="/textbook" className="btn btn-primary">
            Zacznij naukę za darmo
          </Link>
        </div>
      </div>
    </div>
  );
}
