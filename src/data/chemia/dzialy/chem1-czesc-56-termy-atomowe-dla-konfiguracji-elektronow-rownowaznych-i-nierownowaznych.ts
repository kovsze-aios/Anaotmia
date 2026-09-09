import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_56_termyAtomoweDlaKonfiguracjiElektronowRownowaznychINierownowaznychData: StructuredChapter = {
  "chapterTitle": "Termy atomowe dla konfiguracji elektronów równoważnych i nierównoważnych",
  "toc": [
    {
      "title": "Wprowadzenie do termów atomowych",
      "anchorId": "wprowadzenie-do-termow-atomowych"
    },
    {
      "title": "Termy dla konfiguracji z elektronami nierównoważnymi",
      "anchorId": "termy-dla-konfiguracji-z-elektronami-nierownowaznymi"
    },
    {
      "title": "Termy dla konfiguracji z elektronami równoważnymi",
      "anchorId": "termy-dla-konfiguracji-z-elektronami-rownowaznymi"
    },
    {
      "title": "Zestawienie termów dla różnych konfiguracji",
      "anchorId": "zestawienie-termow-dla-roznych-konfiguracji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-termow-atomowych\">Wprowadzenie do termów atomowych</h3><p>W spektroskopii atomowej termy atomowe opisują stany kwantowe całego atomu, wynikające z oddziaływań między elektronami. Dla konfiguracji elektronowej z elektronami nierównoważnymi, czyli takimi, które różnią się główną liczbą kwantową, konstrukcja termów jest stosunkowo prosta. Rozważmy przypadek konfiguracji 1s<sup>2</sup>2s<sup>2</sup>p<sup>1</sup>3p<sup>1</sup>, gdzie elektrony p znajdują się w różnych powłokach (n=2 i n=3). Dla takiego układu możliwe są termy o różnej multipletowości i orbitalnym momencie pędu.</p><p>Dla dwóch elektronów p nierównoważnych, całkowity orbitalny moment pędu L może przyjmować wartości 0, 1 lub 2, co odpowiada symbolom S, P i D. Spinowa liczba kwantowa S może wynosić 0 lub 1, dając singlet (multiplikacja 1) lub tryplet (multiplikacja 3). Zgodnie z regułą dodawania momentów pędu, dla danego L i S całkowity moment pędu J przyjmuje wartości od |L-S| do L+S. W ten sposób otrzymujemy zestaw termów: <sup>1</sup>S<sub>0</sub>, <sup>1</sup>P<sub>1</sub>, <sup>1</sup>D<sub>2</sub>, <sup>3</sup>S<sub>1</sub>, <sup>3</sup>P<sub>0,1,2</sub> oraz <sup>3</sup>D<sub>1,2,3</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"termy-dla-konfiguracji-z-elektronami-rownowaznymi\">Termy dla konfiguracji z elektronami równoważnymi</h3><p>Gdy elektrony p znajdują się w tej samej powłoce (np. konfiguracja 1s<sup>2</sup>2s<sup>2</sup>p<sup>2</sup>), mamy do czynienia z elektronami równoważnymi. Wówczas zakaz Pauliego istotnie ogranicza liczbę dozwolonych termów. Na przykład term <sup>3</sup>D jest niedozwolony, ponieważ wymagałby, aby oba elektrony miały równoległe spiny (S=1) oraz jednakowe orbitalne liczby magnetyczne m<sub>l</sub>, co prowadziłoby do identycznych stanów kwantowych – co jest zabronione. Podobnie odrzucamy termy <sup>3</sup>S oraz <sup>1</sup>P, gdyż nie spełniają one warunków antysymetrii funkcji falowej.</p><p>W rezultacie dla konfiguracji p<sup>2</sup> (równoważnej) dozwolone są jedynie termy: <sup>1</sup>S<sub>0</sub>, <sup>1</sup>D<sub>2</sub> oraz <sup>3</sup>P<sub>0,1,2</sub>. Analogiczne ograniczenia dotyczą innych konfiguracji elektronów równoważnych, co prowadzi do charakterystycznych zestawów termów dla każdej konfiguracji.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zestawienie-termow-dla-roznych-konfiguracji\">Zestawienie termów dla różnych konfiguracji</h3><p>W tabeli poniżej zestawiono termy atomowe dla typowych konfiguracji elektronów równoważnych i nierównoważnych. Dla uproszczenia pominięto wartości liczby kwantowej J, ale można je łatwo wyznaczyć z multipletowości i wartości L. Liczba termów wzrasta wraz z liczbą niesparowanych elektronów w stanie podstawowym.</p><h4>Elektrony równoważne</h4><ul><li>s<sup>2</sup>, p<sup>6</sup>, d<sup>10</sup>: <sup>1</sup>S</li><li>p<sup>1</sup>, p<sup>5</sup>: <sup>2</sup>P</li><li>p<sup>2</sup>, p<sup>4</sup>: <sup>3</sup>P, <sup>1</sup>D, <sup>1</sup>S</li><li>p<sup>3</sup>: <sup>4</sup>S, <sup>2</sup>D, <sup>2</sup>P</li><li>d<sup>1</sup>, d<sup>9</sup>: <sup>2</sup>D</li><li>d<sup>2</sup>, d<sup>8</sup>: <sup>3</sup>F, <sup>3</sup>P, <sup>1</sup>G, <sup>1</sup>D, <sup>1</sup>S</li><li>d<sup>3</sup>, d<sup>7</sup>: <sup>4</sup>F, <sup>4</sup>P, <sup>2</sup>H, <sup>2</sup>G, <sup>2</sup>F, <sup>2</sup>D, <sup>2</sup>P</li><li>d<sup>4</sup>, d<sup>6</sup>: <sup>5</sup>D, <sup>3</sup>H, <sup>3</sup>G, <sup>3</sup>F, <sup>3</sup>D, <sup>3</sup>P, <sup>1</sup>I, <sup>1</sup>G, <sup>1</sup>F, <sup>1</sup>D, <sup>1</sup>S</li><li>d<sup>5</sup>: <sup>6</sup>S, <sup>4</sup>G, <sup>4</sup>F, <sup>4</sup>D, <sup>4</sup>P, <sup>2</sup>I, <sup>2</sup>H, <sup>2</sup>G, <sup>2</sup>F, <sup>2</sup>D, <sup>2</sup>P, <sup>2</sup>S</li></ul><h4>Elektrony nierównoważne</h4><ul><li>s<sup>1</sup>s<sup>1</sup>: <sup>1</sup>S, <sup>3</sup>S</li><li>s<sup>1</sup>p<sup>1</sup>: <sup>1</sup>P, <sup>3</sup>P</li><li>s<sup>1</sup>d<sup>1</sup>: <sup>1</sup>D, <sup>3</sup>D</li><li>p<sup>1</sup>p<sup>1</sup>: <sup>3</sup>D, <sup>1</sup>D, <sup>3</sup>P, <sup>1</sup>P, <sup>3</sup>S, <sup>1</sup>S</li><li>p<sup>1</sup>d<sup>1</sup>: <sup>3</sup>F, <sup>1</sup>F, <sup>3</sup>D, <sup>1</sup>D, <sup>3</sup>P, <sup>1</sup>P</li><li>d<sup>1</sup>d<sup>1</sup>: <sup>3</sup>G, <sup>1</sup>G, <sup>3</sup>F, <sup>1</sup>F, <sup>3</sup>D, <sup>1</sup>D, <sup>3</sup>P, <sup>1</sup>P, <sup>3</sup>S, <sup>1</sup>S</li></ul><p>Uwaga: W przypadku, gdy danej konfiguracji odpowiada więcej niż jeden term o tym samym symbolu, termy te różnią się energią.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego term ³D jest niedozwolony dla konfiguracji p² elektronów równoważnych?",
      "answer": "Term ³D wymagałby, aby oba elektrony miały równoległe spiny (S=1) oraz jednakowe orbitalne liczby magnetyczne m_l, co prowadziłoby do identycznych stanów kwantowych, co jest zabronione przez zakaz Pauliego."
    },
    {
      "question": "Jakie termy są dozwolone dla konfiguracji p² elektronów równoważnych?",
      "answer": "Dla konfiguracji p² elektronów równoważnych dozwolone są termy: ¹S₀, ¹D₂ oraz ³P₀,₁,₂."
    },
    {
      "question": "Jak zmienia się liczba możliwych termów wraz ze wzrostem liczby niesparowanych elektronów?",
      "answer": "Liczba możliwych termów rośnie wraz ze wzrostem liczby niesparowanych elektronów w stanie podstawowym."
    }
  ]
};
