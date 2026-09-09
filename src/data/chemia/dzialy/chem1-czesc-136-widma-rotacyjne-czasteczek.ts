import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_136_widmaRotacyjneCzasteczekData: StructuredChapter = {
  "chapterTitle": "Widma rotacyjne cząsteczek",
  "toc": [
    {
      "title": "Poziomy energii rotacyjnej",
      "anchorId": "poziomy-energii-rotacyjnej"
    },
    {
      "title": "Reguły wyboru i aktywność w podczerwieni",
      "anchorId": "reguly-wyboru-i-aktywnosc-w-podczerwieni"
    },
    {
      "title": "Obsadzenie poziomów rotacyjnych",
      "anchorId": "obsadzenie-poziomow-rotacyjnych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"poziomy-energii-rotacyjnej\">Poziomy energii rotacyjnej</h3><p>Mechanika kwantowa opisuje energię rotacji cząsteczek liniowych za pomocą wzoru: <strong>E<sub>J</sub> = B·J(J+1)</strong>, gdzie <strong>J</strong> to rotacyjna liczba kwantowa przyjmująca wartości całkowite nieujemne (0, 1, 2, …), a <strong>B</strong> to stała rotacyjna. Stała ta jest odwrotnie proporcjonalna do momentu bezwładności cząsteczki <em>I</em> i wyraża się zależnością: B = h<sup>2</sup>/(8π<sup>2</sup>I).</p><p>Moment bezwładności dla cząsteczki dwuatomowej o masach atomów m<sub>1</sub> i m<sub>2</sub> oraz odległości międzyjądrowej R oblicza się ze wzoru: I = (m<sub>1</sub>m<sub>2</sub>/(m<sub>1</sub>+m<sub>2</sub>))·R<sup>2</sup>. Podstawiając kolejne wartości J do wzoru na energię, otrzymujemy poziomy: E<sub>0</sub> = 0, E<sub>1</sub> = 2B, E<sub>2</sub> = 6B, E<sub>3</sub> = 12B, E<sub>4</sub> = 20B, E<sub>5</sub> = 30B, E<sub>6</sub> = 42B itd. Różnice między sąsiednimi poziomami rosną liniowo wraz z J.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"reguly-wyboru-i-aktywnosc-w-podczerwieni\">Reguły wyboru i aktywność w podczerwieni</h3><p>Molekuły w fazie gazowej mogą zmieniać swój stan rotacyjny w wyniku zderzeń, ale również pod wpływem promieniowania elektromagnetycznego o odpowiedniej długości fali. Pochłonięcie kwantu powoduje przejście na wyższy poziom energetyczny, a emisja – na niższy. Jednak nie każde przejście jest dozwolone; obowiązuje <strong>reguła wyboru</strong>, która dopuszcza jedynie zmiany rotacyjnej liczby kwantowej o jednostkę: ΔJ = ±1. W praktyce oznacza to, że w widmie rotacyjnym obserwuje się tylko linie odpowiadające przejściom między poziomami sąsiednimi, np. E<sub>1</sub>↔E<sub>0</sub>, E<sub>2</sub>↔E<sub>1</sub>, E<sub>3</sub>↔E<sub>2</sub> itd.</p><p>Warunkiem koniecznym do zaobserwowania widma rotacyjnego jest posiadanie przez cząsteczkę <strong>trwałego momentu dipolowego</strong>. Dlatego widma te są charakterystyczne dla cząsteczek polarnych, takich jak HCl, H<sub>2</sub>O czy NH<sub>3</sub>. Cząsteczki niepolarne, np. N<sub>2</sub>, O<sub>2</sub>, CH<sub>4</sub> czy CO<sub>2</sub>, nie wykazują aktywności rotacyjnej w podczerwieni, ponieważ ich rotacja nie powoduje zmiany rozkładu ładunku.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"obsadzenie-poziomow-rotacyjnych\">Obsadzenie poziomów rotacyjnych</h3><p>W warunkach równowagi termicznej energia dostarczana do gazu w wyniku ogrzewania rozkłada się równomiernie na wszystkie stopnie swobody – translacyjne i rotacyjne. Zgodnie z kinetyczną teorią gazów, na każdy taki stopień przypada średnio energia równa (1/2)kT na cząsteczkę, gdzie k to stała Boltzmanna (k = 1,38066·10<sup>−23</sup> J·K<sup>−1</sup>), co w przeliczeniu na mol daje (1/2)RT.</p><p>Ponieważ energia poziomów rotacyjnych jest znacznie mniejsza od średniej energii cieplnej w temperaturze pokojowej, obsadzenie poziomów nie maleje monotonicznie wraz ze wzrostem J. Zależność liczby cząsteczek na danym poziomie od J opisuje rozkład Boltzmanna, który dla cząsteczki HCl w temperaturze pokojowej osiąga maksimum dla pewnej pośredniej wartości J. Oznacza to, że najwięcej cząsteczek znajduje się na poziomach o średniej energii, a nie na najniższym poziomie rotacyjnym.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest postać wzoru na energię rotacyjną cząsteczki liniowej?",
      "answer": "E<sub>J</sub> = B·J(J+1), gdzie J to rotacyjna liczba kwantowa, a B to stała rotacyjna."
    },
    {
      "question": "Jaka reguła wyboru obowiązuje dla przejść rotacyjnych?",
      "answer": "ΔJ = ±1, czyli dozwolone są tylko przejścia między sąsiednimi poziomami rotacyjnymi."
    },
    {
      "question": "Dlaczego cząsteczki niepolarne nie dają widma rotacyjnego?",
      "answer": "Ponieważ nie posiadają trwałego momentu dipolowego, więc nie oddziałują z promieniowaniem elektromagnetycznym w zakresie rotacyjnym."
    },
    {
      "question": "Jak zmienia się obsadzenie poziomów rotacyjnych wraz ze wzrostem J w temperaturze pokojowej?",
      "answer": "Obsadzenie najpierw rośnie, osiąga maksimum dla pewnej wartości J, a następnie maleje, zgodnie z rozkładem Boltzmanna."
    }
  ]
};
