#!/usr/bin/env python3
"""
fabryka_cke_pdf_overlays.py
---------------------------
Generates exact PDF overlay coordinate mappings & 1:1 solution annotations for
official CKE Matura exam pages (`public/cke-assets/<subject>/<year>_maj/page_*.png`)
so `CkeSolvedPdfPageOverlay` can toggle seamlessly between:
  [ 📄 Pusty arkusz (Do rozwiązania) | ✅ Arkusz rozwiązany (Z naniesionymi odpowiedziami) ]

Strict Model & Workload Division:
  1. Visual Layout & PDF Bounding-Box Mapping:
     Handled by PyMuPDF (`fitz`) block geometry extraction + optional
     Gemini Flash API (`GEMINI_API_KEY` -> `gemini-2.5-flash` / `gemini-2.0-flash`).
  2. Solution Text Synthesis & `Przyczyna → Mechanizm → Skutek` Callouts:
     Handled by official CKE scoring keys + optional DeepSeek API
     (`DEEPSEEK_API_KEY` -> `deepseek-chat`, `max_tokens=8192`).

Usage:
  python scripts/fabryka_cke_pdf_overlays.py
  python scripts/fabryka_cke_pdf_overlays.py --use-gemini-vision --use-deepseek --limit 3
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import re
import sys
import urllib.error
import urllib.request
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

DOTTED_LINE_RE = re.compile(r"^[.\u2026_\-\s]{8,}$")
TASK_HEADER_RE = re.compile(r"\bZadanie\s+(\d+(?:\.\d+)?)\b", re.IGNORECASE)
MC_OPTION_RE = re.compile(r"^\s*([A-F1-4])[.)]\s+")


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


def extract_concise_answer(official_key: str) -> tuple[str, list[str]]:
    """
    Distills an official CKE scoring criterion into:
      1) concise inline fill text suitable for writing into PDF answer lines,
      2) optional single-letter multiple-choice marks (e.g. ['B'] or ['A', 'D']).
    """
    cleaned = official_key.strip()
    if not cleaned:
        return "Brak klucza tekstowego CKE.", []

    # Locate the actual solution block across both F2015 and F2023 CKE key layouts
    solution_part = ""
    sol_match = re.search(
        r"\b(?:Rozwiązanie|Przykładowe\s+poprawne\s+odpowiedzi|Przykładowa\s+odpowiedź|Poprawna\s+odpowiedź)\s*:?\s*([\s\S]+)",
        cleaned,
        flags=re.IGNORECASE,
    )
    if sol_match:
        solution_part = sol_match.group(1)
        solution_part = re.split(
            r"\n\s*(?:Schemat\s+punktowania|Zasady\s+oceniania|Uwag[ai]\s*:|0\s*p(?:kt)?\.?\s*[–-])",
            solution_part,
            maxsplit=1,
            flags=re.IGNORECASE,
        )[0]
    else:
        solution_part = re.split(
            r"\b(?:Schemat\s+punktowania|Zasady\s+oceniania)\b",
            cleaned,
            maxsplit=1,
            flags=re.IGNORECASE,
        )[0]
        solution_part = re.sub(
            r"^(?:Zadanie\s+\d+(?:\.\d+)?(?:\s*\([^)]*\))?\s*:?\s*)?",
            "",
            solution_part.strip(),
            flags=re.IGNORECASE,
        )

    solution_part = solution_part.strip()

    if len(solution_part) < 1:
        m = re.search(r"1\s*p(?:kt)?\.?\s*[–-]\s*([^\n]+)", cleaned)
        solution_part = m.group(1).strip() if m else cleaned

    # Strip repeated "1.3." or single trailing rubric noise and join cleanly
    lines = [
        re.sub(r"\s+", " ", ln).strip()
        for ln in solution_part.splitlines()
        if ln.strip() and not re.match(r"^(?:0\s*pkt|1\s*pkt)", ln.strip(), re.IGNORECASE)
    ]
    concise = " | ".join(lines[:8])
    if len(concise) > 420:
        concise = concise[:417].rsplit(" ", 1)[0] + "..."

    # Detect multiple choice tokens (e.g. "B", "D", "A, C")
    marked: list[str] = []
    if len(concise) <= 24:
        mc_hits = re.findall(r"\b([A-F])\b", concise)
        if mc_hits:
            marked = mc_hits[:3]

    return concise or cleaned[:280], marked


def extract_margin_note(subtask: dict[str, Any]) -> str:
    verb = (subtask.get("operationalVerb") or "").strip()
    steps = subtask.get("animatedSteps") or []
    for st in steps:
        if st.get("phase") == "mechanizm" and st.get("explanationHtml"):
            plain = re.sub(r"<[^>]+>", " ", st["explanationHtml"])
            plain = re.sub(r"\s+", " ", plain).strip()
            plain = re.sub(r"^Przyczyna\s*→\s*Mechanizm\s*→\s*Skutek\s*\([^)]*\)\s*:?\s*", "", plain)
            if plain:
                return (f"[{verb}] " if verb else "") + (plain[:210] + ("..." if len(plain) > 210 else ""))
    key = re.sub(r"\s+", " ", (subtask.get("officialAnswerKey") or "")).strip()
    return (f"[{verb}] " if verb else "") + (key[:180] + ("..." if len(key) > 180 else ""))


def synthesize_solution_with_deepseek(prompt_html: str, official_key: str) -> str | None:
    """Uses DEEPSEEK_API_KEY (deepseek-chat, max_tokens=8192) for concise 1:1 solution wording."""
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    if not api_key:
        return None
    prompt_text = re.sub(r"<[^>]+>", " ", prompt_html or "")
    prompt_text = re.sub(r"\s+", " ", prompt_text).strip()[:700]
    body = {
        "model": "deepseek-chat",
        "max_tokens": 8192,
        "temperature": 0.1,
        "messages": [
            {
                "role": "system",
                "content": (
                    "Jesteś egzaminatorem CKE. Na podstawie polecenia i oficjalnego klucza CKE "
                    "napisz wyłącznie zwięzłą, gotową odpowiedź do wpisania na arkusz maturalny "
                    "(maks. 2 krótkie zdania po polsku, dokładnie zgodne z kluczem CKE 1:1)."
                ),
            },
            {
                "role": "user",
                "content": f"Polecenie: {prompt_text}\nOficjalny klucz CKE: {official_key[:1200]}",
            },
        ],
    }
    req = urllib.request.Request(
        "https://api.deepseek.com/chat/completions",
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            payload = json.loads(resp.read().decode("utf-8"))
            return payload["choices"][0]["message"]["content"].strip()
    except Exception:
        return None


def map_layout_with_gemini_flash(image_path: Path, task_hints: list[str]) -> list[dict[str, Any]] | None:
    """
    Uses GEMINI_API_KEY (`gemini-2.5-flash` / fallback `gemini-2.0-flash`)
    strictly for visual layout coordinates & PDF bounding-box mapping.
    """
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key or not image_path.is_file():
        return None

    img_b64 = base64.b64encode(image_path.read_bytes()).decode("ascii")
    hints_str = ", ".join(task_hints[:8]) or "Zadania CKE na stronie"
    prompt = (
        f"Return a compact JSON array mapping the answer entry regions on this Polish CKE exam page "
        f"for tasks [{hints_str}]. Each element: "
        '{"taskNumber":"1.1","boxType":"open-answer|true-false|multiple-choice|calculation-grid|table-fill",'
        '"xPct":12,"yPct":35,"widthPct":76,"heightPct":11}. Percentages 0..100 relative to page width/height.'
    )
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt},
                    {"inline_data": {"mime_type": "image/png", "data": img_b64}},
                ]
            }
        ],
        "generationConfig": {"responseMimeType": "application/json", "temperature": 0.1},
    }

    for model in ("gemini-2.5-flash", "gemini-2.0-flash"):
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=25) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                raw_text = data["candidates"][0]["content"]["parts"][0]["text"]
                parsed = json.loads(raw_text)
                if isinstance(parsed, list):
                    return parsed
        except (urllib.error.URLError, KeyError, ValueError):
            continue
    return None


def scan_pdf_task_anchors(pdf_path: Path) -> dict[str, dict[str, Any]]:
    """
    Uses PyMuPDF (`fitz`) to find exact page + normalized bounding boxes (%) for
    every `Zadanie X` / `Zadanie X.Y` header and its corresponding answer region
    (dotted lines, P/F table, MC options, or empty workspace gap before next header).
    """
    anchors: dict[str, dict[str, Any]] = {}
    if not pdf_path or not pdf_path.is_file():
        return anchors

    doc = fitz.open(pdf_path)
    try:
        # Collect ordered events across pages
        for pno in range(len(doc)):
            page = doc[pno]
            w = max(1.0, float(page.rect.width))
            h = max(1.0, float(page.rect.height))
            blocks = sorted(page.get_text("blocks"), key=lambda b: (round(b[1], 1), b[0]))

            page_events: list[dict[str, Any]] = []
            for b in blocks:
                txt = (b[4] or "").strip()
                if not txt:
                    continue
                if re.match(r"^(?:Strona\s+\d+|EBIP|ECHP|MBI|MCH)", txt):
                    continue
                x0 = (b[0] / w) * 100.0
                y0 = (b[1] / h) * 100.0
                x1 = (b[2] / w) * 100.0
                y1 = (b[3] / h) * 100.0

                task_m = TASK_HEADER_RE.search(txt)
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
                        "task_num": task_m.group(1) if task_m else None,
                        "is_dots": is_dots,
                        "is_pf": is_pf,
                        "is_mc": is_mc,
                    }
                )

            # Associate each subtask header on this page with its answer area below it
            header_indices = [i for i, ev in enumerate(page_events) if ev["task_num"]]
            for h_idx_pos, ev_idx in enumerate(header_indices):
                ev = page_events[ev_idx]
                tnum = ev["task_num"]
                next_ev_idx = (
                    header_indices[h_idx_pos + 1]
                    if h_idx_pos + 1 < len(header_indices)
                    else len(page_events)
                )
                following = page_events[ev_idx + 1 : next_ev_idx]

                dot_blocks = [f for f in following if f["is_dots"]]
                pf_blocks = [f for f in following if f["is_pf"]]
                mc_blocks = [f for f in following if f["is_mc"]]

                if dot_blocks:
                    bx0 = min(f["x0"] for f in dot_blocks)
                    by0 = min(f["y0"] for f in dot_blocks)
                    bx1 = max(f["x1"] for f in dot_blocks)
                    by1 = max(f["y1"] for f in dot_blocks)
                    box_type = "open-answer"
                elif pf_blocks:
                    bx0 = 12.0
                    by0 = min(f["y0"] for f in pf_blocks)
                    bx1 = 88.0
                    by1 = min(88.0, max(f["y1"] for f in pf_blocks) + 9.0)
                    box_type = "true-false"
                elif mc_blocks:
                    bx0 = min(f["x0"] for f in mc_blocks)
                    by0 = min(f["y0"] for f in mc_blocks)
                    bx1 = min(88.0, max(f["x1"] for f in mc_blocks) + 12.0)
                    by1 = max(f["y1"] for f in mc_blocks)
                    box_type = "multiple-choice"
                else:
                    bx0 = 12.0
                    by0 = min(84.0, ev["y1"] + 1.2)
                    bx1 = 88.0
                    next_y0 = page_events[next_ev_idx]["y0"] if next_ev_idx < len(page_events) else 90.0
                    by1 = max(by0 + 6.0, min(90.0, next_y0 - 1.5))
                    box_type = "calculation-grid" if (by1 - by0) >= 12.0 else "table-fill"

                # Prefer subtask-level coordinate entry (`1.1`, `2.3`) over bundle header (`1`)
                anchors[tnum] = {
                    "pageNumber": pno + 1,
                    "boxType": box_type,
                    "xPct": round(max(6.0, bx0), 1),
                    "yPct": round(max(6.0, min(86.0, by0)), 1),
                    "widthPct": round(min(88.0, max(36.0, bx1 - bx0)), 1),
                    "heightPct": round(min(45.0, max(5.5, by1 - by0)), 1),
                }
    finally:
        doc.close()

    return anchors


def build_overlays(use_gemini_vision: bool = False, use_deepseek: bool = False, limit: int | None = None) -> dict[str, dict[str, list[dict[str, Any]]]]:
    overlays: dict[str, dict[str, list[dict[str, Any]]]] = {}
    pdf_cache: dict[tuple[str, int, str], dict[str, dict[str, Any]]] = {}

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
            year = int(task["year"])
            month = task["month"]
            default_page = int(task.get("pdfPageNumber") or 4)

            cache_key = (subject, year, month)
            if cache_key not in pdf_cache:
                pdf_path = find_exam_pdf(subject, year, month)
                pdf_cache[cache_key] = scan_pdf_task_anchors(pdf_path) if pdf_path else {}

            anchors = pdf_cache[cache_key]
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
                page_no = int(anchor["pageNumber"]) if anchor else default_page

                # Optional Gemini Flash visual verification hook (strictly coordinate layout)
                if use_gemini_vision and anchor is None:
                    img_path = ASSETS_DIR / subject / f"{year}_{month}" / f"page_{page_no:02d}.png"
                    gemini_boxes = map_layout_with_gemini_flash(img_path, [clean_num])
                    if gemini_boxes:
                        first_box = gemini_boxes[0]
                        anchor = {
                            "pageNumber": page_no,
                            "boxType": first_box.get("boxType", "open-answer"),
                            "xPct": float(first_box.get("xPct", 12.0)),
                            "yPct": float(first_box.get("yPct", 28.0)),
                            "widthPct": float(first_box.get("widthPct", 76.0)),
                            "heightPct": float(first_box.get("heightPct", 10.0)),
                        }

                if not anchor:
                    # Stagger fallback vertical slots cleanly if anchor wasn't found in PDF
                    y_pct = min(76.0, 20.0 + (fallback_slot % 3) * 24.0)
                    fallback_slot += 1
                    st_type = sub.get("taskType", "open-text")
                    btype = (
                        "true-false"
                        if st_type == "true-false-table"
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

                official_key = sub.get("officialAnswerKey") or task.get("officialAnswerKey") or ""
                concise_answer, marked_options = extract_concise_answer(official_key)
                margin_note = extract_margin_note(sub)

                if re.match(r"^(?:za\s|1\s*p)", concise_answer, re.IGNORECASE) and "•" in margin_note:
                    bullet_text = re.sub(r"^\[[^\]]+\]\s*", "", margin_note).strip()
                    if bullet_text:
                        concise_answer = bullet_text

                if use_deepseek:
                    ds_answer = synthesize_solution_with_deepseek(sub.get("promptHtml", ""), official_key)
                    if ds_answer:
                        concise_answer = ds_answer

                truth_choices: list[str] = []
                tbl = sub.get("interactiveTableData")
                if tbl and isinstance(tbl, dict):
                    for row in tbl.get("rows", []):
                        ans = str(row.get("correctAnswer", "")).strip().upper()
                        if ans in ("P", "F"):
                            truth_choices.append(ans)
                    if truth_choices and anchor["boxType"] == "open-answer":
                        anchor["boxType"] = "true-false"

                page_key = str(page_no)
                ann = {
                    "id": f"{sheet_id}-p{page_no}-z{clean_num}",
                    "taskNumber": task.get("taskNumber", f"Zadanie {clean_num}"),
                    "subTaskNumber": clean_num,
                    "pageNumber": page_no,
                    "boxType": anchor["boxType"],
                    "xPct": anchor["xPct"],
                    "yPct": anchor["yPct"],
                    "widthPct": anchor["widthPct"],
                    "heightPct": anchor["heightPct"],
                    "pointsLabel": f"0–{sub.get('points', task.get('points', 1))} pkt",
                    "operationalVerb": sub.get("operationalVerb") or task.get("operationalVerb") or "",
                    "answerText": concise_answer,
                    "marginNote": margin_note,
                }
                if marked_options:
                    ann["markedOptions"] = marked_options
                if truth_choices:
                    ann["truthChoices"] = truth_choices

                sheet_pages.setdefault(page_key, []).append(ann)

    return overlays


def main() -> int:
    load_env_files()
    parser = argparse.ArgumentParser(description="Build CKE solved PDF page overlays (PyMuPDF + Gemini Flash + DeepSeek).")
    parser.add_argument("--use-gemini-vision", action="store_true", help="Refine missing bounding boxes via GEMINI_API_KEY (gemini-2.5-flash).")
    parser.add_argument("--use-deepseek", action="store_true", help="Refine solution fills via DEEPSEEK_API_KEY (deepseek-chat).")
    parser.add_argument("--limit", type=int, default=None, help="Optional cap on tasks processed.")
    args = parser.parse_args()

    overlays = build_overlays(
        use_gemini_vision=args.use_gemini_vision,
        use_deepseek=args.use_deepseek,
        limit=args.limit,
    )
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
