import type { TextbookDomain } from "@/types/textbook";

export const urinaryReproductive: TextbookDomain = {
  id: "urinary-reproductive",
  title: "Układ Moczowo-Płciowy",
  shortTitle: "Moczowo-płciowy",
  icon: "🫘",
  sections: [
    {
      id: "uklad-moczowy",
      title: "Układ moczowy",
      content: [
        {
          type: "paragraph",
          text: "Podstawową jednostką anatomiczną nerki jest nefron (pytanie nr 11). Każda nerka zawiera około miliona nefronów, które filtrują krew i produkują mocz.",
        },
        {
          type: "paragraph",
          text: "Nerki filtrują krew pod wysokim ciśnieniem. W korze nerkowej znajdują się ciałka nefronu, a w nich kłębuszki nerkowe. Nefrony mają ujścia w piramidach nerkowych. Mocz przesącza się przez brodawki na szczycie piramid do kielichów mniejszych → kielichów większych → miedniczki nerkowej → moczowodu → pęcherza moczowego → cewki moczowej.",
        },
        {
          type: "heading",
          level: 3,
          text: "Droga moczu (ogólna)",
        },
        {
          type: "list",
          items: [
            "Nerki (produkcja moczu)",
            "Moczowód (transport do pęcherza)",
            "Pęcherz moczowy (magazynowanie)",
            "Cewka moczowa (wyprowadzenie na zewnątrz)",
          ],
        },
        {
          type: "table",
          headers: ["Element", "Funkcja"],
          rows: [
            ["Nerka", "Filtracja krwi, produkcja moczu"],
            ["Nefron", "Podstawowa jednostka funkcjonalna nerki"],
            ["Moczowód", "Przewodzi mocz z nerki do pęcherza"],
            ["Pęcherz moczowy", "Magazynuje mocz"],
            ["Cewka moczowa", "Wyprowadza mocz na zewnątrz"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "ur-1",
          question: "Jaka jest podstawowa jednostka anatomiczna nerki?",
          answer: "Nefron.",
          examRef: "Q11",
        },
        {
          id: "ur-5",
          question: "Wymień kolejne etapy drogi moczu od nerki do wyjścia.",
          answer: "Nerka → moczowód → pęcherz moczowy → cewka moczowa.",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "nefron-i-filtracja",
      title: "Nefron i filtracja kłębuszkowa — sieć tętniczo-tętnicza",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Budowa nefronu",
        },
        {
          type: "paragraph",
          text: "Nefron składa się z ciałka nerkowego (kłębuszek nerkowy otoczony torebką, dawniej zwaną torebką Bowmana) oraz układu kanalików: kanalik kręty pierwszego rzędu, pętla nefronu (dawniej pętla Henlego — kanalik prosty wyginający się o 180 stopni), kanalik kręty drugiego rzędu i cewka zbiorcza.",
        },
        {
          type: "heading",
          level: 3,
          text: "Sieć dziwna tętniczo-tętnicza (rete mirabile) w nerce",
        },
        {
          type: "paragraph",
          text: "W nerkach występuje sieć dziwna tętniczo-tętnicza — kłębuszek nerkowy jest właśnie taką siecią. Tętnica (tętnica nerkowa) rozgałęzia się → tętniczka doprowadzająca (afferent arteriole) → naczynia włosowate kłębuszka (glomerular capillary network) → tętniczka odprowadzająca (efferent arteriole).",
        },
        {
          type: "paragraph",
          text: "Jest to sieć dziwna, ponieważ naczynia włosowate łączą dwie tętniczki (doprowadzającą i odprowadzającą), a nie — jak w normalnej sieci — tętniczkę z żyłą. Krew jest filtrowana w kłębuszku pod ekstremalnie wysokim ciśnieniem, co umożliwia przesączanie osocza do torebki kłębka (produkcja moczu pierwotnego). Tętniczka odprowadzająca rozgałęzia się dalej, oplatając kanaliki nefronu normalną siecią tętniczo-żylną, gdzie zachodzi precyzyjna resorpcja.",
        },
        {
          type: "table",
          headers: ["Rodzaj sieci", "Występowanie", "Opis"],
          rows: [
            ["Tętniczo-żylna (normalna)", "We wszystkich narządach", "Tętnica → naczynia włosowate → żyła"],
            ["Tętniczo-tętnicza (dziwna)", "W nerkach — kłębuszek nerkowy", "Tętniczka doprowadzająca → naczynia włosowate kłębuszka → tętniczka odprowadzająca"],
            ["Żylno-żylna (dziwna)", "TYLKO w wątrobie", "Żyła wrotna → sinusoidy → żyły wątrobowe"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Mocz pierwotny",
        },
        {
          type: "paragraph",
          text: "Mocz pierwotny (ultraprzesącz) jest produkowany w ciałku nerkowym w ilości około 200 litrów na dobę. W kłębuszku zachodzi bardzo zgrubne filtrowanie krwi — do torebki przedostaje się osocze (zarówno substancje wartościowe, jak i szkodliwe). Następnie w kanalikach nefronu (kanalik kręty I rzędu → pętla nefronu → kanalik kręty II rzędu) zachodzi bardzo precyzyjne wchłanianie zwrotne (resorpcja) — odzyskiwane są substancje wartościowe (cukry, sole mineralne, witaminy), a to co zbędne (woda, nadmiar soli) jest odprowadzane dalej do cewki zbiorczej.",
        },
        {
          type: "paragraph",
          text: "Proces resorpcji jest możliwy dzięki sieci naczyń włosowatych oplatających kanaliki (normalna sieć tętniczo-żylna pochodząca od tętniczki odprowadzającej). Ostateczny mocz trafia z cewek zbiorczych → kielichy mniejsze → kielichy większe → miedniczka nerkowa → moczowód → pęcherz moczowy.",
        },
      ],
      recallQuestions: [
        {
          id: "ur-6",
          question: "Co to jest sieć dziwna tętniczo-tętnicza i gdzie występuje?",
          answer: "Kłębuszek nerkowy w nerce: tętniczka doprowadzająca → naczynia włosowate kłębuszka → tętniczka odprowadzająca. Działa pod wysokim ciśnieniem do filtracji krwi.",
          examRef: "Wykład",
        },
        {
          id: "ur-7",
          question: "Ile moczu pierwotnego produkują nerki na dobę?",
          answer: "Około 200 litrów (ultraprzesącz).",
          examRef: "Wykład",
        },
        {
          id: "ur-8",
          question: "Wymień kolejne odcinki kanalików nefronu od ciałka nerkowego.",
          answer: "Kanalik kręty I rzędu → pętla nefronu (pętla Henlego) → kanalik kręty II rzędu → cewka zbiorcza.",
          examRef: "Wykład",
        },
        {
          id: "ur-9",
          question: "Czym różni się mocz pierwotny od ostatecznego?",
          answer: "Mocz pierwotny (ultraprzesącz) to osocze krwi — zawiera zarówno substancje wartościowe, jak i szkodliwe. Mocz ostateczny powstaje po precyzyjnej resorpcji substancji wartościowych w kanalikach nefronu.",
          examRef: "Wykład",
        },
        {
          id: "ur-10",
          question: "Jaka jest droga moczu z cewek zbiorczych do pęcherza?",
          answer: "Cewki zbiorcze → kielichy mniejsze → kielichy większe → miedniczka nerkowa → moczowód → pęcherz moczowy.",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "uklad-rodny-meski",
      title: "Męski układ rozrodczy",
      content: [
        {
          type: "paragraph",
          text: "Przewód wytryskowy (ductus ejaculatorius) uchodzi na wzgórku nasiennym (colliculus seminalis) w cewce moczowej (części sterczowej) — pytanie nr 13.",
        },
        {
          type: "paragraph",
          text: "Męski układ rozrodczy obejmuje: jądra, najądrza, nasieniowody, przewody wytryskowe, gruczoł krokowy (prostata), pęcherzyki nasienne, cewkę moczową i prącie.",
        },
        {
          type: "heading",
          level: 3,
          text: "Droga plemnika",
        },
        {
          type: "paragraph",
          text: "Plemniki powstają w kanalikach krętych jąder. Następnie trafiają do najądrza (głowa, trzon, ogon — ogon przechodzi w nasieniowód). Nasieniowód biegnie nad kością łonową przez kanał pachwinowy do jamy brzusznej. Ostatni odcinek nasieniowodu, tuż przed prostatą, rozszerza się w bańkę nasieniowodu.",
        },
      ],
      recallQuestions: [
        {
          id: "ur-2",
          question: "Gdzie uchodzi przewód wytryskowy?",
          answer: "Na wzgórku nasiennym w cewce moczowej (część sterczowa).",
          examRef: "Q13",
        },
        {
          id: "ur-11",
          question: "Opisz drogę plemnika od jądra do nasieniowodu.",
          answer: "Kanaliki kręte jądra → najądrze (głowa, trzon, ogon) → nasieniowód → kanał pachwinowy → bańka nasieniowodu (przed prostatą).",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "uklad-rodny-zenski",
      title: "Żeński układ rozrodczy",
      content: [
        {
          type: "paragraph",
          text: "Prawidłowe położenie macicy to przodopochylenie (anteversio) i przodozgięcie (anteflexio) — pytanie nr 10.",
        },
        {
          type: "paragraph",
          text: "U kobiet macica od przodu sąsiaduje z pęcherzem moczowym, a od dołu przechodzi w pochwę (pytanie otwarte nr 42).",
        },
        {
          type: "paragraph",
          text: "Żeński układ rozrodczy obejmuje: jajniki, jajowody, macicę, pochwę i srom. Jajniki produkują komórki jajowe i hormony (estrogen, progesteron).",
        },
        {
          type: "heading",
          level: 3,
          text: "Droga komórki jajowej",
        },
        {
          type: "paragraph",
          text: "Komórki jajowe są magazynowane w jajniku, otoczone pęcherzykiem jajnikowym. Dojrzały pęcherzyk pęka, wyrzucając komórkę jajową do jamy otrzewnej. Ruch migawek nabłonka jajowodu powoduje zasysanie płynu surowiczego z komórką jajową do jajowodu. Komórka jajowa żyje około 24 godzin od owulacji. Do macicy trafia dopiero zarodek (zapłodniona i dzieląca się komórka jajowa).",
        },
        {
          type: "paragraph",
          text: "Odcinki jajowodu: lejek (początkowe, postrzępione rozszerzenie), bańka (najdłuższa i najobszerniejsza część — najczęściej tu dochodzi do zapłodnienia), cieśń (cieńszy odcinek, narażony na zwężenie w stanach zapalnych).",
        },
      ],
      recallQuestions: [
        {
          id: "ur-3",
          question: "Jakie jest prawidłowe położenie macicy?",
          answer: "Przodopochylenie (anteversio) i przodozgięcie (anteflexio).",
          examRef: "Q10",
        },
        {
          id: "ur-4",
          question: "U kobiet macica od przodu sąsiaduje z jakim narządem, a od dołu w co przechodzi?",
          answer: "Od przodu z pęcherzem moczowym, od dołu przechodzi w pochwę.",
          examRef: "Q42",
        },
        {
          id: "ur-12",
          question: "Wymień kolejne odcinki jajowodu od jajnika w kierunku macicy.",
          answer: "Lejek jajowodu → bańka jajowodu (najdłuższa, miejsce zapłodnienia) → cieśń jajowodu.",
          examRef: "Wykład",
        },
        {
          id: "ur-13",
          question: "Jak komórka jajowa dostaje się z jajnika do jajowodu?",
          answer: "Ruch migawek nabłonka jajowodu zasysa płyn surowiczy wraz z komórką jajową wyrzuconą do jamy otrzewnej po pęknięciu pęcherzyka jajnikowego.",
          examRef: "Wykład",
        },
      ],
    },
  ],
};
