import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_31_zasadaNieoznaczonosciHeisenbergaData: StructuredChapter = {
  "chapterTitle": "Zasada nieoznaczoności Heisenberga",
  "toc": [
    {
      "title": "Wprowadzenie do zasady nieoznaczoności",
      "anchorId": "wprowadzenie-do-zasady-nieoznacznosci"
    },
    {
      "title": "Wyprowadzenie relacji nieoznaczoności",
      "anchorId": "wyprowadzenie-relacji-nieoznacznosci"
    },
    {
      "title": "Konsekwencje dla mikroświata i makroświata",
      "anchorId": "konsekwencje-dla-mikroswiata-i-makroswiata"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-zasady-nieoznacznosci\">Wprowadzenie do zasady nieoznaczoności</h3><p>W klasycznym opisie ruchu ciał makroskopowych zakłada się, że możliwe jest jednoczesne, dowolnie dokładne określenie położenia i pędu obiektu. Jednak w świecie cząstek elementarnych, takich jak elektrony, sytuacja wygląda zupełnie inaczej. Niemiecki fizyk Werner Heisenberg sformułował w 1927 roku fundamentalną zasadę, która stanowi jeden z filarów mechaniki kwantowej. Mówi ona, że istnieje nieprzekraczalna granica dokładności jednoczesnego pomiaru niektórych par wielkości fizycznych, np. położenia i pędu.</p><p>Zasadę tę można zrozumieć, rozważając próbę obserwacji elektronu za pomocą mikroskopu. Aby zobaczyć elektron, musi on oddziaływać z fotonem, który niesie informację o jego położeniu. Jednak to oddziaływanie zaburza ruch elektronu, zmieniając jego pęd. Im krótsza długość fali światła użytego do obserwacji, tym dokładniejsze jest określenie położenia, ale jednocześnie większa jest zmiana pędu elektronu na skutek efektu Comptona. W rezultacie dokładność pomiaru położenia i pędu są ze sobą sprzężone w sposób, który uniemożliwia jednoczesne osiągnięcie dowolnej precyzji.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"wyprowadzenie-relacji-nieoznacznosci\">Wyprowadzenie relacji nieoznaczoności</h3><p>Rozważmy pomiar położenia elektronu za pomocą mikroskopu. Zgodnie z zasadami optyki, niepewność określenia położenia w kierunku prostopadłym do osi obserwacji wynosi co najmniej Δx = λ / (2 sin α), gdzie λ to długość fali użytego światła, a α to kąt aperturowy obiektywu. Aby zwiększyć dokładność pomiaru położenia, należy stosować światło o krótszej długości fali, co jednak prowadzi do wzrostu energii fotonów i silniejszego zaburzenia pędu elektronu w wyniku zderzeń (efekt Comptona).</p><p>W wyniku tych zderzeń niepewność określenia składowej pędu równoległej do osi x wynosi co najmniej Δp<sub>x</sub> = 2h sin α / λ. Iloczyn tych dwóch niepewności jest zatem równy co najmniej stałej Plancka h: Δx · Δp<sub>x</sub> ≥ h. W rzeczywistych pomiarach, gdy przyrządy nie są idealne, iloczyn ten może być większy, ale nigdy mniejszy. Ta nierówność, znana jako zasada nieoznaczoności Heisenberga, ma charakter uniwersalny i obowiązuje dla wszystkich cząstek.</p><p>Z relacji tej wynika, że im precyzyjniej wyznaczamy pęd cząstki, tym mniej dokładnie możemy określić jej położenie, i odwrotnie. Całkowicie dokładne określenie pędu (Δp<sub>x</sub> → 0) prowadzi do całkowitej nieokreśloności położenia (Δx → ∞), a dokładne określenie położenia wyklucza jakąkolwiek znajomość pędu.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"konsekwencje-dla-mikroswiata-i-makroswiata\">Konsekwencje dla mikroświata i makroświata</h3><p>Praktyczne implikacje zasady nieoznaczoności można zilustrować na przykładach. Rozważmy elektron rozpędzony w polu elektrycznym, np. w lampie telewizyjnej, z energią kinetyczną 20 000 eV. Jego pęd wynosi wówczas około 7,64·10<sup>-23</sup> kg·m·s<sup>-1</sup>. Jeśli założymy, że niepewności pomiaru położenia i pędu są równe i wynoszą około 2,574·10<sup>-17</sup> (w odpowiednich jednostkach), to niepewność pędu będzie około 330 tysięcy razy większa niż sam pęd, co czyni pomiar bezwartościowym. Aby zmniejszyć niepewność pędu do 10% jego wartości, trzeba by zwiększyć niepewność położenia do około 8,67·10<sup>-11</sup> m, co jest wartością ogromną w porównaniu z rozmiarami elektronu.</p><p>Zupełnie inaczej sytuacja wygląda dla obiektów makroskopowych. Weźmy kulkę ołowianą o masie 1 g poruszającą się z prędkością 1 cm·s<sup>-1</sup>. Jej pęd wynosi 10<sup>-5</sup> kg·m·s<sup>-1</sup>. Nawet gdyby niepewności pomiaru były rzędu 2,574·10<sup>-17</sup> (tak jak poprzednio), to są one tak znikome w porównaniu z wartościami mierzonymi, że nie mają żadnego praktycznego znaczenia. Można zatem jednocześnie precyzyjnie określić położenie i pęd kulki, co jest zgodne z intuicją i doświadczeniem codziennym.</p><p>Te rozważania prowadzą do wniosku, że opis ruchu cząstek elementarnych wymaga nowej mechaniki – mechaniki kwantowej, która uwzględnia zasadę nieoznaczoności. Mechanika klasyczna pozostaje natomiast doskonałym przybliżeniem dla ciał makroskopowych, gdzie efekty kwantowe są pomijalnie małe.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Sformułuj zasadę nieoznaczoności Heisenberga dla położenia i pędu.",
      "answer": "Iloczyn niepewności pomiaru położenia (Δx) i pędu (Δp) cząstki nie może być mniejszy niż stała Plancka h: Δx · Δp ≥ h. Oznacza to, że nie można jednocześnie dowolnie dokładnie wyznaczyć położenia i pędu cząstki."
    },
    {
      "question": "Dlaczego użycie światła o krótszej długości fali do obserwacji elektronu zwiększa niepewność pomiaru jego pędu?",
      "answer": "Krótsza długość fali oznacza fotony o większej energii, które w zderzeniach z elektronem (efekt Comptona) przekazują mu większy impuls, powodując większą zmianę pędu elektronu, a tym samym większą niepewność jego pomiaru."
    },
    {
      "question": "Wyjaśnij, dlaczego zasada nieoznaczoności nie ma praktycznego znaczenia dla obiektów makroskopowych.",
      "answer": "Dla obiektów makroskopowych, takich jak kulka o masie 1 g, niepewności wynikające z zasady nieoznaczoności są tak małe w porównaniu z wartościami mierzonymi (np. pędem), że są całkowicie pomijalne. Można więc jednocześnie precyzyjnie określić położenie i pęd, co jest zgodne z mechaniką klasyczną."
    }
  ]
};
