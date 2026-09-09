import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_172_entropiaJakoFunkcjaStanuData: StructuredChapter = {
  "chapterTitle": "Entropia jako funkcja stanu",
  "toc": [
    {
      "title": "Definicja entropii",
      "anchorId": "definicja-entropii"
    },
    {
      "title": "Zmiana entropii w procesach odwracalnych i nieodwracalnych",
      "anchorId": "zmiana-entropii-procesy"
    },
    {
      "title": "Obliczanie zmiany entropii dla izotermicznej ekspansji gazu doskonałego",
      "anchorId": "obliczanie-entropii-ekspansja"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"definicja-entropii\">Definicja entropii</h3><p>W termodynamice, oprócz entalpii swobodnej, istnieje jeszcze jedna ważna funkcja stanu – <strong>entropia</strong> (oznaczana symbolem S). Pozwala ona przewidywać, czy dany proces może zachodzić samorzutnie w określonych warunkach. Entropię definiuje się poprzez jej zmianę infinitezymalną dS, która jest równa ilorazowi ciepła wymienionego w procesie odwracalnym (dq<sub>odwr</sub>) i temperatury bezwzględnej (T), w której to ciepło jest wymieniane:</p><p>dS = dq<sub>odwr</sub> / T</p><p>Ponieważ entropia jest funkcją stanu, jej zmiana między dwoma stanami układu zależy wyłącznie od tych stanów, a nie od drogi przemiany. Oznacza to, że dla danej pary stanów skrajnych zmiana entropii jest zawsze taka sama, niezależnie od tego, czy proces jest odwracalny, czy nieodwracalny.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zmiana-entropii-procesy\">Zmiana entropii w procesach odwracalnych i nieodwracalnych</h3><p>W praktyce obliczenie zmiany entropii dla procesu nieodwracalnego jest możliwe tylko wtedy, gdy potraktujemy go jako ciąg stanów równowagi, czyli zastąpimy go procesem odwracalnym prowadzącym między tymi samymi stanami początkowym i końcowym. Dla procesu nieodwracalnego zachodzi nierówność:</p><p>dq<sub>nieodwr</sub> / T &lt; dq<sub>odwr</sub> / T = dS</p><p>Oznacza to, że w procesie nieodwracalnym rzeczywista zmiana entropii jest większa niż wynikająca z wymiany ciepła nieodwracalnego; dlatego do obliczeń zawsze wykorzystuje się ciepło procesu odwracalnego.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"obliczanie-entropii-ekspansja\">Obliczanie zmiany entropii dla izotermicznej ekspansji gazu doskonałego</h3><p>Rozważmy izotermiczne, odwracalne rozprężanie gazu doskonałego od objętości V<sub>1</sub> do V<sub>2</sub>. Ponieważ temperatura jest stała, całkowanie równania definicyjnego prowadzi do prostego wyrażenia:</p><p>ΔS = S<sub>2</sub> − S<sub>1</sub> = ∫(dq<sub>odwr</sub>/T) = q<sub>odwr</sub>/T</p><p>gdzie q<sub>odwr</sub> oznacza całkowite ciepło wymienione w tym procesie odwracalnym. Dla gazu doskonałego w przemianie izotermicznej ciepło to jest równe pracy wykonanej przez gaz, co pozwala na dalsze obliczenia w zależności od zmiany objętości.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Zdefiniuj entropię i podaj jej jednostkę w układzie SI.",
      "answer": "Entropia (S) jest funkcją stanu, której zmianę definiuje wzór dS = dq_odwr / T, gdzie dq_odwr to ciepło wymienione w procesie odwracalnym, a T to temperatura bezwzględna. Jednostką entropii jest dżul na kelwin (J/K)."
    },
    {
      "question": "Dlaczego zmianę entropii w procesie nieodwracalnym można obliczyć, rozpatrując proces odwracalny?",
      "answer": "Ponieważ entropia jest funkcją stanu, jej zmiana zależy tylko od stanu początkowego i końcowego, a nie od drogi przemiany. Dlatego dla procesu nieodwracalnego można wybrać dowolną drogę odwracalną prowadzącą między tymi samymi stanami i obliczyć ΔS jako całkę dq_odwr/T."
    },
    {
      "question": "Jak obliczyć zmianę entropii dla izotermicznego, odwracalnego rozprężania gazu doskonałego?",
      "answer": "Dla procesu izotermicznego (T = const) zmiana entropii wynosi ΔS = q_odwr / T, gdzie q_odwr to ciepło wymienione w procesie odwracalnym. Dla gazu doskonałego q_odwr = nRT ln(V2/V1), więc ΔS = nR ln(V2/V1)."
    }
  ]
};
