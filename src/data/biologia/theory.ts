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
        "summary": "- Komórka jest podstawową **jednostką** __________ i funkcjonalną każdego organizmu żywego.\n- Teoria komórkowa (Schleiden, Schwann, Virchow) głosi, że: (1) wszystkie organizmy zbudowane są z komórek, (2) komórka **jest** __________ jednostką życia, (3) każda komórka powstaje z innej komórki (omnis cellula e cellula).\n- Wyróżniamy dwa główne typy **komórek**: __________ (bakterie, archeony — bez jądra komórkowego, DNA w postaci nukleoidu) oraz eukariotyczne (rośliny, zwierzęta, grzyby, protisty — z jądrem otoczonym podwójną błoną).\n- Błona komórkowa (plazmalemma) według modelu Singera i Nicolsona (1972) zbudowana jest z **dwuwarstwy** __________ w której hydrofilowe głowy fosfolipidów skierowane są na zewnątrz (do środowiska wodnego), a hydrofobowe ogony do wewnątrz."
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
        "summary": "- Podział komórki jest kluczowym **procesem** __________ wzrost, regenerację i rozmnażanie organizmów.\n- W **organizmach** __________ podział to rozmnażanie, w wielokomórkowych — wzrost i odnowa tkanek.\n- Cykl komórkowy składa się z interfazy (G1 — wzrost i synteza białek, S — replikacja DNA każda cząsteczka DNA tworzy dwie chromatydy siostrzane połączone w centromerze, G2 ****— __________ do podziału, synteza tubuliny) oraz fazy M (kariokineza + cytokineza).\n- Mitoza to podział jądra komórkowego prowadzący do powstania **dwóch** __________ jąder potomnych o liczbie chromosomów 2n (diploidalnej)."
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
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
        "recallQuestions": []
      },
      {
        "id": "dna-replikacja-ekspresja",
        "title": "Struktura DNA, replikacja i ekspresja genów",
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
        "recallQuestions": []
      },
      {
        "id": "mutacje-i-biotechnologia",
        "title": "Mutacje, regulacja genów i biotechnologia",
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
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
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
        "recallQuestions": []
      },
      {
        "id": "oddychanie-komorkowe",
        "title": "Oddychanie komórkowe — glikoliza, cykl Krebsa, łańcuch oddechowy",
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
        "recallQuestions": []
      },
      {
        "id": "fotosynteza",
        "title": "Fotosynteza — faza jasna i ciemna",
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
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
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
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
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
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
        "content": [],
        "recallQuestions": []
      },
      {
        "id": "cke-questions-grouped",
        "title": "Pytania Maturalne CKE",
        "summary": "- Zbiorcze zestawienie pytań maturalnych **CKE** dla tego działu.\n- Przeznaczone do ułatwienia powtórki przed __________.",
        "academic_detail": "Pytania zostały zgrupowane ze wszystkich podsekcji dla łatwiejszej powtórki do matury z biologii i chemii.",
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
      }
    ]
  }
];
