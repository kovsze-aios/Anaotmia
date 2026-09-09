import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_36_orbitaleAtomoweWodoruData: StructuredChapter = {
  "chapterTitle": "Orbitale atomowe wodoru",
  "toc": [
    {
      "title": "Funkcje radialne i kątowe orbitali",
      "anchorId": "funkcje-radialne-i-katowe-orbitali"
    },
    {
      "title": "Prawdopodobieństwo radialne",
      "anchorId": "prawdopodobienstwo-radialne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"funkcje-radialne-i-katowe-orbitali\">Funkcje radialne i kątowe orbitali</h3><p>Dla atomu wodoru funkcje falowe orbitali można przedstawić jako iloczyn części radialnej <em>R</em>(<em>r</em>) oraz części kątowej <em>Y</em>(θ, φ). Część radialna zależy od liczb kwantowych <em>n</em> i <em>l</em>, natomiast część kątowa od liczb <em>l</em> i <em>m</em>. Wartości funkcji <em>R</em>(<em>r</em>) dla różnych zestawów liczb kwantowych są zestawione w odpowiednich tablicach, a funkcje <em>Y</em>(θ, φ) mają postać harmonik sferycznych.</p><p>Łącząc odpowiednie funkcje radialne i kątowe, otrzymuje się pełne funkcje falowe orbitali atomowych wodoru dla stanów o <em>n</em> = 1, 2 i 3. W praktyce często stosuje się rzeczywiste kombinacje liniowe funkcji o przeciwnych znakach magnetycznej liczby kwantowej <em>m</em> (np. dla <em>m</em> = 1 i <em>m</em> = −1), co prowadzi do orbitali o symetrii rzeczywistej, takich jak orbitale <em>p</em> i <em>d</em>.</p><p>W tabelach podano również symbole orbitali, które są używane w dalszych rozważaniach. Dla orbitali <em>s</em> funkcja radialna ma postać malejącą wykładniczo, dla orbitali <em>p</em> pojawia się dodatkowy czynnik liniowy, a dla orbitali <em>d</em> czynnik kwadratowy, co wpływa na kształt i rozkład przestrzenny gęstości elektronowej.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"prawdopodobienstwo-radialne\">Prawdopodobieństwo radialne</h3><p>Prawdopodobieństwo znalezienia elektronu w cienkiej warstwie kulistej o promieniu <em>r</em> i grubości d<em>r</em> jest proporcjonalne do wyrażenia 4π<em>r</em><sup>2</sup>|<em>R</em>(<em>r</em>)|<sup>2</sup> d<em>r</em>. Funkcja 4π<em>r</em><sup>2</sup>|<em>R</em>(<em>r</em>)|<sup>2</sup> nazywana jest radialną gęstością prawdopodobieństwa i opisuje rozkład prawdopodobieństwa w funkcji odległości od jądra.</p><p>Wykresy radialnej gęstości prawdopodobieństwa dla orbitali 1<em>s</em>, 2<em>s</em> i 2<em>p</em> pokazują charakterystyczne maksima. Dla orbitalu 1<em>s</em> maksimum występuje w pobliżu promienia Bohra <em>a</em><sub>0</sub>, natomiast dla orbitali 2<em>s</em> i 2<em>p</em> pojawiają się dodatkowe węzły radialne, co odzwierciedla większą liczbę warstw elektronowych.</p><p>Analiza radialnej gęstości prawdopodobieństwa jest kluczowa dla zrozumienia rozmiarów atomów i energii orbitali. Dla orbitali o wyższej głównej liczbie kwantowej <em>n</em> maksima są przesunięte dalej od jądra, co odpowiada większym średnim odległościom elektronu od jądra.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie jest znaczenie funkcji 4πr²|R(r)|² w opisie atomu wodoru?",
      "answer": "Funkcja 4πr²|R(r)|² jest radialną gęstością prawdopodobieństwa, która określa prawdopodobieństwo znalezienia elektronu w cienkiej warstwie kulistej o promieniu r i grubości dr. Pozwala ona na analizę rozkładu elektronu wokół jądra w funkcji odległości."
    },
    {
      "question": "Dlaczego orbitale p i d są często przedstawiane jako rzeczywiste kombinacje funkcji o przeciwnych znakach magnetycznej liczby kwantowej m?",
      "answer": "Rzeczywiste kombinacje liniowe funkcji o m = 1 i m = −1 (lub m = 2 i m = −2) prowadzą do orbitali o symetrii rzeczywistej, które są wygodniejsze w interpretacji chemicznej. Dają one kierunkowe kształty orbitali p i d, co ułatwia opis wiązań chemicznych."
    }
  ]
};
