import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_140_widmaOscylacyjneCzasteczekDwuatomowychData: StructuredChapter = {
  "chapterTitle": "Widma oscylacyjne cząsteczek dwuatomowych",
  "toc": [
    {
      "title": "Poziomy energetyczne oscylatora harmonicznego",
      "anchorId": "poziomy-energetyczne-oscylatora-harmonicznego"
    },
    {
      "title": "Reguły wyboru i stałe siłowe",
      "anchorId": "reguly-wyboru-i-stale-silowe"
    },
    {
      "title": "Oscylator anharmoniczny i energia dysocjacji",
      "anchorId": "oscylator-anharmoniczny-i-energia-dysocjacji"
    },
    {
      "title": "Warunki aktywności w podczerwieni i w widmie Ramana",
      "anchorId": "warunki-aktywnosci-w-podczerwieni-i-w-widmie-ramana"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"poziomy-energetyczne-oscylatora-harmonicznego\">Poziomy energetyczne oscylatora harmonicznego</h3><p>W modelu kwantowomechanicznego oscylatora harmonicznego dozwolone poziomy energetyczne cząsteczki dwuatomowej są rozmieszczone w równych odstępach. Różnica energii między sąsiednimi poziomami, wyrażona wzorem ΔE = hν = (h/2π)√(k/μ), jest stała i zależy od stałej siłowej wiązania (k) oraz masy zredukowanej (μ).</p><p>Podczas drgań o określonej liczbie kwantowej v całkowita energia (suma energii potencjalnej i kinetycznej) pozostaje stała, ale proporcje między tymi formami energii zmieniają się. W punktach zwrotnych ruchu (maksymalne i minimalne odległości jąder) energia jest w całości potencjalna, natomiast przy przejściu przez położenie równowagi (r<sub>0</sub>) osiąga maksimum energia kinetyczna.</p><p>Na przykład dla cząsteczki HCl, która jest typową cząsteczką dwuatomową, stała siłowa wynosi 516 N·m<sup>−1</sup>, a masa zredukowana 1,63·10<sup>−27</sup> kg. Obliczony kwant energii potrzebny do wzbudzenia drgania ze stanu podstawowego (v = 0) do pierwszego stanu wzbudzonego (v = 1) wynosi około 5,933·10<sup>−20</sup> J, co odpowiada częstości 2987 cm<sup>−1</sup>.</p><p>Energia ta jest znacznie większa od średniej energii kinetycznej cząsteczek w temperaturze pokojowej (rzędu 2·10<sup>−21</sup> J na stopień swobody). Dlatego w temperaturze pokojowej tylko nieliczne cząsteczki znajdują się w wzbudzonych stanach oscylacyjnych; większość pozostaje w stanie podstawowym. Sytuacja ta różni się od rotacji, gdzie wiele poziomów rotacyjnych jest obsadzonych w temperaturze pokojowej. W związku z tym w absorpcyjnym widmie oscylacyjnym obserwuje się głównie przejścia z poziomu podstawowego do wyższych stanów.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"reguly-wyboru-i-stale-silowe\">Reguły wyboru i stałe siłowe</h3><p>Dla oscylatora harmonicznego reguła wyboru dopuszcza tylko przejścia, w których zmiana oscylacyjnej liczby kwantowej wynosi Δv = ±1. W konsekwencji w widmie oscylacyjnym pojawia się tylko jedno pasmo odpowiadające częstości (h/2π)√(k/μ). Pomiar częstości pochłanianego promieniowania pozwala wyznaczyć stałą siłową wiązania.</p><p>Stała siłowa jest miarą „sztywności” wiązania: im większa jej wartość, tym więcej energii potrzeba, aby odchylić atomy od położenia równowagi. Typowe wartości stałych siłowych to około 500 N·m<sup>−1</sup> dla wiązań pojedynczych, około 1000 N·m<sup>−1</sup> dla podwójnych i około 1500 N·m<sup>−1</sup> dla potrójnych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"oscylator-anharmoniczny-i-energia-dysocjacji\">Oscylator anharmoniczny i energia dysocjacji</h3><p>Model oscylatora harmonicznego jest jedynie przybliżeniem. W rzeczywistości odległości między sąsiednimi poziomami energetycznymi maleją wraz ze wzrostem liczby kwantowej v, co obrazuje krzywa energii potencjalnej oscylatora anharmonicznego. Energię takiego oscylatora opisuje wzór: E<sub>v</sub> = (v + ½)hω<sub>0</sub> − (v + ½)<sup>2</sup>x<sub>0</sub>hω<sub>0</sub>, gdzie x<sub>0</sub> to współczynnik anharmoniczności.</p><p>Różnica energii między sąsiednimi poziomami w oscylatorze anharmonicznym wynosi ΔE = hω<sub>0</sub>[1 − 2x<sub>0</sub>(v + 1)], co pokazuje, że odstępy między poziomami maleją ze wzrostem v. Częstość ω<sub>0</sub> odnosi się do drgań w pobliżu poziomu zerowego.</p><p>Odstępstwa od harmoniczności powodują, że oprócz przejść dozwolonych regułą wyboru (Δv = ±1) stają się możliwe także przejścia o większej zmianie liczby kwantowej, np. Δv = 2, 3 itd. Odpowiadające im linie widmowe, zwane nadtonami (pierwszy nadton: v = 0 → v = 2, drugi: v = 0 → v = 3), mają jednak mniejszą intensywność.</p><p>Krzywa energii potencjalnej dla oscylatora anharmonicznego jest asymetryczna: dla dużych odległości międzyatomowych dąży asymptotycznie do stałej wartości, odpowiadającej stanowi dwóch izolowanych atomów, czyli zerwaniu wiązania. Aby przenieść cząsteczkę ze stanu podstawowego (v = 0) do stanu dysocjacji, należy dostarczyć energię D = D<sub>e</sub> − ½hω<sub>0</sub>, gdzie D<sub>e</sub> to głębokość studni potencjału, a D to energia dysocjacji (wiązania). Analiza widm oscylacyjnych pozwala wyznaczyć zarówno stałe siłowe, jak i energię dysocjacji.</p><p>W widmie absorpcyjnym cząsteczki można wyróżnić dwa zakresy: dla częstości mniejszych od ν<sub>0</sub> = D/h obserwuje się widmo liniowe (dyskretne przejścia), natomiast dla częstości większych – widmo ciągłe, związane z dysocjacją cząsteczki na atomy. Nadmiar energii ponad D jest zamieniany na energię kinetyczną powstałych fragmentów.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"warunki-aktywnosci-w-podczerwieni-i-w-widmie-ramana\">Warunki aktywności w podczerwieni i w widmie Ramana</h3><p>Nie każda cząsteczka może pochłaniać promieniowanie podczerwone. Warunkiem aktywności w podczerwieni jest zmiana momentu dipolowego podczas drgań, co można zapisać jako (dμ/dr)<sub>r=r<sub>0</sub></sub> ≠ 0. Na przykład cząsteczka HCl, w której podczas oscylacji zmienia się odległość między ładunkami, jest aktywna w podczerwieni. Natomiast cząsteczki homojądrowe, takie jak O<sub>2</sub>, nie wykazują zmiany momentu dipolowego i nie dają widma oscylacyjnego w podczerwieni.</p><p>W spektroskopii Ramana warunkiem wzbudzenia drgań jest zmiana polaryzowalności cząsteczki w czasie oscylacji, co wyraża się jako (dα/dr)<sub>r=r<sub>0</sub></sub> ≠ 0. Polaryzowalność jest tym większa, im słabiej elektrony walencyjne są związane z jądrami, czyli im są bardziej ruchliwe. Dzięki temu widma Ramana można uzyskać również dla cząsteczek homojądrowych, takich jak I<sub>2</sub>, Cl<sub>2</sub> czy O<sub>2</sub>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest różnica energii między sąsiednimi poziomami oscylacyjnymi w modelu oscylatora harmonicznego?",
      "answer": "Różnica energii jest stała i wynosi ΔE = hν = (h/2π)√(k/μ), gdzie k to stała siłowa, a μ to masa zredukowana."
    },
    {
      "question": "Dlaczego w temperaturze pokojowej większość cząsteczek znajduje się w podstawowym stanie oscylacyjnym?",
      "answer": "Ponieważ energia kwantu oscylacyjnego jest znacznie większa od średniej energii kinetycznej cząsteczek w temperaturze pokojowej (rzędu 2·10⁻²¹ J), więc tylko nieliczne cząsteczki mają wystarczającą energię, aby przejść do stanów wzbudzonych."
    },
    {
      "question": "Jaka jest reguła wyboru dla oscylatora harmonicznego i jakie ma to konsekwencje dla widma?",
      "answer": "Reguła wyboru dopuszcza tylko przejścia z Δv = ±1, co powoduje, że w widmie pojawia się tylko jedno pasmo podstawowe."
    },
    {
      "question": "Co to są nadtony i dlaczego powstają?",
      "answer": "Nadtony to przejścia oscylacyjne z Δv > 1 (np. v = 0 → v = 2). Powstają one w wyniku anharmoniczności drgań, która łagodzi regułę wyboru, ale mają mniejszą intensywność niż pasmo podstawowe."
    },
    {
      "question": "Jaki jest warunek aktywności cząsteczki w widmie w podczerwieni?",
      "answer": "Warunkiem jest zmiana momentu dipolowego podczas drgań, czyli (dμ/dr) przy r = r₀ ≠ 0."
    },
    {
      "question": "Jaki jest warunek aktywności cząsteczki w widmie Ramana?",
      "answer": "Warunkiem jest zmiana polaryzowalności podczas drgań, czyli (dα/dr) przy r = r₀ ≠ 0."
    }
  ]
};
