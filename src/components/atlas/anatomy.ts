import type { SystemId } from "@/server/models";

/**
 * Presentation config for the 3D atlas: how each anatomical system is named,
 * coloured and described.
 *
 * Deliberately separate from `@/server/models/atlas` — that file describes the
 * *data*, this one describes how we choose to show it. Colours here are also
 * consumed by the WebGL materials, so they are plain hex rather than CSS tokens.
 *
 * Structure names themselves come from the BodyParts3D dataset and stay in
 * English (2,234 meshes, no Polish translation exists upstream); all of the
 * surrounding interface copy is Polish.
 */
export const SYSTEMS: {
  id: SystemId;
  name: string;
  color: string;
  description: string;
}[] = [
  {
    id: "skeletal",
    name: "Układ kostny",
    color: "#e2d9ba",
    description:
      "Kości tworzą rusztowanie ciała, chronią narządy i stanowią przyczepy dla mięśni. Tkanka kostna magazynuje też składniki mineralne i wytwarza komórki krwi.",
  },
  {
    id: "muscular",
    name: "Mięśnie",
    color: "#a85b50",
    description:
      "Mięśnie szkieletowe wytwarzają ruch, pociągając za swoje przyczepy. Wraz ze ścięgnami poruszają stawami, stabilizują postawę i wytwarzają ciepło.",
  },
  {
    id: "cardiac",
    name: "Serce",
    color: "#b96760",
    description:
      "Serce to mięśniowa pompa o czterech jamach. Jego zastawki kierują krew do przodu przez krążenie płucne i systemowe.",
  },
  {
    id: "sensory",
    name: "Narządy zmysłów",
    color: "#b0c8ce",
    description:
      "Struktury odpowiedzialne za zmysły — wzrok, słuch i równowagę. Ich wyspecjalizowane tkanki odbierają bodźce i przekazują informacje do układu nerwowego.",
  },
  {
    id: "arterial",
    name: "Tętnice",
    color: "#c05245",
    description:
      "Tętnice prowadzą krew z serca do tkanek, a w krążeniu płucnym — do płuc.",
  },
  {
    id: "venous",
    name: "Żyły",
    color: "#527c9f",
    description:
      "Żyły odprowadzają krew w kierunku serca. Sieci powierzchowne i głębokie zbierają krew z tkanek; żyły płucne wracają z krwią utlenowaną.",
  },
  {
    id: "nervous",
    name: "Układ nerwowy",
    color: "#d8b565",
    description:
      "Mózgowie, rdzeń kręgowy i nerwy obwodowe przewodzą oraz przetwarzają sygnały. Odpowiadają za czucie, ruch, koordynację i regulację czynności organizmu.",
  },
  {
    id: "respiratory",
    name: "Układ oddechowy",
    color: "#b98991",
    description:
      "Drogi oddechowe doprowadzają powietrze do płuc, gdzie zachodzi wymiana tlenu i dwutlenku węgla między powietrzem a krwią.",
  },
  {
    id: "digestive",
    name: "Układ pokarmowy",
    color: "#b8916b",
    description:
      "Przewód pokarmowy rozkłada pokarm, wchłania składniki odżywcze i wodę oraz przesuwa treść dalej. Narządy dodatkowe dostarczają żółć i enzymy trawienne.",
  },
  {
    id: "urinary",
    name: "Układ moczowy",
    color: "#b47961",
    description:
      "Nerki filtrują krew i regulują gospodarkę wodno-elektrolitową oraz kwasowo-zasadową. Mocz spływa moczowodami do pęcherza.",
  },
  {
    id: "lymphatic",
    name: "Układ limfatyczny",
    color: "#879f7c",
    description:
      "Naczynia limfatyczne odprowadzają nadmiar płynu tkankowego do krążenia. Węzły chłonne uczestniczą w nadzorze immunologicznym.",
  },
  {
    id: "endocrine",
    name: "Układ hormonalny",
    color: "#c5a09a",
    description:
      "Gruczoły dokrewne wydzielają hormony do krwi, koordynując metabolizm, wzrost, reakcje na stres i rozród.",
  },
  {
    id: "reproductive",
    name: "Układ rozrodczy",
    color: "#bda098",
    description:
      "Przedstawione struktury męskiego układu rozrodczego uczestniczą w wytwarzaniu i transporcie plemników oraz produkcji hormonów płciowych.",
  },
  {
    id: "integumentary",
    name: "Powłoka ciała",
    color: "#ba9b7d",
    description:
      "Powierzchnia ciała stanowi zewnętrzny punkt odniesienia. Skóra tworzy barierę ochronną i uczestniczy w czuciu oraz termoregulacji.",
  },
  {
    id: "connective",
    name: "Tkanka łączna",
    color: "#aec3bb",
    description:
      "Chrząstki, więzadła i inne tkanki łączne podpierają, łączą i rozdzielają struktury, stabilizując stawy i rozkładając obciążenia mechaniczne.",
  },
];

export type View = "three-quarter" | "front" | "back" | "side";

/** Everything the WebGL scene needs to know about what to draw. */
export interface SceneState {
  inspectorOpen?: boolean;
  explode: number;
  visible: SystemId[];
  selected: string[];
  isolate: boolean;
  view: View;
  rotate: boolean;
  reset: number;
}

export const DEFAULT_VISIBLE: SystemId[] = [
  "cardiac",
  "sensory",
  "skeletal",
  "muscular",
  "arterial",
  "venous",
  "nervous",
  "respiratory",
  "digestive",
  "urinary",
  "lymphatic",
  "endocrine",
  "reproductive",
  "connective",
];

/** Keys are dataset names (English, lowercased); copy is Polish. */
export const EXPLANATIONS: Record<string, string> = {
  heart:
    "Mięśniowa pompa w klatce piersiowej. Prawa połowa tłoczy krew do płuc, lewa — do krążenia systemowego.",
  liver:
    "Duży narząd pod prawą kopułą przepony. Przetwarza wchłonięte składniki odżywcze, wytwarza żółć i syntetyzuje wiele białek osocza.",
  brain:
    "Centralny narząd układu nerwowego. Jego połączone obszary odpowiadają za percepcję, ruch, pamięć, mowę i regulację czynności organizmu.",
  stomach:
    "Mięśniowy zbiornik między przełykiem a jelitem cienkim. Magazynuje i miesza pokarm z kwasem i enzymami przed przejściem do dwunastnicy.",
  spleen:
    "Narząd limfatyczny w lewym górnym kwadrancie brzucha. Filtruje krew, usuwa zużyte krwinki i uczestniczy w odpowiedzi immunologicznej.",
  pancreas:
    "Narząd jamy brzusznej o funkcji trawiennej i dokrewnej. Dostarcza enzymy do jelita cienkiego oraz wydziela insulinę i glukagon.",
  "urinary bladder":
    "Mięśniowy zbiornik w miednicy, gromadzący mocz spływający z nerek moczowodami.",
  trachea:
    "Główna droga oddechowa łącząca krtań z oskrzelami. Pierścienie chrzęstne utrzymują jej drożność podczas oddychania.",
  diaphragm:
    "Szeroki mięsień oddzielający klatkę piersiową od jamy brzusznej. Kurcząc się, zwiększa objętość klatki i wspomaga wdech.",
};

export function explanation(name: string, system: SystemId) {
  return (
    EXPLANATIONS[name.toLowerCase()] ??
    SYSTEMS.find((s) => s.id === system)?.description ??
    ""
  );
}
