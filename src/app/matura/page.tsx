import type { Metadata } from "next";
import Link from "next/link";
import { CkeStatusBadge } from "@/components/matura/CkeFormulaControls";

export const metadata: Metadata = {
  title: "Matura CKE — Podręczniki (Formuła 2023+ i 2015) oraz Arkusze",
  description:
    "Dedykowane centrum maturalne CKE: 4 kompletne podręczniki cyfrowe (Biologia i Chemia w Formule 2023+ oraz Formule 2015) oraz pełne arkusze CKE 1:1 (2015–2024) z wyciętymi rycinami i animowanym kluczem odpowiedzi.",
  openGraph: {
    siteName: "SportNotes",
  },
};

export default function MaturaPage() {
  return (
    <div className="l-container pb-10 pt-[max(2.25rem,calc(env(safe-area-inset-top)+1rem))]">
      {/* Top Global Navigation Strip */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            <span aria-hidden="true">⌂</span>
            Strona główna
          </Link>
          <Link
            href="/theory"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            <span aria-hidden="true">📖</span>
            Podręcznik (Teoria)
          </Link>
          <Link
            href="/atlas"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            <span aria-hidden="true">🫀</span>
            Atlas 3D Pro
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Link
            href="/matura/biologia"
            className="focus-ring rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            📝 Arkusze Biologia (1:1)
          </Link>
          <Link
            href="/matura/chemia"
            className="focus-ring rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            🧪 Arkusze Chemia (1:1)
          </Link>
        </div>
      </div>

      {/* Unified Top Breadcrumb Bar matching TheoryReaderPage */}
      <nav aria-label="Okruszki" className="pb-4 text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
          <li>
            <Link
              href="/"
              className="focus-ring rounded-sm hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Strona główna
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="truncate font-medium text-zinc-800 dark:text-zinc-200"
          >
            Trening Maturalny
          </li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <CkeStatusBadge status="core" />
          <CkeStatusBadge status="2023-only" />
          <CkeStatusBadge status="2015-only" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          🎓 Centrum Maturalne CKE — Podręczniki i Arkusze
        </h1>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Wybierz dedykowany podręcznik dopasowany do Twojej formuły egzaminacyjnej (Nowa Matura 2023+ lub Formuła 2015) lub rozwiąż pełne 60-punktowe arkusze CKE 1:1 z wyciętymi rycinami, interaktywnymi tabelami P/F i animowanym kluczem <em>lemo-opuscar</em>.
        </p>
      </div>

      <h2 className="mb-4 text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
        1. Podręczniki Maturalne CKE (Poziom Rozszerzony)
      </h2>
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href="/theory/biologia-matura-2023" className="matura-card">
          <div className="mb-2 flex items-center justify-between">
            <span className="matura-card__icon">🧬</span>
            <CkeStatusBadge status="2023-only" />
          </div>
          <h3 className="matura-card__title">Biologia — Matura Nowa Podstawa (2023+)</h3>
          <p className="matura-card__desc">
            11 działów CKE (Dział I–XI): od chemizmu życia i metabolizmu po inżynierię genetyczną (CRISPR-Cas9), ewolucję i ekologię.
          </p>
          <span className="matura-card__cta">Otwórz podręcznik 2023+ →</span>
        </Link>

        <Link href="/theory/biologia-matura-2015" className="matura-card">
          <div className="mb-2 flex items-center justify-between">
            <span className="matura-card__icon">🌿</span>
            <CkeStatusBadge status="2015-only" />
          </div>
          <h3 className="matura-card__title">Biologia — Matura Formuła 2015</h3>
          <p className="matura-card__desc">
            Pełny zakres Formuły 2015 (Dział I–XI), w tym rozszerzona systematyka bezkręgowców oraz szczegółowe cykle rozwojowe pasożytów.
          </p>
          <span className="matura-card__cta">Otwórz podręcznik 2015 →</span>
        </Link>

        <Link href="/theory/chemia-matura-2023" className="matura-card">
          <div className="mb-2 flex items-center justify-between">
            <span className="matura-card__icon">⚛️</span>
            <CkeStatusBadge status="2023-only" />
          </div>
          <h3 className="matura-card__title">Chemia — Matura Nowa Podstawa (2023+)</h3>
          <p className="matura-card__desc">
            13 działów CKE (Dział I–XIII): budowa atomu, Prawo Hessa, iloczyn rozpuszczalności Kso, elektrochemia oraz pełna chemia organiczna i stereochemia (Fischer, Haworth).
          </p>
          <span className="matura-card__cta">Otwórz podręcznik 2023+ →</span>
        </Link>

        <Link href="/theory/chemia-matura-2015" className="matura-card">
          <div className="mb-2 flex items-center justify-between">
            <span className="matura-card__icon">⚗️</span>
            <CkeStatusBadge status="2015-only" />
          </div>
          <h3 className="matura-card__title">Chemia — Matura Formuła 2015</h3>
          <p className="matura-card__desc">
            13 działów CKE dla zdających w Formule 2015: stechiometria, rozbudowane ciągi przemian nieorganicznych, równowagi jonowe i chemia organiczna.
          </p>
          <span className="matura-card__cta">Otwórz podręcznik 2015 →</span>
        </Link>
      </div>

      <h2 className="mb-4 text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
        2. Autentyczne Arkusze Egzaminacyjne CKE 1:1 (2015–2024)
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href="/matura/biologia" className="matura-card">
          <span className="matura-card__icon">📝</span>
          <h3 className="matura-card__title">Arkusze CKE — Biologia</h3>
          <p className="matura-card__desc">
            Kompletne 60-punktowe arkusze CKE (2023–2024) oraz roczniki 2015–2022: oryginalne strony arkuszy (WebP), interaktywne tabele P/F, podgląd 1:1 oraz 4-etapowy klucz CKE.
          </p>
          <span className="matura-card__cta">Przejdź do arkuszy 1:1 →</span>
        </Link>

        <Link href="/matura/chemia" className="matura-card">
          <span className="matura-card__icon">🧪</span>
          <h3 className="matura-card__title">Arkusze CKE — Chemia</h3>
          <p className="matura-card__desc">
            Kompletne 60-punktowe arkusze CKE (2023–2024) oraz roczniki 2015–2022: wykresy, wzory strukturalne, brudnopis stechiometryczny, widok Split-View 1:1 i animowany klucz CKE.
          </p>
          <span className="matura-card__cta">Przejdź do arkuszy 1:1 →</span>
        </Link>
      </div>
    </div>
  );
}
