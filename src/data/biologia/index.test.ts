import { getBiologiaRecords, getBiologiaRecord, biologia } from './index';

describe('biologia data access functions', () => {
  describe('getBiologiaRecords', () => {
    it('should return all biologia records', () => {
      const records = getBiologiaRecords();
      expect(records).toBeDefined();
      expect(Array.isArray(records)).toBe(true);
      expect(records.length).toBe(biologia.records.length);
      expect(records).toEqual(biologia.records);
    });
  });

  describe('getBiologiaRecord', () => {
    it('should return a specific record when given a valid year and month', () => {
      const year = 2016;
      const month = 'maj';
      const record = getBiologiaRecord(year, month);

      expect(record).toBeDefined();
      expect(record?.year).toBe(year);
      expect(record?.month).toBe(month);
      expect(record?.examCode).toBe('MBI-R1_1P-162');
    });

    it('should return undefined for a non-existent year', () => {
      const record = getBiologiaRecord(1999, 'maj');
      expect(record).toBeUndefined();
    });

    it('should return undefined for a non-existent month', () => {
      const record = getBiologiaRecord(2016, 'grudzień');
      expect(record).toBeUndefined();
    });

    it('should return undefined when both year and month are invalid', () => {
        const record = getBiologiaRecord(1999, 'grudzień');
        expect(record).toBeUndefined();
    });
  });
});
