import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_42_widmoEmisyjneIAbsorpcyjneWodoruData: StructuredChapter = {
  "chapterTitle": "Widmo emisyjne i absorpcyjne wodoru",
  "toc": [
    {
      "title": "Wprowadzenie do widm atomowych",
      "anchorId": "wprowadzenie-do-widm-atomowych"
    },
    {
      "title": "Wzór Balmera i stała Rydberga",
      "anchorId": "wzor-balmera-i-stala-rydberga"
    },
    {
      "title": "Analiza widmowa",
      "anchorId": "analiza-widmowa"
    },
    {
      "title": "Zgodność z mechaniką kwantową",
      "anchorId": "zgodnosc-z-mechanika-kwantowa"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-widm-atomowych\">Wprowadzenie do widm atomowych</h3><p>Widmo emisyjne atomu wodoru w zakresie światła widzialnego składa się z serii ostrych linii, zwanej serią Balmera. Linie te odpowiadają przejściom elektronu pomiędzy wyższymi poziomami energetycznymi a poziomem drugim (n=2). W widmie tym można wyróżnić linie o charakterystycznych długościach fal, takie jak H<sub>α</sub> (656,3 nm, barwa czerwona), H<sub>β</sub> (486,1 nm, niebiesko-zielona), H<sub>γ</sub> (434,1 nm, niebieska) oraz H<sub>δ</sub> (410,2 nm, fioletowa).</p><p>Widmo liniowe wodoru było jednym z kluczowych zagadnień, które doprowadziły do powstania mechaniki kwantowej. Już w XIX wieku zauważono, że długości fal linii widmowych nie są przypadkowe, lecz można je opisać prostym wzorem matematycznym.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wzor-balmera-i-stala-rydberga\">Wzór Balmera i stała Rydberga</h3><p>W 1885 roku Johann Balmer odkrył empiryczną zależność opisującą długości fal linii widzialnych wodoru. Wzór ten można zapisać w wygodnej formie, używając liczby falowej (ν̄), która jest odwrotnością długości fali (ν̄ = 1/λ). Wówczas wzór Balmera przyjmuje postać:</p><p>ν̄ = R<sub>∞</sub> (1/i<sup>2</sup> − 1/j<sup>2</sup>)</p><p>gdzie R<sub>∞</sub> to stała Rydberga, wynosząca 1,097373177·10<sup>7</sup> m<sup>−1</sup>, a i oraz j są liczbami naturalnymi, przy czym j > i. Dla danej serii widmowej wartość i jest stała, natomiast j przyjmuje kolejne wartości całkowite większe od i. Na przykład dla serii Lymana i = 1, dla serii Balmera i = 2, a dla serii Paschena i = 3.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"analiza-widmowa\">Analiza widmowa</h3><p>Charakterystyczny układ linii widmowych w widmie emisyjnym pierwiastka jest unikalny dla danego atomu i nie zależy od rodzaju związku chemicznego, w którym pierwiastek występuje. Dzieje się tak, ponieważ w warunkach wzbudzenia (np. w łuku elektrycznym lub płomieniu) cząsteczki ulegają rozpadowi na wolne atomy, które emitują światło o ściśle określonych długościach fal.</p><p>Ta właściwość jest wykorzystywana w analizie widmowej (spektralnej), która pozwala identyfikować pierwiastki na podstawie ich widm emisyjnych lub absorpcyjnych. Dzięki temu możliwe jest wykrywanie śladowych ilości pierwiastków w próbkach, co ma ogromne znaczenie w chemii analitycznej, astrofizyce i wielu innych dziedzinach.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"zgodnosc-z-mechanika-kwantowa\">Zgodność z mechaniką kwantową</h3><p>Fizyka klasyczna nie potrafiła wyjaśnić, dlaczego atomy emitują światło tylko o określonych długościach fal. Wyjaśnienie to przyniosła dopiero mechanika kwantowa, która wykazała, że energia elektronu w atomie jest skwantowana – może przyjmować tylko pewne, dyskretne wartości. Dla atomu wodoru energie te opisuje wzór:</p><p>E<sub>n</sub> = − (m<sub>e</sub> e<sup>4</sup>) / (8 ε<sub>0</sub><sup>2</sup> h<sup>2</sup> n<sup>2</sup>)</p><p>gdzie m<sub>e</sub> to masa elektronu, e to ładunek elementarny, ε<sub>0</sub> to przenikalność elektryczna próżni, h to stała Plancka, a n to główna liczba kwantowa.</p><p>Gdy atom przechodzi ze stanu o wyższej energii (n = j) do stanu o niższej energii (n = i), emituje foton o energii równej różnicy tych poziomów: ΔE = E<sub>j</sub> − E<sub>i</sub>. Podstawiając wzór na energię, otrzymujemy:</p><p>ΔE = (m<sub>e</sub> e<sup>4</sup> / 8 ε<sub>0</sub><sup>2</sup> h<sup>2</sup>) (1/i<sup>2</sup> − 1/j<sup>2</sup>)</p><p>Następnie, korzystając z zależności ΔE = hν oraz ν̄ = ν/c, można wyprowadzić wzór na liczbę falową emitowanego promieniowania:</p><p>ν̄ = (m<sub>e</sub> e<sup>4</sup> / 8 ε<sub>0</sub><sup>2</sup> h<sup>3</sup> c) (1/i<sup>2</sup> − 1/j<sup>2</sup>)</p><p>Podstawiając wartości liczbowe stałych fizycznych (m<sub>e</sub> = 9,109534·10<sup>−31</sup> kg, e = 1,6021892·10<sup>−19</sup> C, c = 2,99792458·10<sup>8</sup> m·s<sup>−1</sup>, h = 6,626176·10<sup>−34</sup> J·s), otrzymujemy wartość stałej Rydberga równą 1,097374·10<sup>7</sup> m<sup>−1</sup>, co jest zgodne z wartością wyznaczoną doświadczalnie. To potwierdza, że model kwantowy atomu wodoru poprawnie opisuje obserwowane widma.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie są długości fal linii Hα, Hβ, Hγ i Hδ w serii Balmera?",
      "answer": "Hα: 656,3 nm (czerwona), Hβ: 486,1 nm (niebiesko-zielona), Hγ: 434,1 nm (niebieska), Hδ: 410,2 nm (fioletowa)."
    },
    {
      "question": "Co opisuje wzór Balmera i jakie wielkości w nim występują?",
      "answer": "Wzór Balmera opisuje liczby falowe linii widmowych wodoru: ν̄ = R∞ (1/i² − 1/j²), gdzie R∞ to stała Rydberga (1,097373177·10⁷ m⁻¹), a i oraz j to liczby naturalne, przy czym j > i."
    },
    {
      "question": "Dlaczego widma emisyjne pierwiastków są charakterystyczne dla danego pierwiastka, a nie dla związku chemicznego?",
      "answer": "Ponieważ w warunkach wzbudzenia (np. w łuku elektrycznym) cząsteczki rozpadają się na wolne atomy, które emitują światło o ściśle określonych długościach fal, charakterystycznych dla danego pierwiastka."
    },
    {
      "question": "Jak mechanika kwantowa wyjaśnia powstawanie widm liniowych?",
      "answer": "Mechanika kwantowa zakłada, że energia elektronu w atomie jest skwantowana. Podczas przejścia elektronu między poziomami energetycznymi emitowany jest foton o energii równej różnicy tych poziomów, co prowadzi do powstania linii widmowych o określonych długościach fal."
    }
  ]
};
