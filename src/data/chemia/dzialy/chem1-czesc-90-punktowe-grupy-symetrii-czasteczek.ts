import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_90_punktoweGrupySymetriiCzasteczekData: StructuredChapter = {
  "chapterTitle": "Punktowe grupy symetrii cząsteczek",
  "toc": [
    {
      "title": "Klasyfikacja grup punktowych",
      "anchorId": "klasyfikacja-grup-punktowych"
    },
    {
      "title": "Operacje symetrii w grupach Cₙ",
      "anchorId": "operacje-symetrii-w-grupach-cn"
    },
    {
      "title": "Grupy Cₙᵥ i ich operacje",
      "anchorId": "grupy-cnv-i-ich-operacje"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"klasyfikacja-grup-punktowych\">Klasyfikacja grup punktowych</h3><p>Punktowe grupy symetrii można podzielić na kilka kategorii w zależności od zestawu elementów symetrii występujących w cząsteczce. Podstawowy podział obejmuje grupy bez osi obrotowych, grupy z jedną osią główną, grupy z wieloma osiami wysokiej krotności oraz grupy cząsteczek liniowych.</p><p>Do pierwszej kategorii należą grupy: <strong>C₁</strong> (brak osi, płaszczyzn i środka symetrii), <strong>Cₛ</strong> (jedna płaszczyzna symetrii, brak osi i środka) oraz <strong>Cᵢ</strong> (środek symetrii, brak płaszczyzn i osi).</p><p>Grupy z jedną osią główną oznaczane są symbolami <strong>Cₙ</strong>, <strong>Cₙₕ</strong>, <strong>Cₙᵥ</strong>, <strong>Dₙ</strong>, <strong>Dₙₕ</strong>, <strong>Dₙₔ</strong> oraz <strong>Sₙ</strong>. Przykładowo, grupa <strong>Cₙ</strong> zawiera tylko oś n-krotną, natomiast <strong>Cₙₕ</strong> dodatkowo poziomą płaszczyznę symetrii prostopadłą do osi głównej. Grupa <strong>Cₙᵥ</strong> obejmuje oś n-krotną oraz n pionowych płaszczyzn symetrii przechodzących przez tę oś.</p><p>Grupy <strong>Dₙ</strong> charakteryzują się osią n-krotną oraz n osiami dwukrotnymi prostopadłymi do osi głównej. Wariant <strong>Dₙₕ</strong> zawiera dodatkowo poziomą płaszczyznę symetrii oraz n pionowych płaszczyzn, na których leżą osie dwukrotne. Z kolei <strong>Dₙₔ</strong> posiada n pionowych płaszczyzn połowiących kąty między osiami dwukrotnymi.</p><p>Grupy <strong>Sₙ</strong> dotyczą osi przemiennych o parzystej krotności (n = 4, 6, 8) i obejmują (n−2) dodatkowych elementów symetrii wynikających z powtarzania operacji Sₙ.</p><p>Wśród grup o wysokiej symetrii wyróżniamy <strong>T</strong> (symetria czworościanu foremnego), <strong>Oₕ</strong> (symetria ośmiościanu foremnego) oraz <strong>Iₕ</strong> (symetria dwunastościanu foremnego i dwudziestościanu foremnego). Grupa <strong>T</strong> zawiera cztery osie trójkrotne, trzy osie dwukrotne i sześć płaszczyzn symetrii. Grupa <strong>Oₕ</strong> ma trzy osie czterokrotne, cztery osie trójkrotne, sześć osi dwukrotnych i dziewięć płaszczyzn. Grupa <strong>Iₕ</strong> obejmuje odpowiednio osie pięciokrotne, trójkrotne i dwukrotne oraz liczne płaszczyzny symetrii.</p><p>Cząsteczki liniowe należą do grup <strong>C∞ᵥ</strong> lub <strong>D∞ₕ</strong>. Grupa <strong>C∞ᵥ</strong> charakteryzuje się osią symetrii o nieskończenie dużej krotności oraz nieskończoną liczbą pionowych płaszczyzn symetrii zawierających tę oś. Grupa <strong>D∞ₕ</strong> dodatkowo posiada nieskończenie wiele osi dwukrotnych prostopadłych do osi głównej oraz poziomą płaszczyznę symetrii σₕ.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"operacje-symetrii-w-grupach-cn\">Operacje symetrii w grupach Cₙ</h3><p>Rozważmy grupę punktową <strong>C₂</strong>. Obrót o kąt 360°/2 = 180° przeprowadza cząsteczkę w położenie równoważne wyjściowemu, co jest równoznaczne z operacją tożsamościową <strong>E</strong>. Zatem grupie C₂ odpowiadają dwie operacje symetrii: C₂ oraz E.</p><p>W przypadku grupy <strong>C₃</strong> możliwy jest obrót o kąt 120° (operacja C₃). Dwukrotne powtórzenie tej operacji daje obrót o 240°, który traktujemy jako osobną operację C₃². Potrójny obrót o 120° (C₃³) prowadzi do pozycji wyjściowej, więc jest równoważny operacji tożsamościowej: C₃³ = E. Grupa C₃ obejmuje zatem trzy operacje: C₃, C₃² i E.</p><p>Ogólnie, dla grupy <strong>Cₙ</strong> istnieje n operacji symetrii: jedna operacja tożsamościowa E oraz (n−1) obrotów o kąty 360°/n, 2·360°/n, …, (n−1)·360°/n.</p><p>Przykładem cząsteczki o symetrii C₁ jest bromochlorofluorometan (CHBrClF), natomiast cząsteczka SO₂BrCl należy do grupy Cₛ, a CIBrHC–CHBrCl wykazuje symetrię Cᵢ.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"grupy-cnv-i-ich-operacje\">Grupy Cₙᵥ i ich operacje</h3><p>Cząsteczki należące do grup <strong>Cₙᵥ</strong> mają oś n-krotną jako oś główną oraz n pionowych płaszczyzn symetrii, na których leży ta oś. Przykładem jest cząsteczka wody (H₂O), która należy do grupy <strong>C₂ᵥ</strong>. Oprócz operacji C₂ i E, grupa ta zawiera odbicia w dwóch pionowych płaszczyznach σᵥ i σᵥ'. Obrót C₂ połączony z odbiciem w jednej płaszczyźnie daje odbicie w drugiej płaszczyźnie, co można łatwo wykazać geometrycznie.</p><p>Grupa <strong>C₃ᵥ</strong> obejmuje operacje E, C₃, C₃² oraz odbicia w trzech pionowych płaszczyznach σᵥ, σᵥ' i σᵥ''. Typowym przykładem jest cząsteczka amoniaku (NH₃) o strukturze piramidy trygonalnej.</p><p>Dla grupy <strong>C₄ᵥ</strong> zestaw operacji to: E, C₄, C₂ (= C₄²), C₄³ oraz odbicia w czterech pionowych płaszczyznach tworzących między sobą kąty 45°. Przykładem cząsteczki o symetrii C₄ᵥ jest IF₅.</p><p>Ogólnie, grupa <strong>Cₙᵥ</strong> zawiera 2n operacji: operację tożsamościową E, (n−1) obrotów wokół osi głównej oraz n odbić w pionowych płaszczyznach symetrii przecinających się pod kątem 180°/n.</p><p>Grupy <strong>Cₙₕ</strong> oprócz wszystkich operacji charakterystycznych dla grup Cₙ obejmują dodatkowo odbicie w poziomej płaszczyźnie symetrii σₕ, prostopadłej do osi głównej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile operacji symetrii zawiera grupa punktowa C₃?",
      "answer": "Grupa C₃ zawiera trzy operacje: C₃, C₃² oraz E."
    },
    {
      "question": "Jakie elementy symetrii charakteryzują grupę C₂ᵥ?",
      "answer": "Grupa C₂ᵥ ma oś dwukrotną (C₂) oraz dwie pionowe płaszczyzny symetrii (σᵥ i σᵥ'), które przecinają się wzdłuż osi C₂."
    },
    {
      "question": "Do jakiej grupy punktowej należy cząsteczka amoniaku (NH₃)?",
      "answer": "Cząsteczka amoniaku należy do grupy C₃ᵥ, ponieważ ma oś trójkrotną i trzy pionowe płaszczyzny symetrii."
    }
  ]
};
