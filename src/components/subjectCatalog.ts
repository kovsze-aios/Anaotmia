import type { Dictionary } from "@/i18n";

type SubjectKey = keyof Dictionary["subjects"];
type DomainKey = keyof Dictionary["domains"];

/**
 * Everything about a subject card that is *not* language-dependent: the route,
 * the icon and the colour. The copy is referenced by dictionary key, so the
 * cards follow the language switcher and a renamed key breaks the build rather
 * than silently rendering nothing.
 *
 * Shared by the landing grid (`Topics`) and the `/theory` index so the two
 * cannot drift apart.
 */
export const SUBJECT_CARDS: {
  key: SubjectKey;
  subtitleKey: SubjectKey;
  bodyKey: SubjectKey;
  emphasisKey: SubjectKey;
  href: string;
  icon: string;
  color: string;
}[] = [
  {
    key: "anatomy",
    subtitleKey: "academicSubtitle",
    bodyKey: "anatomyBody",
    emphasisKey: "anatomyEmphasis",
    href: "/theory/anatomia",
    icon: "🩺",
    color: "#3a5062",
  },
  {
    key: "physiology",
    subtitleKey: "academicSubtitle",
    bodyKey: "physiologyBody",
    emphasisKey: "physiologyEmphasis",
    href: "/theory/fizjologia",
    icon: "🫀",
    color: "#e63946",
  },
  {
    key: "biology",
    subtitleKey: "maturaSubtitle",
    bodyKey: "biologyBody",
    emphasisKey: "biologyEmphasis",
    href: "/theory/biologia",
    icon: "🌿",
    color: "#2e7d32",
  },
  {
    key: "chemistry",
    subtitleKey: "maturaSubtitle",
    bodyKey: "chemistryBody",
    emphasisKey: "chemistryEmphasis",
    href: "/theory/chemia",
    icon: "🧪",
    color: "#6a1b9a",
  },
];

/** The eight anatomy domains shown on the landing page. */
export const ANATOMY_DOMAINS: {
  key: DomainKey;
  bodyKey: DomainKey;
  icon: string;
  color: string;
}[] = [
  { key: "osteology", bodyKey: "osteologyBody", icon: "🦴", color: "#4a90d9" },
  { key: "myology", bodyKey: "myologyBody", icon: "💪", color: "#e74c3c" },
  { key: "nervous", bodyKey: "nervousBody", icon: "🧠", color: "#2ecc71" },
  { key: "endocrine", bodyKey: "endocrineBody", icon: "🔬", color: "#9b59b6" },
  { key: "cardioResp", bodyKey: "cardioRespBody", icon: "❤️", color: "#f39c12" },
  { key: "digestive", bodyKey: "digestiveBody", icon: "🍽️", color: "#1abc9c" },
  { key: "urogenital", bodyKey: "urogenitalBody", icon: "🫘", color: "#e67e22" },
  { key: "sensory", bodyKey: "sensoryBody", icon: "👁️", color: "#3498db" },
];

/** CKE exam-paper cards on the `/theory` index. */
export const EXAM_SHEETS: {
  key: "examSheetsBiology" | "examSheetsChemistry";
  href: string;
  icon: string;
  color: string;
}[] = [
  { key: "examSheetsBiology", href: "/matura/biologia", icon: "📝", color: "#455a64" },
  { key: "examSheetsChemistry", href: "/matura/chemia", icon: "📝", color: "#37474f" },
];
