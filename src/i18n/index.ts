export { I18nProvider, useI18n } from "./I18nProvider";
export {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_SHORT,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from "./config";
export type { Dictionary } from "./dictionaries";
export {
  translateAnatomyName,
  anatomySearchHaystack,
  hasAnatomyTranslation,
} from "./anatomyNames";
export {
  ANATOMY_TERMS_PL,
  POLISH_SIDE,
  type AnatomyTerm,
  type PolishGender,
} from "./anatomy-terms-pl";
