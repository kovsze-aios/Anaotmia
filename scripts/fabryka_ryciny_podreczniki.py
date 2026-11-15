#!/usr/bin/env python3
"""
fabryka_ryciny_podreczniki.py
-----------------------------
Copyright-Safe Interactive Textbook Figures Pipeline (2D-to-3D Bridge & Image Occlusion).

Classifies every textbook PDF in `materiały-źródłowe/` into:
  1. `extracted-asset`: Permissive `_CC-BY.pdf` / `_CC-BY-SA.pdf` (without `_NC` / `CK12`)
     -> Extracts high-resolution figures (>180x180 px) using PyMuPDF (`fitz`) into
        `public/textbook-assets/<subject>/` with mandatory `licenseAttribution`.
  2. `cleanroom-svg-schematic`: Restricted / copyrighted / NC sources (e.g., Bochenek)
     -> Never copies raw raster images; emits structured `cleanroom-svg-schematic` specs
        + educational hotspots & `lemo-opuscar` step-by-step animations.

Usage:
  python scripts/fabryka_ryciny_podreczniki.py --dry-run
  python scripts/fabryka_ryciny_podreczniki.py --extract-samples --subject anatomia
"""

from __future__ import annotations

import argparse
import io
import json
import re
import sys
from pathlib import Path
from typing import Any

try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None  # type: ignore[assignment]

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from deepseek_cleanroom import ROOT_DIR, classify_source_file  # noqa: E402

MATERIALS_DIR = ROOT_DIR / "materiały-źródłowe"
PUBLIC_ASSETS_DIR = ROOT_DIR / "public" / "textbook-assets"
GENERATED_DIR = ROOT_DIR / "src" / "data" / "oer-generated"

SAMPLE_OPENSTAX_TOPICS: list[dict[str, Any]] = [
    {
        "figureId": "fig-anat-osteon-szpik",
        "filename": "openstax-osteon-bone.png",
        "keywords": ["osteon", "haversian canal", "lamellae", "spongy bone"],
        "licenseAttribution": "Rycina źródłowa OER: OpenStax Anatomy & Physiology (Licencja CC BY 4.0)",
    },
    {
        "figureId": "fig-anat-serce-zastawki",
        "filename": "openstax-heart-section.png",
        "keywords": ["internal anatomy of the heart", "tricuspid valve", "mitral valve", "bicuspid valve"],
        "licenseAttribution": "Rycina źródłowa OER: OpenStax Anatomy & Physiology (Licencja CC BY 4.0)",
    },
    {
        "figureId": "fig-anat-splot-ramienny",
        "filename": "openstax-brachial-plexus.png",
        "keywords": ["brachial plexus", "musculocutaneous nerve", "ulnar nerve", "radial nerve"],
        "licenseAttribution": "Rycina źródłowa OER: OpenStax Anatomy & Physiology (Licencja CC BY 4.0)",
    },
    {
        "figureId": "fig-anat-kolo-willisa",
        "filename": "openstax-willis-circle.png",
        "keywords": ["circle of willis", "cerebral arterial circle", "basilar artery"],
        "licenseAttribution": "Rycina źródłowa OER: OpenStax Anatomy & Physiology (Licencja CC BY 4.0)",
    },
    {
        "figureId": "fig-anat-nefron-nerka",
        "filename": "openstax-nephron.png",
        "keywords": ["renal corpuscle", "loop of henle", "proximal convoluted tubule", "bowman"],
        "licenseAttribution": "Rycina źródłowa OER: OpenStax Anatomy & Physiology (Licencja CC BY 4.0)",
    },
    {
        "figureId": "fig-anat-pluca-pecherzyk",
        "filename": "openstax-lungs-alveoli.png",
        "keywords": ["respiratory zone", "alveolus", "alveoli", "bronchial tree"],
        "licenseAttribution": "Rycina źródłowa OER: OpenStax Anatomy & Physiology (Licencja CC BY 4.0)",
    },
]


def classify_figure_rights(pdf_path: Path) -> dict[str, Any]:
    """
    Determine whether raw images may be extracted from a PDF (`extracted-asset`)
    or whether it is strictly restricted to `cleanroom-svg-schematic`.
    Note: OpenStax *_CC-BY.pdf textbooks grant CC BY 4.0 for educational figures.
    All NC, CK-12, and traditional copyrighted sources (e.g. Bochenek) remain strictly
    Clean-Room vector schematics.
    """
    text_cls = classify_source_file(pdf_path)
    lower = pdf_path.name.lower()
    is_nc = bool(re.search(r"(?:^|[_\-.])nc(?:[_\-.]|$)|cc-by-nc", lower))
    is_ck12 = "ck12" in lower or "ck-12" in lower
    has_cc_by = bool(re.search(r"_cc-by(?:-sa)?\.pdf$", lower))

    if has_cc_by and not is_nc and not is_ck12:
        if "openstax" in lower:
            attr = "OpenStax Anatomy & Physiology / Biology (Licencja CC BY 4.0)"
        elif "openagh" in lower:
            attr = "Open AGH (Licencja CC BY-SA 4.0)"
        else:
            attr = f"Zasób otwarty OER: {pdf_path.stem} (Licencja CC BY / CC BY-SA)"
        return {
            "file": str(pdf_path),
            "renderMode": "extracted-asset",
            "textPipelineMode": text_cls["mode"],
            "licenseAttribution": attr,
        }

    return {
        "file": str(pdf_path),
        "renderMode": "cleanroom-svg-schematic",
        "textPipelineMode": text_cls["mode"],
        "reason": text_cls["reason"],
        "licenseAttribution": None,
    }


SUBJECT_SOURCE_MAP: dict[str, tuple[str, str]] = {
    "anatomia": ("anatomia", "OpenStax_Anatomy_and_Physiology_1e_CC-BY.pdf"),
    "fizjologia": ("anatomia", "OpenStax_Anatomy_and_Physiology_1e_CC-BY.pdf"),
    "biologia": ("biologia", "OpenStax_Biology_1e_CC-BY.pdf"),
    "chemia": ("chemia", "OpenStax_Chemistry_1e_CC-BY.pdf"),
}


def scan_library(subject_filter: str | None = None) -> list[dict[str, Any]]:
    if not MATERIALS_DIR.is_dir():
        return []
    effective_filter = (
        SUBJECT_SOURCE_MAP.get(subject_filter.lower(), (subject_filter.lower(), ""))[0]
        if subject_filter
        else None
    )
    results: list[dict[str, Any]] = []
    for pdf in sorted(MATERIALS_DIR.rglob("*.pdf")):
        subj = pdf.parent.name
        if effective_filter and subj.lower() != effective_filter.lower():
            continue
        entry = classify_figure_rights(pdf)
        entry["subject"] = subj
        results.append(entry)
    return results


def count_generated_schematics(subject_filter: str | None = None) -> dict[str, int]:
    """Count curated interactive schematics per subject in src/data/oer-generated/."""
    counts: dict[str, int] = {}
    if not GENERATED_DIR.is_dir():
        return counts
    for path in sorted(GENERATED_DIR.glob("textbook-figures-*.json")):
        subj = path.stem.replace("textbook-figures-", "")
        if subject_filter and subj.lower() != subject_filter.lower():
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
            counts[subj] = len(data) if isinstance(data, list) else 0
        except Exception:
            counts[subj] = 0
    return counts


def _find_best_page_for_keywords(doc: Any, keywords: list[str]) -> int | None:
    best_page: int | None = None
    best_score = 0
    # Skip initial front-matter / TOC pages so we hit real chapter figures
    start_idx = min(20, len(doc))
    for pno in range(start_idx, len(doc)):
        text = doc[pno].get_text("text").lower()
        score = sum(2 if kw in text else 0 for kw in keywords)
        if score == 0:
            continue
        if "figure " in text:
            score += 2
        imgs = doc[pno].get_images(full=True)
        if len(imgs) > 0:
            score += 3
        if score > best_score:
            best_score = score
            best_page = pno
            if score >= len(keywords) * 2 + 5:
                break
    return best_page


def extract_best_figure_from_page(
    doc: Any, page_no: int, out_path: Path
) -> tuple[int, int] | None:
    """
    Extract the largest embedded figure (>180x180 px) on a page, or render
    the top figure block at 2x DPI if vector/composited labels are part of it.
    """
    page = doc[page_no]
    images = page.get_images(full=True)

    best_img_info = None
    best_area = 0
    for img in images:
        xref = img[0]
        width = img[2]
        height = img[3]
        if width < 180 or height < 180:
            continue
        area = width * height
        if area > best_area:
            # Find its bounding rect on the page if possible
            rects = page.get_image_rects(xref)
            best_area = area
            best_img_info = (xref, width, height, rects[0] if rects else None)

    out_path.parent.mkdir(parents=True, exist_ok=True)

    # Prefer rendering the exact bbox with its vector callout labels if rect covers > 15% of page width
    if best_img_info and best_img_info[3] is not None:
        rect = best_img_info[3]
        # Expand slightly to include OpenStax figure callout labels around the artwork
        clip = fitz.Rect(
            max(page.rect.x0 + 24, rect.x0 - 48),
            max(page.rect.y0 + 36, rect.y0 - 28),
            min(page.rect.x1 - 24, rect.x1 + 48),
            min(page.rect.y1 - 36, rect.y1 + 28),
        )
        if clip.width >= 200 and clip.height >= 160:
            pix = page.get_pixmap(matrix=fitz.Matrix(2.0, 2.0), clip=clip, alpha=False)
            pix.save(str(out_path))
            return (pix.width, pix.height)

    # Fallback: extract raw bitmap from xref
    if best_img_info:
        xref = best_img_info[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n - pix.alpha > 3:  # CMYK -> RGB
            pix = fitz.Pixmap(fitz.csRGB, pix)
        pix.save(str(out_path))
        return (pix.width, pix.height)

    return None


def run_extract_samples(subject: str = "anatomia") -> dict[str, dict[str, Any]]:
    if fitz is None:
        print("[ERROR] PyMuPDF (fitz) is not installed.", file=sys.stderr)
        return {}

    mapped_dir, default_pdf = SUBJECT_SOURCE_MAP.get(
        subject.lower(), (subject.lower(), "OpenStax_Anatomy_and_Physiology_1e_CC-BY.pdf")
    )
    pdf_path = MATERIALS_DIR / mapped_dir / default_pdf
    if not pdf_path.is_file():
        print(f"[WARN] Source PDF not found: {pdf_path}")
        return {}

    rights = classify_figure_rights(pdf_path)
    if rights["renderMode"] != "extracted-asset":
        print(f"[BLOCKED] License check failed for {pdf_path.name}: {rights}")
        return {}

    if subject.lower() not in ("anatomia",):
        print(
            f"[INFO] Subject '{subject}' currently uses Clean-Room SVG schematics "
            f"(verified source PDF: {pdf_path.name}, mode={rights['renderMode']})."
        )
        return {}

    out_dir = PUBLIC_ASSETS_DIR / subject
    out_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(str(pdf_path))
    manifest: dict[str, dict[str, Any]] = {}

    for spec in SAMPLE_OPENSTAX_TOPICS:
        page_no = _find_best_page_for_keywords(doc, spec["keywords"])
        if page_no is None:
            print(f"[SKIP] No matching page found for {spec['figureId']}")
            continue

        out_path = out_dir / spec["filename"]
        dims = extract_best_figure_from_page(doc, page_no, out_path)
        if dims is None:
            print(f"[SKIP] No suitable image on page {page_no + 1} for {spec['figureId']}")
            continue

        w, h = dims
        image_url = f"/textbook-assets/{subject}/{spec['filename']}"
        manifest[spec["figureId"]] = {
            "imageUrl": image_url,
            "width": w,
            "height": h,
            "sourcePage": page_no + 1,
            "licenseAttribution": spec["licenseAttribution"],
        }
        print(f"[OK] {spec['figureId']} -> {image_url} ({w}x{h} px, p.{page_no + 1})")

    doc.close()
    return manifest


def main() -> int:
    parser = argparse.ArgumentParser(
        description="License-Aware Interactive Textbook Figures Pipeline"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Inspect PDF rights & classify extracted-asset vs cleanroom-svg-schematic without writing files.",
    )
    parser.add_argument(
        "--extract-samples",
        action="store_true",
        help="Extract verified CC-BY sample figures from OpenStax Anatomy & Physiology.",
    )
    parser.add_argument(
        "--subject",
        default="anatomia",
        choices=["anatomia", "fizjologia", "biologia", "chemia"],
        help="Subject to inspect or process (default: anatomia).",
    )
    args = parser.parse_args()

    inventory = scan_library(args.subject if args.dry_run and args.subject else None)
    schematic_counts = count_generated_schematics(
        args.subject if args.dry_run and args.subject else None
    )
    extracted_count = sum(1 for x in inventory if x["renderMode"] == "extracted-asset")
    cleanroom_count = sum(1 for x in inventory if x["renderMode"] == "cleanroom-svg-schematic")
    curated_count = sum(schematic_counts.values())

    print(
        f"Scanned {len(inventory)} PDF(s): "
        f"{extracted_count} eligible for CC-BY image extraction (`extracted-asset`), "
        f"{cleanroom_count} restricted to `cleanroom-svg-schematic`; "
        f"{curated_count} curated interactive figure(s) ({schematic_counts})."
    )
    for item in inventory:
        name = Path(item["file"]).name
        mode = item["renderMode"]
        extra = item.get("licenseAttribution") or item.get("reason") or ""
        print(f"  - [{item['subject']}] {name} -> {mode} ({extra})")

    if args.dry_run:
        print("DRY RUN complete. No assets written.")
        return 0

    if args.extract_samples:
        manifest = run_extract_samples(args.subject)
        print(f"Extracted {len(manifest)} sample CC-BY figure(s).")
        return 0

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
