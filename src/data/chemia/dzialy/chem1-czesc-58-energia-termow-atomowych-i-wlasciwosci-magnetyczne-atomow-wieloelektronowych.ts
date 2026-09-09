import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_58_energiaTermowAtomowychIWlasciwosciMagnetyczneAtomowWieloelektronowychData: StructuredChapter = {
  "chapterTitle": "Energia termów atomowych i właściwości magnetyczne atomów wieloelektronowych",
  "toc": [
    {
      "title": "Kwantowanie przestrzenne momentu pędu",
      "anchorId": "kwantowanie-przestrzenne-momentu-pedu"
    },
    {
      "title": "Schematy termów atomowych",
      "anchorId": "schematy-termow-atomowych"
    },
    {
      "title": "Struktura subtelna i nadsubtelna widm",
      "anchorId": "struktura-subtelna-i-nadsubtelna-widm"
    },
    {
      "title": "Sprzężenie LS i jj",
      "anchorId": "sprzezenie-ls-i-jj"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"kwantowanie-przestrzenne-momentu-pedu\">Kwantowanie przestrzenne momentu pędu</h3><p>W atomach wieloelektronowych wypadkowy moment pędu, oznaczany jako <strong>M<sub>J</sub></strong>, podlega kwantowaniu przestrzennemu względem kierunku zewnętrznego pola magnetycznego. Oznacza to, że wektor ten nie może przyjmować dowolnych orientacji, a jedynie takie, dla których jego rzut na oś pola (oś z) przyjmuje ściśle określone wartości. Zgodnie z regułami mechaniki kwantowej, składowa <strong>M<sub>J,z</sub></strong> może być wyrażona wzorem:</p><p><strong>M<sub>J,z</sub> = m<sub>J</sub> · (h / 2π)</strong>, gdzie <strong>m<sub>J</sub></strong> jest magnetyczną liczbą kwantową i przyjmuje wartości od <strong>−J</strong> do <strong>+J</strong>, różniące się o 1. Dla przykładu, gdy <strong>J = 2</strong>, możliwe są wartości <strong>m<sub>J</sub> = −2, −1, 0, 1, 2</strong>, co daje pięć różnych orientacji wektora momentu pędu względem pola. Każda z tych orientacji odpowiada innemu poziomowi energetycznemu, co prowadzi do rozszczepienia poziomów multipletowych w obecności pola magnetycznego.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"schematy-termow-atomowych\">Schematy termów atomowych</h3><p>Na podstawie reguł sprzężenia momentów pędu można skonstruować schematy poziomów energetycznych dla atomów o określonych konfiguracjach elektronowych. Przykładowo, dla konfiguracji <strong>d³</strong>, charakterystycznej dla atomu wanadu (V) o konfiguracji pełnej <strong>1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²</strong>, schemat termów przedstawia zależności między poziomami energetycznymi wynikającymi z oddziaływań elektronów. Na schematach tych można wyróżnić kolumny odpowiadające kolejnym etapom uwzględniania oddziaływań: od stanu bez oddziaływań, przez sprzężenie spinów i orbitali, aż po oddziaływanie z polem magnetycznym. Największe różnice energii występują między termami o różnych wartościach liczb kwantowych <strong>L</strong> i <strong>S</strong>, a energie tych przejść odpowiadają zakresowi nadfioletu lub światła widzialnego (rzędu 1–2 eV).</p><p>Schematy termów odnoszą się nie tylko do atomów obojętnych, ale także do jonów o tej samej liczbie elektronów walencyjnych. Na przykład schemat dla konfiguracji <strong>d³</strong> dotyczy zarówno obojętnego wanadu, jak i jonów <strong>V²⁺</strong>, <strong>Cr³⁺</strong> oraz <strong>Mn⁴⁺</strong>, które mają identyczną konfigurację elektronową w powłoce walencyjnej.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"struktura-subtelna-i-nadsubtelna-widm\">Struktura subtelna i nadsubtelna widm</h3><p>Odstępy między poziomami energetycznymi powstałymi w wyniku rozszczepienia multipletowego w polu magnetycznym są bardzo małe i zależą od indukcji tego pola. Przy typowych polach rzędu 1 T (10 000 Gs) różnice energii wynoszą około <strong>1·10⁻⁴ eV</strong>. Przejścia między takimi poziomami wymagają kwantów promieniowania o długości fali rzędu 1 cm, co odpowiada zakresowi mikrofalowemu. Zjawiska te leżą u podstaw elektronowego rezonansu paramagnetycznego (EPR), który jest ważnym narzędziem badawczym w chemii i biologii.</p><p>W widmach atomowych obserwuje się również strukturę subtelną, wynikającą z oddziaływania spin-orbita, oraz strukturę nadsubtelną, pochodzącą od oddziaływania momentów jądrowych z elektronami. Analiza tych struktur dostarcza szczegółowych informacji o budowie atomu, jednak ich pełna interpretacja wymaga zaawansowanej spektroskopii atomowej.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"sprzezenie-ls-i-jj\">Sprzężenie LS i jj</h3><p>Omówione dotychczas sprzężenie <strong>LS</strong> (zwane też sprzężeniem Russella-Saundersa) dobrze opisuje atomy lekkie oraz pierwiastki czwartego okresu układu okresowego. W tym modelu najpierw sumuje się orbitalne momenty pędu elektronów (dając wypadkowy moment <strong>L</strong>) oraz spinowe momenty pędu (dając wypadkowy spin <strong>S</strong>), a następnie łączy się je w całkowity moment pędu <strong>J</strong>.</p><p>W przypadku ciężkich atomów, gdzie oddziaływanie spin-orbita jest silniejsze, stosuje się model sprzężenia <strong>jj</strong>. Polega on na tym, że dla każdego elektronu najpierw łączy się jego orbitalny moment pędu z momentem spinowym, otrzymując indywidualny moment <strong>j</strong>, a dopiero potem sumuje się te momenty dla wszystkich elektronów, uzyskując całkowity moment pędu atomu. Wybór odpowiedniego modelu sprzężenia ma kluczowe znaczenie dla poprawnego opisu struktury elektronowej i widm atomowych.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie wartości może przyjmować magnetyczna liczba kwantowa m_J dla danej wartości J?",
      "answer": "Magnetyczna liczba kwantowa m_J może przyjmować wartości od -J do +J, różniące się o 1, czyli 2J+1 możliwych wartości."
    },
    {
      "question": "Dlaczego schemat termów dla konfiguracji d³ odnosi się również do jonów V²⁺, Cr³⁺ i Mn⁴⁺?",
      "answer": "Ponieważ jony te mają identyczną konfigurację elektronową w powłoce walencyjnej (d³), co atom wanadu, a schematy termów zależą głównie od liczby elektronów walencyjnych."
    },
    {
      "question": "Jaka jest różnica między sprzężeniem LS a sprzężeniem jj?",
      "answer": "W sprzężeniu LS najpierw sumuje się orbitalne momenty pędu elektronów (L) i spinowe (S), a następnie łączy w J. W sprzężeniu jj najpierw łączy się orbitalny i spinowy moment pędu każdego elektronu w j, a potem sumuje j dla wszystkich elektronów."
    }
  ]
};
