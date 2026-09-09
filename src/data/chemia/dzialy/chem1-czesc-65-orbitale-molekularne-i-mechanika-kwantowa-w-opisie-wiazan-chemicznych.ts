import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_65_orbitaleMolekularneIMechanikaKwantowaWOpisieWiazanChemicznychData: StructuredChapter = {
  "chapterTitle": "Orbitale molekularne i mechanika kwantowa w opisie wiązań chemicznych",
  "toc": [
    {
      "title": "Ograniczenia teorii Lewisa i Kossela",
      "anchorId": "ograniczenia-teorii-lewisa-i-kossela"
    },
    {
      "title": "Mechanika kwantowa w opisie cząsteczek",
      "anchorId": "mechanika-kwantowa-w-opisie-czasteczek"
    },
    {
      "title": "Metoda wariacyjna i kombinacje liniowe",
      "anchorId": "metoda-wariacyjna-i-kombinacje-liniowe"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"ograniczenia-teorii-lewisa-i-kossela\">Ograniczenia teorii Lewisa i Kossela</h3><p>Teoria Lewisa i Kossela wprowadziła fundamentalne rozróżnienie na wiązania kowalencyjne, powstające dzięki uwspólnieniu par elektronowych przez dwa atomy, oraz wiązania jonowe, wynikające z całkowitego przeniesienia elektronów od atomu bardziej elektrododatniego do bardziej elektroujemnego. Podział ten okazał się trafny i do dziś stanowi podstawę opisu wiązań chemicznych, jednak należy pamiętać, że wiązania o charakterze czysto jonowym lub czysto kowalencyjnym występują w rzeczywistości niezwykle rzadko.</p><p>Zdecydowana większość wiązań ma charakter pośredni – są to wiązania kowalencyjne, w których wspólna para elektronowa jest w mniejszym lub większym stopniu przesunięta w kierunku jednego z atomów. Analiza takich wiązań jest najwygodniejsza, gdy odwołujemy się do modeli skrajnych, czyli wiązań czysto jonowych i czysto kowalencyjnych, traktowanych jako punkty odniesienia.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"mechanika-kwantowa-w-opisie-czasteczek\">Mechanika kwantowa w opisie cząsteczek</h3><p>Przedstawione wcześniej koncepcje Lewisa i Kossela miały charakter jakościowy i nie opierały się na ogólnych postulatach fizycznych. Dopiero sformułowanie zasad mechaniki kwantowej umożliwiło bardziej precyzyjne i uniwersalne ujęcie problemu wiązania chemicznego. W świetle mechaniki kwantowej cząsteczka jest układem złożonym z jąder i elektronów, a jej stan opisują funkcje falowe będące rozwiązaniami równania Schrödingera.</p><p>Równanie Schrödingera dla atomu wodoru (równanie 3.20) uwzględniało jedynie energię potencjalną wynikającą z oddziaływania między elektronem a protonem. W przypadku układów wieloelektronowych i wielojądrowych postać tego równania staje się niezwykle skomplikowana i nie istnieje matematycznie ścisłe rozwiązanie dla żadnej cząsteczki poza jonem H<sub>2</sub><sup>+</sup> – nawet dla cząsteczki wodoru H<sub>2</sub> trzeba stosować metody przybliżone.</p><p>Mechanika kwantowa nie rezygnuje jednak z opisu wiązań chemicznych. Zamiast dokładnej funkcji falowej można wyznaczyć funkcję przybliżoną, która opisuje gęstość prawdopodobieństwa napotkania elektronów w różnych obszarach cząsteczki. Poszukiwanie najlepszych przybliżonych funkcji falowych opiera się na twierdzeniu, że energia cząsteczki obliczona za pomocą funkcji przybliżonej jest zawsze większa od energii rzeczywistej. Dzięki temu możliwe jest porównanie dwóch funkcji przybliżonych – lepsza jest ta, która daje niższą energię.</p><p>Stosując odpowiednie metody wyszukiwania funkcji falowych, można uzyskać wyniki znakomicie zgodne z pomiarami o wysokiej precyzji. Na przykład energia dysocjacji wiązania H–H w cząsteczce wodoru, wyznaczona doświadczalnie przez Herzberga i Monfilsa, zawiera się w przedziale 432,112–432,136 kJ·mol<sup>−1</sup>, podczas gdy obliczenia Kołosa i Wolniewicza dały wartość 432,132 kJ·mol<sup>−1</sup>. Zgodność obliczeń z doświadczeniem jest w tym przypadku znakomita, jednak wraz ze wzrostem liczby jąder i elektronów w cząsteczce trudności rachunkowe ogromnie rosną.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"metoda-wariacyjna-i-kombinacje-liniowe\">Metoda wariacyjna i kombinacje liniowe</h3><p>Poszukiwanie funkcji falowych odbywa się najczęściej metodą wariacyjną. Polega ona na przyjęciu pewnej funkcji Ψ, zwanej funkcją wariacyjną, jako pierwszego przybliżenia. Funkcja ta zależy od parametrów, które dobiera się tak, aby uzyskać minimum energii układu. Testując wiele różnych funkcji wariacyjnych, można na podstawie kryterium energetycznego wybrać najlepszą z nich.</p><p>Najczęściej stosowaną odmianą metody wariacyjnej jest metoda kombinacji liniowych, w której funkcja wariacyjna Ψ jest liniową kombinacją pewnych funkcji bazowych. Metoda ta stanowi podstawę współczesnych obliczeń kwantowo-chemicznych i umożliwia modelowanie struktury elektronowej cząsteczek o rosnącej złożoności.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego teoria Lewisa i Kossela jest niewystarczająca do opisu rzeczywistych wiązań chemicznych?",
      "answer": "Teoria Lewisa i Kossela zakłada istnienie czystych wiązań jonowych lub kowalencyjnych, podczas gdy w rzeczywistości większość wiązań ma charakter pośredni, z przesuniętą parą elektronową."
    },
    {
      "question": "Jakie jest kryterium wyboru lepszej przybliżonej funkcji falowej w metodzie wariacyjnej?",
      "answer": "Lepsza jest ta funkcja, która daje niższą energię całkowitą cząsteczki, ponieważ energia obliczona z funkcji przybliżonej jest zawsze większa od energii rzeczywistej."
    },
    {
      "question": "Dla jakiego układu równanie Schrödingera można rozwiązać ściśle?",
      "answer": "Dla jonu H2+ (dwuatomowego jonu wodoru), który jest najprostszym układem wielojądrowym."
    }
  ]
};
