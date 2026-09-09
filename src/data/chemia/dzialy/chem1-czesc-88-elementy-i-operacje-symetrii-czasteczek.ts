import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_88_elementyIOperacjeSymetriiCzasteczekData: StructuredChapter = {
  "chapterTitle": "Elementy i operacje symetrii cząsteczek",
  "toc": [
    {
      "title": "Płaszczyzny symetrii",
      "anchorId": "plaszczyzny-symetrii"
    },
    {
      "title": "Oś przemienna",
      "anchorId": "os-przemienna"
    },
    {
      "title": "Inwersja i element tożsamościowy",
      "anchorId": "inwersja-element-tozsamosciowy"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"plaszczyzny-symetrii\">Płaszczyzny symetrii</h3><p>Płaszczyzna symetrii dzieli cząsteczkę na dwie części, które są swoimi lustrzanymi odbiciami. Operacją symetrii jest w tym przypadku odbicie w tej płaszczyźnie. Cząsteczka trifluorku boru (BF<sub>3</sub>) posiada trzy płaszczyzny symetrii, z których każda zawiera główną oś symetrii oraz jedną z osi dwukrotnych. Takie płaszczyzny, zawierające główną oś symetrii, oznacza się symbolem σ<sub>v</sub> (od ang. <em>vertical</em> – pionowa).</p><p>Oprócz trzech płaszczyzn σ<sub>v</sub>, cząsteczka BF<sub>3</sub> ma również płaszczyznę prostopadłą do osi głównej, przechodzącą przez środki wszystkich czterech jąder atomowych. Tego typu płaszczyznę, prostopadłą do osi głównej, oznacza się symbolem σ<sub>h</sub> (od ang. <em>horizontal</em> – pozioma). W niektórych cząsteczkach wyróżnia się także specjalny rodzaj płaszczyzn σ<sub>v</sub>, a mianowicie płaszczyzny połowiące kąt między dwiema osiami dwukrotnymi prostopadłymi do osi głównej. Oznacza się je symbolem σ<sub>d</sub> (od ang. <em>dihedral</em> – dwuścienny).</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"os-przemienna\">Oś przemienna</h3><p>Operacją symetrii określaną jako obrót wokół przemiennej osi symetrii S<sub>n</sub> jest złożenie obrotu o kąt 360°/n wokół osi oraz odbicia w płaszczyźnie prostopadłej do tej osi. Przykładem cząsteczki z czterokrotną osią przemienną jest tetrachlorometan (CCl<sub>4</sub>). Ani sam obrót o 90° wokół osi z, ani osobno wykonane odbicie w płaszczyźnie xy nie prowadzi do przekształcenia równoważnego. Dopiero połączenie obrotu i odbicia w jedną wspólną operację daje przekształcenie równoważne, co świadczy o obecności czterokrotnej osi przemiennej S<sub>4</sub>.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"inwersja-element-tozsamosciowy\">Inwersja i element tożsamościowy</h3><p>Inwersja, czyli przekształcenie względem środka symetrii, przenosi jądro atomu z położenia o współrzędnych (x, y, z) do położenia o współrzędnych (−x, −y, −z). Dla cząsteczek, które nie mają środka symetrii, inwersja może być równoważna obrotowi wokół dwukrotnej osi przemiennej S<sub>2</sub>.</p><p>W analizie symetrii cząsteczek wprowadza się również element tożsamościowy E. Odpowiadająca mu operacja polega na obrocie cząsteczki o kąt 360° wokół dowolnej osi, co pozostawia obiekt bez żadnej zmiany. Element tożsamościowy jest obecny we wszystkich cząsteczkach, nawet tych, które nie wykazują żadnego innego elementu symetrii. Jest on niezbędny do zastosowania matematycznej teorii grup w opisie symetrii.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak oznacza się płaszczyznę symetrii zawierającą główną oś symetrii?",
      "answer": "Symbolem σv (od ang. vertical)."
    },
    {
      "question": "Co to jest oś przemienna i jaki jest przykład cząsteczki z taką osią?",
      "answer": "Oś przemienna S_n to złożenie obrotu o kąt 360°/n i odbicia w płaszczyźnie prostopadłej do osi. Przykładem jest cząsteczka CCl4 z osią S4."
    },
    {
      "question": "Dlaczego element tożsamościowy E jest ważny w teorii symetrii?",
      "answer": "Element tożsamościowy E jest niezbędny do zastosowania teorii grup, ponieważ umożliwia formalny opis operacji symetrii, a także występuje w każdej cząsteczce."
    }
  ]
};
