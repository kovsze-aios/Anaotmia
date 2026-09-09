import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_80_produkcjaRekombinowanejInsulinyData: StructuredChapter = {
  "chapterTitle": "Produkcja rekombinowanej insuliny",
  "toc": [
    {
      "title": "Struktura insuliny",
      "anchorId": "struktura-insuliny"
    },
    {
      "title": "Metoda 1: Osobna synteza łańcuchów A i B",
      "anchorId": "metoda-1-osobna-synteza"
    },
    {
      "title": "Metoda 2: Synteza proinsuliny",
      "anchorId": "metoda-2-synteza-proinsuliny"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"struktura-insuliny\">Struktura insuliny</h3><p>Insulina to białko złożone z 51 aminokwasów, którego cząsteczka składa się z dwóch łańcuchów peptydowych – łańcucha A i łańcucha B – połączonych mostkami dwusiarczkowymi. Współcześnie ludzka insulina jest wytwarzana między innymi w genetycznie modyfikowanych komórkach bakterii <em>Escherichia coli</em>. Stosuje się w tym celu dwie podstawowe strategie: oddzielną syntezę każdego z łańcuchów w dwóch różnych typach komórek lub łączną syntezę obu łańcuchów w jednym typie komórki.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"metoda-1-osobna-synteza\">Metoda 1: Osobna synteza łańcuchów A i B</h3><p>W pierwszej metodzie do plazmidów wprowadza się sekwencje kodujące łańcuchy A i B insuliny. Sekwencje te umieszcza się w obrębie genu kodującego bakteryjny enzym β-galaktozydazę, pod kontrolą odpowiedniego promotora. Tak przygotowanymi plazmidami transformuje się komórki <em>E. coli</em>.</p><p>W ztransformowanych komórkach zmodyfikowane geny ulegają ekspresji, w wyniku czego powstają białka fuzyjne, zawierające połączone łańcuchy β-galaktozydazy oraz insuliny. Białka fuzyjne są następnie izolowane z komórek i cięte enzymatycznie, co prowadzi do otrzymania chemicznie czystych łańcuchów A i B insuliny.</p><p>Oba rodzaje łańcuchów, po umieszczeniu w odpowiednim środowisku reakcji, łączą się, tworząc aktywną cząsteczkę insuliny o strukturze czwartorzędowej, stabilizowaną mostkami dwusiarczkowymi.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"metoda-2-synteza-proinsuliny\">Metoda 2: Synteza proinsuliny</h3><p>Druga metoda polega na transformacji komórek <em>E. coli</em> plazmidem zawierającym gen kodujący zmodyfikowaną proinsulinę – prekursor insuliny. Gen ten obejmuje sekwencje łańcuchów A i B insuliny połączone peptydem łącznikowym.</p><p>W wyniku ekspresji tego genu w komórkach bakteryjnych powstaje zmodyfikowana proinsulina, która jest izolowana z komórek, a następnie poddawana enzymatycznemu cięciu i oczyszczaniu. Uzyskane w ten sposób chemicznie czyste łańcuchy A i B, w odpowiednich warunkach, spontanicznie tworzą aktywną formę insuliny o strukturze czwartorzędowej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Z ilu aminokwasów składa się insulina i jakie łańcuchy wyróżniamy w jej budowie?",
      "answer": "Insulina składa się z 51 aminokwasów i zawiera dwa łańcuchy peptydowe: łańcuch A i łańcuch B, połączone mostkami dwusiarczkowymi."
    },
    {
      "question": "Na czym polega pierwsza metoda produkcji rekombinowanej insuliny?",
      "answer": "W pierwszej metodzie sekwencje kodujące łańcuchy A i B insuliny są osobno wstawiane do plazmidów, a następnie eksprymowane w komórkach E. coli jako białka fuzyjne z β-galaktozydazą. Po izolacji białka fuzyjne są cięte enzymatycznie, a otrzymane łańcuchy A i B łączą się w aktywną insulinę."
    },
    {
      "question": "Czym różni się druga metoda produkcji insuliny od pierwszej?",
      "answer": "W drugiej metodzie do komórek E. coli wprowadza się jeden plazmid zawierający gen kodujący proinsulinę, czyli prekursor z łańcuchami A i B połączonymi peptydem łącznikowym. Po ekspresji i izolacji proinsulina jest cięta enzymatycznie, a łańcuchy A i B tworzą aktywną insulinę."
    }
  ]
};
