import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_6_wzglednaMasaAtomowaICzasteczkowaData: StructuredChapter = {
  "chapterTitle": "Względna masa atomowa i cząsteczkowa",
  "toc": [
    {
      "title": "Spektrometria masowa",
      "anchorId": "spektrometria-masowa"
    },
    {
      "title": "Analiza izotopowa neonu i tlenu",
      "anchorId": "analiza-izotopowa-neonu-i-tlenu"
    },
    {
      "title": "Jednostka względnej masy atomowej",
      "anchorId": "jednostka-wzglednej-masy-atomowej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"spektrometria-masowa\">Spektrometria masowa</h3><p>W nowoczesnych przyrządach pomiarowych, zwanych <strong>spektrometrami masowymi</strong>, rejestrację fotograficzną zastąpiono bezpośrednim pomiarem natężenia strumienia jonów dodatnich w funkcji stosunku ich ładunku do masy (Q/m). Dzięki temu możliwe jest precyzyjne określenie mas poszczególnych cząsteczek i atomów.</p><p>Zakres zastosowań spektrometrii masowej nie ogranicza się wyłącznie do substancji gazowych czy łatwo lotnych. Wiele ciał stałych, nawet o wysokiej temperaturze topnienia, po ogrzaniu w próżni tworzy parę o ciśnieniu rzędu 10<sup>-3</sup>–10<sup>-4</sup> Pa, co w zupełności wystarcza do przeprowadzenia analizy. Metoda ta osiągnęła niezwykłą dokładność – pozwala rozróżnić cząsteczki, których masy różnią się o mniej niż 1/100 000 część.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"analiza-izotopowa-neonu-i-tlenu\">Analiza izotopowa neonu i tlenu</h3><p>Neon był pierwszą substancją badaną metodą spektrometrii masowej (przez J.J. Thomsona). Współczesne spektrometry ujawniają, że pojedynczo zjonizowane jony neonu tworzą nie jedną, lecz trzy blisko położone linie. Stosunek mas odpowiadających im atomów wynosi 19,992441 : 20,993850 : 21,991385. Na podstawie intensywności tych linii stwierdzono, że neon zawiera 90,92% najlżejszego izotopu, 0,26% izotopu o masie pośredniej oraz 8,82% izotopu najcięższego.</p><p>Gdy do spektrometru wprowadzi się tlen cząsteczkowy (O<sub>2</sub>), obserwuje się sześć linii, ponieważ atomy tlenu występują w trzech izotopach: <sup>16</sup>O, <sup>17</sup>O i <sup>18</sup>O. Łącząc je w pary, otrzymuje się sześć różnych kombinacji cząsteczek: <sup>16</sup>O<sup>16</sup>O, <sup>16</sup>O<sup>17</sup>O, <sup>16</sup>O<sup>18</sup>O, <sup>17</sup>O<sup>17</sup>O, <sup>17</sup>O<sup>18</sup>O oraz <sup>18</sup>O<sup>18</sup>O. Stosunek mas tych cząsteczek wynosi 31,989830 : 32,994048 : 33,994075 : 33,998266 : 34,998293 : 35,99832, co pozwala wyznaczyć masy poszczególnych izotopów tlenu.</p><p>Podobne analizy przeprowadzone dla dwutlenku węgla (CO<sub>2</sub>) wykazały, że naturalny węgiel składa się z co najmniej dwóch izotopów: <sup>12</sup>C i <sup>13</sup>C, których masy mają się do siebie jak 12,000000 : 13,003355, a ich zawartości wynoszą odpowiednio 98,89% i 1,11%.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"jednostka-wzglednej-masy-atomowej\">Jednostka względnej masy atomowej</h3><p>Wyniki spektrometrii masowej umożliwiają porównywanie mas nuklidów nie tylko różnych izotopów tego samego pierwiastka, ale także nuklidów należących do różnych pierwiastków. Aby ułatwić te porównania, przyjęto wspólną jednostkę – <strong>unit</strong> (u), zdefiniowaną jako 1/12 masy nuklidu <sup>12</sup>C. Oznacza to, że masa atomowa tego izotopu wynosi dokładnie 12,000000 u.</p><p>W tej skali masy atomowe izotopów tlenu wynoszą: 15,994915 u, 16,999133 u i 17,999160 u, a izotopów neonu: 19,992441 u, 20,993850 u i 21,991385 u. Warto zauważyć, że masy te są zbliżone do liczb całkowitych, ale nie są im równe. Liczbę całkowitą najbliższą masie danego izotopu nazywamy <strong>liczbą masową</strong> A. Na przykład izotopy węgla oznaczamy symbolami <sup>12</sup>C i <sup>13</sup>C, gdzie liczba masowa jest podana w indeksie górnym.</p><p>Względna masa atomowa izotopu to liczba określająca, ile razy masa danego nuklidu jest większa od 1/12 masy nuklidu <sup>12</sup>C. Do 1961 roku w fizyce jako jednostkę względnej masy atomowej przyjmowano 1/16 masy atomu izotopu tlenu <sup>16</sup>O, jednak obecnie obowiązuje definicja oparta na węglu <sup>12</sup>C.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega zasada działania spektrometru masowego?",
      "answer": "Spektrometr masowy mierzy natężenie strumienia jonów dodatnich w zależności od stosunku ich ładunku do masy (Q/m), co pozwala na rozdzielenie jonów o różnych masach."
    },
    {
      "question": "Dlaczego w spektrogramie tlenu cząsteczkowego obserwuje się sześć linii?",
      "answer": "Ponieważ tlen ma trzy izotopy (16O, 17O, 18O), które łącząc się w pary dają sześć różnych kombinacji cząsteczek dwuatomowych o różnych masach."
    },
    {
      "question": "Jaka jest obecnie przyjęta jednostka względnej masy atomowej?",
      "answer": "Jednostką względnej masy atomowej jest 1/12 masy nuklidu węgla 12C, zwana unitem (u)."
    }
  ]
};
