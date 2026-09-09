import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_145_widmaOscylacyjneASymetriaCzasteczekData: StructuredChapter = {
  "chapterTitle": "Widma oscylacyjne a symetria cząsteczek",
  "toc": [
    {
      "title": "Analiza drgań normalnych cząsteczki wody",
      "anchorId": "analiza-dragan-normalnych-wody"
    },
    {
      "title": "Aktywność drgań w podczerwieni i w widmie Ramana",
      "anchorId": "aktywnosc-dragan-ir-raman"
    },
    {
      "title": "Zastosowanie teorii grup do określania struktury cząsteczek na przykładzie amoniaku",
      "anchorId": "teoria-grup-struktura-amoniaku"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"analiza-dragan-normalnych-wody\">Analiza drgań normalnych cząsteczki wody</h3><p>W przypadku cząsteczki wody, która należy do grupy symetrii C<sub>2v</sub>, całkowita liczba stopni swobody wynosi 9 (3n, gdzie n=3). Zgodnie z teorią grup, reprezentacje nieprzywiedlne opisujące te stopnie swobody można rozdzielić na trzy kategorie: translacyjne, rotacyjne i oscylacyjne.</p><p>Trzy reprezentacje odpowiadające ruchom translacyjnym to te, według których transformują się współrzędne kartezjańskie x, y i z. W tablicy charakterów grupy C<sub>2v</sub> są to reprezentacje A<sub>1</sub>, B<sub>1</sub> i B<sub>2</sub>. Kolejne trzy reprezentacje, oznaczone symbolami R<sub>x</sub>, R<sub>y</sub> i R<sub>z</sub>, odpowiadają obrotom cząsteczki jako całości; w grupie C<sub>2v</sub> są to A<sub>2</sub>, B<sub>1</sub> i B<sub>2</sub>.</p><p>Pozostałe trzy reprezentacje nieprzywiedlne (3n-6 = 3) opisują drgania normalne cząsteczki. Dla wody są to dwie reprezentacje A<sub>1</sub> i jedna B<sub>1</sub>. Zatem cząsteczka wody posiada trzy drgania normalne, co jest zgodne z przewidywaniami dla cząsteczek nieliniowych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"aktywnosc-dragan-ir-raman\">Aktywność drgań w podczerwieni i w widmie Ramana</h3><p>Teoria grup pozwala również przewidzieć, które z drgań normalnych będą aktywne w absorpcji w podczerwieni, a które w widmie Ramana. Warunkiem aktywności w podczerwieni jest zmiana momentu dipolowego cząsteczki podczas drgania (∂μ/∂r)<sub>r=r0</sub> ≠ 0. Drganie jest aktywne w podczerwieni, jeśli jego reprezentacja transformuje się tak samo, jak współrzędne kartezjańskie x, y lub z.</p><p>Z kolei drganie jest aktywne w widmie Ramana, jeśli podczas drgania zmienia się polaryzowalność cząsteczki (∂α/∂r)<sub>r=r0</sub> ≠ 0. Wówczas reprezentacja drgania musi transformować się jak kwadratowe funkcje współrzędnych: x<sup>2</sup>, y<sup>2</sup>, z<sup>2</sup>, xy, yz, zx lub x<sup>2</sup>-y<sup>2</sup>.</p><p>Porównując reprezentacje drgań wody z tablicą charakterów grupy C<sub>2v</sub>, stwierdzamy, że drgania typu A<sub>1</sub> transformują się jak współrzędna z oraz jak funkcje x<sup>2</sup>, y<sup>2</sup> i z<sup>2</sup>. Drganie typu B<sub>1</sub> transformuje się jak współrzędna x oraz jak funkcja xz. W związku z tym wszystkie trzy drgania normalne wody (dwa A<sub>1</sub> i jedno B<sub>1</sub>) są aktywne zarówno w podczerwieni, jak i w widmie Ramana.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"teoria-grup-struktura-amoniaku\">Zastosowanie teorii grup do określania struktury cząsteczek na przykładzie amoniaku</h3><p>Rozumowanie oparte na teorii grup może w niektórych przypadkach dostarczyć informacji o geometrii cząsteczek. Rozważmy cząsteczkę amoniaku (NH<sub>3</sub>), dla której możliwe są dwie struktury: płaska o symetrii D<sub>3h</sub> oraz piramidalna o symetrii C<sub>3v</sub>. Aby określić, która struktura jest rzeczywista, można przeanalizować liczbę i symetrię drgań normalnych przewidywanych dla każdej z tych grup.</p><p>Dla grupy D<sub>3h</sub> tablica charakterów zawiera operacje: E, 2C<sub>3</sub>, 3C<sub>2</sub>, σ<sub>h</sub>, 2S<sub>3</sub> i 3σ<sub>v</sub>. Reprezentacje nieprzywiedlne obejmują A<sub>1</sub>', A<sub>2</sub>'', E', A<sub>1</sub>'', A<sub>2</sub>' i E''. Dla cząsteczki płaskiej liczba drgań normalnych wynosi 3n-6 = 6 (dla n=4).</p><p>Rozważmy wpływ poszczególnych operacji symetrii na wektory przemieszczeń atomów. Dla obrotu C<sub>3</sub> wokół osi prostopadłej do płaszczyzny cząsteczki, wektory przy atomach wodoru przechodzą jeden w drugi, dając zerowy wkład do charakteru, natomiast wektor przy azocie (z<sub>4</sub>) pozostaje niezmieniony, dając wkład +1. Wektory x<sub>4</sub> i y<sub>4</sub> obracają się o kąt 2π/3, co daje wkład 2·cos(2π/3) = -1. Zatem charakter dla C<sub>3</sub> wynosi 0.</p><p>Dla osi C<sub>2</sub> przechodzącej przez wiązanie N-H, wektory przy dwóch pozostałych atomach wodoru zamieniają się miejscami (wkład 0), wektory y przy azocie i wodorze na osi pozostają niezmienione (wkład +2), a wektory x i z przy tych atomach zmieniają znak (wkład -4). Charakter wynosi -2.</p><p>Dla odbicia w płaszczyźnie poziomej σ<sub>h</sub>, wektory x i y wszystkich atomów pozostają niezmienione (wkład +8), a wektory z zmieniają znak (wkład -4), co daje charakter +4.</p><p>Wykonując pełną analizę dla wszystkich operacji, można zredukować reprezentację przywiedlną i otrzymać liczbę drgań aktywnych w podczerwieni i Ramanie. Porównanie przewidywań teoretycznych z eksperymentalnymi widmami pozwala jednoznacznie stwierdzić, że cząsteczka amoniaku ma strukturę piramidalną (C<sub>3v</sub>), a nie płaską.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile drgań normalnych posiada cząsteczka wody i jakie są ich symetrie?",
      "answer": "Cząsteczka wody ma 3 drgania normalne: dwa o symetrii A1 i jedno o symetrii B1."
    },
    {
      "question": "Jakie warunki musi spełniać drganie, aby było aktywne w podczerwieni?",
      "answer": "Drganie jest aktywne w podczerwieni, jeśli podczas drgania zmienia się moment dipolowy cząsteczki, czyli (∂μ/∂r) ≠ 0. Reprezentacja drgania musi transformować się jak współrzędne x, y lub z."
    },
    {
      "question": "Jakie drgania są aktywne w widmie Ramana?",
      "answer": "W widmie Ramana aktywne są drgania, podczas których zmienia się polaryzowalność cząsteczki, czyli (∂α/∂r) ≠ 0. Reprezentacja drgania musi transformować się jak kwadratowe funkcje współrzędnych, np. x², y², z², xy, yz, zx."
    },
    {
      "question": "Dlaczego na podstawie teorii grup można stwierdzić, że amoniak ma strukturę piramidalną, a nie płaską?",
      "answer": "Teoria grup pozwala przewidzieć liczbę i symetrię drgań normalnych dla obu możliwych struktur (D3h i C3v). Porównanie przewidywanych widm IR i Ramana z obserwowanymi eksperymentalnie wskazuje, że amoniak ma strukturę piramidalną (C3v), ponieważ tylko ta struktura daje zgodność z doświadczeniem."
    }
  ]
};
