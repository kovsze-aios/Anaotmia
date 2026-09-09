import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_106_ewolucjaNaPoziomieGatunkuIPopulacjiData: StructuredChapter = {
  "chapterTitle": "Ewolucja na poziomie gatunku i populacji",
  "toc": [
    {
      "title": "Obliczanie częstości genotypów i fenotypów",
      "anchorId": "obliczanie-czestosci-genotypow-i-fenotypow"
    },
    {
      "title": "Obliczanie częstości alleli na podstawie fenotypów",
      "anchorId": "obliczanie-czestosci-alleli-na-podstawie-fenotypow"
    },
    {
      "title": "Specjacja i mechanizmy izolacji rozrodczej",
      "anchorId": "specjacja-i-mechanizmy-izolacji-rozrodczej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"obliczanie-czestosci-genotypow-i-fenotypow\">Obliczanie częstości genotypów i fenotypów</h3><p>W populacji roślin występują osobniki o kwiatach czerwonych i białych. Allel dominujący <strong>A</strong> warunkuje czerwoną barwę, natomiast allel recesywny <strong>a</strong> – białą. Częstość allelu dominującego (p) wynosi 0,6. Aby obliczyć częstości genotypów i fenotypów, należy najpierw wyznaczyć częstość allelu recesywnego (q) z równania p + q = 1, zatem q = 1 – p = 0,4.</p><p>Następnie można skorzystać z równania Hardy'ego-Weinberga: p² + 2pq + q² = 1. Podstawiając wartości: p² = 0,36, 2pq = 0,48, q² = 0,16. Oznacza to, że częstość homozygot dominujących (AA) wynosi 0,36, heterozygot (Aa) – 0,48, a homozygot recesywnych (aa) – 0,16.</p><p>Fenotyp kwiatów czerwonych obejmuje zarówno homozygoty AA, jak i heterozygoty Aa, więc jego częstość to suma p² + 2pq = 0,84. Fenotyp kwiatów białych występuje wyłącznie u homozygot aa, więc jego częstość wynosi q² = 0,16.</p><p>Alternatywnie można obliczyć częstości genotypów za pomocą szachownicy Punnetta dla krzyżówki dwóch heterozygot (Aa × Aa). Częstość gamet z allelem A wynosi p = 0,6, a z allelem a – q = 0,4. Po połączeniu gamet otrzymuje się proporcje: AA = 0,36, Aa = 0,48 (suma dwóch pól), aa = 0,16.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"obliczanie-czestosci-alleli-na-podstawie-fenotypow\">Obliczanie częstości alleli na podstawie fenotypów</h3><p>W układzie grupowym MN u człowieka allele M i N są kodominujące. W populacji liczącej 1000 osób: 300 ma grupę MM, 500 – MN, a 200 – NN. Częstość homozygot MM (p²) wynosi 300/1000 = 0,3. Pierwiastek kwadratowy z tej wartości daje częstość allelu M: p = √0,3 ≈ 0,55. Ponieważ p + q = 1, częstość allelu N wynosi q = 1 – p = 0,45.</p><p>W przypadku choroby autosomalnej recesywnej, której częstość w populacji europejskiej wynosi 1 na 10 000 urodzeń, częstość homozygot recesywnych (q²) to 0,0001. Częstość allelu recesywnego (q) oblicza się jako pierwiastek kwadratowy: q = √0,0001 = 0,01. Allel dominujący (prawidłowy) występuje z częstością p = 1 – q = 0,99.</p><p>Te przykłady ilustrują, jak na podstawie częstości fenotypów można oszacować częstości alleli w populacji, zakładając równowagę genetyczną.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"specjacja-i-mechanizmy-izolacji-rozrodczej\">Specjacja i mechanizmy izolacji rozrodczej</h3><p>Gatunek w ujęciu biologicznej koncepcji to grupa populacji, których osobniki mogą się krzyżować w warunkach naturalnych i wydawać płodne potomstwo. Gatunki są izolowane rozrodczo, co oznacza, że istnieją między nimi bariery uniemożliwiające wymianę genów. Definicja ta nie obejmuje organizmów rozmnażających się bezpłciowo (np. bakterie) ani form wymarłych, które klasyfikuje się na podstawie cech morfologicznych lub biochemicznych.</p><p>Bariery rozrodcze dzielą się na prezygotyczne (przedzapłodnieniowe) i postzygotyczne (pozapłodnieniowe). Bariery prezygotyczne zapobiegają kojarzeniu się osobników różnych gatunków lub uniemożliwiają zapłodnienie, nawet jeśli do kopulacji dojdzie. Bariery postzygotyczne działają po zapłodnieniu – często powodują śmierć zarodka lub bezpłodność mieszańców.</p><p>Hybrydyzacja, czyli krzyżowanie osobników z różnych gatunków, może prowadzić do powstania mieszańców. Wiele z nich ginie wcześnie lub jest bezpłodnych, ale niektóre bywają żywotne i płodne, co może mieć znaczenie ewolucyjne. Specjacja, czyli powstawanie nowych gatunków, może zachodzić na drodze allopatrycznej (gdy populacje są izolowane geograficznie) lub sympatrycznej (gdy izolacja występuje na tym samym obszarze). Radiacja adaptacyjna to szybkie różnicowanie się wielu gatunków z jednego przodka w odpowiedzi na zróżnicowane środowiska.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "W populacji częstość allelu dominującego A wynosi 0,6. Jaka jest częstość heterozygot Aa?",
      "answer": "Częstość heterozygot Aa wynosi 2pq = 2 × 0,6 × 0,4 = 0,48."
    },
    {
      "question": "Jakie są główne typy barier rozrodczych?",
      "answer": "Bariery prezygotyczne (przedzapłodnieniowe) i postzygotyczne (pozapłodnieniowe)."
    },
    {
      "question": "Co to jest specjacja allopatryczna?",
      "answer": "Specjacja allopatryczna zachodzi, gdy populacje są izolowane geograficznie, co uniemożliwia przepływ genów i prowadzi do powstania nowych gatunków."
    }
  ]
};
