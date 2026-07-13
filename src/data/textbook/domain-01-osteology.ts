import type { TextbookDomain } from "@/types/textbook";

export const osteology: TextbookDomain = {
  id: "osteology",
  title: "Osteologia i Artrologia",
  shortTitle: "Osteologia",
  icon: "🦴",
  sections: [
    {
      id: "wprowadzenie-kosci",
      title: "Wprowadzenie — budowa kości i stawów",
      content: [
        {
          type: "paragraph",
          text: "Szkielet dorosłego człowieka tworzy około 206 kości. Połączone ze sobą na różne sposoby kości umożliwiają: osiągnięcie określonej wielkości i kształtu ciała, utrzymanie postawy ciała, ochronę narządów wewnętrznych oraz wykonywanie ruchów.",
        },
        {
          type: "heading",
          level: 3,
          text: "Budowa typowego stawu",
        },
        {
          type: "paragraph",
          text: "W stawach można zawsze wyróżnić trzy podstawowe elementy:",
        },
        {
          type: "list",
          items: [
            "Powierzchnie stawowe pokryte chrząstką stawową (szklistą) — cechuje ją duża odporność na ścieranie. Mogą być wypukłe (główki stawowe) lub wklęsłe (panewki stawowe).",
            "Jama stawowa — przestrzeń pomiędzy powierzchniami stawowymi, wypełniona śliską i tłustą mazią stawową.",
            "Torebka stawowa — osłona otaczająca staw. Zewnętrzną powierzchnię buduje tkanka łączna włóknista, wewnętrzną wyścieła błona maziowa produkująca maź stawową.",
          ],
        },
        {
          type: "paragraph",
          text: "Łąkotki zbudowane są z tkanki chrzęstnej (pytanie nr 38).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-1",
          question: "Ile kości tworzy szkielet dorosłego człowieka?",
          answer: "Około 206 kości.",
          examRef: "Q-wiedza",
        },
        {
          id: "ost-2",
          question: "Jakie trzy podstawowe elementy wyróżniamy w stawie?",
          answer: "1) Powierzchnie stawowe pokryte chrząstką szklistą, 2) Jama stawowa wypełniona mazią stawową, 3) Torebka stawowa z błoną maziową.",
          examRef: "Q-wiedza",
        },
        {
          id: "ost-3",
          question: "Z jakiej tkanki zbudowane są łąkotki?",
          answer: "Z tkanki chrzęstnej.",
          examRef: "Q38",
        },
      ],
    },
    {
      id: "czaszka",
      title: "Czaszka",
      content: [
        {
          type: "paragraph",
          text: "Czaszka człowieka składa się z dwóch zasadniczych części: mózgoczaszki (ochraniającej mózgowie) i trzewioczaszki (otaczającej początkowe odcinki dróg pokarmowych i oddechowych oraz narządy zmysłowe).",
        },
        {
          type: "heading",
          level: 3,
          text: "Mózgoczaszka",
        },
        {
          type: "paragraph",
          text: "W skład mózgoczaszki wchodzą kości: czołowa, dwie ciemieniowe, potyliczna, dwie skroniowe (widoczne od zewnątrz) oraz kości sitowa i klinowa (tworzące podstawę czaszki).",
        },
        {
          type: "heading",
          level: 3,
          text: "Połączenia stawowe czaszki",
        },
        {
          type: "paragraph",
          text: "Powierzchnie stawowe czaszki zlokalizowane są na kości potylicznej i skroniowej (pytanie nr 33). Staw skroniowo-żuchwowy — na nim działają mięśnie żuciowe (pytanie nr 24).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-4",
          question: "Na jakich kościach zlokalizowane są powierzchnie stawowe czaszki?",
          answer: "Na kości potylicznej i skroniowej.",
          examRef: "Q33",
        },
        {
          id: "ost-5",
          question: "Wymień kości mózgoczaszki.",
          answer: "Czołowa, dwie ciemieniowe, potyliczna, dwie skroniowe, sitowa i klinowa.",
          examRef: "Q-wiedza",
        },
      ],
    },
    {
      id: "kregoslup-kregi",
      title: "Kręgosłup i kręgi",
      content: [
        {
          type: "paragraph",
          text: "Kręgosłup człowieka składa się z odcinków: szyjnego (7 kręgów), piersiowego (12 kręgów), lędźwiowego (5 kręgów), krzyżowego (5 zrośniętych w kość krzyżową) i ogonowego (szczątkowe, zrastające się w kość guziczną).",
        },
        {
          type: "paragraph",
          text: "Najwięcej kręgów występuje w odcinku piersiowym (pytanie nr 35 — 12 kręgów piersiowych). Kręgi piersiowe mają powierzchnie stawowe do połączenia z żebrami.",
        },
        {
          type: "paragraph",
          text: "Ruch zginania kręgosłupa ogranicza więzadło nadkolcowe (pytanie nr 39). Zginanie podudzia zachodzi w stawie kolanowym (pytanie nr 37).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-6",
          question: "W którym odcinku kręgosłupa jest najwięcej kręgów? Jaka jest ich liczba?",
          answer: "W odcinku piersiowym — 12 kręgów.",
          examRef: "Q35",
        },
        {
          id: "ost-7",
          question: "Które więzadło ogranicza ruch zginania kręgosłupa?",
          answer: "Więzadło nadkolcowe.",
          examRef: "Q39",
        },
      ],
    },
    {
      id: "klatka-piersiowa",
      title: "Klatka piersiowa",
      content: [
        {
          type: "paragraph",
          text: "Klatkę piersiową tworzą kręgi piersiowe (12), żebra (12 par) oraz mostek. Razem tworzą one ażurową, sprężystą osłonę płuc, serca i przełyku, pozwalającą na wykonywanie ruchów oddechowych.",
        },
        {
          type: "list",
          items: [
            "Żebra prawdziwe (I-VII) — łączą się bezpośrednio z mostkiem",
            "Żebra rzekome (VIII-X) — zrastają się z chrząstkami żeber położonych wyżej",
            "Żebra wolne (XI-XII) — nie łączą się z mostkiem ani wyższymi żebrami",
          ],
        },
        {
          type: "paragraph",
          text: "Mostek jest nieparzystą kością płaską, zbudowaną z rękojeści, trzonu i wyrostka mieczykowatego. Punktem kostnym łatwo wyczuwalnym jest guzowatość piszczelowa (pytanie nr 31).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-8",
          question: "Ile par żeber wyróżniamy? Wymień ich typy.",
          answer: "12 par: prawdziwe (I-VII, łączą się z mostkiem), rzekome (VIII-X, zrastają się z wyższymi), wolne (XI-XII, nie łączą się z mostkiem).",
          examRef: "Q-wiedza",
        },
        {
          id: "ost-9",
          question: "Podaj przykład punktu kostnego łatwo wyczuwalnego.",
          answer: "Guzowatość piszczelowa.",
          examRef: "Q31",
        },
      ],
    },
    {
      id: "konczyna-gorna",
      title: "Kościec kończyny górnej",
      content: [
        {
          type: "paragraph",
          text: "W skład kośćca kończyny górnej wchodzą: kości obręczy górnej (łopatka i obojczyk) oraz kości kończyny górnej wolnej (kość ramienna, kości przedramienia — łokciowa i promieniowa, oraz kości dłoni — nadgarstka, śródręcza i palców).",
        },
        {
          type: "paragraph",
          text: "Obojczyk łączy rękojeść mostka z wyrostkiem barkowym łopatki, zapewniając połączenie kończyny ze szkieletem osiowym. Bruzda nerwu promieniowego leży na kości ramiennej (pytanie nr 30). Kość łokciowa łączy się stawowo z 2 kośćmi (pytanie nr 29).",
        },
        {
          type: "heading",
          level: 3,
          text: "Staw ramienny",
        },
        {
          type: "paragraph",
          text: "Podczas zwichnięcia stawu ramiennego najłatwiej można uszkodzić nerw pachowy (pytanie nr 1). Ramię w stawie ramiennym odwodzi mięsień naramienny część boczna (pytanie nr 21). Ścięgno mięśnia leży wewnątrz stawu ramiennego (pytanie nr 40).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-10",
          question: "Jaki nerw najłatwiej uszkodzić podczas zwichnięcia stawu ramiennego?",
          answer: "Nerw pachowy.",
          examRef: "Q1",
        },
        {
          id: "ost-11",
          question: "Na której kości leży bruzda nerwu promieniowego?",
          answer: "Na kości ramiennej.",
          examRef: "Q30",
        },
        {
          id: "ost-12",
          question: "Z iloma kośćmi łączy się stawowo kość łokciowa?",
          answer: "Z 2 kośćmi.",
          examRef: "Q29",
        },
      ],
    },
    {
      id: "konczyna-dolna",
      title: "Kościec kończyny dolnej",
      content: [
        {
          type: "paragraph",
          text: "W skład kośćca kończyny dolnej wchodzą: kości obręczy dolnej (kości miedniczne — biodrowa, kulszowa, łonowa) oraz kości kończyny dolnej wolnej (kość udowa, rzepka, kości podudzia — piszczelowa i strzałkowa, oraz kości stopy).",
        },
        {
          type: "paragraph",
          text: "Główkę w stawie skokowym górnym tworzy kość skokowa (pytanie nr 32). Więzadłem najsilniej ograniczającym prostowanie uda jest więzadło biodrowo-udowe (pytanie nr 22).",
        },
        {
          type: "paragraph",
          text: "Główka należy do kości: humerus (ramienna) i femur (udowa) — pytanie nr 34.",
        },
        {
          type: "heading",
          level: 3,
          text: "Stawy — ruchy",
        },
        {
          type: "paragraph",
          text: "Ruch odwodzenia może zajść w stawie: szczytowo-potylicznym, biodrowym i ramiennym (pytanie nr 36). Celem nawrócenia ręki (pronacji) należy zaangażować 3 stawy (pytanie nr 19).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-13",
          question: "Która kość tworzy główkę w stawie skokowym górnym?",
          answer: "Kość skokowa (talus).",
          examRef: "Q32",
        },
        {
          id: "ost-14",
          question: "Które więzadło najsilniej ogranicza prostowanie uda?",
          answer: "Więzadło biodrowo-udowe.",
          examRef: "Q22",
        },
        {
          id: "ost-15",
          question: "Jakie stawy umożliwiają ruch odwodzenia?",
          answer: "Staw szczytowo-potyliczny, biodrowy i ramienny.",
          examRef: "Q36",
        },
      ],
    },
    {
      id: "czaszka-szczegoly",
      title: "Czaszka — szczegółowe kości, szwy i doły",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Kości mózgoczaszki — szczegółowe markery kostne",
        },
        {
          type: "paragraph",
          text: "Kość czołowa (os frontale) tworzy przednią część sklepienia czaszki, dno przedniego dołu czaszki oraz górną ścianę oczodołu. Zawiera zatoki czołowe (sinus frontales) połączone z jamą nosową. Łuska kości czołowej (squama frontalis) łączy się z kośćmi ciemieniowymi szwem wieńcowym (sutura coronalis). Brzeg nadoczodołowy (margo supraorbitalis) zawiera wcięcie/otwór nadoczodołowy dla nerwu i naczyń nadoczodołowych. Guzowatość czołowa (tuber frontale) to wypukłość widoczna na powierzchni zewnętrznej. Łuki brwiowe (arcus superciliares) leżą powyżej brzegów nadoczodołowych. Wyrostek jarzmowy kości czołowej łączy się z kością jarzmową.",
        },
        {
          type: "paragraph",
          text: "Kość ciemieniowa (os parietale) — parzysta, tworzy środkową część sklepienia czaszki. Na powierzchni zewnętrznej widoczne są guzy ciemieniowe (tuber parietale), kresa skroniowa górna i dolna (linea temporalis superior et inferior) — miejsca przyczepu powięzi i mięśnia skroniowego. Na powierzchni wewnętrznej przebiega bruzda tętnicy oponowej środkowej (sulcus arteriae meningeae mediae). Kość ciemieniowa łączy się z kością czołową szwem wieńcowym, z kością potyliczną szwem węgłowym (sutura lambdoidea), z kością skroniową szwem łuskowym (sutura squamosa), a obie kości ciemieniowe łączą się szwem strzałkowym (sutura sagittalis).",
        },
        {
          type: "paragraph",
          text: "Kość potyliczna (os occipitale) tworzy tylną i dolną część czaszki. Zawiera otwór wielki (foramen magnum), przez który rdzeń przedłużony przechodzi w rdzeń kręgowy. Kłykcie potyliczne (condyli occipitales) łączą się z kręgiem szczytowym (atlas), tworząc staw szczytowo-potyliczny. Guzowatość potyliczna zewnętrzna (protuberantia occipitalis externa) jest wyczuwalnym punktem kostnym. Grzebień potyliczny zewnętrzny biegnie od guzowatości do otworu wielkiego. Kresa karkowa górna (linea nuchalis superior) i dolna to miejsca przyczepu mięśni karku.",
        },
        {
          type: "paragraph",
          text: "Kość skroniowa (os temporale) — parzysta, bardzo złożona. Część łuskowa (pars squamosa) tworzy boczną ścianę czaszki, od niej odchodzi wyrostek jarzmowy (processus zygomaticus) tworzący łuk jarzmowy wraz z kością jarzmową. Część bębenkowa (pars tympanica) otacza przewód słuchowy zewnętrzny. Część skalista (pars petrosa — piramida kości skroniowej) zawiera ucho wewnętrzne i środkowe, kanał tętnicy szyjnej wewnętrznej oraz kanał nerwu twarzowego (canalis nervi facialis). Wyrostek sutkowaty (processus mastoideus) zawiera komórki powietrzne (cellulae mastoideae) i jest miejscem przyczepu mięśnia mostkowo-obojczykowo-sutkowego. Wyrostek rylcowaty (processus styloideus) — miejsce przyczepu mięśni rylcowo-gnykowego, rylcowo-językowego i rylcowo-gardłowego (pęczek Riolana). Dół żuchwowy (fossa mandibularis) na części łuskowej tworzy panewkę stawu skroniowo-żuchwowego.",
        },
        {
          type: "paragraph",
          text: "Kość klinowa (os sphenoidale) — nieparzysta, centralna kość podstawy czaszki, przypominająca kształtem nietoperza. Składa się z trzonu (corpus), w którym znajduje się siodło tureckie (sella turcica) mieszczące przysadkę mózgową, oraz zatoki klinowej (sinus sphenoidalis). Od trzonu odchodzą skrzydła mniejsze (alae minores) i większe (alae maiores) oraz wyrostki skrzydłowate (processus pterygoidei). Szczelina oczodołowa górna (fissura orbitalis superior) leży między skrzydłami — przechodzą przez nią nerwy III, IV, VI i V1. Otwór okrągły (foramen rotundum) — nerw V2, otwór owalny (foramen ovale) — nerw V3, otwór kolcowy (foramen spinosum) — tętnica oponowa środkowa. Kanał wzrokowy (canalis opticus) — nerw II i tętnica oczna. Kość sitowa (os ethmoidale) — nieparzysta, tworzy część przedniego dołu czaszki, ścianę przyśrodkową oczodołu (blaszka oczodołowa — lamina orbitalis/lamina papyracea) oraz górną część przegrody nosowej (blaszka pionowa). Blaszka sitowa (lamina cribrosa) zawiera liczne otworki dla włókien nerwu węchowego (CN I). Małżowiny nosowe górna i środkowa stanowią część kości sitowej.",
        },
        {
          type: "heading",
          level: 3,
          text: "Szwy czaszkowe — pełna systematyka",
        },
        {
          type: "paragraph",
          text: "Szwy czaszkowe (suturae cranii) są połączeniami włóknistymi (więzozrostami — syndesmoses) łączącymi kości sklepienia czaszki. U noworodków między kośćmi występują ciemiączka (fonticuli): przednie (czworokątne, między kością czołową a ciemieniowymi, zarasta ok. 18-24 miesiąca życia), tylne (trójkątne, między ciemieniowymi a potyliczną, zarasta ok. 2-3 miesiąca), klinowe (przednio-boczne) i sutkowate (tylno-boczne). Główne szwy: (1) Szew wieńcowy (sutura coronalis) — między kością czołową a ciemieniowymi, biegnie poprzecznie. (2) Szew strzałkowy (sutura sagittalis) — między kośćmi ciemieniowymi, biegnie w płaszczyźnie pośrodkowej. (3) Szew węgłowy (sutura lambdoidea) — między kośćmi ciemieniowymi a potyliczną, przypomina grecką literę lambda. (4) Szew łuskowy (sutura squamosa) — między kością skroniową a ciemieniową. (5) Szew czołowy (sutura frontalis/metopica) — występuje u dzieci, zwykle zarasta do 6-8 roku życia. Przedwczesny zrost szwów (kraniosynostoza) prowadzi do deformacji czaszki: skafocefalia (zrost strzałkowego), brachycefalia (zrost wieńcowego), plagiocefalia (jednostronny zrost wieńcowego lub węgłowego), trigonocefalia (zrost czołowego).",
        },
        {
          type: "heading",
          level: 3,
          text: "Trzewioczaszka — kości twarzowe",
        },
        {
          type: "paragraph",
          text: "Kości twarzy (splanchnocranium) w liczbie 14 obejmują: 2 kości jarzmowe (os zygomaticum) — tworzą wyniosłości policzkowe i boczny brzeg oczodołu; 2 kości szczękowe (maxilla) — zawierają zatoki szczękowe i wyrostki zębodołowe z zębodołami dla zębów górnych; 2 kości nosowe (os nasale); 2 kości łzowe (os lacrimale — najmniejsze kości twarzy, tworzą dół woreczka łzowego); 2 kości podniebienne (os palatinum — blaszka pionowa i pozioma, tworzy część podniebienia twardego); 2 małżowiny nosowe dolne (concha nasalis inferior); 1 lemiesz (vomer — tworzy tylną część przegrody nosowej); 1 żuchwa (mandibula — jedyna ruchoma kość czaszki, składa się z trzonu i dwóch gałęzi). Na żuchwie wyróżniamy: bródkę (protuberantia mentalis), otwór bródkowy (foramen mentale — nerw bródkowy), otwór żuchwowy (foramen mandibulae — nerw zębodołowy dolny), wyrostek kłykciowy (processus condylaris — głowa żuchwy do stawu skroniowo-żuchwowego), wyrostek dziobiasty (processus coronoideus — przyczep mięśnia skroniowego).",
        },
        {
          type: "heading",
          level: 3,
          text: "Doły czaszki (fossae cranii)",
        },
        {
          type: "paragraph",
          text: "Podstawa wewnętrzna czaszki dzieli się na trzy doły. Przedni dół czaszki (fossa cranii anterior) — ograniczony przez kość czołową, sitową i skrzydła mniejsze klinowej, zawiera płaty czołowe mózgu i opuszki węchowe. Środkowy dół czaszki (fossa cranii media) — zawiera płaty skroniowe, siodło tureckie z przysadką, otwory dla nerwów czaszkowych. Tylny dół czaszki (fossa cranii posterior) — największy i najgłębszy, zawiera móżdżek, most i rdzeń przedłużony, ograniczony przez kość potyliczną i część skalistą kości skroniowych.",
        },
      ],
      recallQuestions: [
        {
          id: "ost-16",
          question: "Wymień główne szwy czaszkowe i określ, które kości łączą.",
          answer: "Wieńcowy (czołowa + ciemieniowe), strzałkowy (ciemieniowe ze sobą), węgłowy (ciemieniowe + potyliczna), łuskowy (skroniowa + ciemieniowa).",
          examRef: "",
        },
        {
          id: "ost-17",
          question: "Jakie struktury przechodzą przez szczelinę oczodołową górną?",
          answer: "Nerwy czaszkowe: III (okoruchowy), IV (bloczkowy), VI (odwodzący) i V1 (oczny — gałąź nerwu trójdzielnego) oraz żyła oczna górna.",
          examRef: "",
        },
        {
          id: "ost-18",
          question: "Co znajduje się w siodle tureckim kości klinowej?",
          answer: "Przysadka mózgowa (hypophysis cerebri) — gruczoł dokrewny.",
          examRef: "",
        },
        {
          id: "ost-19",
          question: "Wymień otwory w kości klinowej i struktury przez nie przechodzące.",
          answer: "Kanał wzrokowy (CN II, tętnica oczna), szczelina oczodołowa górna (CN III, IV, V1, VI), otwór okrągły (CN V2), otwór owalny (CN V3), otwór kolcowy (tętnica oponowa środkowa).",
          examRef: "",
        },
        {
          id: "ost-20",
          question: "Jakie są części żuchwy i co jest na nich przyczepione?",
          answer: "Trzon (z otworem bródkowym), gałąź, wyrostek kłykciowy (głowa żuchwy — staw skroniowo-żuchwowy), wyrostek dziobiasty (przyczep mięśnia skroniowego). Otwór żuchwowy — wejście nerwu zębodołowego dolnego.",
          examRef: "",
        },
      ],
    },
    {
      id: "kregoslup-szczegoly",
      title: "Kręgosłup — szczegółowa budowa kręgów",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Budowa ogólna kręgu",
        },
        {
          type: "paragraph",
          text: "Typowy kręg składa się z trzonu (corpus vertebrae — część przednia, masywna, dźwigająca ciężar), łuku kręgowego (arcus vertebrae — część tylna, ograniczająca otwór kręgowy) oraz siedmiu wyrostków. Łuk kręgowy składa się z dwóch nasad (pediculi arcus vertebrae) łączących łuk z trzonem oraz dwóch blaszek (laminae arcus vertebrae). Otwór kręgowy (foramen vertebrale) — przez otwory wszystkich kręgów przebiega kanał kręgowy (canalis vertebralis) chroniący rdzeń kręgowy. Wyrostki: 1 kolczysty (processus spinosus — pojedynczy, tylny), 2 poprzeczne (processus transversi — boczne), 2 stawowe górne i 2 stawowe dolne (processus articulares superiores et inferiores — łączą sąsiednie kręgi). Wcięcia kręgowe górne i dolne (incisurae vertebrales) sąsiadujących kręgów tworzą otwory międzykręgowe (foramina intervertebralia) dla nerwów rdzeniowych.",
        },
        {
          type: "heading",
          level: 3,
          text: "Kręgi szyjne (C1-C7) — cechy szczególne",
        },
        {
          type: "paragraph",
          text: "Kręgi szyjne mają charakterystyczny otwór wyrostka poprzecznego (foramen transversarium) dla tętnicy kręgowej (arteria vertebralis) — z wyjątkiem C7, przez którego otwór tętnica nie przechodzi. Trzony są małe i owalne. Wyrostki kolczyste są rozdwojone (od C2 do C6). Otwór kręgowy jest trójkątny i stosunkowo duży. Kręg szczytowy (C1, atlas) nie ma trzonu — składa się z dwóch łuków (przedniego i tylnego) oraz dwóch mas bocznych (massae laterales) z powierzchniami stawowymi górnymi (dla kłykci potylicznych) i dolnymi (dla C2). Na łuku przednim znajduje się guzek przedni i dołek zębowy (fovea dentis) dla zęba kręgu obrotowego. Kręg obrotowy (C2, axis) ma ząb (dens axis) — embriologiczny trzon C1, który przyrósł do C2. Ząb stanowi oś obrotu głowy. Kręg wystający (C7, vertebra prominens) ma bardzo długi, niepodzielony wyrostek kolczysty, dobrze wyczuwalny przez skórę (punkt orientacyjny).",
        },
        {
          type: "heading",
          level: 3,
          text: "Kręgi piersiowe (Th1-Th12) — cechy szczególne",
        },
        {
          type: "paragraph",
          text: "Kręgi piersiowe mają na trzonach i wyrostkach poprzecznych powierzchnie stawowe (dołki żebrowe — foveae costales) dla połączeń z żebrami. Na trzonie występują dołki żebrowe górne i dolne (foveae costales superior et inferior), a na wyrostkach poprzecznych — dołki żebrowe wyrostków poprzecznych (foveae costales processus transversi) dla guzków żeber (dotyczy Th1-Th10). Wyrostki kolczyste są długie, nachylone ku dołowi (dachówkowato zachodzą na siebie). Otwór kręgowy jest okrągły i stosunkowo mały. Th1 ma pełny dołek żebrowy górny dla I żebra i pół dołka dolnego. Th10 ma tylko półdołki górne. Th11 i Th12 mają po jednym pełnym dołku na trzonie i przypominają kręgi lędźwiowe (nie mają dołków na wyrostkach poprzecznych).",
        },
        {
          type: "heading",
          level: 3,
          text: "Kręgi lędźwiowe (L1-L5) — cechy szczególne",
        },
        {
          type: "paragraph",
          text: "Kręgi lędźwiowe są największe i najsilniejsze — dźwigają największe obciążenia. Trzon jest duży, nerkowaty. Otwór kręgowy jest trójkątny i stosunkowo mały w porównaniu z rozmiarem trzonu. Wyrostki kolczyste są krótkie, grube, czworokątne i ustawione poziomo. Wyrostki poprzeczne są długie i cienkie — u L1-L4 są to szczątkowe żebra lędźwiowe. Wyrostki stawowe mają powierzchnie ustawione w płaszczyźnie strzałkowej (górne wklęsłe — skierowane przyśrodkowo, dolne wypukłe — skierowane bocznie). Wyrostek suteczkowaty (processus mamillaris) na wyrostku stawowym górnym — miejsce przyczepu mięśni.",
        },
        {
          type: "heading",
          level: 3,
          text: "Kość krzyżowa (os sacrum) i guziczna",
        },
        {
          type: "paragraph",
          text: "Kość krzyżowa powstaje ze zrośnięcia 5 kręgów krzyżowych (S1-S5). Ma kształt odwróconej piramidy. Powierzchnia miedniczna (przednia) jest wklęsła i gładka, z czterema parami otworów krzyżowych miednicznych (foramina sacralia pelvina) dla gałęzi przednich nerwów krzyżowych. Powierzchnia grzbietowa (tylna) jest wypukła i chropowata, z czterema parami otworów krzyżowych grzbietowych oraz grzebieniami: pośrodkowym (ze zrośniętych wyrostków kolczystych), przyśrodkowym (z wyrostków stawowych) i bocznym (z wyrostków poprzecznych). Podstawa kości krzyżowej łączy się z L5 (promontorium — wzgórek, punkt orientacyjny w położnictwie). Szpara krzyżowa (hiatus sacralis) to dolny otwór kanału krzyżowego. Powierzchnie uchowate (facies auriculares) łączą się z kośćmi biodrowymi. Kość guziczna (os coccygis) powstaje z 3-5 zrośniętych kręgów ogonowych (szczątkowych).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-21",
          question: "Który kręg szyjny nazywany jest kręgiem wystającym i dlaczego?",
          answer: "C7 (vertebra prominens) — ma bardzo długi, niepodzielony wyrostek kolczysty, najlepiej wyczuwalny przez skórę na granicy szyi i karku.",
          examRef: "",
        },
        {
          id: "ost-22",
          question: "Czym różni się kręg C1 (atlas) od typowego kręgu?",
          answer: "Atlas nie ma trzonu — składa się z dwóch łuków i mas bocznych. Ma dołek zębowy na łuku przednim dla zęba C2 i powierzchnie stawowe górne dla kłykci potylicznych.",
          examRef: "",
        },
        {
          id: "ost-23",
          question: "Ile kręgów zrasta się w kość krzyżową? Wymień powierzchnie uchowate i ich funkcję.",
          answer: "5 kręgów krzyżowych (S1-S5). Powierzchnie uchowate łączą kość krzyżową z kośćmi biodrowymi, tworząc staw krzyżowo-biodrowy (połączenie miednicy z kręgosłupem).",
          examRef: "",
        },
        {
          id: "ost-24",
          question: "Jaka jest charakterystyczna cecha wszystkich kręgów szyjnych?",
          answer: "Otwór wyrostka poprzecznego (foramen transversarium) dla przejścia tętnicy kręgowej — przez otwór C7 tętnica kręgowa nie przechodzi. Trzony małe i owalne, wyrostki kolczyste rozdwojone (C2-C6).",
          examRef: "",
        },
        {
          id: "ost-25",
          question: "Jak zbudowana jest kość krzyżowa od strony grzbietowej?",
          answer: "Posiada grzebień pośrodkowy (z wyrostków kolczystych), grzebienie przyśrodkowe (z wyrostków stawowych), grzebienie boczne (z wyrostków poprzecznych) oraz 4 pary otworów krzyżowych grzbietowych. Na szczycie znajduje się szpara krzyżowa (hiatus sacralis).",
          examRef: "",
        },
      ],
    },
    {
      id: "konczyna-gorna-szczegoly",
      title: "Kościec kończyny górnej — szczegółowe markery kostne",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Łopatka (scapula) — punkty orientacyjne",
        },
        {
          type: "paragraph",
          text: "Łopatka jest kością płaską, trójkątną, położoną na tylnej ścianie klatki piersiowej na wysokości żeber II-VII. Powierzchnia żebrowa (przednia) jest wklęsła — tworzy dół podłopatkowy (fossa subscapularis) dla mięśnia podłopatkowego. Powierzchnia grzbietowa (tylna) podzielona jest grzebieniem łopatki (spina scapulae) na dół nadgrzebieniowy (fossa supraspinata — m. nadgrzebieniowy) i dół podgrzebieniowy (fossa infraspinata — m. podgrzebieniowy). Grzebień łopatki kończy się wyrostkiem barkowym (acromion), który łączy się z obojczykiem. Wyrostek kruczy (processus coracoideus) wystaje do przodu — przyczepiają się do niego: m. piersiowy mniejszy, głowa krótka m. dwugłowego ramienia i m. kruczo-ramienny. Panewka stawowa (cavitas glenoidalis) — wypukła powierzchnia stawowa dla głowy kości ramiennej, na jej górnym biegunie znajduje się guzek nadpanewkowy (tuberculum supraglenoidale — przyczep głowy długiej m. dwugłowego ramienia), a na dolnym guzek podpanewkowy (tuberculum infraglenoidale — przyczep głowy długiej m. trójgłowego ramienia).",
        },
        {
          type: "heading",
          level: 3,
          text: "Kość ramienna (humerus) — punkty orientacyjne",
        },
        {
          type: "paragraph",
          text: "Kość ramienna jest kością długą. Na nasadzie bliższej znajduje się głowa kości ramiennej (caput humeri) — półkolista powierzchnia stawowa. Guzek większy (tuberculum majus) jest miejscem przyczepu mięśni: nadgrzebieniowego, podgrzebieniowego i obłego mniejszego. Guzek mniejszy (tuberculum minus) — przyczep mięśnia podłopatkowego. Między guzkami biegnie bruzda międzyguzkowa (sulcus intertubercularis), w której znajduje się ścięgno głowy długiej mięśnia dwugłowego ramienia. Szyjka chirurgiczna (collum chirurgicum) jest częstym miejscem złamań — przebiega tam nerw pachowy i tętnice okalające ramię. Na trzonie znajduje się guzowatość naramienna (tuberositas deltoidea) — miejsce przyczepu mięśnia naramiennego, oraz bruzda nerwu promieniowego (sulcus nervi radialis) na tylnej powierzchni. Na nasadzie dalszej znajduje się bloczek (trochlea humeri — łączy się z kością łokciową), główka (capitulum humeri — łączy się z kością promieniową), nadkłykieć przyśrodkowy (epicondylus medialis — bruzda nerwu łokciowego, tzw. kość śmieszna) i nadkłykieć boczny (epicondylus lateralis). Dół wyrostka łokciowego (fossa olecrani) na tylnej powierzchni mieści wyrostek łokciowy. Dół dziobiasty (fossa coronoidea) i dół promieniowy (fossa radialis) na przedniej powierzchni.",
        },
        {
          type: "heading",
          level: 3,
          text: "Kości przedramienia — łokciowa i promieniowa",
        },
        {
          type: "paragraph",
          text: "Kość łokciowa (ulna) leży przyśrodkowo. Na nasadzie bliższej znajduje się wyrostek łokciowy (olecranon) — wyczuwalny punkt kostny łokcia, wcięcie bloczkowe (incisura trochlearis) obejmujące bloczek kości ramiennej, wyrostek dziobiasty (processus coronoideus) oraz wcięcie promieniowe (incisura radialis) dla głowy kości promieniowej. Na nasadzie dalszej znajduje się głowa kości łokciowej (caput ulnae) z wyrostkiem rylcowatym (processus styloideus ulnae). Kość promieniowa (radius) leży bocznie. Na nasadzie bliższej: głowa (caput radii) z dołkiem głowy, szyjka (collum radii), guzowatość kości promieniowej (tuberositas radii — przyczep ścięgna m. dwugłowego ramienia). Na nasadzie dalszej: wyrostek rylcowaty kości promieniowej (processus styloideus radii), powierzchnia stawowa nadgarstkowa dla kości łódeczkowatej i księżycowatej, wcięcie łokciowe (incisura ulnaris) dla głowy kości łokciowej. Błona międzykostna przedramienia (membrana interossea antebrachii) łączy trzon obu kości.",
        },
        {
          type: "heading",
          level: 3,
          text: "Kości dłoni — nadgarstek, śródręcze, palce",
        },
        {
          type: "paragraph",
          text: "Kości nadgarstka (ossa carpi) — 8 kości w dwóch szeregach. Szereg bliższy (od strony kości promieniowej): łódeczkowata (os scaphoideum), księżycowata (os lunatum), trójgraniasta (os triquetrum) i grochowata (os pisiforme — trzeszczka w ścięgnie zginacza łokciowego nadgarstka). Szereg dalszy: czworoboczna większa (os trapezium), czworoboczna mniejsza (os trapezoideum), główkowata (os capitatum — największa), haczykowata (os hamatum — z haczykiem hamulus ossis hamati). Kości śródręcza (ossa metacarpi) — I-V, podstawa (basis), trzon (corpus), głowa (caput). Kości palców (ossa digitorum manus — paliczki/phalanx): kciuk ma 2 paliczki (brak środkowego), pozostałe palce po 3 paliczki: bliższy (phalanx proximalis), środkowy (phalanx media), dalszy (phalanx distalis).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-26",
          question: "Gdzie znajduje się bruzda nerwu promieniowego i jakie ma znaczenie kliniczne?",
          answer: "Na tylnej powierzchni trzonu kości ramiennej. Złamanie trzonu kości ramiennej w tym miejscu grozi uszkodzeniem nerwu promieniowego, co objawia się opadnięciem ręki (ręka opadająca).",
          examRef: "",
        },
        {
          id: "ost-27",
          question: "Wymień kości szeregu bliższego i dalszego nadgarstka.",
          answer: "Szereg bliższy: łódeczkowata, księżycowata, trójgraniasta, grochowata. Szereg dalszy: czworoboczna większa, czworoboczna mniejsza, główkowata, haczykowata.",
          examRef: "",
        },
        {
          id: "ost-28",
          question: "Który wyrostek łopatki łączy się z obojczykiem?",
          answer: "Wyrostek barkowy (acromion).",
          examRef: "",
        },
        {
          id: "ost-29",
          question: "Jakie struktury przyczepiają się do guzka większego i mniejszego kości ramiennej?",
          answer: "Guzek większy: m. nadgrzebieniowy, podgrzebieniowy, obły mniejszy. Guzek mniejszy: m. podłopatkowy.",
          examRef: "",
        },
      ],
    },
  ],
};
