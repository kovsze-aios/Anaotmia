import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_171_prawoDzialaniaMasWUkladachHeterogenicznychData: StructuredChapter = {
  "chapterTitle": "Prawo działania mas w układach heterogenicznych",
  "toc": [
    {
      "title": "Równowaga z udziałem faz stałych",
      "anchorId": "rownowaga-z-udzialem-faz-stalych"
    },
    {
      "title": "Wyrażenia na stałą równowagi",
      "anchorId": "wyrazenia-na-stala-rownowagi"
    },
    {
      "title": "Przykłady równowag heterogenicznych",
      "anchorId": "przyklady-rownowag-heterogenicznych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"rownowaga-z-udzialem-faz-stalych\">Równowaga z udziałem faz stałych</h3><p>W przypadku reakcji zachodzących z udziałem czystych faz stałych, takich jak węgiel, ich ułamek molowy w fazie stałej jest równy jedności i nie ulega zmianie w trakcie procesu. Dlatego w wyrażeniu na stałą równowagi uwzględnia się wyłącznie składniki obecne w fazie gazowej, których stężenia mogą się zmieniać.</p><p>Dla reakcji, w której bierze udział stały węgiel i gazy, prawo działania mas można zapisać za pomocą ułamków molowych tylko reagentów gazowych. Przykładowo, dla reakcji C(s) + CO<sub>2</sub>(g) ⇌ 2CO(g) wyrażenie na stałą równowagi przyjmuje postać:</p><p>K<sub>x</sub> = x<sub>CO</sub><sup>2</sup> / x<sub>CO<sub>2</sub></sub></p><p>gdzie x<sub>CO</sub> i x<sub>CO<sub>2</sub></sub> to ułamki molowe w fazie gazowej. Ułamek molowy węgla stałego nie pojawia się w tym wyrażeniu, ponieważ jego stężenie w fazie stałej jest stałe.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wyrazenia-na-stala-rownowagi\">Wyrażenia na stałą równowagi</h3><p>Równowagę tę można również opisać za pomocą ciśnień cząstkowych reagentów gazowych. Dla wspomnianej reakcji, gdzie ciśnienie całkowite p = p<sub>CO</sub> + p<sub>CO<sub>2</sub></sub>, otrzymujemy zależność:</p><p>K<sub>x</sub> = (p<sub>CO</sub>/p)<sup>2</sup> / (p<sub>CO<sub>2</sub></sub>/p) = (p<sub>CO</sub><sup>2</sup> / p<sub>CO<sub>2</sub></sub>) · (1/p)</p><p>Po uwzględnieniu zmiany liczby moli gazów (Δν = +1) i korzystając z ogólnej zależności między stałą równowagi ciśnieniową a stałą wyrażoną przez ułamki molowe, otrzymujemy:</p><p>K<sub>p</sub> = K<sub>x</sub> · (p/p°)<sup>Δν</sup> = (p<sub>CO</sub><sup>2</sup> / p<sub>CO<sub>2</sub></sub>) · (1/p°) </p><p>gdzie p° to ciśnienie standardowe. Stała K<sub>p</sub> zależy wyłącznie od temperatury, a nie od ciśnienia całkowitego. W obliczeniach Δν uwzględniamy tylko składniki gazowe, gdyż tylko one wpływają na zmianę objętości.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"przyklady-rownowag-heterogenicznych\">Przykłady równowag heterogenicznych</h3><p>Rozważmy redukcję tlenku miedzi(II) wodorem: CuO(s) + H<sub>2</sub>(g) ⇌ Cu(s) + H<sub>2</sub>O(g). W tym przypadku Δν = 0, więc stała równowagi K<sub>p</sub> jest równa K<sub>x</sub> i wyraża się stosunkiem ciśnień cząstkowych pary wodnej i wodoru:</p><p>K<sub>p</sub> = p<sub>H<sub>2</sub>O</sub> / p<sub>H<sub>2</sub></sub></p><p>Innym przykładem jest dysocjacja termiczna węglanu wapnia: CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g). W układzie występuje tylko jeden gaz, więc jego ułamek molowy wynosi 1, a ciśnienie cząstkowe CO<sub>2</sub> jest równe ciśnieniu całkowitemu. Stała równowagi przyjmuje wówczas postać:</p><p>K<sub>p</sub> = p<sub>CO<sub>2</sub></sub> / p°</p><p>Oznacza to, że w danej temperaturze ciśnienie dwutlenku węgla nad mieszaniną węglanu i tlenku wapnia ma stałą wartość, niezależną od ilości faz stałych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w wyrażeniu na stałą równowagi dla reakcji z udziałem czystych faz stałych pomija się ich ułamki molowe?",
      "answer": "Ponieważ czyste fazy stałe mają stały skład i ich aktywność (a tym samym ułamek molowy) jest równa jedności, nie wpływają one na położenie równowagi."
    },
    {
      "question": "Jak zmienia się stała równowagi Kp wraz ze zmianą ciśnienia całkowitego?",
      "answer": "Stała Kp zależy wyłącznie od temperatury, a nie od ciśnienia całkowitego."
    },
    {
      "question": "Dla reakcji CaCO3(s) ⇌ CaO(s) + CO2(g), co można powiedzieć o ciśnieniu CO2 w stanie równowagi?",
      "answer": "W stałej temperaturze ciśnienie CO2 jest stałe i niezależne od ilości faz stałych."
    }
  ]
};
