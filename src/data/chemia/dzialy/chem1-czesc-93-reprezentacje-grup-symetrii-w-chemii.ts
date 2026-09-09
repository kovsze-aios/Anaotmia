import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_93_reprezentacjeGrupSymetriiWChemiiData: StructuredChapter = {
  "chapterTitle": "Reprezentacje grup symetrii w chemii",
  "toc": [
    {
      "title": "Wprowadzenie do teorii grup w chemii",
      "anchorId": "wprowadzenie-do-teorii-grup-w-chemii"
    },
    {
      "title": "Symetria orbitali molekularnych",
      "anchorId": "symetria-orbitali-molekularnych"
    },
    {
      "title": "Macierzowe reprezentacje operacji symetrii",
      "anchorId": "macierzowe-reprezentacje-operacji-symetrii"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-teorii-grup-w-chemii\">Wprowadzenie do teorii grup w chemii</h3><p>Matematycznym językiem opisu symetrii jest teoria grup. Znajduje ona szerokie zastosowanie w chemii kwantowej, spektroskopii molekularnej oraz w interpretacji właściwości magnetycznych substancji. Szczegółowe omówienie tej teorii wykracza poza ramy niniejszego podręcznika, jednak warto przedstawić najważniejsze wnioski, jakie płyną z jej zastosowania w chemii.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"symetria-orbitali-molekularnych\">Symetria orbitali molekularnych</h3><p>Analiza symetrii cząsteczki nie może ograniczać się wyłącznie do rozmieszczenia jąder atomowych. Musi ona obejmować również rozkład gęstości elektronowej, czyli prawdopodobieństwo napotkania elektronu w różnych obszarach cząsteczki. Zatem orbitale molekularne, jako funkcje falowe opisujące zachowanie elektronów, muszą wykazywać taką samą symetrię jak sama cząsteczka.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"macierzowe-reprezentacje-operacji-symetrii\">Macierzowe reprezentacje operacji symetrii</h3><p>Matematyczny opis operacji symetrii wymaga określenia, jak zmieniają się współrzędne dowolnego punktu podczas danej operacji. Rozważmy przykładowo operacje symetrii należące do punktowej grupy <strong>C<sub>4v</sub></strong>: operację tożsamościową <em>E</em>, obrót wokół osi czterokrotnej <em>C<sub>4</sub></em>, obrót wokół osi dwukrotnej <em>C<sub>2</sub></em> oraz odbicia w płaszczyznach σ<sub>v</sub>(xz) i σ<sub>d</sub>, przy czym ta ostatnia połowi kąt między płaszczyznami xz i yz. Osie <em>C<sub>4</sub></em> i <em>C<sub>2</sub></em> pokrywają się z osią z układu współrzędnych.</p><p>Operacja tożsamościowa nie zmienia położenia punktu P o współrzędnych początkowych (x, y, z). Oznacza to, że współrzędne końcowe (x', y', z') są równe początkowym, co można zapisać za pomocą układu trzech równań:</p><p>x' = x + 0y + 0z<br>y' = 0x + y + 0z<br>z' = 0x + 0y + z</p><p>Z kolei obrót o kąt 90° wokół osi z, wykonany zgodnie z ruchem wskazówek zegara (gdy patrzymy wzdłuż osi z), przenosi punkt P do nowego położenia, co również można opisać odpowiednimi przekształceniami współrzędnych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego orbitale molekularne muszą mieć taką samą symetrię jak cząsteczka?",
      "answer": "Ponieważ gęstość elektronowa, którą opisują orbitale, musi odzwierciedlać symetrię rozmieszczenia jąder, a funkcje falowe elektronów muszą być zgodne z tą symetrią."
    },
    {
      "question": "Jakie operacje symetrii należą do grupy punktowej C4v?",
      "answer": "Do grupy C4v należą: operacja tożsamościowa E, obrót o 90° (C4), obrót o 180° (C2), oraz odbicia w płaszczyznach pionowych σv i σd."
    },
    {
      "question": "Jak można opisać operację tożsamościową za pomocą równań na współrzędne?",
      "answer": "Operację tożsamościową opisują równania: x' = x, y' = y, z' = z, co oznacza, że współrzędne punktu nie ulegają zmianie."
    }
  ]
};
