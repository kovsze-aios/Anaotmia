import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_152_elektronowyRezonansParamagnetycznyEprData: StructuredChapter = {
  "chapterTitle": "Elektronowy Rezonans Paramagnetyczny (EPR)",
  "toc": [
    {
      "title": "Podstawy metody EPR",
      "anchorId": "podstawy-metody-epr"
    },
    {
      "title": "Zastosowania i czułość EPR",
      "anchorId": "zastosowania-i-czulosc-epr"
    },
    {
      "title": "Wpływ symetrii otoczenia na kształt sygnału",
      "anchorId": "wpływ-symetrii-otoczenia-na-ksztalt-sygnalu"
    },
    {
      "title": "Struktura nadsubtelna w EPR",
      "anchorId": "struktura-nadsubtelna-w-epr"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"podstawy-metody-epr\">Podstawy metody EPR</h3><p>Elektronowy rezonans paramagnetyczny, oznaczany skrótem EPR (od angielskiego <em>Electron Paramagnetic Resonance</em>), to technika spektroskopowa wykorzystywana do badania cząsteczek i jonów posiadających niesparowane elektrony. Metoda ta opiera się na absorpcji promieniowania mikrofalowego przez próbkę umieszczoną w polu magnetycznym, co prowadzi do przejść między poziomami energetycznymi elektronów.</p><p>Widmo EPR rejestruje się zwykle jako pierwszą pochodną absorpcji względem indukcji magnetycznej B, co pozwala na precyzyjne określenie położenia linii rezonansowych. Sygnał pojedynczy, symetryczny, odpowiada sytuacji, gdy czynnik g jest izotropowy, czyli niezależny od orientacji próbki względem pola magnetycznego.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zastosowania-i-czulosc-epr\">Zastosowania i czułość EPR</h3><p>Spektroskopia EPR znajduje szerokie zastosowanie w badaniach związków metali przejściowych oraz wolnych rodników organicznych i nieorganicznych. Jedną z kluczowych zalet tej metody jest jej wyjątkowa czułość – pozwala ona na wykrycie już około 10<sup>11</sup> niesparowanych elektronów w próbce, co odpowiada ilości rzędu 10<sup>-12</sup> mola elektronów.</p><p>Intensywność sygnału EPR, mierzona jako pole powierzchni pod krzywą absorpcji, jest wprost proporcjonalna do liczby niesparowanych elektronów w próbce. Dzięki kalibracji spektrometru za pomocą wzorców o znanej liczbie spinów możliwe jest ilościowe oznaczanie koncentracji centrów paramagnetycznych w badanych materiałach.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"wpływ-symetrii-otoczenia-na-ksztalt-sygnalu\">Wpływ symetrii otoczenia na kształt sygnału</h3><p>Kształt linii rezonansowych oraz liczba linii w widmie EPR zależą od symetrii otoczenia centrum paramagnetycznego oraz od obecności jąder atomowych posiadających spinowy moment magnetyczny. Gdy pole elektryczne wytwarzane przez otaczające atomy jest słabe lub wykazuje symetrię kulistą bądź regularną (np. grupy O<sub>h</sub> i T<sub>d</sub>), sygnał EPR jest symetryczny i charakteryzuje się jedną wartością czynnika g, niezależną od kierunku.</p><p>W przypadku pól o niższej symetrii, sygnał staje się asymetryczny i składa się z dwóch blisko położonych linii, oddalonych o około 0,01 T przy częstości mikrofal 9,3 GHz. Zjawisko to wynika z anizotropii czynnika g: przyjmuje on wartość g<sub>∥</sub>, gdy linie pola magnetycznego są równoległe do osi symetrii pola elektrycznego, oraz wartość g<sub>⊥</sub>, gdy są do niej prostopadłe.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"struktura-nadsubtelna-w-epr\">Struktura nadsubtelna w EPR</h3><p>Struktura nadsubtelna widma EPR powstaje w wyniku oddziaływania niesparowanych elektronów z momentami magnetycznymi jąder atomowych. Wiele jąder posiada spinowy moment pędu, opisany liczbą kwantową I, która może przyjmować wartości całkowite lub połówkowe. Przykładowo, dla jądra o spinie I = 1/2, moment magnetyczny wyraża się wzorem:</p><p>μ<sub>I</sub> = √(I(I+1)) μ<sub>N</sub> = (√3/2) μ<sub>N</sub>,</p><p>gdzie μ<sub>N</sub> to magneton jądrowy, wynoszący 5,050824·10<sup>-27</sup> J·T<sup>-1</sup>. Oddziaływanie to prowadzi do rozszczepienia linii rezonansowej na kilka składowych, co dostarcza cennych informacji o otoczeniu chemicznym centrum paramagnetycznego.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co oznacza skrót EPR i na czym polega ta metoda?",
      "answer": "EPR to skrót od Electron Paramagnetic Resonance (elektronowy rezonans paramagnetyczny). Metoda polega na absorpcji mikrofal przez próbkę z niesparowanymi elektronami w zewnętrznym polu magnetycznym, co prowadzi do przejść między poziomami energetycznymi elektronów."
    },
    {
      "question": "Jaka jest czułość metody EPR?",
      "answer": "Metoda EPR pozwala wykryć około 10^11 niesparowanych elektronów w próbce, co odpowiada ilości rzędu 10^-12 mola elektronów."
    },
    {
      "question": "Od czego zależy kształt linii w widmie EPR?",
      "answer": "Kształt linii zależy od symetrii otoczenia centrum paramagnetycznego oraz od obecności jąder atomowych ze spinowym momentem magnetycznym. Przy symetrii kulistej lub regularnej sygnał jest symetryczny, przy niższej symetrii – asymetryczny."
    },
    {
      "question": "Co to jest struktura nadsubtelna w EPR?",
      "answer": "Struktura nadsubtelna to rozszczepienie linii rezonansowej na kilka składowych, spowodowane oddziaływaniem niesparowanych elektronów z momentami magnetycznymi jąder atomowych."
    }
  ]
};
