#!/usr/bin/env python3
"""
fabryka_anatomia_3d.py
----------------------
License-safe, Clean-Room DeepSeek generator for 3D anatomical entity textbook
cards and spatial sub-structure pins (`AnatomicalEntity` & `AnatomicalSubPin`).

Reads `src/data/discovered-meshes.json` (plus optional anatomical reference
sources classified via `classify_source_file`) and synthesizes 100% original
Polish anatomical textbook cards (Nomenclature PL/Lat, Topography & Structure,
Vascularization & Innervation, Physiology, Clinical Notes, Sub-Pins) in
`src/data/oer-generated/anatomia-3d-entities.json`.

Usage:
  python scripts/fabryka_anatomia_3d.py --dry-run
  python scripts/fabryka_anatomia_3d.py --limit 1
  python scripts/fabryka_anatomia_3d.py --limit 10 --concurrency 4
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Any

for stream_name in ("stdout", "stderr"):
    stream = getattr(sys, stream_name, None)
    if stream and hasattr(stream, "reconfigure"):
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

ROOT_DIR = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = Path(__file__).resolve().parent
DISCOVERED_MESHES_FILE = ROOT_DIR / "src" / "data" / "discovered-meshes.json"
CACHE_FILE = SCRIPTS_DIR / ".cache" / "anatomia_3d_progress.json"
OUTPUT_FILE = ROOT_DIR / "src" / "data" / "oer-generated" / "anatomia-3d-entities.json"

sys.path.insert(0, str(SCRIPTS_DIR))
from deepseek_cleanroom import classify_source_file, load_env_files  # noqa: E402


ANATOMY_STEP1_FACTS_PROMPT = """Jesteś anatomem pracującym w trybie CLEAN-ROOM.
Dla wskazanej struktury anatomicznej z modelu 3D (BodyParts3D / FMA) sporządź wyłącznie suchy, obiektywny arkusz niepodlegających prawu autorskiemu faktów naukowych (bez żadnych zdań literackich).

Zwróć wyłącznie poprawny obiekt JSON:
{
  "meshId": "angielska nazwa struktury lowercase",
  "plName": "Polska nazwa",
  "latinName": "Nazwa łacińska (Terminologia Anatomica)",
  "system": "Nazwa układu po polsku",
  "subStructures": [
    {
      "id": "kebab-case-id",
      "labelPl": "Polska nazwa podstruktury",
      "labelLat": "Łacińska nazwa podstruktury",
      "keyFactsTopography": ["Suchy fakt topograficzny"],
      "keyFactsVesselsNerves": ["Tętnica / żyła / nerw zaopatrujący"],
      "keyFactsPhysiology": ["Główna funkcja fizjologiczna"],
      "clinicalKeywords": ["Jednostka chorobowa / objaw / korelacja maturalna"],
      "normalizedOffset": [0.0, 0.0, 0.15]
    }
  ]
}"""


ANATOMY_STEP2_SYNTHESIS_PROMPT = """Jesteś profesorem anatomii prawidłowej i klinicznej.
Na podstawie WYŁĄCZNIE poniższego suchego arkusza faktów anatomicznych napisz od zera oryginalną, spójną kartę edukacyjną po polsku dla Atlasu 3D.

Zwróć wyłącznie poprawny obiekt JSON o dokładnie następującej strukturze:
{
  "id": "lowercase-mesh-id",
  "meshId": "lowercase-mesh-id",
  "namePl": "Polska nazwa narządu",
  "nameLat": "Łacińska nazwa narządu",
  "system": "Nazwa układu (np. Układ krążenia)",
  "summary": "Zwięzłe 1-zdaniowe podsumowanie do dymka podglądu.",
  "forms": ["mianownik", "dopełniacz", "celownik", "biernik", "narzędnik", "forma łacińska"],
  "pins": [
    {
      "id": "kebab-case-pin-id",
      "meshNodeName": "angielska nazwa podstruktury lub narządu",
      "labelPl": "Polska nazwa podstruktury",
      "labelLat": "Łacińska nazwa podstruktury",
      "topographyAndStructure": "Dokładny opis topografii i budowy makro-/mikroskopowej.",
      "vascularizationAndInnervation": "Unaczynienie tętnicze/żylne i unerwienie.",
      "physiologyAndFunction": "Rola fizjologiczna i mechanizm działania.",
      "clinicalNotes": "Korelacje kliniczne i maturalne.",
      "position": [0.0, 0.0, 0.15]
    }
  ]
}"""


def load_discovered_meshes() -> list[dict[str, Any]]:
    if not DISCOVERED_MESHES_FILE.is_file():
        return []
    data = json.loads(DISCOVERED_MESHES_FILE.read_text(encoding="utf-8"))
    priority = data.get("priorityMeshes") or []
    concepts = data.get("concepts") or []
    seen: set[str] = set()
    ordered: list[dict[str, Any]] = []
    for item in [*priority, *concepts]:
        name = str(item.get("name") or "").strip().lower()
        if not name or name in seen:
            continue
        seen.add(name)
        ordered.append(item)
    return ordered


def load_output_entities() -> list[dict[str, Any]]:
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    if OUTPUT_FILE.is_file():
        try:
            data = json.loads(OUTPUT_FILE.read_text(encoding="utf-8"))
            if isinstance(data, list):
                return data
        except Exception:
            pass
    return []


def save_output_entities(items: list[dict[str, Any]]) -> None:
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        json.dumps(items, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


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


async def synthesize_anatomy_entity(
    client: Any,
    model: str,
    sem: asyncio.Semaphore,
    mesh: dict[str, Any],
) -> dict[str, Any]:
    mesh_name = str(mesh.get("name") or "").strip().lower()
    pl_hint = mesh.get("pl") or ""
    latin_hint = mesh.get("latin") or ""
    sample_elements = ", ".join(
        el.get("name", "") for el in (mesh.get("sampleElements") or [])[:8] if el.get("name")
    )

    step1_prompt = (
        f"Struktura 3D (BodyParts3D): {mesh_name}\n"
        f"Polski termin: {pl_hint}\n"
        f"Łaciński termin: {latin_hint}\n"
        f"Powiązane pod-siatki 3D: {sample_elements or 'brak szczegółowej listy'}\n"
        "Wygeneruj 3–4 najważniejsze podstruktury anatomiczne (piny 3D) z normalizowanymi współrzędnymi [x, y, z] w zakresie [-0.45, 0.45]."
    )

    async with sem:
        step1_resp = await client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": ANATOMY_STEP1_FACTS_PROMPT},
                {"role": "user", "content": step1_prompt},
            ],
            response_format={"type": "json_object"},
            temperature=0.1,
            max_tokens=1600,
        )
        facts_json = step1_resp.choices[0].message.content or "{}"

        step2_resp = await client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": ANATOMY_STEP2_SYNTHESIS_PROMPT},
                {
                    "role": "user",
                    "content": f"SUCHY ARKUSZ FAKTÓW ANATOMICZNYCH (CLEAN-ROOM):\n{facts_json}",
                },
            ],
            response_format={"type": "json_object"},
            temperature=0.35,
            max_tokens=2800,
        )

    parsed = json.loads(step2_resp.choices[0].message.content or "{}")
    parsed["id"] = mesh_name
    parsed["meshId"] = mesh_name
    parsed["processingMode"] = "CONCEPT_SYNTHESIS"
    if not isinstance(parsed.get("pins"), list):
        parsed["pins"] = []
    for idx, pin in enumerate(parsed["pins"]):
        if not isinstance(pin, dict):
            continue
        pin.setdefault("id", f"{mesh_name.replace(' ', '-')}-pin-{idx + 1}")
        pos = pin.get("position")
        if not (isinstance(pos, list) and len(pos) == 3):
            pin["position"] = [0.0, 0.0, 0.15]
    return parsed


async def run_pipeline(args: argparse.Namespace) -> int:
    load_env_files()
    meshes = load_discovered_meshes()
    oer_anatomy_dir = ROOT_DIR / "materiały-źródłowe" / "anatomia"
    ref_pdfs = sorted(oer_anatomy_dir.glob("*.pdf")) if oer_anatomy_dir.is_dir() else []

    print(f"Discovered 3D meshes in registry: {len(meshes)}")
    print(f"Reference anatomy PDFs in materiały-źródłowe/anatomia: {len(ref_pdfs)}")
    for pdf in ref_pdfs:
        cls = classify_source_file(pdf)
        print(f"  - [{cls['mode']}] {pdf.name} -> {cls['license_tag']}")

    if args.dry_run:
        has_key = bool(os.getenv("DEEPSEEK_API_KEY"))
        print(f"\n[DRY-RUN] fabryka_anatomia_3d ready (Mode: CONCEPT_SYNTHESIS Clean-Room).")
        print(f"[DRY-RUN] DEEPSEEK_API_KEY present: {has_key}")
        sample = ", ".join(m.get("name", "") for m in meshes[:8])
        print(f"[DRY-RUN] Przykładowe siatki 3D: {sample}")
        print(f"[DRY-RUN] Wyjście docelowe: {OUTPUT_FILE}")
        return 0

    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key:
        print("[ERROR] Brak zmiennej DEEPSEEK_API_KEY w .env.local / .env.", file=sys.stderr)
        return 1

    try:
        from openai import AsyncOpenAI  # type: ignore
    except ImportError:
        print("[ERROR] Zainstaluj pakiet openai: pip install openai", file=sys.stderr)
        return 1

    client = AsyncOpenAI(
        api_key=api_key,
        base_url=os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com/v1"),
    )
    model = os.getenv("DEEPSEEK_MODEL", "deepseek-chat")
    sem = asyncio.Semaphore(args.concurrency)
    cache = load_cache()
    completed = cache.setdefault("completed", {})

    existing = load_output_entities()
    by_id = {str(item.get("id", "")).lower(): item for item in existing if item.get("id")}

    candidates = []
    for m in meshes:
        key = str(m.get("name", "")).lower()
        if not key:
            continue
        if key in completed and not args.force:
            continue
        candidates.append(m)
        if args.limit and len(candidates) >= args.limit:
            break

    if not candidates:
        print("Brak nowych siatek 3D do przetworzenia.")
        return 0

    print(f"Syntetyzowanie kart 3D dla {len(candidates)} struktur w trybie CONCEPT_SYNTHESIS...")
    coros = [synthesize_anatomy_entity(client, model, sem, m) for m in candidates]
    results = await asyncio.gather(*coros, return_exceptions=True)

    added = 0
    for mesh, res in zip(candidates, results):
        key = str(mesh.get("name", "")).lower()
        if isinstance(res, Exception):
            print(f"  [ERR] {key}: {res}", file=sys.stderr)
            continue
        by_id[key] = res
        completed[key] = True
        added += 1

    save_output_entities(list(by_id.values()))
    save_cache(cache)
    print(f"Zapisano {added} nowych kart 3D (łącznie: {len(by_id)}) -> {OUTPUT_FILE}")
    return 0


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Clean-Room DeepSeek generator for 3D Anatomical Entities & Sub-Pins",
    )
    parser.add_argument("--limit", type=int, default=0, help="Max 3D structures to process (0 = all)")
    parser.add_argument("--concurrency", type=int, default=4, help="Max concurrent API calls")
    parser.add_argument("--force", action="store_true", help="Regenerate cached entities")
    parser.add_argument("--dry-run", action="store_true", help="Inspect without API calls")
    return parser.parse_args(argv)


def main() -> int:
    args = parse_args()
    return asyncio.run(run_pipeline(args))


if __name__ == "__main__":
    raise SystemExit(main())
