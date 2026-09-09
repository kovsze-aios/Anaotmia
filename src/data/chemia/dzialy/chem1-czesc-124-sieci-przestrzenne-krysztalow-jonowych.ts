import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_124_sieciPrzestrzenneKrysztalowJonowychData: StructuredChapter = {
  "chapterTitle": "Sieci przestrzenne kryształów jonowych",
  "toc": [
    {
      "title": "Typy sieci jonowych",
      "anchorId": "typy-sieci-jonowych"
    },
    {
      "title": "Czynniki decydujące o strukturze",
      "anchorId": "czynniki-decydujace-o-strukturze"
    },
    {
      "title": "Graniczne wartości stosunku promieni",
      "anchorId": "graniczne-wartosci-stosunku-promieni"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"typy-sieci-jonowych\">Typy sieci jonowych</h3><p>W krysztalach jonowych obserwuje się różnorodne typy sieci przestrzennych, które zależą od składu stechiometrycznego związku. Dla związków o wzorze ogólnym AB, takich jak chlorek cezu (CsCl), chlorek sodu (NaCl) czy siarczek cynku (ZnS), możliwe są odmienne struktury krystaliczne. Podobnie dla związków typu AB<sub>2</sub> (np. fluorek wapnia CaF<sub>2</sub>, ditlenek tytanu TiO<sub>2</sub>, ditlenek krzemu SiO<sub>2</sub>) oraz dla bardziej złożonych stechiometrii, np. A<sub>2</sub>B<sub>3</sub>, również występuje różnorodność sieci.</p><p>Kluczową cechą odróżniającą te struktury jest liczba koordynacyjna, czyli liczba najbliższych sąsiadów danego jonu. W sieci chlorku cezu kation cezu jest otoczony ośmioma anionami chlorkowymi, co daje liczbę koordynacyjną 8. W sieci chlorku sodu liczba koordynacyjna wynosi 6, a w blendzie cynkowej (sfaleryt) – 4. Dla związków typu AB<sub>2</sub> liczba koordynacyjna kationu osiąga wartość 8 w strukturze fluorytu, 6 w rutylu (TiO<sub>2</sub>) oraz 4 w niektórych odmianach SiO<sub>2</sub>.</p><p>Przykładem sieci o liczbie koordynacyjnej kationu 6 jest rutyl (TiO<sub>2</sub>). W tej strukturze każdy jon tytanu otoczony jest sześcioma jonami tlenkowymi, których środki tworzą nieco wydłużony oktaedr. Z kolei każdy jon tlenkowy sąsiaduje z trzema jonami tytanu rozmieszczonymi w narożach trójkąta. Zatem liczba koordynacyjna kationu wynosi 6, a anionu 3.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"czynniki-decydujace-o-strukturze\">Czynniki decydujące o strukturze</h3><p>Nasuwa się pytanie, jakie czynniki wpływają na wybór konkretnego typu sieci przez dany związek jonowy. Odpowiedź można znaleźć, rozważając jony jako sztywne kule o określonych promieniach, obdarzone ładunkiem elektrycznym. Jony oddziałują elektrostatycznie, dążąc do maksymalnego zbliżenia przeciwnych ładunków, co prowadzi do możliwie najwyższej liczby koordynacyjnej. Maksymalna liczba koordynacyjna w sieci krystalicznej wynosi 12, ale osiąga się ją tylko wtedy, gdy atomy (lub jony) mają jednakowe rozmiary, jak w sieci regularnej płasko centrowanej czy heksagonalnej o najgęstszym ułożeniu.</p><p>W kryształach jonowych kationy są zazwyczaj mniejsze od anionów. Im mniejszy jest stosunek promienia kationu (r<sub>A</sub>) do promienia anionu (r<sub>B</sub>), tym mniej anionów może zmieścić się wokół kationu. Proste rozważania geometryczne prowadzą do wniosku, że dla stosunku r<sub>A</sub>/r<sub>B</sub> &gt; 0,732 możliwe jest otoczenie kationu ośmioma anionami, czyli liczba koordynacyjna wynosi 8. Dla mniejszych wartości stosunku liczba koordynacyjna maleje.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"graniczne-wartosci-stosunku-promieni\">Graniczne wartości stosunku promieni</h3><p>Na podstawie modelu sztywnych kul można wyznaczyć przedziały stosunku promieni jonowych, dla których dana liczba koordynacyjna jest stabilna. Przedstawiono je poniżej:</p><ul><li>dla r<sub>A</sub>/r<sub>B</sub> &gt; 0,732 liczba koordynacyjna wynosi 8;</li><li>dla 0,414 &lt; r<sub>A</sub>/r<sub>B</sub> &lt; 0,732 liczba koordynacyjna wynosi 6;</li><li>dla 0,225 &lt; r<sub>A</sub>/r<sub>B</sub> &lt; 0,414 liczba koordynacyjna wynosi 4;</li><li>dla 0,155 &lt; r<sub>A</sub>/r<sub>B</sub> &lt; 0,225 liczba koordynacyjna wynosi 3.</li></ul><p>Przykłady ilustrujące te zależności: w chlorku cezu stosunek promienia kationu do anionu wynosi r<sub>Cs+</sub>/r<sub>Cl−</sub> = 167 pm / 181 pm = 0,92, co przekracza 0,732, dlatego struktura ma liczbę koordynacyjną 8. Podobnie w fluorku wapnia (CaF<sub>2</sub>) stosunek promieni r<sub>Ca2+</sub>/r<sub>F−</sub> = 100 pm / 133 pm = 0,75, co również kwalifikuje się do liczby koordynacyjnej 8. Z kolei w tlenku magnezu (MgO), który krystalizuje w strukturze NaCl, stosunek promieni r<sub>Mg2+</sub>/r<sub>O2−</sub> = 86 pm / 126 pm = 0,68, co mieści się w przedziale dla liczby koordynacyjnej 6, zgodnie z obserwowaną strukturą.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaka jest liczba koordynacyjna kationu w sieci chlorku cezu (CsCl)?",
      "answer": "8"
    },
    {
      "question": "Jaki jest przedział stosunku promieni jonowych (rA/rB) dla liczby koordynacyjnej 6?",
      "answer": "0,414 < rA/rB < 0,732"
    },
    {
      "question": "Dlaczego w kryształach jonowych maksymalna liczba koordynacyjna wynosi zazwyczaj mniej niż 12?",
      "answer": "Ponieważ kationy są zwykle mniejsze od anionów, co ogranicza liczbę anionów, które mogą się wokół nich zmieścić."
    }
  ]
};
