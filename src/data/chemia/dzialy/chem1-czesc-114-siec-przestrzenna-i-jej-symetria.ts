import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_114_siecPrzestrzennaIJejSymetriaData: StructuredChapter = {
  "chapterTitle": "Sieć przestrzenna i jej symetria",
  "toc": [
    {
      "title": "Wprowadzenie do sieci przestrzennej",
      "anchorId": "wprowadzenie-do-sieci-przestrzennej"
    },
    {
      "title": "Elementy symetrii w sieci przestrzennej",
      "anchorId": "elementy-symetrii-w-sieci-przestrzennej"
    },
    {
      "title": "Translacyjne elementy symetrii",
      "anchorId": "translacyjne-elementy-symetrii"
    },
    {
      "title": "Grupy przestrzenne",
      "anchorId": "grupy-przestrzenne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-sieci-przestrzennej\">Wprowadzenie do sieci przestrzennej</h3><p>Sieć przestrzenną kryształu można opisać, wybierając w niej odpowiednią komórkę elementarną. Dla różnych układów krystalograficznych stosuje się różne kształty komórek, które najlepiej oddają symetrię danej sieci. Na przykład dla układu regularnego komórką elementarną jest sześcian, dla tetragonalnego – prostopadłościan o podstawie kwadratowej, a dla heksagonalnego – prostopadłościan o podstawie rombu. Parametry sieciowe, czyli długości krawędzi i kąty między nimi, są charakterystyczne dla każdego układu.</p><p>W opisie sieci przestrzennej kluczowe znaczenie ma znajomość jej symetrii. Podobnie jak w przypadku cząsteczek, sieć może wykazywać płaszczyzny symetrii, środek symetrii oraz osie symetrii. Jednak ze względu na nieskończony charakter sieci, możliwe są tylko osie o krotności 2, 3, 4 lub 6. Osie pięciokrotne i wyższe niż sześciokrotne nie występują w sieciach krystalicznych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"elementy-symetrii-w-sieci-przestrzennej\">Elementy symetrii w sieci przestrzennej</h3><p>Elementy symetrii punktowej, takie jak płaszczyzny, środek i osie, pozostawiają co najmniej jeden punkt sieci w niezmienionym położeniu. Zbiór takich elementów tworzy grupę punktową. W przypadku sieci przestrzennych liczba możliwych grup punktowych jest ograniczona do 32, co wynika z ograniczeń dotyczących krotności osi symetrii.</p><p>Oprócz elementów punktowych w sieci mogą występować elementy symetrii związane z translacją, czyli przesunięciem całej sieci. Podstawową translacją jest przesunięcie o wektor będący całkowitą wielokrotnością krawędzi komórki elementarnej. Taka operacja prowadzi do położenia nieodróżnialnego od pierwotnego, dlatego jest uznawana za element symetrii.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"translacyjne-elementy-symetrii\">Translacyjne elementy symetrii</h3><p>Do translacyjnych elementów symetrii zaliczamy osie śrubowe oraz płaszczyzny translacyjno-zwierciadlane (zwane też płaszczyznami poślizgu). Oś śrubowa łączy obrót wokół osi (2-, 3-, 4- lub 6-krotnej) z translacją wzdłuż tej osi. Płaszczyzna translacyjno-zwierciadlana łączy odbicie w płaszczyźnie z przesunięciem równoległym do tej płaszczyzny.</p><p>Te dodatkowe elementy symetrii, w połączeniu z elementami punktowymi, prowadzą do 230 możliwych grup przestrzennych, które opisują wszystkie możliwe kombinacje operacji symetrii w kryształach.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"grupy-przestrzenne\">Grupy przestrzenne</h3><p>Rozkład 230 grup przestrzennych pomiędzy układy krystalograficzne jest nierównomierny. Najwięcej grup przypada na układ jednoskośny – 13, następnie na rombowy – 59, regularny – 36, heksagonalny – 27, trygonalny – 25, tetragonalny – 68, a na trójskośny tylko 2. Warto zauważyć, że niektóre z tych grup są bardzo rzadko spotykane w rzeczywistych kryształach, a część może w ogóle nie występować w przyrodzie.</p><p>Znajomość grup przestrzennych jest niezbędna do pełnego opisu struktury krystalicznej, ponieważ pozwala przewidzieć możliwe położenia atomów w komórce elementarnej oraz wyjaśnić właściwości fizyczne i chemiczne kryształów.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie osie symetrii mogą występować w sieci przestrzennej?",
      "answer": "W sieci przestrzennej mogą występować tylko osie symetrii o krotności 2, 3, 4 lub 6. Osie pięciokrotne i wyższe niż sześciokrotne są niemożliwe ze względu na nieskończony charakter sieci."
    },
    {
      "question": "Ile jest grup punktowych dla sieci przestrzennych?",
      "answer": "Dla sieci przestrzennych istnieje 32 grup punktowych, co wynika z ograniczeń dotyczących krotności osi symetrii."
    },
    {
      "question": "Co to jest oś śrubowa?",
      "answer": "Oś śrubowa to translacyjny element symetrii, który łączy obrót wokół osi (2-, 3-, 4- lub 6-krotnej) z translacją wzdłuż tej osi."
    },
    {
      "question": "Ile jest grup przestrzennych?",
      "answer": "Istnieje 230 grup przestrzennych, które opisują wszystkie możliwe kombinacje operacji symetrii w kryształach."
    }
  ]
};
