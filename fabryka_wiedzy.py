#!/usr/bin/env python3
"""
fabryka_wiedzy.py

Potok przetwarzania surowych tomów podręczników anatomii (.txt) na
silnie typowane moduły TypeScript dla Next.js (SSG), z użyciem DeepSeek API.

Przepisany po nieudanym przebiegu, który wyprodukował: tekst ucięty w połowie
zdania, znaczniki Markdown (**) których frontend nie parsuje, śmieci OCR,
markery nawigacyjne ("--- STRONA 150 ---") oraz treść arkusza egzaminacyjnego.

Zabezpieczenia wprowadzone w tej wersji:

  1. Deduplikacja pakietów po skrócie SHA-256 — ten sam fragment nie może
     trafić do dwóch domen. Pakiety są też twardo dzielone, gdy pojedynczy
     akapit przekracza limit (poprzednio limit `min_chars` potrafił zwrócić
     jeden gigantyczny pakiet, który model ucinał).
  2. `max_tokens=8192` oraz kontrola `finish_reason` — odpowiedź ucięta przez
     limit tokenów jest odrzucana i ponawiana, zamiast trafić na dysk.
  3. Walidacja odpowiedzi po stronie Pythona: Markdown w treści to błąd, nie
     sugestia. Prompt tego zabrania, a kod to egzekwuje.
  4. Twarda czarna lista — pakiet zawierający treść egzaminacyjną jest
     pomijany, zanim zostanie wysłany do modelu.

UWAGA co do iteracji: pętla po pakietach w poprzedniej wersji była poprawna —
każdy pakiet dostawał własny indeks i własne zadanie. Duplikaty, które trafiły
do `academic_sources` w plikach domen, pochodziły z innego kroku, nie z tego
skryptu. Deduplikacja poniżej jest zabezpieczeniem, nie naprawą tamtej pętli.

Użycie:
    python fabryka_wiedzy.py            # przetwarza tomy 1-4
    python fabryka_wiedzy.py --dry-run  # dzieli i waliduje, bez wywołań API
"""

from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import json
import os
import re
import sys
import time
from pathlib import Path

import httpx
from dotenv import load_dotenv
from openai import OpenAI

# Konsola Windows domyślnie nie radzi sobie z polskimi znakami.
if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

load_dotenv()
load_dotenv("../.env")

DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")

# ─────────────────────────────────────────────────────────────────────────────
# Konfiguracja
# ─────────────────────────────────────────────────────────────────────────────

MODEL = "deepseek-chat"

# Poprzednio 4000 — model regularnie kończył w połowie zdania i ucięty tekst
# trafiał do plików .ts.
MAX_TOKENS = 8192

MIN_CHUNK_CHARS = 5000
MAX_CHUNK_CHARS = 8000

MAX_WORKERS = 5
MAX_RETRIES = 3

# Pakiety zawierające którykolwiek z tych wzorców nie są wysyłane do modelu.
# Arkusz egzaminacyjny trafił do bazy w poprzednim przebiegu; treść zadań
# testowych nie jest materiałem podręcznikowym.
# Świadomie tylko dosłowne frazy. Wcześniejsza wersja miała tu heurystykę
# traktującą skupisko wariantów A)/B)/C)/D) jako arkusz testowy — na realnych
# danych trafiła w akapit o stawach międzyśródstopnych, czyli w zwykłą treść
# podręcznika. Filtr, który po cichu wycina prawdziwe rozdziały, jest gorszy niż
# brak filtra; ocenę treści niepodręcznikowej zostawiamy modelowi (reguła 6
# w promptcie każe mu zwrócić wtedy {"skip": true}).
BLACKLIST_PATTERNS = [
    r"egzamin\s*2026",
    r"anatomia\s+egzamin",
    # Nagłówki arkusza. Sprawdzone na całym korpusie źródłowym: 2 trafienia
    # w "Anatomia egzamin 2026 WF.txt" i 0 w każdym z tomów podręcznika, więc
    # w przeciwieństwie do heurystyki A)/B)/C)/D) ten wzorzec nie wycina treści
    # merytorycznej. Dopasowanie ucięte na "zamkni"/"otwart", bo OCR gubi ogonki
    # ("Pytania zamknite").
    r"pytania\s+zamkni",
    r"pytania\s+otwart",
    r"klucz\s+odpowiedzi",
    r"pytanie\s+nr",
]
BLACKLIST_RE = [re.compile(p, re.IGNORECASE | re.DOTALL) for p in BLACKLIST_PATTERNS]

# Filtr po NAZWIE PLIKU — i to on w praktyce łapie arkusz egzaminacyjny.
#
# Sprawdzone empirycznie: treść "Anatomia egzamin 2026 WF.txt" NIE zawiera ani
# słowa "egzamin", ani "2026" — te wyrazy występują wyłącznie w nazwie pliku
# (tekst zaczyna się od "Pytania zamknite (1-40)"). Filtr działający tylko na
# treści pakietu nigdy by tego pliku nie zatrzymał; dotychczas nie trafiał do
# potoku wyłącznie dlatego, że selekcja plików szukała nazw "tom 1"–"tom 4".
FILENAME_BLACKLIST_RE = re.compile(r"egzamin|arkusz|test\b|klucz", re.IGNORECASE)

# Markdown, którego frontend nie parsuje — renderuje się dosłownie.
MARKDOWN_RE = re.compile(r"\*\*|__|^\s{0,3}#{1,6}\s|^\s{0,3}[-*+]\s", re.MULTILINE)

# ─────────────────────────────────────────────────────────────────────────────
# Biała lista HTML
#
# Treść z tego potoku trafia do `dangerouslySetInnerHTML` w TextbookContent,
# czyli jest wykonywana przez przeglądarkę dokładnie taka, jaka przyjdzie.
# Autorem HTML-a jest model, więc "zaufany tekst akademicki" trzeba sprawdzać,
# a nie zakładać. Audyt poprzedniego korpusu (2835 stron) nie wykazał żadnego
# wektora, ale to własność tamtego wyniku, nie gwarancja na przyszłość —
# biała lista zamienia obserwację w regułę.
#
# Bez <a> i <img>: potok produkuje tekst dydaktyczny, a linki i obrazy to
# odpowiednio przekierowania i żądania sieciowe, których nie chcemy przyjmować
# od modelu. Z atrybutów tylko `id`, bo na nim opiera się nawigacja po sekcjach.
# ─────────────────────────────────────────────────────────────────────────────

ALLOWED_TAGS = frozenset({
    "p", "br",
    "strong", "b", "em", "i",
    "ul", "ol", "li",
    "h3", "h4",
    "span",
})
# `id` niesie nawigację po sekcjach; `start` pozwala liście uporządkowanej
# kontynuować numerację (<ol start="5">). Oba są nieszkodliwe — nie ładują
# niczego z sieci i nie wykonują kodu. `start` dopuszczony po sprawdzeniu
# istniejącego korpusu: to jedyny atrybut poza `id`, który faktycznie w nim
# wystąpił (raz na 2835 stron), więc bez niego biała lista odrzucałaby
# poprawną treść.
ALLOWED_ATTRS = frozenset({"id", "start"})

TAG_RE = re.compile(r"<\s*/?\s*([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>")
ATTR_RE = re.compile(r"<\s*[a-zA-Z][a-zA-Z0-9]*\b([^>]*)>")
ATTR_NAME_RE = re.compile(r"([a-zA-Z_:][a-zA-Z0-9_.:-]*)\s*=")


def disallowed_html(html: str) -> list[str]:
    """Zwraca listę naruszeń białej listy: nieznane tagi i atrybuty."""
    problems: list[str] = []

    for tag in TAG_RE.findall(html):
        if tag.lower() not in ALLOWED_TAGS:
            problems.append(f"tag <{tag.lower()}>")

    for attr_blob in ATTR_RE.findall(html):
        for attr in ATTR_NAME_RE.findall(attr_blob):
            if attr.lower() not in ALLOWED_ATTRS:
                problems.append(f"atrybut {attr.lower()}=")

    # Wektory, które nie muszą wystąpić jako tag ani atrybut z "=".
    if re.search(r"javascript\s*:", html, re.I):
        problems.append("URL javascript:")
    if re.search(r"\son[a-z]+\s*=", html, re.I):
        problems.append("handler on*=")

    # Zachowujemy kolejność, usuwamy powtórzenia.
    return list(dict.fromkeys(problems))


def sanitize_html(html: str) -> str:
    """
    Usuwa wszystko spoza białej listy, zachowując tekst.

    Ostatnia deska ratunku, analogicznie do `strip_markdown`: najpierw
    ponawiamy zapytanie licząc na czyste wyjście, a dopiero gdy to zawiedzie
    zdejmujemy niedozwolone znaczniki zamiast tracić rozdział. Treść zostaje,
    znika tylko opakowanie.
    """
    def keep_or_drop(match: re.Match[str]) -> str:
        tag = match.group(1).lower()
        if tag not in ALLOWED_TAGS:
            return ""  # zdejmujemy znacznik, tekst w środku zostaje
        # Dozwolony tag: przepuszczamy wyłącznie dozwolone atrybuty.
        closing = match.group(0).lstrip("<").lstrip().startswith("/")
        if closing:
            return f"</{tag}>"
        attrs = ATTR_RE.findall(match.group(0))
        kept = []
        for blob in attrs:
            for name, value in re.findall(r"([a-zA-Z_:][\w.:-]*)\s*=\s*\"([^\"]*)\"", blob):
                if name.lower() in ALLOWED_ATTRS:
                    kept.append(f'{name.lower()}="{value}"')
        return f"<{tag}{(' ' + ' '.join(kept)) if kept else ''}>"

    # Całe elementy wykonywalne usuwamy z zawartością, nie tylko znacznik.
    html = re.sub(r"<\s*(script|style|iframe|object|embed)\b.*?<\s*/\s*\1\s*>",
                  "", html, flags=re.I | re.S)
    html = re.sub(r"<\s*(script|style|iframe|object|embed)\b[^>]*>", "", html, flags=re.I)
    return TAG_RE.sub(keep_or_drop, html)


SYSTEM_PROMPT = """\
Jesteś doświadczonym redaktorem medycznym przygotowującym materiał dydaktyczny dla \
studentów medycyny. Otrzymujesz surowy, zeskanowany (OCR) fragment akademickiego \
podręcznika anatomii. Twoim zadaniem jest przekształcić go w czysty, wysoce przyswajalny \
i w 100% poprawny merytorycznie moduł edukacyjny.

ZASADY BEZWZGLĘDNE (TRYB REDAKCYJNY "ANTIGRAVITY"):

1. ANTYPLAGIAT I PARAFRAZOWANIE (Oryginalność 100%)
   Pod żadnym pozorem nie kopiuj tekstu źródłowego 1:1. Twoim zadaniem jest inteligentne
   przeformułowanie zdań (zmiana szyku, synonimy, własna narracja dydaktyczna), aby tekst
   był w 100% oryginalny pod kątem praw autorskich, ale zachował absolutną, akademicką
   precyzję merytoryczną. Podawaj oficjalne mianownictwo łacińskie w nawiasach przy
   pierwszym wystąpieniu terminu, np. „kość ramienna (humerus)".

2. KOREKTA OCR I ZROZUMIAŁOŚĆ
   Wychwytuj i usuwaj wszelkie błędy po skanowaniu, niezrozumiałe ciągi liter (tzw. "krzaki")
   oraz literówki. Scalaj połamane słowa i linie. Tekst musi być płynny, wysoce zrozumiały
   dla studenta i pozbawiony sztucznych przerw.

3. CZYSZCZENIE ZNACZNIKÓW KSIĄŻKOWYCH
   Z gotowego tekstu usuń wszelkie nawigacyjne pozostałości z książek (np. "Tom 1",
   "Rozdział 2", numery stron, żywe paginy, odnośniki do przypisów, odsyłacze do rycin
   i tabel typu „Ryc. 3.4", „Tab. 1"). Zostawiamy wyłącznie czystą wiedzę anatomiczną.

4. FORMATOWANIE HTML (ZERO MARKDOWNA W TREŚCI)
   W wyjściowym JSON w polach z tekstem nie może pojawić się żaden Markdown (żadnych **,
   __, ## itp.). Używaj WYŁĄCZNIE czystego, semantycznego HTML:
   - <p> dla akapitów (krótkich, zwięzłych, 2-4 zdania),
   - <strong> do wyróżnień kluczowych struktur anatomicznych (NIGDY **tekst**!),
   - <em> dla nazw łacińskich i pojęć drugorzędnych,
   - <ul>, <ol> i <li> dla wyliczeń i list,
   - <h3 id="..."> dla nagłówków sekcji (z unikalnym anchorId pasującym do toc).

5. FILTR BLACKLISTY I TREŚCI NIEPODRĘCZNIKOWYCH
   Całkowicie pomiń i odrzuć wszelkie materiały zawierające frazę "egzamin 2026", arkusze
   egzaminacyjne, pytania testowe z kluczem odpowiedzi, spisy treści, bibliografie lub przedmowy.
   W takim wypadku zwróć natychmiast obiekt: {"skip": true}.

6. KOMPLETNE ZDANIA
   Zawsze domykaj myśli. Tekst nie może urywać się w połowie zdania. Jeśli fragment
   kończy się urwanym zdaniem w źródle, pomiń ten urwany fragment i zakończ na ostatniej
   pełnej myśli.

Zwróć WYŁĄCZNIE poprawny obiekt JSON (bez ```), dokładnie w tej strukturze:

{
  "chapterTitle": "Zwięzły tytuł opracowanego fragmentu",
  "toc": [{ "title": "Tytuł sekcji", "anchorId": "unikalny-slug" }],
  "pages": [{ "pageNumber": 1, "htmlContent": "<h3 id=\\"unikalny-slug\\">Sekcja</h3><p>Treść…</p>" }],
  "chapterQuiz": [{ "question": "Pytanie sprawdzające?", "answer": "Odpowiedź" }]
}
"""


# ─────────────────────────────────────────────────────────────────────────────
# Czyszczenie i dzielenie tekstu
# ─────────────────────────────────────────────────────────────────────────────

def clean_ocr_text(raw_text: str) -> str:
    """Usuwa artefakty PDF/OCR, zanim tekst trafi do modelu."""
    text = raw_text.replace("\r\n", "\n").replace("\f", "\n")

    # Markery stron w kilku spotykanych wariantach.
    text = re.sub(r"---\s*STRONA\s+\d+\s*---", "", text, flags=re.IGNORECASE)
    text = re.sub(r"^\s*STRONA\s+\d+\s*$", "", text, flags=re.IGNORECASE | re.MULTILINE)
    # Osamotniony numer strony w swojej własnej linii.
    text = re.sub(r"^\s*\d{1,4}\s*$", "", text, flags=re.MULTILINE)
    # Żywa pagina / nagłówki: "ROZDZIAL 2 • ŚCIANY TUŁOWIA", "TOM 1".
    text = re.sub(r"^\s*ROZDZIA[ŁL]\s+\d+\s*[•·-]?.*$", "", text, flags=re.IGNORECASE | re.MULTILINE)
    text = re.sub(r"^\s*TOM\s+([0-9IVX]+)\s*[•·-]?.*$", "", text, flags=re.IGNORECASE | re.MULTILINE)
    # Odsyłacze do rycin i tabel: (Ryc. 12.3), (Tab. 4)
    text = re.sub(r"\([Rr]yc\.\s*[^)]*\)", "", text)
    text = re.sub(r"\([Tt]ab\.\s*[^)]*\)", "", text)
    # Przeniesienia wyrazów: "prze-\npony" → "przepony".
    text = re.sub(r"(\w)-\n(\w)", r"\1\2", text)

    text = re.sub(r"[ \t]{2,}", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def is_blacklisted(chunk: str) -> str | None:
    """Zwraca wzorzec, który odrzuca pakiet po treści, albo None."""
    for pattern, rx in zip(BLACKLIST_PATTERNS, BLACKLIST_RE):
        if rx.search(chunk):
            return pattern
    return None


def is_blacklisted_filename(path: Path) -> bool:
    """
    Odrzuca cały plik po nazwie, zanim zostanie w ogóle wczytany.

    To jedyny filtr, który zatrzymuje "Anatomia egzamin 2026 WF.txt": jego treść
    nie zawiera żadnej z fraz z czarnej listy — identyfikuje go wyłącznie nazwa.
    """
    return bool(FILENAME_BLACKLIST_RE.search(path.name))


def strip_markdown(html: str) -> str:
    """
    Ostatnia deska ratunku dla treści z resztkami Markdownu.

    Preferowaną ścieżką jest odrzucenie odpowiedzi i ponowienie zapytania —
    model zwykle poprawia się przy drugiej próbie i dostajemy prawdziwy HTML.
    Dopiero gdy wszystkie próby zawiodą, zamiast tracić cały rozdział czyścimy
    znaczniki: `**tekst**` staje się `<strong>tekst</strong>`, a osierocone
    znaki są usuwane. Lepiej zapisać poprawny HTML niż stracić treść albo
    pokazać czytelnikowi gwiazdki.
    """
    # Parzyste pary trafiają do <strong>, żeby nie gubić intencji wyróżnienia.
    html = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", html, flags=re.DOTALL)
    html = re.sub(r"__(.+?)__", r"<strong>\1</strong>", html, flags=re.DOTALL)
    # Nagłówki Markdown → <h3>, listy → zwykłe akapity.
    html = re.sub(r"^\s{0,3}#{1,6}\s*(.+)$", r"<h3>\1</h3>", html, flags=re.MULTILINE)
    html = re.sub(r"^\s{0,3}[-*+]\s+(.+)$", r"<p>\1</p>", html, flags=re.MULTILINE)
    # Cokolwiek zostało jest już tylko szumem.
    return html.replace("**", "").replace("__", "")


#: Numerowany nagłówek sekcji, np. "3.1.1.1 OBOJCZYK".
#
# Celowo NIE kotwiczony do początku linii. Sprawdzone na korpusie: przy
# kotwiczeniu `^\d+\.\d+` liczba trafień w tomach Narkiewicza wynosi 0, bo OCR
# wtapia nagłówki w sąsiedni tekst. Bez kotwicy jest ich 228/324/361/390.
#
# Separator to `\s{1,6}`, a nie spacja: w tym OCR numer sekcji stoi we własnej
# linii, a tytuł zaczyna się dopiero w następnej. Przy `[ \t]+` regex znajduje
# 0 nagłówków, przy przejściu przez znak nowej linii — 328 w samym tomie 2.
# Górna granica trzyma dopasowanie w obrębie sąsiednich linii, żeby numer nie
# skleił się z nagłówkiem oddalonym o kilka pustych wierszy.
SECTION_HEADER_RE = re.compile(
    r"(?<![\d.])(\d+(?:\.\d+){1,3})\s{1,6}([A-ZŁŚŻŹĆĘĄÓŃ][A-ZŁŚŻŹĆĘĄÓŃa-ząćęłńóśźż ,\-]{3,60})"
)

#: Poniżej tylu nagłówków uznajemy tom za pozbawiony numeracji i wracamy do
#: podziału po rozmiarze. Bochenek ma ich 0 — sam tekst ciągły.
MIN_HEADERS_FOR_STRUCTURE = 20


def _looks_like_heading(title: str) -> bool:
    """
    Odróżnia nagłówek sekcji od podpisu ryciny o tym samym numerze.

    W źródle ten sam numer występuje dwa razy: raz jako nagłówek pisany
    wersalikami ("3.1 KOŚCI KOŃCZYNY GÓRNEJ") i raz jako podpis ryciny pisany
    normalnie ("3.1 Obojczyk prawy"). Dzielimy wyłącznie na tych pierwszych,
    inaczej rozdział pękałby na każdym odsyłaczu do ilustracji.
    """
    letters = [c for c in title if c.isalpha()]
    if len(letters) < 4:
        return False
    upper_ratio = sum(1 for c in letters if c.isupper()) / len(letters)
    return upper_ratio >= 0.8


def split_by_structure(text: str, max_chars: int = MAX_CHUNK_CHARS) -> list[str] | None:
    """
    Dzieli tom na sekcje po numerowanych nagłówkach.

    Zwraca None, gdy tom nie ma wystarczającej numeracji — wtedy wywołujący
    wraca do podziału po rozmiarze. Sekcje dłuższe niż limit są dodatkowo
    cięte przez `split_into_chunks`, bo sam nagłówek nie gwarantuje, że
    fragment zmieści się w oknie modelu.
    """
    heads = [
        m for m in SECTION_HEADER_RE.finditer(text)
        if _looks_like_heading(m.group(2))
    ]
    if len(heads) < MIN_HEADERS_FOR_STRUCTURE:
        return None

    sections: list[str] = []
    for i, m in enumerate(heads):
        end = heads[i + 1].start() if i + 1 < len(heads) else len(text)
        body = text[m.start():end].strip()
        if body:
            sections.append(body)

    # Sekcja nadal ponad limitem trafia do podziału po rozmiarze; bardzo krótka
    # (sam nagłówek bez treści) doklejana jest do następnej.
    out: list[str] = []
    carry = ""
    for sec in sections:
        sec = (carry + "\n\n" + sec).strip() if carry else sec
        carry = ""
        if len(sec) < 400:
            carry = sec
            continue
        if len(sec) > max_chars:
            out.extend(split_into_chunks(sec))
        else:
            out.append(sec)
    if carry:
        if out:
            out[-1] = out[-1] + "\n\n" + carry
        else:
            out.append(carry)
    return out


def split_into_chunks(
    text: str,
    min_chars: int = MIN_CHUNK_CHARS,
    max_chars: int = MAX_CHUNK_CHARS,
) -> list[str]:
    """
    Dzieli tekst na pakiety, respektując granice akapitów.

    W poprzedniej wersji warunek podziału wymagał jednocześnie przekroczenia
    `max_chars` i osiągnięcia `min_chars`, więc pojedynczy bardzo długi akapit
    nigdy nie był dzielony i powstawał pakiet grubo ponad limitem, który model
    ucinał. Tutaj zbyt długi akapit jest twardo dzielony po granicy zdania.
    """
    paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]

    # Twardy podział akapitów przekraczających limit.
    normalised: list[str] = []
    for para in paragraphs:
        if len(para) <= max_chars:
            normalised.append(para)
            continue
        sentences = re.split(r"(?<=[.!?])\s+", para)
        buf = ""
        for sentence in sentences:
            if buf and len(buf) + len(sentence) + 1 > max_chars:
                normalised.append(buf.strip())
                buf = sentence
            else:
                buf = f"{buf} {sentence}".strip()
        if buf:
            normalised.append(buf.strip())

    # Skorowidze i tabele nie mają granic zdań, które rozpoznaje powyższy podział
    # ("Trunci intestinales 60.1" — kropka bez spacji po niej), więc fragment
    # potrafi zostać ponad limitem. Tniemy go twardo po granicy słowa: pakiet
    # ponad limitem to dokładnie ten, który model ucinał w połowie zdania.
    hard_split: list[str] = []
    for piece in normalised:
        while len(piece) > max_chars:
            cut = piece.rfind(" ", 0, max_chars)
            if cut <= 0:
                cut = max_chars
            hard_split.append(piece[:cut].strip())
            piece = piece[cut:].strip()
        if piece:
            hard_split.append(piece)
    normalised = hard_split

    chunks: list[str] = []
    current: list[str] = []
    current_len = 0
    for para in normalised:
        if current and current_len + len(para) > max_chars:
            chunks.append("\n\n".join(current))
            current, current_len = [para], len(para)
        else:
            current.append(para)
            current_len += len(para) + 2

    if current:
        tail = "\n\n".join(current)
        # Doklejamy krótką resztkę do poprzedniego pakietu tylko wtedy, gdy
        # wynik nadal mieści się w limicie — inaczej to samo doklejenie tworzy
        # pakiet ponad limitem, czyli dokładnie ten, który model ucina.
        merged_len = len(chunks[-1]) + len(tail) + 2 if chunks else 0
        if chunks and len(tail) < min_chars // 2 and merged_len <= max_chars:
            chunks[-1] = chunks[-1] + "\n\n" + tail
        else:
            chunks.append(tail)

    assert all(len(c) <= max_chars for c in chunks), "pakiet ponad limitem"
    return chunks


def dedupe_chunks(chunks: list[str]) -> tuple[list[str], int]:
    """
    Usuwa pakiety identyczne co do treści.

    Zabezpieczenie przed tym, żeby ten sam fragment źródła trafił do wielu
    plików wyjściowych — dokładnie ten objaw zgłoszono po poprzednim przebiegu.
    """
    seen: set[str] = set()
    unique: list[str] = []
    duplicates = 0
    for chunk in chunks:
        # Normalizacja białych znaków, żeby złapać też kosmetyczne różnice.
        digest = hashlib.sha256(re.sub(r"\s+", " ", chunk).strip().encode("utf-8")).hexdigest()
        if digest in seen:
            duplicates += 1
            continue
        seen.add(digest)
        unique.append(chunk)
    return unique, duplicates


# ─────────────────────────────────────────────────────────────────────────────
# Nazewnictwo
# ─────────────────────────────────────────────────────────────────────────────

def to_valid_identifier(name: str) -> str:
    """Poprawny identyfikator zmiennej TS (camelCase)."""
    clean = re.sub(r"[^a-zA-Z0-9_]+", " ", name).strip()
    words = clean.split()
    if not words:
        return "chapterData"
    ident = words[0].lower() + "".join(w.capitalize() for w in words[1:])
    if ident[0].isdigit():
        ident = "c" + ident
    return ident + "Data"


def to_slug(name: str) -> str:
    """Slug do nazwy pliku i anchorId."""
    s = name.lower()
    for src, dst in [("ą", "a"), ("ć", "c"), ("ę", "e"), ("ł", "l"), ("ń", "n"),
                     ("ó", "o"), ("ś", "s"), ("ź", "z"), ("ż", "z")]:
        s = s.replace(src, dst)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "rozdzial"


# ─────────────────────────────────────────────────────────────────────────────
# Klient i walidacja odpowiedzi
# ─────────────────────────────────────────────────────────────────────────────

def get_client() -> OpenAI:
    """Klient DeepSeek z obsługą środowiska Windows."""
    insecure = os.getenv("FABRYKA_INSECURE_TLS", "1") == "1"
    http_client = httpx.Client(verify=not insecure, timeout=180.0)
    return OpenAI(
        api_key=DEEPSEEK_API_KEY,
        base_url="https://api.deepseek.com",
        http_client=http_client,
    )


class PayloadError(ValueError):
    """Odpowiedź modelu nie nadaje się do zapisu."""


def strip_code_fence(raw: str) -> str:
    raw = raw.strip()
    if raw.startswith("```"):
        raw = re.sub(r"^```[a-zA-Z]*\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)
    return raw.strip()


def validate_payload(data: dict) -> dict:
    """
    Sprawdza strukturę i czystość odpowiedzi.
    Egzekwuje 100% poprawności, brak Markdownu, brak czarnej listy oraz brak szumu OCR.
    """
    if data.get("skip") is True:
        return data

    dumped = json.dumps(data, ensure_ascii=False).lower()
    if "egzamin 2026" in dumped or "anatomia egzamin" in dumped:
        raise PayloadError("wykryto frazę z czarnej listy (egzamin 2026)")

    for field in ("chapterTitle", "toc", "pages", "chapterQuiz"):
        if field not in data:
            raise PayloadError(f"brak pola '{field}'")

    title = data.get("chapterTitle", "")
    if re.search(r"\bTom\s+[0-9IVX]+\b|\bRozdzia[łl]\s+\d+\b", title, re.IGNORECASE):
        cleaned_title = re.sub(r"\bTom\s+[0-9IVX]+[•·-]?\s*", "", title, flags=re.IGNORECASE).strip()
        data["chapterTitle"] = cleaned_title or title

    if not isinstance(data["pages"], list) or not data["pages"]:
        raise PayloadError("pole 'pages' jest puste")

    for page in data["pages"]:
        html = page.get("htmlContent", "")
        if not html.strip():
            raise PayloadError(f"pusta treść strony {page.get('pageNumber')}")

        found = MARKDOWN_RE.search(html)
        if found:
            raise PayloadError(f"Markdown w treści: {found.group(0)!r}")

        # Biała lista HTML. Treść idzie do `dangerouslySetInnerHTML`, więc to
        # jedyne miejsce, w którym da się zagwarantować, że przeglądarka nie
        # dostanie niczego wykonywalnego.
        violations = disallowed_html(html)
        if violations:
            raise PayloadError("HTML poza białą listą: " + ", ".join(violations[:4]))

        if "--- STRONA" in html or re.search(r"\bRyc\.\s*\d", html) or re.search(r"\bTab\.\s*\d", html):
            raise PayloadError("nieusunięty marker OCR lub znacznik książkowy w treści")

        # Urwane zdanie na końcu strony — objaw limitu tokenów.
        tail = re.sub(r"<[^>]+>", "", html).strip()
        if tail and tail[-1] not in ".!?:›»\"'":
            raise PayloadError("treść kończy się urwanym zdaniem")

    return data


def process_chunk_with_retry(chunk: str, client: OpenAI, max_retries: int = MAX_RETRIES) -> dict:
    """Wysyła pakiet do modelu, waliduje odpowiedź, ponawia przy błędzie."""
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": f"Opracuj poniższy fragment podręcznika:\n\n{chunk}"},
    ]

    last_err: Exception | None = None
    for attempt in range(1, max_retries + 1):
        try:
            response = client.chat.completions.create(
                model=MODEL,
                messages=messages,
                response_format={"type": "json_object"},
                temperature=0.2,
                max_tokens=MAX_TOKENS,
            )
            choice = response.choices[0]

            # Odpowiedź ucięta limitem tokenów jest niekompletna z definicji —
            # to była przyczyna zdań kończących się w połowie. Logujemy wyraźnie,
            # bo powtarzające się `length` oznacza, że pakiety są za duże i
            # trzeba zejść z MAX_CHUNK_CHARS, a nie tylko ponawiać.
            if choice.finish_reason != "stop":
                if choice.finish_reason == "length":
                    print(
                        f"  [OBCIĘCIE] Model wyczerpał limit {MAX_TOKENS} tokenów "
                        f"(próba {attempt}/{max_retries}). Odpowiedź odrzucona — "
                        f"nic uciętego nie trafi na dysk."
                    )
                raise PayloadError(
                    f"odpowiedź niedokończona (finish_reason={choice.finish_reason!r}); "
                    f"zmniejsz pakiet lub zwiększ max_tokens"
                )

            data = json.loads(strip_code_fence(choice.message.content))

            # Na ostatniej próbie ratujemy treść zamiast tracić cały rozdział:
            # czyścimy resztki Markdownu i walidujemy jeszcze raz.
            if attempt == max_retries:
                try:
                    return validate_payload(data)
                except PayloadError as err:
                    rescuable = "Markdown" in str(err) or "białą listą" in str(err)
                    if not rescuable:
                        raise
                    print(f"  [SANITYZACJA] {err} — czyszczę treść zamiast odrzucać pakiet.")
                    for page in data.get("pages", []):
                        html = strip_markdown(page.get("htmlContent", ""))
                        page["htmlContent"] = sanitize_html(html)
                    # Ponowna walidacja jest istotna: jeśli sanityzacja czegoś
                    # nie domknęła, pakiet i tak nie trafi na dysk.
                    return validate_payload(data)

            return validate_payload(data)

        except (PayloadError, json.JSONDecodeError) as err:
            last_err = err
            time.sleep(2 * attempt)
        except Exception as err:  # sieć, limity API
            last_err = err
            time.sleep(3 * attempt)

    raise last_err if last_err else RuntimeError("nieznany błąd")


# ─────────────────────────────────────────────────────────────────────────────
# Zapis
# ─────────────────────────────────────────────────────────────────────────────

#: Pola zapisywane do .ts — dokładnie te, których wymaga `StructuredChapter`.
CHAPTER_FIELDS = ("chapterTitle", "toc", "pages", "chapterQuiz")


def save_ts_file(data: dict, out_path: Path, var_name: str) -> None:
    """
    Zapisuje rozdział jako moduł TypeScript.

    Zapisujemy wyłącznie pola z `CHAPTER_FIELDS`. Model bywa rozmowny i potrafi
    dołożyć własne klucze (np. "skip", "notes"), a każdy nadmiarowy klucz jedzie
    potem w payloadzie RSC do przeglądarki, mimo że nic go nie renderuje.
    """
    data = {k: data[k] for k in CHAPTER_FIELDS if k in data}
    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    content = (
        'import type { StructuredChapter } from "@/types/theory";\n\n'
        f"export const {var_name}: StructuredChapter = {json_str};\n"
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(content, encoding="utf-8")


def get_volume_tag(filename: str) -> tuple[str, str]:
    fn = filename.lower()
    if "bochenek" in fn:
        return "bochenek1", "Bochenek Tom 1 — Anatomia Ogólna, Kości, Stawy, Mięśnie"
    for n, desc in [
        (1, "Tom 1 — Anatomia Ogólna i Ściany Tułowia"),
        (2, "Tom 2 — Kończyna Górna i Kończyna Dolna"),
        (3, "Tom 3 — Układy Narządów Wewnętrznych"),
        (4, "Tom 4 — Szyja, Głowa i Mózgowie"),
    ]:
        if f"tom {n}" in fn or f"tom{n}" in fn:
            return f"tom{n}", desc
    return "inne", "Materiały Uzupełniające"


def process_single_task(args) -> dict | None:
    tag, chunk_idx, total_chunks, chunk, out_dir = args

    existing = list(out_dir.glob(f"{tag}-czesc-{chunk_idx + 1}-*.ts"))
    if existing:
        fn = existing[0].name.replace(".ts", "")
        return {"tag": tag, "filename": fn, "varName": to_valid_identifier(fn),
                "status": "skipped", "path": existing[0]}

    client = get_client()
    try:
        t0 = time.time()
        data = process_chunk_with_retry(chunk, client)
        if data.get("skip") is True:
            print(f"[{tag.upper()}] Pakiet {chunk_idx + 1}/{total_chunks} pominięty (treść niepodręcznikowa)")
            return {"tag": tag, "status": "skipped_non_textbook"}

        title = data.get("chapterTitle", f"Pakiet {chunk_idx + 1}")
        slug = to_slug(title)
        filename = f"{tag}-czesc-{chunk_idx + 1}-{slug}.ts"
        var_name = to_valid_identifier(f"{tag}_czesc_{chunk_idx + 1}_{slug}")
        out_path = out_dir / filename
        save_ts_file(data, out_path, var_name)
        print(f"[{tag.upper()}] Pakiet {chunk_idx + 1}/{total_chunks} "
              f"({time.time() - t0:.1f}s) -> {filename}")
        return {"tag": tag, "filename": filename.replace(".ts", ""),
                "varName": var_name, "status": "generated", "path": out_path}
    except Exception as err:
        print(f"[{tag.upper()} BŁĄD] Pakiet {chunk_idx + 1}/{total_chunks}: {err}")
        return None


def update_barrel_files(out_dir: Path) -> None:
    """Buduje indeksy na podstawie plików obecnych na dysku."""
    content_files = [f for f in sorted(out_dir.glob("*.ts")) if not f.name.startswith("index")]

    modules_by_tag: dict[str, list[dict]] = {}
    for f in content_files:
        m_var = re.search(r"export const (\w+)", f.read_text(encoding="utf-8"))
        m_name = re.match(r"^([a-z0-9]+)-czesc-(\d+)-(.+)$", f.name.replace(".ts", ""))
        if not (m_var and m_name):
            continue
        modules_by_tag.setdefault(m_name.group(1), []).append({
            "filename": f.name.replace(".ts", ""),
            "varName": m_var.group(1),
            "idx": int(m_name.group(2)),
        })

    for tag, mods in modules_by_tag.items():
        mods.sort(key=lambda m: m["idx"])
        imports = "\n".join(f'import {{ {m["varName"]} }} from "./{m["filename"]}";' for m in mods)
        exports = "\n".join(f'export * from "./{m["filename"]}";' for m in mods)
        listing = (
            f"\nexport const {tag}Chapters = [\n"
            + ",\n".join(f'  {{ id: "{m["filename"]}", data: {m["varName"]} }}' for m in mods)
            + "\n];\n"
        )
        (out_dir / f"{tag}.ts").write_text(imports + "\n\n" + exports + "\n" + listing, encoding="utf-8")

    index = "\n".join(f'export * from "./{tag}";' for tag in sorted(modules_by_tag)) + "\n"
    (out_dir / "index.ts").write_text(index, encoding="utf-8")
    print(f"[INDEKS] Zaktualizowano indeksy (tomy: {sorted(modules_by_tag)})")


# ─────────────────────────────────────────────────────────────────────────────

def build_tasks(out_dir: Path) -> list[tuple]:
    src_dir = Path("materiały-źródłowe/anatomia")
    if not src_dir.exists():
        src_dir = Path("../materiały-źródłowe/anatomia")

    txt_files = sorted(src_dir.glob("*.txt"))
    if not txt_files:
        print(f"Nie znaleziono plików .txt w {src_dir}")
        return []

    # Odrzucenie po nazwie idzie PRZED selekcją tomów. Wcześniej arkusz
    # egzaminacyjny wypadał z potoku tylko dlatego, że jego nazwa nie pasowała
    # do wzorca "tom 1"–"tom 4" — czyli przez przypadek, a nie przez filtr.
    rejected = [f for f in txt_files if is_blacklisted_filename(f)]
    for f in rejected:
        print(f"  [POMINIĘTO PLIK] {f.name} — nazwa na czarnej liście")

    candidates = [f for f in txt_files if not is_blacklisted_filename(f)]
    wanted = [f for f in candidates
              if any(x in f.name.lower() for x in ["tom 1", "tom 2", "tom 3", "tom 4"])]
    print(f"Tomy do przetworzenia ({len(wanted)}):")
    for f in wanted:
        print(f"  - {f.name}")

    all_tasks: list[tuple] = []
    # Globalny rejestr skrótów: ten sam fragment nie może trafić do dwóch tomów.
    global_seen: set[str] = set()

    for txt_file in wanted:
        tag, desc = get_volume_tag(txt_file.name)
        raw_text = None
        for enc in ("utf-8", "cp1250", "iso-8859-2", "latin-1"):
            try:
                raw_text = txt_file.read_text(encoding=enc)
                break
            except UnicodeDecodeError:
                continue
        if raw_text is None:
            print(f"  [POMINIĘTO] Nie udało się odczytać {txt_file.name}")
            continue

        cleaned = clean_ocr_text(raw_text)
        # Podział po numerowanych nagłówkach, gdy tom je ma; inaczej po
        # rozmiarze. Bochenek nie ma numeracji, więc dla niego zawsze zadziała
        # ścieżka zapasowa.
        structural = split_by_structure(cleaned)
        mode = "nagłówki" if structural is not None else "rozmiar"
        chunks = structural if structural is not None else split_into_chunks(cleaned)
        chunks, dupes = dedupe_chunks(chunks)

        kept, blacklisted, cross_volume = [], 0, 0
        for chunk in chunks:
            rule = is_blacklisted(chunk)
            if rule:
                blacklisted += 1
                continue
            digest = hashlib.sha256(re.sub(r"\s+", " ", chunk).strip().encode()).hexdigest()
            if digest in global_seen:
                cross_volume += 1
                continue
            global_seen.add(digest)
            kept.append(chunk)

        oversized = sum(1 for c in kept if len(c) > MAX_CHUNK_CHARS)
        print(f"\n{desc} (tag: {tag})")
        print(f"  podział: {mode}")
        print(f"  pakiety: {len(kept)} | duplikaty: {dupes} | "
              f"międzytomowe duplikaty: {cross_volume} | czarna lista: {blacklisted} | "
              f"ponad limit: {oversized}")

        for idx, chunk in enumerate(kept):
            all_tasks.append((tag, idx, len(kept), chunk, out_dir))

    return all_tasks


def main() -> None:
    parser = argparse.ArgumentParser(description="Fabryka wiedzy — potok ingestii anatomii.")
    parser.add_argument("--dry-run", action="store_true",
                        help="Podziel i zwaliduj wejście bez wywołań API.")
    args = parser.parse_args()

    out_dir = Path("src/data/anatomia/tomy")
    out_dir.mkdir(parents=True, exist_ok=True)

    all_tasks = build_tasks(out_dir)
    if not all_tasks:
        return

    print(f"\nŁĄCZNIE: {len(all_tasks)} pakietów.")

    if args.dry_run:
        print("[DRY RUN] Zakończono bez wywołań API.")
        return

    if not DEEPSEEK_API_KEY:
        print("\n[BŁĄD] Brak DEEPSEEK_API_KEY. Uzupełnij .env (patrz .env.example).")
        sys.exit(1)

    print(f"Start ({MAX_WORKERS} wątków, max_tokens={MAX_TOKENS})…")
    start = time.time()
    done = 0

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = [pool.submit(process_single_task, task) for task in all_tasks]
        for _ in concurrent.futures.as_completed(futures):
            done += 1
            if done % 10 == 0 or done == len(all_tasks):
                print(f"-- Postęp: {done}/{len(all_tasks)} ({time.time() - start:.1f}s) --")

    update_barrel_files(out_dir)
    print(f"\nZAKOŃCZONO w {(time.time() - start) / 60:.1f} min.")


if __name__ == "__main__":
    main()
