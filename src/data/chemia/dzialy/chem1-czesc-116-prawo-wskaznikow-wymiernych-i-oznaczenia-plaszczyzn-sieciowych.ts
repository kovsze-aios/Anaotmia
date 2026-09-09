import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_116_prawoWskaznikowWymiernychIOznaczeniaPlaszczyznSieciowychData: StructuredChapter = {
  "chapterTitle": "Prawo wskaźników wymiernych i oznaczenia płaszczyzn sieciowych",
  "toc": [
    {
      "title": "Wprowadzenie do wskaźników płaszczyzn sieciowych",
      "anchorId": "wprowadzenie-do-wskaznikow-plaszczyzn-sieciowych"
    },
    {
      "title": "Przykłady wyznaczania wskaźników dla płaszczyzn równoległych do osi z",
      "anchorId": "przyklady-wyznaczania-wskaznikow-dla-plaszczyzn-rownoleglych-do-osi-z"
    },
    {
      "title": "Płaszczyzny przecinające wszystkie trzy osie",
      "anchorId": "plaszczyzny-przecinajace-wszystkie-trzy-osie"
    },
    {
      "title": "Prawo wskaźników wymiernych",
      "anchorId": "prawo-wskaznikow-wymiernych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-wskaznikow-plaszczyzn-sieciowych\">Wprowadzenie do wskaźników płaszczyzn sieciowych</h3><p>W krystalografii położenie płaszczyzn sieciowych opisuje się za pomocą trzech wskaźników, które są odwrotnościami długości odcinków odcinanych przez daną płaszczyznę na osiach krystalograficznych. Wskaźniki te, zapisywane w nawiasach okrągłych, np. (110), jednoznacznie identyfikują rodzinę równoległych płaszczyzn w sieci krystalicznej.</p><p>Rozważmy płaszczyzny sieciowe równoległe do osi z, których przekrój z płaszczyzną xy przedstawiono na rysunku. Dla płaszczyzny oznaczonej jako 1-1' odcinki odcinane na osiach x i y wynoszą odpowiednio a i b. Wskaźniki tej płaszczyzny obliczamy jako odwrotności tych długości, co daje (1/a, 1/b), a po sprowadzeniu do wspólnego mianownika i uproszczeniu otrzymujemy (110).</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyklady-wyznaczania-wskaznikow-dla-plaszczyzn-rownoleglych-do-osi-z\">Przykłady wyznaczania wskaźników dla płaszczyzn równoległych do osi z</h3><p>Dla płaszczyzny 2-2', która na osi x odcina odcinek 2a, a na osi y odcinek b, wskaźniki wyznaczamy następująco: odwrotności długości to 1/(2a) i 1/b. Po pomnożeniu przez wspólny mianownik 2a otrzymujemy 1 i 2, zatem wskaźniki to (120).</p><p>Z kolei płaszczyzna 3-3' odcina na osi x odcinek 2a, a na osi y odcinek 5b. Odwrotności tych długości to 1/(2a) i 1/(5b). Sprowadzając do wspólnego mianownika 10ab, otrzymujemy 5 i 2, czyli wskaźniki (520).</p><p>Płaszczyzny równoległe do osi y, takie jak 4-4', przecinają oś x w odległości a, a oś y w nieskończoności. Odwrotność nieskończoności wynosi zero, więc wskaźniki tej rodziny płaszczyzn to (100).</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"plaszczyzny-przecinajace-wszystkie-trzy-osie\">Płaszczyzny przecinające wszystkie trzy osie</h3><p>W ogólnym przypadku płaszczyzna sieciowa może przecinać wszystkie trzy osie krystalograficzne: x, y i z. Wówczas trzeci wskaźnik jest różny od zera. Przykładowo, w prostym układzie regularnym wyróżniamy płaszczyzny (110), (001) oraz (111). Płaszczyzna (110) jest równoległa do osi z, płaszczyzna (001) jest prostopadła do osi z, a płaszczyzna (111) przecina wszystkie trzy osie w równych odległościach.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"prawo-wskaznikow-wymiernych\">Prawo wskaźników wymiernych</h3><p>Zgodnie z prawem wskaźników wymiernych, w krysztale mogą występować tylko takie ściany, którym odpowiadają wskaźniki będące liczbami całkowitymi. Oznacza to, że stosunki długości odcinków odcinanych na osiach przez płaszczyzny sieciowe są liczbami wymiernymi.</p><p>W praktyce najczęściej spotykane ściany kryształów mają małe wartości wskaźników, zazwyczaj nieprzekraczające 3. Wynika to z faktu, że płaszczyzny o niskich wskaźnikach mają największą gęstość obsadzenia atomami i są energetycznie najbardziej stabilne.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie wskaźniki ma płaszczyzna sieciowa, która odcina na osi x odcinek 2a, a na osi y odcinek 3b?",
      "answer": "Wskaźniki to (320). Obliczamy odwrotności: 1/(2a) i 1/(3b), sprowadzamy do wspólnego mianownika 6ab, otrzymując 3 i 2."
    },
    {
      "question": "Co mówi prawo wskaźników wymiernych?",
      "answer": "Prawo to stwierdza, że w krysztale mogą występować tylko takie ściany, którym odpowiadają wskaźniki będące liczbami całkowitymi."
    },
    {
      "question": "Dlaczego najczęściej występujące ściany kryształów mają małe wskaźniki?",
      "answer": "Płaszczyzny o niskich wskaźnikach mają większą gęstość obsadzenia atomami i są energetycznie bardziej stabilne, dlatego dominują w morfologii kryształów."
    }
  ]
};
