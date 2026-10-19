import type { Metadata } from "next";
import Link from "next/link";
import { CkeStatusBadge } from "@/components/matura/CkeFormulaControls";

export const metadata: Metadata = {
  title: "Matura CKE — Podręczniki (Formuła 2023+ i 2015) oraz Arkusze",
  description:
    "Dedykowane centrum maturalne CKE: 4 kompletne podręczniki cyfrowe (Biologia i Chemia w Formule 2023+ oraz Formule 2015) z wytycznymi CKE, pułapkami egzaminacyjnymi i autentycznymi arkuszami.",
};

export default function MaturaPage() {
  return (
    <div className="l-container py-12">
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
          Wybierz dedykowany podręcznik dopasowany do Twojej formuły egzaminacyjnej (Nowa Matura 2023+ lub Formuła 2015). Każdy rozdział zawiera wymagania szczegółowe CKE, strategie czasowników operacyjnych (<em>wykaż, wyjaśnij, uzasadnij</em>) oraz pułapki klucza CKE.
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
        2. Autentyczne Arkusze Egzaminacyjne CKE (2015–2024)
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href="/matura/biologia" className="matura-card">
          <span className="matura-card__icon">📝</span>
          <h3 className="matura-card__title">Arkusze CKE — Biologia</h3>
          <p className="matura-card__desc">
            Zadania z autentycznych arkuszy CKE (2015–2024) z oficjalnym kluczem odpowiedzi. Filtruj według roku i działu.
          </p>
          <span className="matura-card__cta">Przejdź do zadań →</span>
        </Link>

        <Link href="/matura/chemia" className="matura-card">
          <span className="matura-card__icon">🧪</span>
          <h3 className="matura-card__title">Arkusze CKE — Chemia</h3>
          <p className="matura-card__desc">
            Zadania z autentycznych arkuszy CKE (2015–2024) z oficjalnym kluczem odpowiedzi. Filtruj według roku i działu.
          </p>
          <span className="matura-card__cta">Przejdź do zadań →</span>
        </Link>
      </div>
    </div>
  );
}

