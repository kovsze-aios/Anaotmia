import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_94_macierzoweReprezentacjeOperacjiSymetriiData: StructuredChapter = {
  "chapterTitle": "Macierzowe reprezentacje operacji symetrii",
  "toc": [
    {
      "title": "Wprowadzenie do reprezentacji macierzowych",
      "anchorId": "wprowadzenie-do-reprezentacji-macierzowych"
    },
    {
      "title": "Macierze dla grupy C4v",
      "anchorId": "macierze-dla-grupy-c4v"
    },
    {
      "title": "Macierze dla grupy C3v",
      "anchorId": "macierze-dla-grupy-c3v"
    },
    {
      "title": "Baza reprezentacji i niezależność transformacji",
      "anchorId": "baza-reprezentacji-i-niezaleznosc-transformacji"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wprowadzenie-do-reprezentacji-macierzowych\">Wprowadzenie do reprezentacji macierzowych</h3><p>W chemii kwantowej i spektroskopii niezwykle istotne jest opisanie wpływu operacji symetrii na współrzędne punktu w przestrzeni. Każdą operację symetrii można przedstawić w postaci układu równań liniowych, który w zwartej formie zapisuje się przy użyciu macierzy. Macierz taką nazywamy <strong>reprezentacją operacji symetrii</strong>, a komplet macierzy dla wszystkich operacji danej grupy punktowej stanowi <strong>reprezentację grupy</strong>.</p><p>Rozważmy punkt P o współrzędnych (x, y, z). Działanie operacji symetrii przenosi go do nowego położenia (x', y', z'). Zależność między starymi i nowymi współrzędnymi można zawsze zapisać w postaci jednorodnych równań liniowych, w których współczynniki tworzą macierz transformacji. Przykładowo, dla grupy punktowej C<sub>4v</sub> (charakteryzującej się osią czterokrotną i czterema płaszczyznami symetrii) transformacje te mają postać przedstawioną w kolejnych sekcjach.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"macierze-dla-grupy-c4v\">Macierze dla grupy C<sub>4v</sub></h3><p>W grupie C<sub>4v</sub> wyróżniamy następujące operacje: tożsamość E, obrót C<sub>4</sub> o kąt 90°, obrót C<sub>2</sub> o kąt 180°, odbicia w płaszczyznach σ<sub>v</sub> (pionowych, zawierających oś główną) oraz σ<sub>d</sub> (pionowych, dwusiecznych między osiami C<sub>2</sub>). Dla punktu o współrzędnych (x, y, z) transformacje te opisują równania:</p><ul><li><strong>Tożsamość E</strong>: x' = x, y' = y, z' = z.</li><li><strong>Obrót C<sub>4</sub></strong> (wokół osi z): x' = y, y' = -x, z' = z.</li><li><strong>Obrót C<sub>2</sub></strong>: x' = -x, y' = -y, z' = z.</li><li><strong>Odbicie σ<sub>v</sub></strong> (w płaszczyźnie xz): x' = x, y' = -y, z' = z.</li><li><strong>Odbicie σ<sub>d</sub></strong> (w płaszczyźnie nachylonej pod 45°): x' = y, y' = x, z' = z.</li></ul><p>Odpowiadające tym operacjom macierze (działające na wektor [x, y, z]) mają postać:</p><p>E = [[1,0,0],[0,1,0],[0,0,1]], C<sub>4</sub> = [[0,1,0],[-1,0,0],[0,0,1]], C<sub>2</sub> = [[-1,0,0],[0,-1,0],[0,0,1]], σ<sub>v</sub> = [[1,0,0],[0,-1,0],[0,0,1]], σ<sub>d</sub> = [[0,1,0],[1,0,0],[0,0,1]].</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"macierze-dla-grupy-c3v\">Macierze dla grupy C<sub>3v</sub></h3><p>Analogicznie dla grupy punktowej C<sub>3v</sub>, którą wykazuje np. cząsteczka amoniaku (NH<sub>3</sub>), operacje to: tożsamość E, obrót C<sub>3</sub> o kąt 120° (2π/3) oraz trzy płaszczyzny σ<sub>v</sub>. Macierz obrotu C<sub>3</sub> wokół osi z ma postać:</p><p>C<sub>3</sub> = [[cos(2π/3), -sin(2π/3), 0], [sin(2π/3), cos(2π/3), 0], [0, 0, 1]].</p><p>Dla odbicia w jednej z płaszczyzn σ<sub>v</sub> (np. w płaszczyźnie xz) macierz to: σ<sub>v</sub> = [[1,0,0],[0,-1,0],[0,0,1]]. Macierz tożsamości pozostaje identyczna jak poprzednio.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"baza-reprezentacji-i-niezaleznosc-transformacji\">Baza reprezentacji i niezależność transformacji</h3><p>Obiekty, na które działają operacje symetrii (np. wektory, funkcje), nazywamy <strong>bazą reprezentacji</strong>. W powyższych przykładach bazę stanowiły wektory składowe x, y, z wektora wodzącego punktu P. Analizując transformacje, zauważamy, że wektor z zachowuje się inaczej niż wektory x i y: podczas wszystkich operacji grupy C<sub>4v</sub> i C<sub>3v</sub> wektor z pozostaje niezmieniony (jego współrzędna nie zmienia znaku ani nie miesza się z pozostałymi). Natomiast wektory x i y ulegają wzajemnym przekształceniom – mogą zamieniać się miejscami i zmieniać znaki, ale zawsze niezależnie od z.</p><p>Dzięki temu możemy rozdzielić transformacje na dwa niezależne podzbiory: jeden dotyczący pary (x, y), a drugi dotyczący samego z. Dla pary (x, y) macierze są dwuwymiarowe, np. dla grupy C<sub>4v</sub>:</p><ul><li>E: [[1,0],[0,1]]</li><li>C<sub>4</sub>: [[0,1],[-1,0]]</li><li>C<sub>2</sub>: [[-1,0],[0,-1]]</li><li>σ<sub>v</sub>: [[1,0],[0,-1]]</li><li>σ<sub>d</sub>: [[0,1],[1,0]]</li></ul><p>Dla współrzędnej z transformacja jest zawsze mnożeniem przez macierz jednostkową [1]. Taki podział prowadzi do pojęcia <strong>reprezentacji nieprzywiedlnych</strong>, które są fundamentalne w analizie symetrii cząsteczek i ich widm.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest reprezentacja operacji symetrii?",
      "answer": "Reprezentacja operacji symetrii to macierz, która opisuje, jak dana operacja przekształca współrzędne punktu (lub innego obiektu) w przestrzeni. Zbiór takich macierzy dla wszystkich operacji grupy punktowej tworzy reprezentację grupy."
    },
    {
      "question": "Jak wygląda macierz obrotu C4 wokół osi z dla grupy C4v?",
      "answer": "Macierz C4 ma postać: [[0,1,0],[-1,0,0],[0,0,1]], co odpowiada przekształceniu x' = y, y' = -x, z' = z."
    },
    {
      "question": "Dlaczego wektor z można rozpatrywać niezależnie od wektorów x i y?",
      "answer": "Ponieważ podczas wszystkich operacji symetrii grupy C4v i C3v wektor z pozostaje niezmieniony (nie zmienia znaku ani nie miesza się z x i y), podczas gdy x i y ulegają wzajemnym transformacjom. To pozwala na rozdzielenie reprezentacji na niezależne podreprezentacje."
    }
  ]
};
