import type { SystemId } from "@/server/models";
import type { Locale } from "@/i18n";

/**
 * Presentation config for the 3D atlas.
 *
 * Colours are tuned for high-contrast medical realism (PBR subsurface + clearcoat
 * in `AnatomyScene.tsx`), differentiating muscles, vessels, nerves, bone, and viscera.
 */
export const SYSTEMS: { id: SystemId; color: string }[] = [
  { id: "skeletal", color: "#e8dec3" },
  { id: "muscular", color: "#a84239" },
  { id: "cardiac", color: "#b83232" },
  { id: "sensory", color: "#9ec4cf" },
  { id: "arterial", color: "#d13b30" },
  { id: "venous", color: "#3b6ea5" },
  { id: "nervous", color: "#e2bd64" },
  { id: "respiratory", color: "#c2828d" },
  { id: "digestive", color: "#c28e62" },
  { id: "urinary", color: "#b56e52" },
  { id: "lymphatic", color: "#769e6b" },
  { id: "endocrine", color: "#c99690" },
  { id: "reproductive", color: "#bfa096" },
  { id: "integumentary", color: "#c4a384" },
  { id: "connective", color: "#a6bdb6" },
];

export type View = "three-quarter" | "front" | "back" | "side";

export type RegionId =
  | "whole"
  | "head"
  | "thorax"
  | "abdomen"
  | "pelvis"
  | "hand"
  | "arm"
  | "leg"
  | "foot"
  | "spine";

export type InteractionMode = "inspect" | "peel";

export interface RegionPreset {
  id: RegionId;
  labelPl: string;
  labelEn: string;
  shortPl: string;
  shortEn: string;
  /** Default camera target in metres (Y-up). */
  target: [number, number, number];
  /** Camera offset direction (normalized in scene). */
  direction: [number, number, number];
  /** Distance from target in metres. */
  distance: number;
}

export const REGION_PRESETS: RegionPreset[] = [
  {
    id: "whole",
    labelPl: "Całe ciało",
    labelEn: "Whole body",
    shortPl: "Ciało",
    shortEn: "Body",
    target: [0, 0.85, 0],
    direction: [0.35, 0.06, 1],
    distance: 3.4,
  },
  {
    id: "head",
    labelPl: "Głowa i szyja (Mózgowie)",
    labelEn: "Head & Neck (Brain)",
    shortPl: "Głowa",
    shortEn: "Head",
    target: [0, 1.54, 0.02],
    direction: [0.28, 0.06, 0.96],
    distance: 0.56,
  },
  {
    id: "thorax",
    labelPl: "Klatka piersiowa (Serce i płuca)",
    labelEn: "Thorax (Heart & Lungs)",
    shortPl: "Klatka",
    shortEn: "Thorax",
    target: [0, 1.25, 0.02],
    direction: [0.22, 0.05, 0.97],
    distance: 0.78,
  },
  {
    id: "abdomen",
    labelPl: "Jama brzuszna (Narządy)",
    labelEn: "Abdomen (Viscera)",
    shortPl: "Brzuch",
    shortEn: "Abdomen",
    target: [0, 1.0, 0.02],
    direction: [0.2, 0.04, 0.98],
    distance: 0.74,
  },
  {
    id: "hand",
    labelPl: "Ręka i nadgarstek (Zbliżenie)",
    labelEn: "Hand & Wrist (Close-up)",
    shortPl: "Ręka",
    shortEn: "Hand",
    target: [-0.26, 0.79, 0.06],
    direction: [-0.32, 0.14, 0.94],
    distance: 0.44,
  },
  {
    id: "arm",
    labelPl: "Kończyna górna i bark",
    labelEn: "Upper Limb & Shoulder",
    shortPl: "Ramię",
    shortEn: "Arm",
    target: [-0.22, 1.12, 0.02],
    direction: [-0.42, 0.08, 0.9],
    distance: 0.88,
  },
  {
    id: "spine",
    labelPl: "Kręgosłup i grzbiet",
    labelEn: "Spine & Back",
    shortPl: "Kręgosłup",
    shortEn: "Spine",
    target: [0, 1.16, -0.04],
    direction: [0.22, 0.05, -0.97],
    distance: 1.05,
  },
  {
    id: "pelvis",
    labelPl: "Miednica i biodro",
    labelEn: "Pelvis & Hip",
    shortPl: "Miednica",
    shortEn: "Pelvis",
    target: [0, 0.83, 0.02],
    direction: [0.26, 0.08, 0.96],
    distance: 0.68,
  },
  {
    id: "leg",
    labelPl: "Kończyna dolna i kolano",
    labelEn: "Lower Limb & Knee",
    shortPl: "Noga",
    shortEn: "Leg",
    target: [-0.1, 0.46, 0.02],
    direction: [-0.28, 0.06, 0.96],
    distance: 1.15,
  },
  {
    id: "foot",
    labelPl: "Stopa i staw skokowy",
    labelEn: "Foot & Ankle",
    shortPl: "Stopa",
    shortEn: "Foot",
    target: [-0.1, 0.07, 0.05],
    direction: [-0.38, 0.24, 0.89],
    distance: 0.46,
  },
];

/** Everything the WebGL scene needs to know about what to draw. */
export interface ClippingState {
  enabled: boolean;
  /** Normalized plane offsets in [-1, 1] along anatomical X, Y, Z axes (1 = full, no cut). */
  x: number;
  y: number;
  z: number;
}

export interface SceneState {
  inspectorOpen?: boolean;
  explode: number;
  /** 0 = all layers intact, 1 = superficial layers peeled to deep core. */
  peelDepth?: number;
  /** IDs of individual structures peeled/hidden by user dissection. */
  peeled?: string[];
  /** Translucent X-Ray ghosting of unselected/outer structures. */
  xray?: boolean;
  /** Show 3D Spatial Callout Pins for the active organ. */
  showPins?: boolean;
  /** Currently inspected 3D sub-structure pin ID. */
  activePinId?: string | null;
  /** Real-time 3-axis anatomical clipping planes. */
  clipping?: ClippingState;
  /** Practical exam mode: hides 3D pin names and challenges student recall. */
  szpilkiMode?: boolean;
  /** Incremented to smoothly focus camera on the active sub-pin. */
  pinFocusTrigger?: number;
  /** Click behavior: inspect structure vs. peel layer on click. */
  mode?: InteractionMode;
  /** Active regional camera preset. */
  region?: RegionId;
  /** Incremented to smoothly fly the camera to the current selection. */
  focusTrigger?: number;
  /** Incremented with zoomStep (-1 or +1) to zoom in/out via UI buttons. */
  zoomTrigger?: number;
  zoomStep?: number;
  /** Incremented with azimuth/polar step to orbit via UI buttons. */
  orbitTrigger?: number;
  orbitAzimuth?: number;
  orbitPolar?: number;
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
      "Kości tworzą rusztowanie ciała, chronią narządy i stanowią przyczepy dla mięśni. Tkanka kostna magazynuje też składniki mineralne i wytwarza komórki krwi w szpiku czerwonym.",
    muscular:
      "Mięśnie szkieletowe wytwarzają ruch, pociągając za swoje przyczepy kostne. Układają się warstwowo (powierzchowne i głębokie), poruszają stawami, stabilizują postawę i wytwarzają ciepło.",
    cardiac:
      "Serce to mięśniowa pompa o czterech jamach zbudowana z tkanki mięśniowej poprzecznie prążkowanej typu sercowego. Jego zastawki kierują krew przez krążenie płucne i ustrojowe.",
    sensory:
      "Struktury odpowiedzialne za zmysły specjalne — wzrok, słuch i równowagę. Ich wyspecjalizowane receptory odbierają bodźce i przekazują impulsy do ośrodkowego układu nerwowego.",
    arterial:
      "Tętnice o sprężystych i mięśniowych ścianach wyprowadzają krew pod wysokim ciśnieniem z komór serca do tkanek (krążenie duże) oraz do płuc (krążenie małe).",
    venous:
      "Żyły odprowadzają krew z tkanek z powrotem do przedsionków serca. Wyposażone w zastawki sieci powierzchowne i głębokie zapobiegają cofaniu się krwi.",
    nervous:
      "Mózgowie, rdzeń kręgowy oraz nerwy czaszkowe i rdzeniowe przewodzą i integrują sygnały bioelektryczne, odpowiadając za czucie, ruch dowolny oraz regulację autonomiczną.",
    respiratory:
      "Drogi oddechowe doprowadzają powietrze do pęcherzyków płucnych, gdzie przez barierę pęcherzykowo-włośniczkową zachodzi dyfuzyjna wymiana tlenu i dwutlenku węgla.",
    digestive:
      "Przewód pokarmowy trawi pokarm mechanicznie i chemicznie, wchłania składniki odżywcze oraz wodę. Gruczoły dodatkowe (wątroba, trzustka) dostarczają żółć i enzymy trawienne.",
    urinary:
      "Nerki filtrują osocze krwi w nefronach, utrzymując homeostazę wodno-elektrolitową i kwasowo-zasadową. Mocz spływa moczowodami do pęcherza moczowego.",
    lymphatic:
      "Naczynia chłonne odprowadzają chłonkę (limfę) z przestrzeni międzykomórkowych do układu żylnego. Węzły chłonne i śledziona filtrują antygeny i wspierają odporność.",
    endocrine:
      "Gruczoły wydzielania wewnętrznego uwalniają hormony bezpośrednio do krwiobiegu, regulując metabolizm, wzrost, odpowiedź stresową i gospodarkę wapniowo-fosforanową.",
    reproductive:
      "Struktury męskiego układu rozrodczego odpowiadają za spermatogenezę, dojrzewanie i transport plemników oraz syntezę androgenów (testosteronu).",
    integumentary:
      "Powłoka wspólna (skóra i tkanka podskórna) stanowi zewnętrzną barierę ochronną organizmu, uczestniczy w termoregulacji, recepcji dotyku i syntezie witaminy D.",
    connective:
      "Chrząstki stawowe, więzadła, powięzie i krążki międzykręgowe łączą, amortyzują i stabilizują poszczególne elementy układu ruchu oraz narządy wewnętrzne.",
  },
};

/** Keys are dataset names (English, lowercased), as they arrive from BodyParts3D. */
const ORGAN_EXPLANATIONS: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    heart:
      "A muscular pump in the middle mediastinum. Its right side sends deoxygenated blood to the lungs; its left side pumps oxygenated blood into the aorta.",
    liver:
      "The largest internal gland, located beneath the right diaphragm. It detoxifies blood, processes nutrients from the portal vein, produces bile, and synthesizes plasma proteins.",
    brain:
      "The central command organ of the nervous system housed inside the neurocranium. Comprises the cerebrum, diencephalon, brainstem, and cerebellum.",
    stomach:
      "A J-shaped muscular dilatation of the digestive tract between the esophagus and duodenum. Secretes hydrochloric acid and pepsinogen to initiate protein digestion.",
    spleen:
      "The largest lymphoid organ, situated in the left hypochondrium. Filters senescent erythrocytes, stores platelets, and mounts adaptive immune responses.",
    pancreas:
      "A retroperitoneal exocrine and endocrine gland. Acinar cells secrete digestive enzymes into the duodenum, while islets of Langerhans release insulin and glucagon.",
    "urinary bladder":
      "A hollow smooth-muscle organ (detrusor) on the pelvic floor that stores urine received via the ureters before micturition.",
    trachea:
      "A cartilaginous and membranous tube of C-shaped hyaline rings connecting the cricoid cartilage of the larynx to the main bronchi at the carina.",
    diaphragm:
      "The primary dome-shaped muscle of inspiration separating the thoracic and abdominal cavities. Contraction flattens the dome and lowers intrathoracic pressure.",
  },
  pl: {
    heart:
      "Czterojamowa pompa mięśniowa w śródpiersiu środkowym. Prawa komora tłoczy krew odtlenowaną pniem płucnym do płuc, a lewa komora — krew utlenowaną do aorty.",
    liver:
      "Największy gruczoł ustroju położony w prawym podżebrzu pod przeponą. Odbiera krew z żyły wrotnej, metabolizuje składniki pokarmowe, detoksykuje ksenobiotyki i wytwarza żółć.",
    brain:
      "Nadrzędny ośrodek układu nerwowego chroniony przez kości mózgoczaszki i opony. Obejmuje kresomózgowie (korę mózgową), międzymózgowie, pień mózgu oraz móżdżek.",
    stomach:
      "Workowate rozszerzenie przewodu pokarmowego między przełykiem a dwunastnicą. Gruczoły żołądkowe wydzielają kwas solny (HCl) i pepsynogen, rozpoczynając trawienie białek.",
    spleen:
      "Największy narząd limfatyczny położony wewnątrzotrzewnowo w lewym podżebrzu. Odpowiada za hemolizę zużytych erytrocytów, magazynowanie krwi i proliferację limfocytów.",
    pancreas:
      "Gruczoł położony zaotrzewnowo o podwójnej funkcji: zewnątrzwydzielniczej (sok trzustkowy z amylazą, lipazą i trypsynogenem) oraz wewnątrzwydzielniczej (wyspy Langerhansa: insulina i glukagon).",
    "urinary bladder":
      "Mięśniowo-błoniasty zbiornik w miednicy mniejszej zbudowany z mięśnia wypieracza moczu. Gromadzi mocz spływający moczowodami z nerek.",
    trachea:
      "Droga oddechowa łącząca krtań (od wysokości kręgu C6) z rozdwojeniem na oskrzela główne (Th4/Th5). Usztywniona podkowiastymi chrząstkami szklistymi.",
    diaphragm:
      "Główny mięsień wdechowy oddzielający jamę klatki piersiowej od jamy brzusznej. Posiada rozwory dla aorty, przełyku oraz żyły głównej dolnej.",
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
