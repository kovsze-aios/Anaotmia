import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_150_spektroskopiaFotoelektronowData: StructuredChapter = {
  "chapterTitle": "Spektroskopia fotoelektronów",
  "toc": [
    {
      "title": "Podstawy spektroskopii fotoelektronów",
      "anchorId": "podstawy-spektroskopii-fotoelektronow"
    },
    {
      "title": "Zastosowania analityczne i badanie powierzchni",
      "anchorId": "zastosowania-analityczne-i-badanie-powierzchni"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"podstawy-spektroskopii-fotoelektronow\">Podstawy spektroskopii fotoelektronów</h3><p>W spektroskopii fotoelektronów analizuje się energie kinetyczne elektronów wybijanych z próbki pod wpływem promieniowania elektromagnetycznego. Gdy w wyniku jonizacji powstaje kation w stanie podstawowym, obserwuje się pojedyncze pasmo w widmie. Jednak dla orbitali o niezerowym momencie pędu (np. 2p lub 3p) możliwe są dwa stany energetyczne powstałego jonu, różniące się sprzężeniem spinowo-orbitalnym. Dla orbitalu p elektron ma spin 1/2, a orbitalny moment pędu równy 1, co daje dwie możliwe wartości całkowitego momentu pędu: 1/2 i 3/2. Stan o niższej energii (term <sup>2</sup>P<sub>1/2</sub>) wymaga nieco większej energii jonizacji niż stan wyższy (<sup>2</sup>P<sub>3/2</sub>). W rezultacie wyrwanie elektronu z poziomu 2p lub 3p prowadzi do pojawienia się dwóch blisko położonych pasm w widmie fotoelektronowym.</p><p>Przykładem ilustrującym tę metodę jest widmo fotoelektronowe cząsteczek azotu (N<sub>2</sub>) uzyskane przy użyciu promieniowania nadfioletowego (UPS). W widmie tym można wyróżnić pasma pochodzące od elektronów walencyjnych. Pasma w okolicach 37 eV i 19 eV odpowiadają jonizacji elektronów z orbitali cząsteczkowych σ<sub>2s</sub> i σ*<sub>2s</sub>. Kolejne pasmo, około 17 eV, przypisuje się elektronom z orbitalu π<sub>2p</sub>. To ostatnie pasmo wykazuje strukturę subtelną, czyli składa się z kilku blisko położonych maksimów. Struktura subtelna pojawia się, gdy elektrony pochodzą z orbitali silnie zaangażowanych w tworzenie wiązań chemicznych. Poszczególne maksima odpowiadają różnym stanom oscylacyjnym cząsteczki po jonizacji. Natomiast pasmo około 15,5 eV, związane z orbitalem σ<sub>2p</sub>, jest wąskie i ostre, co świadczy o tym, że elektrony σ<sub>2p</sub> w niewielkim stopniu uczestniczą w wiązaniu w cząsteczce N<sub>2</sub>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"zastosowania-analityczne-i-badanie-powierzchni\">Zastosowania analityczne i badanie powierzchni</h3><p>Gdy do naświetlania próbki stosuje się promieniowanie rentgenowskie (metoda XPS), energia kwantów jest wystarczająca do wybicia elektronów z najgłębszych powłok atomowych, które nie biorą udziału w wiązaniach chemicznych. Energie tych elektronów są charakterystyczne dla poszczególnych pierwiastków, ponieważ na nie w niewielkim stopniu wpływają wiązania chemiczne. Dzięki temu metoda XPS dostarcza informacji o składzie chemicznym próbki, zarówno w stanie gazowym, jak i stałym. Przykładowe energie jonizacji elektronów 1s dla pierwiastków drugiego okresu wynoszą: Li – 50 eV, Be – 110 eV, B – 190 eV, C – 280 eV, N – 400 eV, O – 530 eV, F – 690 eV.</p><p>Ze względu na zastosowania analityczne spektroskopia fotoelektronów bywa nazywana ESCA (od angielskiego <em>Electron Spectroscopy for Chemical Analysis</em>). Metoda ta cechuje się wysoką czułością, sięgającą 0,02 eV. Nowoczesne instrumenty pozwalają precyzyjnie rejestrować niewielkie przesunięcia pasm widmowych, rzędu kilku elektronowoltów. Przesunięcia te zależą od ładunku elektrycznego na atomie, a więc od jego stopnia utlenienia. Na przykład dla chloru pasmo pochodzące od elektronów 1s przesuwa się wraz ze wzrostem stopnia utlenienia od -I do VII o blisko 9 eV (dla stopnia -I leży przy 1211,9 eV). Dzięki temu spektroskopia fotoelektronów jest jednym z najczulszych narzędzi do określania zmian stopnia utlenienia pierwiastków w związkach chemicznych.</p><p>W przypadku próbek stałych, chociaż promieniowanie padające może wnikać w głąb materiału, fotoelektrony rejestrowane pochodzą jedynie z kilku najbardziej zewnętrznych warstw atomowych. Ta cecha sprawia, że spektroskopia fotoelektronów jest szczególnie przydatna w badaniach powierzchni ciał stałych oraz cząsteczek zaadsorbowanych na powierzchniach.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego w widmie fotoelektronowym dla orbitalu 2p obserwuje się dwa pasma zamiast jednego?",
      "answer": "Ze względu na sprzężenie spinowo-orbitalne, które prowadzi do rozszczepienia poziomu energetycznego na dwa stany: o niższej energii (term ²P₁/₂) i wyższej (term ²P₃/₂). Wyrwanie elektronu z orbitalu 2p może prowadzić do powstania jonu w jednym z tych dwóch stanów, co daje dwa blisko położone pasma."
    },
    {
      "question": "Jakie informacje można uzyskać z analizy struktury subtelnej pasm w widmie UPS cząsteczki N₂?",
      "answer": "Struktura subtelna pasm odpowiada różnym stanom oscylacyjnym cząsteczki po jonizacji. Pojawia się, gdy elektrony pochodzą z orbitali silnie zaangażowanych w wiązanie chemiczne, co pozwala wnioskować o charakterze wiązań."
    },
    {
      "question": "Na czym polega zastosowanie spektroskopii XPS do określania stopnia utlenienia pierwiastków?",
      "answer": "Energia wiązania elektronów wewnętrznych (np. 1s) zależy od ładunku efektywnego na atomie, który zmienia się wraz ze stopniem utlenienia. Przesunięcia pasm w widmie XPS są proporcjonalne do zmian stopnia utlenienia, co pozwala na ich precyzyjne określenie."
    }
  ]
};
