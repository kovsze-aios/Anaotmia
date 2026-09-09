import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_48_analizaStatystycznaWBadaniuZmiennosciOrganizmowData: StructuredChapter = {
  "chapterTitle": "Analiza statystyczna w badaniu zmienności organizmów",
  "toc": [
    {
      "title": "Średnia arytmetyczna",
      "anchorId": "srednia-arytmetyczna"
    },
    {
      "title": "Mediana",
      "anchorId": "mediana"
    },
    {
      "title": "Średnia ważona",
      "anchorId": "srednia-wazona"
    },
    {
      "title": "Odchylenie standardowe",
      "anchorId": "odchylenie-standardowe"
    },
    {
      "title": "Słupki błędu (wąsy)",
      "anchorId": "slupki-bledu-wasy"
    },
    {
      "title": "Interpretacja odchylenia standardowego",
      "anchorId": "interpretacja-odchylenia-standardowego"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"srednia-arytmetyczna\">Średnia arytmetyczna</h3><p>Jedną z podstawowych miar stosowanych w analizie zmienności organizmów jest <strong>średnia arytmetyczna</strong>. Aby ją obliczyć, należy zsumować wszystkie wartości pomiarów, a następnie podzielić otrzymaną sumę przez liczbę pomiarów.</p><p>Przykładowo, dla zestawu wzrostów: 160 cm, 162 cm, 202 cm, 163 cm, 167 cm, 160 cm, 161 cm, suma wynosi 1175 cm. Dzieląc tę sumę przez 7 (liczbę pomiarów), otrzymujemy średnią arytmetyczną równą około 167,86 cm.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"mediana\">Mediana</h3><p><strong>Mediana</strong> to wartość środkowa w uporządkowanym rosnąco zbiorze danych. Aby ją wyznaczyć, należy uszeregować wszystkie pomiary od najniższego do najwyższego. Jeśli liczba pomiarów jest nieparzysta, mediana stanowi dokładnie środkowy element. W przypadku parzystej liczby pomiarów, mediana jest średnią arytmetyczną dwóch środkowych wartości.</p><p>Dla wspomnianego wcześniej przykładu, po posortowaniu wzrostów otrzymujemy: 160 cm, 160 cm, 161 cm, 162 cm, 163 cm, 167 cm, 202 cm. Ponieważ mamy 7 pomiarów (liczba nieparzysta), medianą jest czwarta wartość, czyli 162 cm.</p><p>Warto zauważyć, że średnia arytmetyczna (167,86 cm) i mediana (162 cm) różnią się w tym przypadku. Dzieje się tak, ponieważ wartość skrajna (202 cm) znacząco podwyższa średnią, podczas gdy mediana pozostaje na nią odporna. Wartości odstające mają zatem większy wpływ na średnią niż na medianę, szczególnie przy niewielkiej liczbie pomiarów.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"srednia-wazona\">Średnia ważona</h3><p>W niektórych sytuacjach poszczególne pomiary mogą mieć różne znaczenie – wtedy stosuje się <strong>średnią ważoną</strong>. Aby ją obliczyć, należy pomnożyć każdy wynik przez odpowiadającą mu wagę, zsumować te iloczyny, a następnie podzielić przez sumę wszystkich wag.</p><p>Średnia ważona pozwala uwzględnić, że niektóre obserwacje są bardziej reprezentatywne lub pochodzą z większej liczby prób.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"odchylenie-standardowe\">Odchylenie standardowe</h3><p><strong>Odchylenie standardowe</strong> (oznaczane grecką literą σ, sigma) jest miarą rozproszenia wyników wokół średniej arytmetycznej. Informuje, jak bardzo poszczególne pomiary różnią się od wartości średniej. Przykładowo, jeśli odchylenie standardowe wynosi 10, to około 2/3 wyników znajduje się w przedziale od średniej minus 10 do średniej plus 10.</p><p>Gdy próba jest liczna, trudno na podstawie samej tabeli ocenić, czy wartości są zbliżone do średniej. W takich przypadkach pomocne jest przedstawienie danych na wykresie. Rozważmy dwa zestawy danych o tej samej średniej równej 100 jednostek. W pierwszym (oznaczonym kolorem pomarańczowym) odchylenie standardowe wynosi σ = 10, co oznacza, że wartości są skupione blisko średniej – zakres zmienności (od minimum do maksimum) jest wąski. W drugim (kolor niebieski) σ = 50, więc wyniki znacznie odbiegają od średniej, a zakres zmienności jest szeroki.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"slupki-bledu-wasy\">Słupki błędu (wąsy)</h3><p>Na wykresach często umieszcza się <strong>słupki błędu</strong>, potocznie zwane „wąsami”. Są to pionowe linie zakończone poprzecznymi kreskami, które obrazują zróżnicowanie wartości w próbie. Wąsy mogą reprezentować między innymi zakres zmienności (od minimum do maksimum) lub odchylenie standardowe. Dokładne znaczenie słupków błędu jest zwykle podane w podpisie ryciny lub w treści zadania.</p><p>Jeśli wąs przedstawia zakres zmienności, to obejmuje on wszystkie wartości od minimalnej do maksymalnej. Na przykład dla próby, w której średnia wynosi 4, minimum to 1,5, a maksimum 6,5, wąs będzie rozciągał się od 1,5 do 6,5. Wszystkie pomiary mieszczą się wówczas w przedziale wyznaczonym przez wąs.</p><p>Gdy wąs ilustruje odchylenie standardowe, jest on rysowany nad i pod wartością średnią. Dla próby ze średnią 4 i odchyleniem standardowym 2,5, wąs obejmuje przedział od 1,5 do 6,5 (czyli średnia ± odchylenie). Należy jednak pamiętać, że na podstawie takiego wąsa nie można określić rzeczywistego zakresu zmienności – badacze mogli uzyskać wartości spoza tego przedziału, np. 7 lub 1.</p>"
    },
    {
      "pageNumber": 6,
      "htmlContent": "<h3 id=\"interpretacja-odchylenia-standardowego\">Interpretacja odchylenia standardowego</h3><p>Analiza wartości liczbowej odchylenia standardowego dostarcza istotnych informacji o rozproszeniu danych. <strong>Wysoka wartość σ</strong> oznacza, że pomiary są znacznie oddalone od średniej, natomiast <strong>niska wartość σ</strong> świadczy o tym, że wyniki są skupione wokół średniej.</p><p>Interpretując wykresy z wąsami obrazującymi odchylenie standardowe, należy zwrócić uwagę na wzajemne położenie przedziałów. Jeśli przedziały wyznaczone przez wąsy w dwóch próbach nakładają się na siebie (zazębiają się lub jeden w pełni pokrywa drugi), to można uznać, że nie ma istotnych różnic między wartościami uzyskanymi w tych próbach. Natomiast gdy wąsy nie pokrywają się, istnieją podstawy, by przypuszczać, że różnice między próbami są znaczące.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jak oblicza się średnią arytmetyczną?",
      "answer": "Średnią arytmetyczną oblicza się, sumując wszystkie wartości pomiarów, a następnie dzieląc tę sumę przez liczbę pomiarów."
    },
    {
      "question": "Czym różni się mediana od średniej arytmetycznej?",
      "answer": "Mediana to wartość środkowa w uporządkowanym zbiorze danych, odporna na wartości skrajne, podczas gdy średnia arytmetyczna jest wrażliwa na wartości odstające."
    },
    {
      "question": "Co oznacza wysokie odchylenie standardowe?",
      "answer": "Wysokie odchylenie standardowe oznacza, że wartości pomiarów są znacznie oddalone od średniej arytmetycznej."
    },
    {
      "question": "Co przedstawiają słupki błędu (wąsy) na wykresie?",
      "answer": "Słupki błędu (wąsy) przedstawiają zróżnicowanie wartości w próbie, najczęściej zakres zmienności lub odchylenie standardowe."
    }
  ]
};
