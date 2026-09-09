import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_59_wlasnosciMagnetyczneAtomowWieloelektronowychIProstychJonowData: StructuredChapter = {
  "chapterTitle": "Własności magnetyczne atomów wieloelektronowych i prostych jonów",
  "toc": [
    {
      "title": "Moment magnetyczny a liczby kwantowe",
      "anchorId": "moment-magnetyczny-a-liczby-kwantowe"
    },
    {
      "title": "Diamagnetyzm i paramagnetyzm",
      "anchorId": "diamagnetyzm-i-paramagnetyzm"
    },
    {
      "title": "Pomiar podatności magnetycznej – waga Gouya",
      "anchorId": "pomiar-podatnosci-magnetycznej-waga-gouya"
    },
    {
      "title": "Zależność podatności od temperatury – prawo Curie-Weissa",
      "anchorId": "zaleznosc-podatnosci-od-temperatury-prawo-curie-weissa"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"moment-magnetyczny-a-liczby-kwantowe\">Moment magnetyczny a liczby kwantowe</h3><p>W atomach wieloelektronowych, podobnie jak dla pojedynczego elektronu, poszczególne momenty pędu (orbitalny i spinowy) są źródłem odpowiadających im momentów magnetycznych. Wypadkowy orbitalny moment magnetyczny, związany z orbitalnym momentem pędu opisywanym poboczną liczbą kwantową <em>L</em>, wyraża się wzorem: <strong>M<sub>L</sub> = √(L(L+1)) μ<sub>B</sub></strong>. Analogicznie, spinowy moment magnetyczny dla wypadkowego spinu <em>S</em> dany jest zależnością: <strong>M<sub>S</sub> = 2√(S(S+1)) μ<sub>B</sub></strong>.</p><p>Gdy orbitalny i spinowy moment pędu sprzęgają się (tzw. sprzężenie Russella-Saundersa), całkowity moment magnetyczny atomu, odpowiadający wewnętrznej liczbie kwantowej <em>J</em>, opisuje równanie: <strong>M<sub>J</sub> = g√(J(J+1)) μ<sub>B</sub></strong>. Występujący tu współczynnik <em>g</em>, nazywany czynnikiem Landego (lub czynnikiem rozszczepienia spektroskopowego), zależy od wartości liczb <em>L</em>, <em>S</em> i <em>J</em> i obliczany jest według wzoru: <strong>g = 1 + [J(J+1) + S(S+1) − L(L+1)] / [2J(J+1)]</strong>.</p><p>W szczególnych przypadkach czynnik Landego upraszcza się: gdy <em>L</em> = 0 (a więc <em>J</em> = <em>S</em>), wtedy <em>g</em> = 2 i wzór na moment magnetyczny redukuje się do wyrażenia na moment spinowy. Z kolei gdy <em>S</em> = 0 (a więc <em>J</em> = <em>L</em>), wówczas <em>g</em> = 1 i otrzymujemy wzór na orbitalny moment magnetyczny.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"diamagnetyzm-i-paramagnetyzm\">Diamagnetyzm i paramagnetyzm</h3><p>Z równania na całkowity moment magnetyczny wynika, że trwały moment magnetyczny mogą wykazywać jedynie atomy lub jony, dla których całkowita liczba kwantowa <em>J</em> jest różna od zera. W stanie podstawowym warunek <em>J</em> = 0 spełniają układy o zamkniętych podpowłokach, czyli o konfiguracji elektronowej gazu szlachetnego, a także o konfiguracji <em>ns</em><sup>2</sup>. Stan taki opisuje term singletowy <sup>1</sup>S<sub>0</sub>.</p><p>Substancje, których atomy, jony lub cząsteczki nie posiadają trwałego momentu magnetycznego, nazywamy <strong>diamagnetykami</strong>. Natomiast związki zawierające cząstki z niecałkowicie obsadzonymi podpowłokami elektronowymi, które w stanie podstawowym mają <em>J</em> ≠ 0, wykazują trwały moment magnetyczny i są określane jako <strong>paramagnetyki</strong>.</p><p>Zachowanie się substancji w niejednorodnym polu magnetycznym pozwala odróżnić te dwie grupy. Próbka paramagnetyczna jest wciągana w obszar pola o większej indukcji, natomiast próbka diamagnetyczna jest z pola wypychana. Zjawiska te można zaobserwować za pomocą tzw. wagi Gouya.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"pomiar-podatnosci-magnetycznej-waga-gouya\">Pomiar podatności magnetycznej – waga Gouya</h3><p>W metodzie Gouya próbkę w kształcie walca zawiesza się na ramieniu wagi w taki sposób, aby jej dolny koniec znajdował się w jednorodnym polu magnetycznym elektromagnesu, a górny – poza nim. Po włączeniu pola magnetycznego na próbkę działa siła <em>F</em>, która objawia się pozorną zmianą jej ciężaru. Dla substancji paramagnetycznej siła ta jest skierowana zgodnie z siłą ciężkości (próbka jest przyciągana do magnesu), natomiast dla diamagnetycznej – przeciwnie (próbka jest wypychana).</p><p>Wartość tej siły wyraża wzór: <strong>F = (χ<sub>M</sub> · A · B<sup>2</sup>) / (2 · M · μ<sub>0</sub>)</strong>, gdzie <em>M</em> to masa molowa substancji, <em>ρ</em> – jej gęstość, <em>A</em> – pole przekroju poprzecznego próbki, <em>B</em> – indukcja magnetyczna w miejscu dolnego końca próbki, a μ<sub>0</sub> – przenikalność magnetyczna próżni (1,257·10<sup>−7</sup> N·A<sup>−2</sup>). Przekształcając ten wzór, można wyznaczyć <strong>molową podatność magnetyczną</strong> χ<sub>M</sub>, która jest miarą zdolności substancji do namagnesowania się w polu magnetycznym.</p><p>Całkowita podatność magnetyczna substancji jest sumą wkładu diamagnetycznego (zawsze ujemnego) i paramagnetycznego (zawsze dodatniego): <strong>χ<sub>M</sub> = χ<sub>M</sub><sup>dia</sup> + χ<sub>M</sub><sup>para</sup></strong>. Dla czystych diamagnetyków χ<sub>M</sub><sup>para</sup> = 0, a dla paramagnetyków wkład diamagnetyczny jest zwykle pomijalnie mały, więc χ<sub>M</sub> ≈ χ<sub>M</sub><sup>para</sup>.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"zaleznosc-podatnosci-od-temperatury-prawo-curie-weissa\">Zależność podatności od temperatury – prawo Curie-Weissa</h3><p>Podatność magnetyczna substancji paramagnetycznych zależy od temperatury – maleje wraz z jej wzrostem, ponieważ ruchy termiczne utrudniają uporządkowanie momentów magnetycznych w polu. Zależność tę opisuje <strong>prawo Curie-Weissa</strong>: <strong>χ<sub>M</sub> = C / (T − θ)</strong>, gdzie <em>C</em> to stała Curie, a <em>θ</em> – stała Weissa (wyrażona w jednostkach temperatury). Stała Curie jest związana z momentem magnetycznym μ cząsteczek (atomów, jonów) wzorem: <strong>C = (N<sub>A</sub><sup>2</sup> μ<sub>0</sub> μ<sup>2</sup>) / (3R)</strong>, gdzie <em>N<sub>A</sub></em> to liczba Avogadra, a <em>R</em> – stała gazowa.</p><p>Stałą Curie wyznacza się doświadczalnie, mierząc podatność magnetyczną w szerokim zakresie temperatur i sporządzając wykres zależności 1/χ<sub>M</sub> od temperatury. Z przekształconego równania Curie-Weissa: <strong>1/χ<sub>M</sub> = T/C − θ/C</strong> wynika, że wykres ten jest linią prostą. Tangens kąta nachylenia prostej do osi odciętych daje wartość 1/C, a punkt przecięcia z osią rzędnych – wartość θ/C. Dzięki temu można obliczyć zarówno stałą Curie, jak i stałą Weissa, a następnie – korzystając ze związku między stałą Curie a momentem magnetycznym – wyznaczyć wartość momentu magnetycznego badanych cząsteczek.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jaki warunek musi być spełniony, aby atom lub jon wykazywał trwały moment magnetyczny?",
      "answer": "Atom lub jon musi mieć niezerową całkowitą liczbę kwantową J, co oznacza, że posiada niecałkowicie zapełnione podpowłoki elektronowe."
    },
    {
      "question": "Jak zachowuje się substancja diamagnetyczna w niejednorodnym polu magnetycznym?",
      "answer": "Substancja diamagnetyczna jest wypychana z pola magnetycznego, ponieważ indukowany w niej moment magnetyczny ma kierunek przeciwny do kierunku linii pola."
    },
    {
      "question": "Co opisuje prawo Curie-Weissa?",
      "answer": "Prawo Curie-Weissa opisuje zależność podatności magnetycznej substancji paramagnetycznej od temperatury: χ_M = C/(T - θ), gdzie C to stała Curie, a θ to stała Weissa."
    }
  ]
};
