import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_19_szeregiPromieniotworczeData: StructuredChapter = {
  "chapterTitle": "Szeregi promieniotwórcze",
  "toc": [
    {
      "title": "Stan stacjonarny w szeregach promieniotwórczych",
      "anchorId": "stan-stacjonarny"
    },
    {
      "title": "Rodzaje szeregów promieniotwórczych",
      "anchorId": "rodzaje-szeregow"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"stan-stacjonarny\">Stan stacjonarny w szeregach promieniotwórczych</h3><p>W zamkniętym układzie, w którym zachodzi ciąg przemian promieniotwórczych, po pewnym czasie ustala się stan stacjonarny. Charakteryzuje się on tym, że szybkość rozpadu każdego nuklidu w szeregu jest równa szybkości jego powstawania z nuklidu poprzedzającego. Dla dwóch kolejnych członów szeregu, oznaczonych jako X<sub>1</sub> i X<sub>2</sub>, warunek ten można zapisać równaniem: λ<sub>1</sub>N<sub>1</sub> = λ<sub>2</sub>N<sub>2</sub>, gdzie λ to stałe rozpadu, a N to liczby jąder.</p><p>Z zależności tej wynika, że w stanie stacjonarnym liczby jąder poszczególnych nuklidów są odwrotnie proporcjonalne do ich stałych rozpadu, a wprost proporcjonalne do ich okresów połowicznego rozpadu (T<sub>1/2</sub>). Innymi słowy, stosunek ilości dowolnych dwóch nuklidów w szeregu jest równy stosunkowi ich okresów połowicznego rozpadu: N<sub>1</sub> : N<sub>2</sub> = T<sub>1/2</sub>(1) : T<sub>1/2</sub>(2).</p><p>Dzięki tej zależności można wyjaśnić, dlaczego w rudach uranu, które przez miliony lat znajdowały się w równowadze promieniotwórczej, zawartość radu jest niezwykle mała. Stosunek liczby atomów radu do liczby atomów uranu wynosi zaledwie 3,6·10<sup>−7</sup>. Tak niewielka ilość radu jest praktycznie niewykrywalna metodami chemicznymi, co tłumaczy trudności w jego izolowaniu z rud.</p><p>W preparacie promieniotwórczym, w którym ustalił się stan stacjonarny, obecne są wszystkie produkty rozpadu – zarówno te bliższe, jak i dalsze. Preparat taki emituje jednocześnie promieniowanie α, β<sup>−</sup> i γ o różnych energiach, mimo że każdy pojedynczy nuklid emituje tylko jeden określony rodzaj cząstek o charakterystycznej energii.</p><p>Opisany stan stacjonarny bywa często nazywany stanem równowagi promieniotwórczej, choć nie jest to określenie w pełni ścisłe. Różni się on od równowagi termodynamicznej tym, że dotyczy procesów nieodwracalnych – przemiany w szeregach promieniotwórczych zachodzą zawsze w jednym kierunku, podczas gdy równowaga termodynamiczna odnosi się do procesów odwracalnych.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rodzaje-szeregow\">Rodzaje szeregów promieniotwórczych</h3><p>W przyrodzie występują trzy naturalne szeregi promieniotwórcze: szereg uranowo-radowy (zaczynający się od <sup>238</sup>U), szereg torowy (od <sup>232</sup>Th) oraz szereg uranowo-aktynowy (od <sup>235</sup>U). Każdy z nich rozpoczyna się nuklidem o bardzo długim okresie połowicznego rozpadu, zanikającym znacznie wolniej niż pozostałe ogniwa łańcucha. Szeregi kończą się stabilnymi izotopami ołowiu, które nie ulegają dalszym przemianom.</p><p>Przemiany w tych szeregach polegają głównie na emisji cząstek α lub β<sup>−</sup>. Emisja α zmniejsza liczbę masową (A) o 4, a liczbę atomową (Z) o 2, co przesuwa pierwiastek w układzie okresowym o dwa miejsca w lewo. Emisja β<sup>−</sup> zwiększa liczbę atomową o 1, nie zmieniając liczby masowej, co przesuwa pierwiastek o jedno miejsce w prawo.</p><p>W wyniku tych przemian liczby masowe nuklidów w danym szeregu spełniają określone zależności: dla szeregu torowego są one postaci 4n, dla uranowo-radowego 4n+2, a dla uranowo-aktynowego 4n+3, gdzie n jest liczbą naturalną. Po odkryciu sztucznego pierwiastka neptunu (<sup>237</sup>Np) poznano czwarty szereg, w którym liczby masowe wyrażają się wzorem 4n+1. Neptun występuje w rudach uranu w śladowych ilościach (około 1,8·10<sup>−12</sup>% w stosunku do uranu), co uniemożliwiało jego bezpośrednie badania. Dopiero otrzymanie neptunu w wyniku naświetlania uranu neutronami pozwoliło na dokładne poznanie jego właściwości i całego szeregu neptunowego.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest stan stacjonarny w szeregu promieniotwórczym i jaka zależność wiąże liczby jąder z okresami połowicznego rozpadu?",
      "answer": "Stan stacjonarny to taki stan, w którym szybkość rozpadu każdego nuklidu jest równa szybkości jego powstawania z poprzednika. Wtedy stosunek liczby jąder dwóch nuklidów jest równy stosunkowi ich okresów połowicznego rozpadu: N1/N2 = T1/2(1)/T1/2(2)."
    },
    {
      "question": "Dlaczego w rudach uranu trudno wykryć rad metodami chemicznymi?",
      "answer": "Ponieważ w stanie równowagi promieniotwórczej stosunek liczby atomów radu do uranu wynosi około 3,6·10⁻⁷, co oznacza, że radu jest zbyt mało, aby można go było wykryć metodami chemicznymi."
    },
    {
      "question": "Jakie są cztery szeregi promieniotwórcze i jakie wzory opisują ich liczby masowe?",
      "answer": "Szereg torowy (4n), uranowo-radowy (4n+2), uranowo-aktynowy (4n+3) i neptunowy (4n+1)."
    }
  ]
};
