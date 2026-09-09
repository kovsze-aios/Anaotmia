import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_35_kwantowaniePrzestrzenneMomentuPeduElektronuData: StructuredChapter = {
  "chapterTitle": "Kwantowanie przestrzenne momentu pędu elektronu",
  "toc": [
    {
      "title": "Magnetyczna liczba kwantowa",
      "anchorId": "magnetyczna-liczba-kwantowa"
    },
    {
      "title": "Kwantowanie przestrzenne",
      "anchorId": "kwantowanie-przestrzenne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"magnetyczna-liczba-kwantowa\">Magnetyczna liczba kwantowa</h3><p>W mechanice kwantowej orbitalny moment pędu elektronu jest opisany przez wektor <strong>M</strong>. Jego długość jest skwantowana i zależy od pobocznej liczby kwantowej <em>l</em>. Tradycyjnie wartościom <em>l</em> przypisuje się oznaczenia literowe: dla <em>l</em> = 0 symbol <strong>s</strong>, dla <em>l</em> = 1 symbol <strong>p</strong>, dla <em>l</em> = 2 symbol <strong>d</strong>, dla <em>l</em> = 3 symbol <strong>f</strong>, a dla <em>l</em> = 4 symbol <strong>g</strong> i tak dalej.</p><p>Trzeci warunek, który musi być spełniony, aby rozwiązania równania Schrödingera były funkcjami porządnymi, dotyczy składowej <em>z</em> wektora momentu pędu, oznaczanej jako <strong>M<sub>z</sub></strong>. Składowa ta jest rzutem wektora <strong>M</strong> na wyróżniony kierunek w przestrzeni, którym może być na przykład kierunek zewnętrznego pola magnetycznego lub elektrycznego.</p><p>Składowa <em>z</em> momentu pędu może przyjmować tylko ściśle określone wartości, dane równaniem:</p><p>M<sub>z</sub> = m<sub>l</sub> · (h / 2π)</p><p>gdzie <em>h</em> to stała Plancka, a <strong>m<sub>l</sub></strong> to magnetyczna liczba kwantowa. Liczba ta przyjmuje wartości całkowite od -<em>l</em> do +<em>l</em>, czyli:</p><p>m<sub>l</sub> = -<em>l</em>, -<em>l</em>+1, …, 0, …, +<em>l</em>-1, +<em>l</em></p><p>Dla danego <em>l</em> istnieje zatem (2<em>l</em>+1) możliwych wartości magnetycznej liczby kwantowej.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"kwantowanie-przestrzenne\">Kwantowanie przestrzenne</h3><p>Fakt, że składowa <em>z</em> momentu pędu może przyjmować tylko wybrane wartości, oznacza, że sam wektor <strong>M</strong> może być zorientowany względem osi <em>z</em> tylko pod pewnymi kątami. Zjawisko to nazywamy <strong>kwantowaniem przestrzennym</strong>.</p><p>Rozważmy przypadek, gdy <em>l</em> = 1. Długość wektora momentu pędu wynosi wtedy |<strong>M</strong>| = √(1·(1+1)) · (h/2π) = √2 · (h/2π). Magnetyczna liczba kwantowa może przyjmować trzy wartości: -1, 0 i 1. Odpowiadające im składowe <em>z</em> wynoszą odpowiednio: -h/2π, 0 i +h/2π. Wektor <strong>M</strong> może zatem zajmować trzy różne położenia względem osi <em>z</em>.</p><p>Gdy <em>l</em> = 2, długość wektora to √(2·(2+1)) · (h/2π) = √6 · (h/2π). Magnetyczna liczba kwantowa przyjmuje pięć wartości: -2, -1, 0, 1, 2, co daje pięć możliwych orientacji wektora momentu pędu. Analogicznie, dla <em>l</em> = 3 istnieje siedem wartości m<sub>l</sub> (od -3 do 3), a wektor <strong>M</strong> może być nachylony pod siedmioma różnymi kątami względem wyróżnionego kierunku.</p><p>Z powyższych rozważań wynika, że energia elektronu w atomie, jego moment pędu oraz składowa <em>z</em> momentu pędu są wielkościami skwantowanymi. To kwantowanie jest fundamentalną cechą świata atomowego i nie znajduje wyjaśnienia w fizyce klasycznej, która opisuje ciała makroskopowe. Jest ono konsekwencją praw mechaniki kwantowej rządzących mikroświatem.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie wartości może przyjmować magnetyczna liczba kwantowa m_l dla danej pobocznej liczby kwantowej l?",
      "answer": "Magnetyczna liczba kwantowa m_l może przyjmować wartości całkowite od -l do +l, czyli 2l+1 możliwych wartości."
    },
    {
      "question": "Co to jest kwantowanie przestrzenne?",
      "answer": "Kwantowanie przestrzenne to zjawisko, w którym wektor momentu pędu elektronu może być zorientowany względem wyróżnionego kierunku (np. osi z) tylko pod ściśle określonymi kątami, odpowiadającymi dozwolonym wartościom składowej z momentu pędu."
    },
    {
      "question": "Ile możliwych orientacji wektora momentu pędu istnieje dla l = 2?",
      "answer": "Dla l = 2 istnieje 5 możliwych orientacji, ponieważ magnetyczna liczba kwantowa przyjmuje wartości -2, -1, 0, 1, 2."
    }
  ]
};
