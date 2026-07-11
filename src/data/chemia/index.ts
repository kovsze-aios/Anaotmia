import type { MaturaSubject } from "@/types/matura";

export const chemia: MaturaSubject = {
  id: "chemia",
  title: "Chemia — Matura CKE 2015+",
  shortTitle: "Chemia",
  icon: "⚗️",
  records: [
    {
      year: 2016,
      month: "maj",
      examCode: "MCH-R1_1P-162",
      answerKeyPath: "../chemia/Chemia/2016/MCH-R1-N.pdf",
      questions: [
        {
          id: "che-2016-1",
          year: 2016,
          month: "maj",
          questionNumber: 1,
          instruction:
            "Izotopy promieniotwórcze znajdują zastosowanie w medycynie, m.in. w diagnostyce i terapii nowotworów. Jednym z takich izotopów jest ⁶⁰Co, który ulega rozpadowi β⁻.",
          questionText:
            "Napisz równanie reakcji rozpadu β⁻ izotopu kobaltu ⁶⁰Co. Określ liczbę atomową i masową powstającego nuklidu.",
          officialCkeAnswer:
            "1 pkt – za napisanie: ⁶⁰Co → ⁶⁰Ni + β⁻ + ν̄ (lub ⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + ν̄). Powstaje nikiel (Ni) o liczbie atomowej 28 i masowej 60.",
          points: 1,
          topicCategory: "Budowa atomu — izotopy, promieniotwórczość",
        },
        {
          id: "che-2016-2",
          year: 2016,
          month: "maj",
          questionNumber: 2,
          instruction:
            "Poniżej przedstawiono wzory dwóch węglowodorów: CH≡C–CH₂–CH₃ oraz CH₂=CH–CH=CH₂.",
          questionText:
            "Podaj nazwy systematyczne tych węglowodorów oraz określ, który z nich ulega reakcji addycji 1,4 z bromem, zapisując mechanizm tej reakcji.",
          officialCkeAnswer:
            "2 pkt – 1 pkt za nazwy: but-1-yn i buta-1,3-dien; 1 pkt za wskazanie buta-1,3-dienu i addycję 1,4: CH₂Br–CH=CH–CH₂Br.",
          points: 2,
          topicCategory: "Chemia organiczna — węglowodory",
        },
        {
          id: "che-2016-3",
          year: 2016,
          month: "maj",
          questionNumber: 3,
          instruction:
            "Do roztworu zawierającego jony Cu²⁺ i Zn²⁺ dodawano stopniowo roztwór amoniaku (NH₃·H₂O).",
          questionText:
            "Wyjaśnij, dlaczego początkowo w obu probówkach wytrąciły się osady, a następnie po dodaniu nadmiaru amoniaku osad w jednej z probówek uległ rozpuszczeniu, a w drugiej nie. Napisz odpowiednie reakcje.",
          officialCkeAnswer:
            "2 pkt – 1 pkt za wyjaśnienie tworzenia kompleksów: [Cu(NH₃)₄]²⁺ (rozpuszczalny) i [Zn(NH₃)₄]²⁺ (rozpuszczalny) — osad Cu(OH)₂ rozpuszcza się w nadmiarze NH₃ tworząc rozpuszczalny kompleks; 1 pkt za reakcje: Cu²⁺ + 2NH₃·H₂O → Cu(OH)₂↓ + 2NH₄⁺; Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 2OH⁻.",
          points: 2,
          topicCategory: "Chemia nieorganiczna — związki kompleksowe",
        },
        {
          id: "che-2016-4",
          year: 2016,
          month: "maj",
          questionNumber: 4,
          instruction:
            "Reakcja estryfikacji kwasu octowego z etanolem jest reakcją odwracalną. Stała równowagi Kc dla tej reakcji w temperaturze 25°C wynosi 4,0.",
          questionText:
            "Do reaktora wprowadzono 1 mol kwasu octowego i 1 mol etanolu. Oblicz liczbę moli estru w stanie równowagi. Zapisz odpowiednie obliczenia.",
          officialCkeAnswer:
            "2 pkt – za obliczenie: Kc = x²/(1-x)² = 4,0 → x/(1-x) = 2 → x = 2/3 ≈ 0,67 mola estru (octanu etylu) w stanie równowagi.",
          points: 2,
          topicCategory: "Chemia fizyczna — równowaga reakcji / stała równowagi",
        },
        {
          id: "che-2016-5",
          year: 2016,
          month: "maj",
          questionNumber: 5,
          instruction:
            "W temperaturze 25°C zmierzono pH roztworu NaOH o stężeniu 0,01 mol/dm³ oraz roztworu Ba(OH)₂ o stężeniu 0,005 mol/dm³.",
          questionText:
            "Oblicz pH obu roztworów i wskaż, który z nich ma wyższe pH. Uzasadnij odpowiedź, uwzględniając dysocjację zasad.",
          officialCkeAnswer:
            "2 pkt – 1 pkt za obliczenia: NaOH: [OH⁻] = 0,01 M → pOH = 2 → pH = 12; Ba(OH)₂: [OH⁻] = 2×0,005 = 0,01 M → pOH = 2 → pH = 12; 1 pkt za stwierdzenie, że oba mają to samo pH = 12.",
          points: 2,
          topicCategory: "Chemia fizyczna — pH / dysocjacja",
        },
      ],
    },
  ],
};

export function getChemiaRecords() {
  return chemia.records;
}

export function getChemiaRecord(year: number, month: string) {
  return chemia.records.find(
    (r) => r.year === year && r.month === month,
  );
}
