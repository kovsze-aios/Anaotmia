#!/usr/bin/env python3
"""
scripts/enrich_cke_deepseek.py

Asynchroniczny potok wzbogacania i generowania rozdziałów maturalnych CKE
(Formuła 2015 oraz Formuła 2023+) przy użyciu modelu DeepSeek (`deepseek-chat`).

Zadania skryptu:
1. Wczytuje strukturę podstawy programowej CKE z `src/data/cke-curricula.ts`
   (11 działów Biologii I–XI oraz 13 działów Chemii I–XIII).
2. Skanuje istniejące pliki rozdziałów w `src/data/biologia/dzialy/*.ts` oraz
   `src/data/chemia/dzialy/*.ts`.
3. Za pomocą `AsyncOpenAI(base_url="https://api.deepseek.com/v1", model="deepseek-chat")`:
   - Klasyfikuje każdy rozdział do właściwego działu CKE (`Dział I`..`Dział XIII`)
     oraz oznacza go metadanymi `ckeMetadata` (`formulas`, `sectionCode`,
     `requirementCodes`, `status`: `core` | `2015-only` | `2023-only`, `examTips`).
   - Generuje dedykowaną ostatnią stronę microlearningową:
     `"🎯 Wytyczne CKE i Pewniaki Maturalne"` (obejmującą czasowniki operacyjne:
     *wykaż, wyjaśnij, uzasadnij, porównaj, określ*, różnice Formuła 2015 vs 2023+
     oraz najczęstsze Pułapki CKE dla danego tematu).
4. Sprawdza pokrycie wszystkich działów z macierzy CKE i automatycznie generuje
   brakujące tematy od podstaw (np. chemia organiczna Działy IX–XIII, zagadnienia
   specyficzne `2023-only` i `2015-only`), zapisując je jako nowe moduły `.ts`
   i aktualizując pliki indeksów (`index.ts`).
5. Zapisuje postęp przyrostowo i atomowo (poprzez plik `.tmp`), dzięki czemu
   proces można bezpiecznie przerwać i wznowić w dowolnym momencie.

Użycie:
    python scripts/enrich_cke_deepseek.py --dry-run
    python scripts/enrich_cke_deepseek.py --limit 5
    python scripts/enrich_cke_deepseek.py --subject biologia --concurrency 8
    python scripts/enrich_cke_deepseek.py --force
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import re
import sys
import time
from pathlib import Path
from typing import Any

import httpx
from dotenv import load_dotenv
from openai import AsyncOpenAI

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT_DIR = Path(__file__).resolve().parent.parent
load_dotenv(ROOT_DIR / ".env.local")
load_dotenv(ROOT_DIR / ".env")
load_dotenv(ROOT_DIR.parent / ".env")

DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")
DEEPSEEK_BASE_URL = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com/v1")
DEEPSEEK_MODEL = os.getenv("DEEPSEEK_MODEL", "deepseek-chat")

BIO_DIR = ROOT_DIR / "src" / "data" / "biologia" / "dzialy"
CHEM_DIR = ROOT_DIR / "src" / "data" / "chemia" / "dzialy"
PROGRESS_FILE = ROOT_DIR / "scripts" / ".cke_enrich_progress.json"

ALLOWED_HTML_TAGS = {"p", "strong", "ul", "li", "br", "em", "h3", "h4"}
TAG_RE = re.compile(r"<\s*(/?)\s*([a-zA-Z0-9]+)([^>]*)>")
CHAPTER_FIELDS = ("chapterTitle", "toc", "pages", "chapterQuiz", "ckeMetadata")

# ─────────────────────────────────────────────────────────────────────────────
# Matryca CKE (zsynchronizowana z `src/data/cke-curricula.ts`)
# ─────────────────────────────────────────────────────────────────────────────

BIOLOGY_CKE_MATRIX: list[dict[str, Any]] = [
    {
        "sectionCode": "Dział I",
        "title": "Dział I. Chemizm życia",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["I.1.a", "I.1.b", "I.2.a", "I.2.b", "I.2.c", "I.2.d"],
        "focus": "Woda i jej właściwości fizykochemiczne, makro- i mikroelementy, węglowodany, lipidy, białka (struktura I–IV-rzędowa, denaturacja vs koagulacja), kwasy nukleinowe i ATP.",
    },
    {
        "sectionCode": "Dział II",
        "title": "Dział II. Komórka",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["II.1.a", "II.2.a", "II.3.a", "II.3.b", "II.4.a"],
        "focus": "Komórka prokariotyczna vs eukariotyczna, błony biologiczne i transport (osmoza, plazmoliza, pompa Na+/K+), organella, teoria endosymbiozy, cykl komórkowy, mitoza, mejoza i apoptoza.",
    },
    {
        "sectionCode": "Dział III",
        "title": "Dział III. Energia i metabolizm",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["III.1.a", "III.1.b", "III.2.a", "III.3.a", "III.3.b"],
        "focus": "Enzymy, kinetyka Michaelisa-Menten (Km, Vmax), inhibicja kompetycyjna i niekompetycyjna, oddychanie tlenowe i chemiosmoza, fermentacje, fotosynteza (C3, C4, CAM), fotooddychanie i chemosynteza.",
    },
    {
        "sectionCode": "Dział IV",
        "title": "Dział IV. Różnorodność bezstrunowców i roślin (Systematyka i fizjologia)",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["IV.1.a", "IV.2.a", "IV.3.a", "IV.3.b", "IV.4.a", "IV.4.b"],
        "focus": "Wirusy, bakterie, protisty (Plasmodium), grzyby i porosty, przemiana pokoleń roślin, tkanki i fizjologia roślin (transport wody i asymilatów, fitohormony), anatomia porównawcza bezkręgowców i kręgowców (oraz cykle pasożytów 2015-only).",
    },
    {
        "sectionCode": "Dział V",
        "title": "Dział V. Budowa i funkcjonowanie organizmu człowieka",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["V.1.a", "V.2.a", "V.3.a", "V.4.a", "V.5.a", "V.6.a", "V.7.a"],
        "focus": "Tkanki zwierzęce, homeostaza, skurcz sarkomeru, trawienie, wymiana gazowa i efekt Bohra, krążenie, odporność swoista i nieswoista (MHC I/II, konflikt Rh), nefron, potencjał czynnościowy neuronu, synapsy i regulacja hormonalna.",
    },
    {
        "sectionCode": "Dział VI",
        "title": "Dział VI. Ekspresja informacji genetycznej",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["VI.1.a", "VI.2.a", "VI.3.a", "VI.3.b", "VI.4.a"],
        "focus": "Replikacja DNA, geny prokariotyczne i eukariotyczne, kod genetyczny, transkrypcja, splicing i splicing alternatywny, translacja, regulacja ekspresji genów (operon laktozowy i tryptofanowy, epigenetyka: metylacja DNA i acetylacja histonów).",
    },
    {
        "sectionCode": "Dział VII",
        "title": "Dział VII. Genetyka klasyczna i zmienność organizmów",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["VII.1.a", "VII.2.a", "VII.3.a", "VII.4.a"],
        "focus": "Prawa Mendla, niepełna dominacja, kodominacja, allele wielokrotne (AB0), sprzężenie z płcią, crossing-over i mapowanie genów, mutacje genowe i chromosomowe, rodowody i prawo Hardy'ego-Weinberga.",
    },
    {
        "sectionCode": "Dział VIII",
        "title": "Dział VIII. Biotechnologia i inżynieria genetyczna",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["VIII.1.a", "VIII.2.a", "VIII.2.b", "VIII.3.a", "VIII.4.a"],
        "focus": "Enzymy restrykcyjne, ligaza, wektory, cDNA, PCR (polimeraza Taq), elektroforeza, GMO vs organizmy transgeniczne, klonowanie, komórki macierzyste, terapia genowa oraz system edycji genomu CRISPR-Cas9 (2023-only).",
    },
    {
        "sectionCode": "Dział IX",
        "title": "Dział IX. Ewolucjonizm",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["IX.1.a", "IX.2.a", "IX.2.b", "IX.3.a"],
        "focus": "Dowody ewolucji, narządy homologiczne vs analogiczne, dywergencja i konwergencja, dobór naturalny vs dryf genetyczny (efekt założyciela, wąskie gardło), specjacja allopatryczna i sympatryczna, antropogeneza.",
    },
    {
        "sectionCode": "Dział X",
        "title": "Dział X. Ekologia",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["X.1.a", "X.2.a", "X.3.a", "X.4.a"],
        "focus": "Tolerancja ekologiczna, nisza ekologiczna, demografia populacji (modele wzrostu J i S, krzywe przeżywania), interakcje międzygatunkowe, jednokierunkowy przepływ energii i obieg materii (azot, węgiel), sukcesja.",
    },
    {
        "sectionCode": "Dział XI",
        "title": "Dział XI. Różnorodność biologiczna i jej ochrona",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["XI.1.a", "XI.2.a", "XI.3.a"],
        "focus": "Poziomy bioróżnorodności (genetyczna, gatunkowa, ekosystemowa), fragmentacja siedlisk i korytarze ekologiczne, gatunki inwazyjne, eutrofizacja, ochrona in situ i ex situ, Natura 2000 i konwencje międzynarodowe.",
    },
]

CHEMISTRY_CKE_MATRIX: list[dict[str, Any]] = [
    {
        "sectionCode": "Dział I",
        "title": "Dział I. Atomy, cząsteczki i stechiometria chemiczna",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["I.1.a", "I.2.a", "I.3.a", "I.4.a"],
        "focus": "Budowa atomu, izotopy, promieniotwórczość, 4 liczby kwantowe, konfiguracje elektronowe (promocja Cr, Cu; jony bloku d), układ okresowy, mol, równanie Clapeyrona pV=nRT i stechiometria reakcji.",
    },
    {
        "sectionCode": "Dział II",
        "title": "Dział II. Wiązania chemiczne i oddziaływania międzycząsteczkowe",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["II.1.a", "II.2.a", "II.3.a", "II.3.b"],
        "focus": "Wiązania jonowe, kowalencyjne, koordynacyjne i metaliczne, hybrydyzacja (sp, sp2, sp3), wiązania sigma i pi, teoria VSEPR, moment dipolowy, wiązania wodorowe i typy kryształów.",
    },
    {
        "sectionCode": "Dział III",
        "title": "Dział III. Kinetyka i statyka chemiczna. Energetyka reakcji",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["III.1.a", "III.2.a", "III.3.a"],
        "focus": "Szybkość reakcji, równanie kinetyczne, energia aktywacji, kataliza, entalpia i Prawo Hessa (2023-only / niewymagane rachunkowo w 2015), stała równowagi Kc i reguła przekory Le Chateliera.",
    },
    {
        "sectionCode": "Dział IV",
        "title": "Dział IV. Roztwory",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["IV.1.a", "IV.2.a", "IV.3.a"],
        "focus": "Rozpuszczalność i krystalizacja, stężenie procentowe Cp i molowe Cm, przeliczanie stężeń z gęstością, rozpuszczanie hydratów i tlenków, koloidy i efekt Tyndalla.",
    },
    {
        "sectionCode": "Dział V",
        "title": "Dział V. Reakcje w roztworach wodnych (Kwasy, zasady, pH, hydroliza, Kso)",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["V.1.a", "V.2.a", "V.3.a", "V.4.a"],
        "focus": "Dysocjacja, prawo rozcieńczeń Ostwalda, teorie Brønsteda-Lowry'ego i Lewisa, skala pH, hydroliza soli, bufory, miareczkowanie oraz iloczyn rozpuszczalności Kso (2023-only / niewymagane w 2015).",
    },
    {
        "sectionCode": "Dział VI",
        "title": "Dział VI. Reakcje utleniania i redukcji (Redoks). Elektrochemia",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["VI.1.a", "VI.2.a", "VI.3.a"],
        "focus": "Stopnie utlenienia, bilans elektronowo-jonowy redoks (KMnO4 w pH kwaśnym/obojętnym/zasadowym, K2Cr2O7, HNO3, H2SO4), szereg napięciowy metali, ogniwa galwaniczne, SEM, korozja i elektroliza.",
    },
    {
        "sectionCode": "Dział VII",
        "title": "Dział VII. Systematyka związków nieorganicznych",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["VII.1.a", "VII.2.a", "VII.3.a", "VII.4.a"],
        "focus": "Tlenki, wodorki, wodorotlenki, amfoteryczność (Al(OH)3, Zn(OH)2, Cr(OH)3, Cu(OH)2) i hydroksokompleksy, kwasy, otrzymywanie soli i wodorosoli oraz schematy przemian nieorganicznych (2015-only).",
    },
    {
        "sectionCode": "Dział VIII",
        "title": "Dział VIII. Charakterystyka pierwiastków bloków s, p oraz wybranych pierwiastków bloku d",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["VIII.1.a", "VIII.2.a", "VIII.3.a"],
        "focus": "Litowce, berylowce, twardość wody, glin i pasywacja, węglowce, azotowce, tlenowce, fluorowce oraz pierwiastki bloku d: chrom (CrO4^2- <-> Cr2O7^2-), mangan, żelazo, miedź, cynk i srebro.",
    },
    {
        "sectionCode": "Dział IX",
        "title": "Dział IX. Węglowodory",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["IX.1.a", "IX.2.a", "IX.3.a", "IX.4.a"],
        "focus": "Alkany (substytucja rodnikowa SR), alkeny i alkiny (izomeria cis-trans / E-Z, addycja elektrofilowa AE, reguła Markownikowa i Zajcewa, polimeryzacja), areny (benzen, toluen — substytucja elektrofilowa SE, podstawniki I i II rodzaju).",
    },
    {
        "sectionCode": "Dział X",
        "title": "Dział X. Hydroksylowe pochodne węglowodorów (Alkohole i Fenole)",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["X.1.a", "X.2.a", "X.3.a"],
        "focus": "Alkohole monohydroksylowe I, II i III-rzędowe (próba Lucasa, utlenianie CuO i K2Cr2O7), alkohole polihydroksylowe (glikol, glicerol + Cu(OH)2 na zimno), fenole (kwasowość, reakcja z NaOH, Br2/H2O i FeCl3).",
    },
    {
        "sectionCode": "Dział XI",
        "title": "Dział XI. Związki karbonylowe (Aldehydy i Ketony)",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["XI.1.a", "XI.2.a", "XI.3.a"],
        "focus": "Budowa grupy karbonylowej, otrzymywanie aldehydów i ketonów, próba Tollensa i próba Trommera (zapis jonowy w środowisku zasadowym!), tworzenie hemiacetali, kondensacja aldolowa i próba jodoformowa.",
    },
    {
        "sectionCode": "Dział XII",
        "title": "Dział XII. Kwasy karboksylowe, estry, tłuszcze i izomeria optyczna",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["XII.1.a", "XII.2.a", "XII.2.b", "XII.3.a"],
        "focus": "Kwasy karboksylowe (moc kwasów, efekt indukcyjny, kwas mrówkowy), estryfikacja i hydroliza estrów, tłuszcze i mydła, hydroksykwasy oraz stereoizomeria optyczna (C*, projekcje Fischera, enancjomery, diastereoizomery, forma mezo — 2023-only).",
    },
    {
        "sectionCode": "Dział XIII",
        "title": "Dział XIII. Związki azotowe, aminokwasy, białka i sacharydy",
        "status": "core",
        "formulas": ["2015", "2023"],
        "requirementCodes": ["XIII.1.a", "XIII.2.a", "XIII.3.a", "XIII.3.b"],
        "focus": "Aminy (zasadowość amin alifatycznych vs aniliny), amidy (mocznik), aminokwasy (jony obojnacze, punkt izoelektryczny pI), peptydy i białka (próba biuretowa i ksantoproteinowa), monosacharydy (wzory Fischera i Hawortha, anomery alfa/beta, mutarotacja, odróżnianie glukozy od fruktozy wodą bromową), disacharydy redukujące vs nieredukująca sacharoza, polisacharydy.",
    },
]


# ─────────────────────────────────────────────────────────────────────────────
# Narzędzia sanitacji HTML i parsowania plików .ts
# ─────────────────────────────────────────────────────────────────────────────

def sanitize_html(html: str) -> str:
    """Usuwa Markdown i ogranicza znaczniki HTML wyłącznie do białej listy."""
    html = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", html)
    html = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", html)

    def _replace_tag(match: re.Match) -> str:
        slash, tag, attrs = match.group(1), match.group(2).lower(), match.group(3)
        if tag in ("h1", "h2"):
            tag = "h3"
        elif tag in ("h5", "h6"):
            tag = "h4"
        elif tag == "b":
            tag = "strong"
        elif tag == "i":
            tag = "em"
        elif tag == "ol":
            tag = "ul"

        if tag not in ALLOWED_HTML_TAGS:
            return ""
        if slash:
            return f"</{tag}>"
        if tag in ("h3", "h4"):
            id_match = re.search(r'id="([^"]+)"', attrs)
            if id_match:
                return f'<{tag} id="{id_match.group(1)}">'
        return f"<{tag}>"

    cleaned = TAG_RE.sub(_replace_tag, html).strip()
    tail = re.sub(r"<[^>]+>", "", cleaned).strip()
    if tail and tail[-1] not in ".!?:›»\"')":
        cleaned += "."
    return cleaned


def to_slug(name: str) -> str:
    s = name.lower()
    for src, dst in [
        ("ą", "a"), ("ć", "c"), ("ę", "e"), ("ł", "l"), ("ń", "n"),
        ("ó", "o"), ("ś", "s"), ("ź", "z"), ("ż", "z"),
    ]:
        s = s.replace(src, dst)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:64].strip("-") or "rozdzial"


def to_valid_identifier(name: str) -> str:
    clean = re.sub(r"[^a-zA-Z0-9_]+", " ", name).strip()
    words = clean.split()
    if not words:
        return "chapterData"
    ident = words[0].lower() + "".join(w.capitalize() for w in words[1:])
    if ident[0].isdigit():
        ident = "c" + ident
    return ident + "Data"


def read_ts_chapter(path: Path) -> tuple[str, dict[str, Any]] | None:
    """Wczytuje plik .ts rozdziału i zwraca (var_name, parsed_dict)."""
    text = path.read_text(encoding="utf-8")
    m = re.search(
        r"export\s+const\s+(\w+)\s*:\s*StructuredChapter\s*=\s*(\{.*\})\s*;\s*$",
        text,
        re.DOTALL,
    )
    if not m:
        return None
    var_name = m.group(1)
    try:
        data = json.loads(m.group(2))
        return var_name, data
    except json.JSONDecodeError:
        return None


def write_ts_chapter_atomic(path: Path, var_name: str, data: dict[str, Any]) -> None:
    """Zapisuje plik .ts atomowo poprzez plik tymczasowy."""
    filtered = {k: data[k] for k in CHAPTER_FIELDS if k in data}
    json_str = json.dumps(filtered, ensure_ascii=False, indent=2)
    content = (
        'import type { StructuredChapter } from "@/types/theory";\n\n'
        f"export const {var_name}: StructuredChapter = {json_str};\n"
    )
    tmp_path = path.with_suffix(".ts.tmp")
    tmp_path.write_text(content, encoding="utf-8")
    tmp_path.replace(path)


def is_already_enriched(data: dict[str, Any]) -> bool:
    meta = data.get("ckeMetadata")
    if not isinstance(meta, dict) or not meta.get("sectionCode"):
        return False
    pages = data.get("pages", [])
    return any(
        "Wytyczne CKE i Pewniaki Maturalne" in p.get("htmlContent", "")
        for p in pages
    )


def update_barrel_files(out_dir: Path) -> None:
    """Aktualizuje pliki indeksów (<tag>.ts oraz index.ts) w katalogu działów."""
    content_files = [
        f
        for f in sorted(out_dir.glob("*.ts"))
        if f.name != "index.ts" and "-czesc-" in f.name
    ]
    modules_by_tag: dict[str, list[dict[str, Any]]] = {}
    for f in content_files:
        text = f.read_text(encoding="utf-8")
        m_var = re.search(r"export const (\w+)", text)
        m_name = re.match(r"^([a-zA-Z0-9]+)-czesc-(\d+)-(.+)$", f.stem)
        if not (m_var and m_name):
            continue
        modules_by_tag.setdefault(m_name.group(1), []).append(
            {
                "filename": f.stem,
                "varName": m_var.group(1),
                "idx": int(m_name.group(2)),
            }
        )

    for tag, mods in modules_by_tag.items():
        mods.sort(key=lambda m: m["idx"])
        imports = "\n".join(
            f'import {{ {m["varName"]} }} from "./{m["filename"]}";' for m in mods
        )
        exports = "\n".join(f'export * from "./{m["filename"]}";' for m in mods)
        listing = (
            f"\nexport const {tag}Chapters = [\n"
            + ",\n".join(
                f'  {{ id: "{m["filename"]}", data: {m["varName"]} }}' for m in mods
            )
            + "\n];\n"
        )
        (out_dir / f"{tag}.ts").write_text(
            imports + "\n\n" + exports + "\n" + listing, encoding="utf-8"
        )

    index_content = (
        "\n".join(f'export * from "./{tag}";' for tag in sorted(modules_by_tag))
        + "\n"
    )
    (out_dir / "index.ts").write_text(index_content, encoding="utf-8")


# ─────────────────────────────────────────────────────────────────────────────
# Prompty dla DeepSeek (`deepseek-chat`)
# ─────────────────────────────────────────────────────────────────────────────

def build_enrichment_system_prompt(subject: str, matrix: list[dict[str, Any]]) -> str:
    matrix_json = json.dumps(matrix, ensure_ascii=False, indent=2)
    subject_pl = "BIOLOGIA" if subject == "biologia" else "CHEMIA"
    return f"""Jesteś Głównym Egzaminatorem CKE i Architektem Danych Edukacyjnych z przedmiotu {subject_pl} (poziom rozszerzony).
Twoim zadaniem jest sklasyfikowanie przekazanego rozdziału podręcznika do właściwego działu podstawy programowej CKE (Formuła 2015 oraz Formuła 2023+) oraz wygenerowanie dedykowanej strony podsumowującej „🎯 Wytyczne CKE i Pewniaki Maturalne”.

MACIERZ PODSTAWY PROGRAMOWEJ CKE ({subject_pl}):
{matrix_json}

ZWRÓĆ WYŁĄCZNIE POPRAWNY OBIEKT JSON o następującej strukturze:
{{
  "ckeMetadata": {{
    "formulas": ["2015", "2023"],
    "sectionCode": "Dział ...",
    "requirementCodes": ["..."],
    "status": "core",
    "examTips": [
      "Pułapka CKE: ...",
      "Wskazówka pod klucz: ..."
    ]
  }},
  "ckePageHtml": "<h3 id=\\"wytyczne-cke-i-pewniaki-maturalne\\">🎯 Wytyczne CKE i Pewniaki Maturalne</h3><p>...</p><h4>1. Wymagania szczegółowe CKE</h4><ul><li>...</li></ul><h4>2. Formuła 2015 a Formuła 2023+</h4><p>...</p><h4>3. Pułapki CKE i błędy punktowe</h4><ul><li>...</li></ul><h4>4. Jak odpowiadać pod klucz CKE (Czasowniki operacyjne)</h4><ul><li><strong>Wyjaśnij:</strong> ...</li><li><strong>Wykaż:</strong> ...</li><li><strong>Uzasadnij:</strong> ...</li></ul>",
  "extraQuiz": [
    {{
      "question": "Zadanie maturalne CKE (z czasownikiem operacyjnym Wyjaśnij / Wykaż / Uzasadnij)...",
      "answer": "Wzorcowa odpowiedź zgodna z kluczem CKE (1 pkt – za ...)"
    }}
  ]
}}

TWARDE ZASADY:
1. W `ckeMetadata.status` użyj `"core"` (jeśli temat obowiązuje w obu formułach), `"2023-only"` (jeśli temat jest kluczowy w Nowej Maturze 2023+, np. CRISPR-Cas9, Prawo Hessa, iloczyn rozpuszczalności Kso, projekcje Fischera / diastereoizomery) lub `"2015-only"` (np. szczegółowe larwy motylicy/bruzdogłowca, rozbudowane nieorganiczne pajączki syntetyczne Formuły 2015).
2. W `ckePageHtml` używaj WYŁĄCZNIE znaczników z białej listy: `<p>`, `<strong>`, `<ul>`, `<li>`, `<br>`, `<em>`, `<h3>`, `<h4>`. Żadnego Markdownu (`**`, `##`). Pierwszy nagłówek MUSI mieć postać `<h3 id="wytyczne-cke-i-pewniaki-maturalne">🎯 Wytyczne CKE i Pewniaki Maturalne</h3>`.
3. Wszystkie przykłady czasowników operacyjnych (*Wyjaśnij*, *Wykaż*, *Uzasadnij*) oraz *Pułapki CKE* muszą dotyczyć KONKRETNEGO tematu omawianego w tym rozdziale."""


def build_generation_system_prompt(subject: str) -> str:
    subject_pl = "BIOLOGIA" if subject == "biologia" else "CHEMIA"
    return f"""Jesteś Głównym Redaktorem Medycznym i Egzaminatorem CKE z przedmiotu {subject_pl} (poziom rozszerzony).
Wygeneruj kompletny, wyczerpujący rozdział podręcznika maturalnego dla wskazanego działu i wymagań szczegółowych CKE.

ZWRÓĆ WYŁĄCZNIE POPRAWNY OBIEKT JSON zgodny ze schematem `StructuredChapter`:
{{
  "chapterTitle": "Tytuł rozdziału...",
  "toc": [
    {{ "title": "1. ...", "anchorId": "..." }},
    {{ "title": "2. ...", "anchorId": "..." }},
    {{ "title": "🎯 Wytyczne CKE i Pewniaki Maturalne", "anchorId": "wytyczne-cke-i-pewniaki-maturalne" }}
  ],
  "pages": [
    {{
      "pageNumber": 1,
      "htmlContent": "<h3 id=\\"...\\">1. ...</h3><p>...</p>..."
    }},
    {{
      "pageNumber": 2,
      "htmlContent": "<h3 id=\\"...\\">2. ...</h3><p>...</p>..."
    }},
    {{
      "pageNumber": 3,
      "htmlContent": "<h3 id=\\"wytyczne-cke-i-pewniaki-maturalne\\">🎯 Wytyczne CKE i Pewniaki Maturalne</h3>..."
    }}
  ],
  "chapterQuiz": [
    {{
      "question": "Pytanie w stylu arkusza CKE...",
      "answer": "Odpowiedź pod klucz CKE (przyczyna -> mechanizm -> skutek)..."
    }}
  ],
  "ckeMetadata": {{
    "formulas": ["2015", "2023"],
    "sectionCode": "Dział ...",
    "requirementCodes": ["..."],
    "status": "core",
    "examTips": ["..."]
  }}
}}

TWARDE ZASADY:
1. W `htmlContent` używaj WYŁĄCZNIE znaczników: `<p>`, `<strong>`, `<ul>`, `<li>`, `<br>`, `<em>`, `<h3>`, `<h4>`. Żadnego Markdownu!
2. Ostatnia strona w `pages` MUSI być zatytułowana `<h3 id="wytyczne-cke-i-pewniaki-maturalne">🎯 Wytyczne CKE i Pewniaki Maturalne</h3>` i omawiać wymagania CKE, różnice Formuła 2015 vs 2023+, pułapki CKE oraz wzorce odpowiedzi dla czasowników operacyjnych (*wykaż, wyjaśnij, uzasadnij*)."""


# ─────────────────────────────────────────────────────────────────────────────
# Operacje asynchroniczne DeepSeek
# ─────────────────────────────────────────────────────────────────────────────

async def enrich_single_file(
    client: AsyncOpenAI,
    semaphore: asyncio.Semaphore,
    path: Path,
    subject: str,
    matrix: list[dict[str, Any]],
    force: bool = False,
) -> dict[str, Any]:
    parsed = read_ts_chapter(path)
    if parsed is None:
        return {"path": str(path), "status": "parse_error"}

    var_name, data = parsed
    if not force and is_already_enriched(data):
        return {
            "path": str(path),
            "status": "skipped",
            "sectionCode": data["ckeMetadata"]["sectionCode"],
        }

    title = data.get("chapterTitle", path.stem)
    toc_titles = [t.get("title", "") for t in data.get("toc", []) if isinstance(t, dict)]
    pages = data.get("pages", [])
    first_page_text = re.sub(
        r"<[^>]+>", " ", pages[0].get("htmlContent", "") if pages else ""
    )
    first_page_excerpt = re.sub(r"\s+", " ", first_page_text).strip()[:1800]

    user_prompt = (
        f"Rozdział pliku: {path.name}\n"
        f"Tytuł rozdziału: {title}\n"
        f"Spis treści: {', '.join(toc_titles)}\n"
        f"Fragment treści:\n{first_page_excerpt}\n\n"
        "Sklasyfikuj ten rozdział w macierzy CKE i wygeneruj obiekt JSON z `ckeMetadata`, `ckePageHtml` oraz `extraQuiz`."
    )

    sys_prompt = build_enrichment_system_prompt(subject, matrix)

    async with semaphore:
        for attempt in range(1, 4):
            try:
                t0 = time.time()
                resp = await client.chat.completions.create(
                    model=DEEPSEEK_MODEL,
                    messages=[
                        {"role": "system", "content": sys_prompt},
                        {"role": "user", "content": user_prompt},
                    ],
                    response_format={"type": "json_object"},
                    max_tokens=4096,
                    temperature=0.3,
                )
                raw = resp.choices[0].message.content or "{}"
                payload = json.loads(raw)

                cke_meta = payload.get("ckeMetadata")
                cke_html = sanitize_html(payload.get("ckePageHtml", ""))
                if not isinstance(cke_meta, dict) or not cke_html:
                    raise ValueError("Brak poprawnego ckeMetadata lub ckePageHtml")

                if 'id="wytyczne-cke-i-pewniaki-maturalne"' not in cke_html:
                    cke_html = (
                        '<h3 id="wytyczne-cke-i-pewniaki-maturalne">'
                        "🎯 Wytyczne CKE i Pewniaki Maturalne</h3>\n" + cke_html
                    )

                # Usuń poprzednią stronę CKE jeśli uruchamiano z --force
                clean_pages = [
                    p
                    for p in pages
                    if "Wytyczne CKE i Pewniaki Maturalne" not in p.get("htmlContent", "")
                ]
                clean_pages.append(
                    {
                        "pageNumber": len(clean_pages) + 1,
                        "htmlContent": cke_html,
                    }
                )
                data["pages"] = clean_pages

                clean_toc = [
                    t
                    for t in data.get("toc", [])
                    if t.get("anchorId") != "wytyczne-cke-i-pewniaki-maturalne"
                ]
                clean_toc.append(
                    {
                        "title": "🎯 Wytyczne CKE i Pewniaki Maturalne",
                        "anchorId": "wytyczne-cke-i-pewniaki-maturalne",
                    }
                )
                data["toc"] = clean_toc

                existing_quiz = data.get("chapterQuiz", [])
                for q in payload.get("extraQuiz", []):
                    if isinstance(q, dict) and q.get("question") and q.get("answer"):
                        if not any(
                            eq.get("question") == q["question"] for eq in existing_quiz
                        ):
                            existing_quiz.append(
                                {
                                    "question": str(q["question"]).strip(),
                                    "answer": str(q["answer"]).strip(),
                                }
                            )
                data["chapterQuiz"] = existing_quiz
                data["ckeMetadata"] = {
                    "formulas": cke_meta.get("formulas", ["2015", "2023"]),
                    "sectionCode": cke_meta.get("sectionCode", "Dział I"),
                    "requirementCodes": cke_meta.get("requirementCodes", ["I.1.a"]),
                    "status": cke_meta.get("status", "core"),
                    "examTips": cke_meta.get("examTips", []),
                }

                write_ts_chapter_atomic(path, var_name, data)
                elapsed = time.time() - t0
                print(
                    f"[{subject.upper()}] Wzbogacono {path.name} -> "
                    f"{data['ckeMetadata']['sectionCode']} ({data['ckeMetadata']['status']}) w {elapsed:.1f}s"
                )
                return {
                    "path": str(path),
                    "status": "enriched",
                    "sectionCode": data["ckeMetadata"]["sectionCode"],
                }
            except Exception as err:
                if attempt == 3:
                    print(f"[{subject.upper()} BŁĄD] {path.name}: {err}")
                    return {"path": str(path), "status": "error", "error": str(err)}
                await asyncio.sleep(2 * attempt)

    return {"path": str(path), "status": "error"}


async def generate_missing_section_chapter(
    client: AsyncOpenAI,
    semaphore: asyncio.Semaphore,
    subject: str,
    out_dir: Path,
    tag_prefix: str,
    idx: int,
    section_info: dict[str, Any],
) -> Path | None:
    sys_prompt = build_generation_system_prompt(subject)
    user_prompt = (
        f"Wygeneruj rozdział maturalny CKE dla przedmiotu {subject.upper()}:\n"
        f"Dział: {section_info['sectionCode']} — {section_info['title']}\n"
        f"Kody wymagań: {', '.join(section_info['requirementCodes'])}\n"
        f"Status formuły: {section_info['status']} (Formuły: {', '.join(section_info['formulas'])})\n"
        f"Szczegółowy zakres merytoryczny: {section_info['focus']}\n"
    )

    async with semaphore:
        for attempt in range(1, 4):
            try:
                t0 = time.time()
                resp = await client.chat.completions.create(
                    model=DEEPSEEK_MODEL,
                    messages=[
                        {"role": "system", "content": sys_prompt},
                        {"role": "user", "content": user_prompt},
                    ],
                    response_format={"type": "json_object"},
                    max_tokens=6000,
                    temperature=0.3,
                )
                data = json.loads(resp.choices[0].message.content or "{}")
                for page in data.get("pages", []):
                    page["htmlContent"] = sanitize_html(page.get("htmlContent", ""))

                data["ckeMetadata"] = {
                    "formulas": section_info["formulas"],
                    "sectionCode": section_info["sectionCode"],
                    "requirementCodes": section_info["requirementCodes"],
                    "status": section_info["status"],
                    "examTips": data.get("ckeMetadata", {}).get("examTips", []),
                }

                title = data.get("chapterTitle", section_info["title"])
                slug = to_slug(title)
                filename = f"{tag_prefix}-czesc-{idx}-{slug}.ts"
                var_name = to_valid_identifier(f"{tag_prefix}_czesc_{idx}_{slug}")
                out_path = out_dir / filename
                write_ts_chapter_atomic(out_path, var_name, data)
                print(
                    f"[{subject.upper()} NOWY ROZDZIAŁ] Wygenerowano brakujący dział "
                    f"{section_info['sectionCode']} -> {filename} ({time.time() - t0:.1f}s)"
                )
                return out_path
            except Exception as err:
                if attempt == 3:
                    print(
                        f"[{subject.upper()} BŁĄD GENEROWANIA] {section_info['sectionCode']}: {err}"
                    )
                    return None
                await asyncio.sleep(2 * attempt)
    return None


async def run_pipeline(args: argparse.Namespace) -> None:
    subjects: list[tuple[str, Path, list[dict[str, Any]], str]] = []
    if args.subject in ("all", "biologia"):
        subjects.append(("biologia", BIO_DIR, BIOLOGY_CKE_MATRIX, "maturaBio"))
    if args.subject in ("all", "chemia"):
        subjects.append(("chemia", CHEM_DIR, CHEMISTRY_CKE_MATRIX, "maturaChem"))

    # 1. Skanowanie istniejących plików
    plan: list[tuple[str, Path, list[dict[str, Any]]]] = []
    covered_sections: dict[str, set[str]] = {"biologia": set(), "chemia": set()}

    for subj, directory, matrix, _tag_prefix in subjects:
        files = [
            f
            for f in sorted(directory.glob("*.ts"))
            if f.name != "index.ts" and "-czesc-" in f.name
        ]
        pending_for_subj = 0
        already_done = 0
        for f in files:
            parsed = read_ts_chapter(f)
            if not parsed:
                continue
            _var, data = parsed
            if is_already_enriched(data) and not args.force:
                already_done += 1
                covered_sections[subj].add(data["ckeMetadata"]["sectionCode"])
            else:
                pending_for_subj += 1
                plan.append((subj, f, matrix))

        print(
            f"[{subj.upper()}] Znaleziono {len(files)} plików rozdziałów "
            f"(wzbogacone: {already_done}, do przetworzenia: {pending_for_subj})."
        )

    if args.limit is not None:
        plan = plan[: args.limit]
        print(f"[LIMIT] Ograniczono przebieg do {len(plan)} plików.")

    if args.dry_run:
        print(
            f"\n[DRY RUN] Gotowość potoku potwierdzona. Plików w kolejce: {len(plan)}. "
            f"Model docelowy: {DEEPSEEK_MODEL} ({DEEPSEEK_BASE_URL})."
        )
        return

    if not DEEPSEEK_API_KEY:
        print(
            "\n[BŁĄD] Brak zmiennej środowiskowej DEEPSEEK_API_KEY w .env.local lub .env!"
        )
        sys.exit(1)

    http_client = httpx.AsyncClient(verify=False, timeout=180.0)
    client = AsyncOpenAI(
        api_key=DEEPSEEK_API_KEY,
        base_url=DEEPSEEK_BASE_URL,
        http_client=http_client,
    )
    semaphore = asyncio.Semaphore(args.concurrency)

    t_start = time.time()
    if plan:
        print(
            f"\nStart wzbogacania {len(plan)} rozdziałów "
            f"(model: {DEEPSEEK_MODEL}, współbieżność: {args.concurrency})…"
        )
        tasks = [
            enrich_single_file(client, semaphore, f, subj, matrix, force=args.force)
            for subj, f, matrix in plan
        ]
        results = await asyncio.gather(*tasks)
        for subj, _f, _matrix in plan:
            for r in results:
                if r.get("sectionCode"):
                    covered_sections[subj].add(r["sectionCode"])

    # 2. Generowanie brakujących działów CKE (gdy uruchomiono bez --limit lub z --generate-missing)
    if args.generate_missing and args.limit is None:
        for subj, directory, matrix, tag_prefix in subjects:
            missing = [
                m
                for m in matrix
                if m["sectionCode"] not in covered_sections.get(subj, set())
            ]
            if not missing:
                continue
            print(
                f"\n[{subj.upper()}] Generowanie {len(missing)} brakujących działów CKE…"
            )
            gen_tasks = [
                generate_missing_section_chapter(
                    client, semaphore, subj, directory, tag_prefix, idx + 1, sec
                )
                for idx, sec in enumerate(missing)
            ]
            await asyncio.gather(*gen_tasks)
            update_barrel_files(directory)

    await http_client.aclose()
    print(f"\n[ZAKOŃCZONO] Czas całkowity: {(time.time() - t_start):.1f}s.")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Wzbogacanie korpusu Biologii i Chemii o metadane i wytyczne CKE (2015 / 2023+) przez DeepSeek API."
    )
    parser.add_argument(
        "--subject",
        choices=["all", "biologia", "chemia"],
        default="all",
        help="Przedmiot do przetworzenia (domyślnie: all).",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Przetwórz maksymalnie N plików (przydatne do uruchomienia pilotażowego).",
    )
    parser.add_argument(
        "--concurrency",
        type=int,
        default=8,
        help="Liczba równoległych żądań AsyncOpenAI (domyślnie: 8).",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Wymuś ponowne wygenerowanie metadanych CKE nawet dla już wzbogaconych plików.",
    )
    parser.add_argument(
        "--generate-missing",
        action="store_true",
        default=True,
        help="Generuj od zera rozdziały dla działów CKE nieobecnych w korpusie.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Przeskanuj repozytorium i wyświetl podsumowanie bez wywoływania API.",
    )
    args = parser.parse_args()
    asyncio.run(run_pipeline(args))


if __name__ == "__main__":
    main()
