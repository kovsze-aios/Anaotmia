import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_181_roztworyGazowWCieczachData: StructuredChapter = {
  "chapterTitle": "Roztwory gazów w cieczach",
  "toc": [
    {
      "title": "Reguła faz dla układu woda–chlorek sodu",
      "anchorId": "regula-faz-dla-ukladu-woda-chlorek-sodu"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"regula-faz-dla-ukladu-woda-chlorek-sodu\">Reguła faz dla układu woda–chlorek sodu</h3><p>Zgodnie z regułą faz Gibbsa, dla układu dwuskładnikowego, jakim jest mieszanina wody i chlorku sodu, liczba stopni swobody (s) wynosi: s = 2 + 2 – f, gdzie f to liczba faz. Gdy w układzie współistnieją para wodna, roztwór nasycony oraz stały NaCl, liczba faz wynosi 3, co daje s = 1. Oznacza to, że układ jest jednozmienny – można zmieniać tylko jeden parametr (np. temperaturę lub ciśnienie) bez naruszania równowagi fazowej.</p><p>Dalsze zwiększanie liczby faz prowadzi do sytuacji, w której liczba stopni swobody osiąga zero. Dla układu H<sub>2</sub>O–NaCl maksymalna liczba faz, przy s = 0, wynosi f = 4. W praktyce oznacza to, że w temperaturze 273,30 K, obok pary wodnej, nasyconego roztworu i kryształów bezwodnego NaCl, pojawia się dodatkowo faza stała w postaci dwuwodzianu chlorku sodu (NaCl·2H<sub>2</sub>O). Taki układ jest niezmienny – wszystkie parametry (temperatura, ciśnienie, skład) są ściśle określone.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile stopni swobody ma układ woda–chlorek sodu, gdy współistnieją trzy fazy: para wodna, roztwór nasycony i stały NaCl?",
      "answer": "Zgodnie z regułą faz Gibbsa, dla układu dwuskładnikowego z trzema fazami liczba stopni swobody wynosi 1 (s = 2 + 2 – 3 = 1)."
    },
    {
      "question": "Jaka jest maksymalna liczba faz w układzie H₂O–NaCl i kiedy jest osiągana?",
      "answer": "Maksymalna liczba faz wynosi 4 i jest osiągana, gdy liczba stopni swobody s = 0. Wtedy obok pary wodnej, roztworu nasyconego i kryształów bezwodnego NaCl pojawiają się również kryształy dwuwodzianu NaCl·2H₂O."
    }
  ]
};
