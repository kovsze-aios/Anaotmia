import type { TextbookDomain } from "@/types/textbook";

export const sensory: TextbookDomain = {
  id: "sensory",
  title: "Narządy Zmysłów",
  shortTitle: "Zmysły",
  icon: "👁️",
  sections: [
    {
      id: "narzad-wzroku",
      title: "Narząd wzroku — oko",
      content: [
        {
          type: "paragraph",
          text: "Elementem, który nie załamuje promienia świetlnego, jest źrenica (pupil) — pytanie nr 16. Źrenica jest otworem w tęczówce, który reguluje ilość światła wpadającego do oka, ale sama nie załamuje światła.",
        },
        {
          type: "paragraph",
          text: "Elementy załamujące promienie świetlne w oku to: rogówka (najsilniej załamuje), ciecz wodnista (w komorze przedniej), soczewka (zmienia kształt przy akomodacji) oraz ciało szkliste (w komorze tylnej).",
        },
        {
          type: "table",
          headers: ["Element", "Funkcja", "Załamuje światło?"],
          rows: [
            ["Rogówka", "Ochrona, załamanie światła", "Tak (najsilniej)"],
            ["Ciecz wodnista", "Odżywianie, ciśnienie", "Tak"],
            ["Soczewka", "Akomodacja, ogniskowanie", "Tak"],
            ["Ciało szkliste", "Wypełnia gałkę oczną", "Tak"],
            ["Źrenica", "Regulacja ilości światła", "Nie"],
            ["Tęczówka", "Regulacja średnicy źrenicy", "Nie"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "sen-1",
          question: "Który element oka nie załamuje promieni świetlnych?",
          answer: "Źrenica (pupil).",
          examRef: "Q16",
        },
        {
          id: "sen-2",
          question: "Wymień elementy załamujące promienie świetlne w oku.",
          answer: "Rogówka, ciecz wodnista, soczewka i ciało szkliste.",
          examRef: "Q16",
        },
      ],
    },
    {
      id: "narzad-sluchu",
      title: "Narząd słuchu — ucho",
      content: [
        {
          type: "paragraph",
          text: "W uchu środkowym znajduje się powietrze (żadna z wymienionych — przychłonka, śródchłonka, limfa — nie znajduje się w uchu środkowym) — pytanie nr 17.",
        },
        {
          type: "paragraph",
          text: "Ucho dzieli się na trzy części: zewnętrzną (małżowina, przewód słuchowy zewnętrzny), środkową (jama bębenkowa z kosteczkami słuchowymi: młoteczek, kowadełko, strzemiączko) i wewnętrzną (ślimak, kanały półkoliste — zawierające przychłonkę i śródchłonkę).",
        },
        {
          type: "table",
          headers: ["Część ucha", "Elementy", "Zawartość"],
          rows: [
            ["Ucho zewnętrzne", "Małżowina, przewód słuchowy", "Powietrze"],
            ["Ucho środkowe", "Jama bębenkowa, kosteczki", "Powietrze"],
            ["Ucho wewnętrzne", "Ślimak, kanały półkoliste", "Przychłonka, śródchłonka"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "sen-3",
          question: "Co znajduje się w uchu środkowym — przychłonka, śródchłonka, limfa, czy żadna z tych?",
          answer: "Żadna — w uchu środkowym znajduje się powietrze.",
          examRef: "Q17",
        },
        {
          id: "sen-4",
          question: "Wymień trzy części ucha i ich zawartość.",
          answer: "Zewnętrzne (powietrze), środkowe (powietrze + kosteczki), wewnętrzne (przychłonka + śródchłonka).",
          examRef: "Q17",
        },
      ],
    },
  ],
};
