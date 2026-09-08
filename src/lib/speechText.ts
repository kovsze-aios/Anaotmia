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
 * Chapter markup to speakable prose: one line per block, no tags, no runs of
 * whitespace.
 *
 * Entities are decoded *after* the tags are stripped, never before. Decoding
 * first would turn an escaped `&lt;p&gt;` — text the author meant to be read —
 * into something the tag pass then deletes.
 */
export function htmlToSpeechText(html: string): string {
  if (!html) return "";

  return html
    .replace(BLOCK_TAG, "\n")
    .replace(ANY_TAG, "")
    .replace(ENTITY, (match) => ENTITIES[match] ?? match)
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
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
