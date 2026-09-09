import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_66_metodaOrbitaliMolekularnychData: StructuredChapter = {
  "chapterTitle": "Metoda orbitali molekularnych",
  "toc": [
    {
      "title": "Wprowadzenie do metody orbitali molekularnych",
      "anchorId": "wprowadzenie-do-metody-orbitali-molekularnych"
    },
    {
      "title": "Tworzenie orbitali molekularnych z orbitali atomowych",
      "anchorId": "tworzenie-orbitali-molekularnych-z-orbitali-atomowych"
    },
    {
      "title": "Orbitale wiążące i antywiążące",
      "anchorId": "orbitale-wiazace-i-antywiaczace"
    },
    {
      "title": "Warunki efektywnej kombinacji orbitali atomowych",
      "anchorId": "warunki-efektywnej-kombinacji-orbitali-atomowych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-metody-orbitali-molekularnych\">Wprowadzenie do metody orbitali molekularnych</h3><p>W chemii kwantowej do opisu elektronów w cząsteczkach stosuje się metody przybliżone, oparte na funkcji falowej układu. Jedną z podstawowych technik jest metoda wariacyjna, w której szukaną funkcję falową Ψ przedstawia się jako liniową kombinację pewnych funkcji bazowych φ<sub>1</sub>, φ<sub>2</sub>, φ<sub>3</sub>, ...: Ψ = c<sub>1</sub>φ<sub>1</sub> + c<sub>2</sub>φ<sub>2</sub> + c<sub>3</sub>φ<sub>3</sub> + ... . Zadanie sprowadza się do takiego doboru współczynników c<sub>1</sub>, c<sub>2</sub>, c<sub>3</sub>, ..., aby energia układu obliczona za pomocą tej funkcji osiągnęła minimum.</p><p>Wybór funkcji bazowych nie jest całkowicie dowolny – opiera się na znajomości fizyki atomowej. Najczęściej jako funkcje bazowe wykorzystuje się orbitale atomowe, czyli funkcje falowe opisujące elektrony w pojedynczych atomach. Na tej podstawie powstały dwie główne metody: <strong>metoda wiązań walencyjnych</strong> oraz <strong>metoda orbitali molekularnych</strong>. Obie dostarczają przybliżonych funkcji falowych dla cząsteczek, ale różnią się sposobem konstrukcji i interpretacją.</p><p>W metodzie orbitali molekularnych (często nazywanej metodą MO) zakłada się, że zachowanie elektronu w cząsteczce opisuje orbital molekularny (cząsteczkowy), analogicznie do orbitalu atomowego w atomie. Orbital atomowy jest orbitalem jednocentrowym, ponieważ opisuje elektron w polu pojedynczego jądra. Orbital molekularny jest orbitalem wielocentrowym, gdyż odnosi się do układu z więcej niż jednym jądrem. Mimo tych różnic orbitale atomowe i molekularne mają wiele wspólnych cech: oba są scharakteryzowane przez odpowiednie liczby kwantowe i podlegają zakazowi Pauliego, który mówi, że na jednym orbitalu mogą znajdować się co najwyżej dwa elektrony o przeciwnych spinach.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"tworzenie-orbitali-molekularnych-z-orbitali-atomowych\">Tworzenie orbitali molekularnych z orbitali atomowych</h3><p>Rozważmy cząsteczkę z dwoma jądrami atomowymi, A i B. Szukany orbital molekularny Ψ<sub>AB</sub> będzie się na ogół różnić kształtem od orbitali atomowych Ψ<sub>A</sub> i Ψ<sub>B</sub>. Jednak w bezpośrednim sąsiedztwie jądra A, gdzie pole elektryczne jest zdominowane przez ładunek tego jądra, dobrym przybliżeniem orbitalu molekularnego jest orbital atomowy Ψ<sub>A</sub>. Podobnie w pobliżu jądra B orbital Ψ<sub>B</sub> stanowi dobre przybliżenie. Ta obserwacja prowadzi do konstrukcji funkcji wariacyjnej jako liniowej kombinacji orbitali atomowych:</p><p>Ψ<sub>AB</sub> = c<sub>A</sub>Ψ<sub>A</sub> + c<sub>B</sub>Ψ<sub>B</sub>.</p><p>Współczynniki c<sub>A</sub> i c<sub>B</sub> dobiera się metodą wariacyjną tak, aby energia cząsteczki była minimalna. Z mechaniki kwantowej wynika, że dla układu dwuatomowego istnieją dwie takie funkcje falowe (dwa orbitale molekularne): jedna z kombinacją ze znakiem plus, a druga ze znakiem minus:</p><p>Ψ<sub>+</sub> = c<sub>A</sub>Ψ<sub>A</sub> + c<sub>B</sub>Ψ<sub>B</sub> oraz Ψ<sub>−</sub> = c<sub>A</sub>Ψ<sub>A</sub> − c<sub>B</sub>Ψ<sub>B</sub>.</p><p>W obu przypadkach współczynniki muszą odpowiadać minimum energii danego orbitalu.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"orbitale-wiazace-i-antywiaczace\">Orbitale wiążące i antywiążące</h3><p>Orbital Ψ<sub>+</sub> (kombinacja symetryczna) charakteryzuje się niższą energią niż energia elektronu na orbitalach atomowych Ψ<sub>A</sub> lub Ψ<sub>B</sub>. Nazywamy go <strong>orbitalem wiążącym</strong>, ponieważ przejście elektronów z orbitali atomowych izolowanych atomów na ten orbital prowadzi do układu o niższej energii, a więc bardziej trwałego.</p><p>Orbital Ψ<sub>−</sub> (kombinacja antysymetryczna) ma energię wyższą niż energia elektronu na którymkolwiek z orbitali atomowych. Jest to <strong>orbital antywiążący</strong>. Cząsteczka, w której elektrony obsadziłyby orbital antywiążący, byłaby bogatsza w energię niż dwa izolowane atomy, a zatem mniej trwała.</p><p>Z powyższych rozważań wynika, że każdej parze orbitali atomowych wchodzących w kombinację liniową odpowiada para orbitali molekularnych: jeden wiążący i jeden antywiążący. Jednak nie wszystkie kombinacje orbitali atomowych prowadzą do efektywnych orbitali molekularnych, czyli takich, które znacząco różnią się energią od orbitali wyjściowych.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"warunki-efektywnej-kombinacji-orbitali-atomowych\">Warunki efektywnej kombinacji orbitali atomowych</h3><p>Aby kombinacja liniowa orbitali atomowych dała efektywny orbital molekularny, muszą być spełnione trzy podstawowe warunki:</p><ol><li><strong>Porównywalne energie orbitali atomowych</strong> – orbitale wchodzące w kombinację powinny mieć zbliżone energie elektronów; duża różnica energii utrudnia efektywne nakładanie się.</li><li><strong>Pokrywanie się orbitali</strong> – orbitale atomowe muszą się nakładać przestrzennie; im większe nakładanie, tym mocniejsze powstające wiązanie.</li><li><strong>Odpowiednia symetria</strong> – orbitale muszą mieć taką samą symetrię względem osi łączącej jądra, aby mogły się efektywnie nakładać.</li></ol><p>Znaczenie tych warunków zostanie szczegółowo omówione na konkretnych przykładach w dalszej części materiału.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie są dwa główne typy orbitali molekularnych powstających z kombinacji dwóch orbitali atomowych?",
      "answer": "Orbital wiążący (o niższej energii) i orbital antywiążący (o wyższej energii)."
    },
    {
      "question": "Wymień trzy warunki, które muszą spełniać orbitale atomowe, aby utworzyć efektywny orbital molekularny.",
      "answer": "1) Porównywalne energie orbitali, 2) pokrywanie się orbitali, 3) ta sama symetria względem osi wiązania."
    },
    {
      "question": "Co oznacza stwierdzenie, że orbital molekularny jest orbitalem wielocentrowym?",
      "answer": "Oznacza to, że orbital molekularny opisuje elektron w polu więcej niż jednego jądra atomowego, w przeciwieństwie do orbitalu atomowego, który jest jednocentrowy."
    }
  ]
};
