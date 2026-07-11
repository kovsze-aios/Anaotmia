export interface MaturaQuestion {
  id: string;
  year: number;
  month: "maj" | "czerwiec" | "sierpień" | "nowa_era";
  questionNumber: number;
  instruction: string; // Tekst wprowadzający, doświadczenie, rycina
  questionText: string; // Treść polecenia (np. "Wykaż...", "Uzasadnij...")
  officialCkeAnswer: string; // Oficjalny klucz punktowania CKE
  points: number;
  topicCategory: string; // np. "Genetyka", "Metabolizm", "Dziwne sieci"
}

export interface MaturaYearRecord {
  year: number;
  month: "maj" | "czerwiec" | "sierpień" | "nowa_era";
  examCode: string; // e.g. "MBI-R1_1P-162"
  answerKeyPath?: string;
  questions: MaturaQuestion[];
}

export interface MaturaSubject {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  records: MaturaYearRecord[];
}
