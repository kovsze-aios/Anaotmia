import { describe, expect, it } from "vitest";

import { MAX_SPEECH_CHUNK, chunkForSpeech, htmlToSpeechText } from "./speechText";

describe("htmlToSpeechText", () => {
  it("keeps block boundaries so adjacent paragraphs are not read as one word", () => {
    expect(htmlToSpeechText("<p>Kość udowa.</p><p>Jest długa.</p>")).toBe(
      "Kość udowa.\nJest długa.",
    );
  });

  it("drops inline markup without eating the words inside it", () => {
    expect(
      htmlToSpeechText("<p>Kość udowa (<strong>femur</strong>) jest <em>długa</em>.</p>"),
    ).toBe("Kość udowa (femur) jest długa.");
  });

  it("treats <br> and list items as line breaks", () => {
    expect(htmlToSpeechText("<p>Pierwszy<br>Drugi</p>")).toBe("Pierwszy\nDrugi");
    expect(htmlToSpeechText("<ul><li>trzon</li><li>koniec</li></ul>")).toBe(
      "trzon\nkoniec",
    );
  });

  it("collapses whitespace and drops blank lines", () => {
    expect(htmlToSpeechText("<p>  Kość   udowa  </p>\n\n<p></p><p>Druga.</p>")).toBe(
      "Kość udowa\nDruga.",
    );
  });

  it("decodes entities after stripping, so escaped markup survives as text", () => {
    // `&lt;p&gt;` is text the author escaped on purpose. Decoding before the
    // tag pass would recreate a tag and then delete it along with its content.
    expect(htmlToSpeechText("<p>Zapis &lt;p&gt; oznacza akapit.</p>")).toBe(
      "Zapis <p> oznacza akapit.",
    );
    expect(htmlToSpeechText("<p>Kość&nbsp;udowa &amp; miednica.</p>")).toBe(
      "Kość udowa & miednica.",
    );
  });

  it("returns an empty string for empty or tag-only input", () => {
    expect(htmlToSpeechText("")).toBe("");
    expect(htmlToSpeechText("<p></p><br>")).toBe("");
  });
});

describe("chunkForSpeech", () => {
  it("never emits a chunk longer than the limit", () => {
    const text = htmlToSpeechText(
      `<p>${"Kość udowa jest najdłuższą kością szkieletu człowieka. ".repeat(40)}</p>`,
    );
    const chunks = chunkForSpeech(text);

    expect(chunks.length).toBeGreaterThan(1);
    for (const chunk of chunks) expect(chunk.length).toBeLessThanOrEqual(MAX_SPEECH_CHUNK);
  });

  it("packs whole sentences together rather than cutting mid-sentence", () => {
    expect(chunkForSpeech("Pierwsza. Druga. Trzecia.")).toEqual([
      "Pierwsza. Druga. Trzecia.",
    ]);
  });

  it("keeps a heading in its own chunk, so it is not run into the paragraph", () => {
    const text = htmlToSpeechText("<h3>Kość udowa</h3><p>Jest najdłuższa.</p>");
    expect(chunkForSpeech(text)).toEqual(["Kość udowa", "Jest najdłuższa."]);
  });

  it("splits a single over-long sentence on word boundaries", () => {
    const long = `Przyczepy ${"mięsień ".repeat(60)}kończą się tutaj`;
    const chunks = chunkForSpeech(long);

    expect(chunks.length).toBeGreaterThan(1);
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(MAX_SPEECH_CHUNK);
      // A word split across two utterances would be pronounced as two words.
      expect(chunk).not.toMatch(/^\s|\s$/);
    }
    expect(chunks.join(" ").replace(/\s+/g, " ")).toBe(long.replace(/\s+/g, " "));
  });

  it("loses no words: rejoining the chunks reproduces the prose", () => {
    const text = htmlToSpeechText(
      "<h3>Miednica</h3><p>Miednica (<em>pelvis</em>) łączy tułów z kończynami. " +
        "Tworzą ją kości miedniczne oraz kość krzyżowa.</p><ul><li>talerz</li></ul>",
    );
    expect(chunkForSpeech(text).join(" ")).toBe(text.split("\n").join(" "));
  });

  it("returns nothing for empty input", () => {
    expect(chunkForSpeech("")).toEqual([]);
    expect(chunkForSpeech("   \n  ")).toEqual([]);
  });
});
