"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as T from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Atom, Box, Orbit, RotateCcw, Sparkles } from "lucide-react";

type ChemistryTabMode = "vsepr-orbitals-3d" | "periodic-table-3d";
type VseprSubMode = "molecules" | "orbitals";
type OrbitalShapeId = "s" | "px" | "py" | "pz" | "dz2";
type BlockFilter = "all" | "s" | "p" | "d";
type HeatmapMode = "block" | "electronegativity" | "radius";

interface MoleculeAtomSpec {
  element: string;
  pos: [number, number, number];
  color: number;
  radius: number;
  bondOrder?: 1 | 2;
}

interface MoleculePreset {
  id: string;
  formula: string;
  namePl: string;
  hybridization: string;
  geometryPl: string;
  stericNumber: string;
  bondAngle: string;
  polarity: string;
  ckeNote: string;
  centralColor: number;
  atoms: MoleculeAtomSpec[];
  lonePairs: [number, number, number][];
}

const MOLECULE_PRESETS: MoleculePreset[] = [
  {
    id: "CO2",
    formula: "CO₂",
    namePl: "Tlenek węgla(IV)",
    hybridization: "sp",
    geometryPl: "Liniowa",
    stericNumber: "LS = 2 (2σ + 0E)",
    bondAngle: "180°",
    polarity: "Niepolarna (μ = 0 D — dipole znoszą się)",
    ckeNote: "Dwa wiązania podwójne (każde 1σ + 1π). Cząsteczka jest całkowicie symetryczna.",
    centralColor: 0x52525b,
    atoms: [
      { element: "O", pos: [-1.75, 0, 0], color: 0xef4444, radius: 0.42, bondOrder: 2 },
      { element: "O", pos: [1.75, 0, 0], color: 0xef4444, radius: 0.42, bondOrder: 2 },
    ],
    lonePairs: [],
  },
  {
    id: "BF3",
    formula: "BF₃",
    namePl: "Trifluorek boru",
    hybridization: "sp²",
    geometryPl: "Trójkątna płaska",
    stericNumber: "LS = 3 (3σ + 0E)",
    bondAngle: "120°",
    polarity: "Niepolarna (μ = 0 D)",
    ckeNote: "Atom boru posiada lukę elektronową (sekstet zamiast oktetu) — jest silnym kwasem Lewisa.",
    centralColor: 0xf472b6,
    atoms: [
      { element: "F", pos: [0, 1.7, 0], color: 0x84cc16, radius: 0.38 },
      { element: "F", pos: [1.47, -0.85, 0], color: 0x84cc16, radius: 0.38 },
      { element: "F", pos: [-1.47, -0.85, 0], color: 0x84cc16, radius: 0.38 },
    ],
    lonePairs: [],
  },
  {
    id: "CH4",
    formula: "CH₄",
    namePl: "Metan",
    hybridization: "sp³",
    geometryPl: "Tetraedryczna",
    stericNumber: "LS = 4 (4σ + 0E)",
    bondAngle: "109,5°",
    polarity: "Niepolarna (μ = 0 D)",
    ckeNote: "Wzorcowa geometria czworościanu foremnego dla węgla w alkanach (same wiązania σ).",
    centralColor: 0x52525b,
    atoms: [
      { element: "H", pos: [0, 1.65, 0], color: 0xf4f4f5, radius: 0.28 },
      { element: "H", pos: [1.56, -0.55, 0], color: 0xf4f4f5, radius: 0.28 },
      { element: "H", pos: [-0.78, -0.55, 1.35], color: 0xf4f4f5, radius: 0.28 },
      { element: "H", pos: [-0.78, -0.55, -1.35], color: 0xf4f4f5, radius: 0.28 },
    ],
    lonePairs: [],
  },
  {
    id: "NH3",
    formula: "NH₃",
    namePl: "Amoniak",
    hybridization: "sp³",
    geometryPl: "Piramida trygonalna",
    stericNumber: "LS = 4 (3σ + 1E)",
    bondAngle: "107°",
    polarity: "Polarna (μ = 1,47 D)",
    ckeNote: "UWAGA CKE: Azot ma hybrydyzację sp³, ale 1 wolna para (E) silniej odpycha wiązania, ściskając kąt do 107°.",
    centralColor: 0x3b82f6,
    atoms: [
      { element: "H", pos: [1.52, -0.55, 0], color: 0xf4f4f5, radius: 0.28 },
      { element: "H", pos: [-0.76, -0.55, 1.32], color: 0xf4f4f5, radius: 0.28 },
      { element: "H", pos: [-0.76, -0.55, -1.32], color: 0xf4f4f5, radius: 0.28 },
    ],
    lonePairs: [[0, 1.25, 0]],
  },
  {
    id: "H2O",
    formula: "H₂O",
    namePl: "Woda",
    hybridization: "sp³",
    geometryPl: "Kątowa (kształt litery V)",
    stericNumber: "LS = 4 (2σ + 2E)",
    bondAngle: "104,5°",
    polarity: "Silnie polarna (μ = 1,85 D)",
    ckeNote: "PUŁAPKA CKE: Woda ma hybrydyzację sp³ (geometria elektronowa tetraedryczna), ale kształt samej cząsteczki jest kątowy!",
    centralColor: 0xef4444,
    atoms: [
      { element: "H", pos: [-1.25, -0.95, 0], color: 0xf4f4f5, radius: 0.28 },
      { element: "H", pos: [1.25, -0.95, 0], color: 0xf4f4f5, radius: 0.28 },
    ],
    lonePairs: [
      [0, 0.85, 0.92],
      [0, 0.85, -0.92],
    ],
  },
  {
    id: "PCl5",
    formula: "PCl₅",
    namePl: "Pentachlorek fosforu",
    hybridization: "sp³d",
    geometryPl: "Bipiramida trygonalna",
    stericNumber: "LS = 5 (5σ + 0E)",
    bondAngle: "90° (osiowe) / 120° (równikowe)",
    polarity: "Niepolarna (μ = 0 D)",
    ckeNote: "Rozszerzony oktet (10 elektronów walencyjnych wokół fosforu).",
    centralColor: 0xf97316,
    atoms: [
      { element: "Cl", pos: [0, 1.85, 0], color: 0x22c55e, radius: 0.4 },
      { element: "Cl", pos: [0, -1.85, 0], color: 0x22c55e, radius: 0.4 },
      { element: "Cl", pos: [1.65, 0, 0], color: 0x22c55e, radius: 0.4 },
      { element: "Cl", pos: [-0.82, 0, 1.43], color: 0x22c55e, radius: 0.4 },
      { element: "Cl", pos: [-0.82, 0, -1.43], color: 0x22c55e, radius: 0.4 },
    ],
    lonePairs: [],
  },
  {
    id: "SF6",
    formula: "SF₆",
    namePl: "Heksafluorek siarki",
    hybridization: "sp³d²",
    geometryPl: "Oktaedryczna",
    stericNumber: "LS = 6 (6σ + 0E)",
    bondAngle: "90°",
    polarity: "Niepolarna (μ = 0 D)",
    ckeNote: "Idealna symetria oktaedryczna (rozszerzony oktet — 12 elektronów wokół S).",
    centralColor: 0xeab308,
    atoms: [
      { element: "F", pos: [1.75, 0, 0], color: 0x84cc16, radius: 0.36 },
      { element: "F", pos: [-1.75, 0, 0], color: 0x84cc16, radius: 0.36 },
      { element: "F", pos: [0, 1.75, 0], color: 0x84cc16, radius: 0.36 },
      { element: "F", pos: [0, -1.75, 0], color: 0x84cc16, radius: 0.36 },
      { element: "F", pos: [0, 0, 1.75], color: 0x84cc16, radius: 0.36 },
      { element: "F", pos: [0, 0, -1.75], color: 0x84cc16, radius: 0.36 },
    ],
    lonePairs: [],
  },
];

const ORBITAL_INFO: Record<
  OrbitalShapeId,
  { label: string; l: string; m: string; desc: string }
> = {
  s: {
    label: "Orbital s",
    l: "l = 0 (poboczna)",
    m: "m = 0",
    desc: "Symetria sferyczna (kulista). Brak płaszczyzn węzłowych przechodzących przez jądro; maksymalnie 2 elektrony.",
  },
  px: {
    label: "Orbital px",
    l: "l = 1",
    m: "m = ±1",
    desc: "Podwójny płatek (hantla) zorientowany wzdłuż osi X, z przeciwnymi znakami funkcji falowej (+ / −) rozdzielonymi płaszczyzną yz.",
  },
  py: {
    label: "Orbital py",
    l: "l = 1",
    m: "m = ±1",
    desc: "Podwójny płatek wzdłuż osi Y — wraz z px może tworzyć wiązania π przy nakładaniu bocznym.",
  },
  pz: {
    label: "Orbital pz",
    l: "l = 1",
    m: "m = 0",
    desc: "Podwójny płatek wzdłuż osi Z. Trzy orbitale p (px, py, pz) są względem siebie prostopadłe i zdegenerowane.",
  },
  dz2: {
    label: "Orbital dz²",
    l: "l = 2",
    m: "m = 0",
    desc: "Charakterystyczny dla metali bloku d orbital z osią główną Z oraz pierścieniem gęstości elektronowej w płaszczyźnie xy.",
  },
};

interface ElementSpec {
  z: number;
  symbol: string;
  namePl: string;
  period: number;
  group: number;
  block: "s" | "p" | "d";
  mass: string;
  en: number | null;
  radiusPm: number;
  shells: number[];
  config: string;
  oxidationStates: string;
  ckeNote: string;
}

const ELEMENTS_DATA: ElementSpec[] = [
  { z: 1, symbol: "H", namePl: "Wodór", period: 1, group: 1, block: "s", mass: "1,008", en: 2.2, radiusPm: 53, shells: [1], config: "1s¹", oxidationStates: "−I, +I", ckeNote: "Tworzy wiązania kowalencyjne i mostki wodorowe; nie należy do metali alkalicznych." },
  { z: 2, symbol: "He", namePl: "Hel", period: 1, group: 18, block: "s", mass: "4,003", en: null, radiusPm: 31, shells: [2], config: "1s²", oxidationStates: "0", ckeNote: "Konfiguracja dubletu na powłoce K — mimo bloku s leży w 18. grupie." },
  { z: 3, symbol: "Li", namePl: "Lit", period: 2, group: 1, block: "s", mass: "6,94", en: 0.98, radiusPm: 167, shells: [2, 1], config: "[He] 2s¹", oxidationStates: "+I", ckeNote: "Litowiec o największym potencjale redukcyjnym spośród metali." },
  { z: 4, symbol: "Be", namePl: "Beryl", period: 2, group: 2, block: "s", mass: "9,012", en: 1.57, radiusPm: 112, shells: [2, 2], config: "[He] 2s²", oxidationStates: "+II", ckeNote: "BeO i Be(OH)₂ mają charakter amfoteryczny (wyjątek w 2. grupie)." },
  { z: 5, symbol: "B", namePl: "Bor", period: 2, group: 13, block: "p", mass: "10,81", en: 2.04, radiusPm: 87, shells: [2, 3], config: "[He] 2s² 2p¹", oxidationStates: "+III", ckeNote: "Tworzy związki z niepełnym oktetem (np. BF₃ — kwas Lewisa)." },
  { z: 6, symbol: "C", namePl: "Węgiel", period: 2, group: 14, block: "p", mass: "12,011", en: 2.55, radiusPm: 67, shells: [2, 4], config: "[He] 2s² 2p²", oxidationStates: "−IV do +IV", ckeNote: "Podstawowy pierwiastek organiczny; tworzy hybrydy sp³, sp² i sp." },
  { z: 7, symbol: "N", namePl: "Azot", period: 2, group: 15, block: "p", mass: "14,007", en: 3.04, radiusPm: 56, shells: [2, 5], config: "[He] 2s² 2p³", oxidationStates: "−III do +V", ckeNote: "Maksymalna wartościowość azotu to IV (brak orbitali d w 2. powłoce!), mimo stopnia +V w HNO₃." },
  { z: 8, symbol: "O", namePl: "Tlen", period: 2, group: 16, block: "p", mass: "15,999", en: 3.44, radiusPm: 48, shells: [2, 6], config: "[He] 2s² 2p⁴", oxidationStates: "−II, −I (H₂O₂), +II (OF₂)", ckeNote: "Drugi po fluorze najbardziej elektroujemny pierwiastek." },
  { z: 9, symbol: "F", namePl: "Fluor", period: 2, group: 17, block: "p", mass: "18,998", en: 3.98, radiusPm: 42, shells: [2, 7], config: "[He] 2s² 2p⁵", oxidationStates: "−I", ckeNote: "Największa elektroujemność w układzie okresowym (3,98); w związkach zawsze −I." },
  { z: 10, symbol: "Ne", namePl: "Neon", period: 2, group: 18, block: "p", mass: "20,18", en: null, radiusPm: 38, shells: [2, 8], config: "[He] 2s² 2p⁶", oxidationStates: "0", ckeNote: "Pełny oktet walencyjny (brak reaktywności chemicznej)." },
  { z: 11, symbol: "Na", namePl: "Sód", period: 3, group: 1, block: "s", mass: "22,99", en: 0.93, radiusPm: 190, shells: [2, 8, 1], config: "[Ne] 3s¹", oxidationStates: "+I", ckeNote: "Gwałtownie reaguje z wodą z wydzieleniem H₂ i powstaniem NaOH." },
  { z: 12, symbol: "Mg", namePl: "Magnez", period: 3, group: 2, block: "s", mass: "24,305", en: 1.31, radiusPm: 145, shells: [2, 8, 2], config: "[Ne] 3s²", oxidationStates: "+II", ckeNote: "Centralny jon pierścienia porfirynowego w chlorofilu." },
  { z: 13, symbol: "Al", namePl: "Glin", period: 3, group: 13, block: "p", mass: "26,98", en: 1.61, radiusPm: 118, shells: [2, 8, 3], config: "[Ne] 3s² 3p¹", oxidationStates: "+III", ckeNote: "Al, Al₂O₃ i Al(OH)₃ są amfoteryczne — roztwarzają się zarówno w HCl, jak i w NaOH." },
  { z: 14, symbol: "Si", namePl: "Krzem", period: 3, group: 14, block: "p", mass: "28,085", en: 1.9, radiusPm: 111, shells: [2, 8, 4], config: "[Ne] 3s² 3p²", oxidationStates: "−IV, +IV", ckeNote: "SiO₂ tworzy krystaliczną sieć kowalencyjną (wysoka t.t., brak reakcji z wodą)." },
  { z: 15, symbol: "P", namePl: "Fosfor", period: 3, group: 15, block: "p", mass: "30,974", en: 2.19, radiusPm: 98, shells: [2, 8, 5], config: "[Ne] 3s² 3p³", oxidationStates: "−III, +III, +V", ckeNote: "Składnik szkieletu cukrowo-fosforanowego DNA/RNA i wiązań ATP." },
  { z: 16, symbol: "S", namePl: "Siarka", period: 3, group: 16, block: "p", mass: "32,06", en: 2.58, radiusPm: 88, shells: [2, 8, 6], config: "[Ne] 3s² 3p⁴", oxidationStates: "−II, +IV, +VI", ckeNote: "Tworzy mostki disiarczkowe (S–S) stabilizujące III-rzędową strukturę białek." },
  { z: 17, symbol: "Cl", namePl: "Chlor", period: 3, group: 17, block: "p", mass: "35,45", en: 3.16, radiusPm: 79, shells: [2, 8, 7], config: "[Ne] 3s² 3p⁵", oxidationStates: "−I, +I, +III, +V, +VII", ckeNote: "W dysproporcjonowaniu Cl₂ + 2 OH⁻ → Cl⁻ + ClO⁻ + H₂O jest i utleniaczem, i reduktorem." },
  { z: 18, symbol: "Ar", namePl: "Argon", period: 3, group: 18, block: "p", mass: "39,95", en: null, radiusPm: 71, shells: [2, 8, 8], config: "[Ne] 3s² 3p⁶", oxidationStates: "0", ckeNote: "Najpowszechniejszy gaz szlachetny w atmosferze (~0,93%)." },
  { z: 19, symbol: "K", namePl: "Potas", period: 4, group: 1, block: "s", mass: "39,098", en: 0.82, radiusPm: 243, shells: [2, 8, 8, 1], config: "[Ar] 4s¹", oxidationStates: "+I", ckeNote: "Podpowłoka 4s wypełnia się przed 3d zgodnie z regułą Madelunga (n+l)." },
  { z: 20, symbol: "Ca", namePl: "Wapń", period: 4, group: 2, block: "s", mass: "40,078", en: 1.0, radiusPm: 194, shells: [2, 8, 8, 2], config: "[Ar] 4s²", oxidationStates: "+II", ckeNote: "Kationy Ca²⁺ inicjują skurcz mięśni i egzocytozę w synapsie chemicznej." },
  { z: 21, symbol: "Sc", namePl: "Skand", period: 4, group: 3, block: "d", mass: "44,956", en: 1.36, radiusPm: 184, shells: [2, 8, 9, 2], config: "[Ar] 3d¹ 4s²", oxidationStates: "+III", ckeNote: "Pierwszy pierwiastek bloku d; liczba elektronów walencyjnych = 3." },
  { z: 22, symbol: "Ti", namePl: "Tytan", period: 4, group: 4, block: "d", mass: "47,867", en: 1.54, radiusPm: 176, shells: [2, 8, 10, 2], config: "[Ar] 3d² 4s²", oxidationStates: "+II, +III, +IV", ckeNote: "Wykorzystywany w implantach biomedycznych dzięki pasywnej warstwie TiO₂." },
  { z: 23, symbol: "V", namePl: "Wanad", period: 4, group: 5, block: "d", mass: "50,942", en: 1.63, radiusPm: 171, shells: [2, 8, 11, 2], config: "[Ar] 3d³ 4s²", oxidationStates: "+II, +III, +IV, +V", ckeNote: "V₂O₅ jest przemysłowym katalizatorem utleniania SO₂ do SO₃." },
  { z: 24, symbol: "Cr", namePl: "Chrom", period: 4, group: 6, block: "d", mass: "51,996", en: 1.66, radiusPm: 166, shells: [2, 8, 13, 1], config: "[Ar] 3d⁵ 4s¹", oxidationStates: "+II, +III, +VI", ckeNote: "PEWNIAK CKE (PROMOCJA!): 3d⁵ 4s¹ zamiast 3d⁴ 4s² — półzapełniona podpowłoka d stabilizuje atom; Cr(OH)₃ jest amfoteryczny." },
  { z: 25, symbol: "Mn", namePl: "Mangan", period: 4, group: 7, block: "d", mass: "54,938", en: 1.55, radiusPm: 161, shells: [2, 8, 13, 2], config: "[Ar] 3d⁵ 4s²", oxidationStates: "+II, +IV, +VI, +VII", ckeNote: "Redukcja MnO₄⁻ zależy od pH: w kwasowym do Mn²⁺ (bezbarwny), w obojętnym do MnO₂ (brunatny), w zasadowym do MnO₄²⁻ (zielony)." },
  { z: 26, symbol: "Fe", namePl: "Żelazo", period: 4, group: 8, block: "d", mass: "55,845", en: 1.83, radiusPm: 156, shells: [2, 8, 14, 2], config: "[Ar] 3d⁶ 4s²", oxidationStates: "+II, +III", ckeNote: "Jon Fe²⁺: [Ar] 3d⁶ (najpierw odchodzą elektrony 4s!), a Fe³⁺: [Ar] 3d⁵." },
  { z: 27, symbol: "Co", namePl: "Kobalt", period: 4, group: 9, block: "d", mass: "58,933", en: 1.88, radiusPm: 152, shells: [2, 8, 15, 2], config: "[Ar] 3d⁷ 4s²", oxidationStates: "+II, +III", ckeNote: "Atom centralny witaminy B₁₂ (kobalaminy)." },
  { z: 28, symbol: "Ni", namePl: "Nikiel", period: 4, group: 10, block: "d", mass: "58,693", en: 1.91, radiusPm: 149, shells: [2, 8, 16, 2], config: "[Ar] 3d⁸ 4s²", oxidationStates: "+II", ckeNote: "Powszechny katalizator uwodornienia alkenów i alkinów." },
  { z: 29, symbol: "Cu", namePl: "Miedź", period: 4, group: 11, block: "d", mass: "63,546", en: 1.9, radiusPm: 145, shells: [2, 8, 18, 1], config: "[Ar] 3d¹⁰ 4s¹", oxidationStates: "+I, +II", ckeNote: "PEWNIAK CKE (PROMOCJA!): 3d¹⁰ 4s¹ zamiast 3d⁹ 4s². Nie wypiera wodoru z HCl (E° > 0), lecz reaguje z HNO₃." },
  { z: 30, symbol: "Zn", namePl: "Cynk", period: 4, group: 12, block: "d", mass: "65,38", en: 1.65, radiusPm: 142, shells: [2, 8, 18, 2], config: "[Ar] 3d¹⁰ 4s²", oxidationStates: "+II", ckeNote: "Zn, ZnO i Zn(OH)₂ są amfoteryczne; anoda (⊖) w ogniwie Daniella." },
  { z: 31, symbol: "Ga", namePl: "Gal", period: 4, group: 13, block: "p", mass: "69,723", en: 1.81, radiusPm: 136, shells: [2, 8, 18, 3], config: "[Ar] 3d¹⁰ 4s² 4p¹", oxidationStates: "+III", ckeNote: "Przewidziany przez Mendelejewa jako eka-glin." },
  { z: 32, symbol: "Ge", namePl: "German", period: 4, group: 14, block: "p", mass: "72,63", en: 2.01, radiusPm: 125, shells: [2, 8, 18, 4], config: "[Ar] 3d¹⁰ 4s² 4p²", oxidationStates: "+II, +IV", ckeNote: "Półprzewodnik leżący pod krzemem w 14. grupie." },
  { z: 33, symbol: "As", namePl: "Arsen", period: 4, group: 15, block: "p", mass: "74,922", en: 2.18, radiusPm: 114, shells: [2, 8, 18, 5], config: "[Ar] 3d¹⁰ 4s² 4p³", oxidationStates: "−III, +III, +V", ckeNote: "Trzy niesparowane elektrony 4p³ (zgodnie z regułą Hunda)." },
  { z: 34, symbol: "Se", namePl: "Selen", period: 4, group: 16, block: "p", mass: "78,971", en: 2.55, radiusPm: 103, shells: [2, 8, 18, 6], config: "[Ar] 3d¹⁰ 4s² 4p⁴", oxidationStates: "−II, +IV, +VI", ckeNote: "Składnik aminokwasu selenocysteiny w peroksydazie glutationowej." },
  { z: 35, symbol: "Br", namePl: "Brom", period: 4, group: 17, block: "p", mass: "79,904", en: 2.96, radiusPm: 94, shells: [2, 8, 18, 7], config: "[Ar] 3d¹⁰ 4s² 4p⁵", oxidationStates: "−I, +I, +V", ckeNote: "Woda bromowa (Br₂) służy do wykrywania wiązań wielokrotnych C=C i C≡C (odbarwienie bez katalizatora)." },
  { z: 36, symbol: "Kr", namePl: "Krypton", period: 4, group: 18, block: "p", mass: "83,798", en: 3.0, radiusPm: 88, shells: [2, 8, 18, 8], config: "[Ar] 3d¹⁰ 4s² 4p⁶", oxidationStates: "0, +II", ckeNote: "Gaz szlachetny 4. okresu o całkowicie zapełnionych podpowłokach 4s i 4p." },
];

function createCylinderBetween(
  p1: [number, number, number],
  p2: [number, number, number],
  radius: number,
  color: number,
): T.Mesh {
  const v1 = new T.Vector3(...p1);
  const v2 = new T.Vector3(...p2);
  const diff = v2.clone().sub(v1);
  const len = diff.length();
  const geo = new T.CylinderGeometry(radius, radius, len, 14);
  const mat = new T.MeshStandardMaterial({
    color,
    roughness: 0.35,
    metalness: 0.2,
  });
  const mesh = new T.Mesh(geo, mat);
  mesh.position.copy(v1).add(v2).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), diff.normalize());
  return mesh;
}

function addBondGroup(
  parent: T.Group,
  target: [number, number, number],
  order: 1 | 2 = 1,
): void {
  if (order === 1) {
    parent.add(createCylinderBetween([0, 0, 0], target, 0.085, 0xa1a1aa));
    return;
  }
  const dir = new T.Vector3(...target).normalize();
  const up = Math.abs(dir.y) > 0.9 ? new T.Vector3(1, 0, 0) : new T.Vector3(0, 1, 0);
  const offset = new T.Vector3().crossVectors(dir, up).normalize().multiplyScalar(0.11);
  parent.add(
    createCylinderBetween(
      [offset.x, offset.y, offset.z],
      [target[0] + offset.x, target[1] + offset.y, target[2] + offset.z],
      0.06,
      0xa1a1aa,
    ),
  );
  parent.add(
    createCylinderBetween(
      [-offset.x, -offset.y, -offset.z],
      [target[0] - offset.x, target[1] - offset.y, target[2] - offset.z],
      0.06,
      0xa1a1aa,
    ),
  );
}

function disposeGroup(group: T.Group) {
  group.traverse((obj) => {
    if (obj instanceof T.Mesh || obj instanceof T.Line) {
      obj.geometry.dispose();
      if (Array.isArray(obj.material)) {
        obj.material.forEach((m) => m.dispose());
      } else {
        obj.material.dispose();
      }
    }
  });
}

export interface ChemistryInteractiveWidgetProps {
  initialMode?: ChemistryTabMode;
}

export function ChemistryInteractiveWidget({
  initialMode = "vsepr-orbitals-3d",
}: ChemistryInteractiveWidgetProps) {
  const [tab, setTab] = useState<ChemistryTabMode>(initialMode);
  const [subMode, setSubMode] = useState<VseprSubMode>("molecules");
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>("CH4");
  const [selectedOrbital, setSelectedOrbital] = useState<OrbitalShapeId>("pz");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [resetTick, setResetTick] = useState<number>(0);

  const [blockFilter, setBlockFilter] = useState<BlockFilter>("all");
  const [heatmap, setHeatmap] = useState<HeatmapMode>("block");
  const [selectedElementZ, setSelectedElementZ] = useState<number>(24); // Cr promotion highlighted by default
  const [webglError, setWebglError] = useState<string | null>(null);

  const mountRef = useRef<HTMLDivElement | null>(null);

  const activeMolecule = useMemo(
    () =>
      MOLECULE_PRESETS.find((m) => m.id === selectedMoleculeId) ??
      MOLECULE_PRESETS[2],
    [selectedMoleculeId],
  );

  const activeElement = useMemo(
    () =>
      ELEMENTS_DATA.find((e) => e.z === selectedElementZ) ?? ELEMENTS_DATA[23],
    [selectedElementZ],
  );

  // Unified Three.js scene controller reacting to tab / selection changes
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: T.WebGLRenderer;
    try {
      renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      setWebglError(null);
    } catch {
      setWebglError(
        "Twoja przeglądarka nie obsługuje akceleracji WebGL dla widoku 3D.",
      );
      return;
    }

    const width = Math.max(280, container.clientWidth);
    const height = Math.max(240, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.4, tab === "periodic-table-3d" ? 7.2 : 5.2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 2.6;
    controls.maxDistance = 14;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.6;

    // Lighting setup matching cleanroom NOIR
    scene.add(new T.AmbientLight(0xffffff, 0.85));
    const keyLight = new T.DirectionalLight(0xffffff, 1.55);
    keyLight.position.set(5, 7, 6);
    scene.add(keyLight);
    const rimLight = new T.DirectionalLight(0x34d399, 0.65);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    // Subtle reference axes grid
    const grid = new T.GridHelper(6, 10, 0x27272a, 0x18181b);
    grid.position.y = -2.25;
    scene.add(grid);

    const rootGroup = new T.Group();
    scene.add(rootGroup);

    const animatedElectrons: Array<{
      mesh: T.Mesh;
      ringRadius: number;
      angleOffset: number;
      speed: number;
      tiltX: number;
      tiltY: number;
    }> = [];

    if (tab === "vsepr-orbitals-3d" && subMode === "molecules") {
      // Central atom
      const centerMesh = new T.Mesh(
        new T.SphereGeometry(0.56, 32, 32),
        new T.MeshStandardMaterial({
          color: activeMolecule.centralColor,
          roughness: 0.25,
          metalness: 0.25,
        }),
      );
      rootGroup.add(centerMesh);

      // Ligands + bonds
      for (const atom of activeMolecule.atoms) {
        const ligand = new T.Mesh(
          new T.SphereGeometry(atom.radius, 28, 28),
          new T.MeshStandardMaterial({
            color: atom.color,
            roughness: 0.28,
            metalness: 0.12,
          }),
        );
        ligand.position.set(...atom.pos);
        rootGroup.add(ligand);
        addBondGroup(rootGroup, atom.pos, atom.bondOrder ?? 1);
      }

      // Lone pairs (translucent golden orbital lobes with 2 dots)
      for (const lpPos of activeMolecule.lonePairs) {
        const dir = new T.Vector3(...lpPos).normalize();
        const lobeGroup = new T.Group();
        const lobeGeo = new T.SphereGeometry(0.42, 20, 20);
        lobeGeo.scale(0.85, 1.45, 0.85);
        const lobeMat = new T.MeshStandardMaterial({
          color: 0xf59e0b,
          transparent: true,
          opacity: 0.36,
          roughness: 0.2,
        });
        const lobe = new T.Mesh(lobeGeo, lobeMat);
        lobe.position.set(0, 0.8, 0);
        lobeGroup.add(lobe);

        // Two electron beads inside lone pair
        for (const dx of [-0.14, 0.14]) {
          const eMesh = new T.Mesh(
            new T.SphereGeometry(0.085, 14, 14),
            new T.MeshStandardMaterial({
              color: 0xfef08a,
              emissive: 0xd97706,
              emissiveIntensity: 0.6,
            }),
          );
          eMesh.position.set(dx, 1.02, 0);
          lobeGroup.add(eMesh);
        }

        lobeGroup.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir);
        rootGroup.add(lobeGroup);
      }
    } else if (tab === "vsepr-orbitals-3d" && subMode === "orbitals") {
      // Nucleus center
      const nuc = new T.Mesh(
        new T.SphereGeometry(0.14, 18, 18),
        new T.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xf59e0b }),
      );
      rootGroup.add(nuc);

      const posMat = new T.MeshStandardMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.78,
        roughness: 0.22,
      });
      const negMat = new T.MeshStandardMaterial({
        color: 0xf43f5e,
        transparent: true,
        opacity: 0.78,
        roughness: 0.22,
      });

      if (selectedOrbital === "s") {
        const sSphere = new T.Mesh(new T.SphereGeometry(1.45, 36, 36), posMat);
        rootGroup.add(sSphere);
      } else if (
        selectedOrbital === "px" ||
        selectedOrbital === "py" ||
        selectedOrbital === "pz"
      ) {
        const pGroup = new T.Group();
        const geoPlus = new T.SphereGeometry(0.75, 28, 28);
        geoPlus.scale(0.85, 1.45, 0.85);
        const lobePlus = new T.Mesh(geoPlus, posMat);
        lobePlus.position.y = 0.92;
        const lobeMinus = new T.Mesh(geoPlus.clone(), negMat);
        lobeMinus.position.y = -0.92;
        pGroup.add(lobePlus, lobeMinus);

        if (selectedOrbital === "px") {
          pGroup.rotation.z = -Math.PI / 2;
        } else if (selectedOrbital === "pz") {
          pGroup.rotation.x = Math.PI / 2;
        }
        rootGroup.add(pGroup);
      } else {
        // dz2 orbital: main Z-axis dumbbell + XY torus ring
        const dGroup = new T.Group();
        const geoMain = new T.SphereGeometry(0.65, 28, 28);
        geoMain.scale(0.78, 1.55, 0.78);
        const top = new T.Mesh(geoMain, posMat);
        top.position.y = 0.98;
        const bot = new T.Mesh(geoMain.clone(), posMat);
        bot.position.y = -0.98;
        const torus = new T.Mesh(
          new T.TorusGeometry(0.95, 0.28, 20, 48),
          negMat,
        );
        torus.rotation.x = Math.PI / 2;
        dGroup.add(top, bot, torus);
        rootGroup.add(dGroup);
      }
    } else {
      // Periodic Table 3D: Multi-shell Bohr / Atomic Shell Model
      const nucleus = new T.Mesh(
        new T.SphereGeometry(0.45, 28, 28),
        new T.MeshStandardMaterial({
          color:
            activeElement.block === "d"
              ? 0xa855f7
              : activeElement.block === "p"
                ? 0x38bdf8
                : 0x10b981,
          roughness: 0.25,
          metalness: 0.35,
          emissive: 0x064e3b,
          emissiveIntensity: 0.45,
        }),
      );
      rootGroup.add(nucleus);

      activeElement.shells.forEach((electronCount, shellIdx) => {
        const ringRadius = 1.0 + shellIdx * 0.68;
        const tiltX = (shellIdx % 2 === 0 ? 1 : -1) * (0.28 + shellIdx * 0.14);
        const tiltY = shellIdx * 0.42;

        const ringGroup = new T.Group();
        ringGroup.rotation.set(tiltX, tiltY, 0);

        const torus = new T.Mesh(
          new T.TorusGeometry(ringRadius, 0.018, 10, 72),
          new T.MeshBasicMaterial({
            color: 0x52525b,
            transparent: true,
            opacity: 0.65,
          }),
        );
        ringGroup.add(torus);
        rootGroup.add(ringGroup);

        for (let eIdx = 0; eIdx < electronCount; eIdx += 1) {
          const isOuter = shellIdx === activeElement.shells.length - 1;
          const eMesh = new T.Mesh(
            new T.SphereGeometry(isOuter ? 0.105 : 0.075, 14, 14),
            new T.MeshStandardMaterial({
              color: isOuter ? 0x34d399 : 0x7dd3fc,
              emissive: isOuter ? 0x10b981 : 0x0284c7,
              emissiveIntensity: 0.7,
            }),
          );
          ringGroup.add(eMesh);
          const angle = (eIdx / Math.max(1, electronCount)) * Math.PI * 2;
          eMesh.position.set(
            Math.cos(angle) * ringRadius,
            Math.sin(angle) * ringRadius,
            0,
          );
          animatedElectrons.push({
            mesh: eMesh,
            ringRadius,
            angleOffset: angle,
            speed: (shellIdx % 2 === 0 ? 1 : -1) * (1.2 / (shellIdx + 1)),
            tiltX,
            tiltY,
          });
        }
      });
    }

    let rafId = 0;
    const startMs = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = (performance.now() - startMs) * 0.001;

      for (const item of animatedElectrons) {
        const ang = item.angleOffset + t * item.speed;
        item.mesh.position.set(
          Math.cos(ang) * item.ringRadius,
          Math.sin(ang) * item.ringRadius,
          0,
        );
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = Math.max(280, container.clientWidth);
      const h = Math.max(240, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      disposeGroup(rootGroup);
      grid.geometry.dispose();
      renderer.dispose();
    };
  }, [
    tab,
    subMode,
    activeMolecule,
    selectedOrbital,
    activeElement,
    autoRotate,
    resetTick,
  ]);

  const filteredElements = useMemo(() => {
    if (blockFilter === "all") return ELEMENTS_DATA;
    return ELEMENTS_DATA.filter((el) => el.block === blockFilter);
  }, [blockFilter]);

  function getElementTileStyle(el: ElementSpec, selected: boolean): string {
    const ring = selected
      ? "ring-2 ring-emerald-400 border-emerald-400 scale-[1.03]"
      : "border-zinc-800 hover:border-zinc-600";

    if (heatmap === "electronegativity") {
      if (el.en === null) return `${ring} bg-zinc-900 text-zinc-400`;
      if (el.en >= 3.0) return `${ring} bg-rose-950/90 text-rose-200`;
      if (el.en >= 2.1) return `${ring} bg-amber-950/80 text-amber-200`;
      if (el.en >= 1.4) return `${ring} bg-sky-950/80 text-sky-200`;
      return `${ring} bg-emerald-950/80 text-emerald-200`;
    }

    if (heatmap === "radius") {
      if (el.radiusPm >= 180) return `${ring} bg-purple-950/90 text-purple-200`;
      if (el.radiusPm >= 130) return `${ring} bg-sky-950/85 text-sky-200`;
      if (el.radiusPm >= 85) return `${ring} bg-teal-950/80 text-teal-200`;
      return `${ring} bg-zinc-900 text-zinc-200`;
    }

    if (el.block === "s") return `${ring} bg-emerald-950/60 text-emerald-200`;
    if (el.block === "p") return `${ring} bg-sky-950/60 text-sky-200`;
    return `${ring} bg-purple-950/60 text-purple-200`;
  }

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-lg">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 bg-zinc-900/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <Atom className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Laboratorium Chemiczne 3D • SportNotes
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setTab("vsepr-orbitals-3d")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
              tab === "vsepr-orbitals-3d"
                ? "bg-emerald-500 text-zinc-950"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <Box className="h-3.5 w-3.5" aria-hidden="true" />
            VSEPR & Orbitale 3D
          </button>
          <button
            type="button"
            onClick={() => setTab("periodic-table-3d")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
              tab === "periodic-table-3d"
                ? "bg-emerald-500 text-zinc-950"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <Orbit className="h-3.5 w-3.5" aria-hidden="true" />
            Układ Okresowy 3D
          </button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Three.js Canvas Pane */}
        <div className="relative flex flex-col border-b border-zinc-800 bg-zinc-950 lg:col-span-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-zinc-900 px-3 py-2 text-[11px] text-zinc-400">
            <span>
              {tab === "vsepr-orbitals-3d"
                ? subMode === "molecules"
                  ? `Cząsteczka ${activeMolecule.formula} (${activeMolecule.hybridization})`
                  : ORBITAL_INFO[selectedOrbital].label
                : `${activeElement.symbol} (Z = ${activeElement.z}) • ${activeElement.shells.join(" / ")} e⁻`}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAutoRotate((v) => !v)}
                className={`rounded border px-2 py-0.5 text-[10px] font-medium ${
                  autoRotate
                    ? "border-emerald-700 bg-emerald-950/60 text-emerald-300"
                    : "border-zinc-700 bg-zinc-900 text-zinc-400"
                }`}
              >
                {autoRotate ? "Auto-obrót: WŁ" : "Auto-obrót: WYŁ"}
              </button>
              <button
                type="button"
                onClick={() => setResetTick((t) => t + 1)}
                title="Resetuj kamerę 3D"
                className="inline-flex items-center gap-1 rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-300 hover:bg-zinc-800"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                Reset
              </button>
            </div>
          </div>

          <div
            ref={mountRef}
            className="h-[270px] w-full cursor-grab active:cursor-grabbing sm:h-[310px]"
          >
            {webglError && (
              <div className="flex h-full items-center justify-center p-4 text-center text-xs text-amber-300">
                {webglError}
              </div>
            )}
          </div>

          <div className="border-t border-zinc-900 bg-zinc-950/80 px-3 py-1.5 text-[10px] text-zinc-500">
            Przeciągnij myszką / palcem aby obracać • Scroll aby przybliżyć
          </div>
        </div>

        {/* Right Controls & CKE Theory Panel */}
        <div className="p-4 lg:col-span-6">
          {tab === "vsepr-orbitals-3d" ? (
            <div className="space-y-3">
              {/* Sub-mode switcher: VSEPR Molecules vs Orbitals */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSubMode("molecules")}
                  className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                    subMode === "molecules"
                      ? "border-sky-500 bg-sky-950/70 text-sky-200"
                      : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Geometria VSEPR (7 cząsteczek)
                </button>
                <button
                  type="button"
                  onClick={() => setSubMode("orbitals")}
                  className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                    subMode === "orbitals"
                      ? "border-sky-500 bg-sky-950/70 text-sky-200"
                      : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Orbitale s, px, py, pz, dz²
                </button>
              </div>

              {subMode === "molecules" ? (
                <>
                  <div className="flex flex-wrap gap-1.5">
                    {MOLECULE_PRESETS.map((mol) => (
                      <button
                        key={mol.id}
                        type="button"
                        onClick={() => setSelectedMoleculeId(mol.id)}
                        className={`rounded-lg border px-2.5 py-1.5 text-left transition-colors ${
                          mol.id === activeMolecule.id
                            ? "border-emerald-500 bg-emerald-950/60 text-emerald-200"
                            : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700"
                        }`}
                      >
                        <div className="font-mono text-xs font-bold">
                          {mol.formula}
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          {mol.hybridization} • {mol.bondAngle}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-zinc-100">
                        {activeMolecule.namePl} ({activeMolecule.formula})
                      </span>
                      <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[11px] text-emerald-300 border border-emerald-800/70">
                        {activeMolecule.hybridization}
                      </span>
                    </div>
                    <p className="text-zinc-300">
                      <strong className="text-zinc-400">Kształt:</strong>{" "}
                      {activeMolecule.geometryPl} •{" "}
                      <strong className="text-zinc-400">Kąt:</strong>{" "}
                      {activeMolecule.bondAngle}
                    </p>
                    <p className="text-zinc-300">
                      <strong className="text-zinc-400">Liczba steryczna:</strong>{" "}
                      {activeMolecule.stericNumber}
                    </p>
                    <p className="text-zinc-300">
                      <strong className="text-zinc-400">Polarność:</strong>{" "}
                      {activeMolecule.polarity}
                    </p>
                    <div className="mt-2 rounded border border-amber-900/60 bg-amber-950/30 p-2 text-[11px] text-amber-200">
                      <Sparkles className="mr-1 inline h-3 w-3" />
                      {activeMolecule.ckeNote}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-wrap gap-1.5">
                    {(["s", "px", "py", "pz", "dz2"] as OrbitalShapeId[]).map(
                      (orb) => (
                        <button
                          key={orb}
                          type="button"
                          onClick={() => setSelectedOrbital(orb)}
                          className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors ${
                            selectedOrbital === orb
                              ? "border-emerald-500 bg-emerald-950/60 text-emerald-200"
                              : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700"
                          }`}
                        >
                          {ORBITAL_INFO[orb].label}
                        </button>
                      ),
                    )}
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 text-xs space-y-1.5">
                    <div className="font-semibold text-zinc-100">
                      {ORBITAL_INFO[selectedOrbital].label}
                    </div>
                    <p className="font-mono text-[11px] text-sky-300">
                      Liczby kwantowe: {ORBITAL_INFO[selectedOrbital].l},{" "}
                      {ORBITAL_INFO[selectedOrbital].m}
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      {ORBITAL_INFO[selectedOrbital].desc}
                    </p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {/* Block Filter & Heatmap selector */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {(["all", "s", "p", "d"] as BlockFilter[]).map((blk) => (
                    <button
                      key={blk}
                      type="button"
                      onClick={() => setBlockFilter(blk)}
                      className={`rounded border px-2 py-0.5 text-[11px] font-medium ${
                        blockFilter === blk
                          ? "border-emerald-500 bg-emerald-950/70 text-emerald-200"
                          : "border-zinc-800 bg-zinc-900 text-zinc-400"
                      }`}
                    >
                      {blk === "all" ? "Wszystkie" : `Blok ${blk}`}
                    </button>
                  ))}
                </div>

                <select
                  value={heatmap}
                  onChange={(e) => setHeatmap(e.target.value as HeatmapMode)}
                  aria-label="Tryb mapy ciepła układu okresowego"
                  className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] text-zinc-200"
                >
                  <option value="block">Kolor: Bloki s / p / d</option>
                  <option value="electronegativity">
                    Mapa: Elektroujemność Paulinga
                  </option>
                  <option value="radius">Mapa: Promień atomowy</option>
                </select>
              </div>

              {/* Compact Periodic Tiles (Z=1..36) */}
              <div className="grid grid-cols-6 gap-1 sm:grid-cols-9">
                {filteredElements.map((el) => (
                  <button
                    key={el.z}
                    type="button"
                    onClick={() => setSelectedElementZ(el.z)}
                    className={`rounded border p-1 text-center transition-all ${getElementTileStyle(
                      el,
                      el.z === activeElement.z,
                    )}`}
                  >
                    <div className="text-[9px] leading-none opacity-75">
                      {el.z}
                    </div>
                    <div className="font-mono text-xs font-bold leading-tight">
                      {el.symbol}
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Element Inspection Card */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 text-xs space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-zinc-100">
                    {activeElement.z}. {activeElement.namePl} (
                    {activeElement.symbol}) • {activeElement.mass} u
                  </span>
                  <span className="rounded border border-purple-800/70 bg-purple-950/70 px-2 py-0.5 font-mono text-[10px] text-purple-200">
                    Blok {activeElement.block} • Gr. {activeElement.group} • Okr.{" "}
                    {activeElement.period}
                  </span>
                </div>
                <p className="font-mono text-emerald-300">
                  Konfiguracja: {activeElement.config}
                </p>
                <p className="text-zinc-300">
                  Elektroujemność (Pauling):{" "}
                  <strong>{activeElement.en ?? "— (gaz szlachetny)"}</strong> •
                  Promień: <strong>{activeElement.radiusPm} pm</strong> • St.
                  utl.: <strong>{activeElement.oxidationStates}</strong>
                </p>
                <div className="rounded border border-amber-900/60 bg-amber-950/30 p-2 text-[11px] text-amber-200">
                  {activeElement.ckeNote}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
