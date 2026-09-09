import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_65_podstawoweNarzedziaITechnikiInzynieriiGenetycznejData: StructuredChapter = {
  "chapterTitle": "Podstawowe narzędzia i techniki inżynierii genetycznej",
  "toc": [
    {
      "title": "Analiza restrykcyjna i elektroforeza DNA",
      "anchorId": "analiza-restrykcyjna-elektroforeza"
    },
    {
      "title": "Mapy restrykcyjne",
      "anchorId": "mapy-restrykcyjne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"analiza-restrykcyjna-elektroforeza\">Analiza restrykcyjna i elektroforeza DNA</h3><p>Analiza restrykcyjna to technika polegająca na trawieniu DNA wybranymi enzymami restrykcyjnymi, a następnie porównywaniu liczby i długości powstałych fragmentów. Dzięki niej można precyzyjnie ciąć genomy w określonych miejscach oraz odróżniać od siebie różne cząsteczki DNA. Jest to narzędzie szeroko stosowane w biotechnologii molekularnej.</p><p>Elektroforeza DNA to technika rozdzielania fragmentów DNA w porowatym żelu pod wpływem pola elektrycznego. Cząsteczki DNA mają ładunek ujemny (za sprawą reszt fosforanowych), więc przemieszczają się w kierunku elektrody dodatniej. Szybkość migracji zależy głównie od długości cząsteczki – krótsze fragmenty poruszają się szybciej i w efekcie tworzą prążki w różnych miejscach żelu.</p><p>Aby uwidocznić DNA, który jest bezbarwny, do żelu dodaje się substancję barwiącą, np. bromek etydyny. Pod wpływem światła UV barwnik ten wykazuje różową fluorescencję, co pozwala na obserwację rozdzielonych fragmentów.</p><p>Ważnym narzędziem w tych technikach są enzymy restrykcyjne, które rozpoznają specyficzne sekwencje i przecinają DNA w ściśle określonych miejscach. Po cięciu mogą powstawać końce lepkie (kohezyjne) lub tępe. Końce lepkie mają jednoniciowe „wystające” fragmenty, które mogą tworzyć wiązania wodorowe z komplementarnymi końcami innych cząsteczek DNA, co ułatwia ligację. W przypadku końców tępych ligacja jest znacznie mniej wydajna.</p><p>Polimerazy DNA to enzymy służące do powielania fragmentów DNA, np. wybranych genów. Działają na zasadzie syntezy nowej nici komplementarnej do matrycy (zwykle DNA, rzadziej RNA), rozpoczynając od startera. Polimerazy różnią się szybkością, dokładnością oraz zakresem temperatur, w których są aktywne. Przykładem termostabilnej polimerazy jest polimeraza Taq, wyizolowana z archeowca <em>Thermus aquaticus</em>; pozostaje aktywna nawet w temperaturze około 95°C.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"mapy-restrykcyjne\">Mapy restrykcyjne</h3><p>Jednym z praktycznych zastosowań analizy restrykcyjnej i elektroforezy jest konstruowanie map restrykcyjnych niewielkich cząsteczek DNA, takich jak plazmidy. Procedura polega na trawieniu plazmidu różnymi enzymami restrykcyjnymi, rozdzieleniu powstałych fragmentów metodą elektroforezy, a następnie porównaniu ich długości. Na tej podstawie można zlokalizować miejsca cięcia w obrębie cząsteczki.</p><p>Przykładowo, jeśli plazmid trawiony enzymem <em>Eco</em>RI daje w elektroforezie jeden szeroki prążek odpowiadający fragmentom o długości 2 kpz (kilopar zasad), oznacza to, że plazmid zawiera dwa miejsca restrykcyjne dla tego enzymu (powstały dwa fragmenty o tej samej długości). Z kolei trawienie enzymem <em>Hind</em>III prowadzi do powstania jednego wąskiego prążka o długości 4 kpz, co wskazuje na obecność jednego miejsca cięcia dla tego enzymu. Zastosowanie kombinacji obu enzymów pozwala określić wzajemne położenie miejsc restrykcyjnych – na przykład odległość między miejscem dla <em>Hind</em>III a jednym z miejsc dla <em>Eco</em>RI wynosi 1,5 kpz.</p><p>Mapy restrykcyjne są niezwykle przydatne w inżynierii genetycznej. Znajomość rozmieszczenia miejsc restrykcyjnych umożliwia m.in. tworzenie zrekombinowanego DNA, czyli łączenie fragmentów pochodzących z różnych źródeł (np. z różnych gatunków). Proces ten polega na wycięciu interesującego genu z jednego organizmu, a następnie wstawieniu go do wektora (np. plazmidu) uprzednio przeciętego tym samym enzymem restrykcyjnym. Dzięki komplementarnym końcom lepkim fragmenty łączą się, a enzym ligaza trwale je scala, tworząc zrekombinowany plazmid.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega analiza restrykcyjna DNA?",
      "answer": "Analiza restrykcyjna polega na trawieniu DNA enzymami restrykcyjnymi, które przecinają cząsteczkę w specyficznych miejscach, a następnie na porównaniu liczby i długości powstałych fragmentów, zwykle techniką elektroforezy."
    },
    {
      "question": "Dlaczego podczas elektroforezy DNA przemieszcza się w kierunku elektrody dodatniej?",
      "answer": "DNA ma ładunek ujemny ze względu na reszty fosforanowe w szkielecie cukrowo-fosforanowym, dlatego w polu elektrycznym migruje w stronę elektrody dodatniej (anody)."
    },
    {
      "question": "Co to jest mapa restrykcyjna i do czego służy?",
      "answer": "Mapa restrykcyjna to graficzne przedstawienie rozmieszczenia miejsc cięcia dla różnych enzymów restrykcyjnych w cząsteczce DNA. Służy m.in. do planowania konstrukcji zrekombinowanego DNA, ponieważ pozwala określić, gdzie można przeciąć wektor i wstawić obcy fragment."
    }
  ]
};
