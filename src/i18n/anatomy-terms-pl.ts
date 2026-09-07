/**
 * Polish names for BodyParts3D anatomical structures.
 *
 * The 3D dataset ships English names only, and those names are also the
 * **identity** used by the viewer: `explanation()` looks structures up by
 * English name, and the raycaster matches on part ids. So nothing here ever
 * replaces stored data — these are display strings applied at render time by
 * `translateAnatomyName()`.
 *
 * Keys are the dataset name, lowercased. Values carry the Polish term, its
 * Latin equivalent, and the Polish grammatical gender.
 *
 * Gender is not decoration. 42% of the dataset's names carry a `Left `/`Right `
 * prefix, and the Polish adjective has to agree with the noun it modifies —
 * *lewa* kość udowa (f), *lewy* mięsień (m), *lewe* płuco (n). Recording the
 * gender once here lets the interceptor render every lateral variant correctly
 * instead of needing a separate entry per side.
 */

/** Polish grammatical gender: masculine, feminine, neuter. */
export type PolishGender = "m" | "f" | "n";

export interface AnatomyTerm {
  /** Polish term, capitalised as it should appear. */
  pl: string;
  /** Latin equivalent, shown in parentheses. Base nominative, not side-inflected. */
  latin: string;
  gender: PolishGender;
}

export const ANATOMY_TERMS_PL: Record<string, AnatomyTerm> = {
  /* ─── Bones / kości ─────────────────────────────────────────────────── */
  skull: { pl: "Czaszka", latin: "Cranium", gender: "f" },
  mandible: { pl: "Żuchwa", latin: "Mandibula", gender: "f" },
  maxilla: { pl: "Szczęka", latin: "Maxilla", gender: "f" },
  "frontal bone": { pl: "Kość czołowa", latin: "Os frontale", gender: "f" },
  "parietal bone": { pl: "Kość ciemieniowa", latin: "Os parietale", gender: "f" },
  "occipital bone": { pl: "Kość potyliczna", latin: "Os occipitale", gender: "f" },
  "temporal bone": { pl: "Kość skroniowa", latin: "Os temporale", gender: "f" },
  "vertebral column": { pl: "Kręgosłup", latin: "Columna vertebralis", gender: "m" },
  sacrum: { pl: "Kość krzyżowa", latin: "Os sacrum", gender: "f" },
  rib: { pl: "Żebro", latin: "Costa", gender: "n" },
  sternum: { pl: "Mostek", latin: "Sternum", gender: "m" },
  clavicle: { pl: "Obojczyk", latin: "Clavicula", gender: "m" },
  scapula: { pl: "Łopatka", latin: "Scapula", gender: "f" },
  humerus: { pl: "Kość ramienna", latin: "Humerus", gender: "f" },
  radius: { pl: "Kość promieniowa", latin: "Radius", gender: "f" },
  ulna: { pl: "Kość łokciowa", latin: "Ulna", gender: "f" },
  "carpal bone": { pl: "Kość nadgarstka", latin: "Os carpi", gender: "f" },
  "metacarpal bone": { pl: "Kość śródręcza", latin: "Os metacarpi", gender: "f" },
  "hip bone": { pl: "Kość miedniczna", latin: "Os coxae", gender: "f" },
  pelvis: { pl: "Miednica", latin: "Pelvis", gender: "f" },
  femur: { pl: "Kość udowa", latin: "Femur", gender: "f" },
  patella: { pl: "Rzepka", latin: "Patella", gender: "f" },
  tibia: { pl: "Kość piszczelowa", latin: "Tibia", gender: "f" },
  fibula: { pl: "Kość strzałkowa", latin: "Fibula", gender: "f" },
  calcaneus: { pl: "Kość piętowa", latin: "Calcaneus", gender: "f" },
  "nasal bone": { pl: "Kość nosowa", latin: "Os nasale", gender: "f" },
  "zygomatic bone": { pl: "Kość jarzmowa", latin: "Os zygomaticum", gender: "f" },
  "sphenoid bone": { pl: "Kość klinowa", latin: "Os sphenoidale", gender: "f" },
  "hyoid bone": { pl: "Kość gnykowa", latin: "Os hyoideum", gender: "f" },
  atlas: { pl: "Kręg szczytowy", latin: "Atlas", gender: "m" },
  axis: { pl: "Kręg obrotowy", latin: "Axis", gender: "m" },
  talus: { pl: "Kość skokowa", latin: "Talus", gender: "f" },

  /* ─── Organs / narządy ──────────────────────────────────────────────── */
  heart: { pl: "Serce", latin: "Cor", gender: "n" },
  brain: { pl: "Mózgowie", latin: "Encephalon", gender: "n" },
  cerebellum: { pl: "Móżdżek", latin: "Cerebellum", gender: "m" },
  "spinal cord": { pl: "Rdzeń kręgowy", latin: "Medulla spinalis", gender: "m" },
  lung: { pl: "Płuco", latin: "Pulmo", gender: "n" },
  trachea: { pl: "Tchawica", latin: "Trachea", gender: "f" },
  diaphragm: { pl: "Przepona", latin: "Diaphragma", gender: "f" },
  esophagus: { pl: "Przełyk", latin: "Oesophagus", gender: "m" },
  stomach: { pl: "Żołądek", latin: "Gaster", gender: "m" },
  duodenum: { pl: "Dwunastnica", latin: "Duodenum", gender: "f" },
  "small intestine": { pl: "Jelito cienkie", latin: "Intestinum tenue", gender: "n" },
  "large intestine": { pl: "Jelito grube", latin: "Intestinum crassum", gender: "n" },
  appendix: { pl: "Wyrostek robaczkowy", latin: "Appendix vermiformis", gender: "m" },
  liver: { pl: "Wątroba", latin: "Hepar", gender: "f" },
  gallbladder: { pl: "Pęcherzyk żółciowy", latin: "Vesica biliaris", gender: "m" },
  pancreas: { pl: "Trzustka", latin: "Pancreas", gender: "f" },
  spleen: { pl: "Śledziona", latin: "Lien", gender: "f" },
  thymus: { pl: "Grasica", latin: "Thymus", gender: "f" },
  kidney: { pl: "Nerka", latin: "Ren", gender: "f" },
  "adrenal gland": { pl: "Nadnercze", latin: "Glandula suprarenalis", gender: "n" },
  ureter: { pl: "Moczowód", latin: "Ureter", gender: "m" },
  "urinary bladder": { pl: "Pęcherz moczowy", latin: "Vesica urinaria", gender: "m" },
  urethra: { pl: "Cewka moczowa", latin: "Urethra", gender: "f" },
  prostate: { pl: "Gruczoł krokowy", latin: "Prostata", gender: "m" },
  testis: { pl: "Jądro", latin: "Testis", gender: "n" },
  tongue: { pl: "Język", latin: "Lingua", gender: "m" },
  skin: { pl: "Skóra", latin: "Cutis", gender: "f" },
  eyeball: { pl: "Gałka oczna", latin: "Bulbus oculi", gender: "f" },
  "cricoid cartilage": {
    pl: "Chrząstka pierścieniowata",
    latin: "Cartilago cricoidea",
    gender: "f",
  },

  /* ─── Muscles / mięśnie (all masculine: "mięsień") ──────────────────── */
  "external oblique": {
    pl: "Mięsień skośny zewnętrzny brzucha",
    latin: "Musculus obliquus externus abdominis",
    gender: "m",
  },
  "pectoralis major": {
    pl: "Mięsień piersiowy większy",
    latin: "Musculus pectoralis major",
    gender: "m",
  },
  "teres major": { pl: "Mięsień obły większy", latin: "Musculus teres major", gender: "m" },
  supraspinatus: {
    pl: "Mięsień nadgrzebieniowy",
    latin: "Musculus supraspinatus",
    gender: "m",
  },
  infraspinatus: {
    pl: "Mięsień podgrzebieniowy",
    latin: "Musculus infraspinatus",
    gender: "m",
  },
  subscapularis: {
    pl: "Mięsień podłopatkowy",
    latin: "Musculus subscapularis",
    gender: "m",
  },
  brachioradialis: {
    pl: "Mięsień ramienno-promieniowy",
    latin: "Musculus brachioradialis",
    gender: "m",
  },
  "flexor carpi radialis": {
    pl: "Mięsień zginacz promieniowy nadgarstka",
    latin: "Musculus flexor carpi radialis",
    gender: "m",
  },
  "extensor digitorum": {
    pl: "Mięsień prostownik palców",
    latin: "Musculus extensor digitorum",
    gender: "m",
  },
  "psoas major": {
    pl: "Mięsień lędźwiowy większy",
    latin: "Musculus psoas major",
    gender: "m",
  },
  "gluteus medius": {
    pl: "Mięsień pośladkowy średni",
    latin: "Musculus gluteus medius",
    gender: "m",
  },
  "adductor longus": {
    pl: "Mięsień przywodziciel długi",
    latin: "Musculus adductor longus",
    gender: "m",
  },
  "vastus lateralis": {
    pl: "Mięsień obszerny boczny",
    latin: "Musculus vastus lateralis",
    gender: "m",
  },
  "vastus medialis": {
    pl: "Mięsień obszerny przyśrodkowy",
    latin: "Musculus vastus medialis",
    gender: "m",
  },
  semitendinosus: {
    pl: "Mięsień półścięgnisty",
    latin: "Musculus semitendinosus",
    gender: "m",
  },
  semimembranosus: {
    pl: "Mięsień półbłoniasty",
    latin: "Musculus semimembranosus",
    gender: "m",
  },
  sternocleidomastoid: {
    pl: "Mięsień mostkowo-obojczykowo-sutkowy",
    latin: "Musculus sternocleidomastoideus",
    gender: "m",
  },
  "gluteus maximus": {
    pl: "Mięsień pośladkowy wielki",
    latin: "Musculus gluteus maximus",
    gender: "m",
  },
  sartorius: { pl: "Mięsień krawiecki", latin: "Musculus sartorius", gender: "m" },
  "rectus femoris": {
    pl: "Mięsień prosty uda",
    latin: "Musculus rectus femoris",
    gender: "m",
  },
  soleus: { pl: "Mięsień płaszczkowaty", latin: "Musculus soleus", gender: "m" },
  "tibialis anterior": {
    pl: "Mięsień piszczelowy przedni",
    latin: "Musculus tibialis anterior",
    gender: "m",
  },

  /* ─── Vessels and nerves / naczynia i nerwy ─────────────────────────── */
  aorta: { pl: "Aorta", latin: "Aorta", gender: "f" },
  "pulmonary trunk": { pl: "Pień płucny", latin: "Truncus pulmonalis", gender: "m" },
  "pulmonary artery": { pl: "Tętnica płucna", latin: "Arteria pulmonalis", gender: "f" },
  "common carotid artery": {
    pl: "Tętnica szyjna wspólna",
    latin: "Arteria carotis communis",
    gender: "f",
  },
  "brachial artery": { pl: "Tętnica ramienna", latin: "Arteria brachialis", gender: "f" },
  "femoral artery": { pl: "Tętnica udowa", latin: "Arteria femoralis", gender: "f" },
  "superior vena cava": { pl: "Żyła główna górna", latin: "Vena cava superior", gender: "f" },
  "inferior vena cava": { pl: "Żyła główna dolna", latin: "Vena cava inferior", gender: "f" },
  "optic nerve": { pl: "Nerw wzrokowy", latin: "Nervus opticus", gender: "m" },
};

/** Side adjectives, agreeing with the noun's gender. */
export const POLISH_SIDE: Record<"left" | "right", Record<PolishGender, string>> = {
  left: { m: "Lewy", f: "Lewa", n: "Lewe" },
  right: { m: "Prawy", f: "Prawa", n: "Prawe" },
};
