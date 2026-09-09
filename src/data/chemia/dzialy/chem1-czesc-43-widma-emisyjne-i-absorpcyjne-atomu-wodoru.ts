import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_43_widmaEmisyjneIAbsorpcyjneAtomuWodoruData: StructuredChapter = {
  "chapterTitle": "Widma emisyjne i absorpcyjne atomu wodoru",
  "toc": [
    {
      "title": "Interpretacja serii widmowych wodoru",
      "anchorId": "interpretacja-serii-widmowych-wodoru"
    },
    {
      "title": "Widmo absorpcyjne wodoru",
      "anchorId": "widmo-absorpcyjne-wodoru"
    },
    {
      "title": "Energia jonizacji atomu wodoru",
      "anchorId": "energia-jonizacji-atomu-wodoru"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"interpretacja-serii-widmowych-wodoru\">Interpretacja serii widmowych wodoru</h3><p>Uogólniony wzór Balmera doskonale opisuje położenie linii widmowych wodoru, a wartość stałej Rydberga wyznaczona z danych doświadczalnych (1,097374·10<sup>7</sup> m<sup>-1</sup>) jest zgodna z wartością wynikającą z teorii. Podstawiając do wzoru odpowiednie wartości liczb kwantowych, można otrzymać liczby falowe dla poszczególnych serii widmowych.</p><p>Przyjmując <em>i</em> = 1 oraz <em>j</em> &gt; 1, uzyskuje się liczby falowe linii serii Lymana, leżącej w nadfiolecie. Dla <em>i</em> = 2 i <em>j</em> &gt; 2 otrzymuje się serię Balmera w zakresie światła widzialnego. Kolejne wartości <em>i</em> = 3, 4, 5, 6 odpowiadają seriom Paschena, Bracketta, Pfunda i Humphreysa.</p><p>Seria Lymana powstaje w wyniku przejść elektronów z wyższych poziomów energetycznych na poziom najniższy, odpowiadający stanowi podstawowemu atomu. Linia o najmniejszej liczbie falowej (najmniejszej częstości) w tej serii odpowiada przejściu z poziomu <em>n</em> = 2, kolejna z <em>n</em> = 3, itd. W miarę wzrostu <em>n</em> różnice energii między kolejnymi poziomami maleją, co powoduje zagęszczanie linii widmowych w kierunku fal krótszych.</p><p>Analogicznie interpretuje się serię Balmera, gdzie elektrony przechodzą z wyższych stanów na poziom drugi (<em>n</em> = 2). W ten sposób model budowy atomu wodoru wyjaśnia pochodzenie wszystkich obserwowanych serii widmowych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"widmo-absorpcyjne-wodoru\">Widmo absorpcyjne wodoru</h3><p>Widmo absorpcyjne powstaje, gdy światło białe (zawierające wszystkie długości fal) przechodzi przez warstwę substancji zdolnej do pochłaniania promieniowania, na przykład przez gazowy wodór. Atomy wodoru w stanie podstawowym mogą pochłonąć tylko te kwanty, które odpowiadają dozwolonym przejściom elektronowym, np. na poziomy wzbudzone <em>n</em> = 2, 3, 4 itd.</p><p>Energie tych kwantów są dokładnie takie same, jak energie emitowane podczas przejść w serii Lymana. W rezultacie w widmie ciągłym pojawiają się ciemne linie absorpcyjne, położone dokładnie w tych samych miejscach, co linie emisyjne serii Lymana. Takie widmo nazywamy widmem absorpcyjnym atomu wodoru.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"energia-jonizacji-atomu-wodoru\">Energia jonizacji atomu wodoru</h3><p>Im większy kwant energii pochłonie atom wodoru, tym dalej od jądra zostaje przeniesiony elektron i tym słabsze jest oddziaływanie z protonem. Gdy elektron trafia na poziom o bardzo dużej wartości <em>n</em> (dążącej do nieskończoności), oddziaływanie praktycznie zanika, co odpowiada całkowitemu oderwaniu elektronu, czyli jonizacji atomu.</p><p>Energię potrzebną do jonizacji atomu wodoru można obliczyć ze wzoru (3.26) jako granicę, do której dąży energia, gdy <em>j</em> → ∞ przy <em>i</em> = 1. Wynosi ona 2,1799·10<sup>-18</sup> J, co odpowiada 13,606 eV. Liczba falowa odpowiadająca tej energii to 109739 cm<sup>-1</sup>, co oznacza, że światło zdolne do jonizacji wodoru leży w nadfiolecie.</p><p>Energię jonizacji, nazywaną również potencjałem jonizacji, wyraża się często w kJ na mol atomów lub w eV na atom. Dla wodoru wynosi ona 1313 kJ·mol<sup>-1</sup> (13,606 eV/atom).</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie przejścia elektronowe odpowiadają serii Lymana w widmie emisyjnym wodoru?",
      "answer": "Seria Lymana odpowiada przejściom elektronów z wyższych poziomów energetycznych (n ≥ 2) na najniższy poziom (n = 1), czyli do stanu podstawowego."
    },
    {
      "question": "Dlaczego w widmie absorpcyjnym wodoru obserwuje się ciemne linie w zakresie nadfioletu?",
      "answer": "Atomy wodoru w stanie podstawowym pochłaniają kwanty o energiach odpowiadających przejściom na wyższe poziomy (n = 2, 3, ...), czyli dokładnie te same energie, które są emitowane w serii Lymana. Powoduje to pojawienie się ciemnych linii absorpcyjnych w nadfiolecie."
    },
    {
      "question": "Ile wynosi energia jonizacji atomu wodoru w kJ/mol?",
      "answer": "Energia jonizacji wodoru wynosi 1313 kJ·mol⁻¹ (13,606 eV na atom)."
    }
  ]
};
