import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_113_siecPrzestrzennaIKomorkaElementarnaData: StructuredChapter = {
  "chapterTitle": "Sieć przestrzenna i komórka elementarna",
  "toc": [
    {
      "title": "Płaszczyzny sieciowe a ściany kryształu",
      "anchorId": "plaszczyzny-sieciowe-a-sciany-krysztalu"
    },
    {
      "title": "Komórka elementarna",
      "anchorId": "komorka-elementarna"
    },
    {
      "title": "Liczba jonów w komórce elementarnej NaCl",
      "anchorId": "liczba-jonow-w-komorce-elementarnej-nacl"
    },
    {
      "title": "Liczba koordynacyjna",
      "anchorId": "liczba-koordynacyjna"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"plaszczyzny-sieciowe-a-sciany-krysztalu\">Płaszczyzny sieciowe a ściany kryształu</h3><p>W sieci przestrzennej można wyróżnić płaszczyzny przechodzące przez węzły sieci, zwane płaszczyznami sieciowymi. Na przykład płaszczyzny ABCD, ABEF i BCGE wyznaczają kierunki możliwych ścian kryształu, takich jak ściany ośmiościanu widocznego na rysunku. Ogólnie rzecz biorąc, kierunki płaszczyzn sieciowych odpowiadają kierunkom ścian kryształu. Najczęściej spotykane ściany kryształów to te, które odpowiadają płaszczyznom sieciowym o największym zagęszczeniu atomów.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"komorka-elementarna\">Komórka elementarna</h3><p>Do pełnego opisu sieci przestrzennej nie jest konieczne podawanie położenia wszystkich atomów. Wystarczy znać tzw. komórkę elementarną, czyli najmniejszy wycinek sieci, który zachowuje wszystkie jej charakterystyczne cechy. Komórka elementarna ma kształt równoległościanu, a przez jego przesuwanie w trzech kierunkach równoległych do krawędzi można odtworzyć całą sieć. W danej sieci można wybrać różne równoległościany, ale najdogodniej jest wybrać komórkę o możliwie najkrótszych krawędziach. Dla sieci dwuwymiarowej może to być kwadrat, a dla trójwymiarowej sieci NaCl – sześcian, którego krawędź jest równa podwójnej odległości między środkami ciężkości dwóch najbliżej położonych jonów Cl<sup>-</sup> i Na<sup>+</sup>.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"liczba-jonow-w-komorce-elementarnej-nacl\">Liczba jonów w komórce elementarnej NaCl</h3><p>Określając liczbę jonów w komórce elementarnej NaCl, należy uwzględnić, że jony znajdujące się w narożach, na krawędziach i na ścianach są współdzielone z sąsiednimi komórkami. Jony chloru w narożach (pozycja A) należą do ośmiu komórek, więc tylko 1/8 każdego z nich przypada na daną komórkę. Jony chloru w środkach ścian (pozycja B) są współdzielone przez dwie komórki, więc każdy z nich w połowie należy do rozpatrywanej komórki. W komórce NaCl znajduje się 8 jonów chloru w narożach i 6 na ścianach, co daje 8·(1/8) + 6·(1/2) = 4 jony chloru. Jony sodu na krawędziach (pozycja C) są współdzielone przez cztery komórki, więc każdy z nich w 1/4 należy do komórki; jest ich 12, co daje 12·(1/4) = 3 jony. Dodatkowo jeden jon sodu znajduje się w środku komórki (pozycja D), więc całkowita liczba jonów sodu wynosi 3 + 1 = 4. Zatem komórka elementarna NaCl zawiera 4 jony chloru i 4 jony sodu.</p><p>Opisując komórkę elementarną, należy podać długości jej krawędzi (parametry sieci), kąty między nimi (dla NaCl wynoszą 90°) oraz rozmieszczenie atomów. Dla NaCl, przy rozmieszczeniu jonów jak na rysunku, przesuwanie komórki o odległość a w kierunkach równoległych do krawędzi prowadzi do odtworzenia całej sieci przestrzennej.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"liczba-koordynacyjna\">Liczba koordynacyjna</h3><p>W sieci NaCl każdy jon sodu jest otoczony przez sześć jonów chloru rozmieszczonych w narożach ośmiościanu foremnego, a każdy jon chloru – przez sześć jonów sodu. Liczba atomów bezpośrednio sąsiadujących z danym atomem w sieci przestrzennej nazywana jest liczbą koordynacyjną. Dla jonów w NaCl liczba koordynacyjna wynosi 6.</p><p>Rozmieszczenie jonów w sieci NaCl jest takie, że nie można wyróżnić odrębnych cząsteczek NaCl; cały kryształ można traktować jako jedną olbrzymią cząsteczkę. Struktury, w których nie można wyróżnić pojedynczych cząsteczek, nazywamy strukturami jonowymi. Komórka elementarna w kształcie sześcianu, jak w przypadku NaCl, jest charakterystyczna dla sieci krystalicznych układu regularnego. Parametry komórek elementarnych, takie jak długości krawędzi i kąty, są zestawione w tablicach krystalograficznych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest komórka elementarna i jakie ma znaczenie w opisie sieci krystalicznej?",
      "answer": "Komórka elementarna to najmniejszy wycinek sieci przestrzennej, który zachowuje wszystkie jej cechy charakterystyczne. Poprzez jej translację w trzech kierunkach można odtworzyć całą sieć krystaliczną."
    },
    {
      "question": "Ile jonów chloru i sodu znajduje się w komórce elementarnej NaCl?",
      "answer": "Komórka elementarna NaCl zawiera 4 jony chloru i 4 jony sodu."
    },
    {
      "question": "Co to jest liczba koordynacyjna i jaka jest dla jonów w krysztale NaCl?",
      "answer": "Liczba koordynacyjna to liczba najbliższych sąsiadów danego atomu w sieci krystalicznej. Dla jonów w NaCl wynosi 6."
    }
  ]
};
