import { describe, it, expect } from 'vitest';
import { getBiologiaRecords, getBiologiaRecord, biologia } from './index';

describe('Biologia Data Module', () => {
  describe('getBiologiaRecords', () => {
    it('should return all biologia records', () => {
      const records = getBiologiaRecords();
      expect(records).toBeDefined();
      expect(Array.isArray(records)).toBe(true);
      expect(records).toBe(biologia.records);
    });
  });

  describe('getBiologiaRecord', () => {
    it('should return the correct record for a valid year and month', () => {
      const record = getBiologiaRecord(2016, 'maj');
      expect(record).toBeDefined();
      expect(record?.year).toBe(2016);
      expect(record?.month).toBe('maj');
    });

    it('should return undefined for a non-existent year', () => {
      const record = getBiologiaRecord(1999, 'maj');
      expect(record).toBeUndefined();
    });

    it('should return undefined for a non-existent month', () => {
      const record = getBiologiaRecord(2016, 'styczen');
      expect(record).toBeUndefined();
    });

    it('should return undefined when both year and month are invalid', () => {
      const record = getBiologiaRecord(1999, 'styczen');
      expect(record).toBeUndefined();
    });

    it('should handle case-sensitive month mismatch', () => {
      const record = getBiologiaRecord(2016, 'Maj');
      expect(record).toBeUndefined();
    });

    it('should handle empty strings', () => {
      const record = getBiologiaRecord(2016, '');
      expect(record).toBeUndefined();
    });

    it('should handle NaN as year', () => {
      const record = getBiologiaRecord(NaN, 'maj');
      expect(record).toBeUndefined();
    });
  });
});
