#!/usr/bin/env python3
"""
fabryka_cke_pdf_overlays.py
---------------------------
Deterministic 100% offline PyMuPDF (`fitz`) extractor generating exact PDF
overlay coordinate mappings & 1:1 CKE key annotations for CKE Matura exam pages
(`public/cke-assets/<subject>/<year>_maj/page_*.png`).

Zero external LLM API calls:
- Uses `page.find_tables()` to map EVERY individual empty table cell & P/F box
  in exam sheets directly to clean student answers from official CKE scoring keys
  (`*-zasady*.pdf` / `*-model*.pdf` / `*-N.pdf`).
- Detects dotted answer lines and empty workspace regions strictly below
  printed prompt text so handwritten overlays never cover printed text.

Usage:
  python scripts/fabryka_cke_pdf_overlays.py
  python scripts/fabryka_cke_pdf_overlays.py --limit 10
"""

from __future__ import annotations

import argparse
import json
import os
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
CKE_EXAMS_DIR = ROOT_DIR / "src" / "data" / "cke-exams"
ASSETS_DIR = ROOT_DIR / "public" / "cke-assets"
OUTPUT_OVERLAYS_FILE = CKE_EXAMS_DIR / "cke-pdf-overlays.json"

TASK_FILES: dict[str, Path] = {
    "biologia": CKE_EXAMS_DIR / "biologia-cke-tasks.json",
    "chemia": CKE_EXAMS_DIR / "chemia-cke-tasks.json",
}

DOTTED_LINE_RE = re.compile(r"^[.\u2026_\-\s]{6,}$")
TASK_HEADER_RE = re.compile(r"\bZadanie\s+(\d+(?:\.\d+)?)\b", re.IGNORECASE)
SUBTASK_INLINE_RE = re.compile(r"^(?:Zadanie\s+)?(\d+\.\d+)\.(?:\s|$)")
MC_OPTION_RE = re.compile(r"^\s*([A-F1-4])[.)]\s+")

RUBRIC_LINE_RE = re.compile(
    r"^\s*(?:\.\s*(?:\(\d+[–-]\d+\)\s*)?)?(?:"
    r"(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI)\.\s*(?:Poznanie|Poszukiwanie|Rozumowanie|Korzystanie|Wykonywanie|Budowa|Metabolizm|Przegląd|Fizjologia|Genetyka|Ekologia|Ewolucja|Różnorodność|Ogólne|Wstęp|Wykorzystanie|Pogłębienie|Opanowanie|Rozwiązywanie)"
    r"|(?:\d+\.\d+\.?\s*(?:\(\d+[–-]\d+\)\s*)?)?(?:I|II|III|IV|V)\.\s+(?:Poznanie|Wykorzystanie|Pogłębienie|Opanowanie|Rozumowanie)"
    r"|Zdający\b"
    r"|Wymagani[ae]\s+(?:ogóln|szczegółow|egzaminacyjn)"
    r"|Zasady\s+oceniania\b"
    r"|Schemat\s+punktowania\b"
    r"|Rozporządzenie\s+Ministra\b"
    r"|Załącznik\s+nr\b"
    r"|\d+\s+Rozporządzenie\s+Ministra"
    r"|\d+\s+Załącznik\s+nr"
    r"|Dz\.?\s*U\.?"
    r"|wiedzy\s+do\s+rozwiązywania\s+problemów\b"
    r"|(?:III|IV)\s+etap\s+edukacyjny\b"
    r"|-skutkowe\b"
    r")",
    re.IGNORECASE,
)

RUBRIC_FRAGMENT_RE = re.compile(
    r"(?:poziomach\s+organizacji\s+życia|różnorodnych\s+źródeł|zależności\s+przyczynowo-skutkowe|strukturą\s+a\s+funkcją|informacje\s+pozyskane\s+z\s+różnorodnych|Zdający\s+\[…\]|wymaganiach\s+egzaminacyjnych|wiedzy\s+do\s+rozwiązywania\s+problemów|etap\s+edukacyjny|Wykorzystanie\s+i\s+tworzenie\s+informacji|Opanowanie\s+czynności\s+praktycznych|Pogłębienie\s+wiadomości)",
    re.IGNORECASE,
)


def load_env_files() -> None:
    for env_path in (
        ROOT_DIR / ".env.local",
        ROOT_DIR / ".env",
        ROOT_DIR.parent / ".env.local",
        ROOT_DIR.parent / ".env",
    ):
        if not env_path.is_file():
            continue
        try:
            for raw_line in env_path.read_text(encoding="utf-8", errors="ignore").splitlines():
                line = raw_line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                k = k.strip()
                v = v.strip().strip('"').strip("'")
                if k and k not in os.environ:
                    os.environ[k] = v
        except Exception:
            pass


def locate_oer_root() -> Path:
    for name in ("materiały-źródłowe", "materialy-zrodlowe"):
        candidate = ROOT_DIR / name
        if candidate.is_dir():
            return candidate
    return ROOT_DIR / "materiały-źródłowe"


def find_exam_pdf(subject: str, year: int, month: str) -> Path | None:
    oer_root = locate_oer_root()
    folder_name = "Biologia" if subject == "biologia" else "Chemia"
    year_dir = oer_root / subject / folder_name / str(year)
    if not year_dir.is_dir():
        return None
    pdfs = sorted(year_dir.glob("*.pdf"))
    for pdf in pdfs:
        low = pdf.name.lower()
        if any(skip in low for skip in ("karta", "odpowiedzi", "zasady", "model", "-n.pdf", "_n.pdf")):
            continue
        if "arkusz" in low or low.startswith(("ebip", "echp", "mbi", "mch")):
            return pdf
    for pdf in pdfs:
        low = pdf.name.lower()
        if not any(skip in low for skip in ("karta", "odpowiedzi", "zasady", "model", "-n.pdf", "_n.pdf")):
            return pdf
    return None


def find_scoring_pdf(subject: str, year: int, month: str) -> Path | None:
    oer_root = locate_oer_root()
    folder_name = "Biologia" if subject == "biologia" else "Chemia"
    year_dir = oer_root / subject / folder_name / str(year)
    if not year_dir.is_dir():
        return None
    pdfs = sorted(year_dir.glob("*.pdf"))
    for pdf in pdfs:
        low = pdf.name.lower()
        if any(tag in low for tag in ("zasady", "model", "-n.pdf", "_n.pdf")):
            return pdf
    return None


def strip_rubric_noise(text: str) -> str:
    """Removes interleaved CKE curriculum requirement blocks & rubric boilerplate lines (both 2015 and 2023 formulas)."""
    if not text:
        return ""

    # 1. Multi-line scrubs for narrow vertical curriculum columns interleaved across PDF lines
    cleaned = text
    cleaned = re.sub(
        r"Wymagania\s+ogólne\s+Wymagania\s+szczegółowe[\s\S]{0,1200}?(?=Schemat\s+punktowania|Zasady\s+oceniania|Przykładow|Rozwiązani|\n\s*cholera\b|$)",
        "\n",
        cleaned,
        flags=re.IGNORECASE,
    )
    cleaned = re.sub(
        r"(?:^|\s)(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI)\.\s*(?:Wykorzystanie|Rozumowanie|Opanowanie|Poznanie|Pogłębienie|Poszukiwanie|Korzystanie)[\s\S]{0,360}?(?:problemów\.?|informacji\.?|praktycznych\.?|życia\.?|\[\…\]\.?)",
        "\n",
        cleaned,
        flags=re.IGNORECASE,
    )
    cleaned = re.sub(
        r"(?:III|IV)\s+etap\s+edukacyjny[\s\S]{0,480}?(?=Przykładow|Rozwiązani|Schemat\s+punktowania|Zasady\s+oceniania|\uf0a7|•|$)",
        "\n",
        cleaned,
        flags=re.IGNORECASE,
    )
    cleaned = re.sub(
        r"Zdający\s*:?[\s\S]{0,380}?(?:\[\…\]\.?|\.\s*(?=\n|$))",
        "\n",
        cleaned,
        flags=re.IGNORECASE,
    )
    # 2. Inline fragments across spaces/newlines
    inline_patterns = (
        r"(?:I+\.?\s*)?(?:Rozumowanie\s+)?i\s+zastosowanie\s+nabytej\s+wiedzy\s+do\s+rozwiązywania\s+problemów\.?",
        r"(?:I+\.?\s*)?Wykorzystanie\s+i\s+tworzenie\s+informacji\.?",
        r"(?:I+\.?\s*)?i\s+tworzenie\s+informacji\.?",
        r"(?:III\.?\s*)?Opanowanie\s+czynności\s+praktycznych\.?",
        r"czynności\s+praktycznych\.?",
        r"przedstawia\s+związki\s+między\s+strukturą[\s\S]{0,100}?życia\s*(?:\[\…\])?\.?",
        r"opisuje,\s*porządkuje\s+i\s+rozpoznaje\s+organizmy\s*(?:\[\…\])?\.?",
        r"objaśnia\s+funkcjonowanie\s+organizmu\s+ludzkiego[\s\S]{0,100}?złożoności\s*(?:\[\…\])?\.?",
        r"budowy\s+i\s+funkcjonowania\s+organizmu\s+ludzkiego\.?",
        r"stosuje\s+regułę\s+przekory[\s\S]{0,120}?(?:\[\…\]\.?|dynamicznej\.?)",
        r"wymienia\s+najważniejsze\s+(?:choroby|protisty)[\s\S]{0,180}?(?:\)\s*\[\…\]\.?|\)\.)",
        r"\.\s*\(\d+[–-]\d+\)\s*",
    )
    for pat in inline_patterns:
        cleaned = re.sub(pat, " ", cleaned, flags=re.IGNORECASE)

    # 3. Line-by-line filter
    clean_lines: list[str] = []
    for raw_ln in cleaned.splitlines():
        ln = re.sub(r"\s+", " ", raw_ln).strip()
        if not ln:
            continue
        if RUBRIC_LINE_RE.match(ln) or RUBRIC_FRAGMENT_RE.search(ln):
            continue
        if re.match(r"^(?:0|1|2|3|4)\s*p(?:kt)?\.?\s*[–-]", ln, re.IGNORECASE):
            continue
        if re.match(r"^\d+(?:\.\d+)?\.\s*\(\d+[–-]\d+\)\s*$", ln):
            continue
        clean_lines.append(ln)
    return "\n".join(clean_lines)


def clean_cell_answer(raw: str | None) -> str:
    """
    Distills a scoring-key table cell into the single clean student answer
    suitable for writing inside an empty exam table cell.
    """
    if not raw:
        return ""
    txt = re.sub(r"\s+", " ", raw.replace("\n", " ")).strip()
    if not txt:
        return ""

    # Join broken chemical/enzyme subscripts like "E 2" -> "E2", "CO 2" -> "CO2"
    txt = re.sub(r"\b([A-Za-z])\s+(\d)\b", r"\1\2", txt)
    # Remove bracketed optional hint like "N (T)" -> "N"
    txt = re.sub(r"^([NT])\s*\([NT]\)$", r"\1", txt)

    # Trim inline "LUB" / "ALBO" synonym alternatives (e.g. "P LUB fosfor" -> "P", "V ALBO 5" -> "V")
    alt_split = re.split(r"\s+(?:LUB|ALBO)\s+", txt, maxsplit=1)
    if len(alt_split) == 2 and alt_split[0].strip():
        txt = alt_split[0].strip()

    if " / " in txt:
        parts = [p.strip() for p in txt.split(" / ") if p.strip()]
        # Specific CKE Biologia 2022 1.1 canonical mitochondrial membrane phrase
        for p in parts:
            low_p = p.lower()
            if "wewnętrzn" in low_p and "błona mitochondrium" in low_p:
                return "wewnętrzna błona mitochondrium"
        if parts:
            txt = parts[0]

    # Fix unmatched trailing ')' from multiline slash split (e.g. "deaminacja)" -> "deaminacja")
    if txt.endswith(")") and "(" not in txt:
        txt = txt[:-1].strip()
    if txt.startswith("(") and ")" not in txt:
        txt = txt[1:].strip()

    return txt.strip()


def extract_concise_answer(official_key: str) -> tuple[str, list[str]]:
    """
    Distills an official CKE scoring criterion into:
      1) concise inline fill text suitable for handwriting onto PDF answer lines,
      2) optional single-letter multiple-choice marks (e.g. ['B'] or ['A', 'D']).
    """
    cleaned = official_key.strip()
    if not cleaned:
        return "", []

    solution_part = ""
    sol_match = re.search(
        r"\b(?:Przykładowe\s+poprawne\s+odpowiedzi|Przykładowe\s+rozwiązania|Przykładowe\s+odpowiedzi|Poprawne\s+odpowiedzi|Przykładowe\s+rozwiązanie|Przykładowa\s+odpowiedź|Poprawna\s+odpowiedź|Rozwiązanie)\s*:?\s*([\s\S]+)",
        cleaned,
        flags=re.IGNORECASE,
    )
    if sol_match:
        solution_part = sol_match.group(1)
    else:
        # Check if answers sit AFTER the Schemat punktowania / 0 p. block (common in 2018-2019 keys)
        post_rubric = re.search(
            r"0\s*p(?:kt)?\.?\s*[–-][^\n]*(?:\n[^\n]*?)?\n\s*\n\s*([^\n][\s\S]+)$",
            cleaned,
            flags=re.IGNORECASE,
        )
        if post_rubric and strip_rubric_noise(post_rubric.group(1)).strip():
            solution_part = post_rubric.group(1)
        else:
            solution_part = re.split(
                r"\b(?:Schemat\s+punktowania|Zasady\s+oceniania)\b",
                cleaned,
                maxsplit=1,
                flags=re.IGNORECASE,
            )[0]
            solution_part = re.sub(
                r"^(?:Zadanie\s+)?\d+(?:\.\d+)?\.?(?:\s*\([^)]*\))?\s*:?\s*",
                "",
                solution_part.strip(),
                flags=re.IGNORECASE,
            )

    solution_part = re.split(
        r"\n\s*(?:Schemat\s+punktowania|Zasady\s+oceniania|Uwag[ai]\s*:|Nie\s+uznaje\s+się|Dopuszcza\s+się|Załącznik\s+nr)",
        solution_part,
        maxsplit=1,
        flags=re.IGNORECASE,
    )[0]

    stripped = strip_rubric_noise(solution_part)
    if len(stripped) < 1:
        fallback_clean = strip_rubric_noise(cleaned)
        m = re.search(r"1\s*p(?:kt)?\.?\s*[–-]\s*([^\n]+)", fallback_clean)
        stripped = m.group(1).strip() if m else fallback_clean

    # Take first clean example answer when multiple paraphrases or "Sposób 2." / "Rozwiązanie II" exist
    first_solution = re.split(
        r"(?:\n\s*Sposób\s+2\.|\n\s*Rozwiązanie\s+II\b|\n\s*ALBO\b)",
        stripped,
        maxsplit=1,
        flags=re.IGNORECASE,
    )[0].strip()

    compound_mc_prefix = ""
    if "•" in first_solution or "\uf0a7" in first_solution:
        parts = [p.strip() for p in re.split(r"[•\uf0a7]", first_solution) if p.strip()]
        if parts:
            preamble = parts[0]
            is_preamble_label = (
                preamble.endswith(":")
                or bool(
                    re.match(
                        r"^(?:(?:[1-4]\.\s*)?[A-F]\b[\s\S]{0,60}:?|[A-F]\s*\n|\s*(?:Przykładowe|Nazwa|Uzasadnienie|Wyjaśnienie))",
                        preamble,
                        flags=re.IGNORECASE,
                    )
                )
            )
            if len(parts) >= 2 and is_preamble_label:
                mc_lead = re.search(r"(?:^|\b)([A-F])\b", preamble)
                if mc_lead:
                    compound_mc_prefix = mc_lead.group(1)
                first_solution = parts[1]
            else:
                first_solution = parts[0]

    first_solution = re.sub(
        r"^\s*(?:Sposób\s+1\.|Rozwiązanie\s+I\b|Rozstrzygnięcie\s*:?|Przykładowe\s+wyjaśnienia\s*:?|Przykładowe\s+uzasadnienie\s*:?|Przykładowa\s+odpowiedź\s*:?|Obserwacje\s*:?)\s*",
        "",
        first_solution,
        flags=re.IGNORECASE,
    )
    # Strip redundant printed prompt labels ("Nazwa wiązania:", "Uzasadnienie:") before fill answer
    first_solution = re.sub(
        r"^\s*(?:Nazwa\s+wiązania|Nazwa\s+(?:procesu|związku|etapu|tkanki|choroby|struktury)|Nazwa|Uzasadnienie|Wyjaśnienie|Przykład|Wniosek)\s*:\s*",
        "",
        first_solution,
        flags=re.IGNORECASE,
    )
    first_solution = re.sub(
        r"\s*(?:Przykładowe\s+wyjaśnienia|Przykładowe\s+rozwiązania)\s*:?\s*$",
        "",
        first_solution,
        flags=re.IGNORECASE,
    )

    lines = []
    for ln in first_solution.splitlines():
        ln_clean = re.sub(r"\s+", " ", ln).strip()
        ln_clean = strip_rubric_noise(ln_clean).replace("\n", " ").strip()
        ln_clean = re.sub(r"\s*(?:Przykładowe\s+wyjaśnienia|Przykładowe\s+uzasadnienia)\s*:?", "", ln_clean, flags=re.IGNORECASE).strip()
        if ln_clean:
            lines.append(ln_clean)

    concise = " ".join(lines).strip()
    if len(concise) > 360:
        concise = concise[:357].rsplit(" ", 1)[0] + "..."

    marked: list[str] = []
    if compound_mc_prefix:
        marked = [compound_mc_prefix]
    elif len(concise) <= 24:
        mc_hits = re.findall(r"\b([A-F])\b", concise)
        if mc_hits:
            marked = mc_hits[:3]
    else:
        # Also detect standalone choice letter line before prose in compound answers
        lead_choice = re.match(r"^(?:Odpowiedź\s*)?([A-F])(?:\s*[–-]\s*|\s+(?=[a-ząćęłńóśźż]))", concise)
        if lead_choice:
            marked = [lead_choice.group(1)]

    fallback_str = strip_rubric_noise(cleaned).replace("\n", " ")
    fallback_str = re.sub(r"\s+", " ", fallback_str).strip()
    return concise or fallback_str[:240], marked


def extract_truth_choices(sub: dict[str, Any], official_key: str, concise_answer: str) -> list[str]:
    choices: list[str] = []
    tbl = sub.get("interactiveTableData")
    if tbl and isinstance(tbl, dict):
        for row in tbl.get("rows", []):
            ans = str(row.get("correctAnswer", "")).strip().upper()
            if ans in ("P", "F"):
                choices.append(ans)
    if choices:
        return choices

    # Fallback: parse patterns like "1. – F; 2. – P" or "1. F, 2. P" from solution text
    sol_match = re.search(r"\bRozwiązanie\s*:?\s*([^\n]+)", official_key, flags=re.IGNORECASE)
    probe = sol_match.group(1) if sol_match else concise_answer
    paired = re.findall(r"(?:^|\b)[1-5][.)]?\s*(?:[–-]\s*)?([PF])\b", probe)
    if paired:
        return paired

    if re.fullmatch(r"[PF](?:\s*[,;/]\s*[PF]){1,4}", probe.strip()):
        return re.findall(r"[PF]", probe)

    return []


def extract_margin_note(subtask: dict[str, Any]) -> str:
    verb = (subtask.get("operationalVerb") or "").strip()
    steps = subtask.get("animatedSteps") or []
    for st in steps:
        if st.get("phase") == "mechanizm" and st.get("explanationHtml"):
            plain = re.sub(r"<[^>]+>", " ", st["explanationHtml"])
            plain = re.sub(r"\s+", " ", plain).strip()
            plain = re.sub(r"^Przyczyna\s*→\s*Mechanizm\s*→\s*Skutek\s*\([^)]*\)\s*:?\s*", "", plain)
            plain = strip_rubric_noise(plain).replace("\n", " ").strip()
            if plain:
                return (f"[{verb}] " if verb else "") + (plain[:210] + ("..." if len(plain) > 210 else ""))
    key = strip_rubric_noise(subtask.get("officialAnswerKey") or "").replace("\n", " ").strip()
    key = re.sub(r"\s+", " ", key)
    return (f"[{verb}] " if verb else "") + (key[:180] + ("..." if len(key) > 180 else ""))


def is_rubric_table(extracted: list[list[str | None]]) -> bool:
    flat = " ".join((c or "") for r in extracted for c in r).lower()
    return any(
        k in flat
        for k in (
            "wymagania ogólne",
            "wymaganie ogólne",
            "wymagania szczegółowe",
            "wymaganie szczegółowe",
            "rodzaj dokumentu:",
            "zdający",
            "wypełnia egzaminator",
            "kod pesel",
            "wypełnia zdający",
            "egzamin maturalny",
        )
    )


def extract_scoring_tables(scoring_pdf: Path | None) -> list[dict[str, Any]]:
    if not scoring_pdf or not scoring_pdf.is_file():
        return []
    tables: list[dict[str, Any]] = []
    doc = fitz.open(scoring_pdf)
    try:
        for pno in range(len(doc)):
            for tb in doc[pno].find_tables().tables:
                ext = tb.extract()
                if not ext or is_rubric_table(ext):
                    continue
                row_tokens: set[str] = set()
                for r in ext:
                    for c in r:
                        val = clean_cell_answer(c).lower()
                        if val:
                            for tok in re.findall(r"[a-ząćęłńóśźż0-9]{2,}", val):
                                row_tokens.add(tok)
                tables.append(
                    {
                        "page": pno + 1,
                        "rows": len(ext),
                        "cols": len(ext[0]) if ext else 0,
                        "extract": ext,
                        "tokens": row_tokens,
                    }
                )
    finally:
        doc.close()
    return tables


def is_pf_table(ext: list[list[str | None]]) -> bool:
    if not ext or len(ext[0]) < 2:
        return False
    pf_rows = 0
    for r in ext:
        tail = [re.sub(r"\s+", " ", (c or "")).strip().upper() for c in r[-2:]]
        if tail == ["P", "F"] or (tail and tail[-1] in ("P F", "P / F")):
            pf_rows += 1
    return pf_rows >= 2


def match_solved_table(
    exam_ext: list[list[str | None]],
    scoring_tables: list[dict[str, Any]],
) -> dict[str, Any] | None:
    if not exam_ext or not scoring_tables:
        return None
    erows = len(exam_ext)
    ecols = len(exam_ext[0])

    exam_tokens: set[str] = set()
    for r in exam_ext:
        for c in r:
            val = clean_cell_answer(c).lower()
            if val:
                for tok in re.findall(r"[a-ząćęłńóśźż0-9]{2,}", val):
                    exam_tokens.add(tok)

    best_score = 0
    best_cand: dict[str, Any] | None = None
    for cand in scoring_tables:
        if cand["rows"] != erows or cand["cols"] != ecols:
            continue
        overlap = len(exam_tokens & cand["tokens"])
        if overlap > best_score:
            best_score = overlap
            best_cand = cand
    return best_cand if best_score >= 2 else None


def scan_pdf_exam_geometry(
    exam_pdf: Path | None,
    scoring_pdf: Path | None,
) -> dict[str, Any]:
    """
    Extracts per-task coordinates AND cell-level table mappings via PyMuPDF (`fitz`).
    Returns:
      {
        "anchors": { task_num -> fallback box dict },
        "tables": { task_num -> list of matched table cell payloads },
      }
    """
    anchors: dict[str, dict[str, Any]] = {}
    tables_by_task: dict[str, list[dict[str, Any]]] = {}
    if not exam_pdf or not exam_pdf.is_file():
        return {"anchors": anchors, "tables": tables_by_task}

    scoring_tables = extract_scoring_tables(scoring_pdf)
    doc = fitz.open(exam_pdf)
    try:
        for pno in range(1, len(doc)):  # skip cover page (index 0)
            page = doc[pno]
            w = max(1.0, float(page.rect.width))
            h = max(1.0, float(page.rect.height))
            blocks = sorted(page.get_text("blocks"), key=lambda b: (round(b[1], 1), b[0]))
            raw_words = page.get_text("words")
            page_words = [
                {
                    "x0": (wd[0] / w) * 100.0,
                    "y0": (wd[1] / h) * 100.0,
                    "x1": (wd[2] / w) * 100.0,
                    "y1": (wd[3] / h) * 100.0,
                    "txt": str(wd[4]).strip(),
                }
                for wd in raw_words
                if str(wd[4]).strip()
            ]

            page_events: list[dict[str, Any]] = []
            for b in blocks:
                txt = (b[4] or "").strip()
                if not txt:
                    continue
                if re.match(r"^(?:Strona\s+\d+|EBIP|ECHP|MBI|MCH|Więcej\s+arkuszy)", txt):
                    continue
                x0 = (b[0] / w) * 100.0
                y0 = (b[1] / h) * 100.0
                x1 = (b[2] / w) * 100.0
                y1 = (b[3] / h) * 100.0

                task_m = TASK_HEADER_RE.search(txt)
                sub_inline = SUBTASK_INLINE_RE.match(txt) if not task_m else None
                tnum = task_m.group(1) if task_m else (sub_inline.group(1) if sub_inline else None)

                is_dots = bool(DOTTED_LINE_RE.match(txt)) or txt.count("....") >= 2 or txt.count("……") >= 2
                is_pf = bool(re.search(r"\bP\s+F\b|\nP\nF\b", txt) or txt.strip() == "P\nF")
                is_mc = bool(MC_OPTION_RE.match(txt))

                page_events.append(
                    {
                        "txt": txt,
                        "x0": x0,
                        "y0": y0,
                        "x1": x1,
                        "y1": y1,
                        "task_num": tnum,
                        "is_dots": is_dots,
                        "is_pf": is_pf,
                        "is_mc": is_mc,
                    }
                )

            header_indices = [i for i, ev in enumerate(page_events) if ev["task_num"]]

            # 1. Non-table anchors strictly below printed prompt text / on dotted lines
            for h_idx_pos, ev_idx in enumerate(header_indices):
                ev = page_events[ev_idx]
                tnum = ev["task_num"]
                next_ev_idx = (
                    header_indices[h_idx_pos + 1]
                    if h_idx_pos + 1 < len(header_indices)
                    else len(page_events)
                )
                following = page_events[ev_idx + 1 : next_ev_idx]
                next_y0 = page_events[next_ev_idx]["y0"] if next_ev_idx < len(page_events) else 91.0

                # Word-level MC options ('A.', 'B.', ...) and exact dotted line positions
                region_words = [
                    wd for wd in page_words
                    if wd["y0"] >= ev["y0"] - 0.5 and wd["y1"] <= next_y0 + 0.5
                ]
                mc_boxes: dict[str, dict[str, float]] = {}
                for wi, wd in enumerate(region_words):
                    m_opt = re.match(r"^([A-F])\.$", wd["txt"])
                    if not m_opt:
                        continue
                    letter = m_opt.group(1)
                    bx0_w = wd["x0"]
                    by0_w = wd["y0"]
                    bx1_w = wd["x1"]
                    by1_w = wd["y1"]
                    if wi + 1 < len(region_words):
                        nxt = region_words[wi + 1]
                        if (
                            abs(nxt["y0"] - by0_w) < 1.2
                            and 0 <= (nxt["x0"] - bx1_w) < 4.0
                            and not re.match(r"^[A-F]\.$", nxt["txt"])
                        ):
                            bx1_w = min(bx0_w + 10.0, nxt["x1"])
                    mc_boxes[letter] = {
                        "xPct": round(max(4.0, bx0_w - 2.2), 2),
                        "yPct": round(max(4.0, by0_w - 0.5), 2),
                        "widthPct": round(min(18.0, max(7.5, bx1_w - bx0_w + 3.2)), 2),
                        "heightPct": round(max(2.4, by1_w - by0_w + 0.9), 2),
                    }

                dot_words = [
                    wd for wd in region_words
                    if DOTTED_LINE_RE.match(wd["txt"])
                ]
                dot_box: dict[str, float] | None = None
                if dot_words:
                    dx0 = min(dw["x0"] for dw in dot_words)
                    dy0 = min(dw["y0"] for dw in dot_words)
                    dx1 = max(dw["x1"] for dw in dot_words)
                    dy1 = max(dw["y1"] for dw in dot_words)
                    dot_box = {
                        "xPct": round(max(6.0, dx0), 2),
                        "yPct": round(max(6.0, dy0 - 0.4), 2),
                        "widthPct": round(min(84.0, max(16.0, dx1 - dx0)), 2),
                        "heightPct": round(min(38.0, max(3.2, dy1 - dy0 + 1.0)), 2),
                    }

                dot_blocks = [f for f in following if f["is_dots"]]
                pf_blocks = [f for f in following if f["is_pf"]]
                mc_blocks = [f for f in following if f["is_mc"]]
                prompt_blocks = [
                    f for f in following
                    if not f["is_dots"] and not f["is_pf"] and "Wypełnia" not in f["txt"]
                ]

                if dot_box:
                    bx0 = dot_box["xPct"]
                    by0 = dot_box["yPct"]
                    bx1 = dot_box["xPct"] + dot_box["widthPct"]
                    by1 = dot_box["yPct"] + dot_box["heightPct"]
                    box_type = "open-answer"
                elif dot_blocks:
                    bx0 = min(f["x0"] for f in dot_blocks)
                    by0 = min(f["y0"] for f in dot_blocks)
                    bx1 = max(f["x1"] for f in dot_blocks)
                    by1 = max(f["y1"] for f in dot_blocks)
                    box_type = "open-answer"
                elif pf_blocks:
                    bx0 = 76.0
                    by0 = min(f["y0"] for f in pf_blocks)
                    bx1 = 89.0
                    by1 = min(88.0, max(f["y1"] for f in pf_blocks) + 4.0)
                    box_type = "true-false"
                elif mc_blocks:
                    bx0 = min(f["x0"] for f in mc_blocks)
                    by0 = min(f["y0"] for f in mc_blocks)
                    bx1 = min(88.0, max(f["x1"] for f in mc_blocks) + 12.0)
                    by1 = max(f["y1"] for f in mc_blocks)
                    box_type = "multiple-choice"
                else:
                    bx0 = 12.0
                    last_prompt_y1 = max([ev["y1"], *(f["y1"] for f in prompt_blocks)])
                    by0 = min(83.0, last_prompt_y1 + 0.8)
                    bx1 = 88.0
                    by1 = max(by0 + 6.5, min(89.0, next_y0 - 1.5))
                    box_type = "calculation-grid" if (by1 - by0) >= 12.0 else "table-fill"

                anchor_entry: dict[str, Any] = {
                    "pageNumber": pno + 1,
                    "boxType": box_type,
                    "xPct": round(max(6.0, bx0), 1),
                    "yPct": round(max(6.0, min(86.0, by0)), 1),
                    "widthPct": round(min(88.0, max(12.0 if box_type == "true-false" else 16.0, bx1 - bx0)), 1),
                    "heightPct": round(min(45.0, max(3.2, by1 - by0)), 1),
                }
                if mc_boxes:
                    anchor_entry["mcBoxes"] = mc_boxes
                if dot_box:
                    anchor_entry["dotBox"] = dot_box
                anchors[tnum] = anchor_entry

            # 2. Sub-cell table detection & mapping via PyMuPDF find_tables()
            for tb in page.find_tables().tables:
                ext = tb.extract()
                if not ext or is_rubric_table(ext):
                    continue
                # Skip tiny 1-row visual orbital boxes without empty cells or P/F columns
                has_empty = any(
                    (cell is not None and cell.strip() == "")
                    for r in ext
                    for cell in r
                )
                pf_flag = is_pf_table(ext)
                if not has_empty and not pf_flag:
                    continue

                tb_top_pct = (tb.bbox[1] / h) * 100.0
                # Associate table with closest header above table top on this page
                preceding_headers = [
                    page_events[idx]
                    for idx in header_indices
                    if page_events[idx]["y0"] <= tb_top_pct + 2.0
                ]
                owner_tnum = preceding_headers[-1]["task_num"] if preceding_headers else None
                if not owner_tnum:
                    continue

                cell_boxes: list[list[dict[str, float] | None]] = []
                for row in tb.rows:
                    row_boxes: list[dict[str, float] | None] = []
                    for c in row.cells:
                        if c is None:
                            row_boxes.append(None)
                        else:
                            row_boxes.append(
                                {
                                    "xPct": round((c[0] / w) * 100.0, 2),
                                    "yPct": round((c[1] / h) * 100.0, 2),
                                    "widthPct": round(((c[2] - c[0]) / w) * 100.0, 2),
                                    "heightPct": round(((c[3] - c[1]) / h) * 100.0, 2),
                                }
                            )
                    cell_boxes.append(row_boxes)

                matched_z = None if pf_flag else match_solved_table(ext, scoring_tables)
                tables_by_task.setdefault(owner_tnum, []).append(
                    {
                        "pageNumber": pno + 1,
                        "isPf": pf_flag,
                        "examExtract": ext,
                        "cellBoxes": cell_boxes,
                        "solvedExtract": matched_z["extract"] if matched_z else None,
                    }
                )
    finally:
        doc.close()

    return {"anchors": anchors, "tables": tables_by_task}


def build_cell_annotations_from_tables(
    sheet_id: str,
    page_no: int,
    task_number: str,
    clean_num: str,
    points_label: str,
    operational_verb: str,
    margin_note: str,
    truth_choices: list[str],
    tables: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    annotations: list[dict[str, Any]] = []

    for t_idx, tb in enumerate(tables):
        if int(tb["pageNumber"]) != page_no:
            continue
        ext = tb["examExtract"]
        cell_boxes = tb["cellBoxes"]
        suffix_prefix = f"t{t_idx}_" if len(tables) > 1 else ""

        if tb["isPf"] and truth_choices:
            pf_row_idx = 0
            for r_idx, row in enumerate(ext):
                if r_idx >= len(cell_boxes):
                    break
                tail = [re.sub(r"\s+", " ", (c or "")).strip().upper() for c in row[-2:]]
                if tail == ["P", "F"]:
                    if pf_row_idx >= len(truth_choices):
                        break
                    choice = truth_choices[pf_row_idx]
                    pf_row_idx += 1
                    col_offset = len(row) - (2 if choice == "P" else 1)
                    bbox = cell_boxes[r_idx][col_offset] if col_offset < len(cell_boxes[r_idx]) else None
                    if not bbox:
                        continue
                    annotations.append(
                        {
                            "id": f"{sheet_id}-p{page_no}-z{clean_num}-{suffix_prefix}pf{pf_row_idx}",
                            "taskNumber": task_number,
                            "subTaskNumber": clean_num,
                            "pageNumber": page_no,
                            "boxType": "table-fill",
                            "xPct": bbox["xPct"],
                            "yPct": bbox["yPct"],
                            "widthPct": bbox["widthPct"],
                            "heightPct": bbox["heightPct"],
                            "pointsLabel": points_label,
                            "operationalVerb": operational_verb,
                            "answerText": choice,
                            "marginNote": margin_note,
                            "truthChoices": [choice],
                        }
                    )
                elif tail and tail[-1] in ("P F", "P / F"):
                    if pf_row_idx >= len(truth_choices):
                        break
                    choice = truth_choices[pf_row_idx]
                    pf_row_idx += 1
                    bbox = cell_boxes[r_idx][-1]
                    if not bbox:
                        continue
                    half_h = round(bbox["heightPct"] / 2.0, 2)
                    y_adj = bbox["yPct"] if choice == "P" else round(bbox["yPct"] + half_h, 2)
                    annotations.append(
                        {
                            "id": f"{sheet_id}-p{page_no}-z{clean_num}-{suffix_prefix}pf{pf_row_idx}",
                            "taskNumber": task_number,
                            "subTaskNumber": clean_num,
                            "pageNumber": page_no,
                            "boxType": "table-fill",
                            "xPct": bbox["xPct"],
                            "yPct": y_adj,
                            "widthPct": bbox["widthPct"],
                            "heightPct": half_h,
                            "pointsLabel": points_label,
                            "operationalVerb": operational_verb,
                            "answerText": choice,
                            "marginNote": margin_note,
                            "truthChoices": [choice],
                        }
                    )
            continue

        solved_ext = tb.get("solvedExtract")
        if not solved_ext:
            continue

        for r_idx, row in enumerate(ext):
            if r_idx >= len(solved_ext) or r_idx >= len(cell_boxes):
                break
            for c_idx, cell_val in enumerate(row):
                if c_idx >= len(solved_ext[r_idx]) or c_idx >= len(cell_boxes[r_idx]):
                    break
                exam_txt = (cell_val or "").strip()
                if exam_txt and not DOTTED_LINE_RE.match(exam_txt):
                    continue
                bbox = cell_boxes[r_idx][c_idx]
                if not bbox:
                    continue
                ans = clean_cell_answer(solved_ext[r_idx][c_idx])
                if not ans:
                    continue
                annotations.append(
                    {
                        "id": f"{sheet_id}-p{page_no}-z{clean_num}-{suffix_prefix}r{r_idx}c{c_idx}",
                        "taskNumber": task_number,
                        "subTaskNumber": clean_num,
                        "pageNumber": page_no,
                        "boxType": "table-fill",
                        "xPct": bbox["xPct"],
                        "yPct": bbox["yPct"],
                        "widthPct": bbox["widthPct"],
                        "heightPct": bbox["heightPct"],
                        "pointsLabel": points_label,
                        "operationalVerb": operational_verb,
                        "answerText": ans,
                        "marginNote": margin_note,
                    }
                )

    return annotations


def build_overlays(limit: int | None = None) -> dict[str, dict[str, list[dict[str, Any]]]]:
    overlays: dict[str, dict[str, list[dict[str, Any]]]] = {}
    pdf_cache: dict[tuple[str, int, str], dict[str, Any]] = {}
    generated_sheet_ids: set[str] = set()

    for subject, task_path in TASK_FILES.items():
        if not task_path.is_file():
            continue
        tasks: list[dict[str, Any]] = json.loads(task_path.read_text(encoding="utf-8"))
        processed = 0

        for task in tasks:
            if limit and processed >= limit:
                break
            processed += 1
            sheet_id = task.get("sheetId") or f"{subject}-{task['year']}-{task['month']}-f{task['formula']}"
            generated_sheet_ids.add(sheet_id)
            year = int(task["year"])
            month = task["month"]
            default_page = int(task.get("pdfPageNumber") or 4)

            cache_key = (subject, year, month)
            if cache_key not in pdf_cache:
                exam_pdf = find_exam_pdf(subject, year, month)
                scoring_pdf = find_scoring_pdf(subject, year, month)
                pdf_cache[cache_key] = scan_pdf_exam_geometry(exam_pdf, scoring_pdf)

            geom = pdf_cache[cache_key]
            anchors = geom["anchors"]
            tables_map = geom["tables"]
            sheet_pages = overlays.setdefault(sheet_id, {})

            subtasks = task.get("subTasks") or []
            if not subtasks:
                subtasks = [
                    {
                        "subTaskNumber": re.sub(r"^Zadanie\s+", "", task.get("taskNumber", "1"), flags=re.I),
                        "points": task.get("points", 1),
                        "taskType": task.get("taskType", "open-text"),
                        "promptHtml": task.get("promptHtml", ""),
                        "operationalVerb": task.get("operationalVerb", ""),
                        "officialAnswerKey": task.get("officialAnswerKey", ""),
                        "interactiveTableData": task.get("interactiveTableData"),
                        "animatedSteps": task.get("animatedSteps", []),
                    }
                ]

            fallback_slot = 0
            for sub in subtasks:
                sub_num = str(sub.get("subTaskNumber") or task.get("taskNumber", "")).strip()
                clean_num = re.sub(r"^Zadanie\s+", "", sub_num, flags=re.IGNORECASE).strip()
                bundle_num = clean_num.split(".")[0] if "." in clean_num else clean_num

                anchor = anchors.get(clean_num) or anchors.get(bundle_num)
                matched_tables = tables_map.get(clean_num) or (
                    tables_map.get(bundle_num) if len(subtasks) == 1 else []
                )

                page_no = int(anchor["pageNumber"]) if anchor else (
                    int(matched_tables[0]["pageNumber"]) if matched_tables else default_page
                )

                official_key = sub.get("officialAnswerKey") or task.get("officialAnswerKey") or ""
                concise_answer, marked_options = extract_concise_answer(official_key)
                margin_note = extract_margin_note(sub)
                points_label = f"0–{sub.get('points', task.get('points', 1))} pkt"
                operational_verb = sub.get("operationalVerb") or task.get("operationalVerb") or ""
                truth_choices = extract_truth_choices(sub, official_key, concise_answer)

                cell_anns: list[dict[str, Any]] = []
                if matched_tables:
                    cell_anns = build_cell_annotations_from_tables(
                        sheet_id=sheet_id,
                        page_no=page_no,
                        task_number=task.get("taskNumber", f"Zadanie {clean_num}"),
                        clean_num=clean_num,
                        points_label=points_label,
                        operational_verb=operational_verb,
                        margin_note=margin_note,
                        truth_choices=truth_choices,
                        tables=matched_tables,
                    )

                if cell_anns:
                    sheet_pages.setdefault(str(page_no), []).extend(cell_anns)
                    continue

                if not anchor:
                    y_pct = min(76.0, 20.0 + (fallback_slot % 3) * 24.0)
                    fallback_slot += 1
                    st_type = sub.get("taskType", "open-text")
                    btype = (
                        "true-false"
                        if (st_type == "true-false-table" or truth_choices)
                        else "multiple-choice"
                        if st_type == "multiple-choice"
                        else "calculation-grid"
                        if st_type == "calculation-grid"
                        else "open-answer"
                    )
                    anchor = {
                        "pageNumber": page_no,
                        "boxType": btype,
                        "xPct": 11.9,
                        "yPct": y_pct,
                        "widthPct": 76.2,
                        "heightPct": 11.5,
                    }

                if truth_choices and anchor["boxType"] == "open-answer":
                    anchor["boxType"] = "true-false"

                page_key = str(page_no)
                mc_boxes_map = anchor.get("mcBoxes") or {}
                dot_box_coords = anchor.get("dotBox")
                if (
                    marked_options
                    and marked_options[0] in mc_boxes_map
                    and dot_box_coords
                    and concise_answer
                    and len(concise_answer) > 3
                ):
                    mc_letter = marked_options[0]
                    mc_coords = mc_boxes_map[mc_letter]
                    sheet_pages.setdefault(page_key, []).append(
                        {
                            "id": f"{sheet_id}-p{page_no}-z{clean_num}-mc",
                            "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                            "subTaskNumber": clean_num,
                            "pageNumber": page_no,
                            "boxType": "multiple-choice",
                            "xPct": mc_coords["xPct"],
                            "yPct": mc_coords["yPct"],
                            "widthPct": mc_coords["widthPct"],
                            "heightPct": mc_coords["heightPct"],
                            "pointsLabel": points_label,
                            "operationalVerb": operational_verb,
                            "answerText": f"✓ {mc_letter}",
                            "marginNote": margin_note,
                            "markedOptions": [mc_letter],
                        }
                    )
                    sheet_pages.setdefault(page_key, []).append(
                        {
                            "id": f"{sheet_id}-p{page_no}-z{clean_num}-fill",
                            "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                            "subTaskNumber": clean_num,
                            "pageNumber": page_no,
                            "boxType": "open-answer",
                            "xPct": dot_box_coords["xPct"],
                            "yPct": dot_box_coords["yPct"],
                            "widthPct": dot_box_coords["widthPct"],
                            "heightPct": dot_box_coords["heightPct"],
                            "pointsLabel": points_label,
                            "operationalVerb": operational_verb,
                            "answerText": concise_answer,
                            "marginNote": margin_note,
                        }
                    )
                    continue

                if marked_options and marked_options[0] in mc_boxes_map and len(concise_answer) <= 6:
                    mc_letter = marked_options[0]
                    mc_coords = mc_boxes_map[mc_letter]
                    ann_coords = mc_coords
                    anchor_box_type = "multiple-choice"
                    final_ans = f"✓ {mc_letter}"
                else:
                    ann_coords = anchor
                    anchor_box_type = anchor["boxType"]
                    final_ans = concise_answer

                ann = {
                    "id": f"{sheet_id}-p{page_no}-z{clean_num}",
                    "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                    "subTaskNumber": clean_num,
                    "pageNumber": page_no,
                    "boxType": anchor_box_type,
                    "xPct": ann_coords["xPct"],
                    "yPct": ann_coords["yPct"],
                    "widthPct": ann_coords["widthPct"],
                    "heightPct": ann_coords["heightPct"],
                    "pointsLabel": points_label,
                    "operationalVerb": operational_verb,
                    "answerText": final_ans,
                    "marginNote": margin_note,
                }
                if marked_options:
                    ann["markedOptions"] = marked_options
                if truth_choices:
                    ann["truthChoices"] = truth_choices

                sheet_pages.setdefault(page_key, []).append(ann)

    # Preserve supplemental sheet overlays (Trial / Fizyka / Matematyka) already curated
    if OUTPUT_OVERLAYS_FILE.is_file():
        try:
            existing = json.loads(OUTPUT_OVERLAYS_FILE.read_text(encoding="utf-8"))
            for sid, pages in existing.items():
                if sid not in generated_sheet_ids and sid not in overlays:
                    overlays[sid] = pages
        except Exception:
            pass

    return overlays


def main() -> int:
    parser = argparse.ArgumentParser(description="Build CKE solved PDF page overlays deterministically via offline PyMuPDF.")
    parser.add_argument("--limit", type=int, default=None, help="Optional cap on tasks processed.")
    args = parser.parse_args()

    overlays = build_overlays(limit=args.limit)
    OUTPUT_OVERLAYS_FILE.write_text(
        json.dumps(overlays, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    total_sheets = len(overlays)
    total_pages = sum(len(pages) for pages in overlays.values())
    total_boxes = sum(len(boxes) for pages in overlays.values() for boxes in pages.values())
    print(f"Generated {OUTPUT_OVERLAYS_FILE}: {total_sheets} sheets, {total_pages} annotated pages, {total_boxes} overlay boxes.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
