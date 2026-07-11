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
  ],
};
