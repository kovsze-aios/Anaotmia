import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_156_jadrowyRezonansMagnetycznyNmrPrzesuniecieChemiczneIStrukturaSubtelnaData: StructuredChapter = {
  "chapterTitle": "Jądrowy rezonans magnetyczny (NMR) – przesunięcie chemiczne i struktura subtelna",
  "toc": [
    {
      "title": "Przesunięcie chemiczne w spektroskopii NMR",
      "anchorId": "przesuniecie-chemiczne-nmr"
    },
    {
      "title": "Widmo NMR etanolu i struktura subtelna",
      "anchorId": "widmo-nmr-etanolu-struktura-subtelna"
    },
    {
      "title": "Zastosowania NMR w chemii nieorganicznej",
      "anchorId": "zastosowania-nmr-chemia-nieorganiczna"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"przesuniecie-chemiczne-nmr\">Przesunięcie chemiczne w spektroskopii NMR</h3><p>W spektroskopii jądrowego rezonansu magnetycznego (NMR) kluczowym parametrem jest <strong>przesunięcie chemiczne</strong>, które odzwierciedla wpływ otoczenia chemicznego jądra na wartość lokalnego pola magnetycznego. Różnice w gęstości elektronowej wokół jądra powodują, że efektywne pole magnetyczne (B<sub>e</sub>) różni się od zewnętrznego pola przyłożonego. Ponieważ bezwzględna wartość B<sub>e</sub> jest trudna do zmierzenia, przesunięcie chemiczne definiuje się względem wzorca.</p><p>Dla protonów (<sup>1</sup>H) wzorcem jest <strong>tetrametylosilan</strong> (TMS, Si(CH<sub>3</sub>)<sub>4</sub>), dla którego stałą ekranowania przyjmuje się umownie jako zero. W tej skali przesunięcie chemiczne (δ) wyraża się wzorem:</p><p>δ = (B<sub>pr</sub> – B<sub>wz</sub>) / B<sub>pr</sub> × 10<sup>6</sup> [ppm]</p><p>gdzie B<sub>pr</sub> to indukcja pola magnetycznego, przy której następuje rezonans w badanej próbce, a B<sub>wz</sub> – indukcja dla wzorca. Wartość δ podaje się w częściach na milion (ppm), co ułatwia porównywanie widm uzyskanych przy różnych częstościach pracy spektrometru.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"widmo-nmr-etanolu-struktura-subtelna\">Widmo NMR etanolu i struktura subtelna</h3><p>W cząsteczkach zawierających protony w różnym otoczeniu chemicznym każda grupa protonów daje charakterystyczny sygnał o odmiennym przesunięciu chemicznym. Przykładem jest widmo NMR alkoholu etylowego (C<sub>2</sub>H<sub>5</sub>OH). Przy użyciu spektrometru o małej zdolności rozdzielczej obserwuje się trzy pasma odpowiadające protonom grupy hydroksylowej (–OH), metylenowej (–CH<sub>2</sub>–) i metylowej (–CH<sub>3</sub>). Intensywności tych pasm są proporcjonalne do liczby protonów w danej grupie, a więc pozostają w stosunku 1:2:3.</p><p>Zastosowanie spektrometru o wysokiej zdolności rozdzielczej ujawnia, że pasma grup –CH<sub>2</sub>– i –CH<sub>3</sub> składają się z blisko położonych linii, które przy niższej rozdzielczości nakładały się na siebie. To zjawisko nosi nazwę <strong>struktury subtelnej</strong> widma. Powstaje ono w wyniku oddziaływań spinowo-spinowych między protonami sąsiednich grup, które prowadzą do rozszczepienia sygnałów. Analiza takiej struktury dostarcza cennych informacji o liczbie i wzajemnym rozmieszczeniu protonów w cząsteczce.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zastosowania-nmr-chemia-nieorganiczna\">Zastosowania NMR w chemii nieorganicznej</h3><p>Spektroskopia NMR jest niezwykle użytecznym narzędziem nie tylko w chemii organicznej, ale również w chemii nieorganicznej. Dzięki postępowi technicznemu możliwe jest badanie rezonansu jąder takich jak <sup>19</sup>F, <sup>31</sup>P, <sup>14</sup>N czy <sup>13</sup>C, co pozwala na analizę struktury związków nieorganicznych, kompleksów i materiałów. Przesunięcia chemiczne dla tych jąder są charakterystyczne dla danego środowiska chemicznego, co umożliwia identyfikację grup funkcyjnych i określenie symetrii cząsteczek.</p><p>Metoda NMR znajduje szerokie zastosowanie w badaniu kinetyki reakcji, mechanizmów wymiany ligandów, a także w analizie strukturalnej białek i innych biomolekuł. Współczesne spektrometry o wysokim polu magnetycznym i zaawansowane techniki wielowymiarowe (np. COSY, NOESY) pozwalają na szczegółowe określanie przestrzennego rozmieszczenia atomów w cząsteczce, co ma kluczowe znaczenie w projektowaniu leków i materiałów funkcjonalnych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w spektroskopii NMR przesunięcie chemiczne podaje się w odniesieniu do wzorca, a nie jako wartość bezwzględną?",
      "answer": "Ponieważ bezwzględna wartość lokalnego pola magnetycznego (B_e) działającego na jądro nie jest dokładnie znana, a zależy od otoczenia chemicznego. Dlatego przesunięcie chemiczne definiuje się jako różnicę między polem rezonansowym dla próbki a polem dla wzorca (np. TMS), co pozwala na porównywalne i powtarzalne wyniki."
    },
    {
      "question": "Jakie informacje można uzyskać z analizy intensywności sygnałów w widmie NMR etanolu?",
      "answer": "Intensywności sygnałów są proporcjonalne do liczby protonów w danej grupie. W etanolu stosunek intensywności pasm dla grup OH, CH2 i CH3 wynosi 1:2:3, co potwierdza obecność trzech różnych typów protonów w cząsteczce."
    },
    {
      "question": "Co to jest struktura subtelna widma NMR i jakie jest jej źródło?",
      "answer": "Struktura subtelna to rozszczepienie sygnałów na blisko położone linie, obserwowane przy wysokiej zdolności rozdzielczej. Powstaje w wyniku oddziaływań spinowo-spinowych między protonami sąsiednich grup, co prowadzi do multiplikacji sygnałów i dostarcza informacji o wzajemnym rozmieszczeniu protonów."
    }
  ]
};
