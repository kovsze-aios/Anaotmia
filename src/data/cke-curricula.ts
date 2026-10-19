/**
 * Ground-truth CKE Curriculum Matrices for Matura Poziom Rozszerzony:
 * - Biologia (Formuła 2023+ & Formuła 2015): Działy I–XI
 * - Chemia (Formuła 2023+ & Formuła 2015): Działy I–XIII
 *
 * Includes formula status ('core' | '2015-only' | '2023-only'), requirement
 * codes, operational verb guides (Wyjaśnij, Wykaż, Uzasadnij, Określ, Porównaj),
 * and exam traps (Pułapki CKE).
 */

export type CkeFormula = "2015" | "2023";
export type CkeTopicStatus = "core" | "2015-only" | "2023-only";

export interface CkeRequirement {
  code: string;
  description: string;
  status: CkeTopicStatus;
  formulas: CkeFormula[];
  note2015?: string;
  note2023?: string;
}

export interface CkeSectionCurriculum {
  id: string;
  sectionCode: string; // e.g. "Dział I"
  title: string;
  subtitle: string;
  status: CkeTopicStatus;
  formulas: CkeFormula[];
  requirements: CkeRequirement[];
  formulaDifferences: {
    formula2015: string;
    formula2023: string;
  };
  examTraps: string[];
  operationalVerbs: {
    verb: string;
    rule: string;
    example: string;
  }[];
  keywords: string[];
}

export const CKE_OPERATIONAL_VERBS_GUIDE = [
  {
    verb: "Wyjaśnij (Jak? Dlaczego?)",
    rule: "Wymaga pełnego łańcucha przyczynowo-skutkowego: PRZYCZYNA → MECHANIZM (proces pośredni) → SKUTEK. Pominięcie ogniwa pośredniego skutkuje 0 pkt w kluczu CKE.",
  },
  {
    verb: "Wykaż / Udowodnij",
    rule: "Musisz zestawić cechę budowy z pełnioną funkcją biologiczną lub właściwością chemiczną (np. obecność grzebieni mitochondrialnych zwiększa powierzchnię błony wewnętrznej → więcej kompleksów łańcucha oddechowego → intensywniejsza synteza ATP).",
  },
  {
    verb: "Uzasadnij",
    rule: "Podaj argument merytoryczny oparty na danych z tekstu/wykresu/schematu ORAZ wiedzy teoretycznej, bezpośrednio potwierdzający postawioną tezę.",
  },
  {
    verb: "Porównaj",
    rule: "W każdym zdaniu musisz odnieść się do OBU porównywanych obiektów/procesów względem tego samego kryterium (np. „W procesie A zachodzi X, natomiast w procesie B zachodzi Y”).",
  },
  {
    verb: "Określ / Podaj",
    rule: "Wymaga krótkiej, jednoznacznej odpowiedzi bez konieczności opisywania mechanizmu (np. kierunek zmiany, nazwa związku, odczyn roztworu).",
  },
] as const;

export const BIOLOGY_CKE_CURRICULUM: CkeSectionCurriculum[] = [
  {
    id: "cke-bio-dzial-1",
    sectionCode: "Dział I",
    title: "Dział I. Chemizm życia",
    subtitle: "Składniki nieorganiczne i organiczne: woda, sole, węglowodany, lipidy, białka i kwasy nukleinowe",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "I.1.a",
        description: "Przedstawia znaczenie biologiczne wody wynikające z jej właściwości fizykochemicznych (polarność, wiązania wodorowe, ciepło właściwe, ciepło parowania, napięcie powierzchniowe, gęstość).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.1.b",
        description: "Określa rolę makro- i mikroelementów (C, H, O, N, P, S, Ca, Mg, Fe, K, Na, I, Co) w funkcjonowaniu organizmów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.2.a",
        description: "Rozróżnia monosacharydy (ryboza, deoksyryboza, glukoza, fruktoza, galaktoza), disacharydy (sacharoza, laktoza, maltoza) i polisacharydy (skrobia, glikogen, celuloza, chityna) oraz wiąże ich budowę z funkcją.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.2.b",
        description: "Porównuje lipidy proste (tłuszcze właściwe, woski) i złożone (fosfolipidy, glikolipidy) oraz steroidy (cholesterol), wykazując wpływ nasycenia kwasów tłuszczowych na płynność błon.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.2.c",
        description: "Opisuje strukturę I-, II-, III- i IV-rzędową białek, określa wiązania stabilizujące poszczególne rzędowości oraz porównuje koagulację (wysalanie) z denaturacją.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.2.d",
        description: "Porównuje budowę chemiczną i przestrzenną nukleotydów, DNA, RNA oraz przenośników energii i elektronów (ATP, NAD+, NADP+, FAD).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Wymaga znajomości klasycznych prób wykrywania związków organicznych (próba biuretowa, ksantoproteinowa, Fehlinga/Trommera, płyn Lugola, Sudan III) w kontekście planowania doświadczeń.",
      formula2023: "Pogłębiony nacisk na powiązanie struktury przestrzennej makrocząsteczek (domen białkowych, amfipatyczności fosfolipidów, wiązań α- i β-glikozydowych) z ich funkcją w komórce.",
    },
    examTraps: [
      "Pułapka CKE: Denaturacja NIE niszczy struktury pierwszorzędowej białka (wiązania peptydowe pozostają nienaruszone!). Niszczy struktury II-, III- i IV-rzędową.",
      "Pułapka CKE: Cholesterol w błonach komórkowych zwierząt zmniejsza płynność błony w wyższych temperaturach, ale zapobiega jej zestaleniu w niskich temperaturach (bufor płynności).",
      "Pułapka CKE: Pisząc o cieple parowania wody (termoregulacja przez pocenie się), nie myl go z dużym ciepłem właściwym wody (ochrona przed nagłymi zmianami temperatury ciała i siedliska wodnego).",
    ],
    operationalVerbs: [
      {
        verb: "Wykaż",
        rule: "Połącz polarność cząsteczki wody z jej funkcją rozpuszczalnika.",
        example: "Cząsteczki wody są dipolami (przyczyna), dzięki czemu tworzą otoczki hydratacyjne wokół jonów i cząsteczek polarnych (mechanizm), co umożliwia ich rozpuszczanie i transport oraz zachodzenie reakcji biochemicznych w środowisku wodnym (skutek).",
      },
    ],
    keywords: ["woda", "wiązania wodorowe", "węglowodany", "lipidy", "fosfolipidy", "białka", "struktura białka", "denaturacja", "kwasy nukleinowe", "ATP", "chemizm"],
  },
  {
    id: "cke-bio-dzial-2",
    sectionCode: "Dział II",
    title: "Dział II. Komórka",
    subtitle: "Komórka prokariotyczna i eukariotyczna, błony biologiczne, organella, cytoszkielet i podziały komórkowe",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "II.1.a",
        description: "Porównuje budowę komórki prokariotycznej i eukariotycznej (roślinnej, zwierzęcej, grzybowej) na podstawie schematów i mikrofotografii TEM/SEM.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.2.a",
        description: "Wyjaśnia model płynnej mozaiki błon biologicznych oraz porównuje transport bierny (dyfuzja prosta, ułatwiona, osmoza) z transportem czynnym (pompa sodowo-potasowa, pompa protonowa) i pęcherzykowym (egzocytoza, endocytoza).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.3.a",
        description: "Wykazuje związek budowy z funkcją dla jądra komórkowego, rybosomów, siateczki śródplazmatycznej (RER, SER), aparatu Golgiego, lizosomów, peroksysomów i wakuoli.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.3.b",
        description: "Przedstawia argumenty przemawiające za teorią endosymbiozy mitochondriów i plastydów (błony, kolisty DNA, rybosomy 70S, podział przez przewężenie).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.4.a",
        description: "Analizuje przebieg cyklu komórkowego (interfaza: G1, S, G2; faza M), porównuje mitozę z mejozą (zmiany ilości DNA — c i liczby chromosomów — n) oraz wyjaśnia znaczenie apoptozy.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Standardowy zakres cytologii z dużym naciskiem na doświadczenia z plazmolizą i deplazmolizą w komórkach roślinnych.",
      formula2023: "Rozszerzony nacisk na punkty kontrolne cyklu komórkowego (G1/S, G2/M, wrzeciona podziałowego), rolę białka p53 oraz współpracę organelli w szlaku sekrecyjnym białek.",
    },
    examTraps: [
      "Pułapka CKE: W komórce zwierzęcej umieszczonej w roztworze hipertonicznym NIE zachodzi plazmoliza (brak ściany komórkowej!) — zachodzi obkurczanie komórki (krenacja).",
      "Pułapka CKE: Po replikacji DNA w fazie S zmienia się zawartość DNA (z 2c na 4c), ale liczba chromosomów (2n) NIE ulega zmianie (chromosomy stają się dwuchromatydowe).",
      "Pułapka CKE: Argumentując teorię endosymbiozy, pisz o „obecności dwóch błon różniących się składem lipidowo-białkowym”, a nie tylko o „podwójnej błonie” (jądro też ma otoczkę z dwóch błon, a nie powstało przez endosymbiozę w tym samym sensie).",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Opisz zjawisko osmozy używając pojęć potencjału wody lub stężenia roztworu.",
        example: "Roztwór na zewnątrz komórki jest hipertoniczny względem soku komórkowego (przyczyna), dlatego woda przepływa na drodze osmozy z wakuoli na zewnątrz komórki (mechanizm), co prowadzi do zmniejszenia objętości protoplastu i jego odstawania od ściany komórkowej, czyli plazmolizy (skutek).",
      },
    ],
    keywords: ["komórka", "błona komórkowa", "osmoza", "plazmoliza", "mitochondrium", "chloroplast", "endosymbioza", "mitoza", "mejoza", "cykl komórkowy", "apoptoza", "cytoszkielet"],
  },
  {
    id: "cke-bio-dzial-3",
    sectionCode: "Dział III",
    title: "Dział III. Energia i metabolizm",
    subtitle: "Enzymy, kinetyka i inhibicja, oddychanie tlenowe, fermentacje, fotosynteza (C3, C4, CAM) i chemosynteza",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "III.1.a",
        description: "Wyjaśnia mechanizm katalizy enzymatycznej (obniżanie energii aktywacji, kompleks enzym-substrat), wpływ pH, temperatury i stężenia substratu na szybkość reakcji (stała Michaelisa Km).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "III.1.b",
        description: "Rozróżnia inhibicję odwracalną (kompetycyjną i niekompetycyjną) oraz nieodwracalną, a także wyjaśnia mechanizm regulacji allosterycznej i ujemnego sprzężenia zwrotnego.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "III.2.a",
        description: "Analizuje etapy oddychania tlenowego (glikoliza, reakcja pomostowa, cykl Krebsa, łańcuch oddechowy i chemiosmoza), porównuje fosforylację substratową z oksydacyjną oraz omawia fermentację mleczanową i alkoholową.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "III.3.a",
        description: "Opisuje fazę zależną od światła (fosforylacja niecykliczna i cykliczna) oraz fazę niezależną od światła (cykl Calvina: karboksylacja, redukcja, regeneracja), porównuje fotosyntezę C3, C4 i CAM oraz omawia fotooddychanie.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "III.3.b",
        description: "Porównuje fotosyntezę z chemosyntezą pod względem źródła energii wykorzystywanej do asymilacji CO2.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Silny nacisk na bilans energetyczny oddychania i klasyczne doświadczenia z elodeą (moczarką kanadyjską) badające wpływ światła, CO2 i temperatury na intensywność fotosyntezy.",
      formula2023: "Pogłębiona analiza wykresów kinetyki Michaelisa-Menten (wpływ inhibitora kompetycyjnego i niekompetycyjnego na Vmax oraz Km), beta-oksydacji kwasów tłuszczowych i mechanizmu chemiosmozy (gradient protonowy H+).",
    },
    examTraps: [
      "Pułapka CKE: Enzymy NIE przesuwają stanu równowagi reakcji i NIE zmieniają efektu energetycznego (ΔG) reakcji — jedynie obniżają energię aktywacji, przyspieszając osiągnięcie równowagi.",
      "Pułapka CKE: W fermentacji jedynym etapem dostarczającym ATP jest glikoliza! Redukcja pirogronianu (do mleczanu lub etanolu) służy wyłącznie odtworzeniu puli NAD+, aby glikoliza mogła zachodzić dalej.",
      "Pułapka CKE: Tlen wydzielany podczas fotosyntezy pochodzi z fotolizy WODY (H2O), a NIE z dwutlenku węgla (CO2).",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Wyjaśniając syntezę ATP w mitochondrium lub chloroplaście, zawsze opisz chemiosmozę.",
        example: "Transport elektronów przez białka łańcucha oddechowego dostarcza energii do pompowania protonów (H+) z matriks do przestrzeni międzybłonowej (przyczyna), co wytwarza gradient elektrochemiczny (protonomotoryczny); powrót protonów przez kanał syntazy ATP zgodnie z gradientem stężeń napędza fosforylację ADP do ATP (mechanizm i skutek).",
      },
    ],
    keywords: ["enzym", "kataliza", "inhibicja", "Km", "glikoliza", "cykl Krebsa", "łańcuch oddechowy", "chemiosmoza", "fermentacja", "fotosynteza", "cykl Calvina", "RuBisCO", "C3", "C4", "CAM"],
  },
  {
    id: "cke-bio-dzial-4",
    sectionCode: "Dział IV",
    title: "Dział IV. Różnorodność bezstrunowców i roślin (Systematyka i fizjologia)",
    subtitle: "Wirusy, bakterie, protisty, grzyby, tkanki i fizjologia roślin oraz anatomia porównawcza bezkręgowców i strunowców",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "IV.1.a",
        description: "Charakteryzuje wirusy (cykl lityczny i lizogeniczny bakteriofagów, retrowirusy/HIV), wiroidy i priony oraz przedstawia budowę i procesy życiowe bakterii (transformacja, transdukcja, koniugacja).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.2.a",
        description: "Omawia różnorodność protistów (cykl rozwojowy zarodźca malarii Plasmodium), grzybów i porostów (mikoryza, bioindykacja).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.3.a",
        description: "Porównuje przemianę pokoleń (gametofit vs. sporofit) u mszaków, paprotników, roślin nagozalążkowych i okrytozalążkowych (podwójne zapłodnienie).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.3.b",
        description: "Wykazuje związek budowy tkanek roślinnych (merystemy, miękisz, kolenchyma, sklerenchyma, ksylem, floem, skórka) z ich funkcją oraz wyjaśnia mechanizm transportu wody (siła ssąca liści, kohezja, adhezja) i asymilatów, działanie fitohormonów (auksyny, gibereliny, cytokininy, etylen, ABA) oraz ruchy roślin.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.4.a",
        description: "Analizuje ewolucyjne tendencje w budowie układów narządów bezkręgowców i kręgowców (powłokowy, krwionośny, oddechowy, wydalniczy, nerwowy; owodniowce vs. bezowodniowce).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.4.b",
        description: "Szczegółowa systematyka bezkręgowców oraz pełne cykle rozwojowe pasożytów ze wszystkimi postaciami larwalnymi (miracidium, sporocysta, redia, cerkaria, metacerkaria u motylicy wątrobowej; koracidium, procerkoid, plerocerkoid u bruzdogłowca szerokiego).",
        status: "2015-only",
        formulas: ["2015"],
        note2015: "Obowiązuje pełna znajomość szczegółowych stadiów larwalnych przywr i tasiemców oraz rozbudowana systematyka typów i gromad bezkręgowców.",
        note2023: "W Formule 2023+ szczegółowe nazwy stadiów larwalnych motylicy i bruzdogłowca są wyłączone z pamięciowego opanowania (analizowane wyłącznie na podstawie schematu w zadaniu).",
      },
    ],
    formulaDifferences: {
      formula2015: "Wymaga szczegółowej znajomości systematyki bezkręgowców oraz pamięciowego opanowania cykli rozwojowych motylicy wątrobowej i bruzdogłowca szerokiego (`2015-only`).",
      formula2023: "Ogranicza szczegółową systematykę bezkręgowców na rzecz analizy adaptacji funkcjonalnych (anatomia porównawcza układów narządów) oraz fizjologii roślin (potencjał wody Ψ, auksyny i wzrost kwasowy ściany komórkowej).",
    },
    examTraps: [
      "Pułapka CKE: Żywicielem ostatecznym zarodźca malarii (Plasmodium) jest KOMAR widliszek (u niego zachodzi rozmnażanie płciowe pasożyta!), a człowiek jest żywicielem pośrednim.",
      "Pułapka CKE: Кoniugacja u bakterii i orzęsków NIE jest rozmnażaniem płciowym (nie zwiększa liczby osobników!), lecz procesem płciowym prowadzącym do rekombinacji materiału genetycznego.",
      "Pułapka CKE: U roślin naczyniowych transport wody w cewkach i naczyniach ksylemu jest procesem BIERNYM (nie zużywa ATP), napędzanym transpiracją i spójnością (kohezją) cząsteczek wody; załadunek sacharozy do rurek sitowych floemu jest procesem CZYNNYM.",
    ],
    operationalVerbs: [
      {
        verb: "Wykaż",
        rule: "Powiąż obecność martwych komórek ksylemu z wydajnością transportu wody.",
        example: "Człony naczyń są martwymi komórkami pozbawionymi protoplastu i ścian poprzecznych (przyczyna), co zmniejsza opór hydrauliczny podczas przepływu roztworu (mechanizm) i umożliwia szybki, masowy transport wody z solami mineralnymi na duże odległości (skutek).",
      },
    ],
    keywords: ["wirusy", "bakterie", "protisty", "grzyby", "mszaki", "paprotniki", "nagozalążkowe", "okrytozalążkowe", "tkanki roślinne", "fitohormony", "bezkręgowce", "strunowce", "pasożyty", "motylica"],
  },
  {
    id: "cke-bio-dzial-5",
    sectionCode: "Dział V",
    title: "Dział V. Budowa i funkcjonowanie organizmu człowieka",
    subtitle: "Tkanki zwierzęce, homeostaza oraz układy: ruchu, pokarmowy, oddechowy, krążenia, odpornościowy, wydalniczy, nerwowy, dokrewny i rozrodczy",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "V.1.a",
        description: "Rozpoznaje tkanki zwierzęce (nabłonkowa, łączna właściwa, chrzęstna, kostna, krew, mięśniowa poprzecznie prążkowana szkieletowa i sercowa, gładka, nerwowa) i wiąże ich budowę z funkcją.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.2.a",
        description: "Wyjaśnia molekularny mechanizm skurczu sarkomeru (aktyna, miozyna, jony Ca2+, troponina, tropomiozyna, ATP), antagonizm mięśni oraz budowę stawów i kości.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.3.a",
        description: "Analizuje trawienie i wchłanianie białek, cukrów i tłuszczów w kolejnych odcinkach przewodu pokarmowego, rolę wątroby i trzustki oraz regulację nerwowo-humoralną.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.4.a",
        description: "Wyjaśnia mechanizm wentylacji płuc (ciśnienie w jamie opłucnej), wymiany gazowej, transportu O2 i CO2 (krzywa dysocjacji oksyhemoglobiny, efekt Bohra, jon wodorowęglanowy HCO3-) oraz automatyzm serca i regulację ciśnienia krwi.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.5.a",
        description: "Porównuje odporność nieswoistą i swoistą (komórkową i humoralną, limfocyty T i B, przeciwciała, prezentacja antygenu MHC I i II), odporność czynną i bierną oraz wyjaśnia konflikt serologiczny w układzie AB0 i Rh.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.6.a",
        description: "Opisuje etapy powstawania moczu w nefronie (filtracja kłębuszkowa, resorpcja obowiązkowa i nadobowiązkowa, sekrecja kanalikowa, wzmacniacz przeciwprądowy w pętli Henlego) i regulację hormonalną (ADH/wazopresyna, aldosteron, układ RAA).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.7.a",
        description: "Wyjaśnia powstawanie potencjału spoczynkowego i czynnościowego neuronu (depolaryzacja, repolaryzacja, hiperpolaryzacja), przewodzenie skokowe, działanie synapsy chemicznej, łuk odruchowy, antagonizm układu współczulnego i przywspółczulnego oraz regulację hormonalną (oś podwzgórze-przysadka, insulina/glukagon, kalcytonina/parathormon, cykl miesiączkowy).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Klasyczne ujęcie fizjologii układów narządów człowieka z dużym udziałem zadań dotyczących higieny, chorób zakaźnych i cywilizacyjnych.",
      formula2023: "Silniejszy nacisk na mechanizmy ujemnego sprzężenia zwrotnego w osiach neuroendokrynnych, interpretację krzywej dysocjacji hemoglobiny (efekt Bohra, mioglobina vs. hemoglobina płodowa HbF) oraz mechanizmy immunologiczne.",
    },
    examTraps: [
      "Pułapka CKE: Żółć NIE jest enzymem i NIE trawi tłuszczów chemicznie! Żółć emulguje tłuszcze (rozbija duże krople na małe kropelki), co zwiększa powierzchnię dostępu dla lipazy trzustkowej.",
      "Pułapka CKE: Większość dwutlenku węgla (ok. 70–80%) jest transportowana we krwi w postaci jonów wodorowęglanowych (HCO3-) w osoczu (powstających przy udziale anhydrazy węglanowej w erytrocytach), a nie w postaci karbaminohemoglobiny.",
      "Pułapka CKE: Wdech jest aktem CZYNNYM (skurcz przepony i mięśni międzyżebrowych zewnętrznych zwiększa objętość klatki piersiowej → spadek ciśnienia w pęcherzykach poniżej atmosferycznego → zasysanie powietrza). Powietrze nie „rozpycha” płuc samo z siebie!",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Opisując efekt Bohra, zawsze uwzględnij spadek pH (wzrost stężenia H+ i pCO2), spadek powinowactwa Hb do tlenu oraz ułatwione oddawanie O2 w tkankach.",
        example: "W intensywnie pracujących mięśniach wzrasta prężność CO2 i stężenie jonów H+, czyli spada pH krwi (przyczyna), co obniża powinowactwo hemoglobiny do tlenu — przesunięcie krzywej dysocjacji w prawo (mechanizm), dzięki czemu oksyhemoglobina łatwiej dysocjuje i oddaje więcej tlenu pracującym komórkom (skutek).",
      },
    ],
    keywords: ["tkanki", "mięśnie", "sarkomer", "trawienie", "oddychanie", "hemoglobina", "efekt Bohra", "serce", "krążenie", "odporność", "limfocyty", "nefron", "nerki", "neuron", "synapsa", "hormony", "insulina"],
  },
  {
    id: "cke-bio-dzial-6",
    sectionCode: "Dział VI",
    title: "Dział VI. Ekspresja informacji genetycznej",
    subtitle: "Replikacja DNA, budowa genu, kod genetyczny, transkrypcja, splicing, translacja i regulacja ekspresji genów",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "VI.1.a",
        description: "Opisuje semikonserwatywny mechanizm replikacji DNA (helikaza, prymaza, polimeraza DNA — synteza 5'→3', nić wiodąca i opóźniona, fragmenty Okazaki, ligaza).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VI.2.a",
        description: "Porównuje organizację genomu i budowę genów u prokariontów (geny ciągłe, operony) oraz eukariontów (geny nieciągłe: eksony i introny, chromatyna, histony).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VI.3.a",
        description: "Wymienia cechy kodu genetycznego (trójkowy, jednoznaczny, zdegenerowany, bezprzecinkowy, niezachodzący, uniwersalny) i stosuje tabelę kodu genetycznego do określania sekwencji aminokwasów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VI.3.b",
        description: "Opisuje przebieg transkrypcji, obróbki potranskrypcyjnej pre-mRNA (czapeczka 5', ogon poli-A, splicing i splicing alternatywny) oraz translacji (inicjacja, elongacja, terminacja; rola mRNA, tRNA, rRNA).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VI.4.a",
        description: "Wyjaśnia regulację ekspresji genów u prokariontów na przykładzie operonu laktozowego (indukowalny) i tryptofanowego (represyjny) oraz u eukariontów (acetylacja histonów, metylacja DNA, czynniki transkrypcyjne, interferencja RNA / miRNA).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Skupia się na klasycznym schemacie replikacji, transkrypcji, translacji oraz działaniu operonu laktozowego i tryptofanowego.",
      formula2023: "Większy nacisk na mechanizmy epigenetyczne (acetylacja histonów → euchromatyna → aktywacja transkrypcji; metylacja cytozyny w DNA → wyciszanie genów) oraz rolę niekodujących cząsteczek RNA (miRNA, siRNA).",
    },
    examTraps: [
      "Pułapka CKE: Zdegenerowanie kodu genetycznego oznacza, że jeden aminokwas może być kodowany przez więcej niż jeden kodon (synonimiczny) — dzięki temu mutacje punktowe (substytucje w 3. pozycji kodonu) często są mutacjami milczącymi. Nie myl tego z jednoznacznością (jeden kodon koduje wyłącznie jeden określony aminokwas)!",
      "Pułapka CKE: Sekwencja mRNA jest komplementarna do nici MATRYCOWEJ DNA (3'→5'), a identyczna (z zamianą T na U) z nicią KODUJĄCĄ (sensowną, 5'→3') DNA. Zawsze sprawdzaj kierunki 5' i 3' na schemacie!",
      "Pułapka CKE: Splicing alternatywny pozwala na powstawanie różnych wariantów mRNA (i różnych białek) z tego samego genu eukariotycznego poprzez różne kombinacje wycinania intronów i łączenia eksonów.",
    ],
    operationalVerbs: [
      {
        verb: "Uzasadnij",
        rule: "Odwołaj się do właściwości kodu genetycznego przy analizie skutków mutacji.",
        example: "Substytucja nukleotydu nie zmieniła sekwencji aminokwasowej białka, ponieważ kod genetyczny jest zdegenerowany — powstały po mutacji kodon jest synonimiczny i koduje ten sam aminokwas co kodon wyjściowy.",
      },
    ],
    keywords: ["replikacja", "polimeraza DNA", "transkrypcja", "splicing", "translacja", "rybosom", "kod genetyczny", "operon laktozowy", "epigenetyka", "histony", "mRNA", "tRNA"],
  },
  {
    id: "cke-bio-dzial-7",
    sectionCode: "Dział VII",
    title: "Dział VII. Genetyka klasyczna i zmienność organizmów",
    subtitle: "Prawa Mendla, dziedziczenie wielogenowe i sprzężone z płcią, crossing-over, mutacje, choroby genetyczne i prawo Hardy'ego-Weinberga",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "VII.1.a",
        description: "Stosuje I i II prawo Mendla do rozwiązywania krzyżówek genetycznych (dominacja pełna, niepełna, kodominacja, allele wielokrotne AB0, geny letalne).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VII.2.a",
        description: "Analizuje dziedziczenie cech sprzężonych z płcią (chromosom X: daltonizm, hemofilia, dystrofia Duchenne'a) oraz cech sprzężonych autosomalnie, obliczając częstość rekombinacji (crossing-over) i odległości między genami w centymorganach (cM).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VII.3.a",
        description: "Rozpoznaje i opisuje mutacje genowe (substytucja: tranzycja, transwersja; delecja i insercja → zmiana ramki odczytu) oraz chromosomowe strukturalne (delecja, duplikacja, inwersja, translokacja) i liczbowe (aneuploidie: trisomia 21, 18, 13, zespół Turnera X0, Klinefeltera XXY; euploidie/poliploidie).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VII.4.a",
        description: "Analizuje rodowody ludzkie (dziedziczenie autosomalne dominujące/recesywne, sprzężone z X dominujące/recesywne, mitochondrialne) oraz stosuje równanie Hardy'ego-Weinberga (p + q = 1, p² + 2pq + q² = 1) do określania struktury genetycznej populacji.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Zawiera szerszy zakres współdziałania genów nieallelicznych (epistaza, komplementarność, polimeria) jako pojęć teoretycznych.",
      formula2023: "Zadania z współdziałania genów nieallelicznych rozwiązywane są w oparciu o podany w zadaniu opis szlaku biochemicznego; duży nacisk na analizę rodowodów i obliczenia z prawa Hardy'ego-Weinberga.",
    },
    examTraps: [
      "Pułapka CKE: W prawie Hardy'ego-Weinberga q² to częstość HOMOZYGOT RECESYWNYCH (osobników chorych przy chorobie recesywnej), a q to częstość ALLELU recesywnego! Częstość nosicieli (heterozygot) to 2pq, a nie pq.",
      "Pułapka CKE: Insercja lub delecja 1 albo 2 par nukleotydów w sekwencji kodującej powoduje przesunięcie ramki odczytu (frameshift), natomiast delecja/insercja 3 nukleotydów (jednego pełnego kodonu) usuwa/wstawia jeden aminokwas BEZ zmiany dalszej ramki odczytu.",
      "Pułapka CKE: Przyczyną aneuploidii (np. trisomii 21 w zespole Downa) jest NON-DYSJUNKCJA (nierozchodzenie się) chromosomów homologicznych w anafazie I mejozy lub chromatyd siostrzanych w anafazie II mejozy.",
    ],
    operationalVerbs: [
      {
        verb: "Uzasadnij",
        rule: "Wykluczając sposób dziedziczenia na podstawie rodowodu, wskaż konkretną parę rodziców i ich potomka.",
        example: "Choroba jest dziedziczona w sposób autosomalny recesywny, ponieważ zdrowi rodzice (osobnicy I.1 i I.2) mają chorą córkę (osobnik II.3): gdyby choroba była dominująca, przynajmniej jedno z rodziców musiałoby być chore; gdyby była sprzężona z chromosomem X, chora córka musiałaby odziedziczyć allel warunkujący chorobę po ojcu, który musiałby być chory.",
      },
    ],
    keywords: ["Mendel", "krzyżówka", "kodominacja", "sprzężenie", "crossing-over", "mutacja", "aneuploidia", "trisomia", "rodowód", "Hardy-Weinberg", "genetyka"],
  },
  {
    id: "cke-bio-dzial-8",
    sectionCode: "Dział VIII",
    title: "Dział VIII. Biotechnologia i inżynieria genetyczna",
    subtitle: "Enzymy restrykcyjne, PCR, elektroforeza, klonowanie, GMO, terapia genowa oraz system CRISPR-Cas9",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "VIII.1.a",
        description: "Porównuje biotechnologię tradycyjną (wykorzystującą naturalne drobnoustroje w fermentacji) z biotechnologią molekularną (modyfikacja genetyczna organizmów).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VIII.2.a",
        description: "Wyjaśnia zastosowanie narzędzi inżynierii genetycznej: enzymów restrykcyjnych (lepkie i tępe końce), ligazy DNA, odwrotnej transkryptazy (cDNA), wektorów plazmidowych i wirusowych.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VIII.2.b",
        description: "Analizuje przebieg reakcji łańcuchowej polimerazy (PCR: denaturacja, hybrydyzacja starterów, elongacja z termostabilną polimerazą Taq) oraz interpretuje wyniki elektroforezy żelowej DNA.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VIII.3.a",
        description: "Rozróżnia organizmy zmodyfikowane genetycznie (GMO) i organizmy transgeniczne, omawia klonowanie reprodukcyjne i terapeutyczne, komórki macierzyste (totipotencjalne, pluripotencjalne, multipotencjalne) oraz terapię genową.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VIII.4.a",
        description: "Wyjaśnia zasadę działania systemu edycji genomu CRISPR-Cas9 (rola cząsteczki gRNA komplementarnej do docelowej sekwencji DNA oraz endonukleazy Cas9 przecinającej obie nici DNA) oraz zastosowanie sekwencjonowania nowej generacji (NGS).",
        status: "2023-only",
        formulas: ["2023"],
        note2015: "W Formule 2015 technologia CRISPR-Cas9 pojawia się wyłącznie jako nowy materiał wprowadzany na bazie obszernego tekstu źródłowego.",
        note2023: "W Formule 2023+ znajomość mechanizmu edycji genów (CRISPR-Cas9) i nowoczesnych metod analizy DNA stanowi bezpośredni element wymagań szczegółowych.",
      },
    ],
    formulaDifferences: {
      formula2015: "Skupia się na klasycznym klonowaniu genów do plazmidów bakteryjnych (np. produkcja ludzkiej insuliny w E. coli z użyciem cDNA), PCR i elektroforezie.",
      formula2023: "Rozszerza wymagania o precyzyjną edycję genomu metodą CRISPR-Cas9 (`2023-only`), analizę profili genetycznych (STR) oraz pogłębioną ocenę bioetyczną i ekologiczną GMO.",
    },
    examTraps: [
      "Pułapka CKE: Aby wyprodukować ludzkie białko (np. insulinę) w komórkach bakterii, do wektora trzeba wprowadzić cDNA (powstałe na matrycy dojrzałego mRNA przy udziale odwrotnej transkryptazy), a NIE gen wycięty bezpośrednio z genomu człowieka — bakterie nie posiadają maszynerii do wycinania intronów (splicingu)!",
      "Pułapka CKE: Każdy organizm transgeniczny (posiadający obcy gen z innego gatunku) jest GMO, ale NIE każde GMO jest organizmem transgenicznym (np. wyciszenie własnego genu bez wprowadzania obcego DNA to nadal GMO).",
      "Pułapka CKE: W elektroforezie DNA migruje w kierunku elektrody DODATNIEJ (anody), ponieważ grupy fosforanowe nadają cząsteczce DNA wypadkowy ładunek ujemny; krótsze fragmenty DNA poruszają się szybciej niż dłuższe.",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Wyjaśniając potrzebę użycia polimerazy Taq w PCR, odwołaj się do temperatury etapu denaturacji.",
        example: "Pierwszy etap każdego cyklu PCR (denaturacja DNA) wymaga temperatury ok. 94–95°C (przyczyna); zwykła polimeraza uległaby w tej temperaturze nieodwracalnej denaturacji, natomiast termostabilna polimeraza Taq zachowuje swoją strukturę przestrzenną i aktywność katalityczną (mechanizm), co pozwala na wielokrotne powtarzanie cykli bez dodawania świeżego enzymu (skutek).",
      },
    ],
    keywords: ["biotechnologia", "inżynieria genetyczna", "PCR", "elektroforeza", "enzymy restrykcyjne", "plazmid", "cDNA", "GMO", "transgeniczny", "klonowanie", "CRISPR-Cas9"],
  },
  {
    id: "cke-bio-dzial-9",
    sectionCode: "Dział IX",
    title: "Dział IX. Ewolucjonizm",
    subtitle: "Dowody ewolucji, narządy homologiczne i analogiczne, dobór naturalny, dryf genetyczny, specjacja i antropogeneza",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "IX.1.a",
        description: "Rozróżnia bezpośrednie (skamieniałości, formy pośrednie — np. Archaeopteryx, Tiktaalik, ogniwa pośrednie) i pośrednie dowody ewolucji (narządy homologiczne vs. analogiczne, narządy szczątkowe, atawizmy, dowody biogeograficzne i molekularne).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IX.2.a",
        description: "Porównuje dywergencję (radiację adaptacyjną) z konwergencją oraz wyjaśnia mechanizm działania doboru naturalnego (stabilizujący, kierunkowy, różnicujący) i doboru płciowego.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IX.2.b",
        description: "Porównuje dobór naturalny (proces kierunkowy, adaptacyjny) z dryfem genetycznym (proces losowy, szczególnie silny w małych populacjach: efekt założyciela i efekt wąskiego gardła).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IX.3.a",
        description: "Wyjaśnia mechanizmy specjacji allopatrycznej (izolacja geograficzna) i sympatrycznej (izolacja rozrodcza prezygotyczna i postzygotyczna, poliploidyzacja u roślin) oraz omawia kluczowe etapy antropogenezy (dwunożność, encefalizacja, redukcja łuków brwiowych i prognatyzmu).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Większy nacisk na szczegółową charakterystykę kopalnych przedstawicieli linii rozwojowej człowieka (Australopithecus, Homo habilis, Homo erectus, Homo neanderthalensis).",
      formula2023: "Silniejszy nacisk na analizę drzew filogenetycznych (kladogramów: grupy monofiletyczne, parafiletyczne, polifiletyczne) oraz współdziałanie dryfu genetycznego i doboru naturalnego.",
    },
    examTraps: [
      "Pułapka CKE: Ewolucja NIE działa „po to, aby organizm się przystosował”! Mutacje powstają LOSOWO i spontanicznie (nie pod wpływem „potrzeby” organizmu), a środowisko (np. antybiotyk, pestycyd) jedynie SELEKCJONUJE osobniki, które już wcześniej posiadały korzystny allel.",
      "Pułapka CKE: Narządy homologiczne (np. kończyna przednia kreta, skrzydło nietoperza, płetwa walenia) mają wspólne pochodzenie ewolucyjne i ten sam plan budowy (wynik dywergencji), natomiast narządy analogiczne (skrzydło owada i skrzydło ptaka) mają różne pochodzenie, ale podobną funkcję (wynik konwergencji).",
      "Pułapka CKE: Dryf genetyczny zmniejsza zmienność genetyczną populacji w sposób LOSOWY i nie prowadzi do wzrostu dostosowania (adaptacji) populacji do środowiska.",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Opisując nabywanie oporności (np. bakterii na antybiotyk lub owadów na insektycyd), unikaj lamarkizmu!",
        example: "W populacji bakterii na skutek losowych mutacji obecne były nieliczne komórki posiadające gen oporności na antybiotyk (przyczyna); zastosowanie antybiotyku działało jako czynnik selekcyjny eliminujący bakterie wrażliwe, podczas gdy osobniki oporne przeżywały i rozmnażały się (mechanizm), co doprowadziło do wzrostu częstości allelu warunkującego oporność w kolejnych pokoleniach (skutek).",
      },
    ],
    keywords: ["ewolucja", "homologia", "analogia", "dywergencja", "konwergencja", "dobór naturalny", "dryf genetyczny", "specjacja", "antropogeneza", "filogeneza"],
  },
  {
    id: "cke-bio-dzial-10",
    sectionCode: "Dział X",
    title: "Dział X. Ekologia",
    subtitle: "Tolerancja ekologiczna, demografia populacji, interakcje międzygatunkowe, sieci troficzne, obieg materii i sukcesja",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "X.1.a",
        description: "Analizuje krzywe tolerancji ekologicznej (zasada minimum Liebiga, zasada tolerancji Shelforda, eurybionty vs. stenobionty, bioindykatory) oraz pojęcie niszy ekologicznej (podstawowa vs. zrealizowana).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "X.2.a",
        description: "Charakteryzuje cechy populacji (liczebność, zagęszczenie, struktura przestrzenna, wiekowa i płciowa, krzywe przeżywania typu I, II i III, model wzrostu wykładniczego J i logistycznego S, pojemność środowiska K, strategie r i K).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "X.3.a",
        description: "Rozpoznaje i analizuje interakcje antagonistyczne (konkurencja wewnątrz- i międzygatunkowa, zasada konkurencyjnego wypierania Gausego, drapieżnictwo, roślinożerność, pasożytnictwo) oraz nieantagonistyczne (mutualizm obligatoryjny i fakultatywny, komensalizm).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "X.4.a",
        description: "Wyjaśnia dlaczego w ekosystemie przepływ energii jest jednokierunkowy, a obieg materii zamknięty (cykle węgla, azotu: fiksacja N2, amonifikacja, nitryfikacja, denitryfikacja; fosforu), analizuje piramidy troficzne, biomagnifikację oraz porównuje sukcesję pierwotną i wtórną.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Pełny zakres ekologii populacji i ekosystemów, w tym szczegółowe rozróżnienie protokooperacji i symbiozy (mutualizmu).",
      formula2023: "Zamiast rozdzielania symbiozy i protokooperacji stosuje ujednolicone pojęcie mutualizmu (obligatoryjnego i fakultatywnego); duży nacisk na analizę eksperymentów ekologicznych (np. wypieranie konkurencyjne, kaskady troficzne, gatunki kluczowe / zwornikowe).",
    },
    examTraps: [
      "Pułapka CKE: Energia w ekosystemie NIE krąży! Energia przepływa jednokierunkowo (na każdym poziomie troficznym ok. 90% energii ulega rozproszeniu w postaci ciepła podczas oddychania komórkowego), natomiast materia krąży w obiegu zamkniętym dzięki destruentom.",
      "Pułapka CKE: Bakterie nitryfikacyjne (utleniające NH4+ do NO2- i NO3-) są CHEMOLITOAUTOTROFAMI (prowadzą chemosyntezę w warunkach tlenowych), natomiast bakterie denitryfikacyjne redukują azotany do wolnego azotu (N2) w warunkach BEZTLENOWYCH (np. w zalanej wodą, nieprzewietrzanej glebie).",
      "Pułapka CKE: Zakres tolerancji ekologicznej określa się zawsze na osi X (wartości czynnika środowiskowego, np. od 5°C do 35°C), a NIE na osi Y (intensywność procesów życiowych)!",
    ],
    operationalVerbs: [
      {
        verb: "Wykaż",
        rule: "Wyjaśnij dlaczego łańcuchy troficzne mają ograniczoną liczbę ogniw (zwykle 4–5).",
        example: "Na każdym poziomie troficznym znaczna część energii (ok. 80–90%) jest zużywana na procesy życiowe organizmów i rozpraszana w postaci ciepła w procesie oddychania (przyczyna i mechanizm), dlatego do kolejnych poziomów dociera coraz mniej energii użytecznej i po 4–5 ogniwach jej ilość jest niewystarczająca do utrzymania populacji drapieżników kolejnego rzędu (skutek).",
      },
    ],
    keywords: ["ekologia", "tolerancja ekologiczna", "nisza", "populacja", "konkurencja", "drapieżnictwo", "mutualizm", "ekosystem", "łańcuch troficzny", "obieg azotu", "nitryfikacja", "sukcesja"],
  },
  {
    id: "cke-bio-dzial-11",
    sectionCode: "Dział XI",
    title: "Dział XI. Różnorodność biologiczna i jej ochrona",
    subtitle: "Poziomy bioróżnorodności, antropopresja, eutrofizacja, gatunki inwazyjne i formy ochrony przyrody",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "XI.1.a",
        description: "Charakteryzuje trzy poziomy różnorodności biologicznej: genetyczną (wewnątrzgatunkową), gatunkową i ekosystemową (ponadgatunkową).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XI.2.a",
        description: "Analizuje wpływ działalności człowieka na bioróżnorodność: niszczenie i fragmentacja siedlisk (znaczenie korytarzy ekologicznych), introdukcja gatunków obcych i inwazyjnych, eutrofizacja zbiorników wodnych, kwaśne opady i globalne zmiany klimatu.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XI.3.a",
        description: "Rozróżnia ochronę in situ i ex situ (banki genów, ogrody botaniczne i zoologiczne), formy ochrony przyrody w Polsce (parki narodowe, rezerwaty, Natura 2000) oraz międzynarodowe porozumienia (CITES, Konwencja Ramsarska, Konwencja z Rio).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Większy nacisk na szczegółową klasyfikację form ochrony przyrody w Polsce oraz znajomość nazw konwencji międzynarodowych.",
      formula2023: "Większy nacisk na mechanizmy ekologiczne utraty bioróżnorodności: związek fragmentacji siedlisk z chowem wsobnym (inbredem), dryfem genetycznym i spadkiem heterozygotyczności populacji.",
    },
    examTraps: [
      "Pułapka CKE: Opisując proces eutrofizacji, pamiętaj o pełnym ciągu zdarzeń: spływ nawozów (N, P) → masowy zakwit fitoplanktonu i glonów → ograniczenie dostępu światła do głębszych warstw → obumieranie roślin dennych i fitoplanktonu → intensywny rozkład martwej materii przez bakterie tlenowe → wyczerpanie tlenu przy dnie (przyducha) → wymieranie ryb i bezkręgowców.",
      "Pułapka CKE: Korytarze ekologiczne łączące pofragmentowane siedliska umożliwiają migrację osobników i przepływ genów między subpopulacjami, co przeciwdziała chowowi wsobnemu (inbredowi) i zubożeniu puli genowej.",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Połącz izolację małej populacji na skutek fragmentacji siedliska ze spadkiem jej szans na przetrwanie.",
        example: "Fragmentacja siedliska izoluje małą grupę osobników i uniemożliwia przepływ genów (przyczyna), co nasila chów wsobny (krzyżowanie krewniacze) oraz losowy dryf genetyczny prowadzący do wzrostu homozygotyczności i ujawniania się recesywnych alleli letalnych/subletalnych (mechanizm), obniżając dostosowanie i zwiększając ryzyko wymarcia populacji przy zmianie warunków środowiska (skutek).",
      },
    ],
    keywords: ["bioróżnorodność", "eutrofizacja", "fragmentacja siedlisk", "korytarz ekologiczny", "gatunki inwazyjne", "ochrona przyrody", "in situ", "ex situ", "Natura 2000"],
  },
];

export const CHEMISTRY_CKE_CURRICULUM: CkeSectionCurriculum[] = [
  {
    id: "cke-chem-dzial-1",
    sectionCode: "Dział I",
    title: "Dział I. Atomy, cząsteczki i stechiometria chemiczna",
    subtitle: "Budowa atomu, liczby kwantowe, konfiguracje elektronowe, promieniotwórczość, układ okresowy i obliczenia stechiometryczne",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "I.1.a",
        description: "Określa skład jądra atomowego i powłok elektronowych dla atomów i jonów (A, Z), oblicza masę atomową pierwiastka na podstawie składu izotopowego oraz analizuje przemiany promieniotwórcze (α, β-, β+, wychwyt elektronu) i okres półtrwania (t1/2).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.2.a",
        description: "Zapisuje pełne i skrócone konfiguracje elektronowe atomów i jonów (do Z=36) z uwzględnieniem promocji elektronowej (Cr, Cu), stosuje zakaz Pauliego i regułę Hunda oraz opisuje stan elektronu za pomocą 4 liczb kwantowych (n, l, m, ms).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.3.a",
        description: "Wiąże położenie pierwiastka w układzie okresowym (okres, grupa, blok s, p, d) z konfiguracją elektronów walencyjnych, promieniem atomowym/jonowym, energią jonizacji i elektroujemnością.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "I.4.a",
        description: "Wykonuje obliczenia stechiometryczne z wykorzystaniem pojęcia mola, masy molowej, objętości molowej gazów (warunki normalne: 22,4 dm³/mol) oraz równania stanu gazu doskonałego (Clapeyrona pV = nRT), uwzględniając wydajność reakcji, nadmiar i niedomiar substratu oraz czystość reagentów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "W obliczeniach gazowych częściej dominują warunki normalne (22,4 dm³/mol), choć równanie Clapeyrona również obowiązuje.",
      formula2023: "Bardzo częste zadania łączące równanie Clapeyrona (w warunkach innych niż normalne, z przeliczaniem jednostek hPa/kPa i K) ze stechiometrią mieszanin i określaniem wzorów empirycznych i rzeczywistych.",
    },
    examTraps: [
      "Pułapka CKE: Przy tworzeniu kationów pierwiastków bloku d (np. Fe2+, Cr3+, Cu2+) elektrony odrywane są NAJPIERW z podpowłoki 4s (wyższa główna liczba kwantowa n), a dopiero potem z podpowłoki 3d! Zatem konfiguracja walencyjna jonu Fe2+ to 3d6 (a nie 4s2 3d4).",
      "Pułapka CKE: Pamiętaj o promocji elektronowej w stanie podstawowym atomu chromu (24Cr: [Ar] 3d5 4s1) i miedzi (29Cu: [Ar] 3d10 4s1).",
      "Pułapka CKE: W równaniu Clapeyrona pV = nRT przy R = 83,14 hPa·dm³/(mol·K) ciśnienie p MUSI być w hPa, objętość V w dm³, a temperatura T w kelwinach (T[K] = t[°C] + 273)!",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Porównując promienie atomowe/jonowe lub energie jonizacji, odwołaj się do ładunku jądra (Z) i liczby powłok elektronowych.",
        example: "Kation Na+ ma mniejszy promień niż atom Na, ponieważ po oderwaniu elektronu walencyjnego zmniejsza się liczba obsadzonych powłok elektronowych (z 3 do 2) przy niezmienionym ładunku dodatnim jądra, co powoduje silniejsze przyciąganie pozostałych elektronów do jądra.",
      },
    ],
    keywords: ["atom", "izotop", "promieniotwórczość", "liczby kwantowe", "konfiguracja elektronowa", "orbital", "układ okresowy", "mol", "stechiometria", "Clapeyron"],
  },
  {
    id: "cke-chem-dzial-2",
    sectionCode: "Dział II",
    title: "Dział II. Wiązania chemiczne i oddziaływania międzycząsteczkowe",
    subtitle: "Wiązania jonowe, kowalencyjne, koordynacyjne, hybrydyzacja, VSEPR, polarność cząsteczek i wiązania wodorowe",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "II.1.a",
        description: "Rozróżnia wiązania jonowe, kowalencyjne niespolaryzowane i spolaryzowane, koordynacyjne (donorowo-akceptorowe) oraz metaliczne; rysuje wzory elektronowe kropkowe i kreskowe (Lewisa) z uwzględnieniem wolnych par elektronowych.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.2.a",
        description: "Określa typ hybrydyzacji orbitali walencyjnych atomu centralnego (sp, sp2, sp3), liczbę wiązań σ i π w cząsteczce lub jonie oraz przewiduje kształt geometryczny cząsteczek (liniowy, trójkątny płaski, kątowy, tetraedryczny, piramida trygonalna) zgodnie z metodą VSEPR.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.3.a",
        description: "Wykazuje związek między budową cząsteczki (moment dipolowy, obecność wiązań wodorowych, oddziaływania dipol-dipol i siły dyspersyjne Londona) a właściwościami fizycznymi substancji (temperatura wrzenia, rozpuszczalność w wodzie, przewodnictwo elektryczne).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "II.3.b",
        description: "Porównuje typy kryształów: jonowe (NaCl), kowalencyjne/atomowe (diament, grafit, kwarc SiO2), metaliczne i molekularne (lód, jod I2, suchy lód CO2).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Standardowy zakres hybrydyzacji sp, sp2, sp3 i kształtów cząsteczek oraz oddziaływań międzycząsteczkowych.",
      formula2023: "Większy nacisk na analizę delokalizacji elektronów π (rezonans w jonie węglanowym CO3^2-, azotanowym(V) NO3^-, benzenie) oraz porównywanie kątów między wiązaniami (np. CH4 109,5° vs. NH3 107° vs. H2O 104,5° ze względu na silniejsze odpychanie przez wolne pary elektronowe).",
    },
    examTraps: [
      "Pułapka CKE: Obecność spolaryzowanych wiązań kowalencyjnych NIE oznacza automatycznie, że cała cząsteczka jest polarna! W cząsteczkach symetrycznych bez wolnych par na atomie centralnym (np. CO2, CCl4, BF3, SO3) wektory momentów dipolowych wiązań znoszą się wzajemnie (μ = 0) i cząsteczka jest NIEPOLARNA.",
      "Pułapka CKE: Podczas topnienia lub sublimacji kryształów molekularnych (np. lodu H2O, jodu I2) zrywane są wyłącznie ODDZIAŁYWANIA MIĘDZYCZĄSTECZKOWE (wodorowe lub van der Waalsa), natomiast w kryształach kowalencyjnych (diament, SiO2) trzeba rozerwać silne WIĄZANIA KOWALENCYJNE.",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Porównując temperatury wrzenia związków o zbliżonej masie molowej, wskaż rodzaj oddziaływań międzycząsteczkowych.",
        example: "Temperatura wrzenia etanolu jest znacznie wyższa niż eteru dimetylowego, ponieważ w cząsteczkach etanolu obecna jest grupa -OH, co umożliwia tworzenie silnych międzycząsteczkowych wiązań wodorowych, których rozerwanie podczas parowania wymaga dostarczenia znacznie większej ilości energii niż pokonanie słabych sił van der Waalsa między cząsteczkami eteru.",
      },
    ],
    keywords: ["wiązanie chemiczne", "hybrydyzacja", "VSEPR", "sigma", "pi", "dipol", "wiązanie wodorowe", "kryształ", "polarność"],
  },
  {
    id: "cke-chem-dzial-3",
    sectionCode: "Dział III",
    title: "Dział III. Kinetyka i statyka chemiczna. Energetyka reakcji",
    subtitle: "Szybkość reakcji, równanie kinetyczne, kataliza, entalpia i Prawo Hessa, stan równowagi Kc oraz reguła przekory",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "III.1.a",
        description: "Definiuje szybkość reakcji chemicznej, zapisuje równanie kinetyczne v = k·[A]^a·[B]^b dla reakcji elementarnych i na podstawie danych doświadczalnych, interpretuje wykresy zmian energii w funkcji postępu reakcji (energia aktywacji Ea, kompleks aktywny, katalizator).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "III.2.a",
        description: "Zapisuje wyrażenie na stężeniową stałą równowagi Kc (z wyłączeniem ciał stałych w układach heterogenicznych!), wykonuje obliczenia stężeń równowagowych (tabelka: stężenie początkowe, zmiana, stężenie równowagowe) oraz stosuje regułę przekory Le Chateliera-Brauna.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "III.3.a",
        description: "Stosuje prawo Hessa do obliczania standardowej entalpii reakcji (ΔHr°) na podstawie entalpii tworzenia (ΔHtw°) lub entalpii spalania (ΔHsp°) reagentów oraz energii dysocjacji wiązań.",
        status: "2023-only",
        formulas: ["2023"],
        note2015: "[Niewymagane w Formule 2015] — w Formule 2015 obowiązuje jedynie jakościowe rozróżnianie reakcji egzo- i endoenergetycznych (ΔH < 0 vs. ΔH > 0) oraz odczytywanie efektu cieplnego z wykresu energetycznego; rachunkowe obliczenia z prawa Hessa są wyłączone.",
        note2023: "Kluczowe wymaganie rachunkowe Formuły 2023+ (cykle termochemiczne, bilans entalpii tworzenia i spalania).",
      },
    ],
    formulaDifferences: {
      formula2015: "Obejmuje pełną kinetykę (v, k, Ea) oraz statykę chemiczną (Kc, reguła przekory). Rachunkowe obliczenia entalpii z Prawa Hessa są [Niewymagane w Formule 2015].",
      formula2023: "Włącza pełne obliczenia termochemiczne z Prawa Hessa (`2023-only`) oraz pogłębione wyznaczanie rzędowości reakcji z tabel danych kinetycznych.",
    },
    examTraps: [
      "Pułapka CKE: W wyrażeniu na stałą równowagi Kc dla układów heterogenicznych (np. CaCO3(s) ⇄ CaO(s) + CO2(g)) NIE uwzględnia się stężeń substancji stałych (s)! Tutaj Kc = [CO2].",
      "Pułapka CKE: Zmiana stężenia reagentów, ciśnienia lub dodanie katalizatora NIE zmienia wartości liczbowej stałej równowagi Kc! Wartość Kc zależy wyłącznie od TEMPERATURY (i rodzaju reakcji).",
      "Pułapka CKE: Katalizator przyspiesza zarówną reakcję biegnącą w prawo, jak i reakcję odwrotną (w lewo) w takim samym stopniu — dlatego NIE przesuwa stanu równowagi i NIE zwiększa wydajności równowagowej reakcji.",
    ],
    operationalVerbs: [
      {
        verb: "Określ i Uzasadnij",
        rule: "Przy zadaniach z regułą przekory powiąż znak ΔH (egzo/endo) i zmianę liczby moli gazów z kierunkiem przesunięcia równowagi.",
        example: "Obniżenie temperatury spowoduje wzrost wydajności tworzenia amoniaku (N2 + 3H2 ⇄ 2NH3, ΔH < 0), ponieważ reakcja syntezy amoniaku jest egzoenergetyczna, więc zgodnie z regułą przekory układ przeciwdziała obniżeniu temperatury, przesuwając stan równowagi w kierunku reakcji wydzielającej ciepło (w prawo).",
      },
    ],
    keywords: ["kinetyka", "szybkość reakcji", "stała równowagi", "reguła przekory", "Le Chatelier", "entalpia", "prawo Hessa", "energia aktywacji", "katalizator"],
  },
  {
    id: "cke-chem-dzial-4",
    sectionCode: "Dział IV",
    title: "Dział IV. Roztwory",
    subtitle: "Rozpuszczalność, stężenie procentowe i molowe, przeliczanie stężeń z gęstością, hydraty i koloidy",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "IV.1.a",
        description: "Odczytuje z wykresu rozpuszczalności zależność rozpuszczalności od temperatury i wykonuje obliczenia związane z krystalizacją (ochładzanie roztworu nasyconego) oraz dosycaniem roztworów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.2.a",
        description: "Oblicza stężenie procentowe (Cp) i molowe (Cm), przelicza Cp na Cm (i odwrotnie) z wykorzystaniem gęstości roztworu (d) oraz wykonuje obliczenia dla mieszania, rozcieńczania, zatężania roztworów i rozpuszczania hydratów (soli uwodnionych, np. CuSO4·5H2O) lub tlenków reagujących z wodą (np. SO3, Na2O).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IV.3.a",
        description: "Odróżnia roztwór właściwy od koloidu (zolu) za pomocą efektu Tyndalla oraz opisuje koagulację i peptyzację koloidów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Identyczny trzon obliczeniowy (rozpuszczalność, Cp, Cm, hydraty).",
      formula2023: "Większy nacisk na wieloetapowe zadania połączone (np. wprowadzenie gazu do roztworu zasady lub rozpuszczenie hydratu połączone z reakcją strąceniową i obliczeniem stężenia końcowego).",
    },
    examTraps: [
      "Pułapka CKE: Rozpuszczając HYDRAT w wodzie (np. 25 g CuSO4·5H2O w 175 g wody), masą substancji rozpuszczonej (ms) w roztworze jest wyłącznie masa soli BEZWODNEJ (16 g CuSO4), natomiast masa roztworu to suma masy całego hydratu i wody (25 + 175 = 200 g)!",
      "Pułapka CKE: Wprowadzając tlenek reagujący z wodą (np. Na2O lub SO3) do wody, substancją rozpuszczoną staje się produkt reakcji (NaOH lub H2SO4) — musisz najpierw obliczyć jego masę ze stechiometrii reakcji z wodą!",
      "Pułapka CKE: Rozpuszczalność (R) odnosi się do 100 g WODY (rozpuszczalnika), czyli masa roztworu nasyconego wynosi (100 + R) g, a NIE 100 g! Zatem Cp roztworu nasyconego to R / (100 + R) · 100%.",
    ],
    operationalVerbs: [
      {
        verb: "Oblicz",
        rule: "Zawsze zapisuj czytelnie jednostki na każdym etapie obliczeń oraz zaokrąglaj wynik końcowy dokładnie do liczby miejsc znaczących wskazanej w poleceniu CKE.",
        example: "m(CuSO4) = 25 g · (160 g/mol / 250 g/mol) = 16,0 g; m_r = 25 g + 175 g = 200 g; Cp = (16,0 g / 200 g) · 100% = 8,0%.",
      },
    ],
    keywords: ["roztwór", "rozpuszczalność", "stężenie procentowe", "stężenie molowe", "hydrat", "krystalizacja", "koloid", "efekt Tyndalla"],
  },
  {
    id: "cke-chem-dzial-5",
    sectionCode: "Dział V",
    title: "Dział V. Reakcje w roztworach wodnych (Kwasy, zasady, pH, hydroliza, Kso)",
    subtitle: "Dysocjacja, prawo Ostwalda, teorie Brønsteda i Lewisa, skala pH, hydroliza soli, bufory i iloczyn rozpuszczalności Kso",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "V.1.a",
        description: "Zapisuje równania dysocjacji jonowej elektrolitów (w tym stopniowej dysocjacji kwasów wieloprotonowych), oblicza stałą dysocjacji (Ka, Kb), stopień dysocjacji (α) z prawa rozcieńczeń Ostwalda oraz pH i pOH roztworów mocnych i słabych elektrolitów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.2.a",
        description: "Wskazuje sprzężone pary kwas-zasada według teorii Brønsteda-Lowry'ego (oraz amfolity, np. H2O, HCO3-, HS-, H2PO4-) i kwasy/zasady Lewisa.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.3.a",
        description: "Zapisuje jonowe równania hydrolizy soli (kationowej, anionowej, kationowo-anionowej), określa odczyn wodnych roztworów soli, wyjaśnia działanie roztworów buforowych oraz analizuje krzywe miareczkowania alkacymetrycznego (punkt równoważnikowy vs. punkt końcowy, dobór wskaźnika pH).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "V.4.a",
        description: "Zapisuje wyrażenie na iloczyn rozpuszczalności (Kso) trudno rozpuszczalnych soli i wodorotlenków, oblicza rozpuszczalność molową z Kso, sprawdza warunek wytrącenia osadu po zmieszaniu roztworów oraz bada wpływ wspólnego jonu i pH na rozpuszczalność osadu.",
        status: "2023-only",
        formulas: ["2023"],
        note2015: "[Niewymagane w Formule 2015] — obliczenia z iloczynu rozpuszczalności (Kso) nie obowiązują w podstawie programowej Formuły 2015.",
        note2023: "Kluczowy pewniak rachunkowy w Formule 2023+ (np. Kso dla Ag2CrO4, CaF2, Mg(OH)2).",
      },
    ],
    formulaDifferences: {
      formula2015: "Obliczenia z Ka, Kb, α (prawo Ostwalda), pH oraz jonowy zapis hydrolizy soli i teoria Brønsteda. Iloczyn rozpuszczalności Kso jest [Niewymagane w Formule 2015].",
      formula2023: "Oprócz pełnego zakresu pH, hydrolizy i buforów wymaga biegłych obliczeń z iloczynu rozpuszczalności Kso (`2023-only`) oraz obliczeń pH mieszanin buforowych.",
    },
    examTraps: [
      "Pułapka CKE: Aniony wodorosiarczanowe(VI) HSO4- oraz diwodorofosforanowe(V) H2PO4- ulegają w wodzie DYSOCJACJI kwasowej (odszczepiają H+, dając odczyn kwasowy pH < 7), natomiast aniony HCO3-, HS- oraz HPO4^2- ulegają w przeważającym stopniu HYDROLIZIE anionowej (pobierają H+ z wody, dając odczyn zasadowy pH > 7)!",
      "Pułapka CKE: Stosując uproszczony wzór prawa Ostwalda Ka ≈ c·α², zawsze sprawdź warunek c/Ka ≥ 400 (lub α ≤ 5%)! Jeśli α > 5%, musisz rozwiązać pełne równanie kwadratowe Ka = c·α² / (1 - α).",
      "Pułapka CKE (2023+): Dla soli typu A2B lub AB2 (np. PbI2 ⇄ Pb2+ + 2I-) wyrażenie na iloczyn rozpuszczalności to Kso = [Pb2+]·[I-]² = S · (2S)² = 4S³ (nie zapomnij podnieść również współczynnika 2 do kwadratu!).",
    ],
    operationalVerbs: [
      {
        verb: "Uzasadnij równaniem reakcji",
        rule: "Gdy CKE prosi o uzasadnienie odczynu roztworu soli równaniem reakcji, zapisz wyłącznie JONOWE SKRÓCONE równanie hydrolizy (lub dysocjacji) z udziałem cząsteczki H2O i jonem H3O+ lub OH- po stronie produktów!",
        example: "Roztwór węglanu sodu (Na2CO3) ma odczyn zasadowy, ponieważ jony węglanowe ulegają hydrolizie anionowej: CO3^2- + H2O ⇄ HCO3- + OH- (wzrost stężenia jonów OH- powoduje pH > 7).",
      },
    ],
    keywords: ["dysocjacja", "pH", "Ostwald", "Brønsted", "hydroliza", "bufor", "miareczkowanie", "iloczyn rozpuszczalności", "Kso"],
  },
  {
    id: "cke-chem-dzial-6",
    sectionCode: "Dział VI",
    title: "Dział VI. Reakcje utleniania i redukcji (Redoks). Elektrochemia",
    subtitle: "Stopnie utlenienia, bilans elektronowo-jonowy, KMnO4 i K2Cr2O7, ogniwa galwaniczne, SEM i elektroliza",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "VI.1.a",
        description: "Oblicza stopnie utlenienia pierwiastków w związkach nieorganicznych i organicznych, wskazuje utleniacz i reduktor oraz uzgadnia równania reakcji redoks metodą bilansu elektronowego i jonowo-elektronowego (w środowisku kwasowym, obojętnym i zasadowym).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VI.2.a",
        description: "Stosuje szereg elektrochemiczny (potencjały standardowe E°) do przewidywania kierunku reakcji redoks (reakcje metali z kwasami nieutleniającymi vs. utleniającymi: HNO3, stęż. H2SO4).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VI.3.a",
        description: "Zapisuje schemat ogniwa galwanicznego (⊖ Anoda | roztwór || roztwór | Katoda ⊕), równania procesów elektrodowych, oblicza siłę elektromotoryczną ogniwa (SEM = E°K - E°A) oraz opisuje procesy elektrolizy i korozji elektrochemicznej.",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Pełny bilans reakcji redoks, szereg napięciowy, ogniwa galwaniczne i obliczenia SEM.",
      formula2023: "Silniejszy nacisk na równania połówkowe (jonowo-elektronowe) uwzględniające jony H+, OH- i cząsteczki H2O oraz obliczenia zmiany masy płytki metalowej zanurzonej w roztworze soli innego metalu.",
    },
    examTraps: [
      "Pułapka CKE: W schemacie ogniwa galwanicznego po LEWEJ stronie zawsze zapisujemy ANODĘ (elektrodę ujemną ⊖, półogniwo o NIŻSZYM potencjale E°, na którym zachodzi UTLENIANIE), a po PRAWEJ stronie KATODĘ (elektrodę dodatnią ⊕, wyższy potencjał E°, REDUKCJA).",
      "Pułapka CKE: W ogniwie galwanicznym anoda jest biegunem UJEMNYM (⊖), a katoda DODATNIM (⊕), natomiast w ELEKTROLIZERZE anoda jest biegunem DODATNIM (⊕), a katoda UJEMNYM (⊖). Jednak w OBU układach na anodzie ZAWSZE zachodzi utlenianie, a na katodzie ZAWSZE redukcja!",
      "Pułapka CKE: Produkty redukcji jonu MnO4- (fioletowy) zależą od odczynu środowiska: w środowisku silnie kwasowym (H+) → bezbarwny jon Mn2+; w środowisku obojętnym lub słabo zasadowym → brunatny osad MnO2; w środowisku silnie zasadowym (stęż. OH-) → zielony jon manganianowy(VI) MnO4^2-.",
    ],
    operationalVerbs: [
      {
        verb: "Zapisz równania połówkowe",
        rule: "W bilansie jonowo-elektronowym pamiętaj o zachowaniu zarówno bilansu atomowego, jak i bilansu ŁADUNKU po obu stronach każdego równania połówkowego!",
        example: "Redukcja: MnO4- + 8H+ + 5e- → Mn2+ + 4H2O; Utlenianie: 5Fe2+ → 5Fe3+ + 5e-.",
      },
    ],
    keywords: ["redoks", "utleniacz", "reduktor", "stopień utlenienia", "ogniwo", "SEM", "anoda", "katoda", "elektroliza", "potencjał standardowy"],
  },
  {
    id: "cke-chem-dzial-7",
    sectionCode: "Dział VII",
    title: "Dział VII. Systematyka związków nieorganicznych",
    subtitle: "Tlenki, wodorki, wodorotlenki, amfoteryczność, hydroksokompleksy, kwasy i sole",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "VII.1.a",
        description: "Klasyfikuje tlenki i wodorotlenki ze względu na ich charakter chemiczny: kwasowy, zasadowy, amfoteryczny (Al2O3, ZnO, Cr2O3, PbO, SnO, BeO oraz ich wodorotlenki) i obojętny (CO, NO, N2O).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VII.2.a",
        description: "Zapisuje w formie cząsteczkowej i jonowej skróconej równania reakcji potwierdzających amfoteryczny charakter Al(OH)3, Zn(OH)2, Cr(OH)3 z mocnymi kwasami i mocnymi zasadami (tworzenie jonów kompleksowych: [Al(OH)4]-, [Zn(OH)4]^2-, [Cr(OH)4]- lub [Cr(OH)6]^3-).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VII.3.a",
        description: "Projektuje doświadczenia otrzymywania soli różnymi metodami (reakcje strąceniowe, zobojętniania, metal + kwas, tlenek + kwas/zasada, tlenek kwasowy + tlenek zasadowy) oraz zapisuje równania tworzenia wodorosoli.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VII.4.a",
        description: "Rozbudowane wieloetapowe schematy przemian nieorganicznych (tzw. „pajączki” syntetyczne łączące tlenki, wodorosole, hydroksokompleksy i termiczny rozkład soli).",
        status: "2015-only",
        formulas: ["2015"],
        note2015: "W Formule 2015 klasyczne wieloetapowe schematy przemian nieorganicznych stanowią stały element arkusza.",
        note2023: "W Formule 2023+ złożoność schematów ograniczono do krótszych ciągów powiązanych bezpośrednio z tekstem wprowadzającym.",
      },
    ],
    formulaDifferences: {
      formula2015: "Szczególny nacisk na rozbudowane ciągi przemian nieorganicznych (`2015-only`) oraz otrzymywanie wodorosoli i hydroksokompleksów.",
      formula2023: "Nacisk na projektowanie jednoznacznych doświadczeń rozróżniających substancje (obserwacje w probówkach: barwa roztworu, wytrącenie/roztworzenie osadu, wydzielenie gazu).",
    },
    examTraps: [
      "Pułapka CKE: Aby wykazać amfoteryczność wodorotlenku (np. Al(OH)3), musisz przeprowadzić próbę z MOCNYM KWASEM (np. HCl) oraz z MOCNĄ ZASADĄ (np. NaOH aq) — NIE używaj wody amoniakalnej NH3(aq) do roztwarzania Al(OH)3 czy Cr(OH)3!",
      "Pułapka CKE: W zapisie jonowym skróconym nierozpuszczalne tlenki i osady wodorotlenków (np. Al(OH)3, Cu(OH)2, Mg(OH)2, CaCO3, BaSO4) zapisujemy zawsze w postaci CZĄSTECZKOWEJ (nierozdysocjowanej)!",
      "Pułapka CKE: W obserwacjach NIGDY nie podawaj nazwy produktu (np. „wydziela się wodór” to wniosek, za który otrzymasz 0 pkt!). Obserwacja to to, co widzisz: „wydzielają się bezbarwne pęcherzyki gazu, osad roztwarza się, powstaje bezbarwny, klarowny roztwór”.",
    ],
    operationalVerbs: [
      {
        verb: "Zapisz obserwacje",
        rule: "Opisuj zawsze stan przed reakcją i po reakcji (barwa, stan skupienia, osad, gaz) bez używania nazw wzorów chemicznych produktów!",
        example: "Galaretowaty biały osad ulega roztworzeniu, powstaje bezbarwny, klarowny roztwór.",
      },
    ],
    keywords: ["tlenki", "wodorotlenki", "amfoteryczność", "hydroksokompleksy", "kwasy", "sole", "wodorosole", "osad"],
  },
  {
    id: "cke-chem-dzial-8",
    sectionCode: "Dział VIII",
    title: "Dział VIII. Charakterystyka pierwiastków bloków s, p oraz wybranych pierwiastków bloku d",
    subtitle: "Litowce, berylowce, glin, węgiel, azot, fosfor, tlen, siarka, fluorowce oraz chrom, mangan, żelazo, miedź, cynk i srebro",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "VIII.1.a",
        description: "Porównuje aktywność chemiczną metali bloku s (litowce, berylowce), ich reakcje z wodą, tlenem (tlenki, nadtlenki, ponadtlenki) i kwasami oraz twardość wody (przemijająca i trwała).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VIII.2.a",
        description: "Charakteryzuje właściwości pierwiastków bloku p (glin — pasywacja; krzem i odmiany alotropowe węgla; związki azotu i fosforu; siarka, SO2, H2SO4; szereg aktywności fluorowców: Cl2 wypiera Br- i I- z ich soli).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "VIII.3.a",
        description: "Opisuje właściwości chemiczne, stopnie utlenienia oraz charakterystyczne barwy jonów i osadów pierwiastków bloku d: chromu (Cr2+, Cr3+, [Cr(OH)4]-, CrO4^2- ↔ Cr2O7^2-), manganu (Mn2+, MnO2, MnO4^2-, MnO4-), żelaza (Fe2+, Fe3+), miedzi (Cu+, Cu2+) i srebra (Ag+).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Pełny przegląd chemii pierwiastków bloku s, p i d (Cr, Mn, Fe, Cu, Zn, Ag).",
      formula2023: "Identyczny wykaz kluczowych pierwiastków bloku d z bardzo mocnym naciskiem na równowagę pH-zależną chromian(VI) ↔ dichromian(VI) oraz właściwości utleniająco-redukujące nadtlenku wodoru (H2O2).",
    },
    examTraps: [
      "Pułapka CKE: Równowaga między jonami chromianowymi(VI) a dichromianowymi(VI) (2CrO4^2- + 2H+ ⇄ Cr2O7^2- + H2O) NIE jest reakcją redoks! W obu jonach chrom jest na +VI stopniu utlenienia. Zakwaszenie zmienia barwę z żółtej (CrO4^2-) na pomarańczową (Cr2O7^2-).",
      "Pułapka CKE: Glin (Al), żelazo (Fe) i chrom (Cr) na zimno ulegają PASYWACJI w stężonym kwasie azotowym(V) (HNO3) oraz stężonym kwasie siarkowym(VI) (H2SO4) z powodu wytworzenia szczelnej warstewki tlenku na powierzchni metalu.",
      "Pułapka CKE: Wodorotlenek miedzi(II) Cu(OH)2 oraz wodorotlenek srebra (Ag2O) i cynku Zn(OH)2 roztwarzają się w wodzie amoniakalnej NH3(aq), tworząc rozpuszczalne kationy amminakompleksowe (np. szafirowy [Cu(NH3)4]^2+, bezbarwny [Ag(NH3)2]+), natomiast Al(OH)3 i Fe(OH)3 NIE roztwarzają się w nadmiarze NH3(aq)!",
    ],
    operationalVerbs: [
      {
        verb: "Zaprojektuj doświadczenie",
        rule: "Wybieraj odczynnik, który daje widoczną różnicę obserwacji (np. inną barwę osadu lub roztworzenie osadu tylko w jednej z probówek).",
        example: "Aby odróżnić wodne roztwory FeCl2 i FeCl3, do obu probówek dodajemy roztwór NaOH: w probówce z FeCl2 wytrąca się szarozielony osad Fe(OH)2 (ciemniejący na powietrzu), a w probówce z FeCl3 wytrąca się brunatny (rdzawy) osad Fe(OH)3.",
      },
    ],
    keywords: ["litowce", "berylowce", "fluorowce", "pasywacja", "chrom", "mangan", "żelazo", "miedź", "chromiany", "dichromiany", "blok d"],
  },
  {
    id: "cke-chem-dzial-9",
    sectionCode: "Dział IX",
    title: "Dział IX. Węglowodory",
    subtitle: "Alkany, alkeny, alkiny i węglowodory aromatyczne: izomeria, mechanizmy SR, AE, SE, reguła Markownikowa i polimeryzacja",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "IX.1.a",
        description: "Tworzy nazwy systematyczne IUPAC i wzory węglowodorów (alkany, cykloalkany, alkeny, alkiny, areny), rozpoznaje izomerię konstytucyjną (szkieletową, położenia wiązania wielokrotnego) oraz geometryczną cis-trans (E-Z).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IX.2.a",
        description: "Opisuje mechanizm substytucji rodnikowej (SR) w alkanach (inicjacja, propagacja, terminacja; reaktywność H: III° > II° > I°) oraz addycji elektrofilowej (AE) do alkenów i alkinów z zastosowaniem reguły Markownikowa (i eliminacji zgodnie z regułą Zajcewa).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IX.3.a",
        description: "Porównuje zachowanie alkanów, alkenów/alkinów i benzenu wobec wody bromowej i roztworu KMnO4 oraz zapisuje równania reakcji polimeryzacji (polietylen, polipropylen, PVC, polistyren, kauczuk).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "IX.4.a",
        description: "Zapisuje równania substytucji elektrofilowej (SE) w pierścieniu aromatycznym (bromowanie wobec FeBr3, nitrowanie mieszaniną nitrującą, alkilowanie Friedela-Craftsa) i stosuje reguły kierujące podstawników I rodzaju (orto/para: -OH, -NH2, -CH3, -Cl/-Br) oraz II rodzaju (meta: -NO2, -COOH, -CHO, -SO3H).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Pełny zakres reakcji węglowodorów alifatycznych i aromatycznych (SR, AE, SE).",
      formula2023: "Rozszerzony nacisk na oznaczanie konfiguracji bezwzględnej E/Z wiązania podwójnego (według reguł pierwszeństwa Cahna-Ingolda-Preloga) oraz utlenianie alkenów i alkilobenzenów za pomocą KMnO4.",
    },
    examTraps: [
      "Pułapka CKE: Toluen (metylobenzen) reaguje z Cl2/Br2 na DWA zupełnie różne sposoby w zależności od warunków: wobec światła (hν / T) zachodzi substytucja RODNIKOWA w grupie metylowej (łańcuchu bocznym, daje chlorek benzylu), natomiast wobec katalizatora (FeCl3 / FeBr3) na zimno zachodzi substytucja ELEKTROFILOWA w pierścieniu (w pozycjach orto i para)!",
      "Pułapka CKE: Benzen NIE odbarwia wody bromowej ani zakwaszonego roztworu KMnO4, natomiast toluen i inne alkilobenzeny (posiadające wodór benzylowy) ulegają utlenieniu gorącym roztworem KMnO4 do kwasu benzoesowego (lub benzoesanu potasu)!",
      "Pułapka CKE: W hydratacji etynu (acetylenu) w obecności soli Hg2+ i H2SO4 (reakcja Kuczerowa) produktem nietrwałym jest etenol (enol), który natychmiast ulega tautomerii ketonowo-enolowej do ETANALU (aldehydu octowego), a NIE etanolu!",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij różnicę w reaktywności",
        rule: "Odwołaj się do budowy wiązania (obecność słabszego wiązania π vs. zdelokalizowanego sekstetu elektronowego w benzenie).",
        example: "Alkeny łatwo ulegają reakcjom addycji (odbarwiają wodę bromową bez katalizatora), ponieważ posiadają zlokalizowane wiązanie π o mniejszej energii niż wiązanie σ; w cząsteczce benzenu 6 elektronów π tworzy zdelokalizowany sekstet aromatyczny nadający pierścieniowi dużą trwałość energetyczną, przez co benzen ulega substytucji elektrofilowej zamiast addycji.",
      },
    ],
    keywords: ["węglowodory", "alkany", "alkeny", "alkiny", "benzen", "Markownikow", "Zajcew", "substytucja", "addycja", "polimeryzacja", "izomeria cis-trans"],
  },
  {
    id: "cke-chem-dzial-10",
    sectionCode: "Dział X",
    title: "Dział X. Hydroksylowe pochodne węglowodorów (Alkohole i Fenole)",
    subtitle: "Alkohole monohydroksylowe (I°, II°, III°) i polihydroksylowe (glikol, glicerol), próba Lucasa oraz fenole",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "X.1.a",
        description: "Określa rzędowość alkoholi (I-, II-, III-rzędowe), porównuje ich reaktywność w próbie Lucasa (stęż. HCl + ZnCl2) oraz produkty łagodnego utleniania (CuO, K2Cr2O7/H+): alkohol I° → aldehyd → kwas karboksylowy; alkohol II° → keton; alkohol III° → nie ulega łagodnemu utlenieniu.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "X.2.a",
        description: "Odróżnia alkohole monohydroksylowe od polihydroksylowych (glikol etylenowy, glicerol — propano-1,2,3-triol) za pomocą świeżo strąconego wodorotlenku miedzi(II) Cu(OH)2 na zimno.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "X.3.a",
        description: "Porównuje właściwości kwasowe alkoholi i fenolu (reakcja z Na vs. reakcja z NaOH), zapisuje reakcję fenolu z wodą bromową (biały osad 2,4,6-tribromofenolu) i kwasem azotowym(V) oraz zna reakcję charakterystyczną fenoli z FeCl3 (fioletowe zabarwienie).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Pełny zakres chemii alkoholi mono- i polihydroksylowych oraz fenoli.",
      formula2023: "Pogłębione porównanie mocy kwasowej (woda vs. etanol vs. fenol vs. kwas węglowy — np. wypieranie fenolu z fenolanu sodu przez CO2 + H2O).",
    },
    examTraps: [
      "Pułapka CKE: Wodne roztwory alkoholi (etanolu, glicerolu) mają odczyn OBOJĘTNY (nie ulegają dysocjacji w mierzalnym stopniu i NIE reagują z NaOH!), natomiast wodny roztwór fenolu ma odczyn SŁABO KWASOWY i reaguje zarówno z Na, jak i z NaOH (tworząc fenolan sodu i wodę).",
      "Pułapka CKE: W reakcji alkoholu polihydroksylowego (np. glicerolu) ze świeżo strąconym niebieskim osadem Cu(OH)2 na zimno osad roztwarza się i powstaje SZAFIROWY (ciemnoniebieski), klarowny roztwór kompleksu miedzi(II) — nie jest to reakcja redoks (w przeciwieństwie do próby Trommera na gorąco)!",
      "Pułapka CKE: Кwas węglowy (H2O + CO2) jest kwasem mocniejszym od fenolu! Dlatego po wprowadzeniu CO2 do klarownego roztworu fenolanu sodu obserwujemy zmętnienie roztworu (wydziela się słabo rozpuszczalny w wodzie fenol).",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Wyjaśniając większą kwasowość fenolu w porównaniu z etanolem, odwołaj się do sprzężenia wolnej pary elektronowej tlenu z pierścieniem aromatycznym (efekt mezomeryczny).",
        example: "Fenol wykazuje właściwości kwasowe (reaguje z NaOH), ponieważ wolna para elektronowa atomu tlenu grupy -OH oddziałuje ze zdelokalizowanymi elektronami π pierścienia benzenowego, co zwiększa polaryzację wiązania O-H i stabilizuje powstający anion fenolanowy C6H5O-; w cząsteczce etanolu efekt ten nie występuje.",
      },
    ],
    keywords: ["alkohole", "rzędowość", "próba Lucasa", "glicerol", "glikol", "fenol", "utlenianie alkoholi", "wodorotlenek miedzi"],
  },
  {
    id: "cke-chem-dzial-11",
    sectionCode: "Dział XI",
    title: "Dział XI. Związki karbonylowe (Aldehydy i Ketony)",
    subtitle: "Budowa grupy karbonylowej, otrzymywanie, próba Tollensa i Trommera, kondensacja aldolowa i próba jodoformowa",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "XI.1.a",
        description: "Rozróżnia aldehydy (-CHO) i ketony (>C=O), opisuje polarność grupy karbonylowej (hybrydyzacja sp2 atomu węgla) oraz metody otrzymywania (utlenianie alkoholi I° i II°, hydratacja alkinów).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XI.2.a",
        description: "Zapisuje cząsteczkowe i jonowe równania reakcji odróżniających aldehydy od ketonów: próby Tollensa (z [Ag(NH3)2]+ / OH- na gorąco → lustro srebrowe Ag) oraz próby Trommera (z Cu(OH)2 / OH- na gorąco → ceglastoczerwony osad Cu2O) i reakcji redukcji (do alkoholi I° i II°).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XI.3.a",
        description: "Analizuje reakcje addycji nukleofilowej do grupy karbonylowej (tworzenie hemiacetali i acetali, cyjanohydryn), kondensacji aldolowej oraz próbę jodoformową (I2 + NaOH dla związków z ugrupowaniem CH3-C=O lub CH3-CH(OH)-).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Klasyczne próby Tollensa i Trommera, utlenianie/redukcja oraz podstawy reakcji aldolowej na podstawie informacji wprowadzającej.",
      formula2023: "Większy nacisk na jonowy zapis próby Tollensa i Trommera w środowisku zasadowym (z jonem OH- po stronie substratów i anionem karboksylowym R-COO- po stronie produktów!) oraz tworzenie hemiacetali (kluczowe dla zrozumienia cyklizacji monosacharydów).",
    },
    examTraps: [
      "Pułapka CKE: W próbie Tollensa i Trommera środowisko reakcji jest ZASADOWE (obecność OH- lub NH3)! Dlatego w zapisie jonowym produktem utlenienia aldehydu R-CHO jest ANION KARBOKSYLOWY (R-COO-), a NIE niezdysocjowany kwas R-COOH!",
      "Pułapka CKE: Metanal (formaldehyd, HCHO) oraz kwas metanowy (mrówkowy, HCOOH) utleniają się w próbie Tollensa i Trommera do węglanu CO3^2- (lub CO2 + H2O), ponieważ po pierwszym etapie utlenienia metanalu powstaje kwas mrówkowy, który nadal zawiera grupę aldehydową!",
      "Pułapka CKE: Cząsteczki aldehydów i ketonów NIE tworzą między sobą wiązań wodorowych (brak atomu H połączonego bezpośrednio z tlenem!), ale mogą tworzyć wiązania wodorowe z cząsteczkami WODY (dlatego niższe aldehydy i aceton dobrze rozpuszczają się w wodzie, ale mają niższe temperatury wrzenia niż odpowiednie alkohole).",
    ],
    operationalVerbs: [
      {
        verb: "Zapisz równanie w formie jonowej",
        rule: "Pamiętaj o zbilansowaniu ładunków w środowisku zasadowym (używaj jonów OH- i H2O, nigdy H+!).",
        example: "Próba Trommera dla etanalu: CH3CHO + 2Cu(OH)2 + OH- --(T)--> CH3COO- + Cu2O↓ + 3H2O (niebieski osad przechodzi w ceglastoczerwony osad Cu2O).",
      },
    ],
    keywords: ["aldehydy", "ketony", "grupa karbonylowa", "próba Tollensa", "próba Trommera", "lustro srebrowe", "hemiacetal", "aceton", "etanal"],
  },
  {
    id: "cke-chem-dzial-12",
    sectionCode: "Dział XII",
    title: "Dział XII. Kwasy karboksylowe, estry, tłuszcze i izomeria optyczna",
    subtitle: "Kwasy karboksylowe, efekt indukcyjny, hydroksykwasy, chiralność i projekcje Fischera, estryfikacja oraz tłuszcze i mydła",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "XII.1.a",
        description: "Porównuje moc kwasów karboksylowych w szeregu homologicznym oraz pod wpływem podstawników elektroujemnych (efekt indukcyjny, np. CH3COOH < ClCH2COOH < Cl2CHCOOH < Cl3CCOOH) i opisuje szczególne właściwości kwasu metanowego (mrówkowego).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XII.2.a",
        description: "Zapisuje równania reakcji estryfikacji (równowagowa, katalizator H2SO4 stęż.) oraz hydrolizy estrów: kwasowej (odwracalna → kwas + alkohol) i zasadowej/zmydlania (nieodwracalna → sól kwasu + alkohol).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XII.2.b",
        description: "Charakteryzuje tłuszcze jako triacyloglicerole (ciekłe nienasycone vs. stałe nasycone), zapisuje reakcję utwardzania (uwodornienia) olejów roślinnych oraz zmydlania tłuszczów i zachowania mydeł w twardej wodzie.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XII.3.a",
        description: "Wskazuje asymetryczne atomy węgla (centra chiralności C*), rysuje wzory w projekcji Fischera dla enancjomerów D/L i diastereoizomerów (np. kwas mlekowy, winowy — w tym nieczynna optycznie forma mezo) oraz wyznacza liczbę stereoizomerów (2^n).",
        status: "2023-only",
        formulas: ["2023"],
        note2015: "W Formule 2015 wymagane jest jedynie rozpoznawanie asymetrycznego atomu węgla (C*) i pojęcia enancjomerów (lustrzanych odbić); rozbudowana analiza diastereoizomerów i formy mezo w projekcjach Fischera należy do rozszerzenia Formuły 2023+.",
        note2023: "Kluczowy temat Formuły 2023+: pełna analiza stereoizomerii (enancjomery, diastereoizomery, forma mezo, projekcje Fischera, konfiguracja względna D/L i bezwzględna R/S z informacją wprowadzającą).",
      },
    ],
    formulaDifferences: {
      formula2015: "Kwasy karboksylowe, hydroksykwasy, estry, tłuszcze, mydła i oznaczanie węgla asymetrycznego C*.",
      formula2023: "Rozbudowana stereoizomeria optyczna (`2023-only`: projekcje Fischera, diastereoizomery, forma mezo kwasu winowego) oraz dokładna analiza wpływu efektu indukcyjnego na wartość stałej Ka i pKa kwasów.",
    },
    examTraps: [
      "Pułapka CKE: Zmydlanie estru (hydroliza w obecności NaOH lub KOH) jest reakcją NIEODWRACALNĄ, ponieważ powstający kwas karboksylowy ulega zobojętnieniu do jonu karboksylowego (soli R-COONa), który nie ma właściwości elektrofilowych i nie reaguje z alkoholem!",
      "Pułapka CKE: W twardej wodzie (zawierającej jony Ca2+ i Mg2+) rozpuszczalne mydła sodowe/potasowe tworzą NIEROZPUSZCZALNY osad soli wapniowych/magnezowych wyższych kwasów tłuszczowych (np. (C17H35COO)2Ca↓), co obniża zdolność piorącą mydła.",
      "Pułapka CKE (2023+): Związek posiadający 2 lub więcej asymetrycznych atomów węgla (C*) oraz wewnętrzną płaszczyznę symetrii (np. kwas mezo-winowy) jest AChIRALNY i NIECZYNNY OPTYCZNIE pomimo obecności centrów stereogenicznych!",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Wyjaśniając rolę stężonego H2SO4 w estryfikacji, podaj OBIE jego funkcje: katalizatora (dostarcza H+) oraz środka higroskopijnego (wiąże wodę i przesuwa stan równowagi w prawo).",
        example: "Stężony kwas siarkowy(VI) pełni rolę katalizatora przyspieszającego osiągnięcie stanu równowagi, a dzięki właściwościom higroskopijnym wiąże powstającą w reakcji wodę, co zgodnie z regułą przekory przesuwa stan równowagi reakcji estryfikacji w stronę tworzenia estru (zwiększa wydajność reakcji).",
      },
    ],
    keywords: ["kwasy karboksylowe", "estry", "estryfikacja", "tłuszcze", "zmydlanie", "mydła", "hydroksykwasy", "izomeria optyczna", "chiralność", "Fischer", "enancjomery"],
  },
  {
    id: "cke-chem-dzial-13",
    sectionCode: "Dział XIII",
    title: "Dział XIII. Związki azotowe, aminokwasy, białka i sacharydy",
    subtitle: "Aminy i amidy, aminokwasy i punkt izoelektryczny, wiązanie peptydowe i białka oraz monosacharydy (Haworth), disacharydy i polisacharydy",
    status: "core",
    formulas: ["2015", "2023"],
    requirements: [
      {
        code: "XIII.1.a",
        description: "Porównuje budowę, rzędowość i właściwości zasadowe amoniaku, amin alifatycznych (I° < II°) oraz amin aromatycznych (anilina — słabsza zasada niż NH3) oraz charakteryzuje amidy (obojętny odczyn mocznika, hydroliza wiązania amidowego).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XIII.2.a",
        description: "Zapisuje formy jonowe aminokwasów w zależności od pH roztworu (kation w środowisku kwasowym pH < pI, jon obojnaczy w punkcie izoelektrycznym pH ≈ pI, anion w środowisku zasadowym pH > pI), tworzy wzory peptydów i opisuje reakcje charakterystyczne białek (biuretowa, ksantoproteinowa).",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XIII.3.a",
        description: "Przekształca wzory łańcuchowe Fischera monosacharydów (D-glukoza, D-galaktoza, D-mannoza, D-ryboza, D-fruktoza) we wzory pierścieniowe Hawortha (piranozy i furanozy, anomery α i β), wyjaśnia zjawisko mutarotacji oraz właściwości redukujące cukrów.",
        status: "core",
        formulas: ["2015", "2023"],
      },
      {
        code: "XIII.3.b",
        description: "Porównuje budowę i właściwości disacharydów redukujących (maltoza, laktoza, celobioza — wolny hemiacetalowy OH) oraz nieredukujących (sacharoza, trehaloza — wiązanie α,β-1,2-glikozydowe) i polisacharydów (skrobia: amyloza + amylopektyna, glikogen, celuloza).",
        status: "core",
        formulas: ["2015", "2023"],
      },
    ],
    formulaDifferences: {
      formula2015: "Pełny zakres amin, amidów, aminokwasów, peptydów, białek i sacharydów (w tym wzory Hawortha).",
      formula2023: "Szczególny nacisk na zależność formy jonowej aminokwasów (np. kwasu glutaminowego, lizyny, alaniny) od pH podczas elektroforezy (wędrówka do katody lub anody) oraz epimeryzację i tautomerię ketonowo-enolową fruktozy w środowisku zasadowym.",
    },
    examTraps: [
      "Pułapka CKE: Fruktoza jest ketozą (ketonem polihydroksylowym), ale DAJE POZYTYWNY WYNIK próby Tollensa i Trommera, ponieważ w środowisku zasadowym tych prób ulega izomeryzacji (tautomerii ketonowo-enolowej przez stadium endiolu) do aldoz (glukozy i mannozy)! Aby odróżnić glukozę od fruktozy, należy użyć WODY BROMOWEJ (Br2/H2O w środowisku lekko kwasowym/obojętnym), która utlenia wyłącznie aldozy (glukozę do kwasu glukonowego), a nie utlenia fruktozy!",
      "Pułapka CKE: Sacharoza NIE ma właściwości redukujących (ujemna próba Trommera i Tollensa), ponieważ w jej cząsteczce w utworzeniu wiązania α,β-1,2-glikozydowego biorą udział OBA grupy hydroksylowe przy anomerycznych atomach węgla (C1 glukozy i C2 fruktozy) — brak wolnego ugrupowania hemiacetalowego!",
      "Pułapka CKE: W elektroforezie przy pH NIŻSZYM niż punkt izoelektryczny (pH < pI) aminokwas występuje w formie KATIONU i wędruje do elektrody UJEMNEJ (katody); przy pH > pI występuje w formie ANIONU i wędruje do elektrody DODATNIEJ (anody).",
    ],
    operationalVerbs: [
      {
        verb: "Wyjaśnij",
        rule: "Wyjaśniając różnicę w zasadowości metyloaminy i fenyloaminy (aniliny), porównaj efekt elektronowy grupy metylowej (+I) oraz pierścienia benzenowego (-M).",
        example: "Metyloamina jest mocniejszą zasadą niż anilina, ponieważ w anilinie wolna para elektronowa atomu azotu grupy -NH2 ulega sprzężeniu ze zdelokalizowanymi elektronami π pierścienia aromatycznego, co zmniejsza gęstość elektronową na atomie azotu i utrudnia przyłączenie protonu H+; w metyloaminie grupa metylowa wywiera dodatni efekt indukcyjny, zwiększając zdolność atomu azotu do wiązania H+.",
      },
    ],
    keywords: ["aminy", "anilina", "amidy", "aminokwasy", "punkt izoelektryczny", "białka", "reakcja biuretowa", "sacharydy", "glukoza", "fruktoza", "sacharoza", "Haworth", "mutarotacja"],
  },
];
