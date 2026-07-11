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
      id: "istota-szara-biala",
      title: "Istota szara i istota biała",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Budowa tkanki nerwowej",
        },
        {
          type: "paragraph",
          text: "Tkanka nerwowa składa się z komórek nerwowych (neuronów) i komórek wspomagających glejowych. Same neurony tworzą sieć bardzo specyficznych rozgałęzień. Tkanka nerwowa występuje w postaci istoty szarej i istoty białej.",
        },
        {
          type: "heading",
          level: 3,
          text: "Istota szara — ośrodki nerwowe",
        },
        {
          type: "paragraph",
          text: "Komórka nerwowa jako całość jest koloru szarego. Istota szara to ciała komórek nerwowych (neuronów) z jądrami i organellami komórkowymi oraz z krótkimi dendrytami. Tam gdzie jest istota szara, tam są skupiska tworzące tzw. ośrodki nerwowe — mają one zdolność przetwarzania danych i bodźców bioelektrycznych.",
        },
        {
          type: "paragraph",
          text: "W mózgowiu istota szara może występować na powierzchni (kora — skupiska szare, ośrodki korowe związane ze świadomością) oraz wewnątrz (ośrodki podkorowe).",
        },
        {
          type: "heading",
          level: 3,
          text: "Istota biała — drogi nerwowe",
        },
        {
          type: "paragraph",
          text: "Kolor biały pochodzi od osłonki mielinowej (ciało tłuszczowe koloru białego), która otacza aksony (neuryty) — wypustki neuronów. Istota biała tworzy drogi nerwowe, które łączą ośrodki nerwowe.",
        },
        {
          type: "table",
          headers: ["Rodzaj", "Budowa", "Funkcja"],
          rows: [
            ["Istota szara", "Ciała komórek nerwowych, jądra, dendryty", "Ośrodki nerwowe — przetwarzanie informacji"],
            ["Istota biała", "Aksony (wypustki) otoczone mieliną", "Drogi nerwowe — łączenie ośrodków"],
          ],
        },
      ],
      recallQuestions: [
        {
          id: "ner-7",
          question: "Z czego zbudowana jest istota szara?",
          answer: "Z ciał komórek nerwowych (neuronów), jąder, organelli komórkowych i krótkich dendrytów.",
          examRef: "Wykład",
        },
        {
          id: "ner-8",
          question: "Czym jest istota biała i skąd bierze się jej kolor?",
          answer: "To wypustki neuronów (aksony) otoczone osłonką mielinową — tłuszczową, stąd biały kolor.",
          examRef: "Wykład",
        },
        {
          id: "ner-9",
          question: "Gdzie w mózgowiu występuje istota szara?",
          answer: "Na powierzchni (kora — ośrodki korowe) i wewnątrz (ośrodki podkorowe).",
          examRef: "Wykład",
        },
      ],
    },
    {
      id: "drogi-nerwowe",
      title: "Drogi nerwowe — klasyfikacja",
      content: [
        {
          type: "paragraph",
          text: "Istota biała tworzy drogi nerwowe, które łączą ośrodki nerwowe. Na przekroju poprzecznym mózgowia można wyróżnić trzy główne rodzaje dróg nerwowych.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi spoidłowe (commissural tracts)",
        },
        {
          type: "paragraph",
          text: "Łączą prawą półkulę mózgu z lewą. Największym spoidłem jest spoidło wielkie — ciało modzelowate (corpus callosum). Dzięki tym drogom dwuczęściowość mózgu jest całością funkcjonalną.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi kojarzeniowe (association tracts)",
        },
        {
          type: "paragraph",
          text: "Biegną od płata przedniego do płata tylnego w obrębie tej samej półkuli. Nigdy nie przechodzą na drugą stronę — tym różnią się od dróg spoidłowych. Odpowiadają za 'inteligencję' — kojarzenie informacji w obrębie jednej półkuli.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drogi rzutowe (projection tracts)",
        },
        {
          type: "paragraph",
          text: "Biegną od ośrodków korowych na obwód (do mięśni) i odwrotnie — z receptorów skórnych do kory mózgowej. Dzielą się na:",
        },
        {
          type: "list",
          items: [
            "Drogi zstępujące (ruchowe) — np. droga korowo-rdzeniowa — impulsy z kory ruchowej do motoneuronów rdzenia kręgowego.",
            "Drogi wstępujące (czuciowe) — impulsy z receptorów na obwodzie (skóra, stawy, mięśnie) do ośrodków czuciowych w korze mózgowej.",
          ],
        },
        {
          type: "table",
          headers: ["Rodzaj drogi", "Funkcja", "Charakterystyka"],
          rows: [
            ["Spoidłowe", "Łączą prawą i lewą półkulę", "Np. ciało modzelowate (corpus callosum)"],
            ["Kojarzeniowe", "Łączą różne płaty tej samej półkuli", "Nigdy nie przechodzą na drugą stronę"],
            ["Rzutowe (zstępujące)", "Ruchowe — kora → mięśnie", "Np. droga korowo-rdzeniowa"],
            ["Rzutowe (wstępujące)", "Czuciowe — receptory → kora", "Np. drogi czuciowe ze skóry"],
          ],
        },
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
          id: "ner-10",
          question: "Wymień trzy rodzaje dróg nerwowych w istocie białej.",
          answer: "Spoidłowe (łączą półkule), kojarzeniowe (łączą płaty tej samej półkuli), rzutowe (łączą korę z obwodem — wstępujące czuciowe i zstępujące ruchowe).",
          examRef: "Wykład",
        },
        {
          id: "ner-11",
          question: "Czym różnią się drogi kojarzeniowe od spoidłowych?",
          answer: "Drogi kojarzeniowe nigdy nie przechodzą na drugą stronę (łączą płaty w obrębie jednej półkuli), podczas gdy spoidłowe łączą prawą i lewą półkulę.",
          examRef: "Wykład",
        },
        {
          id: "ner-12",
          question: "Jaka jest największa droga spoidłowa w mózgu?",
          answer: "Spoidło wielkie — ciało modzelowate (corpus callosum).",
          examRef: "Wykład",
        },
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
  ],
};
