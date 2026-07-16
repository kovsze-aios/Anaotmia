import type { TextbookDomain } from "@/types/textbook";

export const cardiovascularRespiratory: TextbookDomain = {
  "id": "cardiovascular-respiratory",
  "title": "Układ Krążenia i Oddechowy",
  "shortTitle": "Krążenie/oddech",
  "icon": "❤️",
  "sections": [
    {
      "id": "serce",
      "title": "Serce",
      "content": [
        {
          "type": "paragraph",
          "text": "Mięsień sercowy (myocardium) jest częścią śródsierdzia — warstwy środkowej ściany serca (pytanie nr 7). Ściana serca zbudowana jest z trzech warstw: nasierdzia (zewnętrzna), śródsierdzia (mięsień sercowy) i wsierdzia (wewnętrzna)."
        },
        {
          "type": "table",
          "headers": [
            "Warstwa serca",
            "Opis"
          ],
          "rows": [
            [
              "Nasierdzie (epicardium)",
              "Zewnętrzna warstwa, pokrywa serce"
            ],
            [
              "Śródsierdzie (myocardium)",
              "Mięsień sercowy — warstwa środkowa"
            ],
            [
              "Wsierdzie (endocardium)",
              "Wewnętrzna warstwa, wyściela jamy serca"
            ],
            [
              "Osierdzie (pericardium)",
              "Worek osierdziowy otaczający serce"
            ]
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Grubość ściany lewej komory"
        },
        {
          "type": "paragraph",
          "text": "Ściana lewej komory jest 3-krotnie grubsza od ściany prawej komory. Wynika to z oporu, jaki krew napotyka w krążeniu dużym (obwodowym) — naczynia krwionośne stawiają opór przepływającej krwi, a do pokonania tego oporu konieczna jest silna mięśniówka lewej komory. W krążeniu małym (płucnym) opór naczyń jest znacznie mniejszy, dlatego prawa komora może być cieńsza."
        },
        {
          "type": "paragraph",
          "text": "Krew natleniona (tętnicza) płynie w lewym sercu, natomiast krew odtleniona (żylna) w prawym sercu. Do lewego serca krew trafia z płuc przez 4 żyły płucne (2 prawe i 2 lewe). Lewe serce pompuje krew aortą do krążenia dużego, a prawe serce pompuje krwią pniem płucnym do krążenia małego."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Tony serca — mechanizm powstawania"
        },
        {
          "type": "paragraph",
          "text": "Dwa charakterystyczne tony serca ('pyk, pyk') to uderzenie krwi o zastawki, a nie skurcz przedsionków i komór. Pierwszy ton serca to skurcz komór — uderzenie krwi o zamknięte zastawki przedsionkowo-komorowe (trójdzielną po prawej i dwudzielną/mitralną po lewej). Drugi ton serca to uderzenie krwi cofającej się z aorty i pnia płucnego o płatki zastawek tętniczych (zastawka aorty i zastawka pnia płucnego), które zapobiegają cofaniu się krwi do komór po skurczu."
        },
        {
          "type": "table",
          "headers": [
            "Ton serca",
            "Przyczyna"
          ],
          "rows": [
            [
              "I ton ('pyk')",
              "Skurcz komór — krew uderza o zamknięte zastawki przedsionkowo-komorowe"
            ],
            [
              "II ton ('pyk')",
              "Krew cofająca się z aorty i pnia płucnego uderza o zastawki tętnicze"
            ]
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Zastawki serca"
        },
        {
          "type": "paragraph",
          "text": "Przegroda przedsionkowo-komorowa zaopatrzona jest w zastawki, przez które krew może przepłynąć z przedsionków do komór, ale nie może się cofnąć. W prawym sercu znajduje się zastawka trójdzielna, w lewym sercu — zastawka dwudzielna (mitralna). Zastawka aorty i zastawka pnia płucnego mają po trzy płatki."
        }
      ],
      "recallQuestions": [
        {
          "id": "cr-1",
          "question": "Mięsień sercowy jest częścią której warstwy serca?",
          "answer": "Śródsierdzia (myocardium).",
          "examRef": "Q7"
        },
        {
          "id": "cr-7",
          "question": "Ile razy grubsza jest ściana lewej komory od prawej i dlaczego?",
          "answer": "3-krotnie grubsza, ponieważ musi pokonać większy opór naczyń krążenia dużego (systemowego).",
          "examRef": "Wykład"
        },
        {
          "id": "cr-8",
          "question": "Co powoduje drugi ton serca ('pyk')?",
          "answer": "Uderzenie krwi cofającej się z aorty i pnia płucnego o zastawki tętnicze (aorty i pnia płucnego).",
          "examRef": "Wykład"
        },
        {
          "id": "cr-9",
          "question": "Jakie zastawki zapobiegają cofaniu się krwi z komór do przedsionków?",
          "answer": "Trójdzielna (prawa) i dwudzielna/mitralna (lewa) — zastawki przedsionkowo-komorowe.",
          "examRef": "Wykład"
        }
      ],
      "academic_detail": "Mięsień sercowy (myocardium) jest częścią śródsierdzia — warstwy środkowej ściany serca (pytanie nr 7). Ściana serca zbudowana jest z trzech warstw: nasierdzia (zewnętrzna), śródsierdzia (mięsień sercowy) i wsierdzia (wewnętrzna).\n\nŚciana lewej komory jest 3-krotnie grubsza od ściany prawej komory. Wynika to z oporu, jaki krew napotyka w krążeniu dużym (obwodowym) — naczynia krwionośne stawiają opór przepływającej krwi, a do pokonania tego oporu konieczna jest silna mięśniówka lewej komory. W krążeniu małym (płucnym) opór naczyń jest znacznie mniejszy, dlatego prawa komora może być cieńsza.\n\nKrew natleniona (tętnicza) płynie w lewym sercu, natomiast krew odtleniona (żylna) w prawym sercu. Do lewego serca krew trafia z płuc przez 4 żyły płucne (2 prawe i 2 lewe). Lewe serce pompuje krew aortą do krążenia dużego, a prawe serce pompuje krwią pniem płucnym do krążenia małego.\n\nDwa charakterystyczne tony serca ('pyk, pyk') to uderzenie krwi o zastawki, a nie skurcz przedsionków i komór. Pierwszy ton serca to skurcz komór — uderzenie krwi o zamknięte zastawki przedsionkowo-komorowe (trójdzielną po prawej i dwudzielną/mitralną po lewej). Drugi ton serca to uderzenie krwi cofającej się z aorty i pnia płucnego o płatki zastawek tętniczych (zastawka aorty i zastawka pnia płucnego), które zapobiegają cofaniu się krwi do komór po skurczu.\n\nPrzegroda przedsionkowo-komorowa zaopatrzona jest w zastawki, przez które krew może przepłynąć z przedsionków do komór, ale nie może się cofnąć. W prawym sercu znajduje się zastawka trójdzielna, w lewym sercu — zastawka dwudzielna (mitralna). Zastawka aorty i zastawka pnia płucnego mają po trzy płatki.\n\nZe źródeł:\nserce, u je-\n2\n3\n2\n\n--- STRONA 12 ---\ndnego jest ono bardziej wydłużone i ustawione bardziej pionowo,\n(nie ukończony). Jena 1896—1926. — Becker R. F., Wilson J. W., Gehweiler J. A., The\nu drugiego — bardziej poszerzone i ustawione bardziej skośnie. Zmien-\nanatomical basis of medical practice. Williams i Wilkins Comp., Baltimore 1971. — Be-\nnninghoff A., Gerttler K., Lehrbuch der Anatomie des Menschen, 3 tomy. Wydanie 10.\nność jest zasadniczą właściwością budowy żywego ustroju, tak że mo-\nUrban i Schwarzenberg, München 1968. — Berger A. J., Elementary human anatomy. J.\nglibyśmy mówićo anatomiiindywidualnejlub osobniczej,ana-\nWiley i Sons, New York 1964. — Borovanský L. (Red.), Soustavna anatomie človèka, 2\ntomii poszczególnego osobnika. Anatomia taka jednak nie może być\ntomy. Napisali Borovanský L., Žlabek K., Hromada J., Zrzavý J., Kos J., Statni Zdravo-\nprzedmiotem nauczania. Do celów nauczania nadaje się jedynie anato-\ntnickč. Praha 1960. — Braus H., Anatomie des Menschen. Tom I i II. J. Springer, Berlin\n1954—1956. — Braus H., Elze C., Anatomie des Menschen. Tom III. J. Springer, Berlin\nmia, która by odpowiadała typowi człowieka zdrowego, w srednim\n1960. — Broesicke G., Mair R., Repetitorium Anatomicum. Wydanie 7. G. Thieme, Leip-\nwieku, pewnej fikcyjnej średniej budowy, opartej na wyniku tysięey\nzig, Jena, Berlin 1947. — Clara M., Das Nervensystem des Menschen. Wydanie 3. J. A.\nsekcji ludzkich, na wynikach obserwacji i badań tysięcy osobników ży-\nBarth. Leipzig 1959. — Cunningham's Text-Book of anatomy Edited G. J. Romanes. Wy-\nwych.\ndanie 10. Oxford Univ. Press, London 1964. — Cunningham's manual of practical anato-\nmy. Wydanie 13, poprawione przez G. J. Romanes. Oxford Univ. Press, London 1966. —\nGardner E., Gray D. J., O'Rahilly R., Anatomy: A regional study of human structure.\nWydanie 2. W. B. Saunders, Philadelphia 1963. — Gray H., Anatomy of the human body.\nWażniejsze podręczniki i dzieła anatomiczne\nRed. Levis W. H. Wydanie 24. Philadelphia 1943. — Gray's\n\nZasada 3x grubości ściany komory: Ściana komory lewej jest około 3 razy grubsza niż ściana komory prawej (odpowiednio ~15 mm do ~5 mm), ze względu na konieczność pompowania krwi pod wyższym ciśnieniem na obieg systemowy.",
      "summary": "- Ściana lewej komory jest 3-krotnie grubsza od ściany prawej komory z powodu konieczności pokonania **większego** __________ w krążeniu dużym.\n- Dwa charakterystyczne tony serca to uderzenie krwi o __________."
    },
    {
      "id": "naczynia-krwionosne",
      "title": "Naczynia krwionośne",
      "content": [
        {
          "type": "paragraph",
          "text": "Krew bogatą w tlen (utlenowaną) do płuc prowadzą gałęzie oskrzelowe (bronchial branches) — pytanie nr 5. Tętnice płucne prowadzą krew odtlenowaną do płuc, a żyły płucne prowadzą krew utlenowaną z płuc do serca."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Podział układu krążenia"
        },
        {
          "type": "paragraph",
          "text": "Krążenie małe (płucne) — z prawej komory krew odtleniona wypływa pniem płucnym, który dzieli się na prawą i lewą tętnicę płucną. W płucach zachodzi wymiana gazowa: CO2 przechodzi do powietrza, a tlen do krwi. Natleniona krew wraca 4 żyłami płucnymi do lewego przedsionka."
        },
        {
          "type": "paragraph",
          "text": "Krążenie duże (obwodowe/odżywcze) — z lewej komory krew natleniona wypływa aortą do wszystkich narządów ciała. W komórkach zachodzi przemiana materii: tlen i substancje odżywcze są wykorzystywane, powstaje CO2 i metabolity (szkodliwe produkty przemiany materii). Krew zużyta, z CO2 i metabolitami, wraca żyłami do prawego przedsionka."
        },
        {
          "type": "table",
          "headers": [
            "Krążenie",
            "Początek",
            "Funkcja"
          ],
          "rows": [
            [
              "Małe (płucne)",
              "Prawa komora → pień płucny",
              "Wymiana gazowa w płucach"
            ],
            [
              "Duże (odżywcze)",
              "Lewa komora → aorta",
              "Dostarcza tlen i substancje odżywcze do tkanek"
            ]
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Żyła wrotna"
        },
        {
          "type": "paragraph",
          "text": "Żyła wrotna nie zbiera krwi z nerki lewej (pytanie nr 6). Żyła wrotna (vena portae) zbiera krew z przewodu pokarmowego (żołądek, jelita), trzustki, śledziony i pęcherzyka żółciowego i prowadzi ją do wątroby. Nie zbiera krwi z nerek."
        },
        {
          "type": "paragraph",
          "text": "Sieć dziwna żylno-żylna (rete mirabile) występuje w wątrobie (pytanie nr 12). W wątrobie krew z żyły wrotnej rozpada się na sieć naczyń włosowatych (sinusoidy), które następnie zbiegają się w żyły wątrobowe."
        }
      ],
      "recallQuestions": [
        {
          "id": "cr-2",
          "question": "Krew bogatą w tlen do płuc prowadzą: gałęzie oskrzelowe, tętnice płucne, żyły płucne czy tętnice wieńcowe?",
          "answer": "Gałęzie oskrzelowe.",
          "examRef": "Q5"
        },
        {
          "id": "cr-3",
          "question": "Żyła wrotna nie zbiera krwi z którego narządu?",
          "answer": "Z nerki lewej.",
          "examRef": "Q6"
        },
        {
          "id": "cr-4",
          "question": "Gdzie występuje sieć dziwna żylno-żylna (rete mirabile)?",
          "answer": "W wątrobie.",
          "examRef": "Q12"
        }
      ],
      "academic_detail": "Krew bogatą w tlen (utlenowaną) do płuc prowadzą gałęzie oskrzelowe (bronchial branches) — pytanie nr 5. Tętnice płucne prowadzą krew odtlenowaną do płuc, a żyły płucne prowadzą krew utlenowaną z płuc do serca.\n\nKrążenie małe (płucne) — z prawej komory krew odtleniona wypływa pniem płucnym, który dzieli się na prawą i lewą tętnicę płucną. W płucach zachodzi wymiana gazowa: CO2 przechodzi do powietrza, a tlen do krwi. Natleniona krew wraca 4 żyłami płucnymi do lewego przedsionka.\n\nKrążenie duże (obwodowe/odżywcze) — z lewej komory krew natleniona wypływa aortą do wszystkich narządów ciała. W komórkach zachodzi przemiana materii: tlen i substancje odżywcze są wykorzystywane, powstaje CO2 i metabolity (szkodliwe produkty przemiany materii). Krew zużyta, z CO2 i metabolitami, wraca żyłami do prawego przedsionka.\n\nŻyła wrotna nie zbiera krwi z nerki lewej (pytanie nr 6). Żyła wrotna (vena portae) zbiera krew z przewodu pokarmowego (żołądek, jelita), trzustki, śledziony i pęcherzyka żółciowego i prowadzi ją do wątroby. Nie zbiera krwi z nerek.\n\nSieć dziwna żylno-żylna (rete mirabile) występuje w wątrobie (pytanie nr 12). W wątrobie krew z żyły wrotnej rozpada się na sieć naczyń włosowatych (sinusoidy), które następnie zbiegają się w żyły wątrobowe.\n\nZe źródeł:\nNaczynia i nerwy kości\n204\nSkład czaszki\n307\nStreszczenie — opracował Wiesław Łasiński\n205\nBudowa ogólna czaszki opracowali Michał Reicher i Wiesław Łasiński\n308\nBudowa ogólna połączeń kości — opracowali Michał Reicher i Wiesław Łasiński\n205\nŚciana górna\n308\nRozwój połączeń kości\n206\nŠeiana przednia\n311\nPołączenia ścisłe\n208\nŚciana tylna\n314\nPołączenia wolne, ezyli stawy\n215\nŚciana boczna\n314\nMechanika stawów\n218\nŚciana dolna\n317\nStreszczenie — opracował Wiesław Łasiński\nStreszczenie — opracował Wiesław Łasiński\n322\n219\nBudowa szczegółowa czaszki — opracowali Michał Reicher i Wiesław Łasiński\n324\nPodział kośéca — opracowali Michał Reicher i Wiesław Łasiński\nKości części mózgowej ezaszki\n324\nKości, stawy i więzadła kręgosłupa i klatki piersiowej\nKość potyliczna ... 324. Kość klinowa ... 329. Kość czołowa ... 336. Kość\n219\nskroniowa ... 340. Kość ciemieniowa ... 354. Kość sitowa ... 357\nKręgosłup— opracowali Michał Reicher i Wiesław Lasiński\n220\nKości ezęści trzewnej czaszki\n360\nCharakterystyka kręgu\n222\nMałżowina nosowa dolna ... 360. Kość nosowa ... 361. Lemiesz ... 362.\nKręgi szyjne\n228\nKość łzowa ... 363. Szczęka ... 364. Kość podniebienna ... 372. Kość jarz-\nKregi piersiowe\n231\nmowa ... 376. Żuchwa ... 378. Kość gnykowa ... 386\nKręgi lędźwiowe\n232\nStreszczenie — opracował Wiesław Łasiński\n387\nKość krzyżowa\n237\nPołączenia kości czaszki\n396\nKość guziczna\n237\nPołączenia ścisłe ... 396. Połączenia stawowe. Staw skroniowo-żu-\nRozwój kręgosłupa\n242\nchwowy ... 401\nZmienność kręgosłupa\n248\nStreszczenie — opracował Wiesław Łasiński\n406\nStreszczenie — opracował Wiesław Lasiński\nJamy i doły czaszki\n407\n249\nJama części mózgowejczaszki ... 407. Oczodół... 413. Jama noso-\nPołączenia kręgów przedkrzyżowych\nwa ... 415.Jama ustna ... 422. Dół skroniowy ... 422. Dółpodskro-\nPołączenia trzonów kręgów ... 249. Połączenia wyrostków i łuków krę-\nniowy ... 423. Dół skrzydłowo-podniebienny ... 424. Dół zażuchwo-\ngów ... 252\n254\nwy..425\nPołączenie przedkrzyżowego odcinka kręgosłupa z koś",
      "summary": "- Krew natleniona wypływa z lewej komory przez **aortę** do __________ dużego.\n- Unaczynienie tętnicze kończyny górnej: Tętnica podobojczykowa -> tętnica pachowa -> tętnica ramienna -> podział na tętnicę promieniową i __________."
    },
    {
      "id": "tetnice-konczyny-gornej",
      "title": "Droga krwi do kończyny górnej — arterial line",
      "content": [
        {
          "type": "paragraph",
          "text": "Krążenie duże (odżywcze) zaczyna się w lewej komorze i zaczyna się aortą. Aorta najpierw prowadzi krew do góry (aorta wstępująca), następnie przechodzi w łuk aorty, a wreszcie w aortę zstępującą (nadprzeponowa = piersiowa, podprzeponowa = brzuszna)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Pełna droga tętnicza do prawej ręki"
        },
        {
          "type": "list",
          "items": [
            "Lewa komora (ventriculus sinister)",
            "Aorta wstępująca (aorta ascendens)",
            "Łuk aorty (arcus aortae)",
            "Pień ramienno-głowowy (truncus brachiocephalicus)",
            "Tętnica podobojczykowa prawa (arteria subclavia dextra)",
            "Tętnica pachowa (arteria axillaris)",
            "Tętnica ramienna (arteria brachialis)",
            "Tętnica promieniowa (arteria radialis) — po stronie kości promieniowej",
            "Tętnica łokciowa (arteria ulnaris) — po stronie kości łokciowej"
          ]
        },
        {
          "type": "paragraph",
          "text": "Od łuku aorty odchodzą trzy naczynia: (1) pień ramienno-głowowy (na stronę prawą), (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa. Z pnia ramienno-głowowego krew płynie na prawą stronę głowy, szyi i do prawej kończyny górnej. Pień ten dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Obszar unaczynienia"
        },
        {
          "type": "paragraph",
          "text": "Tętnica pachowa związana jest topograficznie ze splotem ramiennym (trzy pęczki: boczny, przyśrodkowy i tylny). Tętnica pachowa przechodzi w tętnicę ramienną, która odżywia przednią grupę ramienia (m. dwugłowy ramienia, ramienny, kruczo-ramienny). Tylna grupa ramienia (m. trójgłowy) zaopatrywana jest przez tętnicę ramienną głęboką."
        },
        {
          "type": "paragraph",
          "text": "Tętnica ramienna w okolicy dołu łokciowego dzieli się na tętnicę promieniową (biegnącą bocznie, po stronie kości promieniowej) i tętnicę łokciową (po stronie kości łokciowej). Obie zaopatrują grupę przednią przedramienia (zginacze ręki i palców). Grupa tylna przedramienia zaopatrywana jest przez tętnicę międzykostną wspólną (od tętnicy łokciowej), która dzieli się na międzykostną przednią i tylną. Tętnice promieniowa i łokciowa schodzą na rękę tworząc dwa łuki dłoniowe, które dają odgałęzienia do palców (tętnice palców)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Powrót żylny z ręki do serca"
        },
        {
          "type": "paragraph",
          "text": "Krew po przejściu przez sieć naczyń włosowatych wraca żyłami. Na przedramieniu: żyły promieniowe i łokciowe (towarzyszące tętnicom), które łączą się w żyły ramienne. Żyły ramienne łączą się w jedną, do której uchodzi krew z mięśnia trójgłowego (żyła ramienna głęboka). Żyła ramienna przechodzi w żyłę pachową, następnie w podobojczykową. Żyła podobojczykowa łączy się z żyłą szyjną wewnętrzną, tworząc żyłę ramienno-głowową. Z połączenia dwóch żył ramienno-głowowych (prawej i lewej) powstaje żyła główna górna, która uchodzi do prawego przedsionka."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Mechanizmy ułatwiające krążenie żylne"
        },
        {
          "type": "paragraph",
          "text": "Krew wraca do serca pod znacznie mniejszym ciśnieniem, co utrudnia powrót. W naczyniach żylnych występują zastawki dzielące je na piętra — krew może płynąć tylko do góry (nie cofa się). Dodatkowo pracujące mięśnie uciskają żyły, wypychając krew ku górze. W pobliżu tętnic leżą dwie żyły — uderzenia tętna na tętnicę nachodzą na te żyły, poruszając krew. Ciśnienie krwi na tętnicy ramieniowej u zdrowych wynosi ok. 120/80 mmHg, po przejściu przez naczynia włosowate spada do kilkunastu mmHg."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Żyły skórne (termoregulacja)"
        },
        {
          "type": "paragraph",
          "text": "Nagrzana krew wraca żyłami głębokimi oraz powierzchownymi (skórnymi). Żyły skórne przedramienia: żyła odłokciowa (uchodzi do żyły ramiennej) i żyła odpromieniowa / boczna (uchodzi do żyły pachowej). Krew doprowadzana do skóry pełni funkcję termoregulacyjną."
        }
      ],
      "recallQuestions": [
        {
          "id": "cr-10",
          "question": "Wymień pełną drogę tętniczą od lewej komory do prawej ręki.",
          "answer": "Lewa komora → aorta wstępująca → łuk aorty → pień ramienno-głowowy → tętnica podobojczykowa prawa → tętnica pachowa → tętnica ramienna → tętnica promieniowa i tętnica łokciowa.",
          "examRef": "Wykład"
        },
        {
          "id": "cr-11",
          "question": "Ile naczyń odchodzi od łuku aorty? Wymień je w kolejności.",
          "answer": "Trzy: (1) pień ramienno-głowowy, (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa.",
          "examRef": "Wykład"
        },
        {
          "id": "cr-12",
          "question": "Jakie mechanizmy ułatwiają przepływ krwi żylnej w kończynach?",
          "answer": "Zastawki żylne (dzielą na piętra, zapobiegają cofaniu), ucisk mięśni, ucisk sąsiednich tętnic (tętno wprawia krew w ruch).",
          "examRef": "Wykład"
        },
        {
          "id": "cr-13",
          "question": "Z połączenia których żył powstaje żyła główna górna?",
          "answer": "Z połączenia żyły ramienno-głowowej prawej i lewej.",
          "examRef": "Wykład"
        },
        {
          "id": "cr-14",
          "question": "Jakie dwie główne tętnice zaopatrują przedramię?",
          "answer": "Tętnica promieniowa (bocznie, po stronie kości promieniowej) i tętnica łokciowa (przyśrodkowo).",
          "examRef": "Wykład"
        }
      ],
      "academic_detail": "Krążenie duże (odżywcze) zaczyna się w lewej komorze i zaczyna się aortą. Aorta najpierw prowadzi krew do góry (aorta wstępująca), następnie przechodzi w łuk aorty, a wreszcie w aortę zstępującą (nadprzeponowa = piersiowa, podprzeponowa = brzuszna).\n\nOd łuku aorty odchodzą trzy naczynia: (1) pień ramienno-głowowy (na stronę prawą), (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa. Z pnia ramienno-głowowego krew płynie na prawą stronę głowy, szyi i do prawej kończyny górnej. Pień ten dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą.\n\nTętnica pachowa związana jest topograficznie ze splotem ramiennym (trzy pęczki: boczny, przyśrodkowy i tylny). Tętnica pachowa przechodzi w tętnicę ramienną, która odżywia przednią grupę ramienia (m. dwugłowy ramienia, ramienny, kruczo-ramienny). Tylna grupa ramienia (m. trójgłowy) zaopatrywana jest przez tętnicę ramienną głęboką.\n\nTętnica ramienna w okolicy dołu łokciowego dzieli się na tętnicę promieniową (biegnącą bocznie, po stronie kości promieniowej) i tętnicę łokciową (po stronie kości łokciowej). Obie zaopatrują grupę przednią przedramienia (zginacze ręki i palców). Grupa tylna przedramienia zaopatrywana jest przez tętnicę międzykostną wspólną (od tętnicy łokciowej), która dzieli się na międzykostną przednią i tylną. Tętnice promieniowa i łokciowa schodzą na rękę tworząc dwa łuki dłoniowe, które dają odgałęzienia do palców (tętnice palców).\n\nKrew po przejściu przez sieć naczyń włosowatych wraca żyłami. Na przedramieniu: żyły promieniowe i łokciowe (towarzyszące tętnicom), które łączą się w żyły ramienne. Żyły ramienne łączą się w jedną, do której uchodzi krew z mięśnia trójgłowego (żyła ramienna głęboka). Żyła ramienna przechodzi w żyłę pachową, następnie w podobojczykową. Żyła podobojczykowa łączy się z żyłą szyjną wewnętrzną, tworząc żyłę ramienno-głowową. Z połączenia dwóch żył ramienno-głowowych (prawej i lewej) powstaje żyła główna górna, która uchodzi do prawego przedsionka.\n\nKrew wraca do serca pod znacznie mniejszym ciśnieniem, co utrudnia powrót. W naczyniach żylnych występują zastawki dzielące je na piętra — krew może płynąć tylko do góry (nie cofa się). Dodatkowo pracujące mięśnie uciskają żyły, wypychając krew ku górze. W pobliżu tętnic leżą dwie żyły — uderzenia tętna na tętnicę nachodzą na te żyły, poruszając krew. Ciśnienie krwi na tętnicy ramieniowej u zdrowych wynosi ok. 120/80 mmHg, po przejściu przez naczynia włosowate spada do kilkunastu mmHg.\n\nNagrzana krew wraca żyłami głębokimi oraz powierzchownymi (skórnymi). Żyły skórne przedramienia: żyła odłokciowa (uchodzi do żyły ramiennej) i żyła odpromieniowa / boczna (uchodzi do żyły pachowej). Krew doprowadzana do skóry pełni funkcję termoregulacyjną.\n\nZe źródeł:\nkończyny górnej\nKośei części wolnej kończyny dolnej — opracowali Michał Reicher i Wiesław\nŁasiński\n541\nRozwój kości kończyny górnej — opracowali Michał Reicher i Wiesław Łasin-\nKośé udowa\n437\n541\nski\nRzepka\n549\nKośei obręczy kończyny górnej — opracowali Michał Reicher i Wiesław Łasin-\nStreszczenie — opracował Wiesłtaw Lasiński\n551\nski\n438\nKości goleni\n552\nObojczyk\n438\nKość piszczelowa ... 552. Strzałka ... 560\nLopatka\n440\nStreszczenie — opracował Wiestaw Lasiński\n562\nStreszczenie — opracował Wiesław Łasiński\n445\nKości stopy\n563\nKości stępu ... 563. Kości śródstopia ... 573. Kości palców stopy ... 577.\nKości części wolnej kończyny górnej\n446\nTrzeszczki ... 577\nKość ramienna\nStreszczenie — opracował Wiesław Łasiński\n446\n453\nStreszczenie — opracował Wiesław Łasinski\n578\nKości przedramienia\n454\nStawy kończyny dolnej\n579\nKości ręki\nStreszczenie — opracował Wiesław Lasiński\nKość łokciowa ... 455. Kość promieniowa ... 461\n465\n464\nStaw biodrowy\nStaw kolanowy\nStreszczenie — opracował Wiesław Łasiński\n587\n587\n580\nKości nadgarstka ... 465.Kości śródręcza ... 471. Kości palców ręki ... 476\nStreszezenie — opracował Wiesław Łasiński\n600\nStreszczenie — opracował Wiesław Lasiński\n477\nPołączenia kości goleni\n600\nStawy kończyny górnej — opracowali Michał Reicher i Wiesław Łasiński\n478\nStaw piszczelowo-strzałkowy ... 600. Więzozrost piszczelowo-strzał-\nStawy i więzozrosty obręczy kończyny górnej\n479\nkowy ... 601. Błona międzykostna goleni .. 601\nStaw mostkowo-obojczykowy ... 479.\nStaw\nbarkowo-obojczyko-\nStawy stopy\n602\nwy ... 481. Więzozrosty łopatki ... 483\nStaw skokowy górny ... 602. Staw skokowy dolny ... 603. Naczynia\nStaw ramienny\n484\ni nerwy stawów skokowych... 606. Mechanika stawów skoko-\nStreszczenie — opracował Wiesław Lasiński\n488\nwych ... 606. Pozostałe stawy stępu... 610. Stawy stępowo-śródstop-\nStaw łokciowy\n489\nne ... 612. Stawy międzyśródstopne ... 612\nStaw ramienno-łokciowy i ramienno-promieniowy ... 489\nStawy palców stopy\n613\nStreszczenie — opracował Wiesław Łasiński",
      "summary": "- __________ duże (odżywcze) zaczyna się w lewej komorze i zaczyna się aortą.\n- Aorta najpierw prowadzi krew do góry (aorta wstępująca), następnie przechodzi w łuk aorty, a wreszcie w aortę **zstępującą** __________ = piersiowa, podprzeponowa = brzuszna).\n- Od łuku aorty odchodzą trzy naczynia: (1) **pień** __________ (na stronę prawą), (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa.\n- Z **pnia** __________ krew płynie na prawą stronę głowy, szyi i do prawej kończyny górnej."
    },
    {
      "id": "uklad-oddechowy",
      "title": "Układ oddechowy",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Droga powietrza oddechowego"
        },
        {
          "type": "paragraph",
          "text": "Powietrze dochodzi do płuc następującą drogą: jama nosowa → gardło → krtań → tchawica → oskrzela → płuca. Jama nosowa dzieli się na przedsionek (pokryty skórą z włosami), jamę właściwą (podzieloną małżowinami nosowymi: górną, środkową i dolną) i kończy się nozdrzami tylnymi."
        },
        {
          "type": "paragraph",
          "text": "Gardło dzieli się na trzy części: nosową (sąsiadującą z jamą nosową), ustną (sąsiadującą z jamą ustną) i krtaniową (sąsiadującą z krtanią). Gardło kończy się na dolnej krawędzi chrząstki pierścieniowatej, która jest granicą między krtanią a tchawicą i między gardłem a przełykiem."
        },
        {
          "type": "paragraph",
          "text": "Krtań: powietrze wchodzi przez przedsionek krtani, który jest oddzielony od głośni (jamy właściwej) fałdem przedsionka. Głośnia jest oddzielona od jamy podgłośniowej fałdem głosowym. Nagłośnia (chrząstka nagłośniowa) zamyka wejście do krtani podczas połykania — język naciska na nagłośnię, a mięśnie nadgnykowe unoszą krtań."
        },
        {
          "type": "paragraph",
          "text": "Przełyk jest całkowicie obkurczoną szczeliną (nie otwartym kanałem). Pokarm jest aktywnie wpychany przez mięśnie zwieracze gardła, a następnie perystaltyka przesuwa go w kierunku żołądka."
        },
        {
          "type": "paragraph",
          "text": "Najlepiej wyczuwalną chrząstką krtani jest chrząstka tarczowata (cartilago thyroidea) — pytanie nr 9. Tworzy ona tzw. wypukłość krtaniową ('jabłko Adama')."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Mechanika oddychania"
        },
        {
          "type": "paragraph",
          "text": "Głównym mięśniem wydechowym jest mięsień międzyżebrowy wewnętrzny (Q23). Przepona (diaphragma) jest głównym mięśniem wdechowym. Płuca zbudowane są z pęcherzyków płucnych, gdzie zachodzi wymiana gazowa."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Topografia klatki piersiowej"
        },
        {
          "type": "paragraph",
          "text": "Klatka piersiowa ograniczona jest od góry obojczykami, od dołu przeponą. Wypełniona jest po bokach przez płuca, a centralnie przez serce (w śródpiersiu). Prawe płuco sąsiaduje z sercem i przełykiem, lewe płuco — z sercem i aortą. Serce od przodu sąsiaduje głównie z płucami, częściowo z mostkiem i żebrami, od tyłu bezpośrednio z przełykiem (za nim aorta), po bokach z płucami."
        }
      ],
      "recallQuestions": [
        {
          "id": "cr-5",
          "question": "Jaka jest najlepiej wyczuwalna chrząstka krtani?",
          "answer": "Chrząstka tarczowata (cartilago thyroidea).",
          "examRef": "Q9"
        },
        {
          "id": "cr-6",
          "question": "Podaj główny mięsień wydechowy i główny mięsień wdechowy.",
          "answer": "Wydech: mięsień międzyżebrowy wewnętrzny. Wdech: przepona (diaphragma).",
          "examRef": "Q23"
        },
        {
          "id": "cr-15",
          "question": "Wymień kolejno wszystkie części gardła (od góry do dołu).",
          "answer": "Nosowa (część górna), ustna (część środkowa), krtaniowa (część dolna).",
          "examRef": "Wykład"
        },
        {
          "id": "cr-16",
          "question": "Jaka chrząstka zamyka wejście do krtani podczas połykania?",
          "answer": "Chrząstka nagłośniowa (nagłośnia).",
          "examRef": "Wykład"
        },
        {
          "id": "cr-17",
          "question": "Jakie narządy są bezpośrednim sąsiadem serca od tyłu?",
          "answer": "Bezpośrednio przełyk, za nim aorta.",
          "examRef": "Wykład"
        }
      ],
      "academic_detail": "Powietrze dochodzi do płuc następującą drogą: jama nosowa → gardło → krtań → tchawica → oskrzela → płuca. Jama nosowa dzieli się na przedsionek (pokryty skórą z włosami), jamę właściwą (podzieloną małżowinami nosowymi: górną, środkową i dolną) i kończy się nozdrzami tylnymi.\n\nGardło dzieli się na trzy części: nosową (sąsiadującą z jamą nosową), ustną (sąsiadującą z jamą ustną) i krtaniową (sąsiadującą z krtanią). Gardło kończy się na dolnej krawędzi chrząstki pierścieniowatej, która jest granicą między krtanią a tchawicą i między gardłem a przełykiem.\n\nKrtań: powietrze wchodzi przez przedsionek krtani, który jest oddzielony od głośni (jamy właściwej) fałdem przedsionka. Głośnia jest oddzielona od jamy podgłośniowej fałdem głosowym. Nagłośnia (chrząstka nagłośniowa) zamyka wejście do krtani podczas połykania — język naciska na nagłośnię, a mięśnie nadgnykowe unoszą krtań.\n\nPrzełyk jest całkowicie obkurczoną szczeliną (nie otwartym kanałem). Pokarm jest aktywnie wpychany przez mięśnie zwieracze gardła, a następnie perystaltyka przesuwa go w kierunku żołądka.\n\nNajlepiej wyczuwalną chrząstką krtani jest chrząstka tarczowata (cartilago thyroidea) — pytanie nr 9. Tworzy ona tzw. wypukłość krtaniową ('jabłko Adama').\n\nGłównym mięśniem wydechowym jest mięsień międzyżebrowy wewnętrzny (Q23). Przepona (diaphragma) jest głównym mięśniem wdechowym. Płuca zbudowane są z pęcherzyków płucnych, gdzie zachodzi wymiana gazowa.\n\nKlatka piersiowa ograniczona jest od góry obojczykami, od dołu przeponą. Wypełniona jest po bokach przez płuca, a centralnie przez serce (w śródpiersiu). Prawe płuco sąsiaduje z sercem i przełykiem, lewe płuco — z sercem i aortą. Serce od przodu sąsiaduje głównie z płucami, częściowo z mostkiem i żebrami, od tyłu bezpośrednio z przełykiem (za nim aorta), po bokach z płucami.\n\nZe źródeł:\nukład dzieła czterotomowy. Ostatnio jednak skłaniał się do pozostania\nspoczywa, staram się nie zmieniać charakteru książki. Usilnie pomaga-\nprzy dziele pięciotomowym, wychodząc z założenia, że przewidywane\n y      s  y  \nzamieszczenie całości opisu anatomii układu nerwowego w jednym to-\nprzygotowanie coraz to nowych tomów i nowych wydań książki.\n- pum ozn  o    \nW tomie pierwszym kontynuują pracę dawni Współautorzy: wstęp\ndzie pięciotomowym.\n-is il    z   i\nOddając ze zrozumiałym niepokojem nowe wydanie tomu I do użyt-\nkiewicz. Część histologiczną i embriologiczną, pierwotnie opracowaną\nku Czytelników czynię to świadom, że większość tekstu jest dziełem\nprzez zmarłego Stanisława Hillera, unowocześnili zgodnie z wymoga-\nzmarłych Reichera, Hillera i Stołyhwiny. Zdjęcia rentgenowskie zaw-\nmi postępu wiedzy w tych dziedzinach prof. dr Stanisław Zawistowski\ndzięczamy nadal prof. dr. K. Rowińskiemu i nieżyjącemu już Witoldo-\n(cytologia i histologia) i doc. dr Zofia Zegarska (embriologia). Uwagi\nwi Grabowskiemu. Ryciny w większości wykonały rysowniczki Anna\nantropologiczne i kraniologiczne napisane przez Eugenię Stołyhwo\nSuchodolska i Jadwiga Jończyk.\nprzejrzał i uzupełnił prof. dr Tadeusz Dzierżykray-Rogalski.\nZasługi docentów Władysława Kubika, Heleny Szostakiewicz-Sawi-\nZmiany merytoryczne w obecnie oddawanym tomie dotyczą głównie\nckiej, dr. Leszka Portycha, a także nieżyjącego już rysownika Mikoła-\nbudowy mikroskopowej i ultrastruktury, choć podręcznik traktuje głó-\nja Turosieńskiego nadal pozostają trwałym ich wkładem w niniejsze\nwwn  ato ar d ai   ro\ndzieło.\nskopowej nie wprowadzono istotnych zmian rzeczowych.\nSkładam też gorące podziękowanie pracownikom Zakładu Anatomii\nCzłowieka WAM zawydatną pomoc w przygotowaniu niniejszego\nZmiany dotyczą głównie mianownictwa, które dostosowano do po-\ntomu do druku.\nprawek dokonanych na kongresie towarzystw anatomicznych w Wies-\nNie mniejsze uznanie należy się pracownikom Państwowego Zakła-\nbaden (1965), a które w nowej postaci zo",
      "summary": "- Powietrze dochodzi do **płuc** __________ drogą: jama nosowa → gardło → krtań → tchawica → oskrzela → płuca.\n- Jama nosowa dzieli się **na** __________ (pokryty skórą z włosami), jamę właściwą (podzieloną małżowinami nosowymi: górną, środkową i dolną) i kończy się nozdrzami tylnymi.\n- Gardło dzieli się na trzy części: **nosową** __________ z jamą nosową), ustną (sąsiadującą z jamą ustną) i krtaniową (sąsiadującą z krtanią).\n- Gardło kończy się na dolnej krawędzi **chrząstki** __________ która jest granicą między krtanią a tchawicą i między gardłem a przełykiem."
    },
    {
      "id": "aorta-galezie",
      "title": "Aorta i jej gałęzie — pełne drzewo tętnicze",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Aorta wstępująca i łuk aorty"
        },
        {
          "type": "paragraph",
          "text": "Aorta wstępująca (aorta ascendens) rozpoczyna się od ujścia aorty w lewej komorze (ostium aortae), na wysokości przyczepu III żebra lewego. Jej początkowy odcinek tworzy opuszkę aorty (bulbus aortae), z której odchodzą tętnice wieńcowe: prawa (arteria coronaria dextra — zaopatruje prawy przedsionek, prawą komorę, tylną część przegrody międzykomorowej i węzeł zatokowo-przedsionkowy u 60% ludzi) i lewa (arteria coronaria sinistra — dzieli się na gałąź międzykomorową przednią LAD i gałąź okalającą LCx, zaopatruje lewy przedsionek, lewą komorę i przednią część przegrody). Z łuku aorty (arcus aortae) odchodzą 3 pnie (kolejno od prawej): (1) pień ramienno-głowowy (truncus brachiocephalicus) — dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą, (2) tętnica szyjna wspólna lewa (arteria carotis communis sinistra), (3) tętnica podobojczykowa lewa (arteria subclavia sinistra)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Tętnice głowy i szyi"
        },
        {
          "type": "paragraph",
          "text": "Tętnica szyjna wspólna na wysokości górnego brzegu chrząstki tarczowatej (C4) dzieli się w zatoce szyjnej (sinus caroticus — baroreceptor ciśnienia) na tętnicę szyjną wewnętrzną (arteria carotis interna — zaopatruje mózgowie i oczodół, wchodzi do czaszki przez kanał tętnicy szyjnej w kości skroniowej, oddając tętnicę oczną) i tętnicę szyjną zewnętrzną (arteria carotis externa — unaczynia twarz i szyję). Gałęzie tętnicy szyjnej zewnętrznej (kolejno): tarczowa górna (a. thyroidea superior), językowa (a. lingualis), twarzowa (a. facialis — przebiega przez brzeg żuchwy, puls wyczuwalny), gardłowa wstępująca (a. pharyngea ascendens), potyliczna (a. occipitalis), uszna tylna (a. auricularis posterior), szczękowa (a. maxillaris — oddaje tętnicę oponową środkową wchodzącą przez otwór kolcowy), skroniowa powierzchowna (a. temporalis superficialis — wyczuwalna przed skrawkiem ucha)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Aorta piersiowa i brzuszna — gałęzie"
        },
        {
          "type": "paragraph",
          "text": "Aorta piersiowa (aorta thoracica) oddaje gałęzie trzewne (gałęzie oskrzelowe — unaczynienie odżywcze płuc, przełykowe, śródpiersiowe, osierdziowe) i gałęzie ścienne (tętnice międzyżebrowe tylne — 9 par w przestrzeniach 3-11, tętnice podżebrowe, tętnice przeponowe górne). Po przejściu przez rozwór aortowy przepony (Th12) aorta brzuszna (aorta abdominalis) oddaje gałęzie nieparzyste (do przewodu pokarmowego): pień trzewny (truncus coeliacus — zaopatruje wątrobę, żołądek, śledzionę, trzustkę, dwunastnicę), tętnicę krezkową górną (a. mesenterica superior — zaopatruje jelito cienkie i 2/3 jelita grubego do zgięcia śledzionowego) i tętnicę krezkową dolną (a. mesenterica inferior — zaopatruje dalszą 1/3 jelita grubego). Gałęzie parzyste aorty brzusznej: tętnice nerkowe (aa. renales), tętnice nadnerczowe środkowe, tętnice jądrowe/jajnikowe (aa. testiculares/ovaricae). Aorta brzuszna kończy się podziałem na tętnice biodrowe wspólne (aa. iliacae communes), każda dzieli się na tętnicę biodrową wewnętrzną (a. iliaca interna — narządy miednicy) i zewnętrzną (a. iliaca externa — przechodzi w tętnicę udową pod więzadłem pachwinowym)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Krążenie wieńcowe — szczegóły"
        },
        {
          "type": "paragraph",
          "text": "Tętnica wieńcowa prawa (RCA) odchodzi od prawej zatoki aorty, biegnie w bruździe przedsionkowo-komorowej prawej, oddając gałąź węzła zatokowo-przedsionkowego (60% przypadków), gałąź stożka tętniczego, gałęzie brzeżne dla prawej komory, tętnicę węzła przedsionkowo-komorowego, a następnie dzieli się na gałąź międzykomorową tylną (PDA — posterior descending artery) i gałąź tylną lewej komory. RCA zaopatruje prawy przedsionek, prawą komorę, tylną 1/3 przegrody międzykomorowej, węzły SA i AV. Tętnica wieńcowa lewa (LCA) odchodzi od lewej zatoki aorty, krótki pień dzieli się na gałąź międzykomorową przednią (LAD — left anterior descending, biegnie w bruździe międzykomorowej przedniej, zaopatruje przednią część przegrody i przednią ścianę lewej komory — najczęściej zamykana w zawale) i gałąź okalającą (LCx — biegnie w bruździe przedsionkowo-komorowej lewej, zaopatruje boczną i tylną ścianę lewej komory). Żyły serca: zatoka wieńcowa (sinus coronarius) uchodzi do prawego przedsionka, zbierając krew z żyły wielkiej serca, średniej, małej i tylnej lewej komory."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Układ przewodzący serca"
        },
        {
          "type": "paragraph",
          "text": "Automatyzm serca zapewnia układ przewodzący zbudowany ze zmodyfikowanych kardiomiocytów. Składa się z: (1) Węzeł zatokowo-przedsionkowy (SA node, sinoatrial node) — główny rozrusznik serca (pacemaker), znajduje się w ścianie prawego przedsionka przy ujściu żyły głównej górnej, generuje rytm zatokowy ~70/min. (2) Węzeł przedsionkowo-komorowy (AV node) — w dolnej części przegrody międzyprzedsionkowej, opóźnia przewodzenie o ~0,1 s, umożliwiając pełny skurcz przedsionków przed skurczem komór. (3) Pęczek Hisa (fasciculus atrioventricularis) — przebija szkielet serca i dzieli się na dwie odnogi: prawą (dla prawej komory) i lewą (dla lewej, dzielącą się na wiązkę przednią i tylną). (4) Włókna Purkiniego — końcowe rozgałęzienia w mięśniu komór, szybkie przewodzenie. Unerwienie autonomiczne: współczulne (przyspiesza rytm — przez nerwy sercowe szyjne i piersiowe z pnia współczulnego), przywspółczulne (zwalnia rytm — przez nerw błędny X)."
        }
      ],
      "recallQuestions": [
        {
          "id": "cr-18",
          "question": "Wymień trzy gałęzie odchodzące od łuku aorty w kolejności od strony prawej.",
          "answer": "(1) Pień ramienno-głowowy, (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa.",
          "examRef": ""
        },
        {
          "id": "cr-19",
          "question": "Która gałąź tętnicy wieńcowej lewej jest najczęściej zamykana w zawale serca?",
          "answer": "Gałąź międzykomorowa przednia (LAD — left anterior descending) — zaopatruje przednią ścianę lewej komory i przednią część przegrody międzykomorowej.",
          "examRef": ""
        },
        {
          "id": "cr-20",
          "question": "Opisz kolejność przewodzenia impulsu w układzie przewodzącym serca.",
          "answer": "Węzeł SA (generuje impuls ~70/min) → mięśniówka przedsionków → węzeł AV (opóźnienie ~0,1 s) → pęczek Hisa → odnogi prawej i lewej → włókna Purkiniego → mięśniówka komór.",
          "examRef": ""
        },
        {
          "id": "cr-21",
          "question": "Które nerwy autonomiczne regulują czynność serca i jak?",
          "answer": "Współczulny (z pnia współczulnego przez nerwy sercowe) — przyspiesza rytm i zwiększa siłę skurczu. Przywspółczulny (nerw błędny X) — zwalnia rytm i zmniejsza siłę skurczu.",
          "examRef": ""
        }
      ],
      "academic_detail": "Aorta wstępująca (aorta ascendens) rozpoczyna się od ujścia aorty w lewej komorze (ostium aortae), na wysokości przyczepu III żebra lewego. Jej początkowy odcinek tworzy opuszkę aorty (bulbus aortae), z której odchodzą tętnice wieńcowe: prawa (arteria coronaria dextra — zaopatruje prawy przedsionek, prawą komorę, tylną część przegrody międzykomorowej i węzeł zatokowo-przedsionkowy u 60% ludzi) i lewa (arteria coronaria sinistra — dzieli się na gałąź międzykomorową przednią LAD i gałąź okalającą LCx, zaopatruje lewy przedsionek, lewą komorę i przednią część przegrody). Z łuku aorty (arcus aortae) odchodzą 3 pnie (kolejno od prawej): (1) pień ramienno-głowowy (truncus brachiocephalicus) — dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą, (2) tętnica szyjna wspólna lewa (arteria carotis communis sinistra), (3) tętnica podobojczykowa lewa (arteria subclavia sinistra).\n\nTętnica szyjna wspólna na wysokości górnego brzegu chrząstki tarczowatej (C4) dzieli się w zatoce szyjnej (sinus caroticus — baroreceptor ciśnienia) na tętnicę szyjną wewnętrzną (arteria carotis interna — zaopatruje mózgowie i oczodół, wchodzi do czaszki przez kanał tętnicy szyjnej w kości skroniowej, oddając tętnicę oczną) i tętnicę szyjną zewnętrzną (arteria carotis externa — unaczynia twarz i szyję). Gałęzie tętnicy szyjnej zewnętrznej (kolejno): tarczowa górna (a. thyroidea superior), językowa (a. lingualis), twarzowa (a. facialis — przebiega przez brzeg żuchwy, puls wyczuwalny), gardłowa wstępująca (a. pharyngea ascendens), potyliczna (a. occipitalis), uszna tylna (a. auricularis posterior), szczękowa (a. maxillaris — oddaje tętnicę oponową środkową wchodzącą przez otwór kolcowy), skroniowa powierzchowna (a. temporalis superficialis — wyczuwalna przed skrawkiem ucha).\n\nAorta piersiowa (aorta thoracica) oddaje gałęzie trzewne (gałęzie oskrzelowe — unaczynienie odżywcze płuc, przełykowe, śródpiersiowe, osierdziowe) i gałęzie ścienne (tętnice międzyżebrowe tylne — 9 par w przestrzeniach 3-11, tętnice podżebrowe, tętnice przeponowe górne). Po przejściu przez rozwór aortowy przepony (Th12) aorta brzuszna (aorta abdominalis) oddaje gałęzie nieparzyste (do przewodu pokarmowego): pień trzewny (truncus coeliacus — zaopatruje wątrobę, żołądek, śledzionę, trzustkę, dwunastnicę), tętnicę krezkową górną (a. mesenterica superior — zaopatruje jelito cienkie i 2/3 jelita grubego do zgięcia śledzionowego) i tętnicę krezkową dolną (a. mesenterica inferior — zaopatruje dalszą 1/3 jelita grubego). Gałęzie parzyste aorty brzusznej: tętnice nerkowe (aa. renales), tętnice nadnerczowe środkowe, tętnice jądrowe/jajnikowe (aa. testiculares/ovaricae). Aorta brzuszna kończy się podziałem na tętnice biodrowe wspólne (aa. iliacae communes), każda dzieli się na tętnicę biodrową wewnętrzną (a. iliaca interna — narządy miednicy) i zewnętrzną (a. iliaca externa — przechodzi w tętnicę udową pod więzadłem pachwinowym).\n\nTętnica wieńcowa prawa (RCA) odchodzi od prawej zatoki aorty, biegnie w bruździe przedsionkowo-komorowej prawej, oddając gałąź węzła zatokowo-przedsionkowego (60% przypadków), gałąź stożka tętniczego, gałęzie brzeżne dla prawej komory, tętnicę węzła przedsionkowo-komorowego, a następnie dzieli się na gałąź międzykomorową tylną (PDA — posterior descending artery) i gałąź tylną lewej komory. RCA zaopatruje prawy przedsionek, prawą komorę, tylną 1/3 przegrody międzykomorowej, węzły SA i AV. Tętnica wieńcowa lewa (LCA) odchodzi od lewej zatoki aorty, krótki pień dzieli się na gałąź międzykomorową przednią (LAD — left anterior descending, biegnie w bruździe międzykomorowej przedniej, zaopatruje przednią część przegrody i przednią ścianę lewej komory — najczęściej zamykana w zawale) i gałąź okalającą (LCx — biegnie w bruździe przedsionkowo-komorowej lewej, zaopatruje boczną i tylną ścianę lewej komory). Żyły serca: zatoka wieńcowa (sinus coronarius) uchodzi do prawego przedsionka, zbierając krew z żyły wielkiej serca, średniej, małej i tylnej lewej komory.\n\nAutomatyzm serca zapewnia układ przewodzący zbudowany ze zmodyfikowanych kardiomiocytów. Składa się z: (1) Węzeł zatokowo-przedsionkowy (SA node, sinoatrial node) — główny rozrusznik serca (pacemaker), znajduje się w ścianie prawego przedsionka przy ujściu żyły głównej górnej, generuje rytm zatokowy ~70/min. (2) Węzeł przedsionkowo-komorowy (AV node) — w dolnej części przegrody międzyprzedsionkowej, opóźnia przewodzenie o ~0,1 s, umożliwiając pełny skurcz przedsionków przed skurczem komór. (3) Pęczek Hisa (fasciculus atrioventricularis) — przebija szkielet serca i dzieli się na dwie odnogi: prawą (dla prawej komory) i lewą (dla lewej, dzielącą się na wiązkę przednią i tylną). (4) Włókna Purkiniego — końcowe rozgałęzienia w mięśniu komór, szybkie przewodzenie. Unerwienie autonomiczne: współczulne (przyspiesza rytm — przez nerwy sercowe szyjne i piersiowe z pnia współczulnego), przywspółczulne (zwalnia rytm — przez nerw błędny X).\n\nZe źródeł:\npełne jednak obrazy\nzewnątrz komórkibruzdą oddzie-\nbruzdkowania stwierdzono i u zarodka ludzkiego (rye. 36 a, b)1.\nlającą komórki potomne, toteż\nW przebiegu dalszego bruzdkowania wewnątrz zarodka, pomiędzy\nokres ten nosi nazwę bruzdko-\nkomórkami moruli, gromadzi się płyn, który powoduje rozsuwanie się\nwania.\nwewnętrznych blastomerów. Zarodek przybiera postać pęcherzyka\nU wielu zwierząt po wytworze-\n(ryc. 36 c), wchodząc równocześnie w stadium blastuli (blastos =\nniu dwóch pierwszych blastome-\npączek). Pęcherzyk ten wzrasta, jego ściany stają się cieńsze i w końcu\nrów wszystkie następne dzielą się\nzbudowane są z jednej warstwy niskich komórek. Na jednym jego bie-\nrównocześnie, toteż po stadium 2\ngunie, tzw. twórczym, skupione są komórki tworzące węzeł zarodkowy\nblastomerów następuje stadium 4\n(ryc. 36 d).\nblastomerów, następnie kolejno 8,\n16, 32, 64 itd. Ta równoczesność\nTworzenie się listków zarodkowych\n. Zarodek makaka w stadium 16\npodziałów jednak później zanika.\nblastomerów; wg Lewisa i Hartmana.\nU wielu ssaków, m.in. u człowieka\nStadium blastuli kończy okres bruzdkowania zarodka; doprowadzi-\ni małp, podczas bruzdkowania każdy blastomer dzieli się niezależnie\nło ono w tym okresie do rozdrobnienia cytoplazmy komórki jajowej\nod innych; po stadium 2 blastomerów następuje kolejno stadium 3, 4,\nmiędzy liczne komórki blastulioraz do zróżnicowania tych komórek\n5 i więcej blastomerów (ryc. 34).\nna dwie główne grupy: grupę komórek zewnętrznych stanowiących\nU człowieka pierwsze podziały jaja przebiegają powoli. W tym czasie\nścianę jej pęcherzyka, pokrywających również częściowo i węzeł za-\naez na ea  za s  s z oe\nrodkowy, i na grupę komórek samego węzła. Grupa zewnętrzna nosi\naoa e  c cz  e c c  aec\nnazwę trofoblastu (trofe = odżywianie). Trofoblast stykać się bę-\ndzie odtąd bezpośrednio z tkankami błony śluzowej macicy, z której\nbędzie czerpać substancje odżywcze dla zarodka, pośrednicząc równo-\ncześnie w wymianie materii między nim a matką. Natomiast komórki\nzawar\n\nTętnice kończyny górnej: Tętnica podobojczykowa przechodzi w tętnicę pachową, następnie ramienną, która dzieli się na tętnicę promieniową i łokciową. Tworzą one łuki dłoniowe powierzchowny i głęboki.",
      "summary": "- **Aorta** __________ (aorta ascendens) rozpoczyna się od ujścia aorty w lewej komorze (ostium aortae), na wysokości przyczepu III żebra lewego.\n- Jej początkowy odcinek tworzy opuszkę aorty (bulbus aortae), z której odchodzą tętnice wieńcowe: prawa (arteria coronaria dextra — zaopatruje prawy przedsionek, prawą komorę, tylną część przegrody międzykomorowej i **węzeł** __________ u 60% ludzi) i lewa (arteria coronaria sinistra — dzieli się na gałąź międzykomorową przednią LAD i gałąź okalającą LCx, zaopatruje lewy przedsionek, lewą komorę i przednią część przegrody).\n- Z łuku aorty (arcus aortae) odchodzą 3 pnie (kolejno od prawej): (1) pień ramienno-głowowy **truncus**( __________ — dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą, (2) tętnica szyjna wspólna lewa (arteria carotis communis sinistra), (3) tętnica podobojczykowa lewa (arteria subclavia sinistra).\n- Tętnica szyjna wspólna na wysokości górnego brzegu chrząstki tarczowatej (C4) dzieli się w zatoce szyjnej (sinus caroticus ****— __________ ciśnienia) na tętnicę szyjną wewnętrzną (arteria carotis interna — zaopatruje mózgowie i oczodół, wchodzi do czaszki przez kanał tętnicy szyjnej w kości skroniowej, oddając tętnicę oczną) i tętnicę szyjną zewnętrzną (arteria carotis externa — unaczynia twarz i szyję)."
    }
  ]
};
