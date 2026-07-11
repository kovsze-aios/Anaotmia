import type { TextbookDomain } from "@/types/textbook";

export const chemiaTheory: TextbookDomain[] = [
  {
    id: "atom",
    title: "Budowa atomu i układ okresowy",
    shortTitle: "Budowa atomu",
    icon: "⚛️",
    sections: [
      {
        id: "struktura-atomu",
        title: "Struktura atomu",
        content: [
          {
            type: "paragraph",
            text: "Atom jest najmniejszą, niepodzielną metodami chemicznymi cząstką pierwiastka. Składa się z jądra atomowego (protony p⁺ i neutrony n⁰) oraz powłok elektronowych. Liczba atomowa (Z) określa liczbę protonów w jądrze — decyduje o przynależności do pierwiastka. Liczba masowa (A) to suma protonów i neutronów. Izotopy to atomy tego samego pierwiastka o różnej liczbie neutronów (różnej A), np. ¹²C, ¹³C, ¹⁴C.",
          },
          {
            type: "paragraph",
            text: "Konfiguracja elektronowa opisuje rozmieszczenie elektronów na powłokach (K, L, M, N...) i podpowłokach (s, p, d, f). Elektrony walencyjne (na ostatniej powłoce) decydują o właściwościach chemicznych pierwiastka. Rozmieszczenie elektronów podlega regułom: zakaz Pauliego (w orbitalu max 2 elektrony o przeciwnych spinach), reguła Hunda (w orbitalach o tej samej energii elektrony rozmieszczają się pojedynczo) oraz reguła przekory (najpierw obsadzane są orbitale o niższej energii).",
          },
          {
            type: "table",
            headers: ["Liczba", "Symbol", "Opis"],
            rows: [
              ["Atomowa", "Z", "Liczba protonów w jądrze — decyduje o pierwiastku"],
              ["Masowa", "A", "Suma protonów i neutronów (A = Z + N)"],
              ["Neutronów", "N", "Różnica A - Z (dla izotopów zmienna)"],
            ],
          },
        ],
        recallQuestions: [
          {
            id: "che-atom-1",
            question: "Napisz równanie rozpadu β⁻ izotopu kobaltu ⁶⁰₂₇Co. Jaki nuklid powstaje?",
            answer: "⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + ν̄ (powstaje nikiel-60, Z=28).",
            examRef: "CKE 2016",
          },
          {
            id: "che-atom-2",
            question: "Czym różnią się izotopy tego samego pierwiastka?",
            answer: "Liczbą neutronów (różna liczba masowa A), ale mają tę samą liczbę atomową Z, więc te same właściwości chemiczne.",
            examRef: "CKE 2015-2024",
          },
        ],
      },
    ],
  },
  {
    id: "stechiometria",
    title: "Stechiometria — obliczenia chemiczne",
    shortTitle: "Stechiometria",
    icon: "⚖️",
    sections: [
      {
        id: "mol-stechiometria",
        title: "Mol, masa molowa, objętość molowa",
        content: [
          {
            type: "paragraph",
            text: "Mol jest jednostką liczności materii w układzie SI. Jeden mol zawiera 6,022 × 10²³ cząstek (liczba Avogadra). Masa molowa (M) to masa 1 mola substancji, wyrażona w g/mol, liczbowo równa masie atomowej (dla pierwiastków) lub cząsteczkowej (dla związków). Objętość molowa gazów w warunkach normalnych (0°C, 1013 hPa) wynosi 22,4 dm³/mol. Prawo zachowania masy (Lavoisier): w reakcji chemicznej łączna masa substratów równa jest łącznej masie produktów.",
          },
        ],
        recallQuestions: [
          {
            id: "che-stech-1",
            question: "Oblicz, ile moli estru (octanu etylu) powstanie w stanie równowagi po zmieszaniu 1 mola kwasu octowego i 1 mola etanolu (Kc = 4,0).",
            answer: "Kc = x²/(1-x)² = 4,0 → x/(1-x) = 2 → x = 2/3 ≈ 0,67 mola.",
            examRef: "CKE 2016",
          },
        ],
      },
    ],
  },
  {
    id: "nieorganiczna",
    title: "Chemia nieorganiczna",
    shortTitle: "Nieorganiczna",
    icon: "🧪",
    sections: [
      {
        id: "kwasy-zasady",
        title: "Kwasy, zasady, sole — dysocjacja i pH",
        content: [
          {
            type: "paragraph",
            text: "Kwasy to substancje, które w roztworze wodnym dysocjują na kationy H⁺ (protony) i aniony reszty kwasowej. Zasady dysocjują na kationy metalu i aniony OH⁻. Teoria Brønsteda-Lowry'ego: kwas to donor protonu (H⁺), zasada to akceptor protonu. Moc kwasu zależy od stałej dysocjacji Ka — im wyższe Ka, tym mocniejszy kwas. pH = −log[H⁺]. Dla mocnych kwasów [H⁺] = stężenie kwasu, dla słabych zależy od Ka i stężenia. Roztwór obojętny ma pH = 7 w temp. 25°C.",
          },
          {
            type: "paragraph",
            text: "Reakcje zobojętniania: kwas + zasada → sól + woda. Amfoteryczność to zdolność niektórych tlenków i wodorotlenków (np. Al₂O₃, ZnO, Al(OH)₃, Zn(OH)₂) do reagowania zarówno z kwasami, jak i zasadami. Wodorotlenek glinu rozpuszcza się w kwasie: Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O oraz w zasadzie: Al(OH)₃ + NaOH → Na[Al(OH)₄] (tetrahydroksoglinian sodu).",
          },
          {
            type: "heading",
            level: 3,
            text: "Związki kompleksowe",
          },
          {
            type: "paragraph",
            text: "Związki kompleksowe (koordynacyjne) składają się z centralnego atomu/jonu metalu otoczonego ligandami (cząsteczkami lub jonami). Przykład: [Cu(NH₃)₄]²⁺ — tetraamminamiedź(II). Cu²⁺ tworzy z NH₃ rozpuszczalny kompleks, co jest podstawą reakcji identyfikacji jonów Cu²⁺. Podobnie Zn²⁺ tworzy [Zn(NH₃)₄]²⁺. Reakcja charakterystyczna: Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 2OH⁻ (granatowoniebieski roztwór).",
          },
        ],
        recallQuestions: [
          {
            id: "che-nieorg-1",
            question: "Oblicz pH 0,01 M roztworu NaOH oraz 0,005 M roztworu Ba(OH)₂.",
            answer: "NaOH: [OH⁻]=0,01 M → pOH=2 → pH=12. Ba(OH)₂: [OH⁻]=2×0,005=0,01 M → pOH=2 → pH=12. Oba mają pH=12.",
            examRef: "CKE 2016",
          },
          {
            id: "che-nieorg-2",
            question: "Wyjaśnij, dlaczego osad Cu(OH)₂ rozpuszcza się w nadmiarze amoniaku. Napisz reakcję.",
            answer: "Tworzy się rozpuszczalny kompleks [Cu(NH₃)₄]²⁺: Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 2OH⁻.",
            examRef: "CKE 2016",
          },
        ],
      },
    ],
  },
  {
    id: "organiczna",
    title: "Chemia organiczna",
    shortTitle: "Organiczna",
    icon: "🔬",
    sections: [
      {
        id: "weglowodory",
        title: "Węglowodory i ich reakcje",
        content: [
          {
            type: "paragraph",
            text: "Chemia organiczna zajmuje się związkami węgla. Atom węgla ma zdolność tworzenia długich łańcuchów (katenacja) oraz wiązań pojedynczych, podwójnych i potrójnych. Węglowodory dzielą się na nasycone (alkany — tylko wiązania pojedyncze C-C), nienasycone (alkeny — wiązania podwójne, alkiny — wiązania potrójne) oraz aromatyczne (areny — pierścienie z delokalizowanymi elektronami π).",
          },
          {
            type: "paragraph",
            text: "Alkany ulegają reakcjom substytucji (S) — głównie halogenowaniu. Alkeny ulegają addycji (A) — np. addycja bromu (próba na wiązanie nienasycone). Reakcja addycji 1,4 zachodzi dla dienów sprzężonych (np. buta-1,3-dien). Reakcje estryfikacji: kwas karboksylowy + alkohol → ester + woda. Reakcja odwracalna, katalizowana kwasem. Przykład: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.",
          },
          {
            type: "heading",
            level: 3,
            text: "Izomeria",
          },
          {
            type: "paragraph",
            text: "Związki organiczne wykazują zjawisko izomerii — różne struktury o tym samym wzorze sumarycznym. Izomeria konstytucyjna (różne ułożenie atomów): szkieletowa, położenia, funkcyjna. Stereizomeria: geometryczna (cis-trans, E-Z) i optyczna (enancjomery — związki chiralne, skręcają płaszczyznę światła spolaryzowanego).",
          },
        ],
        recallQuestions: [
          {
            id: "che-org-1",
            question: "Podaj nazwy systematyczne: CH≡C–CH₂–CH₃ i CH₂=CH–CH=CH₂. Który z nich ulega addycji 1,4 z bromem?",
            answer: "But-1-yn i buta-1,3-dien. Addycji 1,4 ulega buta-1,3-dien: CH₂Br–CH=CH–CH₂Br.",
            examRef: "CKE 2016",
          },
          {
            id: "che-org-2",
            question: "Napisz reakcję estryfikacji kwasu octowego z etanolem.",
            answer: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (octan etylu + woda). Reakcja odwracalna, katalizowana H⁺.",
            examRef: "CKE 2016",
          },
          {
            id: "che-org-3",
            question: "Czym różni się izomeria geometryczna (cis-trans) od optycznej?",
            answer: "Izomeria cis-trans wynika z braku rotacji wokół wiązania podwójnego. Izomeria optyczna wynika z obecności asymetrycznego atomu węgla (chiralność) — enancjomery są swoimi lustrzanymi odbiciami.",
            examRef: "CKE 2015-2024",
          },
        ],
      },
    ],
  },
];
