import type { TextbookFigure } from "@/types/textbook-figures";
import anatomiaFiguresJson from "./oer-generated/textbook-figures-anatomia.json";
import fizjologiaFiguresJson from "./oer-generated/textbook-figures-fizjologia.json";
import biologiaFiguresJson from "./oer-generated/textbook-figures-biologia.json";
import chemiaFiguresJson from "./oer-generated/textbook-figures-chemia.json";
import oerFiguresJson from "./oer-generated/textbook-figures-oer.json";

export const ANATOMIA_TEXTBOOK_FIGURES: TextbookFigure[] =
  anatomiaFiguresJson as TextbookFigure[];

export const FIZJOLOGIA_TEXTBOOK_FIGURES: TextbookFigure[] =
  fizjologiaFiguresJson as TextbookFigure[];

export const BIOLOGIA_TEXTBOOK_FIGURES: TextbookFigure[] =
  biologiaFiguresJson as TextbookFigure[];

export const CHEMIA_TEXTBOOK_FIGURES: TextbookFigure[] =
  chemiaFiguresJson as TextbookFigure[];

export const OER_TEXTBOOK_FIGURES: TextbookFigure[] =
  oerFiguresJson as TextbookFigure[];

export const ALL_TEXTBOOK_FIGURES: TextbookFigure[] = [
  ...ANATOMIA_TEXTBOOK_FIGURES,
  ...FIZJOLOGIA_TEXTBOOK_FIGURES,
  ...BIOLOGIA_TEXTBOOK_FIGURES,
  ...CHEMIA_TEXTBOOK_FIGURES,
  ...OER_TEXTBOOK_FIGURES,
];

type FigureSubjectScope =
  | "bioAnatPhysio"
  | "chemBiochem"
  | "bioChemBoth"
  | "physics"
  | "mathCS";

const FIGURE_KEYWORD_RULES: Array<{
  figureId: string;
  scope: FigureSubjectScope;
  keywords: string[];
}> = [
  {
    figureId: "fig-anat-osteon-szpik",
    scope: "bioAnatPhysio",
    keywords: [
      "budowa-wewnetrzna-kosci",
      "szpik",
      "osteon",
      "havers",
      "okostna",
      "kosci-dlug",
      "kostnieni",
      "szkielet",
      "budowa kości",
    ],
  },
  {
    figureId: "fig-anat-serce-zastawki",
    scope: "bioAnatPhysio",
    keywords: [
      "serce",
      "serca",
      "zastawk",
      "komor-serca",
      "przedsionk",
      "przewodzacy-serca",
      "uklad-krazenia",
    ],
  },
  {
    figureId: "fig-anat-splot-ramienny",
    scope: "bioAnatPhysio",
    keywords: [
      "splot-ramienn",
      "splot ramienn",
      "nerwy-konczyny-gornej",
      "plexus brachialis",
    ],
  },
  {
    figureId: "fig-anat-kolo-willisa",
    scope: "bioAnatPhysio",
    keywords: [
      "kolo-willis",
      "koło willisa",
      "unaczynienie-mozg",
      "ogolna-budowa-mozgowia",
      "powierzchnia-przysrodkowa-i-dolna-polkuli-mozgu",
      "mozgowie-naczynia",
      "tetnice-mozg",
    ],
  },
  {
    figureId: "fig-anat-nefron-nerka",
    scope: "bioAnatPhysio",
    keywords: [
      "nefron",
      "nerka",
      "nerki",
      "miedniczka-nerkowa",
      "uklad-wydalniczy",
      "wydalniczy",
      "moczow",
    ],
  },
  {
    figureId: "fig-anat-pluca-pecherzyk",
    scope: "bioAnatPhysio",
    keywords: [
      "pluc",
      "płuc",
      "oskrzel",
      "pecherzyk-plucn",
      "tchawic",
      "uklad-oddechowy",
      "oddechowy",
      "oplucn",
    ],
  },
  {
    figureId: "fig-fizjo-potencjal-czynnosciowy",
    scope: "bioAnatPhysio",
    keywords: [
      "potencjal-czynnosciow",
      "potencjał czynnościowy",
      "potencjalu-spoczynkowego",
      "depolaryzacj",
      "hiperpolaryzacj",
      "przewodnictwo-nerwowe",
      "pobudliwosc-neuronu",
      "wlokna-mielinowe",
      "ranvier",
      "nernst",
    ],
  },
  {
    figureId: "fig-fizjo-cykl-serca-ekg",
    scope: "bioAnatPhysio",
    keywords: [
      "ekg",
      "tony-serca",
      "wiggers",
      "cykl-pracy-serca",
      "cykl pracy serca",
      "fizjologia-serca",
      "fizjologia-krazenia",
      "regulacja-pracy-serca",
    ],
  },
  {
    figureId: "fig-fizjo-wymiana-gazowa-bohr",
    scope: "bioAnatPhysio",
    keywords: [
      "bohr",
      "oksyhemoglobin",
      "dysocjacj",
      "hemoglobina-i-transport",
      "dyfuzja-gazow",
      "transport-gazow",
      "wymiana-gazowa",
    ],
  },
  {
    figureId: "fig-bio-fotosynteza-tylakoid",
    scope: "bioAnatPhysio",
    keywords: [
      "fotosyntez",
      "tylakoid",
      "faza-jasna",
      "cykl-calvina",
      "calvina",
      "fotosystem",
      "rubisco",
    ],
  },
  {
    figureId: "fig-bio-widelki-replikacyjne",
    scope: "bioAnatPhysio",
    keywords: [
      "replikacj",
      "widelki-replikacyjne",
      "okazaki",
      "helikaza",
      "ligaza",
      "polimeraza-dna",
      "meselson",
    ],
  },
  {
    figureId: "fig-bio-synapsa-chemiczna",
    scope: "bioAnatPhysio",
    keywords: [
      "synaps",
      "neuroprzekaznik",
      "acetylocholin",
      "plastycznosc-ltp",
      "szczelina-synaptyczna",
    ],
  },
  {
    figureId: "fig-chem-profil-energetyczny",
    scope: "chemBiochem",
    keywords: [
      "termodynamik",
      "entalpi",
      "prawo-hessa",
      "prawo hessa",
      "energia-aktywacji",
      "energia aktywacji",
      "profil-energetyczny",
      "katalizator",
      "egzotermicz",
      "endotermicz",
      "michaelis",
    ],
  },
  {
    figureId: "fig-chem-ogniwo-daniella",
    scope: "chemBiochem",
    keywords: [
      "ogniwo",
      "ogniwa",
      "daniell",
      "redoks",
      "elektrochemi",
      "potencjal-standardowy",
      "potencjał standardowy",
      "galwanicz",
      "elektroliz",
    ],
  },
  {
    figureId: "fig-chem-hybrydyzacja-vsepr",
    scope: "chemBiochem",
    keywords: [
      "hybrydyzacj",
      "vsepr",
      "orbital",
      "geometria-czasteczek",
      "geometria cząsteczek",
      "wiazanie-pi",
      "sp3",
      "sp2",
      "weglowodor",
    ],
  },
  {
    figureId: "fig-anat-uklad-bodzcowy",
    scope: "bioAnatPhysio",
    keywords: [
      "przewodzacy-serca",
      "bodzcoprzewodz",
      "bodźcoprzewodz",
      "wezel-sa",
      "węzeł zatokowo",
      "purkinje",
    ],
  },
  {
    figureId: "fig-anat-rdzen-odruch",
    scope: "bioAnatPhysio",
    keywords: [
      "rdzen-kregowy",
      "rdzeń kręgowy",
      "luk-odruchow",
      "luki-odruchow",
      "łuk odruchowy",
      "odruch",
    ],
  },
  {
    figureId: "fig-fizjo-sarkomer-skurcz",
    scope: "bioAnatPhysio",
    keywords: [
      "sarkomer",
      "skurcz-miesnia",
      "skurcz mięśnia",
      "miozyn",
      "aktyn",
      "miesni-szkielet",
      "mięśnie szkielet",
    ],
  },
  {
    figureId: "fig-fizjo-os-hpa-stres",
    scope: "bioAnatPhysio",
    keywords: [
      "os-hpa",
      "oś hpa",
      "kortyzol",
      "nadnercz",
      "stres",
      "neuroendokryn",
    ],
  },
  {
    figureId: "fig-bio-lancuch-oddechowy",
    scope: "bioChemBoth",
    keywords: [
      "lancuch-oddechow",
      "łańcuch oddechowy",
      "fosforylacja-oksydacyjn",
      "fosforylacja oksydacyjna",
      "syntaza-atp",
      "mitochondri",
      "oddychanie-komork",
    ],
  },
  {
    figureId: "fig-bio-cykl-krebsa",
    scope: "bioChemBoth",
    keywords: [
      "cykl-krebs",
      "cykl krebsa",
      "kwasu cytrynowego",
      "acetylo-coa",
      "dekarboksylacja",
    ],
  },
  {
    figureId: "fig-bio-mitoza-mejoza",
    scope: "bioAnatPhysio",
    keywords: [
      "mitoz",
      "mejoz",
      "podzial-komork",
      "podział komórk",
      "crossing-over",
      "gametogenez",
    ],
  },
  {
    figureId: "fig-bio-przeciwcialo-igg",
    scope: "bioAnatPhysio",
    keywords: [
      "przeciwcial",
      "przeciwciał",
      "immunoglobulin",
      "uklad-odpornosciow",
      "układ odporności",
      "odpornosc",
      "antygen",
    ],
  },
  {
    figureId: "fig-chem-rownowaga-le-chatelier",
    scope: "chemBiochem",
    keywords: [
      "rownowag",
      "równowag",
      "le chatelier",
      "przekor",
      "stala-rownowagi",
      "kinetyka-chemicz",
    ],
  },
  {
    figureId: "fig-chem-miareczkowanie-bufory",
    scope: "chemBiochem",
    keywords: [
      "miareczkow",
      "bufor",
      "pka",
      "henderson",
      "alkacymetr",
      "punkt-rownowaznik",
    ],
  },
  {
    figureId: "fig-fiz-rownia-rzut",
    scope: "physics",
    keywords: [
      "rzut-ukosny",
      "rzut ukośny",
      "rownia-pochyla",
      "równia pochyła",
      "rowni-pochylej",
      "kinematyka-rzut",
    ],
  },
  {
    figureId: "fig-fiz-indukcja-rlc",
    scope: "physics",
    keywords: [
      "indukcja-elektromagnet",
      "indukcja elektromagnet",
      "obwody-rlc",
      "obwód rlc",
      "rezonans",
      "faraday",
      "lenz",
    ],
  },
  {
    figureId: "fig-neuro-droga-piramidowa",
    scope: "bioAnatPhysio",
    keywords: [
      "droga piramidowa",
      "drogi-piramidowe",
      "skrzyzowanie-piramid",
      "korowo-rdzeniow",
    ],
  },
  {
    figureId: "fig-biochem-beta-oksydacja",
    scope: "chemBiochem",
    keywords: [
      "beta-oksydacj",
      "β-oksydacj",
      "lynen",
      "karnitynow",
      "ketogenez",
    ],
  },
  {
    figureId: "fig-fiz-optyka-snell",
    scope: "physics",
    keywords: [
      "snell",
      "optyka-geometryczna",
      "optyka-falowa",
      "fizyka-oka",
      "rayleigh",
    ],
  },
  {
    figureId: "fig-farm-kinetyka-i-rzad",
    scope: "mathCS",
    keywords: [
      "kinetyka",
      "okres poltrwania",
      "stan stacjonarny",
      "c_ss",
      "rownania-rozniczkowe",
    ],
  },
  {
    figureId: "fig-inf-kopiec-binarny",
    scope: "mathCS",
    keywords: [
      "kopiec",
      "kopce-binarne",
      "heapsort",
      "kolejki-priorytetowe",
    ],
  },
];

export function getFigureById(id: string): TextbookFigure | undefined {
  return ALL_TEXTBOOK_FIGURES.find((f) => f.id === id);
}

/**
 * Returns matching interactive textbook figures for a chapter.
 * Matches in priority order:
 * 1) Exact match against `chapterIds` (including normalized Matura prefix IDs)
 * 2) Subject-scoped keyword match against `chapterId + chapterTitle`
 */
export function getFiguresForChapter(options: {
  subject?: string;
  chapterId: string;
  chapterTitle?: string;
}): TextbookFigure[] {
  const { subject, chapterId, chapterTitle } = options;
  const subj = (subject ?? "").toLowerCase();

  const isBioAnatPhysio =
    !subj ||
    subj.startsWith("anatomia") ||
    subj.startsWith("fizjologia") ||
    subj.startsWith("biologia") ||
    subj.startsWith("neurobiologia") ||
    subj.startsWith("farmakologia");
  const isChemBiochem =
    !subj || subj.startsWith("chemia") || subj.startsWith("biochemia");
  const isPhysics = !subj || subj.startsWith("fizyka");
  const isMathCS =
    !subj ||
    subj.startsWith("matematyka") ||
    subj.startsWith("informatyka") ||
    subj.startsWith("farmakologia");

  if (!isBioAnatPhysio && !isChemBiochem && !isPhysics && !isMathCS) {
    return [];
  }

  const normalizedChapterId = chapterId.replace(
    /^(?:bm23|bm15|cm23|cm15)-/,
    ""
  );

  const matchedIds = new Set<string>();
  const results: TextbookFigure[] = [];

  for (const fig of ALL_TEXTBOOK_FIGURES) {
    if (
      fig.chapterIds.includes(chapterId) ||
      fig.chapterIds.includes(normalizedChapterId)
    ) {
      matchedIds.add(fig.id);
      results.push(fig);
    }
  }

  const haystack = `${chapterId} ${chapterTitle ?? ""}`.toLowerCase();
  for (const rule of FIGURE_KEYWORD_RULES) {
    if (matchedIds.has(rule.figureId)) continue;
    if (rule.scope === "bioAnatPhysio" && !isBioAnatPhysio) continue;
    if (rule.scope === "chemBiochem" && !isChemBiochem) continue;
    if (rule.scope === "bioChemBoth" && !isBioAnatPhysio && !isChemBiochem) continue;
    if (rule.scope === "physics" && !isPhysics) continue;
    if (rule.scope === "mathCS" && !isMathCS) continue;
    if (rule.keywords.some((kw) => haystack.includes(kw))) {
      const fig = getFigureById(rule.figureId);
      if (fig) {
        matchedIds.add(fig.id);
        results.push(fig);
      }
    }
  }

  return results;
}
