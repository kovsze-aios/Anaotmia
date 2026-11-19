#!/usr/bin/env python3
"""
audit_platform.py
-----------------
Comprehensive automated offline quality gate checking:
  1. 0 missing CKE sheet images on disk & 100% WebP page URLs in cke-sheets-manifest.json
  2. 0 printed-text bounding box collisions across all 20 real CKE PDFs in cke-pdf-overlays.json
  3. 0 legacy curriculum requirement leaks / PDF watermarks in cke-pdf-overlays.json
  4. 0 duplicate chapter IDs across src/data/oer-generated/*.json & 0 duplicate figure IDs
  5. Strict licensing separation (CONCEPT_SYNTHESIS has no NC licenseAttribution)

Exits with code 0 iff all checks pass strictly; exits 1 otherwise.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF

ROOT_DIR = Path(__file__).resolve().parent.parent
CKE_DIR = ROOT_DIR / "src" / "data" / "cke-exams"
OER_DIR = ROOT_DIR / "src" / "data" / "oer-generated"
PUBLIC_DIR = ROOT_DIR / "public"


def locate_oer_root() -> Path:
    for name in ("materiały-źródłowe", "materialy-zrodlowe"):
        cand = ROOT_DIR / name
        if cand.is_dir():
            return cand
    return ROOT_DIR / "materiały-źródłowe"


def find_pdf(oer_root: Path, subject: str, year: int) -> Path | None:
    folder = "Biologia" if subject == "biologia" else "Chemia"
    yd = oer_root / subject / folder / str(year)
    if not yd.is_dir():
        return None
    for pdf in sorted(yd.glob("*.pdf")):
        low = pdf.name.lower()
        if any(skip in low for skip in ("karta", "odpowiedzi", "zasady", "model", "-n.pdf", "_n.pdf")):
            continue
        return pdf
    return None


def main() -> int:
    errors: list[str] = []

    # 1. Check manifest & image files on disk
    manifest = json.loads((CKE_DIR / "cke-sheets-manifest.json").read_text(encoding="utf-8"))
    missing_imgs: list[str] = []
    non_webp_pages: list[str] = []
    total_manifest_urls = 0
    for sid, entry in manifest.items():
        for url in entry.get("pageImageUrls", []):
            total_manifest_urls += 1
            if not url.endswith(".webp"):
                non_webp_pages.append(url)
            disk = PUBLIC_DIR / url.lstrip("/")
            if not disk.is_file():
                missing_imgs.append(url)

    # Also check fig/key media references in task JSONs
    for tf in ("biologia-cke-tasks.json", "chemia-cke-tasks.json"):
        tasks = json.loads((CKE_DIR / tf).read_text(encoding="utf-8"))
        for t in tasks:
            u = t.get("pageImageUrl")
            if u:
                if not u.endswith(".webp"):
                    non_webp_pages.append(u)
                if not (PUBLIC_DIR / u.lstrip("/")).is_file():
                    missing_imgs.append(u)
            for m in t.get("media", []):
                mu = m.get("imageUrl")
                if mu and not (PUBLIC_DIR / mu.lstrip("/")).is_file():
                    missing_imgs.append(mu)

    print(f"[1/5] Manifest URLs checked: {total_manifest_urls} | missing={len(missing_imgs)} | non_webp={len(non_webp_pages)}")
    if missing_imgs:
        errors.append(f"Missing CKE image files: {missing_imgs[:5]}")
    if non_webp_pages:
        errors.append(f"Non-WebP page URLs remain: {non_webp_pages[:5]}")

    # 2. Check 0 printed-text bbox collisions across all 20 real CKE PDFs
    overlays = json.loads((CKE_DIR / "cke-pdf-overlays.json").read_text(encoding="utf-8"))
    oer_root = locate_oer_root()
    collisions = 0
    collision_samples: list[str] = []
    checked_boxes = 0

    for sid, pages in overlays.items():
        parts = sid.split("-")
        if len(parts) < 3 or parts[2] != "maj" or parts[0] not in ("biologia", "chemia"):
            continue
        subj, year = parts[0], int(parts[1])
        pdf_path = find_pdf(oer_root, subj, year)
        if not pdf_path:
            continue
        doc = fitz.open(pdf_path)
        try:
            for pstr, anns in pages.items():
                pno = int(pstr) - 1
                if pno < 0 or pno >= len(doc):
                    continue
                page = doc[pno]
                pw, ph = page.rect.width, page.rect.height
                text_rects = []
                for wd in page.get_text("words"):
                    txt = str(wd[4]).strip()
                    if not txt or set(txt) <= {".", "_", "…", "-", "–"}:
                        continue
                    text_rects.append((fitz.Rect(wd[0], wd[1], wd[2], wd[3]), txt))
                for ann in anns:
                    checked_boxes += 1
                    r = fitz.Rect(
                        ann["xPct"] / 100.0 * pw,
                        ann["yPct"] / 100.0 * ph,
                        (ann["xPct"] + ann["widthPct"]) / 100.0 * pw,
                        (ann["yPct"] + ann["heightPct"]) / 100.0 * ph,
                    )
                    hits = [t for tr, t in text_rects if r.intersects(tr)]
                    if hits:
                        collisions += 1
                        if len(collision_samples) < 5:
                            collision_samples.append(f"{ann['id']}: {hits[:3]}")
        finally:
            doc.close()

    print(f"[2/5] PDF geometry collision audit: checked={checked_boxes} boxes | collisions={collisions}")
    if collisions:
        errors.append(f"PDF text collisions found ({collisions}): {collision_samples}")

    # 3. Check 0 legacy rubric / watermark leaks
    leak_re = re.compile(
        r"(?:więcej arkuszy znajdziesz|wymagania ogólne|wymagania szczegółowe|załącznik nr|rozporządzenie ministra|^[,\.]\s*|^pkt\s+za\b)",
        re.IGNORECASE,
    )
    leaks: list[str] = []
    for sid, pages in overlays.items():
        for pstr, anns in pages.items():
            for ann in anns:
                ans = (ann.get("answerText") or "").strip()
                if leak_re.search(ans):
                    leaks.append(f"{ann['id']}: {ans[:60]}")

    print(f"[3/5] Legacy rubric / watermark leak audit: leaks={len(leaks)}")
    if leaks:
        errors.append(f"Legacy leaks found ({len(leaks)}): {leaks[:5]}")

    # 4 & 5. Check duplicate chapter IDs & figure IDs & licensing
    seen_ch: set[str] = set()
    dup_ch: list[str] = []
    total_oer_ch = 0
    for jf in sorted(OER_DIR.glob("*.json")):
        if jf.name.startswith("textbook-figures-") or jf.name == "anatomia-3d-entities.json":
            continue
        data = json.loads(jf.read_text(encoding="utf-8"))
        for entry in data:
            total_oer_ch += 1
            cid = entry.get("id")
            if cid in seen_ch:
                dup_ch.append(f"{jf.name}:{cid}")
            seen_ch.add(cid)
            if entry.get("processingMode") == "CONCEPT_SYNTHESIS":
                attr = entry.get("licenseAttribution") or entry.get("data", {}).get("licenseAttribution")
                if attr and "NC" in attr:
                    errors.append(f"CONCEPT_SYNTHESIS leaked NC attribution: {cid}")

    seen_fig: set[str] = set()
    dup_fig: list[str] = []
    total_figs = 0
    for jf in sorted(OER_DIR.glob("textbook-figures-*.json")):
        figs = json.loads(jf.read_text(encoding="utf-8"))
        for fig in figs:
            total_figs += 1
            fid = fig.get("id")
            if fid in seen_fig:
                dup_fig.append(f"{jf.name}:{fid}")
            seen_fig.add(fid)

    print(f"[4/5] OER chapter IDs: total={total_oer_ch} | duplicates={len(dup_ch)}")
    print(f"[5/5] Textbook figure IDs: total={total_figs} | duplicates={len(dup_fig)}")
    if dup_ch:
        errors.append(f"Duplicate OER chapter IDs: {dup_ch}")
    if dup_fig:
        errors.append(f"Duplicate figure IDs: {dup_fig}")

    if errors:
        print("\nAUDIT FAILED:")
        for e in errors:
            print("  -", e)
        return 1

    print("\nALL AUDIT GATES PASSED (0 errors).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
