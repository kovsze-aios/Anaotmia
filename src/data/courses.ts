export type SportNotesCourseCategory =
  | "anatomia-biomechanika"
  | "fizjologia-treningu"
  | "biochemia-sportu"
  | "matura-cke";

export interface SportNotesLesson {
  id: string;
  title: string;
  duration: string;
  isFreePreview: boolean;
  relatedTheoryPath: string;
  summary: string;
  contentHtml: string;
  keyTakeaways: string[];
  figureId?: string;
}

export interface SportNotesModule {
  id: string;
  title: string;
  lessons: SportNotesLesson[];
}

export interface SportNotesCourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: SportNotesCourseCategory;
  categoryLabel: string;
  level: "Podstawowy" | "Średniozaawansowany" | "Zaawansowany";
  duration: string;
  modules: SportNotesModule[];
}

export const COURSE_CATEGORIES: Array<{
  id: "all" | SportNotesCourseCategory;
  label: string;
}> = [
  { id: "all", label: "Wszystkie kursy" },
  { id: "anatomia-biomechanika", label: "Anatomia & Biomechanika" },
  { id: "fizjologia-treningu", label: "Fizjologia Treningu" },
  { id: "biochemia-sportu", label: "Biochemia Sportu" },
  { id: "matura-cke", label: "Matura CKE" },
];

export const SPORTNOTES_COURSES: SportNotesCourse[] = [
  {
    id: "course-anatomia-biomechanika",
    slug: "anatomia-funkcjonalna-i-biomechanika-ruchu",
    title: "Anatomia Funkcjonalna i Biomechanika Ruchu w Sporcie",
    subtitle:
      "Kompendium dla trenerów, fizjoterapeutów i pasjonatów treningu siłowego: dźwignie stawowe, łańcuchy mięśniowo-powięziowe oraz profilaktyka przeciążeń.",
    category: "anatomia-biomechanika",
    categoryLabel: "Anatomia & Biomechanika",
    level: "Średniozaawansowany",
    duration: "8 godz. • 3 moduły",
    modules: [
      {
        id: "mod-anat-1",
        title: "Moduł 1: Osteon, adaptacja tkanki kostnej i architektura mięśni",
        lessons: [
          {
            id: "lec-anat-1-1",
            title: "Remodeling kości (prawo Wolffa) a obciążenia mechaniczne",
            duration: "24 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/anatomia/tom1-czesc-8-budowa-wewnetrzna-kosci-i-szpik-kostny",
            summary:
              "Jak osteoklasty i osteoblasty przebudowują osteony oraz beleczki istoty gąbczastej pod wpływem treningu oporowego i skocznościowego.",
            contentHtml:
              "<p>Tkanka kostna jest strukturą dynamiczną reagującą na odkształcenia mechaniczne zgodnie z <strong>prawem Wolffa</strong>. Ugięcie kości podczas obciążenia osiowego generuje mikropotencjały piezoelektryczne wzdłuż beleczek istoty gąbczastej i koncentrycznych blaszek <strong>osteonu (systemu Haversa)</strong>.</p><p>W odpowiedzi osteoblasty odkładają nową macierz osteoidową w osi najwyższych naprężeń, zwiększając gęstość mineralną (BMD), natomiast długotrwałe odciążenie przyspiesza resorpcję przez osteoklasty.</p>",
            keyTakeaways: [
              "Kanały Haversa biegną równolegle do osi długiej trzonu kości, zaś kanały Volkmanna łączą je poprzecznie z okostną.",
              "Bodźce dynamiczne o wysokim tempie przyrostu siły (skoki, sprint, ciężkie przysiady) stymulują osteogenezę skuteczniej niż długotrwały marsz.",
              "Zbyt gwałtowny skok objętości biegowej przewyższa tempo remodelingu i prowadzi do złamań zmęczeniowych.",
            ],
            figureId: "fig-anat-osteon-szpik",
          },
          {
            id: "lec-anat-1-2",
            title: "Dźwignie I, II i III rodzaju w stawie kolanowym i biodrowym",
            duration: "28 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/fizyka/fiz-dynamika-i-biomedyka-plynow",
            summary:
              "Obliczanie momentu obrotowego (τ = F × r⊥), rola kąta przyłożenia ścięgna rzepki oraz dobór ćwiczeń do profilu oporowego.",
            contentHtml:
              "<p>W układzie ruchu dominują <strong>dźwignie III rodzaju</strong> (ramię siły mięśnia jest znacznie krótsze od ramienia oporu zewnętrznego), co wymusza generowanie wielokrotnie większego napięcia mięśniowego względem masy sztangi, lecz pozwala na dużą prędkość obwodową kończyny.</p>",
            keyTakeaways: [
              "Rzepka zwiększa ramię działania mięśnia czworogłowego uda o ok. 20–30%, chroniąc staw rzepkowo-udowy.",
              "Maksymalny moment zewnętrzny w przysiadzie pojawia się przy największej długości poziomej odcinka udo–środek ciężkości.",
            ],
          },
        ],
      },
      {
        id: "mod-anat-2",
        title: "Moduł 2: Obręcz barkowa, splot ramienny i stabilizacja łopatki",
        lessons: [
          {
            id: "lec-anat-2-1",
            title: "Splot ramienny i rytm łopatkowo-ramienny w sportach rzutowych",
            duration: "32 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/anatomia/tom2-czesc-53-nerwy-konczyny-gornej-splot-ramienny",
            summary:
              "Przebieg gałęzi splotu ramiennego (C5–Th1) oraz znaczenie mięśnia zębatego przedniego i stożka rotatorów w wyciskaniu nad głowę.",
            contentHtml:
              "<p>Prawidłowe uniesienie ramienia ponad poziom barków wymaga zachowania <strong>rytmu łopatkowo-ramiennego (ok. 2:1)</strong>. Gdy mięsień zębaty przedni (unerwiony przez nerw piersiowy długi) słabnie, dochodzi do dyskinezy łopatki i konfliktu podbarkowego ścięgna mięśnia nadgrzebieniowego.</p><p>Znajomość topografii <strong>splotu ramiennego</strong> ułatwia wczesne odróżnienie przeciążenia stawowego od neuropatii uciskowych (np. w rowku nerwu łokciowego lub zespole przestrzeni czworobocznej).</p>",
            keyTakeaways: [
              "Pęczek tylny splotu ramiennego oddaje nerw pachowy (m. naramienny) oraz nerw promieniowy (prostowniki ramienia i przedramienia).",
              "Rotacja górna łopatki współpracuje ściśle z dolną częścią mięśnia czworobocznego i m. zębatym przednim.",
            ],
            figureId: "fig-anat-splot-ramienny",
          },
          {
            id: "lec-anat-2-2",
            title: "Stabilizacja centralna (IAP) oraz biomechanika kręgosłupa lędźwiowego",
            duration: "26 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/anatomia/tom1-czesc-2-ogolna-budowa-ciala-czesci-proporcje-symetria-i-metameria",
            summary:
              "Współpraca przepony, mięśnia poprzecznego brzucha i dna miednicy w kontroli ciśnienia śródbrzusznego podczas martwego ciągu.",
            contentHtml:
              "<p>Zwiększenie <strong>ciśnienia śródbrzusznego (IAP)</strong> w manewrze bracingu zamienia jamę brzuszną w sztywny cylinder wspierający kręgosłup lędźwiowy przed siłami ścinającymi przy dużych obciążeniach.</p>",
            keyTakeaways: [
              "Przepona pełni podwójną rolę: mięśnia wdechowego oraz górnego stabilizatora tłoczni brzusznej.",
              "Neutralna krzywizna lędźwiowa równomiernie rozkłada nacisk na pierścień włóknisty krążka międzykręgowego.",
            ],
          },
        ],
      },
      {
        id: "mod-anat-3",
        title: "Moduł 3: Układ sercowo-naczyniowy i prewencja urazów w treningu",
        lessons: [
          {
            id: "lec-anat-3-1",
            title: "Adaptacja serca sportowca i aparat zastawkowy pod obciążeniem",
            duration: "25 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/anatomia/tom3-czesc-16-zastawki-serca",
            summary:
              "Przerost ekscentryczny u biegaczy vs koncentryczny u ciężarowców oraz hemodynamika napełniania komór przy wysokim tętne.",
            contentHtml:
              "<p>Regularny trening wytrzymałościowy zwiększa objętość wyrzutową (SV) i pojemność końcoworozkurczową lewej komory, zapewniając spoczynkową bradykardię przy zachowaniu pełnej sprawności aparatu zastawkowego.</p>",
            keyTakeaways: [
              "W spoczynku serce sportowca osiąga ten sam rzut minutowy (Q = HR × SV) przy znacznie niższym tętnie spoczynkowym.",
              "Płatki zastawek przedsionkowo-komorowych stabilizowane są przez struny ścięgniste i mięśnie brodawkowate.",
            ],
            figureId: "fig-anat-serce-zastawki",
          },
          {
            id: "lec-anat-3-2",
            title: "Zasady programowania obciążenia ścięgien i tkanek miękkich",
            duration: "22 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/fizjologia/dzial1-czesc-1-wprowadzenie-do-anatomii-i-fizjologii-czlowieka",
            summary:
              "Synergia treningu izometrycznego i powolnego ekscentrycznego (HSR) w odbudowie kolagenu typu I w ścięgnie Achillesa i rzepki.",
            contentHtml:
              "<p>Synteza kolagenu w tenocytach osiąga plateau po ok. 10 minutach ciągłego obciążenia mechanicznego, dlatego krótkie, rozłożone w czasie sesje bodźcują ścięgno bez wywoływania przeciążenia macierzy.</p>",
            keyTakeaways: [
              "Obciążenia izometryczne przez 30–45 s szybko redukują dolegliwości bólowe w tendinopatiach.",
              "Pełny obrót kolagenu w ścięgnie trwa tygodnie i zawsze wolniej adaptuje się do objętości niż brzusiec mięśniowy.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "course-fizjologia-treningu",
    slug: "fizjologia-wysilku-i-programowanie-treningowe",
    title: "Fizjologia Wysiłku i Programowanie Treningowe",
    subtitle:
      "Fizjologia pracy mięśniowej oparta na twardych parametrach: VO₂max, strefy progu mleczanowego LT1/LT2, EKG wysiłkowe oraz krzywa dysocjacji oksyhemoglobiny.",
    category: "fizjologia-treningu",
    categoryLabel: "Fizjologia Treningu",
    level: "Zaawansowany",
    duration: "9 godz. • 3 moduły",
    modules: [
      {
        id: "mod-fiz-1",
        title: "Moduł 1: Pobudliwość nerwowo-mięśniowa i teoria ślizgowa skurczu",
        lessons: [
          {
            id: "lec-fiz-1-1",
            title: "Potencjał czynnościowy motoneuronu i rekrutacja jednostek (Zasada Hennemana)",
            duration: "27 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/neurobiologia/oer-neuro-potencjal-spoczynkowy-i-czynnosciowy-neuronu",
            summary:
              "Jak szybkość narastania potencjału iglicowego, kanały NaV/KV i częstotliwość impulsacji sterują rekrutacją włókien typu I, IIa oraz IIx.",
            contentHtml:
              "<p>Układ nerwowy precyzyjnie stopniuje siłę skurczu mięśnia dzięki dwóm mechanizmom: <strong>zasadzie wielkości Hennemana</strong> (rekrutacji od najmniejszych jednostek wolnokurczliwych typu I do szybkich jednostek glikolitycznych typu IIx w miarę wzrostu zapotrzebowania na siłę) oraz <strong>kodowaniu częstotliwościowemu (rate coding)</strong>.</p><p>Im szybciej akson motoneuronu α przewodzi serię potencjałów czynnościowych, tym wyższe utrzymuje się stężenie Ca<sup>2+</sup> w sarkoplazmie, sumując pojedyncze skurcze w tężec zupełny.</p>",
            keyTakeaways: [
              "Trening ekscentryczny i eksplozywny selektywnie podnosi synchronizację jednostek wysokoprogowych bez dużego zmęczenia obwodowego.",
              "W fazie refrakcji bezwzględnej kanały sodowe NaV pozostają zinaktywowane, limitując maksymalną częstotliwość wyładowań.",
            ],
            figureId: "fig-fizjo-potencjal-czynnosciowy",
          },
          {
            id: "lec-fiz-1-2",
            title: "Cykl mostków poprzecznych w sarkomerze i mechanizm zmęczenia obwodowego",
            duration: "24 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/fizjologia/dzial1-czesc-2-organizm-jako-zintegrowany-system-ewolucyjne-podstawy-fizjologii",
            summary:
              "Wpływ jonów fosforanowych Pi, spadku pH i zaburzeń uwalniania Ca²⁺ z retikulum sarkoplazmatycznego na spadek mocy maksymalnej.",
            contentHtml:
              "<p>Podczas intensywnego wysiłku beztlenowego gwałtowna hydroliza fosfokreatyny i ATP podnosi stężenie nieorganicznego fosforanu (<strong>P<sub>i</sub></strong>), który hamuje odrywanie mostków miozyny od aktyny oraz wytrąca Ca<sup>2+</sup> w siateczce sarkoplazmatycznej, bezpośrednio tłumiąc siłę skurczu.</p>",
            keyTakeaways: [
              "Każdy cykl odłączenia główki miozyny wymaga nowej cząsteczki ATP — jej brak zmniejsza relaksację włókna.",
              "Nie sam jon mleczanowy, lecz współistniejąca akumulacja H⁺ i Pi ogranicza kurczliwość sarkomeru.",
            ],
            figureId: "fig-fizjo-sarkomer-skurcz",
          },
        ],
      },
      {
        id: "mod-fiz-2",
        title: "Moduł 2: Krążenie tlenu, Efekt Bohra i strefy VO₂max",
        lessons: [
          {
            id: "lec-fiz-2-1",
            title: "Efekt Bohra i transport tlenu przy progu mleczanowym LT2",
            duration: "30 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/biologia-matura-2023/bm23-bio3-czesc-66-czynniki-wplywajace-na-wiazanie-i-oddawanie-tlenu-przez-hemoglobine",
            summary:
              "Jak wzrost temperatury mięśni, pCO₂ i kwasica mleczanowa przesuwają krzywą dysocjacji oksyhemoglobiny w prawo, ułatwiając oddawanie O₂.",
            contentHtml:
              "<p>W trakcie biegu tempowego temperatura pracujących mięśni wzrasta powyżej 39 &deg;C, rośnie ciśnienie parcjalne CO<sub>2</sub> i spada pH. Zgodnie z <strong>efektem Bohra</strong> krzywa wysycenia hemoglobiny przesuwa się w prawo, uwalniając więcej tlenu w kapilarach bez ograniczania wysycenia krwi w płucach (plateau przy pO<sub>2</sub> &approx; 100 mmHg).</p>",
            keyTakeaways: [
              "VO₂max limituje głównie rzut serca i dostarczanie O₂ (centralnie) oraz gęstość kapilar i mitochondriów (obwodowo).",
              "Próg LT1 wyznacza pierwsze przełamanie wentylacyjne i dominację utleniania lipidów w strefie 2.",
            ],
            figureId: "fig-fizjo-wymiana-gazowa-bohr",
          },
          {
            id: "lec-fiz-2-2",
            title: "Cykl serca, EKG i zmienność rytmu zatokowego (HRV) w monitoringu zmęczenia",
            duration: "25 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/fizjologia/dzial4-czesc-16-analiza-ekg-i-tony-serca",
            summary:
              "Analiza wskaźników autonomicznych (RMSSD) i adaptacji przywspółczulnej w ocenie gotowości do ciężkich jednostek treningowych.",
            contentHtml:
              "<p>Poranny pomiar <strong>HRV (RMSSD)</strong> odzwierciedla napięcie nerwu błędnego działającego hamująco na węzeł zatokowo-przedsionkowy (SA). Przewlekły spadek HRV połączony z podwyższonym tętnem spoczynkowym wskazuje na narastające przeciążenie sympatyczne i potrzebę regeneracji.</p>",
            keyTakeaways: [
              "Skrócenie fazy rozkurczu przy bardzo wysokim HR (>190/min) ogranicza czas napełniania tętnic wieńcowych i komór.",
              "Regularne sesje strefy 2 podnoszą objętość osocza już po 7–14 dniach treningu.",
            ],
            figureId: "fig-fizjo-cykl-serca-ekg",
          },
        ],
      },
      {
        id: "mod-fiz-3",
        title: "Moduł 3: Oś HPA, stres treningowy i periodyzacja",
        lessons: [
          {
            id: "lec-fiz-3-1",
            title: "Oś podwzgórze–przysadka–nadnercza (HPA) i superkompensacja",
            duration: "28 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/neurobiologia/oer-neuro-os-hpa-neuroendokrynologia-stresu-i-rytm-dobowy",
            summary:
              "Równowaga między wyrzutem kortyzolu (stresorem bodźca) a anaboliczną odbudową w trakcie snu głębokiego.",
            contentHtml:
              "<p>Każdy ciężki bodziec aktywuje oś <strong>CRH &rarr; ACTH &rarr; kortyzol</strong> w celu mobilizacji substratów energetycznych. Bez zaplanowanych dni roztrenowania (<em>deload</em>) i higieny snu przewlekła hiperkortyzolemia tłumi syntezę białek mięśniowych.</p>",
            keyTakeaways: [
              "Stosunek testosteronu do kortyzolu bywa markerem obciążenia kumulacyjnego w blokach objętościowych.",
              "Światło poranne i stała pora snu synchronizują jądro SCN oraz szczyt wyrzutu kortyzolu na poranek.",
            ],
            figureId: "fig-fizjo-os-hpa-stres",
          },
        ],
      },
    ],
  },
  {
    id: "course-biochemia-sportu",
    slug: "biochemia-sportu-i-suplementacja-evidence-based",
    title: "Biochemia Sportu i Suplementacja Evidence-Based",
    subtitle:
      "Metabolizm ATP-PCr, glikoliza mleczanowa (Corich), łańcuch oddechowy w mitochondriach oraz mechanizmy ergogeniczne kreatyny, kofeiny i beta-alaniny.",
    category: "biochemia-sportu",
    categoryLabel: "Biochemia Sportu",
    level: "Średniozaawansowany",
    duration: "7 godz. • 3 moduły",
    modules: [
      {
        id: "mod-biochem-1",
        title: "Moduł 1: Szlaki bioenergetyczne i biogeneza mitochondriów",
        lessons: [
          {
            id: "lec-biochem-1-1",
            title: "Łańcuch oddechowy, gradient H⁺ i syntaza ATP u sportowców wytrzymałościowych",
            duration: "26 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/biochemia/oer-biochem-lancuch-oddechowy-i-fosforylacja-oksydacyjna",
            summary:
              "Jak aktywacja kinazy AMPK oraz kofaktora PGC-1α w długim wysiłku zwiększa gęstość kompleksów I–IV i syntazy ATP.",
            contentHtml:
              "<p>Wzrost stosunku AMP/ATP podczas długotrwałego biegu lub jazdy na rowerze aktywuje kinazę <strong>AMPK</strong> oraz koaktywator transkrypcji <strong>PGC-1&alpha;</strong>. Efektem adaptacyjnym jest biogeneza nowych mitochondriów i zagęszczenie kompleksów I–IV łańcucha transportu elektronów w wewnętrznej błonie mitochondrialnej.</p><p>Większa pula syntazy ATP (F<sub>0</sub>F<sub>1</sub>) pozwala mięśniom utrzymywać tę samą produkcję energii przy wyższym udziale &beta;-oksydacji kwasów tłuszczowych i oszczędzaniu glikogenu wątrobowo-mięśniowego.</p>",
            keyTakeaways: [
              "Większa liczba mitochondriów przyspiesza utlenianie pirogronianu i obniża akumulację mleczanu przy stałej mocy.",
              "Teoria chemiosmotyczna Mitchella wyjaśnia, jak gradient protonowy H⁺ napędza wirnik syntazy ATP.",
            ],
            figureId: "fig-bio-lancuch-oddechowy",
          },
          {
            id: "lec-biochem-1-2",
            title: "Cykl Krebsa i cykl Corich — mleczan jako paliwo, nie odpad",
            duration: "24 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/biochemia/biochem-cykl-krebsa-i-glukoneogeneza",
            summary:
              "Rola transporterów MCT1/MCT4 w przerzucie mleczanu między włóknami IIx, kardiomiocytami a glukoneogenezą wątrobową.",
            contentHtml:
              "<p>Mleczan nie jest toksycznym produktem ubocznym — za pośrednictwem transporterów monokarboksylanowych (<strong>MCT4/MCT1</strong>) trafia do włókien tlenowych typu I, serca oraz wątroby (cykl Corich), gdzie wraca do pirogronianu i zasila cykl Krebsa lub glukoneogenezę.</p>",
            keyTakeaways: [
              "Aktywna regeneracja po interwałach przyspiesza utlenianie mleczanu w mięśniu sercowym i włóknach typu I.",
              "Cykl Krebsa dostarcza 3 NADH, 1 FADH₂ i 1 GTP na każdą resztę acetylo-CoA.",
            ],
            figureId: "fig-bio-cykl-krebsa",
          },
        ],
      },
      {
        id: "mod-biochem-2",
        title: "Moduł 2: Farmakologia ergogeniczna z grupy A (AIS / ISSN)",
        lessons: [
          {
            id: "lec-biochem-2-1",
            title: "Fosfokreatyna, kinaza kreatynowa oraz mechanizm działania kreatyny",
            duration: "21 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/farmakologia/oer-farm-adme-wchlanianie-dystrybucja-metabolizm-wydalanie",
            summary:
              "Buforowanie stężenia ATP w pierwszych 10 sekundach sprintu oraz długofalowy wpływ nawodnienia wewnątrzkomórkowego na objętość treningową.",
            contentHtml:
              "<p>Monohydrat kreatyny wysyca mięśniową pulę <strong>fosfokreatyny (PCr)</strong> o ok. 15–30%. W obecności kinazy kreatynowej PCr błyskawicznie refosforyluje ADP do ATP bez generowania jonów wodorowych H<sup>+</sup>, wydłużając moc szczytową w powtarzalnych sprintach oraz zwiększając tolerowaną objętość treningu siłowego.</p>",
            keyTakeaways: [
              "Stała dawka 3–5 g dziennie (0,03–0,05 g/kg m.c.) zapewnia pełne wysycenie w ok. 3–4 tygodnie bez fazy ładowania.",
              "Około 20–30% populacji wykazuje mniejszą odpowiedź przy wyjściowo wysokiej diecie mięsnej.",
            ],
          },
          {
            id: "lec-biochem-2-2",
            title: "Beta-alanina (karnozyna), azotany z buraka (NO) oraz kofeina (antagonizm A₂A)",
            duration: "29 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/farmakologia/oer-farm-farmakodynamika-agonisci-antagonisci-i-ec50",
            summary:
              "Jak karnozyna wewnątrzkomórkowo buforuje H⁺ w wysiłkach 1–4 min oraz dlaczego kofeina zmniejsza subiektywne odczucie wysiłku (RPE).",
            contentHtml:
              "<p>Kofeina jako kompetycyjny <strong>antagonista receptorów adenozynowych A<sub>1</sub>/A<sub>2A</sub></strong> w OUN opóźnia narastanie zmęczenia ośrodkowego i obniża RPE. Z kolei beta-alanina jest czynnikiem limitującym syntezę mięśniowej <strong>karnozyny</strong> — buforu pH kluczowego dla biegów na 400–1500 m i sportów walki.</p>",
            keyTakeaways: [
              "Efekt kofeiny zależy m.in. od wariantu genu CYP1A2 (szybki vs wolny metabolizm wątrobowy).",
              "Azotany dietetyczne NO₃⁻ obniżają koszt tlenowy pracy mięśni dzięki sprawniejszej konwersji ATP w mitochondriach.",
            ],
          },
        ],
      },
      {
        id: "mod-biochem-3",
        title: "Moduł 3: Synteza białek mięśniowych (MPS) i układ odpornościowy",
        lessons: [
          {
            id: "lec-biochem-3-1",
            title: "Szlak mTORC1, próg leucynowy i równowaga immunologiczna w ciężkim makrocyklu",
            duration: "23 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/biochemia/oer-biochem-struktura-bialek-kolagen-i-hemoglobina",
            summary:
              "Optymalne okno podaży pełnowartościowego białka (~2,5–3 g leucyny na posiłek) oraz ochrona odporności śluzówkowej (IgA/IgG).",
            contentHtml:
              "<p>Kinaza <strong>mTORC1</strong> integruje sygnał napięcia mechanicznego z dostępnością egzogennej <strong>leucyny</strong>, uruchamiając rybosomalną translację białek miofibrylarnych przez 24–48 godzin po treningu oporowym.</p>",
            keyTakeaways: [
              "Dobowa podaż białka (1,6–2,2 g/kg m.c.) znaczy wielokrotnie więcej niż wąskie okno 30 minut po treningu.",
              "Zbyt mała dostępność energii (LEA / RED-S) obniża stężenie immunoglobulin i zwiększa ryzyko infekcji górnych dróg oddechowych.",
            ],
            figureId: "fig-bio-przeciwcialo-igg",
          },
        ],
      },
    ],
  },
  {
    id: "course-matura-cke",
    slug: "matura-cke-biologia-i-chemia-strategia-pod-klucz",
    title: "Matura CKE Biologia & Chemia — Strategia Pod Klucz",
    subtitle:
      "Jak czytać arkusze CKE w Formule 2015 i 2023+, unikać najczęstszych pułapek klucza oceniania oraz budować wzorcowe odpowiedzi typu Przyczyna → Mechanizm → Skutek.",
    category: "matura-cke",
    categoryLabel: "Matura CKE",
    level: "Podstawowy",
    duration: "6 godz. • 3 moduły",
    modules: [
      {
        id: "mod-matura-1",
        title: "Moduł 1: Dekodowanie czasowników operacyjnych CKE",
        lessons: [
          {
            id: "lec-mat-1-1",
            title: "Wyjaśnij vs Wykaż vs Uzasadnij — architektura odpowiedzi za pełną pulę punktów",
            duration: "22 min",
            isFreePreview: true,
            relatedTheoryPath: "/matura/biologia",
            summary:
              "Dlaczego 60% utraconych punktów w zadaniach otwartych wynika z pominięcia środkowego ogniwa (mechanizmu) mimo prawidłowej wiedzy.",
            contentHtml:
              "<p>Klucz CKE rozlicza odpowiedź jak ścisły dowód logiczny. Czasownik <strong>„Wyjaśnij”</strong> wymaga zawsze pełnego łańcucha <em>Przyczyna (warunek z zadania) &rarr; Mechanizm (zjawisko molekularne/fizjologiczne) &rarr; Skutek (obserwowany wynik)</em>.</p><p>Podanie samego skutku lub potocznego skrótu myślowego (np. napisanie samej nazwy „cytoplazma” zamiast precyzyjnego „cytozol” dla lokalizacji glikolizy) automatycznie zeruje punktację.</p>",
            keyTakeaways: [
              "W zadaniach „Określ / Podaj” obowiązuje maksymalna zwięzłość — nie dopisuj zbędnych hipotez, które mogłyby zaprzeczyć poprawnej tezie.",
              "Każde zadanie typu „Oceń P/F” analizuj na poziomie pojedynczego słowa-pułapki (np. „wyłącznie”, „zawsze”, „u roślin tylko w nocy”).",
            ],
          },
          {
            id: "lec-mat-1-2",
            title: "Analiza wykresów i próby kontrolnej w doświadczeniach biologicznych",
            duration: "20 min",
            isFreePreview: false,
            relatedTheoryPath:
              "/theory/biologia/bio1-czesc-1-metodyka-badan-biologicznych",
            summary:
              "Prawidłowe formułowanie problemu badawczego (pytanie/równoważnik zdania), hipotezy (zawsze twierdzącej!) i roli próby ślepej.",
            contentHtml:
              "<p>Problem badawczy zapisujemy w formie pytania o wpływ zmiennej niezależnej na zmienną zależną (np. „Czy stężenie NaCl wpływa na masę tkanki?”), natomiast <strong>hipoteza</strong> musi być zdaniem oznajmującym weryfikowalnym w doświadczeniu.</p>",
            keyTakeaways: [
              "Próba kontrolna różni się od badawczej wyłącznie JEDNYM czynnikiem badanym.",
              "W opisie wykresu zawsze podawaj wartości liczbowe z obu osi dla punktów przełomowych.",
            ],
          },
        ],
      },
      {
        id: "mod-matura-2",
        title: "Moduł 2: Najważniejsze pewniaki z Biologii (Mitoza/Mejoza, Genetyka, Metabolizm)",
        lessons: [
          {
            id: "lec-mat-2-1",
            title: "Ploidalność (n/c) w mitozie vs mejozie I i II na zadaniach CKE",
            duration: "26 min",
            isFreePreview: true,
            relatedTheoryPath:
              "/theory/biologia-matura-2023/bm23-bio1-czesc-8-sklad-chemiczny-organizmow-makro-i-mikroelementy-oraz-oddzialywania-chemiczne",
            summary:
              "Bezstresowe obliczanie liczby chromosomów i ilości DNA (n, c) od fazy G1 przez anafazę I aż do gamet.",
            contentHtml:
              "<p>Kluczem do zadań z podziałów jest pamiętanie jednej reguły: w fazie <strong>S interfazy</strong> podwaja się ilość DNA (<em>2c &rarr; 4c</em>), ale liczba chromosomów (<strong>2n</strong>) pozostaje bez zmian, ponieważ dwie chromatydy siostrzane wciąż łączy wspólny centromer.</p><p>Dopiero pęknięcie centromerów w anafazie mitozy (lub rozdział całych chromosomów homologicznych w anafazie I mejozy) zmienia relację między <em>n</em> oraz <em>c</em>.</p>",
            keyTakeaways: [
              "W profazie I mejozy tworzą się biwalenty (tetrady) umożliwiające crossing-over między chromatydami niesiostrzanymi.",
              "Koniugacja chromosomów homologicznych NIE zachodzi podczas mitozy.",
            ],
            figureId: "fig-bio-mitoza-mejoza",
          },
          {
            id: "lec-mat-2-2",
            title: "Formuła 2015 vs Formuła 2023+ — różnice w wymaganiach",
            duration: "19 min",
            isFreePreview: false,
            relatedTheoryPath: "/matura",
            summary:
              "Gdzie pojawiają się bezkręgowce i cykle pasożytów (Formuła 2015) oraz rozszerzona biologia molekularna CRISPR/PCR (2023+).",
            contentHtml:
              "<p>Przełączając tryb podręcznika między Formułą 2023+ a Formułą 2015, od razu odsiewasz zagadnienia spoza Twojej podstawy programowej, oszczędzając dziesiątki godzin powtórek przed majowym egzaminem.</p>",
            keyTakeaways: [
              "Arkusze CKE 2015–2024 w module 1:1 posiadają nałożone odręczne wzorce odpowiedzi oraz wycinki z oryginalnych Zasad Oceniania.",
            ],
          },
        ],
      },
      {
        id: "mod-matura-3",
        title: "Moduł 3: Stechiometria, buforowość i termochemia w Chemii PR",
        lessons: [
          {
            id: "lec-mat-3-1",
            title: "Miareczkowanie słabych kwasów, pH buforów i dobór wskaźnika",
            duration: "28 min",
            isFreePreview: false,
            relatedTheoryPath: "/matura/chemia",
            summary:
              "Jak odczytać punkt połowy miareczkowania (pH = pKa) oraz prawidłowo dobrać fenoloftaleinę vs oranż metylowy pod klucz CKE.",
            contentHtml:
              "<p>Podczas miareczkowania słabego kwasu (np. CH<sub>3</sub>COOH) mocną zasadą NaOH powstająca w punkcie równoważnikowym (PR) sól ulega hydrolizie anionowej, dając odczyn <strong>zasadowy (pH &gt; 7)</strong> — dlatego właściwym wskaźnikiem jest fenoloftaleina, a nie oranż metylowy.</p>",
            keyTakeaways: [
              "W punkcie połowy objętości równoważnikowej [HA] = [A⁻], więc pojemność buforowa osiąga maksimum, a pH = pKa.",
              "Reguła przekory Le Chateliera: wartość stałej równowagi Kc zmienia WYŁĄCZNIE temperatura.",
            ],
            figureId: "fig-chem-miareczkowanie-bufory",
          },
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): SportNotesCourse | undefined {
  return SPORTNOTES_COURSES.find((course) => course.slug === slug);
}
