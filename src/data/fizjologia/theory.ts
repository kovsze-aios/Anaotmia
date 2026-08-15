import { TextbookDomain } from "../../server/models/textbook";

export const fizjologiaDomain: TextbookDomain = {
  id: "fizjologia",
  title: "Fizjologia",
  shortTitle: "Fizjologia",
  sections: [
    {
      id: "physio-intro",
      title: "Wprowadzenie do Fizjologii",
      summary: "Fizjologia bada __________ (funkcje \u017cyciowe).",
      academic_detail: "Fizjologia to nauka o funkcjonowaniu organizm\u00f3w \u017cywych.",
      content: [
        {
          type: "paragraph",
          text: "Podstawy fizjologii."
        }
      ],
      recallQuestions: [],
    },
  ]
};
