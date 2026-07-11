import type { TextbookDomain } from "@/types/textbook";

export const myology: TextbookDomain = {
  id: "myology",
  title: "Miologia — Układ Mięśniowy",
  shortTitle: "Miologia",
  icon: "💪",
  sections: [
    {
      id: "wprowadzenie-miesnie",
      title: "Wprowadzenie do mięśni",
      content: [
        {
          type: "paragraph",
          text: "Mięśnie stanowią czynną część układu ruchu. Spektakularną cechą mięśni jest ich kurczliwość. Skurcz mięśnia następuje pod wpływem impulsu nerwowego.",
        },
        {
          type: "paragraph",
          text: "Mięsień sercowy jest częścią śródsierdzia (mięśnia sercowego) — pytanie nr 7. Mięśnie szkieletowe są prążkowane, podobnie jak mięsień sercowy.",
        },
      ],
      recallQuestions: [
        {
          id: "myo-1",
          question: "Mięsień sercowy jest częścią której warstwy serca?",
          answer: "Śródsierdzia (myocardium).",
          examRef: "Q7",
        },
      ],
    },
    {
      id: "miesnie-klatki",
      title: "Mięśnie klatki piersiowej i oddechowe",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Mięsień wydechowy",
        },
        {
          type: "paragraph",
          text: "Głównym mięśniem wydechowym jest mięsień międzyżebrowy wewnętrzny (pytanie nr 23). Przepona jest głównym mięśniem wdechowym.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mięśnie odwodzące ramię",
        },
        {
          type: "paragraph",
          text: "Mięsień zębaty przedni (serratus anterior) jest mięśniem klatki piersiowej odwodzącym ramię (pytanie otwarte nr 41). Mięsień naramienny część boczna również odwodzi ramię w stawie ramiennym (pytanie nr 21).",
        },
      ],
      recallQuestions: [
        {
          id: "myo-2",
          question: "Jaki jest główny mięsień wydechowy?",
          answer: "Mięsień międzyżebrowy wewnętrzny.",
          examRef: "Q23",
        },
        {
          id: "myo-3",
          question: "Wymień mięśnie klatki piersiowej odwodzące ramię.",
          answer: "Mięsień zębaty przedni (serratus anterior) oraz mięsień naramienny część boczna.",
          examRef: "Q41",
        },
      ],
    },
    {
      id: "miesnie-konczyn-gorna",
      title: "Mięśnie kończyny górnej",
      content: [
        {
          type: "heading",
          level: 3,
          text: "Mięśnie ramienia",
        },
        {
          type: "paragraph",
          text: "Nerw promieniowy unerwia ruchowo grupę tylną mięśni ramienia, pochodzi ze splotu ramiennego (pytanie otwarte nr 44).",
        },
        {
          type: "paragraph",
          text: "Mięsień naramienny — część boczna odwodzi ramię w stawie ramiennym. Mięsień nadgrzebieniowy również wspomaga odwodzenie.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mięśnie przedramienia",
        },
        {
          type: "paragraph",
          text: "Mięsień ramienno-promieniowy (brachioradialis) — może przedramię nawracać lub odwracać w zależności od położenia (tzw. mięsień tenisistów) — pytanie nr 26.",
        },
        {
          type: "paragraph",
          text: "Rękę odwodzi mięsień zginacz promieniowy nadgarstka (flexor carpi radialis) — pytanie nr 27.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mięśnie dłoni",
        },
        {
          type: "paragraph",
          text: "Palce ręki odwodzą mięśnie międzykostne grzbietowe (dorsal interossei) — pytanie nr 28.",
        },
      ],
      recallQuestions: [
        {
          id: "myo-4",
          question: "Podaj nazwę nerwu unerwiającego ruchowo grupę tylną mięśni ramienia oraz splot z którego pochodzi.",
          answer: "Nerw promieniowy, splot ramienny.",
          examRef: "Q44",
        },
        {
          id: "myo-5",
          question: "Który mięsień może nawracać lub odwracać przedramię w zależności od położenia (mięsień tenisistów)?",
          answer: "Mięsień ramienno-promieniowy (brachioradialis).",
          examRef: "Q26",
        },
        {
          id: "myo-6",
          question: "Który mięsień odwodzi rękę?",
          answer: "Zginacz promieniowy nadgarstka (flexor carpi radialis).",
          examRef: "Q27",
        },
        {
          id: "myo-7",
          question: "Jakie mięśnie odwodzą palce ręki?",
          answer: "Mięśnie międzykostne grzbietowe (dorsal interossei).",
          examRef: "Q28",
        },
      ],
    },
    {
      id: "miesnie-konczyn-dolna",
      title: "Mięśnie kończyny dolnej",
      content: [
        {
          type: "paragraph",
          text: "Podudzie prostuje mięsień czworogłowy uda (quadriceps femoris) — pytanie nr 20. Jest to najsilniejszy prostownik stawu kolanowego.",
        },
        {
          type: "paragraph",
          text: "Mięsień dwugłowy uda (głowa długa) jest rozpięty między guzem kulszowym a kością strzałkową (pytanie nr 25).",
        },
        {
          type: "paragraph",
          text: "Między guzem kulszowym i kością strzałkową rozpięty jest mięsień dwugłowy uda (głowa długa) — biceps femoris caput longum.",
        },
      ],
      recallQuestions: [
        {
          id: "myo-8",
          question: "Który mięsień prostuje podudzie?",
          answer: "Mięsień czworogłowy uda (quadriceps femoris).",
          examRef: "Q20",
        },
        {
          id: "myo-9",
          question: "Jaki mięsień jest rozpięty między guzem kulszowym a kością strzałkową?",
          answer: "Mięsień dwugłowy uda (głowa długa) — biceps femoris caput longum.",
          examRef: "Q25",
        },
      ],
    },
    {
      id: "miesnie-zwacze",
      title: "Mięśnie żuciowe",
      content: [
        {
          type: "paragraph",
          text: "Mięśnie żuciowe działają na staw skroniowo-żuchwowy (pytanie nr 24). Należą do nich: mięsień żwacz, skroniowy, skrzydłowy przyśrodkowy i boczny.",
        },
      ],
      recallQuestions: [
        {
          id: "myo-10",
          question: "Na jaki staw działają mięśnie żuciowe?",
          answer: "Na staw skroniowo-żuchwowy.",
          examRef: "Q24",
        },
      ],
    },
  ],
};
