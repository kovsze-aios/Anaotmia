import type { TextbookDomain } from "@/types/textbook";

export const sensory: TextbookDomain = {
  "id": "sensory",
  "title": "Narządy Zmysłów",
  "shortTitle": "Zmysły",
  "icon": "👁️",
  "sections": [
    {
      "id": "narzad-wzroku",
      "title": "Narząd wzroku — oko",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Warstwy gałki ocznej"
        },
        {
          "type": "paragraph",
          "text": "Gałka oczna zbudowana jest z trzech warstw: włóknistej (błona włóknista), naczyniowej (błona naczyniowa) i siatkówki (siatkówka)."
        },
        {
          "type": "paragraph",
          "text": "Warstwa włóknista (zewnętrzna) obejmuje rogówkę (cornea — załamuje i przepuszcza światło) i twardówkę (sclera — ochrona). Warstwa naczyniowa (środkowa) obejmuje tęczówkę (iris), ciało rzęskowe (corpus ciliare z mięśniem rzęskowym do akomodacji) oraz naczyniówkę (choroid)."
        },
        {
          "type": "paragraph",
          "text": "Siatkówka (retina) dzieli się na część wzrokową (zawiera czopki dla widzenia barwnego i pręciki dla widzenia światła/kształtu) oraz część ślepą (bez receptorów). Tarcza nerwu wzrokowego (optic disc) jest pozbawiona receptorów — stanowi plamę ślepą (martwe pole)."
        },
        {
          "type": "table",
          "headers": [
            "Warstwa",
            "Elementy",
            "Funkcja"
          ],
          "rows": [
            [
              "Włóknista (zewnętrzna)",
              "Rogówka, twardówka",
              "Załamuje światło (rogówka), ochrona (twardówka)"
            ],
            [
              "Naczyniowa (środkowa)",
              "Tęczówka, ciało rzęskowe, naczyniówka",
              "Regulacja światła (tęczówka), akomodacja (m. rzęskowy)"
            ],
            [
              "Siatkówka (wewnętrzna)",
              "Część wzrokowa (czopki, pręciki), część ślepa",
              "Fotorecepcja — czopki (barwy), pręciki (światło/kształt)"
            ]
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Droga promieni świetlnych i elementy załamujące"
        },
        {
          "type": "paragraph",
          "text": "Elementem, który nie załamuje promienia świetlnego, jest źrenica (pupil) — pytanie nr 16. Źrenica jest otworem w tęczówce, który reguluje ilość światła wpadającego do oka, ale sama nie załamuje światła."
        },
        {
          "type": "paragraph",
          "text": "Droga promienia świetlnego: rogówka → ciecz wodnista (w komorze przedniej) → soczewka → ciało szkliste (w komorze tylnej). Elementy załamujące: rogówka (najsilniej), ciecz wodnista, soczewka (zmienia kształt przy akomodacji), ciało szkliste."
        },
        {
          "type": "paragraph",
          "text": "Ciecz wodnista jest wydzielana przez ciało rzęskowe, przepływa z komory tylnej do przedniej przez źrenicę. Komory oka (przednia i tylna) wypełnione są cieczą wodnistą."
        },
        {
          "type": "table",
          "headers": [
            "Element",
            "Funkcja",
            "Załamuje światło?"
          ],
          "rows": [
            [
              "Rogówka",
              "Ochrona, załamanie światła",
              "Tak (najsilniej)"
            ],
            [
              "Ciecz wodnista",
              "Odżywianie, ciśnienie",
              "Tak"
            ],
            [
              "Soczewka",
              "Akomodacja, ogniskowanie",
              "Tak"
            ],
            [
              "Ciało szkliste",
              "Wypełnia gałkę oczną",
              "Tak"
            ],
            [
              "Źrenica",
              "Regulacja ilości światła",
              "Nie"
            ],
            [
              "Tęczówka",
              "Regulacja średnicy źrenicy",
              "Nie"
            ]
          ]
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Aparat ochronny i ruchowy oka"
        },
        {
          "type": "paragraph",
          "text": "Mięśnie zewnętrzne oka są poprzecznie prążkowane (szkieletowe). Unerwienie: III nerw okoruchowy (większość mięśni), IV bloczkowy (m. skośny górny), VI odwodzący (m. prosty boczny). Aparat łzowy: gruczoł łzowy (leży w górnym bocznym kącie oczodołu), punkty łzowe (puncta), kanaliki, woreczek łzowy, przewód nosowo-łzowy (uchodzi do jamy nosowej)."
        }
      ],
      "recallQuestions": [
        {
          "id": "sen-1",
          "question": "Który element oka nie załamuje promieni świetlnych?",
          "answer": "Źrenica (pupil).",
          "examRef": "Q16"
        },
        {
          "id": "sen-2",
          "question": "Wymień elementy załamujące promienie świetlne w oku.",
          "answer": "Rogówka, ciecz wodnista, soczewka i ciało szkliste.",
          "examRef": "Q16"
        },
        {
          "id": "sen-5",
          "question": "Jakie są trzy warstwy gałki ocznej (od zewnątrz)?",
          "answer": "Włóknista (rogówka + twardówka), naczyniowa (tęczówka + ciało rzęskowe + naczyniówka), siatkówka (część wzrokowa + ślepa).",
          "examRef": ""
        },
        {
          "id": "sen-6",
          "question": "Które nerwy czaszkowe unerwiają mięśnie zewnętrzne oka?",
          "answer": "III (okoruchowy), IV (bloczkowy — m. skośny górny), VI (odwodzący — m. prosty boczny).",
          "examRef": ""
        },
        {
          "id": "sen-7",
          "question": "Jaka jest droga odprowadzania łez z oka?",
          "answer": "Gruczoł łzowy → punkty łzowe → kanaliki → woreczek łzowy → przewód nosowo-łzowy → jama nosowa.",
          "examRef": ""
        },
        {
          "id": "sen-8",
          "question": "Dlaczego tarcza nerwu wzrokowego nazywana jest plamą ślepą?",
          "answer": "Ponieważ nie zawiera receptorów (czopków ani pręcików) — jest pozbawiona fotoreceptorów.",
          "examRef": ""
        }
      ],
      "academic_detail": "Gałka oczna zbudowana jest z trzech warstw: włóknistej (błona włóknista), naczyniowej (błona naczyniowa) i siatkówki (siatkówka).\n\nWarstwa włóknista (zewnętrzna) obejmuje rogówkę (cornea — załamuje i przepuszcza światło) i twardówkę (sclera — ochrona). Warstwa naczyniowa (środkowa) obejmuje tęczówkę (iris), ciało rzęskowe (corpus ciliare z mięśniem rzęskowym do akomodacji) oraz naczyniówkę (choroid).\n\nSiatkówka (retina) dzieli się na część wzrokową (zawiera czopki dla widzenia barwnego i pręciki dla widzenia światła/kształtu) oraz część ślepą (bez receptorów). Tarcza nerwu wzrokowego (optic disc) jest pozbawiona receptorów — stanowi plamę ślepą (martwe pole).\n\nElementem, który nie załamuje promienia świetlnego, jest źrenica (pupil) — pytanie nr 16. Źrenica jest otworem w tęczówce, który reguluje ilość światła wpadającego do oka, ale sama nie załamuje światła.\n\nDroga promienia świetlnego: rogówka → ciecz wodnista (w komorze przedniej) → soczewka → ciało szkliste (w komorze tylnej). Elementy załamujące: rogówka (najsilniej), ciecz wodnista, soczewka (zmienia kształt przy akomodacji), ciało szkliste.\n\nCiecz wodnista jest wydzielana przez ciało rzęskowe, przepływa z komory tylnej do przedniej przez źrenicę. Komory oka (przednia i tylna) wypełnione są cieczą wodnistą.\n\nMięśnie zewnętrzne oka są poprzecznie prążkowane (szkieletowe). Unerwienie: III nerw okoruchowy (większość mięśni), IV bloczkowy (m. skośny górny), VI odwodzący (m. prosty boczny). Aparat łzowy: gruczoł łzowy (leży w górnym bocznym kącie oczodołu), punkty łzowe (puncta), kanaliki, woreczek łzowy, przewód nosowo-łzowy (uchodzi do jamy nosowej).",
      "summary": "- Gałka oczna zbudowana jest z trzech warstw: włóknistej (błona **włóknista**), __________ (błona naczyniowa) i siatkówki (siatkówka).\n- Warstwa włóknista (zewnętrzna) obejmuje rogówkę (cornea — załamuje **i** __________ światło) i twardówkę (sclera — ochrona).\n- Warstwa naczyniowa (środkowa) obejmuje tęczówkę (iris), ciało rzęskowe (corpus ciliare z mięśniem rzęskowym do akomodacji) **oraz** __________ (choroid).\n- Siatkówka (retina) dzieli się na część wzrokową (zawiera czopki dla widzenia barwnego i pręciki dla **widzenia** __________ oraz część ślepą (bez receptorów).",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "tarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2\n 30. Bruzda nerwu promieniowego ley na koci: A) promieniowej B) ramiennej C)\n\nlokciowej D) lopatkowej\n\n31. Punktem kostnym latwo wyczuwalnym jest: A) wyrostek rylcowaty koci udowej B)\n\n wcicie szyjne obojczyka C) guzowato piszczelowa D) powierzchnia uchowata\n 32. Glówk w stawie skokowym górnym tworzy ko: A) piszczelowa B) skokowa C)\n\nstrzalkowa D) pitowa\n\f33. Powierzchnie stawowe czaszki zlokalizowane s na koci: A) potylicznej i skroniowej\n\n B) jarzmowej i skroniowej C) uchwie i klinowej D) uchwie, skroniowej, potylicznej\n 34. Glówka naley do koci: A) radius, ulna B) humerus, femur\n                                                              C) femur, radius D)\nradius, ulna, humerus, fibula"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "STRUKTURA FIZYKOCHEMICZNA KOŚCI\nPozbawiona części miękkich (okostnej, chrząstek, ścięgien oraz wody) kość składa się w oko-\nło /3 ze związków organicznych oraz w ²/3 ze związków nieorganicznych, mineralnych.\nW skład związków organicznych (osseomukoidu) wchodzą głównie włókna kolage-\nnowe (80%). Do organicznych substancji bezpostaciowych kości należą głównie białka\nniekolagenowe regulujace mineralizację kości – osteonektyne i osteokalcyne. Składniki\norganiczne nadają kościom elastyczność.\nSkładniki nieorganiczne (60–70% tkanki), głównie fosforany wapnia (hydroksyapa-\ntyt) i magnezu oraz weglany wapnia, nadają kości twardość i wytrzymałość.\n\n--- STRONA 34 ---\n32\nROZDZIAL 1• ANATOMIA OGÓLNA\nSkładniki nieorganiczne są ściśle związane z organicznymi, jednak można kość pozba-\nwić jednych lub drugich. Pod wpływem ostrożnego podgrzewania kość traci związki or-\nganiczne. Zachowuje ona wtedy swój kształt i budowe, lecz traci elastyczność, jest krucha\ni łamliwa; można ją rozetrzeć na popiół. Stosując kwasy nieorganiczne, można pozbawić\nkość związków mineralnych, czyli odwapnić\" ją. Kość zachowuje wówczas swój kształt,\nlecz staje się miękka; daje się ugniatać i wyginać.\nPrzeciętna masa kośćca wynosi u mężczyzny około 12 kg, a u kobiety około 10 kg. Nale-\nży jednak uwzglednić, że wliczona w to jest masa szpiku kostnego wynosząca ponad 2 kg.\nW ciągu całego życia zachodzą zmiany w składzie kości. Z wiekiem zmniejsza się\nilość związków organicznych i soli mineralnych, co powoduje zmniejszenie całej\nmasy kostnej. W następstwie tego kość staje się krucha, ma zmniejszoną odpor-\nność na zginanie. Proces ten, znacznie częstszy u kobiet niż u mężczyzn, zwany\nzrzeszotnieniem kości, czyli osteoporozą, prowadzi u osób starszych do częstych\nzłamań, które szczególnie dotyczą szyjki kości udowej.\n1.5.1.5\nKOSTNIENIE I WZRASTANIE KOŚCI\nKościec pochodzi ze środkowego listka zarodkowego. Poczatkowo, do 4. tygodnia życia we-\nwnątrzmacicznego, kościec jest zbudowany wyłacznie z tkanki łacznej zarodkowej; jest to\nszkielet błoniasty (mezenchymatyczny). Nastepnie (4.-6. tydzien) pojawiają się w szkiele-\ncie błoniastym skupienia chrząstki. Wreszcie od 7. tygodnia powstaje tkanka kostna.\nPodobne etapy rozwoju szkieletu występuja w rozwoju rodowym (filogenezie). U niż-\nszych kregowców szkielet jest błoniasty (łącznotkankowy), u ryb chrzęstnoszkieletowych\n– chrząstkowy i wreszcie, poczynając od ryb kostnoszkieletowych, a kończąc na ssakach\n- kostny.\nKości powstają na podłożu łącznotkankowym – bezpośrednio z tkanki łącznej, lub\nteż na podłożu chrzęstnym.\nNa podłożu łącznotkankowym rozwijają się niektóre kości czaszki oraz trzon oboj-\nczyka. Na podłożu chrzęstnym rozwija się większość szkieletu kostnego – kości tułowia,\nkończyn i część kości czaszki.\nKOSTNIENIE NA PODŁOŻU LACZNOTKANKOWYM (BLONIASTYM)\nKostnienie na podłożu lacznotkankowym rozpoczyna się od powstawania punktów kost-\nnienia (puncta ossificationes) w mezenchymie. W punktach tych komórki kościotwórcze\n(osteoblasty) wytwarzają istotę miedzykomórkową (osteoid), która nastepnie ulega mi-\nneralizacji polegającej przede wszystkim na odkładaniu się soli wapnia. Wykształcają się\nbeoeds   s d s zs e ez s k so\nkości sklepienia czaszki przez dłuższy okres są oddzielone pasmami tkanki łącznej. Osta-\ntecznie jednak łączą się ze sobą za pomocą szwów.\n\n--- STRONA 35 ---\n33\nUKLADY NARZADÓW\nKOSTNIENIE NA PODŁOŻU CHRZESTNYM\nNa wstepie należy zaznaczyć, że nigdzie nie wystepuje przekształcenie tkanki chrzęstnej\nw tkankę kostna, lecz zawsze chrząstka zostaje najpierw zniszczona przez przekształcone"
        }
      ]
    },
    {
      "id": "narzad-sluchu",
      "title": "Narząd słuchu — ucho",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Ucho środkowe"
        },
        {
          "type": "paragraph",
          "text": "W uchu środkowym znajduje się powietrze (żadna z wymienionych — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17."
        },
        {
          "type": "paragraph",
          "text": "Ucho środkowe obejmuje: błonę bębenkową (granica z uchem zewnętrznym), jamę bębenkową (cavum tympani), trąbkę słuchową (tuba auditiva/Eustachiusa — łączy ucho środkowe z gardłem, wyrównuje ciśnienie) oraz kosteczki słuchowe: młoteczek (malleus — połączony z błoną bębenkową), kowadełko (incus), strzemiączko (stapes — połączone z okienkiem owalnym)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Ucho wewnętrzne (błędnik)"
        },
        {
          "type": "paragraph",
          "text": "Ucho wewnętrzne składa się z błędnika kostnego (wypełnionego przychłonką — perilymph) i błędnika błoniastego (wypełnionego śródchłonką — endolymph). Przewód ślimaka (ductus cochlearis) zawiera narząd Cortiego (organum spirale) — właściwy receptor słuchu. Układ przedsionkowo-łonowy (kanały półkoliste, woreczek i łagiewka) zawiera receptory równowagi. Unerwienie: nerw przedsionkowo-ślimakowy (CN VIII)."
        },
        {
          "type": "table",
          "headers": [
            "Część ucha",
            "Elementy",
            "Zawartość"
          ],
          "rows": [
            [
              "Ucho zewnętrzne",
              "Małżowina, przewód słuchowy zewnętrzny",
              "Powietrze"
            ],
            [
              "Ucho środkowe",
              "Błona bębenkowa, jama bębenkowa, kosteczki (młoteczek, kowadełko, strzemiączko), trąbka słuchowa",
              "Powietrze"
            ],
            [
              "Ucho wewnętrzne",
              "Ślimak (z narządem Cortiego), kanały półkoliste, woreczek, łagiewka",
              "Przychłonka (błędnik kostny) i śródchłonka (błędnik błoniasty)"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Mechanizm słyszenia: fala dźwiękowa → błona bębenkowa → młoteczek → kowadełko → strzemiączko → okienko owalne → przychłonka → narząd Cortiego → impuls nerwowy → CN VIII."
        }
      ],
      "recallQuestions": [
        {
          "id": "sen-3",
          "question": "Co znajduje się w uchu środkowym — przychłonka, śródchłonka, limfa, czy żadna z tych?",
          "answer": "Żadna — w uchu środkowym znajduje się powietrze.",
          "examRef": "Q17"
        },
        {
          "id": "sen-4",
          "question": "Wymień trzy części ucha i ich zawartość.",
          "answer": "Zewnętrzne (powietrze), środkowe (powietrze + kosteczki), wewnętrzne (przychłonka + śródchłonka).",
          "examRef": "Q17"
        },
        {
          "id": "sen-9",
          "question": "Jakie kosteczki słuchowe znajdują się w uchu środkowym i jak są połączone?",
          "answer": "Młoteczek (z błoną bębenkową) → kowadełko → strzemiączko (z okienkiem owalnym).",
          "examRef": ""
        },
        {
          "id": "sen-10",
          "question": "Jaka jest funkcja trąbki słuchowej (Eustachiusza)?",
          "answer": "Łączy ucho środkowe z gardłem — wyrównuje ciśnienie powietrza.",
          "examRef": ""
        },
        {
          "id": "sen-11",
          "question": "Gdzie znajduje się narząd Cortiego i co jest jego bodźcem?",
          "answer": "W przewodzie ślimaka (błędnik błoniasty) — fala przychłonki pobudza komórki słuchowe.",
          "examRef": ""
        },
        {
          "id": "sen-12",
          "question": "Jaka jest różnica między przychłonką a śródchłonką?",
          "answer": "Przychłonka (perilymph) w błędniku kostnym, śródchłonka (endolymph) w błędniku błoniastym.",
          "examRef": ""
        }
      ],
      "academic_detail": "W uchu środkowym znajduje się powietrze (żadna z wymienionych — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17.\n\nUcho środkowe obejmuje: błonę bębenkową (granica z uchem zewnętrznym), jamę bębenkową (cavum tympani), trąbkę słuchową (tuba auditiva/Eustachiusa — łączy ucho środkowe z gardłem, wyrównuje ciśnienie) oraz kosteczki słuchowe: młoteczek (malleus — połączony z błoną bębenkową), kowadełko (incus), strzemiączko (stapes — połączone z okienkiem owalnym).\n\nUcho wewnętrzne składa się z błędnika kostnego (wypełnionego przychłonką — perilymph) i błędnika błoniastego (wypełnionego śródchłonką — endolymph). Przewód ślimaka (ductus cochlearis) zawiera narząd Cortiego (organum spirale) — właściwy receptor słuchu. Układ przedsionkowo-łonowy (kanały półkoliste, woreczek i łagiewka) zawiera receptory równowagi. Unerwienie: nerw przedsionkowo-ślimakowy (CN VIII).\n\nMechanizm słyszenia: fala dźwiękowa → błona bębenkowa → młoteczek → kowadełko → strzemiączko → okienko owalne → przychłonka → narząd Cortiego → impuls nerwowy → CN VIII.",
      "summary": "- W uchu środkowym znajduje się powietrze (żadna **z** __________ — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17.\n- Ucho środkowe obejmuje: błonę bębenkową (granica z uchem zewnętrznym), jamę bębenkową (cavum tympani), trąbkę słuchową **tuba**( __________ — łączy ucho środkowe z gardłem, wyrównuje ciśnienie) oraz kosteczki słuchowe: młoteczek (malleus — połączony z błoną bębenkową), kowadełko (incus), strzemiączko (stapes — połączone z okienkiem owalnym).\n- Ucho wewnętrzne składa się z błędnika **kostnego** __________ przychłonką — perilymph) i błędnika błoniastego (wypełnionego śródchłonką — endolymph).\n- Przewód ślimaka **ductus**( __________ zawiera narząd Cortiego (organum spirale) — właściwy receptor słuchu.",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "2. Korowy orodek czucia ley w: A) midzymózgowiu B) ródmózgowiu C) kresomózgowiu\n\n D) tylomózgowiu\n 3. Ze wiatla cewy nerwowej powstaj: A) nerwy czaszkowe B) komory mózgu\n                                                                           C) nerwy\nrdzeniowe D) korowe orodki czucia\n\n 4. Najwikszym gruczolem dokrewnym jest: A) trzustka B) wtroba C) tarczyca D)\n\ntkanka tluszczowa\n\n 5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "STRUKTURA FIZYKOCHEMICZNA KOŚCI\nPozbawiona części miękkich (okostnej, chrząstek, ścięgien oraz wody) kość składa się w oko-\nło /3 ze związków organicznych oraz w ²/3 ze związków nieorganicznych, mineralnych.\nW skład związków organicznych (osseomukoidu) wchodzą głównie włókna kolage-\nnowe (80%). Do organicznych substancji bezpostaciowych kości należą głównie białka\nniekolagenowe regulujace mineralizację kości – osteonektyne i osteokalcyne. Składniki\norganiczne nadają kościom elastyczność.\nSkładniki nieorganiczne (60–70% tkanki), głównie fosforany wapnia (hydroksyapa-\ntyt) i magnezu oraz weglany wapnia, nadają kości twardość i wytrzymałość.\n\n--- STRONA 34 ---\n32\nROZDZIAL 1• ANATOMIA OGÓLNA\nSkładniki nieorganiczne są ściśle związane z organicznymi, jednak można kość pozba-\nwić jednych lub drugich. Pod wpływem ostrożnego podgrzewania kość traci związki or-\nganiczne. Zachowuje ona wtedy swój kształt i budowe, lecz traci elastyczność, jest krucha\ni łamliwa; można ją rozetrzeć na popiół. Stosując kwasy nieorganiczne, można pozbawić\nkość związków mineralnych, czyli odwapnić\" ją. Kość zachowuje wówczas swój kształt,\nlecz staje się miękka; daje się ugniatać i wyginać.\nPrzeciętna masa kośćca wynosi u mężczyzny około 12 kg, a u kobiety około 10 kg. Nale-\nży jednak uwzglednić, że wliczona w to jest masa szpiku kostnego wynosząca ponad 2 kg.\nW ciągu całego życia zachodzą zmiany w składzie kości. Z wiekiem zmniejsza się\nilość związków organicznych i soli mineralnych, co powoduje zmniejszenie całej\nmasy kostnej. W następstwie tego kość staje się krucha, ma zmniejszoną odpor-\nność na zginanie. Proces ten, znacznie częstszy u kobiet niż u mężczyzn, zwany\nzrzeszotnieniem kości, czyli osteoporozą, prowadzi u osób starszych do częstych\nzłamań, które szczególnie dotyczą szyjki kości udowej.\n1.5.1.5\nKOSTNIENIE I WZRASTANIE KOŚCI\nKościec pochodzi ze środkowego listka zarodkowego. Poczatkowo, do 4. tygodnia życia we-\nwnątrzmacicznego, kościec jest zbudowany wyłacznie z tkanki łacznej zarodkowej; jest to\nszkielet błoniasty (mezenchymatyczny). Nastepnie (4.-6. tydzien) pojawiają się w szkiele-\ncie błoniastym skupienia chrząstki. Wreszcie od 7. tygodnia powstaje tkanka kostna.\nPodobne etapy rozwoju szkieletu występuja w rozwoju rodowym (filogenezie). U niż-\nszych kregowców szkielet jest błoniasty (łącznotkankowy), u ryb chrzęstnoszkieletowych\n– chrząstkowy i wreszcie, poczynając od ryb kostnoszkieletowych, a kończąc na ssakach\n- kostny.\nKości powstają na podłożu łącznotkankowym – bezpośrednio z tkanki łącznej, lub\nteż na podłożu chrzęstnym.\nNa podłożu łącznotkankowym rozwijają się niektóre kości czaszki oraz trzon oboj-\nczyka. Na podłożu chrzęstnym rozwija się większość szkieletu kostnego – kości tułowia,\nkończyn i część kości czaszki.\nKOSTNIENIE NA PODŁOŻU LACZNOTKANKOWYM (BLONIASTYM)\nKostnienie na podłożu lacznotkankowym rozpoczyna się od powstawania punktów kost-\nnienia (puncta ossificationes) w mezenchymie. W punktach tych komórki kościotwórcze\n(osteoblasty) wytwarzają istotę miedzykomórkową (osteoid), która nastepnie ulega mi-\nneralizacji polegającej przede wszystkim na odkładaniu się soli wapnia. Wykształcają się\nbeoeds   s d s zs e ez s k so\nkości sklepienia czaszki przez dłuższy okres są oddzielone pasmami tkanki łącznej. Osta-\ntecznie jednak łączą się ze sobą za pomocą szwów.\n\n--- STRONA 35 ---\n33\nUKLADY NARZADÓW\nKOSTNIENIE NA PODŁOŻU CHRZESTNYM\nNa wstepie należy zaznaczyć, że nigdzie nie wystepuje przekształcenie tkanki chrzęstnej\nw tkankę kostna, lecz zawsze chrząstka zostaje najpierw zniszczona przez przekształcone"
        }
      ]
    },
    {
      "id": "smak-wech",
      "title": "Smak i węch",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Narząd smaku"
        },
        {
          "type": "paragraph",
          "text": "Kubki smakowe znajdują się w brodawkach (papillae) języka. Unerwienie czuciowe smaku: nerw twarzowy (CN VII) — przednie 2/3 języka, nerw językowo-gardłowy (CN IX) — tylna 1/3 języka, nerw błędny (CN X) — okolica nagłośni."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Narząd węchu"
        },
        {
          "type": "paragraph",
          "text": "Nabłonek węchowy znajduje się w okolicy węchowej jamy nosowej. Nerw węchowy (CN I) — jego włókna (filae olfactoriae) przechodzą przez otwory blaszki sitowej (lamina cribrosa) kości sitowej, docierając do opuszki węchowej (bulbus olfactorius)."
        },
        {
          "type": "table",
          "headers": [
            "Zmysł",
            "Narząd",
            "Droga nerwowa"
          ],
          "rows": [
            [
              "Smak — przednie 2/3 języka",
              "Kubki smakowe w brodawkach",
              "CN VII (twarzowy)"
            ],
            [
              "Smak — tylna 1/3 języka",
              "Kubki smakowe w brodawkach",
              "CN IX (językowo-gardłowy)"
            ],
            [
              "Smak — okolica nagłośni",
              "Kubki smakowe",
              "CN X (błędny)"
            ],
            [
              "Węch",
              "Nabłonek węchowy jamy nosowej",
              "CN I (węchowy) — blaszka sitowa → opuszka węchowa"
            ]
          ]
        }
      ],
      "recallQuestions": [
        {
          "id": "sen-13",
          "question": "Który nerw czaszkowy unerwia czuciowo smak przednich 2/3 języka?",
          "answer": "CN VII (twarzowy).",
          "examRef": ""
        },
        {
          "id": "sen-14",
          "question": "Który nerw unerwia czuciowo smak tylnej 1/3 języka?",
          "answer": "CN IX (językowo-gardłowy).",
          "examRef": ""
        },
        {
          "id": "sen-15",
          "question": "Jaka jest droga włókien węchowych od jamy nosowej do mózgu?",
          "answer": "Nabłonek węchowy → włókna węchowe (przez blaszkę sitową kości sitowej) → opuszka węchowa (bulbus olfactorius).",
          "examRef": ""
        },
        {
          "id": "sen-16",
          "question": "Które nerwy czaszkowe unerwiają smak i jaki jest ich zasięg?",
          "answer": "CN VII (przednie 2/3 języka), CN IX (tylna 1/3), CN X (okolica nagłośni).",
          "examRef": ""
        }
      ],
      "academic_detail": "Kubki smakowe znajdują się w brodawkach (papillae) języka. Unerwienie czuciowe smaku: nerw twarzowy (CN VII) — przednie 2/3 języka, nerw językowo-gardłowy (CN IX) — tylna 1/3 języka, nerw błędny (CN X) — okolica nagłośni.\n\nNabłonek węchowy znajduje się w okolicy węchowej jamy nosowej. Nerw węchowy (CN I) — jego włókna (filae olfactoriae) przechodzą przez otwory blaszki sitowej (lamina cribrosa) kości sitowej, docierając do opuszki węchowej (bulbus olfactorius).",
      "summary": "- Kubki smakowe znajdują się **w** __________ (papillae) języka.\n- Unerwienie czuciowe smaku: nerw twarzowy (CN VII) — przednie 2/3 języka, **nerw** __________ (CN IX) — tylna 1/3 języka, nerw błędny (CN X) — okolica nagłośni.\n- __________ węchowy znajduje się w okolicy węchowej jamy nosowej.\n- Nerw węchowy (CN I) — jego włókna **filae**( __________ przechodzą przez otwory blaszki sitowej (lamina cribrosa) kości sitowej, docierając do opuszki węchowej (bulbus olfactorius).",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "rdzeniowe D) korowe orodki czucia\n\n 4. Najwikszym gruczolem dokrewnym jest: A) trzustka B) wtroba C) tarczyca D)\n\ntkanka tluszczowa\n\n 5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2\n 30. Bruzda nerwu promieniowego ley na koci: A) promieniowej B) ramiennej C)"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "- biodrowo-guziczne 193.III\n− - przyśrodkowy gałki ocznej\n— − zewnętrzny 69.IV\n– brodawkowate 45.III\n175.IV\n– tchawiczy 67.III\n– brzucha czynność 170.1\n— – tylny głowy mniejszy 1 14.I\n– trąbkowo-gardłowy 53.IV\n- czworogłowy 45.I\n - − większy 114.I\n– trębaczy 129.IV\n– dna miednicy 192.III\n- − uda 159.II\n– trójgłowy łydki 168.II\n– dwubrzuścowe 45.1\n− przeciwstawiacz kciuka 61.II\n— — ramienia 49.II\n- dwugłowy 45.I\n– − palca małego ręki 62.II\n- - – porażenie 49.II\n— dwustawowe 48.1\n- - - - stopy 175.II\n- wieszadłowy dwunastnicy\n– działające na staw biodrowy\n– przedsionkowy 69.IV\n137.III\n177.i\n– przywłosowy 80.I\n– zaciskający cewkę moczową\n– kolanowy 177.II\n− przywodziciel długi 163.II\n209.III, 223.III\n – łokciowy łącznie ze\n− − kciuka 61.II\n– zasłonowy wewnętrzny\nstawami promieniowo-\n− − krótki 163.II\n158.II; 194.III\n-łokciowymi 65.II\n– − najmniejszy 163.II\n– – zewnętrzny 158.II\n − − ramienny 64.II\n- - palucha 175.II\n– zębaty przedni 140.I; 46.II\n- skokowo-goleniowy\n- - wielki 163.II\n- - tylny dolny 109.I\n178.II\n- ramienno-promieniowy\n- - − górny 109.1\n- — skokowo-piętowo-łód-\n56.II, 57.II\n− zginacz đługi kciuka 53.II\nkowy 178.II\n– ramienny 48.II\n- - - palców 169.II\n- – − stawy kciuka 66.II\n– rozwieracz źrenicy 194.IV\n− - − palucha 169.II\n- - − nadgarstkowe i nad-\n− równoległoboczny 46.II\n- − głęboki palców 52.II\ngarstkowo-śródręczne 65.II\n– − mniejszy 109.I\n− − krótki kciuka 61.II\n− palców II–V ręki 65.II\n− − większy 109.I\n− − - palca malego 62.II, 175.II\n− stopy 178.II\n– rylcowo-gardłowy 52.IV\n- — - palców 175.II\n– działanie na stawy 47.I\n− rylcowo-gnykowy 14.IV\n- palucha 175.II\n– dźwigacze gardła 52.IV\n− rylcowo-językowy 224.IV\n- − łokciowy nadgarstka 52.II\n– glistowate 62.II\n– rzęskowy 192.IV\n— — powierzchowny palców\n– gładkie tęczówki, uwagi\n– sercowy 42.III\n52.II\nrozwojowe 203.IV\n— skośny dolny gałki ocznej\n— - promieniowy nadgarstka\n- głębokie przyczepiające się\n176.IV\n52.II\npo wewnętrznej stronie\n- - głowy dolny 114.I\n- zwieracz bańki 167.III\nżeber 143.1\n- - - górny 114.I\n— — cewkowo-pochwowy 223.III\n- głowy 123.IV\n– − górny gałki ocznej 176.IV\n— − dolny gardła 52.IV\n- goleni 166.II\n- – wewnętrzny brzucha 159.I\n– − górny gardła 51.IV\n- - grupa boczna 171.II\n– – zewnętrzny brzucha 159.I\n- - odźwiernika 132.III\n— − przednia (prostowniki)\n— skroniowo-ciemieniowy\n— – przewodu trzustkowego\n166.II\n128.IV\n167.III, 169.III\n – porażenie 168.II\n- skroniowy 124.IV, 162.IV\n– — środkowy gardła 51.IV\n tylna (zginacze) 168.II\n– skrzydłowy boczny 124.IV\n– – wewnętrzny cewki moczo-\n- porażenie 171.II\n− − boczny 164.IV\nwej 219.III, 220.III\n– warstwa głęboka\n- − przyśrodkowy 125.IV,\n- - − odbytu 265.III\n169.II\n164.ÍV\n- – zewnętrzny cewki moczo-\n- powierzchowna\n− smukly 163.II\nwej 209.III, 223.III\n168.II\n— strzałkowy długi 169.II\n- - cewkowo-pochwowy\n- grzbietu 106.I\n− − krótki 169.II\n209.III\n- - glębokie 111.I\n− – trzeci 167.II\n− − − odbytu 210.III, 265.III\n− − − czynność 1 1 4.I\n- strzemiączkowy 254.IV\n− - - - porażenie 266.III\n- - warstwa głęboka 113.I\n– szeroki szyi 12.IV\n- - źrenicy 194.IV\n- - pośrednia 112.1\n\n--- STRONA 194 ---\n192\nSKOROWIDZ HASEŁ POLSKICH\nMięśnie grzbietu głębokie,\nMięśnie otaczające szparę ust\nMięśnie sklepienia czaszki\nwarstwa powierzchowna\n129.IV\n126.IV\n111.1\n- pierzaste 43.I\n– skórne 42.1\n- - powierzchowne 106.I\n- plaskie 43.1\n- skręcające 114.I\n– — segmentowe krótkie\n- pochyłe szczeliny 18.IV\n– skurcz izometryczny 48.I\n114.I\n− − szyi 17.IV\n— − izotoniczny 48.I\n- grzebieniaste 44.III\n– − – unerwienie 17.IV\n- stopy 174.II\n- jednostawowe 48.I"
        }
      ]
    },
    {
      "id": "oko-szczegoly",
      "title": "Oko — szczegółowa anatomia i fizjologia",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Komory oka i krążenie cieczy wodnistej"
        },
        {
          "type": "paragraph",
          "text": "Gałka oczna zawiera trzy przestrzenie: komorę przednią (camera anterior — między rogówką a tęczówką), komorę tylną (camera posterior — między tęczówką a soczewką) oraz komorę ciała szklistego (camera vitrea — za soczewką, wypełniona ciałem szklistym). Ciecz wodnista (humor aquosus) jest produkowana przez wyrostki ciała rzęskowego do komory tylnej, przepływa przez źrenicę do komory przedniej i jest odprowadzana przez kąt tęczówkowo-rogówkowy (kąt przesączania) do kanału Schlemma (sinus venosus sclerae), a stamtąd do żył nadtwardówkowych. Zaburzenie odpływu cieczy wodnistej prowadzi do wzrostu ciśnienia śródgałkowego i jaskry (glaucoma)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Akomodacja i refrakcja"
        },
        {
          "type": "paragraph",
          "text": "Akomodacja to zdolność oka do ostrego widzenia przedmiotów znajdujących się w różnych odległościach. Odbywa się przez zmianę kształtu soczewki: skurcz mięśnia rzęskowego (unerwienie przywspółczulne — CN III, zwój rzęskowy) → rozluźnienie obwódki rzęskowej (włókna Zinna) → soczewka staje się bardziej wypukła (zwiększa moc optyczną) → oko nastawione do bliży. Rozkurcz mięśnia rzęskowego → napięcie obwódki rzęskowej → soczewka spłaszczona → oko nastawione do dali. Z wiekiem soczewka traci elastyczność — starczowzroczność (presbyopia). Rogówka ma największą siłę załamania (~43 dioptrie), soczewka ~15-20 dioptrii (w akomodacji). Całkowita moc optyczna oka ~60 D. Wady refrakcji: krótkowzroczność (myopia — obraz przed siatkówką, korygowane soczewką rozpraszającą −), dalekowzroczność (hyperopia — obraz za siatkówką, korygowane soczewką skupiającą +), astygmatyzm (nieprawidłowa krzywizna rogówki — korygowane soczewką cylindryczną)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Siatkówka — fotoreceptory i droga wzrokowa"
        },
        {
          "type": "paragraph",
          "text": "Siatkówka (retina) składa się z 10 warstw. Warstwa fotoreceptorów zawiera: czopki (~6 mln, widzenie barwne — 3 typy opsyn: S — niebieska 420 nm, M — zielona 530 nm, L — czerwona 560 nm; największe zagęszczenie w dołku środkowym — fovea centralis, miejsce najostrzejszego widzenia, same czopki, bez pręcików) i pręciki (~120 mln, widzenie skotopowe/nocne — zawierają rodopsynę, bardzo czułe na światło, nie rozróżniają barw). Fotoreceptory przekazują sygnał do komórek dwubiegunowych, te do komórek zwojowych, których aksony tworzą nerw wzrokowy (CN II). Droga wzrokowa: fotoreceptory → komórki dwubiegunowe → komórki zwojowe → n. wzrokowy → skrzyżowanie wzrokowe (chiasma opticum — krzyżują się włókna z przyśrodkowych połówek siatkówek, czyli z nosowych połówek pola widzenia) → pasmo wzrokowe (tractus opticus) → ciało kolankowate boczne (CGL) wzgórza → promienistość wzrokowa (radiatio optica — pętla Meyera dla górnych kwadrantów, włókna przez płat skroniowy) → kora wzrokowa w płacie potylicznym (pole 17 wg Brodmanna, okolica bruzdy ostrogowej)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Mięśnie zewnętrzne gałki ocznej i ich unerwienie"
        },
        {
          "type": "paragraph",
          "text": "Sześć mięśni zewnętrznych gałki ocznej: 4 mięśnie proste (górny, dolny, przyśrodkowy, boczny) i 2 mięśnie skośne (górny i dolny). Wszystkie przyczepiają się do twardówki, rozpoczynając się w pierścieniu ścięgnistym wspólnym (annulus tendineus communis Zinni) na szczycie oczodołu. Unerwienie: CN III (okoruchowy) — m. prosty górny, dolny, przyśrodkowy, m. skośny dolny i m. dźwigacz powieki górnej; CN IV (bloczkowy) — m. skośny górny (przechodzi przez bloczek — trochlea); CN VI (odwodzący) — m. prosty boczny. Wzór na zapamiętanie: LR₆SO₄AR₃ (Lateral Rectus — VI, Superior Oblique — IV, All Rest — III)."
        }
      ],
      "recallQuestions": [
        {
          "id": "sen-17",
          "question": "Jak przebiega droga wzrokowa od siatkówki do kory mózgowej?",
          "answer": "Fotoreceptory → komórki dwubiegunowe → komórki zwojowe → n. wzrokowy → skrzyżowanie wzrokowe (włókna nosowe) → pasmo wzrokowe → CGL wzgórza → promienistość wzrokowa → kora wzrokowa (płat potyliczny, pole 17).",
          "examRef": ""
        },
        {
          "id": "sen-18",
          "question": "Które mięśnie zewnętrzne oka unerwione są przez nerwy czaszkowe III, IV i VI?",
          "answer": "CN III: prosty górny/dolny/przyśrodkowy, skośny dolny, dźwigacz powieki. CN IV: skośny górny. CN VI: prosty boczny. Formuła LR₆SO₄AR₃.",
          "examRef": ""
        },
        {
          "id": "sen-19",
          "question": "Wyjaśnij mechanizm akomodacji oka.",
          "answer": "Skurcz m. rzęskowego (przywspółczulny, CN III) → rozluźnienie włókien obwódki rzęskowej (Zinna) → soczewka staje się bardziej wypukła → zwiększenie mocy optycznej → widzenie z bliska. Rozkurcz m. rzęskowego → napięcie obwódki → soczewka spłaszczona → widzenie z daleka.",
          "examRef": ""
        }
      ],
      "academic_detail": "Gałka oczna zawiera trzy przestrzenie: komorę przednią (camera anterior — między rogówką a tęczówką), komorę tylną (camera posterior — między tęczówką a soczewką) oraz komorę ciała szklistego (camera vitrea — za soczewką, wypełniona ciałem szklistym). Ciecz wodnista (humor aquosus) jest produkowana przez wyrostki ciała rzęskowego do komory tylnej, przepływa przez źrenicę do komory przedniej i jest odprowadzana przez kąt tęczówkowo-rogówkowy (kąt przesączania) do kanału Schlemma (sinus venosus sclerae), a stamtąd do żył nadtwardówkowych. Zaburzenie odpływu cieczy wodnistej prowadzi do wzrostu ciśnienia śródgałkowego i jaskry (glaucoma).\n\nAkomodacja to zdolność oka do ostrego widzenia przedmiotów znajdujących się w różnych odległościach. Odbywa się przez zmianę kształtu soczewki: skurcz mięśnia rzęskowego (unerwienie przywspółczulne — CN III, zwój rzęskowy) → rozluźnienie obwódki rzęskowej (włókna Zinna) → soczewka staje się bardziej wypukła (zwiększa moc optyczną) → oko nastawione do bliży. Rozkurcz mięśnia rzęskowego → napięcie obwódki rzęskowej → soczewka spłaszczona → oko nastawione do dali. Z wiekiem soczewka traci elastyczność — starczowzroczność (presbyopia). Rogówka ma największą siłę załamania (~43 dioptrie), soczewka ~15-20 dioptrii (w akomodacji). Całkowita moc optyczna oka ~60 D. Wady refrakcji: krótkowzroczność (myopia — obraz przed siatkówką, korygowane soczewką rozpraszającą −), dalekowzroczność (hyperopia — obraz za siatkówką, korygowane soczewką skupiającą +), astygmatyzm (nieprawidłowa krzywizna rogówki — korygowane soczewką cylindryczną).\n\nSiatkówka (retina) składa się z 10 warstw. Warstwa fotoreceptorów zawiera: czopki (~6 mln, widzenie barwne — 3 typy opsyn: S — niebieska 420 nm, M — zielona 530 nm, L — czerwona 560 nm; największe zagęszczenie w dołku środkowym — fovea centralis, miejsce najostrzejszego widzenia, same czopki, bez pręcików) i pręciki (~120 mln, widzenie skotopowe/nocne — zawierają rodopsynę, bardzo czułe na światło, nie rozróżniają barw). Fotoreceptory przekazują sygnał do komórek dwubiegunowych, te do komórek zwojowych, których aksony tworzą nerw wzrokowy (CN II). Droga wzrokowa: fotoreceptory → komórki dwubiegunowe → komórki zwojowe → n. wzrokowy → skrzyżowanie wzrokowe (chiasma opticum — krzyżują się włókna z przyśrodkowych połówek siatkówek, czyli z nosowych połówek pola widzenia) → pasmo wzrokowe (tractus opticus) → ciało kolankowate boczne (CGL) wzgórza → promienistość wzrokowa (radiatio optica — pętla Meyera dla górnych kwadrantów, włókna przez płat skroniowy) → kora wzrokowa w płacie potylicznym (pole 17 wg Brodmanna, okolica bruzdy ostrogowej).\n\nSześć mięśni zewnętrznych gałki ocznej: 4 mięśnie proste (górny, dolny, przyśrodkowy, boczny) i 2 mięśnie skośne (górny i dolny). Wszystkie przyczepiają się do twardówki, rozpoczynając się w pierścieniu ścięgnistym wspólnym (annulus tendineus communis Zinni) na szczycie oczodołu. Unerwienie: CN III (okoruchowy) — m. prosty górny, dolny, przyśrodkowy, m. skośny dolny i m. dźwigacz powieki górnej; CN IV (bloczkowy) — m. skośny górny (przechodzi przez bloczek — trochlea); CN VI (odwodzący) — m. prosty boczny. Wzór na zapamiętanie: LR₆SO₄AR₃ (Lateral Rectus — VI, Superior Oblique — IV, All Rest — III).",
      "summary": "- Gałka oczna zawiera **trzy** __________ komorę przednią (camera anterior — między rogówką a tęczówką), komorę tylną (camera posterior — między tęczówką a soczewką) oraz komorę ciała szklistego (camera vitrea — za soczewką, wypełniona ciałem szklistym).\n- Ciecz wodnista (humor aquosus) jest produkowana przez wyrostki ciała rzęskowego do komory tylnej, przepływa przez źrenicę do komory przedniej i jest odprowadzana przez **kąt** __________ (kąt przesączania) do kanału Schlemma (sinus venosus sclerae), a stamtąd do żył nadtwardówkowych.\n- Zaburzenie odpływu cieczy wodnistej prowadzi do wzrostu **ciśnienia** __________ i jaskry (glaucoma).\n- Akomodacja to zdolność oka do ostrego widzenia przedmiotów znajdujących się w **różnych** __________",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "zrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki\n\n28. Palce rki odwodzi misie: A) zginacz palców glboki B) zginacz palców powierzchowny\n\n C) prostownik palców D) minie midzykostne grzbietowe\n 29. Ko lokciowa lczy si stawowo z komi w liczbie: A) 6 B) 5 C) 4 D) 2\n 30. Bruzda nerwu promieniowego ley na koci: A) promieniowej B) ramiennej C)\n\nlokciowej D) lopatkowej\n\n31. Punktem kostnym latwo wyczuwalnym jest: A) wyrostek rylcowaty koci udowej B)\n\n wcicie szyjne obojczyka C) guzowato piszczelowa D) powierzchnia uchowata\n 32. Glówk w stawie skokowym górnym tworzy ko: A) piszczelowa B) skokowa C)\n\nstrzalkowa D) pitowa\n\f33. Powierzchnie stawowe czaszki zlokalizowane s na koci: A) potylicznej i skroniowej\n\n B) jarzmowej i skroniowej C) uchwie i klinowej D) uchwie, skroniowej, potylicznej\n 34. Glówka naley do koci: A) radius, ulna B) humerus, femur\n                                                              C) femur, radius D)\nradius, ulna, humerus, fibula\n\n 35. Najwicej krgów wystpuje w odcinku krgoslupa: A) szyjnym B) piersiowym C)\n\nldwiowym D) ogonowym\n\n36. Ruch odwodzenia moe zaj w stawie: A) siodelkowym, ramiennym, midzyfaliczkowym\n\nB) obrotowym, rubowym, skokowym górnym C) ramienno-promieniowym, biodrowym,\n\n skokowym dolnym D) szczytowo-potylicznym, biodrowym, ramiennym\n 37. Zginanie podudzia zachodzi w stawie: A) biodrowym B) kolanowym"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "żołądka 133.III\n\n--- STRONA 213 ---\n211\nSKOROWIDZ HASEŁPOLSKICH\nWarstwa skośna błony śluzowej Węzeł tchawiczo-oskrzelowy\nWęzly chłonne przedkrtanio-\nżoładka 133.III\n55.III\nwe 32.IV\nWazektomia 240.III\n- więzadła tętniczego 73.III\n- - przedosierdziowe 73.III\nWatroba 15.III, 97.III\n- zatokowo-przedsionkowy\n- - przedtchawicze 33.IV\n– brzeg dolny 154.III\n47.III\n- - przełykowe 73.III\n— budowa wewnętrzna 157.III\n- zatokowy 47.III\n- - przeponowe dolne 123.III\n- - zewnętrzna 151.III\nWęzina gruczołu krokowego\n- - - górne 149.I\n- działy 160.III\n243.II; 74.IV\n— - przymaciczne 203.III\n− naczynia i węzły chłonne\nWęzly chlonne 59.I, 62.1\n- - przymostkowe 149.I\n- – aortalne boczne 121.III\n- − przyodbytnicze 203.III\n- powierzchnia przeponowa\n— – biodrowe wewnetrzne\n- - przypecherzowe 203.III\n151.III\n123.III, 203.III\n- - przypochwowe 203.III\n— - trzewna 154.III\n− − − wspólne 123.III, 203.III\n- – przysutkowe 149.I\n- segmenty 160.III\n- - zewnętrzne 123.III,\n- – przytchawicze 73.III,\n- unaczynienie 158.III\n204.III\n95.III; 33.IV\n- unerwienie 158.III\n- – krezkowe dolne 124.III\n- - przyusznicze 143.IV\nWcięcie bloczkowe 18.II\n− − − górne 124.III\n- - ramienno-głowowe 73.III\n- czołowe 171.IV\n- — krzyżowe 204.III\n- - regionalne 62.1\n— koniuszka serca 33.III\n- – lędźwiowe 203.III, 204.III\n- − szyjne boczne głębokie\n– kulszowe mniejsze 113.II\n- - − lewe 121.III\n31.IV\n− – większe 113.II\n− − − pośrednie 121.III\n - - powierzchowne 33.IV\n- łokciowe 18.II\n- - − prawe 121.III\n− - − głebokie 31.IV\n- międzynalewkowe 60.IV\n- - łokciowe powierzchowne\n- dolne 31.IV\n- nadoczodołowe 171.IV\n81.II\n − − − górne 31.IV\n− obojczykowe 131.I\n— — międzypiersiowe 82.II\n- − − przednie 32.IV\n- panewki 136.II\n- - międzyzebrowe 149.I\n- - ścian jamy brzusznej\n- promieniowe 19.II\n- - nadobojczykowe 33.IV\n121.III\n— sercowe 81.III\n- - odbytowo-odbytnicze\n- − − klatki piersiowej 149.I\n- strzałkowe 123.II\n203.I\n- - ścienne 203.III\n- sutkowe 110.IV\n— — odźwiernikowe 123.III\n- - śledzionowe 123.III\n- szyjne 131.I\n- - okołoprzełykowe 73.III\n— — śródpiersiowe środkowe\n– tarczowe górne 57.IV\n- - osierdziowe boczne 73.III\n73.III\n- trzustki 168.III\n– - oskrzelowo-plucne 95.III\n- - tarczycowe 32.IV\n– wpustowe 132.III\n− − pachowe 173.I; 81.I\n- - tchawiczo-oskrzelowe\n- żebrowe 131.I\n- - - boczne 81.II\n73.III, 95.III\n– żuchwy 99.IV\n- - − piersiowe 82.II\n- - towarzyszące nerwowi\nWejście do jamy sutkowej\n- - - podłopatkowe 82.II\ndodatkowemu 33.IV\n252.IV\n- - − przednie 82.II\n- – trzewne 123.III, 135.III,\n− − krtani 1 1.III; 50.IV, 60.IV\n− − − ramienne 81.II\n140.III\n− − oczodołu 169.IV\n— — - szczytowe 82.II\n- - trzustkowe dolne 123.III\nWędzidełko języka 223.IV\n- - - środkowe 82.II\n− − − górne 123.III\n- łechtaczki 230.III\n− − − tylne 82.II\n- - trzustkowo-dwunastnicze\n- napletka 226.III\n- pachwinowe głębokie\ndolne 124.III\n– warg sromowych 230.III\n197.II\n- - - górne 124.III\nWęzeł Ashoffa-Tavary 48.III\n- - powierzchowne 173.I;\n— - trzustkowo-śledzionowe\n— kanału pachwinowego\n197.II; 204.III\n123.III\n218.II\n- - - powiększenie 197.II\n- - twarzowe 143.IV\n- Keitha-Flacka 47.III\n− - płucne 95.III\n- - watrobowe 123.III, 160.III\n— łuku żyły nieparzystej 73.III\n- - podgnykowe 32.IV\n- - zaaortalne 121.III\n– otworu sieciowego 123.III,\n- - podkolanowe 196.II\n- - zamałżowinowe 143.IV\n160.III\n- - podzuchwowe 142.IV\n- − żołądkowe 123.III\n- pęcherzykowy 123.III\n- - potyliczne 143.IV\n— - żoładkowo-sieciowe\n- przedsionkowo-komorowy\n- - powierzchowne 33.IV\n123.III\n48.III\n- - przedaortalne 121.III\n- − żyly głównej boczne\n– Rosenmüllera 197.II"
        }
      ]
    },
    {
      "id": "ucho-szczegoly",
      "title": "Ucho — szczegółowa anatomia błędnika",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Błędnik kostny i błoniasty — szczegółowa budowa"
        },
        {
          "type": "paragraph",
          "text": "Błędnik kostny (labyrinthus osseus) wypełniony jest przychłonką (perilymph — skład podobny do płynu zewnątrzkomórkowego, dużo Na⁺). Wewnątrz niego znajduje się błędnik błoniasty (labyrinthus membranaceus) wypełniony śródchłonką (endolymph — skład podobny do płynu wewnątrzkomórkowego, dużo K⁺). Śródchłonka produkowana jest przez prążek naczyniowy (stria vascularis) w przewodzie ślimakowym. Błędnik kostny zawiera: ślimak (cochlea — 2,5 skrętu), przedsionek (vestibulum — z woreczkiem i łagiewką) oraz trzy kanały półkoliste (canales semicirculares — przedni, tylny i boczny, ustawione w 3 prostopadłych płaszczyznach)."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Narząd Cortiego — mechanizm słyszenia"
        },
        {
          "type": "paragraph",
          "text": "Narząd spiralny (narząd Cortiego) znajduje się na błonie podstawnej w przewodzie ślimakowym (ductus cochlearis — scala media). Zawiera komórki słuchowe (rzęsate): wewnętrzne (IHC — ~3500, właściwe receptory słuchu) i zewnętrzne (OHC — ~12000, wzmacniają sygnał, aktywne skurcze — wzmocnienie ślimakowe). Nad komórkami rzęsatymi znajduje się błona nakrywkowa (membrana tectoria). Drgania przychłonki → wychylenie błony podstawnej → zginanie stereocyliów komórek rzęsatych → otwarcie kanałów jonowych (mechanoelektryczna transdukcja) → depolaryzacja → uwolnienie neuroprzekaźnika (glutaminianu) → pobudzenie neuronów zwoju spiralnego → nerw ślimakowy (część CN VIII). Tonotopia: wysokie częstotliwości kodowane są u podstawy ślimaka, niskie na szczycie."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Układ przedsionkowy — równowaga"
        },
        {
          "type": "paragraph",
          "text": "Receptory równowagi znajdują się w woreczku (sacculus), łagiewce (utriculus) — plamki woreczka i łagiewki (macula sacculi et utriculi), reagujące na przyspieszenie liniowe i grawitację, pokryte błoną statolitową z kryształkami CaCO₃ (otolity/statokonia) — oraz w bańkach kanałów półkolistych (cristae ampullares), reagujących na przyspieszenie kątowe (obrót głowy). Komórki rzęsate przedsionka przekazują sygnały do zwoju przedsionkowego (ganglion vestibulare Scarpae) → nerw przedsionkowy (część CN VIII) → jądra przedsionkowe w pniu mózgu → móżdżek, jądra ruchowe gałkoruchowe (odruch przedsionkowo-oczny VOR), rdzeń kręgowy (droga przedsionkowo-rdzeniowa)."
        }
      ],
      "recallQuestions": [
        {
          "id": "sen-20",
          "question": "Jaka jest różnica między przychłonką a śródchłonką? Gdzie każda występuje?",
          "answer": "Przychłonka (perilymph) — w błędniku kostnym, bogata w Na⁺ (jak płyn zewnątrzkomórkowy). Śródchłonka (endolymph) — w błędniku błoniastym, bogata w K⁺ (jak płyn wewnątrzkomórkowy), produkowana przez prążek naczyniowy.",
          "examRef": ""
        },
        {
          "id": "sen-21",
          "question": "Gdzie znajduje się narząd Cortiego i jak zachodzi transdukcja dźwięku?",
          "answer": "W przewodzie ślimakowym (scala media) na błonie podstawnej. Drgania przychłonki → wychylenie błony podstawnej → zginanie stereocyliów komórek rzęsatych → otwarcie kanałów K⁺ → depolaryzacja → uwolnienie glutaminianu → pobudzenie CN VIII.",
          "examRef": ""
        },
        {
          "id": "sen-22",
          "question": "Które struktury w uchu wewnętrznym odpowiadają za równowagę?",
          "answer": "Woreczek i łagiewka (plamki — przyspieszenie liniowe, grawitacja, błona statolitowa z otolitami) oraz trzy kanały półkoliste (bańki — cristae ampullares, przyspieszenie kątowe). Sygnały → zwój przedsionkowy Scarpae → CN VIII → jądra przedsionkowe.",
          "examRef": ""
        }
      ],
      "academic_detail": "Błędnik kostny (labyrinthus osseus) wypełniony jest przychłonką (perilymph — skład podobny do płynu zewnątrzkomórkowego, dużo Na⁺). Wewnątrz niego znajduje się błędnik błoniasty (labyrinthus membranaceus) wypełniony śródchłonką (endolymph — skład podobny do płynu wewnątrzkomórkowego, dużo K⁺). Śródchłonka produkowana jest przez prążek naczyniowy (stria vascularis) w przewodzie ślimakowym. Błędnik kostny zawiera: ślimak (cochlea — 2,5 skrętu), przedsionek (vestibulum — z woreczkiem i łagiewką) oraz trzy kanały półkoliste (canales semicirculares — przedni, tylny i boczny, ustawione w 3 prostopadłych płaszczyznach).\n\nNarząd spiralny (narząd Cortiego) znajduje się na błonie podstawnej w przewodzie ślimakowym (ductus cochlearis — scala media). Zawiera komórki słuchowe (rzęsate): wewnętrzne (IHC — ~3500, właściwe receptory słuchu) i zewnętrzne (OHC — ~12000, wzmacniają sygnał, aktywne skurcze — wzmocnienie ślimakowe). Nad komórkami rzęsatymi znajduje się błona nakrywkowa (membrana tectoria). Drgania przychłonki → wychylenie błony podstawnej → zginanie stereocyliów komórek rzęsatych → otwarcie kanałów jonowych (mechanoelektryczna transdukcja) → depolaryzacja → uwolnienie neuroprzekaźnika (glutaminianu) → pobudzenie neuronów zwoju spiralnego → nerw ślimakowy (część CN VIII). Tonotopia: wysokie częstotliwości kodowane są u podstawy ślimaka, niskie na szczycie.\n\nReceptory równowagi znajdują się w woreczku (sacculus), łagiewce (utriculus) — plamki woreczka i łagiewki (macula sacculi et utriculi), reagujące na przyspieszenie liniowe i grawitację, pokryte błoną statolitową z kryształkami CaCO₃ (otolity/statokonia) — oraz w bańkach kanałów półkolistych (cristae ampullares), reagujących na przyspieszenie kątowe (obrót głowy). Komórki rzęsate przedsionka przekazują sygnały do zwoju przedsionkowego (ganglion vestibulare Scarpae) → nerw przedsionkowy (część CN VIII) → jądra przedsionkowe w pniu mózgu → móżdżek, jądra ruchowe gałkoruchowe (odruch przedsionkowo-oczny VOR), rdzeń kręgowy (droga przedsionkowo-rdzeniowa).",
      "summary": "- Błędnik kostny (labyrinthus osseus) wypełniony jest przychłonką (perilymph — skład podobny do **płynu** __________ dużo Na⁺).\n- Wewnątrz niego znajduje się błędnik błoniasty (labyrinthus membranaceus) wypełniony śródchłonką (endolymph — skład podobny do **płynu** __________ dużo K⁺).\n- __________ produkowana jest przez prążek naczyniowy (stria vascularis) w przewodzie ślimakowym.\n- Błędnik kostny zawiera: ślimak (cochlea — 2,5 skrętu), przedsionek (vestibulum — z woreczkiem i łagiewką) oraz trzy kanały półkoliste **canales**( __________ — przedni, tylny i boczny, ustawione w 3 prostopadłych płaszczyznach).",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "ramieniowy B) promieniowy C) pachowy D) miniowo-skórny\n\n2. Korowy orodek czucia ley w: A) midzymózgowiu B) ródmózgowiu C) kresomózgowiu\n\n D) tylomózgowiu\n 3. Ze wiatla cewy nerwowej powstaj: A) nerwy czaszkowe B) komory mózgu\n                                                                           C) nerwy\nrdzeniowe D) korowe orodki czucia\n\n 4. Najwikszym gruczolem dokrewnym jest: A) trzustka B) wtroba C) tarczyca D)\n\ntkanka tluszczowa\n\n 5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "- mloteczkowa 248.IV\n- skroniowy 95.IV\n- mięśni szkieletowych 42.I\n- piramidowa 252.IV\n- suteczkowaty 93.I\n- nerwowe dośrodkowe 68.I\n- poboczną 310.IV\n- sutkowaty 88.IV, 106.IV\n- - odśrodkowe 68.I\n- promieniowa nadgarstka\n− szczękowy 95.IV\n- obwódkowe 193.IV, 198.IV\n22.II\n− zębodołowy 94.IV, 102.IV\n- poprzeczne 305.IV\n- przyśrodkowa 297.IV\n– żebrowy 93.1\n- projekcyjne istoty białej pół-\n- sercowa 23.1\nWyrostki pochyłe tylne 111.IV\nkul mózgu 281.IV\nWypuklenia okrężnicy 14.III,\n- rzęskowe 193.IV\n– Purkinjego 49.III\n144.III\n- skrzydlowe 92.IV\n– ruchowe nerwów rdzenio-\nWyrostek barkowy 13.II\n- stawowe 86.1\nwych 69.I\n− boczny kości skokowej 127.II\n- szczękowe 230.IV\n- − istoty białej pólkul mózgu\n- brodawkowaty 156.III\n- żuchwowe 230.IV\n281.IV\n– czołowy 94.IV, 95.IV\nWyspa 271.IV, 275.IV, 281.IV\n- spoidłowe istoty białej półkul\n- dodatkowy 93.I\nWyspy Langerhansa 16.III\nmózgu 281.IV\n− dziobiasty 18.II; 98.IV, 106.IV\n– trzustki 16.III\nWnęka jajnika 256.III\n− głosowy 59.IV\nWytrysk nasienia 241.III\n- nerki 177.III\n- haczykowaty błędnika sito-\nWzgórek 250.IV\n− płuca 82.III\nwego 92.IV, 208.IV\n− kości krzyżowej 95.I; 114.II\n- šledziony 176.III\n- − trzustki 168.III\n– łonowy 25.III, 228.III\n- wezła chłonnego 62.1\n- hakowaty kregu 87.I\n- nasienny 222.III\nWodociag śródmózgowia\n- jarzmowy kości skroniowej\n- twarzowy 297.IV\n269.IV, 304.IV, 311.IV,\n88.IV\n– Wenery 228.III\n312.IV\n- szczękowej 94.IV\nWzgórki dolne 296.IV\n\n--- STRONA 216 ---\n214\nSKOROWIDZ HASEE POLSKICH\nWzgórki górne 296.IV\nZakręt prosty 278.IV\nZatoka skalista dolna 29.IV,\nWzgórze 267.IV, 286.IV,\n− przedśrodkowy 272.IV\n332.IV\n310.IV\n- przyhipokampowy 276.IV\n- - górna 332.IV\nWzór zębów stałych 233.IV\n- przykrańcowy 276.IV\n- skośna osierdzia 36.III\n– skroniowy dolny 275.IV,\n− stepu 127.II\nZachyłek boczny 312.IV\n278.IV\n- strzałkowa dolna 329.IV\n– dolny 105.III\n– − górny 275.IV\n- - górna 329.IV\n– dwunastniczy dolny 139.III\n- - poprzeczny 275.IV\n- szczękowa 94.IV, 214.IV\n- - górny 139.III\n- − šrodkowy 275.IV\n– tętnicy szyjnej 25.IV\n- gardłowy 48.IV\n- tasiemeczkowy 277.IV\n- ustna 18.1\n– górny 105.III\n— wrzecionowaty 278.IV\n– wieńcowa 50.I; 54.III\n- gruszkowaty 50.IV\n- zaśrodkowy 273.IV\n− − dopływy 55.III\n- klinowo-sitowy 207.IV\n− zębaty 277.IV\n− żylna 60.II\n- kregowo-śródpiersiowy\nZakręty krótkie 276.IV\n- – twardówki 190.IV, 199.IV\n93.III\n− mózgu 271.IV\nZatoki aorty 62.III\n− krętniczo-kątniczy 145.III\n− móżdżku 290.IV\n− czołowe 10.III\n− lejka 310.IV\n− obręczy 276.IV\n– klinowe 10.III\n- łagiewkowy 257.IV\n- oczodołowe 278.IV\n- międzyjamiste 332.IV\n- międzyesowaty 150.III\nZanokcica 108.II\n− moczowo-płciowe 21.III\n- nadbębenkowy 249.IV\nZarodek, ukształtowanie ze-\n- oboczne nosa 10.III; 213.IV\n- nadszyszynkowy 311.IV\nwnętrzne 23.I\n− − − zapalenie 215.IV\n- nadwzrokowy 310.IV\nZasłona rdzeniowa dolna\n- odbytowe 263.III\n- podbębenkowy 249.IV\n312.IV\n- osierdzia 36.III\n- podkolanowy 145.II\n- - górna 296.IV, 312.IV\n- przynosowe 10.III; 213.IV\n- przeponowo-śródpiersiowy\nZastawka aorty 50.I; 41.III\n– sterczowe 220.III\n- dołu owalnego 43.III\n- szczękowe 10.III\n- szyszynkowy 311.IV\n- dwudzielna 39.III\n- żylne 329.IV\n- śledzionowy 105.III\n− pnia plucnego 50.I; 41.III\n- - opony twardej 329.IV\n- ślimakowy 257.IV\n- przedsionkowo-komorowa\n− - − − grupa dolna 331.IV\n- woreczkowy 257.IV\nlewa 50.I; 39.III\ngórna 329.IV\n- zadwunastniczy 139.III\n- - mitralna 50.I\nZawał 52.I\n- żebrowo-przeponowy 92.III\n− − prawa 50.I; 39.III\nZawiązek gonad 25.III\n- żebrowo-sródpiersiowy\n- - trójdzielna 50.I\nZab, budowa 231.IV\n91.III\n- trójdzielna 39.III"
        }
      ]
    },
    {
      "id": "powloki-wspolne",
      "title": "Powłoka wspólna — skóra i jej przydatki",
      "content": [
        {
          "type": "heading",
          "level": 3,
          "text": "Warstwy skóry"
        },
        {
          "type": "paragraph",
          "text": "Skóra (integumentum commune) jest największym narządem ciała (~1,5-2 m², ~15% masy ciała). Składa się z trzech warstw: (1) Naskórek (epidermis) — nabłonek wielowarstwowy płaski rogowaciejący, unaczyniony wyłącznie przez dyfuzję ze skóry właściwej. Składa się z 5 warstw (od głębokiej): warstwa podstawna (stratum basale — komórki macierzyste, melanocyty produkujące melaninę), warstwa kolczysta (stratum spinosum — desmosomy łączą komórki), warstwa ziarnista (stratum granulosum — ziarna keratohialiny), warstwa jasna (stratum lucidum — tylko w grubej skórze dłoni i podeszew), warstwa rogowa (stratum corneum — martwe keratynocyty, złuszczają się). (2) Skóra właściwa (dermis/corium) — tkanka łączna właściwa, zawiera włókna kolagenowe i elastyczne, naczynia krwionośne, zakończenia nerwowe, gruczoły. Dzieli się na warstwę brodawkowatą (stratum papillare — luźna, bogata w naczynia) i warstwę siateczkową (stratum reticulare — zbita, pęczki kolagenu). (3) Tkanka podskórna (hypodermis/tela subcutanea) — tkanka tłuszczowa, izolacja termiczna i magazynowanie energii."
        },
        {
          "type": "heading",
          "level": 3,
          "text": "Gruczoły skórne i przydatki"
        },
        {
          "type": "paragraph",
          "text": "Gruczoły potowe ekrynowe — merokrynowe (wydzielające bez utraty cytoplazmy), rozmieszczone na całym ciele (najgęściej na dłoniach, podeszwach i czole), wydzielają wodnisty pot (regulacja temperatury, unerwienie współczulne cholinergiczne — wyjątek!). Gruczoły potowe apokrynowe — uchodzą do mieszków włosowych (pachy, pachwiny, okolice płciowe), wydzielają gęstszą substancję rozkładaną przez bakterie (zapach ciała), aktywowane w okresie dojrzewania. Gruczoły łojowe (glandulae sebaceae) — holokrynowe, uchodzą do mieszków włosowych, wydzielają sebum (łój skórny), który natłuszcza skórę i włosy. Gruczoły mlekowe (glandulae mammariae) — zmodyfikowane gruczoły potowe apokrynowe. Włosy składają się z łodygi (scapus), korzenia (radix) w mieszku włosowym i cebulki z brodawką włosa. Paznokcie — zrogowaciałe płytki na grzbiecie paliczków dalszych, wyrastają z macierzy paznokcia."
        }
      ],
      "recallQuestions": [
        {
          "id": "sen-23",
          "question": "Wymień warstwy naskórka od najgłębszej do najbardziej powierzchownej.",
          "answer": "Podstawna (bazalna) → kolczysta → ziarnista → jasna (tylko w skórze grubej) → rogowa. W warstwie podstawnej znajdują się melanocyty produkujące melaninę.",
          "examRef": ""
        },
        {
          "id": "sen-24",
          "question": "Jaka jest różnica w unerwieniu gruczołów potowych ekrynowych?",
          "answer": "Są unerwione przez układ współczulny, ale neuroprzekaźnikiem zazwojowym jest acetylocholina (wyjątek od reguły sympatyczno-noradrenergicznej).",
          "examRef": ""
        }
      ],
      "academic_detail": "Skóra (integumentum commune) jest największym narządem ciała (~1,5-2 m², ~15% masy ciała). Składa się z trzech warstw: (1) Naskórek (epidermis) — nabłonek wielowarstwowy płaski rogowaciejący, unaczyniony wyłącznie przez dyfuzję ze skóry właściwej. Składa się z 5 warstw (od głębokiej): warstwa podstawna (stratum basale — komórki macierzyste, melanocyty produkujące melaninę), warstwa kolczysta (stratum spinosum — desmosomy łączą komórki), warstwa ziarnista (stratum granulosum — ziarna keratohialiny), warstwa jasna (stratum lucidum — tylko w grubej skórze dłoni i podeszew), warstwa rogowa (stratum corneum — martwe keratynocyty, złuszczają się). (2) Skóra właściwa (dermis/corium) — tkanka łączna właściwa, zawiera włókna kolagenowe i elastyczne, naczynia krwionośne, zakończenia nerwowe, gruczoły. Dzieli się na warstwę brodawkowatą (stratum papillare — luźna, bogata w naczynia) i warstwę siateczkową (stratum reticulare — zbita, pęczki kolagenu). (3) Tkanka podskórna (hypodermis/tela subcutanea) — tkanka tłuszczowa, izolacja termiczna i magazynowanie energii.\n\nGruczoły potowe ekrynowe — merokrynowe (wydzielające bez utraty cytoplazmy), rozmieszczone na całym ciele (najgęściej na dłoniach, podeszwach i czole), wydzielają wodnisty pot (regulacja temperatury, unerwienie współczulne cholinergiczne — wyjątek!). Gruczoły potowe apokrynowe — uchodzą do mieszków włosowych (pachy, pachwiny, okolice płciowe), wydzielają gęstszą substancję rozkładaną przez bakterie (zapach ciała), aktywowane w okresie dojrzewania. Gruczoły łojowe (glandulae sebaceae) — holokrynowe, uchodzą do mieszków włosowych, wydzielają sebum (łój skórny), który natłuszcza skórę i włosy. Gruczoły mlekowe (glandulae mammariae) — zmodyfikowane gruczoły potowe apokrynowe. Włosy składają się z łodygi (scapus), korzenia (radix) w mieszku włosowym i cebulki z brodawką włosa. Paznokcie — zrogowaciałe płytki na grzbiecie paliczków dalszych, wyrastają z macierzy paznokcia.",
      "summary": "- **Skóra** __________ commune) jest największym narządem ciała (~1,5-2 m², ~15% masy ciała).\n- Składa się z trzech warstw: (1) Naskórek (epidermis) — **nabłonek** __________ płaski rogowaciejący, unaczyniony wyłącznie przez dyfuzję ze skóry właściwej.\n- Składa się z 5 warstw (od głębokiej): warstwa podstawna (stratum basale — komórki macierzyste, melanocyty produkujące melaninę), warstwa kolczysta (stratum spinosum — desmosomy łączą komórki), warstwa ziarnista (stratum granulosum — **ziarna** __________ warstwa jasna (stratum lucidum — tylko w grubej skórze dłoni i podeszew), warstwa rogowa (stratum corneum — martwe keratynocyty, złuszczają się).\n- (2) Skóra **właściwa** __________ — tkanka łączna właściwa, zawiera włókna kolagenowe i elastyczne, naczynia krwionośne, zakończenia nerwowe, gruczoły.",
      "academic_sources": [
        {
          "title": "Anatomia egzamin 2026 WF",
          "content": "2. Korowy orodek czucia ley w: A) midzymózgowiu B) ródmózgowiu C) kresomózgowiu\n\n D) tylomózgowiu\n 3. Ze wiatla cewy nerwowej powstaj: A) nerwy czaszkowe B) komory mózgu\n                                                                           C) nerwy\nrdzeniowe D) korowe orodki czucia\n\n 4. Najwikszym gruczolem dokrewnym jest: A) trzustka B) wtroba C) tarczyca D)\n\ntkanka tluszczowa\n\n 5. Krew bogat w tlen (prywatn) do pluc prowadz: A) galzie oskrzelowe  B) ttnice\n\nplucne C) yly plucne D) ttnice wiecowe\n\n 6. yla wrotna nie zbiera krwi z: A) trzustki B) oldka C) nerki lewej D) esicy\n 7. Misie sercowy jest czci: A) nasierdzia B) osierdzia C) wsierdzia D) ródsierdzia\n\n 8. Za prawidlowy wzrost i dojrzewanie komórek nerwowych glównie odpowiedzialny jest\n\nhormon wytwarzany przez: A) nadnercza B) tarczyc C) przytarczyce D) grasic\n\n 9. Najlepiej wyczuwaln chrzstk krtani jest chrzstka: A) nalewkowata B) klinowata C)\n\ntarczowata D) piercieniowata\n\n10. Prawidlowe poloenie macicy to: A) tylozgicie i tylopochylenie B) tylozgicie,\n\n przodopochylenie C) przodozgicie, tylopochylenie D) przodopochylenie, przodozgicie\n 11. Podstawow jednostk anatomiczn nerki jest: A) neuron B) nefron\n                                                                    C) neuryt D)\nzrazik\n\n 12. Sie dziwna ylno-ylna wystpuje w: A) wtrobie B) nerce C) sercu D) trzustce\n 13. Przewód wytryskowy uchodzi na wzgórku nasiennym w: A) cewki moczowej B)\n\nnasieniowodu C) jajowodu D) moczowodu\n\n 14. Impulsy pobudzajce minie do wyprostowania stopy biegn drog: A)\n\nkorowo-rdzeniow B) korowo-jdrow C) czuciow D) nerwu bldnego\n\n 15. Jeeli bol dolne siekacze to informacja ta dociera do korowego orodka czucia\n\nwlóknami nerwu: A) uchwowego B) twarzowego C) bldnego D) szczkowego\n\n 16. Elementem który nie zalamuje promienia wietlnego jest: A) cialo szkliste B) soczewka\n\nC) ciecz wodnista D) renica\n\f17. W uchu rodkowym znajduje si: A) przychlonka B) ródchlonka C) limfa D) A, B, C s\n\n bldne\n 18. Dwunastnica ssiaduje z: A) grasic B) trzustk\n                                                   C) A i B s prawidlowe D) z nerk\npraw, wtrob i esic\n\n19. Celem nawrócenia rki naley zaangaowa do wykonania ruchu: A) jeden staw B) dwa\n\n stawy C) trzy stawy D) cztery stawy\n 20. Podudzie prostuje misie: A) czworoglowy uda\n                                                   B) pólbloniasty C) brzuchaty lydki D)\nstrzalkowy dlugi\n\n 21. Rami w stawie ramiennym odwodzi: A) m. naramienny cz. boczna  B) naramienny\n\ncz. przednia C) czworoboczny i nadgrzebieniowy D) podlopatkowy\n\n 22. Wizadlem najsilniej ograniczajcym prostowanie uda jest wizadlo: A) lonowo-udowe\n\nB) kulszowo-udowe C) biodrowo-udowe D) pachwinowe\n\n23. Glównym miniem wydechowym jest misie: A) przepona B) prostownik grzbietu C)\n\n poprzeczny brzucha D) midzyebrowy wewntrzny\n 24. Minie uciowe dzialaj na staw/y: A) skroniowo-uchwowy\n                                                                B) midzykrgowe C)\nA i B s prawidlowe D) na staw plaski\n\n 25. Midzy guzem kulszowym i k. strzalkow rozpity jest misie: A) pólbloniasty B)\n\nsmukly C) piersiowy wikszy D) dwuglowy uda glowa dluga\n\n26. Misie który moe przedrami nawraca lub odwraca w zalenoci od poloenia\n\n(tzw. m. tenisistów) to misie: A) zginacz palców glboki B) nawrotny obly C)\n\n ramienno-promieniowy D) wszystkie odpowiedzi s bldne\n 27. Rk odwodzi misie: A) zginacz promieniowy nadgarstka\n                                                                B) zginacz palców\npowierzchowny C) prostownik palców D) prostownik palców glboki"
        },
        {
          "title": "Anatomia czlowieka, Tom 1 Anatomia ogólna, ściany tułowia ( etc.)",
          "content": "W skład związków organicznych (osseomukoidu) wchodzą głównie włókna kolage-\nnowe (80%). Do organicznych substancji bezpostaciowych kości należą głównie białka\nniekolagenowe regulujace mineralizację kości – osteonektyne i osteokalcyne. Składniki\norganiczne nadają kościom elastyczność.\nSkładniki nieorganiczne (60–70% tkanki), głównie fosforany wapnia (hydroksyapa-\ntyt) i magnezu oraz weglany wapnia, nadają kości twardość i wytrzymałość.\n\n--- STRONA 34 ---\n32\nROZDZIAL 1• ANATOMIA OGÓLNA\nSkładniki nieorganiczne są ściśle związane z organicznymi, jednak można kość pozba-\nwić jednych lub drugich. Pod wpływem ostrożnego podgrzewania kość traci związki or-\nganiczne. Zachowuje ona wtedy swój kształt i budowe, lecz traci elastyczność, jest krucha\ni łamliwa; można ją rozetrzeć na popiół. Stosując kwasy nieorganiczne, można pozbawić\nkość związków mineralnych, czyli odwapnić\" ją. Kość zachowuje wówczas swój kształt,\nlecz staje się miękka; daje się ugniatać i wyginać.\nPrzeciętna masa kośćca wynosi u mężczyzny około 12 kg, a u kobiety około 10 kg. Nale-\nży jednak uwzglednić, że wliczona w to jest masa szpiku kostnego wynosząca ponad 2 kg.\nW ciągu całego życia zachodzą zmiany w składzie kości. Z wiekiem zmniejsza się\nilość związków organicznych i soli mineralnych, co powoduje zmniejszenie całej\nmasy kostnej. W następstwie tego kość staje się krucha, ma zmniejszoną odpor-\nność na zginanie. Proces ten, znacznie częstszy u kobiet niż u mężczyzn, zwany\nzrzeszotnieniem kości, czyli osteoporozą, prowadzi u osób starszych do częstych\nzłamań, które szczególnie dotyczą szyjki kości udowej.\n1.5.1.5\nKOSTNIENIE I WZRASTANIE KOŚCI\nKościec pochodzi ze środkowego listka zarodkowego. Poczatkowo, do 4. tygodnia życia we-\nwnątrzmacicznego, kościec jest zbudowany wyłacznie z tkanki łacznej zarodkowej; jest to\nszkielet błoniasty (mezenchymatyczny). Nastepnie (4.-6. tydzien) pojawiają się w szkiele-\ncie błoniastym skupienia chrząstki. Wreszcie od 7. tygodnia powstaje tkanka kostna.\nPodobne etapy rozwoju szkieletu występuja w rozwoju rodowym (filogenezie). U niż-\nszych kregowców szkielet jest błoniasty (łącznotkankowy), u ryb chrzęstnoszkieletowych\n– chrząstkowy i wreszcie, poczynając od ryb kostnoszkieletowych, a kończąc na ssakach\n- kostny.\nKości powstają na podłożu łącznotkankowym – bezpośrednio z tkanki łącznej, lub\nteż na podłożu chrzęstnym.\nNa podłożu łącznotkankowym rozwijają się niektóre kości czaszki oraz trzon oboj-\nczyka. Na podłożu chrzęstnym rozwija się większość szkieletu kostnego – kości tułowia,\nkończyn i część kości czaszki.\nKOSTNIENIE NA PODŁOŻU LACZNOTKANKOWYM (BLONIASTYM)\nKostnienie na podłożu lacznotkankowym rozpoczyna się od powstawania punktów kost-\nnienia (puncta ossificationes) w mezenchymie. W punktach tych komórki kościotwórcze\n(osteoblasty) wytwarzają istotę miedzykomórkową (osteoid), która nastepnie ulega mi-\nneralizacji polegającej przede wszystkim na odkładaniu się soli wapnia. Wykształcają się\nbeoeds   s d s zs e ez s k so\nkości sklepienia czaszki przez dłuższy okres są oddzielone pasmami tkanki łącznej. Osta-\ntecznie jednak łączą się ze sobą za pomocą szwów.\n\n--- STRONA 35 ---\n33\nUKLADY NARZADÓW\nKOSTNIENIE NA PODŁOŻU CHRZESTNYM\nNa wstepie należy zaznaczyć, że nigdzie nie wystepuje przekształcenie tkanki chrzęstnej\nw tkankę kostna, lecz zawsze chrząstka zostaje najpierw zniszczona przez przekształcone\n-ko d no m w n  'ii - n iy\nwem osteoblastów wytwarza się tkanka kostna.\nKostnienie na podłożu chrzęstnym dotyczy większości kości różnego typu. Najbar-"
        }
      ]
    }
  ]
};
