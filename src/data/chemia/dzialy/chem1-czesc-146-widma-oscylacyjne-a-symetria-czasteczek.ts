import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_146_widmaOscylacyjneASymetriaCzasteczekData: StructuredChapter = {
  "chapterTitle": "Widma oscylacyjne a symetria cząsteczek",
  "toc": [
    {
      "title": "Analiza symetrii dla cząsteczek D3h",
      "anchorId": "analiza-symetrii-d3h"
    },
    {
      "title": "Analiza symetrii dla cząsteczek C3v",
      "anchorId": "analiza-symetrii-c3v"
    },
    {
      "title": "Interpretacja widm amoniaku",
      "anchorId": "interpretacja-widm-amoniaku"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"analiza-symetrii-d3h\">Analiza symetrii dla cząsteczek D3h</h3><p>Rozważmy cząsteczkę o symetrii D<sub>3h</sub>, na przykład płaski jon trójfluoroboranowy BF<sub>3</sub><sup>3−</sup> lub cząsteczkę BF<sub>3</sub>. Aby określić liczbę i typ drgań normalnych, należy najpierw wyznaczyć charakter reprezentacji przywiedlnej Γ dla ruchów jąder. Dla każdego atomu mamy trzy współrzędne kartezjańskie, więc dla cząsteczki złożonej z N atomów całkowita liczba stopni swobody wynosi 3N. W przypadku BF<sub>3</sub> (N=4) daje to 12 stopni swobody, z czego 3 odpowiadają translacjom, 3 rotacjom, a pozostałe 6 to drgania normalne.</p><p>W grupie D<sub>3h</sub> operacje symetrii to: E, 2C<sub>3</sub>, 2C<sub>2</sub>, σ<sub>h</sub>, 2S<sub>3</sub> i 3σ<sub>v</sub>. Dla każdej z tych operacji obliczamy charakter macierzy transformacji współrzędnych. Dla operacji tożsamościowej E charakter wynosi 12, gdyż każdy atom wnosi 3. Dla obrotu C<sub>3</sub> wokół osi głównej, atomy fluoru przechodzą jeden w drugi, więc ich wkład do charakteru wynosi 0; atom boru leży na osi, więc jego współrzędna z pozostaje niezmieniona (wkład +1), a współrzędne x i y obracają się o 120°, co daje wkład 2·cos(120°) = -1. Zatem charakter dla C<sub>3</sub> wynosi 0. Dla obrotu C<sub>2</sub> wokół osi przechodzącej przez atom boru i jeden z atomów fluoru, atom boru i ten fluor pozostają na miejscu, ale ich współrzędne x i y zmieniają znak (wkład -2), a pozostałe dwa fluory zamieniają się miejscami (wkład 0), więc charakter wynosi -2.</p><p>Dla odbicia w płaszczyźnie poziomej σ<sub>h</sub>, wszystkie atomy pozostają w tej płaszczyźnie, więc współrzędne z zmieniają znak (wkład -4), a x i y pozostają (wkład +8), dając charakter +4. Dla obrotu niewłaściwego S<sub>3</sub> (obrót o 120° i odbicie w płaszczyźnie poziomej), atomy fluoru przechodzą jeden w drugi (wkład 0), a dla atomu boru współrzędna z zmienia znak (wkład -1), a x i y obracają się o 120° (wkład -1), więc charakter wynosi -2. Dla odbicia w płaszczyźnie pionowej σ<sub>v</sub>, która zawiera oś główną i jeden z atomów fluoru, ten atom fluoru i bor pozostają, ale ich współrzędne prostopadłe do płaszczyzny zmieniają znak (wkład -2), a pozostałe dwa fluory zamieniają się miejscami (wkład 0), więc charakter wynosi -2.</p><p>Zestawienie charakterów reprezentacji Γ przedstawia się następująco:</p>D<sub>3h</sub>E2C<sub>3</sub>2C<sub>2</sub>σ<sub>h</sub>2S<sub>3</sub>3σ<sub>v</sub>Γ120-24-2-2<p>Korzystając z tablicy charakterów grupy D<sub>3h</sub>, reprezentację Γ można rozłożyć na sumę reprezentacji nieprzywiedlnych: Γ = A<sub>1</sub>' + A<sub>2</sub>' + 3E' + 2A<sub>2</sub>'' + E''. W tablicy charakterów dla D<sub>3h</sub> znajdujemy, że translacje należą do reprezentacji E' (dla x i y) oraz A<sub>2</sub>'' (dla z). Rotacje należą do A<sub>2</sub>' (R<sub>z</sub>) oraz E'' (R<sub>x</sub>, R<sub>y</sub>). Po odjęciu tych reprezentacji od Γ otrzymujemy reprezentacje odpowiadające drganiom: A<sub>1</sub>' + 2E' + A<sub>2</sub>''. Oznacza to, że cząsteczka D<sub>3h</sub> ma 6 drgań normalnych, przy czym dwa drgania typu E' są podwójnie zdegenerowane, więc obserwuje się 4 różne częstości.</p><p>Na podstawie reguł wyboru dla grupy D<sub>3h</sub> można przewidzieć aktywność tych drgań w widmach IR i Ramana. Drganie A<sub>1</sub>' jest aktywne tylko w widmie Ramana, drgania E' są aktywne zarówno w podczerwieni, jak i w Ramanie, a drganie A<sub>2</sub>'' jest aktywne tylko w podczerwieni. Zatem w widmie absorpcyjnym (IR) spodziewamy się 3 pasm (od E' i A<sub>2</sub>''), a w widmie Ramana również 3 pasm (od A<sub>1</sub>' i E'), przy czym dwa pasma (od E') są wspólne dla obu technik.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"analiza-symetrii-c3v\">Analiza symetrii dla cząsteczek C<sub>3v</sub></h3><p>Rozważmy teraz cząsteczkę o kształcie piramidy trygonalnej, taką jak amoniak NH<sub>3</sub>, która należy do grupy punktowej C<sub>3v</sub>. W tej grupie operacje symetrii to: E, 2C<sub>3</sub> (obroty o 120° i 240° wokół osi głównej) oraz 3σ<sub>v</sub> (płaszczyzny pionowe zawierające oś główną i jeden z atomów wodoru).</p><p>Dla cząsteczki NH<sub>3</sub> (N=4) całkowita liczba stopni swobody wynosi 12. Obliczamy charaktery reprezentacji Γ dla ruchów jąder. Dla E charakter wynosi 12. Dla obrotu C<sub>3</sub> wokół osi przechodzącej przez atom azotu, atomy wodoru przechodzą jeden w drugi, więc ich wkład do charakteru wynosi 0; atom azotu leży na osi, więc jego współrzędna z pozostaje (wkład +1), a x i y obracają się o 120° (wkład -1), dając charakter 0. Dla odbicia w płaszczyźnie σ<sub>v</sub>, która zawiera oś główną i jeden z atomów wodoru, ten atom wodoru i azot pozostają na miejscu, ale ich współrzędne prostopadłe do płaszczyzny zmieniają znak (wkład -2), a pozostałe dwa atomy wodoru zamieniają się miejscami (wkład 0), więc charakter wynosi -2.</p><p>Zestawienie charakterów Γ dla C<sub>3v</sub>:</p>C<sub>3v</sub>E2C<sub>3</sub>3σ<sub>v</sub>Γ120-2<p>Rozkład Γ na reprezentacje nieprzywiedlne daje: Γ = 3A<sub>1</sub> + A<sub>2</sub> + 4E. W tablicy charakterów grupy C<sub>3v</sub> translacje należą do A<sub>1</sub> (z) i E (x, y), a rotacje do A<sub>2</sub> (R<sub>z</sub>) i E (R<sub>x</sub>, R<sub>y</sub>). Po odjęciu tych reprezentacji otrzymujemy drgania: 2A<sub>1</sub> + 2E. To oznacza, że cząsteczka C<sub>3v</sub> ma 6 drgań normalnych, ale ze względu na degenerację drgań typu E obserwuje się tylko 4 różne częstości. Wszystkie te drgania są aktywne zarówno w podczerwieni, jak i w widmie Ramana, ponieważ reprezentacje A<sub>1</sub> i E są aktywne w obu technikach.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"interpretacja-widm-amoniaku\">Interpretacja widm amoniaku</h3><p>Eksperymentalne widmo absorpcyjne amoniaku w podczerwieni wykazuje cztery pasma o częstościach: 3336,7 cm<sup>−1</sup> (symetryczne drganie rozciągające), 3443,8 cm<sup>−1</sup> (asymetryczne drganie rozciągające), 950,4 cm<sup>−1</sup> (symetryczne drganie deformacyjne) oraz 1626,7 cm<sup>−1</sup> (asymetryczne drganie deformacyjne). Te same cztery częstości pojawiają się również w widmie Ramana.</p><p>Zgodnie z przewidywaniami teoretycznymi dla symetrii C<sub>3v</sub>, wszystkie cztery drgania powinny być aktywne w obu rodzajach widm, co dokładnie odpowiada obserwacjom. Gdyby cząsteczka NH<sub>3</sub> była płaska i miała symetrię D<sub>3h</sub>, w widmie IR obserwowalibyśmy tylko trzy pasma, a w Ramanie również trzy, z czego dwa byłyby wspólne. Tymczasem doświadczenie pokazuje cztery pasma w każdym widmie, z których wszystkie są wspólne. Na tej podstawie jednoznacznie stwierdzamy, że cząsteczka amoniaku nie jest płaska, lecz ma strukturę piramidy trygonalnej o symetrii C<sub>3v</sub>.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Ile drgań normalnych posiada cząsteczka BF3 (D3h) i ile różnych częstości obserwuje się w widmie?",
      "answer": "BF3 ma 6 drgań normalnych, ale ze względu na degenerację drgań E' obserwuje się tylko 4 różne częstości."
    },
    {
      "question": "Które drgania cząsteczki o symetrii D3h są aktywne w podczerwieni, a które w Ramanie?",
      "answer": "W D3h drgania E' są aktywne w IR i Ramanie, A1' tylko w Ramanie, a A2'' tylko w IR."
    },
    {
      "question": "Dlaczego na podstawie widm IR i Ramana amoniaku można wnioskować o jego symetrii C3v?",
      "answer": "Ponieważ obserwuje się 4 pasma w obu widmach, wszystkie wspólne, co jest zgodne z przewidywaniami dla C3v, a nie dla D3h."
    }
  ]
};
