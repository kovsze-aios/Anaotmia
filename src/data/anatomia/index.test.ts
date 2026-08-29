import { getDomain, getDomains } from "./index";
import { osteology } from "./domain-01-osteology";

describe("Textbook Data Index", () => {
  describe("getDomains", () => {
    it("should return an array of domains", () => {
      const domains = getDomains();
      expect(Array.isArray(domains)).toBe(true);
      expect(domains.length).toBeGreaterThan(0);
    });
  });

  describe("getDomain", () => {
    it("should return a domain when given an existing valid ID", () => {
      const domain = getDomain(osteology.id);
      expect(domain).toBeDefined();
      expect(domain?.id).toBe(osteology.id);
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
