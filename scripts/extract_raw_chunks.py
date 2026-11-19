#!/usr/bin/env python3
"""
extract_raw_chunks.py
---------------------
Deterministic 100% offline PyMuPDF (`fitz`) extractor scanning `materiały-źródłowe/`
across all departments (`fizyka`, `matematyka`, `biochemia`, `neurobiologia`,
`farmakologia`, `informatyka`, `fizjologia`, `biologia`, `chemia`).

Dumps chapter headings, license classifications, and clean raw text excerpts into
`scripts/.cache/raw_extracts/<department>.json` with ZERO external network calls.
Agent moderation then reads those raw extracts and writes original Polish
microlearning prose into `src/data/oer-generated/*.json`.

Usage:
  python scripts/extract_raw_chunks.py
  python scripts/extract_raw_chunks.py --departments fizyka,biochemia --max-pages 12
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any

import fitz  # PyMuPDF

for stream_name in ("stdout", "stderr"):
    stream = getattr(sys, stream_name, None)
    if stream and hasattr(stream, "reconfigure"):
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

ROOT_DIR = Path(__file__).resolve().parent.parent
CACHE_DIR = ROOT_DIR / "scripts" / ".cache" / "raw_extracts"

DEPARTMENT_FOLDERS: dict[str, list[str]] = {
    "anatomia": ["anatomia"],
    "fizyka": ["fizyka"],
    "matematyka": ["matematyka_i_statystyka"],
    "biochemia": ["biochemia"],
    "neurobiologia": ["neurobiologia_i_psychologia"],
    "farmakologia": ["farmakologia_i_zywienie"],
    "informatyka": ["informatyka_i_dane"],
    "fizjologia": ["fizjologia", "anatomia"],
    "biologia": ["biologia"],
    "chemia": ["chemia"],
}


def locate_oer_root() -> Path:
    for name in ("materiały-źródłowe", "materialy-zrodlowe"):
        candidate = ROOT_DIR / name
        if candidate.is_dir():
            return candidate
    return ROOT_DIR / "materiały-źródłowe"


def classify_license(pdf_path: Path) -> dict[str, str]:
    name = pdf_path.name
    low = name.lower()
    if "cc-by-nc" in low or "nc-sa" in low or "nc-nd" in low:
        return {"mode": "CONCEPT_SYNTHESIS", "license": "CC-BY-NC / Non-Commercial"}
    if "cc-by-sa" in low:
        return {"mode": "DIRECT_ADAPTATION", "license": "CC BY-SA 4.0"}
    if "cc-by" in low or "openagh" in low or "openstax_pl" in low:
        return {"mode": "DIRECT_ADAPTATION", "license": "CC BY 4.0"}
    return {"mode": "CONCEPT_SYNTHESIS", "license": "Clean-Room Reference"}


def extract_pdf_summary(
    pdf_path: Path,
    sample_pages: int = 8,
    max_chars_per_page: int = 1200,
) -> dict[str, Any]:
    cls = classify_license(pdf_path)
    doc = fitz.open(pdf_path)
    try:
        page_count = len(doc)
        toc_entries: list[dict[str, Any]] = []
        for item in doc.get_toc(simple=True)[:60]:
            level, title, page_no = item
            clean_title = re.sub(r"\s+", " ", str(title)).strip()
            if clean_title and level <= 2:
                toc_entries.append({"level": level, "title": clean_title, "page": page_no})

        # Sample distributed pages skipping early frontmatter when possible
        start_page = min(page_count - 1, max(0, int(page_count * 0.05)))
        end_page = max(start_page + 1, min(page_count, int(page_count * 0.9)))
        step = max(1, (end_page - start_page) // max(1, sample_pages))
        sampled_indices = list(range(start_page, end_page, step))[:sample_pages]

        excerpts: list[dict[str, Any]] = []
        for idx in sampled_indices:
            raw_txt = doc[idx].get_text("text") or ""
            cleaned = re.sub(r"[ \t]+", " ", raw_txt)
            cleaned = re.sub(r"\n{3,}", "\n\n", cleaned).strip()
            if cleaned:
                excerpts.append(
                    {
                        "page": idx + 1,
                        "text": cleaned[:max_chars_per_page],
                    }
                )

        return {
            "sourceFile": pdf_path.name,
            "relativePath": str(pdf_path.relative_to(ROOT_DIR)).replace("\\", "/"),
            "processingMode": cls["mode"],
            "licenseTag": cls["license"],
            "totalPages": page_count,
            "tocHeadings": toc_entries,
            "excerpts": excerpts,
        }
    finally:
        doc.close()


def extract_department(
    dept: str,
    sample_pages: int = 8,
    max_pdfs: int | None = None,
) -> dict[str, Any]:
    oer_root = locate_oer_root()
    folders = DEPARTMENT_FOLDERS.get(dept, [dept])
    pdfs: list[Path] = []

    for folder in folders:
        target_dir = oer_root / folder
        if not target_dir.is_dir():
            continue
        candidates = sorted(
            p
            for p in target_dir.rglob("*")
            if p.is_file()
            and p.suffix.lower() in (".pdf", ".epub")
            and not re.search(r"[\\/](?:Biologia|Chemia)[\\/]20\d{2}[\\/]", str(p))
        )
        if dept == "fizjologia" and folder == "anatomia":
            candidates = [
                p
                for p in candidates
                if any(k in p.name.lower() for k in ("fizjolog", "physiology", "openstax"))
            ]
        elif dept == "anatomia":
            candidates = [
                p
                for p in candidates
                if "egzamin" not in p.name.lower()
            ]
        pdfs.extend(candidates)

    if max_pdfs:
        pdfs = pdfs[:max_pdfs]

    books: list[dict[str, Any]] = []
    for pdf_path in pdfs:
        try:
            books.append(extract_pdf_summary(pdf_path, sample_pages=sample_pages))
        except Exception as exc:
            print(f"[WARN] Failed reading {pdf_path.name}: {exc}", file=sys.stderr)

    return {
        "department": dept,
        "bookCount": len(books),
        "books": books,
    }


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Deterministic 100% offline PyMuPDF raw textbook extractor."
    )
    parser.add_argument(
        "--departments",
        default=",".join(DEPARTMENT_FOLDERS.keys()),
        help="Comma-separated department keys.",
    )
    parser.add_argument(
        "--sample-pages",
        type=int,
        default=6,
        help="Sample pages per textbook.",
    )
    parser.add_argument(
        "--max-pdfs",
        type=int,
        default=None,
        help="Optional cap on PDFs scanned per department.",
    )
    args = parser.parse_args()

    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    depts = [d.strip() for d in args.departments.split(",") if d.strip()]

    summary: list[str] = []
    for dept in depts:
        payload = extract_department(
            dept, sample_pages=args.sample_pages, max_pdfs=args.max_pdfs
        )
        out_path = CACHE_DIR / f"{dept}.json"
        out_path.write_text(
            json.dumps(payload, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        toc_total = sum(len(b.get("tocHeadings", [])) for b in payload["books"])
        summary.append(f"{dept}: {payload['bookCount']} PDFs, {toc_total} TOC headings")

    print(f"Wrote raw extracts into {CACHE_DIR}:")
    for line in summary:
        print(f"  - {line}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
