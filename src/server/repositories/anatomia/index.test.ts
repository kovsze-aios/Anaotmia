import { getDomain, getDomains } from "./index";
import { tom1Domain } from "./domain-tom1";

describe("Textbook Data Index", () => {
  describe("getDomains", () => {
    it("should return an array of domains", () => {
      const domains = getDomains();
      expect(Array.isArray(domains)).toBe(true);
      expect(domains.length).toBeGreaterThan(0);
    });

    // The anatomy book is exactly the four source volumes. This pins that:
    // reintroducing a system domain or a compendium duplicate fails here
    // rather than quietly reappearing in the sidebar and the welcome grid.
    it("should expose exactly the four volumes, in reading order", () => {
      expect(getDomains().map((d) => d.id)).toEqual([
        "tom-1-anatomia-ogolna-sciany-tulowia",
        "tom-2-konczyna-gorna-i-dolna",
        "tom-3-uklady-narzadow-wewnetrznych",
        "tom-4-szyja-glowa-i-mozgowie",
      ]);
    });
  });

  describe("getDomain", () => {
    it("should return a domain when given an existing valid ID", () => {
      const domain = getDomain(tom1Domain.id);
      expect(domain).toBeDefined();
      expect(domain?.id).toBe(tom1Domain.id);
    });

    it("should return undefined when given a non-existent ID", () => {
      const domain = getDomain("non-existent-domain-id-12345");
      expect(domain).toBeUndefined();
    });

    it("should return undefined when given an empty string", () => {
      const domain = getDomain("");
      expect(domain).toBeUndefined();
    });
  });
});
