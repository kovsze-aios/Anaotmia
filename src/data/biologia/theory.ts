import type { TextbookDomain } from "@/types/textbook";

export const biologiaTheory: TextbookDomain[] = [
  {
    "id": "cytologia",
    "title": "Cytologia — Budowa i funkcjonowanie komórki",
    "shortTitle": "Cytologia",
    "icon": "🧬",
    "sections": [
      {
        "id": "budowa-komorki",
        "title": "Budowa komórki eukariotycznej",
        "content": [
          {
            "type": "paragraph",
            "text": "Komórka jest podstawową jednostką strukturalną i funkcjonalną każdego organizmu żywego. Teoria komórkowa (Schleiden, Schwann, Virchow) głosi, że: (1) wszystkie organizmy zbudowane są z komórek, (2) komórka jest podstawową jednostką życia, (3) każda komórka powstaje z innej komórki (omnis cellula e cellula). Wyróżniamy dwa główne typy komórek: prokariotyczne (bakterie, archeony — bez jądra komórkowego, DNA w postaci nukleoidu) oraz eukariotyczne (rośliny, zwierzęta, grzyby, protisty — z jądrem otoczonym podwójną błoną)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Błona komórkowa — model płynnej mozaiki"
          },
          {
            "type": "paragraph",
            "text": "Błona komórkowa (plazmalemma) według modelu Singera i Nicolsona (1972) zbudowana jest z dwuwarstwy fosfolipidowej, w której hydrofilowe głowy fosfolipidów skierowane są na zewnątrz (do środowiska wodnego), a hydrofobowe ogony do wewnątrz. W dwuwarstwie zanurzone są białka integralne (transbłonowe, przechodzące przez całą błonę) oraz peryferyjne (powierzchniowe). Błona jest strukturą asymetryczną i dynamiczną — fosfolipidy mogą dyfundować lateralnie (ruch flip-flop jest rzadki). Cholesterol (u zwierząt) stabilizuje płynność błony — w wysokich temperaturach usztywnia, w niskich zapobiega krystalizacji. Glikokaliks (glikoproteiny i glikolipidy na zewnętrznej powierzchni) tworzy płaszcz cukrowy odpowiedzialny za rozpoznawanie międzykomórkowe i ochronę."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Transport przez błonę komórkową"
          },
          {
            "type": "paragraph",
            "text": "Transport bierny (pasywny) zachodzi zgodnie z gradientem stężenia (lub ładunku) i nie wymaga nakładu energii: (a) Dyfuzja prosta — dotyczy małych cząsteczek niepolarnych (O₂, CO₂, N₂), małych polarnych (H₂O, mocznik) i substancji rozpuszczalnych w tłuszczach. (b) Dyfuzja ułatwiona — z udziałem białek nośnikowych (permeaz, zmieniają konformację, np. GLUT4 dla glukozy) lub białek kanałowych (kanały jonowe — Na⁺, K⁺, Ca²⁺, Cl⁻; akwaporyny dla wody). (c) Osmoza — przepływ wody przez błonę półprzepuszczalną z roztworu hipotonicznego do hipertonicznego. Transport czynny (aktywny) wymaga energii (ATP) i zachodzi przeciw gradientowi: (a) Pompa sodowo-potasowa (Na⁺/K⁺ ATP-aza) — wypompowuje 3 Na⁺ na zewnątrz i wprowadza 2 K⁺ do wnętrza komórki na 1 ATP, utrzymując potencjał błonowy. (b) Pompa wapniowa (Ca²⁺ ATP-aza) — usuwa Ca²⁺ z cytozolu do siateczki sarkoplazmatycznej lub na zewnątrz. (c) Pompa protonowa (H⁺ ATP-aza) — transport H⁺. Transport masowy (cytoza): endocytoza (fagocytoza — pobieranie cząstek stałych, pinocytoza — pobieranie płynów, endocytoza zależna od receptorów — za pośrednictwem klatryny) i egzocytoza (wydzielanie substancji na zewnątrz — konstytutywna i regulowana)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Jądro komórkowe — centrum informacji genetycznej"
          },
          {
            "type": "paragraph",
            "text": "Jądro komórkowe (nucleus) jest największym organellum komórki eukariotycznej, otoczonym podwójną błoną jądrową (otoczką jądrową) z licznymi porami jądrowymi (NPC — nuclear pore complexes), które regulują selektywny transport makrocząsteczek (mRNA, białka, rybosomy) między jądrem a cytoplazmą. Wewnątrz jądra znajduje się chromatyna — kompleks DNA z białkami histonowymi (H2A, H2B, H3, H4 oraz histon łącznikowy H1). W interfazie chromatyna występuje w dwóch formach: euchromatyna (luźna, aktywna transkrypcyjnie) i heterochromatyna (skondensowana, nieaktywna). Jąderko (nucleolus) jest miejscem syntezy rRNA (transkrypcja genów rDNA) i montażu podjednostek rybosomów (40S i 60S u eukariontów). Podczas podziału komórkowego chromatyna ulega kondensacji w chromosomy (człowiek: 46 chromosomów, 23 pary)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Rybosomy i synteza białek"
          },
          {
            "type": "paragraph",
            "text": "Rybosomy są nieobłonionymi organellami zbudowanymi z rRNA i białek rybosomalnych. U eukariontów rybosom 80S składa się z podjednostki małej 40S (18S rRNA + ~33 białka) i dużej 60S (28S, 5.8S, 5S rRNA + ~49 białek). Rybosomy wolne w cytoplazmie syntetyzują białka dla potrzeb wewnętrznych komórki, rybosomy związane z siateczką śródplazmatyczną szorstką (RER) syntetyzują białka sekrecyjne, lizosomalne i błonowe. Synteza białka obejmuje transkrypcję (jądro — przepisanie DNA na pre-mRNA, obróbka posttranskrypcyjna: splicing — wycięcie intronów przez spliceosom, dodanie czapeczki 7-metyloguanozyny na końcu 5′, poliadenylacja na końcu 3′) oraz translację (cytoplazma — na rybosomach mRNA jest tłumaczony na sekwencję aminokwasową białka przy udziale tRNA i aminoacylo-tRNA syntetaz)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "System błon wewnętrznych — siateczka, Golgi, lizosomy"
          },
          {
            "type": "paragraph",
            "text": "Siateczka śródplazmatyczna szorstka (RER) jest pokryta rybosomami i odpowiada za syntezę, fałdowanie (przy udziale chaperonów) i wstępną glikozylację białek na eksport. Siateczka gładka (SER) syntetyzuje lipidy (fosfolipidy, cholesterol, steroidy), metabolizuje węglowodany (glukozo-6-fosfataza w wątrobie), detoksykuje substancje (hydroksylacja w wątrobie — cytochrom P450) oraz magazynuje jony Ca²⁺ (w mięśniach — siateczka sarkoplazmatyczna). Aparat Golgiego to stos cystern (cis — bliżej ER, trans — dalej), gdzie zachodzi modyfikacja białek (glikozylacja, fosforylacja, sulfonowanie), sortowanie i pakowanie do pęcherzyków kierowanych do błony (transport konstytutywny), lizosomów (z udziałem receptora mannozo-6-fosforanowego) lub na zewnątrz (egzocytoza regulowana). Lizosomy (pierwotne i wtórne) to pęcherzyki zawierające enzymy hydrolityczne (proteazy, nukleazy, glikozydazy, lipazy, fosfatazy) aktywne w kwaśnym pH (~5,0), trawiące materiał fagocytowany (fagosomy → fagolizosomy), zużyte organella (autofagia) oraz uczestniczące w apoptozie. Peroksysomy zawierają oksydazy i katalazę (rozkład H₂O₂) oraz uczestniczą w β-oksydacji bardzo długołańcuchowych kwasów tłuszczowych."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Mitochondria — centra energetyczne komórki"
          },
          {
            "type": "paragraph",
            "text": "Mitochondria są organellami półautonomicznymi otoczonymi dwiema błonami. Zewnętrzna błona jest gładka i przepuszczalna dla małych cząsteczek dzięki porynom. Wewnętrzna błona tworzy grzebienie mitochondrialne (cristae) i jest nieprzepuszczalna — zawiera łańcuch oddechowy (kompleksy I-IV) i syntazę ATP (kompleks V). Macierz mitochondrialna (matrix) zawiera enzymy cyklu Krebsa, mitochondrialne DNA (koliste, dziedziczone od matki), rybosomy mitochondrialne (55S — podobne do bakteryjnych) oraz enzymy β-oksydacji kwasów tłuszczowych. Z jednej cząsteczki glukozy w oddychaniu tlenowym powstaje 36–38 ATP (2 z glikolizy, 2 z cyklu Krebsa, 32–34 z łańcucha oddechowego). Hipoteza endosymbiotyczna (Lynn Margulis): mitochondria i chloroplasty pochodzą od endosymbiotycznych bakterii (proteobakterii i sinic), które zostały wchłonięte przez pierwotne komórki eukariotyczne."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Cytoszkielet — szkielet wewnętrzny komórki"
          },
          {
            "type": "paragraph",
            "text": "Cytoszkielet tworzy dynamiczną sieć białkowych włókien. Mikrofilamenty (filamenty aktynowe, ~7 nm) zbudowane z aktyny G polimeryzującej do aktyny F — odpowiadają za ruch komórki (pseudopodia, fala skurczu), cytokinezę (pierścień kurczliwy), transport wewnątrzkomórkowy (z miozyną) i utrzymanie kształtu. Filamenty pośrednie (~10 nm) mają skład tkankowo-specyficzny: keratyny (nabłonki), desmina (mięśnie), wimentyna (tkanka łączna), neurofilamenty (neurony), laminy (blaszka jądrowa) — pełnią funkcje mechaniczne. Mikrotubule (~25 nm) zbudowane z dimerów α- i β-tubuliny, organizowane przez centrosom — odpowiadają za transport pęcherzykowy (kinezyna — kierunek +, dyneina — kierunek −), budowę wrzeciona podziałowego, rzęski i wici (aksonema 9+2)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Cykle komórkowe — interfaza i podziały"
          },
          {
            "type": "paragraph",
            "text": "Cykl komórkowy składa się z interfazy (G1 — wzrost komórki i synteza białek, długość zmienna; S — replikacja DNA, synteza histonów; G2 — przygotowanie do podziału, synteza białek wrzeciona) oraz fazy M (mitoza lub mejoza + cytokineza). Regulacja cyklu komórkowego odbywa się przez cykliny i kinazy cyklinozależne (CDK) w punktach kontrolnych: G1/S (punkt restrykcyjny — sprawdza Integralność DNA i sygnały wzrostu), G2/M (sprawdza kompletność replikacji i naprawę DNA) oraz M (punkt wrzecionowy — sprawdza przyłączenie chromosomów do wrzeciona). Białko p53 (strażnik genomu) w razie uszkodzenia DNA zatrzymuje cykl w G1 i uruchamia naprawę lub apoptozę. Komórki mogą wejść w fazę G0 (spoczynek, brak podziałów)."
          },
          {
            "type": "paragraph",
            "text": "Apoptoza (programowana śmierć komórki) jest procesem aktywnym, regulowanym genetycznie, w którym komórka ulega kontrolowanemu rozpadowi bez wywoływania stanu zapalnego (powstają ciałka apoptotyczne). W przeciwieństwie do martwicy (nekrozy), która jest procesem biernym wywołanym urazem, apoptoza jest niezbędna dla prawidłowego rozwoju (np. kształtowanie palców, eliminacja limfocytów autoreaktywnych). Kluczowe białka apoptotyczne: kaspazy, białka z rodziny Bcl-2, cytochrom c."
          }
        ],
        "recallQuestions": [],
        "academic_detail": "Komórka jest podstawową jednostką strukturalną i funkcjonalną każdego organizmu żywego. Teoria komórkowa (Schleiden, Schwann, Virchow) głosi, że: (1) wszystkie organizmy zbudowane są z komórek, (2) komórka jest podstawową jednostką życia, (3) każda komórka powstaje z innej komórki (omnis cellula e cellula). Wyróżniamy dwa główne typy komórek: prokariotyczne (bakterie, archeony — bez jądra komórkowego, DNA w postaci nukleoidu) oraz eukariotyczne (rośliny, zwierzęta, grzyby, protisty — z jądrem otoczonym podwójną błoną).\n\nBłona komórkowa (plazmalemma) według modelu Singera i Nicolsona (1972) zbudowana jest z dwuwarstwy fosfolipidowej, w której hydrofilowe głowy fosfolipidów skierowane są na zewnątrz (do środowiska wodnego), a hydrofobowe ogony do wewnątrz. W dwuwarstwie zanurzone są białka integralne (transbłonowe, przechodzące przez całą błonę) oraz peryferyjne (powierzchniowe). Błona jest strukturą asymetryczną i dynamiczną — fosfolipidy mogą dyfundować lateralnie (ruch flip-flop jest rzadki). Cholesterol (u zwierząt) stabilizuje płynność błony — w wysokich temperaturach usztywnia, w niskich zapobiega krystalizacji. Glikokaliks (glikoproteiny i glikolipidy na zewnętrznej powierzchni) tworzy płaszcz cukrowy odpowiedzialny za rozpoznawanie międzykomórkowe i ochronę.\n\nTransport bierny (pasywny) zachodzi zgodnie z gradientem stężenia (lub ładunku) i nie wymaga nakładu energii: (a) Dyfuzja prosta — dotyczy małych cząsteczek niepolarnych (O₂, CO₂, N₂), małych polarnych (H₂O, mocznik) i substancji rozpuszczalnych w tłuszczach. (b) Dyfuzja ułatwiona — z udziałem białek nośnikowych (permeaz, zmieniają konformację, np. GLUT4 dla glukozy) lub białek kanałowych (kanały jonowe — Na⁺, K⁺, Ca²⁺, Cl⁻; akwaporyny dla wody). (c) Osmoza — przepływ wody przez błonę półprzepuszczalną z roztworu hipotonicznego do hipertonicznego. Transport czynny (aktywny) wymaga energii (ATP) i zachodzi przeciw gradientowi: (a) Pompa sodowo-potasowa (Na⁺/K⁺ ATP-aza) — wypompowuje 3 Na⁺ na zewnątrz i wprowadza 2 K⁺ do wnętrza komórki na 1 ATP, utrzymując potencjał błonowy. (b) Pompa wapniowa (Ca²⁺ ATP-aza) — usuwa Ca²⁺ z cytozolu do siateczki sarkoplazmatycznej lub na zewnątrz. (c) Pompa protonowa (H⁺ ATP-aza) — transport H⁺. Transport masowy (cytoza): endocytoza (fagocytoza — pobieranie cząstek stałych, pinocytoza — pobieranie płynów, endocytoza zależna od receptorów — za pośrednictwem klatryny) i egzocytoza (wydzielanie substancji na zewnątrz — konstytutywna i regulowana).\n\nJądro komórkowe (nucleus) jest największym organellum komórki eukariotycznej, otoczonym podwójną błoną jądrową (otoczką jądrową) z licznymi porami jądrowymi (NPC — nuclear pore complexes), które regulują selektywny transport makrocząsteczek (mRNA, białka, rybosomy) między jądrem a cytoplazmą. Wewnątrz jądra znajduje się chromatyna — kompleks DNA z białkami histonowymi (H2A, H2B, H3, H4 oraz histon łącznikowy H1). W interfazie chromatyna występuje w dwóch formach: euchromatyna (luźna, aktywna transkrypcyjnie) i heterochromatyna (skondensowana, nieaktywna). Jąderko (nucleolus) jest miejscem syntezy rRNA (transkrypcja genów rDNA) i montażu podjednostek rybosomów (40S i 60S u eukariontów). Podczas podziału komórkowego chromatyna ulega kondensacji w chromosomy (człowiek: 46 chromosomów, 23 pary).\n\nRybosomy są nieobłonionymi organellami zbudowanymi z rRNA i białek rybosomalnych. U eukariontów rybosom 80S składa się z podjednostki małej 40S (18S rRNA + ~33 białka) i dużej 60S (28S, 5.8S, 5S rRNA + ~49 białek). Rybosomy wolne w cytoplazmie syntetyzują białka dla potrzeb wewnętrznych komórki, rybosomy związane z siateczką śródplazmatyczną szorstką (RER) syntetyzują białka sekrecyjne, lizosomalne i błonowe. Synteza białka obejmuje transkrypcję (jądro — przepisanie DNA na pre-mRNA, obróbka posttranskrypcyjna: splicing — wycięcie intronów przez spliceosom, dodanie czapeczki 7-metyloguanozyny na końcu 5′, poliadenylacja na końcu 3′) oraz translację (cytoplazma — na rybosomach mRNA jest tłumaczony na sekwencję aminokwasową białka przy udziale tRNA i aminoacylo-tRNA syntetaz).\n\nSiateczka śródplazmatyczna szorstka (RER) jest pokryta rybosomami i odpowiada za syntezę, fałdowanie (przy udziale chaperonów) i wstępną glikozylację białek na eksport. Siateczka gładka (SER) syntetyzuje lipidy (fosfolipidy, cholesterol, steroidy), metabolizuje węglowodany (glukozo-6-fosfataza w wątrobie), detoksykuje substancje (hydroksylacja w wątrobie — cytochrom P450) oraz magazynuje jony Ca²⁺ (w mięśniach — siateczka sarkoplazmatyczna). Aparat Golgiego to stos cystern (cis — bliżej ER, trans — dalej), gdzie zachodzi modyfikacja białek (glikozylacja, fosforylacja, sulfonowanie), sortowanie i pakowanie do pęcherzyków kierowanych do błony (transport konstytutywny), lizosomów (z udziałem receptora mannozo-6-fosforanowego) lub na zewnątrz (egzocytoza regulowana). Lizosomy (pierwotne i wtórne) to pęcherzyki zawierające enzymy hydrolityczne (proteazy, nukleazy, glikozydazy, lipazy, fosfatazy) aktywne w kwaśnym pH (~5,0), trawiące materiał fagocytowany (fagosomy → fagolizosomy), zużyte organella (autofagia) oraz uczestniczące w apoptozie. Peroksysomy zawierają oksydazy i katalazę (rozkład H₂O₂) oraz uczestniczą w β-oksydacji bardzo długołańcuchowych kwasów tłuszczowych.\n\nMitochondria są organellami półautonomicznymi otoczonymi dwiema błonami. Zewnętrzna błona jest gładka i przepuszczalna dla małych cząsteczek dzięki porynom. Wewnętrzna błona tworzy grzebienie mitochondrialne (cristae) i jest nieprzepuszczalna — zawiera łańcuch oddechowy (kompleksy I-IV) i syntazę ATP (kompleks V). Macierz mitochondrialna (matrix) zawiera enzymy cyklu Krebsa, mitochondrialne DNA (koliste, dziedziczone od matki), rybosomy mitochondrialne (55S — podobne do bakteryjnych) oraz enzymy β-oksydacji kwasów tłuszczowych. Z jednej cząsteczki glukozy w oddychaniu tlenowym powstaje 36–38 ATP (2 z glikolizy, 2 z cyklu Krebsa, 32–34 z łańcucha oddechowego). Hipoteza endosymbiotyczna (Lynn Margulis): mitochondria i chloroplasty pochodzą od endosymbiotycznych bakterii (proteobakterii i sinic), które zostały wchłonięte przez pierwotne komórki eukariotyczne.\n\nCytoszkielet tworzy dynamiczną sieć białkowych włókien. Mikrofilamenty (filamenty aktynowe, ~7 nm) zbudowane z aktyny G polimeryzującej do aktyny F — odpowiadają za ruch komórki (pseudopodia, fala skurczu), cytokinezę (pierścień kurczliwy), transport wewnątrzkomórkowy (z miozyną) i utrzymanie kształtu. Filamenty pośrednie (~10 nm) mają skład tkankowo-specyficzny: keratyny (nabłonki), desmina (mięśnie), wimentyna (tkanka łączna), neurofilamenty (neurony), laminy (blaszka jądrowa) — pełnią funkcje mechaniczne. Mikrotubule (~25 nm) zbudowane z dimerów α- i β-tubuliny, organizowane przez centrosom — odpowiadają za transport pęcherzykowy (kinezyna — kierunek +, dyneina — kierunek −), budowę wrzeciona podziałowego, rzęski i wici (aksonema 9+2).\n\nCykl komórkowy składa się z interfazy (G1 — wzrost komórki i synteza białek, długość zmienna; S — replikacja DNA, synteza histonów; G2 — przygotowanie do podziału, synteza białek wrzeciona) oraz fazy M (mitoza lub mejoza + cytokineza). Regulacja cyklu komórkowego odbywa się przez cykliny i kinazy cyklinozależne (CDK) w punktach kontrolnych: G1/S (punkt restrykcyjny — sprawdza Integralność DNA i sygnały wzrostu), G2/M (sprawdza kompletność replikacji i naprawę DNA) oraz M (punkt wrzecionowy — sprawdza przyłączenie chromosomów do wrzeciona). Białko p53 (strażnik genomu) w razie uszkodzenia DNA zatrzymuje cykl w G1 i uruchamia naprawę lub apoptozę. Komórki mogą wejść w fazę G0 (spoczynek, brak podziałów).\n\nApoptoza (programowana śmierć komórki) jest procesem aktywnym, regulowanym genetycznie, w którym komórka ulega kontrolowanemu rozpadowi bez wywoływania stanu zapalnego (powstają ciałka apoptotyczne). W przeciwieństwie do martwicy (nekrozy), która jest procesem biernym wywołanym urazem, apoptoza jest niezbędna dla prawidłowego rozwoju (np. kształtowanie palców, eliminacja limfocytów autoreaktywnych). Kluczowe białka apoptotyczne: kaspazy, białka z rodziny Bcl-2, cytochrom c.",
        "summary": "- Komórka jest podstawową **jednostką** __________ i funkcjonalną każdego organizmu żywego. - Teoria komórkowa (Schleiden, Schwann, Virchow) głosi, że: (1) wszystkie organizmy zbudowane są z komórek, (2) komórka **jest** __________ jednostką życia, (3) każda komórka powstaje z innej komórki (omnis cellula e cellula). - Wyróżniamy dwa główne typy **komórek**: __________ (bakterie, archeony — bez jądra komórkowego, DNA w postaci nukleoidu) oraz eukariotyczne (rośliny, zwierzęta, grzyby, protisty — z jądrem otoczonym podwójną błoną). - Błona komórkowa (plazmalemma) według modelu Singera i Nicolsona (1972) zbudowana jest z **dwuwarstwy** __________ w której hydrofilowe głowy fosfolipidów skierowane są na zewnątrz (do środowiska wodnego), a hydrofobowe ogony do wewnątrz.",
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "1.1. Budowa i rola kwasów nukleinowych . . . . 6 5.1. Rozwój myśli ewolucyjnej 226 1.2. Replikacja DNA 16 5.2. Dowody ewolucji 237 1.3. Geny i genomy 27 5.3. Dobór naturalny – główny mechanizm 1.4. Ekspresja genów 35 ewolucji 252 1.5. Regulacja ekspresji genów . 49 5.4. Ewolucja na poziomie gatunku Podsumowanie 59 i populacji . 262 Sposób na zadania 61 5.5. Powstawanie gatunków – specjacja . . . 269 Zadania powtórzeniowe 63 5.6. Prawidłowości ewolucji. Koewolucja . . . 281 5.7. Historia życia na Ziemi 286 2. Genetyka klasyczna 5.8. Antropogeneza . 296 2.1. Dziedziczenie cech. Prawa Mendla . . . . . 66 Podsumowanie 305 2.2. Dziedziczenie jednogenowe. Różne Sposób na zadania 309 stosunki dominacji 79 Zadania powtórzeniowe 310 2.3. Dziedziczenie wielogenowe 87 6. Ekologia i różnorodność 2.4. Chromosomowa teoria dziedziczenia . . . 93 2.5. Determinacja płci. Cechy sprzężone biologiczna z płcią . ... 103 6.1. Podstawy ekologii. Tolerancja 2.6. Dziedziczenie pozajądrowe 111 ekologiczna. . 314 Podsumowanie. 115 6.2. Ekologia populacji 325 Sposób na zadania . 117 6.3. Zależności nieantagonistyczne . 337 Zadania powtórzeniowe 118 6.4. Zależności antagonistyczne 342 6.5. Struktura ekosystemu. Sukcesja 3. Zmiennośćorganizmów ekologiczna 356 3.1. Rodzaje zmienności .122 6.6 Krążenie materii i przepływ energii 3.2. Analiza statystyczna w badaniu w ekosystemie . 361 zmienności organizmów. 128 6.7. Obieg azotu i węgla w przyrodzie 367 3.3. Mutacje 132 6.8. Różnorodność biologiczna . . . . .. 372 3.4. Choroby jednogenowe . . 141 6.9. Wpływ człowieka na różnorodność 3.5. Zespoły aberracji chromosomowych. . 152 biologiczną . . . 382 Podsumowanie 157 6.10. Ochrona różnorodności biologicznej . . 390 Sposób na zadania 159 Podsumowanie 399 Zadania powtórzeniowe 161 Sposób na zadania 402 Zadania powtórzeniowe 403 4. Biotechnologia molekularna 4.1. Biotechnologia 164 Sposób na zadania – odpowiedzi 406 4.2. Podstawowe narzędzia i techniki Doświadczenia i obserwacje – inżynierii genetycznej . . 169 odpowiedzi 407 4.3. Organizmy zmodyfikowane Przydatne terminy 408 genetycznie 185 Indeks.. 412 4.4. Klonowanie organizmów i komórek 193 Literatura uzupełniająca 415 4.5. Biotechnologia molekularna w medycynie 200 4.6. Inne zastosowania biotechnologii molekularnej . . 213 Podsumowanie 218 Sposób na zadania 221 Zadania powtórzeniowe 222\n\n--- STRONA 5 --- Genetyka molekularna 1.Budowa i rola kwasów nukleinowych 2. Replikacja DNA 3. Geny i genomy 4. Ekspresja genów 5. Regulacja ekspresji genów Fot. Oczko replikacyjne w chromosomie człowieka (mikrofotografia elektronowa).\n\n--- STRONA 6 --- Budowa i rola kwasów 1.1. nukleinowych Zwróć skład chemiczny oraz strukturę cząsteczek DNA i RNA, uwagę na: •biologiczne znaczenie kwasów nukleinowych. Wyróżnia się dwa rodzaje kwasów nukleino- powstaje nukleozyd. Z kolei nukleozyd łączy się wych: kwas deoksyrybonukleinowy - DNA - z resztą fosforanową(V) wiązaniem estrowym, oraz kwas rybonukleinowy - RNA. Związki te tworząc nukleotyd. Nazwy nukleotydów DNA są nośnikami informacji genetycznej, przy czym: pochodzą od nazw odpowiadających im nukle- DNA jest materiałem genetycznym u wszyst- ozydów: deoksyadenozyny, deoksyguanozyny, kich organizmów oraz części wirusów, deoksycytydyny lub tymidyny. Konstruuje się RNA jest materiałem genetycznym u pozo- je według wzoru: nukleozydo-5'-monofosforan, stałych wirusów. przy czym cyfra 5' pochodzi od miejsca przy- Najważniejszą funkcją RNA jest udział w eks- łączenia reszty fosforanowej(V), czyli piątego"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "jest zbudowany organizm człowieka? Do czego służą poszczególne elementy podręcznika? To było w szkole Samouczek Zwróć uwagę na: podstawowej! Najważniejsze treści Ułatwi Ci naukę Wyszczególnienie omawiane w szkole kluczowych umiejętności głównych treści na podstawowej umieszczone biologicznych krok po kroku. początku tematu podpowie na stronie rozpoczynającej Ci, które wiadomości są dany dział pomogą Ci najważniejsze. w zrozumieniu nowych Dowiedz się więcej wiadomości. Czy wiesz, że... Dodatkowe treści związane z danym tematem pozwolą Dzięki ciekawostkom Ci lepiej zrozumieć omawia- Doświadczenie ne zagadnienia i pogłębić zdobędziesz interesujące wiedzę biologiczną. informacje związane z lekcją. Doświadczenia i obserwacje zostaly opisane w sposób, Biologia Polecenia kontrolne który umożliwi Ci dokładne w medycynie przeanalizowanie wszystkich ich etapów. Obowiązkowe Opisy zastosowań wiedzy Wykonanie poleceń doświadczenia i obserwacje biologicznej w medycynie umieszczonych na końcu zostały oznaczone symbolem umożliwią Ci poznanie tematu pozwoli Ci sprawdzić M praktycznego aspektu wiedzę i utrwalić zdobyte zdobywanych informacji. wiadomości. M WIESZ, UMIESZ, ZDASZ Metoda kształcenia kluczowych umiejętności z biologii Podsumowanie Zadania powtórzeniowe Syntetyczne zestawienie kluczowych Te zadania umożliwią Ci sprawdzenie wiedzy wiadomości z danego działu umożliwi Ci szybkie z danego działu oraz wykształcenie umiejętności opanowanie wiedzy przed sprawdzianem. rozwiązywania różnorodnych typów zadań. Sposób na zadania Tablice biologiczne Szczegółowe wskazówki i podpowiedzi Najważniejsze zagadnienia biologiczne pozwolą Ci wykształcić umiejętność opracowane w tabelaryczny sposób ułatwią rozwiązywania zadań o różnej formie. Ci uporządkowanie i utrwalenie wiedzy.\n\n--- STRONA 4 --- Spis treści 1. Badania przyrodnicze 4. Metabolizm 1.1. Metodyka badań biologicznych 6 4.1. Podstawowe zasady metabolizmu 148 1.2. Obserwacje mikroskopowe 17 4.2. Budowa i działanie enzymów 155 Podsumowanie 24 4.3. Regulacja aktywności enzymów 160 Sposób na zadania 26 4.4. Autotroficzne odżywianie się Zadania powtórzeniowe 27 organizmów - fotosynteza 171 4.5. Autotroficzne odżywianie się 2. Chemiczne podstawy życia organizmów - chemosynteza 182 2.1. Skład chemiczny organizmów 30 4.6. Oddychanie komórkowe. 2.2. Budowa i funkcje sacharydów 38 Oddychanie tlenowe 184 2.3. Budowa i funkcje lipidów 45 4.7. Procesy beztlenowego uzyskiwania 2.4. Aminokwasy. Budowa i funkcje białek 50 energii 196 2.5. Budowa i funkcje nukleotydów 4.8. Inne procesy metaboliczne 201 oraz kwasów nukleinowych 61 Podsumowanie 211 Podsumowanie 66 Sposób na zadania 219 Sposób na zadania 73 Zadania powtórzeniowe 220 Zadania powtórzeniowe 74 Sposób na zadania – odpowiedzi 224 3. Komórka – podstawowa Doświadczenia i obserwacje – odpowiedzi 225 jednostka życia Tablice biologiczne 227 3.1. Budowa i funkcje komórki. Przydatne terminy 232 Rodzaje komórek 78 Indeks 236 3.2. Błony biologiczne 86 Literatura uzupełniająca 240 3.3. Transport przez błony biologiczne 89 3.4. Jądro komórkowe. Cytozol 97 Klasa 2 3.5. Mitochondria i plastydy. Różnorodność organizmów Teoria endosymbiozy 105 Klasa 3 3.6. Struktury komórkowe otoczone jedną błoną i rybosomy 109 Człowiek 3.7. Ściana komórkowa 118 Klasa 4 3.8. Cykl komórkowy. Mitoza 121 Genetyka 3.9. Mejoza 129 Ewolucjonizm Podsumowanie 135 Ekologia Sposób na zadania 142 Ochrona przyrody Zadania powtórzeniowe 144 4\n\n--- STRONA 5 --- Badania przyrodnicze To było w szkole podstawowej!"
          }
        ]
      },
      {
        "id": "podzialy-komorkowe",
        "title": "Podziały komórkowe — mitoza i mejoza",
        "content": [
          {
            "type": "paragraph",
            "text": "Podział komórki jest kluczowym procesem umożliwiającym wzrost, regenerację i rozmnażanie organizmów. W organizmach jednokomórkowych podział to rozmnażanie, w wielokomórkowych — wzrost i odnowa tkanek. Cykl komórkowy składa się z interfazy (G1 — wzrost i synteza białek, S — replikacja DNA każda cząsteczka DNA tworzy dwie chromatydy siostrzane połączone w centromerze, G2 — przygotowanie do podziału, synteza tubuliny) oraz fazy M (kariokineza + cytokineza)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Mitoza — szczegółowy przebieg faz"
          },
          {
            "type": "paragraph",
            "text": "Mitoza to podział jądra komórkowego prowadzący do powstania dwóch identycznych jąder potomnych o liczbie chromosomów 2n (diploidalnej). Profaza: chromatyna kondensuje w chromosomy (każdy złożony z 2 chromatyd siostrzanych połączonych kohezynami), jąderko zanika, centrosomy (z centriolami u zwierząt) rozchodzą się do biegunów i zaczynają formować wrzeciono podziałowe. Prometafaza: otoczka jądrowa ulega fragmentacji, mikrotubule wrzeciona (kinetochorowe i astralne) przyłączają się do kinetochorów na centromerach. Metafaza: chromosomy ustawiają się w płytce metafazalnej (ekwatorialnej), a włókna wrzeciona z obu biegunów równoważą siły — to moment największej kondensacji chromosomów. Anafaza: kohezyny są degradowane przez separazę, chromatydy siostrzane rozdzielają się i wędrują do przeciwnych biegunów (anafaza A — skracanie mikrotubul kinetochorowych, anafaza B — wydłużanie mikrotubul astralnych rozsuwających bieguny). Telofaza: chromosomy dekondensują, odtwarzają się otoczki jądrowe i jąderka, wrzeciono zanika. Cytokineza: u zwierząt pierścień kurczliwy z aktyny i miozyny II tworzy bruzdę podziałową; u roślin pęcherzyki Golgiego tworzą fragmoplast → przegrodę pierwotną."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Mejoza — podział redukcyjny tworzący gamety"
          },
          {
            "type": "paragraph",
            "text": "Mejoza to podział redukcyjny prowadzący do powstania komórek haploidalnych (gamet lub zarodników) z diploidalnej komórki macierzystej. Składa się z dwóch kolejnych podziałów bez interfazy między nimi. Mejoza I (redukcyjna): profaza I — najdłuższa faza podzielona na stadia: leptoten (kondensacja chromosomów), zygoten (koniugacja — synapsa chromosomów homologicznych w biwalenty, tworzenie kompleksu synaptemalnego), pachyten (crossing-over — wymiana odcinków między niesiostrzanymi chromatydami, miejsca wymiany to chiazmy), diploten (rozchodzenie się homologów, chiazmy widoczne), diakineza (zanik jąderka i otoczki). Metafaza I: biwalenty ustawiają się w płytce metafazalnej (losowe ułożenie — każde z rodziców niezależnie). Anafaza I: chromosomy homologiczne rozdzielają się do biegunów (chromatydy pozostają razem). Telofaza I: odtworzenie jąder (liczba chromosomów zredukowana z 2n do 1n, ale każdy chromosom ma 2 chromatydy). Mejoza II (ekwacyjna): przypomina mitozę — w anafazie II chromatydy siostrzane rozdzielają się. Wynik: z jednej komórki 2n powstają 4 komórki 1n, każda genetycznie unikalna dzięki (a) crossing-over w profazie I i (b) losowej segregacji chromosomów w metafazie I (2²³ możliwości u człowieka)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Gametogeneza — spermatogeneza i oogeneza"
          },
          {
            "type": "paragraph",
            "text": "Spermatogeneza (produkcja plemników) zachodzi w kanalikach nasiennych jąder: spermatogonia (2n, w ścianie kanalika) → spermatocyt I rzędu (2n) → mejoza I → spermatocyty II rzędu (1n, z 2 chromatydami) → mejoza II → spermatydy (1n) → spermiogeneza (dojrzewanie: powstanie akrosomu, wici, zagęszczenie chromatyny, usunięcie większości cytoplazmy) → plemniki. Oogeneza (produkcja komórek jajowych) zachodzi w jajnikach: oogonia (2n) → oocyt I rzędu (2n) → mejoza I (zatrzymana w profazie I do owulacji) → oocyt II rzędu (1n) + I ciałko kierunkowe → owulacja → mejoza II (zatrzymana w metafazie II, kończy się dopiero po zapłodnieniu) → komórka jajowa (1n) + II ciałko kierunkowe. W oogenezie z jednego oocytu I rzędu powstaje 1 komórka jajowa i 3 ciałka kierunkowe (które degenerują)."
          },
          {
            "type": "table",
            "headers": [
              "Cecha",
              "Mitoza",
              "Mejoza"
            ],
            "rows": [
              [
                "Liczba podziałów",
                "1",
                "2 (mejoza I + mejoza II)"
              ],
              [
                "Liczba komórek potomnych",
                "2",
                "4"
              ],
              [
                "Ploidia komórek potomnych",
                "2n (diploidalne)",
                "1n (haploidalne)"
              ],
              [
                "Tożsamość genetyczna",
                "Identyczne z rodzicielską",
                "Unikalne (rekombinacja)"
              ],
              [
                "Crossing-over",
                "Nie zachodzi",
                "Zachodzi w profazie I"
              ],
              [
                "Występowanie",
                "Komórki somatyczne",
                "Komórki linii płciowej (gamety)"
              ],
              [
                "Liczba podziałów DNA",
                "1 replikacja, 1 podział",
                "1 replikacja, 2 podziały"
              ],
              [
                "Funkcja",
                "Wzrost, regeneracja",
                "Rozmnażanie płciowe, zmienność"
              ]
            ]
          }
        ],
        "recallQuestions": [],
        "academic_detail": "Podział komórki jest kluczowym procesem umożliwiającym wzrost, regenerację i rozmnażanie organizmów. W organizmach jednokomórkowych podział to rozmnażanie, w wielokomórkowych — wzrost i odnowa tkanek. Cykl komórkowy składa się z interfazy (G1 — wzrost i synteza białek, S — replikacja DNA każda cząsteczka DNA tworzy dwie chromatydy siostrzane połączone w centromerze, G2 — przygotowanie do podziału, synteza tubuliny) oraz fazy M (kariokineza + cytokineza).\n\nMitoza to podział jądra komórkowego prowadzący do powstania dwóch identycznych jąder potomnych o liczbie chromosomów 2n (diploidalnej). Profaza: chromatyna kondensuje w chromosomy (każdy złożony z 2 chromatyd siostrzanych połączonych kohezynami), jąderko zanika, centrosomy (z centriolami u zwierząt) rozchodzą się do biegunów i zaczynają formować wrzeciono podziałowe. Prometafaza: otoczka jądrowa ulega fragmentacji, mikrotubule wrzeciona (kinetochorowe i astralne) przyłączają się do kinetochorów na centromerach. Metafaza: chromosomy ustawiają się w płytce metafazalnej (ekwatorialnej), a włókna wrzeciona z obu biegunów równoważą siły — to moment największej kondensacji chromosomów. Anafaza: kohezyny są degradowane przez separazę, chromatydy siostrzane rozdzielają się i wędrują do przeciwnych biegunów (anafaza A — skracanie mikrotubul kinetochorowych, anafaza B — wydłużanie mikrotubul astralnych rozsuwających bieguny). Telofaza: chromosomy dekondensują, odtwarzają się otoczki jądrowe i jąderka, wrzeciono zanika. Cytokineza: u zwierząt pierścień kurczliwy z aktyny i miozyny II tworzy bruzdę podziałową; u roślin pęcherzyki Golgiego tworzą fragmoplast → przegrodę pierwotną.\n\nMejoza to podział redukcyjny prowadzący do powstania komórek haploidalnych (gamet lub zarodników) z diploidalnej komórki macierzystej. Składa się z dwóch kolejnych podziałów bez interfazy między nimi. Mejoza I (redukcyjna): profaza I — najdłuższa faza podzielona na stadia: leptoten (kondensacja chromosomów), zygoten (koniugacja — synapsa chromosomów homologicznych w biwalenty, tworzenie kompleksu synaptemalnego), pachyten (crossing-over — wymiana odcinków między niesiostrzanymi chromatydami, miejsca wymiany to chiazmy), diploten (rozchodzenie się homologów, chiazmy widoczne), diakineza (zanik jąderka i otoczki). Metafaza I: biwalenty ustawiają się w płytce metafazalnej (losowe ułożenie — każde z rodziców niezależnie). Anafaza I: chromosomy homologiczne rozdzielają się do biegunów (chromatydy pozostają razem). Telofaza I: odtworzenie jąder (liczba chromosomów zredukowana z 2n do 1n, ale każdy chromosom ma 2 chromatydy). Mejoza II (ekwacyjna): przypomina mitozę — w anafazie II chromatydy siostrzane rozdzielają się. Wynik: z jednej komórki 2n powstają 4 komórki 1n, każda genetycznie unikalna dzięki (a) crossing-over w profazie I i (b) losowej segregacji chromosomów w metafazie I (2²³ możliwości u człowieka).\n\nSpermatogeneza (produkcja plemników) zachodzi w kanalikach nasiennych jąder: spermatogonia (2n, w ścianie kanalika) → spermatocyt I rzędu (2n) → mejoza I → spermatocyty II rzędu (1n, z 2 chromatydami) → mejoza II → spermatydy (1n) → spermiogeneza (dojrzewanie: powstanie akrosomu, wici, zagęszczenie chromatyny, usunięcie większości cytoplazmy) → plemniki. Oogeneza (produkcja komórek jajowych) zachodzi w jajnikach: oogonia (2n) → oocyt I rzędu (2n) → mejoza I (zatrzymana w profazie I do owulacji) → oocyt II rzędu (1n) + I ciałko kierunkowe → owulacja → mejoza II (zatrzymana w metafazie II, kończy się dopiero po zapłodnieniu) → komórka jajowa (1n) + II ciałko kierunkowe. W oogenezie z jednego oocytu I rzędu powstaje 1 komórka jajowa i 3 ciałka kierunkowe (które degenerują).",
        "summary": "- Podział komórki jest kluczowym **procesem** __________ wzrost, regenerację i rozmnażanie organizmów. - W **organizmach** __________ podział to rozmnażanie, w wielokomórkowych — wzrost i odnowa tkanek. - Cykl komórkowy składa się z interfazy (G1 — wzrost i synteza białek, S — replikacja DNA każda cząsteczka DNA tworzy dwie chromatydy siostrzane połączone w centromerze, G2 ****— __________ do podziału, synteza tubuliny) oraz fazy M (kariokineza + cytokineza). - Mitoza to podział jądra komórkowego prowadzący do powstania **dwóch** __________ jąder potomnych o liczbie chromosomów 2n (diploidalnej).",
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "rych podziały komórkowe i replikacja DNA końca matrycy nici opóźnionej. W wyniku zostały zahamowane. działania telomerazy na końcach chromoso- mów powstają sekwencje telomerowe, zwane Czy wiesz, że... również telomerami. Są to wielokrotnie Telomeraza jest nieaktywna w większości dojrza- powtórzone kilkunukleotydowe odcinki DNA łych komórek, ale zazwyczaj ulega ona reakty- o takiej samej kolejności zasad azotowych. wacji w komórkach nowotworowych. Naprawianie Polimeraza DNA przyłącza niewłaściwy nukleotyd. błędów w replikacji nowa nić przez polimerazę DNA DNA polimeraza DNA 5' 3' 日 Podczas II etapu replikacji DNA powstają błędy, które są spowodowane Ad 5' wstawieniem przez polimerazę DNA stara nić niewłaściwego nukleotydu. Błędnie DNA wstawiony nukleotyd pojawia się ②Polimeraza DNA usuwa błędnie wstawiony nukleotyd. mniej więcej raz na 100 tys. poprawnie 3' wstawionych nukleotydów. Polimeraza 5' DNA może jednak naprawiać błędy C w trakcie wydłużania łańcucha 5' DNA – w tym celu sprawdza ona, czy przyłączony nukleotyd utworzył prawidłową parę z nukleotydem ③Polimeraza DNA przyłącza właściwy nukleotyd. w nici matrycowej DNA. Jeśli nowo wstawiony nukleotyd jest niewłaściwy, 5' A to polimeraza DNA usuwa go i zastępuje prawidłowym nukleotydem. W ten DAC 5' sposób liczba błędów w replikacji maleje do jednego mylnie wstawionego nukleotydu na 100 mln poprawnie 4Synteza DNA jest kontynuowana. wstawionych nukleotydów. 5' 3' 5' 22\n\n--- STRONA 23 --- 1.2. Replikacja DNA Regulacja replikacji DNA DNA jest zatrzymywana w warunkach nieko- Proces replikacji DNA podlega ścisłej regula- rzystnych dla komórki. W przypadku uszkodze- cji – dzięki temu zachodzi on tylko raz przed nia DNA (np. na skutek promieniowania jonizu- każdym podziałem komórki. Dzieje się tak, jącego) w komórce są wytwarzane białka, które ponieważ białka rozpoczynające replikację są uczestniczą w jego naprawie. Obecność tych odłączane od DNA zaraz po powstaniu oczka białek wstrzymuje replikację DNA do czasu replikacyjnego. Zapobiega totworzeniu wielu usunięcia uszkodzeń. Zapobiega to powstawa- kopii macierzystego DNA. Ponadto replikacja niu nieprawidłowych cząsteczek DNA. Dowiedz się więcej Replikacja RNA W cyklu infekcyjnym niektórych wirusów RNA, m.in. koronawirusów, zachodzi proces replikacji RNA. Przeprowadza go polimeraza RNA zależna od RNA, która jest kodowana przez genom wirusowy. Adsorpcja – glikoproteiny wirusa rozpoznają receptory znajdujące się na glikoproteiny powierzchni infekowanej komórki i wiążą oslonki osłonka lipidowa się z nimi. Wnikanie – kapsyd wirusa wraz z mate- kapsyd riałem genetycznym przechodzi do SsRNA cytoplazmy komórki. Kapsyd rozpada się, uwalniając materiał genetyczny wirusa. Replikacja RNA – zachodzi powielenie genomu wirusa katalizowane przez 2 polimerazę RNA. W ten sposób powstają nowe genomy wirusa. w~ ssRNA Translacja – zachodzi synteza białek wirusa na rybosomach komórki gospodarza. 3 Składanie - z elementów składowych powstają kopie wirusa. mRNA  Uwolnienie - wirus opuszcza zainfeko- wssRNA waną komórkę. białka Uproszczony cykl infekcyjny koronawirusa. 23\n\n--- STRONA 24 --- Rozdział 1. Genetyka molekularna Semikonserwatywny model replikacji DNA W poznaniu mechanizmu replikacji DNA przełomowe okazały się badania przeprowa- dzone w 1958 r. w Stanach Zjednoczonych przez Matthew Meselsona [wym. metju mesel- sona] i Franklina Stahla [wym. franklina sztala]. Naukowcy obserwowali sposób tworzenia się nowych nici DNA w komórkach bakteryjnych. Brali pod uwagę trzy modele replikacji:"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "podziały komórek. Prowadzi to do przemiany komórki prawidłowej w komórkę nowotwo- rową, co określa się mianem transformacji nowotworowej. Przykładem zaburzenia, które może spowodować transformację nowotwo- rową komórki, jest brak lub obecność nieprawi- dłowej wersji białka regulatorowego p53. Białko p53 jest odpowiedzialne m.in. za zatrzymanie cyklu w fazie Gp, gdy uszkodzony jest DNA. Jeśli cykl komórkowy się nie zatrzyma, nastąpi replikacja wadliwego DNA i zwiększy prawdo- Komórki nowotworowe (obraz spod SEM) nadmiernie podobieństwo powstania nowotworu. się dzielą i nie tworzą prawidłowej tkanki. Mitoza Mitoza jest procesem ciągłym, jednak umownie dzieli się ją na cztery fazy: profazę, metafazę, anafazę i telofazę. Zachodzi m.in. w komórkach somatycznych (komórkach ciała) zwierząt oraz roślin, co umożliwia ich wzrost i rozwój. Mitoza prowadzi do powstania dwóch komórek potomnych o niezmienionej liczbie chromosomów. Profaza chromatyda Metafaza płytka metafazowa para wrzeciono centriol podziałowe W profazie: W metafazie: następuje kondensacja chromosomów – każdy chromosomy osiągają maksymalny poziom kon- jest zbudowany z dwóch chromatyd, densacji – są krótkie, grube i dobrze widoczne zanikają otoczka jądrowa i jąderko, pod mikroskopem optycznym, powstaje wrzeciono podziałowe (tzw. wrzeciono chromosomy połączone z włóknami wrzeciona kariokinetyczne) zbudowane z mikrotubul. podziałowego układają się w płaszczyźnie równi- Wrzeciono umożliwia kontrolowane kowej komórki. Tworzą w ten sposób tzw. płytkę przemieszczanie się chromosomów podczas metafazową. podziału komórki, chromosomy przytwierdzają się do włókien wrzeciona w miejscach określanych jako centromery. 124\n\n--- STRONA 125 --- 3.8. Cykl komórkowy. Mitoza Znaczenie mitozy Mitoza oraz następująca po niej cytokineza powodują zwiększenie liczby komórek iden- tycznych pod względem genetycznym. Umoż- liwia to: wzrost i rozwój organizmów, regeneracjęuszkodzonych lubutraconych elementów budowy organizmu (komórek, tkanek, a nawet całych organów), np. zabliż- nianie się ran i odrastanie części ciała (m.in. ogona u jaszczurki), wymianę zużytych komórek na nowe, np. Przykładem bezpłciowego (wegetatywnego) rozmnażania się roślin jest rozmnażanie truskawek wymianę komórek naskórka, przez rozłogi. Z rośliny macierzystej powstaje bezpłciowe rozmnażanie się wielu organi- identyczna pod względem genetycznym roślina zmów, np. protistów, grzybów i roślin. potomna. Anafaza Telofaza chromosom potomny WJL W anafazie: W telofazie: następuje podział centromerów, co prowadzi struktura chromosomów potomnych podlega do rozdzielenia każdego chromosomu na dwie stopniowemu rozluźnieniu (dekondensacji), chromatydy. Od tego momentu każda wokół chromosomów potomnych tworzy się chromatyda staje się odrębnym chromosomem, otoczka jądrowa oraz zaczyna się formować tzw. chromosomem potomnym, jąderko, chromosomy potomne przemieszczają się zanika wrzeciono podziałowe. Wyjątek mogą do przeciwległych biegunów komórki dzięki stanowić komórki niektórych roślin, u których skracającym się włóknom wrzeciona pozostałości mikrotubul wrzeciona podziałowego. kariokinetycznego uczestniczą w cytokinezie, na przeciwległych biegunach komórki zaczynają się tworzyć dwa jądra potomne. 125\n\n--- STRONA 126 --- Rozdział 3. Komórka – podstawowa jednostka życia Wrzeciono kariokinetyczne W komórkach roślin i zwierząt wrzeciona kariokinetyczne centrosom (podziałowe) formują się w odmienny sposób. U zwierząt wrzeciono podziałowe w powstawaniu wrzeciona uczestniczy centrosom -"
          }
        ]
      },
      {
        "id": "cytologia-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [
          {
            "id": "bio-cyt-1",
            "question": "Ile cząsteczek ATP powstaje w wyniku oddychania tlenowego z 1 cząsteczki glukozy?",
            "answer": "36–38 ATP (w tym: 2 ATP z glikolizy w cytoplazmie, 2 ATP z cyklu Krebsa w macierzy mitochondrialnej, 32–34 ATP z łańcucha oddechowego na grzebieniach mitochondrialnych).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-cyt-2",
            "question": "Czym różni się transport czynny od biernego przez błonę komórkową?",
            "answer": "Transport czynny wymaga energii (ATP) i zachodzi przeciw gradientowi stężeń (np. pompa Na⁺/K⁺ ATP-aza: 3 Na⁺ na zewnątrz, 2 K⁺ do wewnątrz). Transport bierny zachodzi zgodnie z gradientem i nie wymaga energii (dyfuzja prosta, dyfuzja ułatwiona, osmoza).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-cyt-3",
            "question": "Wymień organelle komórki eukariotycznej posiadające własne DNA.",
            "answer": "Mitochondria (mtDNA — koliste, dziedziczone po matce) i chloroplasty (cpDNA — u roślin). Oba są półautonomiczne, posiadają własne rybosomy 55S i 70S, co potwierdza hipotezę endosymbiotyczną.",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-cyt-4",
            "question": "Jaka jest funkcja aparatu Golgiego w komórce?",
            "answer": "Modyfikacja białek (glikozylacja, fosforylacja, sulfonowanie), sortowanie i pakowanie do pęcherzyków transportowych, synteza polisacharydów (u roślin — hemicelulozy i pektyny), produkcja lizosomów pierwotnych (kierowanych receptorem mannozo-6-fosforanowym).",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-cyt-5",
            "question": "Wyjaśnij, na czym polega model płynnej mozaiki budowy błony komórkowej.",
            "answer": "Model Singera i Nicolsona (1972): błona to dwuwarstwa fosfolipidowa, w której białka integralne i peryferyjne są zanurzone jak w mozaice. Całość jest dynamiczna — fosfolipidy dyfundują lateralnie, a cholesterol moduluje płynność. Błona jest asymetryczna (różny skład warstwy zewnętrznej i cytoplazmatycznej).",
            "examRef": "CKE 2017"
          },
          {
            "id": "bio-cyt-6",
            "question": "Porównaj budowę rybosomów prokariotycznych i eukariotycznych.",
            "answer": "Rybosomy prokariotyczne: 70S (podjednostki 30S + 50S). Rybosomy eukariotyczne: 80S (40S + 60S). Rybosomy mitochondrialne i chloroplastowe: 55S i 70S (podobne do bakteryjnych — dowód na endosymbiozę).",
            "examRef": "CKE 2018"
          },
          {
            "id": "bio-cyt-7",
            "question": "Na czym polega zjawisko apoptozy i czym różni się od nekrozy?",
            "answer": "Apoptoza to programowana, aktywna śmierć komórki (kondensacja chromatyny, fragmentacja DNA, tworzenie ciałek apoptotycznych fagocytowanych bez stanu zapalnego). Nekroza to bierna śmierć spowodowana urazem — pęcznienie i pękanie komórki z wywołaniem stanu zapalnego.",
            "examRef": "CKE 2019"
          },
          {
            "id": "bio-podz-1",
            "question": "Ile komórek potomnych powstaje w wyniku mitozy, a ile w wyniku mejozy? Jaka jest ich ploidia?",
            "answer": "Mitoza: 2 komórki diploidalne (2n), genetycznie identyczne. Mejoza: 4 komórki haploidalne (1n), genetycznie różne dzięki crossing-over i losowej segregacji chromosomów.",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-podz-2",
            "question": "Która faza mejozy odpowiada za rekombinację genetyczną i na czym ona polega?",
            "answer": "Profaza I — crossing-over (w stadium pachytenu), czyli wymiana odcinków chromatyd między niesiostrzanymi chromatydami chromosomów homologicznych w miejscach zwanych chiazmami. Dodatkowo losowe ułożenie biwalentów w metafazie I daje 2²³ ≈ 8,4 mln kombinacji.",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-podz-3",
            "question": "Czym różni się spermatogeneza od oogenezy pod względem liczby powstających gamet i przebiegu mejozy?",
            "answer": "Spermatogeneza: z 1 spermatogonium powstają 4 plemniki (mejoza ciągła). Oogeneza: z 1 oogonium powstaje 1 komórka jajowa + 3 ciałka kierunkowe (asymetryczna cytokineza); mejoza I zatrzymana w profazie I do owulacji, mejoza II zatrzymana w metafazie II i kończy się dopiero po zapłodnieniu.",
            "examRef": "CKE 2019"
          }
        ]
      },
      {
        "id": "cytologia-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. (0-4) Uczniowie mieli w warunkach domowych zweryfikować następującą hipotezę: Na kiełkowanie nasion wpływają temperatura, woda i światło. W tym celu w czterech ponumerowanych naczyniach wypełnio- nych watą zasiali pieprzycę siewną. Następnie każde z naczyń umieścili w odmiennych warunkach: • naczynie nr 1 - na parapecie, nasiona miały nie być podlewane, • naczynie nr 2 – na parapecie, nasiona miały być podlewane, • naczynie nr 3 – w szafce bez dostępu do światła, nasiona miały być podlewane, • naczynie nr 4 – w lodówce, nasiona miały być podlewane, • naczynie nr 5 – w lodówce, nasio",
          "Zadanie 2. (0-2)▲ Przeprowadzono badania dotyczące strategii pokarmowych gatunków chrząszczy występujących w Wiel- kiej Brytanii. Preferencje pokarmowe chrząszczy zostały ustalone na podstawie określenia składu gatun- kowego materiału zebranego w terenie. Wynik badania został przedstawiony na wykresie. drapieżniki (3.9%) roślinożercy (3,8%) pasożyty pasożyty roślin (35,6%) zwierząt (21,5%) BADANIA PRZY saprofagi (35,1%) Żródło: J. Weiner, Życie i ewolucja biosfery. Podręcznik ekologii ogólnej, Warszawa 2012, s. 357. a) Oceń prawdziwość poniższych stwierdzeń dotyczących przeprowadzonych badań.",
          "Zadanie 3. (0-5)▲ W komórkach liści kakaowca właściwego w warunkach naturalnych żyją endofityczne grzyby. Zasiedlają one liście po wykiełkowaniu siewek. Naukowcy przeprowadzili następujący eksperyment - wyhodowali w laboratorium siewki kakaowca, a następnie do części z nich dodali endofityczne grzyby. Następnie za- szczepili siewki gatunkiem protista, który powoduje uszkodzenia, a nawet zamieranie liści. Wyniki ekspe- rymentu przedstawiono w poniższej tabeli. Próba nr 1 Próba nr 2 i --P+ +d +3 Zamieranie liści (w %) 24 9 E- P+ - endofit nieobecny, patogen obecny Zniszczenia powierzchni liści (",
          "Zadanie 4. (0-3) Na rysunkach przedstawiono wyniki pewnego doświadczenia przeprowadzonego na bakterii – gronkowcu złocistym. A. B. obszar zasiedlony przez gronkowce miejsce aplikacji antybiotyku bez antybiotyku (-) z antybiotykiem (+) a) Sformułuj problem badawczy do tego doświadczenia. b) Określ, który wynik (A czy B) obrazuje próbę kontrolną. Odpowiedź uzasadnij. c) Oceń, które hipotezy zostały potwierdzone w doświadczeniu. Wpisz znak X w odpowiednie miejsca BADANIA PRZYROI tabeli. TAK NIE 1. Antybiotyki wpływają negatywnie na rozwój gronkowca złocistego. 2. Antybiotyki sprzyjają rozwojowi g",
          "Zadanie 5. (0-3)▲ Jastrząb poluje m.in. na gołębie grzywacze. Naukowcy postanowili sprawdzić, w jaki sposób na sukces drapieżnika wpływa wielkość grupy ofiar oraz dzieląca go od nich odległość. Wyniki obserwacji przedsta- wiono na poniższym wykresie. procent udanych ataków jastrzębia 100 50 odległość, z jakiej jastrząb zostaje- [dos zz z znmm -40 75 -30 50 -20 25 -10 0 0 1 2-10 11-50 >50 wielkość stada grzywaczy Na podstawie: A. Mackenzie, A.S. Ball, S.R. Virdee, Krótkie wyklady. Ekologia, Warszawa 2002, s. 185. 12\n\n\nZadania maturalne a) Sformułuj wniosek dotyczący skuteczności ataków jastrzęb"
        ]
      }
    ]
  },
  {
    "id": "genetyka",
    "title": "Genetyka — dziedziczenie, DNA i inżynieria genetyczna",
    "shortTitle": "Genetyka",
    "icon": "🧬",
    "sections": [
      {
        "id": "podstawy-genetyki",
        "title": "Genetyka klasyczna — prawa Mendla i dziedziczenie",
        "summary": "- Genetyka klasyczna opiera się na odkryciach Gregora Mendla __________ który badał dziedziczenie cech grochu zwyczajnego (Pisum sativum). - Wybrał 7 cech, każda determinowana przez jeden __________ z dwoma allelami o wyraźnej dominacji. - Mendel sformułował trzy prawa: (1) Prawo czystości gamet (I prawo Mendla) — podczas tworzenia gamet __________ danego genu ulegają segregacji (rozdzieleniu), tak że każda gameta zawiera tylko jeden allel z pary.",
        "academic_detail": "Genetyka klasyczna opiera się na odkryciach Gregora Mendla (1866), który badał dziedziczenie cech grochu zwyczajnego (Pisum sativum). Wybrał 7 cech, każda determinowana przez jeden gen z dwoma allelami o wyraźnej dominacji. Mendel sformułował trzy prawa: (1) Prawo czystości gamet (I prawo Mendla) — podczas tworzenia gamet allele danego genu ulegają segregacji (rozdzieleniu), tak że każda gameta zawiera tylko jeden allel z pary. (2) Prawo niezależnego dziedziczenia cech (II prawo Mendla) — allele różnych genów są dziedziczone niezależnie od siebie, o ile leżą na różnych chromosomach (różnych parach homologicznych). (3) Prawo dominacji — w heterozygocie allel dominujący maskuje obecność allelu recesywnego.",
        "content": [
          {
            "type": "paragraph",
            "text": "Genetyka klasyczna opiera się na odkryciach Gregora Mendla (1866), który badał dziedziczenie cech grochu zwyczajnego (Pisum sativum). Wybrał 7 cech, każda determinowana przez jeden gen z dwoma allelami o wyraźnej dominacji. Mendel sformułował trzy prawa: (1) Prawo czystości gamet (I prawo Mendla) — podczas tworzenia gamet allele danego genu ulegają segregacji (rozdzieleniu), tak że każda gameta zawiera tylko jeden allel z pary. (2) Prawo niezależnego dziedziczenia cech (II prawo Mendla) — allele różnych genów są dziedziczone niezależnie od siebie, o ile leżą na różnych chromosomach (różnych parach homologicznych). (3) Prawo dominacji — w heterozygocie allel dominujący maskuje obecność allelu recesywnego."
          },
          {
            "type": "paragraph",
            "text": "Gen to odcinek DNA zawierający informację o budowie białka (geny strukturalne) lub funkcjonalnego RNA (rRNA, tRNA, miRNA). U eukariontów gen składa się z eksonów (sekwencje kodujące) i intronów (sekwencje niekodujące, wycinane podczas splicingu). Genom człowieka zawiera około 20 000–25 000 genów kodujących białka, co stanowi tylko ~1,5% całego DNA (reszta to DNA niekodujące, sekwencje regulatorowe, pseudogeny, powtórzenia). Allele to różne wersje tego samego genu, powstające przez mutacje. Homozygota ma dwa identyczne allele danego genu (AA lub aa), heterozygota ma dwa różne allele (Aa). Genotyp to zestaw alleli danego organizmu, fenotyp to zespół cech obserwowalnych — wynik interakcji genotypu ze środowiskiem (norma reakcji)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Rozszerzenia genetyki mendlowskiej"
          },
          {
            "type": "paragraph",
            "text": "Nie wszystkie cechy dziedziczą się według prostego modelu dominacji-recesywności. Kodominacja — oba allele ujawniają się w fenotypie heterozygoty (np. grupa krwi AB: IᵃIᵇ — na erytrocytach są oba antygeny A i B). Dominacja niezupełna (pośrednia) — heterozygota ma fenotyp pośredni (np. wyżlin — krzyżówka czerwona × biała daje różową F1). Allele wielokrotne — więcej niż dwa allele w populacji (np. układ AB0: Iᵃ, Iᵇ, i). Plejotropia — jeden gen wpływa na wiele cech (np. fenyloketonuria — mutacja genu PAH wpływa na układ nerwowy, kolor skóry i włosów). Epistaza — jeden gen maskuje ekspresję innego nieallelicznego genu (np. kolor sierści u labradorów: gen B — barwnik, gen E — odkładanie barwnika; genotyp ee daje sierść żółtą niezależnie od B). Cechy poligeniczne (ilościowe) — determinowane przez wiele genów, wykazują rozkład ciągły (np. kolor skóry, wzrost, inteligencja)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dziedziczenie grup krwi człowieka"
          },
          {
            "type": "paragraph",
            "text": "Układ AB0 determinowany jest przez jeden gen (chromosom 9) z trzema allelami: Iᵃ (antygen A), Iᵇ (antygen B), i (brak antygenu). Allele Iᵃ i Iᵇ są kodominujące (oba ujawniają się), allel i jest recesywny. Grupa A: genotyp IᵃIᵃ lub Iᵃi — antygen A na erytrocytach, przeciwciała anty-B w osoczu. Grupa B: genotyp IᵇIᵇ lub Iᵇi — antygen B, przeciwciała anty-A. Grupa AB: genotyp IᵃIᵇ — oba antygeny, brak przeciwciał (uniwersalny biorca). Grupa 0: genotyp ii — brak antygenów, oba przeciwciała (uniwersalny dawca). Układ Rh (chromosom 1): obecność antygenu D (Rh⁺) jest dominująca (genotyp DD lub Dd), brak antygenu (Rh⁻) jest recesywny (dd). Konflikt serologiczny: matka Rh⁻, płód Rh⁺ — przy drugiej ciąży przeciwciała anty-D matki mogą powodować chorobę hemolityczną noworodka."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dziedziczenie sprzężone z płcią i choroby genetyczne"
          },
          {
            "type": "paragraph",
            "text": "Geny zlokalizowane na chromosomie X (rzadziej Y) wykazują dziedziczenie sprzężone z płcią. Mężczyźni (XY) są hemizygotyczni względem genów na X — mają tylko jeden allel, więc recesywny allel zawsze się ujawnia. Przykłady chorób sprzężonych z X (recesywne): hemofilia A (niedobór czynnika VIII krzepnięcia), daltonizm (brak jednego z typów czopków — najczęściej protanopia/zielona), dystrofia mięśniowa Duchenne'a (mutacja w genie dystrofiny). Przykłady chorób autosomalnych: recesywne — mukowiscydoza (mutacja CFTR, gęsty śluz), fenyloketonuria (brak hydroksylazy fenyloalaniny), anemia sierpowata (mutacja HBB, hemoglobina S); dominujące — choroba Huntingtona (powtórzenia CAG w genie HTT, późny początek), achondroplazja (karłowatość). Choroby mitochondrialne dziedziczone są wyłącznie od matki (wszystkie mitochondria zygoty pochodzą z komórki jajowej)."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "Chargaffa nie dotyczy cząsteczek jednonicio- wodorowym między zasadami azotowymi wego DNA (ssDNA) występującego u niektó- wchodzącymi w składobu łańcuchów, przy rych wirusów. czym: W dwuniciowej cząsteczce DNA łańcuchy między adeninąa tyminą powstajązawsze polinukleotydowe są antyrównoległe (prze- dwa wiązania wodorowe, ciwnie zorientowane) - koniec 5'jednego między cytozyną a guaniną powstają zawsze łańcucha leży naprzeciw końca 3'drugiego trzy wiązania wodorowe. łańcucha. Należy o tym pamiętać podczas Strukturę przestrzenną cząsteczki DNA sta- zapisywania sekwencji komplementarnych łań- bilizują również oddziaływania hydrofobowe cuchów DNA. Prawidłowym zapisem łańcucha między sąsiednimi parami zasad azotowych DNA komplementarnego do 5'AATGCGT3' tego samego łańcucha. jest więc 3'TTACGCA5'. Łańcuchy polinukleotydowe DNA są wza- Długość dwuniciowej cząsteczki DNA okre- jemnie komplementarne, co oznacza, że skład śla się w parach zasad (pz). Liczba par zasad nukleotydów w jednymłańcuchu wyznacza odpowiada liczbie par nukleotydów wchodzą- skład nukleotydów w drugim łańcuchu. Dzięki cych w skład cząsteczki DNA. wiązanie 3' P wodorowe koniec 5' 5' koniec 3' szkielet cukrowo- deoksyryboza -fosforanowy P zasada azotowa pełny reszta zasada mniejszy skret fosforanowa(V) azotowa rowek helisy P większy rowek P koniec 3' 5' koniec 5' P 5' 3' Cząsteczka DNA ma strukturę prawoskrętnej podwójnej helisy. Po jej zewnętrznej stronie znajdują się cząsteczki deoksyrybozy oraz reszty fosforanowe(V) tworzące szkielet cukrowo-fosforanowy. Do wnętrza a        b b b  b  b nA mogą rozpoznać odpowiednią sekwencję nukleotydów bez rozplatania podwójnej helisy. Na pełen skręt helisy przypada 10 par nukleotydów. 8\n\n--- STRONA 9 --- 1.1. Budowa i rola kwasów nukleinowych Samouczek Wykorzystanie zasady komplementarności do obliczania liczby poszczególnych nukleotydów w DNA Przykład Krok 2 Cząsteczka DNA składa się z 250 nukleotydów, Aby obliczyć liczbę nukleotydów z adeniną i tyminą, z których 75 zawiera cytozynę. musisz odjąć od całkowitej liczby nukleotydów Określ, ile nukleotydów w tej cząsteczce zawie- sumę nukleotydów z cytozyną i guaniną. ra tyminę. Łączna liczba nukleotydów z A i T wynosi: 250-150=100 Wskazówka: Dzięki zasadzie komplementarności wiesz, że liczba Krok 3 nukleotydów z tyminą (T) jest równa liczbie Oblicz liczbę nukleotydów z tyminą - w tym celu nukleotydów z adeniną (A). Jednakowa jest także liczba nukleotydów z cytozyną (C) i liczba nukleotydów podziel wynik otrzymany w poprzednim działaniu z guaniną (G). przez dwa. Liczba nukleotydów z T wynosi: 100 : 2 = 50 Krok 1 Odpowiedż: Ustal liczbę nukleotydów z guaniną. Jeśli liczba nukleotydów z C = 75, to liczba nukleo- W opisywanej cząsteczce tyminę zawiera 50 nukle- tydów z G = 75. otydów. Łączna liczba nukleotydów z C i G wynosi: 75+75=150 Wykorzystanie reguły Chargaffa do odróżniania DNA dwuniciowego od DNA jednoniciowego Przykład Krok 3 Fragment DNA o długości 200 nukleotydów zawie- Oblicz całkowitą liczbę nukleotydów w cząsteczce ra 63 nukleotydy z guaniną i 56 nukleotydów i porównaj ją z liczbą podaną w zadaniu. z adeniną. Liczba nukleotydów: liczba G + liczba A + liczba C + liczba T, czyli: Ustal, czy jest to cząsteczka jednoniciowa czy dwuniciowa. Uzasadnij odpowiedź. 63+56+63+56=238 Liczba nukleotydów podana w zadaniu = 200 Krok 1 Liczby są różne. Załóż, że cząsteczka DNA jest dwuniciowa. Praw- Odpowiedź: dziwość tego założenia sprawdzisz, ustalając, czy dane z zadania zgadzają się z informacjami doty-"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "na których będziemy prowadzić badania, np. hodowla komórkowa lub zwierzęta laboratoryjne. 6\n\n--- STRONA 7 --- Zasady prowadzenia badańbiologicznych Badania biologiczne przeprowadza się według określonego schematu, w którym wyróżnia się pięć głównych etapów. Etap badania Opis Przykład Obserwacja Zaobserwowanie przez badacza niezna- Siewki pszenicy oświetlane z jednej nego organizmu czy niewytłumaczonego strony rosną w kierunku źródła światła. procesu. 2 Sformulowanie Problem badawczy zazwyczaj przyjmu- Czy siewki pszenicy oświetlane z jednej problemu je postać zdania pytającego, na które strony rosną w kierunku źródła światła? badawczego badacz chce znależć odpowiedż, lub (zdanie pytające) równoważnika zdania. qn| Wpływ oświetlania siewek pszenicy z jednej strony na kierunek ich wzrostu. (równoważnik zdania) Postawienie Udzielenie przewidywanej, Siewki pszenicy oświetlane z jednej hipotezy niekoniecznie prawdziwej odpowiedzi strony rosną w kierunku źródła światła. na pytanie sformułowane w problemie (zdanie twierdzące) badawczym. Hipoteza może mieć formę lub zdania oznajmującego twierdzącego lub Siewki pszenicy oświetlane z jednej przeczącego. strony nie rosną w kierunku źródła światła. (zdanie przeczące) 4 Weryfikacja Sprawdzenie prawdziwości hipotezy za Zaplanowanie i założenie hodowli siewek. hipotezy pomocą obserwacji lub doświadczenia. Próba badawcza: hodowla siewek Etap ten obejmuje: oświetlanych z jednej strony. • zaplanowanie doświadczeń, czyli okre- Próba kontrolna: hodowla siewek ślenie sposobu, w jaki badacz będzie oświetlanych równomiernie. sprawdzał hipotezę. Najważniejsze Zebranie wyników w postaci danych jest prawidłowe zaplanowanie próby liczbowych, a następnie ich analiza. badawczej i próby kontrolnej - powinny się one różnić jedynie badanym czyn- nikiem. Pozostałe czynniki i warunki powinny być identyczne we wszystkich próbach. Należy pamiętać, aby dla każdej próby kontrolnej i badawczej wykonać wiele powtórzeń; • przeprowadzenie doświadczeń; • zebranie wyników, czyli wykonanie do- kumentacji badań, najczęściej w formie tabel lub wykresów; próba kontrolna próba badawcza • analizę wyników. Sformułowanie Wniosek musi być oparty bezpośrednio Jeżeli analiza danych potwierdza na wynikach obserwacji prawdziwość założonej hipotezy, wniosku lub doświadczenia. Jest potwierdze- można ją przyjąć. niem lub zaprzeczeniem hipotezy. Gdy Wówczas wniosek powinien brzmieć: hipoteza została odrzucona, zwykle są Siewki pszenicy oświetlane z jednej podejmowane dalsze badania i stawiana strony rosną w kierunku źródła światła. jest nowa hipoteza. 7\n\n--- STRONA 8 --- Rozdział 1. Badania przyrodnicze Samouczek Srz   dbza rza bcd - Srza bch W trakcie badań biologicznych dla każdej próby wykonuje się wiele powtórzeń. Ich wyniki nie są identyczne, dlatego należy poprawnie je zinterpretować. W tym celu wykonuje się analizy statystyczne. Jedną z podsta- wowych analiz statystycznych jest obliczanie średniej arytmetycznej, czyli zsumowanie wyników, a następnie po  p  n  é d   nie arytmetycznej. suma wyników średnia arytmetyczna = liczba wyników Przykładowa obserwacja W tabeli zestawiono wyniki uzyskane w pewnym doświadczeniu biologicznym. Nr pomiaru Próba 1 Próba 2 Próba 3 1. 27,5 15,3 25,4 2. 32,0 17,8 23,9 3. 24,5 28,0 22,0 4. 36,1 20,2 26,5 5. 33,1 16,7 26,3 6. 28,4 17,4 21,1 Aby określić, w której próbie uzyskano najwyższe wyniki, a w której – najniższe oraz porównać je ze sobą, należy dla każdej próby obliczyć średnią arytmetyczną. Krok 1 Krok 3"
          }
        ]
      },
      {
        "id": "dna-replikacja-ekspresja",
        "title": "Struktura DNA, replikacja i ekspresja genów",
        "summary": "- DNA (kwas deoksyrybonukleinowy) __________ nośnikiem informacji genetycznej. - Struktura podwójnej helisy (Watson i Crick, 1953, z wykorzystaniem danych Rosalind __________ dwie antyrównoległe nici (5′→3′ i 3′→5′) skręcone prawoskrętnie wokół wspólnej osi. - Każda nić zbudowana jest z nukleotydów: __________ deoksyryboza, reszta fosforanowa(V) i zasada azotowa.",
        "academic_detail": "DNA (kwas deoksyrybonukleinowy) jest nośnikiem informacji genetycznej. Struktura podwójnej helisy (Watson i Crick, 1953, z wykorzystaniem danych Rosalind Franklin): dwie antyrównoległe nici (5′→3′ i 3′→5′) skręcone prawoskrętnie wokół wspólnej osi. Każda nić zbudowana jest z nukleotydów: cukier deoksyryboza, reszta fosforanowa(V) i zasada azotowa. Zasady purynowe: adenina (A) i guanina (G) — dwupierścieniowe. Zasady pirymidynowe: tymina (T — tylko w DNA) i cytozyna (C) — jednopierścieniowe. Komplementarność: A=T (2 wiązania wodorowe), C≡G (3 wiązania wodorowe — silniejsze). Szkielet cukrowo-fosforanowy tworzy łącznik między nukleotydami (wiązania fosfodiestrowe 3′→5′). U eukariontów DNA jest upakowany w chromatynę: owija się wokół oktamerów histonowych (po 2 cząsteczki H2A, H2B, H3, H4) tworząc nukleosomy (średnica ~11 nm), które dalej kondensują do włókna 30 nm (solenoid), a następnie w wyższe rzędy upakowania aż do chromosomu metafazowego.",
        "content": [
          {
            "type": "paragraph",
            "text": "DNA (kwas deoksyrybonukleinowy) jest nośnikiem informacji genetycznej. Struktura podwójnej helisy (Watson i Crick, 1953, z wykorzystaniem danych Rosalind Franklin): dwie antyrównoległe nici (5′→3′ i 3′→5′) skręcone prawoskrętnie wokół wspólnej osi. Każda nić zbudowana jest z nukleotydów: cukier deoksyryboza, reszta fosforanowa(V) i zasada azotowa. Zasady purynowe: adenina (A) i guanina (G) — dwupierścieniowe. Zasady pirymidynowe: tymina (T — tylko w DNA) i cytozyna (C) — jednopierścieniowe. Komplementarność: A=T (2 wiązania wodorowe), C≡G (3 wiązania wodorowe — silniejsze). Szkielet cukrowo-fosforanowy tworzy łącznik między nukleotydami (wiązania fosfodiestrowe 3′→5′). U eukariontów DNA jest upakowany w chromatynę: owija się wokół oktamerów histonowych (po 2 cząsteczki H2A, H2B, H3, H4) tworząc nukleosomy (średnica ~11 nm), które dalej kondensują do włókna 30 nm (solenoid), a następnie w wyższe rzędy upakowania aż do chromosomu metafazowego."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Replikacja DNA — semikonserwatywna"
          },
          {
            "type": "paragraph",
            "text": "Replikacja DNA jest semikonserwatywna (eksperyment Meselsona i Stahla, 1958): każda cząsteczka potomna zawiera jedną starą nić macierzystą i jedną nowo zsyntetyzowaną. U eukariontów zaczyna się w wielu miejscach (origin of replication — ARS) jednocześnie, tworząc widełki replikacyjne poruszające się dwukierunkowo. Enzymy replikacji: helikaza (rozplatanie podwójnej helisy, przerywanie wiązań wodorowych), topoizomeraza (rozkręcanie helisy przed widełkami, przecinanie i ponowne łączenie nici), białka SSB (stabilizacja rozplecionych nici). Prymaza (polimeraza RNA) syntetyzuje starter RNA (~10 nukleotydów) z wolnym końcem 3′-OH. Polimeraza DNA (u eukariontów: α — inicjacja, δ — nić opóźniona, ε — nić wiodąca) dołącza nukleotydy w kierunku 5′→3′ tylko do wolnego 3′-OH. Nić wiodąca syntetyzowana jest w sposób ciągły w kierunku widełek. Nić opóźniona syntetyzowana jest w postaci fragmentów Okazaki (100-200 nukleotydów). DNA-ligaza łączy fragmenty Okazaki. Egzonukleaza usuwa startery RNA. Polimeraza DNA ma aktywność korektorską 3′→5′. Telomery (powtórzenia TTAGGG) chronią końce chromosomów — telomeraza (odwrotna transkryptaza z matrycą RNA) odtwarza skrócone końce w komórkach macierzystych i nowotworowych (w komórkach somatycznych nieaktywna → starzenie)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Ekspresja genów — od DNA do białka"
          },
          {
            "type": "paragraph",
            "text": "Centralny dogmat biologii molekularnej (Crick): DNA → RNA → białko. Transkrypcja zachodzi w jądrze: polimeraza RNA II przyłącza się do promotora (sekwencje TATA-box, CAAT-box) za pośrednictwem czynników transkrypcyjnych (TFIID, TFIIB itd.). Synteza pre-mRNA w kierunku 5′→3′ na nici matrycowej DNA (3′→5′). Obróbka posttranskrypcyjna (dojrzewanie mRNA): splicing — wycięcie intronów przez spliceosom (snRNP: U1, U2, U4, U5, U6) i połączenie eksonów; splicing alternatywny umożliwia powstanie różnych białek z jednego genu; dodanie czapeczki 7-metyloguanozyny na końcu 5′ (ochrona przed egzonukleazami, rozpoznawanie przez rybosom); poliadenylacja — dodanie 100-250 adenin na końcu 3′ (stabilność, transport z jądra). Dojrzały mRNA opuszcza jądro przez pory jądrowe."
          },
          {
            "type": "paragraph",
            "text": "Translacja zachodzi na rybosomach w cytoplazmie: faza inicjacji — mała podjednostka rybosomu (40S) z tRNA inicjatorowym (Met-tRNAᵢ) przyłącza się do czapeczki 5′ mRNA i skanuje do kodonu START (AUG). Faza elongacji — aminoacylo-tRNA wchodzi do miejsca A, wiązanie peptydowe tworzy się między aminokwasami w miejscach A i P (kataliza przez peptydylotransferazę — rRNA 28S, rybozym), rybosom przesuwa się o 1 kodon (translokacja, czynnik EF-G/EF2). Faza terminacji — kodon STOP (UAA, UAG, UGA) rozpoznawany jest przez czynnik uwalniający (eRF1), który hydrolizuje łańcuch polipeptydowy od tRNA. Białka po translacji ulegają fałdowaniu (z udziałem chaperonów: Hsp60, Hsp70) i modyfikacjom potranslacyjnym (glikozylacja, fosforylacja, acetylacja, ubikwitynacja — kieruje do proteasomów)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Kod genetyczny — właściwości"
          },
          {
            "type": "paragraph",
            "text": "Kod genetyczny jest: trójkowy (kodon = 3 kolejne nukleotydy → 1 aminokwas, 4³ = 64 kombinacje), jednoznaczny (jeden kodon koduje tylko jeden aminokwas), zdegenerowany (18 z 20 aminokwasów ma więcej niż jeden kodon — najczęściej różnią się trzecią zasadą, tzw. tolerancja na 3. pozycji/wobble), bezprzecinkowy (sekwencja czytana jest w sposób ciągły, bez przerw), niezachodzący (kodony nie zachodzą na siebie), uniwersalny (taki sam u prawie wszystkich organizmów — drobne wyjątki w mitochondriach). Kodonów sensownych jest 61 (kodują aminokwasy), kodonów STOP (terminacyjnych) jest 3: UAA (ochra), UAG (bursztyn), UGA (opal). Kodon START: AUG — koduje metioninę."
          },
          {
            "type": "table",
            "headers": [
              "Typ RNA",
              "Funkcja",
              "Lokalizacja"
            ],
            "rows": [
              [
                "mRNA (informacyjny)",
                "Niesie informację o sekwencji aminokwasów z DNA do rybosomu",
                "Jądro (transkrypcja) → cytoplazma (translacja)"
              ],
              [
                "tRNA (transportujący)",
                "Przenosi aminokwasy do rybosomu i dopasowuje je do kodonu mRNA (antykodon)",
                "Cytoplazma"
              ],
              [
                "rRNA (rybosomalny)",
                "Strukturalny i katalityczny składnik rybosomów (rybozym — peptydylotransferaza)",
                "Rybosomy (jąderko → cytoplazma)"
              ],
              [
                "miRNA (mikro RNA)",
                "Regulacja ekspresji genów — blokowanie translacji lub degradacja mRNA",
                "Cytoplazma"
              ],
              [
                "siRNA (małe interferujące)",
                "Wyciszanie ekspresji genów (interferencja RNA — RNAi)",
                "Cytoplazma"
              ]
            ]
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "RNA, jak i cząsteczek białek. Od białek zależą w połowie XX w. dzięki badaniom nad bakte- natomiast poszczególne cechy organizmu riami oraz wirusami. Eksperyment Fredericka Griffitha Frederick Griffith [wym. frederik grifit] był brytyjskim lekarzem wojskowym zajmującym się terapią bakteryjnego zapalenia płuc. W 1928 r. przeprowadził on eksperyment na myszach, w którym badał dwa szczepy dwoinki zapalenia płuc: szczep S, do którego należą bakterie chorobotwórcze wytwarzające śluzową otoczkę, szczep R, do którego należą bakterie niechorobotwórcze niewytwarzające śluzowej otoczki. Przebieg doświadczenia W pierwszym etapie doświadczenia Griffith infekował część myszy bakteriami szczepu S, a część - bakteriami szczepu R. bakterie szczepu S- bakterie szczepu R - chorobotwórcze niechorobotwórcze mysz umiera mysz żyje Myszy zainfekowane bakteriami szczepu S chorowały Myszy zainfekowane bakteriami szczepu R i umierały. nie wykazywały objawów choroby. ② W drugim etapie doświadczenia Griffith infekował część myszy bakteriami szczepu S zabitymi wysoką temperaturą, a część – mieszanką żywych bakterii szczepu R i martwych bakterii szczepu S. martwe bakterie żywe bakterie szczepu R szczepu S i martwe bakterie szczepu S mysz żyje mysz umiera Myszy zainfekowane martwymi bakteriami szczepu S Myszy zainfekowane mieszanką żywych bakterii nie wykazywaly objawów choroby. szczepu R i martwych bakterii szczepu S chorowały i umieraly. Ponadto z martwych myszy Griffith wyizolo- wał żywe bakterie szczepu S. Swoim doświadczeniem Griffith wykazał, że bakterie chorobotwórcze mogą przekazywać bakteriom niechorobo- two             da. Wiedział jedynie, że jest to składnik cytoplazmy bakterii chorobotwórczych. 10\n\n--- STRONA 11 --- 1.1. Budowa i rola kwasów nukleinowych M Poszukiwanie związku chemicznego przenoszącego informację genetyczną między komórkami bakterii W 1944 r. w Stanach Zjednoczonych trzej naukowcy: Oswald Avery [wym. osfald ejwri], Colin MacLeod [wym. kolin makleod] i Maclyn McCarty [wym. maklin macarti] przepro- wadzili badania nad przekazywaniem informacji genetycznej między komórkami bakterii. Badania te były kontynuacją doświadczeń F. Griffitha. Naukowcy niszczyli kolejno białka, DNA lub RNA w ekstrakcie zawierającym cytoplazmę bakterii chorobotwórczych. Następ- nie sprawdzali, czy chorobotwórczość została przekazana bakteriom niechorobotwórczym. Problem badawczy: Który związek chemiczny odpowiada za przekazywanie cech – białko, RNA czy DNA? Hipoteza: Za przekazanie bakteriom cechy chorobotwórczości odpowiada DNA. Przebieg doświadczenia: Do ekstraktu z bakterii chorobotwórczych naukowcy dodawali enzymy trawiące białka (proteazy), DNA (deoksyrybonukleazy) lub RNA (rybonukleazy). Następnie dodawali ekstrakt do hodowli bakterii niechorobotwórczych, po czym zakażali nimi myszy i obserwowali, ile zwierząt zachorowało. W przypadku śmierci zwierząt badali, czy w ich krwi znajdują się bakterie. Próba kontrolna (pozytywna) Próba kontrolna (negatywna) bakterie mysz umiera bakterie niechorobotwórcze chorobotwórcze bakterie + ekstrakt z bakterii niechorobotwórcze mysz żyje chorobotwórczych Próby badawcze bakterie niechorobotwórcze +ekstraktz bakterii chorobotwórczych + enzym trawiący białko bakterie mysz umiera chorobotwórcze bakterie niechorobotwórcze + ekstrakt z bakterii chorobotwórczych + enzym trawiący RNA bakterie mysz umiera chorobotwórcze bakterie niechorobotwórcze + ekstrakt z bakterii chorobotwórczych + enzym trawiacy DNA mysz żyje Wynik doświadczenia: Zniszczenie DNA w ekstrakcie z chorobotwórczych bakterii"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "Struktura lodu Gęstość mniejsza w stanie stałym niż w stanie ciekłym Woda ma największą gęstość w temperaturze 4°C. Wraz ze spadkiem temperatury jej gęstość maleje, a objętość rośnie, co jest spowodowane zwiększa- niem się odległości między cząsteczkami wody w wyniku powstawania regularnie rozmieszczonych wiązań wodorowych. W rezultacie lód jest lżejszy od wody i utrzymuje się na jej powierzchni, a głębsze warstwy wody pozostają niezamarznięte. Umożliwia to organizmom wodnym przetrwanie zimy. Struktura wody ciekłej Gęstość większa niż gęstość powietrza Jeśli woda jest w stanie ciekłym, jej cząsteczki leżą blisko siebie, ponieważ są połączone krótkimi, choć nieregularnie rozmieszczonymi wiązaniami wodorowymi. W efekcie gęstość wody jest większa niż gęstość powietrza, co umożliwia utrzymywanie się w wodzie nawet tak dużych organizmów, jak np. walenie. 34\n\n--- STRONA 35 --- Wysokie ciepło właściwe Woda ma najwyższe ciepło właściwe spośród wszystkich znanych substancji. Oznacza to, że aby podnieść temperaturę wody, należy dostarczyć jej znaczną ilość ciepła, natomiast aby obniżyć jej temperaturę, trzeba dużą ilość ciepła odebrać. Dzięki temu woda zawarta w organizmie chroni go przed nagłymi zmianami temperatury otoczenia. Zapewnia również stabilne warunki życia organizmom wodnym. Krew przepływająca przez naczynia krwionośne jest magazynem ciepła w organizmie, ponieważ składa się głównie z wody. Wysokie ciepło parowania Woda ma wysokie ciepło parowania, co oznacza, że trzeba dostarczyć znaczną ilość energii, aby zmienić jej stan skupienia z ciekłego na gazowy. Dzięki temu woda pełni funkcję termoregulacyjną. Na przykład pot wydzielany przez niektóre ssaki odbiera ciepło z organizmu, a następnie paruje, umożliwiając w ten sposób obniżenie temperatury ciała. Spójność i przyleganie Wiązania wodorowe powodują dużą spójność (kohezję) wody, czyli odporność słupa wody na rozerwanie pod wpływem sił rozciągających. Razem z innymi rodzajami oddziaływań międzycząsteczko- wych warunkują również jej dobre przyleganie (adhezję) do powierzchni naładowanych elektrycznie. Dzięki temu woda może przemieszczać się w górę w cienkich rurkach (kapilarach), np. w naczyniach roślin. Zdrewniałe ściany naczyń mają ładunek ujemny, co umożliwia przyleganie wody do ich powierzchni. Wysokie napięcie powierzchniowe Przyciąganie się cząsteczek wody na granicy z powietrzem jest dużo silniejsze niż w głębi cieczy. Dzięki temu na powierzchni wody powstaje cienka, sprężysta błonka, na której mogą się utrzymywać małe organizmy, np. niektóre owady. 35\n\n--- STRONA 36 --- Rozdział 2. Chemiczne podstawy życia Substancje hydrofilowe i hydrofobowe Zgodnie z zasadą podobne rozpuszcza się w podobnym\", woda jest doskonałym rozpuszczalnikiem substancji o budowie polarnej lub jonowej. Nazywamy je substancjami hydrofilowymi i mówimy, że mają duże powinowactwo do wody. Substancje hydrofobowe, o małym powinowactwie do wody, mają cząsteczki niepolarne, są więc nierozpuszczalne w wodzie. + Substancje o charakterze jonowym Substancje o charakterze Substancje o charakterze (np. NaCl) są hydrofilowe i dobrze polarnym (np. alkohole lub niepolarnym (np. węglowodory rozpuszczają się w wodzie. Każdy cukry proste) są hydrofilo- lub tłuszcze) są hydrofobowe i nie z powstałych jonów otacza się czą- we i dobrze rozpuszczają rozpuszczają się w wodzie. Skupiają steczkami wody zwróconymi w jego się w wodzie. Tworzą one się w kuliste zespoły, co zapewnia stronę biegunami o przeciwnym ładunku z cząsteczkami wody wią-"
          }
        ]
      },
      {
        "id": "mutacje-i-biotechnologia",
        "title": "Mutacje, regulacja genów i biotechnologia",
        "summary": "- Mutacje to nagłe, skokowe, dziedziczne zmiany w materiale genetycznym wywołane przez mutageny (fizyczne — __________ UV, X, γ; chemiczne — analogi zasad, związki alkilujące, benzopiren; biologiczne — wirusy, transpozony). - Mutacje genowe (punktowe): substytucja (zamiana pary nukleotydów) — cicha (synonimowa __________ nie zmienia aminokwasu), zmiany sensu (missense — zmiana aminokwasu, np. - anemia sierpowata: GAG→GTG, Glu→Val w łańcuchu β-hemoglobiny), nonsensowna (powstaje kodon __________ — białko skrócone), delecja/insercja (przesunięcie ramki odczytu — frameshift).",
        "academic_detail": "Mutacje to nagłe, skokowe, dziedziczne zmiany w materiale genetycznym wywołane przez mutageny (fizyczne — promieniowanie UV, X, γ; chemiczne — analogi zasad, związki alkilujące, benzopiren; biologiczne — wirusy, transpozony). Mutacje genowe (punktowe): substytucja (zamiana pary nukleotydów) — cicha (synonimowa — nie zmienia aminokwasu), zmiany sensu (missense — zmiana aminokwasu, np. anemia sierpowata: GAG→GTG, Glu→Val w łańcuchu β-hemoglobiny), nonsensowna (powstaje kodon STOP — białko skrócone), delecja/insercja (przesunięcie ramki odczytu — frameshift). Mutacje chromosomowe (aberracje strukturalne): delecja (utrata fragmentu), duplikacja (podwojenie), inwersja (odwrócenie fragmentu 180° — pericentryczna z centromerem, paracentryczna bez), translokacja (przeniesienie fragmentu na inny chromosom — zrównoważona/niezrównoważona, np. chromosom Philadelphia t(9;22) w CML). Mutacje genomowe (zmiany liczby chromosomów): aneuploidia — trisomia (2n+1, np. trisomia 21 — zespół Downa, trisomia 18 — Edwardsa, trisomia 13 — Patau; na chromosomach płci: XXY — Klinefelter, X0 — Turner), monosomia (2n−1 — zwykle letalna); poliploidia — triploidia 3n, tetraploidia 4n (powszechna u roślin).",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Mutacje — rodzaje i skutki"
          },
          {
            "type": "paragraph",
            "text": "Mutacje to nagłe, skokowe, dziedziczne zmiany w materiale genetycznym wywołane przez mutageny (fizyczne — promieniowanie UV, X, γ; chemiczne — analogi zasad, związki alkilujące, benzopiren; biologiczne — wirusy, transpozony). Mutacje genowe (punktowe): substytucja (zamiana pary nukleotydów) — cicha (synonimowa — nie zmienia aminokwasu), zmiany sensu (missense — zmiana aminokwasu, np. anemia sierpowata: GAG→GTG, Glu→Val w łańcuchu β-hemoglobiny), nonsensowna (powstaje kodon STOP — białko skrócone), delecja/insercja (przesunięcie ramki odczytu — frameshift). Mutacje chromosomowe (aberracje strukturalne): delecja (utrata fragmentu), duplikacja (podwojenie), inwersja (odwrócenie fragmentu 180° — pericentryczna z centromerem, paracentryczna bez), translokacja (przeniesienie fragmentu na inny chromosom — zrównoważona/niezrównoważona, np. chromosom Philadelphia t(9;22) w CML). Mutacje genomowe (zmiany liczby chromosomów): aneuploidia — trisomia (2n+1, np. trisomia 21 — zespół Downa, trisomia 18 — Edwardsa, trisomia 13 — Patau; na chromosomach płci: XXY — Klinefelter, X0 — Turner), monosomia (2n−1 — zwykle letalna); poliploidia — triploidia 3n, tetraploidia 4n (powszechna u roślin)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Regulacja ekspresji genów"
          },
          {
            "type": "paragraph",
            "text": "U eukariontów regulacja ekspresji genów zachodzi na wielu poziomach: (a) epigenetyczny — metylacja DNA (wysp CpG — wyciszenie), modyfikacje histonów (acetylacja — aktywacja, metylacja — zależnie od kontekstu); (b) transkrypcyjny — czynniki transkrypcyjne, promotory, wzmacniacze (enhancery), wyciszacze (silencery), izolatory; (c) posttranskrypcyjny — splicing alternatywny, degradacja mRNA przez miRNA/siRNA; (d) translacyjny — blokowanie inicjacji translacji, fosforylacja czynników inicjacji (eIF2); (e) potranslacyjny — modyfikacje białek, ubikwitynacja i degradacja w proteasomach. U prokariotów klasycznym modelem regulacji jest operon laktozowy (Jacob i Monod, 1961): w nieobecności laktozy represor LacI blokuje operator → brak transkrypcji genów lacZ, lacY, lacA; w obecności laktozy (allolaktoza) induktor wiąże się z represorem → represor odłącza się od operatora → polimeraza RNA transkrybuje geny. Operon tryptofanowy jest represyjny — obecność tryptofanu (korepresora) aktywuje represor."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Inżynieria genetyczna i biotechnologia"
          },
          {
            "type": "paragraph",
            "text": "Podstawowe techniki inżynierii genetycznej: (a) Enzymy restrykcyjne (restryktazy) — przecinają DNA w specyficznych sekwencjach palindromowych, tworząc lepkie lub tępe końce (np. EcoRI — GAATTC). (b) Ligazy DNA — łączą fragmenty DNA. (c) Wektory — plazmidy (koliste DNA bakteryjne z genem oporności na antybiotyk i miejscem multiple cloning site), wirusy (bakteriofag λ, lentiwirusy), sztuczne chromosomy (BAC, YAC). (d) PCR (reakcja łańcuchowa polimerazy) — amplifikacja DNA in vitro: denaturacja (~95°C), hybrydyzacja starterów (~50-65°C), elongacja (72°C, polimeraza Taq) — cykle powtarzane 25-40 razy dają wykładniczą amplifikację. (e) Elektroforeza żelowa — rozdzielanie fragmentów DNA w polu elektrycznym (żele agarozowe lub poliakrylamidowe), wizualizacja barwnikiem fluorescencyjnym (bromek etydyny, SYBR Green). (f) Sekwencjonowanie DNA — metoda Sangera (dideoksy, terminacja łańcucha) lub NGS (Next Generation Sequencing). (g) CRISPR/Cas9 — precyzyjna edycja genomu: naprowadzające RNA (gRNA) kieruje nukleazę Cas9 do docelowej sekwencji, gdzie powoduje dwuniciowe pęknięcie DNA; naprawa przez NHEJ (non-homologous end joining — wyłączenie genu) lub HDR (homology directed repair — wprowadzenie nowej sekwencji)."
          },
          {
            "type": "paragraph",
            "text": "Organizmy transgeniczne (GMO) — zawierają obcy gen wprowadzony metodami inżynierii genetycznej. Przykłady: bakterie produkujące insulinę ludzką (gen insuliny wprowadzony do E. coli), rośliny Bt (gen Cry z Bacillus thuringiensis — odporność na owady), Golden Rice (geny syntezy β-karotenu — prowitaminy A), zwierzęta transgeniczne (myszy knockout do badań funkcji genów). Klonowanie — tworzenie genetycznie identycznych kopii organizmu: klonowanie terapeutyczne (pozyskiwanie komórek macierzystych z blastocysty — SCNT, somatic cell nuclear transfer) i reprodukcyjne (owca Dolly, 1996 — jądro komórki somatycznej dawcy do enukleowanej komórki jajowej)."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "spowodowało, że cecha chorobotwórczości nie została przekazana bakteriom niecho- robotwórczym. Zniszczenie RNA lub białek nie spowodowało zmian – cecha była dalej przekazywana bakteriom niechorobotwórczym. Wniosek: Za przekazywanie cech odpowiada DNA i to on jest nośnikiem informacji genetycznej. 11\n\n--- STRONA 12 --- Rozdział 1. Genetyka molekularna Sprawdzenie, czy DNA przenosi informację genetyczną wirusa Teorię, że DNA jest nośnikiem informacji genetycznej, potwierdziła również seria doświadczeń przeprowadzonych w 1952 r. w Stanach Zjednoczonych przez Alfreda Hershey'a [wym. herszija] i Marthę Chase [wym. martę czejs]. Badacze chcieli ustalić, które elementy budowy bakteriofaga T2 wnikają do komórek bakterii i powodują wytwarzanie nowych cząstek wirusa. Problem badawczy: Czy DNA jest nośnikiem informacji genetycznej bakteriofagów? Hipoteza: DNA jest nośnikiem informacji genetycznej bakteriofagów. Przebieg doświadczenia: Badacze wbudowali w kapsyd bakteriofagów T2 promieniotwórczą siarkę (3⁵S), a w ich DNA – promieniotwórczy fosfor (32P). Następnie zakażali bakteriofagami bakterie, po czym wytrząsali i wirowali roztwór tak, aby bakterie z wstrzykniętym DNA bakteriofa- gów utworzyły osad i oddzieliły się od białkowych kapsydów. Na końcu zmierzyli poziom promieniotwórczości w osadzie i roztworze. DNA zawierający Bakteriofagi T2 wstrzykują DNA 32p do komórek bakterii. białkowy kapsyd zawierający 35S bakteriofag bakteria Białkowe kapsydy bakteriofagów pusty kapsyd odłączają się od bakterii podczas bakteriofaga wytrząsania. Komórki bakterii oddzielają się od roztworu podczas wirowania. 35S roztwór zawierający promieniotwórcze białka bakteriofagów osad z bakterii zawierających promieniotwórczy DNA bakteriofagów Wynik doświadczenia: Większość promieniotwórczej siarki (3⁵S) znajdowała się w roz- tworze zawierającym białkowe kapsydy bakteriofagów. Większość promieniotwórczego fosforu (32p) znajdowała się w osadzie z bakterii, które zawierały DNA bakteriofagów. Wniosek: W przekazywaniu informacji genetycznej wirusów uczestniczy DNA, a nie białko. 12\n\n--- STRONA 13 --- 1.1. Budowa i rola kwasów nukleinowych Budowa RNA powstałe na skutek łączenia się komplemen- Kwas rybonukleinowy jest polimerem zbu- tarnych nukleotydów jednej nici. Fragmenty dowanym z nukleotydów (rybonukleotydów). te wpływają na strukturę przestrzenną całej W skład każdego nukleotydu RNA wchodzą: cząsteczki RNA. Dwuniciowe cząsteczki RNA pięciowęglowy cukier – ryboza, spotyka się znacznie rzadziej, m.in. u niektó- reszta fosforanowa(V), rych wirusów. jedna z czterech zasad azotowych: adenina (A), Rola RNA guanina (G), cytozyna (C) lub uracyl (U), przy czym komplementarne pary zasad to: adenina W komórkach występuje kilka rodzajów RNA, i uracyl oraz guanina i cytozyna. które różnią się od siebie liczbą oraz sekwencją Wzależności od rodzaju zasady azotowej budujących je nukleotydów, a także strukturą w cząsteczce RNA wyróżnia się cztery typy przestrzenną i funkcjami. Trzy podstawowe nukleotydów: nukleotyd adeninowy, nukleotyd rodzaje RNA, które występują u wszystkich guaninowy, nukleotyd cytydynowy i nukleotyd organizmów, to: urydynowy. mRNA - informacyjny RNA (ang. messenger RNA), reszta uracyl rRNA - rybosomowy RNA (ang. ribosomal fosforanowa(V) O RNA), ryboza HN tRNA - transportujący RNA (ang. transfer Il RNA). O⁻—P—O 5' CH2 O Uorganizmów eukariotycznych występują 4 1 też inne rodzaje RNA. Są to m.in.: snRNA, H H H H siRNA oraz miRNA. 3' 2 Wszystkie rodzaje RNA uczestniczą bez-"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "• Jest miejscem syntezy lipidów, magazynowania jonów oraz detoksykacji substancji zmatyczna gładka toksycznych. Aparat Golgiego • Odpowiada głównie za modyfikowanie, sortowanie i transport białek. Lizosomy • Zachodzi w nich trawienie wewnątrzkomórkowe. Peroksysomy • Są miejscem zachodzenia reakcji utleniania różnych związków oraz neutralizacji reaktywnych form tlenu. Wakuole • Odpowiadają za stan uwodnienia komórek, magazynują różne substancje oraz biorą udział w procesie trawienia. Organelle nieotoczone błoną Rybosomy • Przeprowadzają syntezę białek. Centrosomy • Uczestniczą w podziałach komórek. 83\n\n--- STRONA 84 --- Komórki wyspecjalizowane Wiele komórek eukariotycznych jest zbudowanych w nietypowy sposób. Wynika to z ich specjalizacji, czyli przystosowania budowy do pełnienia określonych funkcji w organizmie. Komórki zwierzęce specjalizują się w komórki określonego typu poprzez zmianę kształtu lub utratę określonych organelli. W komórkach roślinnych może nawet dojść do utraty całego protoplastu, czyli zawartości komórki ograniczonej wyłącznie błoną komórkową. Powstają wówczas martwe komórki, zbudowane jedynie ze ściany komórkowej. Neurony jądro Komórki zwierzęce przystosowane komórkowe do przewodzenia impulsów w układzie nerwowym – mają wydłużony kształt i liczne wypustki o długości nawet 1 m. Krwinki czerwone Komórki zwierzęce przystosowane do transportu tlenu w organizmie – u większości ssaków nie mają jądra i większości organelli komórkowych. zgrubienia ściany komórkowej Człony naczyń Komórki roślinne występujące w drewnie – są martwe, długie i pozbawione ścian poprzecznych, dlatego sprawnie transportują wodę z solami mineralnymi. pole sitowe siateczka śródplazmatyczna Człony rurek sitowych Komórki roślinne występujące w łyku – są żywe, długie, a ich ściany poprzecz- ne, nazywane sitami, mają liczne plastyd otwory. Komórki te nie mają większości organelli, w tym jądra komórkowego. Dzięki temu sprawnie transportują protoplast związki organiczne w obrębie rośliny. pozbawiony większości 84 organelli\n\n--- STRONA 85 --- 3.1. Budowa i funkcje komórki. Rodzaje komórek Przedziały komórkowe Organelle komórkowe otoczone błonami tworzą w komórce system zamkniętych, ale peroksysom lizosom pęcherzyk pH =7 pH = 4.7 transportujacy ściśle współpracujących ze sobą przedziałów pH=5.5 (kompartmentów). W każdym z nich panują mitochondrium pH = 6 odmienne warunki i odbywają się inne procesy. pH = 8 aparat Golgiego Często procesy te mają przeciwstawny charakter, pH=6-6.7 np. w chloroplastach odbywa się synteza związków organicznych z dwutlenku węgla CYTOZOL pH=7.2 i wody, a w mitochondriach zachodzi rozkład pH=6,7 siateczka związków organicznych do dwutlenku węgla śródplazmatyczna pH =7.2 i wody. Przedziały komórki zapewniają rozdział przestrzenny procesów metabolicznych, dzięki jądro komórkowe pH=7,2 czemu komórka funkcjonuje bez zakłóceń. Przedziały komórki różnią się od siebie np. pH. Poszczególne przedziały komórki kontaktują się Od wartości pH zależy m.in. funkcjonowanie enzymów - ze sobą za pomocą cytozolu lub pęcherzyków substancji, które przyspieszają przebieg procesów transportujących. metabolicznych. Obserwacja różnorodności form i kształtów komórek Wykonaj obserwacje mikroskopowe komórek roślinnych i zwierzęcych. Skorzystaj z samodzielnie przygotowa- serwacja nych preparatów mikroskopowych (np. z miąższu owocu pomidora, liści moczarki kanadyjskiej, skórki liścia spi- chrzowego cebuli) oraz z preparatów trwałych tkanek roślinnych i zwierzęcych, które są dostępne w pracowni"
          }
        ]
      },
      {
        "id": "genetyka-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [
          {
            "id": "bio-gen-1",
            "question": "Jakie są trzy prawa Mendla? Podaj przykłady odstępstw od prawa dominacji.",
            "answer": "1) Prawo czystości gamet (segregacji alleli do gamet), 2) Prawo niezależnego dziedziczenia cech (dla genów na różnych chromosomach), 3) Prawo dominacji. Odstępstwa: kodominacja (grupa AB), dominacja niezupełna (kwiaty wyżlinu), allele wielokrotne (AB0), plejotropia (fenyloketonuria), epistaza.",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-gen-2",
            "question": "Jaki genotyp może mieć osoba o grupie krwi AB i dlaczego jest uniwersalnym biorcą?",
            "answer": "Genotyp IᵃIᵇ — allele Iᵃ i Iᵇ są kodominujące, więc na erytrocytach są oba antygeny A i B. W osoczu nie ma przeciwciał anty-A ani anty-B, dlatego osoba może otrzymać krew każdej grupy.",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-gen-3",
            "question": "Na czym polega dziedziczenie sprzężone z płcią? Podaj przykłady chorób.",
            "answer": "Geny zlokalizowane są na chromosomie X (lub Y). Mężczyźni (XY) są hemizygotyczni — recesywny allel zawsze ujawnia się w fenotypie. Przykłady recesywnych cech sprzężonych z X: hemofilia A, daltonizm (czerwono-zielony), dystrofia mięśniowa Duchenne'a.",
            "examRef": "CKE 2017"
          },
          {
            "id": "bio-gen-4",
            "question": "Wyjaśnij, na czym polega konflikt serologiczny w układzie Rh i jakie są jego konsekwencje.",
            "answer": "Konflikt zachodzi gdy matka Rh⁻ (dd) nosi płód Rh⁺ (Dd lub DD). Podczas pierwszego porodu krew płodu może przedostać się do krwiobiegu matki, powodując wytworzenie przeciwciał anty-D. W drugiej ciąży przeciwciała IgG przechodzą przez łożysko i niszczą erytrocyty płodu, powodując chorobę hemolityczną noworodka. Zapobieganie: podanie matce surowicy anty-D (immunoglobuliny Rh) po porodzie.",
            "examRef": "CKE 2019"
          },
          {
            "id": "bio-gen-5",
            "question": "Wyjaśnij, na czym polega semikonserwatywny mechanizm replikacji DNA i jakie enzymy w nim uczestniczą.",
            "answer": "Każda nić macierzysta służy jako matryca do syntezy nowej nici komplementarnej. Enzymy: helikaza (rozplatanie), topoizomeraza (rozkręcanie), białka SSB (stabilizacja), prymaza (starter RNA), polimeraza DNA III/δ (wydłużanie), polimeraza DNA I (usuwanie starterów), ligaza (łączenie fragmentów Okazaki).",
            "examRef": "CKE 2017"
          },
          {
            "id": "bio-gen-6",
            "question": "Na czym polega obróbka posttranskrypcyjna pre-mRNA u eukariontów?",
            "answer": "1) Splicing — wycięcie intronów przez spliceosom i połączenie eksonów (splicing alternatywny daje różne białka z jednego genu). 2) Dodanie czapeczki 7-metyloguanozyny na 5′. 3) Poliadenylacja — dodanie ogona poli-A na 3′ (stabilność mRNA, transport z jądra).",
            "examRef": "CKE 2018"
          },
          {
            "id": "bio-gen-7",
            "question": "Wymień i opisz właściwości kodu genetycznego.",
            "answer": "Trójkowy (kodon = 3 nukleotydy), jednoznaczny (1 kodon → 1 aminokwas), zdegenerowany (większość aminokwasów ma kilka kodonów — tolerancja na 3. pozycji), bezprzecinkowy, niezachodzący, uniwersalny. 61 kodonów sensownych, 3 STOP (UAA, UAG, UGA), 1 START (AUG — metionina).",
            "examRef": "CKE 2019"
          },
          {
            "id": "bio-gen-8",
            "question": "Czym różni się mutacja genowa od chromosomowej? Podaj po dwa przykłady każdej.",
            "answer": "Mutacja genowa dotyczy pojedynczego nukleotydu (substytucja w anemii sierpowatej, delecja 3 nukleotydów ΔF508 w mukowiscydozie). Mutacja chromosomowa dotyczy struktury chromosomu (translokacja t(9;22) — chromosom Philadelphia w przewlekłej białaczce szpikowej; delecja 5p — zespół cri-du-chat).",
            "examRef": "CKE 2018"
          },
          {
            "id": "bio-gen-9",
            "question": "Opisz mechanizm regulacji operonu laktozowego u E. coli.",
            "answer": "W nieobecności laktozy represor LacI wiąże się z operatorem, blokując transkrypcję genów lacZYA. W obecności laktozy (allolaktozy) induktor wiąże się z represorem → odłącza się od operatora → polimeraza RNA transkrybuje geny kodujące β-galaktozydazę, permeazę i transacetylazę. Dodatkowa regulacja przez CAP-cAMP (aktywacja przy braku glukozy).",
            "examRef": "CKE 2019"
          },
          {
            "id": "bio-gen-10",
            "question": "Na czym polega metoda PCR i jakie są jej zastosowania?",
            "answer": "PCR (reakcja łańcuchowa polimerazy) to amplifikacja DNA in vitro w cyklach: denaturacja (95°C) → hybrydyzacja starterów (50-65°C) → elongacja (72°C, polimeraza Taq). Zastosowania: diagnostyka genetyczna, testy na choroby genetyczne, kryminalistyka (analiza DNA), badania ewolucyjne, wykrywanie patogenów (np. SARS-CoV-2), klonowanie genów.",
            "examRef": "CKE 2020"
          },
          {
            "id": "bio-gen-11",
            "question": "Wyjaśnij mechanizm działania systemu CRISPR/Cas9 i podaj jego zastosowania.",
            "answer": "gRNA (naprowadzające RNA) kieruje nukleazę Cas9 do komplementarnej sekwencji w genomie. Cas9 powoduje dwuniciowe pęknięcie DNA. Naprawa przez NHEJ (łączenie końców — często z mutacją inaktywującą gen) lub HDR (naprawa z matrycą — można wprowadzić nową sekwencję). Zastosowania: terapia genowa, tworzenie modeli zwierzęcych chorób, modyfikacja upraw (odporność na choroby), badania funkcji genów.",
            "examRef": "CKE 2021"
          }
        ]
      },
      {
        "id": "genetyka-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. (0-4) Uczniowie mieli w warunkach domowych zweryfikować następującą hipotezę: Na kiełkowanie nasion wpływają temperatura, woda i światło. W tym celu w czterech ponumerowanych naczyniach wypełnio- nych watą zasiali pieprzycę siewną. Następnie każde z naczyń umieścili w odmiennych warunkach: • naczynie nr 1 - na parapecie, nasiona miały nie być podlewane, • naczynie nr 2 – na parapecie, nasiona miały być podlewane, • naczynie nr 3 – w szafce bez dostępu do światła, nasiona miały być podlewane, • naczynie nr 4 – w lodówce, nasiona miały być podlewane, • naczynie nr 5 – w lodówce, nasio",
          "Zadanie 2. (0-2)▲ Przeprowadzono badania dotyczące strategii pokarmowych gatunków chrząszczy występujących w Wiel- kiej Brytanii. Preferencje pokarmowe chrząszczy zostały ustalone na podstawie określenia składu gatun- kowego materiału zebranego w terenie. Wynik badania został przedstawiony na wykresie. drapieżniki (3.9%) roślinożercy (3,8%) pasożyty pasożyty roślin (35,6%) zwierząt (21,5%) BADANIA PRZY saprofagi (35,1%) Żródło: J. Weiner, Życie i ewolucja biosfery. Podręcznik ekologii ogólnej, Warszawa 2012, s. 357. a) Oceń prawdziwość poniższych stwierdzeń dotyczących przeprowadzonych badań.",
          "Zadanie 3. (0-5)▲ W komórkach liści kakaowca właściwego w warunkach naturalnych żyją endofityczne grzyby. Zasiedlają one liście po wykiełkowaniu siewek. Naukowcy przeprowadzili następujący eksperyment - wyhodowali w laboratorium siewki kakaowca, a następnie do części z nich dodali endofityczne grzyby. Następnie za- szczepili siewki gatunkiem protista, który powoduje uszkodzenia, a nawet zamieranie liści. Wyniki ekspe- rymentu przedstawiono w poniższej tabeli. Próba nr 1 Próba nr 2 i --P+ +d +3 Zamieranie liści (w %) 24 9 E- P+ - endofit nieobecny, patogen obecny Zniszczenia powierzchni liści (",
          "Zadanie 4. (0-3) Na rysunkach przedstawiono wyniki pewnego doświadczenia przeprowadzonego na bakterii – gronkowcu złocistym. A. B. obszar zasiedlony przez gronkowce miejsce aplikacji antybiotyku bez antybiotyku (-) z antybiotykiem (+) a) Sformułuj problem badawczy do tego doświadczenia. b) Określ, który wynik (A czy B) obrazuje próbę kontrolną. Odpowiedź uzasadnij. c) Oceń, które hipotezy zostały potwierdzone w doświadczeniu. Wpisz znak X w odpowiednie miejsca BADANIA PRZYROI tabeli. TAK NIE 1. Antybiotyki wpływają negatywnie na rozwój gronkowca złocistego. 2. Antybiotyki sprzyjają rozwojowi g",
          "Zadanie 5. (0-3)▲ Jastrząb poluje m.in. na gołębie grzywacze. Naukowcy postanowili sprawdzić, w jaki sposób na sukces drapieżnika wpływa wielkość grupy ofiar oraz dzieląca go od nich odległość. Wyniki obserwacji przedsta- wiono na poniższym wykresie. procent udanych ataków jastrzębia 100 50 odległość, z jakiej jastrząb zostaje- [dos zz z znmm -40 75 -30 50 -20 25 -10 0 0 1 2-10 11-50 >50 wielkość stada grzywaczy Na podstawie: A. Mackenzie, A.S. Ball, S.R. Virdee, Krótkie wyklady. Ekologia, Warszawa 2002, s. 185. 12\n\n\nZadania maturalne a) Sformułuj wniosek dotyczący skuteczności ataków jastrzęb"
        ]
      }
    ]
  },
  {
    "id": "metabolizm",
    "title": "Metabolizm — enzymy, oddychanie i fotosynteza",
    "shortTitle": "Metabolizm",
    "icon": "⚡",
    "sections": [
      {
        "id": "enzymy-i-bioenergetyka",
        "title": "Enzymy i bioenergetyka komórki",
        "summary": "- Metabolizm to całokształt reakcji __________ zachodzących w organizmie. - Dzieli się na anabolizm (reakcje __________ endoergiczne, wymagają energii — np. - synteza białek, replikacja DNA, fotosynteza) oraz katabolizm __________ rozkładu, egzoergiczne, uwalniają energię — np.",
        "academic_detail": "Metabolizm to całokształt reakcji chemicznych zachodzących w organizmie. Dzieli się na anabolizm (reakcje syntezy, endoergiczne, wymagają energii — np. synteza białek, replikacja DNA, fotosynteza) oraz katabolizm (reakcje rozkładu, egzoergiczne, uwalniają energię — np. oddychanie komórkowe, hydroliza ATP). ATP (adenozyno-5′-trifosforan) jest uniwersalnym przenośnikiem energii w komórce. Hydroliza ATP → ADP + Pᵢ uwalnia ~30,5 kJ/mol (w warunkach fizjologicznych ~50 kJ/mol). Energia ta napędza reakcje endoergiczne przez sprzężenie energetyczne (fosforylacja substratowa). Inne przenośniki energii: GTP, UTP, CTP oraz przenośniki elektronów: NAD⁺/NADH, NADP⁺/NADPH, FAD/FADH₂.",
        "content": [
          {
            "type": "paragraph",
            "text": "Metabolizm to całokształt reakcji chemicznych zachodzących w organizmie. Dzieli się na anabolizm (reakcje syntezy, endoergiczne, wymagają energii — np. synteza białek, replikacja DNA, fotosynteza) oraz katabolizm (reakcje rozkładu, egzoergiczne, uwalniają energię — np. oddychanie komórkowe, hydroliza ATP). ATP (adenozyno-5′-trifosforan) jest uniwersalnym przenośnikiem energii w komórce. Hydroliza ATP → ADP + Pᵢ uwalnia ~30,5 kJ/mol (w warunkach fizjologicznych ~50 kJ/mol). Energia ta napędza reakcje endoergiczne przez sprzężenie energetyczne (fosforylacja substratowa). Inne przenośniki energii: GTP, UTP, CTP oraz przenośniki elektronów: NAD⁺/NADH, NADP⁺/NADPH, FAD/FADH₂."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Enzymy — budowa, mechanizm i kinetyka"
          },
          {
            "type": "paragraph",
            "text": "Enzymy są biokatalizatorami białkowymi (wyjątek: rybozymy — katalityczne RNA). Obniżają energię aktywacji (Eₐ) reakcji, nie zmieniając ΔG ani stałej równowagi. Centrum aktywne — specyficzna struktura przestrzenna, do której pasuje substrat (model klucza i zamka) lub która dostosowuje się do substratu (model indukowanego dopasowania). Specyficzność enzymatyczna: absolutna (jeden enzym = jeden substrat), grupowa (jeden typ wiązania/ugrupowania), stereoizomeryczna (rozpoznawanie izomerów optycznych). Wiele enzymów wymaga kofaktorów: nieorganiczne jony metali (Mg²⁺, Zn²⁺, Fe²⁺, Cu²⁺) lub koenzymy (pochodne witamin: NAD⁺ — niacyna/B₃, FAD — ryboflawina/B₂, koenzym A — kwas pantotenowy/B₅, fosforan pirydoksalu — B₆, biotyna — B₇/H, THF — kwas foliowy/B₉)."
          },
          {
            "type": "paragraph",
            "text": "Kinetyka Michaelisa-Menten: szybkość reakcji V = Vmax[S]/(Km + [S]), gdzie Km (stała Michaelisa) to stężenie substratu przy połowie Vmax — miara powinowactwa enzymu do substratu (im niższe Km, tym większe powinowactwo). Inhibicja kompetycyjna (współzawodnicząca) — inhibitor konkuruje z substratem o centrum aktywne, zwiększa Km, Vmax bez zmian (można przezwyciężyć wysokim stężeniem substratu). Inhibicja niekompetycyjna — inhibitor wiąże się poza centrum aktywnym, zmniejsza Vmax, Km bez zmian. Inhibicja akompetycyjna — inhibitor wiąże się tylko z kompleksem ES, zmniejsza Km i Vmax. Regulacja allosteryczna: efektory wiążą się w miejscu allosterycznym, zmieniając konformację enzymu — aktywatory zwiększają aktywność, inhibitory ją zmniejszają (enzymy allosteryczne mają sigmoidalną krzywą kinetyki). Modyfikacje kowalencyjne: fosforylacja/defosforylacja (kinazy i fosfatazy), proteolityczna aktywacja proenzymów (trypsynogen → trypsyna przez enteropeptydazę)."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "grupą -OH, która tworzy wiązanie duża estrowe z grupą -COOH amino- podjednostka kwasu. zasady miejsce azotowe łączenia aminokwasu wiązanie mala wodorowe podjednostka biatko rRNA szkielet cukrowo- fosforanowy antykodon W budowie tRNA wyróżnia się mRNA jest związkiem krótko- antykodon, czyli trzy nukleotydy, trwałym. Występuje w postaci W skład rybosomu wchodzą dwie które podczas syntezy białek długich lańcuchów polinukleoty- podjednostki - duża i mała. Łączą odpowiadają za rozpoznanie dowych, składających się zwykle się one ze sobą tylko na czas komplementarnych nukleotydów z 1000-2000 nukleotydów. syntezy białka. (kodonu) w nici mRNA. 14\n\n--- STRONA 15 --- 1.1. Budowa i rola kwasów nukleinowych Miejsce występowania RNA RNA jako materiał genetyczny w komórce RNA stanowi materiał genetyczny wiroidów Uorganizmów eukariotycznych cząsteczki oraz niektórych wirusów. Jako materiał gene- RNA występują w jądrze komórkowym, cyto- tyczny RNA jest mniej stabilny niż DNA - pod- zolu oraz organellach półautonomicznych - czas jego kopiowania powstaje więcej błędów. mitochondriach i chloroplastach. W jądrze Ponadto RNA łatwiej ulega degradacji. komórkowym wytwarzane są wszystkie rodzaje Cząsteczki RNA wiroidów - pasożytów RNA, przy czym rRNA powstaje w jąderku. roślin - są jednoniciowe, zamknięte, zbu- Wytworzone cząsteczki RNA, z wyjątkiem dowane z kilkuset nukleotydów.Występują rRNA, wędrują przez pory jądrowe do cytozolu, w nich fragmenty dwuniciowe, które powstają gdzie pełnią różne funkcje. Z kolei rRNA łączy na skutek łączenia się komplementarnych się w obrębie jąderka z białkami i tworzy w ten nukleotydów jednej nici. sposób podjednostki rybosomów, które rów- Cząsteczki RNA wirusów mogą być jedno- nież trafiają do cytozolu. Niektóre cząsteczki niciowe (ssRNA) lub dwuniciowe (dsRNA). Do RNA (np. snRNA) przemieszczają się zarówno wirusów RNA należy większość wirusów ata- z jądra komórkowego do cytozolu, jak i w prze- kujących komórki roślinne (np. wirus mozaiki ciwnym kierunku. tytoniu) i niektóre wirusy atakujące komórki W mitochondriach i chloroplastach powstają: zwierzęce (np. wirusy grypy, HIV i SARS-CoV-2). mRNA, tRNA i rRNA(składnik rybosomów organellowych), które uczestniczą w ekspresji oslonka genów znajdujących się w genomach mitochon- lipidowa drialnym i chloroplastowym. U organizmów prokariotycznych, które nie mają jądra komórkowego ani innych organelli RNA komórkowych, wszystkie cząsteczki RNA znaj- dują się w cytoplazmie. Choć zawartość RNA w komórce zmienia się, to zawsze zostaje zachowana równowaga mię- kapsyd dzy syntezą nowych cząsteczek RNA a degra- dacją cząsteczek niepotrzebnych. Struktura wirusa grypy. Polecenia kontrolne 1. Wyjaśnij, w jaki sposób jest utrzymywana struktura podwójnej helisy DNA. 2. Omów, na czym polega polarność lańcuchów polinukleotydowych DNA. 3. Oblicz procentową zawartość adeniny w dwuniciowej cząsteczce DNA, wiedząc, że cytozyna stanowi w niej 18% wszystkich zasad azotowych. 4. Wyjaśnij, dlaczego parę zasad komplementarnych tworzy zasada purynowa z zasadą pirymidynową, a nie dwie zasady pirymidynowe lub dwie zasady purynowe. Zbadaj, jaki ma to wpływ na strukturę cząsteczki. W tym celu wykonaj tekturowy model fragmentu cząsteczki DNA. 5. Przeanalizuj podaną niżej sekwencję nukleotydów budujących jeden z łańcuchów DNA, a następnie zapisz w zeszycie sekwencję łańcucha komplementarnego do zaprezentowanego. 5'-GCCATCATCCTTACC-3' .r     ez o  eg o żeby oznaczyć RNA (a nie DNA) w komórkach bakteryjnych. 15\n\n--- STRONA 16 ---"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "aktywują enzymy, które przyspieszają prze- bieg reakcji biochemicznych, wp y   wy yc substancji między komórką a jej otoczeniem, warunkują prawidłowy przebieg większości procesów fizjologicznych, np. powstawania i przewodzenia impulsów nerwowych, stanowią fizjologiczne układy buforowe1 (np. bufor węglanowy), co zapewnia utrzymanie pH płynów ustrojowych na stałym poziomie. Płyny ustrojowe w organizmach zawierają tyle samo jonów dodatnich (kationów) i ujem- Z węglanu wapnia są zbudowane m.in. szkielety nych (anionów). Szczególnie liczne są kationy ślimaków (muszle) i koralowców. Układy buforowe – mieszaniny substancji, które przyjmują lub oddają nadmiar jonów wodorowych, co przeciwdziała zmianom pH środowiska. 36\n\n--- STRONA 37 --- 2.1. Skład chemiczny organizmów Związki organiczne Najważniejsze związki organiczne występu- Związki organiczne są związkami węgla. jące w organizmach to: Atomy węgla w tych związkach są zawsze sacharydy (cukry), czterowartościowe i mogą się bezpośrednio lipidy (tłuszczowce), ze sobą łączyć. W ten sposób powstają szkie- białka, lety węglowe, czyli proste lub rozgałęzione kwasy nukleinowe. łańcuchy, oraz pierścienie. Oprócz atomów Niektóre związki organiczne powstają węgla w skład związków organicznych wcho- w wyniku polimeryzacji, czyli łączenia się pro- dzą atomy innych pierwiastków, głównie pier- stych związków organicznych (monomerów) wiastków biogennych. Za reaktywność określo- w długie łańcuchy (polimery). Reakcje poli- nego związku organicznego, czyli zdolność do meryzacji zachodzące w organizmach należą udziału w reakcjach chemicznych, odpowiadają do reakcji kondensacji, w wyniku których, jego grupy funkcyjne¹. oprócz złożonego związku organicznego, powstają również cząsteczki wody. W efekcie reakcji polimeryzacji powstają często związki C o szczególnie dużych cząsteczkach. Należą do C C nich polisacharydy, białka i kwas deoksyrybo- C nukleinowy (DNA). Zwykle są one zbudowane C C z ponad tysiąca atomów, dlatego nazywamy je makrocząsteczkami. Makrocząsteczki cha- Szkielet węglowy w postaci Szkielet węglowy rakteryzują się skomplikowaną budową prze- łańcucha (rozgałęzionego). w postaci pierścienia. strzenną. Wybrane grupy funkcyjne występujące w związkach organicznych Grupa funkcyjna Wzór chemiczny Grupa związków organicznych hydroksylowa -OH • alkohole, np. alkohol etylowy • sacharydy, np. glukoza karbonylowa aldehydowa -CHO • aldehydy, np. aldehyd octowy • sacharydy – aldozy, np. glukoza ketonowa ≥c=0 • ketony, np. aceton • sacharydy – ketozy, np. fruktoza karboksylowa -COOH (niezjonizowana) • kwasy karboksylowe, np. kwas palmitynowy -COO⁻(zjonizowana) • aminokwasy, np. alanina aminowa -NH2 (niezjonizowana) • aminokwasy, np. alanina -NH(zjonizowana) • zasady azotowe, np. guanina Grupa funkcyjna – część cząsteczki składająca się z atomu lub grupy atomów, które wykazują charakterystyczne właściwości chemiczne. Polecenia kontrolne 1. Określ znaczenie pierwiastków biogennych dla funkcjonowania organizmów. 2. Podaj dwie właściwości wody, które pozwalają na przetrwanie organizmów wodnych w okresie zimy. 3. Określ, z jakiej właściwości wody korzysta maratończyk, gdy polewa ciało wodą podczas biegu. Odpowiedź uzasadnij. 4. Wyjaśnij znaczenie sił adhezji i kohezji w funkcjonowaniu roślin. 37\n\n--- STRONA 38 --- Budowa i funkcje 2.2. sacharydów Zwróć poszczególne grupy sacharydów, uwagę na: zwi  z     i mo. Sacharydy, nazywane też cukrami lub węglowo- H O danami, powstają głównie w procesie fotosyn- tezy, przeprowadzanym przez organizmy auto-"
          }
        ]
      },
      {
        "id": "oddychanie-komorkowe",
        "title": "Oddychanie komórkowe — glikoliza, cykl Krebsa, łańcuch oddechowy",
        "summary": "- Glikoliza (szlak Embdena-Meyerhofa-Parnasa) zachodzi __________ cytoplazmie wszystkich komórek. - Glukoza (C₆H₁₂O₆, 6 węgli) jest fosforylowana dwiema cząsteczkami ATP (faza inwestycji __________ i rozszczepiana na 2 cząsteczki aldehydu 3-fosfoglicerynowego (3 węgle każda). - W fazie zwrotu energetycznego każda trioza jest utleniana do __________ z wytworzeniem 2 ATP (fosforylacja substratowa) i 1 NADH.",
        "academic_detail": "Glikoliza (szlak Embdena-Meyerhofa-Parnasa) zachodzi w cytoplazmie wszystkich komórek. Glukoza (C₆H₁₂O₆, 6 węgli) jest fosforylowana dwiema cząsteczkami ATP (faza inwestycji energetycznej) i rozszczepiana na 2 cząsteczki aldehydu 3-fosfoglicerynowego (3 węgle każda). W fazie zwrotu energetycznego każda trioza jest utleniana do pirogronianu z wytworzeniem 2 ATP (fosforylacja substratowa) i 1 NADH. Bilans glikolizy na 1 glukozę: +2 ATP (zużyte 2, wyprodukowane 4), +2 NADH, +2 pirogroniany. Sumarycznie: C₆H₁₂O₆ + 2NAD⁺ + 2ADP + 2Pᵢ → 2CH₃COCOO⁻ + 2NADH + 2H⁺ + 2ATP + 2H₂O.",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Glikoliza — cytoplazma, faza beztlenowa"
          },
          {
            "type": "paragraph",
            "text": "Glikoliza (szlak Embdena-Meyerhofa-Parnasa) zachodzi w cytoplazmie wszystkich komórek. Glukoza (C₆H₁₂O₆, 6 węgli) jest fosforylowana dwiema cząsteczkami ATP (faza inwestycji energetycznej) i rozszczepiana na 2 cząsteczki aldehydu 3-fosfoglicerynowego (3 węgle każda). W fazie zwrotu energetycznego każda trioza jest utleniana do pirogronianu z wytworzeniem 2 ATP (fosforylacja substratowa) i 1 NADH. Bilans glikolizy na 1 glukozę: +2 ATP (zużyte 2, wyprodukowane 4), +2 NADH, +2 pirogroniany. Sumarycznie: C₆H₁₂O₆ + 2NAD⁺ + 2ADP + 2Pᵢ → 2CH₃COCOO⁻ + 2NADH + 2H⁺ + 2ATP + 2H₂O."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dekarboksylacja oksydacyjna pirogronianu i cykl Krebsa"
          },
          {
            "type": "paragraph",
            "text": "W macierzy mitochondrialnej pirogronian ulega dekarboksylacji oksydacyjnej przez kompleks dehydrogenazy pirogronianowej: pirogronian + CoA + NAD⁺ → acetylokoenzym A (acetylo-CoA, 2 węgle) + CO₂ + NADH. Acetylo-CoA wchodzi do cyklu Krebsa (cykl kwasów trikarboksylowych, cykl kwasu cytrynowego). Etapy: (1) acetylo-CoA + szczawiooctan (4C) → cytrynian (6C), (2-3) izomeryzacja do izocytrynianu, (4) dekarboksylacja oksydacyjna → α-ketoglutaran (5C) + NADH + CO₂, (5) dekarboksylacja oksydacyjna → bursztynylo-CoA (4C) + NADH + CO₂, (6) fosforylacja substratowa → bursztynian + GTP (→ATP), (7) utlenienie bursztynianu → fumaran + FADH₂, (8) hydratacja → jabłczan, (9) utlenienie jabłczanu → szczawiooctan + NADH. Bilans na 1 obrót cyklu: 3 NADH + 1 FADH₂ + 1 GTP (ATP) + 2 CO₂. Dla 1 glukozy: 2 acetylo-CoA → 2× bilans = 6 NADH + 2 FADH₂ + 2 ATP (GTP) + 4 CO₂."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Łańcuch oddechowy i chemiosmoza — fosforylacja oksydacyjna"
          },
          {
            "type": "paragraph",
            "text": "Łańcuch oddechowy znajduje się na wewnętrznej błonie mitochondrialnej. Składa się z czterech kompleksów: Kompleks I (NADH — dehydrogenaza NADH, oksydoreduktaza NADH-ubichinon) — przekazuje elektrony z NADH na ubichinon (Q → QH₂), pompuje 4 H⁺ do przestrzeni międzybłonowej. Kompleks II (dehydrogenaza bursztynianowa — jedyny enzym cyklu Krebsa związany z błoną) — przekazuje elektrony z FADH₂ na ubichinon, NIE pompuje H⁺ (dlatego FADH₂ daje mniej ATP niż NADH). Kompleks III (cytochrom bc1 — oksydoreduktaza ubichinol-cytochrom c) — przekazuje elektrony z QH₂ na cytochrom c, pompuje 4 H⁺ (cykl Q). Kompleks IV (oksydaza cytochromu c) — przekazuje elektrony z cytochromu c na O₂ (końcowy akceptor), redukując go do H₂O, pompuje 2 H⁺. Kompleks V (syntaza ATP) wykorzystuje energię gradientu protonowego (siłę protonomotoryczną) do syntezy ATP z ADP i Pᵢ — przepływ H⁺ z powrotem do macierzy przez kanał F₀ napędza rotację podjednostki γ, co powoduje zmiany konformacyjne w F₁ i syntezę ATP (model zmiany wiązania Boyera). Z 1 NADH powstaje ~2,5 ATP, z 1 FADH₂ ~1,5 ATP. Łącznie z 1 glukozy: 10 NADH × 2,5 = 25 ATP + 2 FADH₂ × 1,5 = 3 ATP + 4 ATP (glikoliza + cykl Krebsa) = ~32 ATP (wartość konserwatywna; tradycyjnie ~36-38)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Fermentacja — oddychanie beztlenowe"
          },
          {
            "type": "paragraph",
            "text": "Przy braku tlenu komórki regenerują NAD⁺ przez fermentację, aby glikoliza mogła nadal zachodzić. Fermentacja mlekowa (w mięśniach szkieletowych przy intensywnym wysiłku, w erytrocytach, niektóre bakterie — Lactobacillus): pirogronian + NADH + H⁺ → mleczan + NAD⁺ (enzym: dehydrogenaza mleczanowa LDH). Wydajność: 2 ATP z glukozy. Fermentacja alkoholowa (drożdże Saccharomyces cerevisiae, niektóre rośliny w warunkach beztlenowych): pirogronian → aldehyd octowy + CO₂ (dekarboksylaza pirogronianu), aldehyd octowy + NADH + H⁺ → etanol + NAD⁺ (dehydrogenaza alkoholowa). Wydajność: 2 ATP + 2 CO₂ + 2 etanol. W obu fermentacjach NAD⁺ jest regenerowany, umożliwiając dalszą glikolizę."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "oddychanie oraz napady drgawek. Zaburzenia 88 19 20 21 22 występujące w zespole Edwardsa są przyczyną Kariogram osoby z zespołem Patau. Kariotyp tej dużej śmiertelności wśród dzieci. Ponadto osoby zawiera dodatkowy chromosom 13. w znacznym odsetku ciąż z trisomią 18 nastę- pują samoistne poronienia. Zespół Turnera (monosomia X) Zespół ten jest związany z monosomią chro- mosomu X. Dotyka kobiet, których komórki zawierają 44 autosomy i 1 chromosom płci X. Kariotyp kobiety z monosomią chromosomu X zapisuje się jako 45, X. Zespół Turnera występuje z częstością 1 na 10 5000 urodzonych dziewczynek. Od wczesnego dzieciństwa charakteryzują się one niskim 11 12 13 14 15 wzrostem. Jeżeli nie są leczone, to osiągają osta- tecznie ok. 145 cm wzrostu. Zwykle cechują 16 17 18 x 88 W8 się krępą budową ciała, zaokrągleniem bioder 19 20 21 22 i brakiem talii. Typowy dla zespołu Turnera Kariogram osoby z zespołem Edwardsa. W karioty- jest niedorozwój wewnętrznych i zewnętrznych pie takiej osoby występuje trisomia chromosomu 18. narządów płciowych, będący przyczyną nie- Zespół Patau (trisomia 13) płodności. U części kobiet występują wrodzone Zespół ten jest uwarunkowany trisomią chro- wady serca, nerek i innych narządów. Ponadto mosomu 13. Kariotyp osoby z trisomią 13 jednym z charakterystycznych objawów jest zapisuje się jako 47, XX + 13 bądź 47, XY + 13. nadmiar skóry na szyi, a u noworodków także Zespół Patau występuje z częstością 1 na obrzęk kończyn dolnych, spowodowany nie- 12 000 urodzeń. Do charakterystycznych drożnością naczyń limfatycznych. Dzięki odpo- zaburzeń somatycznych występujących w tym wiedniej terapi hormonalnej (podawaniu hor- zespole należą m.in.: liczne wady budowy, takie monów płciowych i hormonu wzrostu) można jak rozszczep wargi i podniebienia, niedoro- doprowadzić do wykształcenia wtórnych cech zwój żuchwy, krótka szyja oraz anomalie koń- płciowych oraz zwiększenia wzrostu. W więk- czyn, np. polidaktylia (większa liczba palców). szości przypadków w organizmie kobiety Zwykle występują również nieprawidłowości z zespołem Turnera nie ma chromatyny płcio- w budowie serca, mózgowia i nerek. Jest to wej (ciałka Barra). 154\n\n--- STRONA 155 --- 3.5. Zespoły aberracji chromosomowych 10 t0 11 12 14 15 11 12 13 14 15 16 18 16 17 18 88 19 20 21 22 19 20 21 22 xX Kariogram kobiety z zespołem Turnera. Jej kariotyp Kariogram mężczyzny z zespołem Klinefeltera. zawiera tylko jeden chromosom X. Jego kariotyp zawiera trzy chromosomy płci: dwa chromosomy X i jeden chromosom Y. Dodatkowy chro- mosom X w zespole Klinefeltera w 60% przypadków Zespół Klinefeltera pochodzi od matki, a w 40% od ojca. Zespół ten dotyczy mężczyzn. Zwykle jest spowodowany obecnością jednego dodatko- Poradnictwo genetyczne wego chromosomu X, przez co w komórkach występuje 47 chromosomów. Kariotyp takich Poradnictwo genetyczne to forma komplek- osób zapisuje się jako 47, XXY.W niektórych sowej, profesjonalnej pomocy kierowanej do przypadkach – znacznie rzadszych – w komór- osób z zaburzeniami genetycznymi oraz ich kach mogą się znajdować dwa lub nawet trzy rodzin. Jest ono również przeznaczone dla par dodatkowe chromosomy X. planujących potomstwo, w których rodzinie Zespół Klinefeltera występuje z częstością występowały zaburzenia genetyczne, a także 1 na 1000 urodzonych chłopców. Zazwy- par, w których kobiety ukończyły 35. rok życia. czaj bywa rozpoznawany dopiero u dorosłych W poradni genetycznej można otrzymać spe- mężczyzn w trakcie badań przeprowadzanych cjalistyczne informacje dotyczące zdiagno-"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "Możesz wykorzystać do tego celu wyszukiwarki internetowe, takie jak Google Scholar lub Pubmed. Pamiętaj, że najrzetelniejsze informacje naukowe uzyskasz z artykułów naukowych publikowanych w czasopismach naukowych. Przykładami najbardziej znanych czasopism biologicznych są \"Nature\" oraz Science\". 9\n\n--- STRONA 10 --- Rozdział 1. Badania przyrodnicze Samouczek Jak wykonać dokumentację badań biologicznych? Spo   c    z  az a ak bgard  a       o aci fotografii, filmu, rysunku lub tabeli. Dane ilościowe, np. liczba badanych osobników, długość czy masa ciała badanego obiektu, mogą być zapisane w postaci tabeli bądź wykresu. Konstruowanie tabeli Tabela umożliwia zestawienie i uporządkowanie dużej liczby danych, a także porównanie danych dot   a   o  d owe jak i ilościowe. W konstruowaniu tabeli najważniejsze jest poprawne zaplanowanie nagłówka. Tabela powinna być Symbol jednostki można podać w nagłówku opatrzona tytułem okre- w nawiasie kwadratowym. Wówczas dane liczbowe ślającym jej zawartość. zapisane w kolumnie nie muszą być nim opatrzone. Wygląd płatków kwiatów badanych osobników Pierwszy wiersz lub pierwsza kolumna tabeli Nr Rodzaj brzegów Barwa Średnia dłuģość to nagłówek. Komórki osobnika płatków płatków płatków [cm] nagłówka zawierają 1. gładkie biała 6,2 informacje o tym, jakie dane znajdują się w po- 2. poszarpane czerwona 7,0 szczególnych kolumnach 3. gładkie różowa 6,3 i wierszach. Jeśli nagłówkiem jest pierwszy wiersz Dane jakościowe Dane liczbowe w tabeli należy tabeli, to w pierwszej kolumnie zwykle należy wpisać podawać z taką samą dokładno- wpisuje się dane porządkowe, np. w tabeli słownie. ścią dla określonej jednostki (np. numer lub symbol próby. do jednego miejsca po przecinku).  Konstruowanie wykresów Wykres pozwala wychwycić tendencje i zależności, których nie można bezpośrednio zaobserwować w tabeli. Wybór formy wykresu zależy od tego, jakie dane chcemy na nim przedstawić. Wykresy można również nazywać diagramami. 1. Wykres kolumnowy i wykres liniowy Wykresy te służą do przedstawiania badanej zależności między dwoma czynnikami – zmienną Gęstość osobników w poszczególnych niezależną oraz zmienną zależną. Zmienna próbach w zależności od temperatury niezależna to czynnik, którego wartość Nr Temperatura Gęstość [liczba w doświadczeniu jest zmieniana przez badacza, próby [o] osobników/cm³] np. temperatura, wilgotność, natężenie światła. Na wykresie umieszcza się ją na osi X. Zmienna 1. 5 15 zależna to czynnik, którego wartość zmienia się 2. 10 40 pod wpływem zmiennej niezależnej, np. inten- 3. 15 75 sywność fotosyntezy czy liczba kiełkujących 4. 20 150 siewek. Na wykresie zaznacza się ją na osi Y. Na podstawie danych przedstawionych w tabeli powyżej można skonstruować wykres zarówno kolumnowy, jak i liniowy. Oba wykresy mogą mieć taki sam tytuł. 10\n\n--- STRONA 11 --- 1.1. Metodyka badań biologicznych Gęstość osobników w zależności od temperatury gęstość [liczba osobników/cm³] gęstość [liczba osobników/cm³] 160 160 Należy pamiętać, 120 120 aby podpisać osie X i Y. 80 80 Wykresy powinny 40 40 mieć opisaną skalę. 0 0 5 10 15 20 A 5 10 15 20 temperatura [°C]  temperatura [°C] Wykres kolumnowy (słupkowy) Wykres liniowy Za pomocą wykresu kolumnowego można Za pomocą wykresu liniowego można określić porównać bezwzględne wartości pomiarów. tendencję, z jaką wartość zmiennej zależnej zmienia się pod wpływem zmiennej niezależnej. 2. Wykres kołowy i wykres jednosłupkowy Te rodzaje wykresów służą do przedstawiania procentowego udziału poszczególnych"
          }
        ]
      },
      {
        "id": "fotosynteza",
        "title": "Fotosynteza — faza jasna i ciemna",
        "summary": "- Fotosynteza to proces syntezy związków organicznych z CO₂ i H₂O przy __________ energii świetlnej, zachodzący w chloroplastach komórek roślinnych i u sinic. - Ogólne równanie: 6CO₂ + 6H₂O + __________ świetlna → C₆H₁₂O₆ + 6O₂. - Chloroplasty mają dwie błony, wewnątrz znajduje się stroma (zawiera DNA, rybosomy, __________ cyklu Calvina) oraz tylakoidy (spłaszczone pęcherzyki ułożone w stosy — grana).",
        "academic_detail": "Fotosynteza to proces syntezy związków organicznych z CO₂ i H₂O przy udziale energii świetlnej, zachodzący w chloroplastach komórek roślinnych i u sinic. Ogólne równanie: 6CO₂ + 6H₂O + energia świetlna → C₆H₁₂O₆ + 6O₂. Chloroplasty mają dwie błony, wewnątrz znajduje się stroma (zawiera DNA, rybosomy, enzymy cyklu Calvina) oraz tylakoidy (spłaszczone pęcherzyki ułożone w stosy — grana). Błony tylakoidów zawierają barwniki fotosyntetyczne: chlorofil a (główny barwnik centrum reakcji, pochłania głównie niebieskie 430 nm i czerwone 662 nm), chlorofil b (barwnik pomocniczy, przekazuje energię do chlorofilu a), karotenoidy (karoteny i ksantofile — barwniki pomocnicze i fotoochronne). Anteny energetyczne (LHC — Light Harvesting Complex) zbierają energię świetlną i przekazują ją do centrum reakcji fotosystemu.",
        "content": [
          {
            "type": "paragraph",
            "text": "Fotosynteza to proces syntezy związków organicznych z CO₂ i H₂O przy udziale energii świetlnej, zachodzący w chloroplastach komórek roślinnych i u sinic. Ogólne równanie: 6CO₂ + 6H₂O + energia świetlna → C₆H₁₂O₆ + 6O₂. Chloroplasty mają dwie błony, wewnątrz znajduje się stroma (zawiera DNA, rybosomy, enzymy cyklu Calvina) oraz tylakoidy (spłaszczone pęcherzyki ułożone w stosy — grana). Błony tylakoidów zawierają barwniki fotosyntetyczne: chlorofil a (główny barwnik centrum reakcji, pochłania głównie niebieskie 430 nm i czerwone 662 nm), chlorofil b (barwnik pomocniczy, przekazuje energię do chlorofilu a), karotenoidy (karoteny i ksantofile — barwniki pomocnicze i fotoochronne). Anteny energetyczne (LHC — Light Harvesting Complex) zbierają energię świetlną i przekazują ją do centrum reakcji fotosystemu."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Faza jasna (fotochemiczna) — w tylakoidach"
          },
          {
            "type": "paragraph",
            "text": "Fotosystem II (PSII, P680): energia świetlna wybija elektron z chlorofilu a w centrum reakcji (P680 → P680⁺). Utleniony P680⁺ odbiera elektrony z fotolizy wody (2H₂O → O₂ + 4H⁺ + 4e⁻ — kompleks rozkładający wodę, zawiera mangan). Elektrony przechodzą przez łańcuch transportu elektronów: feofityna → QA → QB → pulę plastochinonów (PQ) → kompleks cytochromów b₆f (pompa protonowa, przenosi H⁺ do wnętrza tylakoidu) → plastocyjanina (PC, białko zawierające Cu). Fotosystem I (PSI, P700): elektrony wzbudzane są ponownie światłem i przekazywane przez łańcuch: chlorofil A₀ → filochinon A₁ → białka Fe-S → ferredoksyna (Fd). Z ferredoksyny elektrony trafiają na NADP⁺ (reduktaza ferredoksyna-NADP⁺) → NADPH + H⁺. Transport elektronów może być: niecykliczny (PSII → PSI → NADP⁺ — powstaje O₂, NADPH i ATP) lub cykliczny (tylko PSI — elektrony wracają do puli PQ → kompleks b₆f → PC → PSI — powstaje tylko ATP, nie ma NADPH ani O₂). Chemiosmoza w chloroplastach: protony są pompowane do wnętrza tylakoidu (światła) — wypływają przez syntazę ATP (CF₁-CF₀) do stromy, napędzając syntezę ATP (fotofosforylacja)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Faza ciemna (cykl Calvina-Bensona) — w stromie"
          },
          {
            "type": "paragraph",
            "text": "Cykl Calvina nie wymaga bezpośrednio światła, ale wykorzystuje ATP i NADPH z fazy jasnej. Etapy: (1) Karboksylacja — przyłączenie CO₂ do rybulozo-1,5-bisfosforanu (RuBP, 5 węgli) katalizowane przez RuBisCO (karboksylaza/oksygenaza rybulozo-1,5-bisfosforanu — najobficiej występujące białko na Ziemi). Powstaje nietrwały związek 6C, który rozpada się na 2 cząsteczki 3-fosfoglicerynianu (3PG, 3 węgle). (2) Redukcja — 3PG jest fosforylowany przez ATP i redukowany przez NADPH do aldehydu 3-fosfoglicerynowego (G3P). Na każde 6 cząsteczek CO₂ powstaje 12 G3P: 2 G3P → 1 glukoza (6C), 10 G3P → regeneracja 6 RuBP (zużycie 6 ATP). (3) Regeneracja akceptora CO₂. Bilans cyklu Calvina na 1 glukozę (6CO₂): 18 ATP + 12 NADPH. Fotooddychanie: RuBisCO może też przyłączać O₂ zamiast CO₂ (aktywność oksygenazowa), co prowadzi do straty węgla i energii. Rośliny C4 (kukurydza, trzcina cukrowa) minimalizują fotooddychanie przez wstępne wiązanie CO₂ w komórkach mezofilu (fosfoenolopirogronian + CO₂ → szczawiooctan → jabłczan, transport do komórek pochwy okołowiązkowej, gdzie CO₂ jest uwalniany do cyklu Calvina). Rośliny CAM (kaktusy, sukulenty) otwierają szparki nocą i wiążą CO₂ w postaci kwasów organicznych; za dnia CO₂ jest uwalniany do cyklu Calvina przy zamkniętych szparkach."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "fotosynteza i oddychanie komórkowe. Duże znaczenie w obiegu tego pierwiastka mają również spalanie paliw kopalnych przez człowieka oraz erupcje wulkanów. CO2 w atmosferze fotosynteza oddychanie oddychanie oddychanie oddychanie producenci 3 szczątki konsumenci szczatki I rzędu odchody szczątki odchody konsumenci II rzędu destruenci Producenci pobierają z atmosfery CO2 uzyskują związki organiczne. Wykorzystują je do budowy własnych tkanek oraz w procesie a   y u a oddychania. węgiel w związki organiczne. Związki te wykorzystują do budowy swoich tkanek oraz Destruenci pozyskują związki organiczne jako substraty procesu oddychania, podczas ze szczątków i odchodów innych organizmów. którego powstaje CO2 uwalniany do atmosfery. Wykorzystują je do budowy własnych ciał oraz Konsumenci I rzędu zjadają producentów uwalniają CO2 do atmosfery podczas procesu oddychania. i w ten sposób pozyskują związki organiczne zawierające węgiel. Wykorzystują je do syntezy CO2 trafia do atmosfery również w wyniku związków organicznych budujących ich ciała erupcji wulkanów i spalania paliw oraz w procesie oddychania. kopalnych, np. węgla kamiennego lub ropy naftowej. Konsumenci Il rzędu i wyższych rzędów zjadają innych konsumentów, dzięki czemu Polecenia kontrolne 1. Wyjaśnij, w jaki sposób wylesianie terenów wpływa na obieg węgla w przyrodzie. 2. Korzystając z dostępnych źródeł, ustal, w jaki sposób wykorzystuje się gospodarczo bakterie wiążące azot. 3. Wyjaśnij pojęcia: nitryfikacja, amonifikacja, denitryfikacja. 371\n\n--- STRONA 372 --- 6.8. Różnorodność biologiczna Zwróć •typy różnorodności biologicznej, uwagę na: czynniki geograficzne kształtujące różnorodność gatunkową i różnorodność ekosystemową, prz      w definicję endemitów i ich przykłady, związek między rozmieszczeniem biomów a warunkami klimatycznymi, wpływ zlodowaceń na rozmieszczenie gatunków i przykłady gatunków reliktowych. Bogactwo form życia na Ziemi określa się się ekosystemy, w których występuje wiele mianem różnorodności biologicznej lub bio- gatunków organizmów reprezentowanych różnorodności.Wyróżnia się trzy poziomy przez zbliżoną, dużą liczbę osobników. różnorodności biologicznej: różnorodność Różnorodność ekosystemową mierzy się genetyczną, różnorodność gatunkową oraz róż- liczbą i zróżnicowaniem ekosystemów wystę- norodność ekosystemową. pujących na danym obszarze, np. na wyspie, Różnorodność genetyczna występuje wśród w kraju czy na kontynencie. osobników należących do tej samej populacji i wynika z obecności w niej wielu alleli tego samego genu. Dzięki różnorodności genetycz- nej każdy osobnik ma niepowtarzalną kombi- nację alleli (genotyp), a co za tym idzie – swo- isty zestaw cech fenotypowych. Osobniki tego samego gatunku różnią się więc m.in. wyglą- dem i cechami metabolizmu. Różnorodnośćgatunkowa to rozmaitość wszystkich gatunków żyjących na Ziemi. Mie- rzy się ją przede wszystkim liczbą gatunków Dużą różnorodnością gatunkową charakteryzują się występujących w danym ekosystemie. Najwięk- ekotony, czyli strefy przejściowe między ekosystema- szą różnorodnością gatunkową charakteryzują mi. Przykładem ekotonu jest ujście rzeki do morza. Poziomy różnorodności biologicznej różnorodność genetyczna różnorodność gatunkowa różnorodność ekosystemowa Zmienność genetyczna wśród Rozmaitość gatunków występu- Bogactwo typów ekosystemów przedstawicieli jednej populacji. jących w danym ekosystemie. występujących na danym Wynika z występowania różnych obszarze. alleli genów. 372\n\n--- STRONA 373 ---"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "w diagnostyce i terapii nowotworów. szansę na hodowlę in vitro całych narządów. 13\n\n--- STRONA 14 --- Rozdział 1. Badania przyrodnicze Samouczek Jak prawidłowo zaplanować próbę badawczą i próbę kontrolną w doświadczeniu? Podczas planowania prób badawczej i kontrolnej Przykład: dla doświadczeń biologicznych należy pamiętać, że: Problem badawczy: Czy obecność grzybów 1. próby kontrolna i badawcza powinny bezpośred- mikoryzowych¹ wpływa na tempo rozwoju siewek nio wynikać z problemu badawczego, sosny? 2. próby kontrolna i badawcza powinny różnić Aby poprawnie zaplanować próby badawczą się od siebie tylko badanym czynnikiem (jest on i kontrolną, należy najpierw wskazać czynnik, zapisany w problemie badawczym), którym obie próby powinny się różnić. W podanym 3. próbę badawczą należy zaprojektować tak, aby przykładzie są nim grzyby mikoryzowe. Obie próby jej wyniki pozwoliły udzielić odpowiedzi należy więc zaplanować następująco: na pytanie zadane w problemie badawczym, próba kontrolna – siewki sosny niemikoryzowane 4. próbę kontrolną należy zaprojektować tak, (bez grzybów mikoryzowych), aby jej wyniki umożliwiły udzielenie odpowiedzi próba badawcza– siewki sosny mikoryzowane na pytanie, czy zmiany, które zaszły (z grzybami mikoryzowymi). w próbie badawczej, wynikają z wpływu Wszystkie pozostałe czynniki w obu próbach badanego czynnika. powinny być jednakowe. Dowiedz się więcej Kontrola negatywna i pozytywna Dla niektórych badań biologicznych próbę kontrolną można zaplanować w dwojaki sposób – jako próbę kontrolną pozytywną lub próbę kontrolną negatywną. Próba kontrolna pozytywna to próba, w której przedmiot badania będzie możliwy do zaobserwowania. Natomiast próba kontrolna negatywna to próba, w której nie będzie przedmiotu badania. Zwykle próby te można łatwo zaprojektować dla obserwacji, np. wykrywania obecności jakiegoś związku chemicznego w materiale biologicznym. Przykład:Wykrywanie skrobi w bulwach ziemniaka Problem badawczy obserwacji: Czy bulwy ziemniaka zawierają skrobię? Do każdej próby należy dodać kilka kropli płynu Lugola, który pod wpływem skrobi zabarwi próbkę na ciemnogranatowy kolor. W próbie kontrolnej pozytywnej próbka powinna zawsze się zabarwić, natomiast w próbie kontrolnej negatywnej jej barwa nie powinna ulec zmianie. Dokładny opis tej metody wykrywania skrobi w materiale biologicznym znajduje się na s. 228. Próba badawcza: Próba kontrolna pozytywna: Próba kontrolna negatywna: Mieszanina rozdrobnionej bulwy Zawiesina skrobi w wodzie Woda destylowana. ziemniaka w wodzie destylowanej. destylowanej. Mikoryza - wzajemnie korzystna zależność między grzybem a korzeniami roślin. 14\n\n--- STRONA 15 --- 1.1. Metodyka badań biologicznych Przykładowa obserwacja Uczniowie pewnej szkoły wzięli udział w akcji przenoszenia płazów przez ruchliwy odcinek drogi. Przy okazji uczniowie postanowili sprawdzić, ile płazów próbuje przedostać się przez drogę na tym odcinku i do jakich gatunków one należą. S e Problem badawczy: Ile płazów próbuje przedostać się przez drogę na określonym odcinku i do jakich gatunków one należą? Postawienie hipotezy: Z literatury uczniowie dowiedzieli się, że na terenie objętym akcją a żyją następujące gatunki płazów: Żaba trawna Ropucha szara Grzebiuszka ziemna (Rana temporaria) (u buro) (Pelobates fuscus) Hipoteza: Na badanym odcinku drogi liczba wędrujących płazów jest różna w zależno- ści od gatunku. Weryfikacja hipotezy: Uczniowie określili obiekt oraz cel badań, miejsce, czas i często- tliwość prowadzenia obserwacji, a także sposób jej prowadzenia i dokumentowania (dane"
          }
        ]
      },
      {
        "id": "metabolizm-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [
          {
            "id": "bio-met-1",
            "question": "Wyjaśnij, jak działa inhibitor kompetycyjny i czym różni się od niekompetycyjnego.",
            "answer": "Inhibitor kompetycyjny konkuruje z substratem o centrum aktywne — zwiększa Km, Vmax bez zmian (można przezwyciężyć nadmiarem substratu). Inhibitor niekompetycyjny wiąże się poza centrum aktywnym — zmniejsza Vmax, nie zmienia Km (nadmiar substratu nie pomaga).",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-met-2",
            "question": "Wyjaśnij mechanizm obniżania energii aktywacji przez enzymy.",
            "answer": "Enzymy wiążą substrat w centrum aktywnym, stabilizują stan przejściowy i odpowiednio orientują reagujące grupy. Dzięki temu obniżają barierę energetyczną (Eₐ), nie zmieniając bilansu energetycznego reakcji (ΔG). Model indukowanego dopasowania: centrum aktywne dostosowuje się do substratu.",
            "examRef": "CKE 2017"
          },
          {
            "id": "bio-met-3",
            "question": "W którym etapie oddychania komórkowego powstaje najwięcej ATP i dlaczego?",
            "answer": "W łańcuchu oddechowym (fosforylacja oksydacyjna) — 25–28 ATP z 1 glukozy. Energia z utleniania NADH i FADH₂ jest wykorzystywana do pompowania protonów przez kompleksy I, III i IV, tworząc gradient elektrochemiczny, który napędza syntazę ATP (chemiosmoza Mitchella).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-met-4",
            "question": "Jaka jest wydajność energetyczna fermentacji mlekowej w porównaniu z oddychaniem tlenowym i dlaczego?",
            "answer": "Fermentacja daje 2 ATP z glukozy (tylko z glikolizy), oddychanie tlenowe ~32 ATP — jest ~16 razy mniej wydajna. W fermentacji nie zachodzi cykl Krebsa ani łańcuch oddechowy, więc energia z pirogronianu nie jest wykorzystana. Jedynym celem fermentacji jest regeneracja NAD⁺ do glikolizy.",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-met-5",
            "question": "Ile ATP powstaje z 1 NADH i 1 FADH₂ w łańcuchu oddechowym? Dlaczego różnica?",
            "answer": "Z 1 NADH powstaje ~2,5 ATP, z 1 FADH₂ ~1,5 ATP. NADH oddaje elektrony do kompleksu I (pompującego 4 H⁺), FADH₂ do kompleksu II (który NIE pompuje H⁺) — elektrony z FADH₂ omijają I punkt sprzężenia, dając mniejszą siłę protonomotoryczną.",
            "examRef": "CKE 2018"
          },
          {
            "id": "bio-met-6",
            "question": "Gdzie zachodzi faza jasna, a gdzie faza ciemna fotosyntezy? Jakie są produkty każdej z faz?",
            "answer": "Faza jasna — w błonach tylakoidów chloroplastów. Produkty: ATP, NADPH, O₂ (z fotolizy H₂O). Faza ciemna (cykl Calvina) — w stromie chloroplastu. Produkt: glukoza (C₆H₁₂O₆), ADP, NADP⁺. Wykorzystuje ATP i NADPH z fazy jasnej.",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-met-7",
            "question": "Na czym polega zjawisko fotolizy wody i w którym etapie fotosyntezy zachodzi?",
            "answer": "Fotoliza wody zachodzi w fazie jasnej przy fotosystemie II (PSII). Kompleks rozkładający wodę (zawierający jony Mn) rozszczepia 2H₂O → O₂ + 4H⁺ + 4e⁻. Elektrony uzupełniają deficyt w PSII (P680⁺), protony zasilają gradient w tylakoidzie, tlen jest uwalniany do atmosfery.",
            "examRef": "CKE 2017"
          },
          {
            "id": "bio-met-8",
            "question": "Porównaj mechanizmy wiązania CO₂ u roślin C4 i CAM. Dlaczego te adaptacje są korzystne?",
            "answer": "Rośliny C4: wstępne wiązanie CO₂ w komórkach mezofilu (PEP-karboksylaza → szczawiooctan), transport do komórek pochwy okołowiązkowej, uwolnienie CO₂ do cyklu Calvina. Rośliny CAM: wiązanie CO₂ nocą (otwarte szparki), magazynowanie w postaci jabłczanu, dzienne uwalnianie CO₂ do cyklu Calvina (zamknięte szparki). Obie adaptacje minimalizują fotooddychanie i utratę wody — korzystne w suchym, gorącym środowisku.",
            "examRef": "CKE 2019"
          }
        ]
      },
      {
        "id": "metabolizm-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. (0-4) Uczniowie mieli w warunkach domowych zweryfikować następującą hipotezę: Na kiełkowanie nasion wpływają temperatura, woda i światło. W tym celu w czterech ponumerowanych naczyniach wypełnio- nych watą zasiali pieprzycę siewną. Następnie każde z naczyń umieścili w odmiennych warunkach: • naczynie nr 1 - na parapecie, nasiona miały nie być podlewane, • naczynie nr 2 – na parapecie, nasiona miały być podlewane, • naczynie nr 3 – w szafce bez dostępu do światła, nasiona miały być podlewane, • naczynie nr 4 – w lodówce, nasiona miały być podlewane, • naczynie nr 5 – w lodówce, nasio",
          "Zadanie 2. (0-2)▲ Przeprowadzono badania dotyczące strategii pokarmowych gatunków chrząszczy występujących w Wiel- kiej Brytanii. Preferencje pokarmowe chrząszczy zostały ustalone na podstawie określenia składu gatun- kowego materiału zebranego w terenie. Wynik badania został przedstawiony na wykresie. drapieżniki (3.9%) roślinożercy (3,8%) pasożyty pasożyty roślin (35,6%) zwierząt (21,5%) BADANIA PRZY saprofagi (35,1%) Żródło: J. Weiner, Życie i ewolucja biosfery. Podręcznik ekologii ogólnej, Warszawa 2012, s. 357. a) Oceń prawdziwość poniższych stwierdzeń dotyczących przeprowadzonych badań.",
          "Zadanie 3. (0-5)▲ W komórkach liści kakaowca właściwego w warunkach naturalnych żyją endofityczne grzyby. Zasiedlają one liście po wykiełkowaniu siewek. Naukowcy przeprowadzili następujący eksperyment - wyhodowali w laboratorium siewki kakaowca, a następnie do części z nich dodali endofityczne grzyby. Następnie za- szczepili siewki gatunkiem protista, który powoduje uszkodzenia, a nawet zamieranie liści. Wyniki ekspe- rymentu przedstawiono w poniższej tabeli. Próba nr 1 Próba nr 2 i --P+ +d +3 Zamieranie liści (w %) 24 9 E- P+ - endofit nieobecny, patogen obecny Zniszczenia powierzchni liści (",
          "Zadanie 4. (0-3) Na rysunkach przedstawiono wyniki pewnego doświadczenia przeprowadzonego na bakterii – gronkowcu złocistym. A. B. obszar zasiedlony przez gronkowce miejsce aplikacji antybiotyku bez antybiotyku (-) z antybiotykiem (+) a) Sformułuj problem badawczy do tego doświadczenia. b) Określ, który wynik (A czy B) obrazuje próbę kontrolną. Odpowiedź uzasadnij. c) Oceń, które hipotezy zostały potwierdzone w doświadczeniu. Wpisz znak X w odpowiednie miejsca BADANIA PRZYROI tabeli. TAK NIE 1. Antybiotyki wpływają negatywnie na rozwój gronkowca złocistego. 2. Antybiotyki sprzyjają rozwojowi g",
          "Zadanie 5. (0-3)▲ Jastrząb poluje m.in. na gołębie grzywacze. Naukowcy postanowili sprawdzić, w jaki sposób na sukces drapieżnika wpływa wielkość grupy ofiar oraz dzieląca go od nich odległość. Wyniki obserwacji przedsta- wiono na poniższym wykresie. procent udanych ataków jastrzębia 100 50 odległość, z jakiej jastrząb zostaje- [dos zz z znmm -40 75 -30 50 -20 25 -10 0 0 1 2-10 11-50 >50 wielkość stada grzywaczy Na podstawie: A. Mackenzie, A.S. Ball, S.R. Virdee, Krótkie wyklady. Ekologia, Warszawa 2002, s. 185. 12\n\n\nZadania maturalne a) Sformułuj wniosek dotyczący skuteczności ataków jastrzęb"
        ]
      }
    ]
  },
  {
    "id": "botanika",
    "title": "Botanika — tkanki, organy i fizjologia roślin",
    "shortTitle": "Botanika",
    "icon": "🌿",
    "sections": [
      {
        "id": "tkanki-organy-roslinne",
        "title": "Tkanki i organy roślin okrytonasiennych",
        "summary": "- Rośliny nasienne (Spermatophyta) dzielą się na nagonasienne __________ i okrytonasienne (Angiospermae — jednoliścienne i dwuliścienne). - Ich budowa jest przystosowaniem do życia na lądzie: wykształciły tkanki okrywające (epiderma __________ kutykulą, aparaty szparkowe), wzmacniające (kolenchyma, sklerenchyma), przewodzące (ksylem i floem) oraz miękiszowe. - Tkanki twórcze (merystemy) dzielą się na pierwotne (stożki wzrostu pędu i korzenia, merystem interakalarny — u traw, merystem archesporialny — __________ zalążkach i woreczkach pyłkowych) oraz wtórne (kambium — miazga twórcza, fellogen — miazga korkotwórcza), umożliwiające przyrost wtórny na grubość.",
        "academic_detail": "Rośliny nasienne (Spermatophyta) dzielą się na nagonasienne (Gymnospermae) i okrytonasienne (Angiospermae — jednoliścienne i dwuliścienne). Ich budowa jest przystosowaniem do życia na lądzie: wykształciły tkanki okrywające (epiderma z kutykulą, aparaty szparkowe), wzmacniające (kolenchyma, sklerenchyma), przewodzące (ksylem i floem) oraz miękiszowe. Tkanki twórcze (merystemy) dzielą się na pierwotne (stożki wzrostu pędu i korzenia, merystem interakalarny — u traw, merystem archesporialny — w zalążkach i woreczkach pyłkowych) oraz wtórne (kambium — miazga twórcza, fellogen — miazga korkotwórcza), umożliwiające przyrost wtórny na grubość.",
        "content": [
          {
            "type": "paragraph",
            "text": "Rośliny nasienne (Spermatophyta) dzielą się na nagonasienne (Gymnospermae) i okrytonasienne (Angiospermae — jednoliścienne i dwuliścienne). Ich budowa jest przystosowaniem do życia na lądzie: wykształciły tkanki okrywające (epiderma z kutykulą, aparaty szparkowe), wzmacniające (kolenchyma, sklerenchyma), przewodzące (ksylem i floem) oraz miękiszowe. Tkanki twórcze (merystemy) dzielą się na pierwotne (stożki wzrostu pędu i korzenia, merystem interakalarny — u traw, merystem archesporialny — w zalążkach i woreczkach pyłkowych) oraz wtórne (kambium — miazga twórcza, fellogen — miazga korkotwórcza), umożliwiające przyrost wtórny na grubość."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Tkanki stałe — budowa i funkcje"
          },
          {
            "type": "paragraph",
            "text": "Miękisz (parenchyma) — żywe komórki o cienkich ścianach, pełniące funkcje: asymilacyjną (miękisz palisadowy i gąbczasty w liściach, zawiera chloroplasty), spichrzową (gromadzenie skrobi, białek, tłuszczów — miękisz spichrzowy korzeni i bulw), zasadniczą (wypełniającą przestrzenie między innymi tkankami), przewietrzającą (aerenchyma — duże przestwory międzykomórkowe, u roślin wodnych), wodną (retencyjna — magazynowanie wody, u sukulentów). Tkanka okrywająca pierwotna (epiderma/skórka) — pojedyncza warstwa komórek na powierzchni, pokryta kutykulą (hydrofobowa warstwa kutyny), z aparatami szparkowymi (2 komórki szparkowe + szparka — regulacja wymiany gazowej i transpiracji) i włoskami (żywe — trichomy, martwe — wydzielnicze, parzące). Tkanka okrywająca wtórna (korkowica/peryderma) — u roślin z przyrostem wtórnym: korek (felem), miazga korkotwórcza (fellogen), miękisz korkotwórczy (felloderma). Tkanka wzmacniająca: kolenchyma (żywe komórki, nierównomiernie zgrubiałe ściany celulozowe — w młodych organach, umożliwia wzrost) i sklerenchyma (martwe komórki, grube ściany inkrustowane ligniną — włókna sklerenchymatyczne i komórki kamienne/sklereidy, np. w pestkach i łupinach)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Tkanka przewodząca — ksylem i floem"
          },
          {
            "type": "paragraph",
            "text": "Drewno (ksylem) przewodzi wodę i sole mineralne od korzenia w górę (transport transpirowo-kohezyjny). Składa się z naczyń (tracheje — tylko u okrytonasiennych, długie rurki z komórek zanikłych poprzecznie, ściany wzmocnione ligniną w różnych wzorach: pierścieniowo, spiralnie, siatkowato, jamkowato) i cewek (tracheidy — u nagonasiennych, cieńsze, woda przepływa przez jamki). Łyko (floem) przewodzi asymilaty (produkty fotosyntezy — głównie sacharozę) z liści do reszty rośliny (transport pod ciśnieniem — hipoteza przepływu masowego Müncha). Składa się z rurek sitowych (komórki bezjądrowe, połączone płytkami sitowymi, u okrytonasiennych) i komórek przyrurkowych (jądrowe, regulują metabolizm rurek sitowych). U nagonasiennych są to komórki sitowe i komórki albuminowe."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Organy wegetatywne — korzeń, łodyga, liść"
          },
          {
            "type": "paragraph",
            "text": "Korzeń utrzymuje roślinę w glebie i pobiera wodę z solami mineralnymi. Strefy korzenia (od wierzchołka): strefa podziałów komórkowych (stożek wzrostu z czapeczką), strefa wydłużania (elongacji), strefa różnicowania (włośnikowa — włośniki zwiększają powierzchnię chłonną), strefa korzeni bocznych. Budowa pierwotna korzenia (przekrój poprzeczny): epiderma → kora pierwotna (miękisz, śródskórnia) → walec osiowy (okolnica/perycykl — z niego wyrastają korzenie boczne, wiązki przewodzące naprzemianległe — ksylem na przemian z floemem). Łodyga transportuje substancje i utrzymuje liście. Budowa pierwotna łodygi: epiderma → kora pierwotna → walec osiowy (wiązki przewodzące kolateralne otwarte u dwuliściennych — z kambium, zamknięte u jednoliściennych — bez kambium). Przyrost wtórny łodygi (tylko dwuliścienne i nagonasienne): kambium wytwarza drewno wtórne (do wewnątrz) i łyko wtórne (na zewnątrz) — powstają słoje roczne; fellogen wytwarza korek. Liść — organ asymilacyjny. Budowa anatomiczna: epiderma górna (z kutykulą), miękisz palisadowy (cylindryczne komórki, dużo chloroplastów — główna fotosynteza), miękisz gąbczasty (luźno ułożone komórki, przestwory — wymiana gazowa), epiderma dolna (z licznymi aparatami szparkowymi)."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "się w odpowiednie tkanki, narządy i układy narządów. Translacja Podczas inicjacji translacji celem Regulacja ekspresji genów regulacji jest zatrzymanie eks- w komórkach prokariotycznych presji genów kodujących białka Przeżycie organizmów prokariotycznych zależy aktualnie niepotrzebne komórce. w dużej mierze od ich zdolności szybkiego reago- wania na zmiany zachodzące w środowisku. zmiana zmiana składu zmiana sygnał aktywności RNA i białek funkcji ze środowiska genów w komórce komórki Reakcja komórki na sygnał ze środowiska. 49\n\n--- STRONA 50 --- Rozdział 1. Genetyka molekularna Model operonu regulatorowe nosi nazwę represora. Powoduje Geny bakterii są skupione w zespoły podle- ono wyłączenie operonu, przez co nie dochodzi gające wspólnej regulacji, zwane operonami. do ekspresji genów struktury. Każdy operon jest zbudowany z: Regulacja pozytywna działa odwrotnie - genów struktury, które kodują białka. Geny białko, zwane aktywatorem, powoduje włącze- te warunkują jedną cechę komórki, taką jak nie operonu, w efekcie czego następuje ekspre- synteza lub rozkład danego związku. Często sja genów struktury. kodowanymi białkami są kolejne enzymy określonego szlaku metabolicznego (np. Ekspresja genów operonu szlaku syntezy tryptofanu). Enzymy pozwa- Każdy gen struktury zawiera ramkę odczytu, lają na wytworzenie potrzebnego komórce czyli serię kodonów rozpoczynającą się kodo- związku (np. tryptofanu- aminokwasu nie- nem START, a kończącą się jednym z kodonów zbędnego do budowy białek) w sytuacji jego STOP. Podczas transkrypcji wszystkie geny niedoboru lub braku w środowisku życia wchodzące w skład operonu są przepisywane bakterii; na jedną cząsteczkę mRNA. Z tego powodu sekwencji regulatorowych, będących swego określa się ją mianem cząsteczki wielogenowej rodzaju przełącznikiem, odpowiadającym za lub policistronowej. W trakcie translacji rybo- włączanie i wyłączanie ekspresji genów struk- som ustawia się na pierwszym kodonie START, tury.W ich skład wchodzą m.in. promotor syntetyzuje białko kodowane przez pierwszy i operator. gen, uwalnia je, a następnie przesuwa się na W regulacji działania operonów biorą udział kolejny kodon START. W ten sposób są odczy- białka regulatorowe. Wyróżnia się regulację tywane wszystkie geny struktury i kolejno negatywnąi regulacjępozytywnąoperonu. uwalniane wszystkie białka określonego szlaku W przypadku regulacji negatywnej białko metabolicznego. operon gen kodujący represor geny struktury promotor gen A gen B gen C gen D gen E operator transkrypcja sekwencje regulatorowe mRNA translacja Białka, które powstają w wyniku ekspresji genów struktury, są zwykle enzymami jednego szlaku metabolicznego. enzym A enzym B enzym C enzym D enzym E Budowa operonu. Operon składa się z grupy genów kodujących białka oraz sekwencji regulatorowych, które kontrolują transkrypcję tych genów. Do sekwencji regulatorowych należy promotor, który znajduje Sier   d y    s     diy promotorem a genami struktury znajduje się operator, który kontroluje dostęp polimerazy RNA do genów. 50\n\n--- STRONA 51 --- Operon tryptofanowy – regulacja negatywna Operon tryptofanowy zawiera pięć genów struktury, które kodują enzymy szlaku syntezy tryptofanu. Gdy w środowisku (a więc również w komórce) znajduje się tryptofan, operon e  o  y n   y k egay transkrypcji genów operonu i wytwarzaniu enzymów. Gdy stężenie tryptofanu w komórce spada, represor staje się nieaktywny i ekspresja genów jest podejmowana na nowo. Operon tryptofanowy jest włączony, gdy w otoczeniu bakterii brakuje tryptofanu"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "Histopatologia to badanie mikroskopowe tkanki pobranej od pacjenta, np. fragmentu usuniętego chi    b i  i  kie zas   i          sze etapy terapii. Badania histopatologiczne są często wspomagane technikami biologii molekularnej. Należy do nich hybrydyzacja z sondami fluorescencyjnymi, która polega na użyciu specjalnie oznako- Wane    s  h    n. np           ych fluorescencyjnie sond wykorzystuje się mikroskopy fluorescencyjne. Etapy badania histopatologicznego 1Utrwalony i odwodniony fragment tkanki zatapia się w ciekłej parafinie. Po zastygnięciu parafiny powstaje bloczek, który w środku zawiera badany materiał. Bloczek parafinowy kroi się na cienkie plastry za pomocą specjalnego urządzenia – mi- krotomu. Plastry parafiny wraz z badaną tkanką umieszcza się na szkiełkach podstawowych. 3Materiał na szkiełkach podsta- wowych barwi się w celu uwidocznienia wybranych struktur komórkowych. 4Wybarwiony materiał obserwuje się pod mikroskopem, a następnie analizuje. 22\n\n--- STRONA 23 --- 1.2. Obserwacje mikroskopowe Możliwości obserwacji obiektówo różnych wymiarach duże cząsteczki, większość jaja np. białka komórek żaby bakterii niektóre małe komórki cząsteczki nerwowe większość komórek rybosomy mitochondria roślinnych jaja i zwierzęcych kury atomy wirusy mikroskop optyczny mikroskop elektronowy oko człowieka 0,1 nm 1 nm 10 nm 100 nm 1 μm 10 μm 100 μm 1 mm 1 cm 0,1 m 1m 10 m Polecenia kontrolne 1. Wyjaśnij, czym jest zdolność rozdzielcza mikroskopu. 2. Porównaj mikroskop optyczny z mikroskopami elektronowymi. Przerysuj tabelę do zeszytu, a następnie ją uzupełnij. Transmisyjny Skaningowy Mikroskop Cechy mikroskop mikroskop optyczny elektronowy elektronowy Maksymalne powiększenie ? ? ? obrazu Zdolność rozdzielcza ? ? ? mikroskopu Rodzaj obserwowanych ? ? ? komórek (żywe/martwe) Sposób obserwacji ? ? ? (bezpośredni/pośredni) Rodzaj soczewek ? ? ? aby uzyskać poniższe informacje. Uzasadnij swój wybór. a) Określenie liczby cząsteczek DNA w komórce bakterii. b) Uzyskanie trójwymiarowego obrazu powierzchni pyłku mniszka lekarskiego. c) Określenie liczby krwinek czerwonych w próbce krwi pacjenta. d) Ustalenie lokalizacji białek cytoszkieletu w komórce nabłonka. e) Zaobserwowanie układu tylakoidów w chloroplaście. 23\n\n--- STRONA 24 --- W WIESZ, UMIESZ, ZDASZ Podsumowanie 1Metody poznawania świata Obserwacja – metoda prowadzenia badań, w której badacz nie wpływa na obserwowany org         s  azna metodę badawczą lub być elementem doświadczenia. Doświadczenie – metoda prowadzenia badań, w której badacz celowo w kontrolowanych warunkach zmienia jeden z czynników wpływających na przedmiot doświadczenia. 2 Rodzaje prób Rodzaje prób w doświadczeniu biologicznym Próba badawcza Próba kontrolna Próba, w której przedmiot badań jest poddany Próba, w której przedmiot badań nie jest poddany działaniu czynnika wymienionego w problemie działaniu czynnika wymienionego w problemie badawczym. badawczym. Służy do określenia, czy badany w doświadczeniu czynnik wpływa na wyniki uzyskane w próbie badawczej. 3 Etapy badań biologicznych Etap badania Czynności wykonywane na danym etapie Obserwacja Zaobserwowanie przez badacza nieznanego organizmu czy niewytłumaczonego procesu. Sformułowanie problemu Określenie celu badania. Problem badawczy przyjmuje postać zdania badawczego pytającego, na które badacz chce znależć odpowiedź, lub równoważnika zdania. Postawienie hipotezy Udzielenie przewidywanej, niekoniecznie prawdziwej odpowiedzi na pytanie sformułowane w problemie badawczym. Hipoteza ma formę zdania"
          }
        ]
      },
      {
        "id": "botanika-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [
          {
            "id": "bio-bot-1",
            "question": "Jakie funkcje pełnią drewno (ksylem) i łyko (floem) w roślinie? Jakie mechanizmy napędzają transport w nich?",
            "answer": "Ksylem przewodzi wodę i sole mineralne od korzenia w górę — mechanizm transpirowo-kohezyjny (parcie korzeniowe + transpiracja liści + kohezja słupa wody). Floem przewodzi asymilaty (sacharozę) z liści do reszty rośliny — hipoteza przepływu masowego Müncha (różnica ciśnień osmotycznych między źródłem a ujściem).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-bot-2",
            "question": "Czym charakteryzuje się podwójne zapłodnienie u okrytonasiennych?",
            "answer": "Jedna komórka plemnikowa (n) łączy się z komórką jajową (n) → zygota (2n), a druga komórka plemnikowa (n) łączy się z dwoma jądrami biegunkowymi (centralnymi) woreczka zalążkowego → triploidalne bielmo (3n) — tkanka odżywcza zarodka. Jest to unikatowa cecha okrytonasiennych.",
            "examRef": "CKE 2017"
          },
          {
            "id": "bio-bot-3",
            "question": "Wymień podstawowe fitohormony i ich funkcje.",
            "answer": "Auksyny (IAA) — wydłużanie komórek, dominacja wierzchołkowa, fototropizm, inicjacja korzeni. Gibereliny — wydłużanie międzywęźli, kiełkowanie nasion, wzrost owoców. Cytokininy — podziały komórkowe, opóźnianie starzenia. Kwas abscysynowy (ABA) — hamowanie wzrostu, zamykanie szparek, spoczynek nasion. Etylen — dojrzewanie owoców, opadanie liści.",
            "examRef": "CKE 2018"
          }
        ]
      },
      {
        "id": "botanika-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. (0-4) Uczniowie mieli w warunkach domowych zweryfikować następującą hipotezę: Na kiełkowanie nasion wpływają temperatura, woda i światło. W tym celu w czterech ponumerowanych naczyniach wypełnio- nych watą zasiali pieprzycę siewną. Następnie każde z naczyń umieścili w odmiennych warunkach: • naczynie nr 1 - na parapecie, nasiona miały nie być podlewane, • naczynie nr 2 – na parapecie, nasiona miały być podlewane, • naczynie nr 3 – w szafce bez dostępu do światła, nasiona miały być podlewane, • naczynie nr 4 – w lodówce, nasiona miały być podlewane, • naczynie nr 5 – w lodówce, nasio",
          "Zadanie 2. (0-2)▲ Przeprowadzono badania dotyczące strategii pokarmowych gatunków chrząszczy występujących w Wiel- kiej Brytanii. Preferencje pokarmowe chrząszczy zostały ustalone na podstawie określenia składu gatun- kowego materiału zebranego w terenie. Wynik badania został przedstawiony na wykresie. drapieżniki (3.9%) roślinożercy (3,8%) pasożyty pasożyty roślin (35,6%) zwierząt (21,5%) BADANIA PRZY saprofagi (35,1%) Żródło: J. Weiner, Życie i ewolucja biosfery. Podręcznik ekologii ogólnej, Warszawa 2012, s. 357. a) Oceń prawdziwość poniższych stwierdzeń dotyczących przeprowadzonych badań.",
          "Zadanie 3. (0-5)▲ W komórkach liści kakaowca właściwego w warunkach naturalnych żyją endofityczne grzyby. Zasiedlają one liście po wykiełkowaniu siewek. Naukowcy przeprowadzili następujący eksperyment - wyhodowali w laboratorium siewki kakaowca, a następnie do części z nich dodali endofityczne grzyby. Następnie za- szczepili siewki gatunkiem protista, który powoduje uszkodzenia, a nawet zamieranie liści. Wyniki ekspe- rymentu przedstawiono w poniższej tabeli. Próba nr 1 Próba nr 2 i --P+ +d +3 Zamieranie liści (w %) 24 9 E- P+ - endofit nieobecny, patogen obecny Zniszczenia powierzchni liści (",
          "Zadanie 4. (0-3) Na rysunkach przedstawiono wyniki pewnego doświadczenia przeprowadzonego na bakterii – gronkowcu złocistym. A. B. obszar zasiedlony przez gronkowce miejsce aplikacji antybiotyku bez antybiotyku (-) z antybiotykiem (+) a) Sformułuj problem badawczy do tego doświadczenia. b) Określ, który wynik (A czy B) obrazuje próbę kontrolną. Odpowiedź uzasadnij. c) Oceń, które hipotezy zostały potwierdzone w doświadczeniu. Wpisz znak X w odpowiednie miejsca BADANIA PRZYROI tabeli. TAK NIE 1. Antybiotyki wpływają negatywnie na rozwój gronkowca złocistego. 2. Antybiotyki sprzyjają rozwojowi g",
          "Zadanie 5. (0-3)▲ Jastrząb poluje m.in. na gołębie grzywacze. Naukowcy postanowili sprawdzić, w jaki sposób na sukces drapieżnika wpływa wielkość grupy ofiar oraz dzieląca go od nich odległość. Wyniki obserwacji przedsta- wiono na poniższym wykresie. procent udanych ataków jastrzębia 100 50 odległość, z jakiej jastrząb zostaje- [dos zz z znmm -40 75 -30 50 -20 25 -10 0 0 1 2-10 11-50 >50 wielkość stada grzywaczy Na podstawie: A. Mackenzie, A.S. Ball, S.R. Virdee, Krótkie wyklady. Ekologia, Warszawa 2002, s. 185. 12\n\n\nZadania maturalne a) Sformułuj wniosek dotyczący skuteczności ataków jastrzęb"
        ]
      }
    ]
  },
  {
    "id": "czlowiek",
    "title": "Fizjologia człowieka — układy narządów",
    "shortTitle": "Fizjologia człowieka",
    "icon": "🧍",
    "sections": [
      {
        "id": "homeostaza-hormony",
        "title": "Homeostaza i układ hormonalny",
        "summary": "- Homeostaza to zdolność organizmu do utrzymywania stałości środowiska wewnętrznego (temperatura ~37°C, pH krwi 7,35-7,45, stężenie glukozy __________ mg/dL na czczo, ciśnienie krwi 120/80 mmHg, osmolalność ~290 mOsm/kg H₂O) mimo zmian w otoczeniu. - Mechanizmy homeostatyczne działają na __________ ujemnego sprzężenia zwrotnego (np. - regulacja glikemii, termoregulacja) __________ dodatniego (np.",
        "academic_detail": "Homeostaza to zdolność organizmu do utrzymywania stałości środowiska wewnętrznego (temperatura ~37°C, pH krwi 7,35-7,45, stężenie glukozy 70-110 mg/dL na czczo, ciśnienie krwi 120/80 mmHg, osmolalność ~290 mOsm/kg H₂O) mimo zmian w otoczeniu. Mechanizmy homeostatyczne działają na zasadzie ujemnego sprzężenia zwrotnego (np. regulacja glikemii, termoregulacja) lub dodatniego (np. skurcze porodowe — oksytocyna, potencjał czynnościowy). Układ hormonalny i nerwowy współpracują w podtrzymywaniu homeostazy.",
        "content": [
          {
            "type": "paragraph",
            "text": "Homeostaza to zdolność organizmu do utrzymywania stałości środowiska wewnętrznego (temperatura ~37°C, pH krwi 7,35-7,45, stężenie glukozy 70-110 mg/dL na czczo, ciśnienie krwi 120/80 mmHg, osmolalność ~290 mOsm/kg H₂O) mimo zmian w otoczeniu. Mechanizmy homeostatyczne działają na zasadzie ujemnego sprzężenia zwrotnego (np. regulacja glikemii, termoregulacja) lub dodatniego (np. skurcze porodowe — oksytocyna, potencjał czynnościowy). Układ hormonalny i nerwowy współpracują w podtrzymywaniu homeostazy."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Oś podwzgórze-przysadka-narządy docelowe"
          },
          {
            "type": "paragraph",
            "text": "Podwzgórze (hypothalamus) stanowi zwornik między układem nerwowym a hormonalnym. Neurony neurosekrecyjne podwzgórza produkują liberyny (np. TRH — tyreoliberyna, GnRH — gonadoliberyna, CRH — kortykoliberyna, GHRH — somatoliberyna) i statyny (somatostatyna — hamuje GH, dopamina — hamuje prolaktynę). Hormony te przez naczynia wrotne podwzgórzowo-przysadkowe docierają do przedniego płata przysadki (adenohypophysis), regulując wydzielanie hormonów tropowych: GH (hormon wzrostu — somatotropina), TSH (tyreotropina — pobudza tarczycę), ACTH (kortykotropina — pobudza korę nadnerczy), FSH (folikulotropina — rozwój pęcherzyków, spermatogeneza), LH (lutropina — owulacja, produkcja testosteronu), PRL (prolaktyna — laktacja). Płat tylny przysadki (neurohypophysis) magazynuje i uwalnia hormony podwzgórza: ADH (wazopresyna — zatrzymywanie wody w nerkach, skurcz naczyń) i oksytocynę (skurcze macicy, wydzielanie mleka)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Regulacja poziomu glukozy — przykład homeostazy"
          },
          {
            "type": "paragraph",
            "text": "Po posiłku poziom glukozy wzrasta → komórki β trzustki (wyspy Langerhansa) wydzielają insulinę. Insulina działa przez receptor insulinowy (kinaza tyrozynowa): zwiększa translokację transportera GLUT4 do błony komórkowej (w mięśniach i tkance tłuszczowej), aktywuje glikolizę i syntezę glikogenu (glikogenogeneza) w wątrobie i mięśniach, stymuluje lipogenezę w tkance tłuszczowej, hamuje glukoneogenezę w wątrobie. Przy spadku glukozy (głodzenie) → komórki α trzustki wydzielają glukagon → stymuluje rozkład glikogenu (glikogenoliza) i glukoneogenezę w wątrobie. W stresie i głodzie: kortyzol (kora nadnerczy) i adrenalina (rdzeń nadnerczy) podnoszą glukozę. Cukrzyca typu 1: autoimmunologiczne zniszczenie komórek β → brak insuliny. Cukrzyca typu 2: insulinooporność tkanek → względny niedobór insuliny."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Układ odpornościowy — odporność wrodzona i nabyta"
          },
          {
            "type": "paragraph",
            "text": "Odporność nieswoista (wrodzona) działa szybko, bez pamięci. Bariery mechaniczne (skóra, błony śluzowe, łzy, ślina — lizozym), chemiczne (kwas solny w żołądku, defensyny), komórki: neutrofile (fagocytoza bakterii — ropa), makrofagi (fagocytoza, prezentacja antygenów przez MHC II), komórki dendrytyczne (profesjonalne APC — prezentacja antygenów naiwnym limfocytom T), komórki NK (zabijają komórki zakażone wirusami i nowotworowe — brak MHC I), eozynofile (pasożyty), bazofile/mastocyty (histamina — stan zapalny, alergie). Układ dopełniacza (~30 białek w osoczu, kaskada proteolityczna prowadząca do lizy bakterii — MAC). Odporność swoista (nabyta) — rozpoznaje specyficzne antygeny, tworzy pamięć immunologiczną. Odporność humoralna: limfocyty B (dojrzewają w szpiku kostnym) po rozpoznaniu antygenu przez receptor BCR różnicują się w komórki plazmatyczne produkujące przeciwciała (immunoglobuliny: IgM — pierwotna odpowiedź, IgG — wtórna, przechodzi przez łożysko, IgA — wydzielnicza, IgE — alergie/parazyty, IgD — receptor na limfocytach B). Odporność komórkowa: limfocyty T (dojrzewają w grasicy). Limfocyty T pomocnicze CD4⁺ rozpoznają antygeny prezentowane na MHC II (przez APC) i wydzielają cytokiny aktywujące limfocyty B, limfocyty T cytotoksyczne i makrofagi. Limfocyty T cytotoksyczne CD8⁺ rozpoznają antygeny na MHC I (wszystkie komórki jądrzaste) i zabijają komórki zakażone (perforyny + granzymy → apoptoza). Limfocyty T regulatorowe (Treg) hamują odpowiedź na własne antygeny. Po zakażeniu limfocyty pamięci (B i T) utrzymują się długo, umożliwiając szybszą odpowiedź (podstawa szczepień ochronnych)."
          }
        ],
        "recallQuestions": [],
        "academic_sources": [
          {
            "title": "Biologia na czasie 4 - Zakres rozszerzony (Franciszek Dubert, Marek Jurgowiak etc.)",
            "content": "Aparat skonstruowany przez Millera i Ureya. okresie jej istnienia. Żródłem energii w ekspe- rymencie były wyładowania elektryczne zacho- pewnymi błędami. Ta przypadkowa zmienność dzące w górnej kolbie, wypełnionej mieszaniną cząsteczek RNA sprzyjała jednak nasileniu pro- gazów o składzie przypominającym wczesną cesów ewolucji chemicznej. Uważa się, że z cza- atmosferę Ziemi. W dolnej kolbie gromadziły sem w ten sposób powstał nowy typ kwasów się związki organiczne powstające w wyniku nukleinowych - DNA. Cechowała go większa endoergicznych reakcji chemicznych. Miller stabilność w porównaniu z RNA, wynikająca i Urey z prostych związków – metanu, amo- z dwuniciowej struktury, dzięki której rzadziej niaku i dwutlenku węgla - otrzymali związki występują mutacje. Z tego powodu to DNA stał organiczne, w tym aminokwasy. Doświadcze- się związkiem, który przechowuje i przekazuje nie powtarzali wielokrotnie z użyciem odmien- informację genetyczną. nych źródeł energii i mieszanin gazów o różnym Według Oparina i Haldane'a procesy poli- składzie. meryzacji przebiegały w gorących, bogatych w proste związki organiczne wodach praoce- Powstawanie makrocząsteczek anu, nazywanych z tego powodu zupą orga- Z czasem na Ziemi zaczęły powstawać makro- niczną lub pierwotnym bulionem. Obecnie cząsteczki, takie jak białka i kwasy nukle- przypuszcza się, że miejscem zachodzenia tych inowe. Tworzyły się one w wyniku polimery- procesów były skaliste lub pokryte iłem dna zacji prostych związków organicznych, m.in. płytkich, wysychających, silnie nagrzanych aminokwasów i nukleotydów. Pierwszym zbiorników wodnych. Uważa się tak, ponieważ nośnikiem informacji genetycznej był prawdo- reakcje polimeryzacji zachodzą podczas silnego podobnie RNA. Katalityczne właściwości czą- ogrzewania (do ok. 60°C) w warunkach stop- steczek RNA umożliwiały jego samopowielanie niowego odwodnienia. Ponadto niezbędne są się (autoreplikację), czyli syntezę kolejnych kopii katalizatory (jony cynku i żelaza) występujące RNA. Kopie te nieznacznie się różniły, ponie- w pokładach iłu. Warstwę związków organicz- waż procesy autoreplikacji były obarczone nych związanych z dnem zbiorników wodnych 287\n\n--- STRONA 288 --- Rozdział 5. Ewolucja organizmów Świat RNA Jednym z najważniejszych problemów dotyczących początków życia na Ziemi było wyjaśnienie sposobu przekazywania informacji genetycznej. Obecnie nośnikiem informacji genetycznej organizmów jest DNA, a odczytywanie tej informacji zachodzi w kierunku: DNA → RNA → białko. Jednak zarówno w replikacji DNA, jak i w ekspresji genów uczestniczą białkowe enzymy. Z tego względu naukowcy nie mogli rozstrzygnąć, co było pierwsze: DNA czy białko. Przełomowe dla rozwiązania tej kwestii stało się odkrycie w komórkach współczesnych organizmów rybozymów, czyli cząsteczek RNA wykazujących właściwości katalityczne. Rybozymy katalizują m.in. procesy wycinania intronów oraz tworzenia wiązań Protist Tetrahy- peptydowych podczas syntezy białka. mena thermo- phila (obraz Dlatego przypuszcza się, że pierwszymi spod SEM) jest nośnikami informacji genetycznej były pierwszym właśnie cząsteczki RNA. Hipotetyczną organizmem, u którego odkryto fazę w dziejach Ziemi, gdy informacja występowanie genetyczna była zapisana w postaci RNA, rybozymu. nazywa się światem RNA. Model budowy rybozymu. nazywa się pierwotną pizzą. Zgodnie z alter- ciągów reakcji składających się na proste szlaki natywną hipotezą życie powstało w pobliżu metaboliczne. Przykładem koloidalnych sku- kominów hydrotermalnych, zlokalizowanych"
          },
          {
            "title": "Biologia na czasie 1 - Zakres rozszerzony (Marek Guzik, Ryszard Kozik, Renata Matuszewska etc.)",
            "content": "pojedynczym atomem wodoru, łańcuchem lub nich warunkach mogą się ze sobą łączyć; pierścieniem. W obrębie podstawnika mogą się z takich połączeń tworzą się peptydy lub znajdować dodatkowe grupy funkcyjne, m.in. białka; do tej grupy należy 20 aminokwasów, grupy karboksylowe, aminowe lub tiolowe (—SH). aminokwasy niebiałkowe, które nie wcho- dzą w skład białek; do tej grupy należą pozo- grupa karboksylowa stałe aminokwasy. grupa aminowa Aminokwasy niebiałkowe, mimo że nie wchodzą w skład białek, pełnią w organizmach H ważne funkcje. Na przykład ornityna i cytru- α lina uczestnicząw wytwarzaniu mocznika, N C C a kwas γ-aminomasłowy (kwas gamma-ami- nomasłowy, w skrócie GABA) jest neuroprze- kaźnikiem w układzie nerwowym. R podstawnik Każdy aminokwas ma określoną nazwę che- miczną, a często również nazwę zwyczajową. W α-aminokwasie centralnie usytuowany atom węgla α Nazwa zwyczajowa aminokwasu pochodzi zwy- jest połączony kowalencyjnie z grupami aminową i kar- kle od nazwy materiału, z którego wyizolowano boksylową oraz z atomem wodoru i podstawnikiem. 50\n\n--- STRONA 51 --- 2.4. Aminokwasy. Budowa i funkcje białek Właściwości aminokwasów Zarówno cytozol komórki, jak i płyny ustro- białkowych jowe mają odczyn zbliżony do obojętnego, dla- Właściwości aminokwasów białkowych wyni- tego większość wolnych aminokwasów wystę- kają z ich budowy chemicznej, a konkretnie puje w nich w formie jonów obojnaczych. Jony z obecności dwóch grup funkcyjnych oraz pod- te pełnią m.in. funkcję buforującą– utrzymują stawnika. stałe pH środowiska. Kiedy ulega ono zakwa- szeniu, jony obojnacze przechodzą w kationy, Grupy funkcyjne nadają aminokwasom a kiedy alkalizacji – w aniony. charakter kwasowo-zasadowy Podstawniki nadają aminokwasom Aminokwasy są związkami kwasowo-zasado- wymi, ponieważ mają zarówno grupę karbok- charakterystyczne właściwości sylową, jak i grupę aminową. Grupa karboksy- Każdy z 20 rodzajów aminokwasów białkowych lowa ma charakter kwasowy, co oznacza, że ma inne właściwości, które wynikają z odmien- może oddawać proton (H⁺), a grupa aminowa nej budowy chemicznej podstawników. W obrę- ma charakter zasadowy, co oznacza, że może bie podstawników mogą się znajdować np. przyjmować proton (H⁺). Dzięki temu, w zależ- dodatkowe grupy karboksylowe lub aminowe, ności od pH środowiska, aminokwasy mogą które nadają aminokwasom odpowiednio cha- tworzyć trzy rodzaje jonów: rakter kwasowy lub zasadowy. Struktura pod- jony obojnacze, w których obie grupy – kar- stawnika ma również wpływ na rozpuszczal- boksylowa i aminowa – są zjonizowane, ność danego aminokwasu w wodzie, dlatego kationy, w których tylko grupa aminowa jest związki te możemy podzielić na rozpuszczalne zjonizowana, w wodzie, czyli hydrofilowe i nierozpuszczalne aniony, w których tylko grupa karboksylowa w wodzie, czyli hydrofobowe. jest zjonizowana. Dowiedz się więcej Jak określić postać jonową aminokwasu? Aby określić, w jakiej postaci jonowej występuje dany aminokwas w roztworze o określonym pH, musisz skorzystać z tablicy aminokwasów białkowych (patrz s. 230-231). Zostały w niej podane wartości punktu izoelektrycznego (pl) aminokwasów. Są to wartości pH środowiska, przy których dany aminokwas występuje w postaci jonu obojnaczego. W środowisku o pH niższym niż pI aminokwas występuje w formie kationowej, a w środowisku o pH wyższym niż pI – w formie anionowej. Poniżej przedstawiono mechanizm tworzenia jonów na przykładzie alaniny (pI = 6,11). W stanie bezwodnym – krystalicznym, W pH < 6,11 alanina ma postać kationu."
          }
        ]
      },
      {
        "id": "czlowiek-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [
          {
            "id": "bio-cz-1",
            "question": "Jakie hormony wydziela przedni płat przysadki mózgowej i jaka jest ich funkcja?",
            "answer": "GH (hormon wzrostu — wzrost kości i tkanek), TSH (tyreotropina — pobudza tarczycę do wydzielania T3/T4), ACTH (kortykotropina — pobudza korę nadnerczy do wydzielania kortyzolu), FSH (folikulotropina — rozwój pęcherzyków jajnikowych i spermatogeneza), LH (lutropina — owulacja i produkcja testosteronu), PRL (prolaktyna — laktacja).",
            "examRef": "CKE 2015-2024"
          },
          {
            "id": "bio-cz-2",
            "question": "Wyjaśnij mechanizm regulacji poziomu glukozy we krwi przez insulinę i glukagon.",
            "answer": "Wzrost glukozy (po posiłku) → komórki β wydzielają insulinę → translokacja GLUT4, synteza glikogenu i glikoliza → spadek glukozy. Spadek glukozy (głodzenie) → komórki α wydzielają glukagon → glikogenoliza i glukoneogeneza w wątrobie → wzrost glukozy. Jest to ujemne sprzężenie zwrotne.",
            "examRef": "CKE 2016"
          },
          {
            "id": "bio-cz-3",
            "question": "Wymień główne typy przeciwciał (immunoglobulin) i opisz ich funkcje.",
            "answer": "IgM — pierwsza odpowiedź, aktywacja dopełniacza. IgG — główne przeciwciało odpowiedzi wtórnej, przechodzi przez łożysko (odporność płodu), neutralizacja toksyn. IgA — wydzielnicza (ślina, łzy, siara, wydzieliny błon śluzowych). IgE — obrona przeciw pasożytom, reakcje alergiczne (degranulacja mastocytów). IgD — receptor na limfocytach B, aktywacja.",
            "examRef": "CKE 2019"
          }
        ]
      },
      {
        "id": "czlowiek-cke-tasks",
        "title": "Zadania maturalne CKE",
        "summary": "- Zbiorcze zestawienie zadań CKE dla tego działu.",
        "academic_detail": "Pytania zgrupowane na końcu w celu ułatwienia powtórki.",
        "content": [],
        "recallQuestions": [],
        "maturaQuestions": [
          "Zadanie 1. (0-4) Uczniowie mieli w warunkach domowych zweryfikować następującą hipotezę: Na kiełkowanie nasion wpływają temperatura, woda i światło. W tym celu w czterech ponumerowanych naczyniach wypełnio- nych watą zasiali pieprzycę siewną. Następnie każde z naczyń umieścili w odmiennych warunkach: • naczynie nr 1 - na parapecie, nasiona miały nie być podlewane, • naczynie nr 2 – na parapecie, nasiona miały być podlewane, • naczynie nr 3 – w szafce bez dostępu do światła, nasiona miały być podlewane, • naczynie nr 4 – w lodówce, nasiona miały być podlewane, • naczynie nr 5 – w lodówce, nasio",
          "Zadanie 2. (0-2)▲ Przeprowadzono badania dotyczące strategii pokarmowych gatunków chrząszczy występujących w Wiel- kiej Brytanii. Preferencje pokarmowe chrząszczy zostały ustalone na podstawie określenia składu gatun- kowego materiału zebranego w terenie. Wynik badania został przedstawiony na wykresie. drapieżniki (3.9%) roślinożercy (3,8%) pasożyty pasożyty roślin (35,6%) zwierząt (21,5%) BADANIA PRZY saprofagi (35,1%) Żródło: J. Weiner, Życie i ewolucja biosfery. Podręcznik ekologii ogólnej, Warszawa 2012, s. 357. a) Oceń prawdziwość poniższych stwierdzeń dotyczących przeprowadzonych badań.",
          "Zadanie 3. (0-5)▲ W komórkach liści kakaowca właściwego w warunkach naturalnych żyją endofityczne grzyby. Zasiedlają one liście po wykiełkowaniu siewek. Naukowcy przeprowadzili następujący eksperyment - wyhodowali w laboratorium siewki kakaowca, a następnie do części z nich dodali endofityczne grzyby. Następnie za- szczepili siewki gatunkiem protista, który powoduje uszkodzenia, a nawet zamieranie liści. Wyniki ekspe- rymentu przedstawiono w poniższej tabeli. Próba nr 1 Próba nr 2 i --P+ +d +3 Zamieranie liści (w %) 24 9 E- P+ - endofit nieobecny, patogen obecny Zniszczenia powierzchni liści (",
          "Zadanie 4. (0-3) Na rysunkach przedstawiono wyniki pewnego doświadczenia przeprowadzonego na bakterii – gronkowcu złocistym. A. B. obszar zasiedlony przez gronkowce miejsce aplikacji antybiotyku bez antybiotyku (-) z antybiotykiem (+) a) Sformułuj problem badawczy do tego doświadczenia. b) Określ, który wynik (A czy B) obrazuje próbę kontrolną. Odpowiedź uzasadnij. c) Oceń, które hipotezy zostały potwierdzone w doświadczeniu. Wpisz znak X w odpowiednie miejsca BADANIA PRZYROI tabeli. TAK NIE 1. Antybiotyki wpływają negatywnie na rozwój gronkowca złocistego. 2. Antybiotyki sprzyjają rozwojowi g",
          "Zadanie 5. (0-3)▲ Jastrząb poluje m.in. na gołębie grzywacze. Naukowcy postanowili sprawdzić, w jaki sposób na sukces drapieżnika wpływa wielkość grupy ofiar oraz dzieląca go od nich odległość. Wyniki obserwacji przedsta- wiono na poniższym wykresie. procent udanych ataków jastrzębia 100 50 odległość, z jakiej jastrząb zostaje- [dos zz z znmm -40 75 -30 50 -20 25 -10 0 0 1 2-10 11-50 >50 wielkość stada grzywaczy Na podstawie: A. Mackenzie, A.S. Ball, S.R. Virdee, Krótkie wyklady. Ekologia, Warszawa 2002, s. 185. 12\n\n\nZadania maturalne a) Sformułuj wniosek dotyczący skuteczności ataków jastrzęb"
        ]
      }
    ]
  }
];
