import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getAnatomicalEntity } from "./anatomy-entities";
import {
  ALL_TEXTBOOK_FIGURES,
  ANATOMIA_TEXTBOOK_FIGURES,
  BIOLOGIA_TEXTBOOK_FIGURES,
  CHEMIA_TEXTBOOK_FIGURES,
  FIZJOLOGIA_TEXTBOOK_FIGURES,
  getFiguresForChapter,
} from "./textbook-figures";

describe("Interactive Textbook Figures Engine", () => {
  it("provides the 15 cross-subject figures across Anatomy, Physiology, Biology, and Chemistry", () => {
    expect(ANATOMIA_TEXTBOOK_FIGURES).toHaveLength(6);
    expect(FIZJOLOGIA_TEXTBOOK_FIGURES).toHaveLength(3);
    expect(BIOLOGIA_TEXTBOOK_FIGURES).toHaveLength(3);
    expect(CHEMIA_TEXTBOOK_FIGURES).toHaveLength(3);
    expect(ALL_TEXTBOOK_FIGURES).toHaveLength(15);

    const osteonFigs = getFiguresForChapter({
      subject: "anatomia",
      chapterId: "tom1-czesc-8-budowa-wewnetrzna-kosci-i-szpik-kostny",
      chapterTitle: "Budowa wewnętrzna kości i szpik kostny",
    });

    expect(osteonFigs.length).toBeGreaterThanOrEqual(1);
    expect(osteonFigs[0].id).toBe("fig-anat-osteon-szpik");
  });

  it("matches Physiology, Biology, Chemistry, and Matura-prefixed chapters without cross-domain false positives", () => {
    const ekgFigs = getFiguresForChapter({
      subject: "fizjologia",
      chapterId: "dzial4-czesc-16-analiza-ekg-i-tony-serca",
      chapterTitle: "Analiza EKG i tony serca",
    });
    expect(ekgFigs.some((f) => f.id === "fig-fizjo-cykl-serca-ekg")).toBe(true);

    const apFigs = getFiguresForChapter({
      subject: "fizjologia",
      chapterId: "dzial8-czesc-21-przekaz-i-obrobka-informacji-neuron-jako-komorka-pobudliwa",
      chapterTitle: "Neuron jako komórka pobudliwa",
    });
    expect(apFigs.some((f) => f.id === "fig-fizjo-potencjal-czynnosciowy")).toBe(true);

    const bohrFigs = getFiguresForChapter({
      subject: "biologia-matura-2023",
      chapterId: "bm23-bio3-czesc-66-czynniki-wplywajace-na-wiazanie-i-oddawanie-tlenu-przez-hemoglobine",
      chapterTitle: "Wiązanie tlenu przez hemoglobinę",
    });
    expect(bohrFigs.some((f) => f.id === "fig-fizjo-wymiana-gazowa-bohr")).toBe(true);

    const photoFigs = getFiguresForChapter({
      subject: "biologia-matura-2023",
      chapterId: "bm23-bio1-czesc-62-fotosynteza-fazy-i-mechanizmy",
      chapterTitle: "Fotosynteza — fazy i mechanizmy",
    });
    expect(photoFigs.some((f) => f.id === "fig-bio-fotosynteza-tylakoid")).toBe(true);

    const replFigs = getFiguresForChapter({
      subject: "biologia-matura-2015",
      chapterId: "bm15-bio4-czesc-7-mechanizm-replikacji-dna-replisom-telomeraza-i-naprawa-dna",
      chapterTitle: "Mechanizm replikacji DNA",
    });
    expect(replFigs.some((f) => f.id === "fig-bio-widelki-replikacyjne")).toBe(true);

    const synFigs = getFiguresForChapter({
      subject: "biologia",
      chapterId: "dzial8-czesc-26-koordynacja-funkcji-zyciowych-synapsy-chemiczne",
      chapterTitle: "Synapsy chemiczne",
    });
    expect(synFigs.some((f) => f.id === "fig-bio-synapsa-chemiczna")).toBe(true);

    const thermoFigs = getFiguresForChapter({
      subject: "chemia-matura-2023",
      chapterId: "cm23-cke-chem-seed-prawo-hessa-2023",
      chapterTitle: "Termodynamika chemiczna i prawo Hessa",
    });
    expect(thermoFigs.some((f) => f.id === "fig-chem-profil-energetyczny")).toBe(true);

    const cellFigs = getFiguresForChapter({
      subject: "chemia-matura-2023",
      chapterId: "cm23-cke-chem-seed-redoks-ogniwa-core",
      chapterTitle: "Ogniwa galwaniczne i potencjały standardowe",
    });
    expect(cellFigs.some((f) => f.id === "fig-chem-ogniwo-daniella")).toBe(true);

    const hybFigs = getFiguresForChapter({
      subject: "chemia",
      chapterId: "chem1-czesc-75-hybrydyzacja-orbitali-na-przykladzie-metanu",
      chapterTitle: "Hybrydyzacja orbitali na przykładzie metanu",
    });
    expect(hybFigs.some((f) => f.id === "fig-chem-hybrydyzacja-vsepr")).toBe(true);
  });

  it("matches chapters across anatomy, physiology, and biology while excluding false-positive chemistry titles", () => {
    const heartFigs = getFiguresForChapter({
      subject: "anatomia",
      chapterId: "tom3-czesc-16-zastawki-serca",
      chapterTitle: "Zastawki serca",
    });
    expect(heartFigs.some((f) => f.id === "fig-anat-serce-zastawki")).toBe(true);

    const plexusFigs = getFiguresForChapter({
      subject: "anatomia",
      chapterId: "tom2-czesc-53-nerwy-konczyny-gornej-splot-ramienny",
      chapterTitle: "Splot ramienny",
    });
    expect(plexusFigs.some((f) => f.id === "fig-anat-splot-ramienny")).toBe(true);

    const chemFigs = getFiguresForChapter({
      subject: "chemia",
      chapterId: "cke-chem-seed-kso-hydroliza-2023",
      chapterTitle: "Iloczyn rozpuszczalności i serce układu okresowego",
    });
    expect(chemFigs).toHaveLength(0);

    const physFigs = getFiguresForChapter({
      subject: "fizyka",
      chapterId: "fiz-dynamika",
      chapterTitle: "Dynamika i reakcja podłoża",
    });
    expect(physFigs).toHaveLength(0);
  });

  it("has valid calibrated hotspots, 3D entity/pin bridges, animation steps, and CC-BY sample assets", () => {
    for (const fig of ALL_TEXTBOOK_FIGURES) {
      expect(fig.hotspots.length).toBeGreaterThanOrEqual(4);
      expect(fig.animationSteps.length).toBeGreaterThanOrEqual(3);
      expect(fig.licenseAttribution).toBeTruthy();

      const hotspotIds = new Set(fig.hotspots.map((h) => h.id));

      for (const hotspot of fig.hotspots) {
        expect(hotspot.x).toBeGreaterThanOrEqual(0);
        expect(hotspot.x).toBeLessThanOrEqual(100);
        expect(hotspot.y).toBeGreaterThanOrEqual(0);
        expect(hotspot.y).toBeLessThanOrEqual(100);

        if (hotspot.linkedEntityId) {
          const entity = getAnatomicalEntity(hotspot.linkedEntityId);
          expect(entity).toBeDefined();
          if (hotspot.linkedSubPinId && entity) {
            expect(
              entity.pins.some((p) => p.id === hotspot.linkedSubPinId),
            ).toBe(true);
          }
        }
      }

      for (const step of fig.animationSteps) {
        expect(step.activeHotspotIds.length).toBeGreaterThanOrEqual(1);
        for (const activeId of step.activeHotspotIds) {
          expect(hotspotIds.has(activeId)).toBe(true);
        }
        if (step.flowArrow) {
          expect(step.flowArrow).toHaveLength(4);
          for (const coord of step.flowArrow) {
            expect(coord).toBeGreaterThanOrEqual(0);
            expect(coord).toBeLessThanOrEqual(100);
          }
        }
      }

      if (fig.imageUrl) {
        expect(fig.width).toBeGreaterThan(100);
        expect(fig.height).toBeGreaterThan(100);
        const diskPath = path.join(
          process.cwd(),
          "public",
          fig.imageUrl.replace(/^\//, ""),
        );
        expect(existsSync(diskPath)).toBe(true);
      }
    }
  });
});
