export type InteractiveWidgetId =
  | "vsepr-orbitals-3d"
  | "periodic-table-3d"
  | "biomolecules-3d"
  | "metabolism-simulator";

export type InteractiveWidgetDomain = "chemistry" | "biology";

export interface InteractiveWidgetSpec {
  id: InteractiveWidgetId;
  domain: InteractiveWidgetDomain;
  titlePl: string;
  subtitlePl: string;
  badge: string;
  chapterIds: string[];
  keywords: string[];
}

export const INTERACTIVE_WIDGET_SPECS: InteractiveWidgetSpec[] = [
  {
    id: "vsepr-orbitals-3d",
    domain: "chemistry",
    titlePl: "Interaktywne Laboratorium 3D: Hybrydyzacja, Geometria VSEPR i Orbitale",
    subtitlePl:
      "Obracaj w przestrzeni cząsteczki sp / sp² / sp³ / sp³d / sp³d², badaj kąty wiązań, wolne pary elektronowe oraz kształt orbitali atomowych s, p, d.",
    badge: "3D WebGL • Chemia CKE",
    chapterIds: [
      "chem1-czesc-75-hybrydyzacja-orbitali-na-przykladzie-metanu",
      "chem1-czesc-76-czasteczki-wieloatomowe-hybrydyzacja-orbitali",
      "chem1-czesc-77-hybrydyzacja-orbitali-w-czasteczkach-wieloatomowych",
      "chem1-czesc-78-hybrydyzacja-orbitali-w-czasteczkach-wieloatomowych",
      "chem1-czesc-79-hybrydyzacja-orbitali-atomowych-a-geometria-czasteczek",
      "chem1-czesc-80-hybrydyzacja-orbitali-w-czasteczkach-wieloatomowych",
      "chem1-czesc-81-czasteczki-wieloatomowe-z-wiazaniami-podwojnymi-i-potrojnymi-etylen-i-acetylen",
      "chem1-czesc-100-hybrydyzacja-orbitali-a-symetria-czasteczek",
      "cke-chem-seed-weglowodory-core",
    ],
    keywords: [
      "hybrydyzacj",
      "vsepr",
      "orbital",
      "geometria-czasteczek",
      "geometria cząsteczek",
      "sp3",
      "sp2",
      "wiazani",
      "wiązani",
      "kształt cząsteczek",
      "weglowodor",
    ],
  },
  {
    id: "periodic-table-3d",
    domain: "chemistry",
    titlePl: "Interaktywny Układ Okresowy & Powłoki Elektronowe 3D",
    subtitlePl:
      "Filtruj bloki s, p, d, analizuj mapy elektroujemności Paulinga i promienia atomowego oraz obracaj model 3D powłok elektronowych pierwiastka (z wyjątkami Cr i Cu).",
    badge: "3D WebGL • Układ Okresowy",
    chapterIds: [
      "chem1-czesc-1-zadania-i-zakres-chemii-nieorganicznej",
      "chem1-czesc-2-wczesny-rozwoj-teorii-atomistycznej",
      "cke-chem-seed-konfiguracja",
      "cke-chem-seed-kso-hydroliza-2023",
    ],
    keywords: [
      "uklad-okresow",
      "układ okresow",
      "konfiguracj",
      "elektronow",
      "atom",
      "pierwiastk",
      "elektroujemn",
      "blok-d",
      "blok d",
      "promien-atomow",
      "budowa-atomu",
      "liczby-kwantowe",
    ],
  },
  {
    id: "biomolecules-3d",
    domain: "biology",
    titlePl: "Interaktywne Modele 3D Biomolekuł: DNA, RNA, ATP i Struktura Białek",
    subtitlePl:
      "Badaj w 3D podwójną helisę B-DNA (A=T, G≡C), spinkę RNA, wysokoenergetyczne wiązania bezwodnikowe ATP oraz α-helisę i β-kartkę białek.",
    badge: "3D WebGL • Biologia Molekularna",
    chapterIds: [
      "bio1-czesc-17-aminokwasy-budowa-wlasciwosci-i-klasyfikacja",
      "bio4-czesc-5-kwasy-nukleinowe-budowa-lokalizacja-i-replikacja-dna",
      "bio4-czesc-6-replikacja-dna-u-prokariotow-i-eukariotow",
      "bio4-czesc-7-mechanizm-replikacji-dna-replisom-telomeraza-i-naprawa-dna",
      "bio4-czesc-8-replikacja-dna-regulacja-modele-i-doswiadczenie-meselsona-i-stahla",
      "bio4-czesc-9-replikacja-dna-oraz-geny-i-genomy",
    ],
    keywords: [
      "kwasy-nukleinowe",
      "kwasów nukleinowych",
      "replikacj",
      "dna",
      "rna",
      "helis",
      "aminokwas",
      "bialk",
      "białk",
      "struktura-drugorzedowa",
      "atp",
      "peptyd",
    ],
  },
  {
    id: "metabolism-simulator",
    domain: "biology",
    titlePl: "Interaktywny Symulator Fotosyntezy, Chemiosmozy i Oddychania Komórkowego",
    subtitlePl:
      "Steruj natężeniem światła i stężeniem CO₂, śledź transport elektronów przez PSII/PSI, gradient protonowy H⁺, rotację syntazy ATP i bilans cyklu Calvina.",
    badge: "Symulator Live • Metabolizm CKE",
    chapterIds: [
      "bio1-czesc-60-fotosynteza-autotroficzne-odzywianie-sie-organizmow",
      "bio1-czesc-61-fotosynteza-budowa-i-funkcja-fotosystemow-oraz-przebieg-fazy-zaleznej-od-swiatla",
      "bio1-czesc-62-fotosynteza-fazy-i-mechanizmy",
      "bio1-czesc-63-autotroficzne-odzywianie-sie-organizmow-fotosynteza",
      "bio1-czesc-79-fotosynteza-i-metabolizm-analiza-procesow",
      "bio2-czesc-67-fotosynteza-fazy-i-typy-roslin",
      "bio2-czesc-69-odzywianie-sie-roslin-fotosynteza",
      "biochem-rownanie-michaelisa-mentena",
      "biochem-cykl-krebsa-i-glukoneogeneza",
    ],
    keywords: [
      "fotosyntez",
      "tylakoid",
      "calvin",
      "oddychani",
      "glikoliz",
      "krebs",
      "łańcuch oddechowy",
      "lancuch-oddechowy",
      "chemiosmoz",
      "syntaza-atp",
      "metabolizm",
      "enzym",
    ],
  },
];

export function getInteractiveWidgetsForChapter(options: {
  subject?: string;
  chapterId: string;
  chapterTitle?: string;
}): InteractiveWidgetSpec[] {
  const { subject, chapterId, chapterTitle } = options;
  const subj = (subject ?? "").toLowerCase();

  const isChemistrySubject = subj.startsWith("chemia");
  const isBiologySubject =
    subj.startsWith("biologia") || subj.startsWith("biochemia");

  // If subject is specified and outside chemistry / biology / biochemia, return []
  if (subj && !isChemistrySubject && !isBiologySubject) {
    return [];
  }

  const normalizedChapterId = chapterId.replace(
    /^(?:bm23|bm15|cm23|cm15)-/,
    "",
  );
  const haystack = `${normalizedChapterId} ${chapterTitle ?? ""}`.toLowerCase();

  const matchedIds = new Set<InteractiveWidgetId>();
  const results: InteractiveWidgetSpec[] = [];

  for (const spec of INTERACTIVE_WIDGET_SPECS) {
    if (subj) {
      if (spec.domain === "chemistry" && !isChemistrySubject) continue;
      if (spec.domain === "biology" && !isBiologySubject) continue;
    }

    const exactHit =
      spec.chapterIds.includes(chapterId) ||
      spec.chapterIds.includes(normalizedChapterId);
    const keywordHit = spec.keywords.some((kw) => haystack.includes(kw));

    if (exactHit || keywordHit) {
      if (!matchedIds.has(spec.id)) {
        matchedIds.add(spec.id);
        results.push(spec);
      }
    }
  }

  return results;
}
