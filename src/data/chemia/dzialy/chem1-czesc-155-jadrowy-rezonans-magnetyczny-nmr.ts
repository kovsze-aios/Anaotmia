import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_155_jadrowyRezonansMagnetycznyNmrData: StructuredChapter = {
  "chapterTitle": "Jądrowy rezonans magnetyczny (NMR)",
  "toc": [
    {
      "title": "Wprowadzenie do jądrowego rezonansu magnetycznego",
      "anchorId": "wprowadzenie-nmr"
    },
    {
      "title": "Podstawy fizyczne NMR: spin jądrowy i moment magnetyczny",
      "anchorId": "podstawy-fizyczne-nmr"
    },
    {
      "title": "Efekt ekranowania i przesunięcie chemiczne",
      "anchorId": "efekt-ekranowania"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-nmr\">Wprowadzenie do jądrowego rezonansu magnetycznego</h3><p>Jądrowy rezonans magnetyczny (NMR) to zjawisko polegające na absorpcji promieniowania elektromagnetycznego przez jądra atomowe umieszczone w polu magnetycznym. Jest to technika spektroskopowa szeroko stosowana w chemii do określania struktury cząsteczek, a w medycynie – w obrazowaniu metodą rezonansu magnetycznego (MRI).</p><p>NMR jest analogiczny do elektronowego rezonansu paramagnetycznego (EPR), ale dotyczy jąder, a nie elektronów. Ze względu na znacznie mniejszy magnetyzm jąder, częstości rezonansowe leżą w zakresie fal radiowych, co umożliwia nieinwazyjne badanie próbek biologicznych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"podstawy-fizyczne-nmr\">Podstawy fizyczne NMR: spin jądrowy i moment magnetyczny</h3><p>Jądra atomowe posiadają spinową liczbę kwantową <em>I</em>, która może przyjmować wartości całkowite lub połówkowe (np. 1/2, 1, 3/2). Jądra o spinie różnym od zera mają niezerowy moment magnetyczny, co jest warunkiem obserwacji zjawiska NMR. Przykłady jąder aktywnych w NMR to <sup>1</sup>H, <sup>13</sup>C, <sup>19</sup>F i <sup>31</sup>P.</p><p>W zewnętrznym polu magnetycznym o indukcji <em>B</em> wektor momentu pędu jądra <em>M<sub>I</sub></em> może przyjmować tylko określone orientacje, opisane magnetyczną liczbą kwantową <em>m<sub>I</sub></em>, która przyjmuje wartości od <em>−I</em> do <em>+I</em>. Każdej orientacji odpowiada inna energia potencjalna, dana wzorem:</p><p><em>E</em> = <em>m<sub>I</sub></em> <em>g<sub>N</sub></em> <em>μ<sub>N</sub></em> <em>B</em>,</p><p>gdzie <em>g<sub>N</sub></em> to jądrowy czynnik giromagnetyczny (charakterystyczny dla danego izotopu), a <em>μ<sub>N</sub></em> to magneton jądrowy, wynoszący około 5,051·10<sup>−27</sup> J·T<sup>−1</sup>.</p><p>Przejścia między sąsiednimi poziomami energetycznymi (Δ<em>m<sub>I</sub></em> = ±1) zachodzą przy absorpcji fotonu o energii <em>hν</em> = <em>g<sub>N</sub></em> <em>μ<sub>N</sub></em> <em>B</em>. Dla protonów (<sup>1</sup>H) w polu o indukcji 1 T częstość rezonansowa wynosi około 42,577 MHz, co odpowiada falom radiowym.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"efekt-ekranowania\">Efekt ekranowania i przesunięcie chemiczne</h3><p>W cząsteczkach jądra są otoczone elektronami, które w zewnętrznym polu magnetycznym wytwarzają własne, lokalne pole magnetyczne skierowane przeciwnie do pola zewnętrznego. Zjawisko to, zwane efektem diamagnetycznym, powoduje, że jądro doświadcza nieco mniejszej indukcji magnetycznej niż pole zewnętrzne. Efektywną indukcję <em>B<sub>ef</sub></em> opisuje wzór:</p><p><em>B<sub>ef</sub></em> = <em>B</em>(1 − <em>σ</em>),</p><p>gdzie <em>σ</em> to bezwymiarowa stała ekranowania (0 < <em>σ</em> < 1).</p><p>Różnica między indukcją zewnętrzną a efektywną, <em>B</em> − <em>B<sub>ef</sub></em> = <em>σB</em>, nazywana jest przesunięciem chemicznym. Ponieważ różne jądra w cząsteczce są różnie ekranowane, rezonują przy nieco różnych częstościach, co pozwala na identyfikację grup funkcyjnych i określenie struktury cząsteczki.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie warunki musi spełniać jądro atomowe, aby można było zaobserwować zjawisko NMR?",
      "answer": "Jądro musi mieć niezerową spinową liczbę kwantową (I ≠ 0), co wiąże się z posiadaniem niezerowego momentu magnetycznego. Przykłady to ¹H, ¹³C, ¹⁹F, ³¹P."
    },
    {
      "question": "Co to jest stała ekranowania i jak wpływa na częstość rezonansową jądra?",
      "answer": "Stała ekranowania (σ) opisuje zmniejszenie efektywnego pola magnetycznego działającego na jądro przez elektrony. Powoduje to, że częstość rezonansowa jądra jest niższa niż dla jądra nieekranowanego, co prowadzi do przesunięcia chemicznego."
    }
  ]
};
