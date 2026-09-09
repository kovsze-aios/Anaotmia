import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_54_termyAtomoweISprzezenieRussellaSaundersaData: StructuredChapter = {
  "chapterTitle": "Termy atomowe i sprzężenie Russella-Saundersa",
  "toc": [
    {
      "title": "Sprzężenie momentów pędu elektronów",
      "anchorId": "sprzezenie-momentow-pedu"
    },
    {
      "title": "Wypadkowa spinowa liczba kwantowa S",
      "anchorId": "wypadkowa-spinowa-liczba-kwantowa-s"
    },
    {
      "title": "Wypadkowa orbitalna liczba kwantowa L",
      "anchorId": "wypadkowa-orbitalna-liczba-kwantowa-l"
    },
    {
      "title": "Całkowity moment pędu i liczba kwantowa J",
      "anchorId": "calkowity-moment-pedu-i-liczba-kwantowa-j"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"sprzezenie-momentow-pedu\">Sprzężenie momentów pędu elektronów</h3><p>W atomach wieloelektronowych spinowe i orbitalne momenty pędu poszczególnych elektronów nie pozostają niezależne, lecz ulegają wzajemnemu sprzężeniu, prowadząc do wypadkowych momentów pędu całego atomu. Sprzężenie to wynika z oddziaływań elektrycznych i magnetycznych między elektronami. Ponieważ momenty pędu i momenty magnetyczne są wielkościami wektorowymi, ich dodawanie podlega regułom dodawania wektorów. Jednak w przeciwieństwie do klasycznych wektorów, które mogą tworzyć dowolne kąty, wektory pędu w mechanice kwantowej są skwantowane, co oznacza, że mogą przyjmować tylko określone, dyskretne wartości.</p><p>Najczęściej spotykanym typem sprzężenia w atomach wieloelektronowych jest <strong>sprzężenie LS</strong>, zwane również <strong>sprzężeniem Russella-Saundersa</strong>. Polega ono na oddzielnym sumowaniu spinowych momentów pędu elektronów oraz orbitalnych momentów pędu elektronów, a następnie na zsumowaniu otrzymanych w ten sposób wektorów wypadkowych. Taki opis jest uzasadniony, gdy oddziaływania między momentami spinowymi oraz między momentami orbitalnymi są znacznie silniejsze niż oddziaływania między momentami spinowymi a orbitalnymi.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wypadkowa-spinowa-liczba-kwantowa-s\">Wypadkowa spinowa liczba kwantowa S</h3><p>Spinowe momenty pędu poszczególnych elektronów, charakteryzowane spinową liczbą kwantową <em>s</em> = 1/2, sumują się wektorowo, dając wypadkowy spinowy moment pędu <strong>M<sub>spin</sub></strong>. Wartość tego momentu jest określona przez wypadkową spinową liczbę kwantową <strong>S</strong> i wyraża się wzorem:</p><p>M<sub>spin</sub> = (h/2π) · √(S(S+1))</p><p>Liczba kwantowa S może przyjmować wartości całkowite lub połówkowe. Dla dwóch elektronów możliwe są dwie wartości: S = 0, gdy spiny są ustawione antyrównolegle, oraz S = 1, gdy spiny są równoległe. W przypadku trzech elektronów S może wynosić 3/2 (wszystkie spiny równoległe) lub 1/2 (dwa spiny równoległe, trzeci przeciwnie skierowany).</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"wypadkowa-orbitalna-liczba-kwantowa-l\">Wypadkowa orbitalna liczba kwantowa L</h3><p>Podobnie orbitalne momenty pędu elektronów, opisane orbitalną liczbą kwantową <em>l</em>, sumują się wektorowo, tworząc wypadkowy orbitalny moment pędu <strong>M<sub>orb</sub></strong>, którego wartość zależy od wypadkowej orbitalnej liczby kwantowej <strong>L</strong>:</p><p>M<sub>orb</sub> = (h/2π) · √(L(L+1))</p><p>Wypadkowa liczba L jest wektorową sumą orbitalnych liczb kwantowych <em>l</em> poszczególnych elektronów. Dla dwóch elektronów o liczbach <em>l</em><sub>1</sub> i <em>l</em><sub>2</sub> (przy założeniu <em>l</em><sub>1</sub> ≥ <em>l</em><sub>2</sub>) L może przyjmować wartości całkowite od (<em>l</em><sub>1</sub> + <em>l</em><sub>2</sub>) do (<em>l</em><sub>1</sub> − <em>l</em><sub>2</sub>). Na przykład dla elektronu p (<em>l</em> = 1) i elektronu d (<em>l</em> = 2) możliwe są wartości L = 3, 2, 1.</p><p>Analogicznie do oznaczania orbitalnych liczb kwantowych literami s, p, d, f, również wartości L oznacza się symbolami literowymi:</p><ul><li>S dla L = 0</li><li>P dla L = 1</li><li>D dla L = 2</li><li>F dla L = 3</li><li>G dla L = 4</li><li>H dla L = 5</li></ul><p>i tak dalej, z pominięciem litery J.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"calkowity-moment-pedu-i-liczba-kwantowa-j\">Całkowity moment pędu i liczba kwantowa J</h3><p>Całkowity moment pędu wszystkich elektronów w atomie, oznaczany jako <strong>M<sub>całk</sub></strong>, powstaje przez wektorowe zsumowanie wypadkowego spinowego momentu pędu M<sub>spin</sub> oraz wypadkowego orbitalnego momentu pędu M<sub>orb</sub>. Jego wartość jest określona przez całkowitą liczbę kwantową <strong>J</strong>:</p><p>M<sub>całk</sub> = (h/2π) · √(J(J+1))</p><p>Liczba kwantowa J jest wektorową sumą liczb L i S. Gdy L ≥ S, J może przyjmować wszystkie wartości od L+S do L−S, różniące się o 1. W przypadku gdy S > L, zakres wartości J rozciąga się od S+L do S−L.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega sprzężenie Russella-Saundersa (LS)?",
      "answer": "Sprzężenie LS polega na oddzielnym sumowaniu spinowych momentów pędu elektronów oraz orbitalnych momentów pędu elektronów, a następnie na zsumowaniu otrzymanych wektorów wypadkowych, co prowadzi do całkowitego momentu pędu atomu."
    },
    {
      "question": "Jakie wartości może przyjmować wypadkowa spinowa liczba kwantowa S dla dwóch elektronów?",
      "answer": "Dla dwóch elektronów S może wynosić 0 (gdy spiny są antyrównoległe) lub 1 (gdy spiny są równoległe)."
    },
    {
      "question": "Jakie wartości może przyjmować wypadkowa orbitalna liczba kwantowa L dla elektronów p i d?",
      "answer": "Dla elektronu p (l=1) i elektronu d (l=2), L może przyjmować wartości 3, 2 i 1."
    },
    {
      "question": "Jakie symbole literowe odpowiadają wartościom L = 0, 1, 2, 3?",
      "answer": "Dla L = 0 stosuje się symbol S, dla L = 1 – P, dla L = 2 – D, a dla L = 3 – F."
    }
  ]
};
