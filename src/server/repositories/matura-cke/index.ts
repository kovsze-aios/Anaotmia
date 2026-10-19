import type {
  CkeFormula,
  CkeMetadata,
  CkeTopicStatus,
  TextbookDomain,
  TextbookSection,
} from "../../models";
import { disambiguateSectionTitles } from "../sectionTitles";
import type { StructuredChapter, TextbookPage, TableOfContentsItem } from "@/types/theory";
import {
  BIOLOGY_CKE_CURRICULUM,
  CHEMISTRY_CKE_CURRICULUM,
  CKE_OPERATIONAL_VERBS_GUIDE,
  type CkeSectionCurriculum,
} from "@/data/cke-curricula";
import * as bioGenerated from "@/data/biologia/dzialy";
import * as chemGenerated from "@/data/chemia/dzialy";

interface ChapterEntry {
  id: string;
  data: StructuredChapter;
}

const bioChaptersMap = bioGenerated as unknown as Record<string, ChapterEntry[] | undefined>;
const chemChaptersMap = chemGenerated as unknown as Record<string, ChapterEntry[] | undefined>;

const BIO_ICONS: Record<string, string> = {
  "Dział I": "🧪",
  "Dział II": "🔬",
  "Dział III": "⚡",
  "Dział IV": "🌿",
  "Dział V": "🫀",
  "Dział VI": "🧬",
  "Dział VII": "🧮",
  "Dział VIII": "🧫",
  "Dział IX": "🦴",
  "Dział X": "🌍",
  "Dział XI": "🛡️",
};

const CHEM_ICONS: Record<string, string> = {
  "Dział I": "⚛️",
  "Dział II": "🔗",
  "Dział III": "🔥",
  "Dział IV": "💧",
  "Dział V": "🧪",
  "Dział VI": "🔋",
  "Dział VII": "🏛️",
  "Dział VIII": "💎",
  "Dział IX": "⛽",
  "Dział X": "🍶",
  "Dział XI": "🧫",
  "Dział XII": "🕯️",
  "Dział XIII": "🧬",
};

function excerpt(html: string, limit = 300): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  const cut = text.lastIndexOf(" ", limit);
  return text.slice(0, cut > 0 ? cut : limit) + "…";
}

/**
 * Builds the fallback final microlearning page "🎯 Wytyczne CKE i Pewniaki Maturalne"
 * from the ground-truth CKE section curriculum whenever a chapter has not yet
 * been enriched by `scripts/enrich_cke_deepseek.py`.
 */
export function buildCkeGuidelinesPageHtml(
  sectionCurr: CkeSectionCurriculum,
  chapterTitle: string,
  meta: CkeMetadata,
): string {
  const statusBadge =
    meta.status === "2023-only"
      ? "NOWA MATURA 2023+ (Wyłączone lub ograniczone w Formule 2015)"
      : meta.status === "2015-only"
        ? "FORMUŁA 2015 (Szczegółowe wymaganie archiwalne CKE)"
        : "RDZEŃ CKE (Obowiązuje w Formule 2015 oraz Formule 2023+)";

  const reqItems = sectionCurr.requirements
    .map(
      (r) =>
        `<li><strong>[${r.code}]</strong> ${r.description}${
          r.status === "2023-only"
            ? " <em>(Kluczowe w Formule 2023+ — [Niewymagane w Formule 2015])</em>"
            : r.status === "2015-only"
              ? " <em>(Wymaganie specyficzne dla Formuły 2015)</em>"
              : ""
        }</li>`,
    )
    .join("");

  const trapItems = sectionCurr.examTraps
    .map((trap) => `<li>${trap}</li>`)
    .join("");

  const verbItems = [
    ...sectionCurr.operationalVerbs.map(
      (v) =>
        `<li><strong>${v.verb}:</strong> ${v.rule}<br><em>Wzorzec odpowiedzi CKE:</em> „${v.example}”</li>`,
    ),
    ...CKE_OPERATIONAL_VERBS_GUIDE.slice(0, 3).map(
      (v) => `<li><strong>${v.verb}:</strong> ${v.rule}</li>`,
    ),
  ].join("");

  return [
    `<h3 id="wytyczne-cke-i-pewniaki-maturalne">🎯 Wytyczne CKE i Pewniaki Maturalne</h3>`,
    `<p><strong>Status w podstawie programowej:</strong> <em>${statusBadge}</em> — <strong>${sectionCurr.sectionCode}</strong> (${meta.requirementCodes.join(", ")}). Temat: <strong>${chapterTitle}</strong>.</p>`,
    `<h4>1. Wymagania szczegółowe CKE dla tego działu</h4>`,
    `<ul>${reqItems}</ul>`,
    `<h4>2. Różnice między Formułą 2015 a Formułą 2023+</h4>`,
    `<ul>`,
    `<li><strong>Matura Formuła 2023+ (Nowa Podstawa):</strong> ${sectionCurr.formulaDifferences.formula2023}</li>`,
    `<li><strong>Matura Formuła 2015:</strong> ${sectionCurr.formulaDifferences.formula2015}</li>`,
    `</ul>`,
    `<h4>3. Pułapki CKE i najczęstsze błędy egzaminacyjne</h4>`,
    `<ul>${trapItems}</ul>`,
    `<h4>4. Jak odpowiadać pod klucz CKE — czasowniki operacyjne</h4>`,
    `<ul>${verbItems}</ul>`,
  ].join("\n");
}

function classifyBiologyChapter(id: string, title: string): CkeSectionCurriculum {
  const lower = `${id} ${title}`.toLowerCase();

  if (
    lower.includes("crispr") ||
    lower.includes("pcr") ||
    lower.includes("elektroforez") ||
    lower.includes("biotechnolog") ||
    lower.includes("gmo") ||
    lower.includes("transgenicz") ||
    lower.includes("klonowani") ||
    lower.includes("inżynieri") ||
    lower.includes("inzynieri")
  ) {
    return BIOLOGY_CKE_CURRICULUM[7]; // Dział VIII
  }
  if (
    lower.includes("ochrona przyrody") ||
    lower.includes("bioróżnorodno") ||
    lower.includes("bioroznorodno") ||
    lower.includes(" różnorodnoś") ||
    lower.includes("park narodow") ||
    lower.includes("natura 2000") ||
    lower.includes("eutrofizacj") ||
    lower.includes("gatunki inwazyjne") ||
    lower.includes("konwencj")
  ) {
    return BIOLOGY_CKE_CURRICULUM[10]; // Dział XI
  }
  if (
    lower.includes("ekologi") ||
    lower.includes("populacj") ||
    lower.includes("ekosystem") ||
    lower.includes("troficzn") ||
    lower.includes("sukcesj") ||
    lower.includes("obieg ") ||
    lower.includes("tolerancj") ||
    lower.includes("drapież") ||
    lower.includes("konkurencj") ||
    lower.includes("symbioz") ||
    lower.includes("mutualizm")
  ) {
    return BIOLOGY_CKE_CURRICULUM[9]; // Dział X
  }
  if (
    lower.includes("ewolucj") ||
    lower.includes("dobór ") ||
    lower.includes("dobor ") ||
    lower.includes("dryf ") ||
    lower.includes("specjacj") ||
    lower.includes("antropogenez") ||
    lower.includes("homologicz") ||
    lower.includes("filogenez") ||
    lower.includes("darwin")
  ) {
    return BIOLOGY_CKE_CURRICULUM[8]; // Dział IX
  }
  if (
    lower.includes("mendl") ||
    lower.includes("krzyżów") ||
    lower.includes("krzyzow") ||
    lower.includes("dziedziczeni") ||
    lower.includes("mutacj") ||
    lower.includes("crossing") ||
    lower.includes("aneuploid") ||
    lower.includes("trisomi") ||
    lower.includes("rodowód") ||
    lower.includes("rodowod") ||
    lower.includes("hardy") ||
    lower.includes("weinberg") ||
    lower.includes("allel")
  ) {
    return BIOLOGY_CKE_CURRICULUM[6]; // Dział VII
  }
  if (
    lower.includes("replikacj") ||
    lower.includes("transkrypcj") ||
    lower.includes("translacj") ||
    lower.includes("kod genetyczn") ||
    lower.includes("operon") ||
    lower.includes("splicing") ||
    lower.includes("ekspresj") ||
    lower.includes("chromaty") ||
    lower.includes("histon")
  ) {
    return BIOLOGY_CKE_CURRICULUM[5]; // Dział VI
  }
  if (
    id.startsWith("bio3-") ||
    lower.includes("człowiek") ||
    lower.includes("układ ") ||
    lower.includes("serce") ||
    lower.includes("krew") ||
    lower.includes("płuc") ||
    lower.includes("nefron") ||
    lower.includes("nerk") ||
    lower.includes("neuron") ||
    lower.includes("synaps") ||
    lower.includes("hormon") ||
    lower.includes("trawieni") ||
    lower.includes("odpornoś") ||
    lower.includes("limfocyt") ||
    lower.includes("mięśni") ||
    lower.includes("szkielet")
  ) {
    return BIOLOGY_CKE_CURRICULUM[4]; // Dział V
  }
  if (
    id.startsWith("bio2-") ||
    lower.includes("wirus") ||
    lower.includes("bakteri") ||
    lower.includes("protist") ||
    lower.includes("grzyb") ||
    lower.includes("porost") ||
    lower.includes("mszak") ||
    lower.includes("paprotnik") ||
    lower.includes("roślin") ||
    lower.includes("bezkręgow") ||
    lower.includes("stawonog") ||
    lower.includes("mięczak") ||
    lower.includes("pierścienic") ||
    lower.includes("płazińc") ||
    lower.includes("nicieni") ||
    lower.includes("strunowc") ||
    lower.includes("kręgowc") ||
    lower.includes("ryby") ||
    lower.includes("płazy") ||
    lower.includes("gady") ||
    lower.includes("ptaki") ||
    lower.includes("ssaki")
  ) {
    return BIOLOGY_CKE_CURRICULUM[3]; // Dział IV
  }
  if (
    lower.includes("enzym") ||
    lower.includes("metabolizm") ||
    lower.includes("oddychani") ||
    lower.includes("glikoliz") ||
    lower.includes("krebs") ||
    lower.includes("fermentacj") ||
    lower.includes("fotosyntez") ||
    lower.includes("calvin") ||
    lower.includes("chemosyntez") ||
    lower.includes("atp")
  ) {
    return BIOLOGY_CKE_CURRICULUM[2]; // Dział III
  }
  if (
    lower.includes("białk") ||
    lower.includes("węglowodan") ||
    lower.includes("cukier") ||
    lower.includes("cukr") ||
    lower.includes("lipid") ||
    lower.includes("tłuszcz") ||
    lower.includes("woda ") ||
    lower.includes("wody") ||
    lower.includes("makroelement") ||
    lower.includes("mikroelement") ||
    lower.includes("składniki chemiczne") ||
    lower.includes("chemizm")
  ) {
    return BIOLOGY_CKE_CURRICULUM[0]; // Dział I
  }
  if (id.startsWith("bio1-")) {
    return BIOLOGY_CKE_CURRICULUM[1]; // Dział II
  }
  if (id.startsWith("bio4-")) {
    return BIOLOGY_CKE_CURRICULUM[5]; // Dział VI
  }
  return BIOLOGY_CKE_CURRICULUM[1];
}

function classifyChemistryChapter(id: string, title: string): CkeSectionCurriculum {
  const lower = `${id} ${title}`.toLowerCase();

  if (
    lower.includes("amin") ||
    lower.includes("białk") ||
    lower.includes("peptyd") ||
    lower.includes("sacharyd") ||
    lower.includes("glukoz") ||
    lower.includes("fruktoz") ||
    lower.includes("haworth")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[12]; // Dział XIII
  }
  if (
    lower.includes("karboksylow") ||
    lower.includes("estr") ||
    lower.includes("tłuszcz") ||
    lower.includes("mydł") ||
    lower.includes("fischer") ||
    lower.includes("optyczn") ||
    lower.includes("chiral")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[11]; // Dział XII
  }
  if (
    lower.includes("aldehyd") ||
    lower.includes("keton") ||
    lower.includes("karbonylow") ||
    lower.includes("tollens") ||
    lower.includes("trommer")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[10]; // Dział XI
  }
  if (
    lower.includes("alkohol") ||
    lower.includes("fenol") ||
    lower.includes("glicerol") ||
    lower.includes("glikol")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[9]; // Dział X
  }
  if (
    lower.includes("węglowodor") ||
    lower.includes("alkan") ||
    lower.includes("alken") ||
    lower.includes("alkin") ||
    lower.includes("benzen") ||
    lower.includes("aromatyczn")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[8]; // Dział IX
  }
  if (
    lower.includes("roztwor") ||
    lower.includes("roztwór") ||
    lower.includes("stężeni") ||
    lower.includes("rozpuszczalnoś") ||
    lower.includes("koloid") ||
    lower.includes("raoult") ||
    lower.includes("osmotyczn") ||
    lower.includes("cieczy") ||
    lower.includes("fazow")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[3]; // Dział IV
  }
  if (
    lower.includes("ph") ||
    lower.includes("dysocjacj") ||
    lower.includes("hydroliz") ||
    lower.includes("bufor") ||
    lower.includes("ostwald") ||
    lower.includes("iloczyn rozpuszczalności") ||
    lower.includes("miareczkowani")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[4]; // Dział V
  }
  if (
    lower.includes("redoks") ||
    lower.includes("utleniani") ||
    lower.includes("ogniwo") ||
    lower.includes("elektroliz") ||
    lower.includes("elektrochemi") ||
    lower.includes("potencjał")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[5]; // Dział VI
  }
  if (
    lower.includes("tlenk") ||
    lower.includes("wodorotlenk") ||
    lower.includes("amfoterycz") ||
    lower.includes("sole") ||
    lower.includes("systematyka")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[6]; // Dział VII
  }
  if (
    lower.includes("litowc") ||
    lower.includes("berylowc") ||
    lower.includes("fluorowc") ||
    lower.includes("chrom") ||
    lower.includes("mangan") ||
    lower.includes("żelaz") ||
    lower.includes("miedź") ||
    lower.includes("widm") ||
    lower.includes("spektroskop") ||
    lower.includes("magnetyczn")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[7]; // Dział VIII
  }
  if (
    lower.includes("termodynamik") ||
    lower.includes("entalpi") ||
    lower.includes("entropi") ||
    lower.includes("hessa") ||
    lower.includes("równowag") ||
    lower.includes("rownowag") ||
    lower.includes("kinetyk") ||
    lower.includes("szybkoś") ||
    lower.includes("kataliz") ||
    lower.includes("statyka")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[2]; // Dział III
  }
  if (
    lower.includes("wiązan") ||
    lower.includes("wiazan") ||
    lower.includes("hybrydyzacj") ||
    lower.includes("orbitali") ||
    lower.includes("kryształ") ||
    lower.includes("krysztal") ||
    lower.includes("krystalicz") ||
    lower.includes("sieci") ||
    lower.includes("wodorow") ||
    lower.includes("cząsteczk")
  ) {
    return CHEMISTRY_CKE_CURRICULUM[1]; // Dział II
  }
  return CHEMISTRY_CKE_CURRICULUM[0]; // Dział I
}

/**
 * Built-in seed chapters for formula-specific (`2015-only` / `2023-only`) topics
 * and Organic Chemistry Działy V–XIII so that every CKE section in both Biology
 * and Chemistry has rich, exam-ready content even before `enrich_cke_deepseek.py` runs.
 */
const BIOLOGY_SEED_CHAPTERS: Array<{
  id: string;
  sectionCode: string;
  status: CkeTopicStatus;
  formulas: CkeFormula[];
  requirementCodes: string[];
  chapterTitle: string;
  htmlPages: string[];
  quiz: { question: string; answer: string }[];
}> = [
  {
    id: "cke-bio-seed-pasozyty-2015",
    sectionCode: "Dział IV",
    status: "2015-only",
    formulas: ["2015"],
    requirementCodes: ["IV.4.b"],
    chapterTitle: "Cykle rozwojowe pasożytów: motylica wątrobowa, bruzdogłowiec szeroki i systematyka bezkręgowców [Formuła 2015]",
    htmlPages: [
      `<h3 id="cykle-rozwojowe-plazincow-pasozytniczych">Cykle rozwojowe płazińców pasożytniczych (Wymaganie Formuły 2015)</h3>
      <p>W podstawie programowej <strong>Formuły 2015</strong> szczegółowa znajomość cykli rozwojowych przywr wnętrzniaków (<em>Digenea</em>) oraz tasiemców (<em>Cestoda</em>) wraz z kolejnością form larwalnych należy do klasycznych wymagań egzaminacyjnych.</p>
      <h4>Motylica wątrobowa (<em>Fasciola hepatica</em>)</h4>
      <ul>
        <li><strong>Żywiciel pośredni:</strong> ślimak wodny — błotniarka moczarowa (<em>Galba truncatula</em>).</li>
        <li><strong>Żywiciel ostateczny:</strong> ssaki roślinożerne (bydło, owce) oraz człowiek (zarażenie przez picie nieprzegotowanej wody lub zjedzenie roślin wodnych z przetrwalnikowymi <strong>metacerkariami</strong>).</li>
        <li><strong>Kolejność stadiów rozwojowych:</strong> jajo → <strong>miracidium</strong> (dziwadełko, urzęsiona larwa wnikająca do ślimaka) → <strong>sporocysta</strong> → <strong>redia</strong> → <strong>cerkaria</strong> (larwa z ogonkiem opuszczająca ślimaka) → <strong>metacerkaria</strong> (forma inwazyjna otorbiona na roślinach) → postać dorosła (marita) w przewodach żółciowych.</li>
      </ul>
      <h4>Bruzdogłowiec szeroki (<em>Diphyllobothrium latum</em>)</h4>
      <ul>
        <li><strong>I żywiciel pośredni:</strong> widłonóg (skorupiak planktonowy, np. oczlik) — rozwija się w nim <strong>procerkoid</strong>.</li>
        <li><strong>II żywiciel pośredni:</strong> ryba słodkowodna — w jej mięśniach rozwija się forma inwazyjna dla człowieka: <strong>plerocerkoid</strong>.</li>
        <li><strong>Żywiciel ostateczny:</strong> ssaki rybożerne i człowiek (zarażenie przez zjedzenie surowego lub niedogotowanego mięsa ryb).</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Wyjaśnij, dlaczego w cyklu rozwojowym motylicy wątrobowej w organizmie błotniarki moczarowej z jednego miracidium może powstać wiele cerkarii.",
        answer: "Ponieważ stadia sporocysty i redii rozmnażają się dzieworodnie (parturientnie/bezpłciowo wewnątrz ślimaka), co zwiększa liczbę larw i szansę na zamknięcie cyklu rozwojowego pasożyta.",
      },
    ],
  },
  {
    id: "cke-bio-seed-crispr-2023",
    sectionCode: "Dział VIII",
    status: "2023-only",
    formulas: ["2023"],
    requirementCodes: ["VIII.4.a"],
    chapterTitle: "Precyzyjna edycja genomu: system CRISPR-Cas9 oraz sekwencjonowanie NGS [Nowa Matura 2023+]",
    htmlPages: [
      `<h3 id="mechanizm-edycji-genomu-crispr-cas9">Mechanizm edycji genomu w systemie CRISPR-Cas9</h3>
      <p>System <strong>CRISPR-Cas9</strong> wywodzi się z naturalnego mechanizmu obrony adaptacyjnej bakterii i archeowców przed bakteriofagami. W inżynierii genetycznej stanowi precyzyjne narzędzie molekularne pozwalające na celowane przecięcie i modyfikację wybranej sekwencji DNA w żywej komórce.</p>
      <h4>Kluczowe elementy układu CRISPR-Cas9</h4>
      <ul>
        <li><strong>Cząsteczka gRNA (guide RNA / sgRNA):</strong> jednoniciowy RNA zawierający sekwencję ok. 20 nukleotydów komplementarną do docelowego fragmentu genomowego DNA. Odpowiada za swoiste rozpoznanie miejsca cięcia na zasadzie komplementarności zasad.</li>
        <li><strong>Białko Cas9 (endonukleaza):</strong> enzym rozpoznający kompleks gRNA–DNA (w sąsiedztwie krótkiej sekwencji <strong>PAM</strong>) i katalizujący hydrolizę wiązań fosfodiestrowych w <strong>obu niciach DNA</strong> (dwuniciowe pęknięcie DSB).</li>
        <li><strong>Naprawa DNA przez komórkę:</strong> niehomologiczne scalanie końców (<strong>NHEJ</strong> — prowadzi do insercji/delecji i wyłączenia genu, tzw. <em>knock-out</em>) lub naprawa ukierunkowana na homologię (<strong>HDR</strong> — z użyciem dostarczonej matrycy DNA pozwala na wprowadzenie poprawnej wersji genu).</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Wyjaśnij, w jaki sposób zmiana sekwencji nukleotydowej cząsteczki gRNA wpływa na działanie kompleksu CRISPR-Cas9.",
        answer: "Sekwencja gRNA warunkuje komplementarne wiązanie kompleksu z docelowym fragmentem DNA; zmiana sekwencji gRNA kieruje endonukleazę Cas9 w inne miejsce genomu o sekwencji komplementarnej do nowego gRNA.",
      },
    ],
  },
];

const CHEMISTRY_SEED_CHAPTERS: Array<{
  id: string;
  sectionCode: string;
  status: CkeTopicStatus;
  formulas: CkeFormula[];
  requirementCodes: string[];
  chapterTitle: string;
  htmlPages: string[];
  quiz: { question: string; answer: string }[];
}> = [
  {
    id: "cke-chem-seed-prawo-hessa-2023",
    sectionCode: "Dział III",
    status: "2023-only",
    formulas: ["2023"],
    requirementCodes: ["III.3.a"],
    chapterTitle: "Obliczenia termochemiczne — Prawo Hessa, entalpia tworzenia i spalania [Nowa Matura 2023+]",
    htmlPages: [
      `<h3 id="prawo-hessa-i-cykle-termochemiczne">Prawo Hessa i obliczenia standardowej entalpii reakcji</h3>
      <p>Zgodnie z <strong>prawem Hessa</strong> efekt cieplny reakcji chemicznej (zmiana entalpii <strong>ΔH°</strong>) prowadzonej w stałym ciśnieniu lub w stałej objętości zależy wyłącznie od stanu początkowego (substratów) i stanu końcowego (produktów), a nie zależy od drogi (liczby etapów pośrednich), jaką biegnie reakcja.</p>
      <h4>Dwa główne wzory obliczeniowe na maturze CKE (Formuła 2023+)</h4>
      <ul>
        <li><strong>Z entalpii tworzenia (ΔH°tw):</strong> ΔH°reakcji = ∑ n · ΔH°tw(produktów) − ∑ m · ΔH°tw(substratów). Pamiętaj, że standardowa entalpia tworzenia pierwiastków w trwałym stanie podstawowym (np. O2(g), H2(g), C(grafit), N2(g)) wynosi <strong>0 kJ/mol</strong>!</li>
        <li><strong>Z entalpii spalania (ΔH°sp):</strong> ΔH°reakcji = ∑ m · ΔH°sp(substratów) − ∑ n · ΔH°sp(produktów).</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Wyjaśnij, dlaczego standardowa entalpia tworzenia tlenu cząsteczkowego O2(g) wynosi 0 kJ/mol, natomiast ozonu O3(g) jest dodatnia.",
        answer: "Z definicji standardowa entalpia tworzenia pierwiastka w jego najtrwalszej odmianie alotropowej w warunkach standardowych (dla tlenu jest to O2(g)) wynosi 0 kJ/mol; przemiana 3 O2(g) → 2 O3(g) jest procesem endoenergetycznym wymagającym dostarczenia energii.",
      },
    ],
  },
  {
    id: "cke-chem-seed-kso-hydroliza-2023",
    sectionCode: "Dział V",
    status: "2023-only",
    formulas: ["2023"],
    requirementCodes: ["V.4.a"],
    chapterTitle: "Iloczyn rozpuszczalności (Kso), wytrącanie osadów i efekt wspólnego jonu [Nowa Matura 2023+]",
    htmlPages: [
      `<h3 id="iloczyn-rozpuszczalnosci-kso">Iloczyn rozpuszczalności (Kso) i warunek strącenia osadu</h3>
      <p>W nasyconym roztworze trudno rozpuszczalnego elektrolitu ustala się stan równowagi dynamicznej między osadem a jonami w roztworze: <strong>M_aX_b(s) ⇄ a M^(b+)(aq) + b X^(a-)(aq)</strong>. Wyrażenie na <strong>iloczyn rozpuszczalności Kso</strong> ma postać: <strong>Kso = [M^(b+)]^a · [X^(a-)]^b</strong>.</p>
      <h4>Zależność między Kso a rozpuszczalnością molową S (mol/dm³)</h4>
      <ul>
        <li><strong>Elektrolit typu AB</strong> (np. AgCl, BaSO4, CaCO3): Kso = S · S = <strong>S²</strong>.</li>
        <li><strong>Elektrolit typu AB2 lub A2B</strong> (np. PbI2, CaF2, Mg(OH)2, Ag2CrO4): Kso = S · (2S)² = <strong>4S³</strong>.</li>
        <li><strong>Elektrolit typu AB3 lub A3B</strong> (np. Fe(OH)3, Al(OH)3, Ag3PO4): Kso = S · (3S)³ = <strong>27S⁴</strong>.</li>
        <li><strong>Warunek wytrącenia osadu:</strong> Osad wytrąca się wówczas, gdy iloczyn stężeń jonów (podniesionych do odpowiednich potęg stechiometrycznych) po zmieszaniu roztworów przekroczy wartość Kso: <strong>I_j > Kso</strong>.</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Określ, jak zmieni się rozpuszczalność molowa trudno rozpuszczalnego chlorku srebra (AgCl) po dodaniu do jego nasyconego roztworu niewielkiej ilości stałego chlorku sodu (NaCl). Odpowiedź uzasadnij.",
        answer: "Rozpuszczalność molowa AgCl zmaleje (część AgCl wytrąci się w postaci osadu), ponieważ wprowadzenie wspólnego jonu Cl- z dysocjacji NaCl zgodnie z regułą przekory przesuwa równowagę AgCl(s) ⇄ Ag+(aq) + Cl-(aq) w lewo, gdyż w stałej temperaturze iloczyn [Ag+][Cl-] = Kso jest stały.",
      },
    ],
  },
  {
    id: "cke-chem-seed-ph-hydroliza-core",
    sectionCode: "Dział V",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["V.1.a", "V.2.a", "V.3.a"],
    chapterTitle: "Teorie kwasów i zasad (Brønsteda, Lewisa), skala pH, prawo Ostwalda, hydroliza soli i bufory",
    htmlPages: [
      `<h3 id="teorie-kwasow-i-zasad-oraz-hydroliza">Teorie kwasów i zasad, pH, hydroliza i roztwory buforowe</h3>
      <p>Według <strong>teorii Brønsteda-Lowry’ego</strong> kwasem jest donor protonu (H+), a zasadą akceptor protonu (H+). Reakcja kwas–zasada polega na przeniesieniu protonu między dwiema sprzężonymi parami kwas–zasada. Według <strong>teorii Lewisa</strong> kwasem jest akceptor pary elektronowej (posiada wolny orbital, np. BF3, AlCl3, H+, Cu2+), a zasadą donor wolnej pary elektronowej (np. NH3, H2O, OH-, Cl-).</p>
      <h4>Hydroliza soli i odczyn roztworów wodnych</h4>
      <ul>
        <li><strong>Sól mocnego kwasu i mocnej zasady</strong> (np. NaCl, KNO3, Na2SO4): nie ulega hydrolizie, odczyn <strong>obojętny (pH = 7)</strong>.</li>
        <li><strong>Sól słabego kwasu i mocnej zasady</strong> (np. CH3COONa, Na2CO3, KCN, Na2S, KNO2): ulega hydrolizie anionowej (np. CO3^2- + H2O ⇄ HCO3- + OH-), odczyn <strong>zasadowy (pH > 7)</strong>.</li>
        <li><strong>Sól mocnego kwasu i słabej zasady</strong> (np. NH4Cl, NH4NO3, FeCl3, AlCl3, CuSO4, ZnCl2): ulega hydrolizie kationowej (np. NH4+ + H2O ⇄ NH3·H2O + H3O+), odczyn <strong>kwasowy (pH < 7)</strong>.</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Zapisz w formie jonowej skróconej równanie reakcji decydującej o odczynie wodnego roztworu azotanu(V) amonu (NH4NO3) oraz określ ten odczyn.",
        answer: "Odczyn kwasowy (pH < 7). Równanie hydrolizy kationowej: NH4+ + H2O ⇄ NH3·H2O + H3O+ (lub NH4+ ⇄ NH3 + H+).",
      },
    ],
  },
  {
    id: "cke-chem-seed-redoks-ogniwa-core",
    sectionCode: "Dział VI",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["VI.1.a", "VI.2.a", "VI.3.a"],
    chapterTitle: "Reakcje redoks (KMnO4, K2Cr2O7, HNO3), szereg napięciowy metali, ogniwa galwaniczne i elektroliza",
    htmlPages: [
      `<h3 id="reakcje-redoks-i-elektrochemia">Reakcje utleniania-redukcji i ogniwa galwaniczne</h3>
      <p>W reakcjach redoks <strong>utleniacz</strong> przyjmuje elektrony (jego stopień utlenienia maleje — ulega redukcji), a <strong>reduktor</strong> oddaje elektrony (jego stopień utlenienia rośnie — ulega utlenianiu).</p>
      <h4>Wpływ pH na redukcję jonów MnO4- oraz Cr2O7^2-</h4>
      <ul>
        <li><strong>MnO4- (fioletowy, Mn +VII) w środowisku kwasowym (H+):</strong> MnO4- + 8H+ + 5e- → <strong>Mn2+</strong> (bezbarwny) + 4H2O.</li>
        <li><strong>MnO4- w środowisku obojętnym/słabo zasadowym:</strong> MnO4- + 2H2O + 3e- → <strong>MnO2↓</strong> (brunatny osad) + 4OH-.</li>
        <li><strong>MnO4- w środowisku silnie zasadowym (stęż. OH-):</strong> MnO4- + e- → <strong>MnO4^2-</strong> (zielony roztwór).</li>
        <li><strong>Cr2O7^2- (pomarańczowy, Cr +VI) w środowisku kwasowym:</strong> Cr2O7^2- + 14H+ + 6e- → <strong>2Cr3+</strong> (zielony) + 7H2O.</li>
      </ul>
      <h4>Ogniwa galwaniczne i SEM</h4>
      <p>W ogniwie galwanicznym półogniwo o niższym potencjale standardowym (<strong>E°A < E°K</strong>) stanowi <strong>anodę (⊖)</strong>, na której zachodzi utlenianie, natomiast półogniwo o wyższym potencjale stanowi <strong>katodę (⊕)</strong>, na której zachodzi redukcja. Siła elektromotoryczna wynosi: <strong>SEM = E°katody − E°anody > 0</strong>.</p>`,
    ],
    quiz: [
      {
        question: "Oblicz SEM ogniwa zbudowanego z półogniwa srebrowego Ag|Ag+ (E° = +0,80 V) oraz niklowego Ni|Ni2+ (E° = -0,26 V) i zapisz schemat tego ogniwa.",
        answer: "SEM = 0,80 V - (-0,26 V) = 1,06 V. Schemat ogniwa: ⊖ Ni(s) | Ni2+(aq) || Ag+(aq) | Ag(s) ⊕.",
      },
    ],
  },
  {
    id: "cke-chem-seed-systematyka-core",
    sectionCode: "Dział VII",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["VII.1.a", "VII.2.a", "VII.3.a"],
    chapterTitle: "Systematyka związków nieorganicznych: tlenki, wodorotlenki, amfoteryczność i hydroksokompleksy",
    htmlPages: [
      `<h3 id="systematyka-i-amfoterycznosc">Amfoteryczność tlenków i wodorotlenków oraz metody otrzymywania soli</h3>
      <p>Związki amfoteryczne (m.in. <strong>Al2O3, ZnO, Cr2O3, BeO, PbO, SnO</strong> oraz wodorotlenki <strong>Al(OH)3, Zn(OH)2, Cr(OH)3, Cu(OH)2</strong>) reagują zarówno z mocnymi kwasami, jak i z mocnymi zasadami.</p>
      <h4>Wzorcowe równania jonowe dla wodorotlenku glinu i chromu(III)</h4>
      <ul>
        <li><strong>Z mocnym kwasem (np. HCl):</strong> Al(OH)3 + 3H+ → Al3+ + 3H2O; Cr(OH)3 + 3H+ → Cr3+ + 3H2O.</li>
        <li><strong>Z mocną zasadą (np. NaOH aq):</strong> Al(OH)3 + OH- → [Al(OH)4]- (jon tetrahydroksoglinianowy); Cr(OH)3 + 3OH- → [Cr(OH)6]^3- (lub [Cr(OH)4]- — szmaragdowozielony roztwór).</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Wyjaśnij, dlaczego do wykazania charakteru amfoterycznego Al(OH)3 nie należy stosować wody amoniakalnej NH3(aq) zamiast roztworu NaOH.",
        answer: "Woda amoniakalna jest słabą zasadą (dostarcza zbyt małe stężenie jonów OH-) i jony Al3+ nie tworzą trwałych amminakompleksów w roztworze wodnym, dlatego osad Al(OH)3 nie ulega roztworzeniu w nadmiarze NH3(aq).",
      },
    ],
  },
  {
    id: "cke-chem-seed-ciagi-nieorganiczne-2015",
    sectionCode: "Dział VII",
    status: "2015-only",
    formulas: ["2015"],
    requirementCodes: ["VII.4.a"],
    chapterTitle: "Wieloetapowe schematy przemian związków nieorganicznych i wodorosole [Formuła 2015]",
    htmlPages: [
      `<h3 id="schematy-przemian-nieorganicznych-2015">Klasyczne wieloetapowe schematy przemian nieorganicznych</h3>
      <p>W arkuszach <strong>Formuły 2015</strong> regularnie występują rozbudowane schematy przemian nieorganicznych obejmujące przejścia między solami obojętnymi, wodorosolami, tlenkami i hydroksokompleksami.</p>
      <h4>Kluczowe przejścia: sól obojętna ⇄ wodorosól</h4>
      <ul>
        <li><strong>Przejście węglanu w wodorowęglan:</strong> CaCO3↓ + CO2 + H2O ⇄ Ca(HCO3)2 (roztwarzanie osadu węglanu wapnia pod wpływem nadmiaru CO2 — twardość przemijająca wody).</li>
        <li><strong>Przejście wodorosoli w sól obojętną przez dodanie zasady:</strong> Ca(HCO3)2 + Ca(OH)2 → 2CaCO3↓ + 2H2O; NaH2PO4 + 2NaOH → Na3PO4 + 2H2O.</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Zapisz w formie jonowej skróconej równanie reakcji roztwarzania osadu węglanu wapnia w wodzie nasyconej dwutlenkiem węgla.",
        answer: "CaCO3 + CO2 + H2O → Ca2+ + 2HCO3-.",
      },
    ],
  },
  {
    id: "cke-chem-seed-weglowodory-core",
    sectionCode: "Dział IX",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["IX.1.a", "IX.2.a", "IX.3.a", "IX.4.a"],
    chapterTitle: "Węglowodory alifatyczne i aromatyczne: alkany, alkeny, alkiny, benzen i toluen (SR, AE, SE)",
    htmlPages: [
      `<h3 id="reakcje-weglowodorow-i-mechanizmy">Mechanizmy reakcji węglowodorów (SR, AE, SE) i reguła Markownikowa</h3>
      <p>Węglowodory dzielimy na nasycone (alkany, cykloalkany — wyłącznie wiązania pojedyncze σ, hybrydyzacja sp3), nienasycone (alkeny z wiązaniem C=C sp2, alkiny z wiązaniem C≡C sp) oraz aromatyczne (areny, np. benzen, toluen, naftalen).</p>
      <h4>Zestawienie mechanizmów reakcji pod klucz CKE</h4>
      <ul>
        <li><strong>Alkany — Substytucja rodnikowa (SR):</strong> wymaga światła (hν) lub wysokiej temperatury; reaktywność atomów wodoru rośnie z rzędowością węgla: <strong>C(III°) > C(II°) > C(I°)</strong> (np. głównym produktem monobromowania propanu jest 2-bromopropan).</li>
        <li><strong>Alkeny i alkiny — Addycja elektrofilowa (AE):</strong> odbarwiają wodę bromową i roztwór KMnO4. Przyłączanie niesymetrycznych cząsteczek HX lub H2O przebiega zgodnie z <strong>regułą Markownikowa</strong> (atom wodoru przyłącza się do atomu węgla wiązania wielokrotnego połączonego z większą liczbą atomów wodoru).</li>
        <li><strong>Areny — Substytucja elektrofilowa (SE):</strong> podstawniki <strong>I rodzaju</strong> (-OH, -NH2, -CH3, -C2H5, -Cl, -Br) kierują w położenia <strong>orto i para</strong>; podstawniki <strong>II rodzaju</strong> (-NO2, -COOH, -CHO, -SO3H) dezaktywują pierścień i kierują w położenie <strong>meta</strong>.</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Podaj nazwy systematyczne głównych produktów organicznych reakcji toluenu z chlorem: (a) w obecności światła (hν), (b) w obecności katalizatora FeCl3 bez dostępu światła.",
        answer: "(a) W obecności światła zachodzi substytucja rodnikowa w łańcuchu bocznym: powstaje (chlorometylo)benzen (chlorek benzylu). (b) W obecności FeCl3 zachodzi substytucja elektrofilowa w pierścieniu: powstaje mieszanina 1-chloro-2-metylobenzenu (o-chlorotoluenu) i 1-chloro-4-metylobenzenu (p-chlorotoluenu).",
      },
    ],
  },
  {
    id: "cke-chem-seed-alkohole-fenole-core",
    sectionCode: "Dział X",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["X.1.a", "X.2.a", "X.3.a"],
    chapterTitle: "Alkohole mono- i polihydroksylowe oraz fenole: rzędowość, utlenianie, próba Lucasa i kwasowość",
    htmlPages: [
      `<h3 id="alkohole-i-fenole-porownanie">Porównanie właściwości alkoholi monohydroksylowych, polihydroksylowych i fenoli</h3>
      <p>Rzędowość alkoholu określa się na podstawie rzędowości atomu węgla połączonego z grupą <strong>-OH</strong>. Determinuje ona przebieg reakcji utleniania oraz szybkość reakcji z odczynnikiem Lucasa (stęż. HCl + ZnCl2: najszybciej reagują alkohole III° → natychmiastowe zmętnienie).</p>
      <h4>Kluczowe reakcje odróżniające na maturze CKE</h4>
      <ul>
        <li><strong>Alkohole I-rzędowe + CuO (T):</strong> utleniają się do <strong>aldehydów</strong> (czarny osad CuO zmienia barwę na ceglastoczerwoną Cu): CH3CH2OH + CuO → CH3CHO + Cu + H2O.</li>
        <li><strong>Alkohole II-rzędowe + CuO (T):</strong> utleniają się do <strong>ketonów</strong>: CH3CH(OH)CH3 + CuO → CH3COCH3 + Cu + H2O.</li>
        <li><strong>Alkohole III-rzędowe:</strong> nie ulegają łagodnemu utlenianiu za pomocą CuO ani K2Cr2O7/H+.</li>
        <li><strong>Alkohole polihydroksylowe (glikol, glicerol) + świeżo strącony Cu(OH)2 na zimno:</strong> niebieski galaretowaty osad roztwarza się, powstaje <strong>szafirowy (ciemnoniebieski) klarowny roztwór</strong> kompleksu.</li>
        <li><strong>Fenol (benzenol):</strong> ma odczyn słabo kwasowy, reaguje z Na oraz z <strong>NaOH</strong> (w przeciwieństwie do alkoholi!), z wodą bromową daje biały osad 2,4,6-tribromofenolu, a z roztworem FeCl3 tworzy fioletowy kompleks.</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Zaprojektuj doświadczenie pozwalające odróżnić wodne roztwory etanolu i glicerolu za pomocą jednego odczynnika w temperaturze pokojowej.",
        answer: "Odczynnik: świeżo strącony zawiesina wodorotlenku miedzi(II) Cu(OH)2. Obserwacje: w probówce z glicerolem niebieski osad roztwarza się i powstaje szafirowy klarowny roztwór; w probówce z etanolem niebieski osad nie ulega roztworzeniu.",
      },
    ],
  },
  {
    id: "cke-chem-seed-aldehydy-ketony-core",
    sectionCode: "Dział XI",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["XI.1.a", "XI.2.a", "XI.3.a"],
    chapterTitle: "Związki karbonylowe (Aldehydy i Ketony): próba Tollensa, próba Trommera, hemiacetale i próba jodoformowa",
    htmlPages: [
      `<h3 id="zwiazki-karbonylowe-aldehydy-i-ketony">Budowa grupy karbonylowej i reakcje charakterystyczne aldehydów i ketonów</h3>
      <p>Atom węgla grupy karbonylowej <strong>>C=O</strong> wykazuje hybrydyzację <strong>sp2</strong> (układ płaski, kąty ~120°). Ze względu na większą elektroujemność tlenu wiązanie C=O jest silnie spolaryzowane (C ma cząstkowy ładunek dodatni δ+, a O ujemny δ-).</p>
      <h4>Próba Tollensa i Próba Trommera (w środowisku zasadowym!)</h4>
      <ul>
        <li><strong>Próba Tollensa:</strong> R-CHO + 2[Ag(NH3)2]+ + 3OH- --(T)--> <strong>R-COO-</strong> + 2Ag↓ (lustro srebrowe) + 4NH3 + 2H2O.</li>
        <li><strong>Próba Trommera:</strong> R-CHO + 2Cu(OH)2 + OH- --(T)--> <strong>R-COO-</strong> + Cu2O↓ (ceglastoczerwony osad) + 3H2O.</li>
        <li><strong>Ketony</strong> (np. propanon/aceton) nie ulegają utlenieniu w próbie Tollensa ani Trommera.</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Zapisz w formie jonowej równanie reakcji etanalu z odczynnikiem Tollensa w środowisku zasadowym.",
        answer: "CH3CHO + 2[Ag(NH3)2]+ + 3OH- → CH3COO- + 2Ag↓ + 4NH3 + 2H2O.",
      },
    ],
  },
  {
    id: "cke-chem-seed-kwasy-estry-core",
    sectionCode: "Dział XII",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["XII.1.a", "XII.2.a", "XII.2.b"],
    chapterTitle: "Kwasy karboksylowe, estry, tłuszcze i mydła: moc kwasów, estryfikacja i zmydlanie",
    htmlPages: [
      `<h3 id="kwasy-karboksylowe-estry-i-tluszcze">Kwasy karboksylowe, estryfikacja i chemia tłuszczów</h3>
      <p>Moc kwasów karboksylowych maleje wraz ze wzrostem długości łańcucha węglowodorowego, natomiast silnie <strong>rośnie</strong> po wprowadzeniu podstawników o dużej elektroujemności (np. atomów fluorowców F, Cl, Br) przy węglu α (<strong>ujemny efekt indukcyjny</strong> przyciągający elektrony i ułatwiający odszczepienie protonu H+).</p>
      <h4>Szczególne właściwości kwasu metanowego (mrówkowego, HCOOH)</h4>
      <p>Kwas mrówkowy posiada w swojej cząsteczce zarówno grupę karboksylową <strong>-COOH</strong>, jak i ugrupowanie aldehydowe <strong>-CHO</strong>, dlatego jako jedyny kwas monokarboksylowy ma <strong>właściwości redukujące</strong>: daje pozytywną próbę Tollensa i Trommera oraz odbarwia zakwaszony roztwór KMnO4 (utleniając się do CO2 i H2O).</p>`,
    ],
    quiz: [
      {
        question: "Uporządkuj kwasy: kwas octowy, kwas chlorooctowy, kwas trichlorooctowy według rosnącej wartości stałej dysocjacji Ka i uzasadnij swój wybór.",
        answer: "Kwas octowy < kwas chlorooctowy < kwas trichlorooctowy. Im więcej silnie elektroujemnych atomów chloru jest przyłączonych do węgla α, tym silniejszy ujemny efekt indukcyjny przyciągający elektrony od grupy -COOH, co zwiększa polaryzację wiązania O-H, stabilizuje anion karboksylowy i zwiększa moc kwasu (wyższe Ka).",
      },
    ],
  },
  {
    id: "cke-chem-seed-izomeria-optyczna-2023",
    sectionCode: "Dział XII",
    status: "2023-only",
    formulas: ["2023"],
    requirementCodes: ["XII.3.a"],
    chapterTitle: "Stereoizomeria optyczna: chiralność, projekcje Fischera, enancjomery, diastereoizomery i forma mezo [Nowa Matura 2023+]",
    htmlPages: [
      `<h3 id="stereoizomeria-optyczna-i-projekcje-fischera">Izomeria optyczna, projekcje Fischera i forma mezo</h3>
      <p>Atom węgla o hybrydyzacji <strong>sp3</strong> połączony z <strong>czterema różnymi podstawnikami</strong> nazywamy asymetrycznym atomem węgla (centrum chiralności / centrum stereogenicznym <strong>C*</strong>). Cząsteczka, która nie pokrywa się ze swoim odbiciem lustrzanym i nie posiada płaszczyzny symetrii, jest <strong>chiralna</strong> i czynna optycznie (skręca płaszczyznę światła spolaryzowanego).</p>
      <h4>Projekcje Fischera oraz relacje między stereoizomerami</h4>
      <ul>
        <li><strong>Konfiguracja względna D / L:</strong> w projekcji Fischera (łańcuch węglowy pionowo, najbardziej utleniony atom C na górze) o przynależności do szeregu D lub L decyduje położenie grupy -OH (lub -NH2) przy asymetrycznym atomie węgla C* o najwyższym lokancie: po <strong>prawej stronie → D</strong>, po <strong>lewej stronie → L</strong>.</li>
        <li><strong>Enancjomery:</strong> stereoizomery będące swoimi niepokrywającymi się odbiciami lustrzanymi (mają przeciwne konfiguracje na WSZYSTKICH centrach C*). Mają identyczne właściwości fizyczne i chemiczne w środowisku achiralnym, a różnią się kierunkiem skręcania płaszczyzny światła spolaryzowanego. Mieszanina równomolowa enancjomerów D i L to nieczynny optycznie <strong>racemat</strong>.</li>
        <li><strong>Diastereoizomery:</strong> stereoizomery, które NIE są swoimi odbiciami lustrzanymi (różnią się konfiguracją tylko na części centrów C*). Różnią się właściwościami fizycznymi (np. temperaturą topnienia, rozpuszczalnością).</li>
        <li><strong>Forma mezo (np. kwas mezo-winowy):</strong> stereoizomer posiadający centra C*, ale mający <strong>wewnętrzną płaszczyznę symetrii</strong> — cząsteczka jest achiralna i <strong>nieczynna optycznie</strong> (wewnętrzna kompensacja skręcalności).</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Wyjaśnij, dlaczego kwas winowy (kwas 2,3-dihydroksybutanodiowy) posiada dwa asymetryczne atomy węgla, ale występuje tylko w postaci trzech (a nie czterech) stereoizomerów.",
        answer: "Ponieważ oba asymetryczne atomy węgla (C2 i C3) są połączone z identycznym zestawem czterech podstawników, wskutek czego dwa przystające wzory reprezentują tę samą cząsteczkę posiadającą wewnętrzną płaszczyznę symetrii (nieczynny optycznie kwas mezo-winowy); oprócz formy mezo istnieje para enancjomerów: kwas D-(-)-winowy i kwas L-(+)-winowy (łącznie 3 stereoizomery).",
      },
    ],
  },
  {
    id: "cke-chem-seed-związki-azotowe-cukry-core",
    sectionCode: "Dział XIII",
    status: "core",
    formulas: ["2015", "2023"],
    requirementCodes: ["XIII.1.a", "XIII.2.a", "XIII.3.a", "XIII.3.b"],
    chapterTitle: "Aminy, aminokwasy (punkt izoelektryczny), białka oraz sacharydy (wzory Fischera i Hawortha)",
    htmlPages: [
      `<h3 id="aminokwasy-bialka-i-sacharydy">Aminokwasy, białka i stereochemia sacharydów (wzory Hawortha)</h3>
      <p>Aminokwasy w roztworach wodnych występują w równowadze jonowej zależnej od pH: w środowisku silnie kwasowym (<strong>pH < pI</strong>) dominują <strong>kationy</strong> (H3N+-CH(R)-COOH), w punkcie izoelektrycznym (<strong>pH = pI</strong>) dominują <strong>jony obojnacze</strong> (H3N+-CH(R)-COO-), a w środowisku zasadowym (<strong>pH > pI</strong>) dominują <strong>aniony</strong> (H2N-CH(R)-COO-).</p>
      <h4>Reakcje charakterystyczne białek i peptydów</h4>
      <ul>
        <li><strong>Reakcja biuretowa</strong> (ze świeżo strąconym Cu(OH)2 w środowisku zasadowym na zimno): wykrywa <strong>wiązania peptydowe</strong> (minimum 2 wiązania peptydowe — od tripeptydów wzwyż); obserwacja: <strong>fioletowe zabarwienie roztworu</strong>.</li>
        <li><strong>Reakcja ksantoproteinowa</strong> (ze stężonym HNO3): wykrywa ugrupowania aromatyczne w białkach (resztę fenyloalaniny, tyrozyny, tryptofanu — nitrowanie pierścienia); obserwacja: <strong>żółte zabarwienie osadu</strong> (pomarańczowiejące po dodaniu zasady).</li>
      </ul>
      <h4>Sacharydy: cyklizacja do form pierścieniowych Hawortha i właściwości redukujące</h4>
      <ul>
        <li><strong>Wzory Hawortha:</strong> grupy -OH znajdujące się we wzorze łańcuchowym Fischera po <strong>prawej stronie</strong> rysujemy we wzorze Hawortha <strong>pod płaszczyzną pierścienia (na dole)</strong>, a grupy znajdujące się po <strong>lewej stronie</strong> — <strong>nad płaszczyzną pierścienia (na górze)</strong>.</li>
        <li><strong>Anomery α i β (dla D-cukrów):</strong> w anomerze <strong>α</strong> hemiacetalowa grupa -OH przy C1 (lub C2 w ketozach) znajduje się <strong>pod pierścieniem</strong> (trans względem grupy -CH2OH przy C5), a w anomerze <strong>β</strong> — <strong>nad pierścieniem</strong> (cis względem -CH2OH).</li>
        <li><strong>Odróżnianie glukozy od fruktozy:</strong> oba cukry dają pozytywną próbę Tollensa i Trommera (fruktoza w środowisku zasadowym ulega izomeryzacji do glukozy i mannozy!), ale <strong>woda bromowa (Br2/H2O)</strong> utlenia wyłącznie glukozę (aldozę) do kwasu glukonowego (odbarwienie wody bromowej), nie reagując z fruktozą!</li>
      </ul>`,
    ],
    quiz: [
      {
        question: "Wyjaśnij, dlaczego maltoza i laktoza wykazują właściwości redukujące (dają pozytywną próbę Trommera), natomiast sacharoza nie ma właściwości redukujących.",
        answer: "W cząsteczce maltozy i laktozy w utworzeniu wiązania 1,4-glikozydowego bierze udział tylko jedna grupa hemiacetalowa, dzięki czemu w drugim pierścieniu pozostaje wolna hemiacetalowa grupa -OH umożliwiająca otwieranie pierścienia do formy łańcuchowej z grupą aldehydową; w sacharozie wiązanie α,β-1,2-glikozydowe blokuje obie grupy hemiacetalowe (przy C1 glukozy i C2 fruktozy), co uniemożliwia otwarcie pierścienia.",
      },
    ],
  },
];

function ensureEnrichedSection(
  rawId: string,
  prefixedId: string,
  chapter: StructuredChapter,
  curriculumList: CkeSectionCurriculum[],
  fallbackClassifier: (id: string, title: string) => CkeSectionCurriculum,
): { sectionCode: string; section: TextbookSection } {
  const existingMeta = chapter.ckeMetadata;
  const matchedCurr =
    (existingMeta &&
      curriculumList.find((c) => c.sectionCode === existingMeta.sectionCode)) ||
    fallbackClassifier(rawId, chapter.chapterTitle);

  const meta: CkeMetadata = existingMeta ?? {
    formulas: matchedCurr.formulas,
    sectionCode: matchedCurr.sectionCode,
    requirementCodes: matchedCurr.requirements.map((r) => r.code),
    status: matchedCurr.status,
    examTips: matchedCurr.examTraps,
  };

  const pages: TextbookPage[] = [...(chapter.pages ?? [])];
  const toc: TableOfContentsItem[] = [...(chapter.toc ?? [])];

  const hasCkePage = pages.some((p) =>
    p.htmlContent.includes("Wytyczne CKE i Pewniaki Maturalne"),
  );

  if (!hasCkePage) {
    const ckeHtml = buildCkeGuidelinesPageHtml(
      matchedCurr,
      chapter.chapterTitle,
      meta,
    );
    pages.push({
      pageNumber: pages.length + 1,
      htmlContent: ckeHtml,
    });
    toc.push({
      title: "🎯 Wytyczne CKE i Pewniaki Maturalne",
      anchorId: "wytyczne-cke-i-pewniaki-maturalne",
    });
  }

  const section: TextbookSection = {
    id: prefixedId,
    title: chapter.chapterTitle,
    pages,
    toc,
    chapterQuiz: chapter.chapterQuiz ?? [],
    ckeMetadata: meta,
    content: [],
    recallQuestions: (chapter.chapterQuiz ?? []).map((q, idx) => ({
      id: `${prefixedId}-q-${idx + 1}`,
      question: q.question,
      answer: q.answer,
    })),
    summary: excerpt(pages[0]?.htmlContent ?? ""),
  };

  return { sectionCode: meta.sectionCode, section };
}

function buildMaturaDomains(
  kind: "biologia" | "chemia",
  idPrefix: string,
): TextbookDomain[] {
  const curriculumList =
    kind === "biologia" ? BIOLOGY_CKE_CURRICULUM : CHEMISTRY_CKE_CURRICULUM;
  const icons = kind === "biologia" ? BIO_ICONS : CHEM_ICONS;
  const classifier =
    kind === "biologia" ? classifyBiologyChapter : classifyChemistryChapter;

  const grouped = new Map<string, TextbookSection[]>();
  for (const curr of curriculumList) {
    grouped.set(curr.sectionCode, []);
  }

  // 1. Collect all generated chapters from src/data/<kind>/dzialy
  const rawEntries: ChapterEntry[] = [];
  if (kind === "biologia") {
    for (const tag of ["bio1", "bio2", "bio3", "bio4", "maturaBio"]) {
      const list = bioChaptersMap[`${tag}Chapters`];
      if (list) rawEntries.push(...list);
    }
  } else {
    for (const tag of ["chem1", "maturaChem"]) {
      const list = chemChaptersMap[`${tag}Chapters`];
      if (list) rawEntries.push(...list);
    }
  }

  const seenRawIds = new Set<string>();
  for (const entry of rawEntries) {
    seenRawIds.add(entry.id);
    const { sectionCode, section } = ensureEnrichedSection(
      entry.id,
      `${idPrefix}-${entry.id}`,
      entry.data,
      curriculumList,
      classifier,
    );
    const bucket = grouped.get(sectionCode);
    if (bucket) {
      bucket.push(section);
    }
  }

  // 2. Append built-in seed chapters (formula-exclusive 2015-only / 2023-only + organic chemistry)
  const seeds = kind === "biologia" ? BIOLOGY_SEED_CHAPTERS : CHEMISTRY_SEED_CHAPTERS;
  for (const seed of seeds) {
    if (seenRawIds.has(seed.id)) continue;
    const structured: StructuredChapter = {
      chapterTitle: seed.chapterTitle,
      toc: [
        {
          title: seed.chapterTitle,
          anchorId: seed.id,
        },
      ],
      pages: seed.htmlPages.map((html, idx) => ({
        pageNumber: idx + 1,
        htmlContent: html,
      })),
      chapterQuiz: seed.quiz,
      ckeMetadata: {
        formulas: seed.formulas,
        sectionCode: seed.sectionCode,
        requirementCodes: seed.requirementCodes,
        status: seed.status,
      },
    };
    const { sectionCode, section } = ensureEnrichedSection(
      seed.id,
      `${idPrefix}-${seed.id}`,
      structured,
      curriculumList,
      classifier,
    );
    const bucket = grouped.get(sectionCode);
    if (bucket) {
      bucket.push(section);
    }
  }

  // 3. Build TextbookDomain[] in exact CKE Dział I..XI / I..XIII order
  return curriculumList
    .map((curr) => {
      const sections = disambiguateSectionTitles(grouped.get(curr.sectionCode) ?? []);
      return {
        id: `${idPrefix}-${curr.id}`,
        title: curr.title,
        shortTitle: `${curr.sectionCode}: ${curr.title.replace(/^Dział\s+[IVX]+\.\s*/i, "").split(/[(:]/)[0].trim()}`,
        icon: icons[curr.sectionCode] ?? "📘",
        sections,
      };
    })
    .filter((d) => d.sections.length > 0);
}

export const biologiaMatura2023Theory: TextbookDomain[] = buildMaturaDomains(
  "biologia",
  "bm23",
);

export const biologiaMatura2015Theory: TextbookDomain[] = buildMaturaDomains(
  "biologia",
  "bm15",
);

export const chemiaMatura2023Theory: TextbookDomain[] = buildMaturaDomains(
  "chemia",
  "cm23",
);

export const chemiaMatura2015Theory: TextbookDomain[] = buildMaturaDomains(
  "chemia",
  "cm15",
);
