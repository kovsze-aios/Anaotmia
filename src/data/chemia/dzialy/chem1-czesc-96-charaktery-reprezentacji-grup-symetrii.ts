import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_96_charakteryReprezentacjiGrupSymetriiData: StructuredChapter = {
  "chapterTitle": "Charaktery reprezentacji grup symetrii",
  "toc": [
    {
      "title": "Definicja charakteru reprezentacji",
      "anchorId": "definicja-charakteru-reprezentacji"
    },
    {
      "title": "Przykład dla grupy C4",
      "anchorId": "przyklad-dla-grupy-c4"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-charakteru-reprezentacji\">Definicja charakteru reprezentacji</h3><p>W teorii grup, aby określić, które reprezentacje nieprzywiedlne składają się na daną reprezentację przywiedlną, nie jest konieczna pełna znajomość macierzy. Wystarczy znać wielkość zwaną <strong>charakterem reprezentacji</strong>. Charakter reprezentacji definiuje się jako sumę elementów macierzy znajdujących się na jej głównej przekątnej, czyli elementów diagonalnych.</p><p>Dla przykładowej macierzy M o elementach a<sub>11</sub>, a<sub>12</sub>, a<sub>13</sub>, a<sub>21</sub>, a<sub>22</sub>, a<sub>23</sub>, a<sub>31</sub>, a<sub>32</sub>, a<sub>33</sub>, charakter χ(M) wynosi a<sub>11</sub> + a<sub>22</sub> + a<sub>33</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyklad-dla-grupy-c4\">Przykład dla grupy C<sub>4</sub></h3><p>Rozważmy grupę punktową C<sub>4</sub>. Dla reprezentacji przywiedlnej Γ, jej charaktery dla poszczególnych operacji symetrii (E, C<sub>4</sub>, C<sub>2</sub>, σ<sub>v</sub>, σ<sub>d</sub>) są sumą charakterów odpowiednich reprezentacji nieprzywiedlnych. Na przykład, jeśli reprezentacja przywiedlna Γ jest sumą prostą reprezentacji A<sub>1</sub> i B<sub>1</sub>, to jej charakter dla każdej operacji jest sumą charakterów tych reprezentacji.</p><p>Dla reprezentacji nieprzywiedlnych A<sub>1</sub> i B<sub>1</sub> w grupie C<sub>4</sub> wartości charakterów są następujące:</p><ul><li>Dla A<sub>1</sub>: χ(E) = 1, χ(C<sub>4</sub>) = 1, χ(C<sub>2</sub>) = 1, χ(σ<sub>v</sub>) = 1, χ(σ<sub>d</sub>) = 1.</li><li>Dla B<sub>1</sub>: χ(E) = 1, χ(C<sub>4</sub>) = -1, χ(C<sub>2</sub>) = 1, χ(σ<sub>v</sub>) = -1, χ(σ<sub>d</sub>) = -1.</li></ul><p>Łatwo zauważyć, że charaktery reprezentacji przywiedlnej Γ = A<sub>1</sub> ⊕ B<sub>1</sub> są sumą odpowiednich charakterów obu reprezentacji nieprzywiedlnych. Ta addytywność charakterów jest podstawą analizy reprezentacji w spektroskopii i chemii kwantowej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest charakter reprezentacji?",
      "answer": "Charakter reprezentacji to suma elementów diagonalnych macierzy reprezentacji dla danej operacji symetrii."
    },
    {
      "question": "Jakie są charaktery reprezentacji nieprzywiedlnej A1 w grupie C4?",
      "answer": "Dla A1: χ(E)=1, χ(C4)=1, χ(C2)=1, χ(σv)=1, χ(σd)=1."
    },
    {
      "question": "Jak można rozłożyć reprezentację przywiedlną na reprezentacje nieprzywiedlne?",
      "answer": "Korzystając z addytywności charakterów: charakter reprezentacji przywiedlnej jest sumą charakterów reprezentacji nieprzywiedlnych, co pozwala na ich identyfikację."
    }
  ]
};
