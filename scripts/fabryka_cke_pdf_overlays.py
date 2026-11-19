#!/usr/bin/env python3
"""
fabryka_cke_pdf_overlays.py
---------------------------
Deterministic 100% offline PyMuPDF (`fitz`) extractor generating exact PDF
overlay coordinate mappings & 1:1 CKE key annotations for CKE Matura exam pages
(`public/cke-assets/<subject>/<year>_maj/page_*.webp`).

Zero external LLM API calls:
- Uses `page.find_tables()` + maximal empty-rectangle collision avoidance against
  every printed word bbox on the PDF page so handwritten ink NEVER overlaps
  printed question text (`0` intersections guaranteed).
- Normalizes chemical & physics notation to clean Unicode (`H₂O`, `CO₂`,
  `SO₄²⁻`, `→`, `⇌`, `ΔH`, `°C`).

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


def infer_pdf_month(name: str) -> str:
    low = name.lower()
    if "czerwiec" in low or "-2206" in low or "-2306" in low or "-2406" in low:
        return "czerwiec"
    if "sierpien" in low or "08" in re.findall(r"-(?:21|22|23|24)(\d{2})", low):
        return "sierpien"
    if "pokaz" in low:
        return "pokazowy"
    if "probn" in low or "próbn" in low:
        return "probny"
    return "maj"


def find_exam_pdf(subject: str, year: int, month: str) -> Path | None:
    oer_root = locate_oer_root()
    folder_name = "Biologia" if subject == "biologia" else "Chemia"
    year_dir = oer_root / subject / folder_name / str(year)
    if not year_dir.is_dir():
        return None
    pdfs = sorted(year_dir.glob("*.pdf"))
    candidates: list[Path] = []
    for pdf in pdfs:
        low = pdf.name.lower()
        if any(skip in low for skip in ("karta", "odpowiedzi", "zasady", "model", "-n.pdf", "_n.pdf")):
            continue
        if infer_pdf_month(pdf.name) != month:
            continue
        candidates.append(pdf)
    for pdf in candidates:
        low = pdf.name.lower()
        if "arkusz" in low or low.startswith(("ebip", "echp", "mbi", "mch")):
            return pdf
    return candidates[0] if candidates else None


def find_scoring_pdf(subject: str, year: int, month: str) -> Path | None:
    oer_root = locate_oer_root()
    folder_name = "Biologia" if subject == "biologia" else "Chemia"
    year_dir = oer_root / subject / folder_name / str(year)
    if not year_dir.is_dir():
        return None
    pdfs = sorted(year_dir.glob("*.pdf"))
    for pdf in pdfs:
        low = pdf.name.lower()
        if any(tag in low for tag in ("zasady", "model", "-n.pdf", "_n.pdf")) and infer_pdf_month(pdf.name) == month:
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
    # 2. Inline fragments & PDF footer watermarks
    inline_patterns = (
        r"Więcej\s+arkuszy\s+znajdziesz\s+na\s+stronie\s*:?\s*\S+",
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


SCI_TOKEN_MAP: dict[str, str] = {
    "H2O": "H₂O",
    "H2O2": "H₂O₂",
    "CO2": "CO₂",
    "CO": "CO",
    "O2": "O₂",
    "O3": "O₃",
    "N2": "N₂",
    "H2": "H₂",
    "Cl2": "Cl₂",
    "Br2": "Br₂",
    "I2": "I₂",
    "F2": "F₂",
    "NH3": "NH₃",
    "CH4": "CH₄",
    "C2H6": "C₂H₆",
    "C2H4": "C₂H₄",
    "C2H2": "C₂H₂",
    "C3H8": "C₃H₈",
    "C4H10": "C₄H₁₀",
    "C6H6": "C₆H₆",
    "C6H12O6": "C₆H₁₂O₆",
    "C12H22O11": "C₁₂H₂₂O₁₁",
    "C2H5OH": "C₂H₅OH",
    "CH3OH": "CH₃OH",
    "CH3COOH": "CH₃COOH",
    "CH3CHO": "CH₃CHO",
    "CH3COO": "CH₃COO",
    "H2SO4": "H₂SO₄",
    "H2SO3": "H₂SO₃",
    "HNO3": "HNO₃",
    "HNO2": "HNO₂",
    "H3PO4": "H₃PO₄",
    "H2CO3": "H₂CO₃",
    "H2S": "H₂S",
    "Na2CO3": "Na₂CO₃",
    "K2CO3": "K₂CO₃",
    "CaCO3": "CaCO₃",
    "MgCO3": "MgCO₃",
    "BaCO3": "BaCO₃",
    "NaHCO3": "NaHCO₃",
    "Na2SO4": "Na₂SO₄",
    "K2SO4": "K₂SO₄",
    "CaSO4": "CaSO₄",
    "CuSO4": "CuSO₄",
    "BaSO4": "BaSO₄",
    "FeSO4": "FeSO₄",
    "Fe2(SO4)3": "Fe₂(SO₄)₃",
    "Al2(SO4)3": "Al₂(SO₄)₃",
    "Fe2O3": "Fe₂O₃",
    "Fe3O4": "Fe₃O₄",
    "Al2O3": "Al₂O₃",
    "Cr2O3": "Cr₂O₃",
    "MnO2": "MnO₂",
    "SO2": "SO₂",
    "SO3": "SO₃",
    "NO2": "NO₂",
    "N2O": "N₂O",
    "N2O4": "N₂O₄",
    "N2O5": "N₂O₅",
    "P4O10": "P₄O₁₀",
    "P2O5": "P₂O₅",
    "SiO2": "SiO₂",
    "CaCl2": "CaCl₂",
    "BaCl2": "BaCl₂",
    "MgCl2": "MgCl₂",
    "FeCl2": "FeCl₂",
    "FeCl3": "FeCl₃",
    "AlCl3": "AlCl₃",
    "CuCl2": "CuCl₂",
    "ZnCl2": "ZnCl₂",
    "NH4Cl": "NH₄Cl",
    "NH4NO3": "NH₄NO₃",
    "(NH4)2SO4": "(NH₄)₂SO₄",
    "AgNO3": "AgNO₃",
    "Ca(NO3)2": "Ca(NO₃)₂",
    "Cu(NO3)2": "Cu(NO₃)₂",
    "KMnO4": "KMnO₄",
    "K2Cr2O7": "K₂Cr₂O₇",
    "K2CrO4": "K₂CrO₄",
    "Ca(OH)2": "Ca(OH)₂",
    "Ba(OH)2": "Ba(OH)₂",
    "Mg(OH)2": "Mg(OH)₂",
    "Fe(OH)2": "Fe(OH)₂",
    "Fe(OH)3": "Fe(OH)₃",
    "Al(OH)3": "Al(OH)₃",
    "Cu(OH)2": "Cu(OH)₂",
    "Zn(OH)2": "Zn(OH)₂",
    "Cr(OH)3": "Cr(OH)₃",
    "NADH2": "NADH₂",
    "FADH2": "FADH₂",
    "Na2O": "Na₂O",
    "K2O": "K₂O",
    "NaHSO4": "NaHSO₄",
    "KHSO4": "KHSO₄",
    "CaO": "CaO",
}

SCI_IONS: list[tuple[str, str]] = [
    (r"\bCr2O7\s*\^?\s*2[-−]", "Cr₂O₇²⁻"),
    (r"\bSO4\s*\^?\s*2[-−]", "SO₄²⁻"),
    (r"\bSO3\s*\^?\s*2[-−]", "SO₃²⁻"),
    (r"\bCO3\s*\^?\s*2[-−]", "CO₃²⁻"),
    (r"\bHPO4\s*\^?\s*2[-−]", "HPO₄²⁻"),
    (r"\bPO4\s*\^?\s*3[-−]", "PO₄³⁻"),
    (r"\bH2PO4\s*[-−]", "H₂PO₄⁻"),
    (r"\bHCO3\s*[-−]", "HCO₃⁻"),
    (r"\bMnO4\s*[-−]", "MnO₄⁻"),
    (r"\bNO3\s*[-−]", "NO₃⁻"),
    (r"\bNO2\s*[-−]", "NO₂⁻"),
    (r"\bCH3COO\s*[-−]", "CH₃COO⁻"),
    (r"\bNH4\s*\+", "NH₄⁺"),
    (r"\bH3O\s*\+", "H₃O⁺"),
    (r"\bNADP\s*\+", "NADP⁺"),
    (r"\bNAD\s*\+", "NAD⁺"),
    (r"\bOH\s*[-−](?=\s|$|[,.;:)\]])", "OH⁻"),
    (r"\bH\s*\+(?=\s|$|[,.;:)\]])", "H⁺"),
    (r"\bNa\s*\+(?=\s|$|[,.;:)\]])", "Na⁺"),
    (r"\bK\s*\+(?=\s|$|[,.;:)\]])", "K⁺"),
    (r"\bAg\s*\+(?=\s|$|[,.;:)\]])", "Ag⁺"),
    (r"\bLi\s*\+(?=\s|$|[,.;:)\]])", "Li⁺"),
    (r"\bCl\s*[-−](?=\s|$|[,.;:)\]])", "Cl⁻"),
    (r"\bBr\s*[-−](?=\s|$|[,.;:)\]])", "Br⁻"),
    (r"\bI\s*[-−](?=\s|$|[,.;:)\]])", "I⁻"),
    (r"\bF\s*[-−](?=\s|$|[,.;:)\]])", "F⁻"),
    (r"\bCa\s*\^?\s*2\s*\+", "Ca²⁺"),
    (r"\bMg\s*\^?\s*2\s*\+", "Mg²⁺"),
    (r"\bBa\s*\^?\s*2\s*\+", "Ba²⁺"),
    (r"\bCu\s*\^?\s*2\s*\+", "Cu²⁺"),
    (r"\bZn\s*\^?\s*2\s*\+", "Zn²⁺"),
    (r"\bFe\s*\^?\s*3\s*\+", "Fe³⁺"),
    (r"\bFe\s*\^?\s*2\s*\+", "Fe²⁺"),
    (r"\bAl\s*\^?\s*3\s*\+", "Al³⁺"),
    (r"\bCr\s*\^?\s*3\s*\+", "Cr³⁺"),
]

_SCI_FORMULA_PATTERN = re.compile(
    "(?<![A-Za-z0-9_])("
    + "|".join(re.escape(k) for k in sorted(SCI_TOKEN_MAP.keys(), key=len, reverse=True))
    + ")(?![A-Za-z0-9_+−-])"
)


_SUPERSCRIPT_DIGITS = str.maketrans("-−0123456789", "⁻⁻⁰¹²³⁴⁵⁶⁷⁸⁹")


def _to_superscript(s: str) -> str:
    return s.translate(_SUPERSCRIPT_DIGITS)


def normalize_sci_unicode(text: str) -> str:
    """Normalizes chemistry/physics formulas, ions, arrows, and Wingdings PDF symbols into clean Unicode."""
    if not text:
        return ""
    # Replace private-use PDF Symbol/Wingdings glyphs often emitted by CKE keys
    glyph_map = {
        "\uf0de": " ⇒ ",
        "\uf0ae": " → ",
        "\uf0ab": " ⇌ ",
        "\uf0b4": "·",
        "\uf0b1": "±",
        "\uf044": "Δ",
        "\uf0b0": "°",
        "\uf02d": "−",
        "\uf067": "γ",
        "\uf061": "α",
        "\uf062": "β",
    }
    out = text
    for g, rep in glyph_map.items():
        if g in out:
            out = out.replace(g, rep)

    out = re.sub(r"\s*<[-=]+>\s*|⇄", " ⇌ ", out)
    out = re.sub(r"\s*-->\s*|\s*->\s*", " → ", out)
    out = re.sub(r"\b[Dd]elta\s*([HUGS])\b", r"Δ\1", out)
    out = re.sub(r"(\d)\s*(?:st\.\s*C|°\s*C|oC)\b", r"\1 °C", out)
    out = re.sub(
        r"\b(g|mol|dm|cm|m|s)\s*[·*]\s*(mol|dm|cm|s)\s*(?:\^\s*)?([−-]?\d)\b",
        lambda m: f"{m.group(1)}·{m.group(2)}{_to_superscript(m.group(3))}",
        out,
    )

    for pat, rep in SCI_IONS:
        out = re.sub(pat, rep, out)

    out = _SCI_FORMULA_PATTERN.sub(lambda m: SCI_TOKEN_MAP[m.group(1)], out)
    out = re.sub(r"[ \t]{2,}", " ", out).strip()
    return out


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

    # Reject pure table chrome / rubric headers accidentally matched
    if txt.lower() in {"rozwiązanie", "przykładowe rozwiązanie", "ocena", "lp.", "stwierdzenie", "odpowiedź"}:
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

    return normalize_sci_unicode(txt.strip())


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
                r"^(?:Zadanie\s+\d+(?:\.\d+)?\.?|\d+\.\d+\.?)(?:\s*\([^)]*\))?\s*:?\s*",
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
        r"^[.,;:–-]+\s*",
        "",
        first_solution,
    )
    first_solution = re.sub(
        r"^\s*(?:Sposób\s+1\.|Rozwiązanie\s+I\b|Rozstrzygnięcie\s*:?|Przykładowe\s+wyjaśnienia\s*:?|Przykładowe\s+uzasadnienie\s*:?|Przykładowe\s+rozwiązania\s*:?|Przykładowa\s+odpowiedź\s*:?|Poprawne\s+rozwiązanie\s*:?|Rozwiązanie\s*:?|Obserwacje\s*:?)\s*",
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
        ln_clean = re.sub(r"^[.,;:–-]+\s*", "", ln_clean).strip()
        ln_clean = re.sub(
            r"^\s*(?:Poprawne\s+rozwiązanie|Przykładowe\s+rozwiązania|Przykładowe\s+wyjaśnienia|Przykładowe\s+uzasadnienia|Rozwiązanie)\s*:?\s*",
            "",
            ln_clean,
            flags=re.IGNORECASE,
        ).strip()
        if ln_clean:
            lines.append(ln_clean)

    concise = normalize_sci_unicode(" ".join(lines).strip())
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
    fallback_str = normalize_sci_unicode(re.sub(r"\s+", " ", fallback_str).strip())
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
                plain = normalize_sci_unicode(plain)
                return (f"[{verb}] " if verb else "") + (plain[:210] + ("..." if len(plain) > 210 else ""))
    key = strip_rubric_noise(subtask.get("officialAnswerKey") or "").replace("\n", " ").strip()
    key = normalize_sci_unicode(re.sub(r"\s+", " ", key))
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


import heapq

def _is_printed_token(txt: str) -> bool:
    s = txt.strip()
    return bool(s) and not (set(s) <= {".", "_", "…", "-", "–"})


def _rects_overlap(
    a: tuple[float, float, float, float],
    b: tuple[float, float, float, float],
    pad: float = 0.0,
) -> bool:
    return not (
        a[2] <= b[0] - pad
        or a[0] >= b[2] + pad
        or a[3] <= b[1] - pad
        or a[1] >= b[3] + pad
    )


def _overlap_area(
    a: tuple[float, float, float, float],
    b: tuple[float, float, float, float],
) -> float:
    ix0 = max(a[0], b[0])
    iy0 = max(a[1], b[1])
    ix1 = min(a[2], b[2])
    iy1 = min(a[3], b[3])
    if ix1 <= ix0 or iy1 <= iy0:
        return 0.0
    return (ix1 - ix0) * (iy1 - iy0)


def _slice_empty_rect(
    cand: tuple[float, float, float, float],
    printed: list[tuple[float, float, float, float]],
    placed: list[tuple[float, float, float, float]],
    min_w: float,
    min_h: float,
    pad: float = 0.12,
) -> tuple[float, float, float, float] | None:
    """
    Finds the largest-area sub-rectangle inside `cand` that has zero overlap
    with any printed word bbox (expanded by `pad`), softly avoiding `placed`.
    """
    relevant = [ob for ob in printed if _rects_overlap(cand, ob, pad=pad)]
    if not relevant:
        # Still try to nudge off already placed annotations if feasible
        r_placed = [pl for pl in placed if _rects_overlap(cand, pl, pad=0.05)]
        if r_placed:
            non_placed = _slice_empty_rect(cand, relevant + r_placed, [], min_w, min_h, pad=0.06)
            if non_placed is not None:
                return non_placed
        if (cand[2] - cand[0]) >= min_w and (cand[3] - cand[1]) >= min_h:
            return cand
        return None

    counter = 0
    best_clear: tuple[float, float, float, float] | None = None
    best_clear_score = -1.0

    def push_rect(heap: list[Any], r: tuple[float, float, float, float]) -> None:
        nonlocal counter
        w = r[2] - r[0]
        h = r[3] - r[1]
        if w < min_w or h < min_h:
            return
        area = w * h
        # Penalize placed overlap slightly so distinct annotations don't stack
        p_pen = sum(_overlap_area(r, pl) for pl in placed) * 3.0
        counter += 1
        heapq.heappush(heap, (-(area - p_pen), counter, r))

    heap: list[Any] = []
    push_rect(heap, cand)
    steps = 0
    while heap and steps < 110:
        steps += 1
        neg_score, _, cur = heapq.heappop(heap)
        hit = None
        best_hit_area = 0.0
        for ob in relevant:
            if _rects_overlap(cur, ob, pad=pad):
                # Prefer splitting against the obstacle with greatest intersection
                ia = _overlap_area(cur, (ob[0] - pad, ob[1] - pad, ob[2] + pad, ob[3] + pad))
                if ia > best_hit_area or hit is None:
                    best_hit_area = ia
                    hit = ob
        if hit is None:
            # Verify no overlap with any other obstacle
            if any(_rects_overlap(cur, ob, pad=pad) for ob in printed):
                continue
            cur_score = -neg_score
            if cur_score > best_clear_score:
                best_clear_score = cur_score
                best_clear = cur
                # First popped collision-free rect in max-area heap is near-optimal
                if not placed or sum(_overlap_area(cur, pl) for pl in placed) == 0.0:
                    return cur
            continue

        ox0, oy0, ox1, oy1 = hit[0] - pad, hit[1] - pad, hit[2] + pad, hit[3] + pad
        x0, y0, x1, y1 = cur
        children = (
            (x0, y0, ox0, y1),  # left of obstacle
            (ox1, y0, x1, y1),  # right of obstacle
            (x0, y0, x1, oy0),  # above obstacle
            (x0, oy1, x1, y1),  # below obstacle
        )
        for ch in children:
            if (ch[2] - ch[0]) >= min_w and (ch[3] - ch[1]) >= min_h:
                push_rect(heap, ch)

    return best_clear


def _find_whitespace_bands(
    printed: list[tuple[float, float, float, float]],
    placed: list[tuple[float, float, float, float]],
    y_min: float,
    y_max: float,
    x_min: float = 8.5,
    x_max: float = 89.5,
    min_w: float = 12.0,
    min_h: float = 1.8,
) -> tuple[float, float, float, float] | None:
    y0_lim = max(5.0, min(91.0, y_min))
    y1_lim = max(y0_lim + min_h, min(92.0, y_max))
    # First test complement horizontal gaps across full [x_min, x_max]
    intervals = sorted(
        (max(y0_lim, ob[1] - 0.15), min(y1_lim, ob[3] + 0.15))
        for ob in printed
        if ob[2] > x_min and ob[0] < x_max and ob[3] > y0_lim and ob[1] < y1_lim
    )
    merged: list[list[float]] = []
    for a, b in intervals:
        if not merged or a > merged[-1][1]:
            merged.append([a, b])
        else:
            merged[-1][1] = max(merged[-1][1], b)

    gaps: list[tuple[float, float, float, float]] = []
    cur_y = y0_lim
    for a, b in merged:
        if a - cur_y >= min_h:
            gaps.append((x_min, cur_y, x_max, min(cur_y + 14.0, a)))
        cur_y = max(cur_y, b)
    if y1_lim - cur_y >= min_h:
        gaps.append((x_min, cur_y, x_max, min(cur_y + 14.0, y1_lim)))

    # Filter through strict obstacle + placed check
    candidates: list[tuple[float, tuple[float, float, float, float]]] = []
    for g in gaps:
        sub = _slice_empty_rect(g, printed, placed, min_w=min_w, min_h=min_h, pad=0.14)
        if sub:
            pen = sum(_overlap_area(sub, pl) for pl in placed) * 5.0
            area = (sub[2] - sub[0]) * (sub[3] - sub[1])
            candidates.append((area - pen, sub))

    # Also probe slicing full region directly if horizontal full-width gap didn't exist (e.g. right half empty)
    if not candidates:
        sliced = _slice_empty_rect(
            (x_min, y0_lim, x_max, y1_lim),
            printed,
            placed,
            min_w=min_w,
            min_h=min_h,
            pad=0.14,
        )
        if sliced:
            pen = sum(_overlap_area(sliced, pl) for pl in placed) * 5.0
            area = (sliced[2] - sliced[0]) * (sliced[3] - sliced[1])
            candidates.append((area - pen, sliced))

    if not candidates:
        return None
    candidates.sort(key=lambda item: item[0], reverse=True)
    return candidates[0][1]


def resolve_collision_free_rect(
    cand: tuple[float, float, float, float],
    printed: list[tuple[float, float, float, float]],
    placed: list[tuple[float, float, float, float]],
    y_bounds: tuple[float, float],
    min_w: float = 4.0,
    min_h: float = 1.6,
    allow_band_fallback: bool = True,
) -> tuple[float, float, float, float] | None:
    """
    Guarantees a rectangle that strictly does NOT intersect any printed word bbox on the page.
    Tries trimming `cand` first, then searches task-local whitespace, then page-level whitespace.
    """
    res = _slice_empty_rect(cand, printed, placed, min_w=min_w, min_h=min_h, pad=0.12)
    if res is None and allow_band_fallback:
        res = _find_whitespace_bands(
            printed,
            placed,
            y_bounds[0],
            y_bounds[1],
            min_w=max(min_w, 12.0),
            min_h=min_h,
        )
    if res is None and allow_band_fallback:
        res = _find_whitespace_bands(
            printed,
            placed,
            7.5,
            91.5,
            min_w=max(min_w, 8.0),
            min_h=max(1.2, min_h * 0.85),
        )
    if res is None:
        return None

    # Snap inward after rounding to 2 decimals so zero raw-rect intersections occur
    x0 = round(res[0] + 0.02, 2)
    y0 = round(res[1] + 0.02, 2)
    x1 = round(res[2] - 0.02, 2)
    y1 = round(res[3] - 0.02, 2)
    if x1 - x0 < 0.8 or y1 - y0 < 0.8:
        x0, y0, x1, y1 = round(res[0], 2), round(res[1], 2), round(res[2], 2), round(res[3], 2)
    snapped = (x0, y0, x1, y1)
    if any(_rects_overlap(snapped, ob, pad=0.0) for ob in printed):
        return None
    return snapped


def scan_pdf_exam_geometry(
    exam_pdf: Path | None,
    scoring_pdf: Path | None,
) -> dict[str, Any]:
    """
    Extracts per-task coordinates, page printed-word obstacle maps, task Y bands,
    AND cell-level table mappings via PyMuPDF (`fitz`).
    """
    anchors: dict[str, dict[str, Any]] = {}
    tables_by_task: dict[str, list[dict[str, Any]]] = {}
    word_rects_by_page: dict[int, list[tuple[float, float, float, float]]] = {}
    task_bands: dict[str, tuple[int, float, float]] = {}
    if not exam_pdf or not exam_pdf.is_file():
        return {
            "anchors": anchors,
            "tables": tables_by_task,
            "word_rects": word_rects_by_page,
            "task_bands": task_bands,
        }

    scoring_tables = extract_scoring_tables(scoring_pdf)
    doc = fitz.open(exam_pdf)
    try:
        for pno in range(1, len(doc)):  # skip cover page (index 0)
            page = doc[pno]
            page_no = pno + 1
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
            printed_rects = [
                (wd["x0"], wd["y0"], wd["x1"], wd["y1"])
                for wd in page_words
                if _is_printed_token(wd["txt"])
            ]
            word_rects_by_page[page_no] = printed_rects

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

            # Also record word-level subtask header Y bands so subtasks embedded inside compound blocks are located
            sub_word_hits: list[tuple[str, float]] = []
            for wi, wd in enumerate(page_words):
                t = wd["txt"]
                if wi + 1 < len(page_words) and t.lower() == "zadanie":
                    nxt = re.match(r"^(\d+(?:\.\d+)?)\.?$", page_words[wi + 1]["txt"])
                    if nxt:
                        sub_word_hits.append((nxt.group(1), wd["y0"]))
                elif re.match(r"^(\d+\.\d+)\.$", t) and wd["x0"] < 20.0:
                    sub_word_hits.append((t[:-1], wd["y0"]))
            sub_word_hits.sort(key=lambda item: item[1])
            for idx_hit, (tnum_hit, y_start) in enumerate(sub_word_hits):
                y_end = sub_word_hits[idx_hit + 1][1] if idx_hit + 1 < len(sub_word_hits) else 91.0
                if tnum_hit not in task_bands:
                    task_bands[tnum_hit] = (page_no, y_start, max(y_start + 4.0, y_end))

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
                if tnum not in task_bands:
                    task_bands[tnum] = (page_no, ev["y0"], max(ev["y1"] + 3.0, next_y0))

                # Word-level MC options ('A.', 'B.', ...) -> left-margin checkmark boxes
                region_words = [
                    wd for wd in page_words
                    if wd["y0"] >= ev["y0"] - 0.5 and wd["y1"] <= next_y0 + 0.5
                ]
                mc_boxes: dict[str, dict[str, float]] = {}
                for wd in region_words:
                    m_opt = re.match(r"^([A-F])\.$", wd["txt"])
                    if not m_opt:
                        continue
                    letter = m_opt.group(1)
                    bx0_w = wd["x0"]
                    by0_w = wd["y0"]
                    by1_w = wd["y1"]
                    cand_mc = (
                        max(2.0, bx0_w - 5.2),
                        max(5.0, by0_w - 0.15),
                        max(3.6, bx0_w - 0.35),
                        min(92.0, by1_w + 0.25),
                    )
                    free_mc = resolve_collision_free_rect(
                        cand_mc,
                        printed_rects,
                        [],
                        (by0_w - 0.5, by1_w + 0.5),
                        min_w=1.8,
                        min_h=1.3,
                        allow_band_fallback=False,
                    )
                    if free_mc:
                        mc_boxes[letter] = {
                            "xPct": free_mc[0],
                            "yPct": free_mc[1],
                            "widthPct": round(free_mc[2] - free_mc[0], 2),
                            "heightPct": round(free_mc[3] - free_mc[1], 2),
                        }

                # Group dot_words by horizontal row so inline labels like "Aparat Golgiego:" aren't enclosed
                dot_words = [
                    wd for wd in region_words
                    if DOTTED_LINE_RE.match(wd["txt"])
                ]
                dot_box: dict[str, float] | None = None
                if dot_words:
                    dot_rows: list[list[dict[str, Any]]] = []
                    for dw in sorted(dot_words, key=lambda d: (d["y0"], d["x0"])):
                        if not dot_rows or abs(dw["y0"] - dot_rows[-1][0]["y0"]) > 0.9:
                            dot_rows.append([dw])
                        else:
                            dot_rows[-1].append(dw)

                    dx0 = min(dw["x0"] for dw in dot_words)
                    dy0 = min(dw["y0"] for dw in dot_words) - 0.45
                    dx1 = max(dw["x1"] for dw in dot_words)
                    dy1 = max(dw["y1"] for dw in dot_words) + 0.35
                    cand_dot = (max(6.0, dx0), max(5.0, dy0), min(91.0, dx1), min(91.5, dy1))
                    free_dot = resolve_collision_free_rect(
                        cand_dot,
                        printed_rects,
                        [],
                        (ev["y0"], next_y0),
                        min_w=14.0,
                        min_h=1.8,
                        allow_band_fallback=False,
                    )
                    if free_dot:
                        dot_box = {
                            "xPct": free_dot[0],
                            "yPct": free_dot[1],
                            "widthPct": round(free_dot[2] - free_dot[0], 2),
                            "heightPct": round(free_dot[3] - free_dot[1], 2),
                        }

                dot_blocks = [f for f in following if f["is_dots"]]
                pf_blocks = [f for f in following if f["is_pf"]]
                mc_blocks = [f for f in following if f["is_mc"]]
                prompt_blocks = [
                    f for f in following
                    if not f["is_dots"] and not f["is_pf"] and "Wypełnia" not in f["txt"]
                ]

                if dot_box:
                    cand_anchor = (
                        dot_box["xPct"],
                        dot_box["yPct"],
                        dot_box["xPct"] + dot_box["widthPct"],
                        dot_box["yPct"] + dot_box["heightPct"],
                    )
                    box_type = "open-answer"
                elif dot_blocks:
                    cand_anchor = (
                        min(f["x0"] for f in dot_blocks),
                        min(f["y0"] for f in dot_blocks) - 0.3,
                        max(f["x1"] for f in dot_blocks),
                        max(f["y1"] for f in dot_blocks) + 0.3,
                    )
                    box_type = "open-answer"
                elif pf_blocks:
                    cand_anchor = (
                        76.0,
                        min(f["y0"] for f in pf_blocks),
                        89.0,
                        min(89.0, max(f["y1"] for f in pf_blocks) + 3.0),
                    )
                    box_type = "true-false"
                elif mc_blocks:
                    cand_anchor = (
                        max(2.0, min(f["x0"] for f in mc_blocks) - 5.2),
                        min(f["y0"] for f in mc_blocks),
                        max(4.0, min(f["x0"] for f in mc_blocks) - 0.35),
                        max(f["y1"] for f in mc_blocks),
                    )
                    box_type = "multiple-choice"
                else:
                    last_prompt_y1 = max([ev["y1"], *(f["y1"] for f in prompt_blocks)])
                    by0 = min(84.0, last_prompt_y1 + 0.6)
                    by1 = max(by0 + 5.0, min(90.0, next_y0 - 0.6))
                    cand_anchor = (10.5, by0, 89.5, by1)
                    box_type = "calculation-grid" if (by1 - by0) >= 12.0 else "open-answer"

                anchor_entry: dict[str, Any] = {
                    "pageNumber": page_no,
                    "boxType": box_type,
                    "candRect": cand_anchor,
                    "yBounds": (ev["y0"], next_y0),
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
                has_empty = any(
                    (cell is not None and cell.strip() == "")
                    for r in ext
                    for cell in r
                )
                pf_flag = is_pf_table(ext)
                if not has_empty and not pf_flag:
                    continue

                tb_top_pct = (tb.bbox[1] / h) * 100.0
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
                        "pageNumber": page_no,
                        "isPf": pf_flag,
                        "examExtract": ext,
                        "cellBoxes": cell_boxes,
                        "solvedExtract": matched_z["extract"] if matched_z else None,
                    }
                )
    finally:
        doc.close()

    return {
        "anchors": anchors,
        "tables": tables_by_task,
        "word_rects": word_rects_by_page,
        "task_bands": task_bands,
    }


def _place_pf_checkmark_in_cell(
    cx0: float,
    cy0: float,
    cx1: float,
    cy1: float,
    printed: list[tuple[float, float, float, float]],
    placed: list[tuple[float, float, float, float]],
) -> tuple[tuple[float, float, float, float] | None, str]:
    """
    Finds empty whitespace inside a P/F table cell beside the printed 'P'/'F' letter
    so a pen checkmark '✓' sits cleanly inside the cell with 0 printed-word overlap.
    """
    cell_rect = (cx0, cy0, cx1, cy1)
    cell_words = [ob for ob in printed if _rects_overlap(cell_rect, ob, pad=0.0)]
    if not cell_words:
        free = resolve_collision_free_rect(
            (cx0 + 0.2, cy0 + 0.15, cx1 - 0.2, cy1 - 0.15),
            printed,
            placed,
            (cy0, cy1),
            min_w=1.2,
            min_h=1.2,
            allow_band_fallback=False,
        )
        return free, ""

    wx0 = min(ob[0] for ob in cell_words)
    wy0 = min(ob[1] for ob in cell_words)
    wx1 = max(ob[2] for ob in cell_words)
    wy1 = max(ob[3] for ob in cell_words)

    candidates = [
        (wx1 + 0.14, cy0 + 0.18, cx1 - 0.14, cy1 - 0.18),  # right of printed P/F
        (cx0 + 0.14, cy0 + 0.18, wx0 - 0.14, cy1 - 0.18),  # left of printed P/F
        (cx0 + 0.18, cy0 + 0.12, cx1 - 0.18, wy0 - 0.12),  # above printed P/F
        (cx0 + 0.18, wy1 + 0.12, cx1 - 0.18, cy1 - 0.12),  # below printed P/F
    ]
    for cand in candidates:
        if (cand[2] - cand[0]) >= 0.9 and (cand[3] - cand[1]) >= 0.9:
            free = resolve_collision_free_rect(
                cand,
                printed,
                placed,
                (cy0, cy1),
                min_w=0.9,
                min_h=0.9,
                allow_band_fallback=False,
            )
            if free:
                return free, "✓"
    return None, "✓"


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
    printed_words: list[tuple[float, float, float, float]],
    placed_rects: list[tuple[float, float, float, float]],
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
                    cx0, cy0 = bbox["xPct"], bbox["yPct"]
                    cx1, cy1 = cx0 + bbox["widthPct"], cy0 + bbox["heightPct"]
                    free_rect, mark_txt = _place_pf_checkmark_in_cell(
                        cx0, cy0, cx1, cy1, printed_words, placed_rects
                    )
                    if not free_rect:
                        continue
                    placed_rects.append(free_rect)
                    annotations.append(
                        {
                            "id": f"{sheet_id}-p{page_no}-z{clean_num}-{suffix_prefix}pf{pf_row_idx}",
                            "taskNumber": task_number,
                            "subTaskNumber": clean_num,
                            "pageNumber": page_no,
                            "boxType": "table-fill",
                            "xPct": free_rect[0],
                            "yPct": free_rect[1],
                            "widthPct": round(free_rect[2] - free_rect[0], 2),
                            "heightPct": round(free_rect[3] - free_rect[1], 2),
                            "pointsLabel": points_label,
                            "operationalVerb": operational_verb,
                            "answerText": mark_txt or choice,
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
                    cx0, cy0 = bbox["xPct"], y_adj
                    cx1, cy1 = cx0 + bbox["widthPct"], y_adj + half_h
                    free_rect, mark_txt = _place_pf_checkmark_in_cell(
                        cx0, cy0, cx1, cy1, printed_words, placed_rects
                    )
                    if not free_rect:
                        continue
                    placed_rects.append(free_rect)
                    annotations.append(
                        {
                            "id": f"{sheet_id}-p{page_no}-z{clean_num}-{suffix_prefix}pf{pf_row_idx}",
                            "taskNumber": task_number,
                            "subTaskNumber": clean_num,
                            "pageNumber": page_no,
                            "boxType": "table-fill",
                            "xPct": free_rect[0],
                            "yPct": free_rect[1],
                            "widthPct": round(free_rect[2] - free_rect[0], 2),
                            "heightPct": round(free_rect[3] - free_rect[1], 2),
                            "pointsLabel": points_label,
                            "operationalVerb": operational_verb,
                            "answerText": mark_txt or choice,
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
                cx0 = bbox["xPct"] + 0.25
                cy0 = bbox["yPct"] + 0.16
                cx1 = bbox["xPct"] + bbox["widthPct"] - 0.25
                cy1 = bbox["yPct"] + bbox["heightPct"] - 0.16
                if cx1 - cx0 < 2.2 or cy1 - cy0 < 1.2:
                    cx0, cy0, cx1, cy1 = bbox["xPct"], bbox["yPct"], bbox["xPct"] + bbox["widthPct"], bbox["yPct"] + bbox["heightPct"]
                free_cell = resolve_collision_free_rect(
                    (cx0, cy0, cx1, cy1),
                    printed_words,
                    placed_rects,
                    (cy0, cy1),
                    min_w=2.0,
                    min_h=1.1,
                    allow_band_fallback=False,
                )
                if not free_cell:
                    continue
                placed_rects.append(free_cell)
                annotations.append(
                    {
                        "id": f"{sheet_id}-p{page_no}-z{clean_num}-{suffix_prefix}r{r_idx}c{c_idx}",
                        "taskNumber": task_number,
                        "subTaskNumber": clean_num,
                        "pageNumber": page_no,
                        "boxType": "table-fill",
                        "xPct": free_cell[0],
                        "yPct": free_cell[1],
                        "widthPct": round(free_cell[2] - free_cell[0], 2),
                        "heightPct": round(free_cell[3] - free_cell[1], 2),
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

            cache_key = (subject, year, month)
            if cache_key not in pdf_cache:
                exam_pdf = find_exam_pdf(subject, year, month)
                scoring_pdf = find_scoring_pdf(subject, year, month)
                geom_res = scan_pdf_exam_geometry(exam_pdf, scoring_pdf)
                geom_res["hasPdf"] = exam_pdf is not None
                pdf_cache[cache_key] = geom_res

            geom = pdf_cache[cache_key]
            has_pdf = bool(geom.get("hasPdf"))
            default_page = int(task.get("pdfPageNumber") or (4 if has_pdf else 1))
            anchors = geom["anchors"]
            tables_map = geom["tables"]
            word_rects_map = geom["word_rects"]
            task_bands = geom["task_bands"]
            sheet_pages = overlays.setdefault(sheet_id, {})
            placed_by_page: dict[int, list[tuple[float, float, float, float]]] = {}
            for p_str, existing_anns in sheet_pages.items():
                p_i = int(p_str)
                placed_by_page[p_i] = [
                    (a["xPct"], a["yPct"], a["xPct"] + a["widthPct"], a["yPct"] + a["heightPct"])
                    for a in existing_anns
                ]

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
                band_info = task_bands.get(clean_num) or task_bands.get(bundle_num)

                page_no = (
                    int(anchor["pageNumber"])
                    if anchor
                    else (
                        int(matched_tables[0]["pageNumber"])
                        if matched_tables
                        else (int(band_info[0]) if band_info else default_page)
                    )
                )
                page_words = word_rects_map.get(page_no, [])
                placed_list = placed_by_page.setdefault(page_no, [])
                y_bounds = (band_info[1], band_info[2]) if (band_info and band_info[0] == page_no) else (
                    anchor["yBounds"] if anchor else (10.0, 90.0)
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
                        printed_words=page_words,
                        placed_rects=placed_list,
                    )

                if cell_anns:
                    sheet_pages.setdefault(str(page_no), []).extend(cell_anns)
                    continue

                if anchor:
                    cand_rect = anchor["candRect"]
                    box_type = anchor["boxType"]
                    mc_boxes_map = anchor.get("mcBoxes") or {}
                    dot_box_coords = anchor.get("dotBox")
                else:
                    y_pct = min(76.0, 18.0 + (fallback_slot % 3) * 24.0)
                    fallback_slot += 1
                    st_type = sub.get("taskType", "open-text")
                    box_type = (
                        "true-false"
                        if (st_type == "true-false-table" or truth_choices)
                        else "multiple-choice"
                        if st_type == "multiple-choice"
                        else "calculation-grid"
                        if st_type == "calculation-grid"
                        else "open-answer"
                    )
                    cand_rect = (11.9, y_pct, 88.1, y_pct + 11.5)
                    mc_boxes_map = {}
                    dot_box_coords = None

                if truth_choices and box_type == "open-answer":
                    box_type = "true-false"

                page_key = str(page_no)
                if (
                    marked_options
                    and marked_options[0] in mc_boxes_map
                    and dot_box_coords
                    and concise_answer
                    and len(concise_answer) > 3
                ):
                    mc_letter = marked_options[0]
                    mc_coords = mc_boxes_map[mc_letter]
                    mc_cand = (
                        mc_coords["xPct"],
                        mc_coords["yPct"],
                        mc_coords["xPct"] + mc_coords["widthPct"],
                        mc_coords["yPct"] + mc_coords["heightPct"],
                    )
                    dot_cand = (
                        dot_box_coords["xPct"],
                        dot_box_coords["yPct"],
                        dot_box_coords["xPct"] + dot_box_coords["widthPct"],
                        dot_box_coords["yPct"] + dot_box_coords["heightPct"],
                    )
                    free_mc = (
                        resolve_collision_free_rect(mc_cand, page_words, placed_list, y_bounds, min_w=1.8, min_h=1.2)
                        if has_pdf
                        else mc_cand
                    )
                    if free_mc:
                        placed_list.append(free_mc)
                        sheet_pages.setdefault(page_key, []).append(
                            {
                                "id": f"{sheet_id}-p{page_no}-z{clean_num}-mc",
                                "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                                "subTaskNumber": clean_num,
                                "pageNumber": page_no,
                                "boxType": "multiple-choice",
                                "xPct": free_mc[0],
                                "yPct": free_mc[1],
                                "widthPct": round(free_mc[2] - free_mc[0], 2),
                                "heightPct": round(free_mc[3] - free_mc[1], 2),
                                "pointsLabel": points_label,
                                "operationalVerb": operational_verb,
                                "answerText": f"✓ {mc_letter}",
                                "marginNote": margin_note,
                                "markedOptions": [mc_letter],
                            }
                        )
                    free_fill = (
                        resolve_collision_free_rect(dot_cand, page_words, placed_list, y_bounds, min_w=8.0, min_h=1.6)
                        if has_pdf
                        else dot_cand
                    )
                    if free_fill:
                        placed_list.append(free_fill)
                        sheet_pages.setdefault(page_key, []).append(
                            {
                                "id": f"{sheet_id}-p{page_no}-z{clean_num}-fill",
                                "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                                "subTaskNumber": clean_num,
                                "pageNumber": page_no,
                                "boxType": "open-answer",
                                "xPct": free_fill[0],
                                "yPct": free_fill[1],
                                "widthPct": round(free_fill[2] - free_fill[0], 2),
                                "heightPct": round(free_fill[3] - free_fill[1], 2),
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
                    target_cand = (
                        mc_coords["xPct"],
                        mc_coords["yPct"],
                        mc_coords["xPct"] + mc_coords["widthPct"],
                        mc_coords["yPct"] + mc_coords["heightPct"],
                    )
                    anchor_box_type = "multiple-choice"
                    final_ans = f"✓ {mc_letter}"
                    min_req_w, min_req_h = 1.8, 1.2
                else:
                    target_cand = cand_rect
                    anchor_box_type = box_type
                    final_ans = concise_answer
                    min_req_w, min_req_h = (1.8, 1.2) if anchor_box_type == "multiple-choice" else (6.0, 1.6)

                free_box = (
                    resolve_collision_free_rect(
                        target_cand,
                        page_words,
                        placed_list,
                        y_bounds,
                        min_w=min_req_w,
                        min_h=min_req_h,
                    )
                    if has_pdf
                    else target_cand
                )
                if not free_box:
                    continue
                placed_list.append(free_box)

                ann = {
                    "id": f"{sheet_id}-p{page_no}-z{clean_num}",
                    "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                    "subTaskNumber": clean_num,
                    "pageNumber": page_no,
                    "boxType": anchor_box_type,
                    "xPct": free_box[0],
                    "yPct": free_box[1],
                    "widthPct": round(free_box[2] - free_box[0], 2),
                    "heightPct": round(free_box[3] - free_box[1], 2),
                    "pointsLabel": points_label,
                    "operationalVerb": operational_verb,
                    "answerText": normalize_sci_unicode(final_ans),
                    "marginNote": normalize_sci_unicode(margin_note),
                }
                if marked_options:
                    ann["markedOptions"] = marked_options
                if truth_choices:
                    ann["truthChoices"] = truth_choices

                sheet_pages.setdefault(page_key, []).append(ann)

    # Preserve supplemental sheet overlays (Trial / Fizyka / Matematyka) already curated & normalize Unicode
    if OUTPUT_OVERLAYS_FILE.is_file():
        try:
            existing = json.loads(OUTPUT_OVERLAYS_FILE.read_text(encoding="utf-8"))
            for sid, pages in existing.items():
                if sid not in generated_sheet_ids and sid not in overlays:
                    for _, anns in pages.items():
                        for a in anns:
                            if "answerText" in a:
                                a["answerText"] = normalize_sci_unicode(a["answerText"])
                            if "marginNote" in a:
                                a["marginNote"] = normalize_sci_unicode(a["marginNote"])
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
