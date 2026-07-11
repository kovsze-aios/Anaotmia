import type { TextbookDomain } from "@/types/textbook";

export const urinaryReproductive: TextbookDomain = {
  id: "urinary-reproductive",
  title: "Układ Moczowo-Płciowy",
  shortTitle: "Moczowo-płciowy",
  icon: "🫘",
  sections: [
    {
      id: "uklad-moczowy",
      title: "Układ moczowy",
      content: [
        {
          type: "paragraph",
          text: "Podstawową jednostką anatomiczną nerki jest nefron (pytanie nr 11). Każda nerka zawiera około miliona nefronów, które filtrują krew i produkują mocz.",
        },
        {
          type: "paragraph",
          text: "Drogi moczowe obejmują: nerki, moczowody, pęcherz moczowy i cewkę moczową. Moczowody łączą nerki z pęcherzem moczowym.",
        },
        {
          type: "table",
          headers: ["Element", "Funkcja"],
          rows: [
            ["Nerka", "Filtracja krwi, produkcja moczu"],
            ["Nefron", "Podstawowa jednostka funkcjonalna nerki"],
            ["Moczowód", "Przewodzi mocz z nerki do pęcherza"],
            ["Pęcherz moczowy", "Magazynuje mocz"],
            ["Cewka moczowa", "Wyprowadza mocz na zewnątrz"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "ur-1",
          question: "Jaka jest podstawowa jednostka anatomiczna nerki?",
          answer: "Nefron.",
          examRef: "Q11",
        },
      ],
    },
    {
      id: "uklad-rodny-meski",
      title: "Męski układ rozrodczy",
      content: [
        {
          type: "paragraph",
          text: "Przewód wytryskowy (ductus ejaculatorius) uchodzi na wzgórku nasiennym (colliculus seminalis) w cewce moczowej (części sterczowej) — pytanie nr 13.",
        },
        {
          type: "paragraph",
          text: "Męski układ rozrodczy obejmuje: jądra, najądrza, nasieniowody, przewody wytryskowe, gruczoł krokowy (prostata), pęcherzyki nasienne, cewkę moczową i prącie.",
        },
      ],
      recallQuestions: [
        {
          id: "ur-2",
          question: "Gdzie uchodzi przewód wytryskowy?",
          answer: "Na wzgórku nasiennym w cewce moczowej (część sterczowa).",
          examRef: "Q13",
        },
      ],
    },
    {
      id: "uklad-rodny-zenski",
      title: "Żeński układ rozrodczy",
      content: [
        {
          type: "paragraph",
          text: "Prawidłowe położenie macicy to przodopochylenie (anteversio) i przodozgięcie (anteflexio) — pytanie nr 10.",
        },
        {
          type: "paragraph",
          text: "U kobiet macica od przodu sąsiaduje z pęcherzem moczowym, a od dołu przechodzi w pochwę (pytanie otwarte nr 42).",
        },
        {
          type: "paragraph",
          text: "Żeński układ rozrodczy obejmuje: jajniki, jajowody, macicę, pochwę i srom. Jajniki produkują komórki jajowe i hormony (estrogen, progesteron).",
        },
      ],
      recallQuestions: [
        {
          id: "ur-3",
          question: "Jakie jest prawidłowe położenie macicy?",
          answer: "Przodopochylenie (anteversio) i przodozgięcie (anteflexio).",
          examRef: "Q10",
        },
        {
          id: "ur-4",
          question: "U kobiet macica od przodu sąsiaduje z jakim narządem, a od dołu w co przechodzi?",
          answer: "Od przodu z pęcherzem moczowym, od dołu przechodzi w pochwę.",
          examRef: "Q42",
        },
      ],
    },
  ],
};
