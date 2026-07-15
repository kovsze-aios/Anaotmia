#!/usr/bin/env python3
"""Step 1: Write expanded biology TypeScript file with massive cytologia chapter."""
import os

OUT = r"C:\DAWID_PRACE\Anatomia\anatomy-3d\src\data\biologia\domain-01-biology.ts"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

# Read the existing file for interface definitions and CKE tasks
backup = OUT + ".bak"

# Write the full expanded file
with open(OUT, 'w', encoding='utf-8') as f:
    f.write('''// =============================================================================
// BIOLOGIA – Pełny kurs maturalny (Podstawa Programowa 2025)
// Rozszerzony wolumin podręcznikowy — autorytatywny wykład akademicki
// Cytologia, Metabolizm, Genetyka — pełne rozdziały podręcznikowe
// =============================================================================

export interface BiologyChapter {
  id: string;
  title: string;
  content: string;
  subsections?: BiologyChapter[];
}

export interface CKEexamTask {
  id: string;
  year: number;
  taskNumber: string;
  question: string;
  answer: string;
  chapter: string;
}

export interface BiologyDomain {
  domainId: "bio-01";
  domainNamePL: "Biologia – Kurs Maturalny";
  introduction: string;
  chapters: BiologyChapter[];
  ckeTasks: CKEexamTask[];
}

const introduction = `Biologia jest nauką o życiu i organizmach żywych. Obejmuje szeroki zakres zagadnień – od molekularnych podstaw funkcjonowania komórek, przez anatomię i fizjologię organizmów, genetykę, systematykę i ekologię, po ewolucję życia na Ziemi. Kurs maturalny biologii w zakresie rozszerzonym (Podstawa Programowa 2025) obejmuje: cytologię i biochemię komórki, metabolizm i enzymologię, genetykę klasyczną i molekularną, botanikę (tkanki, morfologię i fizjologię roślin), zoologię (systematyczny przegląd typów i gromad ze szczególnym uwzględnieniem strunowców), anatomię i fizjologię człowieka (wszystkie układy narządów), ekologię z ochroną środowiska oraz ewolucjonizm z antropogenezą. Niniejszy podręcznik stanowi kompletny, autorytatywny wykład każdego z tych działów, oparty na podstawie programowej i standardach egzaminacyjnych CKE.`;

''')

print(f"Header written. File: {OUT}, Size: {os.path.getsize(OUT)} bytes")
print("Now run step 2 to append cytologia content.")
