import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_66_podstawoweNarzedziaITechnikiInzynieriiGenetycznejData: StructuredChapter = {
  "chapterTitle": "Podstawowe narzędzia i techniki inżynierii genetycznej",
  "toc": [
    {
      "title": "Cięcie DNA enzymami restrykcyjnymi",
      "anchorId": "ciecie-dna-enzymami-restrykcyjnymi"
    },
    {
      "title": "Mapowanie miejsc restrykcyjnych",
      "anchorId": "mapowanie-miejsc-restrykcyjnych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"ciecie-dna-enzymami-restrykcyjnymi\">Cięcie DNA enzymami restrykcyjnymi</h3><p>Enzymy restrykcyjne, nazywane również restryktazami, to białka rozpoznające specyficzne, krótkie sekwencje nukleotydowe w dwuniciowym DNA i przecinające obie nici w ściśle określonych miejscach. Dzięki temu narzędziu możliwe jest precyzyjne manipulowanie materiałem genetycznym, co stanowi fundament inżynierii genetycznej.</p><p>Rozważmy przykładowy odcinek DNA o długości 48 par zasad (pz), którego sekwencja przedstawia się następująco:</p><p>5'-AAATTAGCTCGGCCTTAGAATTCAATGTAGTAGCTATGACCTTCGGAT-3'<br>3'-TTTAATCGAGCCGGAATCTTAAGTTACATCATCGATACTGGAAGCCTA-5'</p><p>Zadanie polega na określeniu długości produktów powstałych po działaniu trzech różnych enzymów restrykcyjnych, zarówno osobno, jak i jednocześnie.</p><h4>Krok 1: Identyfikacja miejsc rozpoznawanych</h4><p>Na początku należy zlokalizować w sekwencji miejsca rozpoznawane przez każdy z enzymów. Enzym 1 rozpoznaje sekwencję <strong>5'-GAATTC-3'</strong>, enzym 2 – <strong>5'-AGCT-3'</strong>, a enzym 3 – <strong>5'-CGGCCG-3'</strong>. Analiza sekwencji pokazuje, że nie zawiera ona miejsca dla enzymu 3, dlatego nie przetnie on tego odcinka DNA.</p><h4>Krok 2: Określenie miejsc cięcia</h4><p>Każdy enzym tnie DNA w konkretnym punkcie wewnątrz rozpoznawanej sekwencji. Dla enzymu 1 cięcie następuje między guaniną (G) a adeniną (A), co zapisujemy jako <em>5'-G|AATTC-3'</em>. Enzym 2 tnie między guaniną a cytozyną (C), czyli <em>5'-AG|CT-3'</em>. Po zaznaczeniu tych miejsc na nici DNA otrzymujemy następujący obraz:</p><p>5'-AAATTAG|CTCGGCCTTAG|AATTCAATGTAGTAG|CTATGACCTTCGGAT-3'<br>3'-TTTAATC|GAGCCGGAATCTTAA|GTTACATCATC|GATACTGGAAGCCTA-5'</p><h4>Krok 3: Długość produktów cięcia</h4><p>Po przecięciu przez enzym 1 powstają dwa fragmenty: jeden o długości 18 pz (od początku do miejsca cięcia) i drugi o długości 30 pz (od miejsca cięcia do końca). Enzym 2 generuje trzy fragmenty: o długości 7 pz, 15 pz i 26 pz. Enzym 3 nie powoduje żadnego cięcia, więc cała cząsteczka pozostaje nienaruszona.</p><p>Gdy wszystkie trzy enzymy działają jednocześnie, DNA jest cięte w miejscach rozpoznawanych przez enzymy 1 i 2 (enzym 3 nie ma miejsca). W efekcie powstają cztery fragmenty: o długości 7 pz, 11 pz oraz dwa o długości 15 pz.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"mapowanie-miejsc-restrykcyjnych\">Mapowanie miejsc restrykcyjnych</h3><p>Mapa restrykcyjna to graficzne przedstawienie rozmieszczenia miejsc cięcia dla określonych enzymów restrykcyjnych w obrębie cząsteczki DNA. Tworzy się ją na podstawie analizy wielkości fragmentów powstałych po trawieniu DNA tymi enzymami, zwykle z wykorzystaniem elektroforezy żelowej.</p><p>Rozpatrzmy liniowy fragment chromosomu o długości 8 kpz (kilopar zasad). Po trawieniu enzymem <strong>EcoRI</strong> otrzymujemy trzy odcinki: dwa o długości 2 kpz i jeden o długości 4 kpz. Oznacza to, że w tym fragmencie występują dwa miejsca rozpoznawane przez EcoRI. Z kolei trawienie enzymem <strong>NotI</strong> daje dwa fragmenty: 3 kpz i 5 kpz, co wskazuje na jedno miejsce cięcia dla NotI.</p><p>Gdy oba enzymy zastosujemy jednocześnie, powstają cztery odcinki: jeden o długości 1 kpz, dwa o długości 2 kpz i jeden o długości 3 kpz. Na podstawie tych wyników można ustalić wzajemne położenie miejsc restrykcyjnych. Analiza prowadzi do wniosku, że miejsca EcoRI znajdują się w odległości 2 kpz od lewego końca i 2 kpz od prawego końca, a miejsce NotI leży między nimi, w odległości 3 kpz od lewego końca. Taka mapa restrykcyjna pozwala precyzyjnie określić układ miejsc cięcia w badanym fragmencie DNA.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile fragmentów DNA powstanie po trawieniu podanego odcinka (48 pz) enzymem rozpoznającym sekwencję 5'-GAATTC-3' i tnącym między G a A?",
      "answer": "Powstaną dwa fragmenty: o długości 18 pz i 30 pz."
    },
    {
      "question": "Dlaczego enzym 3 (rozpoznający 5'-CGGCCG-3') nie przeciął analizowanego odcinka DNA?",
      "answer": "Ponieważ sekwencja DNA nie zawiera miejsca rozpoznawanego przez ten enzym."
    },
    {
      "question": "Na czym polega metoda mapowania restrykcyjnego?",
      "answer": "Polega na trawieniu DNA enzymami restrykcyjnymi, rozdzieleniu fragmentów metodą elektroforezy i na podstawie ich długości określeniu liczby i położenia miejsc cięcia w cząsteczce."
    }
  ]
};
