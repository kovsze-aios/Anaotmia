import type { Locale } from "./config";
import { ANATOMY_TERMS_PL, POLISH_SIDE } from "./anatomy-terms-pl";

/**
 * Display-time translation of BodyParts3D structure names.
 *
 * This is deliberately an *interceptor*, not a data transform. The English name
 * is the structure's identity throughout the viewer:
 *
 *   - `explanation()` and `hasOrganExplanation()` key off it;
 *   - `SUGGESTED` organs are matched by English name;
 *   - the raycaster and selection state address parts by id, and `AtlasConcept`
 *     carries the English name alongside those ids.
 *
 * Translating at render time means the 3D engine, the highlighting and the
 * explanation lookups keep seeing exactly the strings they were built against,
 * whatever language the interface is in.
 *
 * Falls back to the original English string whenever a term is unknown, which
 * is the common case: the dictionary covers the major structures, not all
 * 2,234 meshes.
 */

/** Leading side qualifier, e.g. "Left femur" / "Right kidney". */
const LATERAL = /^(left|right)\s+(.+)$/i;

/** Lowercases only the first character, so "Kość udowa" → "kość udowa". */
function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

/**
 * Returns the localized display name for an anatomical structure, or the
 * original English string when there is no translation for it.
 *
 * @param englishName Name exactly as it appears in the atlas manifest.
 * @param locale      Active UI locale.
 */
export function translateAnatomyName(englishName: string, locale: Locale): string {
  if (locale !== "pl" || !englishName) return englishName;

  const key = englishName.trim().toLowerCase();

  const direct = ANATOMY_TERMS_PL[key];
  if (direct) return `${direct.pl} (${direct.latin})`;

  // 42% of dataset names are a side qualifier plus a base structure, so
  // resolving the base roughly doubles what the dictionary reaches. The Polish
  // side adjective agrees with the base noun's gender.
  const lateral = LATERAL.exec(key);
  if (lateral) {
    const side = lateral[1].toLowerCase() as "left" | "right";
    const base = ANATOMY_TERMS_PL[lateral[2]];
    if (base) {
      const adjective = POLISH_SIDE[side][base.gender];
      return `${adjective} ${lowerFirst(base.pl)} (${base.latin})`;
    }
  }

  return englishName;
}

/**
 * Text to match a search query against: the English name plus, when they
 * differ, the localized form. Searching for "wątroba" and searching for
 * "liver" should both find the liver.
 */
export function anatomySearchHaystack(englishName: string, locale: Locale): string {
  const translated = translateAnatomyName(englishName, locale);
  return translated === englishName
    ? englishName.toLowerCase()
    : `${englishName} ${translated}`.toLowerCase();
}

/** True when a translation exists for this name in the given locale. */
export function hasAnatomyTranslation(englishName: string, locale: Locale): boolean {
  return translateAnatomyName(englishName, locale) !== englishName;
}
