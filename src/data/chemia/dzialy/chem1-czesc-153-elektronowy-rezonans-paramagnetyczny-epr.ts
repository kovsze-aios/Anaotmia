import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_153_elektronowyRezonansParamagnetycznyEprData: StructuredChapter = {
  "chapterTitle": "Elektronowy rezonans paramagnetyczny (EPR)",
  "toc": [
    {
      "title": "Podstawy fizyczne EPR",
      "anchorId": "podstawy-fizyczne-epr"
    },
    {
      "title": "Struktura nadsubtelna widma EPR",
      "anchorId": "struktura-nadsubtelna-widma-epr"
    },
    {
      "title": "Liczba linii w strukturze nadsubtelnej",
      "anchorId": "liczba-linii-w-strukturze-nadsubtelnej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"podstawy-fizyczne-epr\">Podstawy fizyczne EPR</h3><p>Elektronowy rezonans paramagnetyczny (EPR) jest techniką spektroskopową wykorzystującą fakt, że elektrony niesparowane posiadają spinowy moment pędu, który w zewnętrznym polu magnetycznym może przyjmować tylko określone orientacje. Dla elektronu spinowa liczba kwantowa wynosi 1/2, co prowadzi do dwóch możliwych stanów energetycznych, różniących się wartością rzutu spinu na kierunek pola. Przejścia między tymi stanami zachodzą, gdy energia dostarczana przez promieniowanie elektromagnetyczne o odpowiedniej częstotliwości równa się różnicy energii między poziomami Zeemana.</p><p>W przypadku, gdy niesparowany elektron znajduje się w pobliżu jądra atomowego o niezerowym spinie jądrowym, dochodzi do oddziaływania nadsubtelnego. Oddziaływanie to modyfikuje lokalne pole magnetyczne odczuwane przez elektron, co prowadzi do rozszczepienia linii rezonansowej. Dla jądra o spinie jądrowym I = 1/2, np. protonu, możliwe są dwie orientacje spinu jądrowego względem zewnętrznego pola. W rezultacie elektron doświadcza lokalnego pola o indukcji B<sub>lok</sub> = B<sub>0</sub> ± a, gdzie a jest stałą sprzężenia nadsubtelnego, a B<sub>0</sub> to indukcja, przy której wystąpiłby rezonans bez oddziaływania nadsubtelnego.</p><p>Konsekwencją tego rozszczepienia jest pojawienie się dwóch linii rezonansowych w widmie EPR, odpowiadających dwóm możliwym orientacjom spinu jądrowego. Odległość między tymi liniami jest równa 2a, co dla typowych wartości stałej sprzężenia nadsubtelnego (np. 0,0502 T przy częstotliwości 9,3 GHz) prowadzi do obserwacji charakterystycznego dubletu. Zjawisko to nosi nazwę struktury nadsubtelnej widma EPR.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"struktura-nadsubtelna-widma-epr\">Struktura nadsubtelna widma EPR</h3><p>Struktura nadsubtelna widma EPR dostarcza cennych informacji o otoczeniu chemicznym niesparowanego elektronu. Liczba linii w widmie zależy od spinowej liczby kwantowej jądra, z którym elektron oddziałuje. Dla jądra o spinie I, liczba możliwych orientacji spinowych wynosi 2I + 1, co bezpośrednio przekłada się na liczbę składowych struktury nadsubtelnej.</p><p>Przykładowo, dla elektronu zlokalizowanego na atomie azotu <sup>14</sup>N, który ma spin jądrowy I = 1, liczba linii wynosi 2·1 + 1 = 3. Jednak w rzeczywistości, ze względu na degenerację poziomów energetycznych, obserwuje się więcej linii. W przypadku jonu Mn<sup>2+</sup>, który ma spin jądrowy I = 5/2, struktura nadsubtelna składa się z 6 linii, co jest zgodne z regułą 2I + 1 = 6.</p><p>Dodatkowe rozszczepienie może wystąpić, gdy elektron niesparowany jest delokalizowany i oddziałuje z kilkoma jądrami o niezerowym spinie. Wówczas liczba linii wzrasta, a analiza widma pozwala na określenie liczby jąder, z którymi elektron oddziałuje, oraz wartości stałych sprzężenia nadsubtelnego. Dzięki temu technika EPR jest niezwykle użyteczna w badaniach struktury cząsteczek, w tym centrów aktywnych enzymów, kompleksów metali przejściowych i defektów w ciałach stałych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"liczba-linii-w-strukturze-nadsubtelnej\">Liczba linii w strukturze nadsubtelnej</h3><p>Ogólna zasada mówi, że liczba linii w strukturze nadsubtelnej widma EPR jest równa 2I + 1, gdzie I jest spinową liczbą kwantową jądra. Jednak w przypadku oddziaływania elektronu z wieloma równoważnymi jądrami, liczba linii może być większa i zależy od liczby jąder oraz ich spinów. Dla n równoważnych jąder o spinie I, liczba linii wynosi 2nI + 1, ale często obserwuje się wzorce intensywności zgodne z trójkątem Pascala.</p><p>Analiza struktury nadsubtelnej pozwala na wyciąganie wniosków dotyczących delokalizacji elektronu w cząsteczce. Jeśli elektron jest zlokalizowany w pobliżu jednego jądra, widmo wykazuje prosty dublet (dla I = 1/2) lub multiplet. Gdy elektron jest rozłożony na kilka atomów, widmo staje się bardziej skomplikowane, co umożliwia określenie, które atomy w cząsteczce biorą udział w tworzeniu orbitalu molekularnego zawierającego niesparowany elektron.</p><p>Podsumowując, struktura nadsubtelna widma EPR jest niezwykle czułym wskaźnikiem lokalnego środowiska elektronu. Dzięki precyzyjnym pomiarom stałych sprzężenia nadsubtelnego można wnioskować o charakterze wiązań chemicznych, rozkładzie gęstości spinowej oraz dynamice molekularnej. To czyni EPR jedną z kluczowych metod spektroskopowych w chemii nieorganicznej i biochemii.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile linii w strukturze nadsubtelnej widma EPR obserwuje się dla elektronu oddziałującego z jądrem o spinie I = 1?",
      "answer": "Dla jądra o spinie I = 1 liczba linii wynosi 2I + 1 = 3."
    },
    {
      "question": "Co powoduje rozszczepienie linii rezonansowej w widmie EPR?",
      "answer": "Rozszczepienie jest spowodowane oddziaływaniem nadsubtelnym elektronu z jądrem o niezerowym spinie, które modyfikuje lokalne pole magnetyczne."
    },
    {
      "question": "Jak zmienia się liczba linii w strukturze nadsubtelnej, gdy elektron jest delokalizowany na kilku jądrach?",
      "answer": "Liczba linii wzrasta, ponieważ elektron oddziałuje z wieloma jądrami, co prowadzi do bardziej złożonego wzorca rozszczepienia."
    }
  ]
};
