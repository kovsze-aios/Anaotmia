import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_49_analizaStatystycznaIMutacjeData: StructuredChapter = {
  "chapterTitle": "Analiza statystyczna i mutacje",
  "toc": [
    {
      "title": "Analiza statystyczna w badaniu zmienności",
      "anchorId": "analiza-statystyczna"
    },
    {
      "title": "Mutacje somatyczne i generatywne",
      "anchorId": "mutacje-somatyczne-generatywne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"analiza-statystyczna\">Analiza statystyczna w badaniu zmienności</h3><p>W badaniach biologicznych często konieczna jest analiza statystyczna zebranych danych, aby wyciągnąć wiarygodne wnioski. Przykładem może być pomiar długości skrzydeł u ptaków, który pozwala ocenić dymorfizm płciowy. Poniżej przedstawiono przykład obliczania podstawowych parametrów statystycznych dla dwóch grup osobników – samic i samców kosa (<em>Turdus merula</em>).</p><p>Dla każdej płci należy obliczyć: minimum, maksimum, zakres zmienności, średnią arytmetyczną, medianę oraz dominantę. Dodatkowo, aby ocenić rozrzut wyników wokół średniej, wyznacza się odchylenie standardowe. W tym przypadku dla samic wynosi ono 3,95 mm, a dla samców 1,75 mm.</p><h4>Parametry statystyczne dla samic</h4><p>Uporządkowane rosnąco długości skrzydeł samic to: 120 mm, 120 mm, 121 mm, 126 mm, 127 mm, 128 mm, 129 mm.</p><ul><li><strong>Minimum</strong> (najmniejsza wartość): 120 mm.</li><li><strong>Maksimum</strong> (największa wartość): 129 mm.</li><li><strong>Zakres zmienności</strong>: od 120 mm do 129 mm.</li><li><strong>Średnia arytmetyczna</strong>: (120+120+121+126+127+128+129) / 7 = 124,4 mm.</li><li><strong>Mediana</strong> (wartość środkowa, gdy liczba pomiarów jest nieparzysta): 126 mm.</li><li><strong>Dominanta</strong> (najczęstsza wartość): 120 mm.</li></ul><h4>Parametry statystyczne dla samców</h4><p>Uporządkowane rosnąco długości skrzydeł samców to: 131 mm, 132 mm, 133 mm, 134 mm, 134 mm, 136 mm.</p><ul><li><strong>Minimum</strong>: 131 mm.</li><li><strong>Maksimum</strong>: 136 mm.</li><li><strong>Zakres zmienności</strong>: od 131 mm do 136 mm.</li><li><strong>Średnia arytmetyczna</strong>: (131+132+133+134+134+136) / 6 = 133,3 mm.</li><li><strong>Mediana</strong> (średnia dwóch wartości środkowych, gdy liczba pomiarów jest parzysta): (133+134)/2 = 133,5 mm.</li><li><strong>Dominanta</strong>: 134 mm.</li></ul><h4>Wykres i interpretacja</h4><p>Na wykresie słupkowym przedstawiono średnią długość skrzydła dla każdej płci, a następnie dodano słupki błędów odpowiadające odchyleniu standardowemu. Wąsy odchyleń standardowych dla samic i samców nie pokrywają się, co sugeruje, że różnice w długości skrzydeł między płciami są istotne biologicznie.</p><p><strong>Odpowiedź:</strong> Samce i samice kosa różnią się długością skrzydeł.</p><h4>Pytania kontrolne</h4><ol><li>Wyjaśnij różnicę między zakresem zmienności a odchyleniem standardowym.</li><li>Podaj nazwę parametru statystycznego, który określa najczęstszą wartość w próbie.</li></ol>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"mutacje-somatyczne-generatywne\">Mutacje somatyczne i generatywne</h3><p>Mutacje to nagłe, trwałe zmiany w materiale genetycznym, które mogą zachodzić samoistnie lub pod wpływem czynników mutagennych. Mają charakter przypadkowy i bezkierunkowy, dlatego większość z nich jest niekorzystna dla organizmu. Mutacje klasyfikuje się ze względu na rodzaj komórek, w których powstają, przyczynę zmian oraz poziom organizacji materiału genetycznego.</p><p><strong>Mutacje somatyczne</strong> zachodzą w DNA komórek somatycznych (ciała). U organizmów wielokomórkowych, które nie rozmnażają się bezpłciowo i mają odrębną linię komórek płciowych, mutacje te nie są dziedziczone – ich skutki dotyczą wyłącznie osobnika, u którego wystąpiły. Większość mutacji somatycznych, nawet letalnych, jest nieszkodliwa, ponieważ dotyczy pojedynczych komórek. Wyjątkiem są zmiany prowadzące do nowotworów.</p><p><strong>Mutacje generatywne</strong> (inaczej germinalne) zachodzą w komórkach płciowych lub ich prekursorach i mogą być przekazywane potomstwu.</p><h4>Mutacje letalne u roślin</h4><p>W cyklu rozwojowym roślin występuje przemiana pokoleń: diploidalny sporofit i haploidalny gametofit. Heterozygotyczne komórki sporofitu z recesywnym allelem letalnym są żywotne, ponieważ posiadają prawidłowy allel dominujący. Jednak w haploidalnym gametoficie recesywne allele letalne są eliminowane przez dobór naturalny, co przedstawiono na schemacie cyklu.</p><p>W zygocie (2n) może zajść mutacja letalna. Wszystkie komórki sporofitu (2n) będą zawierać recesywny allel letalny, ale dzięki obecności allelu dominującego roślina przeżyje. Podczas mejozy powstają mejospory (1n), z których połowa ma allel prawidłowy, a połowa letalny. Komórki haploidalne z allelem letalnym obumierają, natomiast te z allelem prawidłowym rozwijają się w gametofit (1n). W ten sposób allele letalne są usuwane z populacji.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest różnica między zakresem zmienności a odchyleniem standardowym?",
      "answer": "Zakres zmienności to różnica między wartością maksymalną a minimalną w próbie, natomiast odchylenie standardowe mierzy średnie rozproszenie wartości wokół średniej arytmetycznej."
    },
    {
      "question": "Jak nazywa się parametr statystyczny określający najczęstszą wartość w próbie?",
      "answer": "Dominanta (inaczej moda)."
    },
    {
      "question": "Czy mutacje somatyczne są dziedziczone?",
      "answer": "Nie, mutacje somatyczne nie są dziedziczone, ponieważ dotyczą komórek ciała, a nie komórek płciowych."
    }
  ]
};
