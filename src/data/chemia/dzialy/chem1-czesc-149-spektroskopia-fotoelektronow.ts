import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_149_spektroskopiaFotoelektronowData: StructuredChapter = {
  "chapterTitle": "Spektroskopia fotoelektronów",
  "toc": [
    {
      "title": "Podstawy spektroskopii fotoelektronów",
      "anchorId": "podstawy-spektroskopii-fotoelektronow"
    },
    {
      "title": "Rodzaje spektroskopii fotoelektronów",
      "anchorId": "rodzaje-spektroskopii-fotoelektronow"
    },
    {
      "title": "Budowa spektrometru fotoelektronowego",
      "anchorId": "budowa-spektrometru-fotoelektronowego"
    },
    {
      "title": "Interpretacja widm fotoelektronowych",
      "anchorId": "interpretacja-widm-fotoelektronowych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"podstawy-spektroskopii-fotoelektronow\">Podstawy spektroskopii fotoelektronów</h3><p>Spektroskopia fotoelektronów to technika badawcza, która w najbardziej bezpośredni sposób umożliwia określenie energii poziomów elektronowych w atomach i cząsteczkach. Metoda opiera się na pomiarze energii kinetycznej elektronów wybijanych z próbki pod wpływem promieniowania elektromagnetycznego o odpowiedniej częstotliwości – najczęściej nadfioletowego lub rentgenowskiego. Wybite elektrony nazywane są fotoelektronami, a całe zjawisko stanowi przejaw efektu fotoelektrycznego.</p><p>Zgodnie z zasadą zachowania energii, energia kwantu padającego promieniowania (hν) jest zużywana na pokonanie energii wiązania elektronu oraz nadanie mu energii kinetycznej. Jeśli użyjemy promieniowania ściśle monochromatycznego i zmierzymy energię kinetyczną fotoelektronów (E<sub>k</sub>), możemy obliczyć energię jonizacji (E<sub>i</sub>) danego elektronu, korzystając z równania: E<sub>i</sub> = hν − E<sub>k</sub>. W ten sposób otrzymujemy informację o energii poziomu, z którego elektron został usunięty.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rodzaje-spektroskopii-fotoelektronow\">Rodzaje spektroskopii fotoelektronów</h3><p>W zależności od zastosowanego promieniowania, wyróżnia się dwie główne odmiany spektroskopii fotoelektronów. Gdy używane jest promieniowanie nadfioletowe, mówimy o spektroskopii UPS (od ang. <em>Ultraviolet Photoelectron Spectroscopy</em>). Pozwala ona badać elektrony walencyjne, czyli te znajdujące się na najbardziej zewnętrznych orbitalach. Z kolei przy użyciu promieniowania rentgenowskiego mówimy o spektroskopii XPS (od ang. <em>X-ray Photoelectron Spectroscopy</em>), która umożliwia analizę elektronów z głębszych powłok, w tym elektronów rdzenia atomowego.</p><p>W literaturze międzynarodowej całą technikę określa się często skrótem PES (od ang. <em>Photoelectron Spectroscopy</em>). Spektroskopia fotoelektronów znajduje zastosowanie zarówno do badania próbek w fazie gazowej, jak i do analizy powierzchni ciał stałych, co jest szczególnie istotne w badaniach materiałowych i katalizie.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"budowa-spektrometru-fotoelektronowego\">Budowa spektrometru fotoelektronowego</h3><p>Spektrometr fotoelektronowy składa się z komory próżniowej, w której umieszcza się badaną próbkę. W przypadku substancji lotnych stosuje się tzw. wiązkę molekularną – wąski strumień cząsteczek wprowadzany do komory. Próbka jest naświetlana promieniowaniem nadfioletowym lub rentgenowskim, co powoduje emisję fotoelektronów.</p><p>Wylatujące elektrony trafiają do analizatora, który stanowi kluczowy element spektrometru. Analizator składa się z dwóch zakrzywionych płytek metalowych, pomiędzy którymi przykłada się napięcie elektryczne. Dzięki temu tor lotu elektronów ulega zakrzywieniu, a przy danym napięciu przez analizator przechodzą jedynie elektrony o określonej energii kinetycznej. Elektrony, które pokonają analizator, trafiają do detektora, który rejestruje liczbę zliczeń na sekundę. Zmieniając w sposób ciągły napięcie, można uzyskać widmo liczby fotoelektronów w funkcji ich energii kinetycznej.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"interpretacja-widm-fotoelektronowych\">Interpretacja widm fotoelektronowych</h3><p>Widmo fotoelektronowe przedstawia zależność liczby zliczeń fotoelektronów od energii jonizacji. Dla argonu, którego konfiguracja elektronowa to 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>, obserwuje się kilka pasm odpowiadających usunięciu elektronów z różnych powłok. Każde pasmo odpowiada określonemu stanowi jonu powstałego po usunięciu elektronu.</p><p>Wyrwanie elektronu z orbitalu s prowadzi do stanu, w którym spinowa liczba kwantowa S = 1/2, orbitalna liczba kwantowa L = 0, a całkowita liczba kwantowa J = 1/2. Odpowiada to termowi <sup>2</sup>S<sub>1/2</sub>. Z kolei usunięcie elektronu z orbitalu p daje stan z S = 1/2, L = 1, a J może przyjmować wartości 3/2 lub 1/2, co odpowiada termom <sup>2</sup>P<sub>3/2</sub> i <sup>2</sup>P<sub>1/2</sub>. Rozszczepienie pasm wynikające z różnych wartości J jest konsekwencją sprzężenia spin-orbita.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega spektroskopia fotoelektronów?",
      "answer": "Spektroskopia fotoelektronów polega na pomiarze energii kinetycznej elektronów wybijanych z atomów lub cząsteczek pod wpływem promieniowania nadfioletowego lub rentgenowskiego, co pozwala określić energie jonizacji i poziomy energetyczne elektronów."
    },
    {
      "question": "Jakie są dwie główne odmiany spektroskopii fotoelektronów i czym się różnią?",
      "answer": "UPS (Ultraviolet Photoelectron Spectroscopy) wykorzystuje promieniowanie nadfioletowe i bada elektrony walencyjne, natomiast XPS (X-ray Photoelectron Spectroscopy) używa promieniowania rentgenowskiego i analizuje elektrony z głębszych powłok, w tym elektrony rdzenia."
    },
    {
      "question": "Jaką rolę pełni analizator w spektrometrze fotoelektronowym?",
      "answer": "Analizator składa się z zakrzywionych płytek metalowych, między którymi przykłada się napięcie. Pozwala on na selektywne przepuszczanie elektronów o określonej energii kinetycznej, co umożliwia rejestrację widma w funkcji energii."
    },
    {
      "question": "Dlaczego w widmie fotoelektronowym argonu obserwuje się rozszczepienie pasm dla elektronów p?",
      "answer": "Rozszczepienie pasm dla elektronów p wynika ze sprzężenia spin-orbita, które prowadzi do dwóch możliwych wartości całkowitej liczby kwantowej J (3/2 i 1/2), co daje termy <sup>2</sup>P<sub>3/2</sub> i <sup>2</sup>P<sub>1/2</sub>."
    }
  ]
};
