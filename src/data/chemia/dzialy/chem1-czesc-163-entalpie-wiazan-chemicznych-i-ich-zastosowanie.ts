import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_163_entalpieWiazanChemicznychIIchZastosowanieData: StructuredChapter = {
  "chapterTitle": "Entalpie wiązań chemicznych i ich zastosowanie",
  "toc": [
    {
      "title": "Entalpie wiązań chemicznych",
      "anchorId": "entalpie-wiazan-chemicznych"
    },
    {
      "title": "Zastosowanie entalpii wiązań",
      "anchorId": "zastosowanie-entalpii-wiazan"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"entalpie-wiazan-chemicznych\">Entalpie wiązań chemicznych</h3><p>Entalpia wiązania to energia potrzebna do rozerwania jednego mola wiązań w fazie gazowej, z utworzeniem atomów w stanie gazowym. Wartości te są zawsze dodatnie, ponieważ rozrywanie wiązań wymaga dostarczenia energii. Na przykład dla cząsteczki chlorowodoru proces atomizacji można zapisać równaniem: HCl(g) → H(g) + Cl(g), a odpowiadająca mu entalpia wiązania H–Cl wynosi 428 kJ·mol⁻¹.</p><p>Dla związków wieloatomowych, takich jak chlorometan (CH₃Cl), całkowita entalpia atomizacji jest sumą energii wszystkich wiązań w cząsteczce. Dla CH₃Cl proces ten obejmuje rozerwanie trzech wiązań C–H i jednego wiązania C–Cl. Sumaryczna energia atomizacji wynosi wówczas 3·415 kJ·mol⁻¹ + 335 kJ·mol⁻¹ = 1580 kJ·mol⁻¹.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zastosowanie-entalpii-wiazan\">Zastosowanie entalpii wiązań</h3><p>Entalpie wiązań są niezwykle przydatne do szacowania efektów energetycznych reakcji chemicznych, gdy nie są znane inne dane termodynamiczne. Wykorzystuje się w tym celu prawo Hessa, które mówi, że entalpia reakcji jest sumą entalpii wiązań rozrywanych (substraty) i tworzonych (produkty), z odpowiednimi znakami.</p><p>Rozważmy reakcję chlorowania metanu: CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g). Aby obliczyć jej entalpię, należy uwzględnić rozrywanie wiązań w substratach: jedno wiązanie Cl–Cl i trzy wiązania C–H (z cząsteczki metanu), oraz tworzenie wiązań w produktach: jedno wiązanie C–Cl i jedno wiązanie H–Cl. Stosując odpowiednie wartości entalpii wiązań, otrzymujemy: ΔH° = ΔH_D(Cl–Cl) + 3ΔH_D(C–H) – ΔH_D(H–Cl) – ΔH_D(C–Cl) = –101 kJ·mol⁻¹. Ujemna wartość wskazuje, że reakcja jest egzotermiczna, czyli wydziela ciepło.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest entalpia wiązania chemicznego?",
      "answer": "Entalpia wiązania to energia potrzebna do rozerwania jednego mola wiązań w fazie gazowej, z utworzeniem atomów w stanie gazowym. Jest to wielkość zawsze dodatnia."
    },
    {
      "question": "Jak obliczyć entalpię reakcji na podstawie entalpii wiązań?",
      "answer": "Entalpię reakcji oblicza się jako sumę entalpii wiązań rozrywanych w substratach minus suma entalpii wiązań tworzonych w produktach, zgodnie z prawem Hessa."
    },
    {
      "question": "Dlaczego reakcja chlorowania metanu jest egzotermiczna?",
      "answer": "Reakcja chlorowania metanu jest egzotermiczna, ponieważ suma energii wiązań tworzonych (C–Cl i H–Cl) jest większa niż suma energii wiązań rozrywanych (Cl–Cl i C–H), co daje ujemną entalpię reakcji równą –101 kJ·mol⁻¹."
    }
  ]
};
