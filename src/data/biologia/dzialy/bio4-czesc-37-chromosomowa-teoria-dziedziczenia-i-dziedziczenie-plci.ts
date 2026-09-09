import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_37_chromosomowaTeoriaDziedziczeniaIDziedziczeniePlciData: StructuredChapter = {
  "chapterTitle": "Chromosomowa teoria dziedziczenia i dziedziczenie płci",
  "toc": [
    {
      "title": "Obliczanie odległości mapowej na podstawie krzyżówki testowej",
      "anchorId": "obliczanie-odleglosci-mapowej"
    },
    {
      "title": "Określanie proporcji fenotypów w krzyżówce testowej",
      "anchorId": "okreslanie-proporcji-fenotypow"
    },
    {
      "title": "Determinacja płci i cechy sprzężone z płcią",
      "anchorId": "determinacja-plci"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"obliczanie-odleglosci-mapowej\">Obliczanie odległości mapowej na podstawie krzyżówki testowej</h3><p>Rozważmy przykład pomidora, u którego wysokość pędu oraz powierzchnia owoców są warunkowane przez geny <strong>A</strong> i <strong>B</strong>, sprzężone na jednym chromosomie. Allel dominujący <strong>A</strong> odpowiada za wysoki wzrost, a recesywny <strong>a</strong> za karłowatość. Allel dominujący <strong>B</strong> warunkuje gładkie owoce, natomiast recesywny <strong>b</strong> – omszone.</p><p>Skrzyżowano rośliny wysokie o gładkich owocach z roślinami karłowatymi o owocach omszonych. W pokoleniu F1 wszystkie osobniki były wysokie i miały gładkie owoce, co wskazuje, że rodzicielskie rośliny były homozygotami dominującymi pod względem obu cech. Następnie wykonano krzyżówkę testową, w której potomstwo F1 skrzyżowano z podwójną homozygotą recesywną. Uzyskano następujące liczby osobników:</p><ul><li>95 roślin o wysokich pędach i gładkich owocach,</li><li>98 roślin o karłowatych pędach i omszonych owocach,</li><li>12 roślin o wysokich pędach i omszonych owocach,</li><li>14 roślin o karłowatych pędach i gładkich owocach.</li></ul><p>Aby obliczyć odległość mapową między genami <strong>A</strong> i <strong>B</strong>, należy najpierw zsumować wszystkich potomków: 95 + 98 + 12 + 14 = 219. Następnie identyfikujemy rekombinanty, czyli osobniki o cechach mieszanych: wysokie z omszonymi owocami (12) oraz karłowate z gładkimi owocami (14). Ich łączna liczba wynosi 26. Procent rekombinantów obliczamy z proporcji: (26 / 219) × 100% ≈ 11,87%, co po zaokrągleniu daje około 12%. Ponieważ 1% częstości crossing-over odpowiada jednej jednostce mapowej (j.m.), odległość między genami <strong>A</strong> i <strong>B</strong> wynosi około 12 j.m. (12 cM).</p><p>W podobny sposób można ustalić kolejność genów na chromosomie, korzystając z danych o częstości crossing-over między trzema genami. Jeśli odległość między genami <strong>A</strong> i <strong>C</strong> wynosi 15 j.m., między <strong>A</strong> i <strong>B</strong> – 20 j.m., a między <strong>B</strong> i <strong>C</strong> – 5 j.m., to geny <strong>A</strong> i <strong>B</strong> są najbardziej oddalone. Gen <strong>C</strong> leży między nimi, w odległości 15 j.m. od genu <strong>A</strong> i 5 j.m. od genu <strong>B</strong>. Zatem kolejność na chromosomie to: <strong>A</strong> – <strong>C</strong> – <strong>B</strong>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"okreslanie-proporcji-fenotypow\">Określanie proporcji fenotypów w krzyżówce testowej</h3><p>Rozważmy przykład grochu cukrowego, u którego geny determinujące barwę kwiatów i kształt ziaren pyłku są sprzężone na tym samym chromosomie w odległości 11,2 j.m. Allel dominujący <strong>F</strong> warunkuje fioletową barwę kwiatów, a recesywny <strong>f</strong> – czerwoną. Podłużny kształt pyłku jest cechą dominującą (<strong>P</strong>), a okrągły – recesywną (<strong>p</strong>). Skrzyżowano rośliny o fioletowych kwiatach i podłużnych ziarnach pyłku z roślinami o czerwonych kwiatach i okrągłych ziarnach pyłku. W pokoleniu potomnym otrzymano cztery klasy fenotypowe, co sugeruje, że pierwsza roślina była heterozygotą pod względem obu genów (układ <em>cis</em>: <strong>FP</strong>/<strong>fp</strong>), a druga – podwójną homozygotą recesywną (<strong>fp</strong>/<strong>fp</strong>).</p><p>Roślina heterozygotyczna wytwarza cztery rodzaje gamet: <strong>FP</strong>, <strong>fp</strong>, <strong>Fp</strong> i <strong>fP</strong>. Gamety <strong>FP</strong> i <strong>fp</strong> są rodzicielskie, natomiast <strong>Fp</strong> i <strong>fP</strong> to rekombinanty. Roślina podwójnie recesywna produkuje tylko jeden typ gamet: <strong>fp</strong>. Po połączeniu gamet otrzymujemy następujące genotypy i fenotypy potomstwa:</p><ul><li><strong>FP/fp</strong> – fioletowe kwiaty, podłużne ziarna pyłku (fenotyp rodzicielski),</li><li><strong>fp/fp</strong> – czerwone kwiaty, okrągłe ziarna pyłku (fenotyp rodzicielski),</li><li><strong>Fp/fp</strong> – fioletowe kwiaty, okrągłe ziarna pyłku (fenotyp rekombinowany),</li><li><strong>fP/fp</strong> – czerwone kwiaty, podłużne ziarna pyłku (fenotyp rekombinowany).</li></ul><p>Ponieważ odległość między genami wynosi 11,2 j.m., częstość rekombinacji wynosi 11,2%. Oznacza to, że łącznie rekombinanty stanowią 11,2% potomstwa, a każda z dwóch klas rekombinowanych występuje z częstością 5,6%. Fenotypy rodzicielskie łącznie stanowią 88,8%, czyli po 44,4% każdy. Zatem proporcje fenotypowe w pokoleniu potomnym to: 44,4% roślin o fioletowych kwiatach i podłużnych pyłkach, 44,4% o czerwonych kwiatach i okrągłych pyłkach, 5,6% o fioletowych kwiatach i okrągłych pyłkach oraz 5,6% o czerwonych kwiatach i podłużnych pyłkach.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"determinacja-plci\">Determinacja płci i cechy sprzężone z płcią</h3><p>U wielu organizmów, w tym u człowieka, płeć jest determinowana genetycznie przez chromosomy płci. Kompletny zestaw chromosomów w diploidalnej komórce somatycznej człowieka, czyli kariotyp, składa się z 23 par chromosomów: 22 par autosomów oraz jednej pary chromosomów płci. Kobiety mają dwa chromosomy X (kariotyp 46, XX), natomiast mężczyźni mają jeden chromosom X i jeden chromosom Y (kariotyp 46, XY). Autosomy są identyczne u obu płci, natomiast chromosomy płci zawierają geny warunkujące cechy sprzężone z płcią.</p><p>Mechanizm dziedziczenia płci opiera się na rodzaju gamet, jakie wytwarzają rodzice. Komórki jajowe kobiety zawsze zawierają chromosom X, ponieważ kobieta jest homogametyczna (XX). Mężczyzna jest heterogametyczny (XY) i produkuje dwa rodzaje plemników: połowę z chromosomem X, a połowę z chromosomem Y. Płeć potomstwa zależy od tego, który plemnik zapłodni komórkę jajową: jeśli plemnik z chromosomem X – powstanie dziewczynka (XX), jeśli z chromosomem Y – chłopiec (XY). Prawdopodobieństwo urodzenia chłopca i dziewczynki jest równe i wynosi 50%.</p><p>Geny zlokalizowane na chromosomach płci, szczególnie na chromosomie X, są odpowiedzialne za dziedziczenie cech sprzężonych z płcią. Przykładem są choroby takie jak hemofilia czy daltonizm, które częściej występują u mężczyzn, ponieważ mają oni tylko jeden chromosom X, a allel recesywny nie ma swojego odpowiednika na chromosomie Y.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak obliczyć odległość mapową między genami na podstawie wyników krzyżówki testowej?",
      "answer": "Odległość mapową oblicza się jako procent rekombinantów w potomstwie. Sumuje się liczbę osobników rekombinowanych, dzieli przez całkowitą liczbę potomstwa i mnoży przez 100%. Otrzymany procent odpowiada liczbie jednostek mapowych (j.m.) lub centymorganów (cM)."
    },
    {
      "question": "Jakie są proporcje fenotypów w krzyżówce testowej, gdy geny są sprzężone w odległości 11,2 j.m.?",
      "answer": "Fenotypy rodzicielskie występują z częstością 44,4% każdy, a fenotypy rekombinowane z częstością 5,6% każdy, co daje łącznie 88,8% i 11,2%."
    },
    {
      "question": "Dlaczego prawdopodobieństwo urodzenia chłopca i dziewczynki jest równe?",
      "answer": "Ponieważ mężczyzna wytwarza gamety z chromosomem X i Y w równych proporcjach, a kobieta tylko z chromosomem X. Zapłodnienie komórki jajowej plemnikiem X daje dziewczynkę (XX), a plemnikiem Y daje chłopca (XY), więc szanse są 50% na 50%."
    }
  ]
};
