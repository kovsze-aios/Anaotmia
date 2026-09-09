import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_166_entalpiaSwobodnaIPrawoDzialaniaMasData: StructuredChapter = {
  "chapterTitle": "Entalpia swobodna i prawo działania mas",
  "toc": [
    {
      "title": "Analogia mechaniczna: minimum energii potencjalnej",
      "anchorId": "analogia-mechaniczna"
    },
    {
      "title": "Entalpia swobodna jako kryterium równowagi",
      "anchorId": "entalpia-swobodna-kryterium-rownowagi"
    },
    {
      "title": "Potencjał chemiczny i jego zależności",
      "anchorId": "potencjal-chemiczny-zaleznosci"
    },
    {
      "title": "Przykład reakcji syntezy amoniaku",
      "anchorId": "przyklad-reakcji-syntezy-amoniaku"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"analogia-mechaniczna\">Analogia mechaniczna: minimum energii potencjalnej</h3><p>Rozważmy prosty układ mechaniczny: kulę umieszczoną na zboczu górskim. Gdy kula zostanie puszczona, stacza się w dół, a jej energia potencjalna stopniowo zamienia się w energię kinetyczną. Ta z kolei jest rozpraszana na skutek tarcia i wykonywanej pracy mechanicznej, aż w końcu kula zatrzymuje się w najniższym możliwym punkcie doliny. W tym położeniu osiąga minimum energii potencjalnej, które jest dostępne w danych warunkach terenu. Taki stan, w którym układ nie wykazuje tendencji do dalszych zmian, nazywamy <strong>stanem równowagi</strong>.</p><p>Należy odróżnić równowagę trwałą od równowagi pozornej. Gdyby kula napotkała na swojej drodze przeszkodę, mogłaby się zatrzymać w położeniu wyższym, ale nadal mogłaby się staczać, gdyby tylko usunąć przeszkodę. Taki stan nie jest prawdziwą równowagą, lecz jedynie stanem metastabilnym. W matematycznym opisie warunkiem równowagi jest zerowanie się pochodnej energii potencjalnej względem położenia: dV/dx = 0.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"entalpia-swobodna-kryterium-rownowagi\">Entalpia swobodna jako kryterium równowagi</h3><p>W układach, w których zachodzą przemiany chemiczne lub fazowe, nie możemy posługiwać się wyłącznie energią potencjalną. Termodynamika dostarcza jednak funkcji, która pełni analogiczną rolę – jest nią <strong>entalpia swobodna</strong>, zwana również <strong>energią Gibbsa</strong>. Dla procesów zachodzących w stałej temperaturze i pod stałym ciśnieniem, entalpia swobodna układu dąży do minimum. Osiągnięcie tego minimum oznacza osiągnięcie stanu równowagi.</p><p>Podobnie jak energia potencjalna, entalpia swobodna jest funkcją stanu – jej zmiana zależy wyłącznie od stanu początkowego i końcowego, a nie od drogi przemiany. Dla układu wielofazowego entalpia swobodna jest sumą entalpii swobodnych poszczególnych faz, a dla każdej fazy – sumą entalpii swobodnych jej składników.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"potencjal-chemiczny-zaleznosci\">Potencjał chemiczny i jego zależności</h3><p>Dla fazy zawierającej n<sub>1</sub> moli substancji 1, n<sub>2</sub> moli substancji 2 itd., całkowitą entalpię swobodną G można zapisać jako sumę iloczynów liczby moli i entalpii swobodnej przypadającej na jeden mol każdego składnika. Tę wielkość molową nazywamy <strong>potencjałem chemicznym</strong> i oznaczamy symbolem μ<sub>i</sub>. Potencjał chemiczny składnika i zależy od temperatury, ciśnienia oraz składu mieszaniny.</p><p>Dla faz skondensowanych (ciekłych i stałych) wpływ ciśnienia jest zwykle pomijalny, dlatego potencjał chemiczny można wyrazić jako sumę członu zależnego tylko od temperatury oraz członu zawierającego logarytm ułamka molowego: μ<sub>i</sub> = μ<sub>i</sub><sup>θ</sup>(T) + RT ln x<sub>i</sub>. Dla gazów doskonałych zamiast ułamka molowego stosuje się ciśnienie cząstkowe, a wzór przyjmuje postać μ<sub>i</sub> = μ<sub>i</sub><sup>θ</sup>(T) + RT ln(p<sub>i</sub>/p<sup>θ</sup>), gdzie p<sup>θ</sup> to ciśnienie standardowe, równe 1 atm = 1,01325·10<sup>5</sup> Pa.</p><p>W przypadku roztworów ciekłych dogodnie jest używać stężenia molowego. Wówczas potencjał chemiczny wyraża się wzorem μ<sub>i</sub> = μ<sub>i</sub><sup>θ</sup>(T) + RT ln(c<sub>i</sub>/c<sup>θ</sup>), gdzie c<sup>θ</sup> = 1 mol·l<sup>−1</sup>. Stężenie c<sub>i</sub> podaje się w molach na litr, a iloraz c<sub>i</sub>/c<sup>θ</sup> jest wielkością bezwymiarową.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"przyklad-reakcji-syntezy-amoniaku\">Przykład reakcji syntezy amoniaku</h3><p>Rozważmy mieszaninę azotu, wodoru i amoniaku, w której stężenie amoniaku jest małe. W odpowiedniej temperaturze (i przy udziale katalizatora, który nie wpływa na rozumowanie termodynamiczne) zachodzi samorzutna reakcja: N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>. W dowolnej chwili całkowita entalpia swobodna układu jest sumą iloczynów potencjałów chemicznych i liczby moli każdego składnika: G = μ<sub>N2</sub>n<sub>N2</sub> + μ<sub>H2</sub>n<sub>H2</sub> + μ<sub>NH3</sub>n<sub>NH3</sub>.</p><p>Gdy w reakcji przereaguje nieskończenie mała ilość azotu dn, to wiąże się to ze zmianą liczby moli wodoru i amoniaku zgodnie ze stechiometrią reakcji. Zmiana entalpii swobodnej układu dG będzie sumą zmian spowodowanych przez ubytek substratów i przyrost produktu. Warunkiem równowagi jest dG = 0, co prowadzi do związku między potencjałami chemicznymi reagentów. Podstawiając wyrażenia na potencjały chemiczne, otrzymujemy równanie wiążące ciśnienia cząstkowe reagentów w stanie równowagi, czyli prawo działania mas.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co jest warunkiem równowagi mechanicznej dla kuli na zboczu?",
      "answer": "Pochodna energii potencjalnej względem położenia musi być równa zero (dV/dx = 0)."
    },
    {
      "question": "Jaką rolę pełni entalpia swobodna w układach chemicznych?",
      "answer": "Entalpia swobodna (energia Gibbsa) dąży do minimum w procesach zachodzących w stałej temperaturze i pod stałym ciśnieniem; osiągnięcie minimum oznacza stan równowagi."
    },
    {
      "question": "Od czego zależy potencjał chemiczny składnika w fazie ciekłej?",
      "answer": "Potencjał chemiczny w fazie ciekłej zależy od temperatury oraz stężenia (wyrażonego jako ułamek molowy lub stężenie molowe), a wpływ ciśnienia jest zwykle pomijalny."
    },
    {
      "question": "Jaką postać ma wzór na potencjał chemiczny gazu doskonałego?",
      "answer": "μ_i = μ_i^θ(T) + RT ln(p_i/p^θ), gdzie p_i to ciśnienie cząstkowe składnika, a p^θ to ciśnienie standardowe (1 atm)."
    }
  ]
};
