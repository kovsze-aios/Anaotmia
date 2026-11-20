export type SportNotesCourseTrack = "matura-cke" | "sport-zdrowie";

export type SportNotesCourseCategory =
  | "anatomia-biomechanika"
  | "fizjologia-treningu"
  | "biochemia-sportu"
  | "matura-cke";

export interface CkeTrapComparison {
  mistake: string;
  modelAnswer: string;
  whyZeroPoints: string;
}

export interface CkePracticeLink {
  label: string;
  href: string;
  taskHint?: string;
}

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
  ckeTraps?: CkeTrapComparison[];
  ckePractice?: CkePracticeLink[];
  recallChecklist?: string[];
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
  track: SportNotesCourseTrack;
  category: SportNotesCourseCategory;
  categoryLabel: string;
  level: "Podstawowy" | "Średniozaawansowany" | "Zaawansowany";
  duration: string;
  examSubject?: "biologia" | "chemia" | "matematyka" | "fizyka";
  supportedFormulas?: Array<"2015" | "2023+">;
  examSheetHubPath?: string;
  modules: SportNotesModule[];
}

/**
 * Reusable course factory schema for Polish Matura subjects (Biologia, Chemia,
 * and future subjects like Matematyka / Fizyka). Every Matura course shares the
 * exact 4-step lesson loop: Merytoryka + Rycina, Pułapki CKE, Zadania 1:1 i Postęp.
 */
export interface MaturaCourseBlueprint {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  examSubject: "biologia" | "chemia" | "matematyka" | "fizyka";
  categoryLabel: string;
  level: "Podstawowy" | "Średniozaawansowany" | "Zaawansowany";
  duration: string;
  supportedFormulas: Array<"2015" | "2023+">;
  examSheetHubPath: string;
  modules: SportNotesModule[];
}

export function defineMaturaCourse(
  blueprint: MaturaCourseBlueprint,
): SportNotesCourse {
  return {
    id: blueprint.id,
    slug: blueprint.slug,
    title: blueprint.title,
    subtitle: blueprint.subtitle,
    track: "matura-cke",
    category: "matura-cke",
    categoryLabel: blueprint.categoryLabel,
    level: blueprint.level,
    duration: blueprint.duration,
    examSubject: blueprint.examSubject,
    supportedFormulas: blueprint.supportedFormulas,
    examSheetHubPath: blueprint.examSheetHubPath,
    modules: blueprint.modules,
  };
}

export const COURSE_TRACKS: Array<{
  id: "all" | SportNotesCourseTrack;
  label: string;
}> = [
  { id: "all", label: "Wszystkie ścieżki" },
  { id: "matura-cke", label: "Kursy Maturalne CKE (1:1)" },
  { id: "sport-zdrowie", label: "Sport i Nauki o Zdrowiu" },
];

export const COURSE_CATEGORIES: Array<{
  id: "all" | SportNotesCourseCategory;
  label: string;
}> = [
  { id: "all", label: "Wszystkie kursy" },
  { id: "matura-cke", label: "Matura CKE" },
  { id: "anatomia-biomechanika", label: "Anatomia & Biomechanika" },
  { id: "fizjologia-treningu", label: "Fizjologia Treningu" },
  { id: "biochemia-sportu", label: "Biochemia Sportu" },
];

const MATURA_BIOLOGIA_COURSE = defineMaturaCourse({
  id: "course-matura-biologia-pr",
  slug: "matura-biologia-rozszerzona",
  title: "Matura z Biologii PR — Kompletny Plan 100% (Formuła 2015 & 2023+)",
  subtitle:
    "Systemowy plan pod klucz CKE od metodyki doświadczeń, cytologii i genetyki po fizjologię człowieka, roślin i trening pełnych arkuszy CKE 1:1 (2015–2024).",
  examSubject: "biologia",
  categoryLabel: "Matura CKE · Biologia PR",
  level: "Zaawansowany",
  duration: "14 godz. • 5 modułów",
  supportedFormulas: ["2015", "2023+"],
  examSheetHubPath: "/matura/biologia",
  modules: [
    {
      id: "bio-mod-1",
      title: "Moduł 1: Strategia CKE i Czasowniki Operacyjne",
      lessons: [
        {
          id: "bio-m1-l1",
          title:
            "Wykaż, Wyjaśnij, Porównaj, Określ — schemat Przyczyna → Mechanizm → Skutek",
          duration: "24 min",
          isFreePreview: true,
          relatedTheoryPath:
            "/theory/biologia/bio1-czesc-1-metodyka-badan-biologicznych",
          summary:
            "Dekodowanie klucza oceniania CKE w biologii: dokładna długość argumentu wymagana dla każdego czasownika operacyjnego i eliminacja pustych ogólników.",
          contentHtml:
            "<p>W zadaniach otwartych z biologii punkty przyznaje się za kompletny związek przyczynowo-skutkowy, a nie za pojedyncze słowa kluczowe. Przy czasowniku <strong>„Wyjaśnij”</strong> odpowiedź musi zawierać pełny ciąg: <em>warunek wyjściowy (przyczyna) → zjawisko molekularne lub fizjologiczne (mechanizm) → efekt biologiczny (skutek)</em>.</p><p>Z kolei polecenie <strong>„Porównaj”</strong> wymaga zestawienia tej samej cechy u obu obiektów w jednej wypowiedzi (np. „w mitozie zachodzi X, natomiast w mejozie Y”), natomiast <strong>„Określ / Podaj”</strong> oczekuje maksymalnie zwięzłego stwierdzenia bez dopisywania hipotez mogących unieważnić poprawny wynik.</p>",
          keyTakeaways: [
            "„Wyjaśnij” i „Uzasadnij” bez podania ogniwa pośredniego (mechanizmu) dają 0 pkt nawet przy prawdziwym wniosku końcowym.",
            "W poleceniu „Porównaj” wskazanie cechy tylko jednego organizmu nie stanowi porównania i nie jest punktowane.",
            "Rozdzielaj precyzyjnie „cytozol” od „cytoplazmy” oraz „błonę komórkową” od „ściany komórkowej”.",
          ],
          ckeTraps: [
            {
              mistake:
                "Enzym przestał działać w 75 °C, ponieważ wysoka temperatura go zniszczyła.",
              modelAnswer:
                "Wzrost temperatury do 75 °C powoduje rozerwanie wiązań stabilizujących strukturę III-rzędową enzymu (denaturację), co zmienia kształt centrum aktywnego i uniemożliwia wiązanie substratu.",
              whyZeroPoints:
                "Brak mechanizmu molekularnego: słowa „zniszczyła” lub „zepsuła” bez wskazania denaturacji białka i deformacji centrum aktywnego są dyskwalifikowane przez klucz CKE.",
            },
            {
              mistake:
                "Roślina na parapecie rośnie szybciej niż w głębi pokoju, bo ma tam lepiej.",
              modelAnswer:
                "Większe natężenie światła na parapecie zwiększa szybkość fazy jasnej fotosyntezy (produkcję ATP i NADPH), co przyspiesza wiązanie CO₂ w cyklu Calvina i przyrost biomasy.",
              whyZeroPoints:
                "Brak odwołania do konkretnego procesu i mechanizmu fizjologicznego; odpowiedź potoczna nie spełnia kryterium „Wyjaśnij”.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2024 (Formuła 2023+)",
              href: "/matura/biologia?arkusz=biologia-2024-maj-f2023",
              taskHint: "Przećwicz zadania ze słowem „Wykaż” i „Wyjaśnij” na oryginalnym arkuszu 1:1",
            },
          ],
          recallChecklist: [
            "Potrafię rozpisać dowolne pytanie „Wyjaśnij” w 3 krokach: Przyczyna → Mechanizm → Skutek.",
            "Wiem, kiedy w zadaniu „Porównaj” muszę użyć spójnika kontrastującego oba porównywane obiekty.",
            "Unikam potocznych skrótów myślowych (np. „produkuje energię dla organizmu” zamiast „synteza ATP”).",
          ],
        },
        {
          id: "bio-m1-l2",
          title:
            "Metodologia doświadczeń CKE: problem badawczy, hipoteza i próba kontrolna",
          duration: "22 min",
          isFreePreview: true,
          relatedTheoryPath:
            "/theory/biologia/bio1-czesc-2-metodyka-badan-biologicznych-i-obserwacje-mikroskopowe",
          summary:
            "Żelazne reguły formułowania problemu badawczego i hipotezy oraz rozpoznawania próby kontrolnej (pozytywnej i negatywnej) w doświadczeniach.",
          contentHtml:
            "<p><strong>Problem badawczy</strong> formułujemy jako pytanie rozstrzygnięcia/dopełnienia albo równoważnik zdania określający badany czynnik i mierzony parametr (np. <em>„Czy stężenie sacharozy wpływa na masę bulwy ziemniaka?”</em>). <strong>Hipoteza</strong> jest natomiast przypuszczalną odpowiedzią na problem badawczy — musi mieć formę zdania twierdzącego (nigdy pytania ani przypuszczenia typu „być może”).</p><p><strong>Próba kontrolna</strong> stanowi układ odniesienia i może różnić się od próby badawczej wyłącznie <strong>jednym czynnikiem</strong> (zmienną niezależną). Brak kontroli lub zmiana dwóch parametrów naraz (np. temperatury i pH) unieważnia cały wniosek.</p>",
          keyTakeaways: [
            "Problem badawczy = pytanie/równoważnik „Wpływ X na Y”; hipoteza = jednoznaczne zdanie oznajmujące.",
            "W próbie kontrolnej badany czynnik jest wyeliminowany (kontrola negatywna) lub utrzymany na poziomie fizjologicznym.",
            "Wniosek musi ściśle odpowiadać problemowi badawczemu bez nadinterpretacji wybiegającej poza zmierzone próby.",
          ],
          ckeTraps: [
            {
              mistake:
                "Hipoteza: „Czy temperatura wpływa na aktywność katalazy w wątrobie?”",
              modelAnswer:
                "Hipoteza: „Wzrost temperatury powyżej optimum hamuje aktywność katalazy (lub: Temperatura wpływa na aktywność katalazy)”.",
              whyZeroPoints:
                "Hipoteza zapisana w formie pytania otrzymuje automatycznie 0 pkt — jest to zapis problemu badawczego, a nie hipotezy.",
            },
            {
              mistake:
                "Rola próby kontrolnej: „Żeby zobaczyć, co się stanie w doświadczeniu.”",
              modelAnswer:
                "Próba kontrolna stanowi punkt odniesienia pozwalający wykazać, że obserwowany efekt w próbie badawczej wynika wyłącznie z działania badanego czynnika.",
              whyZeroPoints:
                "Ogólnikowe sformułowanie bez wskazania funkcji porównawczej i izolacji jednej zmiennej niezależnej.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2023 (Formuła 2023+)",
              href: "/matura/biologia?arkusz=biologia-2023-maj-f2023",
              taskHint: "Zwróć uwagę na zadania doświadczalne z próbą kontrolną i doborem zmiennej",
            },
          ],
          recallChecklist: [
            "Odróżniam zmienną niezależną (sterowaną) od zmiennej zależnej (mierzonej w układzie).",
            "Zawsze zapisuję hipotezę jako weryfikowalne zdanie twierdzące bez znaków zapytania.",
            "Potrafię uzasadnić cel stosowania próby kontrolnej dokładnie pod układ zadania.",
          ],
        },
      ],
    },
    {
      id: "bio-mod-2",
      title: "Moduł 2: Cytologia, Chemizm Życia i Metabolizm",
      lessons: [
        {
          id: "bio-m2-l1",
          title:
            "Białka, enzymy (inhibicja) i oddychanie komórkowe z fosforylacją oksydacyjną",
          duration: "28 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia/bio1-czesc-65-oddychanie-komorkowe-oddychanie-tlenowe",
          summary:
            "Rozróżnienie inhibicji kompetycyjnej od niekompetycyjnej, lokalizacja etapów oddychania tlenowego oraz rola gradientu protonowego w mitochondrium.",
          figureId: "fig-bio-lancuch-oddechowy",
          contentHtml:
            "<p>Aktywność enzymów zależy od temperatury, pH oraz obecności inhibitorów. <strong>Inhibitor kompetycyjny</strong> ma budowę zbliżoną do substratu i konkuruje o centrum aktywne — zwiększenie stężenia substratu wypiera go i przywraca maksymalną szybkość reakcji. <strong>Inhibitor niekompetycyjny</strong> wiąże się poza centrum aktywnym (allosterycznie), zmieniając jego kształt nieodwracalnie dla nadmiaru substratu.</p><p>W oddychaniu tlenowym kluczowa jest precyzyjna topografia: glikoliza zachodzi w <strong>cytozolu</strong>, reakcja pomostowa i cykl Krebsa w <strong>macierzy mitochondrium</strong>, a łańcuch oddechowy w <strong>wewnętrznej błonie mitochondrialnej (grzebieniach)</strong>, gdzie energia transportu elektronów buduje gradient H⁺ w przestrzeni międzybłonowej napędzający syntazę ATP.</p>",
          keyTakeaways: [
            "Ostatecznym akceptorem elektronów w łańcuchu oddechowym jest tlen cząsteczkowy (O₂), który po przyłączeniu H⁺ tworzy wodę.",
            "Fermentacja mlekowa i alkoholowa zachodzą w cytozolu wyłącznie w celu regeneracji utlenionego NAD⁺ dla podtrzymania glikolizy.",
            "Większe stężenie substratu znosi efekt inhibitora kompetycyjnego, lecz nie niekompetycyjnego.",
          ],
          ckeTraps: [
            {
              mistake:
                "Głównym zyskiem fermentacji jest rozkład pirogronianu na mleczan dający dodatkowe ATP.",
              modelAnswer:
                "Redukcja pirogronianu do mleczanu nie wytwarza ATP, lecz utlenia NADH do NAD⁺, umożliwiając dalszy przebieg glikolizy (zysk 2 ATP z fosforylacji substratowej).",
              whyZeroPoints:
                "Błąd merytoryczny: sam etap przekształcenia pirogronianu zużywa siłę redukcyjną NADH i służy wyłącznie odtworzeniu NAD⁺.",
            },
            {
              mistake:
                "Łańcuch oddechowy zachodzi w macierzy mitochondrium obok cyklu Krebsa.",
              modelAnswer:
                "Kompleksy łańcucha oddechowego i syntaza ATP są wbudowane w wewnętrzną błonę mitochondrium (grzebienie mitochondrialne).",
              whyZeroPoints:
                "Niedokładna lokalizacja komórkowa: gradient elektrochemiczny protonów wymaga bariery błonowej oddzielającej macierz od przestrzeni międzybłonowej.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2024 (Formuła 2023+)",
              href: "/matura/biologia?arkusz=biologia-2024-maj-f2023",
              taskHint: "Sprawdź zadania z kinetyki enzymów i metabolizmu energetycznego",
            },
          ],
          recallChecklist: [
            "Znam dokładną lokalizację wszystkich 4 etapów oddychania tlenowego w komórce eukariotycznej.",
            "Rozróżniam fosforylację substratową od oksydacyjnej na poziomie gradientu H⁺.",
            "Potrafię odczytać z wykresu wpływ stężenia substratu na inhibicję kompetycyjną vs niekompetycyjną.",
          ],
        },
        {
          id: "bio-m2-l2",
          title:
            "Faza jasna i ciemna fotosyntezy (cykl Calvina) oraz fotosynteza C3/C4/CAM",
          duration: "27 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia/bio1-czesc-61-fotosynteza-budowa-i-funkcja-fotosystemow-oraz-faza-zalezna-od-swiatla",
          summary:
            "Mechanizm fosforylacji niecyklicznej w błonie tylakoidów, fotoliza wody oraz wpływ temperatury i stężenia CO₂ na asymilację węgla w stromie.",
          figureId: "fig-bio-fotosynteza-tylakoid",
          contentHtml:
            "<p>W fazie zależnej od światła (błony tylakoidów) energia wzbudzonych elektronów z fotosystemów PSII i PSI napędza pompowanie protonów H⁺ z stromy do <strong>wnętrza (światła) tylakoidu</strong>. Brakujące elektrony PSII odzyskuje dzięki <strong>fotolizie wody</strong> (2 H₂O → O₂ + 4 H⁺ + 4 e⁻). Produktami fazy jasnej wykorzystywanymi w stromie są wyłącznie <strong>ATP i NADPH</strong> (tlen jest produktem ubocznym uwalnianym do atmosfery).</p><p>W <strong>cyklu Calvina</strong> (stroma chloroplastu) enzym <strong>RuBisCO</strong> przyłącza CO₂ do rybulozo-1,5-bisfosforanu (karboksylacja), następnie zachodzi redukcja do PGAL (aldehydu 3-fosfoglicerynowego) kosztem ATP i NADPH oraz regeneracja RuBP.</p>",
          keyTakeaways: [
            "Tlen wydzielany podczas fotosyntezy pochodzi w 100% z fotolizy wody (H₂O), a nie z cząsteczki CO₂.",
            "Cykl Calvina zachodzi pośrednio w zależności od światła — w ciemności staje po wyczerpaniu puli ATP i NADPH z fazy jasnej.",
            "W fosforylacji cyklicznej (tylko PSI) powstaje jedynie ATP — bez udziału fotolizy wody, O₂ ani NADPH.",
          ],
          ckeTraps: [
            {
              mistake:
                "W fazie jasnej fotosyntezy z wody powstaje NADPH oraz CO₂ dla cyklu Calvina.",
              modelAnswer:
                "Fotoliza wody dostarcza elektronów dla PSII, protonów budujących gradient w świetle tylakoidu oraz tlenu O₂ jako produktu ubocznego.",
              whyZeroPoints:
                "Mylenie substratu fazy ciemnej (CO₂) z produktami rozpadu wody i przenośnikiem elektronów.",
            },
            {
              mistake:
                "Faza ciemna zachodzi w komórkach roślinnych wyłącznie w nocy.",
              modelAnswer:
                "Nazwa „faza niezależna od światła” oznacza brak bezpośredniego pochłaniania fotonów przez enzymy cyklu Calvina, lecz w naturze przebiega ona za dnia dzięki stałej dostawie ATP i NADPH z tylakoidów.",
              whyZeroPoints:
                "Klasyczna pułapka w zadaniach P/F dotycząca roślin typu C3 w arkuszach CKE.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2022 (Formuła 2015)",
              href: "/matura/biologia?arkusz=biologia-2022-maj-f2015",
              taskHint: "Przeanalizuj zadania z krzywymi świetlnymi fotosyntezy i anatomią liścia",
            },
          ],
          recallChecklist: [
            "Rozróżniam kierunek przepływu H⁺ w mitochondrium (przestrzeń → macierz) vs chloroplastach (wnętrze tylakoidu → stroma).",
            "Pamiętam źródło atomów O₂ w fotosyntezie (H₂O) oraz budulec szkieletów cukrowych (CO₂).",
            "Znam 3 etapy cyklu Calvina: karboksylacja, redukcja, regeneracja.",
          ],
        },
      ],
    },
    {
      id: "bio-mod-3",
      title: "Moduł 3: Genetyka, Ekspresja Genów i Biotechnologia",
      lessons: [
        {
          id: "bio-m3-l1",
          title:
            "Replikacja DNA (nici wiodąca i opóźniona), transkrypcja, translacja i CRISPR",
          duration: "29 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia/bio4-czesc-7-mechanizm-replikacji-dna-replisom-telomeraza-i-korekta-bledow",
          summary:
            "Kierunek pracy polimerazy DNA (5' → 3'), fragmenty Okazaki, rola starterów RNA prymazy oraz różnice ekspresji genów u prokariotów i eukariotów.",
          figureId: "fig-bio-widelki-replikacyjne",
          contentHtml:
            "<p>Polimeraza DNA syntetyzuje nową nić wyłącznie w kierunku <strong>5' → 3'</strong> (odczytując matrycę w kierunku 3' → 5') i wymaga wolnej grupy 3'-OH dostarczonej przez starter RNA syntetyzowany przez <strong>prymazę</strong>. Z powodu antyrównoległości nici jedna z nich powstaje w sposób ciągły (<strong>nić wiodąca</strong>), a druga odcinkami jako <strong>fragmenty Okazaki</strong> (<strong>nić opóźniona</strong>), które łączy później <strong>ligaza DNA</strong>.</p><p>W <strong>Formule 2023+</strong> istotna jest również obróbka potranskrypcyjna pre-mRNA (usuwanie intronów przez splicing, dodanie czapeczki 5' oraz ogona poli-A) oraz mechanizm edycji genomu <strong>CRISPR-Cas9</strong>.</p>",
          keyTakeaways: [
            "Helikaza rozrywa wiązania wodorowe między zasadami azotowymi, natomiast ligaza odtwarza wiązania fosfodiestrowe.",
            "W kodzie genetycznym antykodon tRNA jest komplementarny i antyrównoległy do kodonu mRNA.",
            "U eukariotów geny są nieciągłe (introny + eksony), więc z jednego genu przez alternatywny splicing mogą powstać różne białka.",
          ],
          ckeTraps: [
            {
              mistake:
                "Polimeraza DNA odczytuje matrycę w kierunku 5' → 3' i sama rozpoczyna syntezę DNA od zera.",
              modelAnswer:
                "Polimeraza DNA przesuwa się po nici matrycowej w kierunku 3' → 5', syntetyzując nową nić w kierunku 5' → 3' wyłącznie od wolnego końca 3'-OH startera RNA.",
              whyZeroPoints:
                "Odwrócenie kierunku polarności syntezy oraz pominięcie roli prymazy — najczęstszy błąd przy rysowaniu widełek replikacyjnych.",
            },
            {
              mistake:
                "Wszystkie kodony na nici kodującej DNA odczytujemy bezpośrednio z tabeli kodu genetycznego.",
              modelAnswer:
                "Tabela kodu genetycznego odnosi się zawsze do kodonów mRNA (5' → 3'), które mają sekwencję identyczną z nicią kodującą DNA (po zamianie T na U), lecz komplementarną do nici matrycowej.",
              whyZeroPoints:
                "Błędny odczyt nici matrycowej bez transkrypcji daje całkowicie błędną sekwencję aminokwasową.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2023 (Formuła 2023+)",
              href: "/matura/biologia?arkusz=biologia-2023-maj-f2023",
              taskHint: "Rozwiąż zadania z zapisu sekwencji DNA → mRNA → peptyd oraz biotechnologii",
            },
          ],
          recallChecklist: [
            "Pamiętam polarność: matryca czytana 3'→5', nowa nić syntetyzowana 5'→3'.",
            "Potrafię bezbłędnie przeliczyć sekwencję z nici matrycowej DNA na mRNA, antykodon tRNA i sekwencję białka.",
            "Odróżniam rolę gRNA (rozpoznanie) od białka Cas9 (przecięcie obu nici DNA).",
          ],
        },
        {
          id: "bio-m3-l2",
          title:
            "Ploidalność (n/c) w mitozie vs mejozie oraz krzyżówki i analiza rodowodów CKE",
          duration: "26 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia/bio4-czesc-57-dziedziczenie-mitochondrialne-i-analiza-rodowodow",
          summary:
            "Pewne wyznaczanie zawartości DNA (c) i chromosomów (n), obliczanie crossing-over oraz algorytm wykluczania typów dziedziczenia na rodowodzie.",
          figureId: "fig-bio-mitoza-mejoza",
          contentHtml:
            "<p>W fazie <strong>S interfazy</strong> ilość DNA ulega podwojeniu (<em>2c → 4c</em>), lecz liczba chromosomów (<strong>2n</strong>) pozostaje bez zmian, ponieważ dwie chromatydy siostrzane wciąż łączy wspólny centromer. Zmiana liczby <em>n</em> następuje dopiero w anafazie: w mejozie I do biegunów wędrują całe chromosomy homologiczne (<em>2n → 1n</em>), a w mejozie II pękają centromery i rozchodzą się chromatydy (<em>2c → 1c</em>).</p><p>Analizując <strong>rodowód genetyczny</strong>, stosuj metodę eliminacji: (1) chorzy rodzice ze zdrowym dzieckiem dowodzą allelu dominującego; (2) zdrowi rodzice z chorym dzieckiem dowodzą allelu recesywnego; (3) chory ojciec ze zdrową córką wyklucza dominujące sprzężenie z X.</p>",
          keyTakeaways: [
            "Rekombinacja przez crossing-over zachodzi wyłącznie w profazie I mejozy między chromatydami niesiostrzanymi.",
            "Niezależna segregacja chromosomów homologicznych ma miejsce w anafazie I mejozy.",
            "W zadaniach z rodowodami zawsze podawaj konkretne pary osób z numeracją ze schematu (np. „osobnicy II.1 i II.2”).",
          ],
          ckeTraps: [
            {
              mistake:
                "W anafazie I mejozy pękają centromery i do biegunów komórki rozchodzą się pojedyncze chromatydy.",
              modelAnswer:
                "W anafazie I rozchodzą się całe dwuchromatydowe chromosomy homologiczne (pękanie centromerów zachodzi dopiero w anafazie II mejozy lub w anafazie mitozy).",
              whyZeroPoints:
                "Pomylenie redukcyjnego podziału chromosomów (mejoza I) z podziałem chromatyd (mejoza II).",
            },
            {
              mistake:
                "Choroba występuje głównie u mężczyzn na rodowodzie, więc na pewno jest recesywna sprzężona z płcią.",
              modelAnswer:
                "Wskazanie na rodowodzie konkretnego układu (np. chora matka II.2 i zdrowy syn III.1 wykluczają dziedziczenie recesywne sprzężone z X) zamiast statystyki liczebności.",
              whyZeroPoints:
                "Klucz CKE nie akceptuje dowodzenia typu dziedziczenia częstością występowania płci na małym drzewie genealogicznym.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2021 (Formuła 2015)",
              href: "/matura/biologia?arkusz=biologia-2021-maj-f2015",
              taskHint: "Zobacz klasyczne zadania maturalne z rodowodu oraz cyklu komórkowego (n, c)",
            },
          ],
          recallChecklist: [
            "Zapisuję bez błędu pary (2n/4c, 1n/2c, 1n/1c) dla każdej fazy mitozy i mejozy.",
            "Umiem odróżnić skrzyżowanie testowe od krzyżówki z heterozygotą podwójną z uwzględnieniem sprzężenia.",
            "W uzasadnieniu rodowodu zawsze wskazuję konkretną parę rodzic → dziecko.",
          ],
        },
      ],
    },
    {
      id: "bio-mod-4",
      title: "Moduł 4: Fizjologia Człowieka i Roślin",
      lessons: [
        {
          id: "bio-m4-l1",
          title:
            "Układ nerwowy, serce, krążenie i nefron — integracja fizjologiczna CKE",
          duration: "30 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia/bio3-czesc-74-fizjologia-serca-i-krazenia-krwi",
          summary:
            "Przewodzenie synaptyczne (Ca²⁺ → egzocytoza neuroprzekaźnika), zastawki serca i dziwna sieć w nefronie jako stałe pewniaki arkuszy CKE.",
          figureId: "fig-bio-synapsa-chemiczna",
          contentHtml:
            "<p>Impuls nerwowy docierający do kolbki synaptycznej otwiera napięciozależne kanały wapniowe <strong>Ca²⁺</strong>, co wyzwala egzocytozę pęcherzyków z neuroprzekaźnikiem do szczeliny synaptycznej. Na błonie postsynaptycznej wiązanie ligandu zmienia przepuszczalność jonów (np. Na⁺ pobudza, Cl⁻ hamuje). Przekaz jest jednokierunkowy dzięki rozmieszczeniu pęcherzyków tylko w części presynaptycznej, a receptorów w błonie postsynaptycznej.</p><p>W <strong>nerce</strong> krew przepływa kolejno przez tętniczkę doprowadzającą (o większym świetle) → sieć dziwną tętniczo-tętniczą kłębuszka → węższą tętniczkę odprowadzającą. Różnica średnic generuje wysokie ciśnienie hydrostatyczne napędzające ultrafiltrację osocza do torebki Bowmana.</p>",
          keyTakeaways: [
            "Krew w tętnicach krążenia małego (płucnego) jest odtlenowana, natomiast w żyłach płucnych — utlenowana.",
            "W układzie wydalniczym zwężenie tętniczki odprowadzającej względem doprowadzającej warunkuje wysokie ciśnienie filtracyjne w kłębuszku.",
            "W spoczynku potencjał −70 mV utrzymuje głównie aktywna pompa Na⁺/K⁺ (3 Na⁺ na zewnątrz, 2 K⁺ do wnętrza) + otwarte kanały K⁺.",
          ],
          ckeTraps: [
            {
              mistake:
                "Wszystkie tętnice w organizmie człowieka prowadzą krew bogatą w tlen (natlenowaną).",
              modelAnswer:
                "Tętnice to naczynia odprowadzające krew Z serca (np. pień płucny i tętnice płucne prowadzą krew odtlenowaną do płuc).",
              whyZeroPoints:
                "Mylenie kryterium kierunku przepływu krwi (tętnica = od serca) ze składem gazowym krwi.",
            },
            {
              mistake:
                "W synapsie chemicznej jony wapnia wnikają do neuronu postsynaptycznego, aby wywołać tam potencjał czynnościowy.",
              modelAnswer:
                "Jony Ca²⁺ wnikają do kolbki presynaptycznej i inicjują egzocytozę pęcherzyków z neuroprzekaźnikiem; depolaryzację błony postsynaptycznej wywołuje głównie napływ jonów Na⁺.",
              whyZeroPoints:
                "Odwrócenie ról jonów Ca²⁺ (część presynaptyczna) i Na⁺ (część postsynaptyczna).",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2020 (Formuła 2015)",
              href: "/matura/biologia?arkusz=biologia-2020-maj-f2015",
              taskHint: "Przeanalizuj zadania z krążenia krwi, hormonów i fizjologii nefronu",
            },
          ],
          recallChecklist: [
            "Rozróżniam automatycznie kolejność faz cyklu serca i kierunek pracy zastawek AV vs półksiężycowatych.",
            "Znam różnicę między filtrem pierwotnym (glukoza, aminokwasy, woda) a moczem ostatecznym (brak glukozy i białek u zdrowego człowieka).",
            "Pamiętam rolę Ca²⁺ po stronie presynaptycznej synapsy chemicznej.",
          ],
        },
        {
          id: "bio-m4-l2",
          title:
            "Fizjologia roślin: mechanizm kohezyjno-transpiracyjny, łyko (Münch) i fitohormony",
          duration: "24 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia/bio2-czesc-85-transport-asymilatow-hormony-roslinne-i-fizjologia-rozwoju-roslin",
          summary:
            "Bierne przewodzenie wody w naczyniach drewna vs aktywne ładowanie sacharozy do rurek sitowych oraz działanie auksyn, giberelin, ABA i etylenu.",
          contentHtml:
            "<p>Transport wody w <strong>drewnie (ksylemie)</strong> w górę rośliny napędza <strong>transpiracja</strong> z powierzchni liści oraz spójność cząsteczek wody (siły kohezji dzięki wiązaniom wodorowym) i przyleganie do celulozowych ścian naczyń (adhezja). Jest to proces bierny (nie zużywa ATP komórki — naczynia i cewki są martwe).</p><p>Z kolei transport asymilatów w <strong>łyku (floemie)</strong> wymaga nakładu energii ATP przy aktywnym załadunku sacharozy w komórkach towarzyszących przy liściu, napływu wody z ksylemu (ciśnienie turgorowe) i przepływu masowego w kierunku organów-biorców (korzeni, owoców).</p>",
          keyTakeaways: [
            "Kwas abscysynowy (ABA) w stresie suszy wywołuje wypływ jonów K⁺ z komórek szparkowych, zmniejsza turgor i zamyka aparaty szparkowe.",
            "Auksyny odpowiadają za fototropizm dodatni pędu (nagromadzenie po zacienionej stronie przyspiesza wydłużanie komórek) oraz dominację wierzchołkową.",
            "Przerwanie korzenia (pasemko Caspary'ego w śródskórni) zmusza wodę do przejścia szlakiem symplastycznym pod kontrolą błon.",
          ],
          ckeTraps: [
            {
              mistake:
                "Wody w drewnie nie mogą przerwać żadne pęcherzyki, a jej ruch pompują aktywnie żywe komórki naczyń za pomocą ATP.",
              modelAnswer:
                "Naczynia i cewki ksylemu to martwe komórki pozbawione protoplastów; główną siłą ssącą jest transpiracja liści połączona z parciem korzeniowym.",
              whyZeroPoints:
                "Przypisanie transportu w martwej tkance przewodzącej zużyciu ATP w samych naczyniach ksylemu.",
            },
            {
              mistake:
                "W fototropizmie dodatnim auksyny gromadzą się po stronie oświetlonej pędu i stymulują tam szybsze dzielenie się komórek.",
              modelAnswer:
                "Auksyny przemieszczają się w pędzie w kierunku strony zacienionej, gdzie pobudzają wzrost wydłużeniowy (elongacyjny) komórek, co wygina pęd ku światłu.",
              whyZeroPoints:
                "Podwójny błąd: mylna strona gromadzenia auksyn (zacieniona, nie oświetlona) oraz wzrost wydłużeniowy zamiast samych podziałów.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Biologia — Maj 2019 (Formuła 2015)",
              href: "/matura/biologia?arkusz=biologia-2019-maj-f2015",
              taskHint: "Zweryfikuj zadania o aparatach szparkowych, transpiracji i auksynach",
            },
          ],
          recallChecklist: [
            "Rozróżniam budowę i funkcję drewna (woda/sole, martwe naczynia, bez ATP) od łyka (asymilaty, żywe rurki sitowe, komórki towarzyszące z ATP).",
            "Znam rolę pasemek Caspary'ego w endodermie jako bariery apoplastycznej.",
            "Pamiętam działanie ABA podczas suszy (zamknięcie aparatów szparkowych przez spadek turgoru).",
          ],
        },
      ],
    },
    {
      id: "bio-mod-5",
      title: "Moduł 5: Trening Arkuszy 1:1 (2015–2024)",
      lessons: [
        {
          id: "bio-m5-l1",
          title:
            "Arkusze Nowej Formuły 2023+ (Maj 2023 & Maj 2024) — immunologia i biotechnologia",
          duration: "32 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia-matura-2023/bm23-cke-bio-seed-crispr-2023",
          summary:
            "Praca 1:1 na najświeższych arkuszach Formuły 2023+: odpowiedź humoralna i komórkowa (IgG), szczepionki vs surowica, PCR i CRISPR-Cas9.",
          figureId: "fig-bio-przeciwcialo-igg",
          contentHtml:
            "<p>W arkuszach <strong>Formuły 2023+</strong> wyraźnie rośnie nacisk na analizę rozbudowanych wiązek tekstowo-wykresowych łączących genetykę molekularną z immunologią i ekologią. W odpowiedzi odpornościowej kluczowe jest rozróżnienie: <strong>odporność czynna</strong> (własna produkcja przeciwciał i komórek pamięci po przechorowaniu lub szczepieniu z antygenem) vs <strong>odporność bierna</strong> (podanie gotowych przeciwciał z surowicy lub przez łożysko — działa natychmiast, ale krótkotrwale bez pamięci immunologicznej).</p>",
          keyTakeaways: [
            "Przeciwciała (immunoglobuliny) produkują wyłącznie limfocyty B po przekształceniu w komórki plazmatyczne.",
            "Szczepionka zawiera antygen (pobudza odporność czynną sztuczną), a surowica odpornościowa — gotowe przeciwciała (odporność bierna sztuczna).",
            "W PCR startery DNA wyznaczają granice powielanego fragmentu, a polimeraza Taq jest odporna na denaturację w ok. 95 °C.",
          ],
          ckeTraps: [
            {
              mistake:
                "Podanie surowicy odpornościowej z gotowymi przeciwciałami wytwarza u pacjenta wieloletnią pamięć immunologiczną.",
              modelAnswer:
                "Surowica zapewnia odporność bierną krótkotrwałą — gotowe przeciwciała neutralizują antygen natychmiast, lecz nie powstają własne limfocyty B pamięci ani komórki plazmatyczne.",
              whyZeroPoints:
                "Pomylenie mechanizmu szczepionki (czynnego) z surowicą (biernym) — regularnie sprawdzane pytanie w arkuszach majowych.",
            },
            {
              mistake:
                "Immunoglobuliny IgG są wytwarzane przez limfocyty T cytotoksyczne w celu niszczenia wirusów.",
              modelAnswer:
                "Przeciwciała wydzielają wyłącznie pobudzone komórki plazmatyczne powstające z limfocytów B; limfocyty Tc bezpośrednio eliminują zakażone komórki gospodarza.",
              whyZeroPoints:
                "Przypisanie odpowiedzi humoralnej (przeciwciała) limfocytom T odpowiedzi komórkowej.",
            },
          ],
          ckePractice: [
            {
              label: "Rozwiąż 1:1 — Arkusz CKE Biologia Maj 2024",
              href: "/matura/biologia?arkusz=biologia-2024-maj-f2023",
              taskHint: "Pełny arkusz 60 pkt w Formule 2023+ z naniesionym kluczem",
            },
            {
              label: "Rozwiąż 1:1 — Arkusz CKE Biologia Maj 2023",
              href: "/matura/biologia?arkusz=biologia-2023-maj-f2023",
              taskHint: "Pierwszy majowy egzamin Nowej Formuły 2023+",
            },
          ],
          recallChecklist: [
            "Rozróżniam bez wahania szczepionkę od surowicy (rodzaj preparatu, czas działania, komórki pamięci).",
            "Znam funkcję fragmentu Fab (wiązanie epitopu antygenu) oraz Fc (aktywacja dopełniacza/makrofagów) w IgG.",
            "Potrafię zapisać kolejność 3 kroków cyklu PCR wraz z temperaturami.",
          ],
        },
        {
          id: "bio-m5-l2",
          title:
            "Arkusze Formuły 2015 (2015–2022) — bezkręgowce, cykle pasożytów i porównanie formuł",
          duration: "25 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/biologia-matura-2015/bm15-cke-bio-seed-pasozyty-2015",
          summary:
            "Trening na klasycznych arkuszach 2015–2022: dokładne cykle rozwojowe motylicy, tasiemców, cykl przemiany pokoleń oraz zadania przekrojowe.",
          figureId: "fig-bio-cykl-krebsa",
          contentHtml:
            "<p>Choć Nowa Formuła 2023+ ogranicza szczegółową systematykę bezkręgowców i nazewnictwo pośrednich metabolitów cyklu Krebsa, zadania z arkuszy <strong>2015–2022</strong> pozostają najlepszym treningiem logiki biologicznej, odczytu rycin mikroskopowych i analizy doświadczeń CKE.</p><p>W cyklach pasożytniczych (np. motylica wątrobowa, tasiemiec uzbrojony) zawsze kontroluj kierunek: <strong>żywiciel ostateczny</strong> to ten, w którym dochodzi do rozmnażania płciowego pasożyta (dorosła postać), natomiast w <strong>żywicielu pośrednim</strong> żyją i rozmnażają się bezpłciowo wyłącznie stadia larwalne.</p>",
          keyTakeaways: [
            "Żywiciel ostateczny zawsze gości postać dojrzałą płciowo; żywiciel pośredni — stadium larwalne.",
            "W przemianie pokoleń mszaków dominuje haploidalny gametofit (n), a u paprotników i nasiennych — diploidalny sporofit (2n).",
            "Rozwiązując arkusze 2015–2022 w przygotowaniu do Formuły 2023+, skupiaj się na metodologii i mechanizmach fizjologicznych.",
          ],
          ckeTraps: [
            {
              mistake:
                "Człowiek jest zawsze żywicielem ostatecznym dla bąblowca i motylicy wątrobowej.",
              modelAnswer:
                "Dla tasiemca bąblowca żywicielem ostatecznym są mięsożerne psowate (np. lis, pies), a człowiek bywa przypadkowym żywicielem pośrednim (rozwój torbieli bąblowcowej).",
              whyZeroPoints:
                "Automatyczne utożsamianie człowieka z żywicielem ostatecznym każdego tasiemca.",
            },
            {
              mistake:
                "W cyklu paproci plemniki i komórki jajowe powstają bezpośrednio na drodze mejozy w plemniach i rodniach.",
              modelAnswer:
                "U wszystkich roślin lądowych gamety powstają na drodze mitozy na haploidalnym gametoficie (mejoza daje haploidalne zarodniki na sporoficie).",
              whyZeroPoints:
                "Przeniesienie cyklu zwierzęcego (gamety wprost z mejozy) na cykl przemiany pokoleń u roślin.",
            },
          ],
          ckePractice: [
            {
              label: "Rozwiąż 1:1 — Arkusz CKE Biologia Maj 2022 (F2015)",
              href: "/matura/biologia?arkusz=biologia-2022-maj-f2015",
              taskHint: "Pełny arkusz CKE z zadaniami z fizjologii, genetyki i systematyki",
            },
            {
              label: "Rozwiąż 1:1 — Arkusz CKE Biologia Maj 2018 (F2015)",
              href: "/matura/biologia?arkusz=biologia-2018-maj-f2015",
              taskHint: "Klasyczny arkusz treningowy z dużym udziałem analizy doświadczeń",
            },
          ],
          recallChecklist: [
            "Rozróżniam żywiciela ostatecznego od pośredniego według kryterium miejsca rozmnażania płciowego.",
            "Wiem, że u roślin mejoza jest sporyczna (tworzy zarodniki n), a gamety powstają przez mitozę.",
            "Regularnie rozwiązuję po jednym pełnym arkuszu 1:1 tygodniowo z kontrolą klucza odręcznego.",
          ],
        },
      ],
    },
  ],
});

const MATURA_CHEMIA_COURSE = defineMaturaCourse({
  id: "course-matura-chemia-pr",
  slug: "matura-chemia-rozszerzona",
  title: "Matura z Chemii PR — Kompletny Plan 100% (Formuła 2015 & 2023+)",
  subtitle:
    "Pełne przygotowanie pod klucz CKE: od konfiguracji d-blokowych i VSEPR, przez stechiometrię, pH, Kso i elektrochemię, po stereochemię Fischera i szlaki syntez organicznych.",
  examSubject: "chemia",
  categoryLabel: "Matura CKE · Chemia PR",
  level: "Zaawansowany",
  duration: "15 godz. • 5 modułów",
  supportedFormulas: ["2015", "2023+"],
  examSheetHubPath: "/matura/chemia",
  modules: [
    {
      id: "chem-mod-1",
      title: "Moduł 1: Budowa Atomu, Konfiguracje Elektronowe i Wiązania (VSEPR)",
      lessons: [
        {
          id: "chem-m1-l1",
          title:
            "Konfiguracje elektronowe bloku d, kationy Fe²⁺/Fe³⁺/Cu⁺ i liczby kwantowe",
          duration: "25 min",
          isFreePreview: true,
          relatedTheoryPath:
            "/theory/chemia/chem1-czesc-48-kolejnosc-zapelniania-podpowlok-elektronowych",
          summary:
            "Zasada promocji elektronowej u chromu i miedzi, kolejność usuwania elektronów 4s przed 3d w kationach oraz poprawne wyznaczanie walencyjnych elektronów.",
          contentHtml:
            "<p>W atomach pierwiastków bloku d z 4. okresu podpowłoka <strong>4s</strong> zapełnia się przed podpowłoką <strong>3d</strong> (reguła Madelunga). Dla <strong>chromu (Z = 24)</strong> i <strong>miedzi (Z = 29)</strong> zachodzi jednak promocja elektronowa z 4s do 3d dla osiągnięcia stabilniejszej konfiguracji półwypełnionej (Cr: <code>[Ar] 3d⁵ 4s¹</code>) lub całkowicie wypełnionej (Cu: <code>[Ar] 3d¹⁰ 4s¹</code>).</p><p>Najważniejsza reguła jonizacji CKE: podczas tworzenia <strong>kationów</strong> metali przejściowych (np. Fe²⁺, Cu²⁺, Mn²⁺) <strong>elektrony opuszczają najpierw najwyższą powłokę zewnętrzną (4s)</strong>, zanim zostaną odebrane elektrony z 3d! Zatem jon Fe²⁺ ma konfigurację <code>[Ar] 3d⁶</code>, a nie <code>[Ar] 4s² 3d⁴</code>.</p>",
          keyTakeaways: [
            "Elektrony walencyjne atomów bloku d obejmują sumę elektronów z podpowłok ns oraz (n−1)d (jeśli podpowłoka d nie jest całkowicie zapełniona w danym bloku, pamiętaj też o specyfice cynkowców).",
            "Przy jonizacji Fe → Fe²⁺ usuwamy zawsze dwa elektrony z 4s², pozostawiając 3d⁶.",
            "Cztery liczby kwantowe (n, l, m, ms) opisują jednoznacznie każdy pojedynczy elektron (zakaz Pauliego).",
          ],
          ckeTraps: [
            {
              mistake:
                "Konfiguracja kationu Fe²⁺ (Z = 26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴.",
              modelAnswer:
                "Konfiguracja jonu Fe²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ (lub [Ar] 3d⁶) — w kationach energia podpowłoki 4s staje się wyższa niż 3d, więc najpierw odrywane są elektrony 4s.",
              whyZeroPoints:
                "Najczęstszy błąd maturalny w Zadaniu 1 arkusza: odbieranie elektronów według odwrotnej kolejności niż zasada powłoki zewnętrznej.",
            },
            {
              mistake:
                "Dla atomu węgla liczba możliwych wartości magnetycznej liczby kwantowej m na podpowłoce 2p wynosi 2.",
              modelAnswer:
                "Dla l = 1 (podpowłoka p) magnetyczna liczba kwantowa m przyjmuje 3 wartości: −1, 0, +1 (odpowiadające trzem orbitalom p).",
              whyZeroPoints:
                "Mylenie liczby obsadzonych orbitali w stanie podstawowym węgla (2) z liczbą wszystkich dozwolonych stanów kwantowych m podpowłoki p (3).",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2024 (Formuła 2023+)",
              href: "/matura/chemia?arkusz=chemia-2024-maj-f2023",
              taskHint: "Przejrzyj pierwsze zadania z budowy atomu i okresowości",
            },
          ],
          recallChecklist: [
            "Pamiętam promocję dla Cr ([Ar] 3d⁵ 4s¹) oraz Cu ([Ar] 3d¹⁰ 4s¹).",
            "Tworząc kation bloku d, ZAWSZE najpierw usuwam elektrony z zewnętrznej podpowłoki ns.",
            "Potrafię policzyć niesparowane elektrony według reguły Hunda (maksymalny spin).",
          ],
        },
        {
          id: "chem-m1-l2",
          title:
            "Hybrydyzacja orbitali (sp³, sp², sp), geometria VSEPR oraz polarność cząsteczek",
          duration: "26 min",
          isFreePreview: true,
          relatedTheoryPath:
            "/theory/chemia/chem1-czesc-79-hybrydyzacja-orbitali-atomowych-a-geometria-czasteczek",
          summary:
            "Wyznaczanie typu hybrydyzacji (liczba przestrzenna = wiązania σ + wolne pary), wpływ wolnych par na kąty wiązań i rozróżnianie wiązań polarnych od polarności całej cząsteczki.",
          figureId: "fig-chem-hybrydyzacja-vsepr",
          contentHtml:
            "<p>Typ hybrydyzacji atomu centralnego określamy na podstawie <strong>liczby przestrzennej (steric number)</strong> równej sumie wiązań typu <strong>σ</strong> oraz <strong>wolnych par elektronowych</strong> przy tym atomie: wartość 4 odpowiada hybrydyzacji <strong>sp³</strong>, wartość 3 → <strong>sp²</strong>, a wartość 2 → <strong>sp</strong>.</p><p>Wolne pary zajmują więcej miejsca kątowego niż pary wiążące, ściskając kąty między wiązaniami: przy hybrydyzacji sp³ idealny tetraedr ma <strong>109,5°</strong> (CH₄), piramida trygonalna <strong>~107°</strong> (NH₃ — 1 wolna para), a kształt kątowy wody ok. <strong>104,5°</strong> (2 wolne pary).</p>",
          keyTakeaways: [
            "Każde wiązanie pojedyncze jest wiązaniem σ; wiązanie podwójne to 1σ + 1π, a potrójne to 1σ + 2π.",
            "Cząsteczka o wiązaniach polarnych (np. CO₂, CCl₄, BF₃) może mieć zerowy moment dipolowy (μ = 0), jeśli jest symetryczna i wektory dipoli się znoszą.",
            "Wiązania wodorowe występują między atomem H połączonym z silnie elektroujemnym N, O lub F a wolną parą atomu N, O lub F.",
          ],
          ckeTraps: [
            {
              mistake:
                "Cząsteczka SO₂ ma kształt liniowy, ponieważ siarka tworzy dwa podwójne wiązania z tlenem podobnie jak CO₂.",
              modelAnswer:
                "Cząsteczka SO₂ ma kształt kątowy (hybrydyzacja sp² atomu S), ponieważ na atomie siarki znajduje się dodatkowa wolna para elektronowa odpychająca wiązania S=O.",
              whyZeroPoints:
                "Pominięcie wolnej pary na atomie centralnym przy przewidywaniu geometrii VSEPR.",
            },
            {
              mistake:
                "CO₂ jest cząsteczką polarną, ponieważ różnica elektroujemności ΔE między węglem a tlenem jest duża (wiązania C=O są spolaryzowane).",
              modelAnswer:
                "Mimo polarności poszczególnych wiązań C=O cząsteczka CO₂ jest niepolarna (μ = 0), ponieważ ma symetryczną budowę liniową i przeciwstawne wektory dipoli znoszą się wzajemnie.",
              whyZeroPoints:
                "Utożsamienie polarności pojedynczego wiązania kowalencyjnego z polarnością całej cząsteczki.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2023 (Formuła 2023+)",
              href: "/matura/chemia?arkusz=chemia-2023-maj-f2023",
              taskHint: "Przećwicz ocenianie kształtów cząsteczek, kątów oraz typów hybrydyzacji",
            },
          ],
          recallChecklist: [
            "Liczę sumę (wiązania σ + wolne pary) przed wskazaniem hybrydyzacji sp / sp² / sp³.",
            "Uzasadniam polarność cząsteczki jednocześnie geometrią przestrzenną i sumą wektorów momentów dipolowych.",
            "Znam wpływ wolnych par na zmniejszenie kątów CH₄ (109,5°) → NH₃ (107°) → H₂O (104,5°).",
          ],
        },
      ],
    },
    {
      id: "chem-mod-2",
      title: "Moduł 2: Stechiometria, Stężenia i Obliczenia Maturalne",
      lessons: [
        {
          id: "chem-m2-l1",
          title:
            "Bilansowanie stechiometryczne, substrat w nadmiarze/niedomiarze i wydajność reakcji",
          duration: "28 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia/chem1-czesc-9-stechiometria-reakcji-chemicznych-wspolczynniki-stechiometryczne-i-rownania-bilansowe",
          summary:
            "Pewny schemat obliczeń stechiometrycznych bez błędów zaokrągleń: kontrola substratu limitującego, objętość molowa w warunkach normalnych i wydajność etapowa.",
          contentHtml:
            "<p>W zadaniach obliczeniowych CKE z danymi masami lub molami obu substratów pierwszym obowiązkowym krokiem jest <strong>wyznaczenie substratu będącego w niedomiarze (limitującego)</strong> — całą dalszą stechiometrię produktu liczymy wyłącznie względem niego! Obliczając liczbę moli każdego z substratów i dzieląc przez odpowiedni współczynnik stechiometryczny z równania, mniejszy iloraz wskazuje substrat limitujący.</p><p>Przy zadaniach z <strong>wydajnością (W < 100%)</strong> ilość otrzymanego produktu rzeczywistego stanowi W · n<sub>teor</sub>, natomiast jeśli wyznaczamy wymaganą ilość substratu dla zadanego produktu, masę teoretyczną trzeba zwiększyć dzieląc przez ułamek W.</p>",
          keyTakeaways: [
            "W obliczeniach pośrednich utrzymuj min. 4 cyfry znaczące i zaokrąglaj dopiero wynik końcowy (jednostka jest obowiązkowa!).",
            "W warunkach normalnych (T = 273,15 K = 0 °C, p = 1013 hPa) 1 mol gazu idealnego zajmuje Vm = 22,4 dm³.",
            "Jeśli po reakcji pytają o skład mieszaniny końcowej, zawsze dolicz przereagowany lub pozostały nadmiar substratu.",
          ],
          ckeTraps: [
            {
              mistake:
                "Zapisanie samego wyniku liczbowego „2,45” bez jednostki w końcowej odpowiedzi lub błędne użycie masy substratu będącego w nadmiarze.",
              modelAnswer:
                "Wskazanie kroku weryfikacji niedomiaru (n_A / a vs n_B / b), wyliczenie produktu ze składnika limitującego oraz jawne podanie jednostki końcowej (np. g, dm³, mol/dm³).",
              whyZeroPoints:
                "Obliczenie masy produktu z substratu użytego w nadmiarze obcina całą dalszą punktację za metodę; brak jednostki często skutkuje odjęciem punktu.",
            },
            {
              mistake:
                "Zaokrąglenie liczby moli w pierwszym etapie (np. 0,0348 mol → 0,03 mol) w wieloetapowych obliczeniach.",
              modelAnswer:
                "Zachowanie dokładności pośredniej (co najmniej 3–4 cyfr znaczących) i dopiero końcowe dopasowanie do wymagań zadania.",
              whyZeroPoints:
                "Przedwczesne zaokrąglenie przekracza dopuszczalną tolerancję błędu w kluczu CKE.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2024 (Formuła 2023+)",
              href: "/matura/chemia?arkusz=chemia-2024-maj-f2023",
              taskHint: "Sprawdź zadania rachunkowe ze stechiometrii, mieszanin oraz wydajności",
            },
          ],
          recallChecklist: [
            "Gdy mam ilości obu substratów, zawsze sprawdzam najpierw, który z nich ogranicza reakcję.",
            "Rozróżniam kierunek mnożenia i dzielenia przy wydajności W (substrat potrzebny vs produkt uzyskany).",
            "Nie zaokrąglam wyników pośrednich i zawsze dopisuję właściwą jednostkę fizyczną.",
          ],
        },
        {
          id: "chem-m2-l2",
          title:
            "Roztwory: przeliczanie Cp ↔ Cm, mieszanie roztworów, hydraty i krzywe rozpuszczalności",
          duration: "27 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia/chem1-czesc-184-roztwory-cial-stalych-w-cieczach-rozpuszczalnosc-i-krystalizacja",
          summary:
            "Bezbłędne przeliczanie stężeń z wykorzystaniem gęstości (pamiętaj o dm³ vs cm³!), roztwarzanie hydratów typu CuSO₄·5H₂O oraz bilans masy przy krystalizacji.",
          contentHtml:
            "<p>Zależność między stężeniem molowym <strong>C<sub>m</sub></strong> [mol/dm³] a stężeniem procentowym <strong>C<sub>p</sub></strong> [%] wyraża wzór: <code>C<sub>m</sub> = (C<sub>p</sub> · d) / (M · 100%)</code>, gdzie bezwzględnie trzeba uzgodnić jednostki gęstości (g/dm³ dla wyniku w mol/dm³ — dlatego gęstość z tablic w g/cm³ mnożymy razy 1000 cm³/dm³ lub pracujemy na próbie 1 dm³ = 1000·d gramów roztworu).</p><p>W zadaniach z <strong>hydratami</strong> (np. CuSO₄·5H₂O) woda krystalizacyjna przechodzi do masy rozpuszczalnika, natomiast w roli czystej substancji rozpuszczonej liczymy wyłącznie masę soli bezwodnej <strong>m(CuSO₄)</strong>!</p>",
          keyTakeaways: [
            "Przy hydratach: m_s (substancja) = n(hydratu) · M(soli bezwodnej), a m_r (całkowita) powiększa się o całą dodaną masę hydratu.",
            "Przy krystalizacji po ochłodzeniu zmniejsza się jednocześnie masa soli w roztworze (o wykrystalizowany osad soli bezwodnej lub hydratu) i masa samego roztworu!",
            "Przeliczając g/cm³ na masę 1 dm³ roztworu, 1 dm³ = 1000 cm³, czyli gęstość 1,18 g/cm³ daje 1180 g/dm³.",
          ],
          ckeTraps: [
            {
              mistake:
                "Wstawienie całej masy hydratu CuSO₄·5H₂O jako masy czystego CuSO₄ w liczniku stężenia procentowego Cp.",
              modelAnswer:
                "Obliczenie masy samej soli bezwodnej M(CuSO₄)/M(CuSO₄·5H₂O) jako ms; do wody rozpuszczalnika zalicza się 5 moli wody krystalizacyjnej.",
              whyZeroPoints:
                "Stężenie procentowe Cp w zadaniach na roztwory soli zawsze wyraża się w przeliczeniu na sól bezwodną (chyba że treść zadania stanowi wprost inaczej).",
            },
            {
              mistake:
                "Przy wytrącaniu osadu po ochłodzeniu roztworu nasyconego odjęcie wykrystalizowanej masy tylko od ms, bez zmniejszenia masy roztworu mr.",
              modelAnswer:
                "W równaniu końcowym po ochłodzeniu odejmujemy masę kryształów (w tym wody z hydratu!) zarówno od całkowitej masy roztworu mr, jak i składnika rozpuszczonego.",
              whyZeroPoints:
                "Błędny mianownik (pozostawienie masy gorącego roztworu) fałszuje bilans rozpuszczalności.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2022 (Formuła 2015)",
              href: "/matura/chemia?arkusz=chemia-2022-maj-f2015",
              taskHint: "Przeliczanie stężeń Cp/Cm z gęstością oraz bilans masy hydratów",
            },
          ],
          recallChecklist: [
            "Przy C_m → C_p przyjmuję próbkę 1 dm³ roztworu (1000 · d [g]), co eliminuje błędy jednostek.",
            "Oddzielam masę soli bezwodnej od wody krystalizacyjnej dla każdego hydratu.",
            "Na krzywej rozpuszczalności pamiętam, że wartość dotyczy masy substancji na 100 g rozpuszczalnika (wody), a nie 100 g roztworu.",
          ],
        },
      ],
    },
    {
      id: "chem-mod-3",
      title:
        "Moduł 3: Kinetyka, Termochemia, Równowaga i Roztwory Wodne (pH, Bufory, Hydroliza)",
      lessons: [
        {
          id: "chem-m3-l1",
          title:
            "Kinetyka (szybkość v, kataliza) oraz Termochemia i Prawo Hessa",
          duration: "26 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia/chem1-czesc-158-cieplo-reakcji-chemicznej-entalpia-i-prawo-hessa",
          summary:
            "Obniżenie energii aktywacji przez katalizator bez zmiany entalpii ΔH oraz dwa fundamentalne wzory obliczeniowe Prawa Hessa (Formuła 2023+).",
          figureId: "fig-chem-profil-energetyczny",
          contentHtml:
            "<p><strong>Katalizator</strong> obniża energię aktywacji reakcji w obu kierunkach (w prawo i w lewo) o tę samą wartość ΔEa, otwierając alternatywną drogę o niższym progu energetycznym kompleksu aktywnego. Dzięki temu zwiększa szybkość v₁ i v₂ oraz przyspiesza dojście do równowagi, lecz <strong>nie przesuwa położenia równowagi ani nie zmienia stałej Kc i efektu cieplnego ΔH</strong>.</p><p>W obliczeniach <strong>Prawa Hessa</strong> stosuj precyzyjnie znak i współczynniki stechiometryczne: <code>ΔH° = ∑ n·ΔH°tw(produktów) − ∑ m·ΔH°tw(substratów)</code>. Standardowa entalpia tworzenia pierwiastków w trwałym stanie podstawowym (np. O₂(g), N₂(g), C(grafit)) wynosi dokładnie <strong>0 kJ/mol</strong>.</p>",
          keyTakeaways: [
            "Dla reakcji egzotermicznej ΔH < 0 (układ oddaje ciepło do otoczenia); dla endotermicznej ΔH > 0.",
            "Dla entalpii spalania kierunek odejmowania się odwraca: ΔH° = ∑ substraty − ∑ produkty.",
            "Katalizator nie wpływa na wydajność równowagową produktu, a jedynie na czas dojścia do równowagi.",
          ],
          ckeTraps: [
            {
              mistake:
                "Dodanie katalizatora zwiększyło równowagową zawartość amoniaku i obniżyło ΔH reakcji.",
              modelAnswer:
                "Katalizator zmniejsza wyłącznie energię aktywacji Ea w obu kierunkach, przyspieszając osiągnięcie równowagi, bez zmiany wartości ΔH oraz składu równowagowego.",
              whyZeroPoints:
                "Klucz CKE traktuje katalizator w układzie zamkniętym jako czynnik wyłącznie kinetyczny, nigdy termodynamiczny.",
            },
            {
              mistake:
                "Wartość entalpii ΔH tworzenia gazu N₂(g) lub stałego grafitu jest dodatnia w zadaniu z Prawa Hessa.",
              modelAnswer:
                "Standardowa entalpia tworzenia pierwiastka w jego najtrwalszej postaci alotropowej i stanie skupienia w warunkach standardowych wynosi 0 kJ/mol.",
              whyZeroPoints:
                "Brak znajomości zerowych entalpii odniesienia zatrzymuje rachunki dla całych cykli spalania i syntezy.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2023 (Formuła 2023+)",
              href: "/matura/chemia?arkusz=chemia-2023-maj-f2023",
              taskHint: "Zwróć uwagę na zadania z profilem energetycznym oraz Prawem Hessa",
            },
          ],
          recallChecklist: [
            "Wykładnia profilu energetycznego: ΔH to różnica między poziomem produktów a substratów, niezależna od katalizatora.",
            "Pamiętam odwrócenie znaku przy korzystaniu z entalpii spalania vs entalpii tworzenia.",
            "Dla H₂O(g) vs H₂O(c) zawsze weryfikuję stan skupienia przy dobieraniu ΔH°tw z tablic.",
          ],
        },
        {
          id: "chem-m3-l2",
          title:
            "Roztwory wodne: pH, prawo Ostwalda, hydroliza soli, bufory i iloczyn rozpuszczalności Kso",
          duration: "32 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia-matura-2023/cm23-cke-chem-seed-kso-hydroliza-2023",
          summary:
            "Kiedy wolno stosować uproszczony wzór Ostwalda (c/K > 400), punkt połowy miareczkowania buforów (pH = pKa), jonowe równania hydrolizy oraz Kso (2023+).",
          figureId: "fig-chem-miareczkowanie-bufory",
          contentHtml:
            "<p>W zadaniach obliczeniowych na <strong>pH słabego kwasu (HA)</strong> lub słabej zasady zawsze zweryfikuj warunek przybliżenia w prawie rozcieńczeń Ostwalda: jeśli stosunek <code>c₀ / Ka ≥ 400</code> (α ≤ 5%), możesz przyjąć <code>[H⁺] = √(Ka · c₀)</code>; w przeciwnym razie rozwiąż pełne równanie kwadratowe <code>Ka = [H⁺]² / (c₀ − [H⁺])</code>!</p><p>W <strong>hydrolizie soli</strong> nie pisz strzałki w jedną stronę dla kwasu czy zasady — reagują wyłącznie jony pochodzące od słabego elektrolitu z wodą w sposób odwracalny (np. <code>CH₃COO⁻ + H₂O ⇄ CH₃COOH + OH⁻</code> → odczyn zasadowy, pH > 7). W nowej Formule 2023+ obowiązuje ponadto <strong>iloczyn rozpuszczalności Kso</strong> (AB: S²; AB₂/A₂B: 4S³) i efekt wspólnego jonu.</p>",
          keyTakeaways: [
            "Stałe dysocjacji Ka, Kb, Kw, iloczyn rozpuszczalności Kso oraz stała Kc zależą WYŁĄCZNIE od temperatury.",
            "Przy miareczkowaniu słabego kwasu mocną zasadą punkt równoważnikowy ma pH > 7 (wybierz fenoloftaleinę!), a w połowie drogi [HA] = [A⁻], więc pH = pKa.",
            "Roztwór buforowy utrzymuje stałe pH w obecności małych ilości mocnych kwasów i zasad (np. układ CH₃COOH / CH₃COO⁻).",
          ],
          ckeTraps: [
            {
              mistake:
                "Zastosowanie wzoru uproszczonego [H⁺] = √(Ka · c₀) dla kwasu mrówkowego o stężeniu 0,01 mol/dm³ (c₀/Ka ≈ 55 < 400).",
              modelAnswer:
                "Jawny zapis warunku α ≤ 5% (lub c₀/Ka ≥ 400); po jego niespełnieniu rozwiązanie równania kwadratowego [H⁺]² + Ka[H⁺] − Ka·c₀ = 0.",
              whyZeroPoints:
                "Błąd przybliżenia przy zbyt małym stosunku c₀/Ka zawyża stężenie jonów wodorowych ponad tolerancję klucza CKE.",
            },
            {
              mistake:
                "Wskazanie oranżu metylowego do detekcji punktu równoważnikowego miareczkowania CH₃COOH za pomocą NaOH.",
              modelAnswer:
                "W punkcie równoważnikowym powstaje sól mocnej zasady i słabego kwasu (CH₃COONa), która hydrolizuje zasadowo (pH ≈ 8,7), dlatego właściwym wskaźnikiem jest fenoloftaleina.",
              whyZeroPoints:
                "Oranż metylowy zmienia barwę w zakresie silnie kwasowym (pH 3,1–4,4), znacznie przed osiągnięciem punktu stechiometrycznego.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2024 (pH, równowagi, Kso)",
              href: "/matura/chemia?arkusz=chemia-2024-maj-f2023",
              taskHint: "Zwróć uwagę na warunek c/Ka ≥ 400 oraz równania hydrolizy",
            },
            {
              label: "Arkusz CKE Chemia — Maj 2021 (F2015)",
              href: "/matura/chemia?arkusz=chemia-2021-maj-f2015",
              taskHint: "Klasyczne obliczenia buforowe i pH w kluczu CKE",
            },
          ],
          recallChecklist: [
            "Przed uproszczeniem prawa Ostwalda zawsze dzielę c₀/Ka (czy ≥ 400).",
            "Zapisuję równania hydrolizy w formie jonowej skróconej wyłącznie z udziałem słabego jonu i strzałką odwracalną ⇄.",
            "Pamiętam wzory rozpuszczalności Kso dla soli AB (S²) oraz AB₂ / A₂B (4S³).",
          ],
        },
      ],
    },
    {
      id: "chem-mod-4",
      title: "Moduł 4: Reakcje Redoks i Elektrochemia (Ogniwa Galwaniczne)",
      lessons: [
        {
          id: "chem-m4-l1",
          title:
            "Bilans jonowo-elektronowy redoks (KMnO₄, K₂Cr₂O₇, H₂O₂) i reguła Le Chateliera",
          duration: "27 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia-matura-2023/cm23-cke-chem-seed-redoks-ogniwa-core",
          summary:
            "Bezkonfliktowy bilans półreakcji w środowisku kwasowym (H⁺/H₂O) oraz zasadowym (OH⁻/H₂O), rola pH dla MnO₄⁻ i odczynnika K₂Cr₂O₇.",
          figureId: "fig-chem-rownowaga-le-chatelier",
          contentHtml:
            "<p>W bilansie jonowo-elektronowym <strong>nie dopisuj swobodnie cząsteczek H⁺ w środowisku zasadowym ani OH⁻ w kwasowym!</strong> W środowisku kwasowym niedobór tlenu uzupełniamy wodą po odpowiedniej stronie, a wodór wyrównujemy kationami H⁺. W środowisku zasadowym nadmiar tlenu wyrównujemy cząsteczkami H₂O po stronie z większą liczbą atomów O i podwójną liczbą jonów OH⁻ po stronie przeciwnej.</p><p>Zapamiętaj na pamięć redukcję nadmanganianu(VII) w zależności od odczynu: w środowisku <strong>kwasowym</strong> fioletowy MnO₄⁻ przechodzi w bezbarwny <strong>Mn²⁺</strong>; w <strong>obojętnym/słabo zasadowym</strong> strąca się brunatny <strong>MnO₂↓</strong>; w <strong>silnie zasadowym</strong> roztwór przyjmuje barwę zieloną od <strong>MnO₄²⁻</strong>.</p>",
          keyTakeaways: [
            "Woda utleniona H₂O₂ może pełnić zarówno rolę reduktora (utlenia się do O₂↑), jak i utleniacza (redukuje się do H₂O / OH⁻).",
            "Dwuchromian(VI) w środowisku kwasowym zmienia barwę z pomarańczowej (Cr₂O₇²⁻) na szmaragdowozieloną (Cr³⁺).",
            "W regule przekory dodanie stałego substratu lub produktu NIE zmienia stężenia ani nie przesuwa równowagi, jeśli stężenie ciała stałego jest stałe.",
          ],
          ckeTraps: [
            {
              mistake:
                "W równaniu redukcji MnO₄⁻ w środowisku zasadowym napisanie produktów z H⁺ w roztworze NaOH.",
              modelAnswer:
                "Użycie wyłącznie jonów OH⁻ i cząsteczek H₂O po odpowiednich stronach: MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂ + 4 OH⁻.",
              whyZeroPoints:
                "W środowisku zasadowym stężenie jonów wodorowych H⁺ jest śladowe — obecność H⁺ jako substratu/produktu wyklucza zaliczenie równania jonowego.",
            },
            {
              mistake:
                "Dodanie nadmiaru rozdrobnionego CaCO₃(s) do zamkniętego naczynia przesunie równowagę rozkładu termicznego w prawo.",
              modelAnswer:
                "Dla układu heterogenicznego CaCO₃(s) ⇄ CaO(s) + CO₂(g) wyrażenie na Kc = [CO₂] nie zawiera ciał stałych, więc dorzucenie stałego substratu nie przesuwa równowagi.",
              whyZeroPoints:
                "Wstawienie ciał stałych lub czystych rozpuszczalników do wyrażenia na stałą równowagi Kc.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2020 (F2015)",
              href: "/matura/chemia?arkusz=chemia-2020-maj-f2015",
              taskHint: "Złożone równania redoks w różnych środowiskach pH i zadania ze stałą Kc",
            },
          ],
          recallChecklist: [
            "Rozpoznaję barwy związków Mn (+VII fioletowy, +VI zielony, +IV brunatny osad, +II bezbarwny/bladoróżowy) i Cr (+VI pomarańczowy/żółty, +III zielony).",
            "Nigdy nie umieszczam ciał stałych w wyrażeniu na stałą Kc / Kp.",
            "Potrafię zbilansować osobno półreakcję utleniania i redukcji przed sumowaniem.",
          ],
        },
        {
          id: "chem-m4-l2",
          title:
            "Ogniwa galwaniczne, szereg napięciowy, obliczanie SEM i schemat ogniwa",
          duration: "25 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia-matura-2023/cm23-cke-chem-seed-redoks-ogniwa-core",
          summary:
            "Zasada wyznaczania anody i katody po potencjałach standardowych E°, zapis konwencji IUPAC schematu ogniwa, rola klucza elektrolitycznego i kierunek przepływu elektronów.",
          figureId: "fig-chem-ogniwo-daniella",
          contentHtml:
            "<p>W każdym ogniwie galwanicznym pracującym samorzutnie półogniwo o <strong>niższym potencjale standardowym E°</strong> pełni rolę <strong>anody (⊖)</strong>, na której zachodzi <strong>utlenianie</strong> (rozpuszczanie metalu do roztworu i ubytek masy elektrody lub oddawanie elektronów). Półogniwo o <strong>wyższym potencjale E°</strong> jest <strong>katodą (⊕)</strong>, na której zachodzi <strong>redukcja</strong>.</p><p>Elektrony płyną w obwodzie zewnętrznym (drucie) zawsze <strong>od anody (⊖) do katody (⊕)</strong>. Aby ogniwo pracowało, oba roztwory musi łączyć <strong>klucz elektrolityczny</strong> (umożliwiający migrację jonów w celu zachowania obojętności elektrycznej obu półogniw). Siła elektromotoryczna wynosi: <code>SEM = E°katody − E°anody > 0</code>.</p>",
          keyTakeaways: [
            "W konwencji zapisu schematu ogniwa po lewej stronie zapisujemy zawsze anodę (utlenianie), a po prawej katodę (redukcję), rozdzielone kluczem „||”.",
            "Jeśli metal o niższym potencjale wypiera inny z soli, reakcja zachodzi samorzutnie.",
            "Zmiana współczynników stechiometrycznych w równaniu sumarycznym NIE zmienia wartości potencjału standardowego E° półogniwa!",
          ],
          ckeTraps: [
            {
              mistake:
                "Pomnożenie potencjału E° razy 2 przy bilansowaniu liczby elektronów w reakcji 2 Ag⁺ + Zn → 2 Ag + Zn²⁺.",
              modelAnswer:
                "Potencjał standardowy E° jest wielkością intensywną (niezależną od współczynników równania): SEM = +0,80 V − (−0,76 V) = 1,56 V.",
              whyZeroPoints:
                "Najczęstszy błąd rachunkowy w elektrochemii — mnożenie E° podczas równoważenia elektronów natychmiast zeruje obliczenie SEM.",
            },
            {
              mistake:
                "W ogniwie galwanicznym katoda ma znak ujemny (⊖), jak w elektrolizerze.",
              modelAnswer:
                "Katoda jest elektrodą redukcji w obu urządzeniach, lecz w samorzutnym ogniwie galwanicznym ma biegun dodatni (⊕), a anoda — ujemny (⊖).",
              whyZeroPoints:
                "Pomylenie biegunowości ogniwa galwanicznego z elektrolizerem.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2024 (Elektrochemia i redoks)",
              href: "/matura/chemia?arkusz=chemia-2024-maj-f2023",
              taskHint: "Zweryfikuj poprawność schematu ogniwa oraz znaku potencjałów",
            },
          ],
          recallChecklist: [
            "Anoda = niższy E°, utlenianie, biegun (⊖) w ogniwie; Katoda = wyższy E°, redukcja, biegun (⊕).",
            "Nigdy nie mnożę wartości E° przy wyliczaniu SEM.",
            "Pamiętam funkcję klucza elektrolitycznego (wyrównanie ładunków jonowych między półogniwami).",
          ],
        },
      ],
    },
    {
      id: "chem-mod-5",
      title: "Moduł 5: Chemia Organiczna, Izomeria i Szlaki Syntez CKE",
      lessons: [
        {
          id: "chem-m5-l1",
          title:
            "Mechanizmy SR, AE, SE (efekt kierujący w arenie) i stereoizomeria optyczna (2023+)",
          duration: "30 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia-matura-2023/cm23-cke-chem-seed-izomeria-optyczna-2023",
          summary:
            "Substytucja rodnikowa, addycja według Markownikowa, kierowanie orto/para vs meta w pierścieniu benzenowym oraz projekcje Fischera, enancjomery i forma mezo.",
          contentHtml:
            "<p>Wybór mechanizmu w chemii organicznej zależy od warunków: światło UV (<strong>hν</strong>) inicjuje <strong>substytucję rodnikową (SR)</strong> przy atomach C(sp³) o jak najwyższej rzędowości (<em>C III° > II° > I°</em>). W obecności kwasów Lewisa (<strong>FeCl₃/FeBr₃</strong>) pierścień aromatyczny ulega <strong>substytucji elektrofilowej (SE)</strong> — grupy alkilowe, −OH, −NH₂ i halogeny kierują w położenia <em>orto/para</em>, natomiast grupy −NO₂, −COOH, −CHO i −SO₃H kierują w <em>meta</em>.</p><p>W <strong>Formule 2023+</strong> pamiętaj o centrum chiralności <strong>C*</strong> (4 różne podstawniki): mieszanina równomolowa pary niepokrywających się odbić lustrzanych (<strong>enancjomerów</strong>) to nieczynny optycznie racemat, a izomer z 2+ centrami C* i wewnętrzną płaszczyzną symetrii to achiralna <strong>forma mezo</strong>.</p>",
          keyTakeaways: [
            "Reguła Markownikowa: w addycji HX/H₂O atom wodoru przyłącza się do węgla wiązania C=C bogatszego w wodór.",
            "Toluen + Cl₂ / hν → chlorek benzylu (łańcuch boczny, SR); Toluen + Cl₂ / FeCl₃ → mieszanina o- i p-chlorotoluenu (pierścień, SE).",
            "W projekcji Fischera białkowy/cukrowy szereg D/L określa się przy najniżej położonym asymetrycznym atomie węgla (po prawej → D, po lewej → L).",
          ],
          ckeTraps: [
            {
              mistake:
                "Każdy związek zawierający dwa asymetryczne atomy węgla C* tworzy 2² = 4 czynne optycznie stereoizomery.",
              modelAnswer:
                "Jeśli cząsteczka ma identyczne podstawniki przy obu C*, dwa wzory zbiegają się w jedną achiralną i nieczynną optycznie formę mezo (łącznie tylko 3 stereoizomery, jak w kwasie winowym).",
              whyZeroPoints:
                "Mechaniczne stosowanie reguły 2ⁿ bez sprawdzenia obecności wewnętrznej płaszczyzny symetrii.",
            },
            {
              mistake:
                "Nitrowanie nitrobenzenu daje głównie 1,2- i 1,4-dinitrobenzen, ponieważ grupa −NO₂ aktywuje sąsiednie pozycje.",
              modelAnswer:
                "Grupa nitrowa jest podstawnikiem II rodzaju dezaktywującym pierścień i kierującym kolejny elektrofil w położenie meta (1,3-dinitrobenzen).",
              whyZeroPoints:
                "Odwrócenie reguły kierowania podstawników I vs II rodzaju w pierścieniu aromatycznym.",
            },
          ],
          ckePractice: [
            {
              label: "Arkusz CKE Chemia — Maj 2023 (Izomeria, mechanizmy SR/SE)",
              href: "/matura/chemia?arkusz=chemia-2023-maj-f2023",
              taskHint: "Zwróć uwagę na chiralność i stereochemię w Nowej Formule",
            },
          ],
          recallChecklist: [
            "Rozróżniam automatycznie warunki SR (hν, łańcuch alkilowy) od SE (katalizator FeBr₃/AlCl₃, pierścień arenowy).",
            "Potrafię narysować projekcję Fischera cukru/hydroksykwasu i określić konfigurację D/L.",
            "Sprawdzam obecność płaszczyzny symetrii przed uznaniem cząsteczki za czynną optycznie (forma mezo!).",
          ],
        },
        {
          id: "chem-m5-l2",
          title:
            "Szlaki syntez CKE i reakcje odróżniające (CuO, Cu(OH)₂, Tollens, Trommer, Br₂/H₂O)",
          duration: "29 min",
          isFreePreview: false,
          relatedTheoryPath:
            "/theory/chemia-matura-2023/cm23-cke-chem-seed-aldehydy-ketony-core",
          summary:
            "Strategia rozwiązywania wieloetapowych ciągów przemian organicznych oraz odróżnianie alkoholi I/II/III°, fenoli, aldehydów, ketonów, kwasu mrówkowego i cukrów.",
          contentHtml:
            "<p>Rozwiązując wieloetapowy <strong>schemat syntezy CKE</strong>, pracuj jednocześnie od końca (retrosynteza) i pilnuj liczby atomów węgla w każdym kroku: wydłużenie łańcucha to np. estryfikacja lub reakcja chlorowcopochodnej, a zachowanie szkieletu to zmiana stopnia utlenienia grupy funkcyjnej (alken → alkohol → aldehyd/keton → kwas karboksylowy → sól).</p><p>W <strong>projektowaniu doświadczeń odróżniających</strong> w jednym równaniu klucz CKE oczekuje poprawnych obserwacji w obu probówkach (zarówno tam, gdzie zachodzi reakcja, jak i tam, gdzie <em>„brak objawów reakcji”</em>) oraz pełnego bilansu jonowego lub cząsteczkowego w warunkach podanych w zadaniu.</p>",
          keyTakeaways: [
            "Woda bromowa Br₂(aq) na zimno odróżnia glukozę (aldozę — odbarwienie roztworu!) od fruktozy (ketozy — brak reakcji), mimo że oba dają dodatnią próbę Trommera.",
            "Świeżo strącony Cu(OH)₂ na zimno roztwarza się z utworzeniem szafirowego roztworu przy obecności sąsiednich grup −OH (glikol, glicerol, cukry) i daje fioletowe zabarwienie w próbie biuretowej białek/peptydów.",
            "Kwas mrówkowy HCOOH ma w budowie jednocześnie fragment −CHO i −COOH, więc jako jedyny kwas monokarboksylowy daje pozytywną próbę Tollensa i Trommera.",
          ],
          ckeTraps: [
            {
              mistake:
                "Próba Trommera lub Tollensa pozwala odróżnić glukozę od fruktozy w środowisku zasadowym.",
              modelAnswer:
                "W zasadowym środowisku obu prób fruktoza izomeryzuje (enolizuje) do glukozy i mannozy, dając wynik pozytywny (ceglasty osad Cu₂O / lustro Ag); do ich odróżnienia służy woda bromowa (Br₂/H₂O).",
              whyZeroPoints:
                "Fruktoza mimo bycia ketozą jest cukrem redukującym w roztworze zasadowym!",
            },
            {
              mistake:
                "W opisie doświadczenia wskazanie tylko obserwacji w probówce nr 1 (gdzie zaszła reakcja), z pominięciem probówki nr 2.",
              modelAnswer:
                "Zapisanie obserwacji dla obu probówek, np. „W probówce z etanalem powstaje ceglastoczerwony osad Cu₂O, natomiast w probówce z propanonem zawiesina pozostaje bez zmian (brak ceglastoczerwonego osadu)”.",
              whyZeroPoints:
                "W kluczu CKE dla zadań typu „Zaprojektuj doświadczenie i opisz obserwacje” brak opisu próby negatywnej pozbawia punktu za obserwacje.",
            },
          ],
          ckePractice: [
            {
              label: "Rozwiąż 1:1 — Arkusz CKE Chemia Maj 2024",
              href: "/matura/chemia?arkusz=chemia-2024-maj-f2023",
              taskHint: "Pełne ciągi przemian organicznych i doświadczenia analityczne",
            },
            {
              label: "Rozwiąż 1:1 — Arkusz CKE Chemia Maj 2022 (F2015)",
              href: "/matura/chemia?arkusz=chemia-2022-maj-f2015",
              taskHint: "Klasyczne schematy syntez organicznych i obliczenia",
            },
          ],
          recallChecklist: [
            "W każdej próbie odróżniającej podaję obserwacje z OBU probówek.",
            "Rozróżniam zastosowanie wody bromowej vs próby Trommera dla aldoz i ketoz.",
            "Kontroluję w próbie Tollensa/Trommera obecność środowiskowego OH⁻ (powstaje anion karboksylanowy R-COO⁻, a w Tollensie wydziela się NH₃).",
          ],
        },
      ],
    },
  ],
});

const SPORT_HEALTH_COURSES: SportNotesCourse[] = [
  {
    id: "course-anatomia-biomechanika",
    slug: "anatomia-funkcjonalna-i-biomechanika-ruchu",
    title: "Anatomia Funkcjonalna i Biomechanika Ruchu w Sporcie",
    subtitle:
      "Kompendium dla trenerów, fizjoterapeutów i pasjonatów treningu siłowego: dźwignie stawowe, łańcuchy mięśniowo-powięziowe oraz profilaktyka przeciążeń.",
    track: "sport-zdrowie",
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
              "Przerost ekscentryczny u biegaczy vs koncentryczny u ciężarowców oraz hemodynamika napełniania komór przy wysokim tętnie.",
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
    track: "sport-zdrowie",
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
              "/theory/biologia-matura-2023/bm23-bio3-czesc-66-czynniki-wplywajace-na-wiazanie-i-oddawanie-tlenu-przez-hemoglobine-oraz-wplyw-czynnikow-zewnetrznych-na-uklad-oddechowy",
            summary:
              "Jak wzrost temperatury mięśni, pCO₂ i kwasica mleczanowa przesuwają krzywą dysocjacji oksyhemoglobiny w prawo, ułatwiając oddawanie O₂.",
            contentHtml:
              "<p>W trakcie biegu tempowego temperatura pracujących mięśni wzrasta powyżej 39 °C, rośnie ciśnienie parcjalne CO<sub>2</sub> i spada pH. Zgodnie z <strong>efektem Bohra</strong> krzywa wysycenia hemoglobiny przesuwa się w prawo, uwalniając więcej tlenu w kapilarach bez ograniczania wysycenia krwi w płucach (plateau przy pO<sub>2</sub> ≈ 100 mmHg).</p>",
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
              "<p>Każdy ciężki bodziec aktywuje oś <strong>CRH → ACTH → kortyzol</strong> w celu mobilizacji substratów energetycznych. Bez zaplanowanych dni roztrenowania (<em>deload</em>) i higieny snu przewlekła hiperkortyzolemia tłumi syntezę białek mięśniowych.</p>",
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
    track: "sport-zdrowie",
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
              "<p>Wzrost stosunku AMP/ATP podczas długotrwałego biegu lub jazdy na rowerze aktywuje kinazę <strong>AMPK</strong> oraz koaktywator transkrypcji <strong>PGC-1α</strong>. Efektem adaptacyjnym jest biogeneza nowych mitochondriów i zagęszczenie kompleksów I–IV łańcucha transportu elektronów w wewnętrznej błonie mitochondrialnej.</p><p>Większa pula syntazy ATP (F<sub>0</sub>F<sub>1</sub>) pozwala mięśniom utrzymywać tę samą produkcję energii przy wyższym udziale β-oksydacji kwasów tłuszczowych i oszczędzaniu glikogenu wątrobowo-mięśniowego.</p>",
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
];

export const SPORTNOTES_COURSES: SportNotesCourse[] = [
  MATURA_BIOLOGIA_COURSE,
  MATURA_CHEMIA_COURSE,
  ...SPORT_HEALTH_COURSES,
];

export function getCourseBySlug(slug: string): SportNotesCourse | undefined {
  return SPORTNOTES_COURSES.find((course) => course.slug === slug);
}
