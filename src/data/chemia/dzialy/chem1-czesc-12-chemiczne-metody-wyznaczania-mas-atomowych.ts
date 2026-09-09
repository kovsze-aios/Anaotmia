import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_12_chemiczneMetodyWyznaczaniaMasAtomowychData: StructuredChapter = {
  "chapterTitle": "Chemiczne metody wyznaczania mas atomowych",
  "toc": [
    {
      "title": "Wybór właściwej masy atomowej",
      "anchorId": "wybor-masy-atomowej"
    },
    {
      "title": "Metoda Cannizzaro",
      "anchorId": "metoda-cannizzaro"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wybor-masy-atomowej\">Wybór właściwej masy atomowej</h3><p>Dokładna analiza chemiczna związków, takich jak chlorowodór, pozwala na wyznaczenie względnej masy atomowej jedynie z pewną niejednoznacznością. Przykładowo, gdyby przyjąć wzór H<sub>2</sub>Cl, to masa atomowa chloru wynosiłaby około 17,73 u, natomiast dla wzoru HCl masa ta wynosi 35,45 u. W rzeczywistości jednak masa atomowa chloru wynosi 35,45 u, co odpowiada wzorowi HCl. Z tego wynika, że na podstawie samego składu chemicznego można otrzymać kilka możliwych wartości masy atomowej, ale tylko jedna z nich jest poprawna.</p><p>Aby dokonać właściwego wyboru, konieczne jest porównanie otrzymanych wartości z przybliżoną masą atomową danego pierwiastka. Najprostszym sposobem oszacowania przybliżonej masy atomowej jest wykorzystanie położenia pierwiastka w układzie okresowym. Masa atomowa pierwiastka jest bowiem zbliżona do średniej mas atomowych pierwiastków sąsiadujących z nim w układzie okresowym, zarówno w okresie, jak i w grupie.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"metoda-cannizzaro\">Metoda Cannizzaro</h3><p>Problem wyboru właściwej wartości masy atomowej został rozwiązany w 1858 roku przez Stanislao Cannizzaro. Jego metoda opierała się na hipotezie Avogadra, która mówi, że w równych objętościach różnych gazów, w tych samych warunkach ciśnienia i temperatury, znajduje się taka sama liczba cząsteczek. Cannizzaro wykorzystał tę zasadę do wyznaczenia mas cząsteczkowych wielu związków lotnych, a następnie na podstawie ich składu chemicznego wyznaczył masy atomowe poszczególnych pierwiastków.</p><p>Metoda Cannizzaro odegrała kluczową rolę w rozwoju chemii, umożliwiając jednoznaczne ustalenie mas atomowych wszystkich pierwiastków. Szczegółowy opis tej metody można znaleźć w podręcznikach z historii chemii.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego na podstawie analizy chemicznej chlorowodoru można otrzymać kilka różnych wartości masy atomowej chloru?",
      "answer": "Ponieważ nieznany jest wzór cząsteczkowy związku; dla różnych założonych wzorów (np. HCl, H₂Cl) otrzymuje się różne wartości masy atomowej."
    },
    {
      "question": "Jaki prosty sposób pozwala oszacować przybliżoną masę atomową pierwiastka?",
      "answer": "Można ją oszacować na podstawie położenia pierwiastka w układzie okresowym, gdyż masa atomowa jest zbliżona do średniej mas atomowych pierwiastków sąsiadujących."
    },
    {
      "question": "Kto i w którym roku rozwiązał problem wyboru właściwej masy atomowej?",
      "answer": "S. Cannizzaro w 1858 roku, opierając się na hipotezie Avogadra."
    }
  ]
};
