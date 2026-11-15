import type {
  CkeAnimatedStep,
  CkeExamSheet,
  CkeExamTask,
  CkeSubTask,
} from "@/types/curriculum";
import biologyTasksJson from "./biologia-cke-tasks.json";
import chemistryTasksJson from "./chemia-cke-tasks.json";
import sheetsManifestJson from "./cke-sheets-manifest.json";

export const BIOLOGY_CKE_TASKS: CkeExamTask[] =
  biologyTasksJson as CkeExamTask[];

export const CHEMISTRY_CKE_TASKS: CkeExamTask[] =
  chemistryTasksJson as CkeExamTask[];

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

    sheets.push({
      id: sheetId,
      subject: first.subject,
      year: first.year,
      month: first.month,
      formula: first.formula,
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

  return sheets.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    if (b.tasks.length !== a.tasks.length) return b.tasks.length - a.tasks.length;
    return a.month.localeCompare(b.month);
  });
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

function normalizeSubjectKey(subject?: string): "biologia" | "chemia" | null {
  if (!subject) return null;
  if (subject.startsWith("biologia")) return "biologia";
  if (subject.startsWith("chemia")) return "chemia";
  return null;
}

export function getCkeTasksForSubject(subject?: string): CkeExamTask[] {
  const key = normalizeSubjectKey(subject);
  if (key === "biologia") return BIOLOGY_CKE_TASKS;
  if (key === "chemia") return CHEMISTRY_CKE_TASKS;
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
