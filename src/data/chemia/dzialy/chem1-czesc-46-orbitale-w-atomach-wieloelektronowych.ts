import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_46_orbitaleWAtomachWieloelektronowychData: StructuredChapter = {
  "chapterTitle": "Orbitale w atomach wieloelektronowych",
  "toc": [
    {
      "title": "Wprowadzenie: złożoność atomów wieloelektronowych",
      "anchorId": "wprowadzenie-zlozonosc-atomow-wieloelektronowych"
    },
    {
      "title": "Metoda samouzgodnionego pola (Hartree-Focka)",
      "anchorId": "metoda-samouzgodnionego-pola"
    },
    {
      "title": "Przybliżenie jednoelektronowe i orbitale",
      "anchorId": "przyblizenie-jednoelektronowe-orbitale"
    },
    {
      "title": "Różnice w poziomach energetycznych",
      "anchorId": "roznice-poziomach-energetycznych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-zlozonosc-atomow-wieloelektronowych\">Wprowadzenie: złożoność atomów wieloelektronowych</h3><p>W przypadku atomów wieloelektronowych rozwiązanie równania falowego jest znacznie bardziej skomplikowane niż dla atomu wodoru. Na ruch elektronów wpływa wiele czynników, z których najważniejsze to oddziaływania elektrostatyczne: przyciąganie elektronów przez jądro oraz odpychanie między elektronami. Istotne są także słabsze oddziaływania magnetyczne, wynikające z trwałych momentów magnetycznych elektronów i często jąder atomowych.</p><p>Dodatkową komplikację stanowi fakt, że jądra atomowe tylko w pierwszym przybliżeniu można traktować jako cząstki punktowe. W rzeczywistości mają one złożoną strukturę, a wytwarzane przez nie pole elektryczne nie wykazuje idealnej symetrii sferycznej. Mimo to, oddziaływania elektrostatyczne dominują na tyle, że w większości przypadków można je uwzględnić jako jedyne.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"metoda-samouzgodnionego-pola\">Metoda samouzgodnionego pola (Hartree-Focka)</h3><p>Nawet przy uwzględnieniu wyłącznie oddziaływań elektrostatycznych układ pozostaje bardzo złożony. Ścisłe rozwiązanie równania Schrödingera wymagałoby funkcji falowej zależnej od współrzędnych wszystkich elektronów w atomie, co jest matematycznie niewykonalne w sposób ścisły. Możliwe jest jedynie uzyskanie rozwiązań przybliżonych.</p><p>Rozwiązania przybliżone o dużej dokładności osiąga się dzięki metodzie samouzgodnionego pola, znanej również jako metoda Hartree-Focka. W metodzie tej rozpatruje się ruch każdego elektronu w uśrednionym polu elektrycznym wytwarzanym przez wszystkie pozostałe elektrony. Dzięki temu możliwy jest opis ruchu każdego elektronu za pomocą oddzielnej funkcji falowej, zależnej wyłącznie od współrzędnych tego elektronu.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"przyblizenie-jednoelektronowe-orbitale\">Przybliżenie jednoelektronowe i orbitale</h3><p>Takie podejście nosi nazwę przybliżenia jednoelektronowego. Funkcję falową opisującą cały atom konstruuje się wówczas jako iloczyn orbitali jednoelektronowych. Obliczenia przeprowadzone tą metodą pokazują, że zachowanie elektronów w atomach wieloelektronowych można opisać za pomocą orbitali atomowych o postaci analogicznej do orbitali atomu wodoru, odpowiadających określonym zestawom liczb kwantowych: głównej <em>n</em>, pobocznej <em>l</em> oraz magnetycznej <em>m</em>.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"roznice-poziomach-energetycznych\">Różnice w poziomach energetycznych</h3><p>Istotna różnica między atomem wodoru a atomami wieloelektronowymi polega na tym, że w atomie wodoru o energii elektronu decyduje wyłącznie główna liczba kwantowa <em>n</em>, podczas gdy w atomach wieloelektronowych na energię wpływa również poboczna liczba kwantowa <em>l</em>. W rezultacie poziom elektronowy odpowiadający danej wartości <em>n</em> w atomie wodoru rozszczepia się w atomie wieloelektronowym na tyle nowych, blisko siebie położonych poziomów, ile różnych wartości może przyjąć liczba kwantowa <em>l</em> przy tej samej wartości <em>n</em>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w atomach wieloelektronowych nie można dokładnie rozwiązać równania Schrödingera?",
      "answer": "Ze względu na skomplikowane oddziaływania między wieloma elektronami, które uniemożliwiają ścisłe rozwiązanie; stosuje się metody przybliżone, takie jak metoda Hartree-Focka."
    },
    {
      "question": "Na czym polega metoda Hartree-Focka?",
      "answer": "Polega na opisie ruchu każdego elektronu w uśrednionym polu elektrycznym wytwarzanym przez pozostałe elektrony, co pozwala na zastosowanie przybliżenia jednoelektronowego."
    },
    {
      "question": "Jaka jest różnica w zależności energii od liczb kwantowych między atomem wodoru a atomami wieloelektronowymi?",
      "answer": "W atomie wodoru energia zależy tylko od głównej liczby kwantowej n, natomiast w atomach wieloelektronowych zależy również od pobocznej liczby kwantowej l, co prowadzi do rozszczepienia poziomów."
    }
  ]
};
