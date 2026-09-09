import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_38_orbitaleAtomoweWodoruData: StructuredChapter = {
  "chapterTitle": "Orbitale atomowe wodoru",
  "toc": [
    {
      "title": "Wprowadzenie",
      "anchorId": "wprowadzenie"
    },
    {
      "title": "Funkcje falowe orbitali",
      "anchorId": "funkcje-falowe-orbitali"
    },
    {
      "title": "Radialna gęstość prawdopodobieństwa",
      "anchorId": "radialna-gestosc-prawdopodobienstwa"
    },
    {
      "title": "Kształty orbitali",
      "anchorId": "ksztalty-orbitali"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie\">Wprowadzenie</h3><p>W atomie wodoru, najprostszym układzie kwantowym, elektron opisywany jest przez funkcje falowe zwane orbitalami. Każdy orbital charakteryzuje się trzema liczbami kwantowymi: główną liczbą kwantową <em>n</em>, poboczną liczbą kwantową <em>l</em> oraz magnetyczną liczbą kwantową <em>m</em>. Funkcje te są iloczynem części radialnej <em>R</em>(<em>r</em>) i części kątowej, która zależy od kątów sferycznych θ i φ.</p><p>W tabeli 3.4 zestawiono funkcje falowe dla orbitali 1s, 2s, 2p, 3s, 3p i 3d. Wszystkie one zawierają czynnik wykładniczy zależny od promienia <em>r</em> i promienia Bohra <em>a</em><sub>0</sub>, który jest naturalną jednostką długości w skali atomowej.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"funkcje-falowe-orbitali\">Funkcje falowe orbitali</h3><p>Dla orbitalu 1s funkcja falowa ma postać: ψ<sub>1s</sub> = (1/√π) · (1/<em>a</em><sub>0</sub>)<sup>3/2</sup> · e<sup>−<em>r</em>/<em>a</em><sub>0</sub></sup>. Orbital 2s wyraża się wzorem: ψ<sub>2s</sub> = (1/(4√(2π))) · (1/<em>a</em><sub>0</sub>)<sup>3/2</sup> · (2 − <em>r</em>/<em>a</em><sub>0</sub>) · e<sup>−<em>r</em>/(2<em>a</em><sub>0</sub>)</sup>.</p><p>Orbitale typu 2p mają symetrię kątową opisaną funkcjami trygonometrycznymi. Dla przykładu orbital 2p<sub>z</sub> jest proporcjonalny do cos θ, natomiast 2p<sub>x</sub> i 2p<sub>y</sub> zależą odpowiednio od sin θ cos φ i sin θ sin φ. Wszystkie orbitale 2p zawierają czynnik e<sup>−<em>r</em>/(2<em>a</em><sub>0</sub>)</sup>.</p><p>Dla powłoki trzeciej (n=3) orbitale 3s, 3p i 3d mają bardziej złożoną postać. Orbital 3s zawiera wielomian drugiego stopnia względem <em>r</em>/<em>a</em><sub>0</sub>, a orbitale 3p zawierają czynnik (6 − <em>r</em>/<em>a</em><sub>0</sub>) · e<sup>−<em>r</em>/(3<em>a</em><sub>0</sub>)</sup>. Orbitale 3d są proporcjonalne do <em>r</em><sup>2</sup> i mają różne zależności kątowe, np. 3d<sub>z²</sub> zależy od (3cos²θ − 1), a 3d<sub>xy</sub> od sin²θ sin 2φ.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"radialna-gestosc-prawdopodobienstwa\">Radialna gęstość prawdopodobieństwa</h3><p>Radialna gęstość prawdopodobieństwa znalezienia elektronu w odległości <em>r</em> od jądra jest dana wyrażeniem 4π<em>r</em><sup>2</sup>|<em>R</em>(<em>r</em>)|<sup>2</sup>. Funkcja ta opisuje, jak prawdopodobieństwo zmienia się w zależności od odległości od jądra, niezależnie od kierunku.</p><p>Na rysunku 3.9 przedstawiono przebieg radialnej gęstości prawdopodobieństwa dla orbitali 1s, 2s, 2p, 3s, 3p i 3d. Dla orbitalu 1s (n=1, l=0) krzywa ma jedno maksimum przy <em>r</em> = <em>a</em><sub>0</sub>. Dla orbitalu 2s (n=2, l=0) występują dwa maksima, przy czym główne maksimum znajduje się dalej od jądra. Orbital 2p (n=2, l=1) ma jedno maksimum, ale położone bliżej jądra niż dla 2s.</p><p>Dla powłoki trzeciej, orbital 3s ma trzy maksima, 3p – dwa maksima, a 3d – jedno maksimum. Liczba maksimów radialnych wynosi <em>n</em> − <em>l</em>. Odległości maksimów od jądra są charakterystyczne dla danego orbitalu i nie zależą od kierunku, w którym poruszamy się od środka atomu.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"ksztalty-orbitali\">Kształty orbitali</h3><p>Kształt orbitalu w przestrzeni jest określony przez część kątową funkcji falowej. Aby go zwizualizować, wyobrażamy sobie promienie wodzące wychodzące z początku układu współrzędnych we wszystkich kierunkach. Długość każdego promienia jest proporcjonalna do wartości części kątowej w danym kierunku.</p><p>Orbitale s są sferycznie symetryczne, co oznacza, że ich gęstość prawdopodobieństwa zależy tylko od odległości od jądra. Orbitale p mają kształt dwóch „płatów” skierowanych wzdłuż osi (np. 2p<sub>z</sub> wzdłuż osi z), a orbitale d mają bardziej złożone kształty, takie jak „czterolistna koniczyna” dla orbitali d<sub>xy</sub> i d<sub>x²−y²</sub>.</p><p>Wysokości maksimów radialnych zależą od części kątowej, ale ich położenie (odległość od jądra) pozostaje takie samo we wszystkich kierunkach. Dzięki temu możemy mówić o charakterystycznych „powłokach” i „podpowłokach” elektronowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile maksimów radialnych ma orbital 3p?",
      "answer": "Orbital 3p ma dwa maksima radialne, ponieważ liczba maksimów wynosi n − l = 3 − 1 = 2."
    },
    {
      "question": "Jaka jest postać funkcji falowej orbitalu 1s?",
      "answer": "Funkcja falowa orbitalu 1s to ψ<sub>1s</sub> = (1/√π) · (1/a<sub>0</sub>)<sup>3/2</sup> · e<sup>−r/a<sub>0</sub></sup>."
    },
    {
      "question": "Od czego zależy liczba maksimów radialnych w radialnej gęstości prawdopodobieństwa?",
      "answer": "Liczba maksimów radialnych jest równa n − l, gdzie n to główna liczba kwantowa, a l to poboczna liczba kwantowa."
    }
  ]
};
