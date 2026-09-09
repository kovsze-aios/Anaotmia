import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_9_stechiometriaReakcjiChemicznychWspolczynnikiStechiometryczneIRownaniaBilansoweData: StructuredChapter = {
  "chapterTitle": "Stechiometria reakcji chemicznych: współczynniki stechiometryczne i równania bilansowe",
  "toc": [
    {
      "title": "Współczynniki stechiometryczne w reakcjach chemicznych",
      "anchorId": "wspolczynniki-stechiometryczne"
    },
    {
      "title": "Równania bilansowe dla reagentów",
      "anchorId": "rownania-bilansowe"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wspolczynniki-stechiometryczne\">Współczynniki stechiometryczne w reakcjach chemicznych</h3><p>W chemii, dla opisania przebiegu reakcji, stosuje się równania chemiczne, w których przed wzorami reagentów umieszcza się współczynniki stechiometryczne. Współczynniki te określają proporcje molowe, w jakich substancje biorą udział w reakcji. Dla wygody zapisu, współczynnikom przypisuje się znaki: ujemne dla substratów (które ulegają zużyciu) oraz dodatnie dla produktów (które powstają).</p><p>Rozważmy przykładową reakcję syntezy chlorowodoru z pierwiastków: H<sub>2</sub> + Cl<sub>2</sub> → 2 HCl. W tym równaniu współczynniki stechiometryczne można zapisać jako: ν<sub>H<sub>2</sub></sub> = −1, ν<sub>Cl<sub>2</sub></sub> = −1, ν<sub>HCl</sub> = +2. Analogicznie, dla reakcji powstawania wody: 2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O, współczynniki wynoszą: ν<sub>H<sub>2</sub></sub> = −2, ν<sub>O<sub>2</sub></sub> = −1, ν<sub>H<sub>2</sub>O</sub> = +2.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rownania-bilansowe\">Równania bilansowe dla reagentów</h3><p>Mając na uwadze zasadę zachowania masy, można dla każdej reakcji zapisać równanie bilansowe, w którym suma iloczynów współczynników stechiometrycznych i mas molowych odpowiednich substancji jest równa zeru. Dla reakcji syntezy chlorowodoru równanie to przyjmuje postać: ν<sub>HCl</sub>·M<sub>HCl</sub> + ν<sub>H<sub>2</sub></sub>·M<sub>H<sub>2</sub></sub> + ν<sub>Cl<sub>2</sub></sub>·M<sub>Cl<sub>2</sub></sub> = 0. Analogicznie, dla reakcji tworzenia wody: ν<sub>H<sub>2</sub>O</sub>·M<sub>H<sub>2</sub>O</sub> + ν<sub>H<sub>2</sub></sub>·M<sub>H<sub>2</sub></sub> + ν<sub>O<sub>2</sub></sub>·M<sub>O<sub>2</sub></sub> = 0.</p><p>Ogólnie, dla dowolnej reakcji chemicznej można zapisać sumaryczne równanie bilansowe: ∑<sub>i</sub> ν<sub>i</sub>·M<sub>i</sub> = 0, gdzie ν<sub>i</sub> to współczynnik stechiometryczny i-tego reagenta (z odpowiednim znakiem), a M<sub>i</sub> to jego masa molowa. Równanie to stanowi matematyczny wyraz prawa zachowania masy w ujęciu stechiometrycznym.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie znaki mają współczynniki stechiometryczne substratów i produktów w konwencji przyjętej w podręczniku?",
      "answer": "Substraty otrzymują znak ujemny, a produkty znak dodatni."
    },
    {
      "question": "Zapisz równanie bilansowe dla reakcji syntezy amoniaku: N2 + 3H2 → 2NH3, używając współczynników stechiometrycznych i mas molowych.",
      "answer": "ν_NH3·M_NH3 + ν_N2·M_N2 + ν_H2·M_H2 = 0, gdzie ν_NH3 = +2, ν_N2 = −1, ν_H2 = −3. Podstawiając: 2·M_NH3 − M_N2 − 3·M_H2 = 0."
    }
  ]
};
