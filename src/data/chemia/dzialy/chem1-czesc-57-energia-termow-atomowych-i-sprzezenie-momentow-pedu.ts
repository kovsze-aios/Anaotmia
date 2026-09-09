import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_57_energiaTermowAtomowychISprzezenieMomentowPeduData: StructuredChapter = {
  "chapterTitle": "Energia termów atomowych i sprzężenie momentów pędu",
  "toc": [
    {
      "title": "Reguły Hunda i porządek termów",
      "anchorId": "reguly-hunda"
    },
    {
      "title": "Przykład konfiguracji d²",
      "anchorId": "przyklad-d2"
    },
    {
      "title": "Oddziaływania elektronów i poziomy energetyczne",
      "anchorId": "oddzialywania-elektronow"
    },
    {
      "title": "Kwantowanie przestrzenne momentu pędu",
      "anchorId": "kwantowanie-przestrzenne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"reguly-hunda\">Reguły Hunda i porządek termów</h3><p>W ramach danej konfiguracji elektronowej możliwe są różne sposoby sprzężenia spinowych i orbitalnych momentów pędu elektronów. Prowadzi to do powstania stanów kwantowych opisanych wypadkowymi liczbami kwantowymi <em>S</em>, <em>L</em> oraz <em>J</em>. Stany te, nazywane termami atomowymi, charakteryzują się zróżnicowaną energią.</p><p>Kolejność energetyczną termów dla ustalonej konfiguracji określają reguły Hunda. Zgodnie z nimi:</p><ol><li>Najniższą energię ma term o najwyższej multipletowości, czyli największej wartości spinowej liczby kwantowej <em>S</em>.</li><li>Spośród termów o jednakowej multipletowości niższa energia odpowiada temu o większej wartości orbitalnej liczby kwantowej <em>L</em>.</li><li>Przy ustalonych <em>S</em> i <em>L</em>, dla podpowłok zapełnionych mniej niż w połowie, najniższą energię wykazuje term o mniejszej wartości <em>J</em>. Natomiast gdy podpowłoka (np. <em>p</em> lub <em>d</em>) jest zapełniona w więcej niż połowie, niższą energię ma term o większej wartości <em>J</em>.</li></ol>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyklad-d2\">Przykład konfiguracji d²</h3><p>Rozpatrzmy konfigurację <em>d</em><sup>2</sup>. Z zestawienia termów wynika, że możliwe są stany: <sup>1</sup>S, <sup>1</sup>D, <sup>1</sup>G, <sup>3</sup>P oraz <sup>3</sup>F. Najwyższą multipletowość (równą 3) mają termy <sup>3</sup>P i <sup>3</sup>F, zatem ich energia jest niższa niż termów singletowych. Pomiędzy termami trypletowymi niższą energię ma <sup>3</sup>F, ponieważ odpowiada większej wartości <em>L</em> (= 3) w porównaniu z <sup>3</sup>P (<em>L</em> = 1).</p><p>Term <sup>3</sup>F rozszczepia się na trzy składowe różniące się liczbą <em>J</em>: <sup>3</sup>F<sub>2</sub>, <sup>3</sup>F<sub>3</sub> oraz <sup>3</sup>F<sub>4</sub>. Ponieważ podpowłoka <em>d</em> jest zapełniona mniej niż w połowie, najniższą energię spośród nich ma <sup>3</sup>F<sub>2</sub>. Jest to zarazem term o najniższej energii w całej konfiguracji <em>d</em><sup>2</sup>, określany mianem termu podstawowego.</p><p>Pełna kolejność termów dla konfiguracji <em>d</em><sup>2</sup> według wzrastającej energii przedstawia się następująco: <sup>3</sup>F<sub>2</sub> &lt; <sup>3</sup>F<sub>3</sub> &lt; <sup>3</sup>F<sub>4</sub> &lt; <sup>3</sup>P<sub>0</sub> &lt; <sup>3</sup>P<sub>1</sub> &lt; <sup>3</sup>P<sub>2</sub> &lt; <sup>1</sup>G<sub>4</sub> &lt; <sup>1</sup>D<sub>2</sub> &lt; <sup>1</sup>S<sub>0</sub>.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"oddzialywania-elektronow\">Oddziaływania elektronów i poziomy energetyczne</h3><p>Wcześniej, omawiając konfiguracje elektronowe, pomijaliśmy oddziaływania między elektronami odpowiedzialne za sprzężenie ich momentów pędu. W takim uproszczonym modelu każdej konfiguracji przypisywano jeden poziom energetyczny. W rzeczywistości oddziaływania te prowadzą do rozszczepienia poziomów na wiele stanów o różnej energii.</p><p>Rozpatrzmy atom węgla z dwoma elektronami na podpowłoce <em>p</em>. Uwzględnienie odpychania kulombowskiego między elektronami oraz sprzężenia ich spinowych i orbitalnych momentów pędu daje trzy termy: <sup>3</sup>P, <sup>1</sup>D oraz <sup>1</sup>S. Termy te różnią się wartościami <em>S</em> i <em>L</em>, a ich względne energie są zgodne z regułami Hunda.</p><p>Dalsze uszczegółowienie wymaga uwzględnienia sprzężenia wypadkowego orbitalnego momentu pędu z wypadkowym spinowym momentem pędu. W wyniku tego sprzężenia powstaje całkowity moment pędu elektronów, opisany liczbą kwantową <em>J</em>. Dla termu <sup>3</sup>P możliwe są trzy wartości <em>J</em> (0, 1, 2), co prowadzi do trzech blisko położonych poziomów energetycznych, oznaczanych jako <sup>3</sup>P<sub>0</sub>, <sup>3</sup>P<sub>1</sub> i <sup>3</sup>P<sub>2</sub>. Liczba takich składowych, wynikająca z różnych wartości <em>J</em>, jest równa multipletowości termu (2<em>S</em>+1), gdy <em>L</em> &gt; <em>S</em>. Dla termów singletowych (<sup>1</sup>D i <sup>1</sup>S) sprzężenie to jest jednoznaczne, dlatego nie ulegają one dalszemu rozszczepieniu.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"kwantowanie-przestrzenne\">Kwantowanie przestrzenne momentu pędu</h3><p>Gdy atom znajduje się w zewnętrznym polu elektrycznym lub magnetycznym, w przestrzeni pojawia się wyróżniony kierunek. Wówczas całkowity moment pędu elektronów <em>M<sub>J</sub></em> ulega kwantowaniu przestrzennemu, co oznacza, że może on przyjmować jedynie określone orientacje względem tego kierunku. W rezultacie poszczególne poziomy energetyczne, odpowiadające różnym wartościom <em>J</em>, mogą ulegać dalszemu rozszczepieniu na składniki różniące się magnetyczną liczbą kwantową <em>M<sub>J</sub></em>.</p><p>Zjawisko to jest podstawą obserwacji struktury subtelnej i nadsubtelnej w widmach atomowych, a także efektów takich jak rozszczepienie Zeemana. Liczba dozwolonych orientacji wynosi 2<em>J</em>+1, co bezpośrednio przekłada się na liczbę składowych w obecności pola zewnętrznego.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak brzmią reguły Hunda dotyczące kolejności termów atomowych?",
      "answer": "1. Najniższą energię ma term o największej multipletowości (największym S). 2. Przy jednakowym S, niższą energię ma term o większym L. 3. Przy ustalonych S i L, dla podpowłok zapełnionych mniej niż w połowie najniższą energię ma term o mniejszym J, a dla zapełnionych więcej niż w połowie – o większym J."
    },
    {
      "question": "Dlaczego term 3F2 jest termem podstawowym dla konfiguracji d²?",
      "answer": "Dla konfiguracji d² najwyższą multipletowość mają termy 3P i 3F. Z nich niższą energię ma 3F (większe L). Ponieważ podpowłoka d jest zapełniona mniej niż w połowie, spośród składowych 3F2, 3F3, 3F4 najniższą energię ma 3F2, zatem jest to term podstawowy."
    },
    {
      "question": "Co to jest kwantowanie przestrzenne momentu pędu i kiedy występuje?",
      "answer": "Kwantowanie przestrzenne to ograniczenie orientacji wektora momentu pędu względem wyróżnionego kierunku w przestrzeni (np. pola magnetycznego). Występuje, gdy atom znajduje się w zewnętrznym polu elektrycznym lub magnetycznym, prowadząc do rozszczepienia poziomów energetycznych na 2J+1 składowych."
    }
  ]
};
