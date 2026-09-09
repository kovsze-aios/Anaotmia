import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_92_punktoweGrupySymetriiPrzegladIPrzykladyData: StructuredChapter = {
  "chapterTitle": "Punktowe grupy symetrii – przegląd i przykłady",
  "toc": [
    {
      "title": "Grupy D i ich elementy symetrii",
      "anchorId": "grupy-d"
    },
    {
      "title": "Grupy S (osie przemienne)",
      "anchorId": "grupy-s"
    },
    {
      "title": "Grupy T i O",
      "anchorId": "grupy-t-o"
    },
    {
      "title": "Grupy dla cząsteczek liniowych",
      "anchorId": "grupy-liniowe"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"grupy-d\">Grupy D i ich elementy symetrii</h3><p>Grupy punktowe typu D charakteryzują się bogatszym zestawem elementów symetrii niż grupy C. Gdy do osi głównej dodamy poziomą oś dwukrotną, generuje to dodatkowe osie C<sub>2</sub> (łącznie n), a także pionowe płaszczyzny symetrii przecinające się wzdłuż osi głównej. Liczba tych płaszczyzn wynosi n, a kąt między sąsiednimi płaszczyznami to 180°/n.</p><p>Obecność poziomej płaszczyzny symetrii σ<sub>h</sub> oraz osi C<sub>2</sub> prostopadłej do osi głównej prowadzi do powstania osi przemiennych S<sub>n</sub>, a dla parzystego n – także środka symetrii i. Przykładem cząsteczki o symetrii D<sub>2h</sub> jest etylen (C<sub>2</sub>H<sub>4</sub>), którego operacje symetrii to: E, C<sub>2</sub>(z), C<sub>2</sub>(x), C<sub>2</sub>(y), i, σ<sub>xy</sub>, σ<sub>xz</sub>, σ<sub>yz</sub>. Z kolei cząsteczka BF<sub>3</sub> należy do grupy D<sub>3h</sub> i ma operacje: E, C<sub>3</sub>, C<sub>3</sub><sup>2</sup>, 3C<sub>2</sub>, σ<sub>h</sub>, S<sub>3</sub>, S<sub>3</sub><sup>5</sup>, 3σ<sub>v</sub>. Benzen (C<sub>6</sub>H<sub>6</sub>) reprezentuje grupę D<sub>6h</sub> z operacjami: E, C<sub>6</sub>, C<sub>3</sub>, C<sub>2</sub>, C<sub>3</sub><sup>2</sup>, C<sub>6</sub><sup>5</sup>, 3C<sub>2</sub>′, 3C<sub>2</sub>″, σ<sub>h</sub>, S<sub>6</sub>, S<sub>3</sub>, i, S<sub>3</sub><sup>5</sup>, S<sub>6</sub><sup>5</sup>, 3σ<sub>v</sub>, 3σ<sub>d</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"grupy-s\">Grupy S (osie przemienne)</h3><p>Grupy oznaczone symbolem S mają oś przemienną jako oś główną, która generuje pozostałe elementy symetrii. Są one wyróżniane tylko dla parzystych wartości n (4, 6 lub 8). Dla nieparzystych n grupy z osią S<sub>n</sub> są równoważne odpowiednim grupom D. Najprostsza grupa S<sub>2</sub> jest identyczna z grupą C<sub>i</sub>, ponieważ obrót wokół dwukrotnej osi przemiennej odpowiada inwersji.</p><p>Grupa S<sub>4</sub> zawiera cztery operacje: E, S<sub>4</sub>, C<sub>2</sub> oraz S<sub>4</sub><sup>3</sup>. Grupa S<sub>6</sub> ma sześć operacji: E, S<sub>6</sub>, S<sub>6</sub><sup>5</sup>, i, C<sub>3</sub> oraz C<sub>3</sub><sup>2</sup>. Z kolei grupa S<sub>8</sub> obejmuje osiem operacji: E, S<sub>8</sub>, C<sub>4</sub>, S<sub>8</sub><sup>3</sup>, C<sub>2</sub>, S<sub>8</sub><sup>5</sup>, C<sub>4</sub><sup>3</sup> oraz S<sub>8</sub><sup>7</sup>.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"grupy-t-o\">Grupy T i O</h3><p>Wśród grup z więcej niż jedną osią wysokiej krotności szczególne znaczenie mają grupy T i O. Grupa T odpowiada symetrii czworościanu foremnego. Typowymi cząsteczkami o tej symetrii są CCl<sub>4</sub> i CH<sub>4</sub>. Mają one cztery osie C<sub>3</sub> przecinające się w środku pod kątem 109°28′, trzy osie C<sub>2</sub>, sześć płaszczyzn symetrii oraz trzy osie S<sub>4</sub>. W grupie tej nie występuje środek symetrii. Pełna lista operacji symetrii obejmuje: E, 4C<sub>3</sub>, 4C<sub>3</sub><sup>2</sup>, 3C<sub>2</sub>, 3S<sub>4</sub>, 3S<sub>4</sub><sup>3</sup> oraz 6σ<sub>d</sub>.</p><p>Grupa punktowa O<sub>h</sub> odpowiada symetrii ośmiościanu foremnego. Przykładami są SF<sub>6</sub> oraz jony kompleksowe, takie jak [Fe(CN)<sub>6</sub>]<sup>4−</sup> i [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>. Cząsteczki te wykazują trzy osie C<sub>4</sub>, cztery osie C<sub>3</sub>, sześć osi C<sub>2</sub>, środek symetrii, dziewięć płaszczyzn symetrii, trzy osie S<sub>4</sub> i cztery osie S<sub>6</sub>. Liczba operacji symetrii jest tu szczególnie duża: E, 4C<sub>3</sub>, 4C<sub>3</sub><sup>2</sup>, 6C<sub>2</sub>, 3C<sub>4</sub>, 3C<sub>4</sub><sup>3</sup>, 3C<sub>2</sub>′ (= C<sub>4</sub><sup>2</sup>), i, 3S<sub>4</sub>, 3S<sub>4</sub><sup>3</sup>, 4S<sub>6</sub>, 4S<sub>6</sub><sup>5</sup>, 3σ<sub>h</sub> oraz 3σ<sub>d</sub>.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"grupy-liniowe\">Grupy dla cząsteczek liniowych</h3><p>Cząsteczki liniowe mają oś symetrii nieskończenie wysokiej krotności C<sub>∞</sub>, co oznacza, że obrót o dowolny kąt wokół tej osi prowadzi do położenia równoważnego. Ponadto posiadają nieskończenie wiele płaszczyzn symetrii σ<sub>v</sub> przecinających się wzdłuż osi C<sub>∞</sub>. Grupę punktową zawierającą tylko te elementy oznacza się symbolem C<sub>∞v</sub>. Przykładem cząsteczki o tej symetrii jest N<sub>3</sub>H (N-N-N-H).</p><p>Niektóre cząsteczki liniowe mają dodatkowo oś C<sub>2</sub> prostopadłą do osi C<sub>∞</sub>. Generuje to nieskończenie wiele poziomych osi C<sub>2</sub>, poziomą płaszczyznę σ<sub>h</sub> oraz środek symetrii. Taka grupa jest oznaczana symbolem D<sub>∞h</sub>. Klasycznym przykładem jest cząsteczka CO<sub>2</sub>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile operacji symetrii zawiera grupa D3h dla cząsteczki BF3?",
      "answer": "Grupa D3h dla BF3 zawiera 12 operacji: E, 2C3, 3C2, σh, 2S3, 3σv."
    },
    {
      "question": "Dlaczego grupa S2 jest równoważna grupie Ci?",
      "answer": "Ponieważ obrót o 180° wokół osi przemiennej S2 (czyli obrót o 90° i odbicie w płaszczyźnie prostopadłej) daje ten sam efekt co inwersja, więc operacje są identyczne."
    },
    {
      "question": "Jakie elementy symetrii posiada cząsteczka metanu (CH4) należąca do grupy Td?",
      "answer": "Cząsteczka CH4 ma 4 osie C3, 3 osie C2, 6 płaszczyzn σd oraz 3 osie S4. Nie posiada środka symetrii."
    },
    {
      "question": "Czym różni się grupa C∞v od D∞h?",
      "answer": "Grupa C∞v ma tylko oś C∞ i pionowe płaszczyzny σv, natomiast D∞h dodatkowo zawiera osie C2 prostopadłe do osi głównej, poziomą płaszczyznę σh oraz środek symetrii."
    }
  ]
};
