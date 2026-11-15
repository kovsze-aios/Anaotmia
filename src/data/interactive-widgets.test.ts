import { describe, expect, it } from "vitest";
import {
  INTERACTIVE_WIDGET_SPECS,
  getInteractiveWidgetsForChapter,
} from "./interactive-widgets";

describe("Interactive 3D Chemistry & Biology Widgets registry", () => {
  it("exposes all 4 expected interactive widget specifications", () => {
    expect(INTERACTIVE_WIDGET_SPECS).toHaveLength(4);
    expect(INTERACTIVE_WIDGET_SPECS.map((w) => w.id)).toEqual([
      "vsepr-orbitals-3d",
      "periodic-table-3d",
      "biomolecules-3d",
      "metabolism-simulator",
    ]);
  });

  it("matches Chemistry chapters by exact ID, stripped cm23- prefix, and keywords", () => {
    const vseprById = getInteractiveWidgetsForChapter({
      subject: "chemia",
      chapterId: "chem1-czesc-75-hybrydyzacja-orbitali-na-przykladzie-metanu",
    });
    expect(vseprById.map((w) => w.id)).toContain("vsepr-orbitals-3d");

    const periodicByPrefix = getInteractiveWidgetsForChapter({
      subject: "chemia-matura-2023",
      chapterId: "cm23-chem1-czesc-1-zadania-i-zakres-chemii-nieorganicznej",
    });
    expect(periodicByPrefix.map((w) => w.id)).toContain("periodic-table-3d");

    const vseprByKeyword = getInteractiveWidgetsForChapter({
      subject: "chemia-matura-2023",
      chapterId: "cm23-custom-module",
      chapterTitle: "Hybrydyzacja orbitali i geometria VSEPR",
    });
    expect(vseprByKeyword.map((w) => w.id)).toContain("vsepr-orbitals-3d");
    expect(vseprByKeyword.every((w) => w.domain === "chemistry")).toBe(true);
  });

  it("matches Biology and Biochemistry chapters across bio1-, bm23-, bm15-, and biochem- prefixes", () => {
    const bioPhotosynthesis = getInteractiveWidgetsForChapter({
      subject: "biologia",
      chapterId: "bio1-czesc-60-fotosynteza-autotroficzne-odzywianie-sie-organizmow",
    });
    expect(bioPhotosynthesis.map((w) => w.id)).toContain("metabolism-simulator");

    const bioDnaBm23 = getInteractiveWidgetsForChapter({
      subject: "biologia-matura-2023",
      chapterId:
        "bm23-bio4-czesc-5-kwasy-nukleinowe-budowa-lokalizacja-i-replikacja-dna",
    });
    expect(bioDnaBm23.map((w) => w.id)).toContain("biomolecules-3d");

    const bioBm15Keyword = getInteractiveWidgetsForChapter({
      subject: "biologia-matura-2015",
      chapterId: "bm15-mod-12",
      chapterTitle: "Aminokwasy, białka i replikacja DNA",
    });
    expect(bioBm15Keyword.map((w) => w.id)).toContain("biomolecules-3d");
    expect(bioBm15Keyword.every((w) => w.domain === "biology")).toBe(true);

    const biochemKinetics = getInteractiveWidgetsForChapter({
      subject: "biochemia",
      chapterId: "biochem-rownanie-michaelisa-mentena",
    });
    expect(biochemKinetics.map((w) => w.id)).toContain("metabolism-simulator");

    const biochemDna = getInteractiveWidgetsForChapter({
      subject: "biochemia",
      chapterId: "biochem-kwas-nukleinowy",
      chapterTitle: "Budowa DNA i białek",
    });
    expect(biochemDna.map((w) => w.id)).toContain("biomolecules-3d");
  });

  it("returns [] for anatomia, fizjologia, and fizyka even when titles overlap keywords", () => {
    for (const subject of ["anatomia", "fizjologia", "fizyka"]) {
      const result = getInteractiveWidgetsForChapter({
        subject,
        chapterId: `${subject}-test-atom-dna-enzym`,
        chapterTitle: "Atom, orbital, DNA, białka i metabolizm ATP",
      });
      expect(result).toEqual([]);
    }
  });
});
