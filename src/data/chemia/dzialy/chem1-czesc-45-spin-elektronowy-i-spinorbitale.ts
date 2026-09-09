import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_45_spinElektronowyISpinorbitaleData: StructuredChapter = {
  "chapterTitle": "Spin elektronowy i spinorbitale",
  "toc": [
    {
      "title": "Spinowy moment pędu",
      "anchorId": "spinowy-moment-pedu"
    },
    {
      "title": "Spinowa liczba kwantowa i jej składowa",
      "anchorId": "spinowa-liczba-kwantowa"
    },
    {
      "title": "Funkcje spinowe i spinorbitale",
      "anchorId": "funkcje-spinowe-i-spinorbitale"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"spinowy-moment-pedu\">Spinowy moment pędu</h3><p>Elektron, oprócz orbitalnego momentu pędu, posiada również wewnętrzny moment pędu zwany spinem. Spin jest fundamentalną właściwością cząstek, nie mającą odpowiednika w mechanice klasycznej. W mechanice kwantowej spinowy moment pędu opisuje się wzorem analogicznym do orbitalnego, ale z użyciem spinowej liczby kwantowej <em>s</em>.</p><p>Dla elektronu spinowa liczba kwantowa <em>s</em> przyjmuje zawsze wartość 1/2. Zatem spinowy moment pędu σ można wyrazić jako:</p><p>σ = √(s(s+1)) · h/(2π)</p><p>gdzie h to stała Plancka. Podstawiając s = 1/2, otrzymujemy σ = √(3/4) · h/(2π) = (√3/2) · h/(2π).</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"spinowa-liczba-kwantowa\">Spinowa liczba kwantowa i jej składowa</h3><p>Podobnie jak orbitalny moment pędu, spinowy moment pędu ma składową wzdłuż wyróżnionego kierunku (np. osi z), która również jest skwantowana. Składową tę oznacza się σ<sub>z</sub> i wyraża wzorem:</p><p>σ<sub>z</sub> = m<sub>s</sub> · h/(2π)</p><p>gdzie m<sub>s</sub> to magnetyczna spinowa liczba kwantowa. Liczba m<sub>s</sub> może przyjmować wartości od -s do +s, różniące się o 1. Dla elektronu (s = 1/2) oznacza to dwie możliwe wartości: m<sub>s</sub> = +1/2 oraz m<sub>s</sub> = -1/2.</p><p>Elektrony z m<sub>s</sub> = +1/2 nazywa się często elektronami o spinie dodatnim (lub spinie „w górę”), a te z m<sub>s</sub> = -1/2 – elektronami o spinie ujemnym (lub spinie „w dół”).</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"funkcje-spinowe-i-spinorbitale\">Funkcje spinowe i spinorbitale</h3><p>Funkcja falowa Ψ(n, l, m) opisuje przestrzenne zachowanie elektronu, ale nie uwzględnia jego spinu. Aby w pełni opisać stan elektronu, konieczne jest wprowadzenie funkcji spinowej. Dla elektronu o spinie dodatnim (m<sub>s</sub> = +1/2) funkcję spinową oznacza się symbolem α, natomiast dla elektronu o spinie ujemnym (m<sub>s</sub> = -1/2) – symbolem β.</p><p>Pełna funkcja falowa, uwzględniająca zarówno część przestrzenną, jak i spinową, nazywana jest spinorbitalem. Można ją zapisać jako:</p><p>φ(n, l, m, m<sub>s</sub>) = Ψ(n, l, m) · α  (dla m<sub>s</sub> = +1/2)</p><p>lub</p><p>φ(n, l, m, m<sub>s</sub>) = Ψ(n, l, m) · β  (dla m<sub>s</sub> = -1/2)</p><p>Spinorbitale stanowią podstawę opisu elektronów w atomach wieloelektronowych, umożliwiając uwzględnienie spinu w obliczeniach kwantowochemicznych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie wartości może przyjmować spinowa liczba kwantowa m_s dla elektronu?",
      "answer": "Dla elektronu spinowa liczba kwantowa s = 1/2, więc m_s może przyjmować wartości +1/2 i -1/2."
    },
    {
      "question": "Co to jest spinorbital?",
      "answer": "Spinorbital to pełna funkcja falowa elektronu, która uwzględnia zarówno część przestrzenną (Ψ), jak i spinową (α lub β)."
    }
  ]
};
