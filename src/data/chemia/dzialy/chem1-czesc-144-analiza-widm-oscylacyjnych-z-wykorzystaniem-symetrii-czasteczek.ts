import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_144_analizaWidmOscylacyjnychZWykorzystaniemSymetriiCzasteczekData: StructuredChapter = {
  "chapterTitle": "Analiza widm oscylacyjnych z wykorzystaniem symetrii cząsteczek",
  "toc": [
    {
      "title": "Wprowadzenie do symetrii w spektroskopii oscylacyjnej",
      "anchorId": "wprowadzenie-do-symetrii-w-spektroskopii-oscylacyjnej"
    },
    {
      "title": "Metoda wektorów przesunięć atomów",
      "anchorId": "metoda-wektorow-przesuniec-atomow"
    },
    {
      "title": "Przykład: cząsteczka wody",
      "anchorId": "przyklad-czasteczka-wody"
    },
    {
      "title": "Rozkład reprezentacji na składowe nieprzywiedlne",
      "anchorId": "rozklad-reprezentacji-na-skladowe-nieprzywiedlne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-symetrii-w-spektroskopii-oscylacyjnej\">Wprowadzenie do symetrii w spektroskopii oscylacyjnej</h3><p>Analiza symetrii cząsteczek stanowi niezwykle użyteczne narzędzie w interpretacji widm w podczerwieni. Pozwala ona na wyciąganie wniosków dotyczących struktury i ruchów wewnętrznych cząsteczek. Fundamentalnym założeniem jest, że wszystkie niezależne ruchy składowe cząsteczki – zarówno oscylacje, rotacje, jak i translacje – można rozłożyć na elementarne składowe, z których każda wykazuje symetrię odpowiadającą jednej z nieprzywiedlnych reprezentacji grupy punktowej danej cząsteczki.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"metoda-wektorow-przesuniec-atomow\">Metoda wektorów przesunięć atomów</h3><p>Aby w praktyce zastosować tę koncepcję, każdemu atomowi w cząsteczce przypisuje się trzy wzajemnie prostopadłe wektory przesunięcia, które obrazują możliwe kierunki ruchu atomu. Wektory te stanowią bazę do konstrukcji reprezentacji przywiedlnej opisującej całkowity ruch cząsteczki. Następnie reprezentację tę rozkłada się na sumę reprezentacji nieprzywiedlnych, z których każda odpowiada konkretnemu rodzajowi ruchu składowego. Do przeprowadzenia tego rozkładu nie jest konieczne wyznaczanie pełnych macierzy transformacji – wystarczy znajomość charakterów, czyli śladów tych macierzy.</p><p>Charaktery wyznacza się, obserwując zachowanie wektorów przesunięć pod działaniem operacji symetrii grupy punktowej. Jeśli wektor pozostaje na swoim miejscu, jego wkład do charakteru wynosi 1; jeśli wektor zmienia położenie lub kierunek na przeciwny, jego wkład wynosi odpowiednio 0 lub -1. Suma wkładów wszystkich wektorów daje charakter danej operacji.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"przyklad-czasteczka-wody\">Przykład: cząsteczka wody</h3><p>Rozważmy cząsteczkę wody, która należy do grupy punktowej C<sub>2v</sub>. W tabeli charakterów tej grupy znajdują się operacje: E (tożsamość), C<sub>2</sub> (obrót o 180°), σ<sub>v</sub>(xz) (odbicie w płaszczyźnie pionowej) oraz σ<sub>v</sub>'(yz) (odbicie w drugiej płaszczyźnie pionowej).</p><p>Dla cząsteczki wody wybieramy układ współrzędnych tak, aby atomy wodoru leżały w płaszczyźnie xz, a atom tlenu w początku układu. Każdemu atomowi przypisujemy trzy wektory: x, y, z. Pod działaniem operacji tożsamości E wszystkie wektory pozostają niezmienione, więc charakter wynosi 9 (9 wektorów × 1).</p><p>Podczas obrotu C<sub>2</sub> wokół osi z, wektory przy atomach wodoru zamieniają się miejscami, a wektor z przy atomie tlenu pozostaje, ale wektory x i y przy tlenie zmieniają znak. Wkład od wektorów przy atomach wodoru wynosi 0 (bo przechodzą w inne wektory), a od wektorów przy tlenie: z daje 1, x i y dają -1 każdy, co sumarycznie daje charakter -1.</p><p>Odbicie w płaszczyźnie xz (płaszczyzna cząsteczki) pozostawia wektory x i z bez zmian, ale zmienia kierunek wektorów y na przeciwny. Dla wszystkich trzech atomów daje to wkład: 6 wektorów (x i z) × 1 = 6 oraz 3 wektory (y) × (-1) = -3, co sumarycznie daje charakter 3.</p><p>Odbicie w płaszczyźnie yz (prostopadłej do płaszczyzny cząsteczki) pozostawia wektory y i z przy tlenie, ale zmienia kierunek wektora x przy tleniu. Wektory przy atomach wodoru zamieniają się miejscami, więc ich wkład wynosi 0. Zatem charakter dla tej operacji to: y (1) + z (1) + x (-1) = 1.</p><p>Otrzymane charaktery reprezentacji przywiedlnej Γ wynoszą: E: 9, C<sub>2</sub>: -1, σ<sub>v</sub>(xz): 3, σ<sub>v</sub>'(yz): 1.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"rozklad-reprezentacji-na-skladowe-nieprzywiedlne\">Rozkład reprezentacji na składowe nieprzywiedlne</h3><p>Korzystając z formalizmu teorii grup, reprezentację Γ można rozłożyć na sumę reprezentacji nieprzywiedlnych grupy C<sub>2v</sub>. Dla cząsteczki wody otrzymuje się następujący wynik: Γ = 3A<sub>1</sub> + A<sub>2</sub> + 3B<sub>1</sub> + 2B<sub>2</sub>. Każda z tych reprezentacji odpowiada konkretnym ruchom cząsteczki, w tym drganiom normalnym. Taki rozkład pozwala przewidzieć liczbę pasm w widmie IR i Ramana oraz określić, które drgania są aktywne w danej technice spektroskopowej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki jest cel analizy symetrii cząsteczek w kontekście widm oscylacyjnych?",
      "answer": "Celem jest interpretacja widm w podczerwieni i wyciąganie wniosków o strukturze cząsteczek poprzez rozkład ruchów na składowe o określonej symetrii."
    },
    {
      "question": "Jak wyznacza się charakter operacji symetrii dla wektorów przesunięć atomów?",
      "answer": "Charakter danej operacji to suma wkładów od wszystkich wektorów: wektor niezmieniony daje wkład 1, wektor zmieniający kierunek na przeciwny daje -1, a wektor przechodzący w inny wektor daje 0."
    },
    {
      "question": "Dla cząsteczki wody (grupa C2v) podaj charaktery reprezentacji przywiedlnej Γ dla operacji E, C2, σv(xz) i σv'(yz).",
      "answer": "Charaktery wynoszą: E: 9, C2: -1, σv(xz): 3, σv'(yz): 1."
    },
    {
      "question": "Jaki jest wynik rozkładu reprezentacji Γ dla cząsteczki wody na reprezentacje nieprzywiedlne?",
      "answer": "Γ = 3A1 + A2 + 3B1 + 2B2."
    }
  ]
};
