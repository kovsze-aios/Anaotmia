import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_34_atomWodoruILiczbyKwantoweData: StructuredChapter = {
  "chapterTitle": "Atom wodoru i liczby kwantowe",
  "toc": [
    {
      "title": "Budowa atomu wodoru",
      "anchorId": "budowa-atomu-wodoru"
    },
    {
      "title": "Energia potencjalna elektronu",
      "anchorId": "energia-potencjalna-elektronu"
    },
    {
      "title": "Funkcje falowe i warunki porządności",
      "anchorId": "funkcje-falowe-i-warunki-porzadnosci"
    },
    {
      "title": "Główna liczba kwantowa",
      "anchorId": "glowna-liczba-kwantowa"
    },
    {
      "title": "Poboczna liczba kwantowa",
      "anchorId": "poboczna-liczba-kwantowa"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"budowa-atomu-wodoru\">Budowa atomu wodoru</h3><p>Atom wodoru jest najprostszym układem atomowym – składa się z jądra o liczbie atomowej Z = 1 i ładunku +e (gdzie e to ładunek elementarny) oraz z pojedynczego elektronu o ładunku −e, który porusza się w polu elektrycznym jądra. Zachowanie elektronu opisuje funkcja falowa, będąca rozwiązaniem równania Schrödingera dla atomu wodoru, czyli równania, w którym energia potencjalna V odpowiada oddziaływaniu elektronu z jądrem.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"energia-potencjalna-elektronu\">Energia potencjalna elektronu</h3><p>Energia potencjalna ciała zależy od jego położenia w polu sił – podobnie jak w polu grawitacyjnym Ziemi, energia potencjalna elektronu w polu elektrycznym protonu zależy od odległości między tymi cząstkami. Przyjmuje się, że gdy elektron znajduje się w nieskończonej odległości od jądra (tak, że oddziaływanie jest pomijalne), jego energia potencjalna jest równa zeru. W miarę zbliżania się elektronu do jądra, przyciąganie elektrostatyczne rośnie, a energia potencjalna maleje, przyjmując wartości ujemne. Dla odległości r od jądra o ładunku +e energia potencjalna wyraża się wzorem: E<sub>pot</sub> = −e²/(4πε<sub>0</sub>r), gdzie ε<sub>0</sub> = 8,85418721(5)·10⁻¹² C²·m⁻¹·J⁻¹ jest przenikalnością elektryczną próżni. Po podstawieniu tego wyrażenia do równania Schrödingera otrzymuje się równanie falowe dla atomu wodoru.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"funkcje-falowe-i-warunki-porzadnosci\">Funkcje falowe i warunki porządności</h3><p>Rozwiązania równania Schrödingera nie zawsze mogą być użyte do opisu prawdopodobieństwa znalezienia elektronu. Aby funkcja falowa mogła służyć do tego celu, musi być <strong>skończona</strong>, <strong>ciągła</strong> i <strong>jednoznaczna</strong>. Prawdopodobieństwo nie może przyjmować wartości nieskończonych ani być niejednoznaczne w danym punkcie przestrzeni, a także musi zmieniać się w sposób ciągły. Funkcje spełniające te warunki nazywane są <strong>funkcjami porządnymi</strong>. Wymóg, aby funkcje falowe były porządne, prowadzi do istotnych ograniczeń na możliwe wartości energii i momentu pędu elektronu.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"glowna-liczba-kwantowa\">Główna liczba kwantowa</h3><p>Pierwszym ograniczeniem wynikającym z warunku porządności jest kwantyzacja energii elektronu w atomie wodoru. Energia ta może przyjmować tylko wartości określone wzorem: E = −(m<sub>e</sub>e⁴)/(8ε<sub>0</sub>²h²n²), gdzie n jest <strong>główną liczbą kwantową</strong> i przyjmuje wartości naturalne: n = 1, 2, 3, … Oznacza to, że elektron może przebywać tylko na ściśle określonych poziomach energetycznych, a stany pośrednie są niedozwolone. Najniższy poziom (n = 1) ma najbardziej ujemną energię, a wraz ze wzrostem n energia rośnie, zbliżając się do zera.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"poboczna-liczba-kwantowa\">Poboczna liczba kwantowa</h3><p>Drugie ograniczenie dotyczy momentu pędu elektronu. Moment pędu jest wielkością wektorową, która w ruchu krzywoliniowym odgrywa rolę analogiczną do pędu w ruchu prostoliniowym. Aby równanie Schrödingera miało rozwiązania będące funkcjami porządnymi, moment pędu M elektronu musi być skwantowany i wyrażać się wzorem: M = √(l(l+1)) · h/(2π), gdzie l jest <strong>poboczną (orbitalną) liczbą kwantową</strong> i przyjmuje wartości całkowite od 0 do n−1. Dla n = 1, l może być tylko 0, co oznacza zerowy moment pędu. Dla n = 2, l przyjmuje wartości 0 lub 1, a dla n = 3 – 0, 1 lub 2, i tak dalej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie warunki musi spełniać funkcja falowa, aby mogła opisywać prawdopodobieństwo znalezienia elektronu?",
      "answer": "Funkcja falowa musi być skończona, ciągła i jednoznaczna."
    },
    {
      "question": "Jaką wartość przyjmuje główna liczba kwantowa n dla najniższego poziomu energetycznego elektronu w atomie wodoru?",
      "answer": "Dla najniższego poziomu energetycznego n = 1."
    },
    {
      "question": "Jakie wartości może przyjmować poboczna liczba kwantowa l dla danej głównej liczby kwantowej n?",
      "answer": "Poboczna liczba kwantowa l może przyjmować wartości całkowite od 0 do n−1."
    }
  ]
};
