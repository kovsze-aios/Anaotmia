import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_101_hybrydyzacjaOrbitaliASymetriaCzasteczekData: StructuredChapter = {
  "chapterTitle": "Hybrydyzacja orbitali a symetria cząsteczek",
  "toc": [
    {
      "title": "Reprezentacja wektorów wiązań w BF₃",
      "anchorId": "reprezentacja-wektorow-wiazan-w-bf3"
    },
    {
      "title": "Rozkład na reprezentacje nieprzywiedlne",
      "anchorId": "rozklad-na-reprezentacje-nieprzywiedlne"
    },
    {
      "title": "Dobór orbitali atomowych do hybrydyzacji",
      "anchorId": "dobor-orbitali-atomowych-do-hybrydyzacji"
    },
    {
      "title": "Postać orbitali zhybrydyzowanych sp²",
      "anchorId": "postac-orbitali-zhybrydyzowanych-sp2"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"reprezentacja-wektorow-wiazan-w-bf3\">Reprezentacja wektorów wiązań w BF₃</h3><p>Rozważmy cząsteczkę trifluorku boru (BF₃), która w stanie podstawowym ma geometrię płaskiego trójkąta. Aby opisać jej wiązania, wygodnie jest posłużyć się trzema wektorami skierowanymi od centralnego atomu boru do każdego z atomów fluoru. Wektory te leżą w jednej płaszczyźnie i są rozmieszczone symetrycznie co 120°.</p><p>Działanie operacji symetrii z grupy punktowej D<sub>3h</sub> na te wektory można prześledzić, przypisując każdej operacji odpowiedni charakter, czyli ślad macierzy transformacji. Dla operacji tożsamościowej <em>E</em> wszystkie trzy wektory pozostają na swoich miejscach, więc charakter wynosi 3. Podobnie odbicie w płaszczyźnie poziomej σ<sub>h</sub> (prostopadłej do osi głównej, zawierającej wektory) nie zmienia położenia żadnego wektora, dając charakter równy 3.</p><p>Natomiast obrót wokół osi dwukrotnej (C<sub>2</sub>) lub oś przemienna (S<sub>3</sub>) przemieszcza wszystkie wektory, więc charakter dla tych operacji wynosi 0. Odbicie w pionowej płaszczyźnie symetrii σ<sub>v</sub> (np. płaszczyzna xz, która zawiera jeden z wektorów) pozostawia jeden wektor w miejscu, a dwa pozostałe zamienia miejscami, co daje charakter równy 1.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rozklad-na-reprezentacje-nieprzywiedlne\">Rozkład na reprezentacje nieprzywiedlne</h3><p>Zestawienie charakterów dla wszystkich klas operacji grupy D<sub>3h</sub> tworzy reprezentację, którą możemy oznaczyć symbolem Γ<sub>BF₃</sub>. Pełny zestaw charakterów tej reprezentacji jest następujący: dla <em>E</em> = 3, dla 2C<sub>3</sub> = 0, dla 3C<sub>2</sub> = 1, dla σ<sub>h</sub> = 3, dla 2S<sub>3</sub> = 0, a dla 3σ<sub>v</sub> = 1.</p><p>Porównując te wartości z charakterami reprezentacji nieprzywiedlnych grupy D<sub>3h</sub>, stwierdzamy, że Γ<sub>BF₃</sub> jest reprezentacją przywiedlną. Można ją rozłożyć na dwie reprezentacje nieprzywiedlne: A<sub>1</sub>' oraz E'. Suma charakterów tych dwóch reprezentacji dokładnie odtwarza charaktery Γ<sub>BF₃</sub>. Zapisujemy to jako:</p><p>Γ<sub>BF₃</sub> = A<sub>1</sub>' + E'</p><p>Ten rozkład oznacza, że trzy orbitale atomowe boru, które mają utworzyć trzy orbitale zhybrydyzowane, muszą być tak dobrane, aby wśród nich znalazł się jeden orbital o symetrii A<sub>1</sub>' oraz dwa orbitale o symetrii E'.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"dobor-orbitali-atomowych-do-hybrydyzacji\">Dobór orbitali atomowych do hybrydyzacji</h3><p>Z tablicy charakterów grupy D<sub>3h</sub> odczytujemy, że według reprezentacji E' transformują się pary orbitali: (p<sub>x</sub>, p<sub>y</sub>) oraz (d<sub>x²-y²</sub>, d<sub>xy</sub>). Natomiast według reprezentacji jednostkowej A<sub>1</sub>' transformują się orbital s oraz orbital d<sub>z²</sub>.</p><p>Zestawiając te informacje, możliwe są następujące kombinacje orbitali atomowych, które dadzą trzy orbitale zhybrydyzowane o odpowiedniej symetrii:</p><ul><li>s, p<sub>x</sub>, p<sub>y</sub> – hybrydyzacja typu <em>sp²</em>,</li><li>s, d<sub>x²-y²</sub>, d<sub>xy</sub> – hybrydyzacja typu <em>sd²</em>,</li><li>d<sub>z²</sub>, p<sub>x</sub>, p<sub>y</sub> – hybrydyzacja typu <em>dp²</em>,</li><li>d<sub>z²</sub>, d<sub>x²-y²</sub>, d<sub>xy</sub> – hybrydyzacja typu <em>d³</em>.</li></ul><p>W przypadku atomu boru w stanie podstawowym konfiguracja elektronowa to 1s² 2s² 2p¹. Wykorzystanie orbitali d w hybrydyzacji wymagałoby wzbudzenia elektronu na wyższą powłokę, co wiązałoby się z dostarczeniem znacznej energii. Utworzone w ten sposób wiązania byłyby nietrwałe. Dlatego też orbitale zhybrydyzowane boru tworzy się wyłącznie z orbitali 2s oraz dwóch orbitali 2p, np. 2p<sub>x</sub> i 2p<sub>y</sub>, co odpowiada hybrydyzacji typu <em>sp²</em>.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"postac-orbitali-zhybrydyzowanych-sp2\">Postać orbitali zhybrydyzowanych sp²</h3><p>Po znormalizowaniu orbitali zhybrydyzowanych, czyli takim dobraniu współczynników przy funkcjach 2s, 2p<sub>x</sub> i 2p<sub>y</sub>, aby całka z kwadratu modułu funkcji falowej po całej przestrzeni była równa 1, otrzymujemy następujące wyrażenia na trzy orbitale zhybrydyzowane:</p><p>ψ<sub>1</sub> = (1/√3) s + (√2/√3) p<sub>x</sub></p><p>ψ<sub>2</sub> = (1/√3) s – (1/√6) p<sub>x</sub> + (1/√2) p<sub>y</sub></p><p>ψ<sub>3</sub> = (1/√3) s – (1/√6) p<sub>x</sub> – (1/√2) p<sub>y</sub></p><p>gdzie s, p<sub>x</sub> i p<sub>y</sub> oznaczają odpowiednio orbitale 2s, 2p<sub>x</sub> i 2p<sub>y</sub> atomu boru.</p><p>Wykres części kątowej orbitalu zhybrydyzowanego pokazuje, że składa się on z dwóch części rozmieszczonych po przeciwnych stronach jądra, którym odpowiadają wartości funkcji o przeciwnych znakach. Część dodatnia sięga dalej niż część ujemna, co jest wynikiem tego, że w obszarach, gdzie dodatnie części orbitali p pokrywają się z orbitalem s (zawsze dodatnim), prawdopodobieństwo napotkania elektronu silnie wzrasta w porównaniu z czystym orbitalem atomowym.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest symetria orbitali atomowych boru biorących udział w hybrydyzacji sp² w cząsteczce BF₃?",
      "answer": "Orbital 2s ma symetrię A₁', a orbitale 2pₓ i 2p_y transformują się według reprezentacji E'."
    },
    {
      "question": "Dlaczego w hybrydyzacji boru nie biorą udziału orbitale d?",
      "answer": "Ponieważ wymagałoby to wzbudzenia elektronu na wyższą powłokę, co wiąże się z dostarczeniem znacznej energii, a powstałe wiązania byłyby nietrwałe."
    }
  ]
};
