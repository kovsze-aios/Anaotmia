import type { SystemId } from "@/server/models";
import type { Locale } from "@/i18n";

/**
 * Presentation config for the 3D atlas.
 *
 * Only the parts that are *not* language-dependent live here: the display order
 * and the colour coding, which is anatomical rather than decorative and so is
 * identical in every locale and both themes. Panel labels come from the
 * dictionaries (`t.systems`).
 */
export const SYSTEMS: { id: SystemId; color: string }[] = [
  { id: "skeletal", color: "#e2d9ba" },
  { id: "muscular", color: "#a85b50" },
  { id: "cardiac", color: "#b96760" },
  { id: "sensory", color: "#b0c8ce" },
  { id: "arterial", color: "#c05245" },
  { id: "venous", color: "#527c9f" },
  { id: "nervous", color: "#d8b565" },
  { id: "respiratory", color: "#b98991" },
  { id: "digestive", color: "#b8916b" },
  { id: "urinary", color: "#b47961" },
  { id: "lymphatic", color: "#879f7c" },
  { id: "endocrine", color: "#c5a09a" },
  { id: "reproductive", color: "#bda098" },
  { id: "integumentary", color: "#ba9b7d" },
  { id: "connective", color: "#aec3bb" },
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

/**
 * Descriptive prose is anatomical *content*, not interface chrome, so it is not
 * part of the UI dictionaries. English (the upstream original) and Polish are
 * provided; every other locale falls back to English rather than showing text
 * in a language the visitor did not choose.
 */
const SYSTEM_DESCRIPTIONS: Partial<Record<Locale, Record<SystemId, string>>> = {
  en: {
    skeletal:
      "Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. Their internal tissue also stores minerals and produces blood cells.",
    muscular:
      "Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints, stabilize posture, and produce heat.",
    cardiac:
      "The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits.",
    sensory:
      "These structures contribute to special senses, including sight, hearing, and balance. Their specialized tissues detect stimuli and work with the nervous system to convey information.",
    arterial:
      "The heart drives blood through the circulation. Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs.",
    venous:
      "Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues; the pulmonary veins bring oxygenated blood back from the lungs.",
    nervous:
      "The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation of body functions.",
    respiratory:
      "The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood. Breathing depends on pressure changes produced by respiratory muscles.",
    digestive:
      "The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward. Accessory organs contribute bile and digestive enzymes.",
    urinary:
      "The kidneys filter blood and regulate fluid, electrolyte, and acid–base balance. Urine travels through the ureters to the bladder and exits through the urethra.",
    lymphatic:
      "Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes and other lymphoid organs support immune surveillance and responses.",
    endocrine:
      "Endocrine organs release hormones into the blood to coordinate processes such as metabolism, growth, stress responses, and reproduction.",
    reproductive:
      "The male reproductive structures represented here contribute to sperm production, maturation, transport, and the production of sex hormones.",
    integumentary:
      "The body surface provides an outer anatomical reference. The integumentary system forms a protective barrier and contributes to sensation and temperature regulation.",
    connective:
      "Cartilage, ligaments, and other connective tissues support, connect, and separate structures. Their roles include stabilizing joints and distributing mechanical loads.",
  },
  pl: {
    skeletal:
      "Kości tworzą rusztowanie ciała, chronią narządy i stanowią przyczepy dla mięśni. Tkanka kostna magazynuje też składniki mineralne i wytwarza komórki krwi.",
    muscular:
      "Mięśnie szkieletowe wytwarzają ruch, pociągając za swoje przyczepy. Wraz ze ścięgnami poruszają stawami, stabilizują postawę i wytwarzają ciepło.",
    cardiac:
      "Serce to mięśniowa pompa o czterech jamach. Jego zastawki kierują krew do przodu przez krążenie płucne i systemowe.",
    sensory:
      "Struktury odpowiedzialne za zmysły — wzrok, słuch i równowagę. Ich wyspecjalizowane tkanki odbierają bodźce i przekazują informacje do układu nerwowego.",
    arterial:
      "Tętnice prowadzą krew z serca do tkanek, a w krążeniu płucnym — do płuc.",
    venous:
      "Żyły odprowadzają krew w kierunku serca. Sieci powierzchowne i głębokie zbierają krew z tkanek; żyły płucne wracają z krwią utlenowaną.",
    nervous:
      "Mózgowie, rdzeń kręgowy i nerwy obwodowe przewodzą oraz przetwarzają sygnały. Odpowiadają za czucie, ruch, koordynację i regulację czynności organizmu.",
    respiratory:
      "Drogi oddechowe doprowadzają powietrze do płuc, gdzie zachodzi wymiana tlenu i dwutlenku węgla między powietrzem a krwią.",
    digestive:
      "Przewód pokarmowy rozkłada pokarm, wchłania składniki odżywcze i wodę oraz przesuwa treść dalej. Narządy dodatkowe dostarczają żółć i enzymy trawienne.",
    urinary:
      "Nerki filtrują krew i regulują gospodarkę wodno-elektrolitową oraz kwasowo-zasadową. Mocz spływa moczowodami do pęcherza.",
    lymphatic:
      "Naczynia limfatyczne odprowadzają nadmiar płynu tkankowego do krążenia. Węzły chłonne uczestniczą w nadzorze immunologicznym.",
    endocrine:
      "Gruczoły dokrewne wydzielają hormony do krwi, koordynując metabolizm, wzrost, reakcje na stres i rozród.",
    reproductive:
      "Przedstawione struktury męskiego układu rozrodczego uczestniczą w wytwarzaniu i transporcie plemników oraz produkcji hormonów płciowych.",
    integumentary:
      "Powierzchnia ciała stanowi zewnętrzny punkt odniesienia. Skóra tworzy barierę ochronną i uczestniczy w czuciu oraz termoregulacji.",
    connective:
      "Chrząstki, więzadła i inne tkanki łączne podpierają, łączą i rozdzielają struktury, stabilizując stawy i rozkładając obciążenia mechaniczne.",
  },
};

/** Keys are dataset names (English, lowercased), as they arrive from BodyParts3D. */
const ORGAN_EXPLANATIONS: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    heart:
      "A muscular pump in the chest. Its right side sends blood to the lungs; its left side sends blood through the systemic circulation.",
    liver:
      "A large organ beneath the right side of the diaphragm. It processes absorbed nutrients, produces bile, and synthesizes many proteins carried in the blood.",
    brain:
      "The central organ of the nervous system. Its interconnected regions support perception, movement, memory, language, and the regulation of bodily functions.",
    stomach:
      "A muscular chamber between the esophagus and small intestine. It stores and mixes food with acid and enzymes before releasing it into the duodenum.",
    spleen:
      "A lymphoid organ in the upper left abdomen. It filters blood, removes aging blood cells, and participates in immune responses.",
    pancreas:
      "An abdominal organ with digestive and endocrine roles. It supplies enzymes to the small intestine and releases hormones including insulin and glucagon.",
    "urinary bladder":
      "A muscular reservoir in the pelvis that stores urine arriving from the kidneys through the ureters.",
    trachea:
      "The main airway connecting the larynx to the bronchi. Its cartilage supports keep the airway open during breathing.",
    diaphragm:
      "A broad muscle separating the chest and abdomen. When it contracts, it increases chest volume and helps draw air into the lungs.",
  },
  pl: {
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
  },
};

/** True when a named organ has its own write-up, rather than a system overview. */
export function hasOrganExplanation(name: string, locale: Locale) {
  const key = name.toLowerCase();
  return Boolean(
    ORGAN_EXPLANATIONS[locale]?.[key] ?? ORGAN_EXPLANATIONS.en?.[key],
  );
}

/** Organ write-up if there is one, otherwise the parent system's overview. */
export function explanation(name: string, system: SystemId, locale: Locale) {
  const key = name.toLowerCase();
  return (
    ORGAN_EXPLANATIONS[locale]?.[key] ??
    ORGAN_EXPLANATIONS.en?.[key] ??
    SYSTEM_DESCRIPTIONS[locale]?.[system] ??
    SYSTEM_DESCRIPTIONS.en?.[system] ??
    ""
  );
}
