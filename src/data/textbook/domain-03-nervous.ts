import type { TextbookDomain } from "@/types/textbook";

export const nervous: TextbookDomain = {
  id: "nervous",
  title: "Układ Nerwowy",
  shortTitle: "Nerwowy",
  icon: "🧠",
  sections: [
    {
      id: "wprowadzenie-nerwowy",
      title: "Wprowadzenie do układu nerwowego",
      content: [
        {
          type: "paragraph",
          text: "Ze światła cewy nerwowej powstają komory mózgu (pytanie nr 3). Cewa nerwowa jest zawiązkiem ośrodkowego układu nerwowego, a jej światło przekształca się w układ komorowy mózgu i kanał środkowy rdzenia kręgowego.",
        },
        {
          type: "paragraph",
          text: "Korowy ośrodek czucia leży w kresomózgowiu (telencephalon) — pytanie nr 2. Kora mózgowa (kresomózgowie) zawiera ośrodki czuciowe w płacie ciemieniowym.",
        },
        {
          type: "paragraph",
          text: "Układ nerwowy dzieli się na ośrodkowy układ nerwowy (mózgowie i rdzeń kręgowy) oraz obwodowy układ nerwowy (nerwy czaszkowe i rdzeniowe).",
        },
        {
          type: "heading",
          level: 3,
          text: "Podział mózgowia — anatomiczny vs kliniczny",
        },
        {
          type: "paragraph",
          text: "Anatomicznie mózgowie dzieli się na: kresomózgowie (telencephalon — mózg), międzymózgowie (diencephalon), śródmózgowie (mesencephalon), tyłomózgowie wtórne (metencephalon — most i móżdżek) oraz rdzeniomózgowie (myelencephalon — rdzeń przedłużony).",
        },
        {
          type: "paragraph",
          text: "Klinicznie/fizjologicznie wyróżnia się: półkule mózgu, móżdżek oraz pień mózgu. Pień mózgu obejmuje: śródmózgowie, most, rdzeń przedłużony oraz jądra nerwów czaszkowych.",
        },
      ],
      recallQuestions: [
        {
          id: "ner-1",
          question: "Ze światła cewy nerwowej powstają: nerwy czaszkowe, komory mózgu, nerwy rdzeniowe czy korowe ośrodki czucia?",
          answer: "Komory mózgu.",
          examRef: "Q3",
        },
        {
          id: "ner-2",
          question: "Gdzie leży korowy ośrodek czucia?",
          answer: "W kresomózgowiu (telencephalon) — płat ciemieniowy kory mózgowej.",
          examRef: "Q2",
        },
        {
          id: "ner-13",
          question: "Wymień anatomiczny podział mózgowia (5 części).",
          answer: "Kresomózgowie, międzymózgowie, śródmózgowie, tyłomózgowie wtórne (most + móżdżek), rdzeniomózgowie (rdzeń przedłużony).",
          examRef: "",
        },
        {
          id: "ner-14",
          question: "Jakie struktury wchodzą w skład pnia mózgu w podziale klinicznym?",
          answer: "Śródmózgowie, most, rdzeń przedłużony oraz jądra nerwów czaszkowych.",
          examRef: "",
        },
      ],
    },
    {
      id: "istota-szara-biala",
      title: "Istota szara i istota biała",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Budowa tkanki nerwowej",
        },
        {
          type: "paragraph",
          text: "Tkanka nerwowa składa się z komórek nerwowych (neuronów) i komórek wspomagających glejowych. Same neurony tworzą sieć bardzo specyficznych rozgałęzień. Tkanka nerwowa występuje w postaci istoty szarej i istoty białej.",
        },
        {
          type: "heading",
          level: 3,
          text: "Istota szara — ośrodki nerwowe",
        },
        {
          type: "paragraph",
          text: "Komórka nerwowa jako całość jest koloru szarego. Istota szara to ciała komórek nerwowych (neuronów) z jądrami i organellami komórkowymi oraz z krótkimi dendrytami. Tam gdzie jest istota szara, tam są skupiska tworzące tzw. ośrodki nerwowe — mają one zdolność przetwarzania danych i bodźców bioelektrycznych.",
        },
        {
          type: "paragraph",
          text: "W mózgowiu istota szara może występować na powierzchni (kora — skupiska szare, ośrodki korowe związane ze świadomością) oraz wewnątrz (ośrodki podkorowe).",
        },
        {
          type: "heading",
          level: 3,
          text: "Istota biała — drogi nerwowe",
        },
        {
          type: "paragraph",
          text: "Kolor biały pochodzi od osłonki mielinowej (ciało tłuszczowe koloru białego), która otacza aksony (neuryty) — wypustki neuronów. Istota biała tworzy drogi nerwowe, które łączą ośrodki nerwowe.",
        },
        {
          type: "heading",
          level: 3,
          text: "Miejscowa lokalizacja ośrodków korowych",
        },
        {
          type: "paragraph",
          text: "Kora mózgowa zawiera wyspecjalizowane ośrodki w poszczególnych płatach. Ośrodek ruchu leży w płacie czołowym, czucia w płacie ciemieniowym, smaku w płacie ciemieniowym, słuchu w płacie skroniowym, wzroku w płacie potylicznym, a węchu w płacie skroniowym. Wyższe funkcje: pamięć w skroniowym, intelekt w ciemieniowym i czołowym, mowa w czołowym i skroniowym, emocje/układ limbiczny głównie w czołowym.",
        },
        {
          type: "table",
          headers: ["Funkcja", "Płat mózgu"],
          rows: [
            ["Ruch", "Czołowy"],
            ["Czucie", "Ciemieniowy"],
            ["Smak", "Ciemieniowy"],
            ["Słuch", "Skroniowy"],
            ["Wzrok", "Potyliczny"],
            ["Węch", "Skroniowy"],
            ["Pamięć", "Skroniowy"],
            ["Intelekt", "Ciemieniowy + czołowy"],
            ["Mowa", "Czołowy + skroniowy"],
            ["Emocje / układ limbiczny", "Czołowy"],
          ],
        },
        {
          type: "table",
          headers: ["Rodzaj", "Budowa", "Funkcja"],
          rows: [
            ["Istota szara", "Ciała komórek nerwowych, jądra, dendryty", "Ośrodki nerwowe — przetwarzanie informacji"],
            ["Istota biała", "Aksony (wypustki) otoczone mieliną", "Drogi nerwowe — łączenie ośrodków"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "ner-7",
          question: "Z czego zbudowana jest istota szara?",
          answer: "Z ciał komórek nerwowych (neuronów), jąder, organelli komórkowych i krótkich dendrytów.",
          examRef: "Wykład",
        },
        {
          id: "ner-8",
          question: "Czym jest istota biała i skąd bierze się jej kolor?",
          answer: "To wypustki neuronów (aksony) otoczone osłonką mielinową — tłuszczową, stąd biały kolor.",
          examRef: "Wykład",
        },
        {
          id: "ner-9",
          question: "Gdzie w mózgowiu występuje istota szara?",
          answer: "Na powierzchni (kora — ośrodki korowe) i wewnątrz (ośrodki podkorowe).",
          examRef: "Wykład",
        },
        {
          id: "ner-15",
          question: "W którym płacie znajduje się ośrodek wzroku?",
          answer: "W płacie potylicznym.",
          examRef: "",
        },
        {
          id: "ner-16",
          question: "W których płatach zlokalizowany jest ośrodek mowy?",
          answer: "W płacie czołowym i skroniowym.",
          examRef: "",
        },
      ],
    },
    {
      id: "diencephalon-zbiorcza",
      title: "Zwoje podstawy (jądra podstawne) i międzymózgowie",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Zwoje podstawy — układ pozapiramidowy",
        },
        {
          type: "paragraph",
          text: "Do zwojów podstawy (jąder podstawnych) układu pozapiramidowego należą m.in. jądro ogoniaste (nucleus caudatus) i jądro czerwienne (nucleus ruber). Układ pozapiramidowy odpowiada za regulację napięcia mięśniowego oraz ruchy automatyczne.",
        },
        {
          type: "heading",
          level: 3,
          text: "Międzymózgowie (diencephalon)",
        },
        {
          type: "paragraph",
          text: "Międzymózgowie składa się z: wzgórza (thalamus), podwzgórza (hypothalamus), nadwzgórza (epithalamus). Podwzgórze łączy się z przednim płatem przysadki poprzez naczynia wrotne i aksony. Nadwzgórze zawiera szyszynkę (corpus pineale). W obrębie międzymózgowia znajduje się III komora mózgu.",
        },
      ],
      recallQuestions: [
        {
          id: "ner-17",
          question: "Do czego służy układ pozapiramidowy i jakie jądra do niego należą?",
          answer: "Regulacja napięcia mięśniowego i ruchy automatyczne. Jądro ogoniaste i jądro czerwienne (nucleus ruber).",
          examRef: "",
        },
        {
          id: "ner-18",
          question: "Jakie części wchodzą w skład międzymózgowia?",
          answer: "Wzgórze (thalamus), podwzgórze (hypothalamus), nadwzgórze (epithalamus z szyszynką).",
          examRef: "",
        },
        {
          id: "ner-19",
          question: "Z czym łączy się podwzgórze i jaka komora znajduje się w międzymózgowiu?",
          answer: "Łączy się z przednim płatem przysadki przez naczynia wrotne i aksony. W międzymózgowiu znajduje się III komora.",
          examRef: "",
        },
      ],
    },
    {
      id: "piemn-mozgu-mozdzek",
      title: "Pień mózgu i móżdżek",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Śródmózgowie (mesencephalon)",
        },
        {
          type: "paragraph",
          text: "W śródmózgowiu znajduje się wodociąg mózgu (aqueductus cerebri), który łączy III i IV komorę. Śródmózgowie zawiera wzgórki górne (colliculi superiores — droga wzrokowa), wzgórki dolne (colliculi inferiores — droga słuchowa), jądro czerwienne, istotę czarną (substantia nigra) oraz jądra nerwów czaszkowych III (okoruchowy) i IV (bloczkowy).",
        },
        {
          type: "heading",
          level: 3,
          text: "Most (pons) i rdzeń przedłużony (medulla oblongata)",
        },
        {
          type: "paragraph",
          text: "W moście znajdują się jądra nerwów czaszkowych V (trójdzielny), VI (odwodzący), VII (twarzowy), VIII (przedsionkowo-ślimakowy). W rdzeniu przedłużonym znajdują się jądra nerwów: IX (językowo-gardłowy), X (błędny), XI (dodatkowy), XII (podjęzykowy).",
        },
        {
          type: "paragraph",
          text: "W rdzeniu przedłużonym mieszczą się ośrodki czynności życiowych: oddechowy, krążenia i sercowy. Dno IV komory ograniczone jest przez most i rdzeń przedłużony, a dach tworzy móżdżek.",
        },
        {
          type: "heading",
          level: 3,
          text: "Móżdżek (cerebellum)",
        },
        {
          type: "paragraph",
          text: "Móżdżek zbudowany jest z kory (istota szara) na zewnątrz i ciała rdzeniastego (istota biała) z jądrami móżdżku wewnątrz. Łączy się z resztą mózgowia poprzez konary (peduncles): górny (do śródmózgowia), środkowy (do mostu) i dolny (do rdzenia przedłużonego). Funkcje móżdżku: stabilizacja, regulacja napięcia mięśniowego, koordynacja ruchowa.",
        },
      ],
      recallQuestions: [
        {
          id: "ner-20",
          question: "Jakie jądra nerwów czaszkowych znajdują się w śródmózgowiu?",
          answer: "III (okoruchowy) i IV (bloczkowy).",
          examRef: "",
        },
        {
          id: "ner-21",
          question: "Które nerwy czaszkowe mają jądra w rdzeniu przedłużonym?",
          answer: "IX (językowo-gardłowy), X (błędny), XI (dodatkowy), XII (podjęzykowy).",
          examRef: "",
        },
        {
          id: "ner-22",
          question: "Jakie są funkcje móżdżku?",
          answer: "Stabilizacja, regulacja napięcia mięśniowego, koordynacja ruchowa.",
          examRef: "",
        },
        {
          id: "ner-23",
          question: "Jakie ośrodki czynności życiowych znajdują się w rdzeniu przedłużonym?",
          answer: "Ośrodek oddechowy, krążenia i sercowy.",
          examRef: "",
        },
      ],
    },
    {
      id: "rdzen-kregowy-opony",
      title: "Rdzeń kręgowy i opony",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Topografia rdzenia kręgowego",
        },
        {
          type: "paragraph",
          text: "Rdzeń kręgowy ma zgrubienia: szyjne (intumescentia cervicalis — dla splotu ramiennego) i lędźwiowe (intumescentia lumbalis — dla splotu lędźwiowego). Kończy się na poziomie L1/L2 jako nić końcowa (filum terminale) przyczepiająca się do kości guzicznej.",
        },
        {
          type: "heading",
          level: 3,
          text: "Przekrój poprzeczny rdzenia",
        },
        {
          type: "paragraph",
          text: "W przekroju poprzecznym rdzenia kręgowego istota biała tworzy sznury (funiculi): przednie (funiculus anterior — włókna ruchowe), tylne (funiculus posterior — włókna czuciowe), boczne (funiculus lateralis — włókna autonomiczne/współczulne). Istota szara tworzy kształt litery H (motyl): rogi przednie (cornu anterius — włókna ruchowe), rogi tylne (cornu posterius — włókna czuciowe), rogi boczne (cornu laterale — włókna współczulne).",
        },
        {
          type: "heading",
          level: 3,
          text: "Opony mózgowo-rdzeniowe",
        },
        {
          type: "paragraph",
          text: "Opony mózgowo-rdzeniowe dzielą się na trzy warstwy: opona twarda (dura mater — zewnętrzna), pajęczynówka (arachnoidea — środkowa, z ziarnistościami pajęczynówki uchodzącymi do zatoki strzałkowej górnej), opona miękka (pia mater — wewnętrzna, przylega bezpośrednio do mózgu).",
        },
        {
          type: "heading",
          level: 3,
          text: "Płyn mózgowo-rdzeniowy i komory",
        },
        {
          type: "paragraph",
          text: "Płyn mózgowo-rdzeniowy (CSF) krąży w przestrzeni podpajęczynówkowej (spatium subarachnoideum). Jest produkowany przez splot naczyniówkowy (plexus choroideus) w komorach mózgu.",
        },
        {
          type: "table",
          headers: ["Struktura rdzenia", "Funkcja"],
          rows: [
            ["Sznury przednie (istota biała)", "Włókna ruchowe"],
            ["Sznury tylne (istota biała)", "Włókna czuciowe"],
            ["Sznury boczne (istota biała)", "Włókna autonomiczne/współczulne"],
            ["Rogi przednie (istota szara)", "Włókna ruchowe / ośrodkowe"],
            ["Rogi tylne (istota szara)", "Włókna czuciowe"],
            ["Rogi boczne (istota szara)", "Włókna współczulne"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "ner-24",
          question: "Na jakim poziomie kończy się rdzeń kręgowy i do czego przyczepia się nić końcowa?",
          answer: "Na poziomie L1/L2, przyczepia się do kości guzicznej.",
          examRef: "",
        },
        {
          id: "ner-25",
          question: "Jakie funkcje pełnią sznury przednie, tylne i boczne w rdzeniu kręgowym?",
          answer: "Przednie — ruchowe, tylne — czuciowe, boczne — autonomiczne/współczulne.",
          examRef: "",
        },
        {
          id: "ner-26",
          question: "Wymień trzy warstwy opon mózgowo-rdzeniowych od zewnątrz.",
          answer: "Opona twarda, pajęczynówka (z ziarnistościami), opona miękka.",
          examRef: "",
        },
        {
          id: "ner-27",
          question: "Gdzie krąży płyn mózgowo-rdzeniowy i gdzie jest produkowany?",
          answer: "Krąży w przestrzeni podpajęczynówkowej, produkowany przez splot naczyniówkowy.",
          examRef: "",
        },
      ],
    },
    {
      id: "drogi-nerwowe-klasyfikacja",
      title: "Drogi nerwowe — klasyfikacja",
      content: [
        {
          type: "paragraph",
          text: "Istota biała tworzy drogi nerwowe, które łączą ośrodki nerwowe. Na przekroju poprzecznym mózgowia można wyróżnić trzy główne rodzaje dróg nerwowych.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi spoidłowe (commissural tracts)",
        },
        {
          type: "paragraph",
          text: "Łączą prawą półkulę mózgu z lewą. Największym spoidłem jest spoidło wielkie — ciało modzelowate (corpus callosum). Dzięki tym drogom dwuczęściowość mózgu jest całością funkcjonalną.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi kojarzeniowe (association tracts)",
        },
        {
          type: "paragraph",
          text: "Biegną od płata przedniego do płata tylnego w obrębie tej samej półkuli. Nigdy nie przechodzą na drugą stronę — tym różnią się od dróg spoidłowych. Odpowiadają za 'inteligencję' — kojarzenie informacji w obrębie jednej półkuli.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi rzutowe (projection tracts) — ruchowe i czuciowe",
        },
        {
          type: "paragraph",
          text: "Biegną od ośrodków korowych na obwód (do mięśni) i odwrotnie — z receptorów skórnych do kory mózgowej. Dzielą się na:",
        },
        {
          type: "list",
          items: [
            "Drogi zstępujące (ruchowe) — np. droga korowo-rdzeniowa — impulsy z kory ruchowej do motoneuronów rdzenia kręgowego.",
            "Drogi wstępujące (czuciowe) — impulsy z receptorów na obwodzie (skóra, stawy, mięśnie) do ośrodków czuciowych w korze mózgowej.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Droga piramidowa",
        },
        {
          type: "paragraph",
          text: "Droga piramidowa jest układem 2-neuronowym dla ruchów dowolnych. Obejmuje drogę korowo-jądrową (tractus corticonuclearis — do jąder nerwów czaszkowych III-XII) i drogę korowo-rdzeniową (tractus corticospinalis — do rogów przednich rdzenia).",
        },
        {
          type: "heading",
          level: 3,
          text: "Droga pozapiramidowa",
        },
        {
          type: "paragraph",
          text: "Układ pozapiramidowy jest wieloneuronowy, reguluje napięcie mięśniowe i ruchy automatyczne. Regulowany przez prążkowie (striatum), jądro czerwienne i ciała oliwkowe.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi czuciowe — 3-neuronowe",
        },
        {
          type: "paragraph",
          text: "Drogi czuciowe są układem 3-neuronowym. Dzielą się na:",
        },
        {
          type: "list",
          items: [
            "Drogi czucia powierzchownego: receptor → róg tylny rdzenia → wzgórze → płat ciemieniowy.",
            "Drogi czucia głębokiego: receptor → jądra sznurów tylnych rdzenia → wzgórze → płat ciemieniowy.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi autonomiczne",
        },
        {
          type: "paragraph",
          text: "Drogi autonomiczne (współczulne) są 2-neuronowe (efektorowe). Miejsca wstrząsorodne (szokogenne) to: splot słoneczny (solar plexus) i kłębek szyjny (glomus caroticum).",
        },
        {
          type: "table",
          headers: ["Rodzaj drogi", "Funkcja", "Charakterystyka"],
          rows: [
            ["Spoidłowe", "Łączą prawą i lewą półkulę", "Np. ciało modzelowate"],
            ["Kojarzeniowe", "Łączą różne płaty tej samej półkuli", "Nigdy nie przechodzą na drugą stronę"],
            ["Rzutowe (zstępujące)", "Ruchowe — kora → mięśnie", "Np. droga korowo-rdzeniowa"],
            ["Rzutowe (wstępujące)", "Czuciowe — receptory → kora", "3-neuronowe (powierzchowne i głębokie)"],
            ["Piramidowa", "Ruchy dowolne (2-neuronowa)", "Korowo-jądrowa i korowo-rdzeniowa"],
            ["Pozapiramidowa", "Napięcie mięśniowe, automatyzm", "Wieloneuronowa (prążkowie, jądro czerwienne)"],
            ["Autonomiczna", "Część współczulna", "2-neuronowa, miejsca wstrząsorodne"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Droga korowo-rdzeniowa",
        },
        {
          type: "paragraph",
          text: "Impulsy pobudzające mięśnie do wyprostowania stopy biegną drogą korowo-rdzeniową (tractus corticospinalis) — pytanie nr 14. Jest to główna droga ruchowa (piramidowa) łącząca korę mózgową z motoneuronami rdzenia kręgowego.",
        },
      ],
      recallQuestions: [
        {
          id: "ner-10",
          question: "Wymień trzy rodzaje dróg nerwowych w istocie białej.",
          answer: "Spoidłowe (łączą półkule), kojarzeniowe (łączą płaty tej samej półkuli), rzutowe (łączą korę z obwodem — wstępujące czuciowe i zstępujące ruchowe).",
          examRef: "Wykład",
        },
        {
          id: "ner-11",
          question: "Czym różnią się drogi kojarzeniowe od spoidłowych?",
          answer: "Drogi kojarzeniowe nigdy nie przechodzą na drugą stronę (łączą płaty w obrębie jednej półkuli), podczas gdy spoidłowe łączą prawą i lewą półkulę.",
          examRef: "Wykład",
        },
        {
          id: "ner-12",
          question: "Jaka jest największa droga spoidłowa w mózgu?",
          answer: "Spoidło wielkie — ciało modzelowate (corpus callosum).",
          examRef: "Wykład",
        },
        {
          id: "ner-4",
          question: "Którą drogą biegną impulsy pobudzające mięśnie do wyprostowania stopy?",
          answer: "Drogą korowo-rdzeniową (tractus corticospinalis).",
          examRef: "Q14",
        },
        {
          id: "ner-28",
          question: "Jakie są dwa rodzaje dróg czuciowych (3-neuronowych) i jaka jest ich droga?",
          answer: "Powierzchowne: receptor → róg tylny → wzgórze → płat ciemieniowy. Głębokie: receptor → jądra sznurów tylnych → wzgórze → płat ciemieniowy.",
          examRef: "",
        },
        {
          id: "ner-29",
          question: "Ile neuronów tworzy drogę piramidową (ruchy dowolne)?",
          answer: "2 neurony. Droga korowo-jądrowa (do CN III-XII) i korowo-rdzeniowa (do rogów przednich).",
          examRef: "",
        },
        {
          id: "ner-30",
          question: "Wymień dwa miejsca wstrząsorodne (szokogenne) w układzie autonomicznym.",
          answer: "Splot słoneczny (solar plexus) i kłębek szyjny (glomus caroticum).",
          examRef: "",
        },
      ],
    },
    {
      id: "nerwy-czaszkowe-sploty",
      title: "Nerwy czaszkowe i sploty nerwów rdzeniowych",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Nerwy czaszkowe czuciowe",
        },
        {
          type: "paragraph",
          text: "Czysto czuciowe nerwy czaszkowe to: I (węchowy), II (wzrokowy) i VIII (przedsionkowo-ślimakowy/słuchowy).",
        },
        {
          type: "heading",
          level: 3,
          text: "Nerw trójdzielny (V)",
        },
        {
          type: "paragraph",
          text: "Nerw trójdzielny (V) dzieli się na trzy gałęzie: oczną (V1), szczękową (V2) i żuchwową (V3). Nerw żuchwowy (V3) unerwia czuciowo dolną część twarzy, w tym dolne zęby, ale dodatkowo przenosi włókna ruchowe do mięśni żwaczowych (żucia). Jeżeli bolą dolne siekacze, informacja ta dociera do korowego ośrodka czucia włóknami nerwu żuchwowego (V3 — gałąź nerwu trójdzielnego) — pytanie nr 15.",
        },
        {
          type: "heading",
          level: 3,
          text: "Nerw dodatkowy (XI) i podjęzykowy (XII)",
        },
        {
          type: "paragraph",
          text: "Nerw dodatkowy (XI) unerwia mięsień mostkowo-obojczykowo-sutkowy (SCM) i mięsień czworoboczny (trapezius). Nerw podjęzykowy (XII) unerwia mięśnie języka.",
        },
        {
          type: "heading",
          level: 3,
          text: "Nerwy rdzeniowe — 31 par",
        },
        {
          type: "paragraph",
          text: "Nerwy rdzeniowe wychodzą parami: 8 szyjnych, 12 piersiowych, 5 lędźwiowych, 5 krzyżowych i 1 guziczny. Korzeń grzbietowy (dorsal root) jest czuciowy — zaczyna się w zwojach czuciowych (ganglion spinale). Korzeń brzuszny (ventral root) jest ruchowy + współczulny — komórki w rogach przednich i bocznych rdzenia.",
        },
        {
          type: "heading",
          level: 3,
          text: "Splot szyjny (C1-C4)",
        },
        {
          type: "paragraph",
          text: "Splot szyjny tworzą gałęzie przednie nerwów C1-C4. Unerwia głębokie mięśnie szyi, mięśnie podgnykowe oraz przeponę przez nerw przeponowy (n. phrenicus).",
        },
        {
          type: "heading",
          level: 3,
          text: "Splot ramienny (C5-Th1)",
        },
        {
          type: "paragraph",
          text: "Splot ramienny tworzą gałęzie przednie nerwów rdzeniowych C5-Th1 (pytanie otwarte nr 44). Ze splotu ramiennego pochodzą nerwy unerwiające kończynę górną: pachowy, promieniowy, pośrodkowy, łokciowy, mięśniowo-skórny. Nerw promieniowy i łokciowy są szczególnie narażone na uszkodzenia. Podczas zwichnięcia stawu ramiennego najłatwiej uszkodzić nerw pachowy (pytanie nr 1).",
        },
        {
          type: "heading",
          level: 3,
          text: "Nerwy międzyżebrowe (Th1-Th12)",
        },
        {
          type: "paragraph",
          text: "Nerwy międzyżebrowe (Th1-Th12) mają przebieg segmentalny — każdy unerwia swój własny segment klatki piersiowej.",
        },
        {
          type: "heading",
          level: 3,
          text: "Splot lędźwiowy (L1-L4)",
        },
        {
          type: "paragraph",
          text: "Splot lędźwiowy tworzą gałęzie przednie L1-L4. Główne nerwy: udowy (n. femoralis) i zasłonowy (n. obturatorius). Nerw zasłonowy jest szczególnie narażony na uszkodzenia przy złamaniu miednicy.",
        },
        {
          type: "heading",
          level: 3,
          text: "Splot krzyżowy (L5-S5)",
        },
        {
          type: "paragraph",
          text: "Splot krzyżowy tworzą gałęzie przednie L5-S5. Główne nerwy: kulszowy (n. ischiadicus — największy nerw ciała) i strzałkowy głęboki (n. peroneus profundus — unerwia przednią część podudzia).",
        },
        {
          type: "table",
          headers: ["Splot", "Zakres", "Główne nerwy", "Uwagi"],
          rows: [
            ["Szyjny", "C1-C4", "N. przeponowy", "Unerwia przeponę, głębokie mięśnie szyi"],
            ["Ramienny", "C5-Th1", "Pachowy, promieniowy, pośrodkowy, łokciowy", "Narażone na urazy: promieniowy, łokciowy"],
            ["Międzyżebrowe", "Th1-Th12", "Nerwy międzyżebrowe", "Przebieg segmentalny"],
            ["Lędźwiowy", "L1-L4", "Udowy, zasłonowy", "N. zasłonowy — ryzyko przy złamaniu miednicy"],
            ["Krzyżowy", "L5-S5", "Kulszowy, strzałkowy głęboki", "N. kulszowy — największy nerw ciała"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Splot ramienny — szczegóły",
        },
        {
          type: "paragraph",
          text: "Nerw promieniowy pochodzi ze splotu ramiennego. Splot ramienny tworzą gałęzie przednie nerwów rdzeniowych C5-Th1. Ze splotu ramiennego pochodzą nerwy unerwiające kończynę górną: pachowy, promieniowy, pośrodkowy, łokciowy, mięśniowo-skórny.",
        },
        {
          type: "paragraph",
          text: "Podczas zwichnięcia stawu ramiennego najłatwiej uszkodzić nerw pachowy (pytanie nr 1).",
        },
      ],
      recallQuestions: [
        {
          id: "ner-3",
          question: "Którym nerwem informacja o bólu dolnych siekaczy dociera do ośrodka czucia?",
          answer: "Nerwem żuchwowym (V3 — gałąź nerwu trójdzielnego). V3 przenosi też włókna ruchowe do mięśni żwaczowych.",
          examRef: "Q15",
        },
        {
          id: "ner-5",
          question: "Nerw promieniowy — z jakiego splotu pochodzi?",
          answer: "Ze splotu ramiennego (plexus brachialis).",
          examRef: "Q44",
        },
        {
          id: "ner-6",
          question: "Wymień nerwy pochodzące ze splotu ramiennego.",
          answer: "Nerwy: pachowy, promieniowy, pośrodkowy, łokciowy, mięśniowo-skórny, oraz nerwy skórne przyśrodkowe ramienia i przedramienia.",
          examRef: "Q1",
        },
        {
          id: "ner-31",
          question: "Wymień czysto czuciowe nerwy czaszkowe.",
          answer: "I (węchowy), II (wzrokowy) i VIII (przedsionkowo-ślimakowy).",
          examRef: "",
        },
        {
          id: "ner-32",
          question: "Ile par nerwów rdzeniowych wychodzi z rdzenia kręgowego?",
          answer: "31 par: 8 szyjnych, 12 piersiowych, 5 lędźwiowych, 5 krzyżowych, 1 guziczny.",
          examRef: "",
        },
        {
          id: "ner-33",
          question: "Jakie nerwy należą do splotu lędźwiowego i który jest narażony na uszkodzenie przy złamaniu miednicy?",
          answer: "Udowy i zasłonowy. Nerw zasłonowy jest narażony przy złamaniu miednicy.",
          examRef: "",
        },
        {
          id: "ner-34",
          question: "Jaki zakres ma splot krzyżowy i jakie nerwy z niego pochodzą?",
          answer: "L5-S5. Nerw kulszowy (największy w ciele) i strzałkowy głęboki (przednia część podudzia).",
          examRef: "",
        },
        {
          id: "ner-35",
          question: "Jaki mięsień unerwia nerw dodatkowy (XI)?",
          answer: "Mięsień mostkowo-obojczykowo-sutkowy (SCM) i czworoboczny (trapezius).",
          examRef: "",
        },
      ],
    },
    {
      id: "autonomiczny-uklad",
      title: "Układ autonomiczny (wegetatywny) — współczulny i przywspółczulny",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Organizacja układu autonomicznego",
        },
        {
          type: "paragraph",
          text: "Autonomiczny układ nerwowy (AUN) unerwia mięśnie gładkie, mięsień sercowy i gruczoły — działa niezależnie od woli. Dzieli się na część współczulną (sympatyczną) i przywspółczulną (parasympatyczną). Obie części są zbudowane z dwóch neuronów: przedzwojowego (preganglionarnego — ciało w OUN, akson sięga do zwoju) i zazwojowego (postganglionarnego — ciało w zwoju, akson unerwia narząd docelowy).",
        },
        {
          type: "heading",
          level: 3,
          text: "Układ współczulny (sympatyczny) — walka lub ucieczka",
        },
        {
          type: "paragraph",
          text: "Neurony przedzwojowe współczulne znajdują się w rogach bocznych (cornu laterale) istoty szarej rdzenia kręgowego na poziomach Th1-L2 (jądro pośrednio-boczne). Aksony przedzwojowe są krótkie i mielinowane — kończą się w zwojach pnia współczulnego (zwojach przykręgowych) lub zwojach przedkręgowych (trzewnych: zwój trzewny, krezkowy górny i dolny). Neurotransmiterem w zwoju jest acetylocholina (receptory nikotynowe). Neurony zazwojowe są długie, niemielinowane — uwalniają głównie noradrenalinę (receptory α i β adrenergiczne). Wyjątek: neurony zazwojowe unerwiające gruczoły potowe i niektóre naczynia krwionośne uwalniają ACh (receptory muskarynowe). Pień współczulny (truncus sympathicus) składa się z parzystego łańcucha zwojów biegnących od podstawy czaszki do kości guzicznej (zwoje szyjne: górny, środkowy i dolny/gwieździsty; zwoje piersiowe 10-12; lędźwiowe 4-5; krzyżowe 4-5; zwój nieparzysty). Efekty pobudzenia współczulnego: rozszerzenie źrenic (mydriaza — m. rozwieracz źrenicy), przyspieszenie akcji serca (↑HR), rozszerzenie oskrzeli, zahamowanie perystaltyki, glikogenoliza w wątrobie, wydzielanie adrenaliny z rdzenia nadnerczy, skurcz naczyń skórnych i trzewnych (przekierowanie krwi do mięśni).",
        },
        {
          type: "heading",
          level: 3,
          text: "Układ przywspółczulny (parasympatyczny) — odpoczynek i trawienie",
        },
        {
          type: "paragraph",
          text: "Neurony przedzwojowe przywspółczulne znajdują się w jądrach nerwów czaszkowych w pniu mózgu (III — okoruchowy, VII — twarzowy, IX — językowo-gardłowy, X — błędny) oraz w rogach bocznych rdzenia na poziomie S2-S4 (część krzyżowa). Aksony przedzwojowe są długie — sięgają do zwojów przywspółczulnych położonych w pobliżu lub w ścianie narządu docelowego (zwoje śródścienne). Neurotransmiter w zwoju: ACh (receptory nikotynowe). Neurony zazwojowe są krótkie — uwalniają ACh (receptory muskarynowe). Efekty pobudzenia przywspółczulnego: zwężenie źrenic (mioza — m. zwieracz źrenicy), zwolnienie akcji serca (↓HR), skurcz oskrzeli, pobudzenie perystaltyki i wydzielania gruczołów trawiennych, skurcz pęcherza moczowego. Nerw błędny (X) zaopatruje narządy klatki piersiowej i jamy brzusznej aż do zagięcia śledzionowego okrężnicy — dalsza część jelita grubego jest unerwiona przez włókna przywspółczulne krzyżowe (S2-S4).",
        },
        {
          type: "heading",
          level: 3,
          text: "Miejsca wstrząsorodne (szokogenne)",
        },
        {
          type: "paragraph",
          text: "Miejscami szczególnie wrażliwymi na urazy mechaniczne, wywołującymi reakcję wstrząsową (spadek ciśnienia, bradykardia) są: splot słoneczny (plexus coeliacus/solar plexus — w okolicy pnia trzewnego, na wysokości Th12/L1) i kłębek szyjny (glomus caroticum — przy podziale tętnicy szyjnej wspólnej, chemoreceptor reagujący na spadek O₂ i wzrost CO₂ we krwi).",
        },
        {
          type: "table",
          headers: ["Cecha", "Współczulny", "Przywspółczulny"],
          rows: [
            ["Lokalizacja neuronów przedzwojowych", "Th1-L2 (rogi boczne)", "Pień mózgu (CN III, VII, IX, X) + S2-S4"],
            ["Długość aksonu przedzwojowego", "Krótki", "Długi"],
            ["Długość aksonu zazwojowego", "Długi", "Krótki"],
            ["Neurotransmiter zazwojowy", "Noradrenalina (głównie)", "Acetylocholina"],
            ["Źrenice", "Rozszerzenie (mydriaza)", "Zwężenie (mioza)"],
            ["Serce", "Przyspieszenie (tachykardia)", "Zwolnienie (bradykardia)"],
            ["Oskrzela", "Rozszerzenie", "Skurcz"],
            ["Perystaltyka", "Zahamowanie", "Pobudzenie"],
            ["Pęcherz moczowy", "Rozkurcz wypieracza, skurcz zwieracza", "Skurcz wypieracza, rozkurcz zwieracza"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "ner-36",
          question: "Gdzie znajdują się ciała neuronów przedzwojowych układu współczulnego?",
          answer: "W rogach bocznych (cornu laterale) istoty szarej rdzenia kręgowego na poziomach Th1-L2 — jądro pośrednio-boczne.",
          examRef: "",
        },
        {
          id: "ner-37",
          question: "Który nerw czaszkowy jest głównym nerwem przywspółczulnym i jakie narządy zaopatruje?",
          answer: "Nerw błędny (CN X) — zaopatruje narządy klatki piersiowej i jamy brzusznej aż do zagięcia śledzionowego okrężnicy (zgięcie lewe).",
          examRef: "",
        },
        {
          id: "ner-38",
          question: "Podaj dwa miejsca wstrząsorodne w układzie autonomicznym i ich lokalizację.",
          answer: "Splot słoneczny (plexus coeliacus — przy pniu trzewnym, Th12/L1) i kłębek szyjny (glomus caroticum — przy podziale tętnicy szyjnej wspólnej).",
          examRef: "",
        },
        {
          id: "ner-39",
          question: "Porównaj neurotransmitery: przedzwojowy i zazwojowy w obu częściach AUN.",
          answer: "Przedzwojowy w obu częściach: ACh (receptory nikotynowe). Zazwojowy: współczulny — noradrenalina (wyjątek: ACh dla gruczołów potowych), przywspółczulny — ACh (receptory muskarynowe).",
          examRef: "",
        },
      ],
    },
    {
      id: "rdzen-kregowy-drogi-szczegoly",
      title: "Rdzeń kręgowy — szczegółowe przekroje i drogi",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Topografia istoty szarej — rogi i jądra",
        },
        {
          type: "paragraph",
          text: "Na przekroju poprzecznym rdzenia kręgowego istota szara tworzy charakterystyczny kształt litery H (motyla). Wyróżniamy: (a) Róg przedni (cornu anterius) — najszerszy, zawiera ciała motoneuronów α (duże, unerwiające włókna mięśniowe pozawrzecionowe) i motoneuronów γ (mniejsze, unerwiające włókna śródwrzecionowe wrzecion mięśniowych). Motoneurony są ułożone somatotopowo: przyśrodkowo — mięśnie tułowia, bocznie — mięśnie kończyn. (b) Róg tylny (cornu posterius) — węższy, zawiera neurony czuciowe, do których docierają włókna aferentne ze zwojów rdzeniowych. W istocie galaretowatej (substantia gelatinosa Rolandi) na szczycie rogu tylnego zachodzi pierwsza modulacja bólu. (c) Róg boczny (cornu laterale) — występuje tylko na poziomach Th1-L2 (współczulny) i S2-S4 (przywspółczulny), zawiera neurony przedzwojowe AUN. (d) Istota pośrednia (substantia intermedia) — między rogami przednimi i tylnymi, zawiera interneurony.",
        },
        {
          type: "heading",
          level: 3,
          text: "Sznury istoty białej — organizacja dróg",
        },
        {
          type: "paragraph",
          text: "Istota biała rdzenia kręgowego zorganizowana jest w trzy pary sznurów (funiculi), które zawierają drogi wstępujące (czuciowe, aferentne) i zstępujące (ruchowe, eferentne). Sznur tylny (funiculus posterior) — między rogiem tylnym a bruzdą pośrodkową tylną, zawiera pęczek smukły (fasciculus gracilis — przyśrodkowo, włókna z kończyn dolnych i dolnej połowy tułowia) i pęczek klinowaty (fasciculus cuneatus — bocznie, włókna z kończyn górnych i górnej połowy tułowia). Oba pęczki przewodzą czucie głębokie (propriocepcja świadoma), dotyk precyzyjny (dyskryminacyjny) i wibrację. Jest to droga 3-neuronowa: receptor → zwoje rdzeniowe → jądra sznurów tylnych (jądro smukłe i klinowate w rdzeniu przedłużonym) → skrzyżowanie (decussatio lemniscorum — wstęga przyśrodkowa) → wzgórze (VPL) → kora czuciowa płata ciemieniowego.",
        },
        {
          type: "paragraph",
          text: "Sznur boczny (funiculus lateralis) — między rogiem przednim a tylnym. Zawiera: drogę korowo-rdzeniową boczną (tractus corticospinalis lateralis — ruchowa, zstępująca, 90% włókien skrzyżowanych w piramidach rdzenia przedłużonego, główna droga ruchów dowolnych), drogę rdzeniowo-wzgórzową boczną (tractus spinothalamicus lateralis — czuciowa, wstępująca, przewodzi ból i temperaturę), drogę rdzeniowo-móżdżkową tylną (Flechsiga) i przednią (Gowersa — propriocepcja nieświadoma), drogę czerwienno-rdzeniową (tractus rubrospinalis — kontrola napięcia mięśniowego), drogę oliwkowo-rdzeniową. Sznur przedni (funiculus anterior) — między rogiem przednim a szczeliną pośrodkową przednią. Zawiera: drogę korowo-rdzeniową przednią (tractus corticospinalis anterior — 10% nieskrzyżowanych włókien, dla mięśni tułowia), drogę rdzeniowo-wzgórzową przednią (tractus spinothalamicus anterior — dotyk gruby, nacisk), drogę siatkowo-rdzeniową, drogę przedsionkowo-rdzeniową (równowaga, napięcie prostowników), drogę pokrywowo-rdzeniową (odruchy wzrokowo-ruchowe).",
        },
        {
          type: "heading",
          level: 3,
          text: "Zasady organizacji dróg rdzeniowych — skrzyżowania",
        },
        {
          type: "paragraph",
          text: "Większość dróg w OUN ulega skrzyżowaniu (dekusacji) — włókna z prawej połowy ciała przechodzą na lewą stronę mózgowia i odwrotnie. Droga korowo-rdzeniowa boczna krzyżuje się na poziomie piramid rdzenia przedłużonego (decussatio pyramidum). Droga rdzeniowo-wzgórzowa krzyżuje się w spoidle białym rdzenia kręgowego na poziomie wejścia włókna do rdzenia (na tym samym poziomie lub 1-2 segmenty wyżej). Droga sznurów tylnych (czucie głębokie) krzyżuje się na poziomie wstęgi przyśrodkowej w rdzeniu przedłużonym. Uszkodzenie połowicze rdzenia kręgowego (zespół Brown-Séquarda) powoduje: po stronie uszkodzenia — porażenie ruchowe (droga korowo-rdzeniowa), zniesienie czucia głębokiego i wibracji (sznury tylne); po stronie przeciwnej — zniesienie czucia bólu i temperatury (droga rdzeniowo-wzgórzowa boczna, która już się skrzyżowała).",
        },
      ],
      recallQuestions: [
        {
          id: "ner-40",
          question: "Opisz przekrój poprzeczny rdzenia kręgowego — gdzie znajdują się rogi przednie, tylne i boczne oraz jakie neurony zawierają?",
          answer: "Rogi przednie — motoneurony α i γ (ruchowe). Rogi tylne — neurony czuciowe, istota galaretowata (ból). Rogi boczne — neurony AUN (Th1-L2 współczulny, S2-S4 przywspółczulny). Istota szara tworzy kształt litery H.",
          examRef: "",
        },
        {
          id: "ner-41",
          question: "Jakie drogi przebiegają w sznurze tylnym? Co przewodzą i gdzie się krzyżują?",
          answer: "Pęczek smukły (Goll — kończyny dolne) i pęczek klinowaty (Burdach — kończyny górne). Przewodzą czucie głębokie, dotyk precyzyjny, wibrację. Krzyżują się na poziomie wstęgi przyśrodkowej w rdzeniu przedłużonym.",
          examRef: "",
        },
        {
          id: "ner-42",
          question: "Czym objawia się zespół Brown-Séquarda (połowiczne uszkodzenie rdzenia)?",
          answer: "Po stronie uszkodzenia: porażenie ruchowe + zniesienie czucia głębokiego i wibracji. Po stronie przeciwnej: zniesienie bólu i temperatury (2-3 segmenty poniżej uszkodzenia).",
          examRef: "",
        },
        {
          id: "ner-43",
          question: "Gdzie krzyżuje się droga korowo-rdzeniowa boczna?",
          answer: "W piramidach rdzenia przedłużonego (decussatio pyramidum) — 90% włókien. Pozostałe 10% tworzy drogę korowo-rdzeniową przednią nieskrzyżowaną.",
          examRef: "",
        },
      ],
    },
  ],
};
