import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_18_kinetykaRozpaduPromieniotworczegoIRownowagaPromieniotworczaData: StructuredChapter = {
  "chapterTitle": "Kinetyka rozpadu promieniotwórczego i równowaga promieniotwórcza",
  "toc": [
    {
      "title": "Szybkość rozpadu promieniotwórczego",
      "anchorId": "szybkosc-rozpadu-promieniotworczego"
    },
    {
      "title": "Prawo rozpadu promieniotwórczego",
      "anchorId": "prawo-rozpadu-promieniotworczego"
    },
    {
      "title": "Okres półtrwania",
      "anchorId": "okres-poltrwania"
    },
    {
      "title": "Równowaga promieniotwórcza",
      "anchorId": "rownowaga-promieniotworcza"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"szybkosc-rozpadu-promieniotworczego\">Szybkość rozpadu promieniotwórczego</h3><p>Rozpad nietrwałych jąder atomowych, zarówno tych występujących w przyrodzie, jak i otrzymywanych sztucznie, podlega charakterystycznej prawidłowości: szybkość tego procesu jest w każdym momencie wprost proporcjonalna do liczby atomów, które jeszcze nie uległy rozpadowi (oznaczanej jako <em>N</em>).</p><p>Matematycznie zależność tę wyraża równanie różniczkowe: d<em>N</em>/d<em>t</em> = –λ<em>N</em>, gdzie d<em>N</em>/d<em>t</em> oznacza szybkość rozpadu, a λ to współczynnik proporcjonalności nazywany <strong>stałą rozpadu promieniotwórczego</strong>. Znak minus wynika z tego, że liczba atomów maleje w czasie, a szybkość musi być wielkością dodatnią.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"prawo-rozpadu-promieniotworczego\">Prawo rozpadu promieniotwórczego</h3><p>Całkując powyższe równanie różniczkowe, otrzymujemy zależność opisującą liczbę atomów pozostałych po czasie <em>t</em>. Przyjmując, że w chwili początkowej (<em>t</em> = 0) liczba atomów wynosiła <em>N</em><sub>0</sub>, dochodzimy do wzoru: <em>N</em> = <em>N</em><sub>0</sub>·e<sup>–λ<em>t</em></sup>. Jest to fundamentalne <strong>prawo rozpadu promieniotwórczego</strong>, które ma charakter wykładniczy.</p><p>Z prawa tego wynika, że liczba nietrwałych jąder maleje w czasie w sposób ciągły i asymptotycznie zbliża się do zera, nigdy jednak nie osiąga go w skończonym czasie.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"okres-poltrwania\">Okres półtrwania</h3><p>Na podstawie prawa rozpadu można zdefiniować <strong>okres półtrwania</strong> (T<sub>1/2</sub>) jako czas, po którym połowa początkowej liczby jąder danego izotopu ulegnie rozpadowi. Podstawiając do wzoru <em>N</em> = <em>N</em><sub>0</sub>/2 oraz <em>t</em> = T<sub>1/2</sub>, otrzymujemy zależność: T<sub>1/2</sub> = ln 2 / λ.</p><p>Okres półtrwania jest wielkością charakterystyczną dla danego nuklidu i nie zależy od początkowej ilości substancji. Jest to najczęściej używana miara szybkości rozpadu promieniotwórczego. Na przykład dla izotopu radu <sup>226</sup>Ra wynosi on 1622 lata, co oznacza, że po tym czasie z dowolnej ilości radu pozostanie połowa, po kolejnych 1622 latach – czwarta część, i tak dalej.</p><p>Zakres wartości okresów półtrwania różnych nuklidów jest ogromny – od miliardów lat (np. dla <sup>238</sup>U jest to 4,51·10<sup>9</sup> lat) po ułamki sekund (np. dla pewnego izotopu polonu <sup>Po</sup> jest to 1,62·10<sup>–4</sup> s).</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"rownowaga-promieniotworcza\">Równowaga promieniotwórcza</h3><p>Większość naturalnych pierwiastków promieniotwórczych rozpada się, tworząc jądra nowych pierwiastków, które również są nietrwałe i ulegają dalszemu rozpadowi. W ten sposób powstają <strong>szeregi promieniotwórcze</strong>, czyli ciągi przemian jądrowych prowadzące do stabilnych izotopów.</p><p>Rozważmy izotop X, który został wyodrębniony w stanie czystym. Już wkrótce pojawia się w nim produkt jego rozpadu – izotop X<sub>1</sub>, również promieniotwórczy, który z kolei rozpada się do X<sub>2</sub>, i tak dalej. Początkowo szybkość rozpadu X jest mała, bo liczba jego atomów jest mała. W miarę upływu czasu liczba atomów X maleje, a liczba atomów X<sub>1</sub> rośnie, co powoduje, że szybkość rozpadu X<sub>1</sub> wzrasta. Po pewnym czasie szybkości rozpadu obu izotopów wyrównują się: d<em>N</em>/d<em>t</em> = d<em>N</em><sub>1</sub>/d<em>t</em>. Podobnie wyrównują się szybkości rozkładu kolejnych ogniw szeregu: d<em>N</em><sub>1</sub>/d<em>t</em> = d<em>N</em><sub>2</sub>/d<em>t</em> = … = d<em>N</em><sub>m</sub>/d<em>t</em>. Taki stan nazywamy <strong>równowagą promieniotwórczą</strong>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak brzmi matematyczne sformułowanie prawa rozpadu promieniotwórczego?",
      "answer": "N = N₀·e^(–λt), gdzie N to liczba jąder po czasie t, N₀ – liczba początkowa, λ – stała rozpadu."
    },
    {
      "question": "Co to jest okres półtrwania i od czego zależy?",
      "answer": "Okres półtrwania to czas, po którym połowa jąder danego izotopu ulega rozpadowi. Jest stały dla danego nuklidu i nie zależy od początkowej ilości substancji."
    },
    {
      "question": "Na czym polega równowaga promieniotwórcza w szeregu promieniotwórczym?",
      "answer": "Polega na wyrównaniu szybkości rozpadu kolejnych ogniw szeregu, co oznacza, że liczba atomów każdego izotopu pośredniego pozostaje stała w czasie."
    }
  ]
};
