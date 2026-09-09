import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_89_punktoweGrupySymetriiData: StructuredChapter = {
  "chapterTitle": "Punktowe grupy symetrii",
  "toc": [
    {
      "title": "Wprowadzenie do punktowych grup symetrii",
      "anchorId": "wprowadzenie-do-punktowych-grup-symetrii"
    },
    {
      "title": "Klasyfikacja punktowych grup symetrii",
      "anchorId": "klasyfikacja-punktowych-grup-symetrii"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-punktowych-grup-symetrii\">Wprowadzenie do punktowych grup symetrii</h3><p>W każdej cząsteczce istnieje co najmniej jeden punkt, który pozostaje nieruchomy podczas wszystkich operacji symetrii. Ten punkt jest wspólny dla wszystkich elementów symetrii danej cząsteczki. Na przykład w cząsteczce trifluorku boru (BF<sub>3</sub>) punktem tym jest miejsce przecięcia wszystkich osi i płaszczyzn symetrii, w którym znajduje się jądro atomu boru.</p><p>Zbiór wszystkich operacji symetrii możliwych do wykonania na danej cząsteczce tworzy <strong>punktową grupę symetrii</strong>. Punktowe grupy symetrii stanowią podstawę klasyfikacji cząsteczek ze względu na ich symetrię.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"klasyfikacja-punktowych-grup-symetrii\">Klasyfikacja punktowych grup symetrii</h3><p>Punktowe grupy symetrii dzieli się na cztery główne rodzaje. Pierwszy rodzaj obejmuje grupy bez osi symetrii, takie jak:</p><ul><li><strong>Grupa C<sub>1</sub></strong> – zawiera tylko operację tożsamościową <em>E</em>; przykładem jest cząsteczka CHBrClF.</li><li><strong>Grupa C<sub>s</sub></strong> – oprócz operacji <em>E</em> zawiera odbicie w płaszczyźnie symetrii σ<sub>v</sub>; przykładem jest cząsteczka SO<sub>2</sub>BrCl.</li><li><strong>Grupa C<sub>i</sub></strong> – oprócz operacji <em>E</em> zawiera inwersję <em>i</em>; przykładem jest cząsteczka HBrClC–CClBrH.</li></ul><p>Drugi rodzaj grup charakteryzuje się występowaniem jednej osi symetrii o najwyższej krotności. Grupy oznaczone symbolem C<sub>n</sub> mają oś n-krotną jako element generujący; dla n = 2 jest to oś dwukrotna.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest punktowa grupa symetrii?",
      "answer": "Jest to zbiór wszystkich operacji symetrii, które można wykonać na danej cząsteczce, pozostawiający co najmniej jeden punkt nieruchomy."
    },
    {
      "question": "Jakie grupy należą do pierwszego rodzaju punktowych grup symetrii?",
      "answer": "Do pierwszego rodzaju należą grupy C1, Cs i Ci, które nie mają osi symetrii."
    },
    {
      "question": "Podaj przykład cząsteczki należącej do grupy C1.",
      "answer": "Przykładem jest cząsteczka CHBrClF."
    }
  ]
};
