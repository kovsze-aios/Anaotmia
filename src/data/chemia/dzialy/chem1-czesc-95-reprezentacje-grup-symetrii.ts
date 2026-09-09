import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_95_reprezentacjeGrupSymetriiData: StructuredChapter = {
  "chapterTitle": "Reprezentacje grup symetrii",
  "toc": [
    {
      "title": "Rozkład reprezentacji na reprezentacje nieprzywiedlne",
      "anchorId": "rozkład-reprezentacji"
    },
    {
      "title": "Symbole reprezentacji nieprzywiedlnych",
      "anchorId": "symbole-reprezentacji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"rozkład-reprezentacji\">Rozkład reprezentacji na reprezentacje nieprzywiedlne</h3><p>W analizie symetrii cząsteczek często spotykamy się z sytuacją, w której macierz reprezentacji grupy można podzielić na mniejsze macierze, tworzące tzw. bloki diagonalne. Na przykład dla grupy punktowej C<sub>4v</sub> macierz trójwymiarowa, opisująca transformacje współrzędnych punktu, może zostać rozłożona na macierz dwuwymiarową i jednowymiarową. Oznacza to, że pełna reprezentacja trójwymiarowa jest sumą prostą dwóch reprezentacji o mniejszych wymiarach.</p><p>Matematycznie odpowiada to faktowi, że podczas wszystkich operacji symetrii grupy C<sub>4v</sub> zmiana współrzędnej <em>z</em> jest niezależna od zmian współrzędnych <em>x</em> i <em>y</em>, podczas gdy zmiany <em>x</em> i <em>y</em> są ze sobą powiązane. Dzięki temu możemy badać zachowanie współrzędnej <em>z</em> oddzielnie, co upraszcza analizę.</p><p>Reprezentacje, których nie można już rozłożyć na prostsze, nazywamy <strong>reprezentacjami nieprzywiedlnymi</strong> (nieredukowalnymi). Natomiast reprezentację, którą można podzielić na reprezentacje prostsze, określamy mianem <strong>reprezentacji przywiedlnej</strong> (redukowalnej). Teoria grup dostarcza metod rozkładu reprezentacji przywiedlnych na sumę reprezentacji nieprzywiedlnych.</p><p>Liczba reprezentacji nieprzywiedlnych dla danej grupy punktowej jest ograniczona. Dla grupy C<sub>4v</sub> istnieje ich dokładnie pięć.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"symbole-reprezentacji\">Symbole reprezentacji nieprzywiedlnych</h3><p>W celu jednoznacznego oznaczenia reprezentacji nieprzywiedlnych stosuje się specjalną notację. Reprezentacje jednowymiarowe oznacza się literami <strong>A</strong> lub <strong>B</strong>, reprezentacje dwuwymiarowe – literą <strong>E</strong>, a trójwymiarowe – literą <strong>T</strong> (czasami <strong>F</strong>). W przypadku reprezentacji E i T zmiany współrzędnych (lub innych wielkości) podczas operacji symetrii są od siebie wzajemnie zależne.</p><p>Symbol <strong>A</strong> przypisuje się reprezentacji, która jest symetryczna względem obrotu wokół głównej osi symetrii, tzn. obrót nie zmienia znaku funkcji. Jeśli natomiast obrót wokół osi głównej zmienia znak funkcji (z „+” na „−”), reprezentację oznacza się symbolem <strong>B</strong>.</p><p>Dodatkowe informacje o symetrii reprezentacji przekazują wskaźniki dolne i górne. Wskaźniki 1 i 2 przy literach A i B oznaczają odpowiednio symetrię (wskaźnik 1) lub antysymetrię (wskaźnik 2) względem obrotu wokół osi dwukrotnej prostopadłej do osi głównej. Gdy taka oś nie występuje, ale istnieje pozioma płaszczyzna symetrii σ<sub>h</sub>, wskaźniki 1 i 2 stosuje się analogicznie do symetrii względem tej płaszczyzny.</p><p>Symetrię lub antysymetrię względem środka symetrii oznaczają wskaźniki <strong>g</strong> i <strong>u</strong> (od niemieckich słów <em>gerade</em> – parzysty, i <em>ungerade</em> – nieparzysty). Z kolei znaki prim (′) i bis (″) – np. A′ i A″ – informują o symetrii (prim) lub antysymetrii (bis) względem płaszczyzny pionowej σ<sub>v</sub>.</p><p>Na przykład w grupie C<sub>4v</sub> reprezentację jednowymiarową, która powstała z rozkładu reprezentacji przywiedlnej dla współrzędnej <em>z</em>, oznacza się jako A<sub>1</sub>, ponieważ obrót wokół osi C<sub>4</sub> nie zmienia kierunku osi <em>z</em>. Oprócz tego grupa C<sub>4v</sub> ma jeszcze trzy inne jednowymiarowe reprezentacje nieprzywiedlne: A<sub>2</sub>, B<sub>1</sub> i B<sub>2</sub>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest reprezentacja nieprzywiedlna?",
      "answer": "Reprezentacja nieprzywiedlna to taka reprezentacja grupy, której nie można rozłożyć na prostsze reprezentacje."
    },
    {
      "question": "Jakie symbole stosuje się dla reprezentacji jednowymiarowych, dwuwymiarowych i trójwymiarowych?",
      "answer": "Jednowymiarowe oznacza się A lub B, dwuwymiarowe – E, trójwymiarowe – T (lub F)."
    },
    {
      "question": "Co oznaczają wskaźniki g i u przy symbolach reprezentacji?",
      "answer": "Wskaźniki g i u oznaczają symetrię (g, gerade) lub antysymetrię (u, ungerade) względem środka symetrii."
    }
  ]
};
