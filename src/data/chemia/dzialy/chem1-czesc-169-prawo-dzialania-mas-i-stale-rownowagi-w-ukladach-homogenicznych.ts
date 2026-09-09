import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_169_prawoDzialaniaMasIStaleRownowagiWUkladachHomogenicznychData: StructuredChapter = {
  "chapterTitle": "Prawo działania mas i stałe równowagi w układach homogenicznych",
  "toc": [
    {
      "title": "Stała równowagi Kx i jej ograniczenia",
      "anchorId": "stala-rownowagi-kx"
    },
    {
      "title": "Stała równowagi Kp dla reakcji gazowych",
      "anchorId": "stala-rownowagi-kp"
    },
    {
      "title": "Stała równowagi Kc dla roztworów",
      "anchorId": "stala-rownowagi-kc"
    },
    {
      "title": "Związki między stałymi równowagi",
      "anchorId": "zwiazki-miedzy-stalymi"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"stala-rownowagi-kx\">Stała równowagi Kx i jej ograniczenia</h3><p>W równaniu opisującym stan równowagi dla reakcji tworzenia amoniaku, wartości współczynników stechiometrycznych występują jako potęgi przy ułamkach molowych reagentów. Wielkość K<sub>x</sub> definiuje się jako stałą równowagi wyrażoną przez ułamki molowe. Z równania (10.9) wynika, że do obliczenia K<sub>x</sub> niezbędna jest znajomość wartości potencjałów chemicznych poszczególnych substancji w stanie równowagi.</p><p>Wartości te zależą od temperatury oraz, w przypadku fazy gazowej, od ciśnienia całkowitego panującego w układzie. Oznacza to, że stała K<sub>x</sub> pozostaje niezmienna jedynie dla różnych stanów równowagi osiąganych w tej samej temperaturze i przy tym samym ciśnieniu całkowitym, o ile w układzie obecna jest faza gazowa.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"stala-rownowagi-kp\">Stała równowagi K<sub>p</sub> dla reakcji gazowych</h3><p>Gdy wszystkie reagenty A, B, C i D są gazami, tworzą one układ homogeniczny. Wówczas, wychodząc od ciśnień cząstkowych poszczególnych składników, można zdefiniować stałą równowagi K<sub>p</sub>, która – w przeciwieństwie do K<sub>x</sub> – nie zależy od ciśnienia całkowitego. Wyraża się ją wzorem:</p><p>K<sub>p</sub> = (p<sub>C</sub><sup>c</sup> · p<sub>D</sub><sup>d</sup>) / (p<sub>A</sub><sup>a</sup> · p<sub>B</sub><sup>b</sup>) · (p°)<sup>∑ν</sup>, gdzie ∑ν = c + d – a – b.</p><p>Zgodnie z konwencją, ciśnienie standardowe p° przyjmuje wartość 1 atm. Jeśli ciśnienia cząstkowe wyrazimy w paskalach, to p° = 1,01325·10<sup>5</sup> Pa, a wzór przybiera postać:</p><p>K<sub>p</sub> = (p<sub>C</sub><sup>c</sup> · p<sub>D</sub><sup>d</sup>) / (p<sub>A</sub><sup>a</sup> · p<sub>B</sub><sup>b</sup>) · (1,01325·10<sup>5</sup> Pa)<sup>∑ν</sup>.</p><p>Jeżeli natomiast ciśnienia podamy w atmosferach, to p° = 1 atm i wzór upraszcza się do postaci:</p><p>K<sub>p</sub> = (p<sub>C</sub><sup>c</sup> · p<sub>D</sub><sup>d</sup>) / (p<sub>A</sub><sup>a</sup> · p<sub>B</sub><sup>b</sup>).</p><p>Należy pamiętać, że w tym ostatnim przypadku stała K<sub>p</sub> jest wielkością bezwymiarową.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"stala-rownowagi-kc\">Stała równowagi K<sub>c</sub> dla roztworów</h3><p>W przypadku równowag ustalających się w roztworach najwygodniej jest posługiwać się stałą równowagi K<sub>c</sub>, zdefiniowaną za pomocą stężeń molowych. Wyraża się ona wzorem:</p><p>K<sub>c</sub> = (c<sub>C</sub><sup>c</sup> · c<sub>D</sub><sup>d</sup>) / (c<sub>A</sub><sup>a</sup> · c<sub>B</sub><sup>b</sup>) · (c°)<sup>∑ν</sup>, gdzie c° = 1 mol·l⁻¹.</p><p>Gdy stężenia podajemy w molach na litr, wzór upraszcza się do postaci:</p><p>K<sub>c</sub> = (c<sub>C</sub><sup>c</sup> · c<sub>D</sub><sup>d</sup>) / (c<sub>A</sub><sup>a</sup> · c<sub>B</sub><sup>b</sup>),</p><p>przy czym stała ta jest wówczas bezwymiarowa. W praktyce często zapisuje się ją jako K, pamiętając o jej bezwymiarowym charakterze.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"zwiazki-miedzy-stalymi\">Związki między stałymi równowagi</h3><p>Stała K<sub>p</sub> i stała K<sub>x</sub> są ze sobą powiązane. Ponieważ ciśnienie cząstkowe składnika i jest równe iloczynowi jego ułamka molowego i ciśnienia całkowitego (p<sub>i</sub> = x<sub>i</sub> · P), podstawienie tej zależności do wzoru na K<sub>p</sub> prowadzi do wyrażenia:</p><p>K<sub>p</sub> = K<sub>x</sub> · (P/p°)<sup>∑ν</sup>.</p><p>Podobnie, stała K<sub>c</sub> wiąże się ze stałą K<sub>x</sub> poprzez całkowitą liczbę moli reagentów n w objętości V. Zależność tę można zapisać jako:</p><p>K<sub>c</sub> = K<sub>x</sub> · (n/(V·c°))<sup>∑ν</sup>.</p><p>Te relacje pokazują, że wybór sposobu wyrażania stężeń (ułamki molowe, ciśnienia cząstkowe czy stężenia molowe) wpływa na wartość liczbowej stałej równowagi, ale wszystkie one opisują ten sam stan równowagi chemicznej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego stała równowagi Kx zależy od ciśnienia całkowitego w przypadku reakcji gazowych?",
      "answer": "Stała Kx jest wyrażona przez ułamki molowe, które zależą od ciśnienia całkowitego. Wartości potencjałów chemicznych gazów zależą od ciśnienia, więc Kx zmienia się wraz z ciśnieniem całkowitym, nawet w stałej temperaturze."
    },
    {
      "question": "Jaka jest różnica między stałą Kp a stałą Kx?",
      "answer": "Stała Kp jest wyrażona przez ciśnienia cząstkowe reagentów i nie zależy od ciśnienia całkowitego, podczas gdy stała Kx jest wyrażona przez ułamki molowe i zależy od ciśnienia całkowitego."
    },
    {
      "question": "Jakie jest znaczenie ciśnienia standardowego p° w definicji stałej Kp?",
      "answer": "Ciśnienie standardowe p° (zwykle 1 atm) jest używane do unormowania ciśnień cząstkowych, dzięki czemu stała Kp jest bezwymiarowa. Wartość p° wpływa na postać wzoru, ale nie na fizyczną istotę równowagi."
    }
  ]
};
