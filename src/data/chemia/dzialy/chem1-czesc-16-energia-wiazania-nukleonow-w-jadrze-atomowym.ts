import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_16_energiaWiazaniaNukleonowWJadrzeAtomowymData: StructuredChapter = {
  "chapterTitle": "Energia wiązania nukleonów w jądrze atomowym",
  "toc": [
    {
      "title": "Wprowadzenie do energii wiązania jądra",
      "anchorId": "wprowadzenie-do-energii-wiazania-jadra"
    },
    {
      "title": "Jednostki energii i masy w fizyce jądrowej",
      "anchorId": "jednostki-energii-i-masy-w-fizyce-jadrowej"
    },
    {
      "title": "Obliczanie energii wiązania na przykładzie berylu",
      "anchorId": "obliczanie-energii-wiazania-na-przykladzie-berylu"
    },
    {
      "title": "Zależność energii wiązania od liczby masowej",
      "anchorId": "zaleznosc-energii-wiazania-od-liczby-masowej"
    },
    {
      "title": "Wnioski dotyczące pozyskiwania energii jądrowej",
      "anchorId": "wnioski-dotyczace-pozyskiwania-energii-jadrowej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-energii-wiazania-jadra\">Wprowadzenie do energii wiązania jądra</h3><p>W fizyce jądrowej kluczowym pojęciem jest <strong>energia wiązania jądra</strong>, która określa, ile energii należy dostarczyć, aby rozdzielić jądro na pojedyncze protony i neutrony. Jest ona ściśle związana z defektem masy, czyli różnicą między sumą mas składników a masą jądra. Zgodnie z zasadą równoważności masy i energii, każdemu ubytkowi masy towarzyszy wydzielenie energii.</p><p>Rozważmy hipotetyczny proces łączenia protonów i neutronów w jądro berylu. Gdyby udało się go zrealizować, zaobserwowalibyśmy wydzielenie energii odpowiadającej ubytkowi masy wynoszącemu 0,0624 jednostki masy atomowej (u) na jedno jądro. W przeliczeniu na energię daje to około 58,13 MeV. Dokładnie taka sama ilość energii musiałaby zostać dostarczona, aby ponownie rozbić to jądro na wolne nukleony.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"jednostki-energii-i-masy-w-fizyce-jadrowej\">Jednostki energii i masy w fizyce jądrowej</h3><p>W obliczeniach jądrowych najwygodniej jest posługiwać się jednostkami masy atomowej (u) oraz elektronowoltami (eV). Elektronowolt to energia kinetyczna, jaką uzyskuje elektron przyspieszany w polu elektrycznym o różnicy potencjałów równej 1 woltowi. Dokładna wartość 1 eV wynosi 1,6021892·10<sup>-19</sup> J.</p><p>Mając na uwadze, że 1 u = 1,6605655·10<sup>-27</sup> kg, można obliczyć energię równoważną zniknięciu masy 1 u. Wynosi ona 931,5 MeV, co odpowiada 1,492·10<sup>-10</sup> J. Dla porównania, 1 MeV (megaelektronowolt) to 10<sup>6</sup> eV.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"obliczanie-energii-wiazania-na-przykladzie-berylu\">Obliczanie energii wiązania na przykładzie berylu</h3><p>Dla jądra berylu, które powstaje z połączenia protonów i neutronów, ubytek masy wynosi 0,0624 u na jedno jądro. Mnożąc tę wartość przez 931,5 MeV/u, otrzymujemy energię wiązania jądra równą 58,13 MeV. Często przelicza się tę energię na jeden nukleon, co dla berylu daje 58,13 MeV / 9 = 6,46 MeV na nukleon.</p><p>Analogiczne obliczenia można przeprowadzić dla wszystkich innych nuklidów, co pozwala na porównanie ich stabilności. Energia wiązania przypadająca na nukleon jest miarą trwałości jądra – im wyższa, tym jądro jest trudniejsze do rozbicia.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"zaleznosc-energii-wiazania-od-liczby-masowej\">Zależność energii wiązania od liczby masowej</h3><p>Przedstawiając graficznie energię wiązania nukleonu w funkcji liczby masowej A, można zaobserwować charakterystyczną krzywą. Dla większości nuklidów, z wyjątkiem pierwiastków lekkich, energia wiązania zawiera się w przedziale od 7 MeV do 8,7 MeV. Maksymalną wartość, wynoszącą 8,7 MeV, osiąga dla jąder o liczbie masowej 56, co odpowiada głównemu izotopowi żelaza (<sup>56</sup>Fe).</p><p>Krzywa opada stromo w kierunku jąder o małych masach, natomiast łagodnie w kierunku jąder ciężkich. Taki kształt krzywej ma istotne konsekwencje dla możliwości pozyskiwania energii z reakcji jądrowych.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"wnioski-dotyczace-pozyskiwania-energii-jadrowej\">Wnioski dotyczące pozyskiwania energii jądrowej</h3><p>Z analizy krzywej energii wiązania wynikają dwa podstawowe sposoby uzyskiwania energii jądrowej. Pierwszy polega na rozszczepieniu ciężkiego jądra, takiego jak uran czy tor, na lżejsze fragmenty o liczbach masowych zbliżonych do 55. Drugi sposób to łączenie najlżejszych jąder, na przykład izotopów wodoru lub helu, w cięższe jądra. W obu przypadkach energia wiązania przeliczona na jeden nukleon wzrasta, co oznacza, że w trakcie reakcji wydzielana jest energia, a powstałe jądra są trudniejsze do rozbicia niż jądra wyjściowe.</p><p>Obie te możliwości zostały zrealizowane w praktyce: pierwsza w procesie rozszczepienia jąder uranu i innych pierwiastków, druga w reakcjach termojądrowych, które zachodzą między innymi we wnętrzu Słońca.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest energia wiązania jądra?",
      "answer": "Energia wiązania jądra to ilość energii, którą należy dostarczyć, aby rozdzielić jądro na pojedyncze protony i neutrony. Jest ona równoważna defektowi masy jądra."
    },
    {
      "question": "Ile wynosi energia odpowiadająca masie 1 u?",
      "answer": "Energia odpowiadająca masie 1 u wynosi 931,5 MeV, co odpowiada 1,492·10⁻¹⁰ J."
    },
    {
      "question": "Dlaczego energia wiązania na nukleon jest ważna?",
      "answer": "Energia wiązania na nukleon jest miarą stabilności jądra. Im wyższa, tym jądro jest trudniejsze do rozbicia, a reakcje prowadzące do wzrostu tej energii mogą uwalniać energię."
    },
    {
      "question": "Jakie są dwa główne sposoby pozyskiwania energii jądrowej?",
      "answer": "Pierwszy to rozszczepienie ciężkich jąder (np. uranu) na lżejsze fragmenty, drugi to synteza (fuzja) lekkich jąder (np. wodoru) w cięższe jądra. Oba procesy prowadzą do wzrostu energii wiązania na nukleon i wydzielenia energii."
    }
  ]
};
