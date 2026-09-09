import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_52_orbitalneISpinoweMomentyMagnetyczneElektronuData: StructuredChapter = {
  "chapterTitle": "Orbitalne i spinowe momenty magnetyczne elektronu",
  "toc": [
    {
      "title": "Moment magnetyczny – podstawowe pojęcia",
      "anchorId": "moment-magnetyczny-podstawowe-pojecia"
    },
    {
      "title": "Orbitalny moment magnetyczny elektronu",
      "anchorId": "orbitalny-moment-magnetyczny-elektronu"
    },
    {
      "title": "Spinowy moment magnetyczny elektronu",
      "anchorId": "spinowy-moment-magnetyczny-elektronu"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"moment-magnetyczny-podstawowe-pojecia\">Moment magnetyczny – podstawowe pojęcia</h3><p>W jednorodnym polu magnetycznym, czyli takim, w którym indukcja <strong>B</strong> ma w każdym punkcie tę samą wartość i kierunek, na magnes sztabkowy działają dwie siły: <strong>F<sub>N</sub></strong> i <strong>F<sub>S</sub></strong>. Siły te mają równe wartości, lecz przeciwne zwroty – jedna dąży do przesunięcia bieguna północnego zgodnie z kierunkiem linii pola, a druga bieguna południowego w kierunku przeciwnym. Wartość tych sił zależy od indukcji pola magnetycznego oraz od wielkości charakteryzującej magnes, zwanej <strong>momentem magnetycznym</strong> i oznaczanej symbolem <strong>M</strong>.</p><p>Moment magnetyczny można zdefiniować wzorem: <strong>M = F<sub>l</sub> / (μ<sub>0</sub>B)</strong>, gdzie <strong>F<sub>l</sub></strong> to siła działająca na biegun magnesu w polu o indukcji <strong>B = 1 T</strong>, a <strong>μ<sub>0</sub></strong> to przenikalność magnetyczna próżni, wynosząca <strong>4π·10<sup>-7</sup> N·A<sup>-2</sup></strong>.</p><p>Analogiczne siły działają na cewkę (solenoid), przez którą płynie prąd elektryczny – również wykazuje ona moment magnetyczny. Moment ten można obliczyć, znając natężenie prądu, liczbę zwojów oraz powierzchnię obejmowaną przez jeden zwój.</p><p>Momenty magnetyczne występują także w świecie atomów i cząstek elementarnych. Szczególnie interesujące są momenty magnetyczne związane z momentem pędu elektronu. Okazuje się, że moment magnetyczny pojawia się zawsze, gdy elektron porusza się w taki sposób, że można mu przypisać określony moment pędu.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"orbitalny-moment-magnetyczny-elektronu\">Orbitalny moment magnetyczny elektronu</h3><p>Elektron wykazujący orbitalny moment pędu <strong>M</strong> = (h/2π)√(l(l+1)) wytwarza orbitalny moment magnetyczny <strong>M<sub>l</sub></strong>, który można opisać wzorem: <strong>M<sub>l</sub> = (e/(2m<sub>e</sub>)) · M = (e·h/(4πm<sub>e</sub>))√(l(l+1))</strong>. We wzorze tym <strong>m<sub>e</sub></strong> oznacza masę elektronu, <strong>e</strong> – jego ładunek, <strong>h</strong> – stałą Plancka, a <strong>l</strong> – poboczną liczbę kwantową.</p><p>Stały współczynnik występujący w tym równaniu nosi nazwę <strong>magnetonu Bohra</strong> i jest oznaczany symbolem <strong>μ<sub>B</sub></strong>. Jego wartość liczbowa wynosi <strong>9,274078·10<sup>-24</sup> A·m²</strong>.</p><p>Dla orbitalu s (l = 0) moment pędu elektronu <strong>M</strong> = 0, a zatem orbitalny moment magnetyczny również jest równy zeru. Orbitalny moment magnetyczny pojawia się natomiast dla orbitali p, d, f itd. W szczególności:</p><ul><li>dla orbitalu s: <strong>M</strong> = 0, <strong>M<sub>l</sub></strong> = 0,</li><li>dla orbitalu p: <strong>M</strong> = (h/2π)√2, <strong>M<sub>l</sub></strong> = √2 μ<sub>B</sub>,</li><li>dla orbitalu d: <strong>M</strong> = (h/2π)√6, <strong>M<sub>l</sub></strong> = √6 μ<sub>B</sub>,</li><li>dla orbitalu f: <strong>M</strong> = (h/2π)√12, <strong>M<sub>l</sub></strong> = √12 μ<sub>B</sub>.</li></ul>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"spinowy-moment-magnetyczny-elektronu\">Spinowy moment magnetyczny elektronu</h3><p>Elektron, oprócz orbitalnego momentu pędu <strong>M</strong>, wykazuje również spinowy moment pędu <strong>σ</strong>. Ze spinowym momentem pędu związany jest spinowy moment magnetyczny, oznaczany symbolem <strong>μ<sub>s</sub></strong>, który można wyrazić wzorem: <strong>μ<sub>s</sub> = 2 · (e/(2m<sub>e</sub>)) · σ = 2√(s(s+1)) μ<sub>B</sub></strong>.</p><p>Ponieważ spinowa liczba kwantowa <strong>s</strong> przyjmuje tylko jedną wartość, <strong>s = 1/2</strong>, spinowy moment magnetyczny elektronu wynosi zawsze <strong>√3 μ<sub>B</sub></strong>.</p><p>Z rozważań tych wynika, że każdy elektron w atomie wykazuje spinowy moment magnetyczny, a także – w zależności od rodzaju orbitalu – orbitalny moment magnetyczny. Momenty te odgrywają kluczową rolę w zjawiskach magnetycznych i spektroskopowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest magneton Bohra i jaka jest jego wartość liczbowa?",
      "answer": "Magneton Bohra (μB) to stały współczynnik występujący we wzorze na orbitalny moment magnetyczny elektronu. Jego wartość liczbowa wynosi 9,274078·10⁻²⁴ A·m²."
    },
    {
      "question": "Dla jakiego orbitalu orbitalny moment magnetyczny elektronu jest równy zeru?",
      "answer": "Dla orbitalu s (l = 0), ponieważ moment pędu M = 0, a co za tym idzie, orbitalny moment magnetyczny również jest zerowy."
    },
    {
      "question": "Jaka jest wartość spinowego momentu magnetycznego elektronu?",
      "answer": "Spinowy moment magnetyczny elektronu wynosi √3 μB, ponieważ spinowa liczba kwantowa s = 1/2."
    }
  ]
};
