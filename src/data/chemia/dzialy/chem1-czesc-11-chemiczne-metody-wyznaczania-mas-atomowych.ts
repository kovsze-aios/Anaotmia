import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_11_chemiczneMetodyWyznaczaniaMasAtomowychData: StructuredChapter = {
  "chapterTitle": "Chemiczne metody wyznaczania mas atomowych",
  "toc": [
    {
      "title": "Wprowadzenie",
      "anchorId": "wprowadzenie"
    },
    {
      "title": "Metoda chemiczna na przykładzie chloru",
      "anchorId": "metoda-chemiczna-na-przykladzie-chloru"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie\">Wprowadzenie</h3><p>Spektrometria masowa, opisana wcześniej, umożliwia precyzyjne określenie względnych mas atomowych oraz składu izotopowego pierwiastków. Na tej podstawie można obliczyć średnią względną masę atomową naturalnej mieszaniny izotopów, czyli powszechnie rozumianą masę atomową danego pierwiastka. Jednak metoda ta zyskała na znaczeniu dopiero w XX wieku; wcześniej, bo już w XIX wieku, masy atomowe większości pierwiastków wyznaczono z dużą dokładnością przy użyciu metod czysto chemicznych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"metoda-chemiczna-na-przykladzie-chloru\">Metoda chemiczna na przykładzie chloru</h3><p>W chemicznych metodach wyznaczania mas atomowych przyjmuje się umownie względną masę atomową wodoru równą 1,0079 (w skali <sup>12</sup>C) i w odniesieniu do niej określa się masy atomowe pozostałych pierwiastków. Jako ilustrację tej procedury rozpatrzmy wyznaczanie masy atomowej chloru.</p><p>Analiza chemiczna chlorowodoru wykazuje, że na 1 mol atomów wodoru (masa 1,0079 g) przypada 35,453 g chloru. W latach pięćdziesiątych XX wieku nie było jeszcze pewności co do wzoru cząsteczki chlorowodoru, a tym samym liczby moli atomów chloru w tej masie. Gdyby wzór był HCl, to 35,453 g stanowiłoby masę jednego mola atomów chloru, a liczba ta odpowiadałaby względnej masie atomowej chloru. Gdyby natomiast wzór miał postać HCl<sub>2</sub>, wówczas 35,453 g chloru odpowiadałoby dwóm molom atomów, a względna masa atomowa byłaby o połowę mniejsza. Rozstrzygnięcie tej kwestii umożliwiło prawo Avogadra, które głosi, że w równych objętościach różnych gazów, w tych samych warunkach ciśnienia i temperatury, znajduje się jednakowa liczba cząsteczek. Dzięki temu można było porównać gęstości gazów i ustalić, że cząsteczka chlorowodoru zawiera jeden atom wodoru i jeden atom chloru, co potwierdziło wzór HCl.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w chemicznych metodach wyznaczania mas atomowych przyjmowano wodór jako wzorzec?",
      "answer": "Wodór był wygodnym wzorcem, ponieważ jego względna masa atomowa jest bliska 1, a związki wodoru z innymi pierwiastkami często mają prosty stosunek atomowy, co ułatwiało obliczenia."
    },
    {
      "question": "Jaka informacja jest kluczowa do ustalenia, czy wzór chlorowodoru to HCl czy HCl2?",
      "answer": "Kluczowe jest prawo Avogadra, które pozwala na porównanie gęstości gazów i określenie liczby atomów w cząsteczce, co rozstrzyga o wzorze HCl."
    }
  ]
};
