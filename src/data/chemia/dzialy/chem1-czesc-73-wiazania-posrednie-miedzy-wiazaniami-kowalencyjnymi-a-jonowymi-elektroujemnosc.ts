import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_73_wiazaniaPosrednieMiedzyWiazaniamiKowalencyjnymiAJonowymiElektroujemnoscData: StructuredChapter = {
  "chapterTitle": "Wiązania pośrednie między wiązaniami kowalencyjnymi a jonowymi. Elektroujemność",
  "toc": [
    {
      "title": "Polaryzacja wiązań i moment dipolowy",
      "anchorId": "polaryzacja-wiazan-i-moment-dipolowy"
    },
    {
      "title": "Skala elektroujemności Paulinga",
      "anchorId": "skala-elektroujemnosci-paulinga"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"polaryzacja-wiazan-i-moment-dipolowy\">Polaryzacja wiązań i moment dipolowy</h3><p>W cząsteczkach homojądrowych, takich jak H<sub>2</sub> czy Cl<sub>2</sub>, orbitale molekularne powstają z równym udziałem orbitali atomowych obu atomów. W rezultacie gęstość elektronowa jest rozłożona symetrycznie względem środka cząsteczki, a wiązanie jest w pełni kowalencyjne i niepolarne.</p><p>W cząsteczkach heterojądrowych, np. w chlorowodorze HCl, atomy różnią się elektroujemnością. Wtedy orbital molekularny nie jest już symetryczny – maksimum gęstości elektronowej przesuwa się w kierunku atomu bardziej elektroujemnego. Oznacza to, że wspólna para elektronowa jest przesunięta ku temu atomowi, co nazywamy <strong>polaryzacją wiązania</strong>. Na przykład w cząsteczce tlenku węgla CO para elektronowa jest przesunięta w stronę tlenu, a we fluorowodorze HF – w stronę fluoru.</p><p>W wyniku polaryzacji jeden atom zyskuje cząstkowy ładunek ujemny (δ<sup>−</sup>), a drugi – cząstkowy ładunek dodatni (δ<sup>+</sup>). Można to zapisać jako A<sup>δ+</sup>–B<sup>δ−</sup>. Gdy δ = 0, wiązanie jest czysto kowalencyjne; gdy δ = 1 (ładunek elementarny), mamy do czynienia z wiązaniem czysto jonowym. W rzeczywistości δ przyjmuje wartości ułamkowe, co oznacza, że wiązania mają charakter <strong>pośredni między kowalencyjnym a jonowym</strong>.</p><p>Cząsteczkę, w której można wyróżnić biegun dodatni i ujemny, nazywamy <strong>dipolem</strong>. Miarą polarności wiązania jest <strong>moment dipolowy</strong> μ, zdefiniowany jako iloczyn wartości bezwzględnej ładunku cząstkowego δ i odległości między biegunami l:</p><p>μ = δ · l</p><p>Moment dipolowy można wyznaczyć doświadczalnie, mierząc przenikalność elektryczną substancji. W układzie SI wyraża się go w kulombometrach (C·m). Dla wiązania o długości 100 pm i ładunkach równych ładunkowi elementarnemu (0,1602·10<sup>−18</sup> C) moment dipolowy wynosi 16,02·10<sup>−30</sup> C·m. W praktyce często używa się jednostki spoza układu SI – debaja (D), gdzie 1 D = 3,338·10<sup>−30</sup> C·m. Zatem moment 16,2·10<sup>−30</sup> C·m odpowiada około 4,8 D.</p><p>Dla cząsteczek fluorowcowodorów (HF, HCl, HBr, HI) zmierzone momenty dipolowe są mniejsze niż wartości obliczone dla hipotetycznego wiązania czysto jonowego (przy zachowaniu tej samej długości wiązania). Na przykład dla HF doświadczalny moment dipolowy wynosi 1,98 D, podczas gdy dla wiązania jonowego byłby to 4,42 D. Różnica ta wskazuje, że wiązania te mają częściowo kowalencyjny charakter. Procentowy udział charakteru jonowego można oszacować jako stosunek μ<sub>doświadczalne</sub> do μ<sub>jonowego</sub> (e·l) pomnożony przez 100. Dla HF udział ten wynosi około 45%, dla HCl – około 18%, dla HBr – około 12%, a dla HI – około 5%.</p><p>Należy pamiętać, że tak obliczony udział jonowości jest tylko przybliżony, ponieważ na moment dipolowy cząsteczki wpływają również wolne pary elektronowe. W przypadku cząsteczek z orbitalami zhybrydyzowanymi (np. amoniaku NH<sub>3</sub>) wolne pary mogą dawać dodatkowy wkład do momentu dipolowego, zwiększając go lub zmniejszając (jak w tlenku węgla CO).</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"skala-elektroujemnosci-paulinga\">Skala elektroujemności Paulinga</h3><p>Elektroujemność to zdolność atomu w cząsteczce do przyciągania elektronów wiążących. Pauling opracował skalę elektroujemności, opierając się na energiach wiązań. Dla cząsteczek dwuatomowych A<sub>2</sub> i B<sub>2</sub> energie wiązań oznaczamy jako D<sub>A–A</sub> i D<sub>B–B</sub>, a dla cząsteczki AB – jako D<sub>A–B</sub>. Jeśli wiązanie A–B jest czysto kowalencyjne, to energia D<sub>A–B</sub> jest w przybliżeniu równa średniej geometrycznej energii D<sub>A–A</sub> i D<sub>B–B</sub>:</p><p>D<sub>A–B</sub> − √(D<sub>A–A</sub> · D<sub>B–B</sub>) ≈ 0</p><p>Gdy wiązanie ma częściowo jonowy charakter, różnica ta jest dodatnia i tym większa, im większy jest udział jonowości. Pauling zdefiniował różnicę elektroujemności (χ<sub>A</sub> − χ<sub>B</sub>) jako proporcjonalną do pierwiastka kwadratowego z tej nadwyżki energii Δ':</p><p>χ<sub>A</sub> − χ<sub>B</sub> = 0,1018 · √Δ'</p><p>gdzie energie wiązań wyrażone są w kJ·mol<sup>−1</sup>. Przyjmując elektroujemność wodoru za 2,2, można na podstawie energii wiązań wyznaczyć elektroujemności innych pierwiastków. Skala Paulinga jest powszechnie stosowana do szacowania charakteru wiązania: im większa różnica elektroujemności między atomami, tym bardziej jonowy charakter ma wiązanie.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest moment dipolowy i w jakich jednostkach się go wyraża?",
      "answer": "Moment dipolowy to iloczyn cząstkowego ładunku (δ) i odległości między biegunami (l). Wyraża się go w kulombometrach (C·m) w układzie SI lub w debajach (D)."
    },
    {
      "question": "Jak Pauling zdefiniował elektroujemność?",
      "answer": "Pauling zdefiniował elektroujemność jako miarę zdolności atomu do przyciągania elektronów w cząsteczce. Różnica elektroujemności dwóch atomów jest proporcjonalna do pierwiastka kwadratowego z nadwyżki energii wiązania A–B względem średniej geometrycznej energii wiązań A–A i B–B."
    }
  ]
};
