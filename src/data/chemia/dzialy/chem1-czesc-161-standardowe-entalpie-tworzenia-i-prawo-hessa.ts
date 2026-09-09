import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_161_standardoweEntalpieTworzeniaIPrawoHessaData: StructuredChapter = {
  "chapterTitle": "Standardowe entalpie tworzenia i prawo Hessa",
  "toc": [
    {
      "title": "Obliczanie entalpii reakcji z entalpii tworzenia",
      "anchorId": "obliczanie-entalpii-reakcji"
    },
    {
      "title": "Standardowe entalpie tworzenia wybranych związków",
      "anchorId": "standardowe-entalpie-tworzenia"
    },
    {
      "title": "Zastosowanie prawa Hessa",
      "anchorId": "zastosowanie-prawa-hessa"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"obliczanie-entalpii-reakcji\">Obliczanie entalpii reakcji z entalpii tworzenia</h3><p>W praktyce laboratoryjnej bezpośredni pomiar efektów cieplnych reakcji bywa często utrudniony. Dlatego wartości standardowych entalpii reakcji wyznacza się najczęściej pośrednio, wykorzystując dane dotyczące standardowych entalpii tworzenia reagentów. Metoda ta opiera się na prawie Hessa, które mówi, że efekt cieplny reakcji nie zależy od drogi przemiany, a jedynie od stanu początkowego i końcowego układu.</p><p>Dla reakcji prowadzonej w warunkach izobarycznych zmianę entalpii można obliczyć, sumując odpowiednio standardowe entalpie tworzenia substratów i produktów. W przypadku reakcji, w której biorą udział gazy, należy uwzględnić również pracę objętościową, jednak w obliczeniach praktycznych często pomija się różnicę między zmianą energii wewnętrznej a zmianą entalpii, gdyż jest ona niewielka w porównaniu z całkowitym efektem cieplnym.</p><p>Przykładem ilustrującym tę metodę jest wyznaczanie standardowej entalpii tworzenia metanu. W tym celu wykorzystuje się entalpie spalania grafitu, wodoru i metanu. Odpowiednie równania termochemiczne zestawiono poniżej:</p><ul><li>C(grafit) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH° = −393,5 kJ·mol<sup>−1</sup></li><li>H<sub>2</sub>(g) + ½O<sub>2</sub>(g) → H<sub>2</sub>O(c), ΔH° = −285,8 kJ·mol<sup>−1</sup></li><li>CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(c), ΔH° = −890,4 kJ·mol<sup>−1</sup></li></ul><p>Aby otrzymać równanie tworzenia metanu z pierwiastków, należy dodać do siebie pierwsze równanie, podwojone drugie równanie, a następnie odjąć trzecie równanie.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"standardowe-entalpie-tworzenia\">Standardowe entalpie tworzenia wybranych związków</h3><p>Standardowa entalpia tworzenia związku chemicznego to efekt cieplny reakcji syntezy jednego mola tego związku z pierwiastków w ich stanach standardowych, w temperaturze 25°C (298,15 K) i pod ciśnieniem 1 atm (1,01325·10<sup>5</sup> Pa). Dla pierwiastków w ich stanach standardowych przyjmuje się umownie, że standardowa entalpia tworzenia jest równa zeru.</p><p>W tabeli 9.1 zestawiono wartości standardowych entalpii tworzenia dla wybranych związków nieorganicznych. Indeksy dolne przy symbolach oznaczają stan skupienia: g – gazowy, c – ciekły, s – stały. Wartości te są niezbędne do obliczania efektów cieplnych reakcji na podstawie prawa Hessa.</p><p>Przykładowe wartości (w kJ·mol<sup>−1</sup>):</p><ul><li>Al<sub>2</sub>O<sub>3</sub>(s): −1675</li><li>CO<sub>2</sub>(g): −393,51</li><li>H<sub>2</sub>O(c): −285,84</li><li>NH<sub>3</sub>(g): −46,19</li><li>HCl(g): −92,30</li><li>SO<sub>2</sub>(g): −296,9</li></ul><p>Dokładne zestawienia dla wielu substancji można znaleźć w specjalistycznych tablicach danych fizykochemicznych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zastosowanie-prawa-hessa\">Zastosowanie prawa Hessa</h3><p>Prawo Hessa umożliwia obliczenie standardowej entalpii dowolnej reakcji, jeśli znane są standardowe entalpie tworzenia wszystkich substratów i produktów. Zgodnie z konwencją, entalpie tworzenia pierwiastków w ich stanach standardowych przyjmuje się za równe zeru.</p><p>Rozważmy reakcję syntezy stałego chlorku amonu z gazowego amoniaku i gazowego chlorowodoru:</p><p>NH<sub>3</sub>(g) + HCl(g) → NH<sub>4</sub>Cl(s)</p><p>Entalpię tej reakcji można wyznaczyć, rozkładając substraty na pierwiastki, a następnie łącząc pierwiastki w produkt. Odpowiednie równania termochemiczne mają postać:</p><ul><li>½N<sub>2</sub>(g) + 3/2H<sub>2</sub>(g) → NH<sub>3</sub>(g), ΔH°<sub>tw</sub> = −46,19 kJ·mol<sup>−1</sup></li><li>½H<sub>2</sub>(g) + ½Cl<sub>2</sub>(g) → HCl(g), ΔH°<sub>tw</sub> = −92,30 kJ·mol<sup>−1</sup></li><li>½N<sub>2</sub>(g) + 2H<sub>2</sub>(g) + ½Cl<sub>2</sub>(g) → NH<sub>4</sub>Cl(s), ΔH°<sub>tw</sub> = −315,39 kJ·mol<sup>−1</sup></li></ul><p>Sumując entalpie wszystkich trzech etapów drogi okrężnej, otrzymujemy szukaną entalpię reakcji tworzenia NH<sub>4</sub>Cl z NH<sub>3</sub> i HCl:</p><p>ΔH° = −ΔH°<sub>tw</sub>(NH<sub>3</sub>) − ΔH°<sub>tw</sub>(HCl) + ΔH°<sub>tw</sub>(NH<sub>4</sub>Cl) = 46,19 + 92,30 − 315,39 = −176,90 kJ·mol<sup>−1</sup></p><p>W obliczeniach tego typu sumuje się więc standardowe entalpie tworzenia substratów ze zmienionym znakiem oraz standardowe entalpie tworzenia produktów ze znakiem niezmienionym.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak brzmi prawo Hessa?",
      "answer": "Prawo Hessa mówi, że efekt cieplny reakcji chemicznej nie zależy od drogi przemiany, a jedynie od stanu początkowego i końcowego układu."
    },
    {
      "question": "Co to jest standardowa entalpia tworzenia związku chemicznego?",
      "answer": "Standardowa entalpia tworzenia to efekt cieplny reakcji syntezy jednego mola związku z pierwiastków w ich stanach standardowych, w temperaturze 25°C i pod ciśnieniem 1 atm."
    },
    {
      "question": "Jak obliczyć entalpię reakcji na podstawie standardowych entalpii tworzenia?",
      "answer": "Entalpię reakcji oblicza się jako sumę standardowych entalpii tworzenia produktów minus sumę standardowych entalpii tworzenia substratów, z uwzględnieniem współczynników stechiometrycznych."
    }
  ]
};
