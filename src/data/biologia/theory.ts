import type { TextbookDomain } from "@/types/textbook";

export const biologiaTheory: TextbookDomain[] = [
  {
    id: "cytologia",
    title: "Cytologia — Budowa i funkcjonowanie komórki",
    shortTitle: "Cytologia",
    icon: "🧬",
    sections: [
      {
        id: "budowa-komorki",
        title: "Budowa komórki eukariotycznej",
        content: [
          {
            type: "paragraph",
            text: "Komórka jest podstawową jednostką strukturalną i funkcjonalną każdego organizmu. Wyróżniamy dwa główne typy komórek: prokariotyczne (bakterie, archeony) oraz eukariotyczne (rośliny, zwierzęta, grzyby, protisty). Komórka eukariotyczna charakteryzuje się obecnością jądra komórkowego otoczonego podwójną błoną oraz wyspecjalizowanych przedziałów zwanych organellami.",
          },
          {
            type: "heading",
            level: 3,
            text: "Błona komórkowa i transport",
          },
          {
            type: "paragraph",
            text: "Błona komórkowa (plazmalemma) zbudowana jest z dwuwarstwy fosfolipidowej z wbudowanymi białkami integralnymi i peryferyjnymi. Model płynnej mozaiki (Singer-Nicolson) opisuje błonę jako dynamiczną strukturę, w której cząsteczki mogą swobodnie dyfundować w płaszczyźnie błony. Transport przez błonę dzieli się na bierny (dyfuzja prosta, dyfuzja ułatwiona przez kanały i nośniki) oraz czynny (pompa sodowo-potasowa, endocytoza, egzocytoza).",
          },
          {
            type: "paragraph",
            text: "Dyfuzja prosta zachodzi bez udziału białek nośnikowych i dotyczy małych cząsteczek niepolarnych (O₂, CO₂). Dyfuzja ułatwiona wymaga udziału białek kanałowych lub nośnikowych. Transport czynny wymaga nakładu energii (ATP) i umożliwia przemieszczanie substancji przeciw gradientowi stężeń — kluczowym przykładem jest pompa Na⁺/K⁺ ATP-aza, która wypompowuje 3 jony Na⁺ na zewnątrz i wprowadza 2 jony K⁺ do wnętrza komórki.",
          },
          {
            type: "heading",
            level: 3,
            text: "Jądro komórkowe",
          },
          {
            type: "paragraph",
            text: "Jądro komórkowe zawiera materiał genetyczny (DNA) zorganizowany w chromatynę. Otoczone jest podwójną błoną jądrową z porami jądrowymi, które regulują transport między jądrem a cytoplazmą. W jądrze znajduje się jąderko (nucleolus) — miejsce syntezy rRNA i montażu podjednostek rybosomów. Chromosomy są widoczne podczas podziałów komórkowych, natomiast w interfazie DNA występuje w formie rozluźnionej chromatyny.",
          },
          {
            type: "heading",
            level: 3,
            text: "Rybosomy i synteza białek",
          },
          {
            type: "paragraph",
            text: "Rybosomy są zbudowane z rRNA i białek. Występują jako wolne (w cytoplazmie, syntetyzują białka dla potrzeb wewnętrznych komórki) oraz związane z siateczką śródplazmatyczną szorstką (RER, syntetyzują białka na eksport, do lizosomów lub do wbudowania w błonę). Transkrypcja zachodzi w jądrze, gdzie mRNA jest syntetyzowany na matrycy DNA, a następnie transportowany przez pory jądrowe do cytoplazmy, gdzie na rybosomach zachodzi translacja.",
          },
          {
            type: "heading",
            level: 3,
            text: "Mitochondria — centra energetyczne",
          },
          {
            type: "paragraph",
            text: "Mitochondria są organellami o podwójnej błonie. Błona wewnętrzna tworzy grzebienie mitochondrialne (cristae), które zwiększają powierzchnię dla łańcucha oddechowego. W macierzy mitochondrialnej zachodzi cykl Krebsa, a na grzebieniach — łańcuch oddechowy i chemiosmoza (fosforylacja oksydacyjna). W wyniku oddychania tlenowego z 1 cząsteczki glukozy powstaje 36–38 ATP oraz CO₂ i H₂O. Mitochondria posiadają własne koliste DNA i rybosomy — są półautonomiczne.",
          },
          {
            type: "heading",
            level: 3,
            text: "Aparat Golgiego, lizosomy, siateczka śródplazmatyczna",
          },
          {
            type: "paragraph",
            text: "Siateczka śródplazmatyczna szorstka (RER) pokryta jest rybosomami i uczestniczy w syntezie białek na eksport. Siateczka śródplazmatyczna gładka (SER) uczestniczy w syntezie lipidów, metabolizmie węglowodanów oraz detoksykacji. Aparat Golgiego modyfikuje, sortuje i pakuje białka do pęcherzyków transportowych. Lizosomy zawierają enzymy hydrolityczne trawiące substancje wewnątrzkomórkowe i fagocytowane. Peroksysomy zawierają katalazę rozkładającą H₂O₂.",
          },
        ],
        recallQuestions: [
          {
            id: "bio-cyt-1",
            question: "Ile cząsteczek ATP powstaje w wyniku oddychania tlenowego z 1 cząsteczki glukozy?",
            answer: "36–38 ATP (w tym: 2 ATP z glikolizy, 2 ATP z cyklu Krebsa, 32–34 ATP z łańcucha oddechowego).",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-cyt-2",
            question: "Czym różni się transport czynny od biernego przez błonę komórkową?",
            answer: "Transport czynny wymaga energii (ATP) i zachodzi przeciw gradientowi stężeń, transport bierny zachodzi zgodnie z gradientem i nie wymaga energii.",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-cyt-3",
            question: "Wymień organelle komórki eukariotycznej posiadające własne DNA.",
            answer: "Mitochondria i chloroplasty (u roślin) — są półautonomiczne, posiadają koliste DNA i własne rybosomy.",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-cyt-4",
            question: "Jaka jest funkcja aparatu Golgiego w komórce?",
            answer: "Modyfikacja (np. glikozylacja), sortowanie i pakowanie białek do pęcherzyków transportowych oraz produkcja lizosomów.",
            examRef: "CKE 2016",
          },
          {
            id: "bio-cyt-5",
            question: "Wyjaśnij, na czym polega model płynnej mozaiki budowy błony komórkowej.",
            answer: "Model Singer-Nicolson: błona to dwuwarstwa fosfolipidowa, w której białka mogą swobodnie dyfundować w płaszczyźnie błony, a całość jest dynamiczna i asymetryczna.",
            examRef: "CKE 2017",
          },
        ],
      },
      {
        id: "podzialy-komorkowe",
        title: "Podziały komórkowe — mitoza i mejoza",
        content: [
          {
            type: "paragraph",
            text: "Podział komórki jest kluczowym procesem umożliwiającym wzrost, regenerację i rozmnażanie organizmów. Cykl komórkowy składa się z interfazy (G1, S, G2) oraz fazy M (mitoza lub mejoza + cytokineza). W fazie S następuje replikacja DNA, w wyniku której powstają dwie identyczne cząsteczki DNA połączone w centromerze — chromatydy siostrzane.",
          },
          {
            type: "heading",
            level: 3,
            text: "Mitoza",
          },
          {
            type: "paragraph",
            text: "Mitoza to podział jądra komórkowego prowadzący do powstania dwóch identycznych jąder potomnych. Przebiega w czterech fazach: profaza (kondensacja chromatyny w chromosomy, zanik jąderka i otoczki jądrowej), metafaza (chromosomy ustawiają się w płytce metafazalnej, wrzeciono podziałowe przyłącza się do centromerów), anafaza (chromatydy siostrzane rozdzielają się i wędrują do biegunów), telofaza (dekondensacja chromosomów, odtworzenie otoczek jądrowych). Cytokineza dzieli cytoplazmę. Mitoza zachodzi w komórkach somatycznych.",
          },
          {
            type: "heading",
            level: 3,
            text: "Mejoza",
          },
          {
            type: "paragraph",
            text: "Mejoza to podział redukcyjny prowadzący do powstania komórek haploidalnych (gamet lub zarodników). Składa się z dwóch kolejnych podziałów: mejozy I (redukcyjnej) i mejozy II (ekwacyjnej, przypominającej mitozę). W profazie I zachodzi crossing-over — wymiana odcinków między chromatydami chromosomów homologicznych, co prowadzi do rekombinacji genetycznej. W metafazie I chromosomy homologiczne ustawiają się parami w płytce metafazalnej (losowe ułożenie — kolejne źródło zmienności). W anafazie I rozdzielają się chromosomy homologiczne (nie chromatydy).",
          },
          {
            type: "table",
            headers: ["Cecha", "Mitoza", "Mejoza"],
            rows: [
              ["Liczba podziałów", "1", "2 (I + II)"],
              ["Liczba komórek potomnych", "2", "4"],
              ["Liczba chromosomów", "Taka sama (diploidalna)", "Połowa (haploidalna)"],
              ["Zmienność genetyczna", "Brak (komórki identyczne)", "Rekombinacja (crossing-over)"],
              ["Występowanie", "Komórki somatyczne", "Komórki płciowe (gamety)"],
            ],
          },
        ],
        recallQuestions: [
          {
            id: "bio-podz-1",
            question: "Ile komórek potomnych powstaje w wyniku mitozy, a ile w wyniku mejozy?",
            answer: "Mitoza: 2 komórki diploidalne (identyczne). Mejoza: 4 komórki haploidalne (różne genetycznie).",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-podz-2",
            question: "Która faza mejozy odpowiada za rekombinację genetyczną i na czym ona polega?",
            answer: "Profaza I — crossing-over, czyli wymiana odcinków chromatyd między chromosomami homologicznymi.",
            examRef: "CKE 2016",
          },
        ],
      },
    ],
  },
  {
    id: "genetyka",
    title: "Genetyka — dziedziczenie i ekspresja genów",
    shortTitle: "Genetyka",
    icon: "🧬",
    sections: [
      {
        id: "podstawy-genetyki",
        title: "Podstawy dziedziczenia — prawa Mendla",
        content: [
          {
            type: "paragraph",
            text: "Genetyka jest nauką o dziedziczeniu cech i zmienności organizmów. Podstawy genetyki klasycznej zostały sformułowane przez Gregora Mendla na podstawie doświadczeń z grochem zwyczajnym (Pisum sativum). Mendel sformułował trzy prawa: prawo czystości gamet (podczas tworzenia gamet allele danego genu ulegają rozdzieleniu), prawo niezależnego dziedziczenia cech (allele różnych genów są dziedziczone niezależnie, jeśli leżą na różnych chromosomach) oraz prawo dominacji (w heterozygocie allel dominujący maskuje recesywny).",
          },
          {
            type: "paragraph",
            text: "Współcześnie gen definiuje się jako odcinek DNA zawierający informację o budowie białka lub cząsteczki RNA. Genom człowieka zawiera około 20 000–25 000 genów kodujących białka. Allele to różne wersje tego samego genu. Genotyp to zestaw alleli danego organizmu, fenotyp to zespół cech observable (wynik interakcji genotypu ze środowiskiem).",
          },
          {
            type: "heading",
            level: 3,
            text: "Dziedziczenie grup krwi",
          },
          {
            type: "paragraph",
            text: "Układ ABO jest determinowany przez jeden gen z trzema allelami: Iᵃ, Iᵇ, i. Allele Iᵃ i Iᵇ są kodominujące (obie ujawniają się w fenotypie heterozygoty), natomiast allel i jest recesywny wobec obu. Grupa krwi A może mieć genotyp IᵃIᵃ lub Iᵃi, grupa B: IᵇIᵇ lub Iᵇi, grupa AB: IᵃIᵇ, grupa 0: ii. Układ Rh jest determinowany przez gen RHD — obecność allelu Rh⁺ (dominujący) daje czynnik Rh+.",
          },
          {
            type: "heading",
            level: 3,
            text: "Budowa DNA i replikacja",
          },
          {
            type: "paragraph",
            text: "DNA (kwas deoksyrybonukleinowy) zbudowany jest z dwóch nici skręconych w podwójną helisę. Każda nić składa się z nukleotydów (cukier deoksyryboza, reszta fosforanowa, zasada azotowa). Zasady azotowe: adenina (A), guanina (G) — puryny; tymina (T), cytozyna (C) — pirymidyny. Komplementarność zasad: A=T (2 wiązania wodorowe), C≡G (3 wiązania). Replikacja DNA jest semikonserwatywna — każda nowa cząsteczka zawiera jedną starą i jedną nową nić.",
          },
          {
            type: "heading",
            level: 3,
            text: "Ekspresja genu: transkrypcja i translacja",
          },
          {
            type: "paragraph",
            text: "Transkrypcja to przepisanie informacji z DNA na mRNA, zachodzi w jądrze komórkowym. Polimeraza RNA dołącza do nukleotydów komplementarnych do matrycy DNA. W eukariotach mRNA ulega obróbce (splicing — wycięcie intronów, dodanie czapeczki 5' i ogona poly-A). Translacja to synteza białka na rybosomach wg kodu genetycznego. Kod genetyczny jest trójkowy (kodon = 3 nukleotydy), jednoznaczny (jeden kodon = jedna aminokwas), zdegenerowany (więcej niż jeden kodon na aminokwas), uniwersalny (taki sam u wszystkich organizmów).",
          },
          {
            type: "heading",
            level: 3,
            text: "Mutacje genetyczne",
          },
          {
            type: "paragraph",
            text: "Mutacje to nagłe, dziedziczne zmiany w materiale genetycznym. Dzielimy je na genowe (punktowe — substytucje, delecje, insercje), chromosomowe (zmiany struktury chromosomów — delecje, duplikacje, inwersje, translokacje) oraz genomowe (zmiany liczby całych chromosomów — aneuploidie, poliploidie). Przykładem mutacji genowej jest anemia sierpowata (substytucja Glu → Val w łańcuchu β-hemoglobiny). Przykładem aneuploidii jest zespół Downa (trisomia 21. pary chromosomów).",
          },
        ],
        recallQuestions: [
          {
            id: "bio-gen-1",
            question: "Jakie są trzy prawa Mendla?",
            answer: "1) Prawo czystości gamet (segregacji), 2) Prawo niezależnego dziedziczenia cech, 3) Prawo dominacji.",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-gen-2",
            question: "Jaki genotyp może mieć osoba o grupie krwi AB?",
            answer: "IᵃIᵇ — allel Iᵃ i Iᵇ są kodominujące, więc oba ujawniają się w fenotypie.",
            examRef: "CKE 2016",
          },
          {
            id: "bio-gen-3",
            question: "Wyjaśnij, na czym polega semikonserwatywny mechanizm replikacji DNA.",
            answer: "Każda z dwóch nici macierzystego DNA służy jako matryca do syntezy nowej, komplementarnej nici. W rezultacie każda cząsteczka potomna zawiera jedną nić starą (macierzystą) i jedną nową.",
            examRef: "CKE 2017",
          },
          {
            id: "bio-gen-4",
            question: "Czym różni się mutacja genowa od chromosomowej? Podaj przykłady.",
            answer: "Mutacja genowa (punktowa) dotyczy pojedynczego nukleotydu (np. anemia sierpowata). Mutacja chromosomowa dotyczy fragmentu chromosomu (np. delecja, translokacja).",
            examRef: "CKE 2018",
          },
        ],
      },
    ],
  },
  {
    id: "metabolizm",
    title: "Metabolizm — przemiany energii i materii",
    shortTitle: "Metabolizm",
    icon: "⚡",
    sections: [
      {
        id: "oddychanie-komorkowe",
        title: "Oddychanie komórkowe i fermentacja",
        content: [
          {
            type: "paragraph",
            text: "Oddychanie komórkowe to proces utleniania związków organicznych (głównie glukozy) w celu wytworzenia ATP. Wyróżniamy oddychanie tlenowe (wymaga tlenu) i beztlenowe (fermentacja, bez tlenu). Oddychanie tlenowe zachodzi w trzech głównych etapach: glikoliza (cytoplazma), cykl Krebsa (macierz mitochondrialna) i łańcuch oddechowy (grzebienie mitochondrialne). Glikoliza przekształca glukozę (C₆H₁₂O₆) w 2 cząsteczki pirogronianu, dając 2 ATP i 2 NADH. Cykl Krebsa utlenia acetylokoenzym A do CO₂, produkując 2 ATP, 6 NADH i 2 FADH₂. Łańcuch oddechowy wykorzystuje NADH i FADH₂ do syntezy 32–34 ATP przez fosforylację oksydacyjną.",
          },
          {
            type: "paragraph",
            text: "Fermentacja jest procesem beztlenowym. Fermentacja mlekowa (zachodzi w mięśniach przy niedoborze tlenu) przekształca pirogronian w mleczan z wydajnością 2 ATP na glukozę. Fermentacja alkoholowa (drożdże) przekształca pirogronian w etanol i CO₂, również z wydajnością 2 ATP. W obu przypadkach celem jest regeneracja NAD⁺ niezbędnego do dalszej glikolizy.",
          },
        ],
        recallQuestions: [
          {
            id: "bio-met-1",
            question: "W którym etapie oddychania komórkowego powstaje najwięcej ATP?",
            answer: "W łańcuchu oddechowym (fosforylacja oksydacyjna) — 32–34 ATP z 1 glukozy.",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-met-2",
            question: "Jaka jest wydajność energetyczna fermentacji mlekowej w porównaniu z oddychaniem tlenowym?",
            answer: "Fermentacja daje 2 ATP z glukozy, oddychanie tlenowe 36–38 ATP — fermentacja jest ok. 18-19 razy mniej wydajna.",
            examRef: "CKE 2016",
          },
        ],
      },
      {
        id: "fotosynteza",
        title: "Fotosynteza",
        content: [
          {
            type: "paragraph",
            text: "Fotosynteza to proces syntezy związków organicznych z CO₂ i H₂O przy udziale energii świetlnej, zachodzący w chloroplastach. Ogólne równanie: 6CO₂ + 6H₂O + energia świetlna → C₆H₁₂O₆ + 6O₂. Faza jasna zachodzi w tylakoidach: chloroplasty pochłaniają światło przez chlorofil, co prowadzi do fotolizy wody, powstania tlenu, syntezy ATP i NADPH. Faza ciemna (cykl Calvina) zachodzi w stromie chloroplastu: CO₂ jest wiązany przez RuBisCO w cyklu Calvina, a następnie redukowany do glukozy przy użyciu ATP i NADPH z fazy jasnej.",
          },
        ],
        recallQuestions: [
          {
            id: "bio-met-3",
            question: "Gdzie zachodzi faza jasna, a gdzie faza ciemna fotosyntezy?",
            answer: "Faza jasna — w tylakoidach chloroplastów. Faza ciemna (cykl Calvina) — w stromie chloroplastu.",
            examRef: "CKE 2016",
          },
        ],
      },
    ],
  },
  {
    id: "botanika",
    title: "Botanika — budowa i fizjologia roślin",
    shortTitle: "Botanika",
    icon: "🌿",
    sections: [
      {
        id: "tkanki-roslinne",
        title: "Tkanki i organy roślinne",
        content: [
          {
            type: "paragraph",
            text: "Rośliny nasienne (Spermatophyta) dzielą się na nagonasienne i okrytonasienne. Ich budowa jest przystosowana do życia na lądzie. Tkanki roślinne dzielą się na twórcze (merystemy — umożliwiają wzrost) i stałe (miękiszowa, okrywająca, wzmacniająca, przewodząca). Miękisz (parenchyma) pełni funkcje asymilacyjne, spichrzowe i przewietrzające. Tkanka przewodząca: drewno (ksylem) przewodzi wodę i sole mineralne od korzeni do liści, łyko (floem) przewodzi produkty fotosyntezy od liści do innych części rośliny.",
          },
          {
            type: "paragraph",
            text: "Korzeń utrzymuje roślinę w glebie i pobiera wodę z solami mineralnymi. Łodyga transportuje substancje między korzeniem a liśćmi. Liść jest organem asymilacyjnym — zawiera chloroplasty w komórkach miękiszu palisadowego. Szparki (aparaty szparkowe) regulują wymianę gazową i transpirację. Kwiaty są organami rozmnażania płciowego. U okrytonasiennych kwiaty zawierają pręciki (męskie) i słupki (żeńskie). Zapylenie prowadzi do podwójnego zapłodnienia charakterystycznego dla okrytonasiennych.",
          },
        ],
        recallQuestions: [
          {
            id: "bio-bot-1",
            question: "Jakie funkcje pełnią drewno (ksylem) i łyko (floem) w roślinie?",
            answer: "Kylem przewodzi wodę i sole mineralne w górę (od korzeni do liści), floem przewodzi produkty fotosyntezy (asymilaty) od liści do pozostałych części rośliny.",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-bot-2",
            question: "Czym charakteryzuje się podwójne zapłodnienie u okrytonasiennych?",
            answer: "Jedna komórka plemnikowa łączy się z komórką jajową (→ zygota 2n), a druga łączy się z dwoma jądrami biegunkowymi worka zalążkowego (→ triploidalne bielmo 3n, tkanka odżywcza zarodka).",
            examRef: "CKE 2017",
          },
        ],
      },
    ],
  },
  {
    id: "czlowiek",
    title: "Anatomia i fizjologia człowieka — układy",
    shortTitle: "Fizjologia człowieka",
    icon: "🧍",
    sections: [
      {
        id: "homeostaza-hormony",
        title: "Homeostaza i regulacja hormonalna",
        content: [
          {
            type: "paragraph",
            text: "Homeostaza to zdolność organizmu do utrzymywania stałości środowiska wewnętrznego (parametrów takich jak temperatura, pH, stężenie glukozy, ciśnienie osmotyczne) mimo zmian w otoczeniu. Główną rolę w regulacji homeostazy odgrywa układ hormonalny (dokrewny) i nerwowy.",
          },
          {
            type: "paragraph",
            text: "Przysadka mózgowa (hypophysis) jest nadrzędnym gruczołem dokrewnym. Płat przedni (adenohypophysis) wydziela: hormon wzrostu (GH), tyreotropinę (TSH), kortykotropinę (ACTH), prolaktynę, gonadotropiny (FSH, LH). Podwzgórze łączy się z przysadką poprzez naczynia wrotne i aksony, regulując jej wydzielanie za pomocą liberyn i statyn. Płat tylny (neurohypophysis) magazynuje i uwalnia oksytocynę i ADH (wazopresynę) produkowane w podwzgórzu.",
          },
          {
            type: "paragraph",
            text: "Regulacja poziomu glukozy we krwi jest przykładem mechanizmu homeostatycznego z ujemnym sprzężeniem zwrotnym. Po wzroście stężenia glukozy (po posiłku) trzustka wydziela insulinę, która zwiększa wychwyt glukozy przez komórki (wątroba, mięśnie) i hamuje glukoneogenezę. Przy spadku stężenia glukozy (na czczo) wydzielany jest glukagon, który stymuluje rozkład glikogenu w wątrobie (glikogenoliza).",
          },
          {
            type: "heading",
            level: 3,
            text: "Układ odpornościowy",
          },
          {
            type: "paragraph",
            text: "Układ odpornościowy chroni organizm przed patogenami. Odporność nieswoista (wrodzona) obejmuje bariery mechaniczne (skóra, błony śluzowe) i komórki (makrofagi, neutrofile, komórki NK). Odporność swoista (nabyta) dzieli się na humoralną (przeciwciała produkowane przez limfocyty B) i komórkową (limfocyty T — cytotoksyczne CD8+ i pomocnicze CD4+). Komórki pamięci immunologicznej umożliwiają szybszą odpowiedź przy ponownym kontakcie z antygenem (podstawa szczepień).",
          },
        ],
        recallQuestions: [
          {
            id: "bio-cz-1",
            question: "Jakie hormony wydziela przedni płat przysadki mózgowej?",
            answer: "GH (hormon wzrostu), TSH (tyreotropina), ACTH (kortykotropina), prolaktyna, FSH, LH.",
            examRef: "CKE 2015-2024",
          },
          {
            id: "bio-cz-2",
            question: "Wyjaśnij mechanizm regulacji poziomu glukozy we krwi przez insulinę i glukagon.",
            answer: "Insulina (wydzielana po posiłku) obniża poziom glukozy przez zwiększenie jej wychwytu przez komórki. Glukagon (głodzenie) podnosi poziom glukozy przez stymulację glikogenolizy w wątrobie.",
            examRef: "CKE 2016",
          },
        ],
      },
    ],
  },
];
