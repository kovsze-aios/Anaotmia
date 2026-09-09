import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_138_widmaOscylacyjneCzasteczekDwuatomowychData: StructuredChapter = {
  "chapterTitle": "Widma oscylacyjne cząsteczek dwuatomowych",
  "toc": [
    {
      "title": "Analiza widm rotacyjnych cząsteczek wieloatomowych",
      "anchorId": "analiza-widm-rotacyjnych-czasteczek-wieloatomowych"
    },
    {
      "title": "Zastosowanie izotopów w spektroskopii rotacyjnej",
      "anchorId": "zastosowanie-izotopow-w-spektroskopii-rotacyjnej"
    },
    {
      "title": "Ograniczenia i zalety spektroskopii rotacyjnej",
      "anchorId": "ograniczenia-i-zalety-spektroskopii-rotacyjnej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"analiza-widm-rotacyjnych-czasteczek-wieloatomowych\">Analiza widm rotacyjnych cząsteczek wieloatomowych</h3><p>W przypadku cząsteczek dwuatomowych analiza widma rotacyjnego pozwala na bezpośrednie wyznaczenie długości wiązania, ponieważ moment bezwładności zależy od jednej odległości międzyjądrowej. Jednak dla cząsteczek trójatomowych, takich jak liniowy OCS, sytuacja jest bardziej złożona. Stała rotacyjna <em>B</em> = h<sup>2</sup>/(8π<sup>2</sup>I) wyznaczona z widma nie wystarcza do obliczenia obu odległości R<sub>1</sub> i R<sub>2</sub>, ponieważ w równaniu (8.10) występują dwie niewiadome.</p><p>Aby rozwiązać ten problem, stosuje się technikę podstawień izotopowych. Zastąpienie jednego z atomów jego cięższym izotopem (np. <sup>16</sup>O<sup>12</sup>C<sup>32</sup>S na <sup>16</sup>O<sup>12</sup>C<sup>34</sup>S) zmienia masę cząsteczki, a tym samym moment bezwładności i stałą rotacyjną. Ponieważ odległości międzyjądrowe pozostają praktycznie niezmienione po wymianie izotopu, otrzymujemy układ dwóch równań z dwiema niewiadomymi, który można rozwiązać.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zastosowanie-izotopow-w-spektroskopii-rotacyjnej\">Zastosowanie izotopów w spektroskopii rotacyjnej</h3><p>Przykładowo, dla cząsteczki OCS z izotopem <sup>32</sup>S stała rotacyjna wynosi <em>B</em> = 0,202864 cm<sup>−1</sup>, a moment bezwładności <em>I</em> = 138,0·10<sup>−47</sup> kg·m<sup>2</sup>. Po podstawieniu <sup>34</sup>S otrzymuje się <em>B</em> = 0,197910 cm<sup>−1</sup> oraz <em>I</em> = 141,4·10<sup>−47</sup> kg·m<sup>2</sup>. Wykorzystując te dane oraz masy atomów, można ułożyć układ równań wynikających z definicji momentu bezwładności dla cząsteczki liniowej.</p><p>Rozwiązanie tego układu prowadzi do wartości odległości międzyatomowych: R<sub>1</sub> = 116,1 pm (dla wiązania C–O) oraz R<sub>2</sub> = 155,9 pm (dla wiązania C–S). Wyniki te pokazują, że metoda izotopowa jest skutecznym narzędziem do wyznaczania geometrii cząsteczek wieloatomowych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"ograniczenia-i-zalety-spektroskopii-rotacyjnej\">Ograniczenia i zalety spektroskopii rotacyjnej</h3><p>Interpretacja widm rotacyjnych cząsteczek nieliniowych jest znacznie bardziej skomplikowana. W wielu przypadkach możliwe jest jednak wyznaczenie długości wiązań oraz kątów między nimi, ale trudności rosną wraz ze wzrostem liczby atomów i spadkiem symetrii cząsteczki.</p><p>Spektroskopia rotacyjna znajduje zastosowanie głównie dla cząsteczek w fazie gazowej, gdzie mogą one swobodnie rotować. W fazach skondensowanych rotacja jest ograniczona, co uniemożliwia uzyskanie typowych widm rotacyjnych. Zaletą tej metody jest możliwość wykonywania niezwykle precyzyjnych pomiarów w zakresie mikrofal, co czyni ją cennym narzędziem w chemii analitycznej i fizycznej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego dla cząsteczek trójatomowych, takich jak OCS, nie można wyznaczyć długości wiązań bezpośrednio z jednego widma rotacyjnego?",
      "answer": "Ponieważ moment bezwładności zależy od dwóch odległości międzyjądrowych, a stała rotacyjna dostarcza tylko jednego równania, co prowadzi do układu z dwiema niewiadomymi."
    },
    {
      "question": "Jaką technikę stosuje się, aby wyznaczyć geometrię cząsteczek wieloatomowych z widm rotacyjnych?",
      "answer": "Stosuje się podstawienia izotopowe, które zmieniają masę cząsteczki, a tym samym moment bezwładności, przy zachowaniu odległości międzyjądrowych. Pozwala to na uzyskanie dodatkowych równań."
    },
    {
      "question": "Jakie są ograniczenia spektroskopii rotacyjnej?",
      "answer": "Spektroskopia rotacyjna jest użyteczna głównie dla cząsteczek w fazie gazowej, ponieważ w fazach skondensowanych rotacja jest ograniczona. Ponadto interpretacja widm staje się trudniejsza dla cząsteczek o większej liczbie atomów i niższej symetrii."
    }
  ]
};
