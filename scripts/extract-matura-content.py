#!/usr/bin/env python3
"""
extract-matura-content.py

Placeholder script for extracting Matura exam questions from CKE PDF files
using PyMuPDF (fitz). Run from the project root:

    pip install pymupdf
    python scripts/extract-matura-content.py

Expected directory structure:
  ../biologia/biologia zadania maturalne.pdf
  ../biologia/Biologia/2016/MBI-R1_1P-162.pdf
  ../biologia/Biologia/<year>/<exam>.pdf
  ../chemia/Chemia/<year>/<exam>.pdf

Output: JSON files under src/data/biologia/extracted/ and src/data/chemia/extracted/
"""

import json
import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    print("PyMuPDF not installed. Install with: pip install pymupdf")
    sys.exit(1)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BIOLOGIA_DIR = os.path.join(BASE_DIR, "..", "biologia")
CHEMIA_DIR = os.path.join(BASE_DIR, "..", "chemia")
OUTPUT_DIR = os.path.join(BASE_DIR, "src", "data")

EXAM_PATTERNS = [
    # Biologia / Chemia yearly exam PDFs
    ("Biologia", BIOLOGIA_DIR, "Biologia"),
    ("Chemia", CHEMIA_DIR, "Chemia"),
]

def extract_text_from_pdf(path: str) -> str:
    """Extract all text from a PDF file."""
    doc = fitz.open(path)
    text = ""
    for page in doc:
        text += page.get_text()
    doc.close()
    return text

def parse_cke_questions(text: str) -> list[dict]:
    """
    Naive parser for CKE exam text.
    Attempts to split by question numbers and extract instruction/question/answer.
    This is a placeholder — real parsing needs manual tuning per exam format.
    """
    lines = text.split("\n")
    questions = []
    current: dict | None = None
    q_counter = 0

    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        # Heuristic: lines starting with a number followed by '.' indicate a new question
        if stripped[0].isdigit() and "." in stripped[:4]:
            if current:
                questions.append(current)
            q_counter += 1
            current = {
                "id": f"extracted-{q_counter}",
                "questionNumber": q_counter,
                "instruction": "",
                "questionText": stripped,
                "officialCkeAnswer": "",
                "points": 1,
                "topicCategory": "Nieskategoryzowane",
            }
        elif current:
            if not current["questionText"]:
                current["questionText"] = stripped
            elif not current["officialCkeAnswer"] and ("odpowiedź" in stripped.lower() or "punkt" in stripped.lower()):
                current["officialCkeAnswer"] = stripped
            else:
                current["questionText"] += " " + stripped

    if current:
        questions.append(current)

    return questions

def process_subject(name: str, subject_dir: str, subject_key: str):
    """Walk the subject directory and extract text from PDFs."""
    if not os.path.isdir(subject_dir):
        print(f"Directory not found: {subject_dir}")
        return

    extracted = {}

    # Process the main zadania maturalne PDF if present
    main_pdf = os.path.join(subject_dir, f"{subject_key.lower()} zadania maturalne.pdf")
    if os.path.isfile(main_pdf):
        print(f"Processing: {main_pdf}")
        text = extract_text_from_pdf(main_pdf)
        extracted["zadania_maturalne"] = {
            "path": main_pdf,
            "text_length": len(text),
            "questions": parse_cke_questions(text),
        }

    # Process yearly exam PDFs
    subject_subdir = os.path.join(subject_dir, subject_key)
    if not os.path.isdir(subject_subdir):
        print(f"No {subject_subdir} directory found.")
        return

    for year_dir in sorted(os.listdir(subject_subdir)):
        year_path = os.path.join(subject_subdir, year_dir)
        if not os.path.isdir(year_path):
            continue

        year_extracted = []
        for fname in os.listdir(year_path):
            if fname.lower().endswith(".pdf") and "zasady" not in fname.lower() and "karta" not in fname.lower() and "model" not in fname.lower():
                pdf_path = os.path.join(year_path, fname)
                print(f"  Processing: {pdf_path}")
                text = extract_text_from_pdf(pdf_path)
                year_extracted.append({
                    "filename": fname,
                    "text_length": len(text),
                    "questions": parse_cke_questions(text),
                })

        if year_extracted:
            extracted[year_dir] = year_extracted

    # Write extracted data to JSON
    output_path = os.path.join(OUTPUT_DIR, subject_key.lower(), "extracted")
    os.makedirs(output_path, exist_ok=True)
    with open(os.path.join(output_path, "cke_data.json"), "w", encoding="utf-8") as f:
        json.dump(extracted, f, ensure_ascii=False, indent=2)

    print(f"Extracted data written to {output_path}/cke_data.json")

def main():
    print("=== CKE Matura Content Extraction ===\n")
    for name, subject_dir, subject_key in EXAM_PATTERNS:
        print(f"\n--- {name} ---")
        process_subject(name, subject_dir, subject_key)

    print("\nDone. Run `npm run build` to verify integration.")

if __name__ == "__main__":
    main()
