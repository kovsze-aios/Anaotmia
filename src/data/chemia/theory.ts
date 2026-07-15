import type { TextbookDomain } from "@/types/textbook";

export const chemiaTheory: TextbookDomain[] = [
  {
    "id": "atom",
    "title": "Budowa atomu i wiązania chemiczne",
    "shortTitle": "Budowa atomu",
    "icon": "⚛️",
    "sections": [
      {
        "id": "struktura-atomu",
        "title": "Struktura atomu — cząstki elementarne, izotopy, konfiguracja",
        "content": [
          {
            "type": "paragraph",
            "text": "Atom jest najmniejszą, niepodzielną metodami chemicznymi cząstką pierwiastka zachowującą jego właściwości. Składa się z jądra atomowego (średnica ~10⁻¹⁵ m) zawierającego protony (p⁺, masa ~1 u, ładunek +1) i neutrony (n⁰, masa ~1 u, bez ładunku) oraz powłok elektronowych (elektrony e⁻, masa ~1/1840 u, ładunek −1). Średnica atomu ~10⁻¹⁰ m — jądro jest ~100 000 razy mniejsze od atomu. Liczba atomowa Z (liczba protonów) jednoznacznie identyfikuje pierwiastek i określa jego miejsce w układzie okresowym. Liczba masowa A = Z + N (suma protonów i neutronów). Izotopy to atomy tego samego pierwiastka (to samo Z) o różnej liczbie neutronów (różne A), np. wodór: ¹H (prot), ²H (deuter D), ³H (tryt T — promieniotwórczy). Izotopy tego samego pierwiastka mają identyczne właściwości chemiczne (taka sama konfiguracja elektronowa) ale różne fizyczne (masa, gęstość, szybkość dyfuzji)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Liczby kwantowe i konfiguracja elektronowa"
          },
          {
            "type": "paragraph",
            "text": "Stan elektronu w atomie opisują cztery liczby kwantowe: główna n (1, 2, 3… — numer powłoki K, L, M, N…, określa energię i rozmiar orbitalu), poboczna (orbitalna) l (0, 1, …, n−1 — kształt orbitalu: l=0 → s, l=1 → p, l=2 → d, l=3 → f), magnetyczna m (od −l do +l — orientacja przestrzenna orbitalu), spinowa ms (+½, −½ — spin elektronu). Elektrony obsadzają orbitale według zasad: (a) Zakaz Pauliego — w danym atomie nie mogą istnieć 2 elektrony o identycznych wszystkich czterech liczbach kwantowych (maks. 2 elektrony w orbitalu, o przeciwnych spinach). (b) Reguła Hunda — elektrony obsadzają orbitale o tej samej energii pojedynczo, z równoległymi spinami, zanim zaczną tworzyć pary. (c) Reguła przekory — orbitale są obsadzane według wzrastającej energii (1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p…). Elektrony walencyjne (na najwyższej powłoce) i w podpowłoce d dla pierwiastków bloku d decydują o właściwościach chemicznych. Konfiguracja gazu szlachetnego (oktet — 8 elektronów na powłoce walencyjnej, oprócz helu — dublet 2) jest szczególnie stabilna."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Promieniotwórczość naturalna i sztuczna"
          },
          {
            "type": "paragraph",
            "text": "Promieniotwórczość (radioaktywność) to samorzutna przemiana jąder niestabilnych (radionuklidów) z emisją promieniowania. Rozpad α (jądro helu ⁴₂He²⁺): ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He — Z maleje o 2, A maleje o 4. Rozpad β⁻ (emisja elektronu z przemiany neutronu w proton): n → p + e⁻ + ν̄ (antyneutrino), Z wzrasta o 1, A bez zmian. Przykład: ⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + ν̄. Rozpad β⁺ (emisja pozytonu z przemiany protonu w neutron): p → n + e⁺ + ν (neutrino), Z maleje o 1. Wychwyt elektronu (EC — electron capture): jądro wychwytuje elektron z najbliższej powłoki (K), Z maleje o 1. Promieniowanie γ — wysokoenergetyczne fotony emitowane przy przechodzeniu jąder ze stanu wzbudzonego do podstawowego (często towarzyszy rozpadowi α lub β). Czas połowicznego rozpadu (okres półtrwania T₁/₂) — czas, po którym rozpadowi ulega połowa jąder. Szereg promieniotwórczy: uranowo-radowy (²³⁸U → … → ²⁰⁶Pb), uranowo-aktynowy (²³⁵U → … → ²⁰⁷Pb), torowy (²³²Th → … → ²⁰⁸Pb)."
          },
          {
            "type": "table",
            "headers": [
              "Liczba",
              "Symbol",
              "Znaczenie"
            ],
            "rows": [
              [
                "Główna kwantowa",
                "n = 1, 2, 3…",
                "Numer powłoki (K, L, M…), energia orbitalu"
              ],
              [
                "Poboczna (orbitalna)",
                "l = 0…(n−1)",
                "Typ orbitalu: s=0, p=1, d=2, f=3"
              ],
              [
                "Magnetyczna",
                "m = −l…+l",
                "Orientacja przestrzenna orbitalu"
              ],
              [
                "Spinowa",
                "ms = +½, −½",
                "Kierunek spinu elektronu"
              ]
            ]
          }
        ],
        "recallQuestions": [],
        "academic_detail": "Atom jest najmniejszą, niepodzielną metodami chemicznymi cząstką pierwiastka zachowującą jego właściwości. Składa się z jądra atomowego (średnica ~10⁻¹⁵ m) zawierającego protony (p⁺, masa ~1 u, ładunek +1) i neutrony (n⁰, masa ~1 u, bez ładunku) oraz powłok elektronowych (elektrony e⁻, masa ~1/1840 u, ładunek −1). Średnica atomu ~10⁻¹⁰ m — jądro jest ~100 000 razy mniejsze od atomu. Liczba atomowa Z (liczba protonów) jednoznacznie identyfikuje pierwiastek i określa jego miejsce w układzie okresowym. Liczba masowa A = Z + N (suma protonów i neutronów). Izotopy to atomy tego samego pierwiastka (to samo Z) o różnej liczbie neutronów (różne A), np. wodór: ¹H (prot), ²H (deuter D), ³H (tryt T — promieniotwórczy). Izotopy tego samego pierwiastka mają identyczne właściwości chemiczne (taka sama konfiguracja elektronowa) ale różne fizyczne (masa, gęstość, szybkość dyfuzji).\n\nStan elektronu w atomie opisują cztery liczby kwantowe: główna n (1, 2, 3… — numer powłoki K, L, M, N…, określa energię i rozmiar orbitalu), poboczna (orbitalna) l (0, 1, …, n−1 — kształt orbitalu: l=0 → s, l=1 → p, l=2 → d, l=3 → f), magnetyczna m (od −l do +l — orientacja przestrzenna orbitalu), spinowa ms (+½, −½ — spin elektronu). Elektrony obsadzają orbitale według zasad: (a) Zakaz Pauliego — w danym atomie nie mogą istnieć 2 elektrony o identycznych wszystkich czterech liczbach kwantowych (maks. 2 elektrony w orbitalu, o przeciwnych spinach). (b) Reguła Hunda — elektrony obsadzają orbitale o tej samej energii pojedynczo, z równoległymi spinami, zanim zaczną tworzyć pary. (c) Reguła przekory — orbitale są obsadzane według wzrastającej energii (1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p…). Elektrony walencyjne (na najwyższej powłoce) i w podpowłoce d dla pierwiastków bloku d decydują o właściwościach chemicznych. Konfiguracja gazu szlachetnego (oktet — 8 elektronów na powłoce walencyjnej, oprócz helu — dublet 2) jest szczególnie stabilna.\n\nPromieniotwórczość (radioaktywność) to samorzutna przemiana jąder niestabilnych (radionuklidów) z emisją promieniowania. Rozpad α (jądro helu ⁴₂He²⁺): ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He — Z maleje o 2, A maleje o 4. Rozpad β⁻ (emisja elektronu z przemiany neutronu w proton): n → p + e⁻ + ν̄ (antyneutrino), Z wzrasta o 1, A bez zmian. Przykład: ⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + ν̄. Rozpad β⁺ (emisja pozytonu z przemiany protonu w neutron): p → n + e⁺ + ν (neutrino), Z maleje o 1. Wychwyt elektronu (EC — electron capture): jądro wychwytuje elektron z najbliższej powłoki (K), Z maleje o 1. Promieniowanie γ — wysokoenergetyczne fotony emitowane przy przechodzeniu jąder ze stanu wzbudzonego do podstawowego (często towarzyszy rozpadowi α lub β). Czas połowicznego rozpadu (okres półtrwania T₁/₂) — czas, po którym rozpadowi ulega połowa jąder. Szereg promieniotwórczy: uranowo-radowy (²³⁸U → … → ²⁰⁶Pb), uranowo-aktynowy (²³⁵U → … → ²⁰⁷Pb), torowy (²³²Th → … → ²⁰⁸Pb).",
        "summary": "- Atom jest **najmniejszą**, __________ metodami chemicznymi cząstką pierwiastka zachowującą jego właściwości.\n- Składa się z jądra atomowego (średnica ~10⁻¹⁵ **m**) __________ protony (p⁺, masa ~1 u, ładunek +1) i neutrony (n⁰, masa ~1 u, bez ładunku) oraz powłok elektronowych (elektrony e⁻, masa ~1/1840 u, ładunek −1).\n- __________ atomu ~10⁻¹⁰ m — jądro jest ~100 000 razy mniejsze od atomu.\n- Liczba atomowa Z (liczba **protonów**) __________ identyfikuje pierwiastek i określa jego miejsce w układzie okresowym."
      },
      {
        "id": "wiazania-chemiczne",
        "title": "Wiązania chemiczne — typy i właściwości",
        "content": [
          {
            "type": "paragraph",
            "text": "Atomy łączą się w cząsteczki, osiągając trwałą konfigurację gazu szlachetnego (oktet — 8 elektronów walencyjnych, dla wodoru dublet — 2). Wiązanie jonowe powstaje przez elektrostatyczne przyciąganie się kationów i anionów (różnica elektroujemności ΔEN > 1,7 w skali Paulinga). Metale (mała EN) oddają elektrony → kationy, niemetale (duża EN) przyjmują elektrony → aniony. Związki jonowe tworzą sieci krystaliczne, mają wysokie temperatury topnienia i wrzenia, przewodzą prąd po stopieniu lub rozpuszczeniu, są kruche i rozpuszczalne w rozpuszczalnikach polarnych. Wiązanie kowalencyjne (atomowe) polega na uwspólnieniu pary elektronowej między atomami. Wiązanie kowalencyjne niespolaryzowane: ΔEN = 0 (np. H₂, Cl₂, O₂, N₂). Wiązanie kowalencyjne spolaryzowane: 0 < ΔEN < 1,7 (np. HCl, H₂O — przesunięcie pary elektronowej w stronę atomu o większej EN). Wiązanie koordynacyjne (donorowo-akceptorowe) — oba elektrony pochodzą od jednego atomu (donora), drugi atom (akceptor) udostępnia pusty orbital. Przykład: jon amonowy NH₄⁺ — N (donor) oddaje wolną parę elektronową jonowi H⁺ (akceptor). Wiązanie metaliczne — dodatnie zręby atomowe metalu otoczone są gazem (morzem) swobodnych elektronów, które mogą się przemieszczać, dając przewodnictwo elektryczne i cieplne oraz kowalność i ciągliwość."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Hybrydyzacja — teoria przykrywania orbitali"
          },
          {
            "type": "paragraph",
            "text": "Hybrydyzacja to mieszanie orbitali atomowych tego samego atomu prowadzące do powstania równocennych orbitali zhybrydyzowanych. Hybrydyzacja sp³ (1 orbital s + 3 orbitale p → 4 orbitale sp³ skierowane do naroży tetraedru, kąt 109,5°): CH₄, NH₃ (kąt 107° — odpychanie wolnej pary), H₂O (kąt 104,5° — 2 wolne pary). Hybrydyzacja sp² (1s + 2p → 3 orbitale sp² w płaszczyźnie, kąt 120° + 1 niezhybrydyzowany orbital p prostopadły): C₂H₄ (etylen), C₆H₆ (benzen — delokalizacja elektronów π). Hybrydyzacja sp (1s + 1p → 2 orbitale sp liniowe, kąt 180° + 2 niezhybrydyzowane p): C₂H₂ (acetylen/etyn), CO₂, BeCl₂. Hybrydyzacja d²sp³ (oktaedr) i sp³d² (oktaedr): [Fe(CN)₆]⁴⁻, SF₆. Hybrydyzacja dsp² (kwadrat): [Ni(CN)₄]²⁻, [Pt(NH₃)₂Cl₂]."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Oddziaływania międzycząsteczkowe"
          },
          {
            "type": "paragraph",
            "text": "Wiązanie wodorowe — oddziaływanie między atomem wodoru związanym z silnie elektroujemnym atomem (F, O, N) a wolną parą elektronową innego elektroujemnego atomu. Jest silniejsze od sił van der Waalsa (5-40 kJ/mol) ale słabsze od wiązań kowalencyjnych. Decyduje o anomalnych właściwościach wody (wysoka temperatura wrzenia, mniejsza gęstość lodu), strukturze DNA (pary komplementarne A=T, C≡G) i białek (α-helisa, β-harmonijka). Siły van der Waalsa: dyspersyjne Londona (chwilowe dipole indukowane — we wszystkich cząsteczkach, rosną z masą molową), dipol-dipol (między cząsteczkami polarnymi), dipol-dipol indukowany (cząsteczka polarna z niepolarną). Siła oddziaływań międzycząsteczkowych rośnie w szeregu: Londona < dipol-dipol < wiązanie wodorowe < wiązanie jonowe."
          }
        ],
        "recallQuestions": [],
        "academic_detail": "Atomy łączą się w cząsteczki, osiągając trwałą konfigurację gazu szlachetnego (oktet — 8 elektronów walencyjnych, dla wodoru dublet — 2). Wiązanie jonowe powstaje przez elektrostatyczne przyciąganie się kationów i anionów (różnica elektroujemności ΔEN > 1,7 w skali Paulinga). Metale (mała EN) oddają elektrony → kationy, niemetale (duża EN) przyjmują elektrony → aniony. Związki jonowe tworzą sieci krystaliczne, mają wysokie temperatury topnienia i wrzenia, przewodzą prąd po stopieniu lub rozpuszczeniu, są kruche i rozpuszczalne w rozpuszczalnikach polarnych. Wiązanie kowalencyjne (atomowe) polega na uwspólnieniu pary elektronowej między atomami. Wiązanie kowalencyjne niespolaryzowane: ΔEN = 0 (np. H₂, Cl₂, O₂, N₂). Wiązanie kowalencyjne spolaryzowane: 0 < ΔEN < 1,7 (np. HCl, H₂O — przesunięcie pary elektronowej w stronę atomu o większej EN). Wiązanie koordynacyjne (donorowo-akceptorowe) — oba elektrony pochodzą od jednego atomu (donora), drugi atom (akceptor) udostępnia pusty orbital. Przykład: jon amonowy NH₄⁺ — N (donor) oddaje wolną parę elektronową jonowi H⁺ (akceptor). Wiązanie metaliczne — dodatnie zręby atomowe metalu otoczone są gazem (morzem) swobodnych elektronów, które mogą się przemieszczać, dając przewodnictwo elektryczne i cieplne oraz kowalność i ciągliwość.\n\nHybrydyzacja to mieszanie orbitali atomowych tego samego atomu prowadzące do powstania równocennych orbitali zhybrydyzowanych. Hybrydyzacja sp³ (1 orbital s + 3 orbitale p → 4 orbitale sp³ skierowane do naroży tetraedru, kąt 109,5°): CH₄, NH₃ (kąt 107° — odpychanie wolnej pary), H₂O (kąt 104,5° — 2 wolne pary). Hybrydyzacja sp² (1s + 2p → 3 orbitale sp² w płaszczyźnie, kąt 120° + 1 niezhybrydyzowany orbital p prostopadły): C₂H₄ (etylen), C₆H₆ (benzen — delokalizacja elektronów π). Hybrydyzacja sp (1s + 1p → 2 orbitale sp liniowe, kąt 180° + 2 niezhybrydyzowane p): C₂H₂ (acetylen/etyn), CO₂, BeCl₂. Hybrydyzacja d²sp³ (oktaedr) i sp³d² (oktaedr): [Fe(CN)₆]⁴⁻, SF₆. Hybrydyzacja dsp² (kwadrat): [Ni(CN)₄]²⁻, [Pt(NH₃)₂Cl₂].\n\nWiązanie wodorowe — oddziaływanie między atomem wodoru związanym z silnie elektroujemnym atomem (F, O, N) a wolną parą elektronową innego elektroujemnego atomu. Jest silniejsze od sił van der Waalsa (5-40 kJ/mol) ale słabsze od wiązań kowalencyjnych. Decyduje o anomalnych właściwościach wody (wysoka temperatura wrzenia, mniejsza gęstość lodu), strukturze DNA (pary komplementarne A=T, C≡G) i białek (α-helisa, β-harmonijka). Siły van der Waalsa: dyspersyjne Londona (chwilowe dipole indukowane — we wszystkich cząsteczkach, rosną z masą molową), dipol-dipol (między cząsteczkami polarnymi), dipol-dipol indukowany (cząsteczka polarna z niepolarną). Siła oddziaływań międzycząsteczkowych rośnie w szeregu: Londona < dipol-dipol < wiązanie wodorowe < wiązanie jonowe.",
        "summary": "- Atomy łączą się w cząsteczki, osiągając **trwałą** __________ gazu szlachetnego (oktet — 8 elektronów walencyjnych, dla wodoru dublet — 2).\n- Wiązanie jonowe powstaje **przez** __________ przyciąganie się kationów i anionów (różnica elektroujemności ΔEN > 1,7 w skali Paulinga).\n- Metale (mała EN) **oddają** __________ → kationy, niemetale (duża EN) przyjmują elektrony → aniony.\n- Związki jonowe tworzą sieci krystaliczne, mają wysokie temperatury topnienia i wrzenia, przewodzą prąd po stopieniu lub rozpuszczeniu, są kruche i rozpuszczalne **w** __________ polarnych."
      },
      {
        "id": "cke-questions-grouped-1",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-2",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": [
          {
            "id": "che-atom-1",
            "question": "Napisz równanie rozpadu β⁻ izotopu kobaltu ⁶⁰₂₇Co. Jaki nuklid powstaje?",
            "answer": "⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + ν̄ (antyneutrino elektronowe). Powstaje nikiel-60 o liczbie atomowej Z=28 i masowej A=60.",
            "examRef": "CKE 2016"
          },
          {
            "id": "che-atom-2",
            "question": "Czym różnią się izotopy tego samego pierwiastka?",
            "answer": "Liczbą neutronów w jądrze (różna liczba masowa A). Mają tę samą liczbę atomową Z (liczbę protonów), więc identyczną konfigurację elektronową i właściwości chemiczne. Różnią się właściwościami fizycznymi (masa, gęstość, szybkość dyfuzji).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "che-atom-3",
            "question": "Zapisz konfigurację elektronową żelaza (Z=26) i jonu Fe²⁺. Wyjaśnij, dlaczego Fe traci najpierw elektrony 4s.",
            "answer": "Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. Fe²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ (traci 2 elektrony z 4s). Elektrony 4s są dalej od jądra i słabiej związane niż 3d, mimo że 4s jest obsadzane przed 3d (reguła energii orbitalnych).",
            "examRef": "CKE 2017"
          },
          {
            "id": "che-atom-4",
            "question": "Wyjaśnij regułę Hunda i podaj przykład jej zastosowania dla atomu azotu (Z=7).",
            "answer": "Reguła Hunda: elektrony obsadzają orbitale o tej samej energii (zdegenerowane) pojedynczo, z równoległymi spinami, zanim zaczną tworzyć pary. N: 1s² 2s² 2p³ — na podpowłoce 2p (3 orbitale) każdy z 3 elektronów zajmuje osobny orbital: ↑ ↑ ↑, a nie ↑↓ ↑ _.",
            "examRef": "CKE 2018"
          },
          {
            "id": "che-wiaz-1",
            "question": "Określ typ hybrydyzacji i kształt cząsteczek: CH₄, BF₃, BeCl₂, H₂O, NH₃.",
            "answer": "CH₄: sp³, tetraedr 109,5°. BF₃: sp², trójkąt równoboczny 120°. BeCl₂: sp, liniowa 180°. H₂O: sp³, kątowa 104,5° (2 wolne pary). NH₃: sp³, piramida trygonalna 107° (1 wolna para).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "che-wiaz-2",
            "question": "Wyjaśnij, dlaczego lód pływa po wodzie. Odnieś się do struktury i wiązań wodorowych.",
            "answer": "W lodzie każda cząsteczka H₂O tworzy 4 wiązania wodorowe z sąsiednimi cząsteczkami, tworząc heksagonalną sieć krystaliczną z dużymi pustymi przestrzeniami. Daje to strukturę o mniejszej gęstości (~0,92 g/cm³) niż woda ciekła (~1,00 g/cm³ w 4°C), gdzie wiązania wodorowe są częściowo zerwane, a cząsteczki mogą się ciaśniej upakować.",
            "examRef": "CKE 2016"
          }
        ]
      }
    ]
  },
  {
    "id": "stechiometria",
    "title": "Stechiometria — podstawy obliczeń chemicznych",
    "shortTitle": "Stechiometria",
    "icon": "⚖️",
    "sections": [
      {
        "id": "mol-stechiometria",
        "title": "Mol, masa molowa, objętość molowa gazów",
        "summary": "- Mol jest jednostką liczności __________ w układzie SI.\n- Jeden mol zawiera dokładnie 6,02214076 × __________ obiektów elementarnych (liczba Avogadra NA).\n- Jeden mol atomów pierwiastka zawiera NA atomów, __________ mol cząsteczek związku chemicznego zawiera NA cząsteczek.",
        "academic_detail": "Mol jest jednostką liczności materii w układzie SI. Jeden mol zawiera dokładnie 6,02214076 × 10²³ obiektów elementarnych (liczba Avogadra NA). Jeden mol atomów pierwiastka zawiera NA atomów, jeden mol cząsteczek związku chemicznego zawiera NA cząsteczek. Masa molowa (M) to masa 1 mola substancji, wyrażona w g/mol — liczbowo równa masie atomowej (dla pierwiastków, podawana w unitach u) lub masie cząsteczkowej (dla związków, suma mas atomowych). Przykład: M(H₂O) = 2 × 1,008 + 16,00 = 18,02 g/mol. Liczba moli n = m/M, gdzie m to masa w gramach.",
        "content": [
          {
            "type": "paragraph",
            "text": "Mol jest jednostką liczności materii w układzie SI. Jeden mol zawiera dokładnie 6,02214076 × 10²³ obiektów elementarnych (liczba Avogadra NA). Jeden mol atomów pierwiastka zawiera NA atomów, jeden mol cząsteczek związku chemicznego zawiera NA cząsteczek. Masa molowa (M) to masa 1 mola substancji, wyrażona w g/mol — liczbowo równa masie atomowej (dla pierwiastków, podawana w unitach u) lub masie cząsteczkowej (dla związków, suma mas atomowych). Przykład: M(H₂O) = 2 × 1,008 + 16,00 = 18,02 g/mol. Liczba moli n = m/M, gdzie m to masa w gramach."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Prawo Avogadra i objętość molowa gazów"
          },
          {
            "type": "paragraph",
            "text": "Prawo Avogadra: w jednakowych objętościach różnych gazów, w tych samych warunkach temperatury i ciśnienia, znajduje się jednakowa liczba cząsteczek. W warunkach normalnych (T = 0°C = 273,15 K, p = 1013,25 hPa = 1 atm) objętość molowa gazu doskonałego wynosi Vmol = 22,4 dm³/mol. W warunkach standardowych (T = 25°C = 298,15 K, p = 1000 hPa = 0,987 atm) objętość molowa wynosi 24,8 dm³/mol. Równanie stanu gazu doskonałego (Clapeyrona): pV = nRT, gdzie R = 8,314 J/(mol·K) = 83,14 hPa·dm³/(mol·K). Prawo Daltona (ciśnień cząstkowych): ciśnienie mieszaniny gazów = suma ciśnień cząstkowych składników: pcałk = Σpᵢ, gdzie pᵢ = (nᵢ/ncałk) × pcałk (ułamek molowy × ciśnienie całkowite)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stechiometria reakcji — obliczenia"
          },
          {
            "type": "paragraph",
            "text": "Równanie reakcji chemicznej przedstawia stosunki molowe między substratami i produktami. Obliczenia stechiometryczne opierają się na proporcjach wynikających z uzgodnionych współczynników stechiometrycznych. Prawo zachowania masy (Lavoisier): łączna masa substratów = łączna masa produktów w układzie zamkniętym. Prawo stałości składu (Proust): związek chemiczny ma zawsze taki sam skład jakościowy i ilościowy niezależnie od pochodzenia i metody otrzymania. Skład procentowy: % pierwiastka = (n × Mat / Mzwiązek) × 100%. Ustalanie wzoru empirycznego (elementarnego) i rzeczywistego (sumarycznego) na podstawie składu procentowego i masy molowej. Wydajność reakcji: wydajność teoretyczna (100%) vs wydajność praktyczna: W% = (mpraktyczna / mteoretyczna) × 100%. Substrat ograniczający (limitant) — reagent, który skończy się pierwszy i ograniczy ilość produktu."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stężenia roztworów"
          },
          {
            "type": "paragraph",
            "text": "Stężenie procentowe masowe: Cp = (ms / mr) × 100%, gdzie ms — masa substancji, mr — masa roztworu. Stężenie molowe: Cm = n / V, gdzie n — liczba moli, V — objętość roztworu w dm³. Przeliczanie między stężeniami wymaga znajomości gęstości roztworu d: mr = d × V. Rozcieńczanie i zatężanie: liczba moli substancji przed i po operacji jest stała: n₁ = n₂ → C₁V₁ = C₂V₂. Mieszanie roztworów: reguła krzyżowa (do obliczeń przy mieszaniu roztworów o różnych stężeniach). Rozpuszczalność to maksymalna masa substancji, którą można rozpuścić w 100 g rozpuszczalnika w danej temperaturze do uzyskania roztworu nasyconego."
          }
        ],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-3",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-4",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": [
          {
            "id": "che-stech-1",
            "question": "Oblicz, ile moli estru (octanu etylu) powstanie w stanie równowagi po zmieszaniu 1 mola kwasu octowego i 1 mola etanolu (Kc = 4,0).",
            "answer": "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Kc = [ester][H₂O]/([kwas][alkohol]) = x²/(1−x)² = 4,0 → x/(1−x) = 2 → x = 2/3 ≈ 0,67 mola estru. Stan równowagi: po 0,33 mola kwasu i alkoholu, 0,67 mola estru i 0,67 mola wody.",
            "examRef": "CKE 2016"
          },
          {
            "id": "che-stech-2",
            "question": "Oblicz skład procentowy (% masowy) węglanu wapnia CaCO₃. Masy atomowe: Ca=40, C=12, O=16.",
            "answer": "M(CaCO₃) = 40 + 12 + 3×16 = 100 g/mol. %Ca = (40/100)×100% = 40%. %C = (12/100)×100% = 12%. %O = (48/100)×100% = 48%.",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "che-stech-3",
            "question": "Ile dm³ CO₂ (warunki normalne) powstanie podczas termicznego rozkładu 50 g CaCO₃? M(CaCO₃) = 100 g/mol.",
            "answer": "CaCO₃ → CaO + CO₂. n(CaCO₃) = 50/100 = 0,5 mola. Z 1 mola CaCO₃ powstaje 1 mol CO₂ → n(CO₂) = 0,5 mola. W warunkach normalnych V = n × 22,4 = 0,5 × 22,4 = 11,2 dm³.",
            "examRef": "CKE 2017"
          }
        ]
      }
    ]
  },
  {
    "id": "nieorganiczna",
    "title": "Chemia nieorganiczna — kwasy, zasady, sole, utlenianie-redukcja",
    "shortTitle": "Nieorganiczna",
    "icon": "🧪",
    "sections": [
      {
        "id": "kwasy-zasady-sole",
        "title": "Kwasy, zasady i sole — teorie i reakcje",
        "summary": "- Teoria Arrheniusa: kwas to substancja, która w roztworze wodnym __________ na kationy H⁺, zasada dysocjuje na aniony OH⁻.\n- Ograniczenie: dotyczy __________ roztworów wodnych.\n- Teoria Brønsteda-Lowry'ego (protonowa): kwas to donor __________ (H⁺), zasada to akceptor protonu.",
        "academic_detail": "Teoria Arrheniusa: kwas to substancja, która w roztworze wodnym dysocjuje na kationy H⁺, zasada dysocjuje na aniony OH⁻. Ograniczenie: dotyczy tylko roztworów wodnych. Teoria Brønsteda-Lowry'ego (protonowa): kwas to donor protonu (H⁺), zasada to akceptor protonu. Każdy kwas ma sprzężoną z nim zasadę (HA/A⁻). Reakcja kwas-zasada to przeniesienie protonu. Przykład: HCl + H₂O → H₃O⁺ + Cl⁻ (HCl — kwas, H₂O — zasada, H₃O⁺ — kwas sprzężony, Cl⁻ — zasada sprzężona). Teoria Lewisa: kwas to akceptor pary elektronowej (np. BF₃, AlCl₃), zasada to donor pary elektronowej (np. NH₃, F⁻). Moc kwasu/zasady: stała dysocjacji Ka (dla kwasów) i Kb (dla zasad). Im większe Ka, tym mocniejszy kwas (pKa = −log Ka). Mocne kwasy (HCl, HBr, HI, HNO₃, H₂SO₄ — 1. stopień, HClO₄) — dysocjują całkowicie. Słabe kwasy (CH₃COOH, H₂CO₃, H₂S, HCN, HF) — dysocjują częściowo.",
        "content": [
          {
            "type": "paragraph",
            "text": "Teoria Arrheniusa: kwas to substancja, która w roztworze wodnym dysocjuje na kationy H⁺, zasada dysocjuje na aniony OH⁻. Ograniczenie: dotyczy tylko roztworów wodnych. Teoria Brønsteda-Lowry'ego (protonowa): kwas to donor protonu (H⁺), zasada to akceptor protonu. Każdy kwas ma sprzężoną z nim zasadę (HA/A⁻). Reakcja kwas-zasada to przeniesienie protonu. Przykład: HCl + H₂O → H₃O⁺ + Cl⁻ (HCl — kwas, H₂O — zasada, H₃O⁺ — kwas sprzężony, Cl⁻ — zasada sprzężona). Teoria Lewisa: kwas to akceptor pary elektronowej (np. BF₃, AlCl₃), zasada to donor pary elektronowej (np. NH₃, F⁻). Moc kwasu/zasady: stała dysocjacji Ka (dla kwasów) i Kb (dla zasad). Im większe Ka, tym mocniejszy kwas (pKa = −log Ka). Mocne kwasy (HCl, HBr, HI, HNO₃, H₂SO₄ — 1. stopień, HClO₄) — dysocjują całkowicie. Słabe kwasy (CH₃COOH, H₂CO₃, H₂S, HCN, HF) — dysocjują częściowo."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "pH — miara kwasowości"
          },
          {
            "type": "paragraph",
            "text": "pH = −log[H₃O⁺]. Dla czystej wody w 25°C: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/dm³ → pH = 7 (obojętne). Iloczyn jonowy wody Kw = [H₃O⁺][OH⁻] = 10⁻¹⁴. pOH = −log[OH⁻]; pH + pOH = 14 (25°C). Dla mocnych kwasów: [H₃O⁺] = stężenie kwasu dla kwasów jednoprotonowych (HCl, HNO₃); dla H₂SO₄ (1. stopień całkowicie, 2. częściowo) [H₃O⁺] ≈ 2 × C (w przybliżeniu). Dla słabych kwasów: [H₃O⁺] = √(Ka × C) (prawo rozcieńczeń Ostwalda). Hydroliza soli: sól słabego kwasu i mocnej zasady (CH₃COONa) → odczyn zasadowy; sól mocnego kwasu i słabej zasady (NH₄Cl) → odczyn kwasowy; sól słabego kwasu i słabej zasady (CH₃COONH₄) → odczyn zależy od Ka i Kb. Roztwory buforowe utrzymują stałe pH po dodaniu niewielkich ilości kwasu lub zasady. Bufor octanowy: CH₃COOH/CH₃COONa. Bufor amonowy: NH₃/NH₄Cl. Równanie Hendersona-Hasselbalcha: pH = pKa + log([zasada]/[kwas])."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Związki kompleksowe (koordynacyjne)"
          },
          {
            "type": "paragraph",
            "text": "Związki kompleksowe składają się z atomu/jonu centralnego (zazwyczaj metal d-bloku — Cu²⁺, Zn²⁺, Fe³⁺, Co³⁺, Ni²⁺, Cr³⁺, Ag⁺) i ligandów (donory pary elektronowej — H₂O, NH₃, Cl⁻, CN⁻, OH⁻, EDTA). Liczba koordynacyjna to liczba wiązań ligandów z atomem centralnym (najczęściej 4 — tetraedr/kwadrat, 6 — oktaedr). Nazewnictwo: liczba ligandów (di-, tri-, tetra-, penta-, heksa-) + nazwa liganda (akwa H₂O → akwa, NH₃ → amina, Cl⁻ → chloro, CN⁻ → cyjano, OH⁻ → hydrokso) + nazwa centralnego atomu + stopień utlenienia w nawiasie rzymskim. Anion kompleksowy kończy się na -an. Przykład: K₄[Fe(CN)₆] — heksacyjanożelazian(II) potasu; [Cu(NH₃)₄]SO₄ — siarczan(VI) tetraamminamiedzi(II). Trwałość kompleksu zależy od stałej trwałości β. Reakcje identyfikacji: Cu²⁺ + 2NH₃·H₂O → Cu(OH)₂↓ (niebieski) + 2NH₄⁺; Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 2OH⁻ (granatowoniebieski roztwór). Podobnie Zn²⁺ + 4NH₃ → [Zn(NH₃)₄]²⁺ (bezbarwny rozpuszczalny kompleks)."
          }
        ],
        "recallQuestions": []
      },
      {
        "id": "redox-elektrochemia",
        "title": "Utlenianie i redukcja — elektrochemia",
        "summary": "- Utlenianie (oksydacja) to oddawanie __________ wzrost stopnia utlenienia.\n- Redukcja to przyjmowanie __________ obniżenie stopnia utlenienia.\n- Utleniacz (akceptor elektronów) __________ ulega redukcji.",
        "academic_detail": "Utlenianie (oksydacja) to oddawanie elektronów, wzrost stopnia utlenienia. Redukcja to przyjmowanie elektronów, obniżenie stopnia utlenienia. Utleniacz (akceptor elektronów) sam ulega redukcji. Reduktor (donor elektronów) sam ulega utlenieniu. Bilansowanie równań redox: metoda bilansu elektronowego (liczba oddanych e⁻ = liczba przyjętych e⁻) lub metoda jonowo-elektronowa (zapis reakcji połówkowych w środowisku kwasowym lub zasadowym). Szereg aktywności metali (szereg napięciowy): Li > K > Ca > Na > Mg > Al > Zn > Cr > Fe > Ni > Sn > Pb > H > Cu > Hg > Ag > Pt > Au. Metal o niższym potencjale wypiera metal o wyższym potencjale z roztworu jego soli. Przykład: Zn + CuSO₄ → ZnSO₄ + Cu (Zn wypiera Cu bo jest aktywniejszy).",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Reakcje utleniania-redukcji (redox)"
          },
          {
            "type": "paragraph",
            "text": "Utlenianie (oksydacja) to oddawanie elektronów, wzrost stopnia utlenienia. Redukcja to przyjmowanie elektronów, obniżenie stopnia utlenienia. Utleniacz (akceptor elektronów) sam ulega redukcji. Reduktor (donor elektronów) sam ulega utlenieniu. Bilansowanie równań redox: metoda bilansu elektronowego (liczba oddanych e⁻ = liczba przyjętych e⁻) lub metoda jonowo-elektronowa (zapis reakcji połówkowych w środowisku kwasowym lub zasadowym). Szereg aktywności metali (szereg napięciowy): Li > K > Ca > Na > Mg > Al > Zn > Cr > Fe > Ni > Sn > Pb > H > Cu > Hg > Ag > Pt > Au. Metal o niższym potencjale wypiera metal o wyższym potencjale z roztworu jego soli. Przykład: Zn + CuSO₄ → ZnSO₄ + Cu (Zn wypiera Cu bo jest aktywniejszy)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Ogniwa galwaniczne"
          },
          {
            "type": "paragraph",
            "text": "Ogniwo galwaniczne zamienia energię chemiczną reakcji redox na energię elektryczną. Ogniwo Daniella: Zn | Zn²⁺ (1M) || Cu²⁺ (1M) | Cu. Półogniwo (elektroda): metal zanurzony w roztworze swoich jonów. Katoda (+): elektroda, na której zachodzi redukcja (Cu²⁺ + 2e⁻ → Cu). Anoda (−): elektroda, na której zachodzi utlenianie (Zn → Zn²⁺ + 2e⁻). SEM (siła elektromotoryczna) = E⁰(katody) − E⁰(anody) = potencjał wyższy − potencjał niższy. Standardowy potencjał redukcji E⁰ mierzony względem standardowej elektrody wodorowej (SHE, E⁰ = 0,000 V). Szereg elektrochemiczny metali uszeregowany według E⁰ (rosnący potencjał). Ogniwa stężeniowe: dwa identyczne półogniwa o różnych stężeniach jonów — SEM zależy od stosunku stężeń (równanie Nernsta: E = E⁰ + (RT/nF) ln([ox]/[red]))."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Elektroliza"
          },
          {
            "type": "paragraph",
            "text": "Elektroliza to wymuszenie reakcji redox przez przepływ prądu stałego. Katoda (− przy elektrolizie): redukcja. Anoda (+ przy elektrolizie): utlenianie. W elektrolizie wodnych roztworów konkurują jony z elektrolitu i cząsteczki wody. Kolejność wydzielania na katodzie: kationy metali o E⁰ > 0 (Cu²⁺, Ag⁺) przed wodorem; kationy metali aktywnych (Na⁺, K⁺, Mg²⁺, Al³⁺) po redukcji wody (2H₂O + 2e⁻ → H₂ + 2OH⁻). Na anodzie: aniony beztlenowe (Cl⁻, Br⁻, I⁻) przed utlenianiem wody; aniony tlenowe (SO₄²⁻, NO₃⁻) po utlenianiu wody (2H₂O → O₂ + 4H⁺ + 4e⁻). I prawo Faradaya: m = k × I × t gdzie k to równoważnik elektrochemiczny, I — natężenie prądu, t — czas. II prawo Faradaya: do wydzielenia 1 równoważnika gramowego dowolnej substancji potrzebny jest ładunek 96 485 C (stała Faradaya F)."
          }
        ],
        "recallQuestions": []
      },
      {
        "id": "chemia-opisowa",
        "title": "Chemia opisowa pierwiastków",
        "summary": "- Układ okresowy (Mendelejew) grupuje pierwiastki według __________ Z i okresowego powtarzania się właściwości.\n- W okresie (→): rośnie elektroujemność, energia jonizacji i __________ kwasowy tlenków; maleje promień atomowy i charakter metaliczny.\n- W grupie (↓): rośnie promień atomowy i __________ metaliczny; maleje elektroujemność i energia jonizacji.",
        "academic_detail": "Układ okresowy (Mendelejew) grupuje pierwiastki według rosnącego Z i okresowego powtarzania się właściwości. W okresie (→): rośnie elektroujemność, energia jonizacji i charakter kwasowy tlenków; maleje promień atomowy i charakter metaliczny. W grupie (↓): rośnie promień atomowy i charakter metaliczny; maleje elektroujemność i energia jonizacji. Bloki: s (grupy 1-2), p (13-18), d (3-12 — metale przejściowe), f (lantanowce i aktynowce). Metale: połysk, kowalność, ciągliwość, przewodnictwo elektryczne i cieplne, tworzą kationy, tlenki przeważnie zasadowe. Niemetale: tworzą aniony, tlenki przeważnie kwasowe, słabe przewodnictwo.",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Właściwości okresowe pierwiastków"
          },
          {
            "type": "paragraph",
            "text": "Układ okresowy (Mendelejew) grupuje pierwiastki według rosnącego Z i okresowego powtarzania się właściwości. W okresie (→): rośnie elektroujemność, energia jonizacji i charakter kwasowy tlenków; maleje promień atomowy i charakter metaliczny. W grupie (↓): rośnie promień atomowy i charakter metaliczny; maleje elektroujemność i energia jonizacji. Bloki: s (grupy 1-2), p (13-18), d (3-12 — metale przejściowe), f (lantanowce i aktynowce). Metale: połysk, kowalność, ciągliwość, przewodnictwo elektryczne i cieplne, tworzą kationy, tlenki przeważnie zasadowe. Niemetale: tworzą aniony, tlenki przeważnie kwasowe, słabe przewodnictwo."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Wybrane pierwiastki i ich związki"
          },
          {
            "type": "paragraph",
            "text": "Sód (Na, grupa 1 — litowce): miękki, srebrzysty, reaguje gwałtownie z wodą (2Na + 2H₂O → 2NaOH + H₂↑), przechowywany w nafcie. NaOH — mocna zasada, higroskopijna. Na₂CO₃ (soda) i NaHCO₃ (soda oczyszczona) — hydroliza zasadowa. NaCl — chlorek sodu, nie hydrolizuje (sól mocnego kwasu i mocnej zasady). Wapń (Ca, grupa 2 — berylowce): Ca + 2H₂O → Ca(OH)₂ + H₂↑. CaO (wapno palone) + H₂O → Ca(OH)₂ (wapno gaszone) — silnie egzotermiczne. CaCO₃ (wapień, marmur, kreda) — rozkład termiczny: CaCO₃ → CaO + CO₂. Twardość wody: przemijająca (wodorowęglany Ca i Mg — usuwa się przez gotowanie: Ca(HCO₃)₂ → CaCO₃↓ + CO₂ + H₂O) i trwała (siarczany, chlorki — usuwa się przez wymianę jonową lub dodatek sody). Glin (Al, grupa 13): amfoteryczny — reaguje z kwasami (2Al + 6HCl → 2AlCl₃ + 3H₂) i mocnymi zasadami (2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂). Al₂O₃ — amfoteryczny tlenek. Al(OH)₃ — amfoteryczny wodorotlenek: z kwasami tworzy sole glinu (AlCl₃), z zasadami tworzy gliniany (Na[Al(OH)₄])."
          },
          {
            "type": "paragraph",
            "text": "Żelazo (Fe, grupa 8 — żelazowce): najważniejszy metal przejściowy. Konfiguracja: [Ar] 4s² 3d⁶. Stany utlenienia: +2 (Fe²⁺, w roztworze zielonkawe) i +3 (Fe³⁺, żółtobrunatne). Fe + 2HCl → FeCl₂ + H₂↑. Fe + Cl₂ → FeCl₃ (wyższy stopień utlenienia). Rdza: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → Fe₂O₃·xH₂O (uwodniony tlenek żelaza III). Ochrona przed korozją: powłoki malarskie, cynkowanie (Zn — ochrona protektorowa, katodowa), chromowanie, stal nierdzewna (stop Fe z Cr i Ni). Reakcje charakterystyczne: Fe²⁺ + K₃[Fe(CN)₆] → błękit Turnbulla; Fe³⁺ + K₄[Fe(CN)₆] → błękit pruski; Fe³⁺ + SCN⁻ → intensywnie czerwony kompleks [Fe(SCN)]²⁺. Mangan (Mn): KMnO₄ (nadmanganian potasu) — silny utleniacz, fioletowy roztwór, odbarwia się w środowisku kwasowym (Mn⁷⁺ → Mn²⁺, bezbarwny). Chrom (Cr): K₂Cr₂O₇ (dichromian VI potasu) — pomarańczowy, silny utleniacz (Cr⁶⁺ → Cr³⁺, zielony); w środowisku zasadowym przechodzi w chromian(VI) CrO₄²⁻ (żółty). Azot (N, grupa 15): NH₃ — amoniak, zasada (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻), charakterystyczny zapach. HNO₃ — kwas azotowy(V), silny utleniacz; z metalami (oprócz Au, Pt) wydziela tlenki azotu (NO, NO₂), nie wodór. Siarka (S, grupa 16): H₂S — siarkowodór, słaby kwas, zapach zgniłych jaj. H₂SO₄ — kwas siarkowy(VI); stężony jest higroskopijny i utleniający. Chlor (Cl, grupa 17 — fluorowce/halogeny): Cl₂ — żółtozielony gaz, silny utleniacz, trujący, używany do dezynfekcji wody. Reaktywność halogenów maleje w dół grupy: F₂ > Cl₂ > Br₂ > I₂. Woda chlorowa: Cl₂ + H₂O ⇌ HCl + HClO (kwas chlorowy I). HCl — kwas solny, bezbarwny, dymiący gaz, bardzo dobrze rozpuszczalny w wodzie."
          }
        ],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-5",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-6",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": [
          {
            "id": "che-nieorg-1",
            "question": "Oblicz pH 0,01 M roztworu NaOH oraz 0,005 M roztworu Ba(OH)₂. Porównaj wyniki.",
            "answer": "NaOH: [OH⁻] = 0,01 M → pOH = −log(0,01) = 2 → pH = 14 − 2 = 12. Ba(OH)₂: [OH⁻] = 2 × 0,005 = 0,01 M → pOH = 2 → pH = 12. Oba roztwory mają pH = 12, ponieważ mają to samo stężenie jonów OH⁻.",
            "examRef": "CKE 2016"
          },
          {
            "id": "che-nieorg-2",
            "question": "Wyjaśnij, dlaczego osad Cu(OH)₂ rozpuszcza się w nadmiarze amoniaku. Napisz odpowiednie równania reakcji.",
            "answer": "W nadmiarze amoniaku tworzy się rozpuszczalny, trwały kompleks tetraamminamiedzi(II): Cu²⁺ + 2NH₃·H₂O → Cu(OH)₂↓ + 2NH₄⁺; Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 2OH⁻ (granatowoniebieski roztwór). Kompleks [Cu(NH₃)₄]²⁺ ma wysoką stałą trwałości, przesuwając równowagę rozpuszczania osadu.",
            "examRef": "CKE 2016"
          },
          {
            "id": "che-nieorg-3",
            "question": "Czym jest roztwór buforowy? Podaj przykład i wyjaśnij mechanizm jego działania.",
            "answer": "Roztwór buforowy utrzymuje stałe pH mimo dodatku niewielkich ilości mocnego kwasu lub zasady. Przykład: bufor octanowy CH₃COOH/CH₃COONa. Po dodaniu H⁺: CH₃COO⁻ + H⁺ → CH₃COOH (anion octanowy wiąże protony). Po dodaniu OH⁻: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O (kwas octowy neutralizuje jony OH⁻). pH = pKa + log([CH₃COO⁻]/[CH₃COOH]).",
            "examRef": "CKE 2018"
          },
          {
            "id": "che-redox-1",
            "question": "Zapisz schemat ogniwa złożonego z półogniw Zn/Zn²⁺ i Ag/Ag⁺. Wskaż anodę, katodę i oblicz SEM znając E⁰(Zn²⁺/Zn) = −0,76 V i E⁰(Ag⁺/Ag) = +0,80 V.",
            "answer": "Anoda (−): Zn → Zn²⁺ + 2e⁻. Katoda (+): Ag⁺ + e⁻ → Ag (×2). Reakcja sumaryczna: Zn + 2Ag⁺ → Zn²⁺ + 2Ag. SEM = E⁰(katody) − E⁰(anody) = 0,80 − (−0,76) = 1,56 V. Schemat: Zn | Zn²⁺ (1M) || Ag⁺ (1M) | Ag.",
            "examRef": "CKE 2017"
          },
          {
            "id": "che-redox-2",
            "question": "Jakie produkty powstaną podczas elektrolizy wodnego roztworu CuSO₄ na elektrodach grafitowych (obojętnych)?",
            "answer": "Dysocjacja: CuSO₄ → Cu²⁺ + SO₄²⁻. Katoda (−): Cu²⁺ + 2e⁻ → Cu (miedź metaliczna osadza się; potencjał Cu > H₂O, więc Cu²⁺ redukuje się przed wodą). Anoda (+): 2H₂O → O₂ + 4H⁺ + 4e⁻ (SO₄²⁻ nie utlenia się przed wodą). Produkty: Cu na katodzie, O₂ na anodzie, roztwór staje się kwasowy (H⁺).",
            "examRef": "CKE 2019"
          },
          {
            "id": "che-opis-1",
            "question": "Wyjaśnij pojęcie amfoteryczności na przykładzie wodorotlenku glinu. Napisz odpowiednie równania reakcji.",
            "answer": "Amfoteryczność to zdolność do reagowania zarówno z kwasami, jak i zasadami. Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O (z kwasem tworzy sól glinu). Al(OH)₃ + NaOH → Na[Al(OH)₄] (z zasadą tworzy tetrahydroksoglinian sodu — rozpuszczalny). Al(OH)₃ jest amfoteryczny, bo glin ma pośrednią elektroujemność między metalami a niemetalami.",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "che-opis-2",
            "question": "Opisz doświadczenie pozwalające odróżnić Fe²⁺ od Fe³⁺. Podaj obserwacje i równania.",
            "answer": "Do roztworu Fe²⁺ dodajemy K₃[Fe(CN)₆] — powstaje błękit Turnbulla (ciemnoniebieski osad). Fe²⁺ + [Fe(CN)₆]³⁻ → Fe₃[Fe(CN)₆]₂↓. Do roztworu Fe³⁺ dodajemy K₄[Fe(CN)₆] — powstaje błękit pruski. Fe³⁺ + [Fe(CN)₆]⁴⁻ → Fe₄[Fe(CN)₆]₃↓. Alternatywnie: Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (intensywnie krwistoczerwone zabarwienie).",
            "examRef": "CKE 2018"
          }
        ]
      }
    ]
  },
  {
    "id": "organiczna",
    "title": "Chemia organiczna — węglowodory i grupy funkcyjne",
    "shortTitle": "Organiczna",
    "icon": "🔬",
    "sections": [
      {
        "id": "weglowodory",
        "title": "Węglowodory — alkany, alkeny, alkiny, areny",
        "summary": "- Chemia organiczna to chemia związków węgla (z wyjątkiem CO, __________ węglików, cyjanków i węglanów, które zalicza się do nieorganicznych).\n- Atom węgla (4 elektrony walencyjne) tworzy 4 wiązania kowalencyjne, może łączyć __________ w długie łańcuchy (katenacja) i tworzyć wiązania pojedyncze, podwójne i potrójne.\n- Hybrydyzacja: sp³ (alkany), sp² __________ areny), sp (alkiny).",
        "academic_detail": "Chemia organiczna to chemia związków węgla (z wyjątkiem CO, CO₂, węglików, cyjanków i węglanów, które zalicza się do nieorganicznych). Atom węgla (4 elektrony walencyjne) tworzy 4 wiązania kowalencyjne, może łączyć się w długie łańcuchy (katenacja) i tworzyć wiązania pojedyncze, podwójne i potrójne. Hybrydyzacja: sp³ (alkany), sp² (alkeny, areny), sp (alkiny). Szereg homologiczny — grupa związków o podobnej budowie, różniących się o grupę −CH₂−, o podobnych właściwościach chemicznych i regularnie zmieniających się właściwościach fizycznych.",
        "content": [
          {
            "type": "paragraph",
            "text": "Chemia organiczna to chemia związków węgla (z wyjątkiem CO, CO₂, węglików, cyjanków i węglanów, które zalicza się do nieorganicznych). Atom węgla (4 elektrony walencyjne) tworzy 4 wiązania kowalencyjne, może łączyć się w długie łańcuchy (katenacja) i tworzyć wiązania pojedyncze, podwójne i potrójne. Hybrydyzacja: sp³ (alkany), sp² (alkeny, areny), sp (alkiny). Szereg homologiczny — grupa związków o podobnej budowie, różniących się o grupę −CH₂−, o podobnych właściwościach chemicznych i regularnie zmieniających się właściwościach fizycznych."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Alkany (parafiny) — CₙH₂ₙ₊₂"
          },
          {
            "type": "paragraph",
            "text": "Węglowodory nasycone, tylko wiązania pojedyncze C−C i C−H. Reakcje: spalanie (całkowite: CH₄ + 2O₂ → CO₂ + 2H₂O; niecałkowite: 2CH₄ + 3O₂ → 2CO + 4H₂O), halogenowanie — substytucja rodnikowa (SR) w obecności światła UV (CH₄ + Cl₂ → CH₃Cl + HCl, następnie CH₂Cl₂, CHCl₃, CCl₄). Izomeria: szkieletowa (łańcuchowa) i stereoizomeria (enancjomery — dla alkanów rozgałęzionych z centrum chiralności). Cykloalkany — CₙH₂ₙ, naprężenie pierścienia (najtrwalszy cykloheksan — konformacja krzesłowa)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Alkeny (olefiny) — CₙH₂ₙ i alkiny — CₙH₂ₙ₋₂"
          },
          {
            "type": "paragraph",
            "text": "Alkeny zawierają wiązanie podwójne C=C (1 wiązanie σ + 1 wiązanie π). Reakcje charakterystyczne: addycja elektrofilowa (AE) — uwodornienie (C₂H₄ + H₂ → C₂H₆, kat. Pt/Pd/Ni), halogenowanie (C₂H₄ + Br₂ → CH₂Br−CH₂Br — odbarwienie wody bromowej, próba na nienasycenie), addycja halogenowodorów (C₂H₄ + HBr → C₂H₅Br — zgodnie z regułą Markownikowa: H przyłącza się do atomu węgla bogatszego w wodór), hydratacja (C₂H₄ + H₂O → C₂H₅OH). Polimeryzacja addycyjna: nCH₂=CH₂ → (−CH₂−CH₂−)ₙ (polietylen PE). Dieny sprzężone (buta-1,3-dien): addycja 1,2 i 1,4 (w niższej temperaturze przeważa 1,2, w wyższej 1,4). Polimeryzacja dienów daje kauczuki: nCH₂=CH−CH=CH₂ → (−CH₂−CH=CH−CH₂−)ₙ (polibutadien). Alkiny — wiązanie potrójne (1σ + 2π). Reakcje: addycja (dwustopniowo — najpierw do alkenu, potem alkanu), kwasowość terminalnych alkinów (H−C≡C−H + NaNH₂ → HC≡C⁻Na⁺ + NH₃ — acetylenki). Próba Tollensa dla terminalnych alkinów: HC≡CH + 2[Ag(NH₃)₂]OH → AgC≡CAg↓ (acetylenek srebra, biały osad)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Węglowodory aromatyczne (areny)"
          },
          {
            "type": "paragraph",
            "text": "Benzen C₆H₆ — pierścień sześcioczłonowy z delokalizowanymi elektronami π (sektet aromatyczny, 6 elektronów π). Reakcje: substytucja elektrofilowa (SE): nitrowanie (C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O, kat. H₂SO₄), halogenowanie (C₆H₆ + Br₂ → C₆H₅Br + HBr, kat. FeBr₃/AlBr₃), alkilowanie Friedla-Craftsa (C₆H₆ + RCl → C₆H₅R + HCl, kat. AlCl₃), sulfonowanie. Benzen nie odbarwia wody bromowej (w przeciwieństwie do alkenów) ani KMnO₄ — bo nie ma zlokalizowanego wiązania podwójnego. Reguła Hückla aromatyczności: 4n+2 elektronów π w cyklicznym, płaskim układzie sprzężonym. Naftalen (C₁₀H₈, n=2), antracen, fenantren — węglowodory policykliczne aromatyczne (WWA, PAH)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Izomeria w chemii organicznej"
          },
          {
            "type": "paragraph",
            "text": "Izomeria konstytucyjna (strukturalna): różne ułożenie atomów w cząsteczce. Szkieletowa (różny szkielet węglowy, np. butan i 2-metylopropan C₄H₁₀). Położenia (różne położenie grupy funkcyjnej lub wiązania wielokrotnego: but-1-en i but-2-en). Funkcyjna (różne grupy funkcyjne: etanol C₂H₅OH i eter dimetylowy CH₃OCH₃ — oba C₂H₆O). Tautomeria (ketonowo-enolowa: aceton CH₃COCH₃ ⇌ CH₃C(OH)=CH₂). Stereoizomeria: geometryczna cis-trans (EZ) — różne ułożenie podstawników przy wiązaniu podwójnym lub pierścieniu. Enancjomery (izomeria optyczna) — cząsteczki chiralne (zawierające asymetryczny atom węgla, 4 różne podstawniki), skręcające płaszczyznę światła spolaryzowanego. Mieszanina racemiczna (1:1) — nieaktywna optycznie. Diastereoizomery — stereoizomery niebędące enancjomerami."
          }
        ],
        "recallQuestions": []
      },
      {
        "id": "grupy-funkcyjne",
        "title": "Związki organiczne z grupami funkcyjnymi",
        "summary": "- Alkohole (R−OH) — __________ hydroksylowa −OH.\n- Szereg homologiczny: metanol CH₃OH (trucizna, ślepota), etanol C₂H₅OH (fermentacja, bioetanol), __________ etylenowy HO−CH₂−CH₂−OH (płyn chłodniczy), glicerol (propano-1,2,3-triol — składnik tłuszczów).\n- Rzędowość alkoholi: I-rzędowe (R−CH₂OH — utleniają się do aldehydów, potem kwasów), II-rzędowe (R₂CHOH — __________ się do ketonów), III-rzędowe (R₃COH — nie utleniają się łatwo, wymagają rozerwania wiązań C−C).",
        "academic_detail": "Alkohole (R−OH) — grupa hydroksylowa −OH. Szereg homologiczny: metanol CH₃OH (trucizna, ślepota), etanol C₂H₅OH (fermentacja, bioetanol), glikol etylenowy HO−CH₂−CH₂−OH (płyn chłodniczy), glicerol (propano-1,2,3-triol — składnik tłuszczów). Rzędowość alkoholi: I-rzędowe (R−CH₂OH — utleniają się do aldehydów, potem kwasów), II-rzędowe (R₂CHOH — utleniają się do ketonów), III-rzędowe (R₃COH — nie utleniają się łatwo, wymagają rozerwania wiązań C−C). Reakcje alkoholi: z metalami alkalicznymi (2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂), estryfikacja, dehydratacja (odwodnienie): wewnątrzcząsteczkowa (C₂H₅OH → C₂H₄ + H₂O, kat. H₂SO₄/Al₂O₃, 170°C) i międzycząsteczkowa (2C₂H₅OH → C₂H₅OC₂H₅ + H₂O, 140°C — eter dietylowy). Fenole (Ar−OH) — grupa −OH bezpośrednio przy pierścieniu aromatycznym, charakter kwasowy (fenol + NaOH → fenolan sodu + H₂O — fenole są słabymi kwasami, słabszymi od kwasów karboksylowych ale mocniejszymi od alkoholi). Fenol daje fioletowe zabarwienie z FeCl₃ (reakcja charakterystyczna). Etery R−O−R′ — słabo reaktywne, dobre rozpuszczalniki (eter dietylowy — narkoza).",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Alkohole, fenole i etery"
          },
          {
            "type": "paragraph",
            "text": "Alkohole (R−OH) — grupa hydroksylowa −OH. Szereg homologiczny: metanol CH₃OH (trucizna, ślepota), etanol C₂H₅OH (fermentacja, bioetanol), glikol etylenowy HO−CH₂−CH₂−OH (płyn chłodniczy), glicerol (propano-1,2,3-triol — składnik tłuszczów). Rzędowość alkoholi: I-rzędowe (R−CH₂OH — utleniają się do aldehydów, potem kwasów), II-rzędowe (R₂CHOH — utleniają się do ketonów), III-rzędowe (R₃COH — nie utleniają się łatwo, wymagają rozerwania wiązań C−C). Reakcje alkoholi: z metalami alkalicznymi (2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂), estryfikacja, dehydratacja (odwodnienie): wewnątrzcząsteczkowa (C₂H₅OH → C₂H₄ + H₂O, kat. H₂SO₄/Al₂O₃, 170°C) i międzycząsteczkowa (2C₂H₅OH → C₂H₅OC₂H₅ + H₂O, 140°C — eter dietylowy). Fenole (Ar−OH) — grupa −OH bezpośrednio przy pierścieniu aromatycznym, charakter kwasowy (fenol + NaOH → fenolan sodu + H₂O — fenole są słabymi kwasami, słabszymi od kwasów karboksylowych ale mocniejszymi od alkoholi). Fenol daje fioletowe zabarwienie z FeCl₃ (reakcja charakterystyczna). Etery R−O−R′ — słabo reaktywne, dobre rozpuszczalniki (eter dietylowy — narkoza)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Aldehydy i ketony — grupa karbonylowa C=O"
          },
          {
            "type": "paragraph",
            "text": "Aldehydy: na końcu łańcucha, grupa −CHO. Ketony: wewnątrz łańcucha, grupa >C=O. Otrzymywanie aldehydów: utlenianie alkoholi I-rzędowych (R−CH₂OH + CuO → R−CHO + Cu + H₂O, temp.). Otrzymywanie ketonów: utlenianie alkoholi II-rzędowych. Reakcje addycji nukleofilowej (AN) do grupy karbonylowej: addycja HCN (cyjanolhydryny), addycja wodorosiarczanów(IV), addycja alkoholi (hemiacetale i acetale). Próba Tollensa (lustra srebrnego): R−CHO + 2[Ag(NH₃)₂]OH → R−COONH₄ + 2Ag↓ + 3NH₃ + H₂O — tylko aldehydy dają wynik dodatni (ketony nie redukują odczynnika Tollensa). Próba Trommera: R−CHO + 2Cu(OH)₂ → R−COOH + Cu₂O↓ (ceglastoczerwony osad) + 2H₂O. Próba z odczynnikiem Fehlinga — podobnie, ceglasty osad Cu₂O — tylko aldehydy alifatyczne (formaldehyd i aromatyczne nie reagują z Fehlingiem). Reakcja jodoformowa (próba Liebena): pozytywna dla związków z grupą CH₃−CO− (metyloketony) i etanolu — powstaje żółty osad CHI₃ (jodoform)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Kwasy karboksylowe i ich pochodne"
          },
          {
            "type": "paragraph",
            "text": "Kwasy karboksylowe R−COOH — grupa karboksylowa −COOH. Szereg homologiczny: HCOOH (mrówkowy/metanowy — ma właściwości redukujące, daje pozytywną próbę Tollensa), CH₃COOH (octowy/etanowy — ocet), C₂H₅COOH (propionowy), C₃H₇COOH (masłowy), wyższe kwasy tłuszczowe: C₁₅H₃₁COOH (palmitynowy), C₁₇H₃₅COOH (stearynowy — nasycone), C₁₇H₃₃COOH (oleinowy — nienasycony, 1 wiązanie podwójne cis). Kwasowość: kwasy karboksylowe są słabymi kwasami (Ka ~10⁻⁴÷10⁻⁵), ale znacznie mocniejszymi od fenoli i alkoholi. Reakcje: z metalami (2RCOOH + Mg → (RCOO)₂Mg + H₂), z zasadami (RCOOH + NaOH → RCOONa + H₂O), estryfikacja (RCOOH + R′OH ⇌ RCOOR′ + H₂O). Pochodne kwasów karboksylowych: sole (RCOONa), estry (RCOOR′), amidy (RCONH₂), chlorki kwasowe (RCOCl), bezwodniki kwasowe (RCO−O−OCR). Hydroliza estrów: kwasowa (odwracalna: RCOOR′ + H₂O ⇌ RCOOH + R′OH) i zasadowa (zmydlanie — nieodwracalna: RCOOR′ + NaOH → RCOONa + R′OH). Tłuszcze (triacyloglicerole) — estry glicerolu i wyższych kwasów tłuszczowych. Tłuszcze nasycone (stałe — smalec, masło) vs nienasycone (ciekłe — oleje roślinne). Utwardzanie tłuszczów: addycja H₂ do wiązań podwójnych w tłuszczach ciekłych → tłuszcze stałe (margaryna). Zmydlanie tłuszczów: tłuszcz + 3NaOH → glicerol + 3RCOONa (mydło). Myła są solami sodowymi (stałe) lub potasowymi (mydła ciekłe) wyższych kwasów tłuszczowych. Detergenty (SDS/SLS) — syntetyczne środki powierzchniowo czynne."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Aminy, aminokwasy i białka"
          },
          {
            "type": "paragraph",
            "text": "Aminy R−NH₂ (I-rzędowe), R₂NH (II-rzędowe), R₃N (III-rzędowe). Zasadowość amin: aminy alifatyczne > NH₃ > aminy aromatyczne. Reakcja amin z kwasami tworzy sole amoniowe (R−NH₂ + HCl → R−NH₃⁺Cl⁻). Aminy aromatyczne (anilina C₆H₅NH₂) dają dodatnią próbę z wodą bromową (odbarwienie + biały osad 2,4,6-tribromoaniliny). Aminokwasy — związki dwufunkcyjne zawierające grupę aminową −NH₂ i karboksylową −COOH. W roztworze wodnym tworzą jony obojnacze (H₃N⁺−CHR−COO⁻) — amfoteryczne (reagują z kwasami i zasadami). Punkt izoelektryczny pI — pH, przy którym aminokwas występuje głównie jako jon obojnaczy (ładunek wypadkowy zero), rozpuszczalność jest najniższa. 20 aminokwasów białkowych (α-aminokwasy — grupy −NH₂ i −COOH przy tym samym atomie węgla α). 10 aminokwasów egzogennych (niezbędnych — organizm człowieka ich nie syntetyzuje). Wiązanie peptydowe −CO−NH− (amidowe) — powstaje między grupą karboksylową jednego a aminową drugiego aminokwasu. Białka — polipeptydy, struktura: I-rzędowa (sekwencja aminokwasów), II-rzędowa (lokalne struktury: α-helisa i β-harmonijka/harmonijka β, stabilizowane wiązaniami wodorowymi), III-rzędowa (przestrzenne pofałdowanie całego łańcucha — mostki disiarczkowe −S−S−, oddziaływania hydrofobowe), IV-rzędowa (asocjacja kilku podjednostek, np. hemoglobina 4 podjednostki). Denaturacja — nieodwracalne (lub odwracalne) zaburzenie struktur II-, III- i IV-rzędowych pod wpływem temperatury, pH, soli metali ciężkich, rozpuszczalników organicznych — prowadzi do utraty funkcji biologicznej. Wysalanie białek (odwracalne) — dodanie stężonego roztworu soli (NH₄)₂SO₄ powoduje wytrącenie białka bez denaturacji."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Sacharydy (węglowodany)"
          },
          {
            "type": "paragraph",
            "text": "Węglowodany — polihydroksyaldehydy lub polihydroksyketony, wzór ogólny Cn(H₂O)n (nie zawsze). Monosacharydy: glukoza (aldoheksoza, C₆H₁₂O₆ — główne źródło energii, występuje w formie pierścieniowej: α-D-glukopiranoza i β-D-glukopiranoza — anomery), fruktoza (ketoheksoza, najsłodszy cukier), galaktoza (aldoheksoza — składnik laktozy), ryboza (aldopentoza C₅H₁₀O₅ — składnik RNA), deoksyryboza (składnik DNA). Disacharydy: sacharoza (glukoza + fruktoza, wiązanie α,β-1,2-glikozydowe — cukier stołowy, nie redukuje odczynnika Fehlinga), maltoza (glukoza + glukoza, α-1,4 — cukier słodowy, redukuje), laktoza (galaktoza + glukoza, β-1,4 — cukier mlekowy, redukuje), celobioza (glukoza + glukoza, β-1,4 — produkt rozkładu celulozy). Polisacharydy: skrobia (wielocukier zapasowy roślin — amyloza nierozgałęziona α-1,4, amylopektyna rozgałęziona α-1,6; daje granatowe zabarwienie z jodem w KI), glikogen (wielocukier zapasowy zwierząt — magazynowany w wątrobie i mięśniach, bardziej rozgałęziony niż skrobia), celuloza (wielocukier strukturalny — β-1,4-glukan, główny składnik ścian komórkowych roślin; człowiek nie trawi celulozy — brak celulazy, stanowi błonnik). Próba Fehlinga/Trommera: redukujące monosacharydy (wszystkie) i disacharydy oprócz sacharozy dają ceglastoczerwony osad Cu₂O. Próba Tollensa: pozytywna dla cukrów redukujących — lustro srebrne."
          }
        ],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-7",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped-8",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": [
          {
            "id": "che-org-1",
            "question": "Podaj nazwy systematyczne: CH≡C–CH₂–CH₃ i CH₂=CH–CH=CH₂. Który z nich ulega addycji 1,4 z bromem? Napisz produkt.",
            "answer": "But-1-yn (alkin) i buta-1,3-dien (dien sprzężony). Addycji 1,4 z bromem ulega buta-1,3-dien: CH₂=CH−CH=CH₂ + Br₂ → CH₂Br−CH=CH−CH₂Br (1,4-dibromobut-2-en). Produkt addycji 1,2 to CH₂Br−CHBr−CH=CH₂.",
            "examRef": "CKE 2016"
          },
          {
            "id": "che-org-2",
            "question": "Napisz reakcję estryfikacji kwasu octowego z etanolem. Jakie są warunki tej reakcji?",
            "answer": "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (octan etylu — ester o zapachu gruszek). Reakcja odwracalna (równowagowa), powolna, katalizowana jonami H⁺ (kwas siarkowy). Dla zwiększenia wydajności: usuwać wodę (środek suszący) lub użyć nadmiaru jednego substratu (zgodnie z regułą przekory Le Chateliera).",
            "examRef": "CKE 2016"
          },
          {
            "id": "che-org-3",
            "question": "Czym różni się izomeria geometryczna (cis-trans) od optycznej? Podaj przykłady.",
            "answer": "Izomeria cis-trans wynika z braku swobodnej rotacji wokół wiązania podwójnego (lub w pierścieniu). Przykład: cis-but-2-en i trans-but-2-en. Izomeria optyczna (enancjomeria) wynika z obecności centrum chiralności (asymetrycznego atomu węgla) — cząsteczki są swoimi nienakładalnymi odbiciami lustrzanymi, skręcają płaszczyznę światła spolaryzowanego. Przykład: kwas mlekowy CH₃−C*H(OH)−COOH (enancjomery L i D).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "che-org-4",
            "question": "Zaprojektuj doświadczenie odróżniające aldehyd od ketonu. Podaj obserwacje i równania.",
            "answer": "Próba Tollensa (lustra srebrnego): do próbki aldehydu dodajemy odczynnik Tollensa [Ag(NH₃)₂]OH i ogrzewamy — na ściankach wydziela się metaliczne srebro (lustro). RCHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → RCOO⁻ + 2Ag↓ + 4NH₃ + H₂O. Dla ketonu (np. aceton): brak reakcji — roztwór pozostaje bez zmian. Próba Trommera: niebieski osad Cu(OH)₂ z aldehydem po ogrzaniu → ceglastoczerwony Cu₂O; z ketonem osad nie zmienia się (pozostaje niebieski lub czarnieje od CuO z rozkładu Cu(OH)₂).",
            "examRef": "CKE 2017"
          },
          {
            "id": "che-org-5",
            "question": "Wyjaśnij, dlaczego sacharoza nie redukuje odczynnika Fehlinga, a maltoza tak.",
            "answer": "Sacharoza (glukoza + fruktoza, wiązanie α,β-1,2) — oba anomeryczne atomy węgla (C1 glukozy i C2 fruktozy) są zaangażowane w wiązanie glikozydowe, więc żaden z monomerów nie może otworzyć pierścienia i odsłonić wolnej grupy aldehydowej/ketonowej → brak właściwości redukujących. Maltoza (glukoza + glukoza, α-1,4) — druga jednostka glukozy ma wolny anomeryczny atom węgla, może otworzyć pierścień → grupa aldehydowa → redukuje odczynnik Fehlinga.",
            "examRef": "CKE 2018"
          },
          {
            "id": "che-org-6",
            "question": "Napisz reakcję hydrolizy zasadowej tripalmitynianu glicerolu (tłuszczu). Jak nazywa się ten proces i do czego służy?",
            "answer": "Zmydlanie: (C₁₅H₃₁COO)₃C₃H₅ + 3NaOH → C₃H₅(OH)₃ (glicerol) + 3C₁₅H₃₁COONa (palmitynian sodu — mydło). Proces jest nieodwracalny (hydroliza zasadowa estru). Zmydlanie służy do produkcji mydeł. Mydła jako sole wyższych kwasów tłuszczowych obniżają napięcie powierzchniowe wody (właściwości powierzchniowo czynne).",
            "examRef": "CKE 2019"
          },
          {
            "id": "che-org-7",
            "question": "Wyjaśnij zjawisko denaturacji białek. Podaj czynniki denaturujące i skutki.",
            "answer": "Denaturacja to zaburzenie struktur II-, III- i IV-rzędowych białka przy zachowaniu struktury I-rzędowej (sekwencji). Czynniki: wysoka temperatura (>40-60°C), skrajne pH, sole metali ciężkich (Hg²⁺, Pb²⁺, Ag⁺ — wiążą się z grupami −SH), rozpuszczalniki organiczne (etanol, aceton — niszczą oddziaływania hydrofobowe), mocznik (wysokie stężenia — niszczy wiązania wodorowe). Skutek: utrata aktywności biologicznej (enzymy przestają działać), zmiana rozpuszczalności (wytrącanie), nieodwracalność większości denaturacji.",
            "examRef": "CKE 2015-2024"
          }
        ]
      }
    ]
  }
];
