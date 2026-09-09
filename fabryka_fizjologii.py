#!/usr/bin/env python3
r"""
fabryka_fizjologii.py

Potok ingestii modułu FIZJOLOGIA: "Anatomia i fizjologia człowieka"
Waldemara Lewińskiego (Operon, 2001) → silnie typowane moduły TypeScript.

Bliźniak `fabryka_wiedzy.py`. Identyczne pozostają: prompt antyplagiatowy,
dwumodelowy silnik, biała lista HTML, walidacja `finish_reason`, limity
tokenów, pula wątków i deduplikacja SHA-256. Różni się wyłącznie warstwą
wejściową, bo Lewiński ma inną budowę niż Bochenek i Narkiewicz.

Co jest inne i dlaczego:

  1. ŹRÓDŁO. Jeden plik zamiast czterech tomów, kodowany cp1250, z PDF-a
     wyekstrahowanego bez mapy glifów: polskie znaki diakrytyczne nie są
     źle zakodowane, tylko USUNIĘTE ("mięśni" → "mini", "KOŚCI" → "KOCI").
     To ten sam stan, w jakim przychodziły tomy anatomii — model odtwarza
     poprawną polszczyznę przy parafrazie, więc nie próbujemy tego naprawiać
     regexem, bo każda taka próba zgaduje.

  2. PODZIAŁ. Książka nie jest numerowana tak jak tomy anatomii. Właściwą
     jednostką tematyczną jest u Lewińskiego BANER: całe zdanie zapisane
     wersalikami nad akapitem ("SZKIELET DOROSŁEGO CZŁOWIEKA TWORZY OK. 206
     KOŚCI"). Jest ich ~205 i to one, a nie numeracja, wyznaczają tematy.
     Numeracja N.M dokłada granice sekcji, a same rozdziały (1–10) nadają
     pakietom przynależność do działu.

  3. BEZ GOŁEGO "N.". Wzorzec `^\d+\.` w tej książce trafia częściej w
     element listy numerowanej ("2. Strzałkowe – biegnące od przodu ku
     tyłowi.") niż w tytuł rozdziału. Rozdziały rozpoznajemy więc przez
     porównanie tytułu ze spisem treści, a nie po samym numerze.

  4. ŚMIECI. Żywa pagina (92×), wiersze spisu treści, podpisy rycin,
     rozstrzelone wersaliki ("O R G A N I Z M U") i 20-tysięczny skorowidz
     na końcu — wszystko to znika przed podziałem.

Użycie:
    python fabryka_fizjologii.py            # pełny przebieg
    python fabryka_fizjologii.py --dry-run  # dzieli i waliduje, bez API
"""

from __future__ import annotations

import argparse
import concurrent.futures
import difflib
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

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")

# ─────────────────────────────────────────────────────────────────────────────
# Konfiguracja silnika przetwarzającego (Dual-Model Architecture)
# ─────────────────────────────────────────────────────────────────────────────

# Jeśli dostępny jest klucz Gemini, używamy Flash API; w przeciwnym razie DeepSeek.
if GEMINI_API_KEY:
    MODEL = os.getenv("PROCESSOR_MODEL", "gemini-2.0-flash")
    BASE_URL = os.getenv("PROCESSOR_BASE_URL", "https://generativelanguage.googleapis.com/v1beta/openai/")
    API_KEY = GEMINI_API_KEY
    MODEL_DISPLAY = f"Google Flash ({MODEL})"
else:
    MODEL = os.getenv("PROCESSOR_MODEL", "deepseek-chat")
    BASE_URL = os.getenv("PROCESSOR_BASE_URL", "https://api.deepseek.com")
    API_KEY = DEEPSEEK_API_KEY
    MODEL_DISPLAY = f"DeepSeek ({MODEL})"

# Poprzednio 4000 — model regularnie kończył w połowie zdania i ucięty tekst
# trafiał do plików .ts.
MAX_TOKENS = 8192

MIN_CHUNK_CHARS = 5000
MAX_CHUNK_CHARS = 8000

MAX_WORKERS = 8
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

2. KOREKTA OCR, ODTWARZANIE DIAKRYTYKÓW I ZROZUMIAŁOŚĆ
   Tekst źródłowy cierpi na degradację OCR i brak polskich znaków diakrytycznych
   (np. „koci” zamiast „kości”, „miesni” zamiast „mięśni”). Twoim kluczowym zadaniem
   jest wywnioskowanie kontekstu i zrekonstruowanie w pełni poprawnej polszczyzny
   z kompletnymi znakami diakrytycznymi (ą, ć, ę, ł, ń, ó, ś, ź, ż). Wychwytuj i usuwaj
   wszelkie błędy po skanowaniu, niezrozumiałe ciągi liter oraz literówki. Scalaj połamane
   słowa i linie. Tekst musi być płynny, wysoce zrozumiały i w 100% poprawny ortograficznie.

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
   - <br> dla pojedynczych załamań linii w razie konieczności,
   - <h3 id="..."> i <h4 id="..."> dla nagłówków sekcji (z unikalnym anchorId pasującym do toc).

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

# ── Czyszczenie specyficzne dla Lewińskiego ─────────────────────────────────

#: Wiersz spisu treści: numer, tytuł, a na końcu numer strony po odstępie.
#: Rozpoznawany po układzie odstępów, więc musi zniknąć zanim je spłaszczymy.
TOC_LINE_RE = re.compile(
    r"^[ \t]*\d+(?:\.\d+)*[.!]?[ \t]+\S.{2,72}?[ \t]{2,}[\"']?[\d ]{1,6}-*[ \t]*$",
    re.MULTILINE,
)

#: Żywa pagina, powtórzona na 92 stronach.
RUNNING_HEADER_RE = re.compile(
    r"^[ \t]*ANATOMIA I FIZJOLOGIA CZ[LŁ]OWIEKA[ \t]*$", re.MULTILINE | re.IGNORECASE
)

#: Podpis ryciny stojący w osobnym wierszu ("Ryc. 61. Schemat kontroli…").
FIGURE_CAPTION_RE = re.compile(r"^[ \t]*Ryc\.\s*\d+.*$", re.MULTILINE)

#: OCR rozstrzelił wersaliki w nagłówkach: "O R G A N I Z M U" → "ORGANIZMU".
#: Bez tego baner nie przechodzi progu udziału wielkich liter.
SPACED_CAPS_RE = re.compile(r"(?:\b[A-ZĄĆĘŁŃÓŚŹŻ][ \t]){2,}[A-ZĄĆĘŁŃÓŚŹŻ]\b")

#: Skorowidz na końcu książki: ~29 tys. znaków haseł z numerami stron. Jako
#: pakiety byłyby to listy słów bez zdań — dokładnie to, co w korpusie
#: anatomii wyszło jako "skorowidz haseł" i nie nadawało się do czytania.
#:
#: Wzorzec celowo nie jest zakotwiczony na końcu wiersza ani nie wymaga "IN".
#: Pierwsza strona skorowidza łamie oba założenia: nagłówek stoi tam w jednym
#: wierszu z pierwszą kolumną haseł ("INDEKS   B   chitynaza 76"), a samo
#: słowo jest przeniesione przez łamanie strony ("IN-" / "DEKS"). Wersja
#: wymagająca osobnego wiersza trafiała dopiero w powtórzoną paginę strony
#: dalej i przepuszczała 8 656 znaków skorowidza do korpusu.
INDEX_MARKER_RE = re.compile(r"^[ \t]*(?:IN)?DEKS\b", re.MULTILINE | re.IGNORECASE)

#: "INDEKS" pada w książce dokładnie dwa razy: raz jako ostatnia pozycja
#: spisu treści, raz nad samym skorowidzem. Te dwa wystąpienia domykają
#: materiał z obu stron — pierwsze kończy stronę tytułową i spis treści,
#: drugie otwiera skorowidz. Stąd dwa progi zamiast dwóch osobnych wzorców.
FRONT_MATTER_FRACTION = 0.2
INDEX_TAIL_FRACTION = 0.8


def drop_front_matter(text: str) -> str:
    """
    Ucina stronę tytułową i spis treści.

    Same wiersze spisu usuwa `TOC_LINE_RE`, ale nie wszystkie: numer strony
    bywa rozbity ("4. Krenie 4 1") albo przeniesiony do kolejnego wiersza,
    a wtedy nie ma już po czym poznać, że to spis. Cięcie po znaczniku
    usuwa całość razem z resztkami.
    """
    cutoff = int(len(text) * FRONT_MATTER_FRACTION)
    for m in INDEX_MARKER_RE.finditer(text):
        if m.start() <= cutoff:
            return text[m.end():]
    return text


def drop_book_index(text: str) -> str:
    """Ucina skorowidz na końcu książki."""
    cutoff = int(len(text) * INDEX_TAIL_FRACTION)
    for m in INDEX_MARKER_RE.finditer(text):
        if m.start() >= cutoff:
            return text[:m.start()]
    return text


def clean_ocr_text(raw_text: str) -> str:
    """Usuwa artefakty PDF/OCR, zanim tekst trafi do podziału i do modelu."""
    text = raw_text.replace("\r\n", "\n").replace("\f", "\n")
    text = drop_book_index(text)
    text = drop_front_matter(text)

    # Kolejność jest istotna: spis treści i żywa pagina rozpoznawane są po
    # układzie odstępów, więc muszą zniknąć zanim `[ \t]{2,}` je spłaszczy.
    text = TOC_LINE_RE.sub("", text)
    text = RUNNING_HEADER_RE.sub("", text)
    text = FIGURE_CAPTION_RE.sub("", text)
    text = SPACED_CAPS_RE.sub(lambda m: re.sub(r"[ \t]", "", m.group(0)), text)

    # Osamotniony numer strony w swojej własnej linii.
    text = re.sub(r"^\s*\d{1,4}\s*$", "", text, flags=re.MULTILINE)
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
#: Działy książki, w kolejności spisu treści. Klucz jest tagiem plików
#: (`dzial4-czesc-12-….ts`), więc musi zostać przy [a-z0-9] — tego wymaga
#: parser indeksów w `update_barrel_files`.
#:
#: `ocr` to tytuł tak, jak wychodzi z tej ekstrakcji PDF — bez diakrytyków,
#: bo to jego szukamy w tekście. `title` to postać do wyświetlenia.
DZIALY: dict[str, dict[str, str]] = {
    "dzial1": {"ocr": "Wprowadzenie", "title": "Wprowadzenie", "icon": "🔬"},
    "dzial2": {"ocr": "Uklad ruchu", "title": "Układ ruchu", "icon": "🦴"},
    "dzial3": {"ocr": "Wymiana gazowa", "title": "Wymiana gazowa", "icon": "🫁"},
    "dzial4": {"ocr": "Krenie", "title": "Krążenie", "icon": "❤️"},
    "dzial5": {"ocr": "Pobieranie i trawienie pokarmów",
               "title": "Pobieranie i trawienie pokarmów", "icon": "🍽️"},
    "dzial6": {"ocr": "Osmoregulacja i wydalanie",
               "title": "Osmoregulacja i wydalanie", "icon": "💧"},
    "dzial7": {"ocr": "Rozród", "title": "Rozród", "icon": "👶"},
    "dzial8": {"ocr": "Koordynacja funkcji yciowych",
               "title": "Koordynacja funkcji życiowych", "icon": "🧠"},
    "dzial9": {"ocr": "Metabolizm i termoregulacja",
               "title": "Metabolizm i termoregulacja", "icon": "🔥"},
    "dzial10": {"ocr": "Uklad odpornociowy",
                "title": "Układ odpornościowy", "icon": "🛡️"},
}

#: Nagłówek-baner: całe zdanie wersalikami nad akapitem. To jest właściwa
#: jednostka tematyczna u Lewińskiego — jest ich ~205 w książce.
BANNER_HEADER_RE = re.compile(
    r"^[ \t]*([A-ZĄĆĘŁŃÓŚŹŻ][A-ZĄĆĘŁŃÓŚŹŻ0-9 ,;:%.\-–—()/]{19,90})$", re.MULTILINE
)

#: Nagłówek numerowany — wyłącznie N.M i N.M.K. Gołe "N." jest tu wyraźnie
#: częściej elementem listy niż tytułem, więc rozdziały łapiemy osobno.
NUMBERED_HEADER_RE = re.compile(
    r"^[ \t]*(\d{1,2}(?:\.\d{1,2}){1,2})\.?[ \t]+([A-ZĄĆĘŁŃÓŚŹŻ][^\n]{3,60})$",
    re.MULTILINE,
)

#: Kandydat na tytuł rozdziału: gołe "N." z tytułem. Weryfikowany dopiero
#: przez porównanie ze spisem treści — sam wzorzec nie wystarcza.
CHAPTER_HEADER_RE = re.compile(
    r"^[ \t]*(\d{1,2})\.[ \t]+([A-ZĄĆĘŁŃÓŚŹŻ][^\n]{3,60})$", re.MULTILINE
)

#: Odsyłacz zapisany wersalikami ("…PATRZ FIZJOLOGIA, ROZDZ. 4.3):") wygląda
#: jak baner, ale jest środkiem zdania.
CROSS_REF_RE = re.compile(r"ROZDZ|PATRZ|COREL", re.IGNORECASE)

#: Baner bywa łamany na dwa wiersze. Drugi wiersz nie zaczyna nowej sekcji.
TWO_LINE_BANNER_GAP = 120

#: Poniżej tylu punktów podziału uznajemy, że wzorzec nie pasuje do książki.
MIN_HEADERS_FOR_STRUCTURE = 20

#: Próg podobieństwa tytułu rozdziału do spisu treści.
CHAPTER_TITLE_RATIO = 0.75


def _normalise(title: str) -> str:
    """Sprowadza tytuł do samych liter — OCR gubi diakrytyki niestabilnie."""
    return re.sub(r"[^a-z]", "", title.lower())


def _chapter_tag(number: str, title: str) -> str | None:
    """
    Rozpoznaje tytuł rozdziału przez porównanie ze spisem treści.

    Numer sam z siebie nic nie znaczy: "2." otwiera zarówno rozdział
    "2. Układ ruchu", jak i drugi punkt listy "2. Strzałkowe – biegnące od
    przodu ku tyłowi.". Dopiero zgodność tytułu z tym, co zapowiada spis
    treści, odróżnia jedno od drugiego. Porównujemy z tolerancją, bo ta sama
    nazwa bywa wyekstrahowana raz jako "Uklad", raz jako "Uktad".
    """
    tag = f"dzial{number}"
    meta = DZIALY.get(tag)
    if not meta:
        return None
    ratio = difflib.SequenceMatcher(
        None, _normalise(title), _normalise(meta["ocr"])
    ).ratio()
    return tag if ratio >= CHAPTER_TITLE_RATIO else None


def _looks_like_banner(text: str) -> bool:
    """Odróżnia baner od wersalikowego fragmentu zdania."""
    letters = [c for c in text if c.isalpha()]
    if len(letters) < 16 or len(text.split()) < 3:
        return False
    if CROSS_REF_RE.search(text):
        return False
    return sum(1 for c in letters if c.isupper()) / len(letters) >= 0.9


def split_by_structure(
    text: str, max_chars: int = MAX_CHUNK_CHARS
) -> list[tuple[str, str]] | None:
    """
    Dzieli książkę na tematy i przypisuje każdy do działu.

    Punktem podziału jest baner, nagłówek N.M albo potwierdzony tytuł
    rozdziału. Dział niesiony jest w przód: baner nie mówi, w którym
    rozdziale stoi, więc dziedziczy ostatnio widziany. Rozdziały 1, 9 i 10
    nie mają w ogóle podsekcji, dlatego samo N.M nie wystarczyłoby do
    przypisania — ich treść wylądowałaby w rozdziale 8.

    Zwraca pary (tag, pakiet) albo None, gdy wzorzec nie pasuje do tekstu.
    """
    heads: list[tuple[int, str, str | None]] = []

    for m in CHAPTER_HEADER_RE.finditer(text):
        tag = _chapter_tag(m.group(1), m.group(2))
        if tag:
            heads.append((m.start(), "chapter", tag))

    for m in NUMBERED_HEADER_RE.finditer(text):
        # Tytuł zakończony kropką lub przecinkiem to zdanie, nie nagłówek.
        if re.search(r"[.,;:]$", m.group(2).strip()):
            continue
        tag = f"dzial{m.group(1).split('.')[0]}"
        heads.append((m.start(), "section", tag if tag in DZIALY else None))

    for m in BANNER_HEADER_RE.finditer(text):
        if _looks_like_banner(m.group(1)):
            heads.append((m.start(), "banner", None))

    heads.sort(key=lambda h: h[0])
    if len(heads) < MIN_HEADERS_FOR_STRUCTURE:
        return None

    # Drugi wiersz przełamanego banera nie otwiera nowej sekcji.
    merged: list[tuple[int, str, str | None]] = []
    for head in heads:
        if (
            merged
            and head[1] == "banner"
            and merged[-1][1] == "banner"
            and head[0] - merged[-1][0] < TWO_LINE_BANNER_GAP
        ):
            continue
        merged.append(head)

    sections: list[tuple[str, str]] = []
    current = "dzial1"
    for i, (pos, _kind, tag) in enumerate(merged):
        if tag:
            current = tag
        end = merged[i + 1][0] if i + 1 < len(merged) else len(text)
        body = text[pos:end].strip()
        if body:
            sections.append((current, body))

    # Sekcja ponad limitem trafia do podziału po rozmiarze; bardzo krótka
    # (sam nagłówek bez treści) doklejana jest do następnej.
    out: list[tuple[str, str]] = []
    carry = ""
    for tag, sec in sections:
        sec = (carry + "\n\n" + sec).strip() if carry else sec
        carry = ""
        if len(sec) < 400:
            carry = sec
            continue
        if len(sec) > max_chars:
            out.extend((tag, piece) for piece in split_into_chunks(sec))
        else:
            out.append((tag, sec))
    if carry:
        if out:
            out[-1] = (out[-1][0], out[-1][1] + "\n\n" + carry)
        else:
            out.append(("dzial1", carry))
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
    """Klient API (Google Flash lub DeepSeek) z obsługą środowiska Windows."""
    insecure = os.getenv("FABRYKA_INSECURE_TLS", "1") == "1"
    http_client = httpx.Client(verify=not insecure, timeout=180.0)
    return OpenAI(
        api_key=API_KEY,
        base_url=BASE_URL,
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

    for item in data.get("toc", []):
        if isinstance(item, dict):
            if "anchorId" in item and isinstance(item["anchorId"], str):
                item["anchorId"] = item["anchorId"].strip()
            if "title" in item and isinstance(item["title"], str):
                item["title"] = item["title"].strip()

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


#: Fragment nazwy pliku źródłowego. Książka leży w tym samym katalogu co tomy
#: anatomii; `fabryka_wiedzy.py` pomija ją, bo jej nazwa nie zawiera "tom N",
#: więc obie fabryki czytają z jednego katalogu, nie wchodząc sobie w drogę.
SOURCE_FILENAME_HINT = "lewi"

#: Katalog wyjściowy modułu fizjologii.
OUTPUT_DIR = Path("src/data/fizjologia/dzialy")


def find_source(src_dir: Path) -> Path | None:
    """Znajduje plik Lewińskiego po fragmencie nazwy."""
    for path in sorted(src_dir.glob("*.txt")):
        if SOURCE_FILENAME_HINT in path.name.lower():
            return path
    return None


def process_single_task(args) -> dict | None:
    tag, chunk_idx, total_chunks, chunk, out_dir, force = args

    if not force:
        existing = list(out_dir.glob(f"{tag}-czesc-{chunk_idx + 1}-*.ts"))
        if existing:
            fn = existing[0].name.replace(".ts", "")
            return {"tag": tag, "filename": fn, "varName": to_valid_identifier(fn),
                    "status": "skipped", "path": existing[0]}
    else:
        for old in out_dir.glob(f"{tag}-czesc-{chunk_idx + 1}-*.ts"):
            try:
                old.unlink()
            except Exception:
                pass

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

def build_tasks(out_dir: Path, force: bool = False) -> list[tuple]:
    src_dir = Path("materiały-źródłowe/anatomia")
    if not src_dir.exists():
        src_dir = Path("../materiały-źródłowe/anatomia")

    txt_file = find_source(src_dir)
    if txt_file is None:
        print(f"Nie znaleziono pliku Lewińskiego w {src_dir}")
        return []
    if is_blacklisted_filename(txt_file):
        print(f"  [POMINIĘTO PLIK] {txt_file.name} — nazwa na czarnej liście")
        return []
    print(f"Źródło: {txt_file.name}")

    raw_text = None
    for enc in ("utf-8", "cp1250", "iso-8859-2", "latin-1"):
        try:
            raw_text = txt_file.read_text(encoding=enc)
            break
        except UnicodeDecodeError:
            continue
    if raw_text is None:
        print(f"  [POMINIĘTO] Nie udało się odczytać {txt_file.name}")
        return []

    cleaned = clean_ocr_text(raw_text)
    print(f"  po czyszczeniu: {len(cleaned):,} znaków (z {len(raw_text):,})")

    structural = split_by_structure(cleaned)
    if structural is None:
        # Bez rozpoznanej struktury lepiej podzielić po rozmiarze niż udawać,
        # że tematy zostały znalezione. Wszystko ląduje wtedy w dziale 1.
        print("  [UWAGA] Nie rozpoznano struktury — podział po rozmiarze.")
        structural = [("dzial1", c) for c in split_into_chunks(cleaned)]
        mode = "rozmiar"
    else:
        mode = "banery + numeracja"

    chunks, dupes = dedupe_chunks([c for _tag, c in structural])
    kept_bodies = set(chunks)
    seen: set[str] = set()

    per_dzial: dict[str, list[str]] = {}
    blacklisted = 0
    for tag, chunk in structural:
        if chunk not in kept_bodies or chunk in seen:
            continue
        seen.add(chunk)
        rule = is_blacklisted(chunk)
        if rule:
            blacklisted += 1
            continue
        per_dzial.setdefault(tag, []).append(chunk)

    total = sum(len(v) for v in per_dzial.values())
    oversized = sum(1 for v in per_dzial.values() for c in v if len(c) > MAX_CHUNK_CHARS)
    print(f"\n  podział: {mode}")
    print(f"  pakiety: {total} | duplikaty: {dupes} | "
          f"czarna lista: {blacklisted} | ponad limit: {oversized}\n")

    all_tasks: list[tuple] = []
    for tag in sorted(per_dzial, key=lambda t: int(t.removeprefix("dzial"))):
        bodies = per_dzial[tag]
        meta = DZIALY[tag]
        chars = sum(len(b) for b in bodies)
        print(f"  {meta['icon']} {tag:8s} {meta['title']:34s} "
              f"{len(bodies):4d} pakietów  {chars:8,} znaków")
        for idx, chunk in enumerate(bodies):
            all_tasks.append((tag, idx, len(bodies), chunk, out_dir, force))

    return all_tasks


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Fabryka fizjologii — potok ingestii podręcznika Lewińskiego.")
    parser.add_argument("--dry-run", action="store_true",
                        help="Podziel i zwaliduj wejście bez wywołań API.")
    parser.add_argument("--limit", type=int, default=None,
                        help="Przetwórz tylko pierwsze N pakietów.")
    parser.add_argument("--force", action="store_true",
                        help="Wymuś ponowne wygenerowanie nawet jeśli pliki docelowe istnieją.")
    parser.add_argument("--workers", type=int, default=MAX_WORKERS,
                        help=f"Liczba wątków roboczych (domyślnie: {MAX_WORKERS}).")
    args = parser.parse_args()

    out_dir = OUTPUT_DIR
    out_dir.mkdir(parents=True, exist_ok=True)

    all_tasks = build_tasks(out_dir, force=args.force)
    if not all_tasks:
        return

    if args.limit is not None:
        all_tasks = all_tasks[:args.limit]
        print(f"\n[PILOT RUN] Nałożono limit do pierwszych {args.limit} pakietów.")

    print(f"\nŁĄCZNIE: {len(all_tasks)} pakietów do przetworzenia.")

    if args.dry_run:
        print("[DRY RUN] Zakończono bez wywołań API.")
        return

    if not API_KEY:
        print("\n[BŁĄD] Brak klucza API (GEMINI_API_KEY lub DEEPSEEK_API_KEY). Uzupełnij .env.")
        sys.exit(1)

    workers = min(args.workers, len(all_tasks))
    print(f"Start (silnik: {MODEL_DISPLAY}, {workers} wątków, max_tokens={MAX_TOKENS})…")
    start = time.time()
    done = 0

    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
        futures = [pool.submit(process_single_task, task) for task in all_tasks]
        for _ in concurrent.futures.as_completed(futures):
            done += 1
            if done % 10 == 0 or done == len(all_tasks):
                print(f"-- Postęp: {done}/{len(all_tasks)} ({time.time() - start:.1f}s) --")

    update_barrel_files(out_dir)
    print(f"\nZAKOŃCZONO w {(time.time() - start) / 60:.1f} min.")


if __name__ == "__main__":
    main()
