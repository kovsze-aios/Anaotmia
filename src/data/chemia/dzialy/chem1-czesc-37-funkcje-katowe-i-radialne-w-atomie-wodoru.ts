import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_37_funkcjeKatoweIRadialneWAtomieWodoruData: StructuredChapter = {
  "chapterTitle": "Funkcje kątowe i radialne w atomie wodoru",
  "toc": [
    {
      "title": "Funkcje kątowe Y(θ, φ)",
      "anchorId": "funkcje-katowe"
    },
    {
      "title": "Funkcje radialne i prawdopodobieństwo",
      "anchorId": "funkcje-radialne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"funkcje-katowe\">Funkcje kątowe Y(θ, φ)</h3><p>W mechanice kwantowej funkcje falowe elektronu w atomie wodoru są iloczynem części radialnej (zależnej od odległości od jądra) oraz części kątowej, opisanej przez funkcje Y(θ, φ). Funkcje te zależą od liczb kwantowych: orbitalnej <em>l</em> oraz magnetycznej <em>m</em>. W tabeli 3.3 zestawiono przykładowe funkcje kątowe dla różnych wartości <em>l</em> i <em>m</em>.</p><p>Dla orbitalu <em>s</em> (l = 0, m = 0) funkcja kątowa jest stała i wynosi 1/(2√π), co oznacza, że prawdopodobieństwo znalezienia elektronu jest sferycznie symetryczne. Dla orbitali <em>p</em> (l = 1) funkcje kątowe mają kształt zbliżony do ósemek, zorientowanych wzdłuż osi x, y lub z, w zależności od wartości <em>m</em> (−1, 0, +1). Dla orbitali <em>d</em> (l = 2) funkcje kątowe są bardziej złożone, np. dla m = 0 mamy wyrażenie (3cos²θ − 1), a dla m = ±1 i ±2 występują kombinacje funkcji trygonometrycznych z sinθ i cosθ.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"funkcje-radialne\">Funkcje radialne i prawdopodobieństwo</h3><p>Rozkład radialny prawdopodobieństwa opisuje szansę znalezienia elektronu w cienkiej warstwie kulistej między promieniem <em>r</em> a <em>r</em> + d<em>r</em>. Dla orbitalu 1s (n = 1, l = 0) prawdopodobieństwo to rośnie od zera przy jądrze (r = 0) do maksimum w odległości równej promieniowi Bohra <em>a</em><sub>0</sub> = 5,292·10<sup>−11</sup> m, a następnie maleje do wartości bliskich zeru dla dużych odległości.</p><p>Dla orbitalu 2s (n = 2, l = 0) krzywa radialna wykazuje dwa maksima: pierwsze, słabsze, położone bliżej jądra, oraz drugie, wyraźnie silniejsze, dalej od jądra. Analogicznie, dla orbitalu 3s (n = 3, l = 0) obserwuje się trzy maksima, z których ostatnie (najbardziej oddalone od jądra) jest najintensywniejsze. Orbital 2p (n = 2, l = 1) ma tylko jedno maksimum, natomiast orbital 3p (n = 3, l = 1) wykazuje dwa maksima.</p><p>Liczba maksimów na krzywej radialnej dla danego orbitalu jest równa różnicy między główną liczbą kwantową <em>n</em> a orbitalną liczbą kwantową <em>l</em>, czyli <em>n</em> − <em>l</em>. Ta zależność wynika z liczby węzłów radialnych funkcji falowej i ma kluczowe znaczenie dla zrozumienia rozmieszczenia elektronów w atomach wieloelektronowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest postać funkcji kątowej dla orbitalu s (l = 0, m = 0)?",
      "answer": "Funkcja kątowa dla orbitalu s jest stała i wynosi 1/(2√π), co oznacza sferyczną symetrię rozkładu prawdopodobieństwa."
    },
    {
      "question": "Ile maksimów ma krzywa radialna dla orbitalu 3s?",
      "answer": "Dla orbitalu 3s krzywa radialna ma trzy maksima, z których ostatnie (najdalsze od jądra) jest najsilniejsze."
    },
    {
      "question": "Jaka jest ogólna zasada dotycząca liczby maksimów na krzywej radialnej?",
      "answer": "Liczba maksimów jest równa różnicy n − l, gdzie n to główna liczba kwantowa, a l to orbitalna liczba kwantowa."
    }
  ]
};
