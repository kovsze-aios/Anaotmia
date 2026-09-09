import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_97_charakteryReprezentacjiGrupSymetriiData: StructuredChapter = {
  "chapterTitle": "Charaktery reprezentacji grup symetrii",
  "toc": [
    {
      "title": "Wprowadzenie do charakterów reprezentacji",
      "anchorId": "wprowadzenie-do-charakterow-reprezentacji"
    },
    {
      "title": "Metoda wektorowa wyznaczania charakterów",
      "anchorId": "metoda-wektorowa-wyznaczania-charakterow"
    },
    {
      "title": "Tablice charakterów dla grup punktowych",
      "anchorId": "tablice-charakterow-dla-grup-punktowych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-charakterow-reprezentacji\">Wprowadzenie do charakterów reprezentacji</h3><p>W analizie symetrii cząsteczek często wykorzystuje się uproszczoną metodę wyznaczania charakterów reprezentacji, która nie wymaga pełnej znajomości macierzy transformacji. Metoda ta opiera się na obserwacji zachowania wektorów składowych (x, y, z) punktu P podczas działania operacji symetrii. Dla każdego wektora, który pozostaje niezmieniony, do charakteru dodajemy +1; jeśli wektor zmienia kierunek na przeciwny (o 180°), dodajemy -1; natomiast jeśli wektor przemieszcza się w inne położenie, jego wkład wynosi 0.</p><p>Podejście to pozwala szybko określić charakter reprezentacji dla danej operacji symetrii, bez konieczności konstruowania pełnych macierzy transformacji. Wyniki uzyskane tą metodą są identyczne z tymi, które otrzymuje się na podstawie szczegółowej analizy macierzowej, co czyni ją niezwykle praktyczną w zastosowaniach chemicznych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"metoda-wektorowa-wyznaczania-charakterow\">Metoda wektorowa wyznaczania charakterów</h3><p>Rozważmy transformacje punktu P w grupach symetrii, śledząc zachowanie wektorów x, y, z. Dla operacji tożsamościowej E wszystkie trzy wektory pozostają niezmienione, zatem charakter χ(E) = 3. W przypadku obrotu wokół osi C<sub>4</sub> wektory x i y zmieniają swoje położenie, a jedynie wektor z pozostaje niezmieniony, więc χ(C<sub>4</sub>) = 1.</p><p>Obrót wokół osi dwukrotnej C<sub>2</sub> przekształca wektory x i y w ich przeciwieństwa (-x, -y), co daje wkład -2, podczas gdy wektor z pozostaje bez zmian; stąd χ(C<sub>2</sub>) = -1. Odbicie w płaszczyźnie σ<sub>v</sub> (płaszczyzna xz) pozostawia wektory x i z niezmienione (+2), a wektor y zmienia kierunek na przeciwny (-1), więc χ(σ<sub>v</sub>) = 1. Natomiast odbicie w płaszczyźnie σ<sub>d</sub> powoduje wymianę wektorów x i y (wkład 0), a wektor z pozostaje niezmieniony, co daje χ(σ<sub>d</sub>) = 1.</p><p>Wyniki te pokazują, że prosta analiza wektorowa prowadzi do poprawnych wartości charakterów, zgodnych z pełnym opisem macierzowym. Metoda ta jest szczególnie użyteczna przy klasyfikacji orbitali molekularnych i drgań normalnych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"tablice-charakterow-dla-grup-punktowych\">Tablice charakterów dla grup punktowych</h3><p>W praktyce chemicznej często korzysta się z gotowych tablic charakterów dla poszczególnych grup punktowych. Tablice te zawierają zestawienie wszystkich nieprzywiedlnych reprezentacji danej grupy oraz wartości charakterów dla każdej klasy operacji symetrii. Pierwsza kolumna tablicy zawiera symbole reprezentacji nieprzywiedlnych, a w nagłówkach kolumn umieszczone są operacje symetrii pogrupowane w klasy.</p><p>Przykładowo, dla grupy C<sub>4v</sub> reprezentacja B<sub>2</sub> ma następujące charaktery: χ(E) = 1, χ(C<sub>4</sub>) = -1, χ(C<sub>2</sub>) = 1, χ(σ<sub>v</sub>) = -1 oraz χ(σ<sub>d</sub>) = 1. Należy zwrócić uwagę, że w nagłówku kolumny może pojawić się współczynnik, np. 2C<sub>4</sub>, co oznacza, że w grupie istnieje jedna oś C<sub>4</sub>, ale można wykonać dwie operacje obrotu: o kąt +90° i -90° (lub równoważnie +270°). Obie operacje mają różne macierze, ale ich charaktery są takie same.</p><p>Znajomość tablic charakterów umożliwia szybkie określenie symetrii orbitali, stanów elektronowych czy drgań molekuł, co jest kluczowe w spektroskopii i chemii koordynacyjnej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki jest charakter reprezentacji dla operacji tożsamościowej E w metodzie wektorowej, jeśli rozpatrujemy trzy wektory x, y, z?",
      "answer": "Charakter χ(E) = 3, ponieważ wszystkie trzy wektory pozostają niezmienione."
    },
    {
      "question": "Dlaczego w grupie C4v dla obrotu C4 charakter wynosi 1, a nie 0?",
      "answer": "Ponieważ tylko wektor z pozostaje niezmieniony, a wektory x i y zmieniają położenie, więc ich wkład jest zerowy; stąd χ(C4) = 1."
    },
    {
      "question": "Co oznacza zapis 2C4 w nagłówku tablicy charakterów?",
      "answer": "Oznacza, że istnieje jedna oś C4, ale można wykonać dwie operacje obrotu: o kąt +90° i -90° (lub +270°), które mają różne macierze, ale ten sam charakter."
    }
  ]
};
