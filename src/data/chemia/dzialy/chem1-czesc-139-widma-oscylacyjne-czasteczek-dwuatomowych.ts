import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_139_widmaOscylacyjneCzasteczekDwuatomowychData: StructuredChapter = {
  "chapterTitle": "Widma oscylacyjne cząsteczek dwuatomowych",
  "toc": [
    {
      "title": "Model oscylatora harmonicznego",
      "anchorId": "model-oscylatora-harmonicznego"
    },
    {
      "title": "Kwantowanie energii oscylacyjnej",
      "anchorId": "kwantowanie-energii-oscylacyjnej"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"model-oscylatora-harmonicznego\">Model oscylatora harmonicznego</h3><p>Analizując drgania cząsteczek dwuatomowych, często odwołujemy się do wyidealizowanego układu, jakim jest oscylator harmoniczny. Wyobrażamy sobie wówczas dwie kule o masach m<sub>A</sub> i m<sub>B</sub> połączone sprężyną. Energia potencjalna takiego układu zależy od wzajemnej odległości między kulami. W położeniu równowagi, gdy sprężyna nie jest ani rozciągnięta, ani ściśnięta, energia ta jest równa zeru. Każde odchylenie od tego stanu – zarówno zwiększenie, jak i zmniejszenie odległości – powoduje wzrost energii potencjalnej.</p><p>Dla oscylatora harmonicznego energia potencjalna V rośnie proporcjonalnie do kwadratu odchylenia od położenia równowagi, czyli do kwadratu różnicy między aktualną odległością r a odległością równowagową r<sub>0</sub>:</p><p>V = k(r – r<sub>0</sub>)<sup>2</sup></p><p>Współczynnik proporcjonalności k nosi nazwę <strong>stałej siłowej</strong> i stanowi miarę sztywności sprężyny (a w przypadku cząsteczki – sztywności wiązania chemicznego).</p><p>Gdy oscylator zostanie wytrącony z położenia równowagi, zaczyna drgać. Rozciągnięta sprężyna wprawia kule w ruch, powodując ich zbliżanie się do siebie. W trakcie tego ruchu energia potencjalna zgromadzona w sprężynie przekształca się w energię kinetyczną kul. Prędkość i energia kinetyczna rosną, aż do momentu osiągnięcia odległości równowagowej, gdzie energia potencjalna osiąga zero. W tym punkcie cała energia układu jest energią kinetyczną. Następnie, dzięki bezwładności, kule kontynuują ruch, oddalając się od siebie, co prowadzi do ponownego wzrostu energii potencjalnej kosztem energii kinetycznej. Ruch zwalnia, aż do całkowitego zatrzymania w punkcie maksymalnego odchylenia. Wtedy układ posiada wyłącznie energię potencjalną. Proces ten powtarza się cyklicznie – kule periodycznie zbliżają się i oddalają, a energia jest ciągle przekształcana między postacią kinetyczną i potencjalną. W idealnym oscylatorze harmonicznym suma tych energii pozostaje stała w czasie.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"kwantowanie-energii-oscylacyjnej\">Kwantowanie energii oscylacyjnej</h3><p>W mechanice klasycznej energia oscylatora może przyjmować dowolne, ciągłe wartości. Jednak w przypadku cząsteczek, gdzie ruchy wewnętrzne podlegają prawom mechaniki kwantowej, model oscylatora harmonicznego wymaga kwantowego opisu. Podstawiając klasyczną energię potencjalną do równania Schrödingera, otrzymujemy rozwiązania, które prowadzą do wniosku, że całkowita energia oscylatora kwantowomechanicznego jest skwantowana i wyraża się wzorem:</p><p>E<sub>v</sub> = (v + ½) hν</p><p>gdzie v jest oscylacyjną liczbą kwantową przyjmującą wartości całkowite: v = 0, 1, 2, …, h to stała Plancka, a ν to częstość drgań oscylatora harmonicznego. Częstość tę można wyrazić za pomocą stałej siłowej k oraz masy zredukowanej μ układu:</p><p>ν = (1/2π) √(k/μ)</p><p>Masa zredukowana μ dla dwóch mas m<sub>A</sub> i m<sub>B</sub> jest zdefiniowana jako:</p><p>μ = (m<sub>A</sub> · m<sub>B</sub>) / (m<sub>A</sub> + m<sub>B</sub>)</p><p>Wzór na energię oscylacyjną wskazuje, że nawet w najniższym stanie kwantowym (v = 0) energia oscylatora nie jest równa zeru, lecz wynosi E<sub>0</sub> = ½ hν. Oznacza to, że w przeciwieństwie do ruchów obrotowych cząsteczki, jej drgania oscylacyjne nie mogą całkowicie ustać, nawet w temperaturze zera absolutnego. Ta niezerowa energia punktu zerowego jest fundamentalną cechą układów kwantowych i ma istotne konsekwencje dla spektroskopii oscylacyjnej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest stała siłowa i jaką rolę pełni w modelu oscylatora harmonicznego?",
      "answer": "Stała siłowa (k) jest współczynnikiem proporcjonalności w wyrażeniu na energię potencjalną oscylatora harmonicznego (V = k(r – r0)²). Stanowi miarę sztywności sprężyny (lub wiązania chemicznego) – im większa wartość k, tym sztywniejszy oscylator i trudniej go odkształcić."
    },
    {
      "question": "Dlaczego energia oscylacyjna cząsteczki nie może być równa zeru nawet w temperaturze zera absolutnego?",
      "answer": "Zgodnie z mechaniką kwantową, energia oscylacyjna jest skwantowana i wyraża się wzorem E_v = (v + ½)hν. Dla najniższego stanu kwantowego (v = 0) energia wynosi E_0 = ½hν, co jest wartością niezerową. Jest to tzw. energia punktu zerowego, wynikająca z zasady nieoznaczoności Heisenberga – cząsteczka nie może znajdować się w całkowitym spoczynku."
    }
  ]
};
