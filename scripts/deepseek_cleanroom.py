#!/usr/bin/env python3
"""
deepseek_cleanroom.py
---------------------
Shared license-aware & copyright-safe DeepSeek synthesis engine for the
Medycyna / Matura CKE platform.

Classifies every source textbook file into one of two legal & engineering modes:
  - Mode A: `DIRECT_ADAPTATION`
      Strictly for permissive `_CC-BY.pdf` and `_CC-BY-SA.pdf` resources from
      Open AGH and LibreTexts (WITHOUT `NC` and WITHOUT `OpenStax`/`CK12`
      anti-LLM/NC clauses). Translates/restructures directly and injects a
      `licenseAttribution` string.
  - Mode B: `CONCEPT_SYNTHESIS`
      Clean-Room 2-step pipeline for `OpenStax_*`, `*_NC*`, `CK12_*`, and
      traditional copyrighted textbooks (e.g. Bochenek).
        Step 1 (Fact Extraction): Extract ONLY raw uncopyrightable scientific
        facts, PL/Latin terminology, equations, constants, and objective
        physiological/anatomical mechanisms. Discard original prose.
        Step 2 (From-Scratch Synthesis): Feed ONLY the dry fact-sheet + CKE
        curriculum guidelines into `deepseek-chat` to generate a 100% original
        Polish lesson (Definicja -> Mechanizm -> Klinika/Matura -> Active Recall).
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Any

ROOT_DIR = Path(__file__).resolve().parent.parent


def load_env_files() -> None:
    """Load key=value pairs from .env.local and .env if not already in env."""
    candidates = [
        ROOT_DIR / ".env.local",
        ROOT_DIR / ".env",
        ROOT_DIR.parent / ".env.local",
        ROOT_DIR.parent / ".env",
    ]
    for env_path in candidates:
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


def classify_source_file(pdf_path: Path | str) -> dict[str, Any]:
    """
    Classify a source PDF according to KATALOG_PODRECZNIKOW_OER.md and
    filename license suffixes into `DIRECT_ADAPTATION` vs `CONCEPT_SYNTHESIS`.
    """
    name = Path(pdf_path).name
    lower = name.lower()

    # Strict exclusions from DIRECT_ADAPTATION:
    # 1. OpenStax (publisher anti-LLM clauses and/or CC-BY-NC-SA)
    # 2. Any NonCommercial (_NC, CC-BY-NC, CK12)
    # 3. Traditional copyrighted textbooks (e.g., Bochenek, Tortora, Moore, etc.)
    is_openstax = "openstax" in lower
    is_nc = bool(re.search(r"(?:^|[_\-.])nc(?:[_\-.]|$)|cc-by-nc", lower))
    is_ck12 = "ck12" in lower or "ck-12" in lower
    has_permissive_cc = bool(re.search(r"_cc-by(?:-sa)?\.pdf$", lower))

    if is_openstax or is_nc or is_ck12 or not has_permissive_cc:
        reasons: list[str] = []
        if is_openstax:
            reasons.append("OpenStax (anti-LLM / NC)")
        if is_nc:
            reasons.append("CC-BY-NC / NonCommercial")
        if is_ck12:
            reasons.append("CK-12 License")
        if not has_permissive_cc and not (is_openstax or is_nc or is_ck12):
            reasons.append("Copyrighted / No CC-BY(-SA) suffix")
        reason_str = "; ".join(reasons) or "Restricted"
        return {
            "mode": "CONCEPT_SYNTHESIS",
            "reason": reason_str,
            "license_tag": f"CLEAN-ROOM CONCEPT SYNTHESIS ({reason_str})",
            "license_attribution": None,
        }

    is_open_agh = "openagh" in lower
    is_sa = "_cc-by-sa.pdf" in lower
    if is_open_agh:
        attribution = "Opracowano na podstawie zasobów Open AGH / LibreTexts (Licencja CC BY-SA 4.0 / CC BY 4.0)"
        license_tag = "CC BY-SA 4.0 (Open AGH)"
    elif is_sa:
        attribution = "Opracowano na podstawie zasobów Open AGH / LibreTexts (Licencja CC BY-SA 4.0 / CC BY 4.0)"
        license_tag = "CC BY-SA (LibreTexts)"
    else:
        attribution = "Opracowano na podstawie zasobów Open AGH / LibreTexts (Licencja CC BY-SA 4.0 / CC BY 4.0)"
        license_tag = "CC BY (LibreTexts)"

    return {
        "mode": "DIRECT_ADAPTATION",
        "reason": license_tag,
        "license_tag": license_tag,
        "license_attribution": attribution,
    }


DIRECT_ADAPTATION_SYSTEM_PROMPT = """Jesteś wybitnym polskim dydaktykiem akademickim i autorem podręczników medyczno-przyrodniczych.
Otrzymujesz fragment otwartego podręcznika na wolnej licencji CC BY / CC BY-SA (Open AGH lub LibreTexts).
Możesz bezpośrednio tłumaczyć, adaptować merytorycznie i redagować ten materiał w formacie microlearningowym naszej platformy NOIR, wzbogacając go o odniesienia do wymagań Matury CKE (Formuła 2015 vs 2023+) oraz poziomu akademickiego.

ZASADY FORMATOWANIA I KONTRAKTU JSON:
Zwróć wyłącznie poprawny obiekt JSON o dokładnie następującej strukturze:
{
  "chapterTitle": "Tytuł rozdziału po polsku",
  "toc": [
    { "title": "Nazwa podsekcji 1", "anchorId": "kebab-case-anchor-1" },
    { "title": "Nazwa podsekcji 2", "anchorId": "kebab-case-anchor-2" }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h2 id=\\"kebab-case-anchor-1\\">...</h2><p>...</p><ul><li>...</li></ul>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Pytanie Active Recall w stylu CKE / akademickim (Wyjaśnij / Wykaż / Uzasadnij)",
      "answer": "Precyzyjny klucz odpowiedzi: Przyczyna -> Mechanizm -> Skutek"
    }
  ],
  "ckeMetadata": {
    "tier": "cke-core | cke-2023-only | cke-2015-only | academic-extra",
    "formulas": ["2015", "2023", "academic"],
    "sectionCode": "Nazwa działu / modułu OER",
    "requirementCodes": ["OER-1"],
    "status": "core | 2015-only | 2023-only",
    "diffs2015vs2023": "Krótkie porównanie wymogów Matury 2015, 2023+ oraz poziomu akademickiego.",
    "examTraps": ["Pułapka egzaminacyjna lub typowy błąd studentów/maturzystów."]
  }
}

Dozwolone znaczniki HTML w htmlContent: h2, h3, h4, p, strong, em, ul, ol, li, code, sub, sup, table, thead, tbody, tr, th, td, blockquote. Zero <script>, zero zewnętrznych linków."""


CLEANROOM_STEP1_EXTRACTION_PROMPT = """Jesteś analitykiem danych naukowych pracującym w trybie CLEAN-ROOM (ekstrakcja wyłącznie niepodlegających prawu autorskiemu surowych faktów naukowych).

ZASADY KRYTYCZNE (ZERO PLAGIATU):
1. Wydobądź z tekstu wyłącznie surowe, obiektywne fakty naukowe: hasła tematyczne, terminy polskie i łacińskie, stałe fizyczne/biochemiczne, równania, reakcje chemiczne, struktury anatomiczne oraz suchą sekwencję przyczynowo-skutkową zjawisk.
2. CAŁKOWICIE ODRZUĆ wszelką prozę źródłową, metafory, przykłady fabularne, układ akapitów i styl autora oryginalnego tekstu.
3. Nie przepisuj pełnych zdań z oryginału — zwróć wyłącznie suche, zwięzłe punkty faktograficzne.

Zwróć wyłącznie poprawny obiekt JSON:
{
  "topicHeading": "Krótka nazwa zagadnienia naukowego po polsku",
  "targetTier": "cke-core | cke-2023-only | cke-2015-only | academic-extra",
  "keyTermsPlLat": [
    { "pl": "Polski termin", "lat": "Łaciński lub angielski odpowiednik" }
  ],
  "rawFacts": [
    "Suchy fakt naukowy / wartość liczbowa / parametr fizjologiczny"
  ],
  "equationsAndConstants": [
    "Równanie, wzór lub stała z jednostką SI"
  ],
  "causalMechanisms": [
    "Bodziec / przyczyna -> pośredni mechanizm -> efekt końcowy"
  ]
}"""


CLEANROOM_STEP2_SYNTHESIS_PROMPT = """Jesteś wybitnym polskim profesorem nauk biomedycznych i autorem oryginalnego podręcznika NOIR dla maturzystów CKE (Formuła 2015 i 2023+) oraz studentów medycyny.
Otrzymujesz WYŁĄCZNIE suchy arkusz faktów naukowych (bez żadnego tekstu źródłowego). Napisz od zera w 100% autorski, spójny, kliniczno-dydaktyczny rozdział po polsku według naszego autorskiego schematu:
1. Definicja i klasyfikacja zjawiska/struktury
2. Mechanizm przyczynowo-skutkowy (Przyczyna -> Mechanizm -> Skutek)
3. Znaczenie kliniczne / korelacje maturalne CKE (jak zastosować na egzaminie)
4. Pytania Active Recall w stylu CKE (Wyjaśnij / Wykaż / Uzasadnij)

ZASADY FORMATOWANIA I KONTRAKTU JSON:
Zwróć wyłącznie poprawny obiekt JSON o dokładnie następującej strukturze:
{
  "chapterTitle": "Autorski tytuł rozdziału po polsku",
  "toc": [
    { "title": "1. Definicja i podstawy", "anchorId": "definicja-i-podstawy" },
    { "title": "2. Mechanizm przyczynowo-skutkowy", "anchorId": "mechanizm-przyczynowo-skutkowy" },
    { "title": "3. Znaczenie kliniczne i maturalne CKE", "anchorId": "znaczenie-kliniczne-i-cke" }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h2 id=\\"definicja-i-podstawy\\">...</h2><p>...</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h2 id=\\"mechanizm-przyczynowo-skutkowy\\">...</h2><p>...</p><h2 id=\\"znaczenie-kliniczne-i-cke\\">...</h2><ul><li>...</li></ul>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Oryginalne pytanie Active Recall (Wyjaśnij / Wykaż / Uzasadnij)",
      "answer": "Wzorcowa odpowiedź: Przyczyna -> Mechanizm -> Skutek"
    }
  ],
  "ckeMetadata": {
    "tier": "cke-core | cke-2023-only | cke-2015-only | academic-extra",
    "formulas": ["2015", "2023", "academic"],
    "sectionCode": "Nazwa działu / modułu",
    "requirementCodes": ["CKE-SYN-1"],
    "status": "core | 2015-only | 2023-only",
    "diffs2015vs2023": "Porównanie wymagań Formuły 2015, Nowej Podstawy 2023+ oraz poziomu akademickiego.",
    "examTraps": ["Typowa pułapka egzaminacyjna CKE lub błąd kliniczny."]
  }
}

Dozwolone znaczniki HTML w htmlContent: h2, h3, h4, p, strong, em, ul, ol, li, code, sub, sup, table, thead, tbody, tr, th, td, blockquote. Zero <script>, zero zewnętrznych linków."""


async def synthesize_direct_adaptation(
    client: Any,
    model: str,
    *,
    department_label: str,
    domain_title: str,
    pdf_name: str,
    page_range: str,
    raw_text: str,
    license_attribution: str,
) -> dict[str, Any]:
    """Mode A: Direct translation/adaptation of CC-BY / CC-BY-SA OER material."""
    user_prompt = (
        f"Dział docelowy: {department_label} ({domain_title})\n"
        f"Źródło CC-BY / CC-BY-SA: {pdf_name} (strony {page_range})\n"
        f"Atrybucja: {license_attribution}\n\n"
        f"Tekst OER do bezpośredniej adaptacji dydaktycznej i tłumaczenia na język polski:\n{raw_text}"
    )

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": DIRECT_ADAPTATION_SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt},
        ],
        response_format={"type": "json_object"},
        temperature=0.3,
        max_tokens=4000,
    )

    parsed = json.loads(response.choices[0].message.content or "{}")
    parsed["processingMode"] = "DIRECT_ADAPTATION"
    parsed["licenseAttribution"] = license_attribution
    if isinstance(parsed.get("ckeMetadata"), dict):
        parsed["ckeMetadata"]["licenseAttribution"] = license_attribution
    return parsed


async def synthesize_cleanroom_concept(
    client: Any,
    model: str,
    *,
    department_label: str,
    domain_title: str,
    pdf_name: str,
    page_range: str,
    raw_text: str,
) -> dict[str, Any]:
    """
    Mode B: Two-step copyright-safe Clean-Room synthesis.
      Step 1 extracts ONLY raw uncopyrightable scientific facts.
      Step 2 discards `raw_text` completely and authors an original Polish
      chapter from the dry fact-sheet + CKE guidelines.
    """
    step1_user_prompt = (
        f"Dział: {department_label} ({domain_title})\n"
        f"Materiał referencyjny (wyłącznie do ekstrakcji suchych faktów): {pdf_name}, s. {page_range}\n\n"
        f"{raw_text}"
    )
    step1_resp = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": CLEANROOM_STEP1_EXTRACTION_PROMPT},
            {"role": "user", "content": step1_user_prompt},
        ],
        response_format={"type": "json_object"},
        temperature=0.1,
        max_tokens=2000,
    )
    fact_sheet_json = step1_resp.choices[0].message.content or "{}"
    # Original raw_text is deliberately NOT passed to Step 2.

    step2_user_prompt = (
        f"Dział docelowy: {department_label} ({domain_title})\n"
        f"Zadanie: Napisz od zera w 100% oryginalny rozdział podręcznika medyczno-maturalnego CKE na podstawie wyłącznie poniższego arkusza faktów naukowych.\n\n"
        f"SUCHY ARKUSZ FAKTÓW (CLEAN-ROOM):\n{fact_sheet_json}"
    )
    step2_resp = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": CLEANROOM_STEP2_SYNTHESIS_PROMPT},
            {"role": "user", "content": step2_user_prompt},
        ],
        response_format={"type": "json_object"},
        temperature=0.4,
        max_tokens=4000,
    )

    parsed = json.loads(step2_resp.choices[0].message.content or "{}")
    parsed["processingMode"] = "CONCEPT_SYNTHESIS"
    parsed.pop("licenseAttribution", None)
    if isinstance(parsed.get("ckeMetadata"), dict):
        parsed["ckeMetadata"].pop("licenseAttribution", None)
    return parsed
