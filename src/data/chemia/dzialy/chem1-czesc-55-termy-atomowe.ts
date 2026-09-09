import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_55_termyAtomoweData: StructuredChapter = {
  "chapterTitle": "Termy atomowe",
  "toc": [
    {
      "title": "Definicja termów atomowych",
      "anchorId": "definicja-termow-atomowych"
    },
    {
      "title": "Termy atomów z zamkniętymi podpowłokami",
      "anchorId": "termy-atomow-zamkniete-podpowloki"
    },
    {
      "title": "Termy atomów z niesparowanymi elektronami",
      "anchorId": "termy-atomow-niesparowane-elektrony"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-termow-atomowych\">Definicja termów atomowych</h3><p>W atomie wieloelektronowym spinowe i orbitalne momenty pędu poszczególnych elektronów mogą się sumować na wiele sposobów, dając różne wypadkowe wartości. Każdemu takiemu sposobowi odpowiada określony stan energetyczny, który charakteryzują dwie liczby kwantowe: wypadkowa spinowa liczba kwantowa <strong>S</strong> oraz wypadkowa orbitalna liczba kwantowa <strong>L</strong>. Stany te nazywamy <strong>termami atomowymi</strong>.</p><p>Symbol termu atomowego zapisujemy w postaci <strong>(2S+1)L<sub>J</sub></strong>, gdzie <strong>J</strong> oznacza wypadkową liczbę kwantową całkowitego momentu pędu. W zależności od wartości <strong>L</strong> termy oznaczamy dużymi literami: dla L = 0, 1, 2, 3... mówimy odpowiednio o termach <strong>S</strong>, <strong>P</strong>, <strong>D</strong>, <strong>F</strong> itd. Górny indeks (2S+1) to <strong>multipletowość termu</strong>. Dla S = 0 multipletowość wynosi 1 i mamy do czynienia z <strong>termem singletowym</strong>, który odpowiada stanom bez niesparowanych elektronów. Dla S = 1/2 (jeden niesparowany elektron) multipletowość wynosi 2 – to <strong>term dubletowy</strong>. Dla S = 1 (dwa niesparowane elektrony) multipletowość wynosi 3 – to <strong>term trypletowy</strong>. W miarę wzrostu S mówimy dalej o termach kwartetowych, kwintetowych, sekstetowych itd.</p><p>Przy danych wartościach S i L liczba kwantowa J może przyjmować wartości od L+S do L−S. Na przykład dla termu <sup>3</sup>D (S = 1, L = 2) możliwe są J = 3, 2, 1, co zapisujemy jako <sup>3</sup>D<sub>3</sub>, <sup>3</sup>D<sub>2</sub>, <sup>3</sup>D<sub>1</sub> lub w skrócie <sup>3</sup>D<sub>3,2,1</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"termy-atomow-zamkniete-podpowloki\">Termy atomów z zamkniętymi podpowłokami</h3><p>Rozważmy najprostszy przypadek atomu helu, który w stanie podstawowym ma konfigurację 1s<sup>2</sup>. Oba elektrony znajdują się na orbitalu 1s, więc ich orbitalne liczby kwantowe l = 0, a wypadkowa orbitalna liczba kwantowa L = 0. Spinowe liczby kwantowe obu elektronów wynoszą s = 1/2. Gdy spiny są skierowane przeciwnie, wartości magnetycznych spinowych liczb kwantowych m<sub>s</sub> wynoszą +1/2 i −1/2, a wypadkowa spinowa liczba kwantowa S = 0. Gdyby spiny były równoległe, S = 1, ale wtedy oba elektrony miałyby jednakowe wszystkie liczby kwantowe, co naruszałoby zakaz Pauliego. Zatem dla helu S = 0, a multipletowość (2S+1) = 1, czyli jest to term singletowy. Ponieważ L = 0, a J = L+S = 0, term helu zapisujemy jako <sup>1</sup>S<sub>0</sub>.</p><p>Term <sup>1</sup>S<sub>0</sub> jest charakterystyczny dla wszystkich atomów o zamkniętych podpowłokach elektronowych, czyli o konfiguracjach s<sup>2</sup>, p<sup>6</sup>, d<sup>10</sup>, f<sup>14</sup>. Należą do nich m.in. berylowce (ns<sup>2</sup>), helowce (ns<sup>2</sup>p<sup>6</sup>), cynkowce [nd<sup>10</sup>(n+1)s<sup>2</sup>], a także iterb (Yb) o konfiguracji [Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup> i nobel (No) o konfiguracji [Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>. Elektrony w zamkniętych podpowłokach nie wnoszą wkładu do wypadkowego momentu pędu atomu, dlatego przy wyznaczaniu termów można je pominąć i skupić się wyłącznie na elektronach z podpowłok niecałkowicie wypełnionych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"termy-atomow-niesparowane-elektrony\">Termy atomów z niesparowanymi elektronami</h3><p>Przejdźmy do atomu litu (Li), który w stanie podstawowym ma konfigurację 1s<sup>2</sup>2s<sup>1</sup>. Ponieważ podpowłoka 1s jest zamknięta, wystarczy rozważyć pojedynczy elektron 2s. Dla niego S = s = 1/2, więc multipletowość wynosi 2 – to term dubletowy. Orbitalna liczba kwantowa l = 0, zatem L = 0, co odpowiada termowi S. Liczba kwantowa J = L+S = 1/2 (gdyż S > L). Ostatecznie term atomu litu zapisujemy jako <sup>2</sup>S<sub>1/2</sub>.</p><p>Atom boru (B) ma konfigurację 1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>. Znów mamy jeden niesparowany elektron (na podpowłoce 2p), więc S = 1/2 i term jest dubletowy. Tym razem l = 1, więc L = 1, co odpowiada termowi P. Liczba kwantowa J może przyjmować wartości L+S = 3/2 oraz L−S = 1/2. Atomowi boru odpowiadają zatem dwa termy: <sup>2</sup>P<sub>3/2</sub> i <sup>2</sup>P<sub>1/2</sub>.</p><p>Bardziej złożony jest przypadek atomu węgla (C), który w stanie podstawowym ma konfigurację 1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>. Aby uprościć analizę, rozważmy najpierw stan wzbudzony, w którym jeden elektron 2p został przeniesiony na orbital 3p (konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>3p<sup>1</sup>). W takim przypadku mamy dwa elektrony p, każdy o orbitalnej liczbie kwantowej l = 1. Wypadkowa orbitalna liczba kwantowa L może przyjmować wartości 0, 1 lub 2, co daje termy S, P i D. Spinowa liczba kwantowa S może wynosić 0 (dla spinów sparowanych) lub 1 (dla spinów niesparowanych).</p><p>Dla S = 0 (termy singletowe) liczba J = L, więc otrzymujemy termy <sup>1</sup>S<sub>0</sub>, <sup>1</sup>P<sub>1</sub> i <sup>1</sup>D<sub>2</sub>. Dla S = 1 (termy trypletowe) możliwe są termy <sup>3</sup>S, <sup>3</sup>P i <sup>3</sup>D. Dla termu <sup>3</sup>S (L = 0, S = 1) J może przyjąć tylko wartość 1, więc zapisujemy <sup>3</sup>S<sub>1</sub>. Dla termu <sup>3</sup>P (L = 1, S = 1) J przyjmuje wartości 2, 1, 0, co daje termy <sup>3</sup>P<sub>2</sub>, <sup>3</sup>P<sub>1</sub>, <sup>3</sup>P<sub>0</sub>. Dla termu <sup>3</sup>D (L = 2, S = 1) J = 3, 2, 1, czyli termy <sup>3</sup>D<sub>3</sub>, <sup>3</sup>D<sub>2</sub>, <sup>3</sup>D<sub>1</sub>. W stanie podstawowym atomu węgla obowiązuje reguła Hunda, która wskazuje, że najniższą energię ma term o najwyższej multipletowości, a wśród nich o najwyższej wartości L. Dla konfiguracji 2p<sup>2</sup> najniżej leży term <sup>3</sup>P<sub>0</sub>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co oznacza multipletowość termu i jakie wartości przyjmuje dla termu singletowego, dubletowego i trypletowego?",
      "answer": "Multipletowość termu to wartość (2S+1), gdzie S jest wypadkową spinową liczbą kwantową. Dla termu singletowego S=0, więc multipletowość wynosi 1. Dla dubletowego S=1/2, multipletowość wynosi 2. Dla trypletowego S=1, multipletowość wynosi 3."
    },
    {
      "question": "Dlaczego atom helu w stanie podstawowym ma term singletowy ¹S₀?",
      "answer": "Atom helu ma konfigurację 1s². Oba elektrony mają przeciwne spiny, więc S=0, a L=0, gdyż oba są na orbitalu s. Zatem J=0, a multipletowość (2S+1)=1, co daje term ¹S₀."
    },
    {
      "question": "Jakie termy może tworzyć atom węgla w stanie wzbudzonym o konfiguracji 1s²2s²2p¹3p¹?",
      "answer": "Dla dwóch elektronów p (l₁=l₂=1) możliwe są L=0,1,2, czyli termy S, P, D. Spinowa liczba kwantowa S może być 0 (spiny sparowane) lub 1 (spiny niesparowane). Dla S=0 powstają termy singletowe: ¹S₀, ¹P₁, ¹D₂. Dla S=1 powstają termy trypletowe: ³S₁, ³P₂,₁,₀, ³D₃,₂,₁."
    }
  ]
};
