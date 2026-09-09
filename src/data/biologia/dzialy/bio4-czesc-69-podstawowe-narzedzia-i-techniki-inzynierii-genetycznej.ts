import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_69_podstawoweNarzedziaITechnikiInzynieriiGenetycznejData: StructuredChapter = {
  "chapterTitle": "Podstawowe narzędzia i techniki inżynierii genetycznej",
  "toc": [
    {
      "title": "Sekwencjonowanie DNA i identyfikacja genów",
      "anchorId": "sekwencjonowanie-dna-i-identyfikacja-genow"
    },
    {
      "title": "Klonowanie DNA",
      "anchorId": "klonowanie-dna"
    },
    {
      "title": "Wektory stosowane w klonowaniu",
      "anchorId": "wektory-stosowane-w-klonowaniu"
    },
    {
      "title": "Biblioteki genomowe",
      "anchorId": "biblioteki-genomowe"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"sekwencjonowanie-dna-i-identyfikacja-genow\">Sekwencjonowanie DNA i identyfikacja genów</h3><p>Techniki sekwencjonowania DNA umożliwiły poznanie pełnych sekwencji genomów wielu organizmów. Dzięki międzynarodowemu projektowi poznania genomu człowieka (<em>Human Genome Project</em>, HGP), który trwał dziewięć lat i zakończył się w 2000 roku, ustalono, że ludzki genom składa się z około 3 milionów par zasad. Sekwencję tę udostępniono publicznie w internecie.</p><p>Po uzyskaniu sekwencji genomu kolejnym krokiem jest identyfikacja genów. W genomach prokariotycznych, które nie zawierają intronów i mają niewiele pozagenowego DNA, geny można odnaleźć, szukając otwartych ramek odczytu – sekwencji kodonów rozpoczynających się kodonem START, a kończących kodonem STOP.</p><p>Genomy eukariotyczne są znacznie bardziej złożone ze względu na obecność intronów oraz długich odcinków pozagenowego DNA. Dlatego identyfikacja genów wymaga analizy specyficznych sekwencji, takich jak miejsca styku intron-ekson czy charakterystyczne sekwencje regulatorowe.</p><p>Analiza ludzkiego genomu wykazała, że zawiera on około 20 tysięcy genów kodujących białka. Wynik ten był zaskakujący, ponieważ wcześniej szacowano, że liczba ta wynosi co najmniej 50 tysięcy. Okazało się, że ponad połowa ludzkich genów podlega alternatywnemu składaniu, co pozwala na wytwarzanie wielu różnych białek z jednego genu.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"klonowanie-dna\">Klonowanie DNA</h3><p>Klonowanie DNA to technika umożliwiająca powielanie określonych fragmentów DNA w komórkach gospodarza. Proces ten przebiega w dwóch etapach: pierwszy polega na wstawieniu obcego DNA do wektora (np. plazmidu) przy użyciu enzymów restrykcyjnych i ligazy, w wyniku czego powstaje zrekombinowany DNA. Drugi etap, nazywany transformacją genetyczną, polega na wprowadzeniu wektora do komórek bakterii, gdzie ulega on replikacji podczas każdego podziału komórkowego.</p><p>Po klonowaniu zawsze sprawdza się poprawność obu etapów. Do weryfikacji pierwszego etapu stosuje się analizę restrykcyjną lub sekwencjonowanie produktu ligacji. Drugi etap kontroluje się za pomocą genów reporterowych, które znajdują się w wektorze. Geny te mogą warunkować oporność na antybiotyk – wówczas na podłożu z antybiotykiem przeżywają tylko te bakterie, które pobrały wektor. Inne geny reporterowe powodują widoczne zmiany fenotypowe, takie jak wytwarzanie barwnika, co ułatwia identyfikację transformowanych komórek.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"wektory-stosowane-w-klonowaniu\">Wektory stosowane w klonowaniu</h3><p>Wektory to cząsteczki DNA zdolne do przenoszenia obcych fragmentów DNA do komórek. Najczęściej wykorzystywane są plazmidy, kosmidy, sztuczne chromosomy, a także wirusy lub bakterie. Plazmidy są kolistymi cząsteczkami DNA, które mogą przyjąć geny o długości do kilkunastu tysięcy par zasad. Aby zapewnić stabilne utrzymanie w komórce, plazmidy zawierają sekwencje odpowiedzialne za inicjację replikacji (miejsce <em>ori</em>) oraz geny reporterowe.</p><p>Kosmidy to hybrydowe wektory powstałe z połączenia plazmidu z sekwencją bakteriofaga λ. Umożliwiają one klonowanie dłuższych fragmentów DNA i są stosowane m.in. w komórkach ssaków. Sztuczne chromosomy to liniowe cząsteczki DNA, które zachowują się w komórce jak naturalne chromosomy – posiadają centromer i telomery, co zapewnia ich stabilność podczas podziałów. Pozwalają na wstawianie bardzo długich fragmentów obcego DNA. Wirusy i bakterie są wykorzystywane jako wektory do przenoszenia genów do komórek roślin i zwierząt, ponieważ potrafią infekować te organizmy i włączać obcy DNA do ich genomów.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"biblioteki-genomowe\">Biblioteki genomowe</h3><p>Biblioteki genomowe to zbiory komórek bakterii, z których każda zawiera plazmid z innym fragmentem genomu danego organizmu. Służą one do długotrwałego przechowywania całego genomu, a także do wyszukiwania i identyfikacji nieznanych genów. Stanowią również źródło genów i sekwencji regulatorowych do dalszych manipulacji genetycznych, takich jak modyfikowanie bakterii, roślin i zwierząt.</p><p>Tworzenie biblioteki genomowej rozpoczyna się od pocięcia genomu na fragmenty za pomocą enzymów restrykcyjnych. Następnie fragmenty te łączy się z wektorami (np. plazmidami), które również zostały przecięte tymi samymi enzymami. Tak powstałe zrekombinowane plazmidy wprowadza się do bakterii w procesie transformacji. Bakterie hoduje się na podłożach selekcyjnych, dzięki czemu każda kolonia pochodzi od jednej komórki i zawiera plazmid z jednym, unikalnym fragmentem DNA. W ten sposób cała biblioteka obejmuje kompletny genom organizmu.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego identyfikacja genów w genomach eukariotycznych jest trudniejsza niż w prokariotycznych?",
      "answer": "Genomy eukariotyczne zawierają introny oraz dużo pozagenowego DNA, co utrudnia określenie granic genów i odnalezienie wszystkich eksonów."
    },
    {
      "question": "Jakie są dwa główne etapy klonowania DNA?",
      "answer": "Etap I: wstawienie obcego DNA do wektora (powstanie zrekombinowanego DNA). Etap II: wprowadzenie wektora do komórki (transformacja genetyczna) i powielenie go podczas replikacji."
    },
    {
      "question": "Do czego służą geny reporterowe w wektorach?",
      "answer": "Geny reporterowe pozwalają sprawdzić, czy bakterie pobrały wektor, np. przez warunkowanie oporności na antybiotyk lub wytwarzanie barwnika."
    },
    {
      "question": "Czym różnią się kosmidy od sztucznych chromosomów?",
      "answer": "Kosmidy to połączenie plazmidu z sekwencją bakteriofaga λ, umożliwiające klonowanie długich fragmentów DNA. Sztuczne chromosomy to liniowe DNA z centromerem i telomerami, pozwalające na wstawianie bardzo długich fragmentów i stabilne utrzymanie w komórkach."
    }
  ]
};
