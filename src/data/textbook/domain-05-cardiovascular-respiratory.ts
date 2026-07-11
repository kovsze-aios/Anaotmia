import type { TextbookDomain } from "@/types/textbook";

export const cardiovascularRespiratory: TextbookDomain = {
  id: "cardiovascular-respiratory",
  title: "Układ Krążenia i Oddechowy",
  shortTitle: "Krążenie/oddech",
  icon: "❤️",
  sections: [
    {
      id: "serce",
      title: "Serce",
      content: [
        {
          type: "paragraph",
          text: "Mięsień sercowy (myocardium) jest częścią śródsierdzia — warstwy środkowej ściany serca (pytanie nr 7). Ściana serca zbudowana jest z trzech warstw: nasierdzia (zewnętrzna), śródsierdzia (mięsień sercowy) i wsierdzia (wewnętrzna).",
        },
        {
          type: "table",
          headers: ["Warstwa serca", "Opis"],
          rows: [
            ["Nasierdzie (epicardium)", "Zewnętrzna warstwa, pokrywa serce"],
            ["Śródsierdzie (myocardium)", "Mięsień sercowy — warstwa środkowa"],
            ["Wsierdzie (endocardium)", "Wewnętrzna warstwa, wyściela jamy serca"],
            ["Osierdzie (pericardium)", "Worek osierdziowy otaczający serce"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "cr-1",
          question: "Mięsień sercowy jest częścią której warstwy serca?",
          answer: "Śródsierdzia (myocardium).",
          examRef: "Q7",
        },
      ],
    },
    {
      id: "naczynia-krwionosne",
      title: "Naczynia krwionośne",
      content: [
        {
          type: "paragraph",
          text: "Krew bogatą w tlen (utlenowaną) do płuc prowadzą gałęzie oskrzelowe (bronchial branches) — pytanie nr 5. Tętnice płucne prowadzą krew odtlenowaną do płuc, a żyły płucne prowadzą krew utlenowaną z płuc do serca.",
        },
        {
          type: "heading",
          level: 3,
          text: "Żyła wrotna",
        },
        {
          type: "paragraph",
          text: "Żyła wrotna nie zbiera krwi z nerki lewej (pytanie nr 6). Żyła wrotna (vena portae) zbiera krew z przewodu pokarmowego (żołądek, jelita), trzustki, śledziony i pęcherzyka żółciowego i prowadzi ją do wątroby. Nie zbiera krwi z nerek.",
        },
        {
          type: "paragraph",
          text: "Sieć dziwna żylno-żylna (rete mirabile) występuje w wątrobie (pytanie nr 12). W wątrobie krew z żyły wrotnej rozpada się na sieć naczyń włosowatych (sinusoidy), które następnie zbiegają się w żyły wątrobowe.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-2",
          question: "Krew bogatą w tlen do płuc prowadzą: gałęzie oskrzelowe, tętnice płucne, żyły płucne czy tętnice wieńcowe?",
          answer: "Gałęzie oskrzelowe.",
          examRef: "Q5",
        },
        {
          id: "cr-3",
          question: "Żyła wrotna nie zbiera krwi z którego narządu?",
          answer: "Z nerki lewej.",
          examRef: "Q6",
        },
        {
          id: "cr-4",
          question: "Gdzie występuje sieć dziwna żylno-żylna (rete mirabile)?",
          answer: "W wątrobie.",
          examRef: "Q12",
        },
      ],
    },
    {
      id: "uklad-oddechowy",
      title: "Układ oddechowy",
      content: [
        {
          type: "paragraph",
          text: "Najlepiej wyczuwalną chrząstką krtani jest chrząstka tarczowata (cartilago thyroidea) — pytanie nr 9. Tworzy ona tzw. wypukłość krtaniową („jabłko Adama”).",
        },
        {
          type: "paragraph",
          text: "Drogi oddechowe dzielą się na górne (jama nosowa, gardło) i dolne (krtań, tchawica, oskrzela). Płuca zbudowane są z pęcherzyków płucnych, gdzie zachodzi wymiana gazowa.",
        },
        {
          type: "paragraph",
          text: "Głównym mięśniem wydechowym jest mięsień międzyżebrowy wewnętrzny (Q23). Przepona (diaphragma) jest głównym mięśniem wdechowym.",
        },
      ],
      recallQuestions: [
        {
          id: "cr-5",
          question: "Jaka jest najlepiej wyczuwalna chrząstka krtani?",
          answer: "Chrząstka tarczowata (cartilago thyroidea).",
          examRef: "Q9",
        },
        {
          id: "cr-6",
          question: "Podaj główny mięsień wydechowy i główny mięsień wdechowy.",
          answer: "Wydech: mięsień międzyżebrowy wewnętrzny. Wdech: przepona (diaphragma).",
          examRef: "Q23",
        },
      ],
    },
  ],
};
