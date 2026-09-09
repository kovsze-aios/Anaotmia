import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_173_entropiaASamorzutnoscProcesowData: StructuredChapter = {
  "chapterTitle": "Entropia a samorzutność procesów",
  "toc": [
    {
      "title": "Entropia w przemianach odwracalnych i nieodwracalnych",
      "anchorId": "entropia-w-przemianach-odwracalnych-i-nieodwracalnych"
    },
    {
      "title": "Obliczanie zmian entropii",
      "anchorId": "obliczanie-zmian-entropii"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"entropia-w-przemianach-odwracalnych-i-nieodwracalnych\">Entropia w przemianach odwracalnych i nieodwracalnych</h3><p>Podczas izotermicznego, odwracalnego rozprężania gazu doskonałego układ pobiera ciepło, które można opisać zależnością wynikającą z równania (9.5): q<sub>odwr</sub> = nRT ln(V<sub>2</sub>/V<sub>1</sub>). Ponieważ temperatura pozostaje stała, zmianę entropii gazu wyraża wzór: ΔS = q<sub>odwr</sub>/T = nR ln(V<sub>2</sub>/V<sub>1</sub>). Zatem wzrost objętości gazu doskonałego prowadzi do wzrostu jego entropii, przy czym energia wewnętrzna gazu nie ulega zmianie.</p><p>W przemianie odwracalnej ciepło jest przekazywane z otoczenia do układu w sposób quasistatyczny, co oznacza, że w każdej chwili układ i otoczenie pozostają praktycznie w równowadze termicznej i mechanicznej. Temperatura otoczenia jest równa temperaturze układu, a ciśnienie zewnętrzne równoważy ciśnienie wewnętrzne gazu. Oddając ciepło, otoczenie zmienia swoją entropię o wartość ΔS<sub>otocz</sub> = -q<sub>odwr</sub>/T. Sumaryczna zmiana entropii układu i otoczenia wynosi wówczas zero: ΔS<sub>całk</sub> = ΔS<sub>ukł</sub> + ΔS<sub>otocz</sub> = 0.</p><p>Rozważmy teraz proces samorzutny, który z reguły jest nieodwracalny. Przykładem może być swobodna ekspansja n moli gazu doskonałego do próżni w warunkach izotermicznych. Stan początkowy i końcowy gazu są identyczne jak w poprzednim przypadku odwracalnym, więc zmiana entropii gazu jest taka sama: ΔS<sub>ukł</sub> = q<sub>odwr</sub>/T. Jednak w tym procesie otoczenie nie dostarcza ciepła, zatem ΔS<sub>otocz</sub> = 0. Całkowita zmiana entropii wynosi więc ΔS<sub>całk</sub> = q<sub>odwr</sub>/T &gt; 0.</p><p>Analogiczne wnioski płyną z analizy przepływu ciepła między otoczeniem a układem. W przypadku odwracalnym temperatury obu stron są równe, co daje ΔS<sub>całk</sub> = 0. W procesie nieodwracalnym, gdy temperatura otoczenia jest wyższa od temperatury układu (T + ΔT), układ pobiera ciepło q w temperaturze T, a otoczenie oddaje je w temperaturze wyższej. Wtedy ΔS<sub>całk</sub> = q/T - q/(T+ΔT) &gt; 0.</p><p>Uogólniając te obserwacje, można stwierdzić, że jeśli suma zmian entropii układu i otoczenia (ΔS<sub>całk</sub>) jest równa zeru, proces zachodzi w stanie równowagi. Gdy ΔS<sub>całk</sub> &gt; 0, proces jest samorzutny. Natomiast wartość ΔS<sub>całk</sub> &lt; 0 oznacza, że proces samorzutny nie może przebiegać.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"obliczanie-zmian-entropii\">Obliczanie zmian entropii</h3><p>Entropia substancji rośnie wraz ze wzrostem temperatury. Aby obliczyć przyrost entropii towarzyszący ogrzewaniu, należy podzielić proces na nieskończenie wiele etapów, w których wymieniane są nieskończenie małe ilości ciepła dq<sub>odwr</sub>, tak aby temperatura układu pozostawała praktycznie stała. Dla każdego takiego etapu zmiana entropii wynosi dS = dq<sub>odwr</sub>/T. Całkowitą zmianę entropii otrzymujemy przez scałkowanie wyrażenia dq<sub>odwr</sub>/T w granicach od T<sub>1</sub> do T<sub>2</sub>:</p><p>ΔS = S<sub>2</sub> - S<sub>1</sub> = ∫(dq<sub>odwr</sub>/T) od T<sub>1</sub> do T<sub>2</sub>.</p><p>Jeżeli ogrzewanie jednego mola substancji prowadzi się pod stałym ciśnieniem, to dq<sub>odwr</sub> = C<sub>p</sub> dT, gdzie C<sub>p</sub> oznacza molową pojemność cieplną przy stałym ciśnieniu. Wówczas dla jednego mola:</p><p>ΔS = ∫(C<sub>p</sub>/T) dT od T<sub>1</sub> do T<sub>2</sub>.</p><p>Gdy zakres temperatur między T<sub>1</sub> a T<sub>2</sub> nie jest zbyt duży, można przyjąć, że C<sub>p</sub> jest stałe, co prowadzi do prostego wzoru:</p><p>ΔS = C<sub>p</sub> ln(T<sub>2</sub>/T<sub>1</sub>).</p><p>W szerszym zakresie temperatur konieczne jest uwzględnienie zależności C<sub>p</sub> od temperatury.</p><p>Dla procesów izotermicznych i izobarycznych, takich jak przemiany fazowe (topnienie, parowanie) czy reakcje chemiczne, zmianę entropii oblicza się z równania ΔS = ΔH/T, gdzie ΔH jest zmianą entalpii procesu. Wzór ten wynika z tego, że w warunkach stałego ciśnienia ciepło wymieniane z otoczeniem jest równe zmianie entalpii.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki jest znak całkowitej zmiany entropii (układ + otoczenie) dla procesu samorzutnego?",
      "answer": "Dla procesu samorzutnego całkowita zmiana entropii jest dodatnia (ΔS > 0)."
    },
    {
      "question": "Jak zmienia się entropia gazu doskonałego podczas izotermicznego rozprężania do próżni?",
      "answer": "Entropia gazu rośnie, ponieważ objętość wzrasta, a zmiana entropii wynosi ΔS = nR ln(V2/V1)."
    },
    {
      "question": "Jak obliczyć zmianę entropii podczas ogrzewania substancji pod stałym ciśnieniem, gdy Cp jest stałe?",
      "answer": "ΔS = Cp ln(T2/T1), gdzie Cp to molowa pojemność cieplna przy stałym ciśnieniu."
    }
  ]
};
