#!/usr/bin/env python3
"""
fabryka_oer_matura.py
---------------------
Asynchronous DeepSeek-powered OER & Multi-Tier Curriculum Textbook Pipeline.

Reads open-educational PDFs (OpenStax, LibreTexts, MIT OCW, etc.) from
`materiały-źródłowe/` across all science departments, extracts text chunks,
reconstructs and synthesizes original Polish academic/matura chapters (without
plagiarism), assigns 4-tier CKE curriculum metadata (`cke-core`,
`cke-2023-only`, `cke-2015-only`, `academic-extra`), and merges output into
`src/data/oer-generated/<department>.json`.

Usage:
  python scripts/fabryka_oer_matura.py --dry-run
  python scripts/fabryka_oer_matura.py --department fizyka --limit 5
  python scripts/fabryka_oer_matura.py --department all --concurrency 4
"""

from __future__ import annotations

import argparse
import asyncio
import hashlib
import json
import os
import re
import sys
from pathlib import Path
from typing import Any

# Ensure scripts dir is importable when invoked from repo root
sys.path.insert(0, str(Path(__file__).resolve().parent))
from deepseek_cleanroom import (  # noqa: E402
    classify_source_file,
    load_env_files,
    synthesize_cleanroom_concept,
    synthesize_direct_adaptation,
)

# Ensure Windows consoles print Polish diacritics & emoji safely
for stream_name in ("stdout", "stderr"):
    stream = getattr(sys, stream_name, None)
    if stream and hasattr(stream, "reconfigure"):
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

ROOT_DIR = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = Path(__file__).resolve().parent
CACHE_FILE = SCRIPTS_DIR / ".cache" / "oer_matura_progress.json"
OUTPUT_DIR = ROOT_DIR / "src" / "data" / "oer-generated"

# Map platform department slugs -> source subdirectories inside materiały-źródłowe/
DEPARTMENT_SOURCE_DIRS: dict[str, dict[str, Any]] = {
    "fizyka": {
        "dir": "fizyka",
        "default_domain_id": "fizyka-mechanika-i-termodynamika",
        "default_domain_title": "Mechanika klasyczna, płyny i termodynamika medyczna",
        "label": "Fizyka i Biofizyka (OER)",
    },
    "matematyka": {
        "dir": "matematyka_i_statystyka",
        "default_domain_id": "matematyka-analiza-i-calculus",
        "default_domain_title": "Analiza matematyczna i równania w naukach przyrodniczych",
        "label": "Matematyka i Biostatystyka (OER)",
    },
    "biochemia": {
        "dir": "biochemia",
        "default_domain_id": "biochemia-enzymologia-i-energetyka",
        "default_domain_title": "Kinetyka enzymatyczna i termodynamika biochemiczna",
        "label": "Biochemia Akademicka (OER)",
    },
    "neurobiologia": {
        "dir": "neurobiologia_i_psychologia",
        "default_domain_id": "neurobiologia-komorkowa-i-synaptyczna",
        "default_domain_title": "Neurofizjologia błonowa, potencjały i transmisja synaptyczna",
        "label": "Neurobiologia i Neuronauka (OER)",
    },
    "farmakologia": {
        "dir": "farmakologia_i_zywienie",
        "default_domain_id": "farmakologia-kinetyka-i-dynamika",
        "default_domain_title": "Farmakokinetyka (LADME) i farmakodynamika receptorowa",
        "label": "Farmakologia Kliniczna (OER)",
    },
    "informatyka": {
        "dir": "informatyka_i_dane",
        "default_domain_id": "informatyka-algorytmy-i-bioinformatyka",
        "default_domain_title": "Algorytmy, programowanie w Pythonie i bioinformatyka obliczeniowa",
        "label": "Informatyka i Bioinformatyka (OER)",
    },
    "biologia": {
        "dir": "biologia",
        "default_domain_id": "biologia-oer-dodatkowe",
        "default_domain_title": "Biologia ogólna i akademicka (OER)",
        "label": "Biologia Ogólna i Maturalna (OER)",
    },
    "chemia": {
        "dir": "chemia",
        "default_domain_id": "chemia-oer-dodatkowe",
        "default_domain_title": "Chemia ogólna, nieorganiczna i organiczna (OER)",
        "label": "Chemia Ogólna i Organiczna (OER)",
    },
    "anatomia": {
        "dir": "anatomia",
        "default_domain_id": "anatomia-oer-kliniczna",
        "default_domain_title": "Anatomia i fizjologia kliniczna (OER)",
        "label": "Anatomia Kliniczna (OER)",
    },
}


def locate_oer_root() -> Path:
    for name in ("materiały-źródłowe", "materialy-zrodlowe"):
        candidate = ROOT_DIR / name
        if candidate.is_dir():
            return candidate
    return ROOT_DIR / "materiały-źródłowe"


def slugify(text: str, max_len: int = 64) -> str:
    pl_map = str.maketrans("ąćęłńóśźżĄĆĘŁŃÓŚŹŻ", "acelnoszzACELNOSZZ")
    cleaned = text.translate(pl_map).lower()
    cleaned = re.sub(r"[^a-z0-9]+", "-", cleaned).strip("-")
    return cleaned[:max_len].strip("-") or "rozdzial-oer"


def discover_source_pdfs(department: str) -> list[Path]:
    oer_root = locate_oer_root()
    cfg = DEPARTMENT_SOURCE_DIRS[department]
    dept_dir = oer_root / cfg["dir"]
    if not dept_dir.is_dir():
        return []
    pdfs = sorted(dept_dir.rglob("*.pdf"))
    # Exclude official CKE exam arkusze (handled by fabryka_arkusze_cke.py)
    return [
        p
        for p in pdfs
        if not re.search(r"(?:arkusz|EBIP-|ECHP-|odpowiedzi)", p.name, re.IGNORECASE)
    ]


def extract_pdf_chunks(pdf_path: Path, pages_per_chunk: int = 8, max_chunks: int = 4) -> list[dict[str, Any]]:
    """
    Extract text chunks from a PDF using PyMuPDF (fitz) or pypdf if available.
    Falls back cleanly if no PDF reader package is installed.
    """
    reader_kind: str | None = None
    try:
        import fitz  # type: ignore
        reader_kind = "fitz"
    except ImportError:
        try:
            from pypdf import PdfReader  # type: ignore
            reader_kind = "pypdf"
        except ImportError:
            reader_kind = None

    if reader_kind is None:
        return []

    chunks: list[dict[str, Any]] = []
    if reader_kind == "fitz":
        import fitz  # type: ignore
        doc = fitz.open(str(pdf_path))
        total_pages = len(doc)
        start = min(5, max(0, total_pages // 20))  # Skip cover/TOC pages heuristically
        for idx in range(max_chunks):
            p_start = start + idx * pages_per_chunk
            if p_start >= total_pages:
                break
            p_end = min(total_pages, p_start + pages_per_chunk)
            text_parts = [doc[p].get_text("text") for p in range(p_start, p_end)]
            raw_text = "\n".join(text_parts).strip()
            if len(raw_text) > 400:
                chunks.append(
                    {
                        "chunk_index": idx + 1,
                        "page_range": f"{p_start + 1}-{p_end}",
                        "text": raw_text[:12000],
                    }
                )
        doc.close()
    else:
        from pypdf import PdfReader  # type: ignore
        reader = PdfReader(str(pdf_path))
        total_pages = len(reader.pages)
        start = min(5, max(0, total_pages // 20))
        for idx in range(max_chunks):
            p_start = start + idx * pages_per_chunk
            if p_start >= total_pages:
                break
            p_end = min(total_pages, p_start + pages_per_chunk)
            text_parts = [reader.pages[p].extract_text() or "" for p in range(p_start, p_end)]
            raw_text = "\n".join(text_parts).strip()
            if len(raw_text) > 400:
                chunks.append(
                    {
                        "chunk_index": idx + 1,
                        "page_range": f"{p_start + 1}-{p_end}",
                        "text": raw_text[:12000],
                    }
                )

    return chunks


def load_cache() -> dict[str, Any]:
    if CACHE_FILE.is_file():
        try:
            return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {"completed": {}}


def save_cache(cache: dict[str, Any]) -> None:
    CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
    CACHE_FILE.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def load_output_list(department: str) -> list[dict[str, Any]]:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    out_file = OUTPUT_DIR / f"{department}.json"
    if out_file.is_file():
        try:
            data = json.loads(out_file.read_text(encoding="utf-8"))
            if isinstance(data, list):
                return data
        except Exception:
            pass
    return []


def save_output_list(department: str, items: list[dict[str, Any]]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    out_file = OUTPUT_DIR / f"{department}.json"
    out_file.write_text(
        json.dumps(items, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


async def process_chunk(
    client: Any,
    model: str,
    sem: asyncio.Semaphore,
    department: str,
    pdf_path: Path,
    chunk: dict[str, Any],
) -> dict[str, Any]:
    cfg = DEPARTMENT_SOURCE_DIRS[department]
    classification = classify_source_file(pdf_path)
    mode = classification["mode"]
    attribution = classification.get("license_attribution")

    async with sem:
        if mode == "DIRECT_ADAPTATION" and attribution:
            parsed = await synthesize_direct_adaptation(
                client,
                model,
                department_label=cfg["label"],
                domain_title=cfg["default_domain_title"],
                pdf_name=pdf_path.name,
                page_range=chunk["page_range"],
                raw_text=chunk["text"],
                license_attribution=attribution,
            )
        else:
            parsed = await synthesize_cleanroom_concept(
                client,
                model,
                department_label=cfg["label"],
                domain_title=cfg["default_domain_title"],
                pdf_name=pdf_path.name,
                page_range=chunk["page_range"],
                raw_text=chunk["text"],
            )

    raw_title = parsed.get("chapterTitle") or f"{pdf_path.stem} — cz. {chunk['chunk_index']}"
    digest = hashlib.sha1(f"{pdf_path.name}:{chunk['chunk_index']}".encode("utf-8")).hexdigest()[:6]
    chapter_id = f"oer-{department[:4]}-{slugify(raw_title, 44)}-{digest}"

    entry: dict[str, Any] = {
        "id": chapter_id,
        "domainId": cfg["default_domain_id"],
        "domainTitle": cfg["default_domain_title"],
        "sourcePdf": pdf_path.name,
        "pageRange": chunk["page_range"],
        "processingMode": mode,
        "data": parsed,
    }
    if attribution:
        entry["licenseAttribution"] = attribution
    return entry


async def run_pipeline(args: argparse.Namespace) -> int:
    load_env_files()
    departments = (
        list(DEPARTMENT_SOURCE_DIRS.keys())
        if args.department == "all"
        else [args.department]
    )

    for dept in departments:
        if dept not in DEPARTMENT_SOURCE_DIRS:
            print(f"[ERROR] Unknown department: {dept}", file=sys.stderr)
            return 2

    discovered: dict[str, list[Path]] = {
        dept: discover_source_pdfs(dept) for dept in departments
    }

    print(f"OER root: {locate_oer_root()}")
    total_pdfs = sum(len(v) for v in discovered.values())
    print(f"Discovered {total_pdfs} OER PDF(s) across {len(departments)} department(s):")
    for dept, pdfs in discovered.items():
        direct_cnt = sum(1 for p in pdfs if classify_source_file(p)["mode"] == "DIRECT_ADAPTATION")
        synth_cnt = len(pdfs) - direct_cnt
        print(
            f"  - {dept:<14}: {len(pdfs):>2} PDFs "
            f"(DIRECT_ADAPTATION={direct_cnt}, CONCEPT_SYNTHESIS={synth_cnt}) -> {OUTPUT_DIR / f'{dept}.json'}"
        )

    if args.dry_run:
        print("\n[DRY-RUN] Offline OER discovery ready (zero external LLM calls).")
        for dept, pdfs in discovered.items():
            for p in pdfs[:3]:
                cls = classify_source_file(p)
                print(f"    [{cls['mode']:<17}] {dept}/{p.name} -> {cls['license_tag']}")
        print("[DRY-RUN] Zakończono bez wywołań API i bez modyfikacji plików.")
        return 0

    print(
        "[INFO] External LLM API calls have been retired from this script. "
        "Run `python scripts/extract_raw_chunks.py` for offline PyMuPDF extraction "
        "and author clean-room chapters directly into `src/data/oer-generated/*.json`."
    )
    return 0


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="DeepSeek async pipeline: OER PDFs -> Structured Polish Textbook JSON",
    )
    parser.add_argument(
        "--department",
        default="all",
        help="Department slug (fizyka, matematyka, biochemia, neurobiologia, farmakologia, informatyka, or all)",
    )
    parser.add_argument("--limit", type=int, default=0, help="Max PDFs per department (0 = no limit)")
    parser.add_argument("--chunks-per-pdf", type=int, default=2, help="Chunks extracted per PDF")
    parser.add_argument("--concurrency", type=int, default=4, help="Max concurrent DeepSeek requests")
    parser.add_argument("--force", action="store_true", help="Re-process previously cached chunks")
    parser.add_argument("--dry-run", action="store_true", help="Inspect OER PDFs without API calls")
    return parser.parse_args(argv)


def main() -> int:
    args = parse_args()
    return asyncio.run(run_pipeline(args))


if __name__ == "__main__":
    raise SystemExit(main())
