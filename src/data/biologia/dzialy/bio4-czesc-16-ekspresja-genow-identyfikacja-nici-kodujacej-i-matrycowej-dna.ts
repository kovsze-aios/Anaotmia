import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_16_ekspresjaGenowIdentyfikacjaNiciKodujacejIMatrycowejDnaData: StructuredChapter = {
  "chapterTitle": "Ekspresja genów: identyfikacja nici kodującej i matrycowej DNA",
  "toc": [
    {
      "title": "Określanie nici na podstawie ramki odczytu",
      "anchorId": "okreslanie-nici-na-podstawie-ramki-odczytu"
    },
    {
      "title": "Określanie nici na podstawie kierunku transkrypcji",
      "anchorId": "okreslanie-nici-na-podstawie-kierunku-transkrypcji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"okreslanie-nici-na-podstawie-ramki-odczytu\">Określanie nici na podstawie ramki odczytu</h3><p>W komórce informacja genetyczna jest zapisana w dwóch komplementarnych niciach DNA. Jedna z nich, zwana <strong>nicią kodującą</strong> (ang. coding strand), ma sekwencję identyczną z sekwencją mRNA (z wyjątkiem tyminy zamiast uracylu). Druga, <strong>nić matrycowa</strong> (ang. template strand), służy jako matryca do syntezy RNA. Aby ustalić, która nić pełni którą funkcję, można wykorzystać analizę ramki odczytu.</p><p>Ramka odczytu to ciąg kodonów w nici kodującej, rozpoczynający się kodonem START (zwykle AUG w mRNA, a w DNA ATG) i kończący się kodonem STOP (np. TAA, TAG, TGA). Poniższy przykład ilustruje, jak na podstawie obecności ramki odczytu zidentyfikować nić kodującą i matrycową.</p><p><strong>Przykład:</strong> Gen koduje peptyd złożony z siedmiu aminokwasów. Mamy dwie nici DNA:</p><ul><li>Nić 1: AACGCGCTAGTAATGCCCGTCATAAAGACTTTCTGAAAGGGCGC</li><li>Nić 2: TTGCGCGATCATTACGGGCAGTATTTCTGAAAGACTTTCCCGCG</li></ul><p><strong>Krok 1:</strong> Przeszukujemy obie nici w poszukiwaniu kodonu START (ATG), czytając sekwencję od lewej do prawej, a następnie od prawej do lewej (na obu niciach). W tym przykładzie kodon START (ATG) znajduje się w nici 1, w pozycji odpowiadającej fragmentowi „ATG” (zaznaczonemu pogrubieniem). W nici 2 nie ma sekwencji ATG w żadnym kierunku, która tworzyłaby poprawną ramkę.</p><p><strong>Krok 2:</strong> Od znalezionego kodonu START czytamy sekwencję nici 1 trójkami nukleotydów, sprawdzając, czy po siedmiu kodonach (kodujących siedem aminokwasów) pojawi się kodon STOP. W nici 1 po kodonach: ATG, CCC, GTC, ATA, AAG, ACT, TTC – następuje kodon TGA, który jest kodonem STOP. W nici 2 nie znajdujemy takiej ramki, która zaczynałaby się od ATG i kończyła kodonem STOP po siedmiu kodonach.</p><p><strong>Krok 3:</strong> Ponieważ tylko nić 1 zawiera kompletną ramkę odczytu (START → 7 kodonów → STOP), jest ona <strong>nicią kodującą</strong>. Nić 2, komplementarna do nici 1, jest <strong>nicią matrycową</strong>.</p><p><strong>Odpowiedź:</strong></p><ul><li>Nić 1 (kodująca): 5' AACGCGCTAGTAATGCCCGTCATAAAGACTTTCTGAAAGGGCGC 3'</li><li>Nić 2 (matrycowa): 3' TTGCGCGATCATTACGGGCAGTATTTCTGAAAGACTTTCCCGCG 5'</li></ul>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"okreslanie-nici-na-podstawie-kierunku-transkrypcji\">Określanie nici na podstawie kierunku transkrypcji</h3><p>Inną metodą identyfikacji nici kodującej i matrycowej jest analiza kierunku transkrypcji. Polimeraza RNA syntetyzuje mRNA w kierunku 5' → 3', a matrycą jest nić DNA o przeciwnej polarności, czyli 3' → 5'. Nić kodująca ma taką samą sekwencję jak mRNA (z wyjątkiem T zamiast U) i jest komplementarna do nici matrycowej.</p><p><strong>Przykład:</strong> Rozważmy ten sam gen, ale z zaznaczoną polarnością nici oraz kierunkiem transkrypcji (strzałka).</p><ul><li>Nić 1: 5' AACGCGCTAGTAATGCCCGTCATAAAGACTTTCTGAAAGGGCGC 3'</li><li>Nić 2: 3' TTGCGCGATCATTACGGGCAGTATTTCTGAAAGACTTTCCCGCG 5'</li></ul><p>Strzałka wskazuje kierunek transkrypcji – od lewej do prawej.</p><p><strong>Krok 1:</strong> Na obu końcach strzałki transkrypcji umieszczamy polarność mRNA: na początku (strona 5') i na końcu (strona 3'). Ponieważ mRNA jest syntetyzowane w kierunku 5' → 3', to koniec, w którym znajduje się koniec 5' mRNA, odpowiada końcowi 3' nici matrycowej.</p><p><strong>Krok 2:</strong> Sprawdzamy polarność obu nici DNA. Nić 2 ma polarność 3' → 5' (od lewej do prawej), więc to ona może służyć jako matryca dla polimerazy RNA, która porusza się wzdłuż nici od 3' do 5'. Zatem nić 2 jest <strong>nicią matrycową</strong>. Nić 1, komplementarna do nici 2, jest <strong>nicią kodującą</strong>.</p><p><strong>Odpowiedź:</strong></p><ul><li>Nicią kodującą jest nić 1.</li><li>Nicią matrycową jest nić 2.</li></ul><p>Podsumowując, obie metody – analiza ramki odczytu oraz kierunek transkrypcji – prowadzą do tego samego wniosku: nić 1 pełni funkcję nici kodującej, a nić 2 – matrycowej. Zrozumienie tych zależności jest kluczowe dla poprawnego przewidywania sekwencji mRNA i białek na podstawie sekwencji DNA.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Która nić DNA jest matrycą do syntezy mRNA?",
      "answer": "Nić matrycowa, która ma polarność 3' → 5' względem kierunku transkrypcji."
    },
    {
      "question": "Jaka jest sekwencja mRNA powstałego z nici matrycowej o sekwencji 3' TAC GGG CAG TAT TTC TGA 5'?",
      "answer": "mRNA: 5' AUG CCC GUC AUA AAG ACU 3' (odpowiada to fragmentowi nici kodującej)."
    }
  ]
};
