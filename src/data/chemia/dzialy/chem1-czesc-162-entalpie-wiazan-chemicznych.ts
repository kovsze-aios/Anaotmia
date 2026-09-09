import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_162_entalpieWiazanChemicznychData: StructuredChapter = {
  "chapterTitle": "Entalpie wiązań chemicznych",
  "toc": [
    {
      "title": "Definicja i metody wyznaczania entalpii dysocjacji wiązań",
      "anchorId": "definicja-i-metody-wyznaczania-entalpii-dysocjacji-wiazan"
    },
    {
      "title": "Przykład: dysocjacja jodu cząsteczkowego",
      "anchorId": "przyklad-dysocjacja-jodu-czasteczkowego"
    },
    {
      "title": "Zastosowanie spektrometrii masowej",
      "anchorId": "zastosowanie-spektrometrii-masowej"
    },
    {
      "title": "Entalpie kolejnych dysocjacji wiązań w cząsteczkach wieloatomowych",
      "anchorId": "entalpie-kolejnych-dysocjacji-wiazan-w-czasteczkach-wieloatomowych"
    },
    {
      "title": "Średnie entalpie wiązań i ich zastosowanie",
      "anchorId": "srednie-entalpie-wiazan-i-ich-zastosowanie"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-i-metody-wyznaczania-entalpii-dysocjacji-wiazan\">Definicja i metody wyznaczania entalpii dysocjacji wiązań</h3><p>W termochemii kluczowym pojęciem jest <strong>entalpia dysocjacji wiązania</strong>, oznaczana symbolem ΔH<sub>D</sub>(A—B). Definiuje się ją jako standardową entalpię reakcji, w której cząsteczka AB w fazie gazowej rozpada się na atomy A i B, również w stanie gazowym. Proces ten można zapisać równaniem: AB(g) → A(g) + B(g). Warunki standardowe oznaczają ciśnienie 1,01325·10<sup>5</sup> Pa oraz temperaturę 298,15 K.</p><p>Wyznaczanie entalpii dysocjacji jest najprostsze dla cząsteczek dwuatomowych, gdzie często korzysta się z danych spektroskopowych. Alternatywnie, można badać równowagę między cząsteczkami niezdysocjowanymi a produktami dysocjacji, co pozwala na obliczenie entalpii na podstawie stałych równowagi w różnych temperaturach.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyklad-dysocjacja-jodu-czasteczkowego\">Przykład: dysocjacja jodu cząsteczkowego</h3><p>Klasycznym przykładem jest dysocjacja termiczna jodu. W wysokich temperaturach cząsteczki I<sub>2</sub> ulegają rozpadowi zgodnie z równaniem: I<sub>2</sub>(g) ⇌ 2I(g). Reakcja ta nie zachodzi całkowicie, lecz osiąga stan równowagi, w którym współistnieją atomy i cząsteczki jodu. Stężenie atomowego jodu można określić, mierząc absorpcję światła o długości fali 125,8 nm, a znając całkowite stężenie jodu, oblicza się stężenie formy atomowej.</p><p>Na tej podstawie wyznacza się stałą równowagi K = [I]<sup>2</sup>/[I<sub>2</sub>]. Znając stałe równowagi w dwóch różnych temperaturach, można obliczyć entalpię dysocjacji jodu cząsteczkowego, korzystając z równania van't Hoffa (przedstawionego w dalszej części podręcznika).</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zastosowanie-spektrometrii-masowej\">Zastosowanie spektrometrii masowej</h3><p>Inną metodą wyznaczania energii wiązań jest spektrometria masowa. W spektrometrze masowym cząsteczki gazu są jonizowane przez strumień rozpędzonych elektronów. Gdy energia elektronów przekroczy pewną wartość progową, zwaną <strong>potencjałem pojawienia się</strong>, cząsteczki ulegają rozpadowi na zjonizowane fragmenty, które są następnie wykrywane. Energia elektronów w momencie osiągnięcia potencjału pojawienia się odpowiada energii potrzebnej do zerwania wiązania i jonizacji fragmentów.</p><p>Przykładem może być wodór. Dla cząsteczki H<sub>2</sub> proces ten opisuje równanie: H<sub>2</sub>(g) → H(g) + H<sup>+</sup>(g) + e<sup>−</sup>, a zmierzona energia wynosi 18,0 eV, co odpowiada 1736 kJ·mol<sup>−1</sup>. Z kolei energia jonizacji atomu wodoru (H → H<sup>+</sup> + e<sup>−</sup>) wynosi 13,6 eV, czyli 1312 kJ·mol<sup>−1</sup>. Odejmując te wartości, otrzymujemy entalpię dysocjacji wiązania H—H: ΔH<sub>D</sub>(H—H) = 1736 − 1312 = 424 kJ·mol<sup>−1</sup>. Wynik ten jest zgodny z wartością 435 kJ·mol<sup>−1</sup> uzyskaną metodami spektroskopowymi.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"entalpie-kolejnych-dysocjacji-wiazan-w-czasteczkach-wieloatomowych\">Entalpie kolejnych dysocjacji wiązań w cząsteczkach wieloatomowych</h3><p>W cząsteczkach zawierających kilka identycznych wiązań, np. w wodzie (H<sub>2</sub>O) z dwoma wiązaniami O—H czy w metanie (CH<sub>4</sub>) z czterema wiązaniami C—H, energie zerwania poszczególnych wiązań nie są jednakowe. Dzieje się tak, ponieważ oderwanie pierwszego atomu zmienia rozkład chmury elektronowej w pozostałej części cząsteczki.</p><p>Dla wody entalpia zerwania pierwszego wiązania (H—OH) wynosi 494 kJ·mol<sup>−1</sup>, natomiast drugiego (w rodniku OH) jest mniejsza i równa 431 kJ·mol<sup>−1</sup>. Suma tych wartości daje entalpię atomizacji wody: H<sub>2</sub>O(g) → 2H(g) + O(g), ΔH = 925 kJ·mol<sup>−1</sup>. Średnia entalpia wiązania O—H wynosi zatem 462,5 kJ·mol<sup>−1</sup>.</p><p>Analogicznie dla metanu kolejne entalpie dysocjacji wynoszą: ΔH<sub>D</sub>(H—CH<sub>3</sub>) = 435 kJ·mol<sup>−1</sup>, ΔH<sub>D</sub>(H—CH<sub>2</sub>) = 443,5 kJ·mol<sup>−1</sup>, ΔH<sub>D</sub>(H—CH) = 443,5 kJ·mol<sup>−1</sup> oraz ΔH<sub>D</sub>(H—C) = 339 kJ·mol<sup>−1</sup>. Średnia entalpia wiązania C—H wynosi 415 kJ·mol<sup>−1</sup>.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"srednie-entalpie-wiazan-i-ich-zastosowanie\">Średnie entalpie wiązań i ich zastosowanie</h3><p>W praktyce chemicznej często używa się <strong>średnich entalpii wiązań</strong>, które są uśrednionymi wartościami dla danego typu wiązania w różnych cząsteczkach. Doświadczenie pokazuje, że energia atomizacji cząsteczki wieloatomowej może być w przybliżeniu obliczona jako suma średnich entalpii wszystkich obecnych w niej wiązań. Co więcej, średnia energia wiązania między tymi samymi atomami zmienia się nieznacznie przy przejściu od jednej cząsteczki do drugiej, pod warunkiem zachowania tego samego rzędu wiązania i wartościowości pierwiastków.</p><p>Te fakty wskazują na silną lokalizację wiązań chemicznych, co pozwala na szacowanie entalpii reakcji. Na przykład dla reakcji Cl<sub>2</sub>(g) + CH<sub>4</sub>(g) → HCl(g) + CH<sub>3</sub>Cl(g) można przeprowadzić obliczenia, rozbijając proces na atomizację substratów i tworzenie wiązań w produktach. Entalpia atomizacji chloru wynosi ΔH<sub>D</sub>(Cl—Cl) = 247 kJ·mol<sup>−1</sup>, a metanu: 4·ΔH<sub>D</sub>(C—H) = 4·415 = 1660 kJ·mol<sup>−1</sup>. Następnie, korzystając z odpowiednich średnich entalpii wiązań dla produktów, można oszacować entalpię całej reakcji.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Zdefiniuj entalpię dysocjacji wiązania chemicznego i podaj jej symbol.",
      "answer": "Entalpia dysocjacji wiązania (ΔH<sub>D</sub>(A—B)) to standardowa entalpia reakcji rozpadu cząsteczki AB w fazie gazowej na atomy A i B, również w stanie gazowym, w warunkach standardowych (p = 1,01325·10<sup>5</sup> Pa, T = 298,15 K)."
    },
    {
      "question": "Dlaczego entalpie zerwania kolejnych wiązań w cząsteczce wieloatomowej, np. w wodzie, nie są jednakowe?",
      "answer": "Ponieważ oderwanie pierwszego atomu zmienia rozkład chmury elektronowej w pozostałej części cząsteczki, co wpływa na energię potrzebną do oderwania kolejnych atomów."
    },
    {
      "question": "Jak można wyznaczyć entalpię dysocjacji jodu cząsteczkowego?",
      "answer": "Poprzez pomiar stężenia atomowego jodu w równowadze z cząsteczkami I<sub>2</sub> w różnych temperaturach, a następnie wykorzystanie równania van't Hoffa do obliczenia entalpii reakcji."
    },
    {
      "question": "Na czym polega metoda spektrometrii masowej w wyznaczaniu energii wiązań?",
      "answer": "Polega na jonizacji cząsteczek gazu elektronami o odpowiedniej energii. Gdy energia elektronów osiągnie potencjał pojawienia się, cząsteczki ulegają rozpadowi na jony, a energia ta odpowiada energii zerwania wiązania i jonizacji fragmentów."
    },
    {
      "question": "Co to jest średnia entalpia wiązania i jakie ma zastosowanie?",
      "answer": "Średnia entalpia wiązania to uśredniona wartość energii potrzebnej do zerwania danego typu wiązania w różnych cząsteczkach. Służy do przybliżonego obliczania entalpii atomizacji cząsteczek oraz entalpii reakcji chemicznych."
    }
  ]
};
