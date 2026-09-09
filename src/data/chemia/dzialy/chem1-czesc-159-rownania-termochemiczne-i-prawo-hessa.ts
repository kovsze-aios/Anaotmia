import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_159_rownaniaTermochemiczneIPrawoHessaData: StructuredChapter = {
  "chapterTitle": "Równania termochemiczne i prawo Hessa",
  "toc": [
    {
      "title": "Standardowa entalpia reakcji",
      "anchorId": "standardowa-entalpia-reakcji"
    },
    {
      "title": "Równania termochemiczne",
      "anchorId": "rownania-termochemiczne"
    },
    {
      "title": "Prawo Hessa i obliczenia entalpii",
      "anchorId": "prawo-hessa-obliczenia-entalpii"
    },
    {
      "title": "Przykład: entalpia spalania grafitu do CO",
      "anchorId": "przyklad-entalpia-spalania-grafitu-do-co"
    },
    {
      "title": "Przykład: entalpia przemiany diamentu w grafit",
      "anchorId": "przyklad-entalpia-przemiany-diamentu-w-grafit"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"standardowa-entalpia-reakcji\">Standardowa entalpia reakcji</h3><p>W termochemii standardowa entalpia reakcji, oznaczana symbolem ΔH, jest definiowana dla określonej temperatury T, w której zachodzi proces. Najczęściej odnosi się ją do temperatury pokojowej, czyli 298 K. W praktyce, zamiast precyzyjnego zapisu ΔH<sub>298</sub>, stosuje się uproszczony symbol ΔH, chyba że wymagana jest większa dokładność obliczeń. Zależność entalpii reakcji od temperatury jest szczegółowo omawiana w podręcznikach chemii fizycznej.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rownania-termochemiczne\">Równania termochemiczne</h3><p>Równanie termochemiczne to zapis reakcji chemicznej wraz z wartością entalpii reakcji. Przykładem może być reakcja redukcji tlenku miedzi(II) wodorem:</p><p>CuO(s) + H<sub>2</sub>(g) → H<sub>2</sub>O(c) + Cu(s), ΔH = −128,5 kJ·mol<sup>−1</sup>.</p><p>Zapis ten informuje, że standardowa entalpia reakcji jednego mola stałego tlenku miedzi z jednym molem gazowego wodoru, prowadzącej do powstania jednego mola ciekłej wody i jednego mola metalicznej miedzi, wynosi −128,5 kJ. Ujemna wartość oznacza, że proces jest egzotermiczny, czyli wydziela ciepło do otoczenia.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"prawo-hessa-obliczenia-entalpii\">Prawo Hessa i obliczenia entalpii</h3><p>Równania termochemiczne stanowią podstawę do obliczania entalpii reakcji z wykorzystaniem prawa Hessa. Zgodnie z tym prawem, entalpia reakcji nie zależy od drogi, na której przebiega proces, a jedynie od stanu początkowego i końcowego układu. Dzięki temu można wyznaczyć entalpię reakcji, których bezpośredni pomiar jest utrudniony lub niemożliwy, poprzez sumowanie entalpii odpowiednio dobranych reakcji pośrednich.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"przyklad-entalpia-spalania-grafitu-do-co\">Przykład: entalpia spalania grafitu do CO</h3><p>Ilustracją zastosowania prawa Hessa jest wyznaczenie entalpii spalania grafitu do tlenku węgla. Bezpośredni pomiar tej reakcji jest kłopotliwy, ponieważ zawsze powstaje również pewna ilość dwutlenku węgla. Łatwo natomiast zmierzyć ciepło spalania grafitu do CO<sub>2</sub> w nadmiarze tlenu:</p><p>C(grafit) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>a</sub> = −393,50 kJ·mol<sup>−1</sup>.</p><p>Można również wyznaczyć entalpię spalania tlenku węgla do dwutlenku węgla:</p><p>CO(g) + ½O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>b</sub> = −282,96 kJ·mol<sup>−1</sup>.</p><p>Aby otrzymać pożądaną reakcję C(grafit) + ½O<sub>2</sub>(g) → CO(g), należy od pierwszej reakcji odjąć drugą. Zgodnie z prawem Hessa, entalpia tej reakcji wynosi:</p><p>ΔH<sub>c</sub> = ΔH<sub>a</sub> − ΔH<sub>b</sub> = −393,50 kJ·mol<sup>−1</sup> − (−282,96 kJ·mol<sup>−1</sup>) = −110,54 kJ·mol<sup>−1</sup>.</p><p>Odejmowanie równań można wykonać stronami, co prowadzi do tego samego wyniku.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"przyklad-entalpia-przemiany-diamentu-w-grafit\">Przykład: entalpia przemiany diamentu w grafit</h3><p>Innym klasycznym przykładem jest obliczenie entalpii przemiany diamentu w grafit. Diament jest alotropową odmianą węgla, która pod ciśnieniem atmosferycznym jest nietrwała termodynamicznie w całym zakresie temperatur aż do temperatury topnienia. Jednak w normalnych warunkach przemiana ta zachodzi niezwykle wolno, a przyspiesza dopiero w wysokich temperaturach, gdzie pomiary kalorymetryczne są technicznie niemożliwe.</p><p>Można natomiast łatwo wyznaczyć ciepło spalania diamentu i grafitu do dwutlenku węgla:</p><p>C(diament) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>d</sub> = −395,40 kJ·mol<sup>−1</sup>,</p><p>C(grafit) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>g</sub> = −393,50 kJ·mol<sup>−1</sup>.</p><p>Odejmując drugie równanie od pierwszego, otrzymujemy:</p><p>C(diament) → C(grafit), ΔH = ΔH<sub>d</sub> − ΔH<sub>g</sub> = −395,40 kJ·mol<sup>−1</sup> − (−393,50 kJ·mol<sup>−1</sup>) = −1,90 kJ·mol<sup>−1</sup>.</p><p>Ujemna wartość entalpii wskazuje, że przemiana diamentu w grafit jest egzotermiczna, co potwierdza, że grafit jest trwalszą formą węgla w warunkach standardowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co oznacza ujemna wartość standardowej entalpii reakcji?",
      "answer": "Ujemna wartość ΔH oznacza, że reakcja jest egzotermiczna, czyli wydziela ciepło do otoczenia."
    },
    {
      "question": "Dlaczego bezpośredni pomiar entalpii spalania grafitu do tlenku węgla jest trudny?",
      "answer": "Ponieważ podczas spalania grafitu w ograniczonej ilości tlenu zawsze powstaje również pewna ilość dwutlenku węgla, co uniemożliwia selektywne otrzymanie CO."
    },
    {
      "question": "Jakie jest znaczenie prawa Hessa w termochemii?",
      "answer": "Prawo Hessa pozwala obliczyć entalpię reakcji, których bezpośredni pomiar jest utrudniony, poprzez sumowanie entalpii odpowiednio dobranych reakcji pośrednich, ponieważ entalpia jest funkcją stanu."
    }
  ]
};
