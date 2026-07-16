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
      "academic_detail": "Gałka oczna zbudowana jest z trzech warstw: włóknistej (błona włóknista), naczyniowej (błona naczyniowa) i siatkówki (siatkówka).\n\nWarstwa włóknista (zewnętrzna) obejmuje rogówkę (cornea — załamuje i przepuszcza światło) i twardówkę (sclera — ochrona). Warstwa naczyniowa (środkowa) obejmuje tęczówkę (iris), ciało rzęskowe (corpus ciliare z mięśniem rzęskowym do akomodacji) oraz naczyniówkę (choroid).\n\nSiatkówka (retina) dzieli się na część wzrokową (zawiera czopki dla widzenia barwnego i pręciki dla widzenia światła/kształtu) oraz część ślepą (bez receptorów). Tarcza nerwu wzrokowego (optic disc) jest pozbawiona receptorów — stanowi plamę ślepą (martwe pole).\n\nElementem, który nie załamuje promienia świetlnego, jest źrenica (pupil) — pytanie nr 16. Źrenica jest otworem w tęczówce, który reguluje ilość światła wpadającego do oka, ale sama nie załamuje światła.\n\nDroga promienia świetlnego: rogówka → ciecz wodnista (w komorze przedniej) → soczewka → ciało szkliste (w komorze tylnej). Elementy załamujące: rogówka (najsilniej), ciecz wodnista, soczewka (zmienia kształt przy akomodacji), ciało szkliste.\n\nCiecz wodnista jest wydzielana przez ciało rzęskowe, przepływa z komory tylnej do przedniej przez źrenicę. Komory oka (przednia i tylna) wypełnione są cieczą wodnistą.\n\nMięśnie zewnętrzne oka są poprzecznie prążkowane (szkieletowe). Unerwienie: III nerw okoruchowy (większość mięśni), IV bloczkowy (m. skośny górny), VI odwodzący (m. prosty boczny). Aparat łzowy: gruczoł łzowy (leży w górnym bocznym kącie oczodołu), punkty łzowe (puncta), kanaliki, woreczek łzowy, przewód nosowo-łzowy (uchodzi do jamy nosowej).\n\nZe źródeł:\nNarządy pierwotne\n104\nWczesny okres rozwoju serca i naczyń krwionośnych\n109\nBłony płodowe\n111\nRozwój kształtów zarodka\n116\nCzynność narządów płodowych i ich losy\n120\nTkanki— opracowali Stanisław Hiller i Stanisław Zawistowski\n121\nRóżnicowanie (histogeneza) i podział tkanek\n121\nTkanka nabłonkowa\n122\nTkanki łączne\n129\nTkanka łączna właściwa ... 130. Tkanki łączne o\ncharakterzeswo-\nistym ... 136. Tkanki łączne szkieletowe ... 137\nTkanka mięśniowa\n142\nTkanka nerwowa i glej\n148\nTkanka nerwowa ... 148. Glej ... 156\nKrew i tkanka krwiotwórcza\n158\nPostać człowieka jako całość — opracowali Michał Reicher i Wiesław Lasiński\n162\nWzrastanie\n162\nProporcje ciała ludzkiego i ich zmiany w ciagu wzrastania\n166\nXVII\n\n--- STRONA 7 ---\n168\nKlatka piersiowa — opracowali Michat Reicher i Wiesław Lasinski\n23\nRóżnice konstytucjonalne budowy ciała\n171\nŽebra\n.273\nRóżnice płciowe\nRóżnice związane z wiekiem\nSymetria i asymetria ustroju\n175\n173\n177\nRozwój żeber i mostka\nMostek\n278\n281\nZmienność żeber i mostka\n282\nPlan budowy ciała ludzkiego\nUkłady narządów ... 178.Okolice ciała ludzkiego... 180. Określenia\nPołączenia żeber i mostka\n282\nPołączenia żeber z kręgosłupem ... 283. Połączenia żeber z most-\norientacyjne w przestrzeni ... 185\nkiem ... 285. Połączenia kości żebrowych z chrząstkami żebrowy-\nKOŚCI, STAWY I WIEZADLA\nmi ... 287. Połączenia chrząstek żebrowych ... 287. Połączenia po-\nszezególnych części mostka ... 287\n187\nKlatka piersiowa jako całość\n288\nBudowa ogólna kości — opracowali Michał Reicher i Wiesław Łasinski\n187\nOstatnie okresy rozwoju rodowego ... 288. Budowa ogólna ... 288\nUwagi filogenetyczne i ontogenetyczne\n187\nMechanika klatki piersiowej\n293\nCzynność kośei\n188\nStreszczenie— opracował Wiesław Lasinski\n296\nSkład kości\n189\nKształt kości\n190\nKości, stawy i więzadła głowy\nBudowa wewnętrzna kości\n191\nCzynnościowa architektonika kości\n194\nUwagi wstępne (funkcja czaszki) opracowali Michał Reicher i Wiesław Ła-\nWłaściwości fizyczne kości\n195\nsiński\n298\nWłaściwości biologiczne kości\n1",
      "summary": "- Gałka oczna zbudowana jest z trzech warstw: włóknistej (błona **włóknista**), __________ (błona naczyniowa) i siatkówki (siatkówka).\n- Warstwa włóknista (zewnętrzna) obejmuje rogówkę (cornea — załamuje **i** __________ światło) i twardówkę (sclera — ochrona).\n- Warstwa naczyniowa (środkowa) obejmuje tęczówkę (iris), ciało rzęskowe (corpus ciliare z mięśniem rzęskowym do akomodacji) **oraz** __________ (choroid).\n- Siatkówka (retina) dzieli się na część wzrokową (zawiera czopki dla widzenia barwnego i pręciki dla **widzenia** __________ oraz część ślepą (bez receptorów)."
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
      "academic_detail": "W uchu środkowym znajduje się powietrze (żadna z wymienionych — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17.\n\nUcho środkowe obejmuje: błonę bębenkową (granica z uchem zewnętrznym), jamę bębenkową (cavum tympani), trąbkę słuchową (tuba auditiva/Eustachiusa — łączy ucho środkowe z gardłem, wyrównuje ciśnienie) oraz kosteczki słuchowe: młoteczek (malleus — połączony z błoną bębenkową), kowadełko (incus), strzemiączko (stapes — połączone z okienkiem owalnym).\n\nUcho wewnętrzne składa się z błędnika kostnego (wypełnionego przychłonką — perilymph) i błędnika błoniastego (wypełnionego śródchłonką — endolymph). Przewód ślimaka (ductus cochlearis) zawiera narząd Cortiego (organum spirale) — właściwy receptor słuchu. Układ przedsionkowo-łonowy (kanały półkoliste, woreczek i łagiewka) zawiera receptory równowagi. Unerwienie: nerw przedsionkowo-ślimakowy (CN VIII).\n\nMechanizm słyszenia: fala dźwiękowa → błona bębenkowa → młoteczek → kowadełko → strzemiączko → okienko owalne → przychłonka → narząd Cortiego → impuls nerwowy → CN VIII.\n\nZe źródeł:\nNarządy pierwotne\n104\nWczesny okres rozwoju serca i naczyń krwionośnych\n109\nBłony płodowe\n111\nRozwój kształtów zarodka\n116\nCzynność narządów płodowych i ich losy\n120\nTkanki— opracowali Stanisław Hiller i Stanisław Zawistowski\n121\nRóżnicowanie (histogeneza) i podział tkanek\n121\nTkanka nabłonkowa\n122\nTkanki łączne\n129\nTkanka łączna właściwa ... 130. Tkanki łączne o\ncharakterzeswo-\nistym ... 136. Tkanki łączne szkieletowe ... 137\nTkanka mięśniowa\n142\nTkanka nerwowa i glej\n148\nTkanka nerwowa ... 148. Glej ... 156\nKrew i tkanka krwiotwórcza\n158\nPostać człowieka jako całość — opracowali Michał Reicher i Wiesław Lasiński\n162\nWzrastanie\n162\nProporcje ciała ludzkiego i ich zmiany w ciagu wzrastania\n166\nXVII\n\n--- STRONA 7 ---\n168\nKlatka piersiowa — opracowali Michat Reicher i Wiesław Lasinski\n23\nRóżnice konstytucjonalne budowy ciała\n171\nŽebra\n.273\nRóżnice płciowe\nRóżnice związane z wiekiem\nSymetria i asymetria ustroju\n175\n173\n177\nRozwój żeber i mostka\nMostek\n278\n281\nZmienność żeber i mostka\n282\nPlan budowy ciała ludzkiego\nUkłady narządów ... 178.Okolice ciała ludzkiego... 180. Określenia\nPołączenia żeber i mostka\n282\nPołączenia żeber z kręgosłupem ... 283. Połączenia żeber z most-\norientacyjne w przestrzeni ... 185\nkiem ... 285. Połączenia kości żebrowych z chrząstkami żebrowy-\nKOŚCI, STAWY I WIEZADLA\nmi ... 287. Połączenia chrząstek żebrowych ... 287. Połączenia po-\nszezególnych części mostka ... 287\n187\nKlatka piersiowa jako całość\n288\nBudowa ogólna kości — opracowali Michał Reicher i Wiesław Łasinski\n187\nOstatnie okresy rozwoju rodowego ... 288. Budowa ogólna ... 288\nUwagi filogenetyczne i ontogenetyczne\n187\nMechanika klatki piersiowej\n293\nCzynność kośei\n188\nStreszczenie— opracował Wiesław Lasinski\n296\nSkład kości\n189\nKształt kości\n190\nKości, stawy i więzadła głowy\nBudowa wewnętrzna kości\n191\nCzynnościowa architektonika kości\n194\nUwagi wstępne (funkcja czaszki) opracowali Michał Reicher i Wiesław Ła-\nWłaściwości fizyczne kości\n195\nsiński\n298\nWłaściwości biologiczne kości\n1",
      "summary": "- W uchu środkowym znajduje się powietrze (żadna **z** __________ — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17.\n- Ucho środkowe obejmuje: błonę bębenkową (granica z uchem zewnętrznym), jamę bębenkową (cavum tympani), trąbkę słuchową **tuba**( __________ — łączy ucho środkowe z gardłem, wyrównuje ciśnienie) oraz kosteczki słuchowe: młoteczek (malleus — połączony z błoną bębenkową), kowadełko (incus), strzemiączko (stapes — połączone z okienkiem owalnym).\n- Ucho wewnętrzne składa się z błędnika **kostnego** __________ przychłonką — perilymph) i błędnika błoniastego (wypełnionego śródchłonką — endolymph).\n- Przewód ślimaka **ductus**( __________ zawiera narząd Cortiego (organum spirale) — właściwy receptor słuchu."
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
      "academic_detail": "Kubki smakowe znajdują się w brodawkach (papillae) języka. Unerwienie czuciowe smaku: nerw twarzowy (CN VII) — przednie 2/3 języka, nerw językowo-gardłowy (CN IX) — tylna 1/3 języka, nerw błędny (CN X) — okolica nagłośni.\n\nNabłonek węchowy znajduje się w okolicy węchowej jamy nosowej. Nerw węchowy (CN I) — jego włókna (filae olfactoriae) przechodzą przez otwory blaszki sitowej (lamina cribrosa) kości sitowej, docierając do opuszki węchowej (bulbus olfactorius).\n\nZe źródeł:\n--- STRONA 1 ---\nADAM BOCHENEK\nMICHAL REICHER\nProfesor Uniwersytetu Jagiellonskiego\nProfesor Akademii Medycznej\nw Gdańsku\nw Krakowie\nANATOMIA CZŁOWIEKA\nANATOMIA CZŁOWIEKA\nTOM I\nPODRECZNIK DLA STUDENTÓW MEDYCYNY I LEKARZY\nANATOMIA OGÓLNA\nKOŚCI, STAWY I WIEZADLA\nWSPÓLAUTORZY\nMIEŚNIE\n1909—1928\nA. BOCHENEK, ST. CIECHANOWSKI, FR. KRZYSZTALOWICZ\nnapisał\nE. LOTH, K. MAJEWSKI, J.MARKOWSKI\nMICHAŁ REICHER\npod redakeją\nSTANISLAWA CIECHANOWSKIEGO\nwspółautorzy\nTOMÓW CZTERY\nT. BILIKIEWICZ. ST. HILLER. E. STOLYHWO\nwydane staraniem\nprzerobili i uzupełnili\nPOLSKIEJAKADEMII UMIEJETNOŚCI\nE. SIEÑKOWSKI, T. DZIERŻYKRAY-ROGALSKI, W. ŁASIÑSKI\nS. ZAWISTOWSKI, Z. ZEGARSKA\n1952—1965\nTOMÓW PIEĆ\nI. ABRAMOWICZ, T. BILIKIEWICZ, ST. HILLER, J. HURYNOWICZ,\nJ. IWASZKIEWICZ, WL. KUBIK, W. ŁASIÑSKI, FR. MIEDZIÑSKI,\npod redakcją\nO. NARKIEWICZ, M. REICHER, E. STOLYHWO, W. SYLWANOWICZ\nWIESŁAWA LASIÑSKIEGO\npod redakeją\nMICHAŁA REICHERA\nWYDANIE XI (VII)\nTOMÓW SIEDEM\nAutorem pierwszego wydania tego tomu był\nADAM BOCHENEK\nwydał\nWARSZAWA\nPA AC C\nWYDAWNICTWO LEKARSKIE PZWL\n\n--- STRONA 2 ---\nPRZEDMOWA DO WYDANIA XI (VII)\nW roku 1990 ukazało się X (VI) wydanie Anatomii człowieka\" Bochenka\ni Reichera w nakładzie 50 tysięcy egzemplarzy. Zniknęło ono z półek księgar-\nskich w bardzo krótkim czasie. Oddajemy więc do rak Czytelników nowe – XI\n(VII) wydanie – tego dzieła. Szybkie wyczerpanie nakładu podręcznika świad-\nczy o tym, jak bardzo potrzebny jest on zarówno studentom, jak i lekarzom. Jak\n-isre pi   a i e ii e et P ir\ncznika student musi (i może) opanować.\nAnatomia ma tę cechę, że jej szczegóły szybko ulatują z pamięci, a często są\nniespodziewanie potrzebne. Trzeba wtedy znowu sięgnąć po książkę.\nWydanie XI (VII) nie różni się od poprzedniego, również szata graficzna\npozostaje ta sama. Postęp wiedzy w zakresie anatomii nie jest aż tak znaczny, by\ntreść podręcznika wymagała pilnych zmian.\nJak mawiał prof. Reicher, anatomi trzeba się uczyć całe życie, bo często tego,\nczego uczyliśmy się parę lat temu, już nie pam",
      "summary": "- Kubki smakowe znajdują się **w** __________ (papillae) języka.\n- Unerwienie czuciowe smaku: nerw twarzowy (CN VII) — przednie 2/3 języka, **nerw** __________ (CN IX) — tylna 1/3 języka, nerw błędny (CN X) — okolica nagłośni.\n- __________ węchowy znajduje się w okolicy węchowej jamy nosowej.\n- Nerw węchowy (CN I) — jego włókna **filae**( __________ przechodzą przez otwory blaszki sitowej (lamina cribrosa) kości sitowej, docierając do opuszki węchowej (bulbus olfactorius)."
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
      "academic_detail": "Gałka oczna zawiera trzy przestrzenie: komorę przednią (camera anterior — między rogówką a tęczówką), komorę tylną (camera posterior — między tęczówką a soczewką) oraz komorę ciała szklistego (camera vitrea — za soczewką, wypełniona ciałem szklistym). Ciecz wodnista (humor aquosus) jest produkowana przez wyrostki ciała rzęskowego do komory tylnej, przepływa przez źrenicę do komory przedniej i jest odprowadzana przez kąt tęczówkowo-rogówkowy (kąt przesączania) do kanału Schlemma (sinus venosus sclerae), a stamtąd do żył nadtwardówkowych. Zaburzenie odpływu cieczy wodnistej prowadzi do wzrostu ciśnienia śródgałkowego i jaskry (glaucoma).\n\nAkomodacja to zdolność oka do ostrego widzenia przedmiotów znajdujących się w różnych odległościach. Odbywa się przez zmianę kształtu soczewki: skurcz mięśnia rzęskowego (unerwienie przywspółczulne — CN III, zwój rzęskowy) → rozluźnienie obwódki rzęskowej (włókna Zinna) → soczewka staje się bardziej wypukła (zwiększa moc optyczną) → oko nastawione do bliży. Rozkurcz mięśnia rzęskowego → napięcie obwódki rzęskowej → soczewka spłaszczona → oko nastawione do dali. Z wiekiem soczewka traci elastyczność — starczowzroczność (presbyopia). Rogówka ma największą siłę załamania (~43 dioptrie), soczewka ~15-20 dioptrii (w akomodacji). Całkowita moc optyczna oka ~60 D. Wady refrakcji: krótkowzroczność (myopia — obraz przed siatkówką, korygowane soczewką rozpraszającą −), dalekowzroczność (hyperopia — obraz za siatkówką, korygowane soczewką skupiającą +), astygmatyzm (nieprawidłowa krzywizna rogówki — korygowane soczewką cylindryczną).\n\nSiatkówka (retina) składa się z 10 warstw. Warstwa fotoreceptorów zawiera: czopki (~6 mln, widzenie barwne — 3 typy opsyn: S — niebieska 420 nm, M — zielona 530 nm, L — czerwona 560 nm; największe zagęszczenie w dołku środkowym — fovea centralis, miejsce najostrzejszego widzenia, same czopki, bez pręcików) i pręciki (~120 mln, widzenie skotopowe/nocne — zawierają rodopsynę, bardzo czułe na światło, nie rozróżniają barw). Fotoreceptory przekazują sygnał do komórek dwubiegunowych, te do komórek zwojowych, których aksony tworzą nerw wzrokowy (CN II). Droga wzrokowa: fotoreceptory → komórki dwubiegunowe → komórki zwojowe → n. wzrokowy → skrzyżowanie wzrokowe (chiasma opticum — krzyżują się włókna z przyśrodkowych połówek siatkówek, czyli z nosowych połówek pola widzenia) → pasmo wzrokowe (tractus opticus) → ciało kolankowate boczne (CGL) wzgórza → promienistość wzrokowa (radiatio optica — pętla Meyera dla górnych kwadrantów, włókna przez płat skroniowy) → kora wzrokowa w płacie potylicznym (pole 17 wg Brodmanna, okolica bruzdy ostrogowej).\n\nSześć mięśni zewnętrznych gałki ocznej: 4 mięśnie proste (górny, dolny, przyśrodkowy, boczny) i 2 mięśnie skośne (górny i dolny). Wszystkie przyczepiają się do twardówki, rozpoczynając się w pierścieniu ścięgnistym wspólnym (annulus tendineus communis Zinni) na szczycie oczodołu. Unerwienie: CN III (okoruchowy) — m. prosty górny, dolny, przyśrodkowy, m. skośny dolny i m. dźwigacz powieki górnej; CN IV (bloczkowy) — m. skośny górny (przechodzi przez bloczek — trochlea); CN VI (odwodzący) — m. prosty boczny. Wzór na zapamiętanie: LR₆SO₄AR₃ (Lateral Rectus — VI, Superior Oblique — IV, All Rest — III).\n\nZe źródeł:\nANATOMIA CZŁOWIEKA\nANATOMIA CZŁOWIEKA\nTOM I\nPODRECZNIK DLA STUDENTÓW MEDYCYNY I LEKARZY\nANATOMIA OGÓLNA\nKOŚCI, STAWY I WIEZADLA\nWSPÓLAUTORZY\nMIEŚNIE\n1909—1928\nA. BOCHENEK, ST. CIECHANOWSKI, FR. KRZYSZTALOWICZ\nnapisał\nE. LOTH, K. MAJEWSKI, J.MARKOWSKI\nMICHAŁ REICHER\npod redakeją\nSTANISLAWA CIECHANOWSKIEGO\nwspółautorzy\nTOMÓW CZTERY\nT. BILIKIEWICZ. ST. HILLER. E. STOLYHWO\nwydane staraniem\nprzerobili i uzupełnili\nPOLSKIEJAKADEMII UMIEJETNOŚCI\nE. SIEÑKOWSKI, T. DZIERŻYKRAY-ROGALSKI, W. ŁASIÑSKI\nS. ZAWISTOWSKI, Z. ZEGARSKA\n1952—1965\nTOMÓW PIEĆ\nI. ABRAMOWICZ, T. BILIKIEWICZ, ST. HILLER, J. HURYNOWICZ,\nJ. IWASZKIEWICZ, WL. KUBIK, W. ŁASIÑSKI, FR. MIEDZIÑSKI,\npod redakcją\nO. NARKIEWICZ, M. REICHER, E. STOLYHWO, W. SYLWANOWICZ\nWIESŁAWA LASIÑSKIEGO\npod redakeją\nMICHAŁA REICHERA\nWYDANIE XI (VII)\nTOMÓW SIEDEM\nAutorem pierwszego wydania tego tomu był\nADAM BOCHENEK\nwydał\nWARSZAWA\nPA AC C\nWYDAWNICTWO LEKARSKIE PZWL\n\n--- STRONA 2 ---\nPRZEDMOWA DO WYDANIA XI (VII)\nW roku 1990 ukazało się X (VI) wydanie Anatomii człowieka\" Bochenka\ni Reichera w nakładzie 50 tysięcy egzemplarzy. Zniknęło ono z półek księgar-\nskich w bardzo krótkim czasie. Oddajemy więc do rak Czytelników nowe – XI\n(VII) wydanie – tego dzieła. Szybkie wyczerpanie nakładu podręcznika świad-\nczy o tym, jak bardzo potrzebny jest on zarówno studentom, jak i lekarzom. Jak\n-isre pi   a i e ii e et P ir\ncznika student musi (i może) opanować.\nAnatomia ma tę cechę, że jej szczegóły szybko ulatują z pamięci, a często są\nniespodziewanie potrzebne. Trzeba wtedy znowu sięgnąć po książkę.\nWydanie XI (VII) nie różni się od poprzedniego, również szata graficzna\npozostaje ta sama. Postęp wiedzy w zakresie anatomii nie jest aż tak znaczny, by\ntreść podręcznika wymagała pilnych zmian.\nJak mawiał prof. Reicher, anatomi trzeba się uczyć całe życie, bo często tego,\nczego uczyliśmy się parę lat temu, już nie pamiętamy. Anatomia może być nauką\nsamodzielną, może też być służebną dla innych dziedzin medycyny. Może więc\nistnieć bez kliniki, jedna",
      "summary": "- Gałka oczna zawiera **trzy** __________ komorę przednią (camera anterior — między rogówką a tęczówką), komorę tylną (camera posterior — między tęczówką a soczewką) oraz komorę ciała szklistego (camera vitrea — za soczewką, wypełniona ciałem szklistym).\n- Ciecz wodnista (humor aquosus) jest produkowana przez wyrostki ciała rzęskowego do komory tylnej, przepływa przez źrenicę do komory przedniej i jest odprowadzana przez **kąt** __________ (kąt przesączania) do kanału Schlemma (sinus venosus sclerae), a stamtąd do żył nadtwardówkowych.\n- Zaburzenie odpływu cieczy wodnistej prowadzi do wzrostu **ciśnienia** __________ i jaskry (glaucoma).\n- Akomodacja to zdolność oka do ostrego widzenia przedmiotów znajdujących się w **różnych** __________"
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
      "academic_detail": "Błędnik kostny (labyrinthus osseus) wypełniony jest przychłonką (perilymph — skład podobny do płynu zewnątrzkomórkowego, dużo Na⁺). Wewnątrz niego znajduje się błędnik błoniasty (labyrinthus membranaceus) wypełniony śródchłonką (endolymph — skład podobny do płynu wewnątrzkomórkowego, dużo K⁺). Śródchłonka produkowana jest przez prążek naczyniowy (stria vascularis) w przewodzie ślimakowym. Błędnik kostny zawiera: ślimak (cochlea — 2,5 skrętu), przedsionek (vestibulum — z woreczkiem i łagiewką) oraz trzy kanały półkoliste (canales semicirculares — przedni, tylny i boczny, ustawione w 3 prostopadłych płaszczyznach).\n\nNarząd spiralny (narząd Cortiego) znajduje się na błonie podstawnej w przewodzie ślimakowym (ductus cochlearis — scala media). Zawiera komórki słuchowe (rzęsate): wewnętrzne (IHC — ~3500, właściwe receptory słuchu) i zewnętrzne (OHC — ~12000, wzmacniają sygnał, aktywne skurcze — wzmocnienie ślimakowe). Nad komórkami rzęsatymi znajduje się błona nakrywkowa (membrana tectoria). Drgania przychłonki → wychylenie błony podstawnej → zginanie stereocyliów komórek rzęsatych → otwarcie kanałów jonowych (mechanoelektryczna transdukcja) → depolaryzacja → uwolnienie neuroprzekaźnika (glutaminianu) → pobudzenie neuronów zwoju spiralnego → nerw ślimakowy (część CN VIII). Tonotopia: wysokie częstotliwości kodowane są u podstawy ślimaka, niskie na szczycie.\n\nReceptory równowagi znajdują się w woreczku (sacculus), łagiewce (utriculus) — plamki woreczka i łagiewki (macula sacculi et utriculi), reagujące na przyspieszenie liniowe i grawitację, pokryte błoną statolitową z kryształkami CaCO₃ (otolity/statokonia) — oraz w bańkach kanałów półkolistych (cristae ampullares), reagujących na przyspieszenie kątowe (obrót głowy). Komórki rzęsate przedsionka przekazują sygnały do zwoju przedsionkowego (ganglion vestibulare Scarpae) → nerw przedsionkowy (część CN VIII) → jądra przedsionkowe w pniu mózgu → móżdżek, jądra ruchowe gałkoruchowe (odruch przedsionkowo-oczny VOR), rdzeń kręgowy (droga przedsionkowo-rdzeniowa).\n\nZe źródeł:\nANATOMIA CZŁOWIEKA\nANATOMIA CZŁOWIEKA\nTOM I\nPODRECZNIK DLA STUDENTÓW MEDYCYNY I LEKARZY\nANATOMIA OGÓLNA\nKOŚCI, STAWY I WIEZADLA\nWSPÓLAUTORZY\nMIEŚNIE\n1909—1928\nA. BOCHENEK, ST. CIECHANOWSKI, FR. KRZYSZTALOWICZ\nnapisał\nE. LOTH, K. MAJEWSKI, J.MARKOWSKI\nMICHAŁ REICHER\npod redakeją\nSTANISLAWA CIECHANOWSKIEGO\nwspółautorzy\nTOMÓW CZTERY\nT. BILIKIEWICZ. ST. HILLER. E. STOLYHWO\nwydane staraniem\nprzerobili i uzupełnili\nPOLSKIEJAKADEMII UMIEJETNOŚCI\nE. SIEÑKOWSKI, T. DZIERŻYKRAY-ROGALSKI, W. ŁASIÑSKI\nS. ZAWISTOWSKI, Z. ZEGARSKA\n1952—1965\nTOMÓW PIEĆ\nI. ABRAMOWICZ, T. BILIKIEWICZ, ST. HILLER, J. HURYNOWICZ,\nJ. IWASZKIEWICZ, WL. KUBIK, W. ŁASIÑSKI, FR. MIEDZIÑSKI,\npod redakcją\nO. NARKIEWICZ, M. REICHER, E. STOLYHWO, W. SYLWANOWICZ\nWIESŁAWA LASIÑSKIEGO\npod redakeją\nMICHAŁA REICHERA\nWYDANIE XI (VII)\nTOMÓW SIEDEM\nAutorem pierwszego wydania tego tomu był\nADAM BOCHENEK\nwydał\nWARSZAWA\nPA AC C\nWYDAWNICTWO LEKARSKIE PZWL\n\n--- STRONA 2 ---\nPRZEDMOWA DO WYDANIA XI (VII)\nW roku 1990 ukazało się X (VI) wydanie Anatomii człowieka\" Bochenka\ni Reichera w nakładzie 50 tysięcy egzemplarzy. Zniknęło ono z półek księgar-\nskich w bardzo krótkim czasie. Oddajemy więc do rak Czytelników nowe – XI\n(VII) wydanie – tego dzieła. Szybkie wyczerpanie nakładu podręcznika świad-\nczy o tym, jak bardzo potrzebny jest on zarówno studentom, jak i lekarzom. Jak\n-isre pi   a i e ii e et P ir\ncznika student musi (i może) opanować.\nAnatomia ma tę cechę, że jej szczegóły szybko ulatują z pamięci, a często są\nniespodziewanie potrzebne. Trzeba wtedy znowu sięgnąć po książkę.\nWydanie XI (VII) nie różni się od poprzedniego, również szata graficzna\npozostaje ta sama. Postęp wiedzy w zakresie anatomii nie jest aż tak znaczny, by\ntreść podręcznika wymagała pilnych zmian.\nJak mawiał prof. Reicher, anatomi trzeba się uczyć całe życie, bo często tego,\nczego uczyliśmy się parę lat temu, już nie pamiętamy. Anatomia może być nauką\nsamodzielną, może też być służebną dla innych dziedzin medycyny. Może więc\nistnieć bez kliniki, jedna",
      "summary": "- Błędnik kostny (labyrinthus osseus) wypełniony jest przychłonką (perilymph — skład podobny do **płynu** __________ dużo Na⁺).\n- Wewnątrz niego znajduje się błędnik błoniasty (labyrinthus membranaceus) wypełniony śródchłonką (endolymph — skład podobny do **płynu** __________ dużo K⁺).\n- __________ produkowana jest przez prążek naczyniowy (stria vascularis) w przewodzie ślimakowym.\n- Błędnik kostny zawiera: ślimak (cochlea — 2,5 skrętu), przedsionek (vestibulum — z woreczkiem i łagiewką) oraz trzy kanały półkoliste **canales**( __________ — przedni, tylny i boczny, ustawione w 3 prostopadłych płaszczyznach)."
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
      "academic_detail": "Skóra (integumentum commune) jest największym narządem ciała (~1,5-2 m², ~15% masy ciała). Składa się z trzech warstw: (1) Naskórek (epidermis) — nabłonek wielowarstwowy płaski rogowaciejący, unaczyniony wyłącznie przez dyfuzję ze skóry właściwej. Składa się z 5 warstw (od głębokiej): warstwa podstawna (stratum basale — komórki macierzyste, melanocyty produkujące melaninę), warstwa kolczysta (stratum spinosum — desmosomy łączą komórki), warstwa ziarnista (stratum granulosum — ziarna keratohialiny), warstwa jasna (stratum lucidum — tylko w grubej skórze dłoni i podeszew), warstwa rogowa (stratum corneum — martwe keratynocyty, złuszczają się). (2) Skóra właściwa (dermis/corium) — tkanka łączna właściwa, zawiera włókna kolagenowe i elastyczne, naczynia krwionośne, zakończenia nerwowe, gruczoły. Dzieli się na warstwę brodawkowatą (stratum papillare — luźna, bogata w naczynia) i warstwę siateczkową (stratum reticulare — zbita, pęczki kolagenu). (3) Tkanka podskórna (hypodermis/tela subcutanea) — tkanka tłuszczowa, izolacja termiczna i magazynowanie energii.\n\nGruczoły potowe ekrynowe — merokrynowe (wydzielające bez utraty cytoplazmy), rozmieszczone na całym ciele (najgęściej na dłoniach, podeszwach i czole), wydzielają wodnisty pot (regulacja temperatury, unerwienie współczulne cholinergiczne — wyjątek!). Gruczoły potowe apokrynowe — uchodzą do mieszków włosowych (pachy, pachwiny, okolice płciowe), wydzielają gęstszą substancję rozkładaną przez bakterie (zapach ciała), aktywowane w okresie dojrzewania. Gruczoły łojowe (glandulae sebaceae) — holokrynowe, uchodzą do mieszków włosowych, wydzielają sebum (łój skórny), który natłuszcza skórę i włosy. Gruczoły mlekowe (glandulae mammariae) — zmodyfikowane gruczoły potowe apokrynowe. Włosy składają się z łodygi (scapus), korzenia (radix) w mieszku włosowym i cebulki z brodawką włosa. Paznokcie — zrogowaciałe płytki na grzbiecie paliczków dalszych, wyrastają z macierzy paznokcia.\n\nZe źródeł:\nPOWŁOKA WSPÓLNA. NARZADY ZMYSŁÓW\nilustracyjna dzieła znajduje się, jak sądzę, na właściwym poziomie.\nSerdecznie dziękuję również Kierownikowi Zakładu Radiologii, profe-\nsorowiKsaweremuRowińskiemuijego współpracownikom za\nwykonanie zdjęć rentgenowskich. Prawdziwą wdzięczność winien je-\nstem mojemu przyjacielowi i koledze profesorowi Witoldowi Syl-\nwanowiczowi za żmudne i sumienneprzeczytanie manuskryptu;\nzawdzięczam Mu niejedną cenną uwagę. Wreszcie pragnę podziękować\nwydawcy, Państwowemu Zakładowi Wydawnictw Lekarskich, za jego\npracę przy ostatecznym przygotowaniu książki do druku; w każdym\ndziale tej instytucji, czy naukowym, czy technicznym, spotykałem się\nzawsze tylko z daleko idącą pomocą, zrozumieniem i uwzględnieniem\nmoich wymagań i potrzeb.\nKilka lat ciężkiej, żmudnej i trudnej pracy książce tej poświęciłem;\nbędę się czuł jednak hojnie wynagrodzonym, jeżeli spotka się ona, po-\ndobnie jak jej poprzednie wydania, z tą samą poczytnością, zrozumie-\nniem i sympatią.\nMichałReicher\nGdańsk, w maju 1951 r.\n\n--- STRONA 6 ---\nSPIS TREŚCI\nANATOMIA OGÓLNA\nWstęp — opracowali Michał Reicher i Wiesław Łasiński\n1\nAnatomia, jej przedmiot, działy i stosunek do nauk pokrewnych\n1\nWażniejsze podręczniki i dzieła anatomiczne\n4\nRys historii anatomii— opracowali T. Bilikiewicz i Eugeniusz Sieńkowski\n10\nUwagi wstepne\n10\nOkres pierwszy historii anatomii, do śmierci Galena (r. 201 n.e.)\n11\nOkres drugi historii anatomii, od śmierci Galena do wystapienia Wesaliusza\n(r. 201—1543)\n15\nOkres trzeci historii anatomii, od wystąpienia Wesaliusza po ezasy najnowsze\n17\nRys historii anatomii w Polsce\n22\nII wojna światowa ... 43. Czasy najnowsze ... 45\nmie e          -\ngenia Stołyhwo i Tadeusz Dzierżykray-Rogalski\n56\nCzłowiek jako forma zoologiczna\n56\nPochodzenie człowieka\n58\nKomórka — opracowali Stanisław Hiller i Stanisław Zawistowski\n65\nBudowa komórki\n65\nKształt i wielkość komórki ... 65. Cytoplazma ... 67. Błony komórko-\nwe ... 69. Organelle komórkowe ... 73. Jądro komórkowe ... 82\nCzynność komó",
      "summary": "- **Skóra** __________ commune) jest największym narządem ciała (~1,5-2 m², ~15% masy ciała).\n- Składa się z trzech warstw: (1) Naskórek (epidermis) — **nabłonek** __________ płaski rogowaciejący, unaczyniony wyłącznie przez dyfuzję ze skóry właściwej.\n- Składa się z 5 warstw (od głębokiej): warstwa podstawna (stratum basale — komórki macierzyste, melanocyty produkujące melaninę), warstwa kolczysta (stratum spinosum — desmosomy łączą komórki), warstwa ziarnista (stratum granulosum — **ziarna** __________ warstwa jasna (stratum lucidum — tylko w grubej skórze dłoni i podeszew), warstwa rogowa (stratum corneum — martwe keratynocyty, złuszczają się).\n- (2) Skóra **właściwa** __________ — tkanka łączna właściwa, zawiera włókna kolagenowe i elastyczne, naczynia krwionośne, zakończenia nerwowe, gruczoły."
    }
  ]
};
