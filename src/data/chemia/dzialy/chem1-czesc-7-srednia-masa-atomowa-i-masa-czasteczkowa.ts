import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_7_sredniaMasaAtomowaIMasaCzasteczkowaData: StructuredChapter = {
  "chapterTitle": "Średnia masa atomowa i masa cząsteczkowa",
  "toc": [
    {
      "title": "Średnia masa atomowa pierwiastków",
      "anchorId": "srednia-masa-atomowa"
    },
    {
      "title": "Skala mas atomowych",
      "anchorId": "skala-mas-atomowych"
    },
    {
      "title": "Masa cząsteczkowa",
      "anchorId": "masa-czasteczkowa"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"srednia-masa-atomowa\">Średnia masa atomowa pierwiastków</h3><p>Większość pierwiastków występuje w przyrodzie jako mieszanina izotopów, których zawartość jest praktycznie stała, niezależnie od pochodzenia próbki czy metody jej otrzymania. Dlatego w obliczeniach chemicznych posługujemy się nie masami pojedynczych izotopów, lecz <strong>średnią masą atomową</strong>, uwzględniającą naturalny skład izotopowy pierwiastka.</p><p>Średnią masę atomową można obliczyć, znając względne masy atomowe poszczególnych izotopów oraz ich liczebność w naturalnej mieszaninie. Dane te, wyznaczane z bardzo dużą precyzją, dostarcza <strong>spektrometria masowa</strong>.</p><p>Przykładowo, dla węgla przyjmuje się, że wśród 10 000 atomów tego pierwiastka znajduje się 9889 atomów izotopu <sup>12</sup>C o masie 12,000000 oraz 111 atomów izotopu <sup>13</sup>C o masie 13,003355. Średnia masa atomowa węgla wynosi zatem:</p><p>(9889 · 12,000000 + 111 · 13,003355) / 10000 = 12,011</p><p>Podobnie dla tlenu, którego naturalna mieszanina zawiera izotopy <sup>16</sup>O, <sup>17</sup>O i <sup>18</sup>O, średnia masa atomowa wynosi 15,9994. Wartość tę otrzymuje się przez uśrednienie mas izotopów z uwzględnieniem ich liczebności względnej.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"skala-mas-atomowych\">Skala mas atomowych</h3><p>Historycznie w chemii za jednostkę masy atomowej przyjmowano 1/16 średniej masy atomowej tlenu, natomiast w fizyce stosowano jednostkę opartą na izotopie <sup>16</sup>O. Różnice między tymi skalami powodowały niejednoznaczności w danych.</p><p>Obecnie obowiązuje ujednolicona skala, w której za jednostkę masy atomowej przyjęto <strong>1/12 masy atomu izotopu węgla <sup>12</sup>C</strong>. Ta definicja, zaakceptowana przez chemików i fizyków, stanowi podstawę współczesnych mas atomowych.</p><p>Wartości mas atomowych zestawione przez Międzynarodową Unię Chemii Czystej i Stosowanej (IUPAC) są powszechnie stosowane w podręcznikach i tablicach chemicznych. Najbardziej precyzyjną metodą ich wyznaczania jest obecnie spektrometria masowa, choć historycznie istotną rolę odegrały również metody chemiczne, które zostaną omówione w kontekście stechiometrii. Obie grupy metod, fizyczne i chemiczne, prowadzą do wyników doskonale zgodnych.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"masa-czasteczkowa\">Masa cząsteczkowa</h3><p>Znając masy atomowe pierwiastków, można obliczyć <strong>względną masę cząsteczkową</strong> (symbol M<sub>r</sub>) jako sumę mas atomowych wszystkich atomów tworzących daną cząsteczkę. Definiuje się ją jako liczbę określającą, ile razy masa danej cząsteczki jest większa od 1/12 masy atomu węgla <sup>12</sup>C.</p><p>Pojęcie to jest kluczowe dla stechiometrii, ponieważ umożliwia przeliczanie ilości substancji na masy i odwrotnie, co jest podstawą wszelkich obliczeń w reakcjach chemicznych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w obliczeniach chemicznych używa się średniej masy atomowej, a nie mas poszczególnych izotopów?",
      "answer": "Ponieważ pierwiastki w przyrodzie występują jako mieszaniny izotopów o stałym składzie, a średnia masa atomowa uwzględnia naturalną liczebność każdego izotopu, co pozwala na spójne i powtarzalne obliczenia."
    },
    {
      "question": "Jak definiuje się współczesną jednostkę masy atomowej?",
      "answer": "Współczesna jednostka masy atomowej to 1/12 masy atomu izotopu węgla 12C."
    },
    {
      "question": "Jak oblicza się względną masę cząsteczkową związku chemicznego?",
      "answer": "Względną masę cząsteczkową oblicza się jako sumę względnych mas atomowych wszystkich atomów wchodzących w skład cząsteczki."
    }
  ]
};
