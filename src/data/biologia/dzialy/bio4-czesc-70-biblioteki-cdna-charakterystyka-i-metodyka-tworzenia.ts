import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_70_bibliotekiCdnaCharakterystykaIMetodykaTworzeniaData: StructuredChapter = {
  "chapterTitle": "Biblioteki cDNA – charakterystyka i metodyka tworzenia",
  "toc": [
    {
      "title": "Czym są biblioteki cDNA?",
      "anchorId": "czym-sa-biblioteki-cdna"
    },
    {
      "title": "Etapy konstruowania biblioteki cDNA",
      "anchorId": "etapy-konstruowania-biblioteki-cdna"
    },
    {
      "title": "Zalety i ograniczenia bibliotek cDNA",
      "anchorId": "zalety-i-ograniczenia-bibliotek-cdna"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"czym-sa-biblioteki-cdna\">Czym są biblioteki cDNA?</h3><p>Biblioteka cDNA to zbiór klonów zawierających komplementarne DNA (cDNA), które odpowiada sekwencjom kodującym genów danego organizmu. W przeciwieństwie do bibliotek genomowych, biblioteki cDNA obejmują wyłącznie te fragmenty DNA, które ulegają ekspresji – pozbawione są intronów oraz regionów regulatorowych.</p><p>Podstawą ich tworzenia jest wykorzystanie informacyjnego RNA (mRNA) jako matrycy. Ponieważ mRNA powstaje w wyniku transkrypcji i zawiera jedynie sekwencje egzonowe, cDNA uzyskany na jego bazie stanowi wierną kopię sekwencji kodujących.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"etapy-konstruowania-biblioteki-cdna\">Etapy konstruowania biblioteki cDNA</h3><p>Proces tworzenia biblioteki cDNA przebiega w kilku ściśle określonych krokach, które umożliwiają uzyskanie populacji rekombinowanych wektorów z wstawionymi sekwencjami cDNA.</p><ol><li><strong>Izolacja mRNA</strong> – z komórek danego typu pobiera się całkowity mRNA, który stanowi matrycę do dalszych reakcji.</li><li><strong>Odwrotna transkrypcja</strong> – przy użyciu enzymu odwrotnej transkryptazy syntetyzuje się jednoniciowe cDNA, a następnie dwuniciowe cząsteczki DNA komplementarne do mRNA. W ten sposób powstaje pula cDNA zawierająca wyłącznie sekwencje kodujące.</li><li><strong>Ligacja z wektorem</strong> – cząsteczki cDNA są łączone z uprzednio pociętymi wektorami, najczęściej plazmidami. Cięcie wektorów wykonuje się enzymami restrykcyjnymi, które rozpoznają specyficzne miejsca restrykcyjne, a połączenie cDNA z wektorem katalizuje ligaza DNA.</li><li><strong>Transformacja bakterii</strong> – zrekombinowane plazmidy wprowadza się do komórek bakterii, które następnie wysiewa się na podłoża hodowlane. Każda bakteria, która przyjęła plazmid, tworzy kolonię – wszystkie komórki w kolonii są genetycznie identyczne i niosą ten sam fragment cDNA.</li></ol><p>W efekcie otrzymuje się zestaw kolonii bakteryjnych, z których każda zawiera plazmid z innym genem, co stanowi bibliotekę cDNA.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"zalety-i-ograniczenia-bibliotek-cdna\">Zalety i ograniczenia bibliotek cDNA</h3><p>Główną zaletą bibliotek cDNA jest to, że każda cząsteczka cDNA odpowiada pojedynczemu genowi, co ułatwia identyfikację i izolację konkretnych sekwencji kodujących. Ponieważ cDNA nie zawiera intronów, może być łatwo eksprymowany w komórkach bakteryjnych, które nie posiadają maszynerii do usuwania intronów.</p><p>Jednakże biblioteki cDNA mają również istotne ograniczenia. Nie zawierają sekwencji regulatorowych, takich jak promotory czy wzmacniacze, które są niezbędne do prawidłowej regulacji ekspresji genów w organizmach eukariotycznych. Ponadto, ponieważ różne typy komórek wykorzystują różne zestawy genów, bibliotekę cDNA należy tworzyć oddzielnie dla każdego typu komórki, co zwiększa nakład pracy i koszty.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest biblioteka cDNA i jakie sekwencje zawiera?",
      "answer": "Biblioteka cDNA to zbiór klonów zawierających komplementarne DNA (cDNA) odpowiadające sekwencjom kodującym genów. Zawiera wyłącznie sekwencje kodujące (egzony), pozbawione intronów i regionów regulatorowych."
    },
    {
      "question": "Jakie są główne etapy tworzenia biblioteki cDNA?",
      "answer": "Etapy to: izolacja mRNA, odwrotna transkrypcja do cDNA, ligacja cDNA z wektorem (np. plazmidem), transformacja bakterii i hodowla na podłożach selekcyjnych."
    },
    {
      "question": "Dlaczego biblioteki cDNA nie zawierają intronów?",
      "answer": "Ponieważ powstają na matrycy mRNA, które po splicingu zawiera tylko sekwencje egzonowe, a introny są usuwane podczas obróbki potranskrypcyjnej."
    },
    {
      "question": "Jakie są ograniczenia bibliotek cDNA?",
      "answer": "Nie zawierają sekwencji regulatorowych (np. promotorów) oraz muszą być tworzone oddzielnie dla każdego typu komórki, ponieważ różne komórki eksprymują różne geny."
    }
  ]
};
