import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_160_standardoweEntalpieTworzeniaZwiazkowChemicznychData: StructuredChapter = {
  "chapterTitle": "Standardowe entalpie tworzenia związków chemicznych",
  "toc": [
    {
      "title": "Definicja i znaczenie standardowych entalpii tworzenia",
      "anchorId": "definicja-znaczenie"
    },
    {
      "title": "Wyznaczanie entalpii tworzenia na przykładzie MgO",
      "anchorId": "wyznaczanie-entalpii-mgo"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-znaczenie\">Definicja i znaczenie standardowych entalpii tworzenia</h3><p>Standardowa entalpia tworzenia związku chemicznego (ΔH<sub>f</sub>°) to efekt cieplny towarzyszący syntezie jednego mola związku z pierwiastków w ich stanach standardowych, w temperaturze 298,15 K (25°C) i pod ciśnieniem 1 atm. Wielkości te mają fundamentalne znaczenie w termochemii, ponieważ umożliwiają obliczanie entalpii dowolnych reakcji chemicznych na podstawie prostego sumowania odpowiednich wartości dla substratów i produktów.</p><p>Wartości standardowych entalpii tworzenia są zestawiane w tablicach termodynamicznych i stanowią punkt odniesienia dla wszelkich obliczeń efektów cieplnych. Dla pierwiastków w stanie standardowym przyjmuje się umownie, że ich entalpia tworzenia wynosi zero, co pozwala na jednoznaczne określenie względnych zawartości energetycznych związków.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wyznaczanie-entalpii-mgo\">Wyznaczanie entalpii tworzenia na przykładzie MgO</h3><p>W niektórych przypadkach standardowe entalpie tworzenia można wyznaczyć bezpośrednio z pomiarów kalorymetrycznych. Przykładem jest tlenek magnezu (MgO), którego entalpię tworzenia określa się poprzez spalenie metalicznego magnezu w bombie kalorymetrycznej. W doświadczeniu tym, jeśli temperatura początkowa i końcowa układu wynosi 298,15 K, zmierzony efekt cieplny odnosi się właśnie do tej temperatury, niezależnie od chwilowych temperatur wewnątrz bomby podczas reakcji.</p><p>Bomba kalorymetryczna jest naczyniem o stałej objętości, dlatego ciepło wydzielone podczas spalania (q<sub>v</sub>) odpowiada zmianie energii wewnętrznej układu (ΔU). Dla reakcji Mg + ½O<sub>2</sub> → MgO zmierzona wartość ΔU wynosi –600,29 kJ·mol<sup>–1</sup>. Aby otrzymać entalpię reakcji (ΔH), należy uwzględnić pracę objętościową związaną ze zmianą liczby moli gazowych reagentów, zgodnie z zależnością ΔH = q<sub>p</sub> = q<sub>v</sub> + pΔV.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest standardowa entalpia tworzenia związku chemicznego?",
      "answer": "Jest to efekt cieplny towarzyszący powstaniu jednego mola związku z pierwiastków w ich stanach standardowych, w temperaturze 298,15 K i pod ciśnieniem 1 atm."
    },
    {
      "question": "Dlaczego w bombie kalorymetrycznej zmierzony efekt cieplny odpowiada zmianie energii wewnętrznej, a nie entalpii?",
      "answer": "Ponieważ bomba kalorymetryczna jest naczyniem o stałej objętości, więc nie jest wykonywana praca objętościowa (pΔV = 0), a ciepło qv równa się ΔU. Aby otrzymać ΔH, należy dodać człon pΔV."
    }
  ]
};
