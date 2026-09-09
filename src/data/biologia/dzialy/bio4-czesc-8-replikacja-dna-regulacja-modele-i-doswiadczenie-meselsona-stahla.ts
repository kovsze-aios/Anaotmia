import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_8_replikacjaDnaRegulacjaModeleIDoswiadczenieMeselsonaStahlaData: StructuredChapter = {
  "chapterTitle": "Replikacja DNA: regulacja, modele i doświadczenie Meselsona-Stahla",
  "toc": [
    {
      "title": "Regulacja replikacji DNA",
      "anchorId": "regulacja-replikacji-dna"
    },
    {
      "title": "Replikacja RNA u wirusów",
      "anchorId": "replikacja-rna-wirusow"
    },
    {
      "title": "Semikonserwatywny model replikacji DNA",
      "anchorId": "semikonserwatywny-model"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"regulacja-replikacji-dna\">Regulacja replikacji DNA</h3><p>Proces replikacji DNA jest precyzyjnie kontrolowany, aby zachodził tylko raz w trakcie każdego cyklu komórkowego. Białka inicjujące replikację są usuwane z DNA natychmiast po utworzeniu oczka replikacyjnego, co uniemożliwia ponowne rozpoczęcie syntezy i powstawanie wielu kopii materiału genetycznego.</p><p>W warunkach niekorzystnych dla komórki, takich jak uszkodzenia DNA spowodowane np. promieniowaniem jonizującym, replikacja zostaje wstrzymana. Komórka wytwarza wówczas białka naprawcze, które usuwają defekty. Dopóki naprawa nie zostanie zakończona, proces replikacji jest zablokowany, co zapobiega przekazywaniu błędnych informacji genetycznej do komórek potomnych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"replikacja-rna-wirusow\">Replikacja RNA u wirusów</h3><p>U niektórych wirusów, na przykład koronawirusów, materiałem genetycznym jest RNA. W cyklu infekcyjnym tych patogenów zachodzi replikacja RNA, którą katalizuje enzym zwany polimerazą RNA zależną od RNA. Enzym ten jest kodowany przez genom wirusa i umożliwia powielenie wirusowego RNA.</p><p>Cykl infekcyjny koronawirusa obejmuje kilka etapów. Najpierw glikoproteiny na powierzchni wirusa rozpoznają receptory komórki gospodarza i przyłączają się do nich (adsorpcja). Następnie kapsyd wirusa wraz z materiałem genetycznym wnika do cytoplazmy, gdzie ulega rozpadowi, uwalniając RNA (wnikanie). Kolejno zachodzi replikacja RNA, translacja białek wirusowych na rybosomach komórki, składanie nowych wirionów i ich uwalnianie z komórki.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"semikonserwatywny-model\">Semikonserwatywny model replikacji DNA</h3><p>Przełomowe badania nad mechanizmem replikacji DNA przeprowadzili w 1958 roku Matthew Meselson i Franklin Stahl. Wykorzystali oni komórki bakteryjne, aby sprawdzić, który z trzech możliwych modeli replikacji jest prawdziwy: konserwatywny, semikonserwatywny czy dyspersyjny.</p><p>W modelu konserwatywnym (zachowawczym) jedna z cząsteczek potomnych zawiera wyłącznie stare nici, a druga – wyłącznie nowe. W modelu semikonserwatywnym (półzachowawczym) każda cząsteczka potomna składa się z jednej nici starej i jednej nowej. Model dyspersyjny zakłada, że nici potomne są mozaiką fragmentów starych i nowych.</p><p>W doświadczeniu bakterie hodowano na podłożu z ciężkim izotopem azotu (15N), a następnie przeniesiono na podłoże z lekkim izotopem (14N). Dzięki temu nowo syntetyzowane nici zawierały 14N, a stare – 15N. Cząsteczki DNA różniące się gęstością rozdzielano metodą wirowania w gradiencie gęstości chlorku cezu (CsCl). DNA z 15N osadzał się bliżej dna probówki niż DNA z 14N.</p><p>Po pierwszej rundzie replikacji zaobserwowano pojedyncze pasmo DNA o pośredniej gęstości, co wykluczyło model konserwatywny. Po drugiej rundzie pojawiły się dwa pasma: jedno o gęstości pośredniej i jedno o gęstości lekkiej. Taki wynik był zgodny z modelem semikonserwatywnym, a niezgodny z modelem dyspersyjnym. Doświadczenie to potwierdziło, że replikacja DNA przebiega w sposób semikonserwatywny.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego replikacja DNA zachodzi tylko raz przed podziałem komórki?",
      "answer": "Ponieważ białka inicjujące replikację są odłączane od DNA zaraz po utworzeniu oczka replikacyjnego, co zapobiega ponownemu rozpoczęciu replikacji i powstawaniu wielu kopii DNA."
    },
    {
      "question": "Jaki enzym katalizuje replikację RNA u wirusów takich jak koronawirusy?",
      "answer": "Polimeraza RNA zależna od RNA, kodowana przez genom wirusa."
    },
    {
      "question": "Na czym polega semikonserwatywny model replikacji DNA?",
      "answer": "Każda z dwóch cząsteczek potomnych DNA zawiera jedną nić starą (macierzystą) i jedną nić nowo zsyntetyzowaną."
    },
    {
      "question": "Jakie wyniki doświadczenia Meselsona-Stahla potwierdziły model semikonserwatywny?",
      "answer": "Po pierwszej rundzie replikacji uzyskano DNA o pośredniej gęstości, a po drugiej rundzie dwa pasma: o pośredniej i lekkiej gęstości, co jest zgodne z modelem semikonserwatywnym."
    }
  ]
};
