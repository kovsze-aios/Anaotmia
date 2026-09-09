import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_127_teoriaPasmowaCialaStalegoMetalePolprzewodnikiIDielektrykiData: StructuredChapter = {
  "chapterTitle": "Teoria pasmowa ciała stałego: metale, półprzewodniki i dielektryki",
  "toc": [
    {
      "title": "Powstawanie pasm energetycznych",
      "anchorId": "powstawanie-pasm-energetycznych"
    },
    {
      "title": "Struktura pasmowa metali",
      "anchorId": "struktura-pasmowa-metali"
    },
    {
      "title": "Przewodnictwo elektryczne metali",
      "anchorId": "przewodnictwo-elektryczne-metali"
    },
    {
      "title": "Pasma w izolatorach i półprzewodnikach",
      "anchorId": "pasma-w-izolatorach-i-polprzewodnikach"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"powstawanie-pasm-energetycznych\">Powstawanie pasm energetycznych</h3><p>W miarę zbliżania się atomów tworzących sieć krystaliczną, ich poziomy energetyczne ulegają rozszczepieniu na pasma. Dla układu złożonego z N atomów, każdy orbital atomowy daje początek N orbitalom cząsteczkowym, zdelokalizowanym na cały kryształ. Różnice energii między kolejnymi poziomami w paśmie są niezwykle małe, rzędu 10<sup>-41</sup> J (10<sup>-22</sup> eV), co sprawia, że pasmo można traktować jako quasi-ciągłe.</p><p>W przypadku litu, który ma jeden elektron walencyjny na orbital 2s, w krysztale z N atomów powstaje N orbitali cząsteczkowych, które mogą pomieścić 2N elektronów. Ponieważ każdy atom dostarcza tylko jednego elektronu, pasmo jest zapełnione w połowie, co jest charakterystyczne dla metali.</p><p>Rozważmy przykład sodu metalicznego. Na wykresie zależności energii od odległości międzyatomowej (rys. 7.18 w oryginale) widać, że przy dużych odległościach poziomy energetyczne są takie jak w izolowanych atomach. Gdy atomy zbliżają się do odległości równowagowej, rozszczepieniu ulegają przede wszystkim poziomy 3s i 3p, które nakładają się na siebie, tworząc jedno wspólne pasmo. Głębsze poziomy (2p, 2s, 1s) pozostają nierozszczepione, ponieważ ich orbitale nie nakładają się znacząco.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"struktura-pasmowa-metali\">Struktura pasmowa metali</h3><p>W krysztale sodu każdy atom wnosi cztery orbitale walencyjne (3s, 3p<sub>x</sub>, 3p<sub>y</sub>, 3p<sub>z</sub>), co daje łącznie 4N orbitali zdelokalizowanych, mogących pomieścić 8N elektronów. Ponieważ każdy atom sodu ma tylko jeden elektron walencyjny, pasmo to jest tylko częściowo zapełnione. W temperaturze zera absolutnego elektrony obsadzają najniższe poziomy energetyczne, aż do poziomu Fermiego (E<sub>F</sub>), który jest najwyższym obsadzonym poziomem w temperaturze 0 K.</p><p>Elektrony znajdujące się w pobliżu poziomu Fermiego mogą łatwo zostać wzbudzone do wyższych stanów, ponieważ wymagają jedynie niewielkich kwantów energii. Elektrony głębiej położone potrzebują znacznie większych energii, gdyż wszystkie sąsiednie poziomy są już zajęte.</p><p>Badania fotoelektronowe metali potwierdzają istnienie pasm energetycznych. Na przykład dla glinu metalicznego obserwuje się szerokie pasmo o energii ponad 10 eV (co odpowiada około 11,96 kJ·mol<sup>−1</sup>), zamiast ostrych pików charakterystycznych dla cząsteczek. Liczba emitowanych elektronów jest największa z górnej części pasma i maleje wraz ze wzrostem energii, co jest zgodne z przewidywaniami teoretycznymi. Pionowa linia na widmie odpowiada poziomowi Fermiego, przyjętemu jako zero energii. W temperaturze bliskiej 0 K obsadzone są tylko poziomy o energii niższej lub równej E<sub>F</sub>. W wyższych temperaturach pewna liczba elektronów przechodzi na poziomy powyżej E<sub>F</sub>, ale ich liczba jest niewielka, dlatego natężenie prądu fotoelektronów z tych poziomów jest małe i szybko maleje.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"przewodnictwo-elektryczne-metali\">Przewodnictwo elektryczne metali</h3><p>Elektrony w metalu poruszają się podobnie jak cząsteczki w gazie, często zderzając się z dodatnimi jonami sieci (zrębami atomowymi). W przypadku braku zewnętrznego pola elektrycznego rozkład prędkości elektronów jest izotropowy, a suma ich pędów w każdym kierunku jest równa zeru.</p><p>Przyłożenie napięcia elektrycznego zaburza ten rozkład: elektrony poruszające się w kierunku bieguna dodatniego zyskują dodatkowy pęd i energię kinetyczną, podczas gdy elektrony poruszające się przeciwnie tracą energię. W rezultacie następuje przesunięcie ładunku, czyli przepływ prądu elektrycznego.</p><p>W przewodzeniu prądu uczestniczą przede wszystkim elektrony o energii bliskiej poziomowi Fermiego, ponieważ tylko one mogą zmieniać swoją energię, przechodząc na wolne poziomy w paśmie. Elektrony głębiej położone nie mogą tego zrobić, gdyż wszystkie sąsiednie stany są zajęte.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"pasma-w-izolatorach-i-polprzewodnikach\">Pasma w izolatorach i półprzewodnikach</h3><p>Rozszczepienie poziomów energetycznych na pasma zachodzi nie tylko w metalach, ale także w innych ciałach stałych. W kryształach niemetalicznych pasma nie nakładają się na siebie, lecz są oddzielone pasmami wzbronionymi, czyli zakresami energii niedostępnymi dla elektronów. Wyróżnia się co najmniej dwa pasma: niższe, całkowicie wypełnione elektronami (pasmo walencyjne), oraz wyższe, puste (pasmo przewodnictwa).</p><p>Aby elektron mógł przewodzić prąd, musi zostać przeniesiony z pasma walencyjnego do pasma przewodnictwa, pokonując przerwę energetyczną. W izolatorach (np. diament, kwarc, MgO) przerwa ta jest duża, rzędu 5–10 eV, co wymaga przyłożenia bardzo wysokich napięć lub ogrzania do bardzo wysokich temperatur. W półprzewodnikach przerwa energetyczna jest mniejsza, co umożliwia przejście elektronów do pasma przewodnictwa w temperaturze pokojowej lub pod wpływem światła.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego pasma energetyczne w ciałach stałych można traktować jako quasi-ciągłe?",
      "answer": "Ponieważ różnice energii między kolejnymi poziomami w paśmie są niezwykle małe, rzędu 10^-41 J (10^-22 eV), co sprawia, że poziomy tworzą praktycznie ciągłe pasmo."
    },
    {
      "question": "Co to jest poziom Fermiego i jakie ma znaczenie w metalach?",
      "answer": "Poziom Fermiego to najwyższy obsadzony poziom energetyczny w temperaturze zera absolutnego. W metalach elektrony w pobliżu tego poziomu mogą łatwo przewodzić prąd, ponieważ mają dostęp do wolnych stanów."
    },
    {
      "question": "Jakie są różnice w strukturze pasmowej między metalami, półprzewodnikami i izolatorami?",
      "answer": "W metalach pasmo walencyjne jest częściowo zapełnione lub zachodzi na pasmo przewodnictwa, co umożliwia przewodzenie. W półprzewodnikach i izolatorach pasma są oddzielone przerwą wzbronioną; w półprzewodnikach przerwa jest mała (rzędu 1 eV), a w izolatorach duża (5-10 eV)."
    }
  ]
};
