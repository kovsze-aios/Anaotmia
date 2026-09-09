import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_125_energiaSieciowaKrysztalowJonowychData: StructuredChapter = {
  "chapterTitle": "Energia sieciowa kryształów jonowych",
  "toc": [
    {
      "title": "Definicja i znaczenie energii sieciowej",
      "anchorId": "definicja-i-znaczenie-energii-sieciowej"
    },
    {
      "title": "Wzór na energię sieciową",
      "anchorId": "wzor-na-energie-sieciowa"
    },
    {
      "title": "Stała Madelunga",
      "anchorId": "stala-madelunga"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-i-znaczenie-energii-sieciowej\">Definicja i znaczenie energii sieciowej</h3><p>Kryształy jonowe, takie jak chlorek sodu (NaCl), fluorek cezu (CsF) czy fluorek sodu (NaF), cechują się regularną, prostą strukturą sieciową. Dzięki temu możliwe jest stosunkowo łatwe obliczenie ich <strong>energii sieciowej</strong>, czyli ilości energii, którą należy dostarczyć, aby rozdzielić jeden mol substancji krystalicznej na jony znajdujące się w nieskończonej odległości od siebie. Wielkość ta odpowiada całkowitej energii potencjalnej kryształu i wpływa na takie właściwości, jak temperatura topnienia, rozpuszczalność, lotność, a w pewnym stopniu również twardość.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wzor-na-energie-sieciowa\">Wzór na energię sieciową</h3><p>Energię sieciową odniesioną do jednego mola substancji (U<sub>0</sub>) można wyznaczyć ze wzoru:</p><p>U<sub>0</sub> = (N<sub>A</sub> e<sup>2</sup> z<sub>+</sub> z<sub>−</sub> / (4πε<sub>0</sub>r<sub>0</sub>)) · (1 − 1/n)</p><p>gdzie N<sub>A</sub> to liczba Avogadra, e – ładunek elementarny, z<sub>+</sub> i z<sub>−</sub> – liczby ładunków elementarnych kationu i anionu, ε<sub>0</sub> – przenikalność elektryczna próżni, r<sub>0</sub> – odległość między sąsiednimi jonami przeciwnego znaku, a n – współczynnik wyznaczany empirycznie na podstawie badań ściśliwości kryształów. Współczynnik n przyjmuje wartości zależne od konfiguracji elektronowej jonów: dla helu wynosi 5, dla neonu – 7, dla argonu – 9, dla kryptonu – 10, a dla ksenonu – 12.</p><p>Wzór ten uwzględnia oddziaływania elektrostatyczne między wszystkimi jonami w sieci przestrzennej. Przy małych odległościach między jonami istotną rolę odgrywają siły odpychania, które powstają na skutek nakładania się powłok elektronowych – nawet między jonami o przeciwnych znakach. Siły te rosną bardzo gwałtownie wraz ze zbliżaniem się sąsiadujących jonów.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"stala-madelunga\">Stała Madelunga</h3><p>Występująca we wzorze stała A nosi nazwę <strong>stałej Madelunga</strong> i zależy od sposobu ułożenia jonów dodatnich i ujemnych w sieci krystalicznej. Dla struktury typu NaCl wynosi ona 1,7476, dla typu CsCl – 1,7627, a dla typu CaF<sub>2</sub> – 5,0388. Wartość ta odzwierciedla sumaryczny wkład oddziaływań elektrostatycznych wszystkich jonów w sieci na energię potencjalną kryształu.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest energia sieciowa kryształu jonowego?",
      "answer": "Energia sieciowa to ilość energii potrzebna do rozdzielenia jednego mola kryształu jonowego na jony w nieskończonej odległości; odpowiada całkowitej energii potencjalnej sieci."
    },
    {
      "question": "Jakie czynniki wpływają na wartość energii sieciowej?",
      "answer": "Na energię sieciową wpływają: ładunki jonów, odległość między jonami (r0), współczynnik n (zależny od konfiguracji elektronowej) oraz stała Madelunga (zależna od struktury krystalicznej)."
    },
    {
      "question": "Co to jest stała Madelunga i jakie są jej przykładowe wartości?",
      "answer": "Stała Madelunga (A) jest współczynnikiem uwzględniającym geometrię sieci krystalicznej w obliczeniach energii sieciowej. Dla NaCl wynosi 1,7476, dla CsCl – 1,7627, a dla CaF2 – 5,0388."
    }
  ]
};
