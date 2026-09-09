import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_32_funkcjeFaloweIRownanieSchrDingeraData: StructuredChapter = {
  "chapterTitle": "Funkcje falowe i równanie Schrödingera",
  "toc": [
    {
      "title": "Opis układu w mechanice kwantowej",
      "anchorId": "opis-ukladu-w-mechanice-kwantowej"
    },
    {
      "title": "Gęstość prawdopodobieństwa i warunek normalizacji",
      "anchorId": "gestosc-prawdopodobienstwa-i-warunek-normalizacji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"opis-ukladu-w-mechanice-kwantowej\">Opis układu w mechanice kwantowej</h3><p>W mechanice kwantowej rezygnujemy z jednoczesnego, dokładnego określenia położenia i pędu cząstki. Układ można opisywać albo za pomocą współrzędnych położenia, albo za pomocą pędów – mówimy wtedy odpowiednio o <strong>przedstawieniu położeniowym</strong> lub <strong>pędowym</strong>. W dalszych rozważaniach stosujemy wyłącznie przedstawienie położeniowe.</p><p>Należy podkreślić, że w przedstawieniu położeniowym współrzędne cząstki są znane tylko z pewną dokładnością, np. współrzędna <em>x</em> jest określona z niepewnością Δ<em>x</em>. Podobnie w przedstawieniu pędowym pęd jest znany z dokładnością Δ<em>p</em>. Oznacza to, że zarówno położenie, jak i pęd są opisywane probabilistycznie.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"gestosc-prawdopodobienstwa-i-warunek-normalizacji\">Gęstość prawdopodobieństwa i warunek normalizacji</h3><p>Zamiast podawać dokładne położenie cząstki, mechanika kwantowa określa prawdopodobieństwo znalezienia jej w danym elemencie przestrzeni. Jeśli przez <em>W</em> oznaczymy prawdopodobieństwo znalezienia cząstki w objętości d<em>V</em>, to iloraz <em>W</em>/d<em>V</em> nazywamy <strong>gęstością prawdopodobieństwa</strong> i oznaczamy grecką literą ρ (ro). Zatem:</p><p>ρ = <em>W</em>/d<em>V</em>.</p><p>Prawdopodobieństwo znalezienia cząstki w elemencie d<em>V</em> wynosi więc <em>W</em> = ρ d<em>V</em>. Gęstość prawdopodobieństwa zależy od położenia, co zapisujemy jako funkcję współrzędnych:</p><p>ρ = ρ(<em>x</em>, <em>y</em>, <em>z</em>).</p><p>Skala prawdopodobieństwa jest tak dobrana, że wartość 1 oznacza pewność znalezienia cząstki w danej objętości, a 0 – pewność jej nieobecności. Jeśli cząstka znajduje się w rozważanym układzie współrzędnych, to całka z gęstości prawdopodobieństwa po całej przestrzeni musi być równa 1:</p><p>∫<sub>V</sub> ρ d<em>V</em> = 1.</p><p>Równanie to nosi nazwę <strong>warunku normalizacji</strong> funkcji falowej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak nazywa się wielkość określająca prawdopodobieństwo znalezienia cząstki w jednostce objętości?",
      "answer": "Gęstość prawdopodobieństwa (oznaczana symbolem ρ)."
    },
    {
      "question": "Jaka jest wartość całki z gęstości prawdopodobieństwa po całej przestrzeni dla cząstki, która istnieje w układzie?",
      "answer": "Całka ta jest równa 1 (warunek normalizacji)."
    }
  ]
};
