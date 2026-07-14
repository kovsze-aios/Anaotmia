import { describe, it, expect } from 'vitest';
import { getChemiaRecords, getChemiaRecord } from './index';

describe('chemia data access functions', () => {
  describe('getChemiaRecords', () => {
    it('should return an array of matura year records', () => {
      const records = getChemiaRecords();

      // Verify it's an array
      expect(Array.isArray(records)).toBe(true);

      // Verify the expected length
      expect(records).toHaveLength(5);

      // Verify that the objects have the correct shape
      records.forEach(record => {
        expect(record).toHaveProperty('year');
        expect(record).toHaveProperty('month');
        expect(record).toHaveProperty('examCode');
        expect(record).toHaveProperty('questions');
        expect(Array.isArray(record.questions)).toBe(true);
      });

      // Verify the specific years are present
      const years = records.map(r => r.year);
      expect(years).toContain(2016);
      expect(years).toContain(2017);
      expect(years).toContain(2018);
      expect(years).toContain(2019);
      expect(years).toContain(2020);
    });
  });

  describe('getChemiaRecord', () => {
    it('should return a specific record for valid year and month', () => {
      const record = getChemiaRecord(2016, 'maj');

      expect(record).toBeDefined();
      expect(record?.year).toBe(2016);
      expect(record?.month).toBe('maj');
      expect(record?.examCode).toBe('MCH-R1_1P-162');
      expect(record?.questions.length).toBeGreaterThan(0);
    });

    it('should return undefined for non-existent year', () => {
      const record = getChemiaRecord(1999, 'maj');
      expect(record).toBeUndefined();
    });

    it('should return undefined for non-existent month', () => {
      const record = getChemiaRecord(2016, 'styczeń');
      expect(record).toBeUndefined();
    });
  });
});
