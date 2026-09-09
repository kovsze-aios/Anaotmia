import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_176_wplywTemperaturyICisnieniaNaStanRownowagiChemicznejData: StructuredChapter = {
  "chapterTitle": "Wpływ temperatury i ciśnienia na stan równowagi chemicznej",
  "toc": [
    {
      "title": "Zależność stałej równowagi od temperatury",
      "anchorId": "zaleznosc-stalej-rownowagi-od-temperatury"
    },
    {
      "title": "Reguła przekory (Le Chateliera–Brauna)",
      "anchorId": "regula-przekory"
    },
    {
      "title": "Wpływ ciśnienia na równowagę reakcji",
      "anchorId": "wplyw-cisnienia-na-rownowage"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"zaleznosc-stalej-rownowagi-od-temperatury\">Zależność stałej równowagi od temperatury</h3><p>Rozważmy reakcję przebiegającą między reagentami w stanach standardowych. Połączenie odpowiednich równań termodynamicznych prowadzi do wyrażenia na logarytm naturalny stałej równowagi (ln K<sub>x</sub>) jako funkcji entalpii i entropii reakcji oraz temperatury. Różniczkując to wyrażenie względem temperatury, otrzymujemy fundamentalną zależność: pochodna ln K<sub>x</sub> po temperaturze jest równa entalpii reakcji podzielonej przez iloczyn stałej gazowej i kwadratu temperatury (R·T<sup>2</sup>).</p><p>Z tej zależności wynika, że znak entalpii reakcji decyduje o tym, czy stała równowagi rośnie, czy maleje wraz ze wzrostem temperatury. Dla reakcji endotermicznych (ΔH &gt; 0) wzrost temperatury zwiększa stałą równowagi, natomiast dla reakcji egzotermicznych (ΔH &lt; 0) – zmniejsza ją. To stanowi podstawę do przewidywania kierunku przesunięcia równowagi pod wpływem temperatury.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"regula-przekory\">Reguła przekory (Le Chateliera–Brauna)</h3><p>Rozważmy układ, w którym ustaliła się równowaga chemiczna, a następnie zaburzamy ją przez zmianę temperatury. Na przykład w mieszaninie azotu, wodoru i amoniaku obniżenie temperatury powoduje, że układ dąży do nowego stanu równowagi, wytwarzając dodatkowe ilości amoniaku. Dzieje się tak, ponieważ synteza amoniaku jest reakcją egzotermiczną, więc obniżenie temperatury sprzyja jej przebiegowi w kierunku wydzielania ciepła.</p><p>W przypadku reakcji odwrotnej, np. rozkładu amoniaku, która jest endotermiczna, podwyższenie temperatury przesuwa równowagę w kierunku produktów rozkładu. Analogicznie, dla reakcji, w której powstaje tlenek węgla(IV) z węgla i ditlenku węgla, podwyższenie temperatury sprzyja reakcji endotermicznej (tworzeniu CO), a obniżenie – reakcji egzotermicznej (rozpadowi CO).</p><p>Te obserwacje prowadzą do sformułowania ogólnej zasady, znanej jako <strong>reguła przekory</strong> (lub <strong>reguła Le Chateliera–Brauna</strong>): jeśli na układ znajdujący się w stanie równowagi wywierany jest zewnętrzny wpływ (zmiana temperatury, ciśnienia, stężenia), to układ będzie przeciwdziałać temu wpływowi, przesuwając równowagę w takim kierunku, który częściowo kompensuje wprowadzone zaburzenie. Innymi słowy, układ dąży do zminimalizowania skutków działania zewnętrznego.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"wplyw-cisnienia-na-rownowage\">Wpływ ciśnienia na równowagę reakcji</h3><p>Reguła przekory pozwala również przewidzieć wpływ ciśnienia na położenie równowagi. Dla reakcji syntezy amoniaku z azotu i wodoru, w której liczba moli gazowych substratów (4 mole) jest większa niż liczba moli gazowego produktu (2 mole), wzrost ciśnienia powoduje przesunięcie równowagi w kierunku tworzenia amoniaku, ponieważ to zmniejsza całkowitą objętość układu. Z kolei dla reakcji, w której z węgla i ditlenku węgla powstaje tlenek węgla(II), liczba moli gazów rośnie (z 1 mola CO<sub>2</sub> do 2 moli CO), więc wzrost ciśnienia przesuwa równowagę w lewo, czyli w kierunku rozkładu CO na CO<sub>2</sub> i węgiel.</p><p>Obniżenie ciśnienia wywołuje skutki przeciwne: w pierwszym przypadku równowaga przesuwa się w lewo (rozkład amoniaku), a w drugim – w prawo (tworzenie CO).</p><p>Ten sam wniosek można wyprowadzić, analizując wyrażenie na stałą równowagi ciśnieniową K<sub>p</sub>. Dla reakcji syntezy amoniaku: K<sub>p</sub> = (p<sub>NH<sub>3</sub></sub>)<sup>2</sup> / (p<sub>H<sub>2</sub></sub>)<sup>3</sup> · p<sub>N<sub>2</sub></sub>. Jeśli ciśnienie całkowite wzrośnie dwukrotnie (np. przez zmniejszenie objętości), to ciśnienia parcjalne wszystkich gazów wzrosną dwukrotnie. Podstawiając nowe wartości do wyrażenia na K<sub>p</sub>, otrzymamy iloraz, który jest mniejszy od pierwotnej stałej równowagi. To oznacza, że układ nie jest już w równowadze – aby ją przywrócić, licznik (ciśnienie NH<sub>3</sub>) musi wzrosnąć, a mianownik (ciśnienia H<sub>2</sub> i N<sub>2</sub>) musi zmaleć, co odpowiada przebiegowi reakcji w kierunku tworzenia amoniaku. Jest to zgodne z przewidywaniem opartym na regule Le Chateliera–Brauna.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak zmienia się stała równowagi reakcji endotermicznej wraz ze wzrostem temperatury?",
      "answer": "Stała równowagi reakcji endotermicznej rośnie wraz ze wzrostem temperatury, ponieważ zgodnie z równaniem van 't Hoffa pochodna ln K po temperaturze jest dodatnia dla ΔH > 0."
    },
    {
      "question": "Na czym polega reguła przekory (Le Chateliera–Brauna)?",
      "answer": "Reguła przekory mówi, że jeśli na układ znajdujący się w stanie równowagi wywierany jest zewnętrzny wpływ (np. zmiana temperatury, ciśnienia, stężenia), to układ będzie przeciwdziałać temu wpływowi, przesuwając równowagę w takim kierunku, który częściowo kompensuje to zaburzenie."
    },
    {
      "question": "Dlaczego wzrost ciśnienia przesuwa równowagę reakcji syntezy amoniaku w prawo?",
      "answer": "Wzrost ciśnienia przesuwa równowagę w kierunku mniejszej liczby moli gazu. W syntezie amoniaku z azotu i wodoru (4 mole gazów) powstają 2 mole amoniaku, więc zwiększenie ciśnienia sprzyja tworzeniu amoniaku, ponieważ zmniejsza to objętość układu."
    }
  ]
};
