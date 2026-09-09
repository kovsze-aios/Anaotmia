import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_33_funkcjeFaloweIRownanieSchrDingeraData: StructuredChapter = {
  "chapterTitle": "Funkcje falowe i równanie Schrödingera",
  "toc": [
    {
      "title": "Wprowadzenie do opisu kwantowego",
      "anchorId": "wprowadzenie-do-opisu-kwantowego"
    },
    {
      "title": "Równanie Schrödingera",
      "anchorId": "rownanie-schrodingera"
    },
    {
      "title": "Interpretacja funkcji falowej",
      "anchorId": "interpretacja-funkcji-falowej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-opisu-kwantowego\">Wprowadzenie do opisu kwantowego</h3><p>Mechanika kwantowa, dążąc do zgodnego z eksperymentem opisu ruchu cząstek elementarnych, rezygnuje z precyzyjnego określania ich położenia. Zamiast tego oblicza prawdopodobieństwo znalezienia cząstki w danym obszarze przestrzeni, wyrażane za pomocą funkcji gęstości prawdopodobieństwa. Powstaje zatem pytanie, na jakich zasadach można wyznaczyć taką funkcję.</p><p>Odpowiedzi dostarcza analogia między zachowaniem fotonów a cząstek takich jak elektron czy proton. Zarówno jedne, jak i drugie wykazują dualizm korpuskularno-falowy, dlatego ich ruch opisuje się raz w kategoriach fal, a raz w kategoriach cząstek. Zgodnie z falową teorią światła natężenie promieniowania, czyli ilość energii przenoszonej przez jednostkową powierzchnię w jednostce czasu, jest wprost proporcjonalne do kwadratu amplitudy fali świetlnej. Z kolei kwantowa teoria światła wiąże natężenie z liczbą przepływających fotonów. Te dwa ujęcia łączy fakt, że kwadrat amplitudy fali świetlnej jest proporcjonalny do liczby kwantów energii.</p><p>Przenosząc tę analogię na elektron, można przyjąć, że kwadrat amplitudy fali de Broglie'a odpowiadającej elektronowi jest wprost proporcjonalny do prawdopodobieństwa napotkania tego elektronu. W ten sposób kwadrat amplitudy fali materii określa gęstość prawdopodobieństwa jego obecności.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rownanie-schrodingera\">Równanie Schrödingera</h3><p>Kontynuując analogię falową, mechanika kwantowa wyznacza amplitudę fali de Broglie'a z równania o postaci podobnej do równania opisującego rozchodzenie się fal. To fundamentalne równanie, nazywane równaniem Schrödingera, w przypadku trójwymiarowym ma postać:</p><p>∂²Ψ/∂x² + ∂²Ψ/∂y² + ∂²Ψ/∂z² + (8π²m/h²)(E − V)Ψ = 0</p><p>W równaniu tym symbol Ψ oznacza amplitudę fali de Broglie'a, która przyjmuje różne wartości w różnych punktach przestrzeni, będąc funkcją współrzędnych x, y, z. E to całkowita energia elektronu, V – jego energia potencjalna, m – masa cząstki, a h – stała Plancka. Równanie Schrödingera jest równaniem różniczkowym, a jego rozwiązaniem są funkcje falowe, a nie pojedyncze wartości liczbowe.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"interpretacja-funkcji-falowej\">Interpretacja funkcji falowej</h3><p>W ogólnym przypadku funkcja falowa Ψ jest funkcją zespoloną zmiennych rzeczywistych x, y, z. Gęstość prawdopodobieństwa ρ(x, y, z) napotkania elektronu w danym punkcie jest wtedy równa kwadratowi modułu funkcji falowej, czyli iloczynowi funkcji sprzężonej i wyjściowej: ρ(x, y, z) = |Ψ(x, y, z)|².</p><p>W wielu szczególnych przypadkach, takich jak atomy i cząsteczki, można posługiwać się rzeczywistymi funkcjami falowymi. Wówczas gęstość prawdopodobieństwa jest po prostu kwadratem wartości bezwzględnej funkcji Ψ, co zapisujemy jako ρ(x, y, z) = |Ψ(x, y, z)|².</p><p>Prawdopodobieństwo znalezienia elektronu w małej objętości dV wyraża się wzorem dP = ρ(x, y, z) dV = |Ψ(x, y, z)|² dV. Ponieważ elektron musi znajdować się gdzieś w przestrzeni, całka z gęstości prawdopodobieństwa po całej objętości jest równa jedności, co stanowi warunek normalizacji funkcji falowej: ∫|Ψ(x, y, z)|² dV = 1.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co opisuje kwadrat modułu funkcji falowej Ψ w mechanice kwantowej?",
      "answer": "Kwadrat modułu funkcji falowej |Ψ|² określa gęstość prawdopodobieństwa znalezienia cząstki (np. elektronu) w danym punkcie przestrzeni."
    },
    {
      "question": "Jaką postać ma równanie Schrödingera dla cząstki w trzech wymiarach?",
      "answer": "Równanie Schrödingera ma postać: ∂²Ψ/∂x² + ∂²Ψ/∂y² + ∂²Ψ/∂z² + (8π²m/h²)(E − V)Ψ = 0, gdzie Ψ to funkcja falowa, E – energia całkowita, V – energia potencjalna, m – masa cząstki, h – stała Plancka."
    },
    {
      "question": "Dlaczego funkcja falowa musi być unormowana?",
      "answer": "Funkcja falowa musi być unormowana, ponieważ całka z gęstości prawdopodobieństwa po całej przestrzeni musi być równa 1, co odzwierciedla pewność, że cząstka istnieje gdzieś we wszechświecie."
    }
  ]
};
