#!/usr/bin/env python3
"""
fabryka_arkusze_cke.py
----------------------
Full 1:1 Official CKE Matura Exam Extractor & Lemo-Opuscar Animated Key Pipeline.

Pairs each official CKE exam PDF (arkusz) in `materiały-źródłowe/` with its
corresponding official scoring key PDF (zasady oceniania) and uses PyMuPDF
(`fitz`) + optional AsyncOpenAI (DeepSeek) to:
  1. Extract 100% of tasks and subtasks (Zadanie 1 .. Zadanie N, no cap).
  2. Export full-page 1:1 PNG snapshots (`page_01.png` .. `page_NN.png`) and
     cropped embedded diagrams, charts, micrographs, chemical schemes, and
     official key tables/schemes (`fig_*.png`, `key_*.png`) into
     `public/cke-assets/<subject>/<year>_<month>/`.
  3. Match every subtask against the official CKE `zasady oceniania` PDF
     (scoring criteria, sample solutions, remarks, P/F answers, multiple-choice).
  4. Build 4-phase `lemo-opuscar` animated walkthroughs (`analiza-ryciny`,
     `czasownik-operacyjny`, `mechanizm`, `klucz-cke`) and `CkeExamSheet` manifests.

Usage:
  python scripts/fabryka_arkusze_cke.py --dry-run
  python scripts/fabryka_arkusze_cke.py --years 2024,2023
  python scripts/fabryka_arkusze_cke.py --subject biologia --years 2024 --use-deepseek
"""

from __future__ import annotations

import argparse
import asyncio
import html
import json
import os
import re
import sys
from pathlib import Path
from typing import Any

# Ensure Windows consoles handle Polish diacritics & emoji cleanly
for stream_name in ("stdout", "stderr"):
    stream = getattr(sys, stream_name, None)
    if stream and hasattr(stream, "reconfigure"):
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

ROOT_DIR = Path(__file__).resolve().parent.parent
CKE_EXAMS_DIR = ROOT_DIR / "src" / "data" / "cke-exams"
MANIFEST_FILE = CKE_EXAMS_DIR / "cke-sheets-manifest.json"
ASSETS_DIR = ROOT_DIR / "public" / "cke-assets"

TARGET_FILES: dict[str, Path] = {
    "biologia": CKE_EXAMS_DIR / "biologia-cke-tasks.json",
    "chemia": CKE_EXAMS_DIR / "chemia-cke-tasks.json",
}

TOPIC_KEYWORD_RULES: dict[str, list[tuple[str, list[str]]]] = {
    "biologia": [
        ("matura-bio-dzial-i", ["białk", "aminokwas", "enzym", "katalaz", "sacharyd", "glukoz", "monomer", "polimer", "lipid", "kwas nuklein"]),
        ("matura-bio-dzial-ii", ["błon", "osmoz", "plazmoliz", "transport", "mitochondr", "chloroplast", "plastyd", "jądr", "organell", "endosymbioz", "rybosom"]),
        ("matura-bio-dzial-iii", ["fotosyntez", "oddychan", "glikoliz", "krebs", "pirogronian", "dehydrogenaz", "atp", "fermentac", "kalwin", "calvin", "c4", "rubisco"]),
        ("matura-bio-dzial-iv", ["wirus", "retrowirus", "hiv", "bakteri", "grzyb", "protist", "porost", "antyb", "bakteriofag"]),
        ("matura-bio-dzial-v", ["roślin", "mszak", "paprotnik", "okryto", "nagozal", "gametofit", "sporofit", "szpark", "ksylem", "floem", "aukc", "auksyn", "fitohorm"]),
        ("matura-bio-dzial-vi", ["zwierz", "bezkręgow", "stawonog", "pierścienic", "mięczak", "nicie", "płaziń", "kręgow", "płaz", "gad", "ptak", "ssak", "ryb"]),
        ("matura-bio-dzial-vii", ["człowiek", "mięśni", "nerwow", "synaps", "hormon", "tarczyc", "insul", "nerk", "nefron", "mocz", "krew", "serce", "płuc", "odporn", "szczepion", "trawien"]),
        ("matura-bio-dzial-viii", ["gen", "dna", "rna", "transkryp", "translac", "replikac", "operon", "mendel", "alle", "krzyżów", "mutacj", "chromosom", "mejoz", "mitoz"]),
        ("matura-bio-dzial-ix", ["pcr", "crispr", "elektroforez", "plazmid", "klonow", "gmo", "transgen", "restrykc"]),
        ("matura-bio-dzial-x", ["ewoluc", "filogene", "hardy", "dobór", "specjac", "homolog", "analog", "klad"]),
        ("matura-bio-dzial-xi", ["ekolog", "populac", "biocenoz", "ekosystem", "sukcesj", "troficz", "eutrofiz", "azot", "nisz", "konkurenc"]),
    ],
    "chemia": [
        ("matura-chem-dzial-i", ["atom", "orbital", "podpowłok", "konfiguracj", "izotop", "nukleon", "okresow", "elektroujemn"]),
        ("matura-chem-dzial-ii", ["wiązani", "hybrydyzac", "kształt", "dipol", "wodorow", "sieciow", "kryształ", "jonow", "kowalencyj"]),
        ("matura-chem-dzial-iii", ["mol", "gaz", "clapeyron", "objętoś", "stechiometr", "gęstoś", "ciśnieni", "prędkoś", "ułamek"]),
        ("matura-chem-dzial-iv", ["entalp", "hess", "termochem", "ciepł", "egzoterm", "endoterm"]),
        ("matura-chem-dzial-v", ["równowag", "kinetyk", "szybkoś", "kataliz", "przekory", "kc", "kp", "rząd reakcji"]),
        ("matura-chem-dzial-vi", ["ph", "roztw", "bufor", "dysocjac", "hydroliz", "miareczkow", "kso", "rozpuszczaln", "ka", "kb", "ostwald", "brønsted"]),
        ("matura-chem-dzial-vii", ["redoks", "utlen", "redukc", "ogniw", "elektrod", "potencjał", "sem", "elektroliz", "korozj"]),
        ("matura-chem-dzial-viii", ["chrom", "mangan", "żelaz", "mied", "cynk", "glin", "amfoterycz", "blok d", "tlenek", "wodorotlen"]),
        ("matura-chem-dzial-ix", ["alkan", "alken", "alkin", "benzen", "aren", "toluen", "węglowod", "izomer", "markownikow", "substytucj"]),
        ("matura-chem-dzial-x", ["alkohol", "fenol", "aldehyd", "keton", "karboksylow", "tollens", "trommer", "kwas octow"]),
        ("matura-chem-dzial-xi", ["estr", "tłuszcz", "mydł", "zmydlan", "polimer", "polikondensacj", "amid", "poliamid"]),
        ("matura-chem-dzial-xii", ["aminokwas", "peptyd", "białk", "cuk", "glukoz", "fruktoz", "sacharoz", "skrobi", "biuret", "ksantoprotein"]),
        ("matura-chem-dzial-xiii", ["doświadczeni", "probów", "osad", "rozróżni", "identyfikac", "odczynnik", "efekt", "obserwac"]),
    ],
}

OPERATIONAL_VERB_RULES: list[tuple[str, str, str]] = [
    ("wyjaśnij", "Wyjaśnij", "Wskaż mechanizm przyczynowo-skutkowy (Przyczyna → Mechanizm → Skutek), łącząc dane z zadania z prawem przyrodniczym."),
    ("wykaż", "Wykaż", "Udowodnij tezę krok po kroku, bezpośrednio łącząc warunki opisane w arkuszu z obserwowanym wynikiem."),
    ("uzasadnij", "Uzasadnij", "Podaj merytoryczny argument potwierdzający słuszność wyboru lub stwierdzenia."),
    ("rozstrzygnij", "Rozstrzygnij", "Podejmij jednoznaczną decyzję (np. Tak/Nie, wzrośnie/zmaleje) przed ewentualnym uzasadnieniem."),
    ("ocen", "Oceń P/F", "Zweryfikuj każde zdanie niezależnie względem wiedzy merytorycznej i wykresu/tabeli (Prawda albo Fałsz)."),
    ("oceń", "Oceń P/F", "Zweryfikuj każde zdanie niezależnie względem wiedzy merytorycznej i wykresu/tabeli (Prawda albo Fałsz)."),
    ("uzupełnij", "Uzupełnij", "Wpisz precyzyjnie wymagane pojęcia, wartości, symbole lub wybierz właściwe sformułowanie z nawiasu."),
    ("oblicz", "Oblicz", "Zapisz pełny tok rozumowania (wzory / równanie reakcji / proporcje), podstaw dane liczbowe i podaj wynik z jednostką."),
    ("napisz", "Napisz", "Zapisz dokładne równanie reakcji (cząsteczkowe lub jonowe) albo wzór chemiczny z zachowaniem bilansu masy i ładunku."),
    ("zapisz", "Zapisz", "Zapisz dokładny wzór, konfigurację, schemat ogniwa lub równanie reakcji zgodnie z konwencją CKE."),
    ("określ", "Określ", "Podaj zwięźle konkretną cechę, kierunek zmian, blok konfiguracyjny, typ reakcji lub wartość bez zbędnej opisowości."),
    ("podaj", "Podaj", "Wymień precyzyjnie żądaną nazwę, przykład, liczbę lub parametr bez konieczności rozbudowanego wywodu."),
    ("przedstaw", "Przedstaw", "Opisz zwięźle przebieg procesu lub zależność w odpowiedniej kolejności etapów."),
    ("zaproponuj", "Zaproponuj", "Wskaż konkretny odczynnik, próbę kontrolną lub procedurę dającą jednoznacznie różne obserwacje."),
    ("dokończ", "Wybierz (A–D / 1–3)", "Dobierz poprawną opcję bezpośrednio wynikającą z analizy ryciny lub tekstu źródłowego."),
    ("przyporządkuj", "Przyporządkuj", "Dopasuj poprawnie elementy ze zbioru opisu do struktur lub pojęć."),
    ("narysuj", "Narysuj", "Przedstaw poprawny wzór strukturalny/półstrukturalny, wykres lub schemat zgodnie z regułami chemii/biologii."),
]


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


def infer_month(name: str) -> str:
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


def discover_cke_exam_pairs(subject: str) -> list[dict[str, Any]]:
    oer_root = locate_oer_root()
    if not oer_root.is_dir():
        return []

    subfolders = (
        [("biologia", oer_root / "biologia" / "Biologia"), ("chemia", oer_root / "chemia" / "Chemia")]
        if subject == "all"
        else [("biologia" if subject == "biologia" else "chemia", oer_root / subject / ("Biologia" if subject == "biologia" else "Chemia"))]
    )

    pairs: list[dict[str, Any]] = []
    for subj, base_dir in subfolders:
        if not base_dir.is_dir():
            continue
        for year_dir in sorted(base_dir.iterdir()):
            if not year_dir.is_dir() or not re.fullmatch(r"20\d{2}", year_dir.name):
                continue
            year = int(year_dir.name)
            pdfs = sorted(year_dir.glob("*.pdf"))
            if not pdfs:
                continue

            # Identify exam paper vs key vs karta odpowiedzi
            exam_pdf: Path | None = None
            key_pdf: Path | None = None
            for pdf in pdfs:
                low = pdf.name.lower()
                if "karta" in low or "odpowiedzi nr 3" in low:
                    continue
                if any(k in low for k in ("zasady", "model", "-n.pdf", "_n.pdf")):
                    if key_pdf is None or "zasady" in low:
                        key_pdf = pdf
                else:
                    if exam_pdf is None or "arkusz" in low or low.startswith(("ebip", "echp", "mbia", "mcha")):
                        exam_pdf = pdf

            if exam_pdf is None:
                continue

            month = infer_month(exam_pdf.name)
            formula = "2023" if year >= 2023 else "2015"
            pairs.append(
                {
                    "subject": subj,
                    "year": year,
                    "month": month,
                    "formula": formula,
                    "exam_path": exam_pdf,
                    "key_path": key_pdf,
                }
            )
    return pairs


def strip_page_boilerplate(text: str) -> str:
    lines: list[str] = []
    for raw in text.splitlines():
        s = raw.strip()
        if not s:
            lines.append("")
            continue
        if re.match(r"^Strona\s+\d+\s+z\s+\d+$", s):
            continue
        if re.match(r"^(?:EBIP|ECHP|MBI|MCH)-R[01][_-]\d+$", s):
            continue
        if s in ("Wypełnia", "egzaminator", "Nr zadania", "Maks. liczba pkt", "Uzyskana liczba pkt"):
            continue
        if re.fullmatch(r"[.\u2026\s]{8,}", s):
            continue
        lines.append(s)
    # Collapse excess blank lines
    cleaned = re.sub(r"\n{3,}", "\n\n", "\n".join(lines)).strip()
    return cleaned


def text_to_html(text: str) -> str:
    cleaned = strip_page_boilerplate(text)
    if not cleaned:
        return ""
    paragraphs = [p.strip() for p in re.split(r"\n{2,}", cleaned) if p.strip()]
    out: list[str] = []
    for p in paragraphs:
        esc = html.escape(p)
        # Format sub/sup hints cautiously only for common simple formulas if unambiguous
        esc = esc.replace("\n", "<br />")
        esc = re.sub(
            r"^(Informacja do zadań[^\n<]+)",
            r'<strong class="text-emerald-300">\1</strong>',
            esc,
        )
        out.append(f"<p>{esc}</p>")
    return "".join(out)


def detect_operational_verb(text: str, default: str = "Rozwiąż") -> str:
    low = text.lower()
    found: list[str] = []
    for needle, label, _ in OPERATIONAL_VERB_RULES:
        if re.search(rf"\b{re.escape(needle)}\b", low) and label not in found:
            found.append(label)
        if len(found) >= 2:
            break
    if not found:
        if "prawdziwość" in low or "zaznacz p" in low:
            return "Oceń P/F"
        return default
    return " / ".join(found)


def classify_related_topics(subject: str, text: str) -> list[str]:
    low = text.lower()
    topics: list[str] = []
    for slug, keywords in TOPIC_KEYWORD_RULES.get(subject, []):
        if any(kw in low for kw in keywords):
            topics.append(slug)
    if not topics:
        topics.append("matura-bio-dzial-i" if subject == "biologia" else "matura-chem-dzial-xiii")
    return topics[:3]


def parse_scoring_key_pdf(key_path: Path | None) -> tuple[dict[str, dict[str, Any]], Any | None]:
    if not key_path or not key_path.is_file():
        return {}, None

    import fitz  # type: ignore

    doc = fitz.open(str(key_path))
    pages_blocks: list[tuple[int, float, float, str]] = []

    for pno, page in enumerate(doc):
        # Skip first general pages if needed, still scan blocks with y ordering
        blocks = sorted(page.get_text("blocks"), key=lambda b: (round(b[1], 1), round(b[0], 1)))
        for b in blocks:
            if b[6] != 0:
                continue
            txt = b[4].replace("\xa0", " ").strip()
            if not txt:
                continue
            if re.match(r"^Strona\s+\d+\s+z\s+\d+$", txt):
                continue
            if re.match(r"^Zasady oceniania rozwiązań zadań$", txt) and b[1] < 60:
                continue
            if re.match(r"^Egzamin maturalny z ", txt) and b[1] < 60:
                continue
            key_split_re = re.compile(
                r"(?m)(?=^(?:Zadanie\s+\d+(?:\.\d+)?\.|\d+\.\d+\.\s*\((?:0[–-])?\d+))"
            )
            parts = [p.strip() for p in key_split_re.split(txt) if p.strip()]
            if len(parts) <= 1:
                pages_blocks.append((pno + 1, b[0], b[1], txt))
            else:
                total_len = max(1, len(txt))
                offset = 0
                h = b[3] - b[1]
                for part in parts:
                    pos = txt.find(part, offset)
                    frac0 = (pos if pos >= 0 else offset) / total_len
                    offset = (pos if pos >= 0 else offset) + len(part)
                    pages_blocks.append((pno + 1, b[0], b[1] + h * frac0, part))

    entries: dict[str, dict[str, Any]] = {}
    current_id: str | None = None
    current_max_pts = 1
    current_start_page = 1
    current_start_y = 0.0
    buf: list[str] = []

    header_re = re.compile(
        r"^(?:Zadanie\s+(\d+(?:\.\d+)?)|(\d+\.\d+))\.\s*(?:\((?:0[–-])?(\d+)\s*(?:pkt)?\))?"
    )

    def flush(end_page: int, end_y: float) -> None:
        nonlocal current_id, current_max_pts, current_start_page, current_start_y, buf
        if current_id is None:
            return
        raw_text = "\n".join(buf).strip()
        # Separate Zasady oceniania / Rozwiązanie / Przykładowe rozwiązania / Uwagi
        zo_idx = raw_text.find("Zasady oceniania")
        sol_idx = -1
        for marker in ("Rozwiązanie", "Przykładowe rozwiązania", "Przykładowe rozwiązanie", "Poprawna odpowiedź"):
            pos = raw_text.find(marker)
            if pos != -1 and (sol_idx == -1 or pos < sol_idx):
                sol_idx = pos
        if zo_idx != -1:
            relevant = raw_text[zo_idx:].strip()
        elif sol_idx != -1:
            relevant = raw_text[sol_idx:].strip()
        else:
            relevant = raw_text

        relevant_clean = re.sub(r"\n{3,}", "\n\n", relevant).strip()
        entries[current_id] = {
            "id": current_id,
            "points": current_max_pts,
            "start_page": current_start_page,
            "start_y": current_start_y,
            "end_page": end_page,
            "end_y": end_y,
            "raw": raw_text,
            "answer_key": relevant_clean[:2800],
        }

    for page_no, x0, y0, txt in pages_blocks:
        m = header_re.match(txt)
        # Only start a scoring entry if points "(0-k)" appear OR it's in zasady body (page >= 2)
        if m and ("(" in txt.splitlines()[0] or page_no >= 2):
            has_pts = bool(
                re.match(r"^(?:Zadanie\s+\d+(?:\.\d+)?|\d+\.\d+)\.\s*\(0[–-]\d+\)", txt)
            )
            matched_pts = m.group(3)
            if has_pts or (page_no >= 2 and matched_pts):
                flush(page_no, y0)
                current_id = m.group(1) or m.group(2)
                current_max_pts = int(matched_pts) if matched_pts else 1
                current_start_page = page_no
                current_start_y = y0
                buf = [txt]
                continue
        if current_id is not None:
            buf.append(txt)

    if pages_blocks:
        flush(pages_blocks[-1][0], pages_blocks[-1][2] + 40)

    return entries, doc


def parse_pf_answers(key_text: str, count: int) -> list[str]:
    """Extract sequence of P / F answers from official CKE scoring key text."""
    sol_match = re.search(r"Rozwiązanie([\s\S]+)", key_text)
    hay = sol_match.group(1) if sol_match else key_text
    hay = re.sub(r"\b\d+\s*pkt\b[^\n]*", " ", hay)
    # Match "1 – P, 2 – F" / "1. – F, 2. – P" / "1. P 2. F"
    numbered = re.findall(r"(?:\d+\.?\s*[–-]\s*|\d+\.\s*)([PF])\b", hay)
    if len(numbered) >= count:
        return numbered[:count]
    lines = [ln.strip() for ln in hay.splitlines() if ln.strip()]
    seq_candidates = [ln for ln in lines if ln in ("P", "F")]
    if len(seq_candidates) >= count:
        return seq_candidates[:count]
    joined = re.findall(r"\b([PF])\b", hay[:450])
    if len(joined) >= count:
        return joined[:count]
    return ["P"] * count


def parse_interactive_pf_table(
    prompt_text: str, key_text: str
) -> dict[str, Any] | None:
    low = prompt_text.lower()
    if not (
        "zaznacz p" in low
        or ("prawdziwe" in low and re.search(r"(?:^|\n|\s)P\s+F(?:\s|$|\n)", prompt_text))
    ):
        return None

    cleaned = strip_page_boilerplate(prompt_text)
    # Trim instruction header up to "fałszywe." or "prawdziwe."
    body = cleaned
    header_end = re.search(r"(?:fałszywe|prawdziwe)\.", body, flags=re.IGNORECASE)
    if header_end:
        body = body[header_end.end():].strip()

    # Primary strategy: split statements delimited by CKE "P F" / "P\nF" columns
    pf_chunks = [
        re.sub(r"\s+", " ", c).strip()
        for c in re.split(r"(?:\n+|\s+)P(?:\s+|\n+)F(?=\s|\n|$)", body)
        if re.sub(r"\s+", " ", c).strip()
    ]
    cleaned_rows: list[str] = []
    for chunk in pf_chunks:
        # Remove isolated leading "1." or "1. 2." artifacts if short
        c2 = re.sub(r"^(?:[1-5]\.\s*)+", "", chunk).strip()
        if len(c2) > 8 and not c2.startswith("Zadanie "):
            cleaned_rows.append(c2)

    # Fallback strategy: numbered rows "1. ... 2. ..."
    if len(cleaned_rows) < 2:
        lines = [ln.strip() for ln in body.splitlines() if ln.strip()]
        rows_text: list[str] = []
        cur: list[str] = []
        for ln in lines:
            if ln in ("P", "F", "P F"):
                continue
            m = re.match(r"^([1-5])\.\s*(.*)$", ln)
            if m and int(m.group(1)) == len(rows_text) + (2 if cur else 1):
                if cur:
                    rows_text.append(" ".join(cur).strip())
                cur = [m.group(2)] if m.group(2) else []
            elif rows_text or cur:
                if ln.startswith("Zadanie ") or ln.startswith("Na podstawie"):
                    break
                cur.append(ln)
        if cur:
            rows_text.append(" ".join(cur).strip())
        cleaned_rows = [
            re.sub(r"(?:\s+P\s+F|\s+P/F)$", "", r).strip()
            for r in rows_text
            if len(r.strip()) > 8
        ]

    if len(cleaned_rows) < 2:
        return None

    answers = parse_pf_answers(key_text, len(cleaned_rows))
    return {
        "headers": ["Lp. i stwierdzenie z arkusza CKE", "Ocena (P / F)"],
        "rows": [
            {"statement": f"{idx + 1}. {stmt}", "correctAnswer": answers[idx]}
            for idx, stmt in enumerate(cleaned_rows)
        ],
    }


def classify_task_type(prompt_text: str, pf_table: dict[str, Any] | None) -> str:
    low = prompt_text.lower()
    if pf_table is not None:
        return "true-false-table"
    if "oblicz" in low or "obliczenia:" in low or "stężenie" in low and ("mol" in low or "masa" in low):
        return "calculation-grid"
    if re.search(r"(?m)^A\.\s+.+\nB\.\s+", prompt_text) or "dokończ zdanie. zaznacz" in low or "zaznacz właściwą odpowiedź" in low:
        return "multiple-choice"
    if "przyporządkuj" in low or "uzupełnij tabelę" in low:
        return "matching"
    return "open-text"


def build_animated_steps(
    *,
    prompt_text: str,
    operational_verb: str,
    answer_key: str,
    media_caption: str | None = None,
    has_media: bool = False,
) -> list[dict[str, Any]]:
    plain = strip_page_boilerplate(prompt_text)
    sentences = [s.strip() for s in re.split(r"(?<=[.?!])\s+", plain) if s.strip()]
    quote = sentences[0][:160] if sentences else plain[:160]

    # Match operational verb guidance
    verb_low = operational_verb.lower()
    matched_rules = [
        desc for needle, _, desc in OPERATIONAL_VERB_RULES if needle in verb_low
    ]
    verb_guidance = (
        matched_rules[0]
        if matched_rules
        else "Dopasuj strukturę odpowiedzi bezpośrednio do wymogu polecenia i terminologii CKE."
    )

    step1_html = (
        f"<p>Przeanalizuj dane wejściowe"
        f"{' oraz załączoną rycinę/schemat CKE' if has_media else ''} "
        f"{f'({html.escape(media_caption)}) ' if media_caption else ''}"
        f"i zwróć uwagę na warunki początkowe: <em>„{html.escape(quote)}”</em>.</p>"
    )

    step2_html = (
        f"<p>Polecenie używa czasownika operacyjnego <strong>{html.escape(operational_verb)}</strong>: "
        f"{html.escape(verb_guidance)}</p>"
    )

    # Extract "Rozwiązanie" or first mechanism lines from CKE key for Step 3
    sol_match = re.search(
        r"(?:Przykładowe rozwiązania?|Rozwiązanie)\s*([\s\S]+?)(?:\nUwagi:|$)",
        answer_key,
    )
    mech_text = sol_match.group(1).strip() if sol_match else answer_key
    mech_html = text_to_html(mech_text[:950]) or f"<p>{html.escape(answer_key[:600])}</p>"
    step3_html = (
        "<div class='space-y-1.5'>"
        "<p><strong>Przyczyna → Mechanizm → Skutek (wg wzorca CKE):</strong></p>"
        f"{mech_html}"
        "</div>"
    )

    step4_html = text_to_html(answer_key[:1400]) or f"<p>{html.escape(answer_key)}</p>"

    return [
        {
            "stepNumber": 1,
            "phase": "analiza-ryciny",
            "title": "Krok 1: Analiza danych i ryciny CKE",
            "explanationHtml": step1_html,
            "highlightQuote": quote,
        },
        {
            "stepNumber": 2,
            "phase": "czasownik-operacyjny",
            "title": f"Krok 2: Czasownik operacyjny „{operational_verb}”",
            "explanationHtml": step2_html,
            "highlightQuote": operational_verb,
        },
        {
            "stepNumber": 3,
            "phase": "mechanizm",
            "title": "Krok 3: Łańcuch logiczny (Przyczyna → Mechanizm → Skutek)",
            "explanationHtml": step3_html,
        },
        {
            "stepNumber": 4,
            "phase": "klucz-cke",
            "title": "Krok 4: Oficjalny Klucz CKE (1 pkt vs 0 pkt)",
            "explanationHtml": step4_html,
            "highlightQuote": answer_key[:160],
        },
    ]


def extract_visual_regions_for_task(
    page: Any,
    y_min: float,
    y_max: float,
    subject: str,
    task_text: str,
    asset_dir: Path,
    public_prefix: str,
    page_no: int,
    main_num: int,
) -> list[dict[str, Any]]:
    """
    Detect embedded images OR vector diagrams/tables/chemical schemes on `page`
    within [y_min, y_max], avoiding empty dotted answer lines, 'Obliczenia:'
    grid kratka, and bottom examiner scoring boxes. Render crisp PNG crops.
    """
    import fitz  # type: ignore

    y_cap = min(y_max, 705.0)
    if y_cap - y_min < 28:
        return []

    candidate_rects: list[fitz.Rect] = []

    # 1. Embedded raster images within vertical window
    for info in page.get_image_info(xrefs=True):
        r = fitz.Rect(info["bbox"])
        if r.height < 8 or r.width < 12:
            continue
        if r.y1 > y_min + 6 and r.y0 < y_cap - 6 and r.y1 < 710:
            candidate_rects.append(r)

    # 2. Vector drawings clustering (excluding kratka grid & dotted answer lines)
    drawings = page.get_drawings()
    region_drawings: list[fitz.Rect] = []
    for d in drawings:
        r = fitz.Rect(d["rect"])
        if r.y0 < max(40.0, y_min) or r.y1 > y_cap:
            continue
        if r.height > 650 and r.width > 420:
            continue  # full-page frame
        if r.height < 1.5 and r.width < 12:
            continue  # single answer dot
        region_drawings.append(r)

    # Detect pure square-grid 'Obliczenia:' kratka: huge number of tiny equal rects/lines inside 'Obliczenia'
    obliczenia_y = None
    for b in page.get_text("blocks"):
        if b[6] == 0 and b[1] >= y_min and b[3] <= y_cap:
            t = b[4].strip().lower()
            if t.startswith("obliczenia"):
                obliczenia_y = b[1]

    filtered_drawings: list[fitz.Rect] = []
    for r in region_drawings:
        if obliczenia_y is not None and r.y0 >= obliczenia_y - 2:
            continue  # skip calculation graph-paper grid below "Obliczenia:"
        # Skip thin horizontal writing lines (>250pt wide, <3pt tall) unless part of a table
        filtered_drawings.append(r)

    # Cluster nearby visual rectangles vertically (gap <= 20pt)
    all_visuals = sorted(candidate_rects + filtered_drawings, key=lambda r: r.y0)
    clusters: list[tuple[fitz.Rect, int, bool]] = []
    for r in all_visuals:
        is_img = r in candidate_rects
        placed = False
        for idx, (cur_r, count, has_img) in enumerate(clusters):
            if r.y0 <= cur_r.y1 + 22.0 and r.y1 >= cur_r.y0 - 22.0:
                clusters[idx] = (cur_r | r, count + 1, has_img or is_img)
                placed = True
                break
        if not placed:
            clusters.append((fitz.Rect(r), 1, is_img))

    # Also detect explicit "Na podstawie:" caption blocks to include labels/captions
    caption_blocks = [
        (fitz.Rect(b[:4]), b[4].strip().replace("\n", " "))
        for b in page.get_text("blocks")
        if b[6] == 0 and b[1] >= y_min and b[3] <= y_cap
    ]

    low_task = task_text.lower()
    if any(k in low_task for k in ("mikroskop", "mikrograf", "skaningow", "powiększen")):
        default_type = "micrograph"
    elif any(k in low_task for k in ("wykres", "krzyw", "zależnoś")):
        default_type = "chart"
    elif subject == "chemia" and any(k in low_task for k in ("wzór", "reakcj", "schemat", "związek", "kwas", "ester")):
        default_type = "chemical-scheme"
    elif "tabel" in low_task:
        default_type = "table"
    else:
        default_type = "diagram"

    saved_media: list[dict[str, Any]] = []
    fig_idx = 0
    for cur_r, stroke_count, has_img in clusters:
        # Filter out noise: either has bitmap image, or enough vector complexity/size (exclude tiny checkbox rows alone)
        if not has_img:
            if cur_r.height < 42 or cur_r.width < 95:
                continue
            if stroke_count < 6 and cur_r.height < 65:
                continue
            # If practically zero area or only horizontal rule lines
            if stroke_count <= 4 and cur_r.height > 120:
                continue

        # Expand horizontally to capture diagram labels (typical CKE body margin x=65..535)
        crop = fitz.Rect(
            max(58.0, min(cur_r.x0 - 16.0, 95.0 if has_img or cur_r.width > 200 else cur_r.x0 - 18.0)),
            max(48.0, cur_r.y0 - 10.0),
            min(538.0, max(cur_r.x1 + 16.0, 495.0 if has_img or cur_r.width > 200 else cur_r.x1 + 18.0)),
            min(y_cap - 4.0, cur_r.y1 + 10.0),
        )

        # Look for text blocks overlapping vertically or "Na podstawie:" right below crop
        matched_caption: str | None = None
        for b_rect, b_txt in caption_blocks:
            if b_txt.startswith("Zadanie ") or re.fullmatch(r"[.\u2026\s]{5,}", b_txt):
                continue
            if b_rect.y0 >= cur_r.y0 - 12 and b_rect.y1 <= cur_r.y1 + 26:
                if b_txt.startswith("Na podstawie"):
                    matched_caption = b_txt[:160]
                    crop.y1 = max(crop.y1, min(y_cap - 2.0, b_rect.y1 + 4.0))
                elif b_rect.y0 >= cur_r.y0 - 6 and b_rect.y1 <= cur_r.y1 + 12:
                    crop.x0 = min(crop.x0, max(56.0, b_rect.x0 - 6.0))
                    crop.x1 = max(crop.x1, min(540.0, b_rect.x1 + 6.0))

        # Avoid duplicate overlapping crops
        if any((fitz.Rect(m["boundingBox"]) & crop).get_area() > 0.65 * crop.get_area() for m in saved_media):
            continue

        fig_idx += 1
        fname = f"fig_z{main_num:02d}_p{page_no:02d}_{fig_idx}.png"
        out_path = asset_dir / fname
        pix = page.get_pixmap(clip=crop, dpi=150)
        pix.save(str(out_path))

        saved_media.append(
            {
                "id": f"z{main_num}-p{page_no}-f{fig_idx}",
                "type": default_type,
                "imageUrl": f"{public_prefix}/{fname}",
                "caption": matched_caption or f"Oryginalna rycina CKE (Strona {page_no})",
                "boundingBox": [round(crop.x0, 1), round(crop.y0, 1), round(crop.x1, 1), round(crop.y1, 1)],
                "pdfPageNumber": page_no,
            }
        )
        if fig_idx >= 3:
            break

    return saved_media


def extract_exam_bundle_from_pair(pair: dict[str, Any]) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    import fitz  # type: ignore

    subject = pair["subject"]
    year = pair["year"]
    month = pair["month"]
    formula = pair["formula"]
    exam_path: Path = pair["exam_path"]
    key_path: Path | None = pair["key_path"]

    sheet_id = f"{subject}-{year}-{month}-f{formula}"
    asset_sub = f"{year}_{month}"
    asset_dir = ASSETS_DIR / subject / asset_sub
    asset_dir.mkdir(parents=True, exist_ok=True)
    public_prefix = f"/cke-assets/{subject}/{asset_sub}"

    adoc = fitz.open(str(exam_path))
    z_map, zdoc = parse_scoring_key_pdf(key_path)

    # Extract symbol from Page 1
    p1_text = adoc[0].get_text("text")
    sym_match = re.search(r"\b(?:EBIP|ECHP|MBIA|MCHA|MBI|MCH)-R[01]-[A-Z0-9-]+\b", p1_text)
    symbol = sym_match.group(0) if sym_match else exam_path.stem

    # Export 100% of pages as 1:1 PNG snapshots
    page_urls: list[str] = []
    for pno, page in enumerate(adoc):
        page_fname = f"page_{pno + 1:02d}.png"
        page_out = asset_dir / page_fname
        if not page_out.exists() or page_out.stat().st_size < 1000:
            pix = page.get_pixmap(dpi=96)
            pix.save(str(page_out))
        page_urls.append(f"{public_prefix}/{page_fname}")

    # Build linear stream of blocks dynamically starting where Zadanie 1 appears
    stream: list[dict[str, Any]] = []
    start_page_idx = next(
        (
            i
            for i in range(1, len(adoc))
            if re.search(
                r"(?m)^(?:Zadanie[\s\xa0]+1\b|Informacja[\s\xa0]+do[\s\xa0]+zadań[\s\xa0]+1\b)",
                adoc[i].get_text("text"),
            )
        ),
        1 if len(adoc) > 1 else 0,
    )
    for pno in range(start_page_idx, len(adoc)):
        page = adoc[pno]
        full_txt = page.get_text("text")
        if "brudnopis" in full_txt.lower() and "zadanie" not in full_txt.lower():
            continue
        blocks = sorted(page.get_text("blocks"), key=lambda b: (round(b[1], 1), round(b[0], 1)))
        examiner_y_candidates = [
            b[1]
            for b in blocks
            if b[6] == 0
            and b[1] > 640
            and ("wypełnia" in b[4].lower() or "nr zadania" in b[4].lower() or "uzyskana liczba pkt" in b[4].lower())
        ]
        page_bottom_limit = min(examiner_y_candidates) - 2.0 if examiner_y_candidates else 772.0
        for b in blocks:
            if b[6] != 0:
                continue
            txt = b[4].strip()
            if not txt:
                continue
            if re.match(r"^Strona\s+\d+\s+z\s+\d+", txt) or re.match(r"^(?:EBIP|ECHP|MBI|MCH)-", txt):
                continue
            if b[1] >= page_bottom_limit:
                continue
            # Split merged PyMuPDF blocks whenever another Zadanie / Informacja starts mid-block
            split_re = re.compile(
                r"(?m)(?=^(?:Zadanie[\s\xa0]+\d+(?:\.\d+)?\.|Informacja[\s\xa0]+do[\s\xa0]+zadań[\s\xa0]+\d+))"
            )
            parts = [p.strip() for p in split_re.split(txt) if p.strip()]
            if len(parts) <= 1:
                stream.append(
                    {
                        "page_no": pno + 1,
                        "page": page,
                        "x0": b[0],
                        "y0": b[1],
                        "x1": b[2],
                        "y1": b[3],
                        "text": txt.replace("\xa0", " "),
                    }
                )
            else:
                total_len = max(1, len(txt))
                offset = 0
                h = b[3] - b[1]
                for part in parts:
                    pos = txt.find(part, offset)
                    frac0 = (pos if pos >= 0 else offset) / total_len
                    frac1 = ((pos if pos >= 0 else offset) + len(part)) / total_len
                    offset = (pos if pos >= 0 else offset) + len(part)
                    stream.append(
                        {
                            "page_no": pno + 1,
                            "page": page,
                            "x0": b[0],
                            "y0": b[1] + h * frac0,
                            "x1": b[2],
                            "y1": b[1] + h * min(1.0, frac1),
                            "text": part.replace("\xa0", " "),
                        }
                    )

    # Identify structured sections:
    # - Shared "Informacja do zadań X.–Y." blocks
    # - Main "Zadanie N." intro blocks
    # - Graded "Zadanie N.M. (0-K)" or "Zadanie N. (0-K)" blocks
    info_re = re.compile(r"^Informacja\s+do\s+zadań\s+(\d+)\.?\s*[–-]\s*(\d+)\.?")
    sub_re = re.compile(r"^Zadanie\s+(\d+\.\d+)\.\s*\((0[–-]\d+)\)")
    single_graded_re = re.compile(r"^Zadanie\s+(\d+)\.\s*\((0[–-]\d+)\)")
    main_intro_re = re.compile(r"^Zadanie\s+(\d+)\.\s*(?!\()")

    shared_infos: list[dict[str, Any]] = []
    sections: list[dict[str, Any]] = []

    current_sec: dict[str, Any] | None = None
    in_shared_info: dict[str, Any] | None = None

    for blk in stream:
        txt = blk["text"]
        m_info = info_re.match(txt)
        m_sub = sub_re.match(txt)
        m_single = single_graded_re.match(txt)
        m_main = main_intro_re.match(txt)

        if m_info:
            if current_sec is not None:
                sections.append(current_sec)
                current_sec = None
            in_shared_info = {
                "range_start": int(m_info.group(1)),
                "range_end": int(m_info.group(2)),
                "page_no": blk["page_no"],
                "page": blk["page"],
                "y0": blk["y0"],
                "y1": blk["y1"],
                "blocks": [txt],
            }
            shared_infos.append(in_shared_info)
            continue

        if m_sub or m_single or m_main:
            if in_shared_info is not None:
                in_shared_info = None
            if current_sec is not None:
                sections.append(current_sec)

            if m_sub:
                num_str = m_sub.group(1)
                main_num = int(num_str.split(".")[0])
                pts = int(m_sub.group(2).split("–")[-1].split("-")[-1])
                kind = "sub"
            elif m_single:
                num_str = m_single.group(1)
                main_num = int(num_str)
                pts = int(m_single.group(2).split("–")[-1].split("-")[-1])
                kind = "single"
            else:
                num_str = m_main.group(1)
                main_num = int(num_str)
                pts = 0
                kind = "intro"

            current_sec = {
                "kind": kind,
                "num": num_str,
                "main_num": main_num,
                "points": pts,
                "page_no": blk["page_no"],
                "page": blk["page"],
                "y0": blk["y0"],
                "y_end_same_page": 705.0,
                "blocks": [txt],
            }
            continue

        if in_shared_info is not None and blk["page_no"] == in_shared_info["page_no"]:
            in_shared_info["blocks"].append(txt)
            in_shared_info["y1"] = max(in_shared_info["y1"], blk["y1"])
        elif current_sec is not None:
            current_sec["blocks"].append(txt)
            if blk["page_no"] == current_sec["page_no"]:
                current_sec["y_end_same_page"] = max(current_sec["y_end_same_page"], blk["y1"])

    if current_sec is not None:
        sections.append(current_sec)

    # Compute accurate vertical y_end for sections on the same page
    all_chronological = sections + [
        {"page_no": si["page_no"], "y0": si["y0"]} for si in shared_infos
    ]
    all_chronological.sort(key=lambda s: (s["page_no"], s["y0"]))
    for sec in sections:
        next_same = [
            o["y0"]
            for o in all_chronological
            if o["page_no"] == sec["page_no"] and o["y0"] > sec["y0"] + 2
        ]
        sec["y_end_same_page"] = min(next_same) if next_same else 705.0

    # Group sections into main bundles by main_num (1..N)
    bundles_by_main: dict[int, dict[str, Any]] = {}
    for sec in sections:
        mnum = sec["main_num"]
        bundle = bundles_by_main.setdefault(
            mnum,
            {
                "main_num": mnum,
                "intro": None,
                "graded": [],
                "page_no": sec["page_no"],
            },
        )
        if sec["kind"] == "intro":
            if bundle["intro"] is None:
                bundle["intro"] = sec
            else:
                bundle["intro"]["blocks"].extend(sec["blocks"])
        else:
            bundle["graded"].append(sec)

    # Extract shared info figures if needed
    for si in shared_infos:
        si_next = [
            o["y0"]
            for o in all_chronological
            if o["page_no"] == si["page_no"] and o["y0"] > si["y0"] + 2
        ]
        y_end_si = min(si_next) if si_next else min(705.0, si["y1"] + 30.0)
        si["text"] = "\n".join(si["blocks"])
        si["media"] = extract_visual_regions_for_task(
            si["page"],
            si["y0"],
            y_end_si,
            subject,
            si["text"],
            asset_dir,
            public_prefix,
            si["page_no"],
            si["range_start"],
        )

    tasks_out: list[dict[str, Any]] = []
    for mnum in sorted(bundles_by_main.keys()):
        b = bundles_by_main[mnum]
        intro_sec = b["intro"]
        graded_secs: list[dict[str, Any]] = b["graded"]
        if not graded_secs and not intro_sec:
            continue

        first_sec = intro_sec or graded_secs[0]
        bundle_page = first_sec["page_no"]

        # Gather matching shared info (if task mnum falls into range)
        matching_infos = [
            si for si in shared_infos if si["range_start"] <= mnum <= si["range_end"]
        ]

        intro_text = "\n".join(intro_sec["blocks"]) if intro_sec else ""
        for si in matching_infos:
            if not intro_text:
                intro_text = si["text"]
            else:
                intro_text = si["text"] + "\n\n" + intro_text

        # Extract visual media from intro and graded sections
        media_list: list[dict[str, Any]] = []
        for si in matching_infos:
            media_list.extend(si["media"])
        if intro_sec:
            media_list.extend(
                extract_visual_regions_for_task(
                    intro_sec["page"],
                    intro_sec["y0"],
                    intro_sec["y_end_same_page"],
                    subject,
                    intro_text,
                    asset_dir,
                    public_prefix,
                    intro_sec["page_no"],
                    mnum,
                )
            )

        subtasks_out: list[dict[str, Any]] = []
        bundle_verbs: list[str] = []
        total_points = 0
        combined_text_parts = [intro_text] if intro_text else []

        for gsec in graded_secs:
            gnum = gsec["num"]
            gtext = "\n".join(gsec["blocks"])
            combined_text_parts.append(gtext)
            gpts = gsec["points"] or 1
            total_points += gpts

            # Extract any diagrams inside this subtask section too
            sub_media = extract_visual_regions_for_task(
                gsec["page"],
                gsec["y0"],
                gsec["y_end_same_page"],
                subject,
                gtext,
                asset_dir,
                public_prefix,
                gsec["page_no"],
                mnum,
            )
            for sm in sub_media:
                if not any(m["imageUrl"] == sm["imageUrl"] for m in media_list):
                    media_list.append(sm)

            z_entry = z_map.get(gnum) or z_map.get(str(mnum))
            key_text = (
                z_entry["answer_key"]
                if z_entry
                else f"1 pkt – poprawna odpowiedź zgodna z oficjalnymi zasadami oceniania CKE ({year})."
            )
            if z_entry and z_entry["id"] == gnum and z_entry["points"] and not gsec["points"]:
                gpts = z_entry["points"]

            # Crop key visual snippet from zasady if key references Rozwiązanie with table/diagram/scheme
            key_crop_url: str | None = None
            if zdoc is not None and z_entry is not None:
                kpno = z_entry["start_page"] - 1
                if 0 <= kpno < len(zdoc):
                    kpage = zdoc[kpno]
                    k_imgs = kpage.get_image_info(xrefs=True)
                    ky0 = z_entry["start_y"]
                    ky1 = z_entry["end_y"] if z_entry["end_page"] == z_entry["start_page"] else 760.0
                    has_key_img = any(
                        r["bbox"][3] > ky0 and r["bbox"][1] < ky1 and r["bbox"][3] - r["bbox"][1] > 18
                        for r in k_imgs
                    )
                    if has_key_img or "Rozwiązanie" in key_text or subject == "chemia":
                        crop_top = max(45.0, ky0 - 4.0)
                        crop_bot = min(765.0, max(crop_top + 60.0, ky1 - 4.0))
                        if crop_bot - crop_top <= 420:
                            kfname = f"key_z{gnum.replace('.', '_')}_p{kpno + 1}.png"
                            kout = asset_dir / kfname
                            if not kout.exists():
                                kpix = kpage.get_pixmap(
                                    clip=fitz.Rect(52.0, crop_top, 545.0, crop_bot),
                                    dpi=130,
                                )
                                kpix.save(str(kout))
                            key_crop_url = f"{public_prefix}/{kfname}"

            verb = detect_operational_verb(gtext)
            for v in verb.split(" / "):
                if v not in bundle_verbs:
                    bundle_verbs.append(v)

            pf_table = parse_interactive_pf_table(gtext, key_text)
            ttype = classify_task_type(gtext, pf_table)
            anim_steps = build_animated_steps(
                prompt_text=gtext,
                operational_verb=verb,
                answer_key=key_text,
                media_caption=media_list[0]["caption"] if media_list else None,
                has_media=bool(media_list),
            )

            sub_obj: dict[str, Any] = {
                "subTaskNumber": gnum,
                "points": gpts,
                "taskType": ttype,
                "promptHtml": text_to_html(gtext),
                "operationalVerb": verb,
                "officialAnswerKey": key_text,
                "animatedSteps": anim_steps,
            }
            if pf_table is not None:
                sub_obj["interactiveTableData"] = pf_table
            if key_crop_url:
                sub_obj["officialKeyCropUrl"] = key_crop_url
            subtasks_out.append(sub_obj)

        # Build parent CkeExamTask representing the full Zadanie N bundle
        full_text = "\n\n".join(combined_text_parts)
        bundle_verb = " / ".join(bundle_verbs[:3]) if bundle_verbs else detect_operational_verb(full_text)
        prompt_source = intro_text if intro_text.strip() else (graded_secs[0]["blocks"][0] if graded_secs else "")
        prompt_html = text_to_html(prompt_source)
        if not prompt_html and subtasks_out:
            prompt_html = subtasks_out[0]["promptHtml"]

        if total_points == 0 and subtasks_out:
            total_points = sum(st["points"] for st in subtasks_out)

        combined_key = (
            subtasks_out[0]["officialAnswerKey"]
            if len(subtasks_out) == 1
            else "\n\n".join(
                f"Zadanie {st['subTaskNumber']} ({st['points']} pkt): {st['officialAnswerKey'][:320]}"
                for st in subtasks_out
            )
        )

        subj_code = "BIO" if subject == "biologia" else "CHEM"
        task_id = f"CKE-{subj_code}-{year}-{month.upper()}-ZAD{mnum:02d}"

        task_dict: dict[str, Any] = {
            "id": task_id,
            "sheetId": sheet_id,
            "year": year,
            "month": month,
            "formula": formula,
            "subject": subject,
            "taskNumber": f"Zadanie {mnum}",
            "points": max(1, total_points),
            "relatedTopicIds": classify_related_topics(subject, full_text),
            "promptHtml": prompt_html,
            "operationalVerb": bundle_verb,
            "officialAnswerKey": combined_key,
            "stepByStepJustification": (
                subtasks_out[0]["animatedSteps"][2]["explanationHtml"]
                if subtasks_out
                else text_to_html(combined_key)
            ),
            "pdfPageNumber": bundle_page,
            "pageImageUrl": f"{public_prefix}/page_{bundle_page:02d}.png",
            "media": media_list,
            "subTasks": subtasks_out,
            "taskType": subtasks_out[0]["taskType"] if subtasks_out else "open-text",
            "animatedSteps": (
                subtasks_out[0]["animatedSteps"]
                if subtasks_out
                else build_animated_steps(
                    prompt_text=full_text,
                    operational_verb=bundle_verb,
                    answer_key=combined_key,
                    has_media=bool(media_list),
                )
            ),
        }
        if len(subtasks_out) == 1 and "interactiveTableData" in subtasks_out[0]:
            task_dict["interactiveTableData"] = subtasks_out[0]["interactiveTableData"]
        if len(subtasks_out) == 1 and "officialKeyCropUrl" in subtasks_out[0]:
            task_dict["officialKeyCropUrl"] = subtasks_out[0]["officialKeyCropUrl"]

        tasks_out.append(task_dict)

    adoc.close()
    if zdoc is not None:
        zdoc.close()

    subj_pl = "Biologia" if subject == "biologia" else "Chemia"
    manifest_entry = {
        "id": sheet_id,
        "symbol": symbol,
        "title": f"{subj_pl} PR • CKE {year} ({month}) • {symbol}",
        "pageImageUrls": page_urls,
        "totalBundles": len(tasks_out),
        "totalSubTasks": sum(len(t.get("subTasks", [])) for t in tasks_out),
        "totalPoints": sum(t["points"] for t in tasks_out),
    }
    return tasks_out, manifest_entry


async def polish_subtask_steps_with_deepseek(
    client: Any,
    model: str,
    sem: asyncio.Semaphore,
    subject: str,
    task: dict[str, Any],
) -> None:
    """Optional DeepSeek enhancement for step-by-step animatedSteps when online."""
    prompt = (
        f"Przedmiot: {subject}, {task['taskNumber']} ({task['year']}).\n"
        f"Treść: {re.sub(r'<[^>]+>', ' ', task['promptHtml'])[:900]}\n"
        f"Klucz CKE: {task['officialAnswerKey'][:900]}\n\n"
        "Zwróć JSON z polem `steps` (4 obiekty: stepNumber 1..4, phase: "
        "analiza-ryciny|czasownik-operacyjny|mechanizm|klucz-cke, title, explanationHtml)."
    )
    async with sem:
        resp = await client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "Jesteś egzaminatorem CKE. Tworzysz zwięzłe wyjaśnienia krokowe w JSON."},
                {"role": "user", "content": prompt},
            ],
            response_format={"type": "json_object"},
            temperature=0.2,
            max_tokens=1200,
        )
    data = json.loads(resp.choices[0].message.content or "{}")
    if isinstance(data.get("steps"), list) and len(data["steps"]) == 4:
        task["animatedSteps"] = data["steps"]


def enrich_legacy_task(task: dict[str, Any]) -> dict[str, Any]:
    """Upgrade any starter/historical task with structured 4-phase animatedSteps and subTasks."""
    if not task.get("animatedSteps"):
        task["animatedSteps"] = build_animated_steps(
            prompt_text=re.sub(r"<[^>]+>", " ", task.get("promptHtml", "")),
            operational_verb=task.get("operationalVerb", "Wyjaśnij"),
            answer_key=task.get("officialAnswerKey", ""),
            has_media=bool(task.get("media")),
        )
    if not task.get("subTasks"):
        m_num = re.search(r"(\d+(?:\.\d+)?)", task.get("taskNumber", "1"))
        sub_num = m_num.group(1) if m_num else "1"
        task["subTasks"] = [
            {
                "subTaskNumber": sub_num,
                "points": task.get("points", 1),
                "taskType": task.get("taskType", "open-text"),
                "promptHtml": task.get("promptHtml", ""),
                "operationalVerb": task.get("operationalVerb", "Wyjaśnij"),
                "officialAnswerKey": task.get("officialAnswerKey", ""),
                "animatedSteps": task["animatedSteps"],
            }
        ]
    return task


def load_existing_tasks(subject: str) -> list[dict[str, Any]]:
    path = TARGET_FILES[subject]
    if path.is_file():
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
            if isinstance(data, list):
                return data
        except Exception:
            pass
    return []


def save_tasks(subject: str, tasks: list[dict[str, Any]]) -> None:
    path = TARGET_FILES[subject]
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(tasks, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def save_manifest(manifest: dict[str, Any]) -> None:
    MANIFEST_FILE.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST_FILE.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


async def run_pipeline(args: argparse.Namespace) -> int:
    load_env_files()
    pairs = discover_cke_exam_pairs(args.subject)

    if args.years:
        wanted = {int(y.strip()) for y in args.years.split(",") if y.strip()}
        pairs = [p for p in pairs if p["year"] in wanted]
    elif args.year:
        pairs = [p for p in pairs if p["year"] == args.year]

    if args.formula != "all":
        pairs = [p for p in pairs if p["formula"] == args.formula]

    if args.limit:
        pairs = pairs[: args.limit]

    print(f"Discovered {len(pairs)} paired CKE exam sheet(s) in {locate_oer_root()}:")
    for p in pairs:
        key_name = p["key_path"].name if p["key_path"] else "BRAK KLUCZA"
        print(
            f"  - [{p['subject']}] {p['year']} ({p['month']}, F{p['formula']}): "
            f"{p['exam_path'].name} <-> {key_name}"
        )

    if args.dry_run:
        has_key = bool(os.getenv("DEEPSEEK_API_KEY"))
        print(f"[DRY-RUN] Pipeline ready (PyMuPDF 1:1 crop + Zasady pairing). DEEPSEEK_API_KEY present: {has_key}")
        return 0

    existing_by_subj: dict[str, list[dict[str, Any]]] = {
        "biologia": load_existing_tasks("biologia"),
        "chemia": load_existing_tasks("chemia"),
    }
    manifest: dict[str, Any] = {}
    if MANIFEST_FILE.is_file():
        try:
            manifest = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
        except Exception:
            manifest = {}

    extracted_sheets_keys: set[tuple[str, int, str]] = set()
    extracted_by_subj: dict[str, list[dict[str, Any]]] = {"biologia": [], "chemia": []}

    for pair in pairs:
        tasks, m_entry = extract_exam_bundle_from_pair(pair)
        subj = pair["subject"]
        extracted_sheets_keys.add((subj, pair["year"], pair["month"]))

        # Preserve any hand-curated chapter topic links matched to same subject & year
        legacy_for_sheet = [
            lt for lt in existing_by_subj[subj]
            if lt.get("year") == pair["year"] and lt.get("month") == pair["month"]
        ]
        for t in tasks:
            m_num = re.search(r"(\d+)", t["taskNumber"])
            t_num = m_num.group(1) if m_num else ""
            for lt in legacy_for_sheet:
                lt_num = re.search(r"(\d+)", str(lt.get("taskNumber", "")))
                if lt_num and lt_num.group(1) == t_num:
                    t["relatedTopicIds"] = list(
                        dict.fromkeys([*lt.get("relatedTopicIds", []), *t["relatedTopicIds"]])
                    )

        extracted_by_subj[subj].extend(tasks)
        manifest[m_entry["id"]] = m_entry
        print(
            f"[OK] {subj} {pair['year']} ({pair['month']}): "
            f"{m_entry['totalBundles']} wiązek zadań / {m_entry['totalSubTasks']} podpunktów / "
            f"{m_entry['totalPoints']} pkt | pages={len(m_entry['pageImageUrls'])}"
        )

    if args.use_deepseek and os.getenv("DEEPSEEK_API_KEY"):
        try:
            from openai import AsyncOpenAI  # type: ignore

            client = AsyncOpenAI(
                api_key=os.getenv("DEEPSEEK_API_KEY"),
                base_url=os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com/v1"),
            )
            sem = asyncio.Semaphore(args.concurrency)
            coros = [
                polish_subtask_steps_with_deepseek(
                    client, os.getenv("DEEPSEEK_MODEL", "deepseek-chat"), sem, subj, task
                )
                for subj, tlist in extracted_by_subj.items()
                for task in tlist
            ]
            if coros:
                await asyncio.gather(*coros, return_exceptions=True)
        except Exception as exc:
            print(f"[WARN] DeepSeek enrichment skipped ({exc}); kept deterministic PyMuPDF + Zasady steps.", file=sys.stderr)

    # Merge extracted full sheets cleanly with legacy non-overlapping tasks (2021-2022 etc.)
    for subj in ("biologia", "chemia"):
        if args.subject != "all" and subj != args.subject:
            continue
        kept_legacy = [
            enrich_legacy_task(lt)
            for lt in existing_by_subj[subj]
            if (subj, lt.get("year"), lt.get("month")) not in extracted_sheets_keys
        ]
        merged = extracted_by_subj[subj] + kept_legacy
        save_tasks(subj, merged)
        print(f"Saved {subj}: {len(merged)} task bundles ({sum(len(t.get('subTasks', [])) for t in merged)} subtasks)")

    save_manifest(manifest)
    print(f"Saved CKE sheet manifest -> {MANIFEST_FILE}")
    return 0


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Full 1:1 CKE Matura PDF Extractor + Diagram Cropper + Lemo-Opuscar Key Builder",
    )
    parser.add_argument("--subject", choices=("biologia", "chemia", "all"), default="all")
    parser.add_argument("--year", type=int, default=0, help="Single exam year filter")
    parser.add_argument(
        "--years",
        type=str,
        default="2015,2016,2017,2018,2019,2020,2021,2022,2023,2024",
        help="Comma-separated exam years (default: 2015..2024)",
    )
    parser.add_argument("--formula", choices=("all", "2015", "2023"), default="all")
    parser.add_argument("--limit", type=int, default=0, help="Max PDF pairs to process")
    parser.add_argument("--concurrency", type=int, default=3)
    parser.add_argument("--use-deepseek", action="store_true", help="Optionally polish explanations via DeepSeek API")
    parser.add_argument("--dry-run", action="store_true", help="Discover paired PDFs without writing files")
    return parser.parse_args(argv)


def main() -> int:
    args = parse_args()
    return asyncio.run(run_pipeline(args))


if __name__ == "__main__":
    raise SystemExit(main())
