import { describe, it, expect } from "vitest";
import { getChemiaRecord, getChemiaRecords } from "./index";

describe("Chemia data functions", () => {
  describe("getChemiaRecords", () => {
    it("should return an array of records", () => {
      const records = getChemiaRecords();
      expect(Array.isArray(records)).toBe(true);
      expect(records.length).toBeGreaterThan(0);
    });
  });

  describe("getChemiaRecord", () => {
    it("should return a record for an existing year and month", () => {
      // From the data, 2016, "maj" exists
      const record = getChemiaRecord(2016, "maj");
      expect(record).toBeDefined();
      expect(record?.year).toBe(2016);
      expect(record?.month).toBe("maj");
    });

    it("should return undefined for a missing year", () => {
      const record = getChemiaRecord(1999, "maj");
      expect(record).toBeUndefined();
    });

    it("should return undefined for a missing month", () => {
      const record = getChemiaRecord(2016, "nie-istnieje");
      expect(record).toBeUndefined();
    });

    it("should return undefined for both missing year and missing month", () => {
      const record = getChemiaRecord(1999, "nie-istnieje");
      expect(record).toBeUndefined();
    });
  });
});
