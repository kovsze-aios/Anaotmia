import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_141_widmaOscylacyjneCzasteczekWieloatomowychData: StructuredChapter = {
  "chapterTitle": "Widma oscylacyjne cząsteczek wieloatomowych",
  "toc": [
    {
      "title": "Drgania normalne cząsteczek wieloatomowych",
      "anchorId": "drgania-normalne"
    },
    {
      "title": "Liczba drgań normalnych",
      "anchorId": "liczba-drgan"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"drgania-normalne\">Drgania normalne cząsteczek wieloatomowych</h3><p>W przeciwieństwie do cząsteczek dwuatomowych, które wykonują tylko jedno drganie rozciągające, ruchy oscylacyjne cząsteczek wieloatomowych są znacznie bardziej złożone. Można je jednak przedstawić jako kombinację niezależnych, nieoddziałujących ze sobą ruchów, zwanych <strong>drganiami normalnymi</strong>. W każdym drganiu normalnym wszystkie atomy (zręby atomowe) uczestniczą jednocześnie, poruszając się z tą samą częstością i w zgodnej fazie.</p><p>Liczba drgań normalnych zależy od geometrii cząsteczki: dla cząsteczki liniowej zawierającej N atomów wynosi ona <strong>3N – 5</strong>, natomiast dla cząsteczki nieliniowej – <strong>3N – 6</strong>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"liczba-drgan\">Liczba drgań normalnych</h3><p>Aby zrozumieć skąd biorą się te liczby, rozważmy N atomów w fazie gazowej, które są swobodne i niezwiązane. Każdy atom ma trzy stopnie swobody translacyjnej, co daje łącznie <strong>3N stopni swobody</strong>. Gdy atomy tworzą cząsteczkę, nie mogą już poruszać się niezależnie – cała cząsteczka przemieszcza się jako jednostka, a ruch ten opisuje się ruchem jej środka masy, który odpowiada trzem stopniom swobody.</p><p>Pozostałe <strong>3N – 3 stopnie swobody</strong> dotyczą ruchów, w których środek masy pozostaje nieruchomy. Cząsteczka liniowa może wykonywać dwa niezależne ruchy obrotowe, a nieliniowa – trzy. Po odjęciu tych rotacyjnych stopni swobody otrzymujemy liczbę wewnętrznych drgań: dla cząsteczki liniowej jest to 3N – 5, a dla nieliniowej – 3N – 6.</p><p>Drgania te można opisać za pomocą tzw. <strong>współrzędnych wewnętrznych</strong>, do których należą odległości między jądrami sąsiednich atomów (długości wiązań chemicznych) oraz kąty między wiązaniami. Wyróżnia się drgania, w których zmieniają się odległości między atomami (drgania rozciągające) oraz drgania, w których zmieniają się kąty między wiązaniami (drgania deformacyjne).</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile drgań normalnych ma cząsteczka liniowa złożona z N atomów?",
      "answer": "Cząsteczka liniowa ma 3N – 5 drgań normalnych."
    },
    {
      "question": "Ile drgań normalnych ma cząsteczka nieliniowa złożona z N atomów?",
      "answer": "Cząsteczka nieliniowa ma 3N – 6 drgań normalnych."
    },
    {
      "question": "Jakie współrzędne wewnętrzne opisują drgania cząsteczek wieloatomowych?",
      "answer": "Współrzędne wewnętrzne to długości wiązań chemicznych (odległości między jądrami sąsiednich atomów) oraz kąty między wiązaniami."
    }
  ]
};
