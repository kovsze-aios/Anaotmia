import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_2_budowaIRolaKwasowNukleinowychData: StructuredChapter = {
  "chapterTitle": "Budowa i rola kwasów nukleinowych",
  "toc": [
    {
      "title": "Obliczanie liczby nukleotydów w DNA",
      "anchorId": "obliczanie-liczby-nukleotydow"
    },
    {
      "title": "Reguła Chargaffa a jednoniciowość DNA",
      "anchorId": "regula-chargaffa-jednoniciowosc"
    },
    {
      "title": "Rola DNA jako nośnika informacji",
      "anchorId": "rola-dna"
    },
    {
      "title": "Eksperyment Fredericka Griffitha",
      "anchorId": "eksperyment-griffitha"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"obliczanie-liczby-nukleotydow\">Obliczanie liczby nukleotydów w DNA</h3><p>W cząsteczce DNA zasady azotowe łączą się w pary komplementarne: adenina (A) z tyminą (T), a cytozyna (C) z guaniną (G). Dzięki tej zasadzie liczba nukleotydów zawierających A jest zawsze równa liczbie nukleotydów z T, podobnie jak liczba nukleotydów z C równa się liczbie nukleotydów z G.</p><p>Przykład: Cząsteczka DNA składa się z 250 nukleotydów, z których 75 zawiera cytozynę. Aby obliczyć liczbę nukleotydów z tyminą, wykonaj następujące kroki:</p><ol><li>Ustal liczbę nukleotydów z guaniną. Skoro C = 75, to G = 75. Suma nukleotydów z C i G wynosi 75 + 75 = 150.</li><li>Od całkowitej liczby nukleotydów odejmij sumę nukleotydów z C i G: 250 – 150 = 100. Otrzymana liczba to suma nukleotydów z A i T.</li><li>Podziel tę sumę przez 2, aby uzyskać liczbę nukleotydów z tyminą: 100 : 2 = 50.</li></ol><p>Odpowiedź: W tej cząsteczce tyminę zawiera 50 nukleotydów.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"regula-chargaffa-jednoniciowosc\">Reguła Chargaffa a jednoniciowość DNA</h3><p>Reguła Chargaffa mówi, że w dwuniciowym DNA liczba zasad purynowych (A i G) jest równa liczbie zasad pirymidynowych (T i C), a dokładniej: A = T oraz G = C. Ta reguła pozwala odróżnić DNA dwuniciowe od jednoniciowego.</p><p>Przykład: Fragment DNA o długości 200 nukleotydów zawiera 63 nukleotydy z guaniną i 56 nukleotydów z adeniną. Aby sprawdzić, czy jest to cząsteczka dwuniciowa, zakładamy, że tak jest i obliczamy liczbę wszystkich nukleotydów. Zgodnie z regułą Chargaffa, liczba C = G = 63, a liczba T = A = 56. Suma wszystkich nukleotydów wynosiłaby wtedy: 63 + 56 + 63 + 56 = 238.</p><p>Jednak w zadaniu podano, że cząsteczka ma tylko 200 nukleotydów. Ponieważ obliczona liczba (238) nie zgadza się z podaną (200), oznacza to, że zasady nie mogą być w pełni komplementarne. Wniosek: cząsteczka jest jednoniciowa, ponieważ w dwuniciowej DNA liczba nukleotydów byłaby większa i zgodna z regułą Chargaffa.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"rola-dna\">Rola DNA jako nośnika informacji</h3><p>Kwas deoksyrybonukleinowy (DNA) jest materiałem genetycznym wszystkich organizmów oraz niektórych wirusów. Określa on strukturę pierwszorzędową zarówno RNA, jak i białek. Od białek zależą cechy organizmu – morfologiczne, anatomiczne i fizjologiczne. Cechy te są przekazywane z pokolenia na pokolenie, co czyni DNA nośnikiem informacji genetycznej odpowiedzialnym za dziedziczenie.</p><p>Ustalenie, że to właśnie DNA jest materiałem dziedzicznym, nastąpiło w połowie XX wieku dzięki badaniom na bakteriach i wirusach. Kluczową rolę odegrał eksperyment przeprowadzony przez Fredericka Griffitha.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"eksperyment-griffitha\">Eksperyment Fredericka Griffitha</h3><p>Frederick Griffith, brytyjski lekarz wojskowy, w 1928 roku badał bakterie wywołujące zapalenie płuc (dwoinkę zapalenia płuc, <em>Streptococcus pneumoniae</em>). Wykorzystał dwa szczepy: chorobotwórczy szczep S, który wytwarza śluzową otoczkę, oraz niechorobotwórczy szczep R, pozbawiony otoczki.</p><p>Przebieg doświadczenia:</p><ol><li>Myszy zakażone żywymi bakteriami szczepu S umierały, natomiast myszy zakażone żywymi bakteriami szczepu R pozostawały zdrowe.</li><li>Myszy zakażone martwymi bakteriami szczepu S (zabitymi wysoką temperaturą) nie chorowały. Jednak myszy zakażone mieszaniną żywych bakterii szczepu R i martwych bakterii szczepu S umierały, a z ich ciał wyizolowano żywe bakterie szczepu S.</li></ol><p>Griffith wykazał, że martwe bakterie chorobotwórcze mogą przekazać żywym bakteriom niechorobotwórczym czynnik powodujący ich transformację w formę zjadliwą. W tamtym czasie nie wiedział jednak, że tym czynnikiem jest DNA – przypuszczał jedynie, że jest to składnik cytoplazmy bakterii chorobotwórczych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "W cząsteczce DNA o długości 300 nukleotydów znajduje się 90 nukleotydów z cytozyną. Ile nukleotydów z tyminą zawiera ta cząsteczka?",
      "answer": "60. Ponieważ C = G = 90, suma C i G wynosi 180. Pozostałe 120 nukleotydów to A i T, więc T = 120 / 2 = 60."
    },
    {
      "question": "Fragment DNA o długości 150 nukleotydów zawiera 40 nukleotydów z adeniną i 35 z guaniną. Czy może to być DNA dwuniciowy? Uzasadnij.",
      "answer": "Nie. W dwuniciowym DNA liczba A = T, a G = C. Suma wszystkich nukleotydów wynosiłaby 2*(40+35) = 150, co zgadza się z podaną długością, ale sprawdźmy: A=40, T=40, G=35, C=35, suma = 150. Jednakże w zadaniu podano tylko 150 nukleotydów, a obliczona suma również wynosi 150, więc jest to możliwe. Ale jeśli podano, że A=40 i G=35, to T=40 i C=35, co daje sumę 150. Zatem może być dwuniciowy. (Uwaga: w przykładzie z podręcznika suma nie zgadzała się, ale tutaj się zgadza, więc odpowiedź brzmi: tak, może być dwuniciowy, jeśli spełnione są proporcje.)"
    },
    {
      "question": "Co wykazał eksperyment Griffitha?",
      "answer": "Wykazał, że martwe bakterie chorobotwórcze mogą przekazać czynnik transformujący żywym bakteriom niechorobotwórczym, zmieniając je w formę zjadliwą. Później zidentyfikowano ten czynnik jako DNA."
    }
  ]
};
