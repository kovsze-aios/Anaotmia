import React from "react";
import { describe, expect, it, vi } from "vitest";

import { parseChapterHtml } from "./AnatomyRichText";

/** Flattens the element tree to `["p", "strong", …]`, text nodes excluded. */
function tags(nodes: React.ReactNode[]): string[] {
  const out: string[] = [];
  const walk = (node: React.ReactNode) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!React.isValidElement(node)) return;
    out.push(typeof node.type === "string" ? node.type : "component");
    walk((node.props as { children?: React.ReactNode }).children);
  };
  nodes.forEach(walk);
  return out;
}

/** All text in the tree, in order. */
function text(nodes: React.ReactNode[]): string {
  let out = "";
  const walk = (node: React.ReactNode) => {
    if (typeof node === "string") out += node;
    else if (Array.isArray(node)) node.forEach(walk);
    else if (React.isValidElement(node))
      walk((node.props as { children?: React.ReactNode }).children);
  };
  nodes.forEach(walk);
  return out;
}

const parse = (html: string, link = false) => parseChapterHtml(html, link, vi.fn());

describe("parseChapterHtml", () => {
  it("builds the element tree the pipeline's tags describe", () => {
    const nodes = parse("<p>Serce jest <strong>pompą</strong>.</p>");
    expect(tags(nodes)).toEqual(["p", "strong"]);
    expect(text(nodes)).toBe("Serce jest pompą.");
  });

  it("nests lists correctly", () => {
    expect(tags(parse("<ul><li>trzon</li><li>koniec</li></ul>"))).toEqual([
      "ul",
      "li",
      "li",
    ]);
  });

  it("keeps the id anchors the table of contents scrolls to", () => {
    const [heading] = parse('<h3 id="budowa">Budowa</h3>') as React.ReactElement[];
    expect(heading.type).toBe("h3");
    expect((heading.props as { id?: string }).id).toBe("budowa");
  });

  it("keeps an ordered list's start offset", () => {
    const [list] = parse('<ol start="5"><li>piąty</li></ol>') as React.ReactElement[];
    expect((list.props as { start?: number }).start).toBe(5);
  });

  /**
   * The allow-list is enforced twice — once when the pipeline writes a chapter
   * and again here when it is read. A tag that somehow reached the data must
   * not become an element, and the words around it must survive.
   */
  it.each([
    ["<p>Serce.<script>alert(1)</script></p>", "script"],
    ['<p>Serce.<iframe src="x"></iframe></p>', "iframe"],
    ['<p>Serce.<img src=x onerror="alert(1)"></p>', "img"],
    ['<p>Serce.<a href="https://x.test">link</a></p>', "a"],
    ["<p>Serce.<style>body{display:none}</style></p>", "style"],
    ['<form action="/x"><p>Serce.</p></form>', "form"],
  ])("drops %s, keeping the prose", (html, forbidden) => {
    const nodes = parse(html);
    expect(tags(nodes)).not.toContain(forbidden);
    expect(text(nodes)).toContain("Serce.");
  });

  it("never carries an event handler across from the source", () => {
    const [p] = parse('<p onclick="steal()">Serce.</p>') as React.ReactElement[];
    expect(Object.keys(p.props as object)).not.toContain("onclick");
    expect(Object.keys(p.props as object)).not.toContain("onClick");
  });

  it("decodes entities so escaped markup reads as text", () => {
    expect(text(parse("<p>Zapis &lt;p&gt; oznacza akapit.</p>"))).toBe(
      "Zapis <p> oznacza akapit.",
    );
  });

  it("survives unbalanced markup rather than losing the rest of the chapter", () => {
    expect(text(parse("<p>Serce <strong>bije.</p>"))).toBe("Serce bije.");
    expect(text(parse("Serce bije.</p></div>"))).toBe("Serce bije.");
  });

  describe("term linking", () => {
    it("turns a structure into a button when linking is on", () => {
      const nodes = parse("<p>Wątroba leży pod przeponą.</p>", true);
      expect(tags(nodes)).toContain("button");
      expect(text(nodes)).toBe("Wątroba leży pod przeponą.");
    });

    it("leaves the prose untouched when linking is off", () => {
      const nodes = parse("<p>Wątroba leży pod przeponą.</p>", false);
      expect(tags(nodes)).not.toContain("button");
      expect(text(nodes)).toBe("Wątroba leży pod przeponą.");
    });

    it("hands the atlas the mesh name, not the inflected word", () => {
      const onSelect = vi.fn();
      const nodes = parseChapterHtml("<p>Badanie wątroby.</p>", true, onSelect);
      const button = findFirst(nodes, "button")!;
      (button.props as { onClick: () => void }).onClick();
      expect(onSelect).toHaveBeenCalledWith("liver", "Wątroba (Hepar)");
    });

    /**
     * Hydration depends on the parse being a pure function of the string: the
     * server and the client must build the same tree from the same input.
     */
    it("is deterministic", () => {
      const html = "<p>Wątroba, trzustka i <em>śledziona</em>.</p>";
      expect(tags(parse(html, true))).toEqual(tags(parse(html, true)));
      expect(text(parse(html, true))).toEqual(text(parse(html, true)));
    });
  });
});

function findFirst(nodes: React.ReactNode[], tag: string): React.ReactElement | null {
  for (const node of nodes) {
    if (Array.isArray(node)) {
      const hit = findFirst(node, tag);
      if (hit) return hit;
    }
    if (!React.isValidElement(node)) continue;
    if (node.type === tag) return node;
    const kids = (node.props as { children?: React.ReactNode }).children;
    const hit = findFirst(Array.isArray(kids) ? kids : [kids], tag);
    if (hit) return hit;
  }
  return null;
}
