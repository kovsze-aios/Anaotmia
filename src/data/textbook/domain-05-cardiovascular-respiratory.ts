import type { TextbookDomain } from "@/types/textbook";

export const cardiovascularRespiratory: TextbookDomain = {
  id: "cardiovascular-respiratory",
  title: "Układ Krążenia i Oddechowy",
  shortTitle: "Krążenie/oddech",
  icon: "❤️",
  sections: [
    {
      id: "serce",
      title: "Serce",
      content: [
        {
          type: "paragraph",
          text: "Mięsień sercowy (myocardium) jest częścią śródsierdzia — warstwy środkowej ściany serca (pytanie nr 7). Ściana serca zbudowana jest z trzech warstw: nasierdzia (zewnętrzna), śródsierdzia (mięsień sercowy) i wsierdzia (wewnętrzna).",
        },
        {
          type: "table",
          headers: ["Warstwa serca", "Opis"],
          rows: [
            ["Nasierdzie (epicardium)", "Zewnętrzna warstwa, pokrywa serce"],
            ["Śródsierdzie (myocardium)", "Mięsień sercowy — warstwa środkowa"],
            ["Wsierdzie (endocardium)", "Wewnętrzna warstwa, wyściela jamy serca"],
            ["Osierdzie (pericardium)", "Worek osierdziowy otaczający serce"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Grubość ściany lewej komory",
        },
        {
          type: "paragraph",
          text: "Ściana lewej komory jest 3-krotnie grubsza od ściany prawej komory. Wynika to z oporu, jaki krew napotyka w krążeniu dużym (obwodowym) — naczynia krwionośne stawiają opór przepływającej krwi, a do pokonania tego oporu konieczna jest silna mięśniówka lewej komory. W krążeniu małym (płucnym) opór naczyń jest znacznie mniejszy, dlatego prawa komora może być cieńsza.",
        },
        {
          type: "paragraph",
          text: "Krew natleniona (tętnicza) płynie w lewym sercu, natomiast krew odtleniona (żylna) w prawym sercu. Do lewego serca krew trafia z płuc przez 4 żyły płucne (2 prawe i 2 lewe). Lewe serce pompuje krew aortą do krążenia dużego, a prawe serce pompuje krwią pniem płucnym do krążenia małego.",
        },
        {
          type: "heading",
          level: 3,
          text: "Tony serca — mechanizm powstawania",
        },
        {
          type: "paragraph",
          text: "Dwa charakterystyczne tony serca ('pyk, pyk') to uderzenie krwi o zastawki, a nie skurcz przedsionków i komór. Pierwszy ton serca to skurcz komór — uderzenie krwi o zamknięte zastawki przedsionkowo-komorowe (trójdzielną po prawej i dwudzielną/mitralną po lewej). Drugi ton serca to uderzenie krwi cofającej się z aorty i pnia płucnego o płatki zastawek tętniczych (zastawka aorty i zastawka pnia płucnego), które zapobiegają cofaniu się krwi do komór po skurczu.",
        },
        {
          type: "table",
          headers: ["Ton serca", "Przyczyna"],
          rows: [
            ["I ton ('pyk')", "Skurcz komór — krew uderza o zamknięte zastawki przedsionkowo-komorowe"],
            ["II ton ('pyk')", "Krew cofająca się z aorty i pnia płucnego uderza o zastawki tętnicze"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Zastawki serca",
        },
        {
          type: "paragraph",
          text: "Przegroda przedsionkowo-komorowa zaopatrzona jest w zastawki, przez które krew może przepłynąć z przedsionków do komór, ale nie może się cofnąć. W prawym sercu znajduje się zastawka trójdzielna, w lewym sercu — zastawka dwudzielna (mitralna). Zastawka aorty i zastawka pnia płucnego mają po trzy płatki.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-1",
          question: "Mięsień sercowy jest częścią której warstwy serca?",
          answer: "Śródsierdzia (myocardium).",
          examRef: "Q7",
        },
        {
          id: "cr-7",
          question: "Ile razy grubsza jest ściana lewej komory od prawej i dlaczego?",
          answer: "3-krotnie grubsza, ponieważ musi pokonać większy opór naczyń krążenia dużego (systemowego).",
          examRef: "Wykład",
        },
        {
          id: "cr-8",
          question: "Co powoduje drugi ton serca ('pyk')?",
          answer: "Uderzenie krwi cofającej się z aorty i pnia płucnego o zastawki tętnicze (aorty i pnia płucnego).",
          examRef: "Wykład",
        },
        {
          id: "cr-9",
          question: "Jakie zastawki zapobiegają cofaniu się krwi z komór do przedsionków?",
          answer: "Trójdzielna (prawa) i dwudzielna/mitralna (lewa) — zastawki przedsionkowo-komorowe.",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "naczynia-krwionosne",
      title: "Naczynia krwionośne",
      content: [
        {
          type: "paragraph",
          text: "Krew bogatą w tlen (utlenowaną) do płuc prowadzą gałęzie oskrzelowe (bronchial branches) — pytanie nr 5. Tętnice płucne prowadzą krew odtlenowaną do płuc, a żyły płucne prowadzą krew utlenowaną z płuc do serca.",
        },
        {
          type: "heading",
          level: 3,
          text: "Podział układu krążenia",
        },
        {
          type: "paragraph",
          text: "Krążenie małe (płucne) — z prawej komory krew odtleniona wypływa pniem płucnym, który dzieli się na prawą i lewą tętnicę płucną. W płucach zachodzi wymiana gazowa: CO₂ przechodzi do powietrza, a tlen do krwi. Natleniona krew wraca 4 żyłami płucnymi do lewego przedsionka.",
        },
        {
          type: "paragraph",
          text: "Krążenie duże (obwodowe/odżywcze) — z lewej komory krew natleniona wypływa aortą do wszystkich narządów ciała. W komórkach zachodzi przemiana materii: tlen i substancje odżywcze są wykorzystywane, powstaje CO₂ i metabolity (szkodliwe produkty przemiany materii). Krew zużyta, z CO₂ i metabolitami, wraca żyłami do prawego przedsionka.",
        },
        {
          type: "table",
          headers: ["Krążenie", "Początek", "Funkcja"],
          rows: [
            ["Małe (płucne)", "Prawa komora → pień płucny", "Wymiana gazowa w płucach"],
            ["Duże (odżywcze)", "Lewa komora → aorta", "Dostarcza tlen i substancje odżywcze do tkanek"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Żyła wrotna",
        },
        {
          type: "paragraph",
          text: "Żyła wrotna nie zbiera krwi z nerki lewej (pytanie nr 6). Żyła wrotna (vena portae) zbiera krew z przewodu pokarmowego (żołądek, jelita), trzustki, śledziony i pęcherzyka żółciowego i prowadzi ją do wątroby. Nie zbiera krwi z nerek.",
        },
        {
          type: "paragraph",
          text: "Sieć dziwna żylno-żylna (rete mirabile) występuje w wątrobie (pytanie nr 12). W wątrobie krew z żyły wrotnej rozpada się na sieć naczyń włosowatych (sinusoidy), które następnie zbiegają się w żyły wątrobowe.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-2",
          question: "Krew bogatą w tlen do płuc prowadzą: gałęzie oskrzelowe, tętnice płucne, żyły płucne czy tętnice wieńcowe?",
          answer: "Gałęzie oskrzelowe.",
          examRef: "Q5",
        },
        {
          id: "cr-3",
          question: "Żyła wrotna nie zbiera krwi z którego narządu?",
          answer: "Z nerki lewej.",
          examRef: "Q6",
        },
        {
          id: "cr-4",
          question: "Gdzie występuje sieć dziwna żylno-żylna (rete mirabile)?",
          answer: "W wątrobie.",
          examRef: "Q12",
        },
      ],
    },
    {
      id: "tetnice-konczyny-gornej",
      title: "Droga krwi do kończyny górnej — arterial line",
      content: [
        {
          type: "paragraph",
          text: "Krążenie duże (odżywcze) zaczyna się w lewej komorze i zaczyna się aortą. Aorta najpierw prowadzi krew do góry (aorta wstępująca), następnie przechodzi w łuk aorty, a wreszcie w aortę zstępującą (nadprzeponowa = piersiowa, podprzeponowa = brzuszna).",
        },
        {
          type: "heading",
          level: 3,
          text: "Pełna droga tętnicza do prawej ręki",
        },
        {
          type: "list",
          items: [
            "Lewa komora (ventriculus sinister)",
            "Aorta wstępująca (aorta ascendens)",
            "Łuk aorty (arcus aortae)",
            "Pień ramienno-głowowy (truncus brachiocephalicus)",
            "Tętnica podobojczykowa prawa (arteria subclavia dextra)",
            "Tętnica pachowa (arteria axillaris)",
            "Tętnica ramienna (arteria brachialis)",
            "Tętnica promieniowa (arteria radialis) — po stronie kości promieniowej",
            "Tętnica łokciowa (arteria ulnaris) — po stronie kości łokciowej",
          ],
        },
        {
          type: "paragraph",
          text: "Od łuku aorty odchodzą trzy naczynia: (1) pień ramienno-głowowy (na stronę prawą), (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa. Z pnia ramienno-głowowego krew płynie na prawą stronę głowy, szyi i do prawej kończyny górnej. Pień ten dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą.",
        },
        {
          type: "heading",
          level: 3,
          text: "Obszar unaczynienia",
        },
        {
          type: "paragraph",
          text: "Tętnica pachowa związana jest topograficznie ze splotem ramiennym (trzy pęczki: boczny, przyśrodkowy i tylny). Tętnica pachowa przechodzi w tętnicę ramienną, która odżywia przednią grupę ramienia (m. dwugłowy ramienia, ramienny, kruczo-ramienny). Tylna grupa ramienia (m. trójgłowy) zaopatrywana jest przez tętnicę ramienną głęboką.",
        },
        {
          type: "paragraph",
          text: "Tętnica ramienna w okolicy dołu łokciowego dzieli się na tętnicę promieniową (biegnącą bocznie, po stronie kości promieniowej) i tętnicę łokciową (po stronie kości łokciowej). Obie zaopatrują grupę przednią przedramienia (zginacze ręki i palców). Grupa tylna przedramienia zaopatrywana jest przez tętnicę międzykostną wspólną (od tętnicy łokciowej), która dzieli się na międzykostną przednią i tylną. Tętnice promieniowa i łokciowa schodzą na rękę tworząc dwa łuki dłoniowe, które dają odgałęzienia do palców (tętnice palców).",
        },
        {
          type: "heading",
          level: 3,
          text: "Powrót żylny z ręki do serca",
        },
        {
          type: "paragraph",
          text: "Krew po przejściu przez sieć naczyń włosowatych wraca żyłami. Na przedramieniu: żyły promieniowe i łokciowe (towarzyszące tętnicom), które łączą się w żyły ramienne. Żyły ramienne łączą się w jedną, do której uchodzi krew z mięśnia trójgłowego (żyła ramienna głęboka). Żyła ramienna przechodzi w żyłę pachową, następnie w podobojczykową. Żyła podobojczykowa łączy się z żyłą szyjną wewnętrzną, tworząc żyłę ramienno-głowową. Z połączenia dwóch żył ramienno-głowowych (prawej i lewej) powstaje żyła główna górna, która uchodzi do prawego przedsionka.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mechanizmy ułatwiające krążenie żylne",
        },
        {
          type: "paragraph",
          text: "Krew wraca do serca pod znacznie mniejszym ciśnieniem, co utrudnia powrót. W naczyniach żylnych występują zastawki dzielące je na piętra — krew może płynąć tylko do góry (nie cofa się). Dodatkowo pracujące mięśnie uciskają żyły, wypychając krew ku górze. W pobliżu tętnic leżą dwie żyły — uderzenia tętna na tętnicę nachodzą na te żyły, poruszając krew. Ciśnienie krwi na tętnicy ramieniowej u zdrowych wynosi ok. 120/80 mmHg, po przejściu przez naczynia włosowate spada do kilkunastu mmHg.",
        },
        {
          type: "heading",
          level: 3,
          text: "Żyły skórne (termoregulacja)",
        },
        {
          type: "paragraph",
          text: "Nagrzana krew wraca żyłami głębokimi oraz powierzchownymi (skórnymi). Żyły skórne przedramienia: żyła odłokciowa (uchodzi do żyły ramiennej) i żyła odpromieniowa / boczna (uchodzi do żyły pachowej). Krew doprowadzana do skóry pełni funkcję termoregulacyjną.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-10",
          question: "Wymień pełną drogę tętniczą od lewej komory do prawej ręki.",
          answer: "Lewa komora → aorta wstępująca → łuk aorty → pień ramienno-głowowy → tętnica podobojczykowa prawa → tętnica pachowa → tętnica ramienna → tętnica promieniowa i tętnica łokciowa.",
          examRef: "Wykład",
        },
        {
          id: "cr-11",
          question: "Ile naczyń odchodzi od łuku aorty? Wymień je w kolejności.",
          answer: "Trzy: (1) pień ramienno-głowowy, (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa.",
          examRef: "Wykład",
        },
        {
          id: "cr-12",
          question: "Jakie mechanizmy ułatwiają przepływ krwi żylnej w kończynach?",
          answer: "Zastawki żylne (dzielą na piętra, zapobiegają cofaniu), ucisk mięśni, ucisk sąsiednich tętnic (tętno wprawia krew w ruch).",
          examRef: "Wykład",
        },
        {
          id: "cr-13",
          question: "Z połączenia których żył powstaje żyła główna górna?",
          answer: "Z połączenia żyły ramienno-głowowej prawej i lewej.",
          examRef: "Wykład",
        },
        {
          id: "cr-14",
          question: "Jakie dwie główne tętnice zaopatrują przedramię?",
          answer: "Tętnica promieniowa (bocznie, po stronie kości promieniowej) i tętnica łokciowa (przyśrodkowo).",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "uklad-oddechowy",
      title: "Układ oddechowy",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Droga powietrza oddechowego",
        },
        {
          type: "paragraph",
          text: "Powietrze dochodzi do płuc następującą drogą: jama nosowa → gardło → krtań → tchawica → oskrzela → płuca. Jama nosowa dzieli się na przedsionek (pokryty skórą z włosami), jamę właściwą (podzieloną małżowinami nosowymi: górną, środkową i dolną) i kończy się nozdrzami tylnymi.",
        },
        {
          type: "paragraph",
          text: "Gardło dzieli się na trzy części: nosową (sąsiadującą z jamą nosową), ustną (sąsiadującą z jamą ustną) i krtaniową (sąsiadującą z krtanią). Gardło kończy się na dolnej krawędzi chrząstki pierścieniowatej, która jest granicą między krtanią a tchawicą i między gardłem a przełykiem.",
        },
        {
          type: "paragraph",
          text: "Krtań: powietrze wchodzi przez przedsionek krtani, który jest oddzielony od głośni (jamy właściwej) fałdem przedsionka. Głośnia jest oddzielona od jamy podgłośniowej fałdem głosowym. Nagłośnia (chrząstka nagłośniowa) zamyka wejście do krtani podczas połykania — język naciska na nagłośnię, a mięśnie nadgnykowe unoszą krtań.",
        },
        {
          type: "paragraph",
          text: "Przełyk jest całkowicie obkurczoną szczeliną (nie otwartym kanałem). Pokarm jest aktywnie wpychany przez mięśnie zwieracze gardła, a następnie perystaltyka przesuwa go w kierunku żołądka.",
        },
        {
          type: "paragraph",
          text: "Najlepiej wyczuwalną chrząstką krtani jest chrząstka tarczowata (cartilago thyroidea) — pytanie nr 9. Tworzy ona tzw. wypukłość krtaniową ('jabłko Adama').",
        },
        {
          type: "heading",
          level: 3,
          text: "Mechanika oddychania",
        },
        {
          type: "paragraph",
          text: "Głównym mięśniem wydechowym jest mięsień międzyżebrowy wewnętrzny (Q23). Przepona (diaphragma) jest głównym mięśniem wdechowym. Płuca zbudowane są z pęcherzyków płucnych, gdzie zachodzi wymiana gazowa.",
        },
        {
          type: "heading",
          level: 3,
          text: "Topografia klatki piersiowej",
        },
        {
          type: "paragraph",
          text: "Klatka piersiowa ograniczona jest od góry obojczykami, od dołu przeponą. Wypełniona jest po bokach przez płuca, a centralnie przez serce (w śródpiersiu). Prawe płuco sąsiaduje z sercem i przełykiem, lewe płuco — z sercem i aortą. Serce od przodu sąsiaduje głównie z płucami, częściowo z mostkiem i żebrami, od tyłu bezpośrednio z przełykiem (za nim aorta), po bokach z płucami.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-5",
          question: "Jaka jest najlepiej wyczuwalna chrząstka krtani?",
          answer: "Chrząstka tarczowata (cartilago thyroidea).",
          examRef: "Q9",
        },
        {
          id: "cr-6",
          question: "Podaj główny mięsień wydechowy i główny mięsień wdechowy.",
          answer: "Wydech: mięsień międzyżebrowy wewnętrzny. Wdech: przepona (diaphragma).",
          examRef: "Q23",
        },
        {
          id: "cr-15",
          question: "Wymień kolejno wszystkie części gardła (od góry do dołu).",
          answer: "Nosowa (część górna), ustna (część środkowa), krtaniowa (część dolna).",
          examRef: "Wykład",
        },
        {
          id: "cr-16",
          question: "Jaka chrząstka zamyka wejście do krtani podczas połykania?",
          answer: "Chrząstka nagłośniowa (nagłośnia).",
          examRef: "Wykład",
        },
        {
          id: "cr-17",
          question: "Jakie narządy są bezpośrednim sąsiadem serca od tyłu?",
          answer: "Bezpośrednio przełyk, za nim aorta.",
          examRef: "Wykład",
        },
      ],
    },
  ],
};
