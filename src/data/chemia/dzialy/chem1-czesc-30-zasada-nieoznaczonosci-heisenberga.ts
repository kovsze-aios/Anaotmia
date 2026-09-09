import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_30_zasadaNieoznaczonosciHeisenbergaData: StructuredChapter = {
  "chapterTitle": "Zasada nieoznaczoności Heisenberga",
  "toc": [
    {
      "title": "Ograniczenia mechaniki klasycznej",
      "anchorId": "ograniczenia-mechaniki-klasycznej"
    },
    {
      "title": "Zasada nieoznaczoności Heisenberga",
      "anchorId": "zasada-nieoznaczonosci-heisenberga"
    },
    {
      "title": "Ilustracja na przykładzie mikroskopu",
      "anchorId": "ilustracja-na-przykladzie-mikroskopu"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"ograniczenia-mechaniki-klasycznej\">Ograniczenia mechaniki klasycznej</h3><p>W mechanice klasycznej, która opisuje ruch ciał makroskopowych, czyli obiektów znacznie większych od atomów, zakłada się, że można jednocześnie i z dowolną dokładnością wyznaczyć położenie oraz pęd danego ciała. To założenie sprawdza się w codziennym doświadczeniu, na przykład przy obserwacji ruchu planet czy samochodów.</p><p>Jednak w świecie cząstek elementarnych, takich jak elektrony, protony, neutrony czy fotony, sytuacja wygląda zupełnie inaczej. Okazuje się, że dla tych obiektów niemożliwe jest równoczesne, precyzyjne określenie zarówno położenia, jak i pędu. Ta fundamentalna ograniczoność wynika z natury kwantowej materii i została sformułowana w postaci zasady nieoznaczoności.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zasada-nieoznaczonosci-heisenberga\">Zasada nieoznaczoności Heisenberga</h3><p>W 1927 roku Werner Heisenberg sformułował zasadę nieoznaczoności, która stanowi jeden z kamieni węgielnych mechaniki kwantowej. Mówi ona, że istnieje fundamentalna granica dokładności, z jaką można jednocześnie znać położenie i pęd cząstki. Im precyzyjniej określimy położenie, tym mniej dokładnie możemy znać pęd i odwrotnie.</p><p>Zasadę tę można wyrazić matematycznie jako Δx · Δp ≥ ħ/2, gdzie Δx oznacza nieoznaczoność położenia, Δp nieoznaczoność pędu, a ħ jest zredukowaną stałą Plancka. Oznacza to, że iloczyn tych niepewności nigdy nie może być mniejszy niż pewna stała wartość, co ma głębokie konsekwencje dla opisu mikroświata.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"ilustracja-na-przykladzie-mikroskopu\">Ilustracja na przykładzie mikroskopu</h3><p>Aby zrozumieć istotę zasady nieoznaczoności, rozważmy hipotetyczny eksperyment z użyciem mikroskopu do obserwacji elektronu. Wyobraźmy sobie elektron poruszający się wzdłuż osi x, który jest oświetlany promieniowaniem o długości fali λ. Aby określić położenie elektronu, musimy zaobserwować rozproszone przez niego światło.</p><p>Dokładność pomiaru położenia jest ograniczona przez zdolność rozdzielczą mikroskopu, czyli najmniejszą odległość, jaką można jeszcze odróżnić w obrazie. Z optyki wiadomo, że zdolność rozdzielcza jest w przybliżeniu równa długości fali użytego promieniowania. Zatem aby uzyskać lepszą precyzję położenia, należałoby zastosować promieniowanie o krótszej fali, np. promienie gamma.</p><p>Jednakże krótsza fala niesie ze sobą większy pęd fotonów. Kiedy foton zderza się z elektronem, przekazuje mu część swojego pędu, co zmienia pęd elektronu w niekontrolowany sposób. W rezultacie, im dokładniej staramy się zmierzyć położenie, tym bardziej zaburzamy pęd elektronu, co uniemożliwia jednoczesne precyzyjne wyznaczenie obu wielkości. To właśnie ilustruje fundamentalną naturę zasady nieoznaczoności Heisenberga.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w mechanice klasycznej można jednocześnie dokładnie wyznaczyć położenie i pęd ciała?",
      "answer": "W mechanice klasycznej ciała makroskopowe są na tyle duże, że oddziaływanie z narzędziami pomiarowymi (np. światłem) jest zaniedbywalne, więc nie zakłóca ich ruchu w sposób istotny."
    },
    {
      "question": "Co mówi zasada nieoznaczoności Heisenberga?",
      "answer": "Zasada nieoznaczoności Heisenberga mówi, że nie można jednocześnie z dowolną dokładnością znać położenia i pędu cząstki kwantowej; iloczyn niepewności tych wielkości jest zawsze większy lub równy zredukowanej stałej Plancka podzielonej przez 2."
    },
    {
      "question": "Jak długość fali promieniowania wpływa na dokładność pomiaru położenia elektronu w mikroskopie?",
      "answer": "Krótsza długość fali promieniowania pozwala na dokładniejsze określenie położenia, ale jednocześnie fotony o krótszej fali mają większy pęd, co powoduje większe zaburzenie pędu elektronu podczas pomiaru."
    }
  ]
};
