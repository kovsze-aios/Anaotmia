import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_137_widmaRotacyjneCzasteczekDwuatomowychILiniowychData: StructuredChapter = {
  "chapterTitle": "Widma rotacyjne cząsteczek dwuatomowych i liniowych",
  "toc": [
    {
      "title": "Obsadzenie poziomów rotacyjnych",
      "anchorId": "obsadzenie-poziomow-rotacyjnych"
    },
    {
      "title": "Struktura widma rotacyjnego",
      "anchorId": "struktura-widma-rotacyjnego"
    },
    {
      "title": "Wyznaczanie stałej rotacyjnej i momentu bezwładności",
      "anchorId": "wyznaczanie-stalej-rotacyjnej"
    },
    {
      "title": "Cząsteczki liniowe wieloatomowe",
      "anchorId": "czasteczki-liniowe-wieloatomowe"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"obsadzenie-poziomow-rotacyjnych\">Obsadzenie poziomów rotacyjnych</h3><p>W temperaturze pokojowej obsadzenie poziomów energetycznych rotacji w cząsteczkach chlorowodoru nie jest równomierne. Stosunek liczby cząsteczek na poziomie o liczbie kwantowej J do liczby cząsteczek na najniższym poziomie (J = 0) maleje wraz ze wzrostem J, ale nie monotonicznie – początkowo rośnie, osiąga maksimum dla J = 4, a następnie maleje. Oznacza to, że najwięcej cząsteczek znajduje się w stanie J = 4, choć obecne są również cząsteczki o wyższych energiach, choć w mniejszych ilościach.</p><p>Charakterystyczną cechą tego rozkładu jest to, że średnia energia rotacyjna przypadająca na cząsteczkę, obliczona jako suma energii wszystkich cząsteczek podzielona przez ich liczbę, wynosi <em>kT</em> na dwa stopnie swobody rotacji. Oznacza to, że na jeden stopień swobody przypada energia <em>kT</em>/2, co w przeliczeniu na mol daje około 1,23 kJ·mol<sup>−1</sup>, a na pojedynczą cząsteczkę około 2,05·10<sup>−21</sup> J.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"struktura-widma-rotacyjnego\">Struktura widma rotacyjnego</h3><p>Gdy przez gaz zawierający cząsteczki takie jak chlorowodór przepuszcza się promieniowanie mikrofalowe o szerokim zakresie długości fal, obserwuje się absorpcję kwantów odpowiadających przejściom między sąsiednimi poziomami rotacyjnymi: J = 0 → 1, 1 → 2, 2 → 3, 3 → 4 itd. Energia tych przejść jest opisana wzorem:</p><p>ΔE = E<sub>J+1</sub> − E<sub>J</sub> = 2B(J + 1)</p><p>gdzie B to stała rotacyjna cząsteczki. Odpowiadające tym przejściom liczby falowe wyrażają się zależnością:</p><p>ν̃ = 2B/(hc) · (J + 1) [m<sup>−1</sup>]</p><p>lub w jednostkach cm<sup>−1</sup>: ν̃ = 2B/(hc) · (J + 1) · 10<sup>−2</sup> [cm<sup>−1</sup>].</p><p>Widmo rotacyjne cząsteczki chlorowodoru składa się zatem z serii linii równo oddalonych od siebie o odstęp Δν̃ = 2B/(hc) · 10<sup>−2</sup> cm<sup>−1</sup>. Pomiar tego odstępu pozwala na wyznaczenie stałej rotacyjnej B, a następnie momentu bezwładności I cząsteczki oraz długości wiązania R między atomami.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"wyznaczanie-stalej-rotacyjnej\">Wyznaczanie stałej rotacyjnej i momentu bezwładności</h3><p>Dla cząsteczki <sup>1</sup>H<sup>35</sup>Cl zmierzony odstęp między sąsiednimi liniami widmowymi wynosi 21,18 cm<sup>−1</sup>. Na tej podstawie można obliczyć stałą rotacyjną B. Przekształcając wzór na odstęp linii, otrzymujemy:</p><p>B = (Δν̃ · hc) / 2</p><p>Podstawiając wartości: h = 6,626·10<sup>−34</sup> J·s, c = 2,998·10<sup>8</sup> m·s<sup>−1</sup>, Δν̃ = 21,18·10<sup>2</sup> m<sup>−1</sup>, otrzymujemy B ≈ 21,0·10<sup>−23</sup> J.</p><p>Następnie, korzystając z zależności między stałą rotacyjną a momentem bezwładności:</p><p>B = h<sup>2</sup> / (8π<sup>2</sup>I)</p><p>wyznaczamy moment bezwładności: I = h<sup>2</sup> / (8π<sup>2</sup>B) = (6,626·10<sup>−34</sup>)<sup>2</sup> / (8π<sup>2</sup> · 21,0·10<sup>−23</sup>) ≈ 2,64·10<sup>−47</sup> kg·m<sup>2</sup>.</p><p>Mając moment bezwładności, można obliczyć długość wiązania R. Dla cząsteczki dwuatomowej moment bezwładności wyraża się wzorem I = μR<sup>2</sup>, gdzie μ to masa zredukowana. Dla HCl masa zredukowana wynosi:</p><p>μ = (m<sub>Cl</sub> · m<sub>H</sub>) / (m<sub>Cl</sub> + m<sub>H</sub>)</p><p>Po podstawieniu mas molowych i przeliczeniu na kilogramy otrzymujemy R ≈ 1,28·10<sup>−10</sup> m, czyli 128 pm.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"czasteczki-liniowe-wieloatomowe\">Cząsteczki liniowe wieloatomowe</h3><p>Analogiczne obliczenia można przeprowadzić dla liniowych cząsteczek wieloatomowych, takich jak tlenosiarczek węgla (O=C=S). W cząsteczce tej ruchy obrotowe rozpatruje się podobnie jak w przypadku HCl – jako dwa niezależne obroty wokół osi prostopadłych do osi cząsteczki. Obrót wokół osi cząsteczki jest pomijany ze względu na bardzo małą energię, dlatego cząsteczce przypisuje się dwa stopnie swobody rotacyjnej.</p><p>Cząsteczka liniowa wieloatomowa charakteryzuje się dwoma równymi momentami bezwładności względem osi prostopadłych do osi cząsteczki. Wartość każdego z tych momentów można obliczyć ze wzoru:</p><p>I = (m<sub>1</sub>m<sub>3</sub>/(m<sub>1</sub>+m<sub>2</sub>+m<sub>3</sub>)) · (R<sub>1</sub>+R<sub>2</sub>)<sup>2</sup> + (m<sub>2</sub>/(m<sub>1</sub>+m<sub>2</sub>+m<sub>3</sub>)) · (m<sub>1</sub>R<sub>1</sub><sup>2</sup> + m<sub>3</sub>R<sub>2</sub><sup>2</sup>)</p><p>gdzie m<sub>1</sub>, m<sub>2</sub>, m<sub>3</sub> to masy atomów, a R<sub>1</sub> i R<sub>2</sub> to długości wiązań między atomami. Znajomość momentu bezwładności pozwala na wyznaczenie stałej rotacyjnej B, a tym samym na analizę widma rotacyjnego i określenie geometrii cząsteczki.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest średnia energia rotacyjna przypadająca na jeden stopień swobody cząsteczki w temperaturze T?",
      "answer": "Średnia energia rotacyjna na jeden stopień swobody wynosi kT/2, gdzie k to stała Boltzmanna, a T to temperatura bezwzględna."
    },
    {
      "question": "Jak wygląda zależność energii przejść rotacyjnych od liczby kwantowej J?",
      "answer": "Energia przejścia między poziomami J i J+1 jest proporcjonalna do (J+1), a dokładnie ΔE = 2B(J+1), gdzie B to stała rotacyjna."
    },
    {
      "question": "Co można wyznaczyć z odstępu między liniami w widmie rotacyjnym cząsteczki dwuatomowej?",
      "answer": "Z odstępu między liniami widma rotacyjnego można wyznaczyć stałą rotacyjną B, a następnie moment bezwładności I oraz długość wiązania R."
    },
    {
      "question": "Dlaczego w cząsteczkach liniowych wieloatomowych pomija się obrót wokół osi cząsteczki?",
      "answer": "Obrót wokół osi cząsteczki jest pomijany, ponieważ moment bezwładności względem tej osi jest bardzo mały, co wiąże się z bardzo małą energią rotacji, a tym samym znikomym wkładem do widma."
    }
  ]
};
