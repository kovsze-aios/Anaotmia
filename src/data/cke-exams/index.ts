import type {
  CkeAnimatedStep,
  CkeExamSheet,
  CkeExamTask,
  CkePdfOverlayAnnotation,
  CkeSubTask,
} from "@/types/curriculum";
import biologyTasksJson from "./biologia-cke-tasks.json";
import chemistryTasksJson from "./chemia-cke-tasks.json";
import sheetsManifestJson from "./cke-sheets-manifest.json";
import pdfOverlaysJson from "./cke-pdf-overlays.json";

export const BIOLOGY_CKE_TASKS: CkeExamTask[] =
  biologyTasksJson as CkeExamTask[];

export const CHEMISTRY_CKE_TASKS: CkeExamTask[] =
  chemistryTasksJson as CkeExamTask[];

export const PDF_OVERLAYS_BY_SHEET = pdfOverlaysJson as Record<
  string,
  Record<string, CkePdfOverlayAnnotation[]>
>;

export const ALL_CKE_EXAM_TASKS: CkeExamTask[] = [
  ...BIOLOGY_CKE_TASKS,
  ...CHEMISTRY_CKE_TASKS,
];

interface SheetManifestEntry {
  id: string;
  symbol?: string;
  title?: string;
  pageImageUrls?: string[];
}

const SHEETS_MANIFEST = sheetsManifestJson as Record<string, SheetManifestEntry>;

const MONTH_LABELS_PL: Record<string, string> = {
  maj: "Maj (Termin główny)",
  czerwiec: "Czerwiec (Termin dodatkowy)",
  sierpien: "Sierpień (Poprawkowy)",
  pokazowy: "Arkusz pokazowy CKE",
  probny: "Matura próbna CKE",
};

const VERB_RULES: Record<string, string> = {
  wyjaśnij:
    "Wymaga pełnego łańcucha przyczynowo-skutkowego (Przyczyna → Mechanizm → Skutek) odwołującego się do danych z zadania.",
  wykaż:
    "Wymaga jednoznacznego powiązania warunków początkowych lub danych z ryciny z końcowym faktem przyrodniczym.",
  uzasadnij:
    "Wymaga podania merytorycznego argumentu biologicznego/chemicznego potwierdzającego tezę.",
  określ:
    "Wymaga podania zwięzłej, jednoznacznej cechy, kierunku zmian, typu procesu lub wartości bez zbędnego opisu.",
  oblicz:
    "Wymaga zapisania toku obliczeń (wzory, proporcje lub równanie reakcji), poprawnego podstawienia danych i podania jednostek.",
  rozstrzygnij:
    "Wymaga jednoznacznego wyboru (np. Tak/Nie, Większa/Mniejsza) oraz zazwyczaj krótkiego uzasadnienia, jeśli polecenie tego wymaga.",
  oceń:
    "Wymaga weryfikacji każdego stwierdzenia niezależnie pod kątem zgodności z wiedzą i ryciną (Prawda/Fałsz).",
  uzupełnij:
    "Wymaga ścisłego wpisania brakujących pojęć, symboli lub opisów zgodnie z legendą schematu/tabeli.",
  napisz:
    "Wymaga precyzyjnego zapisu równania reakcji (w żądanej formie: cząsteczkowej/jonowej/elektronowej) lub wzoru chemicznego.",
  zapisz:
    "Wymaga precyzyjnego zapisu wzoru, konfiguracji, schematu lub równania reakcji z zachowaniem stechiometrii i ładunków.",
  przedstaw:
    "Wymaga logicznego opisania przebiegu procesu, zależności lub mechanizmu w ustalonej kolejności.",
  zaproponuj:
    "Wymaga wskazania konkretnego, jednoznacznego odczynnika lub procedury dającej różne obserwowalne efekty dla badanych prób.",
};

function describeOperationalVerb(verb: string): string {
  const lower = verb.toLowerCase();
  const matched = Object.entries(VERB_RULES)
    .filter(([key]) => lower.includes(key))
    .map(([, desc]) => desc);
  if (matched.length > 0) return matched.join(" ");
  return "Wymaga ścisłej odpowiedzi merytorycznej dopasowanej dokładnie do polecenia czasownika operacyjnego CKE.";
}

/**
 * Guarantees a 4-phase lemo-opuscar animated walkthrough for any task or subtask.
 */
export function buildDefaultAnimatedSteps(
  item: Pick<
    CkeExamTask | CkeSubTask,
    "promptHtml" | "operationalVerb" | "officialAnswerKey"
  > & {
    stepByStepJustification?: string;
    animatedSteps?: CkeAnimatedStep[];
  },
): CkeAnimatedStep[] {
  if (item.animatedSteps && item.animatedSteps.length > 0) {
    return item.animatedSteps;
  }

  const plainPrompt = item.promptHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const leadSentence =
    plainPrompt.split(/(?<=[.?!])\s+/)[0] ||
    plainPrompt.slice(0, 180) ||
    "Przeanalizuj dane wejściowe, rycinę lub układ doświadczalny z arkusza CKE.";

  const verbGuide = describeOperationalVerb(item.operationalVerb);
  const mechanismHtml =
    item.stepByStepJustification ||
    `<p>${item.officialAnswerKey}</p>`;

  return [
    {
      stepNumber: 1,
      phase: "analiza-ryciny",
      title: "Krok 1: Analiza polecenia, danych i ryciny CKE",
      explanationHtml: `<p>Wyodrębnij kluczowe warunki graniczne, legendę ryciny oraz zmienne z treści zadania: <em>„${leadSentence}”</em>.</p>`,
      highlightQuote: leadSentence.slice(0, 140),
    },
    {
      stepNumber: 2,
      phase: "czasownik-operacyjny",
      title: `Krok 2: Wymóg czasownika operacyjnego „${item.operationalVerb}”`,
      explanationHtml: `<p>${verbGuide}</p>`,
      highlightQuote: item.operationalVerb,
    },
    {
      stepNumber: 3,
      phase: "mechanizm",
      title: "Krok 3: Łańcuch Przyczyna → Mechanizm → Skutek",
      explanationHtml: mechanismHtml,
    },
    {
      stepNumber: 4,
      phase: "klucz-cke",
      title: "Krok 4: Oficjalny Klucz Oceniania CKE 1:1",
      explanationHtml: `<p>${item.officialAnswerKey}</p>`,
      highlightQuote: item.officialAnswerKey.slice(0, 160),
    },
  ];
}

function parseTaskSortKey(taskNumber: string): [number, number] {
  const m = taskNumber.match(/(\d+)(?:\.(\d+))?/);
  if (!m) return [999, 0];
  return [Number(m[1]), m[2] ? Number(m[2]) : 0];
}

export function buildSheetId(task: {
  subject: string;
  year: number;
  month: string;
  formula: string;
  sheetId?: string;
}): string {
  if (task.sheetId) return task.sheetId;
  return `${task.subject}-${task.year}-${task.month}-f${task.formula}`;
}

const SUPPLEMENTAL_CKE_SHEETS: CkeExamSheet[] = [
  {
    id: "biologia-2023-pokazowy-f2023",
    subject: "biologia",
    year: 2023,
    month: "pokazowy",
    formula: "2023",
    sheetCategory: "trial",
    symbol: "MBIP-R0-100-2203",
    title: "Biologia PR • Arkusz Pokazowy / Próbny CKE (Formuła 2023+)",
    totalPoints: 6,
    totalTasks: 4,
    tasks: [
      {
        id: "CKE-BIO-TRIAL-2023-Z1",
        sheetId: "biologia-2023-pokazowy-f2023",
        year: 2023,
        month: "pokazowy",
        formula: "2023",
        subject: "biologia",
        taskNumber: "Zadanie 1",
        points: 3,
        pdfPageNumber: 1,
        relatedTopicIds: ["matura-bio-dzial-iii"],
        promptHtml:
          "<p>Zadanie 1. Badano wpływ inhibitora kompetycyjnego i stężenia substratu na szybkość reakcji katalizowanej przez dehydrogenazę bursztynianową.</p>",
        operationalVerb: "Wyjaśnij / Oceń",
        officialAnswerKey:
          "1.1. Malonian ma budowę przestrzenną zbliżoną do bursztynianu i wiąże się odwracalnie z centrum aktywnym enzymu.\n1.2. Zwiększenie stężenia substratu wypiera inhibitor kompetycyjny i przywraca Vmax reakcji.",
        stepByStepJustification:
          "<p>Inhibitor kompetycyjny konkuruje z substratem o miejsce aktywne, zwiększając pozorne Km bez zmiany Vmax.</p>",
        subTasks: [
          {
            subTaskNumber: "1.1",
            points: 2,
            taskType: "open-text",
            promptHtml:
              "<p>Wyjaśnij, uwzględniając budowę enzymu i inhibitora, dlaczego dodanie nadmiaru bursztynianu znosi hamowanie reakcji.</p>",
            operationalVerb: "Wyjaśnij",
            officialAnswerKey:
              "Inhibitor kompetycyjny wiąże się odwracalnie z centrum aktywnym enzymu. Duży nadmiar substratu zwiększa prawdopodobieństwo zajęcia centrum aktywnego przez bursztynian, dzięki czemu szybkość reakcji dąży do Vmax.",
            animatedSteps: [],
          },
          {
            subTaskNumber: "1.2",
            points: 1,
            taskType: "true-false-table",
            promptHtml: "<p>Oceń prawdziwość poniższych stwierdzeń (P / F).</p>",
            operationalVerb: "Oceń P/F",
            interactiveTableData: {
              headers: ["Stwierdzenie", "P / F"],
              rows: [
                {
                  statement: "Inhibitor kompetycyjny obniża wartość Vmax enzymu.",
                  correctAnswer: "F",
                },
                {
                  statement: "Dehydrogenaza bursztynianowa katalizuje reakcję cyklu Krebsa.",
                  correctAnswer: "P",
                },
              ],
            },
            officialAnswerKey: "1. F, 2. P",
            animatedSteps: [],
          },
        ],
      },
      {
        id: "CKE-BIO-TRIAL-2023-Z2",
        sheetId: "biologia-2023-pokazowy-f2023",
        year: 2023,
        month: "pokazowy",
        formula: "2023",
        subject: "biologia",
        taskNumber: "Zadanie 2",
        points: 3,
        pdfPageNumber: 2,
        relatedTopicIds: ["matura-bio-dzial-vii"],
        promptHtml:
          "<p>Zadanie 2. Przeanalizuj zmianę powinowactwa hemoglobiny do tlenu w mięśniu pracującym podczas wysiłku beztlenowego (efekt Bohra).</p>",
        operationalVerb: "Wykaż / Określ",
        officialAnswerKey:
          "Spadek pH krwi (wzrost stężenia H+ i CO2) stabilizuje formę T hemoglobiny i zmniejsza jej powinowactwo do O2, co zwiększa uwalnianie tlenu do pracujących mięśni.",
        stepByStepJustification:
          "<p>Większe stężenie jonów wodorowych oraz CO2 powoduje przesunięcie krzywej dysocjacji oksyhemoglobiny w prawo.</p>",
      },
    ],
  },
  {
    id: "biologia-2022-probny-f2015",
    subject: "biologia",
    year: 2022,
    month: "probny",
    formula: "2015",
    sheetCategory: "trial",
    symbol: "EBIP-R0-PR-2212",
    title: "Biologia PR • Arkusz Próbny / Diagnostyczny (Formuła 2015)",
    totalPoints: 4,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-BIO-TRIAL-2015-Z1",
        sheetId: "biologia-2022-probny-f2015",
        year: 2022,
        month: "probny",
        formula: "2015",
        subject: "biologia",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["matura-bio-dzial-v"],
        promptHtml:
          "<p>Zadanie 1. Porównaj przemianę pokoleń u mszaków i paprotników, wskazując pokolenie dominujące u obu grup.</p>",
        operationalVerb: "Porównaj / Podaj",
        officialAnswerKey:
          "U mszaków dominuje gametofit (1n), natomiast u paprotników pokoleniem dominującym, samodzielnym i większym jest sporofit (2n).",
        stepByStepJustification:
          "<p>Redukcja gametofitu na rzecz sporofitu jest głównym trendem ewolucyjnym roślin lądowych.</p>",
      },
      {
        id: "CKE-BIO-TRIAL-2015-Z2",
        sheetId: "biologia-2022-probny-f2015",
        year: 2022,
        month: "probny",
        formula: "2015",
        subject: "biologia",
        taskNumber: "Zadanie 2",
        points: 2,
        pdfPageNumber: 2,
        relatedTopicIds: ["matura-bio-dzial-viii"],
        promptHtml:
          "<p>Zadanie 2. Podaj kolejność aminokwasów zakodowanych przez fragment nici matrycowej DNA: 3'-TAC GGA CCT ATT-5'.</p>",
        operationalVerb: "Zapisz",
        officialAnswerKey: "mRNA: 5'-AUG CCU GGA UAA-3' → Polipeptyd: Met – Pro – Gly (kodon STOP przerywa translację).",
        stepByStepJustification:
          "<p>Transkrypcja przebiega antyrównolegle w kierunku 5'→3' mRNA, gdzie T w matrycy odpowiada A w RNA, a UAA jest kodonem terminacyjnym.</p>",
      },
    ],
  },
  {
    id: "chemia-2023-pokazowy-f2023",
    subject: "chemia",
    year: 2023,
    month: "pokazowy",
    formula: "2023",
    sheetCategory: "trial",
    symbol: "MCHP-R0-100-2203",
    title: "Chemia PR • Arkusz Pokazowy / Próbny CKE (Formuła 2023+)",
    totalPoints: 4,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-CHEM-TRIAL-2023-Z1",
        sheetId: "chemia-2023-pokazowy-f2023",
        year: 2023,
        month: "pokazowy",
        formula: "2023",
        subject: "chemia",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["matura-chem-dzial-vi"],
        promptHtml:
          "<p>Zadanie 1. Oblicz pH roztworu otrzymanego przez zmieszanie 100 cm³ roztworu HCl o stężeniu 0,2 mol/dm³ oraz 100 cm³ roztworu NaOH o stężeniu 0,1 mol/dm³ w temperaturze 25 °C.</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey:
          "n(HCl) = 0,02 mol; n(NaOH) = 0,01 mol → nadmiar H+ = 0,01 mol w V = 0,2 dm³ → [H+] = 0,05 mol/dm³ → pH = −log(0,05) ≈ 1,30.",
        stepByStepJustification:
          "<p>HCl i NaOH reagują w stosunku 1:1; po zobojętnieniu nadmiar jonów wodorowych rozcieńcza się do łącznej objętości 0,2 dm³.</p>",
      },
      {
        id: "CKE-CHEM-TRIAL-2023-Z2",
        sheetId: "chemia-2023-pokazowy-f2023",
        year: 2023,
        month: "pokazowy",
        formula: "2023",
        subject: "chemia",
        taskNumber: "Zadanie 2",
        points: 2,
        pdfPageNumber: 2,
        relatedTopicIds: ["matura-chem-dzial-vii"],
        promptHtml:
          "<p>Zadanie 2. Zapisz równania reakcji zachodzących na anodzie i katodzie podczas pracy ogniwa Daniella Zn|Zn²⁺||Cu²⁺|Cu oraz podaj jego SEM (E°Zn = −0,76 V, E°Cu = +0,34 V).</p>",
        operationalVerb: "Zapisz / Oblicz",
        officialAnswerKey:
          "Anoda (−): Zn → Zn²⁺ + 2e⁻ | Katoda (+): Cu²⁺ + 2e⁻ → Cu | SEM = 0,34 V − (−0,76 V) = 1,10 V.",
        stepByStepJustification:
          "<p>Półogniwo o wyższym potencjale standardowym (Cu²⁺/Cu) pełni funkcję katody (redukcja).</p>",
      },
    ],
  },
  {
    id: "chemia-2022-probny-f2015",
    subject: "chemia",
    year: 2022,
    month: "probny",
    formula: "2015",
    sheetCategory: "trial",
    symbol: "ECHP-R0-PR-2212",
    title: "Chemia PR • Arkusz Próbny / Diagnostyczny (Formuła 2015)",
    totalPoints: 3,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-CHEM-TRIAL-2015-Z1",
        sheetId: "chemia-2022-probny-f2015",
        year: 2022,
        month: "probny",
        formula: "2015",
        subject: "chemia",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["matura-chem-dzial-i"],
        promptHtml:
          "<p>Zadanie 1. Określ typ hybrydyzacji orbitali walencyjnych atomu węgla w cząsteczce etenu (C₂H₄) i liczbę wiązań typu σ oraz π.</p>",
        operationalVerb: "Określ / Podaj",
        officialAnswerKey: "Hybrydyzacja sp²; 5 wiązań σ (cztery C–H oraz jedno C–C) i 1 wiązanie π (C=C).",
        stepByStepJustification:
          "<p>Atom węgla tworzy 3 wiązania σ w płaszczyźnie (kąty 120°), a niezhybrydyzowane orbitale 2p tworzą wiązanie π.</p>",
      },
      {
        id: "CKE-CHEM-TRIAL-2015-Z2",
        sheetId: "chemia-2022-probny-f2015",
        year: 2022,
        month: "probny",
        formula: "2015",
        subject: "chemia",
        taskNumber: "Zadanie 2",
        points: 1,
        pdfPageNumber: 2,
        relatedTopicIds: ["matura-chem-dzial-xiii"],
        promptHtml:
          "<p>Zadanie 2. Zaproponuj jeden odczynnik pozwalający odróżnić glukozę od fruktozy w dwóch probówkach.</p>",
        operationalVerb: "Zaproponuj",
        officialAnswerKey: "Woda bromowa (Br₂(aq)): odbarwia się tylko w próbce z glukozą (aldozą utlenianą do kwasu glukonowego).",
        stepByStepJustification:
          "<p>Próba Tollensa i Trommera jest pozytywna dla obu cukrów, natomiast łagodny utleniacz Br₂(aq) utlenia jedynie grupę aldehydową glukozy.</p>",
      },
    ],
  },
  {
    id: "fizyka-2024-maj-f2023",
    subject: "fizyka",
    year: 2024,
    month: "maj",
    formula: "2023",
    sheetCategory: "official",
    symbol: "EFIP-R0-100-2405",
    title: "Fizyka PR • CKE 2024 (maj) • Formuła 2023+",
    totalPoints: 4,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-FIZ-2024-MAJ-Z1",
        sheetId: "fizyka-2024-maj-f2023",
        year: 2024,
        month: "maj",
        formula: "2023",
        subject: "fizyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["fiz-dynamika-i-biomedyka-plynow"],
        promptHtml:
          "<p>Zadanie 1. Ciało o masie m = 2 kg zsuwa się po równi pochyłej o kącie nachylenia α = 30° bez tarcia (g = 9,81 m/s²). Oblicz wartość przyspieszenia zsuwania oraz siły nacisku na równię.</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "a = g·sin(30°) = 4,905 m/s² ≈ 4,9 m/s²; N = m·g·cos(30°) ≈ 17,0 N.",
        stepByStepJustification:
          "<p>Składowa ciężaru równoległa do równi nadaje przyspieszenie a = g·sinα, a składowa prostopadła równoważy reakcję podłoża N.</p>",
      },
      {
        id: "CKE-FIZ-2024-MAJ-Z2",
        sheetId: "fizyka-2024-maj-f2023",
        year: 2024,
        month: "maj",
        formula: "2023",
        subject: "fizyka",
        taskNumber: "Zadanie 2",
        points: 2,
        pdfPageNumber: 2,
        relatedTopicIds: ["fiz-zasady-termodynamiki-i-entropia"],
        promptHtml:
          "<p>Zadanie 2. Gaz doskonały rozszerza się izobarycznie pod ciśnieniem p = 10⁵ Pa od objętości 2 dm³ do 5 dm³, pobierając 750 J ciepła. Oblicz przyrost energii wewnętrznej gazu ΔU.</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "W_zewn = p·ΔV = 10⁵ · 0,003 = 300 J; z I zasady termodynamiki: ΔU = Q − W_zewn = 750 − 300 = 450 J.",
        stepByStepJustification:
          "<p>Podczas rozprężania gaz wykonuje pracę przeciwko stałemu ciśnieniu zewnętrznemu kosztem części pobranego ciepła.</p>",
      },
    ],
  },
  {
    id: "fizyka-2022-maj-f2015",
    subject: "fizyka",
    year: 2022,
    month: "maj",
    formula: "2015",
    sheetCategory: "official",
    symbol: "MFI-R1_1P-222",
    title: "Fizyka PR • CKE 2022 (maj) • Formuła 2015",
    totalPoints: 3,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-FIZ-2022-MAJ-Z1",
        sheetId: "fizyka-2022-maj-f2015",
        year: 2022,
        month: "maj",
        formula: "2015",
        subject: "fizyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["fiz-promieniowanie-rtg-i-mri"],
        promptHtml:
          "<p>Zadanie 1. Foton promieniowania RTG ma długość fali λ = 0,1 nm. Oblicz jego energię w keV (h = 6,63·10⁻³⁴ J·s, c = 3·10⁸ m/s, 1 eV = 1,6·10⁻¹⁹ J).</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "E = h·c / λ = 1,989·10⁻¹⁵ J ≈ 12,4 keV.",
        stepByStepJustification:
          "<p>Energia kwantu promieniowania elektromagnetycznego jest odwrotnie proporcjonalna do długości fali λ.</p>",
      },
      {
        id: "CKE-FIZ-2022-MAJ-Z2",
        sheetId: "fizyka-2022-maj-f2015",
        year: 2022,
        month: "maj",
        formula: "2015",
        subject: "fizyka",
        taskNumber: "Zadanie 2",
        points: 1,
        pdfPageNumber: 2,
        relatedTopicIds: [],
        promptHtml: "<p>Zadanie 2. Oceń prawdziwość zdań dotyczących zjawiska fotoelektrycznego (P / F).</p>",
        operationalVerb: "Oceń P/F",
        interactiveTableData: {
          headers: ["Stwierdzenie", "P / F"],
          rows: [
            {
              statement: "Maksymalna energia kinetyczna fotoelektronów zależy liniowo od częstotliwości światła.",
              correctAnswer: "P",
            },
            {
              statement: "Wzrost natężenia światła poniżej częstotliwości granicznej wywołuje emisję elektronów.",
              correctAnswer: "F",
            },
          ],
        },
        officialAnswerKey: "1. P, 2. F",
        stepByStepJustification: "<p>Z równania Einsteina: Ek,max = hν − W (niezależne od natężenia poniżej progu).</p>",
      },
    ],
  },
  {
    id: "fizyka-2023-pokazowy-f2023",
    subject: "fizyka",
    year: 2023,
    month: "pokazowy",
    formula: "2023",
    sheetCategory: "trial",
    symbol: "MFIP-R0-PR-2203",
    title: "Fizyka PR • Arkusz Próbny CKE (Formuła 2023+)",
    totalPoints: 2,
    totalTasks: 1,
    tasks: [
      {
        id: "CKE-FIZ-TRIAL-2023-Z1",
        sheetId: "fizyka-2023-pokazowy-f2023",
        year: 2023,
        month: "pokazowy",
        formula: "2023",
        subject: "fizyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["fiz-dynamika-i-biomedyka-plynow"],
        promptHtml:
          "<p>Zadanie 1. W naczyniu krwionośnym dochodzi do miejscowego zwężenia przekroju poprzecznego o połowę. Jak zmieni się prędkość liniowa przepływu cieczy idealnej oraz ciśnienie statyczne (z prawa Bernoulliego)?</p>",
        operationalVerb: "Określ / Wyjaśnij",
        officialAnswerKey:
          "Z równania ciągłości strugi A·v = const wynika dwukrotny wzrost prędkości v w zwężeniu, co zgodnie z prawem Bernoulliego powoduje spadek ciśnienia statycznego p.",
        stepByStepJustification: "<p>Wzrost energii kinetycznej jednostki objętości cieczy odbywa się kosztem ciśnienia statycznego.</p>",
      },
    ],
  },
  {
    id: "fizyka-2022-probny-f2015",
    subject: "fizyka",
    year: 2022,
    month: "probny",
    formula: "2015",
    sheetCategory: "trial",
    symbol: "EFIP-R0-PR-2212",
    title: "Fizyka PR • Arkusz Próbny / Diagnostyczny (Formuła 2015)",
    totalPoints: 2,
    totalTasks: 1,
    tasks: [
      {
        id: "CKE-FIZ-TRIAL-2015-Z1",
        sheetId: "fizyka-2022-probny-f2015",
        year: 2022,
        month: "probny",
        formula: "2015",
        subject: "fizyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: [],
        promptHtml:
          "<p>Zadanie 1. Okres połowicznego rozpadu izotopu T½ = 8 dni. Jaką część początkowej liczby jąder stanowią jądra nierozpadłe po upływie 24 dni?</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "n = 24 / 8 = 3 okresy; N / N₀ = (1/2)³ = 1/8 = 12,5%.",
        stepByStepJustification: "<p>Po każdym okresie połowicznego rozpadu liczba jąder nierozpadłych maleje dwukrotnie.</p>",
      },
    ],
  },
  {
    id: "matematyka-2024-maj-f2023",
    subject: "matematyka",
    year: 2024,
    month: "maj",
    formula: "2023",
    sheetCategory: "official",
    symbol: "EMAP-P0-100-2405",
    title: "Matematyka • CKE 2024 (maj) • Formuła 2023+",
    totalPoints: 4,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-MAT-2024-MAJ-Z1",
        sheetId: "matematyka-2024-maj-f2023",
        year: 2024,
        month: "maj",
        formula: "2023",
        subject: "matematyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["mat-pochodna-i-dynamika-wzrostu"],
        promptHtml:
          "<p>Zadanie 1. Wyznacz równanie stycznej do wykresu funkcji f(x) = x³ − 3x + 2 w punkcie o odciętej x₀ = 2.</p>",
        operationalVerb: "Oblicz / Zapisz",
        officialAnswerKey: "f(2) = 4; f'(x) = 3x² − 3 → f'(2) = 9 → y = 9(x − 2) + 4 = 9x − 14.",
        stepByStepJustification:
          "<p>Współczynnik kierunkowy stycznej równy jest pochodnej funkcji w punkcie styczności x₀ = 2.</p>",
      },
      {
        id: "CKE-MAT-2024-MAJ-Z2",
        sheetId: "matematyka-2024-maj-f2023",
        year: 2024,
        month: "maj",
        formula: "2023",
        subject: "matematyka",
        taskNumber: "Zadanie 2",
        points: 2,
        pdfPageNumber: 2,
        relatedTopicIds: ["mat-wartosc-p-i-czulosc-testu"],
        promptHtml:
          "<p>Zadanie 2. Rzucamy dwukrotnie symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo zdarzenia A, że suma oczek jest większa od 9.</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "|Ω| = 36; pary (4,6),(5,5),(5,6),(6,4),(6,5),(6,6) dają |A| = 6 → P(A) = 6/36 = 1/6.",
        stepByStepJustification:
          "<p>Liczba wszystkich możliwych wyników dwóch rzutów wynosi 6², z czego dokładnie 6 par ma sumę ≥ 10.</p>",
      },
    ],
  },
  {
    id: "matematyka-2022-maj-f2015",
    subject: "matematyka",
    year: 2022,
    month: "maj",
    formula: "2015",
    sheetCategory: "official",
    symbol: "MMA-P1_1P-222",
    title: "Matematyka • CKE 2022 (maj) • Formuła 2015",
    totalPoints: 3,
    totalTasks: 2,
    tasks: [
      {
        id: "CKE-MAT-2022-MAJ-Z1",
        sheetId: "matematyka-2022-maj-f2015",
        year: 2022,
        month: "maj",
        formula: "2015",
        subject: "matematyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: [],
        promptHtml: "<p>Zadanie 1. Rozwiąż nierówność kwadratową: x² − 5x + 4 ≤ 0.</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "Δ = 25 − 16 = 9; pierwiastki x₁ = 1, x₂ = 4 → x ∈ ⟨1, 4⟩.",
        stepByStepJustification: "<p>Ramiona paraboli skierowane są do góry, więc wartości ≤ 0 przyjmuje między miejscami zerowymi.</p>",
      },
      {
        id: "CKE-MAT-2022-MAJ-Z2",
        sheetId: "matematyka-2022-maj-f2015",
        year: 2022,
        month: "maj",
        formula: "2015",
        subject: "matematyka",
        taskNumber: "Zadanie 2",
        points: 1,
        pdfPageNumber: 2,
        relatedTopicIds: [],
        promptHtml: "<p>Zadanie 2. Oceń prawdziwość równości logarytmicznych i wykładniczych (P / F).</p>",
        operationalVerb: "Oceń P/F",
        interactiveTableData: {
          headers: ["Stwierdzenie", "P / F"],
          rows: [
            { statement: "log₂(32) = 5", correctAnswer: "P" },
            { statement: "2⁻³ = −8", correctAnswer: "F" },
          ],
        },
        officialAnswerKey: "1. P, 2. F (2⁻³ = 1/8)",
        stepByStepJustification: "<p>Wykładnik ujemny oznacza odwrotność potęgi, a nie zmianę znaku liczby.</p>",
      },
    ],
  },
  {
    id: "matematyka-2023-pokazowy-f2023",
    subject: "matematyka",
    year: 2023,
    month: "pokazowy",
    formula: "2023",
    sheetCategory: "trial",
    symbol: "MMAP-P0-PR-2203",
    title: "Matematyka • Arkusz Pokazowy / Próbny CKE (Formuła 2023+)",
    totalPoints: 2,
    totalTasks: 1,
    tasks: [
      {
        id: "CKE-MAT-TRIAL-2023-Z1",
        sheetId: "matematyka-2023-pokazowy-f2023",
        year: 2023,
        month: "pokazowy",
        formula: "2023",
        subject: "matematyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: ["mat-pochodna-i-dynamika-wzrostu"],
        promptHtml:
          "<p>Zadanie 1. W pewnym modelu populacyjnym liczebność rośnie wykładniczo według wzoru N(t) = 100·2^(t/3). Po jakim czasie t liczebność osiągnie 1600?</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "100·2^(t/3) = 1600 → 2^(t/3) = 16 = 2⁴ → t/3 = 4 → t = 12.",
        stepByStepJustification: "<p>Porównujemy wykładniki po sprowadzeniu obu stron równania do podstawy 2.</p>",
      },
    ],
  },
  {
    id: "matematyka-2022-probny-f2015",
    subject: "matematyka",
    year: 2022,
    month: "probny",
    formula: "2015",
    sheetCategory: "trial",
    symbol: "EMAP-P0-PR-2212",
    title: "Matematyka • Arkusz Próbny / Diagnostyczny (Formuła 2015)",
    totalPoints: 2,
    totalTasks: 1,
    tasks: [
      {
        id: "CKE-MAT-TRIAL-2015-Z1",
        sheetId: "matematyka-2022-probny-f2015",
        year: 2022,
        month: "probny",
        formula: "2015",
        subject: "matematyka",
        taskNumber: "Zadanie 1",
        points: 2,
        pdfPageNumber: 1,
        relatedTopicIds: [],
        promptHtml:
          "<p>Zadanie 1. W ciągu arytmetycznym a₃ = 7 i r = 3. Oblicz sumę dziesięciu początkowych wyrazów tego ciągu (S₁₀).</p>",
        operationalVerb: "Oblicz",
        officialAnswerKey: "a₁ = a₃ − 2r = 1; a₁₀ = 1 + 9·3 = 28; S₁₀ = ((1 + 28) / 2)·10 = 145.",
        stepByStepJustification: "<p>Ze wzoru na n-ty wyraz ciągu wyznaczamy wyraz pierwszy a₁ i korzystamy ze wzoru na sumę.</p>",
      },
    ],
  },
];

export function getCkeExamSheets(subject?: string): CkeExamSheet[] {
  const pool = getCkeTasksForSubject(subject);
  const grouped = new Map<string, CkeExamTask[]>();

  for (const task of pool) {
    const sid = buildSheetId(task);
    const list = grouped.get(sid) ?? [];
    list.push(task);
    grouped.set(sid, list);
  }

  const sheets: CkeExamSheet[] = [];
  for (const [sheetId, tasks] of grouped.entries()) {
    const sorted = [...tasks].sort((a, b) => {
      const [am, as] = parseTaskSortKey(a.taskNumber);
      const [bm, bs] = parseTaskSortKey(b.taskNumber);
      if (am !== bm) return am - bm;
      if (as !== bs) return as - bs;
      return a.id.localeCompare(b.id);
    });

    const first = sorted[0];
    const manifest = SHEETS_MANIFEST[sheetId];
    const discoveredPages = Array.from(
      new Set(
        sorted
          .map((t) => t.pageImageUrl)
          .filter((url): url is string => Boolean(url)),
      ),
    ).sort();

    const pageImageUrls =
      manifest?.pageImageUrls && manifest.pageImageUrls.length > 0
        ? manifest.pageImageUrls
        : discoveredPages;

    const totalPoints = sorted.reduce((acc, t) => acc + (t.points || 0), 0);
    const totalTasks = sorted.reduce(
      (acc, t) => acc + (t.subTasks && t.subTasks.length > 0 ? t.subTasks.length : 1),
      0,
    );
    const subjLabel =
      first.subject === "biologia"
        ? "Biologia"
        : first.subject === "chemia"
          ? "Chemia"
          : first.subject;
    const monthLabel = MONTH_LABELS_PL[first.month] ?? first.month;
    const sheetCategory: "official" | "trial" =
      first.month === "probny" || first.month === "pokazowy" ? "trial" : "official";

    sheets.push({
      id: sheetId,
      subject: first.subject,
      year: first.year,
      month: first.month,
      formula: first.formula,
      sheetCategory,
      symbol: manifest?.symbol,
      title:
        manifest?.title ??
        `${subjLabel} PR • ${first.year} (${monthLabel}) • Formuła ${first.formula}`,
      totalPoints,
      totalTasks,
      pageImageUrls,
      tasks: sorted,
    });
  }

  const normSubj = normalizeSubjectKey(subject);
  const existingIds = new Set(sheets.map((s) => s.id));
  for (const extra of SUPPLEMENTAL_CKE_SHEETS) {
    if (existingIds.has(extra.id)) continue;
    if (!subject || (normSubj && extra.subject === normSubj) || extra.subject === subject) {
      sheets.push(extra);
    }
  }

  return sheets.sort((a, b) => {
    if ((a.sheetCategory ?? "official") !== (b.sheetCategory ?? "official")) {
      return a.sheetCategory === "trial" ? 1 : -1;
    }
    if (b.year !== a.year) return b.year - a.year;
    if (b.tasks.length !== a.tasks.length) return b.tasks.length - a.tasks.length;
    return a.month.localeCompare(b.month);
  });
}

export function getPdfOverlaysForSheet(
  sheetId: string,
): Record<string, CkePdfOverlayAnnotation[]> {
  return PDF_OVERLAYS_BY_SHEET[sheetId] ?? {};
}

export function getPdfOverlaysForPage(
  sheetId: string,
  pageNumber: number,
  fallbackTasks: CkeExamTask[] = [],
): CkePdfOverlayAnnotation[] {
  const precomputed = PDF_OVERLAYS_BY_SHEET[sheetId]?.[String(pageNumber)];
  if (precomputed && precomputed.length > 0) {
    return precomputed;
  }

  const pageTasks = fallbackTasks.filter(
    (t) => (t.pdfPageNumber ?? 1) === pageNumber,
  );
  const annotations: CkePdfOverlayAnnotation[] = [];
  let slot = 0;

  for (const task of pageTasks) {
    const items =
      task.subTasks && task.subTasks.length > 0
        ? task.subTasks.map((st) => ({
            subTaskNumber: st.subTaskNumber,
            points: st.points,
            taskType: st.taskType,
            operationalVerb: st.operationalVerb,
            answerText: st.officialAnswerKey,
            interactiveTableData: st.interactiveTableData,
            step: task.stepByStepJustification,
          }))
        : [
            {
              subTaskNumber: task.taskNumber.replace(/^Zadanie\s+/i, ""),
              points: task.points,
              taskType: task.taskType ?? "open-text",
              operationalVerb: task.operationalVerb,
              answerText: task.officialAnswerKey,
              interactiveTableData: task.interactiveTableData,
              step: task.stepByStepJustification,
            },
          ];

    for (const item of items) {
      const yPct = Math.min(76, 18 + (slot % 3) * 24);
      slot += 1;
      const boxType: CkePdfOverlayAnnotation["boxType"] =
        item.interactiveTableData
          ? "true-false"
          : item.taskType === "calculation-grid"
            ? "calculation-grid"
            : item.taskType === "multiple-choice"
              ? "multiple-choice"
              : "open-answer";
      annotations.push({
        id: `${sheetId}-p${pageNumber}-z${item.subTaskNumber}`,
        taskNumber: task.taskNumber,
        subTaskNumber: item.subTaskNumber,
        pageNumber,
        boxType,
        xPct: 12,
        yPct,
        widthPct: 76,
        heightPct: 14,
        pointsLabel: `0–${item.points} pkt`,
        operationalVerb: item.operationalVerb,
        answerText: item.answerText,
        marginNote: item.step
          ? item.step.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
          : undefined,
        truthChoices: item.interactiveTableData?.rows.map((r) =>
          r.correctAnswer.toUpperCase() === "F" ? "F" : "P",
        ),
      });
    }
  }

  return annotations;
}

const TOPIC_KEYWORD_GROUPS: Array<{
  subject: "biologia" | "chemia";
  keywords: string[];
  sectionHint: string;
}> = [
  {
    subject: "biologia",
    keywords: [
      "aminokwas",
      "bialk",
      "białk",
      "enzym",
      "katalaz",
      "inhibic",
      "sacharyd",
      "cukr",
      "lipid",
      "kwasy nukleinowe",
    ],
    sectionHint: "matura-bio-dzial-i",
  },
  {
    subject: "biologia",
    keywords: [
      "blon",
      "błon",
      "osmoz",
      "plazmoliz",
      "transport",
      "mitochondr",
      "plastyd",
      "endosymbioz",
      "komork",
      "komórk",
      "jadro",
      "jądro",
    ],
    sectionHint: "matura-bio-dzial-ii",
  },
  {
    subject: "biologia",
    keywords: [
      "fotosyntez",
      "oddychan",
      "glikoliz",
      "krebs",
      "atp",
      "metabolizm",
      "fermentac",
    ],
    sectionHint: "matura-bio-dzial-iii",
  },
  {
    subject: "biologia",
    keywords: ["wirus", "bakteri", "prokariot", "protist", "grzyb"],
    sectionHint: "matura-bio-dzial-iv",
  },
  {
    subject: "biologia",
    keywords: [
      "roslin",
      "roślin",
      "mszak",
      "paprotnik",
      "nasienn",
      "gametofit",
      "sporofit",
    ],
    sectionHint: "matura-bio-dzial-v",
  },
  {
    subject: "biologia",
    keywords: ["zwierz", "bezkregow", "bezkręgow", "kregow", "kręgow"],
    sectionHint: "matura-bio-dzial-vi",
  },
  {
    subject: "biologia",
    keywords: [
      "czlowiek",
      "człowiek",
      "miesni",
      "mięśni",
      "nerwow",
      "homeostaz",
      "wydalnicz",
      "odpornosc",
      "hormon",
      "krwionos",
    ],
    sectionHint: "matura-bio-dzial-vii",
  },
  {
    subject: "biologia",
    keywords: [
      "genetyk",
      "operon",
      "ekspresj",
      "transkrypc",
      "translac",
      "replikac",
      "mendel",
      "mutacj",
    ],
    sectionHint: "matura-bio-dzial-viii",
  },
  {
    subject: "biologia",
    keywords: ["biotechnolog", "pcr", "crispr", "elektroforez", "sekwencjon"],
    sectionHint: "matura-bio-dzial-ix",
  },
  {
    subject: "biologia",
    keywords: ["ewoluc", "hardy", "dobor", "dobór", "filogenez", "specjac"],
    sectionHint: "matura-bio-dzial-x",
  },
  {
    subject: "biologia",
    keywords: [
      "ekolog",
      "eutrofiz",
      "populac",
      "ekosystem",
      "troficz",
      "biocenoz",
    ],
    sectionHint: "matura-bio-dzial-xi",
  },
  // Chemistry stems
  {
    subject: "chemia",
    keywords: ["atom", "kwantow", "konfiguracj", "orbital", "okresow"],
    sectionHint: "matura-chem-dzial-i",
  },
  {
    subject: "chemia",
    keywords: [
      "wiazani",
      "wiązani",
      "hybrydyzac",
      "wodorow",
      "miedzyczasteczk",
      "krysztal",
    ],
    sectionHint: "matura-chem-dzial-ii",
  },
  {
    subject: "chemia",
    keywords: ["mol", "stechiometr", "avogadr", "gaz", "clapeyron", "objetosc"],
    sectionHint: "matura-chem-dzial-iii",
  },
  {
    subject: "chemia",
    keywords: ["entalpi", "hess", "termochemi", "cieplo"],
    sectionHint: "matura-chem-dzial-iv",
  },
  {
    subject: "chemia",
    keywords: ["rownowag", "równowag", "kinetyk", "szybkosc", "le chatelier"],
    sectionHint: "matura-chem-dzial-v",
  },
  {
    subject: "chemia",
    keywords: [
      "roztwor",
      "elektrolit",
      "ph",
      "kso",
      "hydroliz",
      "bufor",
      "dysocjac",
    ],
    sectionHint: "matura-chem-dzial-vi",
  },
  {
    subject: "chemia",
    keywords: ["redoks", "ogniw", "elektroliz", "sem", "potencjal"],
    sectionHint: "matura-chem-dzial-vii",
  },
  {
    subject: "chemia",
    keywords: ["blok d", "mangan", "chrom", "amfoterycz", "metale"],
    sectionHint: "matura-chem-dzial-viii",
  },
  {
    subject: "chemia",
    keywords: [
      "alken",
      "alkan",
      "alkin",
      "benzen",
      "weglowodor",
      "markownikow",
      "izomer",
    ],
    sectionHint: "matura-chem-dzial-ix",
  },
  {
    subject: "chemia",
    keywords: ["alkohol", "fenol", "aldehyd", "keton", "kwas karboksylow"],
    sectionHint: "matura-chem-dzial-x",
  },
  {
    subject: "chemia",
    keywords: ["estr", "tluszcz", "zmydlan", "polimer"],
    sectionHint: "matura-chem-dzial-xi",
  },
  {
    subject: "chemia",
    keywords: [
      "glukoz",
      "fruktoz",
      "sacharoz",
      "tollens",
      "bromow",
      "peptyd",
      "aminokwas",
      "elektroforez",
    ],
    sectionHint: "matura-chem-dzial-xii",
  },
  {
    subject: "chemia",
    keywords: ["doswiadczen", "doświadczen", "probów", "identyfikac", "analitycz"],
    sectionHint: "matura-chem-dzial-xiii",
  },
];

function normalizeSubjectKey(
  subject?: string,
): "biologia" | "chemia" | "fizyka" | "matematyka" | null {
  if (!subject) return null;
  if (subject.startsWith("biologia")) return "biologia";
  if (subject.startsWith("chemia")) return "chemia";
  if (subject.startsWith("fizyka")) return "fizyka";
  if (subject.startsWith("matematyka")) return "matematyka";
  return null;
}

export function getCkeTasksForSubject(subject?: string): CkeExamTask[] {
  const key = normalizeSubjectKey(subject);
  if (key === "biologia") return BIOLOGY_CKE_TASKS;
  if (key === "chemia") return CHEMISTRY_CKE_TASKS;
  if (key === "fizyka" || key === "matematyka") {
    return SUPPLEMENTAL_CKE_SHEETS.filter((s) => s.subject === key).flatMap(
      (s) => s.tasks,
    );
  }
  if (!subject) return ALL_CKE_EXAM_TASKS;
  return ALL_CKE_EXAM_TASKS.filter((task) => task.subject === subject);
}

/**
 * Returns matching CKE exam tasks for a specific textbook chapter.
 * Matches in priority order:
 * 1) Direct match on relatedTopicIds
 * 2) Direct match on normalized CKE section code (e.g. "Dział II" -> "matura-bio-dzial-ii")
 * 3) Keyword match against chapterId and chapterTitle
 */
export function getCkeTasksForChapter(options: {
  subject?: string;
  chapterId: string;
  chapterTitle?: string;
  sectionCode?: string;
}): CkeExamTask[] {
  const pool = getCkeTasksForSubject(options.subject);
  if (pool.length === 0) return [];

  const exactMatches = pool.filter((task) =>
    task.relatedTopicIds.includes(options.chapterId),
  );
  if (exactMatches.length > 0) return exactMatches;

  const subjectKey = normalizeSubjectKey(options.subject);
  const sectionSlug = options.sectionCode
    ? options.sectionCode
        .toLowerCase()
        .replace(/ł/g, "l")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    : "";

  const sectionPrefix =
    subjectKey === "chemia" ? "matura-chem-" : "matura-bio-";

  const haystack = `${options.chapterId} ${options.chapterTitle ?? ""}`.toLowerCase();
  const hintedSections = new Set<string>();
  if (sectionSlug) {
    hintedSections.add(`${sectionPrefix}${sectionSlug}`);
  }

  for (const group of TOPIC_KEYWORD_GROUPS) {
    if (subjectKey && group.subject !== subjectKey) continue;
    if (group.keywords.some((kw) => haystack.includes(kw))) {
      hintedSections.add(group.sectionHint);
    }
  }

  const semanticMatches = pool.filter((task) =>
    task.relatedTopicIds.some((id) => hintedSections.has(id)),
  );

  if (semanticMatches.length > 0) {
    return semanticMatches.slice(0, 4);
  }

  // Always offer up to 2 representative tasks from the matching subject if requested on Bio/Chem
  return [];
}

export function filterCkeTasks(
  tasks: CkeExamTask[],
  filters: {
    formula?: "all" | "2015" | "2023";
    year?: number | "all";
    search?: string;
    verb?: string;
  },
): CkeExamTask[] {
  const q = filters.search?.trim().toLowerCase() ?? "";
  return tasks.filter((task) => {
    if (
      filters.formula &&
      filters.formula !== "all" &&
      task.formula !== filters.formula
    ) {
      return false;
    }
    if (filters.year && filters.year !== "all" && task.year !== filters.year) {
      return false;
    }
    if (
      filters.verb &&
      filters.verb !== "all" &&
      !task.operationalVerb.toLowerCase().includes(filters.verb.toLowerCase())
    ) {
      return false;
    }
    if (q.length > 0) {
      const subText = (task.subTasks ?? [])
        .map(
          (st) =>
            `${st.subTaskNumber} ${st.operationalVerb} ${st.promptHtml} ${st.officialAnswerKey}`,
        )
        .join(" ");
      const mediaText = (task.media ?? [])
        .map((m) => m.caption ?? "")
        .join(" ");
      const searchable = `${task.id} ${task.taskNumber} ${task.operationalVerb} ${task.promptHtml} ${task.officialAnswerKey} ${task.stepByStepJustification} ${subText} ${mediaText}`.toLowerCase();
      if (!searchable.includes(q)) return false;
    }
    return true;
  });
}
