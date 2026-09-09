import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_68_podstawoweNarzedziaITechnikiInzynieriiGenetycznejData: StructuredChapter = {
  "chapterTitle": "Podstawowe narzędzia i techniki inżynierii genetycznej",
  "toc": [
    {
      "title": "Zastosowanie metody PCR",
      "anchorId": "zastosowanie-metody-pcr"
    },
    {
      "title": "Wybrane warianty metody PCR",
      "anchorId": "wybrane-warianty-metody-pcr"
    },
    {
      "title": "Zalety i wady reakcji łańcuchowej polimerazy",
      "anchorId": "zalety-i-wady-reakcji-lancuchowej-polimerazy"
    },
    {
      "title": "Sekwencjonowanie DNA",
      "anchorId": "sekwencjonowanie-dna"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"zastosowanie-metody-pcr\">Zastosowanie metody PCR</h3><p>Metoda łańcuchowej reakcji polimerazy (PCR, od ang. <em>polymerase chain reaction</em>) znalazła szerokie zastosowanie w wielu dziedzinach nauki i medycyny. Dzięki niej możliwe jest powielanie nawet śladowych ilości materiału genetycznego, co wykorzystuje się m.in. w <strong>kryminalistyce</strong>, <strong>medycynie sądowej</strong> i <strong>paleontologii</strong> do analizy próbek starożytnego DNA.</p><p>W <strong>diagnostyce chorób dziedzicznych</strong> PCR umożliwia wykrywanie mutacji genowych odpowiedzialnych za wystąpienie schorzeń. Z kolei w <strong>diagnostyce chorób zakaźnych</strong> metoda ta pozwala na identyfikację materiału genetycznego drobnoustrojów chorobotwórczych, takich jak wirusy czy bakterie, nawet gdy ich liczba w próbce jest bardzo mała.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wybrane-warianty-metody-pcr\">Wybrane warianty metody PCR</h3><p>Od czasu opracowania PCR w latach 80. XX wieku powstało wiele jej wariantów, które rozszerzyły możliwości tej techniki. Do najważniejszych należą <strong>RT-PCR</strong> oraz <strong>PCR-ASA</strong>.</p><h4>RT-PCR</h4><p>RT-PCR (od ang. <em>reverse transcription PCR</em>) to reakcja łańcuchowa polimerazy z odwrotną transkrypcją, służąca do wykrywania cząsteczek RNA w materiale biologicznym. W pierwszym etapie przeprowadza się odwrotną transkrypcję, czyli syntezę komplementarnej nici DNA na matrycy RNA przy udziale enzymu <strong>odwrotnej transkryptazy</strong>. Powstały w ten sposób <strong>cDNA</strong> (od ang. <em>complementary DNA</em>) jest następnie przekształcany w formę dwuniciową i powielany w standardowej reakcji PCR.</p><p>RT-PCR znajduje zastosowanie w diagnostyce medycznej, m.in. do wykrywania wirusa HIV oraz wirusa SARS-CoV-2, odpowiedzialnego za COVID-19.</p><h4>PCR-ASA</h4><p>PCR-ASA (od ang. <em>allele-specific amplification</em>) to metoda pozwalająca na odróżnienie prawidłowego allelu genu od allelu zawierającego mutację punktową. Znane mutacje punktowe umożliwiają zaprojektowanie odpowiednich starterów, które specyficznie amplifikują zarówno wariant prawidłowy, jak i zmutowany. Dzięki temu możliwe jest wykrycie nosicielstwa mutacji, np. w diagnostyce <strong>mukowiscydozy</strong>.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zalety-i-wady-reakcji-lancuchowej-polimerazy\">Zalety i wady reakcji łańcuchowej polimerazy</h3><p>Metoda PCR, mimo swojej powszechności, ma zarówno zalety, jak i ograniczenia. Do jej głównych atutów należą:</p><ul><li>szybkość przeprowadzenia reakcji,</li><li>niski koszt w porównaniu z innymi technikami,</li><li>możliwość powielenia bardzo małej ilości DNA matrycowego,</li><li>brak konieczności znajomości pełnej sekwencji genu – wystarczy znać sekwencje początkową i końcową, aby zaprojektować startery.</li></ul><p>Jednakże metoda ta ma również wady. Próbki mogą zostać łatwo zanieczyszczone obcym DNA, co prowadzi do fałszywych wyników. Ponadto długość powielanych fragmentów DNA jest ograniczona – zwykle do około 10 tysięcy par zasad (pz), a w szczególnych przypadkach do 40 tysięcy pz.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"sekwencjonowanie-dna\">Sekwencjonowanie DNA</h3><p><strong>Sekwencjonowanie DNA</strong> to technika pozwalająca na ustalenie dokładnej kolejności nukleotydów w cząsteczce DNA lub jej fragmencie. Obecnie proces ten jest w pełni zautomatyzowany i umożliwia odczytanie od 400 do 1000 nukleotydów w pojedynczej reakcji. Sekwencjonowanie wykorzystuje się m.in. do weryfikacji poprawności PCR, a także do ustalania sekwencji pojedynczych genów lub całych genomów organizmów.</p><h4>Przebieg sekwencjonowania metodą terminacji łańcucha</h4><p>Jedną z podstawowych metod sekwencjonowania jest <strong>metoda terminacji łańcucha</strong>, która łączy techniki PCR i elektroforezy DNA. W metodzie tej stosuje się specjalnie oznakowane <strong>dideoksynukleotydy</strong> – wolne nukleotydy pozbawione grupy hydroksylowej (-OH) w pozycji 3' deoksyrybozy. Brak tej grupy uniemożliwia utworzenie wiązania fosfodiestrowego, co powoduje zatrzymanie syntezy nowej nici DNA po włączeniu dideoksynukleotydu.</p><p>W trakcie reakcji polimeraza DNA syntetyzuje nową nić komplementarną do matrycy, zaczynając od startera. Gdy wbudowany zostanie dideoksynukleotyd, synteza urywa się, w wyniku czego powstaje wiele cząsteczek jednoniciowego DNA o różnej długości, zakończonych dideoksynukleotydami. Następnie cząsteczki te są rozdzielane podczas elektroforezy, a detektor odczytuje, który dideoksynukleotyd znajduje się na końcu każdej z nich. Na podstawie tych danych komputer odtwarza sekwencję badanego fragmentu DNA.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Do czego służy metoda RT-PCR?",
      "answer": "RT-PCR służy do wykrywania cząsteczek RNA w materiale biologicznym. Pierwszym etapem jest odwrotna transkrypcja, w wyniku której na matrycy RNA powstaje cDNA, a następnie jest on powielany w reakcji PCR."
    },
    {
      "question": "Na czym polega metoda PCR-ASA?",
      "answer": "PCR-ASA (amplifikacja specyficzna względem allelu) pozwala odróżnić prawidłowy allel genu od allelu z mutacją punktową. Dzięki zastosowaniu odpowiednich starterów możliwe jest wykrycie zarówno alleli prawidłowych, jak i zmutowanych, np. w diagnostyce mukowiscydozy."
    },
    {
      "question": "Jakie są główne zalety metody PCR?",
      "answer": "Do głównych zalet PCR należą: szybkość, niski koszt, możliwość powielenia bardzo małych ilości DNA oraz brak konieczności znajomości pełnej sekwencji genu – wystarczy znać sekwencje flankujące."
    },
    {
      "question": "Jakie są ograniczenia metody PCR?",
      "answer": "Ograniczenia PCR to ryzyko zanieczyszczenia próbek obcym DNA oraz ograniczona długość amplifikowanych fragmentów – zwykle do 10 tys. pz, a w szczególnych przypadkach do 40 tys. pz."
    },
    {
      "question": "Na czym polega sekwencjonowanie DNA metodą terminacji łańcucha?",
      "answer": "Metoda terminacji łańcucha wykorzystuje dideoksynukleotydy, które po włączeniu do nowo syntetyzowanej nici DNA zatrzymują jej wydłużanie. Powstają w ten sposób fragmenty o różnej długości, które są rozdzielane elektroforetycznie, a detektor odczytuje sekwencję na podstawie ostatniego dideoksynukleotydu."
    }
  ]
};
