import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_175_wplywTemperaturyICisnieniaNaStanRownowagiChemicznejData: StructuredChapter = {
  "chapterTitle": "Wpływ temperatury i ciśnienia na stan równowagi chemicznej",
  "toc": [
    {
      "title": "Zależność stałej równowagi od temperatury",
      "anchorId": "zaleznosc-stalej-rownowagi-od-temperatury"
    },
    {
      "title": "Termodynamiczne podstawy zależności stałej równowagi od temperatury",
      "anchorId": "termodynamiczne-podstawy-zaleznosci-stalej-rownowagi-od-temperatury"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"zaleznosc-stalej-rownowagi-od-temperatury\">Zależność stałej równowagi od temperatury</h3><p>Jak wspomniano wcześniej, stała równowagi <strong>K<sub>p</sub></strong> (stosowana dla reakcji w fazie gazowej) oraz stała <strong>K</strong> (dla reakcji w roztworach) zależą wyłącznie od temperatury. Ilustruje to przykład syntezy amoniaku z azotu i wodoru:</p><p>3 H<sub>2</sub> + N<sub>2</sub> ⇌ 2 NH<sub>3</sub>, &nbsp;ΔH<sub>298</sub> = –92,38 kJ·mol<sup>–1</sup>.</p><p>Reakcja ta jest egzotermiczna, a jej stała równowagi maleje wraz ze wzrostem temperatury. Dla porównania, reakcja węgla z dwutlenkiem węgla:</p><p>C + CO<sub>2</sub> ⇌ 2 CO, &nbsp;ΔH<sub>298</sub> = +172,4 kJ·mol<sup>–1</sup>,</p><p>jest endotermiczna, więc jej stała równowagi rośnie ze wzrostem temperatury, a maleje przy jej obniżaniu. W wysokich temperaturach równowaga przesuwa się w prawo, natomiast w niskich – w lewo.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"termodynamiczne-podstawy-zaleznosci-stalej-rownowagi-od-temperatury\">Termodynamiczne podstawy zależności stałej równowagi od temperatury</h3><p>Zależność stałej równowagi od temperatury można wyprowadzić, rozważając reakcję syntezy amoniaku w warunkach standardowych. Załóżmy, że przed rozpoczęciem reakcji azot i wodór znajdują się w osobnych zbiornikach w stanie standardowym (T = 298,15 K, p = 1,01325·10<sup>5</sup> Pa), a produkt – amoniak – jest zbierany w osobnym zbiorniku również w warunkach standardowych.</p><p>Dla reakcji N<sub>2</sub> + 3 H<sub>2</sub> ⇌ 2 NH<sub>3</sub> zmiana entalpii swobodnej w ogólnym przypadku wynosi:</p><p>ΔG = 2 μ<sub>NH<sub>3</sub></sub> – μ<sub>N<sub>2</sub></sub> – 3 μ<sub>H<sub>2</sub></sub>.</p><p>W warunkach standardowych potencjały chemiczne są równe potencjałom standardowym, zatem:</p><p>ΔG° = 2 μ°<sub>NH<sub>3</sub></sub> – μ°<sub>N<sub>2</sub></sub> – 3 μ°<sub>H<sub>2</sub></sub>.</p><p>Zgodnie z wcześniej wyprowadzonymi zależnościami, prawa strona tego równania jest równa –RT ln K, co prowadzi do ważnego wzoru:</p><p><strong>ΔG° = –RT ln K</strong>.</p><p>To wyrażenie umożliwia obliczanie stałej równowagi na podstawie standardowej entalpii swobodnej reakcji. W termodynamice wyprowadza się również związek między entalpią swobodną, entalpią i entropią:</p><p><strong>ΔG = ΔH – TΔS</strong>,</p><p>a dla warunków standardowych:</p><p><strong>ΔG° = ΔH° – TΔS°</strong>.</p><p>Połączenie tych równań pozwala przewidzieć, jak zmiana temperatury wpływa na stałą równowagi: dla reakcji egzotermicznych wzrost temperatury zmniejsza K, a dla endotermicznych – zwiększa K.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak zmienia się stała równowagi reakcji egzotermicznej wraz ze wzrostem temperatury?",
      "answer": "Stała równowagi maleje wraz ze wzrostem temperatury dla reakcji egzotermicznych."
    },
    {
      "question": "Jaki jest związek między standardową entalpią swobodną a stałą równowagi?",
      "answer": "ΔG° = –RT ln K."
    },
    {
      "question": "Dlaczego reakcja C + CO2 ⇌ 2 CO przesuwa się w prawo w wysokich temperaturach?",
      "answer": "Ponieważ jest to reakcja endotermiczna, wzrost temperatury zwiększa jej stałą równowagi, przesuwając równowagę w kierunku produktów."
    }
  ]
};
