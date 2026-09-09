import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_47_strukturaElektronowaAtomowWieloelektronowychData: StructuredChapter = {
  "chapterTitle": "Struktura elektronowa atomów wieloelektronowych",
  "toc": [
    {
      "title": "Poziomy energetyczne w atomach wieloelektronowych",
      "anchorId": "poziomy-energetyczne-w-atomach-wieloelektronowych"
    },
    {
      "title": "Powłoki i podpowłoki elektronowe",
      "anchorId": "powloki-i-podpowloki-elektronowe"
    },
    {
      "title": "Zasady rozbudowy powłok elektronowych",
      "anchorId": "zasady-rozbudowy-powlok-elektronowych"
    },
    {
      "title": "Konfiguracje elektronowe pierwszych pierwiastków",
      "anchorId": "konfiguracje-elektronowe-pierwszych-pierwiastkow"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"poziomy-energetyczne-w-atomach-wieloelektronowych\">Poziomy energetyczne w atomach wieloelektronowych</h3><p>W atomach wieloelektronowych, w przeciwieństwie do atomu wodoru, poziomy energetyczne o tej samej głównej liczbie kwantowej <em>n</em> ulegają rozszczepieniu na podpoziomy o różnych energiach. Dzieje się tak na skutek wzajemnego odpychania elektronów oraz różnego przenikania orbitali. Jedynym poziomem, który nie ulega rozszczepieniu, jest poziom 1s, gdyż jest on niezdegenerowany również w atomie wodoru.</p><p>Dla przykładu, poziom odpowiadający liczbie kwantowej <em>n</em> = 2 w atomie wodoru jest czterokrotnie zdegenerowany, natomiast w atomach wieloelektronowych rozszczepia się na podpoziom 2s (niezdegenerowany) oraz podpoziom 2p (trójkrotnie zdegenerowany). Podobnie dla <em>n</em> = 3 zamiast jednego poziomu dziewięciokrotnie zdegenerowanego otrzymujemy podpoziomy: 3s (niezdegenerowany), 3p (trójkrotnie zdegenerowany) oraz 3d (pięciokrotnie zdegenerowany). Dla <em>n</em> = 4 obserwujemy podpoziomy: 4s, 4p, 4d i 4f, o degeneracji odpowiednio 1, 3, 5 i 7.</p><p>Warto zauważyć, że w miarę wzrostu głównej liczby kwantowej <em>n</em> poziomy energetyczne o różnych wartościach <em>n</em> mogą na siebie zachodzić. Na przykład poziom 4s leży nieco niżej niż poziom 3d, a poziom 4d wciska się pomiędzy poziomy 5s i 5p. Kolejność podpoziomów według wzrastającej energii można przedstawić na schemacie, który ułatwia zapamiętanie sekwencji: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p. Należy jednak pamiętać, że w niektórych przypadkach kolejność ta może ulegać zaburzeniom, o czym będzie mowa później.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"powloki-i-podpowloki-elektronowe\">Powłoki i podpowłoki elektronowe</h3><p>Analizując radialną gęstość prawdopodobieństwa napotkania elektronu w atomie wodoru, można zauważyć, że o położeniu głównego maksimum decyduje główna liczba kwantowa <em>n</em>. Maksimum to leży tym dalej od jądra, im większa jest wartość <em>n</em>. Poboczna liczba kwantowa <em>l</em> ma pewien wpływ na położenie maksimum, jednak w danym atomie główne maksima wszystkich orbitali o tej samej wartości <em>n</em> znajdują się w podobnej odległości od jądra.</p><p>Oznacza to, że elektrony o tej samej głównej liczbie kwantowej <em>n</em> mają podobne średnie odległości od jądra, tworząc tzw. <strong>powłokę elektronową</strong>. Powłoki te oznacza się symbolami literowymi: dla <em>n</em> = 1 stosuje się symbol K, dla <em>n</em> = 2 – L, dla <em>n</em> = 3 – M, dla <em>n</em> = 4 – N, itd. Elektrony znajdujące się najbliżej jądra tworzą powłokę K, a kolejne powłoki (L, M, N…) zawierają elektrony przebywające średnio coraz dalej od jądra.</p><p>W atomach wieloelektronowych, wraz ze wzrostem liczby atomowej Z, wszystkie orbitale (np. 1s, 2s, 2p) są położone coraz bliżej jądra, ponieważ wzrastający ładunek jądra silniej przyciąga elektrony. Z punktu widzenia właściwości chemicznych najważniejsze są elektrony znajdujące się na najbardziej zewnętrznej powłoce, zwane <strong>elektronami walencyjnymi</strong>. W przypadku metali przejściowych istotne mogą być również elektrony z drugiej, a nawet trzeciej powłoki od zewnątrz.</p><p>W obrębie powłoki wyróżnia się podpowłoki, określane przez poboczną liczbę kwantową <em>l</em>, takie jak podpowłoka s, p, d czy f.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zasady-rozbudowy-powlok-elektronowych\">Zasady rozbudowy powłok elektronowych</h3><p>Rozbudowę powłok elektronowych w atomach pierwiastków, od wodoru (Z=1) do lorensu (Z=103), opisują trzy podstawowe reguły.</p><p><strong>1. Zakaz Pauliego</strong> – w danym atomie nie mogą występować dwa elektrony, które miałyby identyczne wszystkie cztery liczby kwantowe. Wynika stąd, że na jednym orbitalu (określonym przez liczby <em>n</em>, <em>l</em>, <em>m</em>) mogą znajdować się co najwyżej dwa elektrony, różniące się spinową liczbą kwantową <em>m<sub>s</sub></em>, która przyjmuje wartości +1/2 lub -1/2.</p><p><strong>2. Reguła minimum energii</strong> – w stanie podstawowym atomu elektrony obsadzają orbitale w kolejności wzrastającej energii. Kolejność ta jest zgodna ze schematem przedstawionym wcześniej: najpierw obsadzany jest poziom 1s (maksymalnie 2 elektrony), następnie 2s (2 elektrony), 2p (6 elektronów), 3s (2 elektrony), 3p (6 elektronów), 4s (2 elektrony), 3d (10 elektronów), itd.</p><p><strong>3. Reguła Hunda</strong> – w przypadku orbitali zdegenerowanych (o tej samej energii) elektrony są rozmieszczane w taki sposób, aby liczba niesparowanych elektronów była możliwie największa. Na przykład dla poziomu 2p, który jest trójkrotnie zdegenerowany (orbitale 2p<sub>x</sub>, 2p<sub>y</sub>, 2p<sub>z</sub>), w atomie węgla (dwa elektrony na tym podpoziomie) korzystniejsza jest konfiguracja z dwoma elektronami niesparowanymi na różnych orbitalach, niż sparowanie ich na jednym orbitalu. Podobnie w atomie azotu (trzy elektrony na podpoziomie 2p) reguła Hunda preferuje konfigurację z trzema niesparowanymi elektronami, po jednym na każdym orbitalu.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"konfiguracje-elektronowe-pierwszych-pierwiastkow\">Konfiguracje elektronowe pierwszych pierwiastków</h3><p>Stosując powyższe reguły, można przewidzieć strukturę elektronową atomów w stanie podstawowym. Poniżej przedstawiono konfiguracje elektronowe dla pierwszych dziesięciu pierwiastków.</p><ul><li><strong>Wodór (H)</strong>: jeden elektron na orbitalu 1s, konfiguracja 1s<sup>1</sup>.</li><li><strong>Hel (He)</strong>: dwa elektrony na orbitalu 1s, konfiguracja 1s<sup>2</sup>. Powłoka K jest całkowicie wypełniona.</li><li><strong>Lit (Li)</strong>: trzeci elektron wchodzi na orbital 2s, konfiguracja 1s<sup>2</sup>2s<sup>1</sup>.</li><li><strong>Beryl (Be)</strong>: czwarty elektron również na orbitalu 2s, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>.</li><li><strong>Bor (B)</strong>: piąty elektron wchodzi na orbital 2p, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>.</li><li><strong>Węgiel (C)</strong>: szósty elektron również na orbitalu 2p, ale zgodnie z regułą Hunda znajduje się na innym orbitalu 2p, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>.</li><li><strong>Azot (N)</strong>: trzy elektrony na podpowłoce 2p, każdy na innym orbitalu, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>.</li><li><strong>Tlen (O)</strong>: czwarty elektron na podpowłoce 2p musi sparować się z jednym z elektronów, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>.</li><li><strong>Fluor (F)</strong>: pięć elektronów na podpowłoce 2p, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>.</li><li><strong>Neon (Ne)</strong>: sześć elektronów na podpowłoce 2p, całkowicie wypełniona podpowłoka, konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>.</li></ul><p>W ten sposób powłoka L zostaje zapełniona, a atom neonu osiąga trwałą konfigurację gazu szlachetnego.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w atomach wieloelektronowych poziomy energetyczne o tej samej głównej liczbie kwantowej n ulegają rozszczepieniu?",
      "answer": "Rozszczepienie poziomów wynika z odpychania między elektronami oraz różnego przenikania orbitali, co powoduje, że podpoziomy o różnych pobocznych liczbach kwantowych (s, p, d, f) mają różne energie."
    },
    {
      "question": "Co mówi zakaz Pauliego i jakie ma konsekwencje dla obsadzania orbitali?",
      "answer": "Zakaz Pauliego stanowi, że w atomie nie mogą istnieć dwa elektrony o identycznych wszystkich czterech liczbach kwantowych. W praktyce oznacza to, że na jednym orbitalu mogą znajdować się co najwyżej dwa elektrony, różniące się spinem."
    },
    {
      "question": "Jak brzmi reguła Hunda i jak wpływa na rozmieszczenie elektronów na orbitalach zdegenerowanych?",
      "answer": "Reguła Hunda mówi, że elektrony obsadzają orbitale zdegenerowane w taki sposób, aby liczba niesparowanych elektronów była maksymalna. Na przykład w atomie azotu trzy elektrony na podpowłoce 2p zajmują trzy różne orbitale, dając trzy niesparowane elektrony."
    },
    {
      "question": "Podaj konfigurację elektronową atomu węgla w stanie podstawowym.",
      "answer": "Konfiguracja elektronowa węgla to 1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>."
    }
  ]
};
