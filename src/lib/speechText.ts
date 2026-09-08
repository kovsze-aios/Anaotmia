/**
 * Preparing chapter HTML for `speechSynthesis`.
 *
 * Two jobs, both pure so they can be tested without a DOM: turn the rendered
 * markup into plain prose, and cut that prose into utterance-sized pieces.
 *
 * A regex stripper rather than `DOMParser` because the input is not arbitrary
 * HTML. The ingestion pipeline validates every chapter against an allow-list
 * (`p, br, strong, b, em, i, ul, ol, li, h3, h4, span`), and the corpus as it
 * stands uses eight of those tags and contains no character entities at all —
 * it is written as raw UTF-8 Polish. That makes the regex exact for this input
 * while keeping the module free of a DOM dependency, so it runs in the node
 * test environment the rest of the suite uses.
 */

/**
 * Tags that end a spoken line. Block boundaries have to become separators
 * before the tags are dropped, or `<p>A</p><p>B</p>` is read as one word.
 */
const BLOCK_TAG =
  /<\/?(?:p|div|br|h[1-6]|li|ul|ol|tr|table|section|article|blockquote|figcaption)\b[^>]*>/gi;

const ANY_TAG = /<[^>]*>/g;

/**
 * The five XML predefined entities plus `&nbsp;`. None of these appear in the
 * corpus today; decoding them is insurance against a future pipeline change,
 * so a stray `&amp;` is never read aloud as "ampersand semicolon".
 */
const ENTITY = /&(?:nbsp|amp|lt|gt|quot|apos|#39);/g;

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
};

/**
 * An italic span *and everything in it*.
 *
 * The pipeline prompt reserves `<em>` for "nazw łacińskich i pojęć
 * drugorzędnych", and in practice it is Latin: of 11,601 spans in the corpus,
 * 9 contain a Polish letter — 0.08%. Those nine are the price of the rule, and
 * they buy the removal of ~11,590 Latin terms that a pl-PL voice mangles.
 *
 * `<i>` is matched too. The corpus does not use it today, but the pipeline's
 * allow-list permits it and it carries the same meaning.
 *
 * The backreference makes the closing tag match the opening one, so a stray
 * `</em>` cannot swallow a paragraph. An unclosed `<em>` simply fails to match
 * here and loses only its tag to the general strip below — the text survives,
 * which is the right way to fail.
 */
const ITALIC_SPAN = /<(em|i)\b[^>]*>[\s\S]*?<\/\1\s*>/gi;

/** Innermost parenthetical, so a gloss can be judged on its own contents. */
const PARENTHETICAL = /[ \t]*\(([^()]*)\)/g;

/**
 * Words that cannot hold a bracket up on their own: the gloss markers that
 * introduce a term ("łac.", "ang.") and the conjunctions that join two of
 * them ("… lub …").
 */
const FILLER_WORDS = new Set([
  "łac",
  "ang",
  "gr",
  "lat",
  "np",
  "syn",
  "zob",
  "por",
  "i",
  "oraz",
  "lub",
  "albo",
  "czyli",
]);

/** Splits a gloss into words, discarding the punctuation between them. */
const WORD_SEPARATOR = /[\s,;:.–—/()-]+/;

/**
 * True when a parenthetical has nothing left to say.
 *
 * Latin in this corpus is nearly always a parenthesised gloss — `(<em>…</em>)`
 * is the single commonest shape, over two thousand times — so removing the
 * term strands an empty bracket. What can remain is a marker, a conjunction
 * and punctuation, none of it worth speaking.
 *
 * Tokenising rather than pattern-matching the fillers in place, because `\b`
 * is defined over `[A-Za-z0-9_]`: there is no word boundary before the `ł` of
 * "łac", so a `\b`-anchored pattern silently never fires on the one prefix
 * that matters most — it accounts for 73 of the 78 glosses in the corpus.
 * Tags are dropped first, or the letters inside `<strong>` would read as
 * content and hold the bracket open.
 */
function isHollow(inner: string): boolean {
  return inner
    .replace(ANY_TAG, " ")
    .split(WORD_SEPARATOR)
    .filter(Boolean)
    .every((word) => FILLER_WORDS.has(word.toLowerCase()));
}

/**
 * Drops Latin terminology and the punctuation it leaves behind.
 *
 * Runs on the markup, before tags are stripped, because `<em>` is the only
 * signal distinguishing a Latin term from the Polish around it — once the tags
 * are gone, so is the ability to tell them apart.
 */
export function stripLatinTerms(html: string): string {
  return (
    html
      .replace(ITALIC_SPAN, "")
      .replace(PARENTHETICAL, (whole: string, inner: string) => {
        if (isHollow(inner)) return "";
        // A gloss that keeps a Polish note loses the comma that separated it
        // from the term now gone: "(, u dorosłych)" opens on a bare pause.
        const tidied = inner.replace(/^[\s,;]+/, "").replace(/[\s,;]+$/, "");
        return tidied === inner ? whole : ` (${tidied})`;
      })
      // "Kość udowa , widziana z przodu ." — close the gaps the removal opened.
      .replace(/[ \t]{2,}/g, " ")
      .replace(/[ \t]+([,.;:!?])/g, "$1")
  );
}

/** A line worth speaking has at least one letter or digit in it. */
const SPEAKABLE = /[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;

/**
 * Chapter markup to speakable Polish prose: Latin gone, one line per block,
 * no tags, no runs of whitespace.
 *
 * Entities are decoded *after* the tags are stripped, never before. Decoding
 * first would turn an escaped `&lt;p&gt;` — text the author meant to be read —
 * into something the tag pass then deletes.
 */
export function htmlToSpeechText(html: string): string {
  if (!html) return "";

  return stripLatinTerms(html)
    .replace(BLOCK_TAG, "\n")
    .replace(ANY_TAG, "")
    .replace(ENTITY, (match) => ENTITIES[match] ?? match)
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    // A line reduced to "." by the Latin strip would be announced as a pause
    // out of nowhere, so it goes with the empty ones.
    .filter((line) => SPEAKABLE.test(line))
    .join("\n");
}

/**
 * Longest utterance handed to the engine.
 *
 * Deliberately short. Chrome truncates a long utterance after roughly fifteen
 * seconds of speech, and a chapter is far past that; queueing many small ones
 * sidesteps the cut-off entirely. It also makes pause and stop feel immediate
 * and gives the player a real progress signal, since `onend` fires per piece
 * rather than once at the very end.
 */
export const MAX_SPEECH_CHUNK = 220;

/** Splits an over-long sentence on word boundaries, never mid-word. */
function splitOnWords(text: string, max: number): string[] {
  const out: string[] = [];
  let buffer = "";

  for (const word of text.split(/\s+/)) {
    if (!buffer) buffer = word;
    else if (buffer.length + 1 + word.length <= max) buffer += ` ${word}`;
    else {
      out.push(buffer);
      buffer = word;
    }
  }
  if (buffer) out.push(buffer);
  return out;
}

/**
 * Cuts prose into utterance-sized chunks, preferring sentence boundaries.
 *
 * Lines are never merged across a block boundary: a heading stays its own
 * chunk, which is what produces the short natural pause before a new section
 * instead of running the heading into the paragraph under it.
 */
export function chunkForSpeech(text: string, max = MAX_SPEECH_CHUNK): string[] {
  const chunks: string[] = [];

  for (const line of text.split("\n")) {
    // Sentence enders, keeping the punctuation with the sentence it closes.
    // Polish anatomy prose is full of abbreviations ("m. sternohyoideus"), so
    // the fragments this over-splits are merged straight back below.
    const sentences = line.match(/[^.!?…]+[.!?…]*/g) ?? [];
    let buffer = "";

    for (const raw of sentences) {
      const sentence = raw.trim();
      if (!sentence) continue;

      if (!buffer) buffer = sentence;
      else if (buffer.length + 1 + sentence.length <= max) buffer += ` ${sentence}`;
      else {
        chunks.push(buffer);
        buffer = sentence;
      }
    }
    if (buffer) chunks.push(buffer);
  }

  // One sentence can still run past `max` on its own — a long enumeration of
  // attachments, say — so it gets broken up rather than handed over whole.
  return chunks.flatMap((chunk) =>
    chunk.length <= max ? [chunk] : splitOnWords(chunk, max),
  );
}
