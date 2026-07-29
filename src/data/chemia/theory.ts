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
        "summary": "- Atom jest **najmniejszą**, __________ metodami chemicznymi cząstką pierwiastka zachowującą jego właściwości. - Składa się z jądra atomowego (średnica ~10⁻¹⁵ **m**) __________ protony (p⁺, masa ~1 u, ładunek +1) i neutrony (n⁰, masa ~1 u, bez ładunku) oraz powłok elektronowych (elektrony e⁻, masa ~1/1840 u, ładunek −1). - __________ atomu ~10⁻¹⁰ m — jądro jest ~100 000 razy mniejsze od atomu. - Liczba atomowa Z (liczba **protonów**) __________ identyfikuje pierwiastek i określa jego miejsce w układzie okresowym.",
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "II. Struktura atomu - jdro i elektrony                                          V. Roztwory i reakcje zachodzce w roztworach    7. Atom................................................................19       wodnych    8. jdro atomowe................................................. 21    9. Wielkoci opisujce stan elektronu                                           38. Mieszaniny...................................................... 94        w atomie..........................................................22      39. Rozdzielanie mieszanin..................................... 98                                                                                  40. Stenie roztworu........................................... 100  10. Powloki i podpowloki elektronowe                                            41. Zmiana stenia roztworu................................103        w atomie..........................................................24      42. Sporzdzanie roztworów..................................105                                                                                  43. Stopie dysocjacji........................................... 107  11. Rozmieszczanie elektronów w atomie................ 26                       44. Odczyn roztworu............................................. 108  12. Konfiguracja elektronowa atomów.....................29                      45. Wskaniki kwasowo-zasadowe......................... 109  13. Konfiguracja elektronowa jonów........................32                    46. Reakcje zobojtniania i strceniowe.................110  14. Elektrony walencyjne........................................34              47. Hydroliza soli................................................. 111  15. Budowa atomu a uklad okresowy                                               48. Otrzymywanie kwasów,\n\n       pierwiastków chemicznych................................ 36                     wodorotlenków i soli....................................... 112\n\n Sprawdzian po dziale I I ..........................................39           Sprawdzian po dziale V ......................................... 114\n\nIII. Wizania chemiczne                                                          VI. Reakcje utleniania i redukcji  16. Kationy i aniony................................................ 40         49. Stopie utlenienia pierwiastka........................ 115  17. Wzory chemiczne czsteczek............................. 44                   50. Przewidywanie stopnia utlenienia  18. Elektroujemno............................................... 47                   pierwiastków...................................................117  19. Wizanie jonowe..............................................49              51. Utlenianie i redukcja. Utleniacze i reduktory 119  20. Wizanie kowalencyjne..................................... 51                52. Reakcje utleniania-redukcji..............................120  21. Wizanie kowalencyjne spolaryzowane.............. 54                         53. Bilansowanie równa reakcji  22. Wizanie koordynacyjne................................... 56                       utleniania-redukcji......................................... 122  23. Wizanie wodorowe..........................................57  24. Wizanie metaliczne.........................................59               Sprawdzian po dziale VI ....................................... 125  25. Orbitale molekularne........................................60"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "Napisz nazwy systematyczne związków chemicznych o podanych wzorach półstrukturalnych. WEGLOWODORY WEGLOWODORY A. B. C. D. CH CH2-CH3 CH2CH-CH3 CHg-CH=C-C=C-CH3 CH CHg-CH-CH-CH-CH3 Równanie reakcji chemicznej: CH2CH2 CH3 HHO CH2-CH3CH3 CH HH Zadanie 5. (0-1) HO CH2 Oceń prawdziwość zdań. Wpisz literę P, jeśli informacja jest prawdziwa, lub literę F, jeśli jest fałszywa. A. C. B. D. Zdanie P/F Cykloheksan reaguje z bromem w obecności światla wedlug mechanizmu substytucji 1. Zadanie 3. (0-2) rodnikowej. Pewien weglowodór nasycony zawiera 85,7% węgla (procenty masowe), a jego masa molowa wynosi 70. Reak- 2. Monomerem teflonu jest tetrafluoroeten. cja tego węglowodoru z bromem zachodzi według mechanizmu substytucji rodnikowej i prowadzi do 3. Cykloheksan i cykloheksen sa względem siebie izomerami. otrzymania tylko jednej monobromopochodnej. W cząsteczkach węglowodorów aromatycznych występują orbitale zdelokalizowane obsadzone a) Napisz wzór półstrukturalny (grupowy) opisanego węglowodoru. 4. zawsze przez 6 elektronów. Obliczenia: 5. 1,2-dimetylobenzen reaguje z chlorem w obecności swiatia - w wyniku tej reakcji chemicznej powstają dwie monochlorowcopochodne. Zadanie 6. (0-2) Napisz nazwy systematyczne monomerów, z których można otrzymać polimery o podanych wzorach. A. B. C. D. CH-CH2 F H H EHO C-C CH2-C-CH-CH2 [H H ] Wzór półstrukturalny (grupowy): A. b) Napisz równanie reakcji tego węglowodoru z bromem, uwzględniając warunki prowadzenia reakcji B. chemicznej. C. Równanie reakcji chemicznej: D. 64 65\n\n--- STRONA 34 --- Zadania maturaine Zadania maturalne Zadanie 7. (0-3) Zadanie 9. (0-2) Przeprowadzono ciąg przemian zgodnie z podanym schematem. Napisz równanie reakcji uwodornienia stylbenu w obecności katalizatora palladowego w temperatu- CH3 rze 25°C oraz nazwę systematyczną produktu tej reakcji chemicznej. CHECH 2 3 Równanie reakcji chemicznej: Nazwa systematyczna produktu: a) Napisz równania reakcji chemicznych oznaczonych cyframi 1–3. Zadanie 10. (0-3) Napisz wzór półstrukturalny (grupowy) oraz nazwy systematyczne węglowodorów spełniających wa- Równanie reakcji chemicznej 1. runki zadania. A. Węglowodór X można otrzymać w reakcji 2-bromopropanu z etanolowym roztworem KOH prowadzo- Równanie reakcji chemicznej 2. nej w podwyższonej temperaturze. Wzór półstrukturalny (grupowy) węglowodoru X: Równanie reakcji chemicznej 3. b) Określ warunki prowadzenia każdej z reakcji chemicznych. Warunki prowadzenia reakcji chemicznej nr 1: Warunki prowadzenia reakcji chemicznej nr 2: Nazwa systematyczna węglowodoru X: Warunki prowadzenia reakcji chemicznej nr 3: B. Węglowodór Y nie reaguje z zakwaszonym roztworem manganianu(VII) potasu, reaguje natomiast z mieszaniną nitrującą. W wyniku reakcji chemicznej powstaje produkt o charakterystycznym migda- c) Uzupełnij zdania, podkreślając właściwe określenie w każdym nawiasie. łowym zapachu i żółtym zabarwieniu. A. Reakcja chemiczna oznaczona numerem 1 to reakcja (substytucji / addycji / eliminacji). WEGLOWODORY B. Reakcja chemiczna oznaczona numerem 2 to reakcja substytucji (rodnikowej / elektrofilowej / Wzór półstrukturalny (grupowy) węglowodoru Y: WEGLOWODORY nukleofilowej). C. Reakcja chemiczna oznaczona numerem 3 to reakcja substytucji (elektrofilowej / rodnikowej / nukleofilowej). Informacja do zadań 8.-9. Nazwa systematyczna węglowodoru Y: Nazwa zwyczajowa 1,2-difenyloetenu to stylben. Związek ten występuje w formie izomerów cis-trans. Pod C. Węglowodór Z ma wzór sumaryczny C6H12. Związek ten nie odbarwia wody bromowej, natomiast"
          }
        ]
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
        "summary": "- Atomy łączą się w cząsteczki, osiągając **trwałą** __________ gazu szlachetnego (oktet — 8 elektronów walencyjnych, dla wodoru dublet — 2). - Wiązanie jonowe powstaje **przez** __________ przyciąganie się kationów i anionów (różnica elektroujemności ΔEN > 1,7 w skali Paulinga). - Metale (mała EN) **oddają** __________ → kationy, niemetale (duża EN) przyjmują elektrony → aniony. - Związki jonowe tworzą sieci krystaliczne, mają wysokie temperatury topnienia i wrzenia, przewodzą prąd po stopieniu lub rozpuszczeniu, są kruche i rozpuszczalne **w** __________ polarnych.",
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "Zadanie 25. (0-2)                                                                           Wskazania: Bóle o lekkim i rednim nasileniu: bóle glowy rónego pochodzenia, bóle zbów, j\n\na) Oblicz i napisz wartoci formalnych stopni utlenienia atomów wgla, które zaznaczono       bóle mini. Ból i gorczka w przebiegu przezibienia i grypy.                                                                                              j    we wzorach alkoholu salicylowego, kwasu salicylowego i aspiryny.                                                                                             Przeciwwskazania: Nadwraliwo na salicylany. Czynna choroba wrzodowa oldka i/lub    Formalny stopie utlenienia zaznaczonego atomu wgla w:                                    dwunastnicy.\n\n   alkoholu salicylowym                   kwasie salicylowym          aspirynie               Sposób uycia: Doustnie. Doroli: doranie 1--2 tabl. po 500 mg, maksymalnie 4 g kwasu                                                                                               acetylosalicylowego na dob. Dzieci 7-12 r..: maksymalna dawka dobowa wynosi 1000 mg                                                                                             j (2 tabl. po 500 mg na dob).\n\nb) Zaznacz liter, któr wyróniono wzory odczynników umoliwiajcych (w odpowiednich            a) Warto biologicznego okresu póltrwania aspiryny (TO,5), czyli czasu, po którym ilo tego    warunkach) zrealizowanie przemian opisanych w schemacie numerami 1 i 2.                     leku we krwi zmniejsza si do polowy pocztkowej wartoci, wynosi 3 godziny.\n\n                        Przemiana 1                                   Przemiana 2           Pewien czlowiek zayl tabletk aspiryny o godzinie 9.00.                                                                                             Oblicz i napisz, ile miligramów kwasu acetylosalicylowego pozostalo w jego organizmie                                                                                             0 godzinie 15.00.\n\n                                                                                            1 Obliczenia:\n\nA                       K2C r04 / KOH\n\nB  K2Cr20 7 / H2S 0 4\n\nC                        CuO                                          c h 3- c ( °          Odpowied: ............................................................................................................................................\n\n                                                                                            b) Poniszy schemat przedstawia uproszczon drog metabolizmu aspiryny w organizmie czlo­\n\n                                                                                               wieka.\n\nD                       KM n04 / H2S 0 4                              0                                                                          U>                                                                                                                                                                           0 ^ / N - C H 2- c f °                                                                            1                                                                               O                                                                                 z\\n                                                                                  O o                                                                                     w\n\n                                                                                            0 ^ ,,/ O H                               0 ^ ,,/ O H                         C\" |  2 'O H"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "1. Budowa atomu. Wiązania chemiczne 8 Budowa atomnu • Konfiguracja elektronowa atomów • Liczba atomowa / liczba masowa • Izotopy • Budowat uktadu okresowego pierwiastków chemicznych • Elektroujemność pierwiastków chemicznych • Rodzaje wiązan chemicznych • Oddzialywania międzycząsteczkowe • Wpływ rodzaju wiązania chemicznego na wlaściwości substancji• Hybrydyzacja orbitali atomowych CHEMIA 2. Właściwości pierwiastków chemicznych i ich związków nieorganicznych 18 Równania reakcji chemicznych • Tlenki • Kwasy • Wodorotlenki • Sole • Inne związki nieorganiczne • Pierwiastki chemiczne bloków s, p, d i f • Stopnie utlenienia pierwiastków chemicznych ZADANIA I ARKUSZE MATURALNE • Blilansowanie równan reakcji utleniania-redukcji 3. Obliczenia stechiometryczne 28 Mol i masa molowa • Objętość molowa gazów - prawo Avogadra • Obliczenia stechiometryczne Autorzy zadan i przykladow: Kinga Gnerowiez-Siudak: Budowa atomu. Wigzania chemiczne; Kinetyka i równowaga chemiczna: Grażyna Barcińska: Arkusz 1. 4. Roztwory 40 w d  Roztwory - mieszaniny substancji • Rozpuszczalność substancji Roztwory nasycone / nienasycone Malgorzata Jelinska-Kazimierczuk: Obliczenis stechiometryczne; Roztwory: Avkusz 2.; Arkusz 3. • Steżenie procentowe raztworu • Stęzenie molowe roztworu • Odczyn wodnych roztworów substancji- pH Maria Litwin, Szarota Styka-Wlazlo: Waściwosci pienwiastkow chemicznych / ich zwigzków nieorganicznych • Dysocjacja elektrolityczna • Stala i stopien dysocjacji elektrolitycznej Etbieta Megiel: Waglowodory: Jednofunkcyjne pochodne wpglowodorów 5. Kinetyka i równowaga chemiczna 52 Procesy endoenergetyczne i egzoenergetyczne • Szybkaść reakcji chemicznej Nabyta przz Cebie publkacis im dselem twdroy i wydiecy Prosmy o pzestzgarse prw, jske • Katalizatory / reakcje katalityczne • Równowaga chemiczna, stala równowagi • Regula przekory im prysups Zartoto publkac moesz udoslpric redptnie onobom blskim lub osctice manym, sle nie umeszozta i w intemece, Jes oytusesz jo frugmenty to nie amieriaj ion treici 6. Węglowodory 64 koneczre caznacz, crye to drielo, Motesz shopowac capdó pubkaoi jedye no wtasny uzytok. Szansujmy cutzą wasnosć I prawu. Weglowodory nasycone - alkany • Węglowodory nienasycone - alkeny Wipcrj na wwww.legalnakuftura.pl • Weglowodory nienasycone - alkiny • Weglowodory aromatyczne - areny. Benzen • Metylobenzen - toluen • Areny wielopierscieniowe • Izomeria węglowodorów 7. Jednofunkcyjne pochodne węglowodorów 74 nowa Fluorowcopochodne weglowodorów • Alkohole monohydroksylowe • Alkohole polihydroksylowe • Fenole era • Karbonylowe związki organiczne - aldehydy i ketony • Kwasy karboksylowe • Estry • Aminy i amidy 8. Wielofunkcyjne pochodne węglowodorów 84 Izomeria optyczna • Hydroksykwasy • Aminokwasy • Biaika • Sacharydy (cukry) • Monosacharydy - cukry proste • Disacharydy - dwucukry • Polisacharydy - wielocukry © Copynight by Nowa Era Sp. z o.0. 2014 ISBN 978-83-257-1724-6 Dzial 2 Arkusze maturalne Warszawa 2014 Arkusz 1. 98 Konsuitacja merytoryczna: Aleksandra Grabowska, Kamil Kaznowski Arkusz 2. 110 Oprscowarie redakcyine: Acriara Patriska-Saadi Redador serik: Magdalena Nedwiedzka Arkusz 3. 124 Wopoipraca redakoyne: Justyna Kaminska, Marta Meszkonka Redakcia jezykowt: Katarzyma Miler, Monka Pruska Przykładowy zestaw zadań CKE. Egzamin maturalny Projekt gratczny: Malgorzita Gregorczyk Pautina Tomaszowrska Projokd okdade: Maciej Galineki, Magorzata Gregorczyk od roku szkolnego 2014/2015 138 Realizacie projektu graticznego: Dorota Sameć Rysunki: Joanna Dumanowska, Adam Poczciwek, Dorota Samec, Marta Tarkowska"
          }
        ]
      },
      {
        "id": "atom-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
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
      },
      {
        "id": "atom-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. Zaznacz poprawn odpowied.\n\n Ile milimoli azotu potrzeba do otrzymania 0,05 mola tlenku azotu(V)?\n\n0,1983 = - 2 ' mat.x A.5mmoli Q B. 50 mmoli [ j C . lOmmoli j |D. lOOmmoli\n\n 2 ·matx + 1·12,01 u + 10-1 6,00 u + 14 -1,01u\n\n ··",
          "Zadanie 2. Zaznacz poprawn odpowied.\n\n ^at.x = 23,02 u Ile dm3wodoru i azotu, odmierzonych w warunkach normalnych, naley uy, aby otrzyma 170 g amoniaku? » Odnajdujemy w ukladzie okresowym pierwiastek o obliczonej masie atomowej. Odpowied: Hydrat ma wzór Na2C 0 3 ·7 H 20. i j A. 224 dm3wodoru i 112 dm3 azotu. | | C. 336 dm3 wodoru i 112 dm3 azotu. j |B. 336 dm3wodoru i 224 dm3 azotu. I i D. 112 dm3 wodoru i 224 dm3 azotu.\n\nwicej na WWW.ZDASZ.TO wicej na WWW.ZDASZ.TO \f-- ,-- ,, -- J-- - -- -- -- . .-- -- . -- ------ -- '-- -- -------------------\n\n18 | I. ATOMY, CZSTECZKI I STECHIOMETRIA CHEMICZN",
          "Zadanie 1. Zaznacz poprawn odpowied. 7. Atom W jakiej objtoci chlorowodoru znajduje si tyle samo atomów, ile jest zawartych w 11,2 dm3tlenku azotu(V) w warunkach normalnych? Struktura atomu\n\nf j A. 1,75 dm3 Pierwiastek chemiczny to substancja, której nie i | B. 3,5 dm3 mona rozloy na substancje prostsze w proce­ [ J C . 39,2 dm3 sie fizycznym lub chemicznym (wyklucza si tutaj i | D. 78,4 dm3 procesy rozpadu promieniotwórczego). Pierwiastek mona równie okreli jako zbiór atomów zawiera­ ·",
          "Zadanie 2. jcych po tyle samo protonów w jdrze. Atom jest obiektem o cikim, dodatnio naladowa­ Atom pewnego pierwiastka ma mas 6,645 ·10~23 g. nym jdrze atomowym, otoczonym przez elektrony Zaznacz poprawn odpowied. Atom to najmniejsza cz pierwiastka chemiczne­ poruszajce si w chmurze elektronowej wokóljdra. Ile wynosi masa atomowa tego pierwiastka? go, która zachowuje jego wlaciwoci chemiczne. Elektrony tworz powloki. A. 12 u B. 39 u C. 40 u I j D. 60 u\n\nj ··",
          "Zadanie 3. Oddzialywania w atomie Sily oddzialywania elektrostatycznego utrzymujce | Wanad jest mieszanin dwóch izotopów: 50V i 51V o zawartoci procentowej odpowiednio 0,25% i 99,75%. atom maj natur sil: j Zaznacz poprawne dokoczenie zdania. odpychajcych midzy wszystkimi elektronami; j Masa atomowa wanadu wynosi przycigajcych midzy elektronami a jdrem. Im bliej jdra znajduje si elektron, tym silniej jest j [ J A. 50,8 u przez nie przycigany.\n\n| B. 50,9 u\n\n| . C. 51,0 u\n\nI D. 52,1 u ! ]\n\n··"
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
        "summary": "- Mol jest jednostką liczności __________ w układzie SI. - Jeden mol zawiera dokładnie 6,02214076 × __________ obiektów elementarnych (liczba Avogadra NA). - Jeden mol atomów pierwiastka zawiera NA atomów, __________ mol cząsteczek związku chemicznego zawiera NA cząsteczek.",
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
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "75. Klasyfikacja kwasów........................................165                                                                                         137. Pochodzenie cukrów prostych.......................... 286   76. Wlaciwoci kwasów.......................................166               Sprawdzian po dziale X I ......................................... 227        138. Wzory lacuchowe i taflowe cukrów prostych 288                         Indeks................................................................... 333\n\n  Sprawdzian po dziale VIII .....................................167           XII. Kwasy karboksylowe                                                                                                                                  Odpowiedzi do zada............................................. 336                                                                                105. Kwasy karboksylowe........................................ 228                                                                                106. Otrzymywanie kwasów karboksylowych........... 230                                                                                                   Uklad okresowy pierwiastków chemicznych     344                                                                                107. Dysocjacja elektrolityczna IX. Wglowodory                                                                                       kwasów karboksylowych..................................232 77. Teoria strukturalna budowy                                                 108. Wlaciwoci kwasów karboksylowych...............234                                                                                109. Podobiestwo wlaciwoci kwasów    zwizków organicznych....................................168                                                                                       karboksylowych i kwasów nieorganicznych 237 78. Nazewnictwo wglowodorów                                                    110. Kwasy tluszczowe............................................ 240                                                                                111. Odczyn roztworów soli kwasów    i fluorowcopochodnych wglowodorów            171                                                                                        karboksylowych............................................... 243 79. Rzdowo atomów wgla                                                         112. Hydroksykwasy............................................... 244\n\n   w czsteczce wglowodoru............................. 173                     Sprawdzian po dziale X I I ........................................ 247\n\n80. Izomeria wglowodorów                                                       XIII. Estry i tluszcze                                                                                113. Estry.............................................................. 248    i fluorowcopochodnych wglowodorów            174                            114. Otrzymywanie estrów.....................................249                                                                                115. Nazewnictwo estrów ......................................252 81. Alkany............................................................178      116. Hydroliza estrów............................................ 253                                                                                117. Tluszcze .........................................................254"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "miotów dodatkowych - nie ma wplywu na zdanie egzaminu maturalnego. 3. Obliczenia i jednostki Egzamin jest przeprowadzany w formie pisemnej i trwa 180 minut. Sprawdż wykonane obliczenia chemiczne, a wynik podaj z odpowiednią, dokladnością. Nie zapomnij o po- Arkusz egzaminacyjny zawiera okolo 45 zadań. daniu jednostek oraz o ich prawidłowym zapisie. Zadania maturalne sprawdzają opanowanie materialu z zakresów podstawowego (ZP)  rozszerzonego (ZR). Mogą również dotyczyć zagadnier z gimnazjum (GlM). 4. Obserwacje a wniosek MATURA = ZR + ZP + GIM Podczas rozwiązywania zadan dotyczących projektowania doświadczeń chemicznych pamiętaj o odróż- nianiu obserwacji od wniosku. Pamiętaj! Zasady oceniania W trakcie egzaminu możesz korzystać z Karty wybranych wzorów i stalych fizykochemicznych na egzamin maturalny z biologi, chemii i fizyki dolaczonej do arkusza maturalnego. Pisz czytelnie. W przypadku zadan zamkniętych zdający za udzielenie poprawnych odpowiedzi może otrzymać maksymalnie 1 punkt. W przypadku zadań otwartych skala ooeniania jest szersza, np. od O do 5 punktów. Za odpowiedż Na pierwszej stronie arkusza oraz na karcie odpowiedzi wpisz swój numer PESEL można uzyskać jedynie pełne punkty (nie przyznaje się połówek punktu). Nie używaj korektora, a błędne zapisy wyraźnie przekreślaj. Nie wpisuj żadnych znaków w części przeznaczonej dla egzaminatora. Warto pamiętać! Zapisy w brudnopisie nie będą oceniane. 1. Nie przyznaje się punktów za udzielenie kilku odpowiedzi do jednego polecenia. Tylko za poprawne Zabierz na egzamin: rozwiązania, które precyzyjnie odpowiadają poleceniom, można otrzymać punkty. dowód osobisty 2. Nie przyznaje się punktów, jeśli zostaną podane dwie odpowiedzi (z czego jedna jest poprawna, a dru- ga blędna). dlugopisy z czarnym tuszem linijkę 3. Nie przyznaje się punktów za umieszczenie w rozwiązaniu zadania informacji świadczących o zasadni- czych brakach w rozumieniu zagadnienia i zaprzeczających udzielonej odpowiedzi (nawet jeślijest ona prosty kalkulator prawidlowa). Do sali, w której przeprowadzany jest egzamin maturalny, nie wolno wnosić żadnych urządzen tellekomuni- 4. Podanie poprawnego rozwiązania zadania, które zostalo uzyskane na podstawie blędnych merytorycz- kacyjnych (przede wszystkim telefonów komórkowych). Zlamanie tego zakazu grozi unieważnieniem egzaminu. nie zalożen, jest oceniane jako błędne. 5. W zadaniach obliczeniowych są oceniane trzy elementy: 1. Czytanie ze zrozumieniem tok rozumowania (odpowiednia metoda rozwiązania), Uważnie przeczytaj trešć zadania i upewnij się, że jest w pelni zrozumiała. Przeanalizuj informację teksto- wykonanie obliczeń. vbe o o z c -       s  aca podanie wyniku z wlaściwą jednostką i ze wskazaną w poleceniu dokładnością (np. do trzeciego jego rozwiązania. Korzystaj z Karty wybranych wzorów / stalych fizykochemicznych na egzamin maturalny miejsca po przecinku). z biologil, chemil i fizyki. 6. Punkt traci się za podanie wartości liczbowej wiellkości mianowanej bez jednostki lub z biędną jed- nostką. 2. Zapisywanie równań reakcji chemicznych 7. Obserwacje i wnioski do zadań dotyczących doświadczeń chemicznych są oceniane tylko wtedy, gdy Równania reakcji chemicznych zapisz w wymaganej formie (cząsteczkowej, jonowej, jonowej skróconej). doświadczenie chemiczne zostalo prawidlowo zaprojektowane (np. odpowiednio dobrano odczynniki). Szczególną uwagę zwróć na dobór współczynników stechiometrycznych, ponieważ bląd w ich zapisie powoduje utratę punktu. 2 3 4 Czytanie ze Zapisywanie"
          }
        ]
      },
      {
        "id": "stechiometria-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
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
      },
      {
        "id": "stechiometria-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. Zaznacz poprawn odpowied.\n\n Ile milimoli azotu potrzeba do otrzymania 0,05 mola tlenku azotu(V)?\n\n0,1983 = - 2 ' mat.x A.5mmoli Q B. 50 mmoli [ j C . lOmmoli j |D. lOOmmoli\n\n 2 ·matx + 1·12,01 u + 10-1 6,00 u + 14 -1,01u\n\n ··",
          "Zadanie 2. Zaznacz poprawn odpowied.\n\n ^at.x = 23,02 u Ile dm3wodoru i azotu, odmierzonych w warunkach normalnych, naley uy, aby otrzyma 170 g amoniaku? » Odnajdujemy w ukladzie okresowym pierwiastek o obliczonej masie atomowej. Odpowied: Hydrat ma wzór Na2C 0 3 ·7 H 20. i j A. 224 dm3wodoru i 112 dm3 azotu. | | C. 336 dm3 wodoru i 112 dm3 azotu. j |B. 336 dm3wodoru i 224 dm3 azotu. I i D. 112 dm3 wodoru i 224 dm3 azotu.\n\nwicej na WWW.ZDASZ.TO wicej na WWW.ZDASZ.TO \f-- ,-- ,, -- J-- - -- -- -- . .-- -- . -- ------ -- '-- -- -------------------\n\n18 | I. ATOMY, CZSTECZKI I STECHIOMETRIA CHEMICZN",
          "Zadanie 1. Zaznacz poprawn odpowied. 7. Atom W jakiej objtoci chlorowodoru znajduje si tyle samo atomów, ile jest zawartych w 11,2 dm3tlenku azotu(V) w warunkach normalnych? Struktura atomu\n\nf j A. 1,75 dm3 Pierwiastek chemiczny to substancja, której nie i | B. 3,5 dm3 mona rozloy na substancje prostsze w proce­ [ J C . 39,2 dm3 sie fizycznym lub chemicznym (wyklucza si tutaj i | D. 78,4 dm3 procesy rozpadu promieniotwórczego). Pierwiastek mona równie okreli jako zbiór atomów zawiera­ ·",
          "Zadanie 2. jcych po tyle samo protonów w jdrze. Atom jest obiektem o cikim, dodatnio naladowa­ Atom pewnego pierwiastka ma mas 6,645 ·10~23 g. nym jdrze atomowym, otoczonym przez elektrony Zaznacz poprawn odpowied. Atom to najmniejsza cz pierwiastka chemiczne­ poruszajce si w chmurze elektronowej wokóljdra. Ile wynosi masa atomowa tego pierwiastka? go, która zachowuje jego wlaciwoci chemiczne. Elektrony tworz powloki. A. 12 u B. 39 u C. 40 u I j D. 60 u\n\nj ··",
          "Zadanie 3. Oddzialywania w atomie Sily oddzialywania elektrostatycznego utrzymujce | Wanad jest mieszanin dwóch izotopów: 50V i 51V o zawartoci procentowej odpowiednio 0,25% i 99,75%. atom maj natur sil: j Zaznacz poprawne dokoczenie zdania. odpychajcych midzy wszystkimi elektronami; j Masa atomowa wanadu wynosi przycigajcych midzy elektronami a jdrem. Im bliej jdra znajduje si elektron, tym silniej jest j [ J A. 50,8 u przez nie przycigany.\n\n| B. 50,9 u\n\n| . C. 51,0 u\n\nI D. 52,1 u ! ]\n\n··"
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
        "summary": "- Teoria Arrheniusa: kwas to substancja, która w roztworze wodnym __________ na kationy H⁺, zasada dysocjuje na aniony OH⁻. - Ograniczenie: dotyczy __________ roztworów wodnych. - Teoria Brønsteda-Lowry'ego (protonowa): kwas to donor __________ (H⁺), zasada to akceptor protonu.",
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
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "94. Wzory strukturalne i pólstrukturalne                                                                                                                    e Arkusze maturalne z kluczem odpowiedzi                                   e Rozwizania wszystkich zada        alkoholi i fenoli............................................... 204                                                                                  e Zadania do wszystkich tematów i dzialów                                  *s Aktualne postpy w nauce  95. Wlaciwoci alkoholi.......................................206                                                                                            ® Zadania z gwiazdk                                                         Slownik poj  96. Utlenianie alkoholi.........................................209                                                                                          Test na wejcie  97. Wlaciwoci fenoli .........................................211                                                                                           b Wiedza  98. Odrónianie fenoli od alkoholi......................... 213 \f                                                                                                          j  Ukladamy proporcj.\n\n                                                                                                          I c  _ reaguje z _ ,                                                                                            !                                                                                                           i 5 moli 0 2 -- -- -- 2 molami N 2                                                                              i\n\n                                                                                                          i                   .                                                                                           I                                                                                                           i 1C , reaguje z                                                                                                           j 15 moli 0 2 -- -- nNz                                                                                         ,\n\n                                                                                                          I nN2 = 6 moli                                                                                                  I\n\n1. Mol                                                                                                       10 moli - 6 moli = 4 mole N2 pozostannieprzereagowane                                                        I\n\n                                                                                                             * Z równania reakcji wynika równie, e z 5 moli tlenupowstaj 2 mole tlenku azotu(V), zatem z 15 moli tlenu (\n\n                                                                                                             powstanie 6 moli tlenku azotu(V).                                                                            j\n\nI Podstawowe informacje                                                                                   | Odpowied: W sklad mieszaniny poreakcyjnej wchodz: 2,408 1024 czsteczek azotu i 3,612 ·1024 czsteczek |\n\n                                                                                                          | tlenku azotu(V).                                                                                j"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "elektronu walencyjnego. b) Uzupełnij tabelę. Symbol Liczba BUDOWA ATOMU. WIAZANIA CHEMICZNE chemiczny atomowa Z masowa A protonów elektronów neutronów Jest na to sposób! BUDOWA ATOMU. WIAZANIA CHEMICZNE 21 45 Ustalanie konfiguracji elektronowej Położenie pierwiastków chemicznych w układzie okresowym ułatwia zapamiętanie kolejności zapeł- c) Zapisz konfigurację elektronową atomu tego pierwiastka chemicznego w formie pelnej niania powłok elektronowych - wystarczy poruszać się wzdłuż rzędów: (z uwzględnieniem podpowłok) i skróconej. Konfiguracja elektronowa: 1dd←sd Skrócony zapis konfiguracji elektronowej: początek → 1s 15 d) Uzupełnij tabelę, wpisując informacje dotyczące elektronów walencyjnych w atomie tego 2s 2p pierwiastka chemicznego oraz opisując stan kwantowy niesparowanego elektronu. 3s 3p 4s 3d 4p Liczba elektronów walencyjnych 5s 4d 5p Schemat klatkowy konfiguracji 6s 5d 6p elektronów walencyjnych 7s 6d 7p Wartości liczb kwantowych dla n 1 niesparowanego elektronu 4f walencyjnego 5f → konied Poprawna odpowiedź blok s blok p blok d blok f a) Numer Symbol bloku 1 p. - za poprawne określenie Ustalanie wartości magnetycznej liczby kwantowej okresu grupy konfiguracyjnego numeru okresu, grupy i podanie Wartości magnetycznej liczby kwantowej (m) można łatwiej ustalić, korzystając z umownego, podane- symbolu bioku konfiguracyjnego. 4 3 d go niżej zapisu. b) s d m= 0 m = -2 mt = 0 m= 2 Symbol Liczba 1 p. - za poprawne napisanie m=-1 m = 1 chemiczny Sc atomo- wa Z 21 masowa 45 A proto- nów 21 elektro- nów 21 neutro- nów 24 oraz podanie liczb: protonów, symbolu pierwiastka chemicznego elektronów i neutronów. p m = −1 m=0 m = 1 I− = ( ξ-=  m=-2 m=0 m=1 m = 2 m=3 8 9\n\n--- STRONA 6 --- Zadania maturalne Zadania maturaine Zadanie 1. (0-2) Zadanie 6. (0-2) Atom pewnego pierwiastka chemicznego o masie atomowej 52 u zawiera 28 neutronów. Poniżej przedstawiono schematy orbitali atomowych oznaczone cyframi 1.-4. a) Przedstaw rozmieszczenie elektronów w atomie tego pierwiastka chemicznego w postaci pelnej 1. 2 2. Iz 3. 4. z (z uwzględnieniem podpowłok) oraz schematu klatkowego. Konfiguracja elektronowa: Schemat klatkowy: x y x x y x y b) Podaj wartości liczb kwantowych opisujących stan kwantowy zaznaczonego na schemacie klatko- wym elektronu. Uzupełnij zdania, wpisując odpowiednie oznaczenia orbitali. Nazwy liczb kwantowych glówna poboczna magnetyczna A. Identyczną wartość pobocznej liczby kwantowej mają orbitale oznaczone cyframi..... Wartości liczb kwantowych B. Na podpowłoce, tworzonej między innymi przez orbital oznaczony cyfrą..... może znajdować się maksymalnie 10 elektronów, a na podpowłoce, tworzonej przez orbital oznaczony cyfra.... moga Zadanie 2. (0-1) znajdować się 2 elektrony. Elektrony walencyjne pewnego pierwiastka chemicznego opisują następujące liczby kwantowe: C. W wyniku nakładania się takich samych orbitali, oznaczonych cyframi.... owstają wia- zania π. Numer elektronu Wartości liczb kwantowych D. Na 1. powłoce elektronowej może znajdować się wyłącznie orbital oznaczony cyfrą n 1 m ms BUDOWA ATOMU. WIAZANIA CHEMICZNE 1. 3 0 0 Zadanie 7. (0-2) BUDOWA ATOMU. WIAZANIA CHEMICZNE Konfiguracje elektronowe atomów kilku pierwiastków chemicznych mają następującą postać: 2 3 0 0 Pierwiastek chemiczny A: 1s2 2s22p2 Pierwiastek chemiczny C: 1s2 2s2 2pb 3s2 3pb 4s2 3. 3 1 -1 -IN Pierwiastek chemiczny B: 1s2 2s2 2pb 3s2 3p6 4s2 3d10 Pierwiastek chemiczny D: 1sl 2s2 2p6 3s2 3p5 Podaj nazwę tego pierwiastka chemicznego oraz skrócony zapis konfiguracji elektronowej (z uwzględ-"
          }
        ]
      },
      {
        "id": "redox-elektrochemia",
        "title": "Utlenianie i redukcja — elektrochemia",
        "summary": "- Utlenianie (oksydacja) to oddawanie __________ wzrost stopnia utlenienia. - Redukcja to przyjmowanie __________ obniżenie stopnia utlenienia. - Utleniacz (akceptor elektronów) __________ ulega redukcji.",
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
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "mol                                             j                                                                                                 [\n\n                                                                                                          i Rozwizanie                                                                                      j\n\nJednostka liczby Avogadra:     |ub                                                                           W 4 molach H 3P04jest: 12 moli wodoru, 4 mole fosforu i 16 moli tlenu, czyli 32 mole wszystkich atomów, j\n\n                                                                                                              Obliczamy liczb poszczególnych atomów ( N ).                                                  j\n\n       Zapis                                                             Interpretacja                       N h = 12 moli ·6,02 -1023 atomów ·mol-1 = 7,224 - 1024 atomów                                  I 1 mol Na      6,02 ·1023 atomów sodu 1 moi 02      6,02 1023 dwuatomowych czsteczek tlenu                                                         N p = 4 mole 6,02 ·1023 atomów mol\" 1= 2,408 ·1024 atomów                                      I 1 moi Fe2'    6,02 ·1023jonów elaza(I i) 1 mol SO.-t2  6,02 ·1023 jonów siarczanowych(VI)                                                          j N 0 ~ 16 moli 6,02 ·1023 atomów ·mol\" 1= 9,632 ·1024 atomów                                     j 1 mol e       6,02 ·1023 elektronów 2 mole HCl    1,204 ·1024 czsteczek chlorowodoru                                                          | ^sumaryczna = 32 m° l e ' 6,02 ·1023 atomów ·mol\" 1= 1,9264 1025 atomów                         j 3 mole 03     1,806 ·1024trójatomowych czsteczek tlenu 4 mole Sbji   2,408 ·1024jonów antymonuj                                                                     Odpowied: W 4 molach kwas u ortofosforowego(V) znajduje si 1,9264 -1025 wszystkich atomów. Na t liczb i 5 moli N03    3,010 ·1024jonów azotanowych(V) 5 mol: c-     3,612 ·1024elektronów                                                                          sklada si 7,224 ·1024 atomów wodoru, 2,408 1024 atomów fosforu i 9,632 1024 atomów tlenu.      !               6,02 ·1023 czsteczek kwasu azotowego(lll) zawiera 6,02 ·1023 atomów wodoru, 6,02 ·1023 1 mol HN02    atomów azotu i 1,204 ·1024atomów tlenu                                                         Mole rónych substancji róni si objtoci i mas               1,204 ·1024 czsteczek kwasu siarkowego(IV) zawiera 2,408 ·1024atomów wodoru, 1,204 ·1024 2 mole H2S03  atomów siarki i 3,612 ·1024atomów tlenu                                                                                           B r2 ^      25. .           207 g Pb 3 moie H-,    1,806 ·1024 czsteczek wodoru zawiera 3,612 -1024 atomów wodoru                                                                                                                                                   \\                 \\n a Przyklad 1. W celu otrzymania tlenku azotu(V) do reaktora wprowadzono 10 moli azotu i 15 moli tlenu. Oblicz liczb poszczególnych czsteczek w mieszaninie poreakcyjnej (przy zaloeniu, e reakcja jest nieodwracalna).\n\nRozwizanie\n\n Zapisujemy równanie reakcji.\n\n                                        2 N2 + 5 0 2--»-2 N20 5\n\n Z równania reakcji wynika, e 2 mole azotu reaguj z 5 molami tlenu. Z 10 molami azotu przereaguje za­"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "C. Utlenianie SO2 do SO3 w obecności NO2. D. Bromowanie toluenu w obecności żelaza. Przykład 6 E. Reakcja magnezu z jodem w obecności wody. Stała równowagi reakcji chemicznej, której produktem jest mrówczan metylu, w temperaturze 25°C Zadanie 2. (0-2) CKE wynosi Kc = 2,25. Stężenia pozostałych związków chemicznych w stanie równowagi wynosiły kolej- Zródlo: CKE maj 2014 (PR), zad, 17. no: [CH3OH] = 2 m, [HCOOH] = 3 m i [H2O] = 4 . Do przeprowadzenia reakcji chemicznej Do wodnego roztworu kwasu cytrynowego dodano nadmiar wodnego roztworu wodorowęglanu sodu użyto takze roztworu kwasu siarkowego(VI). NaHCO3. Stwierdzono, że temperatura mieszaniny poreakcyjnej jest znacznie niższa niż temperatura roz- tworów przed ich zmieszaniem. Zaobserwowano także wydzielanie bezbarwnego gazu. a) Napisz w postaci cząsteczkowej równanie opisanej reakcji chemicznej, uwzględniając wszystkie a) Spośród podanych zależności wybierz i podkreśl tę, która jest prawdziwa dla entalpii procesu za- substancje, które biorą w niej udział. chodzącego w opisanym doświadczeniu. Równanie reakcji chemicznej: ΔH<0 ΔH=0 ΔH>0 b) Zapisz wyrażenie na stałą równowagi tej reakcji chemicznej. b) Napisz w formie cząsteczkowej równanie reakcji, która zaszła w czasie doświadczenia. Przyjmij, że c) Oblicz stężenie molowe estru w stanie równowagi chemicznej. kwas cytrynowy przereagowal z wodorowęglanem sodu w stosunku molowym 1 : 3. Zastosuj nastę- pujący wzór kwasu cytrynowego: C3H4(OH)(COOH)3. Obliczenia: KINETYKA I RÓWNOWAGA CHEMICZNA KINETYKA I ROWNOWAGA CHEMICZNA Informacja do zadań 3.-5. W silnikach spalinowych przebiegają różne reakcje uboczne. Powstają spaliny zawierające m.in. tlenki azotu. Tlenek azotu(II) na powietrzu brunatnieje. Zachodzi reakcja chemiczna zgodnie z równaniem: 2 NO(gi + O2ig) → 2 NO2ig) ΔH298k = −114,1 kJ d) Wskaż i podkreśl rodzaj katalizy opisanej w zadaniu. Odpowiedź uzasadnij. Zadanie 3. (0-2) Kataliza (heterogeniczna / homogeniczna). a) Określ typ przedstawionej powyżej reakcji chemicznej ze względu na efekt cieplny. Uzasadnienie: Typ reakcji chemicznej: b) Podaj wzór sumaryczny tlenku azotu (NO, NO2), który jest tlenkiem kwasowym. Wzór sumaryczny tlenku: Przykład poprawnego rozwiązania Zadanie 4. (0-2) a) Równanie reakcji chemicznej: 1 p. - za poprawne napisanie Oblicz stałą równowagi opisanej reakcji chemicznej, zakładając, żę równowaga reakcji tlenku azotu(II) CH3OH + HCOOH HCOOCH3}+H_2O H2O równania reakcji chemicznej. z tlenem ustaliła się przy stężeniach: [NO] = 0,6  [O2] = 0,7 m [NO2] = 0,8 m Wynik podaj z do- mol mol kładnością do dwóch miejsc po przecinku. W równaniach reakcji, w których ustala się stan równowagi, brak zapisu ≥\" nie powoduje utraty punktów. Obliczenia: b) K C = [HCOOCH3][H_2O] [CH3OH][HCOOH] K{[CH3OH][HCOOH] 1 p. - za poprawne zapisanie c) [HCOOCH_3] = [OH] wyrażenia na stala równowagi. [HCOOCH3]= 2.25·2dm-3 mol mol 2 p. - za zastosowanie poprawnej 4 mol metody obliczenia, poprawne wykonanie obliczeń i podanie [HCOOCH3]=3,375 dm3 mol wyniku z poprawną jednostką. d) Kataliza (heterogeniczna / homogeniczna). 1 p. - za poprawne wskazanie Uzasadnienie: Zarówno substraty, produkty, jak i kataliza- rodzaju katalizy i uzasadnienie odpowiedzi. tor występują w tym samym stanie skupienia – cieklym. 52 53\n\n--- STRONA 28 --- Zadania maturalne Zadania maturaine Zadanie 5. (0-1) Zadanie 7. (0-1) Uzupełnij tabelę dotyczącą zmiany położenia stanu równowagi opisanej reakcji chemicznej po zmianie Zapisz wyrażenia na stale równowagi chemicznej dla podanych reakcji:"
          }
        ]
      },
      {
        "id": "chemia-opisowa",
        "title": "Chemia opisowa pierwiastków",
        "summary": "- Układ okresowy (Mendelejew) grupuje pierwiastki według __________ Z i okresowego powtarzania się właściwości. - W okresie (→): rośnie elektroujemność, energia jonizacji i __________ kwasowy tlenków; maleje promień atomowy i charakter metaliczny. - W grupie (↓): rośnie promień atomowy i __________ metaliczny; maleje elektroujemność i energia jonizacji.",
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
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "-obliczamy mas molow czsteczkowego tlenu: M 0l = 2 ·16 g ·mol-1 = 32 g ·mol-1                         Rozwizanie a)\n\n               0,128 j = 0,004 mola                                                                       Przeliczamy jednostki: 4900 cm3= 4,9 dm3        Sposób II              32 g ·mol 1                                                                                 Sposób I\n\n Obliczamy liczb moli atomów tlenu.                                                                       Przeksztalcamy wzory.                            Ukladamy proporcj.\n\n1 mol 0 2-- 2 mole O                                                                                               m                                      . _ , , ma mas                                                                                                                        ·Vn 0,004 mola 0 2-- n0    n0 = 0,008 mola                                                                   V = n Vn                                         4,9 dm3          47 |                                                                                                                    M                                                                                                                                                           m / j * ma mas                                                                                                                                                           22,4 dm3         4* Odpowied: Próbka 128 mg tlenu zawiera 0,008 mola atomów tlenu.                                                                                                          M : V0 7g -22,4dm3 ·mol 1 = 32 2 ·mol                                                                                                          V                  4,9 dm3                       7 g ·22,4dm3         32 g jest to masa 1 mola gazu.  Przyklad 2.                                                                                                                                                  4,9 dm3 Oblicz mas molow ortofosforanu(Y) elaza(ll).                                                                                                          Odpowied: Masa molowa gazu w warunkach normalnych wynosi 32 g ·mol-1. Rozwizanie  Zapisujemy wzór sumaryczny zwizku chemicznego.                                                          Rozwizanie b)                                    i Przeliczamy jednostki.                                                                                                           Przeksztalcamy wzory.                            0°C = 273 K, czyli 30°C = (30 + 273) K = 303 K    Fe3(P0 4)2                                                                                                                                              5723 cm3 = 5,723 dm3  Z ukladu okresowego odczytujemy masy atomowe pierwiastków tworzcych zwizek chemiczny, zaokrglamy        p V = n -R ·T  m-R-T                                                                                                                            M    je i sumujemy odpowiednie ich wielokrotnoci.    M = 3 mFe + 2 ·m p + 8 ·m0 = 3 ·56 g ·mol-1 +2-31 g ·mol-1 + 8 ·16 g ·mol-1 = 358 g ·mol-1            Obliczamy mas molow gazu.\n\nOdpowied: Masa molowa ortofosforanu(V) elaza(II) wynosi 358 g ·mol-1.                                    m -R-T 7 g ·83,1 hPa ·dm3 ·mol-1 ·K-1 ·303 K                 , ,\n\n                                                                                                         M = ------ = ------------                        = 28 2 ·mol 1"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "Oblicz masę atomową wodoru (stosując dane z dokładnością do czwartego miejsca po przecinku), je- śli wiadomo, że atomy ¹H stanowią 99,98% wszystkich atomów tego pierwiastka w przyrodzie. Wynik podaj z dokładnością do czwartego miejsca po przecinku. Obliczenia: Zadanie 12. (0-3) Pojęciem nadrzędnym w stosunku promien BUDOWA ATOMU. WIAZANIA CHEMICZNE do pojęć promienia kowalencyjnego wiszania. BUDOWA ATOMU. WIAZANIA CHEMICZNE oraz metalicznego jest pojęcie pro- mienia wiązania. Podkreśla ono, że 225 Nuklidy promieniotwórcze (radioaktywne) rozpadają się spontanicznie na inne nuklidy, emitując promie- Informacja do zadań 10.-11. znajdują się elektrony wiążące, między dwoma jądrami atomowymi 200- x 13 niowanie α lub β. Rozpad promieniotwórczy może być bardzo szybki lub bardzo powolny. Jego szybkość w przypadku wiązania atomowego 175 x jako para elektronowa (...). Zmie- opisuje się za pomocą okresów półtrwania (symbol T1/2), czyli czasów, w jakich rozpada się połowa pier- rzone spektroskopowo promienie 150 wotnie istniejących jąder atomowych. kowalencyjne i metaliczne po przeli- 125 czeniu na pojedyncze wiązania ko- chemicznego pierwiastka Nazwa chlor chemiczny Symbol 36Cl póltrwania T1/2 3- 10^5 lat Okres chemicznego pierwiastka Nazwa wegiel chemiczny Symbol 15C póltrwania T1/2 Okres 2,5 s w jednym szeregu. Wykazują one walencyjne można uporządkować wyraźną okresowość. 100 75- węgiel 4C 5730 lat kobalt 00Co 5,27 lat 50 cynk €5Zn 245 dni azot 13N 10 min 25- Na podstawie: K.-H. Lautenschláger, W. Schröter, A. Wanninger, Nowoczeone kompendim cheni, Warszawa 2007. 0 2 4 6 8 10 12 14 16 18 20.32 3436 38 50 52 54 5682 84 86 88 2 Zadanie 10. (0-1) Na podstacie: K.-H. Lautenschläger, W. Schröter, A. Wanninger, Nnoczesne komperdliuzn chemi, Warszawa 2007. Archeolodzy znależli stary drewniany przedmiot. Określ wiek tego przedmiotu, wiedząc, że masa za- a) Na podstawie podanych informacji określ, który z litowców ma największy promień atomowy, wartego w nim izotopu węgla 14C wynosi 12,5% początkowej masy tego izotopu. a który z berylowców – najmniejszy. Obliczenia: Litowiec o największym promieniu atomowym to: Berylowiec o najmniejszym promieniu atomowym to: b) Uzupełnij zdania, podkreślając właściwe określenie w każdym nawiasie. A. litowce C. mniejszy E, zwiększa się G. anionu B. fluorowce D. większy F. zmniejsza się H. kationu Najmniejsze promienie atomowe mają (A. / B.). Promień atomu kobaltu jest (C. / D.) niż promień atomu itru. Promien atomowy (E. / E) wraz ze wzrostem numeru okresu. Promień (G. / H.) jest mniejszy niż promień atomowy. 12 13\n\n--- STRONA 8 --- Zadania maturaine Zadania maturaine Zadanie 13. (0-1) Jest na to sposób! Zaznacz odpowiedź, w której znajdują się wyłącznie wzory sumaryczne cząsteczek o zerowym mo- mencie dipolowym. Ustalanie rodzaju wiązania (σi π) σ A. CH4, CCl, SO2, HCl B. HCl, NH3, CH4, CCl4 C. CH4, CCl4, CO2, SO3 D. CH4, NH3, SO3, CO2 Wiązanie pojedyncze = wiązanie σ σ Zadanie 14. (0-2) Wiązania wodorowe to specyficzne oddziaływania występujące między atomami wodoru połączonymi Wiązanie podwójne = wiązanie σ + wiązanie π π bezpośrednio z atomami silnie elektroujemnych pierwiastków chemicznych (np. fluorem, tlenem, azotem i siarką), a atomami pierwiastków chemicznych o dużej elektroujemności, które mają wolne pary elektro- σ nowe, Oddziaływania te wpływają na właściwości fizyczne związków chemicznych. Wiązanie potrójne = wiązanie σ + 2 wiązania π a) Podkreśl wzory związków chemicznych, które tworzą wiązania wodorowe. π"
          }
        ]
      },
      {
        "id": "nieorganiczna-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
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
      },
      {
        "id": "nieorganiczna-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. Zaznacz poprawn odpowied.\n\n Ile milimoli azotu potrzeba do otrzymania 0,05 mola tlenku azotu(V)?\n\n0,1983 = - 2 ' mat.x A.5mmoli Q B. 50 mmoli [ j C . lOmmoli j |D. lOOmmoli\n\n 2 ·matx + 1·12,01 u + 10-1 6,00 u + 14 -1,01u\n\n ··",
          "Zadanie 2. Zaznacz poprawn odpowied.\n\n ^at.x = 23,02 u Ile dm3wodoru i azotu, odmierzonych w warunkach normalnych, naley uy, aby otrzyma 170 g amoniaku? » Odnajdujemy w ukladzie okresowym pierwiastek o obliczonej masie atomowej. Odpowied: Hydrat ma wzór Na2C 0 3 ·7 H 20. i j A. 224 dm3wodoru i 112 dm3 azotu. | | C. 336 dm3 wodoru i 112 dm3 azotu. j |B. 336 dm3wodoru i 224 dm3 azotu. I i D. 112 dm3 wodoru i 224 dm3 azotu.\n\nwicej na WWW.ZDASZ.TO wicej na WWW.ZDASZ.TO \f-- ,-- ,, -- J-- - -- -- -- . .-- -- . -- ------ -- '-- -- -------------------\n\n18 | I. ATOMY, CZSTECZKI I STECHIOMETRIA CHEMICZN",
          "Zadanie 1. Zaznacz poprawn odpowied. 7. Atom W jakiej objtoci chlorowodoru znajduje si tyle samo atomów, ile jest zawartych w 11,2 dm3tlenku azotu(V) w warunkach normalnych? Struktura atomu\n\nf j A. 1,75 dm3 Pierwiastek chemiczny to substancja, której nie i | B. 3,5 dm3 mona rozloy na substancje prostsze w proce­ [ J C . 39,2 dm3 sie fizycznym lub chemicznym (wyklucza si tutaj i | D. 78,4 dm3 procesy rozpadu promieniotwórczego). Pierwiastek mona równie okreli jako zbiór atomów zawiera­ ·",
          "Zadanie 2. jcych po tyle samo protonów w jdrze. Atom jest obiektem o cikim, dodatnio naladowa­ Atom pewnego pierwiastka ma mas 6,645 ·10~23 g. nym jdrze atomowym, otoczonym przez elektrony Zaznacz poprawn odpowied. Atom to najmniejsza cz pierwiastka chemiczne­ poruszajce si w chmurze elektronowej wokóljdra. Ile wynosi masa atomowa tego pierwiastka? go, która zachowuje jego wlaciwoci chemiczne. Elektrony tworz powloki. A. 12 u B. 39 u C. 40 u I j D. 60 u\n\nj ··",
          "Zadanie 3. Oddzialywania w atomie Sily oddzialywania elektrostatycznego utrzymujce | Wanad jest mieszanin dwóch izotopów: 50V i 51V o zawartoci procentowej odpowiednio 0,25% i 99,75%. atom maj natur sil: j Zaznacz poprawne dokoczenie zdania. odpychajcych midzy wszystkimi elektronami; j Masa atomowa wanadu wynosi przycigajcych midzy elektronami a jdrem. Im bliej jdra znajduje si elektron, tym silniej jest j [ J A. 50,8 u przez nie przycigany.\n\n| B. 50,9 u\n\n| . C. 51,0 u\n\nI D. 52,1 u ! ]\n\n··"
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
        "summary": "- Chemia organiczna to chemia związków węgla (z wyjątkiem CO, __________ węglików, cyjanków i węglanów, które zalicza się do nieorganicznych). - Atom węgla (4 elektrony walencyjne) tworzy 4 wiązania kowalencyjne, może łączyć __________ w długie łańcuchy (katenacja) i tworzyć wiązania pojedyncze, podwójne i potrójne. - Hybrydyzacja: sp³ (alkany), sp² __________ areny), sp (alkiny).",
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
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "22 cyklobutan                         ; 18 b |Vr =0,025 dm3 +0,025 dm3^ 0,05 dm3 0-5                                                                                                                         H2C --- CH;;\n\n        i          /7CH3cooNa   0,0025 mol       . . _3                                                                                                           metylocyklopropan\n\n         ! cm=-- -                    =0,05 mol-dm 3         ;j m       l/r          0,05dm3                                                                                                                                  l%p. - za napisanie poprawnego wzoru pólstrukturalnego (grupowego) i podanie nazwy\n\n         j Odp.: Stenie molowe uzyskanego roztworu jest równe 0,05 mol ·dm-3.                                                    systematycznej wglowodoru:\n\n                                                                                                                              b                                                                                           : CH,                                                                                                                                                                      H\\ /CH,                    CH,\\ /CH,                 . |:         c | 1 p. - za podanie wzorów dwóch kwasów Brónsteda znajdujcych si w zlewce B: H30+yH20                                  CH2= C H - C H 2- C H , albo                     X=C      tub              Y= C       albo C H /= C - C H ,\n\n        d . 1 p. - za napisanie wzoru slabszej zasady: Cl\"                                                                                                           CH,                H       H                   H     ^ ; ;,3\n\n                                                                                                                                          but-l-en                                              c/s-but-2-en           2-metylopropen                                                                                                                                                                      trans-b ut-2-en          j 1 p. - za uzupelnienie tabeli, wpisanie w puste rubryki wszystkich poprawnych wzorów albo          i nazw zidentyfikowanych zwizków chemicznych:                                                                           1 p. - za uporzdkowanie wymienionych produktów destylacji ropy naftowej od najmniej\n\n                                                 CaC03 albo wglan wapnia                                                         lotnego do najbardziej lotnego:\n\n                1j E170 i1                                                                                                23     olej opalowy (mazut), olej napdowy, nafta, benzyna, gazy rafineryjne                                                      0-1\n\n                   E236              HCOOH albo kwas metanowy albo kwas mrówkowy\n\n                i            f            C02 albo tlenek wgla(IV) albo dwutlenek wgla                                                                               Wzrost lotnoci                 | E290 1                                                                                                               0-1     19                                                                                                                    1      1 p. - za podanie stosunku liczby,czsteczek tlenku wgla(IV) do liczby czsteczek wody w"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "typ hybrydyzacji: sp2 i/lub trygonalna Typ wiązania Wiązanie jonowe Wiązanie kowalencyjne Wiązanie chemicznego koordynacyjne niespolaryzowane spolaryzowane b) Liczba wiązań Cząsteczka ta wykazuje (A. / B.) moment dipolowy, zatem 1 p. - za poprawne uzupeinienie jest cząsteczką (C, / D.), a więc dobrze rozpuszcza się zdania. Zadanie 18. (0-1) w (E. / E). Uczeń narysował wzory elektronowe kreskowe substancji. Zaznacz wzór elektronowy substancji, w któ- rym uczeń nie uwzględnił wszystkich niewiążących par elektronowych. A. H-Cl B.CI-C C.F-O-F D. N=N 14 15\n\n--- STRONA 9 --- Zadania maturalne Zadania maturaine Zadanie 19. (0-2) Zadanie 22. (0-2) Narysuj wzór elektronowy kreskowy cząsteczki tlenku siarki(VI), zakładając, że atom siarki jest w sta- Określ typ hybrydyzacji oraz ksztalt zhybrydyzowanych orbitali walencyjnych w podanych cząstecz- nie podstawowym. Uzupelnij zdanie, wpisując nazwy atomów pierwiastków chemicznych, które są kach. donorami lub akceptorami par elektronowych. Wzór elektronowy: Wzór cząsteczki Typ hybrydyzacji zhybrydyzowanych Ksztalt orbitali CH2=CH2 BeCl2 CH Donorami par elektronowych są atomy , natomiast akceptorami - atomy Zadanie 20. (0-2) Zadanie 23. (0-1) [CKE] Porównaj budowę oraz właściwości HBr i HCl. Zródlo: Informator o egzarinie maturalnym z chemii od roku szkolnego 2014/2015, zad. 2. Wypełnij tabelę, wpisując literę P, jeżeli zdanie jest prawdziwe, lub literę F, jeśli jest fałszywe. a) Oblicz różnice elektroujemności pierwiastków w tych związkach chemicznych. Skorzystaj z Karty wybranych wzorów i stałych fizykochemicznych na egzamin maturalny z biologii, chemii i fizyki. Zdanie P/F Różnica elektroujemności między atomami w cząsteczce HBr: Typ hybrydyzacji orbitall atomu azotu w cząsteczce amoniaku jest taki sam, jak typ Różnica elektroujemności między atomami w cząsteczce HCl: 1. hybrydyzacji orbitali atomu węgla w cząsteczce metanolu. b) Określ rodzaj wiązania chemicznego występującego w tych związkach chemicznych. 2. Hybrydyzację, w której uczestniczą jeden orbital s oraz dwa orbitale p, nazywamy hybrydyzacją BUDOWA ATOMU. WIAZANIA CHEMICZNE sp³ (tetraedryczną). BUDOWA ATOMU. WIAZANIA CHEMICZNE Rodzaj wiązania chemicznego: 3. Ksztalt cząsteczki tlenku węgla(lV) wynika z liniowego ulożenia zhybrydyzowanych orbitali atomowych wegla. c) Napisz wzór substancji, która jest mocniejszym kwasem. Zadanie 24. (0-2) CKE Zródlo: CKE maj 2014 (PR), zad. 1. Jest na to sposób! Na rysunku przedstawiono schemat ukladu okresowego pierwiastków (bez lantanowców i aktynowców), na którym umieszczono strzałki A i B odpowiadające kierunkom zmian wybranych wielkości charaktery- Określanie rodzaju wiązania chemicznego na podstawie elektroujemności zujących pierwiastki chemiczne. Obliczenie różnicy elektroujemności między atomami pozwala w łatwy sposób określić rodzaj wiąza- A nia chemicznego. Podane wartości są umowne. δ+ 5 + à 9 B 0 0.4 1.7 3,3 4E → Podkreśl wszystkie wymienione poniżej wielkości, których wzrost wskazują strzałki oznaczone litera- mi A i B. Zadanie 21. (0-1) [CKE 1. Dla pierwiastków 1. grupy strzałka A wskazuje kierunek wzrostu: Žródto: Informator a egzaminie maturalnym z chemii od roku szkolnego 2014/2015, zad. 1. najwyższego stopnia utlenienia promienia atomowego promienia jonowego Określ typ hybrydyzacji orbitali atomu węgla w cząsteczkach związków, których wzory podano poni- żej. Uzupełnij tabelę. 2. Dla pierwiastków grup 1.–2. i 13.–17. okresu III strzałka B wskazuje kierunek wzrostu: najwyższego stopnia utlenienia"
          }
        ]
      },
      {
        "id": "grupy-funkcyjne",
        "title": "Związki organiczne z grupami funkcyjnymi",
        "summary": "- Alkohole (R−OH) — __________ hydroksylowa −OH. - Szereg homologiczny: metanol CH₃OH (trucizna, ślepota), etanol C₂H₅OH (fermentacja, bioetanol), __________ etylenowy HO−CH₂−CH₂−OH (płyn chłodniczy), glicerol (propano-1,2,3-triol — składnik tłuszczów). - Rzędowość alkoholi: I-rzędowe (R−CH₂OH — utleniają się do aldehydów, potem kwasów), II-rzędowe (R₂CHOH — __________ się do ketonów), III-rzędowe (R₃COH — nie utleniają się łatwo, wymagają rozerwania wiązań C−C).",
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
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "repetytorium-matura-chemia (1)",
            "content": "mCu _ 4 mCu                 : 4 -0,P8 =mCu mCu0 =0,32 g +0,08 g =0,4 g                                Nie jest wymagane podanie barwy reagentów.        \" l _ 0,08             :mCu =0,32.g ·. ·                                                                                                       1 p. - za wlaciw ocen prawdziwoci czterech zda: Odp.: Na powierzchni blaszki wytworzylo si 0,4 g tlenku miedzi(ll).                                   I. F, II. P, Ili. F, IV. P Nie jest wymagane przedstawienie oblicze.\n\nl p. - za obliczenie masy blaszki po usuniciu z jej powierzchni czarnego osadu:                       1 p. - za przedstawienie poprawnej interpretacji ilociowej równania reakcji (za poprawne                                                                                                       uzupelnienie trzech rubryk tabeli): /t?cu -15,00 g - 0(32 g =14,68 g Odp.: Masa blaszki po usuniciu z jej powierzchni tlenku miedzi(ll) jest równa 14,68 g. Nie jest wymagane przedstawienie oblicze.\n\n1 p. - za napisanie równania reakcji miedzi z tlenem (w formie czsteczkowej):                         I Interpretacja | tlenek azotu(ll)             tlen                     j tlenek azotu(IV) 2 Cu +02-- ^2 CuO 1 p. - za napisanie równania reakcji zachodzcej podczas roztwarzania tlenku miedzi(ll) 0 -2           j Liczba moli         ! 1 mol czsteczek       >2mola czsteczek j 1 mol(-e) czsteczek w kwasie solnym (w formie jonowej skróconej): CuO +2 H+--Cu2++HzO albo CuO +2 H30+-- Cu2++3 HzO                                                     I Masa                     90 g                48 g          |          138 g\n\n                                                                                                      i Objto               22,4 dm3                 11,2 dm3                 22,4 dm3 \f340 I ODPOWIEDZI DO ZADA                                                                                                                                                                        Odpowiedzi do zada z arkusza maturalnego j 341                                                                                                                                                                                                 ----- -- -- -- --___________________________               i__________\n\n                                                                                                                                                                     Kryteria oceniania i model odpowiedzi                                                 Punkty\n\n                 1 p. - za bezbldne napisanie wyraenie na steniow stal równowagi reakcji (Kc):                            2q 1 1 P- _ za podkrelenie litery/któr oznaczono zdanie poprawnie wyjaniajce konserwujce 1dzialanie chlorku sodu: B - ; 0-1 U\n\n                                          /?eo .                                                                                 1 p. - za zastosowanie poprawnej metody rozwizania zadania.                         [CO] -[H2Q]_ / [/ _ nco /?h2q _ x2                                                                                                                                  1 p. - za podanie poprawnego wyniku wraz z jednostk 1z odpowiedni dokladnoci. 14 K [C02] ·[H2] Pc ^ nCOi nHi (a-x)2 0-2\n\n                                            V V\n\n        b i 1 p . - za zaznaczenie poprawnej odpowiedzi: C                                                                       Przyklad rozwizania:                                           m  100%"
          },
          {
            "title": "teraz-matura-chemia-2015-pdf-free (1)",
            "content": "Określanie aktywności chemicznej metali NaOH HCI H2O Aktywność chemiczna metali nie zachodzi zachodzi zachodzi w grupie zwiększa się wraz ze w okresie zmniejsza się wraz ze zachodzi nie zachodzi nie zachodzi zwiększaniem się liczby atomowej zwiększaniem się liczby atomowej Al2O3 1 4 K 1 Ca 2 Sc 3 T 4 V 5 Cr Mn 6 7 nie zachodzi nie zachodzi nie zachodzi 2U 18 18 3 Na 13 14 15 16 17 13 14 15 16 17 4 K 09 9 10 11 12 2 3 7 6 5 10 11 12 Zadanie 3. (0-1) Spośród podanych powyżej tlenków pierwiastków chemicznych wybierz te, które należą do tego same- 5 Rb 4 go okresu i uszereguj je według wzrastającego charakteru kwasowego. 6 Cs 7 Fr 18 19\n\n--- STRONA 11 --- Zadania maturalne Zadania maturaine Zadanie 4. (0-3) Zadanie 7. (0-2) Zaprojektuj doświadczenie chemiczne, za którego pomocą wykażesz amfoteryczny charakter wodoro- Kwas fosforowy(V) w roztworze wodnym ulega dysocjacji wielostopniowej: tlenku miedzi(II). H3PO4+H2OH3O++H2PO4 a) Uzupełnij schemat doświadczenia chemicznego, wpisując wzory sumaryczne potrzebnych odczyn- H2PO4+H2OH3}O+HPO{2 ników wybrane spośród podanych. HPO42+H_2}OH3}O+PO{3 kwas chlorowodorowy roztwór wodorotlenku sodu roztwór chlorku sodu a) Określ, jaką funkcję zgodnie z teorią Bronsteda-Lowry'ego - kwasu czy zasady - pełni woda w tych reakcjach chemicznych. b) Wskaż jony, które zgodnie z teorią Bronsteda-Lowry'ego mogą być zarówno kwasami, jak i zasa- dami. NIEORGANICZNYCH WELENN NZ   YCH Cu(OHl2 Zadanie 8. (0-4) b) Zapisz obserwacje. Przeprowadzono doświadczenie chemiczne przedstawione na schemacie. Probówka 1.: Probówka 2.: roztwór Na2SO3 roztwór H2SO c) Napisz w formie jonowej skróconej równania zachodzących reakcji chemicznych, wiedząc, że pro- duktem jednej z nich jest jon tetrahydroksomiedzianowy(II), Probówka 1.: Probówka 2.: roztwór KMnO WLASCIWOŚCI PIERWIASTKOW CHEMICZNYCH I Zadanie 5. (0-2) Dane są wzory: a) Oceń prawdziwość opisów przebiegu doświadczenia chemicznego. Zaznacz literę P, jeśli obserwacja HBr Ba(OH)2 CO32- NH4 S2- OH- H3O° H2SO4 KOH jest prawdziwa, lub literę F, jeśli jest fałszywa. Spośród wymienionych wzorów wybierz i wpisz do tabel: Stracit się brunatny osad. P/F a) wzory kwasów i zasad według teorii Arrheniusa. Roztwór się odbarwil. P/F Strącil się bialy osad. P/F Wzory Wydzieli się bezbarwny gaz. P/F kwasów zasad b) Uzupełnij zdania, podkreślając właściwe określenie w każdym nawiasie. A. MnOd B. Mn2* C. MnO₄2- D. jest E. nie jest b) wzory substancji, które w roztworach wodnych mogą pełnić funkcję kwasów i zasad według teorii Roztwór manganianu(VII) potasu ma fioletową barwę, która pochodzi od jonów (A. / B.). Pod wpływem Bronsteda-Lowry'ego. jonów SO32- w środowisku kwasowym powstają jony (B. / C.). Przeprowadzona reakcja chemiczna (D. / E.) Wzory jest reakcją utleniania-redukcji. Jony (A. / B.) mają silne wlaściwości utleniające. kwasów zasad c) Napisz w formie jonowej równanie zachodzącej reakcji chemicznej. Zadanie 6. (0-2) d) Ustal współczynniki stechiometryczne tej reakcji chemicznej metodą bilansu elektronowego. Spośród podanych wzorów wypisz te, które nie są wzorami substancji mogących pełnić funkcję kwasów Bilans elektronowy: wedlug teorii Bronsteda-Lowry'ego. Odpowiedź uzasadnij. HI NaH NO2 HNO3 NH3 H_3O HCN CH4 HClO3 Wzory substancji: Równanie reakcji chemicznej z ustalonymi współczynnikami stechiometrycznymi: Uzasadnienie: 20 21\n\n--- STRONA 12 --- Zadania maturaine Zadania maturalne Zadanie 9. (0-2) Informacja do zadań 12.-14. Przeprowadzono doświadczenie chemiczne przedstawione na schemacie."
          }
        ]
      },
      {
        "id": "organiczna-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
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
      },
      {
        "id": "organiczna-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. Zaznacz poprawn odpowied.\n\n Ile milimoli azotu potrzeba do otrzymania 0,05 mola tlenku azotu(V)?\n\n0,1983 = - 2 ' mat.x A.5mmoli Q B. 50 mmoli [ j C . lOmmoli j |D. lOOmmoli\n\n 2 ·matx + 1·12,01 u + 10-1 6,00 u + 14 -1,01u\n\n ··",
          "Zadanie 2. Zaznacz poprawn odpowied.\n\n ^at.x = 23,02 u Ile dm3wodoru i azotu, odmierzonych w warunkach normalnych, naley uy, aby otrzyma 170 g amoniaku? » Odnajdujemy w ukladzie okresowym pierwiastek o obliczonej masie atomowej. Odpowied: Hydrat ma wzór Na2C 0 3 ·7 H 20. i j A. 224 dm3wodoru i 112 dm3 azotu. | | C. 336 dm3 wodoru i 112 dm3 azotu. j |B. 336 dm3wodoru i 224 dm3 azotu. I i D. 112 dm3 wodoru i 224 dm3 azotu.\n\nwicej na WWW.ZDASZ.TO wicej na WWW.ZDASZ.TO \f-- ,-- ,, -- J-- - -- -- -- . .-- -- . -- ------ -- '-- -- -------------------\n\n18 | I. ATOMY, CZSTECZKI I STECHIOMETRIA CHEMICZN",
          "Zadanie 1. Zaznacz poprawn odpowied. 7. Atom W jakiej objtoci chlorowodoru znajduje si tyle samo atomów, ile jest zawartych w 11,2 dm3tlenku azotu(V) w warunkach normalnych? Struktura atomu\n\nf j A. 1,75 dm3 Pierwiastek chemiczny to substancja, której nie i | B. 3,5 dm3 mona rozloy na substancje prostsze w proce­ [ J C . 39,2 dm3 sie fizycznym lub chemicznym (wyklucza si tutaj i | D. 78,4 dm3 procesy rozpadu promieniotwórczego). Pierwiastek mona równie okreli jako zbiór atomów zawiera­ ·",
          "Zadanie 2. jcych po tyle samo protonów w jdrze. Atom jest obiektem o cikim, dodatnio naladowa­ Atom pewnego pierwiastka ma mas 6,645 ·10~23 g. nym jdrze atomowym, otoczonym przez elektrony Zaznacz poprawn odpowied. Atom to najmniejsza cz pierwiastka chemiczne­ poruszajce si w chmurze elektronowej wokóljdra. Ile wynosi masa atomowa tego pierwiastka? go, która zachowuje jego wlaciwoci chemiczne. Elektrony tworz powloki. A. 12 u B. 39 u C. 40 u I j D. 60 u\n\nj ··",
          "Zadanie 3. Oddzialywania w atomie Sily oddzialywania elektrostatycznego utrzymujce | Wanad jest mieszanin dwóch izotopów: 50V i 51V o zawartoci procentowej odpowiednio 0,25% i 99,75%. atom maj natur sil: j Zaznacz poprawne dokoczenie zdania. odpychajcych midzy wszystkimi elektronami; j Masa atomowa wanadu wynosi przycigajcych midzy elektronami a jdrem. Im bliej jdra znajduje si elektron, tym silniej jest j [ J A. 50,8 u przez nie przycigany.\n\n| B. 50,9 u\n\n| . C. 51,0 u\n\nI D. 52,1 u ! ]\n\n··"
        ]
      }
    ]
  }
];
