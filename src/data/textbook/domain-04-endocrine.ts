import type { TextbookDomain } from "@/types/textbook";

export const endocrine: TextbookDomain = {
  id: "endocrine",
  title: "Układ Dokrewny",
  shortTitle: "Dokrewny",
  icon: "🔬",
  sections: [
    {
      id: "gruczoly-dokrewne",
      title: "Gruczoły dokrewne",
      content: [
        {
          type: "paragraph",
          text: "Największym gruczołem dokrewnym jest tarczyca (glandula thyroidea) — pytanie nr 4. Znajduje się w przedniej części szyi, na wysokości chrząstki tarczowatej krtani.",
        },
        {
          type: "paragraph",
          text: "Za prawidłowy wzrost i dojrzewanie komórek nerwowych głównie odpowiedzialny jest hormon wytwarzany przez tarczycę (tyroksyna — T4 i trójjodotyronina — T3) — pytanie nr 8. Hormony tarczycy są niezbędne dla prawidłowego rozwoju ośrodkowego układu nerwowego u płodu i w okresie wczesnego dzieciństwa.",
        },
      ],
      recallQuestions: [
        {
          id: "end-1",
          question: "Jaki jest największy gruczoł dokrewny?",
          answer: "Tarczyca (glandula thyroidea).",
          examRef: "Q4",
        },
        {
          id: "end-2",
          question: "Który gruczoł dokrewny wytwarza hormon odpowiedzialny za wzrost i dojrzewanie komórek nerwowych?",
          answer: "Tarczyca — produkuje tyroksynę (T4) i trójjodotyroninę (T3).",
          examRef: "Q8",
        },
      ],
    },
    {
      id: "hormony",
      title: "Przegląd hormonów",
      content: [
        {
          type: "paragraph",
          text: "Główne gruczoły dokrewne człowieka to: podwzgórze, przysadka mózgowa, szyszynka, tarczyca, przytarczyce, grasica, nadnercza, trzustka (część wewnątrzwydzielnicza — wyspy Langerhansa) oraz gonady (jajniki i jądra).",
        },
        {
          type: "table",
          headers: ["Gruczoł", "Hormon", "Funkcja"],
          rows: [
            ["Podwzgórze", "Liberyny, statyny", "Regulacja przysadki"],
            ["Przysadka", "GH, TSH, ACTH, FSH, LH, PRL", "Wzrost, regulacja tarczycy, nadnerczy, gonad"],
            ["Tarczyca", "Tyroksyna (T4), T3", "Wzrost, metabolizm, rozwój OUN"],
            ["Przytarczyce", "Parathormon (PTH)", "Gospodarka wapniowo-fosforanowa"],
            ["Nadnercza (kora)", "Kortyzol, aldosteron", "Stres, gospodarka wodno-elektrolitowa"],
            ["Nadnercza (rdzeń)", "Adrenalina, noradrenalina", "Reakcja walki lub ucieczki"],
            ["Trzustka", "Insulina, glukagon", "Gospodarka glukozą"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "end-3",
          question: "Wymień gruczoły dokrewne człowieka.",
          answer: "Podwzgórze, przysadka, szyszynka, tarczyca, przytarczyce, grasica, nadnercza, trzustka (wyspy Langerhansa), gonady (jajniki/jądra).",
          examRef: "Q-wiedza",
        },
      ],
    },
    {
      id: "hormony-szczegoly",
      title: "Hormony — szczegółowe mechanizmy działania",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Oś podwzgórze-przysadka-narządy docelowe",
        },
        {
          type: "paragraph",
          text: "Podwzgórze (hypothalamus) jest centralnym integratorem układu hormonalnego i nerwowego. Jego neurony neurosekrecyjne produkują hormony uwalniające (liberyny) i hamujące (statyny), które przez naczynia wrotne podwzgórzowo-przysadkowe docierają do przedniego płata przysadki. Do najważniejszych należą: TRH (tyreoliberyna — pobudza wydzielanie TSH), CRH (kortykoliberyna — pobudza ACTH), GnRH (gonadoliberyna — pobudza FSH i LH), GHRH (somatoliberyna — pobudza GH), somatostatyna (hamuje wydzielanie GH i TSH), dopamina (hamuje prolaktynę). Oksytocyna i ADH (wazopresyna) są syntetyzowane w podwzgórzu (jądro nadwzrokowe — głównie ADH, jądro przykomorowe — głównie oksytocyna), transportowane aksonalnie do tylnego płata przysadki, gdzie są magazynowane i uwalniane.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mechanizmy działania hormonów",
        },
        {
          type: "paragraph",
          text: "Hormony działają przez receptory: (a) Hormony białkowe i peptydowe oraz katecholaminy — wiążą się z receptorami błonowymi (GPCR — receptory sprzężone z białkiem G, np. dla adrenaliny, glukagonu, TSH, FSH, LH, ACTH; lub receptory o aktywności kinazy tyrozynowej, np. dla insuliny i IGF-1). Aktywują one wewnątrzkomórkowe kaskady sygnałowe (cAMP, IP3/DAG, kinazy MAP) prowadzące do fosforylacji białek i zmiany aktywności enzymów. (b) Hormony steroidowe (kortyzol, aldosteron, testosteron, estrogeny, progesteron) i hormony tarczycy (T3, T4) — są lipofilne, przechodzą przez błonę i wiążą się z receptorami wewnątrzkomórkowymi (cytoplazmatycznymi lub jądrowymi). Kompleks hormon-receptor działa jako czynnik transkrypcyjny, regulując ekspresję genów.",
        },
        {
          type: "heading",
          level: 3,
          text: "Tarczyca — szczegóły syntezy hormonów",
        },
        {
          type: "paragraph",
          text: "Tarczyca (glandula thyroidea) produkuje tyroksynę (T4, 80%) i trójjodotyroninę (T3, 20% — forma aktywna, 4× silniejsza od T4). Synteza wymaga jodu (I⁻) — jod jest aktywnie wychwytywany z krwi przez symporter Na⁺/I⁻ (NIS). W tyreoglobulinie (Tg) zachodzi jodowanie reszt tyrozylowych (organifikacja jodu) katalizowane przez peroksydazę tarczycową (TPO), tworząc monojodotyrozynę (MIT) i dijodotyrozynę (DIT). Sprzęganie: MIT + DIT → T3; DIT + DIT → T4. Hormony są magazynowane w koloidzie pęcherzyków tarczycowych (jedyne hormony magazynowane pozakomórkowo!). TSH stymuluje wszystkie etapy syntezy i uwalniania. Kalcytonina (produkowana przez komórki C/tzw. przypecherzykowe tarczycy) obniża poziom Ca²⁺ we krwi (antagonista parathormonu).",
        },
        {
          type: "heading",
          level: 3,
          text: "Nadnercza — kora i rdzeń",
        },
        {
          type: "paragraph",
          text: "Nadnercza składają się z kory (zewnętrzna, pochodzenia mezodermalnego, 80% masy) i rdzenia (wewnętrzny, pochodzenia neuroektodermalnego — zmodyfikowany zwój współczulny). Kora dzieli się na trzy warstwy: (1) Warstwa kłębkowata (zona glomerulosa) — produkuje mineralokortykoidy (aldosteron), regulowane przez układ RAA (renina-angiotensyna-aldosteron) i K⁺. Aldosteron zwiększa resorpcję Na⁺ i wydalanie K⁺ w nerkach. (2) Warstwa pasmowata (zona fasciculata) — produkuje glikokortykoidy (kortyzol), regulowane przez ACTH. Kortyzol podnosi poziom glukozy (glukoneogeneza), hamuje odpowiedź immunologiczną i zapalną, wspomaga lipolizę i proteolizę. (3) Warstwa siatkowata (zona reticularis) — produkuje androgeny nadnerczowe (DHEA, androstendion). Rdzeń nadnerczy produkuje katecholaminy: adrenalinę (80%) i noradrenalinę (20%), uwalniane w odpowiedzi na stres (reakcja walki lub ucieczki).",
        },
        {
          type: "heading",
          level: 3,
          text: "Regulacja wapniowo-fosforanowa",
        },
        {
          type: "paragraph",
          text: "Parathormon (PTH) z przytarczyc zwiększa poziom Ca²⁺ we krwi przez: (a) zwiększenie resorpcji kości (aktywacja osteoklastów pośrednio przez osteoblasty RANKL), (b) zwiększenie wchłaniania zwrotnego Ca²⁺ w kanalikach nerkowych, (c) aktywację witaminy D (1,25(OH)₂D₃ — kalcytriol), która zwiększa wchłanianie Ca²⁺ z jelit. PTH obniża poziom fosforanów (zwiększa ich wydalanie w nerkach). Kalcytonina (z tarczycy) obniża poziom Ca²⁺. Witamina D₃ (cholekalcyferol) powstaje w skórze pod wpływem UV, następnie jest hydroksylowana w wątrobie (25-OH-D₃) i nerkach (1,25(OH)₂D₃ — aktywny kalcytriol).",
        },
      ],
      recallQuestions: [
        {
          id: "end-4",
          question: "Jakie są trzy warstwy kory nadnerczy i jakie hormony produkują?",
          answer: "Kłębkowata (aldosteron — mineralokortykoidy), pasmowata (kortyzol — glikokortykoidy), siatkowata (androgeny — DHEA).",
          examRef: "",
        },
        {
          id: "end-5",
          question: "Opisz mechanizm działania parathormonu na gospodarkę wapniowo-fosforanową.",
          answer: "PTH zwiększa Ca²⁺ we krwi: (1) resorpcja kości (aktywacja osteoklastów przez RANKL), (2) zwrotne wchłanianie Ca²⁺ w nerkach, (3) aktywacja witaminy D → zwiększone wchłanianie Ca²⁺ z jelit. PTH zwiększa wydalanie fosforanów.",
          examRef: "",
        },
        {
          id: "end-6",
          question: "Jaka jest różnica w mechanizmie działania hormonów białkowych i steroidowych?",
          answer: "Hormony białkowe/peptydowe — receptory błonowe (GPCR, kinazy tyrozynowe) → kaskady sygnałowe → fosforylacja białek. Hormony steroidowe i tarczycowe — przechodzą przez błonę → receptory wewnątrzkomórkowe → regulacja ekspresji genów (czynnik transkrypcyjny).",
          examRef: "",
        },
      ],
    },
  ],
};
