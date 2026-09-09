import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_98_charakteryReprezentacjiGrupSymetriiData: StructuredChapter = {
  "chapterTitle": "Charaktery reprezentacji grup symetrii",
  "toc": [
    {
      "title": "Wprowadzenie do tablic charakterów",
      "anchorId": "wprowadzenie-do-tablic-charakterow"
    },
    {
      "title": "Klasyfikacja operacji symetrii i ich charakterów",
      "anchorId": "klasyfikacja-operacji-symetrii"
    },
    {
      "title": "Bazy reprezentacji: wektory i funkcje",
      "anchorId": "bazy-reprezentacji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-tablic-charakterow\">Wprowadzenie do tablic charakterów</h3><p>Tablica charakterów grup punktowych stanowi fundamentalne narzędzie w analizie symetrii cząsteczek. Zestawia ona w sposób systematyczny efekty działania operacji symetrii na funkcje bazowe, takie jak współrzędne kartezjańskie, momenty dipolowe czy orbitale atomowe. Dzięki temu możliwe jest przewidywanie, które przejścia spektroskopowe są dozwolone, a także klasyfikacja drgań normalnych cząsteczki.</p><p>W tablicach tych poszczególne reprezentacje nieprzywiedlne oznaczane są symbolami Mullikena (np. A<sub>1</sub>, B<sub>2</sub>, E), a w kolumnach podano wartości charakterów dla każdej klasy operacji symetrii. Kluczowe jest zrozumienie, że operacje należące do tej samej klasy mają identyczne charaktery, co upraszcza zapis – zamiast wymieniać każdą operację z osobna, grupuje się je w klasy, np. 2C<sub>3</sub> czy 3σ<sub>v</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"klasyfikacja-operacji-symetrii\">Klasyfikacja operacji symetrii i ich charakterów</h3><p>W grupach punktowych o wysokiej symetrii, takich jak C<sub>4v</sub> czy D<sub>4h</sub>, operacje symetrii dzielą się na klasy ze względu na podobieństwo transformacji. Na przykład w grupie C<sub>4v</sub> operacje odbicia w płaszczyznach σ<sub>v</sub>(xz) i σ<sub>v</sub>(yz) są do siebie podobne, co manifestuje się identycznymi charakterami w tablicy. Dlatego w nagłówku kolumny zapisuje się je jako 2σ<sub>v</sub>, a nie osobno. Analogicznie postępuje się z operacjami σ<sub>d</sub> w grupach zawierających płaszczyzny diagonalne.</p><p>Dzięki temu uproszczeniu tablica charakterów staje się bardziej zwarta i czytelna. Na przykład w grupie D<sub>4h</sub> klasy operacji obejmują: E, 2C<sub>4</sub>, C<sub>2</sub>, 2C<sub>2</sub>′, 2C<sub>2</sub>″, i, 2S<sub>4</sub>, σ<sub>h</sub>, 2σ<sub>v</sub>, 2σ<sub>d</sub>. Każda z tych klas ma przypisane wartości charakterów dla każdej reprezentacji, co pozwala na szybkie odczytanie symetrii funkcji.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"bazy-reprezentacji\">Bazy reprezentacji: wektory i funkcje</h3><p>W analizie symetrii kluczowe jest określenie, jak transformują się wektory i funkcje pod działaniem operacji grupy. Na przykład w grupie C<sub>4v</sub> składowa z wektora położenia pozostaje niezmieniona (transformuje się według reprezentacji A<sub>1</sub>), podczas gdy składowe x i y przekształcają się między sobą, tworząc bazę dwuwymiarowej reprezentacji E. Podobnie funkcje takie jak x<sup>2</sup>+y<sup>2</sup> czy z<sup>2</sup> często należą do reprezentacji całkowicie symetrycznej, co ma znaczenie przy wyborze orbitali w teorii pola krystalicznego.</p><p>W tablicach charakterów w ostatnich kolumnach podaje się często, które funkcje (np. x, y, z, R<sub>x</sub>, R<sub>y</sub>, R<sub>z</sub>) lub ich kombinacje (np. x<sup>2</sup>−y<sup>2</sup>, xy, xz, yz) stanowią bazę danej reprezentacji. Informacje te są nieocenione przy przypisywaniu symetrii orbitalom molekularnym, drganiom normalnym czy stanom elektronowym.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w tablicach charakterów operacje takie jak σv(xz) i σv(yz) są często grupowane w jedną klasę 2σv?",
      "answer": "Ponieważ operacje te są do siebie podobne (sprzężone) w danej grupie punktowej, co objawia się tym, że mają identyczne charaktery we wszystkich reprezentacjach. Grupowanie ich w klasę upraszcza zapis tablicy."
    },
    {
      "question": "Jaką reprezentację tworzy składowa z wektora położenia w grupie C4v?",
      "answer": "Składowa z transformuje się według reprezentacji całkowicie symetrycznej A1, ponieważ pozostaje niezmieniona pod działaniem wszystkich operacji symetrii grupy C4v."
    },
    {
      "question": "Co oznacza zapis (x, y) w kolumnie bazy reprezentacji E?",
      "answer": "Oznacza to, że funkcje x i y tworzą bazę dwuwymiarowej reprezentacji E – pod działaniem operacji symetrii przekształcają się one w kombinacje liniowe samych siebie, a nie pozostają oddzielnie niezmienione."
    }
  ]
};
