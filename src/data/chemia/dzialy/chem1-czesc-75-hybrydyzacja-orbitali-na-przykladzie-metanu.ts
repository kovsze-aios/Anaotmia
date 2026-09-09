import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_75_hybrydyzacjaOrbitaliNaPrzykladzieMetanuData: StructuredChapter = {
  "chapterTitle": "Hybrydyzacja orbitali na przykładzie metanu",
  "toc": [
    {
      "title": "Wprowadzenie do hybrydyzacji",
      "anchorId": "wprowadzenie-do-hybrydyzacji"
    },
    {
      "title": "Struktura metanu a orbitale atomowe",
      "anchorId": "struktura-metanu-a-orbitale-atomowe"
    },
    {
      "title": "Ograniczenia prostego modelu wiązań",
      "anchorId": "ograniczenia-prostego-modelu-wiazan"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-hybrydyzacji\">Wprowadzenie do hybrydyzacji</h3><p>W niniejszym rozdziale przedstawimy koncepcję hybrydyzacji orbitali atomowych, która jest niezbędna do wyjaśnienia geometrii cząsteczek. W następnym rozdziale, poświęconym symetrii, pokażemy, jak dla danej symetrii cząsteczki można skonstruować odpowiednie kombinacje liniowe orbitali atomowych, tworzące orbitale zhybrydyzowane. Tutaj ograniczymy się do intuicyjnego wyjaśnienia, dlaczego hybrydyzacja jest konieczna i jak wykorzystuje się ją do budowy orbitali molekularnych.</p><p>Posłużymy się przykładem cząsteczki metanu (CH<sub>4</sub>), w której atomy wodoru rozmieszczone są w narożach czworościanu foremnego, a atom węgla znajduje się w jego środku. Kąty między wiązaniami C–H wynoszą 109°28', a wszystkie cztery wiązania są równoważne pod względem długości i energii.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"struktura-metanu-a-orbitale-atomowe\">Struktura metanu a orbitale atomowe</h3><p>Zgodnie z wcześniejszymi rozważaniami, orbitale molekularne w metanie powstają przez nakładanie się orbitali walencyjnych atomu węgla (2s, 2p<sub>x</sub>, 2p<sub>y</sub>, 2p<sub>z</sub>) z orbitalami 1s czterech atomów wodoru. Gdyby każdy orbital atomu węgla nakładał się z orbitalem innego atomu wodoru, powstałyby cztery orbitale wiążące, które obsadzone przez osiem elektronów walencyjnych (cztery od węgla i cztery od wodoru) utworzyłyby cztery wiązania C–H.</p><p>Jednakże proste rozumowanie, w którym orbital 2s węgla łączy się z orbitalem 1s jednego wodoru, a orbitale 2p z pozostałymi, prowadzi do przewidywania, że wiązania te nie byłyby równoważne. Wiązanie utworzone przez orbital 2s (który jest sferycznie symetryczny) różniłoby się od wiązań utworzonych przez orbitale 2p (które mają kierunkowy charakter). W rzeczywistości wszystkie wiązania w metanie są identyczne, co sugeruje, że orbitale atomowe węgla ulegają przemieszaniu, tworząc cztery równoważne orbitale hybrydowe.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"ograniczenia-prostego-modelu-wiazan\">Ograniczenia prostego modelu wiązań</h3><p>Gdyby wiązania w metanie powstawały z niezhybrydyzowanych orbitali atomowych, należałoby oczekiwać, że wiązanie z udziałem orbitalu 2s będzie miało inne właściwości (np. inną energię, długość czy polarność) niż wiązania utworzone z orbitali 2p. Ponadto kąty między wiązaniami nie odpowiadałyby obserwowanemu kątowi 109°28', ponieważ orbitale p są do siebie prostopadłe, a orbital s nie ma wyróżnionego kierunku. Tymczasem doświadczalnie stwierdza się, że wszystkie cztery wiązania C–H są całkowicie równoważne, a geometria cząsteczki jest idealnie tetraedryczna.</p><p>Ta rozbieżność między prostym modelem a rzeczywistością wymaga wprowadzenia pojęcia hybrydyzacji, czyli matematycznego mieszania orbitali atomowych tego samego atomu w celu uzyskania nowych orbitali o odpowiedniej symetrii i kierunkowości. W przypadku metanu orbitale 2s i trzy orbitale 2p węgla ulegają hybrydyzacji typu sp<sup>3</sup>, tworząc cztery identyczne orbitale skierowane ku narożom czworościanu. To właśnie te orbitale hybrydowe nakładają się z orbitalami 1s wodoru, dając cztery równoważne wiązania sigma.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego proste nakładanie orbitali 2s i 2p węgla z orbitalami 1s wodoru nie wyjaśnia równoważności wiązań w metanie?",
      "answer": "Ponieważ orbitale 2s i 2p mają różną symetrię i energię, co prowadziłoby do powstania wiązań o różnych właściwościach. W rzeczywistości wszystkie wiązania C–H w metanie są identyczne, co wymaga hybrydyzacji orbitali węgla do czterech równoważnych orbitali sp3."
    },
    {
      "question": "Jaki kąt między wiązaniami występuje w cząsteczce metanu i jaka jest jej geometria?",
      "answer": "Kąt między wiązaniami wynosi 109°28', a geometria cząsteczki jest tetraedryczna (czworościan foremny)."
    }
  ]
};
