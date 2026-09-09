import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_102_hybrydyzacjaOrbitaliASymetriaCzasteczekData: StructuredChapter = {
  "chapterTitle": "Hybrydyzacja orbitali a symetria cząsteczek",
  "toc": [
    {
      "title": "Orbitale zhybrydyzowane w cząsteczce BF3",
      "anchorId": "orbitale-zhybrydyzowane-bf3"
    },
    {
      "title": "Orbitale zhybrydyzowane w cząsteczce CH4",
      "anchorId": "orbitale-zhybrydyzowane-ch4"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"orbitale-zhybrydyzowane-bf3\">Orbitale zhybrydyzowane w cząsteczce BF3</h3><p>Orbitale zhybrydyzowane charakteryzują się symetrią cylindryczną względem obrotów o dowolny kąt wokół własnej osi, która pokrywa się z wektorami skierowanymi od jądra centralnego do ligandów. Dzięki tej symetrii mogą one tworzyć wiązania σ poprzez nakładanie się z orbitalami sąsiednich atomów o analogicznej symetrii względem osi łączącej jądra.</p><p>W cząsteczce trifluorku boru (BF<sub>3</sub>) trzy zhybrydyzowane orbitale atomu boru nakładają się z orbitalami 2p<sub>x</sub> trzech atomów fluoru. W wyniku tego powstają trzy dwucentrowe, zlokalizowane orbitale cząsteczkowe typu σ wiążącego oraz trzy orbitale antywiążące σ*. Schematycznie można to przedstawić jako kombinacje liniowe orbitali zhybrydyzowanych boru (t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub>) i orbitali 2p<sub>x</sub> fluoru.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"orbitale-zhybrydyzowane-ch4\">Orbitale zhybrydyzowane w cząsteczce CH4</h3><p>Przechodząc od płaskiej cząsteczki BF<sub>3</sub> do tetraedrycznej cząsteczki metanu (CH<sub>4</sub>), orbitale zhybrydyzowane atomu węgla muszą być skierowane ku narożom czworościanu foremnego. Dla lepszej orientacji, czworościan utworzony przez jądra atomów wodoru można wpisać w sześcian, co ułatwia analizę symetrii w kartezjańskim układzie współrzędnych.</p><p>Aby określić, jakie orbitale atomu węgla należy użyć do utworzenia orbitali zhybrydyzowanych o symetrii odpowiadającej grupie punktowej T<sub>d</sub>, stosuje się metody teorii grup. Na zespół czterech wektorów r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub> i r<sub>4</sub> działamy operacjami symetrii grupy T<sub>d</sub>, a następnie wyznaczamy charakter reprezentacji, którą te wektory tworzą.</p><p>Operacja tożsamościowa pozostawia wszystkie cztery wektory w niezmienionym położeniu, więc charakter wynosi 4. Obrót wokół osi trójkrotnych (przekątne sześcianu) pozostawia tylko jeden wektor na osi, a pozostałe trzy ulegają permutacji, dając charakter 1. Obrót wokół osi dwukrotnych (osie x, y, z) oraz obrót niewłaściwy S<sub>4</sub> przemieszczają wszystkie wektory, więc charakter wynosi 0. Odbicia w płaszczyznach σ<sub>d</sub> (np. płaszczyzny przechodzące przez naroża sześcianu) pozostawiają dwa wektory w miejscu, a dwa pozostałe zamieniają się, co daje charakter 2.</p><p>Pełna reprezentacja Γ<sub>CH4</sub> ma postać: E: 4, 8C<sub>3</sub>: 1, 3C<sub>2</sub>: 0, 6S<sub>4</sub>: 0, 6σ<sub>d</sub>: 2. Reprezentacja ta jest redukowalna i rozkłada się na reprezentacje nieprzywiedlne: jednowymiarową A<sub>1</sub> oraz trójwymiarową T<sub>2</sub>. Zapisujemy to jako Γ<sub>CH4</sub> = A<sub>1</sub> + T<sub>2</sub>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest symetria orbitali zhybrydyzowanych i jakie wiązania mogą one tworzyć?",
      "answer": "Orbitale zhybrydyzowane mają symetrię cylindryczną, co pozwala im tworzyć wiązania σ poprzez nakładanie się z orbitalami o tej samej symetrii względem osi wiązania."
    },
    {
      "question": "Jakie orbitale cząsteczkowe powstają w wyniku nakładania orbitali zhybrydyzowanych boru z orbitalami 2p fluoru w cząsteczce BF3?",
      "answer": "Powstają trzy orbitale cząsteczkowe σ wiążące i trzy orbitale σ* antywiążące, które są orbitalami dwucentrowymi i zlokalizowanymi."
    },
    {
      "question": "Jaki jest charakter reprezentacji ΓCH4 dla operacji tożsamościowej, obrotów C3, C2, S4 i odbić σd?",
      "answer": "Dla E charakter wynosi 4, dla 8C3 – 1, dla 3C2 – 0, dla 6S4 – 0, a dla 6σd – 2."
    },
    {
      "question": "Na jakie reprezentacje nieprzywiedlne rozkłada się reprezentacja ΓCH4?",
      "answer": "ΓCH4 rozkłada się na reprezentacje A1 i T2."
    }
  ]
};
