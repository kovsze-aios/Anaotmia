import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_158_cieploReakcjiChemicznejEntalpiaIPrawoHessaData: StructuredChapter = {
  "chapterTitle": "Ciepło reakcji chemicznej, entalpia i prawo Hessa",
  "toc": [
    {
      "title": "Pomiar ciepła reakcji w bombie kalorymetrycznej",
      "anchorId": "pomiar-ciepla-reakcji"
    },
    {
      "title": "Entalpia jako funkcja stanu",
      "anchorId": "entalpia-funkcja-stanu"
    },
    {
      "title": "Związek między ciepłem reakcji a zmianą entalpii",
      "anchorId": "zwiazek-ciepla-z-entalpia"
    },
    {
      "title": "Prawo Hessa",
      "anchorId": "prawo-hessa"
    },
    {
      "title": "Równania termochemiczne",
      "anchorId": "rownania-termochemiczne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"pomiar-ciepla-reakcji\">Pomiar ciepła reakcji w bombie kalorymetrycznej</h3><p>Ciepło wydzielane podczas reakcji chemicznych, na przykład spalania, często wyznacza się eksperymentalnie w bombie kalorymetrycznej. Jest to metalowe, zamknięte naczynie o stałej objętości, umieszczone wewnątrz kalorymetru. Przyrząd ten umożliwia precyzyjny pomiar ilości ciepła, która wydziela się od momentu zainicjowania reakcji aż do chwili, gdy temperatura bomby powróci do wartości początkowej.</p><p>Ciepło zmierzone w tych warunkach oznacza się symbolem <strong>q<sub>v</sub></strong>, co podkreśla, że proces zachodzi przy stałej objętości (izochorycznie). Zgodnie z pierwszą zasadą termodynamiki, dla przemiany izochorycznej zmiana energii wewnętrznej układu <strong>ΔU</strong> jest równa ciepłu wymienionemu z otoczeniem, ponieważ praca objętościowa jest zerowa (ΔV = 0). Zależność tę zapisujemy jako:</p><p>ΔU = q<sub>v</sub></p><p>Wartość q<sub>v</sub> może być ujemna (reakcja egzotermiczna, wydzielanie ciepła) lub dodatnia (reakcja endotermiczna, pochłanianie ciepła).</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"entalpia-funkcja-stanu\">Entalpia jako funkcja stanu</h3><p>W praktyce laboratoryjnej i w życiu codziennym znacznie częściej spotykamy się z reakcjami prowadzonymi przy stałym ciśnieniu (izobarycznie), najczęściej pod ciśnieniem atmosferycznym. Ciepło wymieniane w takich warunkach oznacza się symbolem <strong>q<sub>p</sub></strong>. Aby wygodnie interpretować wyniki pomiarów izobarycznych, wprowadzono nową funkcję termodynamiczną – <strong>entalpię</strong> (H). Podobnie jak energia wewnętrzna, entalpia jest funkcją stanu, co oznacza, że jej wartość zależy wyłącznie od aktualnego stanu układu, a nie od drogi, na której ten stan osiągnięto.</p><p>Entalpię definiuje się jako sumę energii wewnętrznej i iloczynu ciśnienia oraz objętości:</p><p>H = U + pV</p><p>Dla przemiany między stanem początkowym (1) a końcowym (2) zmiana entalpii wyraża się wzorem:</p><p>ΔH = H<sub>2</sub> − H<sub>1</sub> = (U<sub>2</sub> + p<sub>2</sub>V<sub>2</sub>) − (U<sub>1</sub> + p<sub>1</sub>V<sub>1</sub>)</p><p>Ponieważ energia wewnętrzna, ciśnienie i objętość są funkcjami stanu, również ΔH zależy tylko od stanu początkowego i końcowego, a nie od drogi przemiany.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zwiazek-ciepla-z-entalpia\">Związek między ciepłem reakcji a zmianą entalpii</h3><p>Gdy proces zachodzi pod stałym ciśnieniem (p<sub>1</sub> = p<sub>2</sub> = p), równanie na zmianę entalpii upraszcza się do postaci:</p><p>ΔH = ΔU + pΔV</p><p>Porównajmy teraz ciepła q<sub>v</sub> i q<sub>p</sub>. Jeśli reakcja endotermiczna przebiega izochorycznie, dostarczone ciepło jest w całości zużywane na zwiększenie energii wewnętrznej. W przypadku reakcji izobarycznej, gdy następuje zmiana objętości, układ wykonuje dodatkową pracę objętościową równą −pΔV. Przy tym samym stopniu przereagowania (a więc tej samej zmianie ΔU) całkowite ciepło pobrane z otoczenia w procesie izobarycznym wynosi:</p><p>q<sub>p</sub> = ΔU + pΔV = q<sub>v</sub> + pΔV</p><p>Zatem q<sub>p</sub> jest większe od q<sub>v</sub>, gdy reakcji towarzyszy wzrost objętości. Jeśli natomiast objętość maleje (pΔV &lt; 0), ciepło pobrane w procesie izobarycznym jest mniejsze niż w izochorycznym. Analogiczne rozumowanie prowadzi do wniosku, że wzór ten obowiązuje również dla reakcji egzotermicznych, zarówno ze zwiększeniem, jak i ze zmniejszeniem objętości.</p><p>Łącząc powyższe zależności, otrzymujemy fundamentalny wynik:</p><p><strong>ΔH = q<sub>p</sub></strong></p><p>Oznacza to, że ciepło reakcji zmierzone w warunkach izotermiczno-izobarycznych jest równe zmianie entalpii układu.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"prawo-hessa\">Prawo Hessa</h3><p>Z faktów, że q<sub>v</sub> = ΔU oraz q<sub>p</sub> = ΔH, wynika niezwykle istotna konsekwencja. Skoro ΔU i ΔH są funkcjami stanu, to również ciepła reakcji mierzone w warunkach izochorycznych i izobarycznych zależą wyłącznie od stanu początkowego i końcowego układu, a nie od drogi, na jaką reakcja została przeprowadzona. Twierdzenie to, sformułowane empirycznie w 1840 roku przez Germaina Hessa, stanowi podstawowe prawo termochemii i jest znane jako <strong>prawo Hessa</strong>.</p><p>Prawo Hessa umożliwia obliczanie efektów cieplnych reakcji, które są trudne lub niemożliwe do zmierzenia bezpośrednio, poprzez sumowanie efektów cieplnych reakcji pośrednich. Jest ono szeroko wykorzystywane w termodynamice chemicznej i stanowi fundament dla dalszych rozważań nad entalpią standardową i równaniami termochemicznymi.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"rownania-termochemiczne\">Równania termochemiczne</h3><p>Wyniki pomiarów i obliczeń termochemicznych przedstawia się często w postaci <strong>równań termochemicznych</strong>. Są to równania reakcji chemicznych, w których przy każdym symbolu substancji podaje się jej stan skupienia: (g) – gaz, (c) – ciecz, (s) – ciało stałe, lub odmianę krystalograficzną, na przykład C<sub>grafit</sub> czy C<sub>diament</sub>. Dodatkowo, po prawej stronie równania umieszcza się wartość ciepła reakcji zachodzącej pod stałym ciśnieniem, czyli <strong>entalpię reakcji</strong> ΔH.</p><p>Jeżeli reakcja jest prowadzona w warunkach standardowych, to znaczy w temperaturze 298 K (25°C) i przy ciśnieniu 1,01325·10<sup>5</sup> Pa (1 atm), a substraty i produkty znajdują się w swoich standardowych stanach skupienia, wówczas mówimy o <strong>standardowej entalpii reakcji</strong> i oznaczamy ją symbolem ΔH°.</p><p>Równania termochemiczne dostarczają zatem kompleksowej informacji o stechiometrii reakcji oraz o towarzyszącym jej efekcie cieplnym, co jest niezbędne do obliczeń termodynamicznych i projektowania procesów chemicznych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co oznacza symbol qv w termochemii?",
      "answer": "qv oznacza ciepło reakcji zmierzone w warunkach izochorycznych, czyli przy stałej objętości. Jest ono równe zmianie energii wewnętrznej układu (ΔU)."
    },
    {
      "question": "Jak definiuje się entalpię?",
      "answer": "Entalpia H jest funkcją stanu zdefiniowaną jako suma energii wewnętrznej U i iloczynu ciśnienia p oraz objętości V: H = U + pV."
    },
    {
      "question": "Jaka jest zależność między ciepłem reakcji izobarycznej a zmianą entalpii?",
      "answer": "Ciepło reakcji zmierzone w warunkach izobarycznych (qp) jest równe zmianie entalpii układu: ΔH = qp."
    },
    {
      "question": "Sformułuj prawo Hessa.",
      "answer": "Prawo Hessa mówi, że ciepło reakcji chemicznej (przy stałym ciśnieniu lub stałej objętości) zależy tylko od stanu początkowego i końcowego układu, a nie od drogi, na jakiej reakcja została przeprowadzona."
    },
    {
      "question": "Co to jest standardowa entalpia reakcji?",
      "answer": "Standardowa entalpia reakcji to zmiana entalpii towarzysząca reakcji, w której substraty i produkty znajdują się w swoich standardowych stanach skupienia, pod ciśnieniem 1 atm (1,01325·10⁵ Pa) i w temperaturze 298 K (25°C). Oznacza się ją symbolem ΔH°."
    }
  ]
};
