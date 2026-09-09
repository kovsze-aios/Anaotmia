import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_168_entalpiaSwobodnaIPrawoDzialaniaMasData: StructuredChapter = {
  "chapterTitle": "Entalpia swobodna i prawo działania mas",
  "toc": [
    {
      "title": "Kierunek procesów samorzutnych",
      "anchorId": "kierunek-procesow-samorzutnych"
    },
    {
      "title": "Praca maksymalna a entalpia swobodna",
      "anchorId": "praca-maksymalna-a-entalpia-swobodna"
    },
    {
      "title": "Ogólna postać prawa działania mas",
      "anchorId": "ogolna-postac-prawa-dzialania-mas"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"kierunek-procesow-samorzutnych\">Kierunek procesów samorzutnych</h3><p>Druga zasada termodynamiki dostarcza kryteriów pozwalających przewidzieć, w którą stronę będą przebiegać procesy samorzutne. W przypadku procesów izobaryczno-izotermicznych, czyli zachodzących pod stałym ciśnieniem i w stałej temperaturze, kluczową rolę odgrywa zmiana entalpii swobodnej układu (ΔG).</p><p>Gdy reakcja chemiczna przebiega samorzutnie, entalpia swobodna układu maleje, co oznacza, że ΔG przyjmuje wartość ujemną (ΔG &lt; 0). Jeśli natomiast chcemy przeprowadzić reakcję w kierunku przeciwnym do samorzutnego, musimy dostarczyć do układu energię w postaci pracy, a wtedy ΔG &gt; 0. Gdy ΔG = 0, układ znajduje się w stanie równowagi – nie jest wykonywana żadna praca netto, a stężenia reagentów pozostają stałe w czasie.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"praca-maksymalna-a-entalpia-swobodna\">Praca maksymalna a entalpia swobodna</h3><p>Zmianę entalpii swobodnej można interpretować fizycznie jako maksymalną pracę, jaką układ może wykonać podczas przemiany samorzutnej. Analogią jest staczająca się kula lub wagonik kolejki linowej – ich ruch w dół może napędzać urządzenia i wykonywać pracę, ale tylko w warunkach idealnych, bez tarcia, praca ta osiąga wartość maksymalną, równą ubytkowi energii potencjalnej.</p><p>W termodynamice chemicznej proces odwracalny, prowadzony w sposób quasi-statyczny, pozwala uzyskać pracę maksymalną. Praca oddana przez układ jest wówczas ujemna (zgodnie z konwencją znaków). Aby odwrócić proces samorzutny, należy dostarczyć co najmniej taką samą ilość pracy, co odpowiada wzrostowi entalpii swobodnej. Przykładem praktycznego wykorzystania reakcji chemicznej do wytwarzania pracy są ogniwa elektrochemiczne, w których energia reakcji utleniania-redukcji jest zamieniana na pracę elektryczną.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"ogolna-postac-prawa-dzialania-mas\">Ogólna postać prawa działania mas</h3><p>Rozważmy reakcję chemiczną osiągającą stan równowagi, którą można zapisać ogólnym równaniem: aA + bB ⇌ cC + dD, gdzie a, b, c, d są współczynnikami stechiometrycznymi, a A, B, C, D – reagentami. W stanie równowagi stężenia (a dokładniej ułamki molowe) tych substancji spełniają zależność znaną jako prawo działania mas, sformułowane przez Guldberga i Waagego w 1867 roku.</p><p>Zgodnie z tym prawem, w stałej temperaturze iloraz iloczynu ułamków molowych produktów podniesionych do potęg równych ich współczynnikom stechiometrycznym przez analogiczny iloczyn dla substratów jest wielkością stałą. Stała ta, oznaczana jako K<sub>x</sub>, charakteryzuje daną reakcję w określonych warunkach. Prawo działania mas znajduje zastosowanie nie tylko do reakcji homogenicznych, ale także do równowag fazowych i przemian fazowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki warunek musi być spełniony, aby reakcja chemiczna przebiegała samorzutnie w warunkach izobaryczno-izotermicznych?",
      "answer": "Zmiana entalpii swobodnej (ΔG) musi być ujemna (ΔG < 0)."
    },
    {
      "question": "Co oznacza wartość ΔG = 0 w kontekście reakcji chemicznej?",
      "answer": "Oznacza, że układ znajduje się w stanie równowagi – stężenia reagentów nie zmieniają się w czasie, a praca netto nie jest wykonywana."
    },
    {
      "question": "Jak brzmi ogólna postać prawa działania mas dla reakcji aA + bB ⇌ cC + dD?",
      "answer": "W stanie równowagi iloczyn ułamków molowych produktów podniesionych do odpowiednich potęg podzielony przez iloczyn ułamków molowych substratów podniesionych do odpowiednich potęg jest stały: (x_C^c * x_D^d) / (x_A^a * x_B^b) = K_x."
    }
  ]
};
