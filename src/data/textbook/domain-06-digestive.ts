import type { TextbookDomain } from "@/types/textbook";

export const digestive: TextbookDomain = {
  id: "digestive",
  title: "Układ Pokarmowy",
  shortTitle: "Pokarmowy",
  icon: "🍽️",
  sections: [
    {
      id: "przewod-pokarmowy",
      title: "Przewód pokarmowy",
      content: [
        {
          type: "paragraph",
          text: "Przewód pokarmowy człowieka obejmuje: jamę ustną, gardło, przełyk, żołądek, jelito cienkie (dwunastnica, jelito czcze, jelito kręte), jelito grube (kątnica, okrężnica, esica, odbytnica) oraz odbyt.",
        },
        {
          type: "paragraph",
          text: "Dwunastnica (duodenum) sąsiaduje z trzustką (pytanie nr 18). Jest to pierwszy odcinek jelita cienkiego, o długości około 25-30 cm. Do dwunastnicy uchodzą przewody trzustkowy i żółciowy wspólny.",
        },
        {
          type: "paragraph",
          text: "Kolejno odcinki jelita cienkiego (pytanie otwarte nr 43): dwunastnica, jelito czcze (jejunum), jelito kręte (ileum).",
        },
      ],
      recallQuestions: [
        {
          id: "dig-1",
          question: "Z czym sąsiaduje dwunastnica?",
          answer: "Z trzustką.",
          examRef: "Q18",
        },
        {
          id: "dig-2",
          question: "Wymień kolejno odcinki jelita cienkiego.",
          answer: "Dwunastnica (duodenum), jelito czcze (jejunum), jelito kręte (ileum).",
          examRef: "Q43",
        },
      ],
    },
    {
      id: "watroba-trzustka",
      title: "Wątroba i trzustka",
      content: [
        {
          type: "paragraph",
          text: "Wątroba jest największym gruczołem ciała (nie licząc tarczycy jako największego gruczołu dokrewnego). Pełni funkcje: detoksykacyjną, syntezy białek, magazynowania glikogenu, produkcji żółci.",
        },
        {
          type: "paragraph",
          text: "Sieć dziwna żylno-żylna (rete mirabile) występuje w wątrobie (pytanie nr 12). Żyła wrotna prowadzi krew z przewodu pokarmowego do wątroby, gdzie rozpada się na sinusoidy, a następnie krew zbiega się w żyły wątrobowe.",
        },
        {
          type: "paragraph",
          text: "Trzustka (pancreas) leży za żołądkiem, ma część zewnątrzwydzielniczą (produkcja enzymów trawiennych) i wewnątrzwydzielniczą (produkcja insuliny i glukagonu przez wyspy Langerhansa).",
        },
      ],
      recallQuestions: [
        {
          id: "dig-3",
          question: "Gdzie występuje sieć dziwna żylno-żylna w układzie pokarmowym?",
          answer: "W wątrobie (żyła wrotna → sinusoidy → żyły wątrobowe).",
          examRef: "Q12",
        },
      ],
    },
  ],
};
