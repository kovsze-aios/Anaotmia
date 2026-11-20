import type {
  CkeMetadata,
  TextbookDomain,
  TextbookSection,
} from "../../models";
import type { StructuredChapter } from "@/types/theory";
import type { CurriculumTier } from "@/types/curriculum";
import fizykaGenerated from "@/data/oer-generated/fizyka.json";
import matematykaGenerated from "@/data/oer-generated/matematyka.json";
import biochemiaGenerated from "@/data/oer-generated/biochemia.json";
import neurobiologiaGenerated from "@/data/oer-generated/neurobiologia.json";
import farmakologiaGenerated from "@/data/oer-generated/farmakologia.json";
import informatykaGenerated from "@/data/oer-generated/informatyka.json";

interface OerSeedTopic {
  id: string;
  title: string;
  tier: CurriculumTier;
  formulas: ("2015" | "2023" | "academic")[];
  sectionCode: string;
  requirementCodes: string[];
  diffs2015vs2023?: string;
  examTraps?: string[];
  oerSource: string;
  htmlPages: string[];
  quiz: { question: string; answer: string }[];
}

interface OerSeedDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  sections: OerSeedTopic[];
}

function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(html: string, max = 260): string {
  const clean = stripHtmlTags(html);
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const space = cut.lastIndexOf(" ");
  return (space > 120 ? cut.slice(0, space) : cut) + "…";
}

function buildSectionFromSeed(seed: OerSeedTopic): TextbookSection {
  const status =
    seed.tier === "cke-2023-only"
      ? "2023-only"
      : seed.tier === "cke-2015-only"
        ? "2015-only"
        : "core";

  const ckeMetadata: CkeMetadata = {
    tier: seed.tier,
    formulas: seed.formulas,
    sectionCode: seed.sectionCode,
    ckeSectionCode: seed.sectionCode,
    requirementCodes: seed.requirementCodes,
    ckeRequirementIds: seed.requirementCodes,
    status,
    diffs2015vs2023: seed.diffs2015vs2023,
    examTraps: seed.examTraps,
    examTips: seed.examTraps,
  };

  const licenseAttribution = /Open\s*AGH|LibreTexts/i.test(seed.oerSource)
    ? "Opracowano na podstawie zasobów Open AGH / LibreTexts (Licencja CC BY-SA 4.0 / CC BY 4.0)"
    : undefined;

  return {
    id: seed.id,
    title: seed.title,
    pages: seed.htmlPages.map((htmlContent, idx) => ({
      pageNumber: idx + 1,
      htmlContent,
    })),
    toc: [
      {
        title: seed.title,
        anchorId: seed.id,
      },
      {
        title: "Źródło OER i zakres programowy",
        anchorId: `${seed.id}-source`,
      },
    ],
    chapterQuiz: seed.quiz,
    ckeMetadata,
    licenseAttribution,
    academic_sources: [
      {
        title: seed.oerSource,
        content: `Źródło OER: ${seed.oerSource} — ${seed.sectionCode}`,
      },
    ],
    content: [],
    recallQuestions: seed.quiz.map((q, idx) => ({
      id: `${seed.id}-q-${idx + 1}`,
      question: q.question,
      answer: q.answer,
    })),
    summary: excerpt(seed.htmlPages[0] ?? ""),
  };
}

interface GeneratedOerChapterEntry {
  id: string;
  domainId?: string;
  domainTitle?: string;
  processingMode?: "DIRECT_ADAPTATION" | "CONCEPT_SYNTHESIS";
  licenseAttribution?: string;
  data: StructuredChapter;
}

function buildDepartmentDomains(
  seedDomains: OerSeedDomain[],
  generatedRaw: unknown,
): TextbookDomain[] {
  const domains: TextbookDomain[] = seedDomains.map((d) => ({
    id: d.id,
    title: d.title,
    shortTitle: d.shortTitle,
    icon: d.icon,
    sections: d.sections.map(buildSectionFromSeed),
  }));

  const generatedList = Array.isArray(generatedRaw)
    ? (generatedRaw as GeneratedOerChapterEntry[])
    : [];

  if (generatedList.length === 0) {
    return domains;
  }

  const seenIds = new Set(
    domains.flatMap((d) => d.sections.map((s) => s.id)),
  );

  for (const entry of generatedList) {
    if (!entry?.id || !entry?.data || seenIds.has(entry.id)) continue;
    seenIds.add(entry.id);

    const d = entry.data;
    const tier = d.ckeMetadata?.tier ?? "academic-extra";
    const ckeMetadata: CkeMetadata = {
      formulas: d.ckeMetadata?.formulas ?? ["academic"],
      sectionCode: d.ckeMetadata?.sectionCode ?? entry.domainTitle ?? "OER",
      requirementCodes: d.ckeMetadata?.requirementCodes ?? [],
      status: d.ckeMetadata?.status ?? "core",
      tier,
      ckeSectionCode:
        d.ckeMetadata?.ckeSectionCode ?? d.ckeMetadata?.sectionCode,
      ckeRequirementIds:
        d.ckeMetadata?.ckeRequirementIds ?? d.ckeMetadata?.requirementCodes,
      diffs2015vs2023: d.ckeMetadata?.diffs2015vs2023,
      examTraps: d.ckeMetadata?.examTraps ?? d.ckeMetadata?.examTips,
      examTips: d.ckeMetadata?.examTips ?? d.ckeMetadata?.examTraps,
    };

    const licenseAttribution =
      entry.licenseAttribution ??
      d.licenseAttribution ??
      d.ckeMetadata?.licenseAttribution;
    const processingMode =
      entry.processingMode ??
      d.processingMode ??
      d.ckeMetadata?.processingMode;

    const section: TextbookSection = {
      id: entry.id,
      title: d.chapterTitle,
      pages: d.pages ?? [],
      toc: d.toc ?? [],
      chapterQuiz: d.chapterQuiz ?? [],
      ckeMetadata,
      licenseAttribution,
      processingMode,
      content: [],
      recallQuestions: (d.chapterQuiz ?? []).map((q, idx) => ({
        id: `${entry.id}-q-${idx + 1}`,
        question: q.question,
        answer: q.answer,
      })),
      summary: excerpt(d.pages?.[0]?.htmlContent ?? ""),
    };

    const targetDomain =
      (entry.domainId && domains.find((dom) => dom.id === entry.domainId)) ||
      domains[domains.length - 1];
    targetDomain?.sections.push(section);
  }

  return domains;
}

const FIZYKA_SEEDS: OerSeedDomain[] = [
  {
    id: "fizyka-mechanika-i-termodynamika",
    title: "Mechanika klasyczna, płyny i termodynamika medyczna",
    shortTitle: "Mechanika i termodynamika",
    icon: "⚡",
    sections: [
      {
        id: "fiz-dynamika-i-biomedyka-plynow",
        title: "Dynamika płynów — prawo Bernoulliego i równanie Poiseuille'a w układzie krążenia",
        tier: "academic-extra",
        formulas: ["2015", "2023", "academic"],
        sectionCode: "Fizyka — Hydrodynamika",
        requirementCodes: ["FIZ-U1", "BIOFIZ-KR"],
        diffs2015vs2023:
          "Matura z fizyki obejmuje równanie ciągłości strugi i podstawy hydrostatyki; prawo Poiseuille'a (zależność oporu przepływu od r^4) stanowi moduł akademicki dla studentów medycyny.",
        examTraps: [
          "Dwukrotne zwężenie promienia naczynia krwionośnego zwiększa opór hydrauliczny aż 16-krotnie (2^4 = 16), co tłumaczy gwałtowny wzrost ciśnienia w miażdżycy.",
        ],
        oerSource: "OpenStax University Physics Vol. 1 (CC BY 4.0) — Fluid Mechanics",
        htmlPages: [
          `<h2 id="fiz-dynamika-i-biomedyka-plynow">Dynamika płynów w biofizyce krążenia</h2>
          <p>Ruch krwi w naczyniach krwionośnych podlega prawom mechaniki płynów. Dla płynu idealnego (nielepkiego i nieściśliwego) obowiązuje <strong>równanie ciągłości strugi</strong> (A<sub>1</sub>·v<sub>1</sub> = A<sub>2</sub>·v<sub>2</sub>) oraz <strong>prawo Bernoulliego</strong>, wiążące ciśnienie statyczne z ciśnieniem dynamicznym.</p>
          <h3>Równanie Hagena–Poiseuille'a dla płynów rzeczywistych</h3>
          <p>Krew wykazuje lepkość η, dlatego w przepływie laminarnym przez naczynie o długości <em>l</em> i promieniu <em>r</em> natężenie przepływu <em>Q</em> wynosi: <code>Q = (π·r<sup>4</sup>·Δp) / (8·η·l)</code>.</p>
          <p id="fiz-dynamika-i-biomedyka-plynow-source"><strong>Konsekwencja kliniczna:</strong> Zależność od czwartej potęgi promienia oznacza, że już 19-procentowe zwężenie światła tętnicy wieńcowej obniża przepływ krwi o ponad połowę w spoczynku.</p>`,
        ],
        quiz: [
          {
            question:
              "Jak zmieni się opór naczyniowy (R) w przepływie laminarnym, jeśli promień tętniczki ulegnie skurczowi o połowę (r/2)?",
            answer:
              "Opór wzrośnie 16-krotnie, ponieważ według prawa Poiseuille'a opór hydrauliczny R jest odwrotnie proporcjonalny do czwartej potęgi promienia (R ∝ 1/r^4).",
          },
        ],
      },
      {
        id: "fiz-zasady-termodynamiki-i-entropia",
        title: "Pierwsza i druga zasada termodynamiki oraz bioenergetyka organizmów",
        tier: "cke-core",
        formulas: ["2015", "2023"],
        sectionCode: "Fizyka — Termodynamika",
        requirementCodes: ["FIZ-CKE-TERMO", "THERMO-1", "THERMO-2"],
        diffs2015vs2023:
          "Zarówno w F2015, jak i F2023+ obowiązuje bilans cieplny, pierwsza zasada termodynamiki (ΔU = Q + W) oraz sprawność cyklu Carnota; entropia S wprowadzana jest jakościowo i w rozszerzeniu akademickim.",
        oerSource: "OpenStax University Physics Vol. 2 (CC BY 4.0) — Thermodynamics",
        htmlPages: [
          `<h2 id="fiz-zasady-termodynamiki-i-entropia">Termodynamika układów otwartych</h2>
          <p><strong>Pierwsza zasada termodynamiki</strong> stanowi uogólnienie zasady zachowania energii: zmiana energii wewnętrznej układu wynosi <code>ΔU = Q + W</code>, gdzie <em>Q</em> oznacza ciepło wymienione z otoczeniem, a <em>W</em> — pracę wykonaną nad układem.</p>
          <h3 id="fiz-zasady-termodynamiki-i-entropia-source">Druga zasada termodynamiki a układy biologiczne</h3>
          <p>Organizmy żywe są otwartymi układami termodynamicznymi, które lokalnie utrzymują wysoki porządek (niską entropię) kosztem nieustannego rozpraszania energii i zwiększania całkowitej entropii Wszechświata (ΔS<sub>calk</sub> > 0).</p>`,
        ],
        quiz: [
          {
            question:
              "Czy utrzymywanie uporządkowanej struktury białek i błon przez komórkę narusza drugą zasadę termodynamiki?",
            answer:
              "Nie. Komórka jest układem otwartym: lokalny spadek jej entropii jest z nadwyżką kompensowany wzrostem entropii otoczenia na skutek uwalniania ciepła i produktów katabolizmu (CO2, H2O).",
          },
        ],
      },
    ],
  },
  {
    id: "fizyka-elektromagnetyzm-i-obrazowanie",
    title: "Elektromagnetyzm, optyka i fizyka obrazowania medycznego",
    shortTitle: "Elektromagnetyzm i MRI/RTG",
    icon: "🧲",
    sections: [
      {
        id: "fiz-promieniowanie-rtg-i-mri",
        title: "Podstawy fizyczne tomografii komputerowej (RTG) i rezonansu magnetycznego (MRI)",
        tier: "academic-extra",
        formulas: ["2023", "academic"],
        sectionCode: "Fizyka współczesna — Obrazowanie medyczne",
        requirementCodes: ["MED-IMG-1", "FIZ-ATOM"],
        diffs2015vs2023:
          "Efekt fotoelektryczny i widmo promieniowania rentgenowskiego pojawiają się na maturze CKE; zjawisko precesji Larmora i relaksacja T1/T2 w MRI to wiedza akademicka.",
        oerSource: "OpenStax University Physics Vol. 3 (CC BY 4.0) — Quantum & Medical Imaging",
        htmlPages: [
          `<h2 id="fiz-promieniowanie-rtg-i-mri">Fizyka promieniowania X i rezonansu magnetycznego</h2>
          <p>W lampie rentgenowskiej elektrony przyspieszone wysokim napięciem <em>U</em> hamują w anodzie, emitując promieniowanie hamowania (ciągłe) oraz charakterystyczne promieniowanie X o najkrótszej długości fali <code>λ<sub>min</sub> = hc / (eU)</code>.</p>
          <h3 id="fiz-promieniowanie-rtg-i-mri-source">Zjawisko NMR w diagnostyce MRI</h3>
          <p>Obrazowanie MRI wykorzystuje spin jąder wodoru <sup>1</sup>H w silnym polu magnetycznym <em>B<sub>0</sub></em>. Jądra te precesują z częstością Larmora <code>ω<sub>0</sub> = γ·B<sub>0</sub></code>, nie narażając pacjenta na promieniowanie jonizujące.</p>`,
        ],
        quiz: [
          {
            question:
              "Dlaczego MRI jest bezpieczniejsze pod kątem uszkodzeń DNA niż tomografia komputerowa (TK)?",
            answer:
              "MRI wykorzystuje fale radiowe (niskoenergetyczne fotony niejonizujące) oraz pole magnetyczne, podczas gdy tomografia komputerowa opiera się na promieniowaniu rentgenowskim (jonizującym).",
          },
        ],
      },
    ],
  },
];

const MATEMATYKA_SEEDS: OerSeedDomain[] = [
  {
    id: "matematyka-analiza-i-calculus",
    title: "Analiza matematyczna i równania w naukach przyrodniczych",
    shortTitle: "Analiza i Calculus",
    icon: "📐",
    sections: [
      {
        id: "mat-pochodna-i-dynamika-wzrostu",
        title: "Pochodna funkcji, szybkość reakcji i model wykładniczy w farmakokinetyce",
        tier: "cke-core",
        formulas: ["2015", "2023", "academic"],
        sectionCode: "Matematyka — Rachunek różniczkowy",
        requirementCodes: ["MAT-CKE-CALC", "CALC-1"],
        diffs2015vs2023:
          "Matura rozszerzona z matematyki obejmuje pochodną funkcji wymiernych/wielomianowych i badanie monotoniczności; równania różniczkowe I rzędu (rozpad wykładniczy/eliminacja leku) to rozszerzenie akademickie.",
        oerSource: "OpenStax Calculus Volume 1 (CC BY-NC-SA 4.0) — Derivatives & Exponential Growth",
        htmlPages: [
          `<h2 id="mat-pochodna-i-dynamika-wzrostu">Pochodna jako chwilowa szybkość zmiany</h2>
          <p>Iloraz różnicowy w granicy <code>f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h</code> mierzy chwilowe tempo zmian stężenia substratu w czasie <code>v = −d[S]/dt</code>.</p>
          <h3 id="mat-pochodna-i-dynamika-wzrostu-source">Kinetyka pierwszego rzędu i okres półtrwania</h3>
          <p>Rozwiązaniem równania <code>dC/dt = −k·C</code> jest funkcja wykładnicza <code>C(t) = C<sub>0</sub>·e<sup>−kt</sup></code>. Czas połowicznej eliminacji wynosi <code>t<sub>1/2</sub> = ln(2) / k ≈ 0,693 / k</code>.</p>`,
        ],
        quiz: [
          {
            question:
              "Jeśli stała eliminacji leku wynosi k = 0,231 h^-1, ile wynosi jego biologiczny okres półtrwania t_1/2?",
            answer:
              "t_1/2 = ln(2) / k ≈ 0,693 / 0,231 = 3 godziny.",
          },
        ],
      },
    ],
  },
  {
    id: "matematyka-biostatystyka",
    title: "Probabilistyka, rozkład normalny i biostatystyka kliniczna",
    shortTitle: "Statystyka i Biostatystyka",
    icon: "📊",
    sections: [
      {
        id: "mat-wartosc-p-i-czulosc-testu",
        title: "Twierdzenie Bayesa, czułość/swoistość testów oraz interpretacja wartości p",
        tier: "academic-extra",
        formulas: ["2023", "academic"],
        sectionCode: "Statystyka — Wnioskowanie statystyczne",
        requirementCodes: ["STAT-BAYES", "EBM-1"],
        diffs2015vs2023:
          "Twierdzenie Bayesa (prawdopodobieństwo warunkowe) należy do podstawy maturalnej; testy istotności statystycznej (p-value, przedziały ufności, moc testu) stanowią kurs akademicki EBM.",
        oerSource: "OpenStax Introductory Statistics 2e (CC BY 4.0) — Hypothesis Testing",
        htmlPages: [
          `<h2 id="mat-wartosc-p-i-czulosc-testu">Biostatystyka i medycyna oparta na faktach (EBM)</h2>
          <p>W ocenie testów diagnostycznych kluczowe są: <strong>czułość</strong> (odsetek chorych z wynikiem dodatnim) oraz <strong>swoistość</strong> (odsetek zdrowych z wynikiem ujemnym). Dodatnia wartość predykcyjna (PPV) zależy według wzoru Bayesa od chorobowości w populacji.</p>
          <h3 id="mat-wartosc-p-i-czulosc-testu-source">Co naprawdę oznacza wartość p < 0,05?</h3>
          <p>Wartość <em>p</em> (p-value) to prawdopodobieństwo otrzymania danych co najmniej tak skrajnych jak zaobserwowane w próbie, <strong>przy założeniu prawdziwości hipotezy zerowej (H<sub>0</sub>)</strong>. Nie jest to prawdopodobieństwo prawdziwości H<sub>0</sub>.</p>`,
        ],
        quiz: [
          {
            question:
              "Dlaczego nawet test o 99% czułości i 99% swoistości daje wiele wyników fałszywie dodatnich przy badaniu przesiewowym bardzo rzadkiej choroby?",
            answer:
              "Według twierdzenia Bayesa przy bardzo niskiej częstości choroby w populacji liczba osób zdrowych przewyższa liczbę chorych o rzędy wielkości, więc 1% wyników fałszywie dodatnich wśród zdrowych przeważa liczebnie nad prawdziwie dodatnimi.",
          },
        ],
      },
    ],
  },
];

const BIOCHEMIA_SEEDS: OerSeedDomain[] = [
  {
    id: "biochemia-enzymologia-i-energetyka",
    title: "Kinetyka enzymatyczna i termodynamika biochemiczna",
    shortTitle: "Enzymologia i energetyka",
    icon: "🧬",
    sections: [
      {
        id: "biochem-rownanie-michaelisa-mentena",
        title: "Model Michaelisa–Mentena, stała K_m oraz wykresy Lineweavera–Burka",
        tier: "academic-extra",
        formulas: ["2023", "academic"],
        sectionCode: "Biochemia — Enzymologia ilościowa",
        requirementCodes: ["BIOC-ENZ-1", "BIOC-ENZ-2"],
        diffs2015vs2023:
          "Na maturze CKE wymagane jest jakościowe odróżnienie inhibicji kompetycyjnej od niekompetycyjnej; równanie matematyczne Michaelisa–Mentena i stała K_m to treści biochemii akademickiej.",
        oerSource: "Biochemistry Free For All — Ahern, Rajagopal & Tan (CC BY-NC-SA 4.0)",
        htmlPages: [
          `<h2 id="biochem-rownanie-michaelisa-mentena">Kinetyka enzymatyczna Michaelisa–Mentena</h2>
          <p>Zależność szybkości początkowej reakcji enzymatycznej <em>v<sub>0</sub></em> od stężenia substratu [S] opisuje równanie hiperboliczne: <code>v<sub>0</sub> = (V<sub>max</sub> · [S]) / (K<sub>m</sub> + [S])</code>.</p>
          <ul>
            <li><strong>V<sub>max</sub></strong> to maksymalna szybkość przy pełnym wysyceniu wszystkich centrów aktywnych enzymu.</li>
            <li><strong>K<sub>m</sub> (stała Michaelisa)</strong> oznacza stężenie substratu, przy którym szybkość reakcji osiąga dokładnie <code>0,5·V<sub>max</sub></code> — im niższa wartość K<sub>m</sub>, tym wyższe powinowactwo enzymu do substratu.</li>
          </ul>
          <h3 id="biochem-rownanie-michaelisa-mentena-source">Inhibicja kompetycyjna vs niekompetycyjna w kinetyce</h3>
          <p>Inhibitor kompetycyjny podnosi pozorną stałą <strong>K<sub>m</sub></strong> przy niezmienionym <strong>V<sub>max</sub></strong>, natomiast czysty inhibitor niekompetycyjny obniża <strong>V<sub>max</sub></strong> bez zmiany <strong>K<sub>m</sub></strong>.</p>`,
        ],
        quiz: [
          {
            question:
              "Co dzieje się z wartościami V_max i pozornej K_m po dodaniu inhibitora kompetycyjnego?",
            answer:
              "V_max pozostaje bez zmian (duży nadmiar substratu wypiera inhibitor), natomiast pozorna stała K_m rośnie (potrzeba więcej substratu, aby osiągnąć połowę V_max).",
          },
        ],
      },
      {
        id: "biochem-cykl-krebsa-i-glukoneogeneza",
        title: "Szlak glikolizy, cykl kwasu cytrynowego (Krebsa) i regulacja allosteryczna",
        tier: "academic-extra",
        formulas: ["2015", "2023", "academic"],
        sectionCode: "Biochemia — Metabolizm węglowodanów",
        requirementCodes: ["BIOC-MET-1"],
        diffs2015vs2023:
          "Matura 2023+ rezygnuje z nazw wszystkich 8 metabolitów pośrednich cyklu Krebsa; dział Biochemii przywraca pełne enzymy regulatorowe (PFK-1, dehydrogenaza pirogronianowa, syntaza cytrynianowa).",
        oerSource: "Biochemistry Free For All & OpenStax Biology 2e (CC BY 4.0)",
        htmlPages: [
          `<h2 id="biochem-cykl-krebsa-i-glukoneogeneza">Kluczowe punkty kontroli glikolizy i cyklu Krebsa</h2>
          <p>Głównym enzymem rozrusznikowym glikolizy jest <strong>fosfofruktokinaza-1 (PFK-1)</strong>, hamowana allosterycznie przez wysokie stężenie ATP i cytrynianu, a aktywowana przez AMP i fruktozo-2,6-bisfosforan.</p>
          <p id="biochem-cykl-krebsa-i-glukoneogeneza-source">W jednym obrocie cyklu Krebsa z jednej cząsteczki acetylo-CoA powstają: <strong>3 NADH</strong>, <strong>1 FADH<sub>2</sub></strong>, <strong>1 GTP/ATP</strong> oraz <strong>2 CO<sub>2</sub></strong>.</p>`,
        ],
        quiz: [
          {
            question:
              "Dlaczego wysoki poziom cytrynianu w cytozolu hamuje fosfofruktokinazę-1 (PFK-1)?",
            answer:
              "Cytrynian eksportowany z mitochondriów sygnalizuje dostatek prekursorów biosyntetycznych i energii (ATP), więc działając jako efektor ujemny PFK-1 zwalnia tempo glikolizy.",
          },
        ],
      },
    ],
  },
];

const NEUROBIOLOGIA_SEEDS: OerSeedDomain[] = [
  {
    id: "neurobiologia-komorkowa-i-synaptyczna",
    title: "Neurofizjologia błonowa, potencjały i transmisja synaptyczna",
    shortTitle: "Neurofizjologia i synapsy",
    icon: "🧠",
    sections: [
      {
        id: "neuro-rownanie-nernsta-i-hodgkina",
        title: "Potencjał spoczynkowy, równanie Nernsta i fazy potencjału czynnościowego",
        tier: "academic-extra",
        formulas: ["2023", "academic"],
        sectionCode: "Neurobiologia — Elektrofizjologia neuronu",
        requirementCodes: ["NEURO-AP-1", "NEURO-AP-2"],
        diffs2015vs2023:
          "Matura CKE sprawdza kolejność otwierania kanałów Na+ i K+ oraz rolę pompy Na+/K+; równania Nernsta i Goldmana–Hodgkina–Katza stanowią kurs akademicki neurobiologii.",
        oerSource: "Foundations of Neuroscience — Casey Henley (CC BY-NC-SA 4.0)",
        htmlPages: [
          `<h2 id="neuro-rownanie-nernsta-i-hodgkina">Elektrofizjologia błony neuronalnej</h2>
          <p>W spoczynku potencjał błonowy neuronu wynosi ok. <strong>−70 mV</strong> dzięki aktywnej pracy pompy Na<sup>+</sup>/K<sup>+</sup> ATP-azy (wywóz 3 Na<sup>+</sup> w zamian za 2 K<sup>+</sup>) oraz wysokiej spoczynkowej przepuszczalności dla K<sup>+</sup>.</p>
          <p id="neuro-rownanie-nernsta-i-hodgkina-source">Przekroczenie progu pobudliwości (ok. −55 mV) otwiera napięciozależne kanały Na<sup>+</sup>, wywołując gwałtowną depolaryzację w stronę potencjału równowagi sodu (+60 mV).</p>`,
        ],
        quiz: [
          {
            question:
              "Co odpowiada za fazę hiperpolaryzacji następczej pod koniec potencjału czynnościowego?",
            answer:
              "Napięciozależne kanały potasowe K+ zamykają się z opóźnieniem względem inaktywacji kanałów Na+, co pozwala na dodatkowy wypływ K+ i chwilowe obniżenie potencjału poniżej spoczynkowych -70 mV.",
          },
        ],
      },
      {
        id: "neuro-plastycznosc-ltp-i-receptory",
        title: "Neuroprzekaźniki (glutaminian, GABA, dopamina) i długotrwałe wzmocnienie synaptyczne (LTP)",
        tier: "academic-extra",
        formulas: ["academic"],
        sectionCode: "Neurobiologia — Transmisja synaptyczna i pamięć",
        requirementCodes: ["NEURO-SYN-1"],
        oerSource: "Foundations of Neuroscience (CC BY-NC-SA 4.0) & OpenStax A&P 2e",
        htmlPages: [
          `<h2 id="neuro-plastycznosc-ltp-i-receptory">Mechanizmy pamięci molekularnej</h2>
          <p><strong>Glutaminian</strong> jest głównym neuroprzekaźnikiem pobudzającym OUN, podczas gdy <strong>GABA</strong> hamuje neurony poprzez otwarcie kanałów chlorkowych Cl<sup>−</sup>.</p>
          <p id="neuro-plastycznosc-ltp-i-receptory-source">W hipokampie koincydencja depolaryzacji i wiązania glutaminianu usuwa blok magnezowy (Mg<sup>2+</sup>) z receptora <strong>NMDA</strong>, umożliwiając napływ jonów Ca<sup>2+</sup> i wbudowanie dodatkowych receptorów AMPA (zjawisko LTP).</p>`,
        ],
        quiz: [
          {
            question:
              "Jaką unikatową cechę detektora koincydencji posiada receptor glutaminianowy NMDA?",
            answer:
              "Do otwarcia przepływu jonów Ca2+ wymaga jednocześnie przyłączenia ligandu (glutaminianu) oraz wcześniejszej depolaryzacji błony postsynaptycznej, która wypycha blokujący jon Mg2+ z poru kanału.",
          },
        ],
      },
    ],
  },
];

const FARMAKOLOGIA_SEEDS: OerSeedDomain[] = [
  {
    id: "farmakologia-kinetyka-i-dynamika",
    title: "Farmakokinetyka (LADME) i farmakodynamika receptorowa",
    shortTitle: "Farmakokinetyka i receptory",
    icon: "💊",
    sections: [
      {
        id: "farm-ladme-i-cytochrom-p450",
        title: "Losy leku w ustroju (LADME), efekt pierwszego przejścia i metabolizm CYP450",
        tier: "academic-extra",
        formulas: ["academic"],
        sectionCode: "Farmakologia ogólna",
        requirementCodes: ["FARM-PK-1", "FARM-CYP"],
        oerSource: "OpenStax Pharmacology for Nurses (CC BY 4.0)",
        htmlPages: [
          `<h2 id="farm-ladme-i-cytochrom-p450">System LADME i biodostępność leku</h2>
          <p>Po podaniu doustnym lek trafia przez żyłę wrotną do wątroby, gdzie enzymy mikrosomalne rodziny <strong>cytochromu P450 (CYP3A4, CYP2D6)</strong> mogą zmetabolizować jego znaczną część przed dotarciem do krążenia systemowego (<strong>efekt pierwszego przejścia</strong>).</p>
          <p id="farm-ladme-i-cytochrom-p450-source">Faza I biotransformacji (utlenianie, redukcja, hydroliza) wprowadza grupy polarne, a faza II (sprzęganie np. z kwasem glukuronowym) ułatwia wydalanie nerkowe.</p>`,
        ],
        quiz: [
          {
            question:
              "Dlaczego podanie nitrogliceryny podjęzykowo omija efekt pierwszego przejścia?",
            answer:
              "Błona śluzowa jamy ustnej jest unaczyniona przez żyły uchodzące do żyły głównej górnej, z pominięciem krążenia wrotnego i wstępnego metabolizmu w wątrobie.",
          },
        ],
      },
      {
        id: "farm-agonisci-antagonisci-i-okno",
        title: "Agoniści, antagoniści kompetycyjni oraz indeks terapeutyczny",
        tier: "academic-extra",
        formulas: ["academic"],
        sectionCode: "Farmakodynamika",
        requirementCodes: ["FARM-PD-1"],
        oerSource: "OpenStax Pharmacology for Nurses (CC BY 4.0)",
        htmlPages: [
          `<h2 id="farm-agonisci-antagonisci-i-okno">Interakcja lek–receptor i bezpieczeństwo terapii</h2>
          <p><strong>Agonista pełny</strong> wykazuje zarówno powinowactwo do receptora, jak i aktywność wewnętrzną (α = 1). <strong>Antagonista</strong> wiąże się z receptorem (α = 0), blokując dostęp agonisty endogennego.</p>
          <p id="farm-agonisci-antagonisci-i-okno-source"><strong>Indeks terapeutyczny (TI)</strong> wyraża stosunek dawki toksycznej do skutecznej (TD<sub>50</sub> / ED<sub>50</sub>); leki o wąskim TI (np. warfaryna, lit, digoksyna) wymagają monitorowania stężeń we krwi.</p>`,
        ],
        quiz: [
          {
            question:
              "Czym różni się siła działania leku (potency, EC_50) od jego skuteczności maksymalnej (efficacy, E_max)?",
            answer:
              "EC_50 określa stężenie potrzebne do uzyskania połowy efektu maksymalnego (im mniejsze EC_50, tym silniejszy lek), natomiast E_max to najwyższa możliwa odpowiedź biologiczna, jaką lek potrafi wywołać niezależnie od dalszego zwiększania dawki.",
          },
        ],
      },
    ],
  },
];

const INFORMATYKA_SEEDS: OerSeedDomain[] = [
  {
    id: "informatyka-algorytmy-i-bioinformatyka",
    title: "Algorytmy, programowanie w Pythonie i bioinformatyka obliczeniowa",
    shortTitle: "Python i Bioinformatyka",
    icon: "💻",
    sections: [
      {
        id: "inf-dopasowanie-sekwencji-dna",
        title: "Dopasowanie sekwencji DNA/białek (Needleman–Wunsch, BLAST) i złożoność obliczeniowa",
        tier: "academic-extra",
        formulas: ["2023", "academic"],
        sectionCode: "Bioinformatyka — Algorytmy na tekstach biologicznych",
        requirementCodes: ["INF-BIO-1", "MATURA-INF-DP"],
        diffs2015vs2023:
          "Programowanie dynamiczne i analiza tekstów należą do matury z informatyki; zastosowanie macierzy substytucji BLOSUM/PAM do porównywania genomów to materiał akademicki.",
        oerSource: "Think Python 2e (Green Tea Press) & Bioinformatics Algorithms (Stepik/OER)",
        htmlPages: [
          `<h2 id="inf-dopasowanie-sekwencji-dna">Programowanie dynamiczne w genomice</h2>
          <p>Algorytm <strong>Needlemana–Wunscha</strong> znajduje optymalne globalne przyrównanie (alignment) dwóch sekwencji nukleotydowych lub aminokwasowych o długościach <em>n</em> i <em>m</em> w czasie <code>O(n·m)</code>, premiując zgodności i karząc insercje/delecje (gaps).</p>
          <p id="inf-dopasowanie-sekwencji-dna-source">Dla przeszukiwania całych baz danych (np. GenBank) wykorzystuje się heurystyczny algorytm <strong>BLAST</strong>, który indeksuje krótkie słowa <em>k</em>-mery zamiast wypełniać pełną macierz programowania dynamicznego.</p>`,
        ],
        quiz: [
          {
            question:
              "Dlaczego algorytm BLAST działa o rzędy wielkości szybciej niż klasyczne programowanie dynamiczne (Needleman–Wunsch) podczas przeszukiwania dużych baz sekwencji?",
            answer:
              "BLAST jest algorytmem heurystycznym: najpierw wyszukuje krótkie dokładne trafienia (tzw. ziarna / k-mery) i rozszerza przyrównanie tylko lokalnie wokół nich, unikając obliczania pełnej macierzy O(n·m) dla każdej pary sekwencji w bazie.",
          },
        ],
      },
      {
        id: "inf-python-analiza-danych-medycznych",
        title: "Struktury danych w Pythonie i analiza biomedyczna (NumPy, Pandas)",
        tier: "academic-extra",
        formulas: ["academic"],
        sectionCode: "Data Science — Narzędzia obliczeniowe",
        requirementCodes: ["INF-PY-1"],
        oerSource: "Python Data Science Handbook — Jake VanderPlas (CC BY-NC-ND / OER)",
        htmlPages: [
          `<h2 id="inf-python-analiza-danych-medycznych">Przetwarzanie danych medycznych w języku Python</h2>
          <p>W pracy naukowej listy Pythona zastępuje się wektorowymi tablicami <code>numpy.ndarray</code> (ciągła pamięć C, operacje SIMD) oraz tabelami <code>pandas.DataFrame</code> umożliwiającymi filtrowanie kohort pacjentów, obsługę braków danych i agregację wyników laboratoryjnych.</p>
          <p id="inf-python-analiza-danych-medycznych-source">Kluczową zasadą analizy statystycznej i ML jest bezwzględny podział danych na zbiór treningowy i testowy przed normalizacją cech, aby zapobiec wyciekowi danych (<em>data leakage</em>).</p>`,
        ],
        quiz: [
          {
            question:
              "Dlaczego standaryzację średniej i odchylenia standardowego (StandardScaler) należy obliczać wyłącznie na zbiorze treningowym, a nie na całym zbiorze przed podziałem?",
            answer:
              "Obliczanie parametrów skali na całym zbiorze powoduje wyciek informacji ze zbioru testowego do treningowego (data leakage), zawyżając pozorną skuteczność modelu predykcyjnego.",
          },
        ],
      },
    ],
  },
];

export const fizykaTheory: TextbookDomain[] = buildDepartmentDomains(
  FIZYKA_SEEDS,
  fizykaGenerated,
);

export const matematykaTheory: TextbookDomain[] = buildDepartmentDomains(
  MATEMATYKA_SEEDS,
  matematykaGenerated,
);

export const biochemiaTheory: TextbookDomain[] = buildDepartmentDomains(
  BIOCHEMIA_SEEDS,
  biochemiaGenerated,
);

export const neurobiologiaTheory: TextbookDomain[] = buildDepartmentDomains(
  NEUROBIOLOGIA_SEEDS,
  neurobiologiaGenerated,
);

export const farmakologiaTheory: TextbookDomain[] = buildDepartmentDomains(
  FARMAKOLOGIA_SEEDS,
  farmakologiaGenerated,
);

export const informatykaTheory: TextbookDomain[] = buildDepartmentDomains(
  INFORMATYKA_SEEDS,
  informatykaGenerated,
);
