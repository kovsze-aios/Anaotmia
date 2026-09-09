import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_100_hybrydyzacjaOrbitaliASymetriaCzasteczekData: StructuredChapter = {
  "chapterTitle": "Hybrydyzacja orbitali a symetria cząsteczek",
  "toc": [
    {
      "title": "Wprowadzenie do hybrydyzacji a symetria",
      "anchorId": "wprowadzenie-do-hybrydyzacji-a-symetria"
    },
    {
      "title": "Przykład cząsteczki BF3",
      "anchorId": "przyklad-czasteczki-bf3"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-hybrydyzacji-a-symetria\">Wprowadzenie do hybrydyzacji a symetria</h3><p>W rozdziale 4.8 zdefiniowano orbitale zhybrydyzowane jako liniowe kombinacje orbitali atomowych tego samego atomu, które następnie wykorzystuje się do konstrukcji orbitali molekularnych. W tym fragmencie skoncentrujemy się na praktycznym tworzeniu takich orbitali z uwzględnieniem symetrii cząsteczek, co pozwala przewidzieć ich kształt i właściwości.</p><p>Rozważania oparte na symetrii umożliwiają określenie, które orbitale atomowe atomu centralnego należy zmieszać, aby otrzymać orbitale zhybrydyzowane o odpowiedniej symetrii, zgodnej z symetrią całej cząsteczki. Podejście to jest kluczowe dla zrozumienia geometrii cząsteczek i ich reaktywności.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyklad-czasteczki-bf3\">Przykład cząsteczki BF<sub>3</sub></h3><p>Rozpatrzmy cząsteczkę trifluorku boru (BF<sub>3</sub>), której symetrię omówiono wcześniej. Atom boru pełni rolę atomu centralnego. Aby utworzyć orbitale zhybrydyzowane, należy wybrać odpowiednią liczbę i rodzaj orbitali atomowych boru, kierując się wymogami symetrii. Warunkiem jest, aby orbitale zhybrydyzowane tworzyły bazę reprezentacji grupy punktowej <em>D</em><sub>3h</sub>, do której należy cząsteczka BF<sub>3</sub>.</p><p>Na płaszczyźnie <em>xy</em> rozmieszczamy trzy wektory <em>r</em><sub>1</sub>, <em>r</em><sub>2</sub> i <em>r</em><sub>3</sub>, symbolizujące orbitale zhybrydyzowane, skierowane od ujemnej do dodatniej części orbitalu. Wektory te tworzą między sobą kąty 120°. Oś <em>z</em> pokrywa się z główną osią symetrii <em>C</em><sub>3</sub>, a jeden z wektorów (np. <em>r</em><sub>1</sub>) leży na dodatniej półosi <em>x</em>, która jest jedną z osi <em>C</em><sub>2</sub> prostopadłych do osi głównej.</p><p>Wyznaczamy charaktery reprezentacji, dla której wektory <em>r</em><sub>1</sub>, <em>r</em><sub>2</sub> i <em>r</em><sub>3</sub> stanowią bazę. Dla operacji tożsamościowej wszystkie wektory pozostają na miejscu, więc charakter wynosi 3. Obrót wokół osi trójkrotnej (<em>C</em><sub>3</sub>) przemieszcza wszystkie wektory, dając charakter 0. Z kolei obrót wokół osi dwukrotnej (<em>C</em><sub>2</sub>), np. wokół osi <em>x</em>, pozostawia wektor <em>r</em><sub>1</sub> w miejscu, a wektory <em>r</em><sub>2</sub> i <em>r</em><sub>3</sub> zamieniają się miejscami, co daje charakter 1.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki warunek muszą spełniać orbitale zhybrydyzowane atomu centralnego w cząsteczce BF3?",
      "answer": "Muszą tworzyć bazę reprezentacji grupy punktowej D3h, czyli ich symetria musi odpowiadać symetrii cząsteczki."
    },
    {
      "question": "Ile wynosi charakter reprezentacji dla operacji tożsamościowej w przypadku trzech wektorów symbolizujących orbitale zhybrydyzowane?",
      "answer": "Charakter wynosi 3, ponieważ żaden wektor nie zmienia położenia."
    },
    {
      "question": "Co dzieje się z wektorami podczas obrotu wokół osi C3 w cząsteczce BF3?",
      "answer": "Wszystkie wektory zmieniają położenie, więc charakter reprezentacji wynosi 0."
    }
  ]
};
