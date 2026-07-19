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
      "academic_detail": "Mięsień sercowy (myocardium) jest częścią śródsierdzia. Ściana lewej komory jest 3-krotnie grubsza od ściany prawej komory. Wynika to z oporu, jaki krew napotyka w krążeniu dużym (obwodowym) — naczynia krwionośne stawiają opór przepływającej krwi, a do pokonania tego oporu konieczna jest silna mięśniówka lewej komory. Dwa charakterystyczne tony serca to uderzenie krwi o zastawki.\n\nTętnica podobojczykowa przechodzi w tętnicę pachową, następnie w ramienną, która dzieli się na tętnicę promieniową i łokciową. Tętnice te tworzą łuki dłoniowe (powierzchowny i głęboki), z których odchodzą tętnice zaopatrujące palce.",
      "summary": "- Ściana lewej komory jest 3-krotnie grubsza od ściany prawej komory z powodu konieczności pokonania **większego** __________ w krążeniu dużym.\n- Dwa charakterystyczne tony serca to uderzenie krwi o __________.\n- Unaczynienie kończyny górnej pochodzi od tętnicy __________.",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "tarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2\n 30. Bruzda nerwu promieniowego ley na koci: A) promieniowej B) ramiennej C)\n\nlokciowej D) lopatkowej\n\n31. Punktem kostnym latwo wyczuwalnym jest: A) wyrostek rylcowaty koci udowej B)\n\n wcicie szyjne obojczyka C) guzowato piszczelowa D) powierzchnia uchowata\n 32. Glówk w stawie skokowym górnym tworzy ko: A) piszczelowa B) skokowa C)\n\nstrzalkowa D) pitowa\n\f33. Powierzchnie stawowe czaszki zlokalizowane s na koci: A) potylicznej i skroniowej\n\n B) jarzmowej i skroniowej C) uchwie i klinowej D) uchwie, skroniowej, potylicznej\n 34. Glówka naley do koci: A) radius, ulna B) humerus, femur\n                                                              C) femur, radius D)\nradius, ulna, humerus, fibula"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "wszystkim istotę gąbczastą końców kości. Odgrywają olbrzymią role\nw okresie wzrastania.\nŻyly kości towarzyszą na całym przebiegu tętnicom.\nW razie braku prawidłowego ukrwienia kości może dochodzić do ich martwicy\nokreślanej jako martwica jałowa (aseptyczna). W przypadku złamań z uszkodze-\nniem okostnej dochodzi zwykle do martwicy stosunkowo małych obszarów. Z nie-\n-zupe m  m z z n m  ycz\nnej obejmującej nasady.\nUNERWIENIE KOŚCI\nOkostna jest silnie unerwiona. Są to przede wszystkim włókna nerwowe\nnaczynioruchowe i czuciowe, co powoduje, że okostna jest bardzo wrażli-\nwa na ból. Nerwy kości nie ograniczają się jednak do okostnej, lecz wnika-\nją również do wnętrza kości, głównie przez otwory odżywcze.\n1.5.1.4\nSTRUKTURA FIZYKOCHEMICZNA KOŚCI\nPozbawiona części miękkich (okostnej, chrząstek, ścięgien oraz wody) kość składa się w oko-\nło /3 ze związków organicznych oraz w ²/3 ze związków nieorganicznych, mineralnych.\nW skład związków organicznych (osseomukoidu) wchodzą głównie włókna kolage-\nnowe (80%). Do organicznych substancji bezpostaciowych kości należą głównie białka\nniekolagenowe regulujace mineralizację kości – osteonektyne i osteokalcyne. Składniki\norganiczne nadają kościom elastyczność.\nSkładniki nieorganiczne (60–70% tkanki), głównie fosforany wapnia (hydroksyapa-\ntyt) i magnezu oraz weglany wapnia, nadają kości twardość i wytrzymałość.\n\n--- STRONA 34 ---\n32\nROZDZIAL 1• ANATOMIA OGÓLNA\nSkładniki nieorganiczne są ściśle związane z organicznymi, jednak można kość pozba-\nwić jednych lub drugich. Pod wpływem ostrożnego podgrzewania kość traci związki or-\nganiczne. Zachowuje ona wtedy swój kształt i budowe, lecz traci elastyczność, jest krucha\ni łamliwa; można ją rozetrzeć na popiół. Stosując kwasy nieorganiczne, można pozbawić\nkość związków mineralnych, czyli odwapnić\" ją. Kość zachowuje wówczas swój kształt,\nlecz staje się miękka; daje się ugniatać i wyginać.\nPrzeciętna masa kośćca wynosi u mężczyzny około 12 kg, a u kobiety około 10 kg. Nale-\nży jednak uwzglednić, że wliczona w to jest masa szpiku kostnego wynosząca ponad 2 kg.\nW ciągu całego życia zachodzą zmiany w składzie kości. Z wiekiem zmniejsza się\nilość związków organicznych i soli mineralnych, co powoduje zmniejszenie całej\nmasy kostnej. W następstwie tego kość staje się krucha, ma zmniejszoną odpor-\nność na zginanie. Proces ten, znacznie częstszy u kobiet niż u mężczyzn, zwany\nzrzeszotnieniem kości, czyli osteoporozą, prowadzi u osób starszych do częstych\nzłamań, które szczególnie dotyczą szyjki kości udowej.\n1.5.1.5\nKOSTNIENIE I WZRASTANIE KOŚCI\nKościec pochodzi ze środkowego listka zarodkowego. Poczatkowo, do 4. tygodnia życia we-\nwnątrzmacicznego, kościec jest zbudowany wyłacznie z tkanki łacznej zarodkowej; jest to\nszkielet błoniasty (mezenchymatyczny). Nastepnie (4.-6. tydzien) pojawiają się w szkiele-\ncie błoniastym skupienia chrząstki. Wreszcie od 7. tygodnia powstaje tkanka kostna.\nPodobne etapy rozwoju szkieletu występuja w rozwoju rodowym (filogenezie). U niż-\nszych kregowców szkielet jest błoniasty (łącznotkankowy), u ryb chrzęstnoszkieletowych\n– chrząstkowy i wreszcie, poczynając od ryb kostnoszkieletowych, a kończąc na ssakach\n- kostny.\nKości powstają na podłożu łącznotkankowym – bezpośrednio z tkanki łącznej, lub\nteż na podłożu chrzęstnym.\nNa podłożu łącznotkankowym rozwijają się niektóre kości czaszki oraz trzon oboj-\nczyka. Na podłożu chrzęstnym rozwija się większość szkieletu kostnego – kości tułowia,\nkończyn i część kości czaszki.\nKOSTNIENIE NA PODŁOŻU LACZNOTKANKOWYM (BLONIASTYM)"
        }
      ]
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
      "academic_detail": "Unaczynienie tętnicze kończyny górnej: Krew z lewej komory przepływa przez aortę wstępującą, łuk aorty. Tętnica podobojczykowa przechodzi w tętnicę pachową, następnie tętnicę ramienną, a ta z kolei w dole łokciowym dzieli się na tętnicę promieniową i tętnicę łokciową. Tętnice te tworzą w obrębie dłoni łuk dłoniowy powierzchowny i łuk dłoniowy głęboki.",
      "summary": "- Krew natleniona wypływa z lewej komory przez **aortę** do __________ dużego.\n- Unaczynienie tętnicze kończyny górnej: Tętnica podobojczykowa -> tętnica pachowa -> tętnica ramienna -> podział na tętnicę promieniową i __________.",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "2. Korowy orodek czucia ley w: A) midzymózgowiu B) ródmózgowiu C) kresomózgowiu\n\n D) tylomózgowiu\n 3. Ze wiatla cewy nerwowej powstaj: A) nerwy czaszkowe B) komory mózgu\n                                                                           C) nerwy\nrdzeniowe D) korowe orodki czucia\n\n 4. Najwikszym gruczolem dokrewnym jest: A) trzustka B) wtroba C) tarczyca D)\n\ntkanka tluszczowa\n\n 5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "istoty kostnej gabczastej. Jest to kostnienie śródchrzęstne trzonu.\nPunkt\nkostnienia\nnasady\nKostnienie\nMankiet\nśródchrzęstne\nkostny\ntrzonu\nPierwotna\njama\nszpikowa\nRYCINA1.11\nKostnienie kości długiej. Powstawanie ogniska kostnienia pierwotnego i wtórnego.\nTkankę chrzęstną oznaczono kropkami.\n\n--- STRONA 36 ---\n34\nROZDZIAL 1 • ANATOMIA OGÓLNA\nDalsze przemodelowanie wewnątrz kości powoduje, że istota gabczasta pozostaje je-\ndynie w końcach kości. W ten sposób wytwarza się w trzonie pierwotna jama szpikowa\nwypełniona pierwotnym szpikiem. Pod wpływem osteoklastów pierwotna jama szpikowa\nrozszerza się, niszcząc od wewnątrz mankiet kostny.\nKostnienie końców (nasad) kości długich. W końcach kości długich proces kostnienia\nrozpoczyna się od kostnienia śródchrzęstnego. Do końców kości wnikają naczynia krwio-\nnośne, tworząc punkty kostnienia nasad. Powstają one, z wyjatkiem końca dalszego kości\nudowej i końca bliższego kości piszczelowej, dopiero po urodzeniu. Większość punktów\nkostnienia nasad tworzy się w pierwszych latach życia. Później, po kilkuletnim okresie\nwzględnego spokoju w procesie kostnienia, pojawiają się w 9.–1 1. roku życia dodatkowe\npunkty kostnienia, ktore tworzą bardziej zróżnicowaną strukturę kości.\nPunkt kostnienia nasady\nCartilago articularis\nEpiphysis\nCartilago\nepiphysialis\nMetaphysis\nDiaphysis\nRYCINA 1.12\nKostnienie kości długiej. Tworzenie się nasady, przynasady i chrząstki nasadowej.\nChrząstka nasadowa. Punkty kostnienia nasad stopniowo się rozrastają. W tym\nokresie koniec kości długiej jest zbudowany zarówno z kości, jak i chrząstki. Stopniowo,\nw miarę rozwoju, zwiększa się ilość tkanki kostnej, a ubywa chrzęstnej, która w wyniku\ntego procesu pozostaje jedynie na obwodzie kości, na powierzchni stawowej, jako chrząst-\nka stawowa (cartilago articularis) oraz na granicy między nasadą (epiphysis) i trzonem\n(diaphysis) jako chrząstka nasadowa (cartilago epiphysialis), czyli wzrostowa, określana\nrównież jako plytka nasadowa.\nDopóki istnieją chrząstki nasadowe, odbywa się w nich wzrastanie kości na długość.\nPo skostnieniu chrząstek nasadowych wzrastanie kości na długość ustaje, lecz trwa ich\ndalsza przebudowa i wzrastanie na grubość – od strony okostnej i śródkostnej.\nPoważne, urazowe uszkodzenia chrząstki nasadowej mogą powodować przed-\nwczesne jej zastąpienie przez tkankę kostną. Prowadzi to do zahamowania wzrasta-\nnia kości i do jej skrócenia, a przez to do deformacji kończyny.\n\n--- STRONA 37 ---\n35\nUKLADY NARZADÓW\nUkończenie procesu kostnienia kości długich odbywa się na ogół między 15. a 20.\nrokiem życia. Jednak w wielu miejscach proces ten trwa jeszcze dłużej. Jedynym śladem\npo zanikłej chrząstce nasadowej jest widoczna w tym miejscu podwójna linia nasadowa\n(linea epiphysialis). Oddziela ona nasadę od trzonu.\nNależy zaznaczyć, że istnieje dwojakie znaczenie określenia trzon kości\". W znacze-\nniu anatomicznym, opisowym, trzon kości (corpus ossis) to środkowa, węższa część kości,\na końce (extremitates) są częściami szerszymi i krótszymi. Z punktu widzenia rozwojowe-\ngo trzon (diaphysis) jest dłuższy i zajmuje również część końca kości aż do linii nasadowej.\nTę część końca kości określa się jako przynasadę (metaphysis).\nBrak lub obecność punktów kostnienia nasad i ich zrastanie się z trzonem pozwala\nokreślić wiek młodej osoby, przy czym u dziewcząt proces ten przebiega wcze-\nśniej niż u chłopców. W medycynie sądowej przy określaniu dojrzałości noworodka\nważne znaczenie ma obecność punktów kostnienia lub ich brak w pobliżu stawu"
        }
      ]
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
      "academic_detail": "Krążenie duże (odżywcze) zaczyna się w lewej komorze i zaczyna się aortą. Aorta najpierw prowadzi krew do góry (aorta wstępująca), następnie przechodzi w łuk aorty, a wreszcie w aortę zstępującą (nadprzeponowa = piersiowa, podprzeponowa = brzuszna).\n\nOd łuku aorty odchodzą trzy naczynia: (1) pień ramienno-głowowy (na stronę prawą), (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa. Z pnia ramienno-głowowego krew płynie na prawą stronę głowy, szyi i do prawej kończyny górnej. Pień ten dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą.\n\nTętnica pachowa związana jest topograficznie ze splotem ramiennym (trzy pęczki: boczny, przyśrodkowy i tylny). Tętnica pachowa przechodzi w tętnicę ramienną, która odżywia przednią grupę ramienia (m. dwugłowy ramienia, ramienny, kruczo-ramienny). Tylna grupa ramienia (m. trójgłowy) zaopatrywana jest przez tętnicę ramienną głęboką.\n\nTętnica ramienna w okolicy dołu łokciowego dzieli się na tętnicę promieniową (biegnącą bocznie, po stronie kości promieniowej) i tętnicę łokciową (po stronie kości łokciowej). Obie zaopatrują grupę przednią przedramienia (zginacze ręki i palców). Grupa tylna przedramienia zaopatrywana jest przez tętnicę międzykostną wspólną (od tętnicy łokciowej), która dzieli się na międzykostną przednią i tylną. Tętnice promieniowa i łokciowa schodzą na rękę tworząc dwa łuki dłoniowe, które dają odgałęzienia do palców (tętnice palców).\n\nKrew po przejściu przez sieć naczyń włosowatych wraca żyłami. Na przedramieniu: żyły promieniowe i łokciowe (towarzyszące tętnicom), które łączą się w żyły ramienne. Żyły ramienne łączą się w jedną, do której uchodzi krew z mięśnia trójgłowego (żyła ramienna głęboka). Żyła ramienna przechodzi w żyłę pachową, następnie w podobojczykową. Żyła podobojczykowa łączy się z żyłą szyjną wewnętrzną, tworząc żyłę ramienno-głowową. Z połączenia dwóch żył ramienno-głowowych (prawej i lewej) powstaje żyła główna górna, która uchodzi do prawego przedsionka.\n\nKrew wraca do serca pod znacznie mniejszym ciśnieniem, co utrudnia powrót. W naczyniach żylnych występują zastawki dzielące je na piętra — krew może płynąć tylko do góry (nie cofa się). Dodatkowo pracujące mięśnie uciskają żyły, wypychając krew ku górze. W pobliżu tętnic leżą dwie żyły — uderzenia tętna na tętnicę nachodzą na te żyły, poruszając krew. Ciśnienie krwi na tętnicy ramieniowej u zdrowych wynosi ok. 120/80 mmHg, po przejściu przez naczynia włosowate spada do kilkunastu mmHg.\n\nNagrzana krew wraca żyłami głębokimi oraz powierzchownymi (skórnymi). Żyły skórne przedramienia: żyła odłokciowa (uchodzi do żyły ramiennej) i żyła odpromieniowa / boczna (uchodzi do żyły pachowej). Krew doprowadzana do skóry pełni funkcję termoregulacyjną.",
      "summary": "- __________ duże (odżywcze) zaczyna się w lewej komorze i zaczyna się aortą.\n- Aorta najpierw prowadzi krew do góry (aorta wstępująca), następnie przechodzi w łuk aorty, a wreszcie w aortę **zstępującą** __________ = piersiowa, podprzeponowa = brzuszna).\n- Od łuku aorty odchodzą trzy naczynia: (1) **pień** __________ (na stronę prawą), (2) tętnica szyjna wspólna lewa, (3) tętnica podobojczykowa lewa.\n- Z **pnia** __________ krew płynie na prawą stronę głowy, szyi i do prawej kończyny górnej.",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2\n 30. Bruzda nerwu promieniowego ley na koci: A) promieniowej B) ramiennej C)\n\nlokciowej D) lopatkowej\n\n31. Punktem kostnym latwo wyczuwalnym jest: A) wyrostek rylcowaty koci udowej B)\n\n wcicie szyjne obojczyka C) guzowato piszczelowa D) powierzchnia uchowata\n 32. Glówk w stawie skokowym górnym tworzy ko: A) piszczelowa B) skokowa C)\n\nstrzalkowa D) pitowa"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "Wśród dróg zstępujących największe znaczenie ma droga korowo-\n-rdzeniowa boczna (tractus corticospinalis lateralis), czyli droga pirami-\ndowa boczna, przebiegająca w części tylnej sznura bocznego. Znacznie\nmniejsza droga korowo-rdzeniowa przednia (tractus corticospinalis ante-\nrior), czyli piramidowa przednia, znajduje się w sznurze przednim. Drogi\nte łączą korę mózgu z ośrodkami rdzenia kregowego.\nPozostałe drogi zstępujące rozpoczynają się w ośrodkach pnia mó-\nzgowia: tworze siatkowatym (drogi siatkowo-rdzeniowe), jądrach przed-\nsionkowych (drogi przedsionkowo-rdzeniowe), jądrze czerwiennym\n(droga czerwienno-rdzeniowa) i blaszce pokrywy (droga pokrywowo-\n-rdzeniowa). Drogi powyższe biegną zarówno w sznurze przednim, jak\ni w bocznym.\nDrogi wstępujące sznura tylnego – drogi rdzeniowo-opuszkowe (trac-\ntus spinobulbares) biegną do znajdujących się w rdzeniu przedłużonym\njąder: smukłego, klinowatego i klinowatego dodatkowego.\nDrogi wstępujące sznura przedniego i sznura bocznego łączą rdzeń\nkręgowy z móżdżkiem, wzgórzem i pniem mózgowia. Do móżdżku bie-\ngną leżące powierzchownie w sznurze bocznym drogi rdzeniowo-móżdż-\nkowe, przednia (tractus spinocerebellaris anterior) i tylna (tractus spinoce-\nrebellaris posterior). Drogi rdzeniowo-wzgórzowe (tractus spinothalamici)\nbiegną na znacznej przestrzeni w sznurze bocznym i w sznurze przed-\nnim. Drogi łączące rdzeń kregowy z ośrodkami pnia mózgowia znajdu-\nją się również w sznurze przednim i przedniej części sznura bocznego.\nDochodzą one do: tworu siatkowatego (droga rdzeniowo-siatkowa), jąder\noliwki (droga rdzeniowo-oliwkowa) oraz blaszki pokrywy (droga rdze-\nniowo-pokrywowa).\nDrogi własne rdzenia kregowego łączą jego ośrodki znajdujące się\nw różnych segmentach rdzenia kregowego. Rozmieszczone są we wszyst-\nkich sznurach rdzenia w pobliżu istoty szarej.\n2.2.4\nOPONY RDZENIA KREGOWECO. PRZESTRZENIE KANAŁU KRECOWECO\nOPONY RDZENIA KRECOWECO\nW kanale kregowym znajdują się trzy błony łącznotkankowe, zwane\noponami: opona miękka zrośnięta z rdzeniem i oddzielona od niego\nprzestrzenią podpajęczynówkową, opona pajęcza i opona twarda, któ-\nrą od pajęczej oddziela potencjalna przestrzeń podtwardówkowa, a od\nścian kanału kregowego – przestrzeń nadtwardówkowa.\n\n--- STRONA 126 ---\n124\nROZDZIAL 2 • ŚCIANY TULOWIA\nOpona miękka rdzenia (pia mater spinalis) zrasta się z glejową bło-\nną graniczną zewnętrzną, pokrywającą rdzeń kręgowy. Doprowadza do\nrdzenia kręgowego przez jego powierzchnię zewnętrzną naczynia krwio-\nnośne, czemu zawdzięcza drugą nazwę – opona naczyniowa.\nPo bokach opona miękka uwypukla się w postaci jak gdyby zębów\npily, tworząc więzadło ząbkowane (ligamentum denticulatum). Składa się\nono z ponad dwudziestu trójkątnych płytek zwężających się ku bokom.\nPeriosteum et ligamenta\nSpatium epidurale\nDura mater spinalis\nSpatium subdurale\nArachnoidea mater\nSpatium subarachnoideum\nPia mater\n-Intumescentia lumbosacralis\nConus medullaris\nL1/L2\nCisterna lumbalis\nFilum terminale\ninternum\nS1/S2\nFilum terminale\nexternum\nRYCINA 2.20\nDolny zasięg rdzenia kregowego, opon, przestrzeni międzyoponowych i przestrzeni nadoponowej.\n\n--- STRONA 127 ---\n125\nKANAE KREGOWY. RDZEN KREGOWY\nŁączą one oponę miękką z oponą pajęczą oraz twardą i zaznaczają na po-\nwierzchni sznura bocznego rdzenia granicę między jego częścią przednią\ni tylna.\nZ tyłu od opony miękkiej do opony pajęczej biegną liczne pasma tkan-\nki łącznej.\nU góry opona miękka rdzenia przechodzi w oponę miękką mózgowia,\na u dołu tworzy nić końcową.\nOpona pajęcza rdzenia (arachnoidea mater spinalis), czyli pajęczy-"
        }
      ]
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
      "academic_detail": "Powietrze dochodzi do płuc następującą drogą: jama nosowa → gardło → krtań → tchawica → oskrzela → płuca. Jama nosowa dzieli się na przedsionek (pokryty skórą z włosami), jamę właściwą (podzieloną małżowinami nosowymi: górną, środkową i dolną) i kończy się nozdrzami tylnymi.\n\nGardło dzieli się na trzy części: nosową (sąsiadującą z jamą nosową), ustną (sąsiadującą z jamą ustną) i krtaniową (sąsiadującą z krtanią). Gardło kończy się na dolnej krawędzi chrząstki pierścieniowatej, która jest granicą między krtanią a tchawicą i między gardłem a przełykiem.\n\nKrtań: powietrze wchodzi przez przedsionek krtani, który jest oddzielony od głośni (jamy właściwej) fałdem przedsionka. Głośnia jest oddzielona od jamy podgłośniowej fałdem głosowym. Nagłośnia (chrząstka nagłośniowa) zamyka wejście do krtani podczas połykania — język naciska na nagłośnię, a mięśnie nadgnykowe unoszą krtań.\n\nPrzełyk jest całkowicie obkurczoną szczeliną (nie otwartym kanałem). Pokarm jest aktywnie wpychany przez mięśnie zwieracze gardła, a następnie perystaltyka przesuwa go w kierunku żołądka.\n\nNajlepiej wyczuwalną chrząstką krtani jest chrząstka tarczowata (cartilago thyroidea) — pytanie nr 9. Tworzy ona tzw. wypukłość krtaniową ('jabłko Adama').\n\nGłównym mięśniem wydechowym jest mięsień międzyżebrowy wewnętrzny (Q23). Przepona (diaphragma) jest głównym mięśniem wdechowym. Płuca zbudowane są z pęcherzyków płucnych, gdzie zachodzi wymiana gazowa.\n\nKlatka piersiowa ograniczona jest od góry obojczykami, od dołu przeponą. Wypełniona jest po bokach przez płuca, a centralnie przez serce (w śródpiersiu). Prawe płuco sąsiaduje z sercem i przełykiem, lewe płuco — z sercem i aortą. Serce od przodu sąsiaduje głównie z płucami, częściowo z mostkiem i żebrami, od tyłu bezpośrednio z przełykiem (za nim aorta), po bokach z płucami.",
      "summary": "- Powietrze dochodzi do **płuc** __________ drogą: jama nosowa → gardło → krtań → tchawica → oskrzela → płuca.\n- Jama nosowa dzieli się **na** __________ (pokryty skórą z włosami), jamę właściwą (podzieloną małżowinami nosowymi: górną, środkową i dolną) i kończy się nozdrzami tylnymi.\n- Gardło dzieli się na trzy części: **nosową** __________ z jamą nosową), ustną (sąsiadującą z jamą ustną) i krtaniową (sąsiadującą z krtanią).\n- Gardło kończy się na dolnej krawędzi **chrząstki** __________ która jest granicą między krtanią a tchawicą i między gardłem a przełykiem.",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2\n 30. Bruzda nerwu promieniowego ley na koci: A) promieniowej B) ramiennej C)\n\nlokciowej D) lopatkowej\n\n31. Punktem kostnym latwo wyczuwalnym jest: A) wyrostek rylcowaty koci udowej B)"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "Tom 2 – Układ trawienny. Układ oddechowy.\nUkład moczowo-płciowy.\nUkład wewnątrzwydzielniczy\n800 stron, 495 ilustracji, cena katalogowa 95 zł\nTom 3 – Uklad naczyniowy\n504 strony, 235 ilustracji, cena katalogowa 64 zł\nTom 4 – Ośrodkowy układ nerwowy\n476 stron, 226 ilustracji, cena katalogowa 80 zt\nTom 5 – Układ nerwowy obwodowy. Układ nerwowy autonomiczny.\nPowłoka wspólna. Narządy zmysłów\n596 stron, 261 ilustracji, cena katalogowa 69 zł\nJest to jeden z najlepszych i najdokładniejszych podręczników poświęconych anatomii człowieka, jakie obecnie\nistnieją na polskim rynku księgarskim. Stowarzyszenie autorów książek medycznych – skupiające najznakomitsze\nautorytety w dziedzinie medycyny – uznało tę książkę za najlepsze dzieło medyczne XX wieku.\nANATOMIA\nCZLOWIEKA\nAnatomia człowieka. 1500 pytań testowych\nFlorian Czerwiński, Grzegorz Sławiński. Wojciech Kozik\nwydanie l, 384 strony, oprawa miękka, cena katalogowa 39 zł\nKsiążka zawiera I 500 pytań wielokrotnego wyboru, o różnym stopniu trudności, z zakresu anatomii prawidłowej,\npodzielonych na dwie części. Pierwsza część dotyczy poszczególnych układów, druga zaś – wybranych okolic\ntypograficznych. Podział taki ma umożliwić wykorzystanie podręcznika do kontroli nowopoznanego materiału\ni powtórzenia całości. Na końcu podręcznika zamieszczono klucz z prawidłowymi odpowiedziami.\nOdwiedz nasz portal: www.pzwl.pl\n\n--- STRONA 246 ---\n37,80\nMedycyne\nENGLISH\nMEDICINE\nEnglish for Medicine\nPodręcznik dla studentów medycyny\nPOUMEZN K\nDLASTICENTW\nJoanna Ciecierska, Barbara Jenike\nHELYCYNY\nwydanie I, 412 stron, 44 ilustracje, oprawa miękka,\ncena katalogowa (książka + płyta CD) 59 zł\nJest to podręcznik języka specjalistycznego przeznaczony dla studentów medycyny i lekarzy, którzy opanowali\njęzyk angielski w stopniu średnio zaawansowanym lub zaawansowanym.\nZadaniem podręcznika jest kształcenie sprawności językowych, niezbędnych do prawidłowego funkcjonowania\nw środowisku zawodowym, które pozwolą na ustne i pisemne komunikowanie się z pacjentemiinnymi lekarzami,\nkorzystanie z literatury specjalistycznej, pisanie artykułów. opracowywanie i prezentację plakatu naukowego,\nopracowywanie iwygłaszanie referatu. Wszystkie teksty i dialogi są zamieszczone na płycie CD.\nMedycyna\nDEUTSCH\nfr\nMEDIZINER\nMarceli Szafradski\nDeutsch für Mediziner\nPodręcznik\nMarceli Szafrański\nwydanie I, 292 strony, 36 ilustracji, oprawa miękka,\ncena katalogowa (książka + 2 płyty CD) 99 zł\nZadaniem podręcznika jest kształcenie sprawności językowych niezbędnych do prawidłowego komunikowania\nsię zarówno z pacjentem, jak i z innymi osobami ze środowiska medycznego, korzystanie z literatury\nspecjalistycznej, a także opracowywanie i pisanie artykułów, przygotowanie plakatu lub wygłoszenie referatu.\nKsiążka adresowana do osób, które wcześniej opanowały już język niemiecki w stopniu podstawowym\nNiewątpliwą zaletą tej publikacji jest różnorodność ćwiczeń wdrażających, a także liczne przykłady najbardziej\ntypowych konstrukcji językowych. Na końcu każdego rozdziału znajdują się krótkie teksty o charakterze\nhumorystycznym lub informacyjnym. Do książki dołączone są dwie płyty CD.\nOdwiedź nasz portal: www.pzwl.pl\n\n--- STRONA 248 ---\nBiblioteka Glówna\nGdańskiego Uniwersytetu Medycznego\n02504/003-Czyt.\n001008353003\nów\nPodstawą nauczania wielu pokoleń studentów i lekarzy byla Anatomia\nczłowieka\" Ada:na Bochenka i Michała Reichera. Stala się ona inspiracją\ndla autorów niniejszej publikacji – korzystai oni z zasobów wiedzy\nzawartej w tyti ogół ie uznanym podręczniku oraz z doświadczenia"
        }
      ]
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
      "academic_detail": "Aorta wstępująca (aorta ascendens) rozpoczyna się od ujścia aorty w lewej komorze (ostium aortae), na wysokości przyczepu III żebra lewego. Jej początkowy odcinek tworzy opuszkę aorty (bulbus aortae), z której odchodzą tętnice wieńcowe: prawa (arteria coronaria dextra — zaopatruje prawy przedsionek, prawą komorę, tylną część przegrody międzykomorowej i węzeł zatokowo-przedsionkowy u 60% ludzi) i lewa (arteria coronaria sinistra — dzieli się na gałąź międzykomorową przednią LAD i gałąź okalającą LCx, zaopatruje lewy przedsionek, lewą komorę i przednią część przegrody). Z łuku aorty (arcus aortae) odchodzą 3 pnie (kolejno od prawej): (1) pień ramienno-głowowy (truncus brachiocephalicus) — dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą, (2) tętnica szyjna wspólna lewa (arteria carotis communis sinistra), (3) tętnica podobojczykowa lewa (arteria subclavia sinistra).\n\nTętnica szyjna wspólna na wysokości górnego brzegu chrząstki tarczowatej (C4) dzieli się w zatoce szyjnej (sinus caroticus — baroreceptor ciśnienia) na tętnicę szyjną wewnętrzną (arteria carotis interna — zaopatruje mózgowie i oczodół, wchodzi do czaszki przez kanał tętnicy szyjnej w kości skroniowej, oddając tętnicę oczną) i tętnicę szyjną zewnętrzną (arteria carotis externa — unaczynia twarz i szyję). Gałęzie tętnicy szyjnej zewnętrznej (kolejno): tarczowa górna (a. thyroidea superior), językowa (a. lingualis), twarzowa (a. facialis — przebiega przez brzeg żuchwy, puls wyczuwalny), gardłowa wstępująca (a. pharyngea ascendens), potyliczna (a. occipitalis), uszna tylna (a. auricularis posterior), szczękowa (a. maxillaris — oddaje tętnicę oponową środkową wchodzącą przez otwór kolcowy), skroniowa powierzchowna (a. temporalis superficialis — wyczuwalna przed skrawkiem ucha).\n\nAorta piersiowa (aorta thoracica) oddaje gałęzie trzewne (gałęzie oskrzelowe — unaczynienie odżywcze płuc, przełykowe, śródpiersiowe, osierdziowe) i gałęzie ścienne (tętnice międzyżebrowe tylne — 9 par w przestrzeniach 3-11, tętnice podżebrowe, tętnice przeponowe górne). Po przejściu przez rozwór aortowy przepony (Th12) aorta brzuszna (aorta abdominalis) oddaje gałęzie nieparzyste (do przewodu pokarmowego): pień trzewny (truncus coeliacus — zaopatruje wątrobę, żołądek, śledzionę, trzustkę, dwunastnicę), tętnicę krezkową górną (a. mesenterica superior — zaopatruje jelito cienkie i 2/3 jelita grubego do zgięcia śledzionowego) i tętnicę krezkową dolną (a. mesenterica inferior — zaopatruje dalszą 1/3 jelita grubego). Gałęzie parzyste aorty brzusznej: tętnice nerkowe (aa. renales), tętnice nadnerczowe środkowe, tętnice jądrowe/jajnikowe (aa. testiculares/ovaricae). Aorta brzuszna kończy się podziałem na tętnice biodrowe wspólne (aa. iliacae communes), każda dzieli się na tętnicę biodrową wewnętrzną (a. iliaca interna — narządy miednicy) i zewnętrzną (a. iliaca externa — przechodzi w tętnicę udową pod więzadłem pachwinowym).\n\nTętnica wieńcowa prawa (RCA) odchodzi od prawej zatoki aorty, biegnie w bruździe przedsionkowo-komorowej prawej, oddając gałąź węzła zatokowo-przedsionkowego (60% przypadków), gałąź stożka tętniczego, gałęzie brzeżne dla prawej komory, tętnicę węzła przedsionkowo-komorowego, a następnie dzieli się na gałąź międzykomorową tylną (PDA — posterior descending artery) i gałąź tylną lewej komory. RCA zaopatruje prawy przedsionek, prawą komorę, tylną 1/3 przegrody międzykomorowej, węzły SA i AV. Tętnica wieńcowa lewa (LCA) odchodzi od lewej zatoki aorty, krótki pień dzieli się na gałąź międzykomorową przednią (LAD — left anterior descending, biegnie w bruździe międzykomorowej przedniej, zaopatruje przednią część przegrody i przednią ścianę lewej komory — najczęściej zamykana w zawale) i gałąź okalającą (LCx — biegnie w bruździe przedsionkowo-komorowej lewej, zaopatruje boczną i tylną ścianę lewej komory). Żyły serca: zatoka wieńcowa (sinus coronarius) uchodzi do prawego przedsionka, zbierając krew z żyły wielkiej serca, średniej, małej i tylnej lewej komory.\n\nAutomatyzm serca zapewnia układ przewodzący zbudowany ze zmodyfikowanych kardiomiocytów. Składa się z: (1) Węzeł zatokowo-przedsionkowy (SA node, sinoatrial node) — główny rozrusznik serca (pacemaker), znajduje się w ścianie prawego przedsionka przy ujściu żyły głównej górnej, generuje rytm zatokowy ~70/min. (2) Węzeł przedsionkowo-komorowy (AV node) — w dolnej części przegrody międzyprzedsionkowej, opóźnia przewodzenie o ~0,1 s, umożliwiając pełny skurcz przedsionków przed skurczem komór. (3) Pęczek Hisa (fasciculus atrioventricularis) — przebija szkielet serca i dzieli się na dwie odnogi: prawą (dla prawej komory) i lewą (dla lewej, dzielącą się na wiązkę przednią i tylną). (4) Włókna Purkiniego — końcowe rozgałęzienia w mięśniu komór, szybkie przewodzenie. Unerwienie autonomiczne: współczulne (przyspiesza rytm — przez nerwy sercowe szyjne i piersiowe z pnia współczulnego), przywspółczulne (zwalnia rytm — przez nerw błędny X).",
      "summary": "- **Aorta** __________ (aorta ascendens) rozpoczyna się od ujścia aorty w lewej komorze (ostium aortae), na wysokości przyczepu III żebra lewego.\n- Jej początkowy odcinek tworzy opuszkę aorty (bulbus aortae), z której odchodzą tętnice wieńcowe: prawa (arteria coronaria dextra — zaopatruje prawy przedsionek, prawą komorę, tylną część przegrody międzykomorowej i **węzeł** __________ u 60% ludzi) i lewa (arteria coronaria sinistra — dzieli się na gałąź międzykomorową przednią LAD i gałąź okalającą LCx, zaopatruje lewy przedsionek, lewą komorę i przednią część przegrody).\n- Z łuku aorty (arcus aortae) odchodzą 3 pnie (kolejno od prawej): (1) pień ramienno-głowowy **truncus**( __________ — dzieli się na tętnicę szyjną wspólną prawą i tętnicę podobojczykową prawą, (2) tętnica szyjna wspólna lewa (arteria carotis communis sinistra), (3) tętnica podobojczykowa lewa (arteria subclavia sinistra).\n- Tętnica szyjna wspólna na wysokości górnego brzegu chrząstki tarczowatej (C4) dzieli się w zatoce szyjnej (sinus caroticus ****— __________ ciśnienia) na tętnicę szyjną wewnętrzną (arteria carotis interna — zaopatruje mózgowie i oczodół, wchodzi do czaszki przez kanał tętnicy szyjnej w kości skroniowej, oddając tętnicę oczną) i tętnicę szyjną zewnętrzną (arteria carotis externa — unaczynia twarz i szyję).",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "C) nerwy\nrdzeniowe D) korowe orodki czucia\n\n 4. Najwikszym gruczolem dokrewnym jest: A) trzustka B) wtroba C) tarczyca D)\n\ntkanka tluszczowa\n\n 5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "Ostium aortae\npulmonalis\nAorta\nTruncus pulmonalis\nRYCINA 1.17\nSchemat przepływu krwi przez serce.\n\n--- STRONA 52 ---\n50\nROZDZIAL 1 • ANATOMIA OGÓLNA\nDo prawego przedsionka wpadają żyły zbierające krew z całego cia-\nła: żyła główna górna (vena cava superior) i żyła główna dolna (vena cava\ninferior) oraz zatoka wieńcowa (sinus coronarius), która otrzymuje krew\nze ścian serca. Do lewego przedsionka wpadają cztery żyły płucne (venae\npulmonales) odprowadzające krew z płuc.\nJamy przedsionków z jamami komór łączą ujścia przedsionkowo-ko-\nmorowe, prawe (ostium atrioventriculare dextrum) i lewe (ostium atrioventri-\nculare sinistrum). Znajdują się w nich zastawki przedsionkowo-komorowe,\nprawa, czyli trójdzielna (valva atrioventricularis dextra s. valva tricuspida-\nlis), i lewa, czyli mitralna (valva atrioventricularis sinistra s. valva mitralis).\nZ komór wychodzą tętnice: z lewej – aorta (aorta), prowadząca krew\ndo całego ciała, a z prawej – pień płucny (truncus pulmonalis), dostarcza-\njący krew do płuc.\nW ujściu aorty (ostium aortae) i ujściu pnia płucnego (ostium trunci\npulmonalis) znajdują się płatki półksiężycowate (valvulae semilunares)\nregulujące jednokierunkowy przepływ krwi. Tworzą one odpowiednio\nzastawkę aorty (valva aortae) i zastawkę pnia płucnego (valva trunci pul-\nmonalis).\n1.5.4.2\nKRAŻENIE WIELKIE I KRAŻENIE MALE\nKrążenie wielkie, czyli systemowe, rozpoczyna się w lewej komorze ser-\nca, a kończy w prawym przedsionku (krążenie lewo-prawe\"). Dopro-\nwadza do tkanek tlen i substancje odżywcze, a odprowadza dwutlenek\nwegla i substancje zbędne. W związku z tym krew w tętnicach krąże-\nnia wielkiego zawiera więcej tlenu, a mniej dwutlenku wegla niż krew\nw jego żyłach.\nKrążenie małe, czyli płucne, bierze początek w prawej komorze ser-\nca, a kończy się w lewym przedsionku (krążenie prawo-lewe\"). Krew\nprowadzona jest do płuc przez pień płucny (truncus pulmonalis) i tętnice\npłucne (arteriae pulmonales), ma stosunkowo mało tlenu i znaczne ilości\ndwutlenku wegla. W naczyniach włosowatych ścian pęcherzyków płuc-\nnych natlenia się i jako krew utlenowana płynie w żyłach płucnych.\n\n--- STRONA 53 ---\n51\nUKLADY NARZADÓW\nVasa capillaria pulmonum\nVv. pulmonales\nTruncus pulmonalis\nV. cava superior\nAorta\nV. cava inferior\nVasa capillaria\nRYCINA 1.18\nKrążenie wielkie i małe. Schemat.\nNaczynia zawierające krew odtlenowaną oznaczono na czarno.\n1.5.4.3\nTETNICE\nTętnice (arteriae) mają ściany zbudowane z trzech błon: wewnętrznej,\nśrodkowej izewnętrznej.\nBłona wewnętrzna (tunica intima) pokryta jest od wewnątrz komórkami środbłonka\ni błona podstawną.\nBłona środkowa (tunica media) zawiera włókna mięśniowe gładkie biegnące przeważ-\nnie okrężnie.\nW błonie zewnętrznej (tunica externa s. adventitia) znajdują się włókna sprężyste\ni klejodajne biegnące przeważnie podłużnie, a w tętnicach większych również włókna\nmięśniowe gładkie.\n\n--- STRONA 54 ---\n52\nROZDZIAL 1● ANATOMIA OCÓLNA\nZależnie od struktury i grubości ścian tętnic rozróżnia się: tętnice\ntypu sprężystego, tętnice typu mięśniowego i tętniczki.\n Tętnice typu spreżystego mają w ścianie przeważnie elementy spręży-\nste; są to główne tętnice tułowia i szyi, przede wszystkim zaś aorta.\nTętnice typu mięśniowego, średniej wielkości i małe, charakteryzuja\nsię obecnością silnej błony mięśniowej i znaczną możliwością kurcze-\nnia się.\nTętniczki (arteriolae), średnicy rzędu kilkudziesięciu mikrometrów,\nmają stosunkowo grubą błonę mięśniową i wąskie światło.\nW wyniku procesów patologicznych w ścianach tętnic i serca może dochodzić do"
        }
      ]
    }
  ]
};
