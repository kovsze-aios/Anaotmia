import type { TextbookDomain } from "@/types/textbook";

export const digestive: TextbookDomain = {
  id: "digestive",
  title: "Układ Pokarmowy",
  shortTitle: "Pokarmowy",
  icon: "🍽️",
  sections: [
    {
      id: "przewod-pokarmowy",
      title: "Przewód pokarmowy",
      content: [
        {
          type: "paragraph",
          text: "Układ pokarmowy składa się z przewodu pokarmowego (rury, przez którą przemieszcza się pokarm) oraz gruczołów towarzyszących, takich jak wątroba i trzustka. Wątroba i trzustka nie są przewodem dla pokarmu, mimo że strawiony pokarm trafia do wątroby za pomocą krwi (żyły wrotnej).",
        },
        {
          type: "paragraph",
          text: "Przewód pokarmowy człowieka obejmuje: jamę ustną, gardło, przełyk, żołądek, jelito cienkie (dwunastnica, jelito czcze, jelito kręte), jelito grube (kątnica, okrężnica, esica, odbytnica) oraz odbyt.",
        },
        {
          type: "heading",
          level: 3,
          text: "Jama ustna",
        },
        {
          type: "paragraph",
          text: "Jama ustna składa się ze szpary ust, przedsionka jamy ustnej (między wargami a zębami) oraz właściwej jamy ustnej (za zębami). Ślinianki (np. ślinianka przyuszna) uchodzą do przedsionka jamy ustnej. Jama ustna właściwa kończy się cieśnią gardzieli.",
        },
        {
          type: "paragraph",
          text: "Dwunastnica (duodenum) sąsiaduje z trzustką (pytanie nr 18). Jest to pierwszy odcinek jelita cienkiego, o długości około 25-30 cm, ma kształt litery C. Do dwunastnicy uchodzą przewody trzustkowy i żółciowy wspólny na brodawce większej dwunastnicy.",
        },
        {
          type: "paragraph",
          text: "Kolejno odcinki jelita cienkiego (pytanie otwarte nr 43): dwunastnica, jelito czcze (jejunum), jelito kręte (ileum).",
        },
        {
          type: "heading",
          level: 3,
          text: "Żołądek",
        },
        {
          type: "paragraph",
          text: "Żołądek składa się z wpustu, dna (położonego u góry), trzonu i odźwiernika. W odźwierniku znajduje się mięsień zwieracz, który zatrzymuje treść pokarmową. Sok żołądkowy zawiera kwas solny i pepsynę, które trawią białka i dezynfekują pokarm.",
        },
        {
          type: "heading",
          level: 3,
          text: "Jelito cienkie",
        },
        {
          type: "paragraph",
          text: "Jelito czcze ma grubszą ścianę, więcej i wyższe kosmki jelitowe — dlatego głównie w nim odbywa się wchłanianie pokarmu. Jelito kręte ma cieńszą ścianę, mniej kosmków, ale więcej grudek chłonnych (chroniących przed bakteriami).",
        },
        {
          type: "heading",
          level: 3,
          text: "Jelito grube",
        },
        {
          type: "paragraph",
          text: "Jelito grube składa się z jelita ślepego (kątnicy z wyrostkiem robaczkowym), okrężnicy (wstępującej, poprzecznej, zstępującej, esowatej/esicy) i jelita prostego (odbytnicy). Okrężnica otacza jelito cienkie. Ujście jelita krętego do kątnicy wyposażone jest w zastawkę krętniczo-kątniczą, która zapobiega cofaniu się treści i bakterii. W jelicie grubym bytuje flora bakteryjna fermentująca niestrawione węglowodany.",
        },
        {
          type: "heading",
          level: 3,
          text: "Trzustka",
        },
        {
          type: "paragraph",
          text: "Trzustka (pancreas) leży poprzecznie za żołądkiem, nie ma bezpośredniego styku z wątrobą. Głowa trzustki otoczona jest przez dwunastnicę. Trzustka ma część zewnątrzwydzielniczą (produkcja enzymów trawiennych: trypsyna, chymotrypsyna, amylaza trzustkowa, lipazy w soku trzustkowym) i wewnątrzwydzielniczą (wyspy Langerhansa — produkcja insuliny i glukagonu). Przewód trzustkowy uchodzi do dwunastnicy na brodawce większej.",
        },
      ],
      recallQuestions: [
        {
          id: "dig-1",
          question: "Z czym sąsiaduje dwunastnica?",
          answer: "Z trzustką — dwunastnica ma kształt litery C i otacza głowę trzustki.",
          examRef: "Q18",
        },
        {
          id: "dig-2",
          question: "Wymień kolejno odcinki jelita cienkiego.",
          answer: "Dwunastnica (duodenum), jelito czcze (jejunum), jelito kręte (ileum).",
          examRef: "Q43",
        },
        {
          id: "dig-4",
          question: "Wymień odcinki jelita grubego.",
          answer: "Jelito ślepe (kątnica), okrężnica (wstępująca, poprzeczna, zstępująca, esowata), odbytnica (jelito proste).",
          examRef: "Wykład",
        },
        {
          id: "dig-5",
          question: "Jakie enzymy trawienne zawiera sok trzustkowy?",
          answer: "Trypsyna i chymotrypsyna (trawią białka), amylaza trzustkowa (cukry), lipazy (tłuszcze).",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "watroba-i-sieci-dziwne",
      title: "Wątroba i sieci dziwne (rete mirabile)",
      content: [
        {
          type: "paragraph",
          text: "Wątroba jest największym gruczołem ciała (nie licząc tarczycy jako największego gruczołu dokrewnego). Pełni funkcje: detoksykacyjną, syntezy białek, magazynowania glikogenu, produkcji żółci.",
        },
        {
          type: "heading",
          level: 3,
          text: "Unaczynienie wątroby — podwójne unaczynienie",
        },
        {
          type: "paragraph",
          text: "Wątroba jest narządem o podwójnym unaczynieniu. Krew odżywcza (prywatna) doprowadzana jest przez tętnicę wątrobową właściwą (od tętnicy wątrobowej wspólnej, która jest odgałęzieniem pnia trzewnego). Ta krew natleniona zaopatruje komórki wątroby w tlen i substancje odżywcze — tworzy normalną sieć tętniczo-żylną (tętnica → naczynia włosowate → żyły wątrobowe → żyła główna dolna → prawy przedsionek).",
        },
        {
          type: "paragraph",
          text: "Krew czynnościowa (publiczna) doprowadzana jest z jelit przez żyłę wrotną. Żyła wrotna (vena portae) powstaje z połączenia żyły śledzionowej, żyły krezkowej górnej i żyły krezkowej dolnej. Zbiera krew bogatą we wchłonięte w jelitach substancje odżywcze i prowadzi ją do wątroby.",
        },
        {
          type: "heading",
          level: 3,
          text: "Sieć dziwna żylno-żylna w wątrobie",
        },
        {
          type: "paragraph",
          text: "W wątrobie występuje sieć dziwna żylno-żylna (rete mirabile) — pytanie nr 12. Żyła wrotna wchodzi do wątroby przez wnękę wątroby (wrota wątroby) i rozgałęzia się na naczynia włosowate (sinusoidy) wewnątrz zrazików wątroby. Normalnie żyły nie rozgałęziają się — tutaj jednak dochodzi do rozgałęzienia, ponieważ konieczne jest oddanie substancji odżywczych komórkom wątroby. Po oddaniu substancji odżywczych krew z sinusoid zbiega się w żyły wątrobowe, które uchodzą do żyły głównej dolnej.",
        },
        {
          type: "paragraph",
          text: "Sieć dziwna żylno-żylna występuje TYLKO w wątrobie.",
        },
        {
          type: "table",
          headers: ["Rodzaj sieci", "Występowanie", "Opis"],
          rows: [
            ["Tętniczo-żylna (normalna)", "We wszystkich narządach", "Tętnica → naczynia włosowate → żyła"],
            ["Żylno-żylna (dziwna)", "TYLKO w wątrobie", "Żyła wrotna → sinusoidy → żyły wątrobowe"],
            ["Tętniczo-tętnicza (dziwna)", "W nerkach (kłębuszek nerkowy)", "Tętnica → naczynia włosowate → tętniczka odprowadzająca"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Pień trzewny i tętnice nieparzyste aorty brzusznej",
        },
        {
          type: "paragraph",
          text: "Aorta brzuszna oddaje trzy nieparzyste odgałęzienia: pień trzewny, tętnicę krezkową górną i tętnicę krezkową dolną. Pień trzewny dzieli się na tętnicę wątrobową (wątroba), śledzionową (śledziona) i żołądkową (żołądek). Tętnica krezkowa górna zaopatruje całe jelito cienkie i początkowe 2/3 jelita grubego. Tętnica krezkowa dolna zaopatruje pozostałą część jelita grubego (z wyjątkiem końcowego odcinka odbytnicy, który jest zaopatrywany przez tętnicę biodrową wewnętrzną).",
        },
      ],
      recallQuestions: [
        {
          id: "dig-3",
          question: "Gdzie występuje sieć dziwna żylno-żylna w układzie pokarmowym?",
          answer: "W wątrobie (żyła wrotna → sinusoidy → żyły wątrobowe).",
          examRef: "Q12",
        },
        {
          id: "dig-6",
          question: "Z połączenia których żył powstaje żyła wrotna?",
          answer: "Żyły śledzionowej, żyły krezkowej górnej i żyły krezkowej dolnej.",
          examRef: "Wykład",
        },
        {
          id: "dig-7",
          question: "Jakie są trzy nieparzyste odgałęzienia aorty brzusznej?",
          answer: "Pień trzewny, tętnica krezkowa górna, tętnica krezkowa dolna.",
          examRef: "Wykład",
        },
        {
          id: "dig-8",
          question: "Jakie trzy tętnice odchodzą od pnia trzewnego?",
          answer: "Tętnica wątrobowa (wspólna), tętnica śledzionowa, tętnica żołądkowa (lewa).",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "transport-tluszczow-limfa",
      title: "Transport tłuszczów — układ limfatyczny i ominięcie żyły wrotnej",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Problem lepkości tłuszczów",
        },
        {
          type: "paragraph",
          text: "Tłuszcz jest jednym ze składników pokarmowych wchłanianych w jelitach. Tłuszcz jest lepki — krew, która odbiera substancje odżywcze w układzie żyły wrotnej, byłaby bardzo narażona na zwiększenie swojej lepkości, czyli na zatory (ryzyko embolizmu).",
        },
        {
          type: "paragraph",
          text: "Z tego powodu krew NIE odprowadza tłuszczu z jelit. Tłuszcze są transportowane wyłącznie przez układ limfatyczny. Naczynia limfatyczne jamy brzusznej zbierające chłonkę z jelit odprowadzają nie tylko chłonkę, ale również wchłonięte w jelitach tłuszcze. Stąd chłonka w tym rejonie ma biały, mleczny kolor (stąd nazwa 'zbiornik mleczu' — cisterna chyli).",
        },
        {
          type: "heading",
          level: 3,
          text: "Droga chłonki z tłuszczami do krwiobiegu",
        },
        {
          type: "paragraph",
          text: "Pnie jelitowe (zbierające chłonkę z jelit, bogatą w tłuszcze) uchodzą do przewodu piersiowego (ductus thoracicus), który zaczyna się w jamie brzusznej zgrubieniem zwanym zbiornikiem mleczu. Przewód piersiowy biegnie przez całą klatkę piersiową i uchodzi do kąta żylnego lewego (miejsce połączenia lewej żyły szyjnej wewnętrznej z lewą żyłą podobojczykową). W kątach żylnych chłonka miesza się z krwią i wraca do krążenia.",
        },
        {
          type: "table",
          headers: ["Składnik", "Droga transportu", "Dlaczego?"],
          rows: [
            ["Węglowodany, białka", "Żyła wrotna → wątroba", "Rozpuszczalne w wodzie — bezpieczne dla krwi"],
            ["Tłuszcze", "Naczynia limfatyczne (kosmki jelitowe) → pnie jelitowe → przewód piersiowy → kąt żylny lewy → krew", "Zbyt lepkie — ryzyko zatorów w żyle wrotnej"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Kąty żylne jako wrota chłonki",
        },
        {
          type: "paragraph",
          text: "Kąt żylny to miejsce połączenia żyły szyjnej wewnętrznej z żyłą podobojczykową, z którego powstaje żyła ramienno-głowowa. Do kąta żylnego prawego uchodzi przewód chłonny prawy (zbierający chłonkę z prawej połowy głowy, szyi, prawej kończyny górnej i prawej połowy klatki piersiowej). Do kąta żylnego lewego uchodzi przewód piersiowy (zbierający chłonkę z lewej połowy głowy, szyi, lewej kończyny górnej, lewej połowy klatki piersiowej, całej jamy brzusznej i obu kończyn dolnych).",
        },
        {
          type: "heading",
          level: 3,
          text: "Pnie chłonne główne",
        },
        {
          type: "list",
          items: [
            "Pnie szyjne — z głowy i szyi",
            "Pnie podobojczykowe — z kończyn górnych",
            "Pnie oskrzelowo-śródpiersiowe — z klatki piersiowej",
            "Pnie jelitowe — z jamy brzusznej",
            "Pnie lędźwiowe — z kończyn dolnych",
          ],
        },
        {
          type: "paragraph",
          text: "Naczynia limfatyczne → węzły chłonne ('oczyszczalnie ścieków') → pnie → przewody (piersiowy / chłonny prawy) → kąty żylne → krew.",
        },
      ],
      recallQuestions: [
        {
          id: "dig-9",
          question: "Dlaczego tłuszcze nie są transportowane żyłą wrotną, tylko układem limfatycznym?",
          answer: "Ponieważ tłuszcz jest lepki — transport żyłą wrotną groziłby zatorami (embolizmem). Tłuszcze są transportowane przez naczynia limfatyczne do przewodu piersiowego.",
          examRef: "Wykład",
        },
        {
          id: "dig-10",
          question: "Gdzie uchodzi przewód piersiowy?",
          answer: "Do kąta żylnego lewego (połączenie lewej żyły szyjnej wewnętrznej z lewą żyłą podobojczykową).",
          examRef: "Wykład",
        },
        {
          id: "dig-11",
          question: "Jakie są główne pnie chłonne i skąd zbierają chłonkę?",
          answer: "Szyjne (głowa/szyja), podobojczykowe (kończyny górne), oskrzelowo-śródpiersiowe (klatka piersiowa), jelitowe (brzuch), lędźwiowe (kończyny dolne).",
          examRef: "Wykład",
        },
        {
          id: "dig-12",
          question: "Co to jest zbiornik mleczu (cisterna chyli) i gdzie się znajduje?",
          answer: "Zgrubienie na początku przewodu piersiowego w jamie brzusznej, zbierające mlecznobiałą chłonkę z jelit (bogatą w tłuszcze).",
          examRef: "Wykład",
        },
      ],
    },
  ],
};
