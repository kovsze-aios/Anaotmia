import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_87_elementyIOperacjeSymetriiCzasteczekData: StructuredChapter = {
  "chapterTitle": "Elementy i operacje symetrii cząsteczek",
  "toc": [
    {
      "title": "Definicja symetrii i osie obrotu",
      "anchorId": "definicja-symetrii-i-osie-obrotu"
    },
    {
      "title": "Oś główna i inne osie symetrii",
      "anchorId": "os-glowna-i-inne-osie-symetrii"
    },
    {
      "title": "Operacje i elementy symetrii",
      "anchorId": "operacje-i-elementy-symetrii"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-symetrii-i-osie-obrotu\">Definicja symetrii i osie obrotu</h3><p>Przedmiot symetryczny to taki, który może przyjmować co najmniej dwie różne orientacje w przestrzeni, a mimo to pozostają one nierozróżnialne. W przypadku cząsteczek analizujemy równoważne położenia jąder atomowych. Na przykład płaska cząsteczka trifluorku boru (BF<sub>3</sub>) po obrocie o 120° wokół osi przechodzącej przez środek cząsteczki i prostopadłej do jej płaszczyzny przyjmuje położenie identyczne z wyjściowym.</p><p>Podczas pełnego obrotu o 360° cząsteczka BF<sub>3</sub> trzykrotnie osiąga położenia nierozróżnialne, dlatego oś tę nazywamy osią symetrii trójkrotną. Ogólnie, jeśli cząsteczka podczas pełnego obrotu wokół pewnej osi przechodzi <em>n</em> razy w położenia nierozróżnialne, to oś tę określamy mianem osi symetrii <em>n</em>-krotnej. Kąt obrotu, o jaki należy obrócić cząsteczkę, aby uzyskać położenie równoważne, wynosi α = 360°/n. Oś <em>n</em>-krotną oznacza się symbolem C<sub>n</sub>, przy czym dla osi dwukrotnej stosuje się zapis C<sub>2</sub>, dla trójkrotnej C<sub>3</sub>, dla czterokrotnej C<sub>4</sub> itd.</p><p>W cząsteczkach liniowych, takich jak dwutlenek węgla (CO<sub>2</sub>), obrót wokół osi przechodzącej przez wszystkie jądra atomowe o dowolny kąt prowadzi do położenia nierozróżnialnego. Taką oś symetrii oznacza się symbolem C<sub>∞</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"os-glowna-i-inne-osie-symetrii\">Oś główna i inne osie symetrii</h3><p>Cząsteczka może posiadać kilka różnych osi symetrii. Na przykład BF<sub>3</sub> oprócz osi trójkrotnej C<sub>3</sub> ma również trzy osie dwukrotne C<sub>2</sub>, leżące w płaszczyźnie cząsteczki, w której znajdują się wszystkie cztery jądra atomowe. Oś symetrii o najwyższej krotności, czyli w tym przypadku oś trójkrotna, nazywana jest <strong>osią główną</strong>.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"operacje-i-elementy-symetrii\">Operacje i elementy symetrii</h3><p>Obrót cząsteczki wokół określonej osi, który przeprowadza ją w położenie równoważne (nierozróżnialne od początkowego), stanowi <strong>operację symetrii</strong>. Oś, wokół której wykonuje się obrót, jest natomiast <strong>elementem symetrii</strong>. Innymi operacjami symetrii są: odbicie w płaszczyźnie symetrii oraz inwersja względem środka symetrii. Elementami symetrii, czyli geometrycznymi bytami, względem których wykonuje się te operacje, są płaszczyzna symetrii oraz środek symetrii.</p><p>W tabeli poniżej zestawiono najważniejsze elementy i odpowiadające im operacje symetrii.</p><ul><li><strong>Oś C<sub>n</sub></strong> – oś symetrii <em>n</em>-krotnej (oś główna to oś o najwyższej krotności); operacją jest obrót o kąt 360°/n.</li><li><strong>Płaszczyzna σ</strong> – płaszczyzna symetrii; operacją jest odbicie w tej płaszczyźnie.</li><li><strong>Płaszczyzna σ<sub>h</sub></strong> – płaszczyzna symetrii prostopadła do osi głównej (horyzontalna).</li><li><strong>Płaszczyzna σ<sub>v</sub></strong> – płaszczyzna symetrii zawierająca oś główną (wertykalna).</li><li><strong>Płaszczyzna σ<sub>d</sub></strong> – płaszczyzna symetrii przebiegająca między dwiema osiami dwukrotnymi, prostopadła do osi głównej (diagonalna).</li><li><strong>Oś przemienna S<sub>n</sub></strong> – oś symetrii <em>n</em>-krotnej; operacją jest złożenie obrotu o kąt 360°/n z odbiciem w płaszczyźnie prostopadłej do osi obrotu.</li><li><strong>Środek symetrii (i)</strong> – punkt, względem którego wykonuje się inwersję; operacja inwersji przekształca punkt o współrzędnych (x, y, z) w punkt (−x, −y, −z).</li><li><strong>Element tożsamościowy (E)</strong> – operacja tożsamościowa polega na obrocie o 360° wokół dowolnej osi, co pozostawia ciało bez zmian.</li></ul>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Czym jest oś główna symetrii cząsteczki?",
      "answer": "Oś główna to oś symetrii o najwyższej krotności w danej cząsteczce, np. oś C3 w cząsteczce BF3."
    },
    {
      "question": "Jaką operację symetrii wykonuje się względem płaszczyzny symetrii?",
      "answer": "Operacją symetrii względem płaszczyzny symetrii jest odbicie cząsteczki w tej płaszczyźnie."
    },
    {
      "question": "Co to jest oś przemienna Sn?",
      "answer": "Oś przemienna Sn to element symetrii, dla którego operacją jest złożenie obrotu o kąt 360°/n oraz odbicia w płaszczyźnie prostopadłej do osi obrotu."
    }
  ]
};
