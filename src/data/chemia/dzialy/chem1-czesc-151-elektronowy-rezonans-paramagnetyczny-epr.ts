import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_151_elektronowyRezonansParamagnetycznyEprData: StructuredChapter = {
  "chapterTitle": "Elektronowy Rezonans Paramagnetyczny (EPR)",
  "toc": [
    {
      "title": "Podstawy fizyczne EPR",
      "anchorId": "podstawy-fizyczne-epr"
    },
    {
      "title": "Warunek rezonansu i metody pomiaru",
      "anchorId": "warunek-rezonansu-i-metody-pomiaru"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"podstawy-fizyczne-epr\">Podstawy fizyczne EPR</h3><p>Atomy i jony, które posiadają niezerowy wypadkowy moment pędu elektronów, charakteryzują się również wypadkowym momentem magnetycznym. Zgodnie z formalizmem kwantowym, wypadkowy moment pędu jest określony przez liczbę kwantową J, a jego długość wynosi √(J(J+1)) ħ, gdzie ħ to zredukowana stała Plancka. Moment magnetyczny jest proporcjonalny do momentu pędu, a współczynnikiem proporcjonalności jest czynnik g Landégo pomnożony przez magneton Bohra μ<sub>B</sub>. Wektory te są do siebie antyrównoległe.</p><p>W obecności zewnętrznego pola magnetycznego, które definiuje wyróżniony kierunek (oś z), moment pędu ulega kwantowaniu przestrzennemu. Oznacza to, że jego rzut na oś z może przyjmować tylko dyskretne wartości, określone magnetyczną liczbą kwantową m<sub>J</sub>, która przyjmuje wartości od -J do +J, różniące się o 1. Każdej z tych wartości odpowiada inna energia potencjalna atomu w polu magnetycznym o indukcji B, wyrażona wzorem E = m<sub>J</sub> g μ<sub>B</sub> B.</p><p>Różnica energii między sąsiednimi poziomami (różniącymi się o 1 w wartości m<sub>J</sub>) jest stała dla danego pola i wynosi ΔE = g μ<sub>B</sub> B. Aby wymusić przejście między tymi poziomami, należy dostarczyć kwant promieniowania o energii równej tej różnicy, co prowadzi do podstawowego warunku rezonansu: hν = g μ<sub>B</sub> B.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"warunek-rezonansu-i-metody-pomiaru\">Warunek rezonansu i metody pomiaru</h3><p>Dla typowych pól magnetycznych o indukcji od 0,1 do 1 T, częstość promieniowania spełniająca warunek rezonansowy mieści się w zakresie mikrofal (około 10 GHz, co odpowiada długości fali około 3 cm). W praktyce pomiarowej stosuje się dwie strategie: można zmieniać częstość promieniowania przy stałym polu magnetycznym, albo – co jest częstsze – utrzymywać stałą częstość mikrofal i stopniowo zmieniać indukcję pola magnetycznego. W tym drugim przypadku, gdy pole osiągnie wartość spełniającą warunek rezonansowy, obserwuje się charakterystyczne pochłanianie energii przez próbkę.</p><p>Nowoczesne spektrometry EPR rejestrują nie bezpośrednio krzywą absorpcji, lecz jej pierwszą pochodną względem indukcji pola magnetycznego. Taka forma zapisu zwiększa czułość i ułatwia rozróżnianie blisko położonych sygnałów. W typowym układzie pomiarowym mikrofale o stałej częstości są generowane przez klistron i prowadzone falowodem do wnęki rezonansowej zawierającej próbkę, umieszczonej między biegunami elektromagnesu. Gdy spełniony jest warunek rezonansu, próbka pochłania energię mikrofal, co powoduje spadek mocy docierającej do detektora. Sygnał ten jest następnie wzmacniany i rejestrowany, tworząc widmo EPR.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki jest warunek rezonansu w spektroskopii EPR?",
      "answer": "Warunek rezonansu wyraża się wzorem hν = g μB B, gdzie h to stała Plancka, ν to częstość promieniowania, g to czynnik Landégo, μB to magneton Bohra, a B to indukcja magnetyczna."
    },
    {
      "question": "Dlaczego w EPR często rejestruje się pochodną absorpcji, a nie samą absorpcję?",
      "answer": "Rejestracja pochodnej zwiększa czułość pomiaru i pozwala lepiej rozdzielić sąsiadujące sygnały, co ułatwia analizę widma."
    }
  ]
};
