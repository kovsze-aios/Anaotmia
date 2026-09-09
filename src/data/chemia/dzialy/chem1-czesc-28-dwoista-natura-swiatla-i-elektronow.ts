import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_28_dwoistaNaturaSwiatlaIElektronowData: StructuredChapter = {
  "chapterTitle": "Dwoista natura światła i elektronów",
  "toc": [
    {
      "title": "Kwantowa natura promieniowania",
      "anchorId": "kwantowa-natura-promieniowania"
    },
    {
      "title": "Efekt fotoelektryczny",
      "anchorId": "efekt-fotoelektryczny"
    },
    {
      "title": "Efekt Comptona",
      "anchorId": "efekt-comptona"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"kwantowa-natura-promieniowania\">Kwantowa natura promieniowania</h3><p>Na przełomie XIX i XX wieku Max Planck wykazał, że energia promieniowania elektromagnetycznego nie jest emitowana i pochłaniana w sposób ciągły, lecz w postaci dyskretnych porcji, nazwanych <strong>kwantami energii</strong>. Energia pojedynczego kwantu, oznaczana symbolem ε, jest wprost proporcjonalna do częstości drgań ν promieniowania, co wyraża równanie ε = hν. Współczynnik proporcjonalności h, nazywany <strong>stałą Plancka</strong>, ma wartość 6,626176(36)·10<sup>−34</sup> J·s.</p><p>Z powyższej zależności wynika, że im większa jest częstość drgań (a więc im krótsza długość fali), tym większa jest energia pojedynczego kwantu. Mimo to bezwzględne wartości energii kwantów są zawsze bardzo małe. Dla przykładu, kwant światła czerwonego o długości fali 800 nm (8·10<sup>−7</sup> m) ma energię około 2,5·10<sup>−19</sup> J, natomiast kwant promieniowania rentgenowskiego o długości fali 100 pm (10<sup>−10</sup> m) osiąga energię około 2·10<sup>−16</sup> J. Dla porównania, jedna kaloria (4,184 J) to ilość ciepła potrzebna do ogrzania 1 grama wody o 1°C.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"efekt-fotoelektryczny\">Efekt fotoelektryczny</h3><p>Wprowadzenie pojęcia kwantów energii pozwoliło wyjaśnić szereg zjawisk, w tym <strong>efekt fotoelektryczny</strong>. Polega on na emisji elektronów z powierzchni metalu (np. potasu) pod wpływem padającego promieniowania nadfioletowego. Badania doświadczalne wykazały, że efekt ten nie występuje, gdy częstość padającego światła jest niższa od pewnej wartości progowej ν<sub>0</sub>, charakterystycznej dla danego metalu. Gdy częstość przekracza tę wartość, prędkość emitowanych elektronów (a tym samym ich energia kinetyczna) zależy od częstości promieniowania, natomiast liczba elektronów rośnie proporcjonalnie do natężenia światła.</p><p>Teorii falowej nie udaje się wyjaśnić tych obserwacji, zwłaszcza zależności emisji elektronów od częstości światła. W 1905 roku Albert Einstein zaproponował, aby światło traktować jako strumień fotonów o energii ε = hν. Aby wyrwać elektron z powierzchni metalu, konieczne jest dostarczenie energii co najmniej równej <strong>pracy wyjścia</strong> W. Jeśli energia kwantu jest mniejsza od pracy wyjścia, elektron nie zostanie wyemitowany. Minimalna częstość, przy której zachodzi emisja, wynosi ν<sub>0</sub> = W/h. Gdy energia padającego fotonu przewyższa pracę wyjścia, nadmiar energii zostaje przekazany elektronowi w postaci energii kinetycznej, co opisuje równanie: ε = hν = W + ½m<sub>e</sub>v<sup>2</sup>, gdzie m<sub>e</sub> to masa elektronu, a v – jego prędkość.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"efekt-comptona\">Efekt Comptona</h3><p>Korpuskularna natura promieniowania ujawnia się jeszcze wyraźniej w <strong>efekcie Comptona</strong>, który można interpretować jako zderzenie fotonu ze swobodnym elektronem. W wyniku tego zderzenia elektron zyskuje energię kinetyczną, a pojawia się foton wtórny o energii mniejszej niż energia fotonu padającego. Zgodnie z zasadą zachowania energii, suma energii fotonu wtórnego i energii kinetycznej elektronu równa się energii fotonu pierwotnego: ε<sub>1</sub> = ε<sub>2</sub> + ½m<sub>e</sub>v<sup>2</sup> = hν<sub>2</sub> + ½m<sub>e</sub>v<sup>2</sup>.</p><p>Analiza wyników doświadczalnych pokazuje, że kąt rozproszenia fotonu wtórnego i elektronu zależy od różnicy energii między fotonem pierwotnym a wtórnym. Zjawisko to można wyjaśnić, przypisując fotonom pęd i masę. Zgodnie z teorią względności, fotonowi można przypisać masę równoważną jego energii: m = ε/c<sup>2</sup> = hν/c<sup>2</sup> = h/(cλ). Wykorzystując tę zależność, pęd fotonu wyraża się wzorem p = mc = hν/c = h/λ. Efekt Comptona jest więc zgodny z zasadą zachowania pędu, co potwierdza, że fotony zachowują się jak cząstki materialne w zderzeniach.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest kwant energii i od czego zależy jego wielkość?",
      "answer": "Kwant energii to najmniejsza porcja energii promieniowania elektromagnetycznego, która może być wyemitowana lub pochłonięta. Jego wielkość jest wprost proporcjonalna do częstości drgań promieniowania, zgodnie z równaniem ε = hν, gdzie h to stała Plancka."
    },
    {
      "question": "Wyjaśnij, na czym polega efekt fotoelektryczny i jakie warunki muszą być spełnione, aby zachodził.",
      "answer": "Efekt fotoelektryczny polega na emisji elektronów z powierzchni metalu pod wpływem padającego promieniowania elektromagnetycznego. Aby zjawisko to wystąpiło, energia padającego fotonu musi być większa lub równa pracy wyjścia elektronu z danego metalu. Oznacza to, że częstość promieniowania musi przekraczać wartość progową ν₀ = W/h."
    },
    {
      "question": "Czym jest efekt Comptona i jakie wnioski płyną z jego obserwacji?",
      "answer": "Efekt Comptona to zjawisko polegające na zwiększeniu długości fali promieniowania rentgenowskiego po rozproszeniu na swobodnych elektronach. Interpretuje się je jako zderzenie fotonu z elektronem, w którym foton przekazuje część swojej energii elektronowi, a sam staje się fotonem o mniejszej energii. Zjawisko to potwierdza korpuskularną naturę promieniowania i zgodność z zasadą zachowania pędu."
    }
  ]
};
