import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_128_polprzewodnikiSamoistneIDomieszkowaneData: StructuredChapter = {
  "chapterTitle": "Półprzewodniki samoistne i domieszkowane",
  "toc": [
    {
      "title": "Przewodnictwo samoistne",
      "anchorId": "przewodnictwo-samoistne"
    },
    {
      "title": "Półprzewodniki typu n",
      "anchorId": "polprzewodniki-typu-n"
    },
    {
      "title": "Półprzewodniki typu p",
      "anchorId": "polprzewodniki-typu-p"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"przewodnictwo-samoistne\">Przewodnictwo samoistne</h3><p>W krysztale germanu, który krystalizuje w strukturze diamentu, każdy atom jest otoczony czterema sąsiadami, z którymi łączy się wiązaniami kowalencyjnymi. W temperaturze zera bezwzględnego wszystkie wiązania są obsadzone, a elektrony walencyjne wypełniają pasmo podstawowe. Wskutek drgań cieplnych sieci może jednak dojść do zerwania pojedynczego wiązania, jeśli para atomów uzyska energię równą szerokości pasma wzbronionego, która dla germanu wynosi około 0,66 eV.</p><p>W wyniku takiego procesu jeden elektron zostaje przeniesiony do pasma przewodnictwa, gdzie może swobodnie się poruszać, stając się nośnikiem prądu. W miejscu zerwanego wiązania powstaje natomiast brak elektronu, nazywany <strong>dziurą elektronową</strong>. Dziura może być zapełniona przez elektron z sąsiedniego wiązania, co wymaga już tylko niewielkiej energii i jest równoznaczne z przemieszczeniem się dziury w krysztale. Formalnie dziurę traktuje się jako nośnik o dodatnim ładunku elementarnym.</p><p>W czystym półprzewodniku, takim jak german, stężenia elektronów swobodnych i dziur są sobie równe, ponieważ powstają one parami. Taki mechanizm przewodnictwa nazywamy <strong>przewodnictwem samoistnym</strong>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"polprzewodniki-typu-n\">Półprzewodniki typu n</h3><p>Wprowadzenie do sieci krystalicznej germanu atomów domieszki o większej liczbie elektronów walencyjnych, np. arsenu (pięć elektronów), prowadzi do powstania <strong>półprzewodnika typu n</strong>. Atom arsenu, zajmując miejsce germanu, tworzy wiązania kowalencyjne tylko z czterema sąsiednimi atomami germanu, wykorzystując cztery ze swoich elektronów walencyjnych. Piąty elektron pozostaje słabo związany i już po dostarczeniu niewielkiej energii może przejść do pasma przewodnictwa, stając się elektronem swobodnym.</p><p>Atom domieszki, który dostarcza elektronów do pasma przewodnictwa, nazywamy <strong>centrum donorowym</strong>. W obecności donorów liczba elektronów swobodnych znacznie przewyższa liczbę dziur, dlatego elektrony są głównymi nośnikami prądu. Przewodnictwo takiego półprzewodnika nazywamy <strong>elektronowym</strong> lub typu n.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"polprzewodniki-typu-p\">Półprzewodniki typu p</h3><p>Gdy domieszką jest atom o mniejszej liczbie elektronów walencyjnych, np. bor (trzy elektrony), powstaje <strong>półprzewodnik typu p</strong>. Atom boru tworzy wiązania kowalencyjne tylko z trzema z czterech otaczających go atomów germanu. Aby utworzyć czwarte wiązanie, konieczne jest pozyskanie elektronu z sąsiedniego wiązania Ge–Ge, co wymaga niewielkiej energii. W wyniku tego procesu w wiązaniu Ge–Ge powstaje dziura elektronowa.</p><p>Atom domieszki zdolny do przyjęcia elektronu nazywamy <strong>centrum akceptorowym</strong>. W obecności akceptorów liczba dziur jest znacznie większa niż liczba elektronów swobodnych, więc dziury stają się głównymi nośnikami prądu. Mówimy wtedy o <strong>przewodnictwie dziurowym</strong> lub typu p.</p><p>Poziomy energetyczne elektronów w centrach donorowych leżą w górnej części pasma wzbronionego, blisko pasma przewodnictwa, co ułatwia ich jonizację. Z kolei poziomy akceptorowe znajdują się w dolnej części pasma wzbronionego, blisko pasma podstawowego, co ułatwia przyjmowanie elektronów. Do półprzewodników należą także inne pierwiastki o właściwościach pośrednich między metalami a niemetalami, takie jak krzem i selen.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest przewodnictwo samoistne w półprzewodnikach?",
      "answer": "Przewodnictwo samoistne występuje w czystych półprzewodnikach, gdzie stężenia elektronów i dziur są równe, a nośniki powstają parami w wyniku termicznego wzbudzenia elektronów przez pasmo wzbronione."
    },
    {
      "question": "Jak powstaje półprzewodnik typu n?",
      "answer": "Półprzewodnik typu n powstaje przez domieszkowanie germanu (lub krzemu) atomami pierwiastków o pięciu elektronach walencyjnych, np. arsenem. Atom domieszki dostarcza nadmiarowy elektron do pasma przewodnictwa, stając się centrum donorowym."
    },
    {
      "question": "Czym charakteryzuje się półprzewodnik typu p?",
      "answer": "Półprzewodnik typu p powstaje przez domieszkowanie germanu atomami o trzech elektronach walencyjnych, np. borem. Atom domieszki przyjmuje elektron z sąsiedniego wiązania, tworząc dziurę elektronową, która staje się głównym nośnikiem prądu."
    }
  ]
};
