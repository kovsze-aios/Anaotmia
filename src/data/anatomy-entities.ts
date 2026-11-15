import generatedEntities from "./oer-generated/anatomia-3d-entities.json";

export interface AnatomicalSubPin {
  id: string;
  /** Optional exact sub-mesh name or keyword inside BodyParts3D / GLB scene graph. */
  meshNodeName?: string;
  labelPl: string;
  labelLat: string;
  topographyAndStructure: string;
  vascularizationAndInnervation?: string;
  physiologyAndFunction: string;
  clinicalNotes?: string;
  /**
   * Normalized [x, y, z] position relative to the organ's 3D bounding box center
   * (e.g. [-0.5..0.5] * size), or overridden at runtime by `meshNodeName` bounds.
   * +X = anatomical left, +Y = superior/cranial, +Z = anterior.
   */
  position: [number, number, number];
}

export interface AnatomicalEntity {
  id: string;
  /** Target 3D model concept/part name in AtlasExplorer (English lowercase). */
  meshId: string;
  namePl: string;
  nameLat: string;
  system: string;
  summary: string;
  cameraFocus?: {
    position: [number, number, number];
    target: [number, number, number];
  };
  /** Inflected Polish & Latin forms for textbook auto-linking. */
  forms: string[];
  pins: AnatomicalSubPin[];
}

export const ANATOMICAL_ENTITIES: Record<string, AnatomicalEntity> = {
  heart: {
    id: "heart",
    meshId: "heart",
    namePl: "Serce",
    nameLat: "Cor",
    system: "Układ krążenia",
    summary:
      "Czterojamowa pompa mięśniowa w śródpiersiu środkowym tłocząca krew do krążenia płucnego (małego) i ustrojowego (dużego).",
    forms: ["serce", "serca", "sercu", "sercem", "sercowe", "cor", "cordis"],
    pins: [
      {
        id: "left-ventricle",
        meshNodeName: "left ventricle",
        labelPl: "Komora lewa",
        labelLat: "Ventriculus sinister",
        topographyAndStructure:
          "Tworzy koniuszek serca (apex cordis) i lewą krawędź serca. Jej ściana (myocardium) jest ok. 3 razy grubsza (12–15 mm) niż ściana komory prawej, co wynika z wysokiego oporu krążenia systemowego.",
        vascularizationAndInnervation:
          "Unaczyniona głównie przez gałąź międzykomorową przednią (LAD) i gałąź okalającą (LCx) od lewej tętnicy wieńcowej; unerwienie autonomiczne ze splotu sercowego (n. błędny X i pnie współczulne Th1–Th4).",
        physiologyAndFunction:
          "Wyrzuca krew utlenowaną przez zastawkę aortalną do aorty pod ciśnieniem skurczowym ok. 120 mmHg, generując rzut serca (CO = SV × HR).",
        clinicalNotes:
          "Najczęstsza lokalizacja zawału mięśnia sercowego (zawał ściany przedniej lub dolnej) oraz przerostu mięśnia w nadciśnieniu tętniczym i zwężeniu zastawki aortalnej.",
        position: [0.22, -0.18, 0.16],
      },
      {
        id: "right-ventricle",
        meshNodeName: "right ventricle",
        labelPl: "Komora prawa",
        labelLat: "Ventriculus dexter",
        topographyAndStructure:
          "Zajmuje większość powierzchni mostkowo-żebrowej (przedniej) serca. Ściana grubości ok. 3–5 mm; wewnątrz widoczne mięśnie brodawkowate i beleczki mięśniowe oraz zastawka trójdzielna.",
        vascularizationAndInnervation:
          "Prawa tętnica wieńcowa (RCA) poprzez gałąź brzeżną prawą i międzykomorową tylną (u osób z dominacją prawej tętnicy wieńcowej).",
        physiologyAndFunction:
          "Tłoczy krew odtlenowaną przez pień płucny do płuc pod niskim ciśnieniem (ok. 25/10 mmHg), zapewniając wymianę gazową w pęcherzykach płucnych.",
        clinicalNotes:
          "Przerost komory prawej rozwija się jako serce płucne (cor pulmonale) np. w przewlekłej obturacyjnej chorobie płuc (POChP) i zatorowości płucnej.",
        position: [-0.15, -0.12, 0.28],
      },
      {
        id: "right-atrium",
        meshNodeName: "right atrium",
        labelPl: "Przedsionek prawy",
        labelLat: "Atrium dextrum",
        topographyAndStructure:
          "Tworzy prawy brzeg serca. Uchodzą do niego żyła główna górna (SVC), żyła główna dolna (IVC) oraz zatoka wieńcowa; w górnej części przy ujściu SVC leży węzeł zatokowo-przedsionkowy (SA).",
        vascularizationAndInnervation:
          "Tętnica węzła zatokowego (najczęściej gałąź prawej tętnicy wieńcowej — 60% populacji). Układ bodźcotwórczo-przewodzący pod kontrolą nerwu błędnego (zwolnienie rytmu) i współczulną (przyspieszenie).",
        physiologyAndFunction:
          "Odbiera krew żylną z całego organizmu (krążenie duże) i kieruje ją przez zastawkę trójdzielną do komory prawej; węzeł SA pełni rolę naturalnego rozrusznika serca (60–80 uderzeń/min).",
        clinicalNotes:
          "W trzepotaniu i migotaniu przedsionków lub dysfunkcji węzła zatokowego dochodzi do zaburzeń rytmu i zastoju krwi w uszku przedsionka.",
        position: [-0.28, 0.14, 0.08],
      },
      {
        id: "left-atrium",
        meshNodeName: "left atrium",
        labelPl: "Przedsionek lewy",
        labelLat: "Atrium sinistrum",
        topographyAndStructure:
          "Stanowi tylną powierzchnię serca (przylega bezpośrednio do przełyku). Odbiera krew z czterech żył płucnych (po dwie z każdego płuca).",
        vascularizationAndInnervation:
          "Gałąź okalająca lewej tętnicy wieńcowej; bogato unerwiony mechanoreceptorami objętościowymi (odruch Bainbridge'a, wydzielanie ANP).",
        physiologyAndFunction:
          "Odbiera krew utlenowaną z płuc i podczas rozkurczu tłoczy ją przez zastawkę dwudzielną (mitralną) do komory lewej.",
        clinicalNotes:
          "Powiększenie lewego przedsionka w stenozie mitralnej może uciskać przełyk (dysfagia) lub nerw krtaniowy wsteczny lewy (chrypka — zespół Ortnera).",
        position: [0.16, 0.18, -0.22],
      },
      {
        id: "aortic-arch",
        meshNodeName: "aorta",
        labelPl: "Aorta wstępująca i łuk aorty",
        labelLat: "Aorta ascendens et arcus aortae",
        topographyAndStructure:
          "Odchodzi z lewej komory; od opuszki aorty odchodzą lewa i prawa tętnica wieńcowa, a od łuku aorty kolejno: pień ramienno-głowowy, t. szyjna wspólna lewa i t. podobojczykowa lewa.",
        vascularizationAndInnervation:
          "Ściana typu sprężystego (vasa vasorum w przydance); w łuku znajdują się baroreceptory i ciałka przyzwojowe (aortalne) zaopatrywane przez n. błędny.",
        physiologyAndFunction:
          "Rozprowadza krew utlenowaną do wszystkich narządów; sprężysta ściana łuku aorty działa jak powietrzniak (efekt Windkessela), utrzymując przepływ w fazie rozkurczu.",
        clinicalNotes:
          "Miejsce rozwoju tętniaków, rozwarstwienia aorty oraz koarktacji (zwężenia cieśni aorty) u pacjentów pediatrycznych.",
        position: [0.02, 0.34, 0.05],
      },
    ],
  },
  brain: {
    id: "brain",
    meshId: "brain",
    namePl: "Mózgowie",
    nameLat: "Encephalon",
    system: "Układ nerwowy",
    summary:
      "Nadrzędny ośrodek układu nerwowego w jamie czaszki integrujący czucie, funkcje poznawcze, ruch oraz regulację autonomiczną.",
    forms: [
      "mózgowie",
      "mózgowia",
      "mózgowiu",
      "mózgowiem",
      "mózg",
      "mózgu",
      "mózgiem",
      "encephalon",
      "cerebrum",
    ],
    pins: [
      {
        id: "frontal-lobe",
        meshNodeName: "frontal lobe",
        labelPl: "Płat czołowy",
        labelLat: "Lobus frontalis",
        topographyAndStructure:
          "Największy płat półkul mózgu, ograniczony od tyłu bruzdą środkową (Rolanda), a od dołu bruzdą boczną (Sylwiusza). Zawiera zakręt przedśrodkowy (M1) i pole ruchowe mowy Broki (44/45).",
        vascularizationAndInnervation:
          "Unaczyniony przez tętnicę przednią mózgu (powierzchnia przyśrodkowa) i tętnicę środkową mózgu (powierzchnia grzbietowo-boczna).",
        physiologyAndFunction:
          "Odpowiada za planowanie i inicjowanie ruchów dowolnych (kora ruchowa), funkcje wykonawcze, kontrolę impulsów, pamięć roboczą oraz produkcję mowy.",
        clinicalNotes:
          "Uszkodzenie zakrętu przedśrodkowego powoduje niedowład połowiczy po stronie przeciwnej; uszkodzenie pola Broki prowadzi do afazji ruchowej (motorycznej).",
        position: [0.0, 0.18, 0.3],
      },
      {
        id: "parietal-occipital",
        meshNodeName: "parietal",
        labelPl: "Płat ciemieniowy i potyliczny",
        labelLat: "Lobus parietalis et occipitalis",
        topographyAndStructure:
          "Płat ciemieniowy leży za bruzdą środkową (zakręt zaśrodkowy — pierwszorzędowa kora somatosensoryczna S1), a płat potyliczny w tylnej części półkuli nad namiotem móżdżku (bruzda ostrogowa — kora wzrokowa V1).",
        vascularizationAndInnervation:
          "Płat ciemieniowy: tętnica środkowa i przednia mózgu; płat potyliczny: tętnica tylna mózgu (PCA).",
        physiologyAndFunction:
          "Płat ciemieniowy przetwarza czucie dotyku, bólu, temperatury, priopriocepcję i orientację przestrzenną; płat potyliczny odbiera i analizuje bodźce wzrokowe.",
        clinicalNotes:
          "Udar tętnicy tylnej mózgu powoduje jednoimienne niedowidzenie połowicze po stronie przeciwnej, zwykle z zaoszczędzeniem plamki.",
        position: [0.0, 0.14, -0.32],
      },
      {
        id: "cerebellum",
        meshNodeName: "cerebellum",
        labelPl: "Móżdżek",
        labelLat: "Cerebellum",
        topographyAndStructure:
          "Leży w dole tylnym czaszki pod namiotem móżdżku, grzbietowo od mostu i rdzenia przedłużonego. Składa się z dwóch półkul oraz nieparzystego robaka (vermis).",
        vascularizationAndInnervation:
          "Trzy pary tętnic z układu kręgowo-podstawnego: SCA, AICA oraz PICA.",
        physiologyAndFunction:
          "Koordynuje precyzję, płynność i siłę ruchów dowolnych, utrzymuje równowagę (układ przedsionkowo-móżdżkowy) oraz reguluje napięcie mięśniowe i uczenie motoryczne.",
        clinicalNotes:
          "Uszkodzenie półkul móżdżku daje ataksję kończyn po tej samej stronie (tożstronne / ipsilateralne), drżenie zamiarowe i dysdiadochokinezę.",
        position: [0.0, -0.24, -0.26],
      },
      {
        id: "brainstem",
        meshNodeName: "pons",
        labelPl: "Pień mózgu (most i rdzeń przedłużony)",
        labelLat: "Truncus encephali (pons et medulla oblongata)",
        topographyAndStructure:
          "Łączy międzymózgowie z rdzeniem kręgowym. Zawiera jądra nerwów czaszkowych III–XII, twór siatkowaty oraz drogi długie (korowo-rdzeniowe, wstęgi przyśrodkowe).",
        vascularizationAndInnervation:
          "Tętnice kręgowe i tętnica podstawna (a. basilaris) z gałęziami przeszywającymi.",
        physiologyAndFunction:
          "Zawiera życiowo ważne ośrodki autonomiczne: oddechowy, naczynioruchowy, regulacji częstości akcji serca oraz odruchy obronne (kaszel, połykanie, wymioty).",
        clinicalNotes:
          "Wgłobienie migdałków móżdżku w otwór wielki uciska rdzeń przedłużony, prowadząc do nagłego zatrzymania oddechu i krążenia.",
        position: [0.0, -0.28, 0.04],
      },
    ],
  },
  lung: {
    id: "lung",
    meshId: "lung",
    namePl: "Płuca",
    nameLat: "Pulmones",
    system: "Układ oddechowy",
    summary:
      "Parzyste narządy miąższowe w jamie opłucnej odpowiedzialne za wymianę gazową (O₂ i CO₂) w pęcherzykach płucnych.",
    forms: ["płuco", "płuca", "płuc", "płucom", "płucach", "płucem", "pulmo", "pulmones"],
    pins: [
      {
        id: "right-superior-lobe",
        meshNodeName: "right lung",
        labelPl: "Płat górny płuca prawego",
        labelLat: "Lobus superior pulmonis dextri",
        topographyAndStructure:
          "Płuco prawe jest szersze, krótsze (uniesione przez wątrobę) i ma 3 płaty oddzielone szczeliną poziomą i skośną; płat górny leży powyżej szczeliny poziomej (IV żebro).",
        vascularizationAndInnervation:
          "Krążenie czynnościowe (pień i żyły płucne) + odżywcze (tętnice oskrzelowe od aorty piersiowej); splot płucny (n. X i współczulny Th2–Th5).",
        physiologyAndFunction:
          "Zapewnia wentylację szczytowych segmentów płuca; w pozycji stojącej ma wysoki stosunek wentylacji do perfuzji (V/Q > 1).",
        clinicalNotes:
          "Szczyty płuc są klasyczną lokalizacją reaktywacji gruźlicy wtórnej ze względu na wysokie prężności tlenu (pO₂) i słabszy drenaż limfatyczny.",
        position: [-0.28, 0.25, 0.06],
      },
      {
        id: "pulmonary-hilum",
        meshNodeName: "hilum",
        labelPl: "Wnęka płuca i korzeń płuca",
        labelLat: "Hilum et radix pulmonis",
        topographyAndStructure:
          "Zagłębienie na powierzchni przyśrodkowej (śródpiersiowej), przez które przechodzą oskrzele główne, tętnica płucna, dwie żyły płucne, naczynia oskrzelowe i węzły chłonne.",
        vascularizationAndInnervation:
          "Tętnice i żyły płucne tworzą bezpośrednie połączenie z prawą komorą i lewym przedsionkiem serca.",
        physiologyAndFunction:
          "Miejsce dystrybucji powietrza, krwi krążenia małego i chłonki między śródpiersiem a miąższem płucnym.",
        clinicalNotes:
          "Powiększenie węzłów chłonnych wnęk w badaniu RTG klatki piersiowej jest typowe m.in. dla sarkoidozy, gruźlicy oraz chłoniaków i raka płuca.",
        position: [0.06, 0.02, -0.02],
      },
      {
        id: "left-cardiac-notch",
        meshNodeName: "left lung",
        labelPl: "Płuco lewe — wcięcie sercowe i języczek",
        labelLat: "Pulmo sinister — incisura cardiaca et lingula",
        topographyAndStructure:
          "Płuco lewe posiada 2 płaty (górny i dolny) przedzielone szczeliną skośną oraz charakterystyczne wcięcie sercowe na brzegu przednim dla koniuszka serca.",
        vascularizationAndInnervation:
          "Gałęzie lewej tętnicy płucnej i żył płucnych; przed wnęką lewego płuca przebiega nerw przeponowy, a za nią nerw błędny.",
        physiologyAndFunction:
          "Umożliwia swobodny skurcz lewej komory w worku osierdziowym bez kolizji z miąższem płucnym podczas głębokiego wdechu.",
        clinicalNotes:
          "Języczek płuca lewego stanowi homologon płata środkowego płuca prawego i jest miejscem częstych zapaleń u chorych z rozstrzeniami oskrzeli.",
        position: [0.28, -0.08, 0.14],
      },
    ],
  },
  liver: {
    id: "liver",
    meshId: "liver",
    namePl: "Wątroba",
    nameLat: "Hepar",
    system: "Układ pokarmowy",
    summary:
      "Największy gruczoł organizmu w prawym podżebrzu pełniący kluczową rolę metaboliczną, detoksykacyjną i żółciotwórczą.",
    forms: ["wątroba", "wątroby", "wątrobie", "wątrobę", "wątrobą", "wątrobowe", "hepar"],
    pins: [
      {
        id: "right-lobe-liver",
        meshNodeName: "right lobe of liver",
        labelPl: "Płat prawy wątroby",
        labelLat: "Lobus hepatis dexter",
        topographyAndStructure:
          "Największy płat anatomiczny położony pod prawą kopułą przepony, oddzielony od płata lewego więzadłem sierpowatym; dzieli się czynnościowo na segmenty V–VIII.",
        vascularizationAndInnervation:
          "Podwójne ukrwienie: 75–80% krwi doprowadza żyła wrotna (krew bogata w składniki odżywcze z jelit), 20–25% tętnica wątrobowa właściwa (krew utlenowana); odpływ żyłami wątrobowymi do IVC.",
        physiologyAndFunction:
          "Syntetyzuje albuminy i czynniki krzepnięcia, magazynuje glikogen, prowadzi glukoneogenezę, cykl mocznikowy oraz detoksykację leków (cytochrom P450).",
        clinicalNotes:
          "Przewlekłe uszkodzenie hepatocytów prowadzi do marskości wątroby, nadciśnienia wrotnego i niewydolności wątroby.",
        position: [-0.22, 0.08, 0.08],
      },
      {
        id: "porta-hepatis",
        meshNodeName: "liver",
        labelPl: "Wrota wątroby (triada wrotna)",
        labelLat: "Porta hepatis",
        topographyAndStructure:
          "Poprzeczna bruzda na powierzchni trzewnej wątroby zawarta w więzadle wątrobowo-dwunastniczym; wchodzi tętnica wątrobowa właściwa i żyła wrotna, a wychodzi przewód wątrobowy wspólny.",
        vascularizationAndInnervation:
          "Splot nerwowy wątrobowy otaczający tętnicę wątrobową; torebka Glissona jest bogato unerwiona czuciowo (ból w przekrwieniu biernym wątroby).",
        physiologyAndFunction:
          "Główny węzeł dystrybucji krwi wrotnej, tętniczej oraz odprowadzania żółci z płatów wątroby do dróg żółciowych zewnątrzwątrobowych.",
        clinicalNotes:
          "W czasie zabiegów chirurgicznych manewr Pringle'a (zaciśnięcie więzadła wątrobowo-dwunastniczego) zatrzymuje krwawienie z obu naczyń doprowadzających.",
        position: [0.02, -0.14, -0.05],
      },
      {
        id: "gallbladder",
        meshNodeName: "gallbladder",
        labelPl: "Pęcherzyk żółciowy",
        labelLat: "Vesica biliaris",
        topographyAndStructure:
          "Gruszkowaty zbiornik w dole pęcherzyka żółciowego na powierzchni trzewnej wątroby; uchodzi przewodem pęcherzykowym łączącym się z przewodem wątrobowym wspólnym w przewód żółciowy wspólny.",
        vascularizationAndInnervation:
          "Tętnica pęcherzykowa (gałąź prawej tętnicy wątrobowej w trójkącie Calota); skurcz pobudzany hormonalnie przez cholecystokininę (CCK) po posiłku tłuszczowym.",
        physiologyAndFunction:
          "Magazynuje i 5–10-krotnie zagęszcza żółć poprzez aktywną resorpcję wody i elektrolitów, uwalniając ją do dwunastnicy w celu emulgacji tłuszczów.",
        clinicalNotes:
          "Kamica pęcherzyka żółciowego daje dodatni objaw Chełmońskiego/Murphy'ego i kolkę żółciową po posiłku bogatotłuszczowym.",
        position: [-0.08, -0.22, 0.16],
      },
    ],
  },
  stomach: {
    id: "stomach",
    meshId: "stomach",
    namePl: "Żołądek",
    nameLat: "Gaster / Ventriculus",
    system: "Układ pokarmowy",
    summary:
      "Workowate rozszerzenie przewodu pokarmowego między przełykiem a dwunastnicą rozpoczynające trawienie białek w środowisku kwaśnym.",
    forms: ["żołądek", "żołądka", "żołądkowi", "żołądkiem", "żołądku", "gaster", "ventriculus"],
    pins: [
      {
        id: "stomach-fundus",
        meshNodeName: "stomach",
        labelPl: "Dno żołądka",
        labelLat: "Fundus gastricus",
        topographyAndStructure:
          "Kopułowata część położona powyżej linii poziomej poprowadzonej przez wpust, przylegająca do lewej kopuły przepony i śledziony.",
        vascularizationAndInnervation:
          "Tętnice żołądkowe krótkie od tętnicy śledzionowej; unerwienie przywspółczulne pniami błędnymi (stymulacja wydzielania i motoryki).",
        physiologyAndFunction:
          "Zwykle zawiera bańkę gazową (widoczną na RTG na stojąco); komórki okładzinowe dna wydzielają kwas solny (HCl) oraz czynnik wewnętrzny Castle'a (wchłanianie wit. B₁₂).",
        clinicalNotes:
          "Niedobór czynnika Castle'a (np. w autoimmunologicznym zapaleniu błony śluzowej dna) prowadzi do niedokrwistości megaloblastycznej (Addisona-Biermera).",
        position: [0.2, 0.28, -0.04],
      },
      {
        id: "stomach-body",
        meshNodeName: "stomach",
        labelPl: "Trzon żołądka i krzywizna mniejsza/większa",
        labelLat: "Corpus gastricum",
        topographyAndStructure:
          "Najobszerniejsza część z podłużnymi fałdami śluzówki tworzącymi wzdłuż krzywizny mniejszej tzw. drogę żołądkową (magenstrasse) dla płynów.",
        vascularizationAndInnervation:
          "Krzywizna mniejsza: t. żołądkowa lewa (od pnia trzewnego) i prawa; krzywizna większa: tętnice żołądkowo-sieciowe prawa i lewa.",
        physiologyAndFunction:
          "Komórki główne wydzielają pepsynogen (aktywowany przez HCl do pepsyny trawiącej białka), a mięśniówka (trzy warstwy: skośna, okrężna, podłużna) miesza treść pokarmową.",
        clinicalNotes:
          "Wrzody żołądka (zwykle w pobliżu krzywizny mniejszej) mogą drążyć do tętnicy żołądkowej lewej, grożąc krwotokiem do przewodu pokarmowego.",
        position: [0.05, 0.0, 0.12],
      },
      {
        id: "stomach-pylorus",
        meshNodeName: "pylorus",
        labelPl: "Część odźwiernikowa i odźwiernik",
        labelLat: "Pars pylorica et pylorus",
        topographyAndStructure:
          "Zwężony odcinek dystalny z grubym pierścieniem mięśni gładkich (zwieracz odźwiernika) przechodzący w opuszkę dwunastnicy na wysokości kręgu L1.",
        vascularizationAndInnervation:
          "Tętnica żołądkowa prawa i żołądkowo-dwunastnicza; bogata sieć komórek G produkujących gastrynę.",
        physiologyAndFunction:
          "Reguluje porcjowane opróżnianie miazgi pokarmowej (chymusu) do dwunastnicy; komórki G stymulują komórki okładzinowe do wydzielania HCl.",
        clinicalNotes:
          "Przerostowe zwężenie odźwiernika u niemowląt objawia się chlustającymi wymiotami niezawierającymi żółci.",
        position: [-0.26, -0.22, 0.08],
      },
    ],
  },
  kidney: {
    id: "kidney",
    meshId: "kidney",
    namePl: "Nerka",
    nameLat: "Ren / Nephros",
    system: "Układ moczowy",
    summary:
      "Parzysty narząd zaotrzewnowy filtrujący osocze krwi w nefronach, regulujący objętość płynów, elektrolity, pH oraz ciśnienie tętnicze.",
    forms: ["nerka", "nerki", "nerce", "nerkę", "nerką", "nerek", "nerkowy", "ren", "nephros"],
    pins: [
      {
        id: "renal-cortex",
        meshNodeName: "kidney",
        labelPl: "Kora nerki (kłębuszki nerkowe)",
        labelLat: "Cortex renalis",
        topographyAndStructure:
          "Zewnętrzna, ziarnista warstwa miąższu pod torebką włóknistą nerki; wnika między piramidy jako słupy nerkowe (Bertina). Zawiera ciałka nerkowe (Malpighiego) oraz kanaliki kręte I i II rzędu.",
        vascularizationAndInnervation:
          "Otrzymuje ponad 85% nerkowego przepływu krwi z tętnicy nerkowej (gałąź aorty brzusznej); bogata sieć naczyń włosowatych kłębuszka i okołocewkowych.",
        physiologyAndFunction:
          "Miejsce ultrafiltracji osocza (GFR ≈ 125 ml/min = 180 l/dobę), reabsorpcji glukozy i aminokwasów oraz produkcji erytropoetyny (EPO) i reniny (aparat przykłębuszkowy).",
        clinicalNotes:
          "Spadek perfuzji nerkowej aktywuje układ RAA (renina–angiotensyna–aldosteron), a niewydolność kory prowadzi do niedokrwistości normocytarnej z niedoboru EPO.",
        position: [0.22, 0.16, 0.06],
      },
      {
        id: "renal-medulla",
        meshNodeName: "kidney",
        labelPl: "Rdzeń nerki — piramidy nerkowe",
        labelLat: "Medulla renalis — pyramides renales",
        topographyAndStructure:
          "Tworzy 8–18 stożkowatych piramid zwróconych brodawkami nerkowymi do kielichów mniejszych. Zawiera pętle Henlego i cewki zbiorcze.",
        vascularizationAndInnervation:
          "Naczynia proste (vasa recta) utrzymujące hiperosmolarny gradient śródmiąższowy rdzenia.",
        physiologyAndFunction:
          "Wytwarza przeciwprądowy mnożnik zagęszczania moczu — umożliwia oszczędzanie wody pod kontrolą wazopresyny (ADH) wbudowującej akwaporyny-2.",
        clinicalNotes:
          "Martwica brodawek nerkowych występuje w cukrzycy, nefropatii analgetycznej (NLPZ) oraz niedokrwistości sierpowatokrwinkowej.",
        position: [0.06, 0.0, 0.04],
      },
      {
        id: "renal-pelvis",
        meshNodeName: "renal pelvis",
        labelPl: "Miedniczka i wnęka nerki",
        labelLat: "Pelvis renalis et hilum renale",
        topographyAndStructure:
          "We wnęce nerki od przodu ku tyłowi leżą kolejno: żyła nerkowa, tętnica nerkowa i miedniczka nerkowa (V–A–P), przechodząca w moczowód.",
        vascularizationAndInnervation:
          "Włókna trzewne ze splotu trzewnego/nerkowego (Th10–L1 — rzutowanie bólu kolki nerkowej ku pachwinie).",
        physiologyAndFunction:
          "Zbiera mocz ostateczny spływający z kielichów większych i skurczami perystaltycznymi tłoczy go do moczowodu.",
        clinicalNotes:
          "Złóg uwięźnięty w połączeniu miedniczkowo-moczowodowym wywołuje wodonercze i silny ból o charakterze kolki nerkowej.",
        position: [-0.22, -0.06, 0.0],
      },
    ],
  },
  spleen: {
    id: "spleen",
    meshId: "spleen",
    namePl: "Śledziona",
    nameLat: "Splen / Lien",
    system: "Układ limfatyczny",
    summary:
      "Największy narząd limfatyczny w lewym podżebrzu usuwający zużyte krwinki czerwone i inicjujący odpowiedź immunologiczną na antygeny z krwi.",
    forms: ["śledziona", "śledziony", "śledzionie", "śledzionę", "śledzioną", "lien", "splen"],
    pins: [
      {
        id: "spleen-parenchyma",
        meshNodeName: "spleen",
        labelPl: "Miazga biała i czerwona śledziony",
        labelLat: "Pulpa alba et rubra splenica",
        topographyAndStructure:
          "Narząd wewnątrzotrzewnowy o wymiarach ok. 12×7×4 cm na wysokości żeber IX–XI po stronie lewej, otoczony torebką łącznotkankową.",
        vascularizationAndInnervation:
          "Tętnica śledzionowa (największa gałąź pnia trzewnego) o krętym przebiegu na górnym brzegu trzustki; odpływ żyłą śledzionową do układu żyły wrotnej.",
        physiologyAndFunction:
          "Miazga czerwona filtruje krew z zużytych erytrocytów (hemoliza fizjologiczna) i magazynuje ok. 30% płytek krwi; miazga biała (ciałka Malpighiego) wytwarza przeciwciała przeciw bakteriom otoczkowym.",
        clinicalNotes:
          "Uraz tępy lewego podżebrza (złamanie żeber IX–XI) grozi dwuczasowym pęknięciem śledziony; stan po splenektomii wymaga szczepień przeciw Streptococcus pneumoniae, Haemophilus i Neisseria.",
        position: [0.1, 0.1, 0.08],
      },
    ],
  },
  pancreas: {
    id: "pancreas",
    meshId: "pancreas",
    namePl: "Trzustka",
    nameLat: "Pancreas",
    system: "Układ pokarmowy / dokrewny",
    summary:
      "Gruczoł zewnątrz- i wewnątrzwydzielniczy produkujący enzymy trawienne soku trzustkowego oraz hormony regulujące glikemię (insulinę i glukagon).",
    forms: ["trzustka", "trzustki", "trzustce", "trzustkę", "trzustką", "pancreas"],
    pins: [
      {
        id: "pancreas-head",
        meshNodeName: "pancreas",
        labelPl: "Głowa trzustki (pętla dwunastnicy)",
        labelLat: "Caput pancreatis",
        topographyAndStructure:
          "Spoczywa w podkowiastym zagięciu dwunastnicy na wysokości L1–L2, leżąc przed żyłą główną dolną; wyrostek haczykowaty krzyżują naczynia krezkowe górne.",
        vascularizationAndInnervation:
          "Łuki tętnicze trzustkowo-dwunastnicze górny i dolny (z pnia trzewnego i t. krezkowej górnej).",
        physiologyAndFunction:
          "Pęcherzyki zewnątrzwydzielnicze uwalniają trypsynogen, lipazę, amylazę i wodorowęglany (HCO₃⁻) przez przewód Wirsunga na brodawce większej dwunastnicy (Vatera).",
        clinicalNotes:
          "Guz głowy trzustki często uciska przewód żółciowy wspólny, wywołując bezbólową żółtaczkę mechaniczną z powiększonym pęcherzykiem (objaw Courvoisiera).",
        position: [-0.26, -0.1, 0.08],
      },
      {
        id: "pancreas-tail",
        meshNodeName: "pancreas",
        labelPl: "Trzon i ogon trzustki (wyspy Langerhansa)",
        labelLat: "Corpus et cauda pancreatis",
        topographyAndStructure:
          "Trzon leży wtórnie zaotrzewnowo krzyżując kręgosłup i aortę, natomiast koniec ogona wchodzi wewnątrzotrzewnowo w więzadło śledzionowo-nerkowe aż do wnęki śledziony.",
        vascularizationAndInnervation:
          "Gałęzie trzustkowe od tętnicy śledzionowej.",
        physiologyAndFunction:
          "Ogon zawiera największe zagęszczenie wysp trzustkowych Langerhansa: komórki β wydzielają insulinę (obniża glikemię), α — glukagon (podnosi glikemię), δ — somatostatynę.",
        clinicalNotes:
          "Uszkodzenie lub zniszczenie autoimmunologiczne komórek β prowadzi do cukrzycy typu 1 i bezwzględnego niedoboru insuliny.",
        position: [0.3, 0.14, -0.05],
      },
    ],
  },
  trachea: {
    id: "trachea",
    meshId: "trachea",
    namePl: "Tchawica",
    nameLat: "Trachea",
    system: "Układ oddechowy",
    summary:
      "Chrzęstno-błoniasty przewód oddechowy łączący krtań (C6) z rozwidleniem na oskrzela główne (Th4/Th5).",
    forms: ["tchawica", "tchawicy", "tchawicę", "tchawicą", "trachea"],
    pins: [
      {
        id: "tracheal-rings",
        meshNodeName: "trachea",
        labelPl: "Chrząstki tchawicze i błona tylna",
        labelLat: "Cartilagines tracheales et paries membranaceus",
        topographyAndStructure:
          "16–20 podkowiastych chrząstek szklistych otwartych ku tyłowi, zamkniętych ścianą błoniastą z mięśniem tchawiczym przylegającym do przełyku.",
        vascularizationAndInnervation:
          "Tętnice tarczowe dolne i gałęzie oskrzelowe; nabłonek wielorzędowy urzęsiony (aparat śluzowo-rzęskowy).",
        physiologyAndFunction:
          "Utrzymuje stałą drożność dróg oddechowych przy zmianach ciśnienia w klatce piersiowej, ogrzewa, nawilża i oczyszcza powietrze wdechowe.",
        clinicalNotes:
          "Tracheostomię wykonuje się standardowo na wysokości 2.–4. chrząstki tchawiczej poniżej cieśni tarczycy.",
        position: [0.0, 0.18, 0.1],
      },
      {
        id: "tracheal-carina",
        meshNodeName: "trachea",
        labelPl: "Rozdwojenie tchawicy (ostroga)",
        labelLat: "Bifurcatio tracheae (Carina tracheae)",
        topographyAndStructure:
          "Na wysokości kąta mostka (Th4/Th5); oskrzele główne prawe jest szersze, krótsze i biegnie bardziej pionowo niż lewe.",
        vascularizationAndInnervation:
          "Ostroga tchawicy zawiera najbardziej wrażliwe receptory kaszlowe unerwione przez n. błędny.",
        physiologyAndFunction:
          "Rozdziela strumień powietrza do prawego i lewego oskrzela głównego; podrażnienie wyzwala gwałtowny odruch kaszlowy.",
        clinicalNotes:
          "Ciała obce aspirowane do dróg oddechowych znacznie częściej wpadają do prawego oskrzela głównego z powodu jego bardziej pionowego przebiegu.",
        position: [0.0, -0.32, 0.04],
      },
    ],
  },
  diaphragm: {
    id: "diaphragm",
    meshId: "diaphragm",
    namePl: "Przepona",
    nameLat: "Diaphragma",
    system: "Układ mięśniowy / oddechowy",
    summary:
      "Główny mięsień wdechowy o budowie kopulastej oddzielający jamę klatki piersiowej od jamy brzusznej.",
    forms: ["przepona", "przepony", "przeponie", "przeponę", "przeponą", "diaphragma"],
    pins: [
      {
        id: "central-tendon",
        meshNodeName: "diaphragm",
        labelPl: "Środek ścięgnisty i otwór żyły głównej",
        labelLat: "Centrum tendineum et foramen venae cavae",
        topographyAndStructure:
          "Trójlistna płyta ścięgnista w szczycie kopuły przepony; z prawej strony na wysokości Th8 przechodzi przez nią żyła główna dolna (z prawym n. przeponowym).",
        vascularizationAndInnervation:
          "Wyłączne unerwienie ruchowe przez parzyste nerwy przeponowe (C3–C5: 'C3, 4, 5 keep the diaphragm alive').",
        physiologyAndFunction:
          "Podczas skurczu spłaszcza kopułę, obniżając ciśnienie w klatce piersiowej (wdech) i podnosząc je w jamie brzusznej (tłocznia brzuszna, ułatwienie powrotu żylnego).",
        clinicalNotes:
          "Podrażnienie przepony powoduje ból rzutowany do prawego lub lewego barku (dermatomy C3–C5 — objaw Kehra przy pęknięciu śledziony).",
        position: [0.0, 0.16, 0.08],
      },
      {
        id: "aortic-esophageal-hiatus",
        meshNodeName: "diaphragm",
        labelPl: "Rozwór przełykowy (Th10) i aortowy (Th12)",
        labelLat: "Hiatus esophageus et hiatus aorticus",
        topographyAndStructure:
          "Rozwór przełykowy leży w odnodze prawej (Th10 — przełyk + pnie błędne); rozwór aortowy między odnogami na Th12 (aorta zstępująca + przewód piersiowy).",
        vascularizationAndInnervation:
          "Tętnice przeponowe górne i dolne od aorty.",
        physiologyAndFunction:
          "Skurcz mięśniowej pętli wokół rozworu przełykowego wspomaga dolny zwieracz przełyku w zapobieganiu refluksowi treści żołądkowej.",
        clinicalNotes:
          "Osłabienie więzadła przeponowo-przełykowego skutkuje przepukliną rozworu przełykowego (wślizgową lub okołoprzełykową).",
        position: [0.04, -0.1, -0.18],
      },
    ],
  },
  "urinary bladder": {
    id: "urinary bladder",
    meshId: "urinary bladder",
    namePl: "Pęcherz moczowy",
    nameLat: "Vesica urinaria",
    system: "Układ moczowy",
    summary:
      "Mięśniowy zbiornik podotrzewnowy w miednicy mniejszej gromadzący mocz i wydalający go w odruchu mikcji.",
    forms: ["pęcherz moczowy", "pęcherza moczowego", "pęcherzu", "pęcherzem", "vesica urinaria"],
    pins: [
      {
        id: "detrusor-trigone",
        meshNodeName: "urinary bladder",
        labelPl: "Mięsień wypieracz i trójkąt pęcherza",
        labelLat: "Musculus detrusor et trigonum vesicae",
        topographyAndStructure:
          "Ściana wyścielona nabłonkiem przejściowym (urotelium) i trójwarstwowym mięśniem wypieraczem; u podstawy gładki trójkąt pęcherza ograniczony ujściami obu moczowodów i cewki.",
        vascularizationAndInnervation:
          "Tętnice pęcherzowe górne i dolne (od t. biodrowej wewnętrznej); skurcz wypieracza: przywspółczulny (S2–S4); napełnianie: współczulny (Th11–L2).",
        physiologyAndFunction:
          "Fizjologiczna pojemność wynosi 300–500 ml; po przekroczeniu progu mechanoreceptory inicjują skurcz wypieracza i rozluźnienie zwieracza cewki moczowej.",
        clinicalNotes:
          "Przerost gruczołu krokowego u mężczyzn zamyka ujście cewki w obrębie trójkąta, powodując zaleganie moczu i beleczkowanie ściany pęcherza.",
        position: [0.0, 0.02, 0.1],
      },
    ],
  },
  skull: {
    id: "skull",
    meshId: "skull",
    namePl: "Czaszka",
    nameLat: "Cranium",
    system: "Układ szkieletowy",
    summary:
      "Zespół kości mózgoczaszki i trzewioczaszki chroniący mózgowie, narządy zmysłów oraz początkowe odcinki dróg oddechowych i pokarmowych.",
    forms: ["czaszka", "czaszki", "czaszce", "czaszkę", "czaszką", "cranium"],
    pins: [
      {
        id: "frontal-bone",
        meshNodeName: "frontal bone",
        labelPl: "Kość czołowa i zatoka czołowa",
        labelLat: "Os frontale",
        topographyAndStructure:
          "Tworzy przednią część sklepienia czaszki oraz stropy oczodołów; łączy się z kośćmi ciemieniowymi szwem wieńcowym (sutura coronalis). Zawiera parzyste zatoki przynosowe.",
        vascularizationAndInnervation:
          "Tętnica i nerw nadoczodołowy (V1 — pierwsza gałąź nerwu trójdzielnego).",
        physiologyAndFunction:
          "Osłania płaty czołowe mózgu, formuje górny brzeg oczodołu oraz rezonator głosowy w zatokach czołowych.",
        clinicalNotes:
          "Złamania kości podstawy w obrębie dołu przedniego dają charakterystyczne obustronne krwiaki okularowe i płynotok nosowy.",
        position: [0.0, 0.22, 0.34],
      },
      {
        id: "temporal-bone",
        meshNodeName: "temporal bone",
        labelPl: "Kość skroniowa (piramida i pterion)",
        labelLat: "Os temporale",
        topographyAndStructure:
          "Zawiera część skalistą (piramidę) z uchem środkowym i wewnętrznym, przewód słuchowy zewnętrzny oraz dół żuchwowy dla stawu skroniowo-żuchwowego.",
        vascularizationAndInnervation:
          "Przez kość biegnie tętnica szyjna wewnętrzna oraz nerwy czaszkowe VII (twarzowy) i VIII (przedsionkowo-ślimakowy).",
        physiologyAndFunction:
          "Chroni narząd słuchu i równowagi oraz przenosi siły żucia ze stawu skroniowo-żuchwowego.",
        clinicalNotes:
          "W okolicy pterionu (skrzyżowanie 4 kości skroniowej, czołowej, ciemieniowej i klinowej) przebiega tętnica oponowa środkowa — jej pęknięcie powoduje groźny krwiak nadtwardówkowy.",
        position: [0.34, -0.02, 0.02],
      },
      {
        id: "mandible",
        meshNodeName: "mandible",
        labelPl: "Żuchwa",
        labelLat: "Mandibula",
        topographyAndStructure:
          "Jedyna ruchoma kość czaszki łącząca się w parzystych stawach skroniowo-żuchwowych; wyrostek kłykciowy i dziobiasty (przyczep mięśnia skroniowego).",
        vascularizationAndInnervation:
          "Tętnica i nerw zębodołowy dolny (V3) w kanale żuchwy; mięśnie żucia unerwione przez gałąź ruchową nerwu żuchwowego (V3).",
        physiologyAndFunction:
          "Umożliwia rozdrabnianie pokarmu (żucie), artykulację mowy oraz stanowi zębodoły dla dolnego łuku zębowego.",
        clinicalNotes:
          "Ze względu na pierścieniowy kształt żuchwy uraz często wywołuje podwójne złamanie (np. trzon po stronie uderzenia + szyjka wyrostka kłykciowego po stronie przeciwnej).",
        position: [0.0, -0.32, 0.25],
      },
    ],
  },
  "vertebral column": {
    id: "vertebral column",
    meshId: "vertebral column",
    namePl: "Kręgosłup",
    nameLat: "Columna vertebralis",
    system: "Układ szkieletowy",
    summary:
      "Osiowa kolumna zbudowana z 33–34 kręgów i krążków międzykręgowych chroniąca rdzeń kręgowy i przenosząca ciężar ciała na miednicę.",
    forms: [
      "kręgosłup",
      "kręgosłupa",
      "kręgosłupowi",
      "kręgosłupem",
      "kręgosłupie",
      "columna vertebralis",
    ],
    pins: [
      {
        id: "cervical-spine",
        meshNodeName: "cervical",
        labelPl: "Odcinek szyjny (C1–C7)",
        labelLat: "Pars cervicalis",
        topographyAndStructure:
          "7 kręgów tworzących lordozę szyjną; wyróżniają się otworami w wyrostkach poprzecznych dla tętnic kręgowych oraz specjalną budową C1 (atlas) i C2 (axis).",
        vascularizationAndInnervation:
          "Tętnice kręgowe biegnące przez wyrostki poprzeczne C6–C1 zaopatrują pień mózgu i tyłomózgowie.",
        physiologyAndFunction:
          "Zapewnia najszerszy zakres ruchów głowy (przytakiwanie w stawie szczytowo-potylicznym, skręty w stawie szczytowo-obrotowym).",
        clinicalNotes:
          "Przepuklina jądra miażdżystego na poziomie C5/C6 lub C6/C7 uciska korzenie splotu ramiennego, dając ból promieniujący do kończyny górnej (rwa ramienna).",
        position: [0.0, 0.36, 0.0],
      },
      {
        id: "lumbar-spine",
        meshNodeName: "lumbar",
        labelPl: "Odcinek lędźwiowy (L1–L5)",
        labelLat: "Pars lumbalis",
        topographyAndStructure:
          "5 masywnych kręgów o nerkowatych trzonach tworzących lordozę lędźwiową; na wysokości L1/L2 u dorosłych kończy się rdzeń kręgowy (stożek rdzeniowy), niżej biegnie ogon koński.",
        vascularizationAndInnervation:
          "Tętnice lędźwiowe od aorty brzusznej; gałęzie oponowe Luschki unerwiają pierścień włóknisty dysku.",
        physiologyAndFunction:
          "Przenosi największe obciążenia statyczne i dynamiczne tułowia przy zachowaniu ruchomości zgięcia i wyprostu.",
        clinicalNotes:
          "Nakłucie lędźwiowe (punkcję) wykonuje się bezpiecznie poniżej stożka rdzeniowego w przestrzeni L3/L4 lub L4/L5 (linia Tuffiera między grzebieniami biodrowymi).",
        position: [0.0, -0.18, 0.0],
      },
    ],
  },
  femur: {
    id: "femur",
    meshId: "femur",
    namePl: "Kość udowa",
    nameLat: "Os femoris / Femur",
    system: "Układ szkieletowy",
    summary:
      "Najdłuższa i najmocniejsza kość długa człowieka przenosząca ciężar ciała między stawem biodrowym a kolanowym.",
    forms: ["kość udowa", "kości udowej", "kością udową", "udowa", "femur", "os femoris"],
    pins: [
      {
        id: "femoral-head-neck",
        meshNodeName: "femur",
        labelPl: "Głowa i szyjka kości udowej",
        labelLat: "Caput et collum femoris",
        topographyAndStructure:
          "Kąt szyjkowo-trzonowy wynosi prawidłowo ok. 125–130°; głowa pokryta chrząstką szklistą tworzy staw biodrowy z panewką miednicy.",
        vascularizationAndInnervation:
          "Krytyczne unaczynienie wsteczne przez tętnicę okalającą udo przyśrodkową (naczynia troczkowe wzdłuż szyjki) i minimalnie przez t. więzadła głowy.",
        physiologyAndFunction:
          "Przenosi pełne obciążenia tułowia na kończynę dolną w dużym zakresie ruchu wieloosiowego stawu kulistego panewkowego.",
        clinicalNotes:
          "Złamanie szyjki kości udowej u osób starszych często przerywa naczynia troczkowe, prowadząc do jałowej martwicy głowy kości udowej.",
        position: [-0.22, 0.36, 0.0],
      },
      {
        id: "femoral-condyles",
        meshNodeName: "femur",
        labelPl: "Kłykcie kości udowej (nasada dalsza)",
        labelLat: "Condyli medialis et lateralis femoris",
        topographyAndStructure:
          "Dwa szerokie kłykcie oddzielone z tyłu dołem międzykłykciowym (przyczep więzadeł krzyżowych ACL/PCL), a z przodu tworzące powierzchnię rzepkową.",
        vascularizationAndInnervation:
          "Sieć stawowa kolana (tętnice kolanowe od t. podkolanowej).",
        physiologyAndFunction:
          "Budują z kością piszczelową i rzepką staw kolanowy umożliwiający zginanie, prostowanie i minimalną rotację w zgięciu.",
        clinicalNotes:
          "Złamania nadkłykciowe w tylnym przemieszczeniu mogą uszkodzić tętnicę podkolanową i nerw piszczelowy biegnące w dole podkolanowym.",
        position: [0.05, -0.38, 0.04],
      },
    ],
  },
  eyeball: {
    id: "eyeball",
    meshId: "eyeball",
    namePl: "Gałka oczna",
    nameLat: "Bulbus oculi",
    system: "Narządy zmysłów",
    summary:
      "Narząd wzroku o trójwarstwowej ścianie zamieniający energię świetlną na impulsy nerwowe przekazywane nerwem wzrokowym (II).",
    forms: ["gałka oczna", "gałki ocznej", "oko", "oka", "oczodołu", "bulbus oculi"],
    pins: [
      {
        id: "cornea",
        meshNodeName: "cornea",
        labelPl: "Rogówka i komora przednia",
        labelLat: "Cornea et camera anterior",
        topographyAndStructure:
          "Przezroczysta, beznaczyniowa przednia 1/6 błony włóknistej oka (o największej mocy łamiącej ok. +43 D).",
        vascularizationAndInnervation:
          "Beznaczyniowa (odżywiana przez ciecz wodnistą i łzy); niezwykle gęsto unerwiona czuciowo przez nerw oczny (V1 — odruch rogówkowy).",
        physiologyAndFunction:
          "Główne okno optyczne ogniskujące promienie świetlne na siatkówce; w kącie przesączania odpływa ciecz wodnista utrzymująca ciśnienie wewnątrzgałkowe (10–21 mmHg).",
        clinicalNotes:
          "Utrudniony odpływ cieczy wodnistej zwiększa ciśnienie wewnątrzgałkowe i prowadzi do jaskry uszkadzającej nerw wzrokowy.",
        position: [0.0, 0.0, 0.36],
      },
      {
        id: "retina",
        meshNodeName: "retina",
        labelPl: "Siatkówka i tarcza nerwu wzrokowego",
        labelLat: "Retina et discus nervi optici",
        topographyAndStructure:
          "Błona wewnętrzna zawierająca fotoreceptory (czopki w plamce żółtej/dołku środkowym — widzenie barwne i ostre; pręciki na obwodzie — widzenie zmierzchowe).",
        vascularizationAndInnervation:
          "Tętnica środkowa siatkówki (gałąź t. ocznej) oraz warstwa naczyniówki; sygnały wychodzą nerwem wzrokowym (II).",
        physiologyAndFunction:
          "Przeprowadza fototransdukcję (izomeryzacja rodopsyny/jodopsyny) i wstępną obróbkę sygnału wzrokowego w komórkach dwubiegunowych i zwojowych.",
        clinicalNotes:
          "Wzrost ciśnienia śródczaszkowego powoduje obrzęk tarczy nerwu wzrokowego (tarczę zastoinową) widoczną w oftalmoskopii.",
        position: [0.0, 0.0, -0.32],
      },
    ],
  },
  "small intestine": {
    id: "small intestine",
    meshId: "small intestine",
    namePl: "Jelito cienkie",
    nameLat: "Intestinum tenue",
    system: "Układ pokarmowy",
    summary:
      "Najdłuższy odcinek przewodu pokarmowego (ok. 5–6 m) obejmujący dwunastnicę, jelito czcze i kręte, będący głównym miejscem trawienia i wchłaniania.",
    forms: [
      "jelito cienkie",
      "jelita cienkiego",
      "dwunastnica",
      "dwunastnicy",
      "jelito czcze",
      "jelito kręte",
      "intestinum tenue",
    ],
    pins: [
      {
        id: "duodenum-papilla",
        meshNodeName: "duodenum",
        labelPl: "Dwunastnica (brodawka większa Vatera)",
        labelLat: "Duodenum (papilla duodeni major)",
        topographyAndStructure:
          "Początkowy odcinek w kształcie litery C (ok. 25 cm) otaczający głowę trzustki; do części zstępującej uchodzi przewód żółciowy wspólny i główny przewód trzustkowy.",
        vascularizationAndInnervation:
          "Unaczyniona z pnia trzewnego i tętnicy krezkowej górnej (styk dwóch pni tętniczych).",
        physiologyAndFunction:
          "Neutralizuje kwaśny chymus wodorowęglanami (gruczoły Brunnera), uwalnia sekretynę i CCK oraz miesza treść z żółcią i enzymami trzustkowymi.",
        clinicalNotes:
          "Najczęstsza lokalizacja choroby wrzodowej dwunastnicy (opuszka) — wrzód ściany tylnej może nadżerać tętnicę żołądkowo-dwunastniczą.",
        position: [0.05, 0.25, 0.05],
      },
      {
        id: "jejunum-ileum",
        meshNodeName: "small intestine",
        labelPl: "Jelito czcze i kręte (kosmki i kępki Peyera)",
        labelLat: "Jejunum et ileum",
        topographyAndStructure:
          "Wewnątrzotrzewnowe pętle zawieszone na krezce; błona śluzowa posiada fałdy okrężne Kerckringa, kosmki jelitowe oraz mikrokosmki zwiększające powierzchnię chłonną do ~30 m².",
        vascularizationAndInnervation:
          "Tętnice jelita czczego i krętego od tętnicy krezkowej górnej; chłonka z wchłoniętymi chylomikronami spływa naczyniami mleczowymi do zbiornika mleczu.",
        physiologyAndFunction:
          "Wchłanianie monosacharydów, aminokwasów, kwasów tłuszczowych, żelaza (dwunastnica/czcze) oraz witaminy B₁₂ i kwasów żółciowych (końcowy odcinek jelita krętego).",
        clinicalNotes:
          "Zanik kosmków w celiakii powoduje zespół złego wchłaniania; końcowe jelito kręte (kępki Peyera) jest predylekcyjnym miejscem choroby Leśniowskiego-Crohna.",
        position: [0.0, -0.1, 0.14],
      },
    ],
  },
};

function mergeGeneratedEntities(): Record<string, AnatomicalEntity> {
  const merged: Record<string, AnatomicalEntity> = { ...ANATOMICAL_ENTITIES };
  const list = Array.isArray(generatedEntities)
    ? (generatedEntities as unknown as Partial<AnatomicalEntity>[])
    : [];
  for (const item of list) {
    if (!item?.id || !item?.meshId) continue;
    const key = item.id.toLowerCase();
    const existing = merged[key];
    if (existing) {
      const mergedPins = new Map(existing.pins.map((p) => [p.id, p]));
      if (Array.isArray(item.pins)) {
        for (const gp of item.pins) {
          if (gp?.id && !mergedPins.has(gp.id)) {
            mergedPins.set(gp.id, gp);
          }
        }
      }
      merged[key] = {
        ...existing,
        ...item,
        forms: Array.from(new Set([...(existing.forms ?? []), ...(item.forms ?? [])])),
        pins: Array.from(mergedPins.values()),
      };
    } else if (item.namePl && item.nameLat && item.summary && item.system) {
      merged[key] = {
        id: key,
        meshId: item.meshId,
        namePl: item.namePl,
        nameLat: item.nameLat,
        system: item.system,
        summary: item.summary,
        cameraFocus: item.cameraFocus,
        forms: Array.isArray(item.forms) ? item.forms : [item.namePl.toLowerCase()],
        pins: Array.isArray(item.pins) ? item.pins : [],
      };
    }
  }
  return merged;
}

export const ALL_ANATOMICAL_ENTITIES = mergeGeneratedEntities();

export function getAnatomicalEntity(idOrMeshName: string | null | undefined): AnatomicalEntity | undefined {
  if (!idOrMeshName) return undefined;
  const cleaned = idOrMeshName.trim().toLowerCase().replace(/^(left|right)\s+/, "");
  if (ALL_ANATOMICAL_ENTITIES[cleaned]) return ALL_ANATOMICAL_ENTITIES[cleaned];
  for (const entity of Object.values(ALL_ANATOMICAL_ENTITIES)) {
    if (
      entity.meshId.toLowerCase() === cleaned ||
      entity.id.toLowerCase() === cleaned ||
      cleaned.includes(entity.meshId.toLowerCase()) ||
      entity.namePl.toLowerCase() === cleaned
    ) {
      return entity;
    }
    if (entity.pins.some((p) => p.meshNodeName && cleaned.includes(p.meshNodeName.toLowerCase()))) {
      return entity;
    }
  }
  return undefined;
}

export function findAnatomicalEntityByTerm(term: string | null | undefined): AnatomicalEntity | undefined {
  if (!term) return undefined;
  const lower = term.trim().toLowerCase();
  const byMesh = getAnatomicalEntity(lower);
  if (byMesh) return byMesh;
  return Object.values(ALL_ANATOMICAL_ENTITIES).find((entity) =>
    entity.forms.some((f) => f.toLowerCase() === lower),
  );
}
