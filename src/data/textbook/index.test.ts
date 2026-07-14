import { getDomains, getDomain } from './index';

describe('Textbook Domains', () => {
  describe('getDomains', () => {
    it('should return an array of domains', () => {
      const domains = getDomains();
      expect(Array.isArray(domains)).toBe(true);
      expect(domains.length).toBe(8); // based on the 8 imported domains
    });

    it('should contain valid domain objects', () => {
      const domains = getDomains();
      domains.forEach(domain => {
        expect(domain).toHaveProperty('id');
        expect(domain).toHaveProperty('title');
        expect(domain).toHaveProperty('shortTitle');
        expect(domain).toHaveProperty('sections');
        expect(Array.isArray(domain.sections)).toBe(true);
      });
    });
  });

  describe('getDomain', () => {
    it('should return a specific domain by id', () => {
      const domains = getDomains();
      const firstDomainId = domains[0].id;

      const domain = getDomain(firstDomainId);
      expect(domain).toBeDefined();
      expect(domain?.id).toBe(firstDomainId);
    });

    it('should return undefined for a non-existent domain id', () => {
      const domain = getDomain('non-existent-domain');
      expect(domain).toBeUndefined();
    });
  });
});
