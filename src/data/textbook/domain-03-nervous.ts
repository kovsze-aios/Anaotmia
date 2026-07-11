import type { TextbookDomain } from "@/types/textbook";

export const nervous: TextbookDomain = {
  id: "nervous",
  title: "Układ Nerwowy",
  shortTitle: "Nerwowy",
  icon: "🧠",
  sections: [
    {
      id: "wprowadzenie-nerwowy",
      title: "Wprowadzenie do układu nerwowego",
      content: [
        {
          type: "paragraph",
          text: "Ze światła cewy nerwowej powstają komory mózgu (pytanie nr 3). Cewa nerwowa jest zawiązkiem ośrodkowego układu nerwowego, a jej światło przekształca się w układ komorowy mózgu i kanał środkowy rdzenia kręgowego.",
        },
        {
          type: "paragraph",
          text: "Korowy ośrodek czucia leży w kresomózgowiu (telencephalon) — pytanie nr 2. Kora mózgowa (kresomózgowie) zawiera ośrodki czuciowe w płacie ciemieniowym.",
        },
        {
          type: "paragraph",
          text: "Układ nerwowy dzieli się na ośrodkowy układ nerwowy (mózgowie i rdzeń kręgowy) oraz obwodowy układ nerwowy (nerwy czaszkowe i rdzeniowe).",
        },
      ],
      recallQuestions: [
        {
          id: "ner-1",
          question: "Ze światła cewy nerwowej powstają: nerwy czaszkowe, komory mózgu, nerwy rdzeniowe czy korowe ośrodki czucia?",
          answer: "Komory mózgu.",
          examRef: "Q3",
        },
        {
          id: "ner-2",
          question: "Gdzie leży korowy ośrodek czucia?",
          answer: "W kresomózgowiu (telencephalon) — płat ciemieniowy kory mózgowej.",
          examRef: "Q2",
        },
      ],
    },
    {
      id: "nerwy-czaszkowe",
      title: "Nerwy czaszkowe",
      content: [
        {
          type: "paragraph",
          text: "Jeżeli bolą dolne siekacze, informacja ta dociera do korowego ośrodka czucia włóknami nerwu żuchwowego (V3 — gałąź nerwu trójdzielnego) — pytanie nr 15.",
        },
        {
          type: "paragraph",
          text: "Nerw trójdzielny (V) dzieli się na trzy gałęzie: oczną (V1), szczękową (V2) i żuchwową (V3). Nerw żuchwowy unerwia czuciowo dolną część twarzy, w tym dolne zęby.",
        },
      ],
      recallQuestions: [
        {
          id: "ner-3",
          question: "Którym nerwem informacja o bólu dolnych siekaczy dociera do ośrodka czucia?",
          answer: "Nerwem żuchwowym (V3 — gałąź nerwu trójdzielnego).",
          examRef: "Q15",
        },
      ],
    },
    {
      id: "drogi-nerwowe",
      title: "Drogi nerwowe i sploty",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Droga korowo-rdzeniowa",
        },
        {
          type: "paragraph",
          text: "Impulsy pobudzające mięśnie do wyprostowania stopy biegną drogą korowo-rdzeniową (tractus corticospinalis) — pytanie nr 14. Jest to główna droga ruchowa (piramidowa) łącząca korę mózgową z motoneuronami rdzenia kręgowego.",
        },
        {
          type: "heading",
          level: 3,
          text: "Splot ramienny",
        },
        {
          type: "paragraph",
          text: "Nerw promieniowy pochodzi ze splotu ramiennego (pytanie otwarte nr 44). Splot ramienny tworzą gałęzie przednie nerwów rdzeniowych C5-Th1. Ze splotu ramiennego pochodzą nerwy unerwiające kończynę górną: pachowy, promieniowy, pośrodkowy, łokciowy, mięśniowo-skórny.",
        },
        {
          type: "paragraph",
          text: "Podczas zwichnięcia stawu ramiennego najłatwiej uszkodzić nerw pachowy (pytanie nr 1).",
        },
      ],
      recallQuestions: [
        {
          id: "ner-4",
          question: "Którą drogą biegną impulsy pobudzające mięśnie do wyprostowania stopy?",
          answer: "Drogą korowo-rdzeniową (tractus corticospinalis).",
          examRef: "Q14",
        },
        {
          id: "ner-5",
          question: "Nerw promieniowy — z jakiego splotu pochodzi?",
          answer: "Ze splotu ramiennego (plexus brachialis).",
          examRef: "Q44",
        },
        {
          id: "ner-6",
          question: "Wymień nerwy pochodzące ze splotu ramiennego.",
          answer: "Nerwy: pachowy, promieniowy, pośrodkowy, łokciowy, mięśniowo-skórny, oraz nerwy skórne przyśrodkowe ramienia i przedramienia.",
          examRef: "Q1",
        },
      ],
    },
  ],
};
