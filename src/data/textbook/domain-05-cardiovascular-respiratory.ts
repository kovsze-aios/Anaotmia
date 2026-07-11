import type { TextbookDomain } from "@/types/textbook";

export const cardiovascularRespiratory: TextbookDomain = {
  id: "cardiovascular-respiratory",
  title: "UkĹ‚ad KrÄ…ĹĽenia i Oddechowy",
  shortTitle: "KrÄ…ĹĽenie/oddech",
  icon: "âť¤ď¸Ź",
  sections: [
    {
      id: "serce",
      title: "Serce",
      content: [
        {
          type: "paragraph",
          text: "MiÄ™sieĹ„ sercowy (myocardium) jest czÄ™Ĺ›ciÄ… Ĺ›rĂłdsierdzia â€” warstwy Ĺ›rodkowej Ĺ›ciany serca (pytanie nr 7). Ĺšciana serca zbudowana jest z trzech warstw: nasierdzia (zewnÄ™trzna), Ĺ›rĂłdsierdzia (miÄ™sieĹ„ sercowy) i wsierdzia (wewnÄ™trzna).",
        },
        {
          type: "table",
          headers: ["Warstwa serca", "Opis"],
          rows: [
            ["Nasierdzie (epicardium)", "ZewnÄ™trzna warstwa, pokrywa serce"],
            ["ĹšrĂłdsierdzie (myocardium)", "MiÄ™sieĹ„ sercowy â€” warstwa Ĺ›rodkowa"],
            ["Wsierdzie (endocardium)", "WewnÄ™trzna warstwa, wyĹ›ciela jamy serca"],
            ["Osierdzie (pericardium)", "Worek osierdziowy otaczajÄ…cy serce"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "GruboĹ›Ä‡ Ĺ›ciany lewej komory",
        },
        {
          type: "paragraph",
          text: "Ĺšciana lewej komory jest 3-krotnie grubsza od Ĺ›ciany prawej komory. Wynika to z oporu, jaki krew napotyka w krÄ…ĹĽeniu duĹĽym (obwodowym) â€” naczynia krwionoĹ›ne stawiajÄ… opĂłr przepĹ‚ywajÄ…cej krwi, a do pokonania tego oporu konieczna jest silna miÄ™Ĺ›niĂłwka lewej komory. W krÄ…ĹĽeniu maĹ‚ym (pĹ‚ucnym) opĂłr naczyĹ„ jest znacznie mniejszy, dlatego prawa komora moĹĽe byÄ‡ cieĹ„sza.",
        },
        {
          type: "paragraph",
          text: "Krew natleniona (tÄ™tnicza) pĹ‚ynie w lewym sercu, natomiast krew odtleniona (ĹĽylna) w prawym sercu. Do lewego serca krew trafia z pĹ‚uc przez 4 ĹĽyĹ‚y pĹ‚ucne (2 prawe i 2 lewe). Lewe serce pompuje krew aortÄ… do krÄ…ĹĽenia duĹĽego, a prawe serce pompuje krwiÄ… pniem pĹ‚ucnym do krÄ…ĹĽenia maĹ‚ego.",
        },
        {
          type: "heading",
          level: 3,
          text: "Tony serca â€” mechanizm powstawania",
        },
        {
          type: "paragraph",
          text: "Dwa charakterystyczne tony serca ('pyk, pyk') to uderzenie krwi o zastawki, a nie skurcz przedsionkĂłw i komĂłr. Pierwszy ton serca to skurcz komĂłr â€” uderzenie krwi o zamkniÄ™te zastawki przedsionkowo-komorowe (trĂłjdzielnÄ… po prawej i dwudzielnÄ…/mitralnÄ… po lewej). Drugi ton serca to uderzenie krwi cofajÄ…cej siÄ™ z aorty i pnia pĹ‚ucnego o pĹ‚atki zastawek tÄ™tniczych (zastawka aorty i zastawka pnia pĹ‚ucnego), ktĂłre zapobiegajÄ… cofaniu siÄ™ krwi do komĂłr po skurczu.",
        },
        {
          type: "table",
          headers: ["Ton serca", "Przyczyna"],
          rows: [
            ["I ton ('pyk')", "Skurcz komĂłr â€” krew uderza o zamkniÄ™te zastawki przedsionkowo-komorowe"],
            ["II ton ('pyk')", "Krew cofajÄ…ca siÄ™ z aorty i pnia pĹ‚ucnego uderza o zastawki tÄ™tnicze"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Zastawki serca",
        },
        {
          type: "paragraph",
          text: "Przegroda przedsionkowo-komorowa zaopatrzona jest w zastawki, przez ktĂłre krew moĹĽe przepĹ‚ynÄ…Ä‡ z przedsionkĂłw do komĂłr, ale nie moĹĽe siÄ™ cofnÄ…Ä‡. W prawym sercu znajduje siÄ™ zastawka trĂłjdzielna, w lewym sercu â€” zastawka dwudzielna (mitralna). Zastawka aorty i zastawka pnia pĹ‚ucnego majÄ… po trzy pĹ‚atki.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-1",
          question: "MiÄ™sieĹ„ sercowy jest czÄ™Ĺ›ciÄ… ktĂłrej warstwy serca?",
          answer: "ĹšrĂłdsierdzia (myocardium).",
          examRef: "Q7",
        },
        {
          id: "cr-7",
          question: "Ile razy grubsza jest Ĺ›ciana lewej komory od prawej i dlaczego?",
          answer: "3-krotnie grubsza, poniewaĹĽ musi pokonaÄ‡ wiÄ™kszy opĂłr naczyĹ„ krÄ…ĹĽenia duĹĽego (systemowego).",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-8",
          question: "Co powoduje drugi ton serca ('pyk')?",
          answer: "Uderzenie krwi cofajÄ…cej siÄ™ z aorty i pnia pĹ‚ucnego o zastawki tÄ™tnicze (aorty i pnia pĹ‚ucnego).",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-9",
          question: "Jakie zastawki zapobiegajÄ… cofaniu siÄ™ krwi z komĂłr do przedsionkĂłw?",
          answer: "TrĂłjdzielna (prawa) i dwudzielna/mitralna (lewa) â€” zastawki przedsionkowo-komorowe.",
          examRef: "WykĹ‚ad",
        },
      ],
    },
    {
      id: "naczynia-krwionosne",
      title: "Naczynia krwionoĹ›ne",
      content: [
        {
          type: "paragraph",
          text: "Krew bogatÄ… w tlen (utlenowanÄ…) do pĹ‚uc prowadzÄ… gaĹ‚Ä™zie oskrzelowe (bronchial branches) â€” pytanie nr 5. TÄ™tnice pĹ‚ucne prowadzÄ… krew odtlenowanÄ… do pĹ‚uc, a ĹĽyĹ‚y pĹ‚ucne prowadzÄ… krew utlenowanÄ… z pĹ‚uc do serca.",
        },
        {
          type: "heading",
          level: 3,
          text: "PodziaĹ‚ ukĹ‚adu krÄ…ĹĽenia",
        },
        {
          type: "paragraph",
          text: "KrÄ…ĹĽenie maĹ‚e (pĹ‚ucne) â€” z prawej komory krew odtleniona wypĹ‚ywa pniem pĹ‚ucnym, ktĂłry dzieli siÄ™ na prawÄ… i lewÄ… tÄ™tnicÄ™ pĹ‚ucnÄ…. W pĹ‚ucach zachodzi wymiana gazowa: COâ‚‚ przechodzi do powietrza, a tlen do krwi. Natleniona krew wraca 4 ĹĽyĹ‚ami pĹ‚ucnymi do lewego przedsionka.",
        },
        {
          type: "paragraph",
          text: "KrÄ…ĹĽenie duĹĽe (obwodowe/odĹĽywcze) â€” z lewej komory krew natleniona wypĹ‚ywa aortÄ… do wszystkich narzÄ…dĂłw ciaĹ‚a. W komĂłrkach zachodzi przemiana materii: tlen i substancje odĹĽywcze sÄ… wykorzystywane, powstaje COâ‚‚ i metabolity (szkodliwe produkty przemiany materii). Krew zuĹĽyta, z COâ‚‚ i metabolitami, wraca ĹĽyĹ‚ami do prawego przedsionka.",
        },
        {
          type: "table",
          headers: ["KrÄ…ĹĽenie", "PoczÄ…tek", "Funkcja"],
          rows: [
            ["MaĹ‚e (pĹ‚ucne)", "Prawa komora â†’ pieĹ„ pĹ‚ucny", "Wymiana gazowa w pĹ‚ucach"],
            ["DuĹĽe (odĹĽywcze)", "Lewa komora â†’ aorta", "Dostarcza tlen i substancje odĹĽywcze do tkanek"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Ĺ»yĹ‚a wrotna",
        },
        {
          type: "paragraph",
          text: "Ĺ»yĹ‚a wrotna nie zbiera krwi z nerki lewej (pytanie nr 6). Ĺ»yĹ‚a wrotna (vena portae) zbiera krew z przewodu pokarmowego (ĹĽoĹ‚Ä…dek, jelita), trzustki, Ĺ›ledziony i pÄ™cherzyka ĹĽĂłĹ‚ciowego i prowadzi jÄ… do wÄ…troby. Nie zbiera krwi z nerek.",
        },
        {
          type: "paragraph",
          text: "SieÄ‡ dziwna ĹĽylno-ĹĽylna (rete mirabile) wystÄ™puje w wÄ…trobie (pytanie nr 12). W wÄ…trobie krew z ĹĽyĹ‚y wrotnej rozpada siÄ™ na sieÄ‡ naczyĹ„ wĹ‚osowatych (sinusoidy), ktĂłre nastÄ™pnie zbiegajÄ… siÄ™ w ĹĽyĹ‚y wÄ…trobowe.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-2",
          question: "Krew bogatÄ… w tlen do pĹ‚uc prowadzÄ…: gaĹ‚Ä™zie oskrzelowe, tÄ™tnice pĹ‚ucne, ĹĽyĹ‚y pĹ‚ucne czy tÄ™tnice wieĹ„cowe?",
          answer: "GaĹ‚Ä™zie oskrzelowe.",
          examRef: "Q5",
        },
        {
          id: "cr-3",
          question: "Ĺ»yĹ‚a wrotna nie zbiera krwi z ktĂłrego narzÄ…du?",
          answer: "Z nerki lewej.",
          examRef: "Q6",
        },
        {
          id: "cr-4",
          question: "Gdzie wystÄ™puje sieÄ‡ dziwna ĹĽylno-ĹĽylna (rete mirabile)?",
          answer: "W wÄ…trobie.",
          examRef: "Q12",
        },
      ],
    },
    {
      id: "tetnice-konczyny-gornej",
      title: "Droga krwi do koĹ„czyny gĂłrnej â€” arterial line",
      content: [
        {
          type: "paragraph",
          text: "KrÄ…ĹĽenie duĹĽe (odĹĽywcze) zaczyna siÄ™ w lewej komorze i zaczyna siÄ™ aortÄ…. Aorta najpierw prowadzi krew do gĂłry (aorta wstÄ™pujÄ…ca), nastÄ™pnie przechodzi w Ĺ‚uk aorty, a wreszcie w aortÄ™ zstÄ™pujÄ…cÄ… (nadprzeponowa = piersiowa, podprzeponowa = brzuszna).",
        },
        {
          type: "heading",
          level: 3,
          text: "PeĹ‚na droga tÄ™tnicza do prawej rÄ™ki",
        },
        {
          type: "list",
          items: [
            "Lewa komora (ventriculus sinister)",
            "Aorta wstÄ™pujÄ…ca (aorta ascendens)",
            "Ĺuk aorty (arcus aortae)",
            "PieĹ„ ramienno-gĹ‚owowy (truncus brachiocephalicus)",
            "TÄ™tnica podobojczykowa prawa (arteria subclavia dextra)",
            "TÄ™tnica pachowa (arteria axillaris)",
            "TÄ™tnica ramienna (arteria brachialis)",
            "TÄ™tnica promieniowa (arteria radialis) â€” po stronie koĹ›ci promieniowej",
            "TÄ™tnica Ĺ‚okciowa (arteria ulnaris) â€” po stronie koĹ›ci Ĺ‚okciowej",
          ],
        },
        {
          type: "paragraph",
          text: "Od Ĺ‚uku aorty odchodzÄ… trzy naczynia: (1) pieĹ„ ramienno-gĹ‚owowy (na stronÄ™ prawÄ…), (2) tÄ™tnica szyjna wspĂłlna lewa, (3) tÄ™tnica podobojczykowa lewa. Z pnia ramienno-gĹ‚owowego krew pĹ‚ynie na prawÄ… stronÄ™ gĹ‚owy, szyi i do prawej koĹ„czyny gĂłrnej. PieĹ„ ten dzieli siÄ™ na tÄ™tnicÄ™ szyjnÄ… wspĂłlnÄ… prawÄ… i tÄ™tnicÄ™ podobojczykowÄ… prawÄ….",
        },
        {
          type: "heading",
          level: 3,
          text: "Obszar unaczynienia",
        },
        {
          type: "paragraph",
          text: "TÄ™tnica pachowa zwiÄ…zana jest topograficznie ze splotem ramiennym (trzy pÄ™czki: boczny, przyĹ›rodkowy i tylny). TÄ™tnica pachowa przechodzi w tÄ™tnicÄ™ ramiennÄ…, ktĂłra odĹĽywia przedniÄ… grupÄ™ ramienia (m. dwugĹ‚owy ramienia, ramienny, kruczo-ramienny). Tylna grupa ramienia (m. trĂłjgĹ‚owy) zaopatrywana jest przez tÄ™tnicÄ™ ramiennÄ… gĹ‚Ä™bokÄ….",
        },
        {
          type: "paragraph",
          text: "TÄ™tnica ramienna w okolicy doĹ‚u Ĺ‚okciowego dzieli siÄ™ na tÄ™tnicÄ™ promieniowÄ… (biegnÄ…cÄ… bocznie, po stronie koĹ›ci promieniowej) i tÄ™tnicÄ™ Ĺ‚okciowÄ… (po stronie koĹ›ci Ĺ‚okciowej). Obie zaopatrujÄ… grupÄ™ przedniÄ… przedramienia (zginacze rÄ™ki i palcĂłw). Grupa tylna przedramienia zaopatrywana jest przez tÄ™tnicÄ™ miÄ™dzykostnÄ… wspĂłlnÄ… (od tÄ™tnicy Ĺ‚okciowej), ktĂłra dzieli siÄ™ na miÄ™dzykostnÄ… przedniÄ… i tylnÄ…. TÄ™tnice promieniowa i Ĺ‚okciowa schodzÄ… na rÄ™kÄ™ tworzÄ…c dwa Ĺ‚uki dĹ‚oniowe, ktĂłre dajÄ… odgaĹ‚Ä™zienia do palcĂłw (tÄ™tnice palcĂłw).",
        },
        {
          type: "heading",
          level: 3,
          text: "PowrĂłt ĹĽylny z rÄ™ki do serca",
        },
        {
          type: "paragraph",
          text: "Krew po przejĹ›ciu przez sieÄ‡ naczyĹ„ wĹ‚osowatych wraca ĹĽyĹ‚ami. Na przedramieniu: ĹĽyĹ‚y promieniowe i Ĺ‚okciowe (towarzyszÄ…ce tÄ™tnicom), ktĂłre Ĺ‚Ä…czÄ… siÄ™ w ĹĽyĹ‚y ramienne. Ĺ»yĹ‚y ramienne Ĺ‚Ä…czÄ… siÄ™ w jednÄ…, do ktĂłrej uchodzi krew z miÄ™Ĺ›nia trĂłjgĹ‚owego (ĹĽyĹ‚a ramienna gĹ‚Ä™boka). Ĺ»yĹ‚a ramienna przechodzi w ĹĽyĹ‚Ä™ pachowÄ…, nastÄ™pnie w podobojczykowÄ…. Ĺ»yĹ‚a podobojczykowa Ĺ‚Ä…czy siÄ™ z ĹĽyĹ‚Ä… szyjnÄ… wewnÄ™trznÄ…, tworzÄ…c ĹĽyĹ‚Ä™ ramienno-gĹ‚owowÄ…. Z poĹ‚Ä…czenia dwĂłch ĹĽyĹ‚ ramienno-gĹ‚owowych (prawej i lewej) powstaje ĹĽyĹ‚a gĹ‚Ăłwna gĂłrna, ktĂłra uchodzi do prawego przedsionka.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mechanizmy uĹ‚atwiajÄ…ce krÄ…ĹĽenie ĹĽylne",
        },
        {
          type: "paragraph",
          text: "Krew wraca do serca pod znacznie mniejszym ciĹ›nieniem, co utrudnia powrĂłt. W naczyniach ĹĽylnych wystÄ™pujÄ… zastawki dzielÄ…ce je na piÄ™tra â€” krew moĹĽe pĹ‚ynÄ…Ä‡ tylko do gĂłry (nie cofa siÄ™). Dodatkowo pracujÄ…ce miÄ™Ĺ›nie uciskajÄ… ĹĽyĹ‚y, wypychajÄ…c krew ku gĂłrze. W pobliĹĽu tÄ™tnic leĹĽÄ… dwie ĹĽyĹ‚y â€” uderzenia tÄ™tna na tÄ™tnicÄ™ nachodzÄ… na te ĹĽyĹ‚y, poruszajÄ…c krew. CiĹ›nienie krwi na tÄ™tnicy ramieniowej u zdrowych wynosi ok. 120/80 mmHg, po przejĹ›ciu przez naczynia wĹ‚osowate spada do kilkunastu mmHg.",
        },
        {
          type: "heading",
          level: 3,
          text: "Ĺ»yĹ‚y skĂłrne (termoregulacja)",
        },
        {
          type: "paragraph",
          text: "Nagrzana krew wraca ĹĽyĹ‚ami gĹ‚Ä™bokimi oraz powierzchownymi (skĂłrnymi). Ĺ»yĹ‚y skĂłrne przedramienia: ĹĽyĹ‚a odĹ‚okciowa (uchodzi do ĹĽyĹ‚y ramiennej) i ĹĽyĹ‚a odpromieniowa / boczna (uchodzi do ĹĽyĹ‚y pachowej). Krew doprowadzana do skĂłry peĹ‚ni funkcjÄ™ termoregulacyjnÄ….",
        },
      ],
      recallQuestions: [
        {
          id: "cr-10",
          question: "WymieĹ„ peĹ‚nÄ… drogÄ™ tÄ™tniczÄ… od lewej komory do prawej rÄ™ki.",
          answer: "Lewa komora â†’ aorta wstÄ™pujÄ…ca â†’ Ĺ‚uk aorty â†’ pieĹ„ ramienno-gĹ‚owowy â†’ tÄ™tnica podobojczykowa prawa â†’ tÄ™tnica pachowa â†’ tÄ™tnica ramienna â†’ tÄ™tnica promieniowa i tÄ™tnica Ĺ‚okciowa.",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-11",
          question: "Ile naczyĹ„ odchodzi od Ĺ‚uku aorty? WymieĹ„ je w kolejnoĹ›ci.",
          answer: "Trzy: (1) pieĹ„ ramienno-gĹ‚owowy, (2) tÄ™tnica szyjna wspĂłlna lewa, (3) tÄ™tnica podobojczykowa lewa.",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-12",
          question: "Jakie mechanizmy uĹ‚atwiajÄ… przepĹ‚yw krwi ĹĽylnej w koĹ„czynach?",
          answer: "Zastawki ĹĽylne (dzielÄ… na piÄ™tra, zapobiegajÄ… cofaniu), ucisk miÄ™Ĺ›ni, ucisk sÄ…siednich tÄ™tnic (tÄ™tno wprawia krew w ruch).",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-13",
          question: "Z poĹ‚Ä…czenia ktĂłĹĽyĹ‚ powstaje ĹĽyĹ‚a gĹ‚Ăłwna gĂłrna?",
          answer: "Z poĹ‚Ä…czenia ĹĽyĹ‚y ramienno-gĹ‚owowej prawej i lewej.",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-14",
          question: "Jakie dwie gĹ‚Ăłwne tÄ™tnice zaopatrujÄ… przedramiÄ™?",
          answer: "TÄ™tnica promieniowa (bocznie, po stronie koĹ›ci promieniowej) i tÄ™tnica Ĺ‚okciowa (przyĹ›rodkowo).",
          examRef: "WykĹ‚ad",
        },
      ],
    },
    {
      id: "uklad-oddechowy",
      title: "UkĹ‚ad oddechowy",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Droga powietrza oddechowego",
        },
        {
          type: "paragraph",
          text: "Powietrze dochodzi do pĹ‚uc nastÄ™pujÄ…cÄ… drogÄ…: jama nosowa â†’ gardĹ‚o â†’ krtaĹ„ â†’ tchawica â†’ oskrzela â†’ pĹ‚uca. Jama nosowa dzieli siÄ™ na przedsionek (pokryty skĂłrÄ… z wĹ‚osami), jamÄ™ wĹ‚aĹ›ciwÄ… (podzielonÄ… maĹ‚ĹĽowinami nosowymi: gĂłrnÄ…, Ĺ›rodkowÄ… i dolnÄ…) i koĹ„czy siÄ™ nozdrzami tylnymi.",
        },
        {
          type: "paragraph",
          text: "GardĹ‚o dzieli siÄ™ na trzy czÄ™Ĺ›ci: nosowÄ… (sÄ…siadujÄ…cÄ… z jamÄ… nosowÄ…), ustnÄ… (sÄ…siadujÄ…cÄ… z jamÄ… ustnÄ…) i krtaniowÄ… (sÄ…siadujÄ…cÄ… z krtaniÄ…). GardĹ‚o koĹ„czy siÄ™ na dolnej krawÄ™dzi chrzÄ…stki pierĹ›cieniowatej, ktĂłra jest granicÄ… miÄ™dzy krtaniÄ… a tchawicÄ… i miÄ™dzy gardĹ‚em a przeĹ‚ykiem.",
        },
        {
          type: "paragraph",
          text: "KrtaĹ„: powietrze wchodzi przez przedsionek krtani, ktĂłry jest oddzielony od gĹ‚oĹ›ni (jamy wĹ‚aĹ›ciwej) faĹ‚dem przedsionka. GĹ‚oĹ›nia jest oddzielona od jamy podgĹ‚oĹ›niowej faĹ‚dem gĹ‚osowym. NagĹ‚oĹ›nia (chrzÄ…stka nagĹ‚oĹ›niowa) zamyka wejĹ›cie do krtani podczas poĹ‚ykania â€” jÄ™zyk naciska na nagĹ‚oĹ›niÄ™, a miÄ™Ĺ›nie nadgnykowe unoszÄ… krtaĹ„.",
        },
        {
          type: "paragraph",
          text: "PrzeĹ‚yk jest caĹ‚kowicie obkurczonÄ… szczelinÄ… (nie otwartym kanaĹ‚em). Pokarm jest aktywnie wpychany przez miÄ™Ĺ›nie zwieracze gardĹ‚a, a nastÄ™pnie perystaltyka przesuwa go w kierunku ĹĽoĹ‚Ä…dka.",
        },
        {
          type: "paragraph",
          text: "Najlepiej wyczuwalnÄ… chrzÄ…stkÄ… krtani jest chrzÄ…stka tarczowata (cartilago thyroidea) â€” pytanie nr 9. Tworzy ona tzw. wypukĹ‚oĹ›Ä‡ krtaniowÄ… ('jabĹ‚ko Adama').",
        },
        {
          type: "heading",
          level: 3,
          text: "Mechanika oddychania",
        },
        {
          type: "paragraph",
          text: "GĹ‚Ăłwnym miÄ™Ĺ›niem wydechowym jest miÄ™sieĹ„ miÄ™dzyĹĽebrowy wewnÄ™trzny (Q23). Przepona (diaphragma) jest gĹ‚Ăłwnym miÄ™Ĺ›niem wdechowym. PĹ‚uca zbudowane sÄ… z pÄ™cherzykĂłw pĹ‚ucnych, gdzie zachodzi wymiana gazowa.",
        },
        {
          type: "heading",
          level: 3,
          text: "Topografia klatki piersiowej",
        },
        {
          type: "paragraph",
          text: "Klatka piersiowa ograniczona jest od gĂłry obojczykami, od doĹ‚u przeponÄ…. WypeĹ‚niona jest po bokach przez pĹ‚uca, a centralnie przez serce (w Ĺ›rĂłdpiersiu). Prawe pĹ‚uco sÄ…siaduje z sercem i przeĹ‚ykiem, lewe pĹ‚uco â€” z sercem i aortÄ…. Serce od przodu sÄ…siaduje gĹ‚Ăłwnie z pĹ‚ucami, czÄ™Ĺ›ciowo z mostkiem i ĹĽebrami, od tyĹ‚u bezpoĹ›rednio z przeĹ‚ykiem (za nim aorta), po bokach z pĹ‚ucami.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-5",
          question: "Jaka jest najlepiej wyczuwalna chrzÄ…stka krtani?",
          answer: "ChrzÄ…stka tarczowata (cartilago thyroidea).",
          examRef: "Q9",
        },
        {
          id: "cr-6",
          question: "Podaj gĹ‚Ăłwny miÄ™sieĹ„ wydechowy i gĹ‚Ăłwny miÄ™sieĹ„ wdechowy.",
          answer: "Wydech: miÄ™sieĹ„ miÄ™dzyĹĽebrowy wewnÄ™trzny. Wdech: przepona (diaphragma).",
          examRef: "Q23",
        },
        {
          id: "cr-15",
          question: "WymieĹ„ kolejno wszystkie czÄ™Ĺ›ci gardĹ‚a (od gĂłry do doĹ‚u).",
          answer: "Nosowa (czÄ™Ĺ›Ä‡ gĂłrna), ustna (czÄ™Ĺ›Ä‡ Ĺ›rodkowa), krtaniowa (czÄ™Ĺ›Ä‡ dolna).",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-16",
          question: "Jaka chrzÄ…stka zamyka wejĹ›cie do krtani podczas poĹ‚ykania?",
          answer: "ChrzÄ…stka nagĹ‚oĹ›niowa (nagĹ‚oĹ›nia).",
          examRef: "WykĹ‚ad",
        },
        {
          id: "cr-17",
          question: "Jakie narzÄ…dy sÄ… bezpoĹ›rednim sÄ…siadem serca od tyĹ‚u?",
          answer: "BezpoĹ›rednio przeĹ‚yk, za nim aorta.",
          examRef: "WykĹ‚ad",
        },
      ],
    },
  ],
};
