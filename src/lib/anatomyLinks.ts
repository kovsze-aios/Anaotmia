import { ANATOMY_TERMS_PL } from "@/i18n";

/**
 * Finding anatomical structures inside Polish textbook prose.
 *
 * The dictionary in `anatomy-terms-pl.ts` maps a BodyParts3D mesh name to its
 * Polish and Latin terms. This goes the other way: given a paragraph, which
 * structures does it mention, and where? That is what lets a chapter link its
 * own words to the 3D model.
 *
 * Two things make this harder than a substring search.
 *
 * Polish inflects. "Czaszka" appears in the anatomy corpus 41 times and not
 * once in the nominative — it is always "czaszki", "czaszce", "czaszkę".
 * Matching the dictionary form alone finds a third of what is there and misses
 * the commonest structures entirely, so each word is matched by its stem plus
 * a short inflectional ending.
 *
 * And Polish is ambiguous. "Jądro" is a testis and also a cell nucleus and
 * also every grey-matter nucleus in the brain; "most" is the pons and also a
 * bridge; "wyspa" is the insula and also an island. Linking those would send a
 * student reading about the caudate nucleus to a 3D testis. Ambiguity is not
 * detectable from the string, so the words that carry it are listed and
 * excluded by hand.
 */

/**
 * Terms excluded because the Polish word means something else at least as
 * often as it means the structure.
 *
 * Keyed by the dictionary's Polish term, lowercased.
 */
const AMBIGUOUS = new Set([
  "jądro", // testis, but in a textbook far more often a brain or cell nucleus
  "most", // pons, but also the ordinary word for a bridge
  "wyspa", // insula, but also an island
  "skorupa", // putamen, but also a shell or crust
  "uzdeczka", // habenula, but also a frenulum elsewhere in the body
  "trzon", // shaft, but names the shaft of any bone or organ
  "warga", // lip, but also labium anywhere
  "brew", // eyebrow — too short and too common in ordinary prose
  "soczewka", // lens, but also an optical lens in physics passages
  "skóra", // skin — appears constantly as a generic word
]);

/**
 * Shortest Polish term that may be linked.
 *
 * Short words collide with ordinary vocabulary far more often, and a wrong
 * highlight in a medical text costs more than a missing one.
 */
const MIN_TERM_LENGTH = 6;

/** Polish letters, for word boundaries `\b` gets wrong on diacritics. */
const LETTER = "0-9A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż";

export interface AnatomyTermMatch {
  /** Offset of the match within the text it was found in. */
  start: number;
  end: number;
  /** The text exactly as it appears, inflection and all. */
  surface: string;
  /** Dictionary form, for the label. */
  pl: string;
  latin: string;
  /** BodyParts3D name — the atlas's identity for this structure. */
  englishName: string;
}

interface Entry {
  englishName: string;
  pl: string;
  latin: string;
  pattern: string;
}

/**
 * A word matched by its stem plus a short ending.
 *
 * The last character goes because it is the one Polish declension replaces;
 * up to three letters may follow, which covers the case endings without
 * reaching into the next word. Words too short to lose a character safely are
 * matched whole.
 */
function wordPattern(word: string): string {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (word.length < 5) return escaped;
  const stem = escaped.slice(0, -1);
  return `${stem}[${LETTER}]{0,3}`;
}

function buildEntries(): Entry[] {
  const entries: Entry[] = [];

  for (const [englishName, term] of Object.entries(ANATOMY_TERMS_PL)) {
    const pl = term.pl.trim();
    const key = pl.toLowerCase();

    if (pl.length < MIN_TERM_LENGTH || AMBIGUOUS.has(key)) continue;

    entries.push({
      englishName,
      pl,
      latin: term.latin,
      pattern: key.split(/\s+/).map(wordPattern).join("\\s+"),
    });
  }

  // Longest first, so "kość udowa" wins over "kość" at the same position.
  return entries.sort((a, b) => b.pl.length - a.pl.length);
}

const ENTRIES = buildEntries();

/** One regex over every term, so the text is scanned once rather than 400 times. */
const MATCHER = new RegExp(
  `(?<![${LETTER}])(?:${ENTRIES.map((e) => e.pattern).join("|")})(?![${LETTER}])`,
  "giu",
);

/**
 * Polish builds adjectives off the same stem as the noun, and the inflection
 * window above cannot tell them apart: "czaszk-" + "owe" is *cranial*, not
 * *skull*, and "żuchw-" + "owy" is *mandibular*. Both showed up in the corpus —
 * thirteen and six times in sixty chapters — pointing an adjective at a mesh.
 *
 * `-owi` is deliberately absent: it is the dative of a noun, not an adjective.
 */
const ADJECTIVAL_ENDING = /(?:owy|owa|owe|ową|owych|owym)$/iu;

/** True when a matched word is the adjective rather than the noun. */
function isAdjectivalForm(surface: string, dictionaryForm: string): boolean {
  const words = surface.toLowerCase().split(/\s+/);
  const dictWords = dictionaryForm.toLowerCase().split(/\s+/);

  return words.some((word, i) => {
    // A dictionary term that is itself adjectival ("kość udowa") is fine.
    if (dictWords[i] && ADJECTIVAL_ENDING.test(dictWords[i])) return false;
    return ADJECTIVAL_ENDING.test(word);
  });
}

/** How many structures the linker can recognise. */
export const LINKABLE_TERM_COUNT = ENTRIES.length;

/**
 * Every anatomical structure mentioned in a run of plain text.
 *
 * Matches never overlap: the scan is left to right and each match resumes
 * after the previous one. Deterministic, so server and client render the same
 * tree and hydration has nothing to disagree about.
 */
export function findAnatomyTerms(text: string): AnatomyTermMatch[] {
  if (!text) return [];

  const matches: AnatomyTermMatch[] = [];
  const re = new RegExp(MATCHER.source, MATCHER.flags);

  for (const m of text.matchAll(re)) {
    const surface = m[0];
    const entry = ENTRIES.find((e) =>
      new RegExp(`^(?:${e.pattern})$`, "iu").test(surface),
    );
    if (!entry) continue;
    if (isAdjectivalForm(surface, entry.pl)) continue;

    matches.push({
      start: m.index,
      end: m.index + surface.length,
      surface,
      pl: entry.pl,
      latin: entry.latin,
      englishName: entry.englishName,
    });
  }

  return matches;
}
