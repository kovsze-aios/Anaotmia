import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_134_spektroskopiaRamanaIMetodyRezonansoweData: StructuredChapter = {
  "chapterTitle": "Spektroskopia Ramana i metody rezonansowe",
  "toc": [
    {
      "title": "Zasada spektroskopii Ramana",
      "anchorId": "zasada-spektroskopii-ramana"
    },
    {
      "title": "Zakresy widma elektromagnetycznego w spektroskopii molekularnej",
      "anchorId": "zakresy-widma-elektromagnetycznego"
    },
    {
      "title": "Metody rezonansowe w spektroskopii",
      "anchorId": "metody-rezonansowe"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"zasada-spektroskopii-ramana\">Zasada spektroskopii Ramana</h3><p>W spektroskopii Ramana próbkę oświetla się wiązką promieniowania widzialnego o ściśle określonej, monochromatycznej częstotliwości (współcześnie źródłem jest najczęściej laser). Obserwacji podlega promieniowanie rozproszone, powstające w wyniku oddziaływania światła z cząsteczkami. W widmie rozproszenia, oprócz linii o częstotliwości równej częstotliwości światła padającego (tzw. rozproszenie rayleighowskie), pojawiają się symetrycznie położone linie o częstotliwościach niższych i wyższych od częstotliwości pierwotnej.</p><p>Linie o niższej częstotliwości (tzw. linie Stokesa) powstają, gdy część energii kwantu padającego jest zużywana na wzbudzenie ruchu rotacyjnego lub oscylacyjnego cząsteczki, a pozostała część jest emitowana jako kwant o mniejszej energii. Różnica energii między kwantem padającym a rozproszonym odpowiada właśnie energii wzbudzenia rotacji lub oscylacji. Zależność tę można wyrazić wzorem: ε = h(ν<sub>0</sub> – ν<sub>1</sub>), gdzie ν<sub>0</sub> to częstotliwość światła padającego, a ν<sub>1</sub> – częstotliwość linii rozproszonej.</p><p>Z kolei linie o wyższej częstotliwości (linie antystokesowskie) powstają, gdy cząsteczka już wzbudzona termicznie oddaje swoją energię kwantowi padającemu, zwiększając jego energię. W rezultacie częstotliwość rozproszonego kwantu jest sumą częstotliwości pierwotnej i częstotliwości odpowiadającej poziomowi wzbudzenia. Dzięki temu linie Stokesa i antystokesowska są rozmieszczone symetrycznie względem linii Rayleigha, co stanowi charakterystyczną cechę widm ramanowskich.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zakresy-widma-elektromagnetycznego\">Zakresy widma elektromagnetycznego w spektroskopii molekularnej</h3><p>Spektroskopia Ramana umożliwia badanie zarówno widm rotacyjnych, jak i oscylacyjnych cząsteczek. Aby zaobserwować poszczególne typy przejść, wykorzystuje się odpowiednie zakresy promieniowania elektromagnetycznego. Przejściom rotacyjnym odpowiadają fale o długości rzędu centymetrów lub milimetrów, czyli mikrofale. Przejścia oscylacyjne są wzbudzane przez promieniowanie podczerwone o długości fal od około 0,1 µm do 2,5 µm, co odpowiada liczbom falowym w zakresie 100–4000 cm<sup>-1</sup>.</p><p>Największych energii wymagają przejścia elektronowe, które są wzbudzane przez promieniowanie widzialne i nadfioletowe, czyli fale o długości od około 700 nm do kilku nanometrów. Szczegółowe informacje na temat przyrządów służących do wytwarzania, wykrywania i rejestracji promieniowania w tych zakresach można znaleźć w podręcznikach fizyki doświadczalnej.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"metody-rezonansowe\">Metody rezonansowe w spektroskopii</h3><p>Ważną grupą metod spektroskopii molekularnej są techniki rezonansowe. W metodach tych stosuje się promieniowanie o stałej częstotliwości, a warunki panujące w próbce dobiera się tak, aby zachodziło pochłanianie promieniowania o tej właśnie częstotliwości – zjawisko rezonansu. Do najważniejszych metod rezonansowych należą elektronowy rezonans paramagnetyczny (EPR) oraz jądrowy rezonans magnetyczny (NMR).</p><p>Metody te znajdują szerokie zastosowanie w chemii i biologii, umożliwiając m.in. badanie struktury cząsteczek, dynamiki molekularnej oraz oddziaływań międzycząsteczkowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega zjawisko rozpraszania Ramana i jakie linie pojawiają się w widmie rozproszonym?",
      "answer": "W spektroskopii Ramana próbkę oświetla się monochromatycznym światłem widzialnym. W rozproszonym promieniowaniu obserwuje się linię Rayleigha (o częstotliwości równej padającej) oraz linie Stokesa (o niższej częstotliwości) i antystokesowskie (o wyższej częstotliwości), rozmieszczone symetrycznie względem linii Rayleigha. Linie te powstają w wyniku nieelastycznego rozpraszania, podczas którego część energii kwantu jest przekazywana cząsteczce (linie Stokesa) lub odbierana od cząsteczki wzbudzonej (linie antystokesowskie)."
    },
    {
      "question": "Jakie zakresy promieniowania elektromagnetycznego są wykorzystywane do wzbudzania przejść rotacyjnych, oscylacyjnych i elektronowych?",
      "answer": "Przejścia rotacyjne są wzbudzane przez mikrofale (długość fali rzędu cm lub mm). Przejścia oscylacyjne – przez promieniowanie podczerwone (0,1–2,5 µm, liczby falowe 100–4000 cm⁻¹). Przejścia elektronowe – przez promieniowanie widzialne i nadfioletowe (700 nm do kilku nm)."
    },
    {
      "question": "Czym charakteryzują się metody rezonansowe w spektroskopii molekularnej?",
      "answer": "Metody rezonansowe polegają na użyciu promieniowania o stałej częstotliwości i takim dobraniu warunków próbki, aby zachodziło pochłanianie tego promieniowania (rezonans). Przykładami są elektronowy rezonans paramagnetyczny (EPR) i jądrowy rezonans magnetyczny (NMR)."
    }
  ]
};
