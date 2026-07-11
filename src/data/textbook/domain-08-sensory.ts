import type { TextbookDomain } from "@/types/textbook";

export const sensory: TextbookDomain = {
  id: "sensory",
  title: "Narządy Zmysłów",
  shortTitle: "Zmysły",
  icon: "👁️",
  sections: [
    {
      id: "narzad-wzroku",
      title: "Narząd wzroku — oko",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Warstwy gałki ocznej",
        },
        {
          type: "paragraph",
          text: "Gałka oczna zbudowana jest z trzech warstw: włóknistej (błona włóknista), naczyniowej (błona naczyniowa) i siatkówki (siatkówka).",
        },
        {
          type: "paragraph",
          text: "Warstwa włóknista (zewnętrzna) obejmuje rogówkę (cornea — załamuje i przepuszcza światło) i twardówkę (sclera — ochrona). Warstwa naczyniowa (środkowa) obejmuje tęczówkę (iris), ciało rzęskowe (corpus ciliare z mięśniem rzęskowym do akomodacji) oraz naczyniówkę (choroid).",
        },
        {
          type: "paragraph",
          text: "Siatkówka (retina) dzieli się na część wzrokową (zawiera czopki dla widzenia barwnego i pręciki dla widzenia światła/kształtu) oraz część ślepą (bez receptorów). Tarcza nerwu wzrokowego (optic disc) jest pozbawiona receptorów — stanowi plamę ślepą (martwe pole).",
        },
        {
          type: "table",
          headers: ["Warstwa", "Elementy", "Funkcja"],
          rows: [
            ["Włóknista (zewnętrzna)", "Rogówka, twardówka", "Załamuje światło (rogówka), ochrona (twardówka)"],
            ["Naczyniowa (środkowa)", "Tęczówka, ciało rzęskowe, naczyniówka", "Regulacja światła (tęczówka), akomodacja (m. rzęskowy)"],
            ["Siatkówka (wewnętrzna)", "Część wzrokowa (czopki, pręciki), część ślepa", "Fotorecepcja — czopki (barwy), pręciki (światło/kształt)"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Droga promieni świetlnych i elementy załamujące",
        },
        {
          type: "paragraph",
          text: "Elementem, który nie załamuje promienia świetlnego, jest źrenica (pupil) — pytanie nr 16. Źrenica jest otworem w tęczówce, który reguluje ilość światła wpadającego do oka, ale sama nie załamuje światła.",
        },
        {
          type: "paragraph",
          text: "Droga promienia świetlnego: rogówka → ciecz wodnista (w komorze przedniej) → soczewka → ciało szkliste (w komorze tylnej). Elementy załamujące: rogówka (najsilniej), ciecz wodnista, soczewka (zmienia kształt przy akomodacji), ciało szkliste.",
        },
        {
          type: "paragraph",
          text: "Ciecz wodnista jest wydzielana przez ciało rzęskowe, przepływa z komory tylnej do przedniej przez źrenicę. Komory oka (przednia i tylna) wypełnione są cieczą wodnistą.",
        },
        {
          type: "table",
          headers: ["Element", "Funkcja", "Załamuje światło?"],
          rows: [
            ["Rogówka", "Ochrona, załamanie światła", "Tak (najsilniej)"],
            ["Ciecz wodnista", "Odżywianie, ciśnienie", "Tak"],
            ["Soczewka", "Akomodacja, ogniskowanie", "Tak"],
            ["Ciało szkliste", "Wypełnia gałkę oczną", "Tak"],
            ["Źrenica", "Regulacja ilości światła", "Nie"],
            ["Tęczówka", "Regulacja średnicy źrenicy", "Nie"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Aparat ochronny i ruchowy oka",
        },
        {
          type: "paragraph",
          text: "Mięśnie zewnętrzne oka są poprzecznie prążkowane (szkieletowe). Unerwienie: III nerw okoruchowy (większość mięśni), IV bloczkowy (m. skośny górny), VI odwodzący (m. prosty boczny). Aparat łzowy: gruczoł łzowy (leży w górnym bocznym kącie oczodołu), punkty łzowe (puncta), kanaliki, woreczek łzowy, przewód nosowo-łzowy (uchodzi do jamy nosowej).",
        },
      ],
      recallQuestions: [
        {
          id: "sen-1",
          question: "Który element oka nie załamuje promieni świetlnych?",
          answer: "Źrenica (pupil).",
          examRef: "Q16",
        },
        {
          id: "sen-2",
          question: "Wymień elementy załamujące promienie świetlne w oku.",
          answer: "Rogówka, ciecz wodnista, soczewka i ciało szkliste.",
          examRef: "Q16",
        },
        {
          id: "sen-5",
          question: "Jakie są trzy warstwy gałki ocznej (od zewnątrz)?",
          answer: "Włóknista (rogówka + twardówka), naczyniowa (tęczówka + ciało rzęskowe + naczyniówka), siatkówka (część wzrokowa + ślepa).",
          examRef: "",
        },
        {
          id: "sen-6",
          question: "Które nerwy czaszkowe unerwiają mięśnie zewnętrzne oka?",
          answer: "III (okoruchowy), IV (bloczkowy — m. skośny górny), VI (odwodzący — m. prosty boczny).",
          examRef: "",
        },
        {
          id: "sen-7",
          question: "Jaka jest droga odprowadzania łez z oka?",
          answer: "Gruczoł łzowy → punkty łzowe → kanaliki → woreczek łzowy → przewód nosowo-łzowy → jama nosowa.",
          examRef: "",
        },
        {
          id: "sen-8",
          question: "Dlaczego tarcza nerwu wzrokowego nazywana jest plamą ślepą?",
          answer: "Ponieważ nie zawiera receptorów (czopków ani pręcików) — jest pozbawiona fotoreceptorów.",
          examRef: "",
        },
      ],
    },
    {
      id: "narzad-sluchu",
      title: "Narząd słuchu — ucho",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Ucho środkowe",
        },
        {
          type: "paragraph",
          text: "W uchu środkowym znajduje się powietrze (żadna z wymienionych — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17.",
        },
        {
          type: "paragraph",
          text: "Ucho środkowe obejmuje: błonę bębenkową (granica z uchem zewnętrznym), jamę bębenkową (cavum tympani), trąbkę słuchową (tuba auditiva/Eustachiusa — łączy ucho środkowe z gardłem, wyrównuje ciśnienie) oraz kosteczki słuchowe: młoteczek (malleus — połączony z błoną bębenkową), kowadełko (incus), strzemiączko (stapes — połączone z okienkiem owalnym).",
        },
        {
          type: "heading",
          level: 3,
          text: "Ucho wewnętrzne (błędnik)",
        },
        {
          type: "paragraph",
          text: "Ucho wewnętrzne składa się z błędnika kostnego (wypełnionego przychłonką — perilymph) i błędnika błoniastego (wypełnionego śródchłonką — endolymph). Przewód ślimaka (ductus cochlearis) zawiera narząd Cortiego (organum spirale) — właściwy receptor słuchu. Układ przedsionkowo-łonowy (kanały półkoliste, woreczek i łagiewka) zawiera receptory równowagi. Unerwienie: nerw przedsionkowo-ślimakowy (CN VIII).",
        },
        {
          type: "table",
          headers: ["Część ucha", "Elementy", "Zawartość"],
          rows: [
            ["Ucho zewnętrzne", "Małżowina, przewód słuchowy zewnętrzny", "Powietrze"],
            ["Ucho środkowe", "Błona bębenkowa, jama bębenkowa, kosteczki (młoteczek, kowadełko, strzemiączko), trąbka słuchowa", "Powietrze"],
            ["Ucho wewnętrzne", "Ślimak (z narządem Cortiego), kanały półkoliste, woreczek, łagiewka", "Przychłonka (błędnik kostny) i śródchłonka (błędnik błoniasty)"],
          ],
        },
        {
          type: "paragraph",
          text: "Mechanizm słyszenia: fala dźwiękowa → błona bębenkowa → młoteczek → kowadełko → strzemiączko → okienko owalne → przychłonka → narząd Cortiego → impuls nerwowy → CN VIII.",
        },
      ],
      recallQuestions: [
        {
          id: "sen-3",
          question: "Co znajduje się w uchu środkowym — przychłonka, śródchłonka, limfa, czy żadna z tych?",
          answer: "Żadna — w uchu środkowym znajduje się powietrze.",
          examRef: "Q17",
        },
        {
          id: "sen-4",
          question: "Wymień trzy części ucha i ich zawartość.",
          answer: "Zewnętrzne (powietrze), środkowe (powietrze + kosteczki), wewnętrzne (przychłonka + śródchłonka).",
          examRef: "Q17",
        },
        {
          id: "sen-9",
          question: "Jakie kosteczki słuchowe znajdują się w uchu środkowym i jak są połączone?",
          answer: "Młoteczek (z błoną bębenkową) → kowadełko → strzemiączko (z okienkiem owalnym).",
          examRef: "",
        },
        {
          id: "sen-10",
          question: "Jaka jest funkcja trąbki słuchowej (Eustachiusza)?",
          answer: "Łączy ucho środkowe z gardłem — wyrównuje ciśnienie powietrza.",
          examRef: "",
        },
        {
          id: "sen-11",
          question: "Gdzie znajduje się narząd Cortiego i co jest jego bodźcem?",
          answer: "W przewodzie ślimaka (błędnik błoniasty) — fala przychłonki pobudza komórki słuchowe.",
          examRef: "",
        },
        {
          id: "sen-12",
          question: "Jaka jest różnica między przychłonką a śródchłonką?",
          answer: "Przychłonka (perilymph) w błędniku kostnym, śródchłonka (endolymph) w błędniku błoniastym.",
          examRef: "",
        },
      ],
    },
    {
      id: "smak-wech",
      title: "Smak i węch",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Narząd smaku",
        },
        {
          type: "paragraph",
          text: "Kubki smakowe znajdują się w brodawkach (papillae) języka. Unerwienie czuciowe smaku: nerw twarzowy (CN VII) — przednie 2/3 języka, nerw językowo-gardłowy (CN IX) — tylna 1/3 języka, nerw błędny (CN X) — okolica nagłośni.",
        },
        {
          type: "heading",
          level: 3,
          text: "Narząd węchu",
        },
        {
          type: "paragraph",
          text: "Nabłonek węchowy znajduje się w okolicy węchowej jamy nosowej. Nerw węchowy (CN I) — jego włókna (filae olfactoriae) przechodzą przez otwory blaszki sitowej (lamina cribrosa) kości sitowej, docierając do opuszki węchowej (bulbus olfactorius).",
        },
        {
          type: "table",
          headers: ["Zmysł", "Narząd", "Droga nerwowa"],
          rows: [
            ["Smak — przednie 2/3 języka", "Kubki smakowe w brodawkach", "CN VII (twarzowy)"],
            ["Smak — tylna 1/3 języka", "Kubki smakowe w brodawkach", "CN IX (językowo-gardłowy)"],
            ["Smak — okolica nagłośni", "Kubki smakowe", "CN X (błędny)"],
            ["Węch", "Nabłonek węchowy jamy nosowej", "CN I (węchowy) — blaszka sitowa → opuszka węchowa"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "sen-13",
          question: "Który nerw czaszkowy unerwia czuciowo smak przednich 2/3 języka?",
          answer: "CN VII (twarzowy).",
          examRef: "",
        },
        {
          id: "sen-14",
          question: "Który nerw unerwia czuciowo smak tylnej 1/3 języka?",
          answer: "CN IX (językowo-gardłowy).",
          examRef: "",
        },
        {
          id: "sen-15",
          question: "Jaka jest droga włókien węchowych od jamy nosowej do mózgu?",
          answer: "Nabłonek węchowy → włókna węchowe (przez blaszkę sitową kości sitowej) → opuszka węchowa (bulbus olfactorius).",
          examRef: "",
        },
        {
          id: "sen-16",
          question: "Które nerwy czaszkowe unerwiają smak i jaki jest ich zasięg?",
          answer: "CN VII (przednie 2/3 języka), CN IX (tylna 1/3), CN X (okolica nagłośni).",
          examRef: "",
        },
      ],
    },
  ],
};
