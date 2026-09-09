import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_167_entalpiaSwobodnaUkladuIPrawoDzialaniaMasData: StructuredChapter = {
  "chapterTitle": "Entalpia swobodna układu i prawo działania mas",
  "toc": [
    {
      "title": "Wprowadzenie do entalpii swobodnej reakcji",
      "anchorId": "wprowadzenie-entalpia-swobodna"
    },
    {
      "title": "Warunek równowagi chemicznej",
      "anchorId": "warunek-rownowagi"
    },
    {
      "title": "Prawo działania mas i stała równowagi",
      "anchorId": "prawo-dzialania-mas"
    },
    {
      "title": "Kierunek reakcji a zmiana entalpii swobodnej",
      "anchorId": "kierunek-reakcji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-entalpia-swobodna\">Wprowadzenie do entalpii swobodnej reakcji</h3><p>Rozważmy syntezę amoniaku z azotu i wodoru, przebiegającą w fazie gazowej w warunkach izotermiczno-izobarycznych. Gdy w układzie przereaguje <em>dn</em> moli azotu, to zgodnie ze stechiometrią reakcji N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, ubywa 3<em>dn</em> moli wodoru, a przybywa 2<em>dn</em> moli amoniaku. Zmiana entalpii swobodnej układu jest sumą wkładów pochodzących od każdego składnika: ubytek azotu i wodoru zmniejsza entalpię swobodną, natomiast powstanie amoniaku ją zwiększa.</p><p>Matematycznie możemy to zapisać jako: dG = –μ<sub>N<sub>2</sub></sub>dn – 3μ<sub>H<sub>2</sub></sub>dn + 2μ<sub>NH<sub>3</sub></sub>dn, gdzie μ<sub>i</sub> oznacza potencjał chemiczny składnika <em>i</em>. Dzieląc obie strony przez <em>dn</em>, otrzymujemy pochodną entalpii swobodnej względem zmiennej postępu reakcji: dG/dn = –μ<sub>N<sub>2</sub></sub> – 3μ<sub>H<sub>2</sub></sub> + 2μ<sub>NH<sub>3</sub></sub>. Zmienna <em>n</em> pełni tu rolę analogiczną do współrzędnej reakcji, podobnie jak w mechanice współrzędna opisująca położenie ciała.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"warunek-rownowagi\">Warunek równowagi chemicznej</h3><p>Analogicznie do mechanicznego przykładu kuli staczającej się do doliny, układ chemiczny osiąga stan równowagi, gdy jego entalpia swobodna osiąga minimum. Warunkiem ekstremum jest zerowanie się pochodnej: dG/dn = 0. Podstawiając do tego warunku wyrażenie na pochodną, otrzymujemy równanie wiążące potencjały chemiczne substratów i produktów: –μ<sub>N<sub>2</sub></sub> – 3μ<sub>H<sub>2</sub></sub> + 2μ<sub>NH<sub>3</sub></sub> = 0.</p><p>Dla gazu doskonałego potencjał chemiczny składnika wyraża się przez jego ułamek molowy: μ<sub>i</sub> = μ<sub>i</sub><sup>0</sup> + RT ln x<sub>i</sub>. Po podstawieniu tych wyrażeń do warunku równowagi i przekształceniach otrzymujemy zależność: ln (x<sub>NH<sub>3</sub></sub><sup>2</sup> / (x<sub>N<sub>2</sub></sub> · x<sub>H<sub>2</sub></sub><sup>3</sup>)) = –(2μ<sub>NH<sub>3</sub></sub><sup>0</sup> – μ<sub>N<sub>2</sub></sub><sup>0</sup> – 3μ<sub>H<sub>2</sub></sub><sup>0</sup>) / RT. W stałej temperaturze i pod stałym ciśnieniem prawa strona tego równania jest stała, co prowadzi do wniosku, że iloraz ułamków molowych w stanie równowagi jest wielkością stałą.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"prawo-dzialania-mas\">Prawo działania mas i stała równowagi</h3><p>Stałość ilorazu stężeń w stanie równowagi jest treścią prawa działania mas. Dla reakcji syntezy amoniaku możemy zapisać: x<sub>NH<sub>3</sub></sub><sup>2</sup> / (x<sub>N<sub>2</sub></sub> · x<sub>H<sub>2</sub></sub><sup>3</sup>) = K<sub>x</sub>, gdzie K<sub>x</sub> jest stałą równowagi wyrażoną przez ułamki molowe. Wartość K<sub>x</sub> zależy od temperatury i ciśnienia, ale nie od składu początkowego mieszaniny.</p><p>Jeżeli w układzie nie osiągnięto jeszcze równowagi, to iloraz aktualnych ułamków molowych może być mniejszy lub większy od K<sub>x</sub>. Gdy iloraz jest mniejszy, układ będzie dążył do zwiększenia stężenia amoniaku, a gdy większy – do jego rozkładu. Na przykład, jeśli do reaktora wprowadzimy mieszaninę z nadmiarem amoniaku, to w celu osiągnięcia równowagi zajdzie reakcja rozkładu: 2NH<sub>3</sub> → 3H<sub>2</sub> + N<sub>2</sub>. Zatem w mieszaninie azotu, wodoru i amoniaku mogą zachodzić obie reakcje – synteza i rozkład – w zależności od tego, która z nich prowadzi do obniżenia entalpii swobodnej układu.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"kierunek-reakcji\">Kierunek reakcji a zmiana entalpii swobodnej</h3><p>Reakcję, która może przebiegać w obu kierunkach, zapisujemy za pomocą podwójnej strzałki: 3H<sub>2</sub> + N<sub>2</sub> ⇌ 2NH<sub>3</sub>. Oznacza to, że w stanie równowagi w układzie współistnieją zarówno substraty, jak i produkty, nawet jeśli ich stężenia są bardzo małe. O tym, czy w danej mieszaninie zajdzie samorzutnie synteza, czy rozkład amoniaku, decyduje znak zmiany entalpii swobodnej reakcji (ΔG).</p><p>Jeżeli ΔG < 0, reakcja w kierunku zapisanym równaniem może zachodzić samorzutnie. Gdy ΔG = 0, układ znajduje się w stanie równowagi. Natomiast ΔG > 0 oznacza, że reakcja w tym kierunku nie jest samorzutna; samorzutny będzie proces odwrotny. Te reguły są praktycznym wyrazem drugiej zasady termodynamiki, która wskazuje, że procesy samorzutne w przyrodzie zawsze prowadzą do wzrostu entropii całkowitej, a w warunkach stałego ciśnienia i temperatury – do zmniejszania entalpii swobodnej układu. Nie wszystkie procesy dozwolone przez pierwszą zasadę termodynamiki mogą zajść samorzutnie; na przykład ciepło samoistnie przepływa tylko z ciała o wyższej temperaturze do ciała o niższej, a gaz rozpręża się samorzutnie do próżni, ale nie spręża się samorzutnie.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki jest warunek równowagi chemicznej w układzie o stałej temperaturze i ciśnieniu?",
      "answer": "Warunkiem równowagi jest osiągnięcie minimum entalpii swobodnej układu, co matematycznie wyraża się zerowaniem się pochodnej entalpii swobodnej względem postępu reakcji (dG/dn = 0)."
    },
    {
      "question": "Co to jest stała równowagi Kx i od czego zależy?",
      "answer": "Stała równowagi Kx to iloraz ułamków molowych produktów i substratów w stanie równowagi, podniesionych do potęg równych współczynnikom stechiometrycznym. Zależy od temperatury i ciśnienia, ale nie od składu początkowego."
    },
    {
      "question": "Jak zmiana entalpii swobodnej (ΔG) determinuje kierunek reakcji?",
      "answer": "Jeśli ΔG < 0, reakcja w danym kierunku jest samorzutna; jeśli ΔG = 0, układ jest w równowadze; jeśli ΔG > 0, reakcja nie zachodzi samorzutnie, lecz samorzutny jest proces odwrotny."
    }
  ]
};
