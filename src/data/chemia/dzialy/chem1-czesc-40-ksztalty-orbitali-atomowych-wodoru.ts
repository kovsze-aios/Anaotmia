import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_40_ksztaltyOrbitaliAtomowychWodoruData: StructuredChapter = {
  "chapterTitle": "Kształty orbitali atomowych wodoru",
  "toc": [
    {
      "title": "Orbital s",
      "anchorId": "orbital-s"
    },
    {
      "title": "Orbitale p",
      "anchorId": "orbitale-p"
    },
    {
      "title": "Orbitale d",
      "anchorId": "orbitale-d"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"orbital-s\">Orbital s</h3><p>Dla orbitalu s część kątowa funkcji falowej jest stała, co oznacza, że jej kwadrat modułu nie zależy od kierunku w przestrzeni. Na wykresie przedstawiającym przekrój płaszczyzną xz wartości |Y(θ, φ)|² są reprezentowane przez odcinki o jednakowej długości, wychodzące z początku układu współrzędnych we wszystkich możliwych kierunkach. Końce tych odcinków tworzą powierzchnię kulistą, co ilustruje sferyczną symetrię orbitalu s.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"orbitale-p\">Orbitale p</h3><p>Dla orbitali p część kątowa funkcji falowej zależy od kąta θ i φ. Dla orbitalu p<sub>z</sub> kwadrat modułu części kątowej jest proporcjonalny do cos²θ. Funkcja ta przyjmuje wartość zero dla kąta θ = π/2, co oznacza, że w płaszczyźnie xy (prostopadłej do osi z) gęstość elektronowa jest zerowa – jest to płaszczyzna węzłowa. Maksymalne wartości, równe 3/(4π), osiąga dla θ = 0 oraz θ = π, czyli wzdłuż dodatniej i ujemnej części osi z. Stąd nazwa orbital p<sub>z</sub>.</p><p>Przekrój przestrzennego diagramu funkcji |Y(θ, φ)|² dla orbitalu p<sub>z</sub> płaszczyzną xz pokazuje, że wartości funkcji są największe wzdłuż osi z i maleją do zera w miarę zbliżania się do płaszczyzny xy. Trójwymiarowy kształt orbitalu p<sub>z</sub> można otrzymać przez obrót tej krzywej wokół osi z. Powstaje w ten sposób bryła złożona z dwóch wydłużonych części stykających się w początku układu współrzędnych, z osią symetrii wzdłuż osi z.</p><p>Pozostałe orbitale p, czyli p<sub>y</sub> i p<sub>x</sub>, mają identyczny kształt, ale są zorientowane odpowiednio wzdłuż osi y i x. Dla orbitalu p<sub>y</sub> maksima części kątowej leżą wzdłuż osi y, a płaszczyzną węzłową jest płaszczyzna xz. Dla orbitalu p<sub>x</sub> maksima leżą wzdłuż osi x, a płaszczyzną węzłową jest płaszczyzna yz. Na rysunkach często zaznacza się znak funkcji falowej w poszczególnych częściach orbitalu: jedna część ma znak dodatni, a druga ujemny, co odzwierciedla zmianę znaku funkcji Y(θ, φ).</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"orbitale-d\">Orbitale d</h3><p>Dla pięciu orbitali d część kątowa funkcji falowej ma bardziej złożoną zależność kątową. Orbital d<sub>xy</sub> ma cztery maksima leżące w płaszczyźnie xy, skierowane wzdłuż dwusiecznych kątów między osiami x i y. Podobnie orbital d<sub>xz</sub> ma cztery maksima w płaszczyźnie xz, a orbital d<sub>yz</sub> – w płaszczyźnie yz, również skierowane wzdłuż dwusiecznych kątów. Orbital d<sub>z²</sub> wyróżnia się tym, że ma tylko dwa maksima, skierowane wzdłuż osi z. Natomiast orbital d<sub>x²-y²</sub> wykazuje cztery maksima skierowane wzdłuż osi x i osi y.</p><p>Należy pamiętać, że rozpatrując oddzielnie część radialną i część kątową funkcji |Ψ|², żadna z nich osobno nie daje pełnego opisu rozkładu gęstości elektronowej w atomie. Dopiero ich iloczyn, czyli pełna funkcja |Ψ|², określa prawdopodobieństwo znalezienia elektronu w danym punkcie przestrzeni.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Dlaczego orbital s jest sferycznie symetryczny?",
      "answer": "Ponieważ część kątowa funkcji falowej dla orbitalu s jest stała, więc kwadrat jej modułu nie zależy od kierunku, co daje kulisty kształt."
    },
    {
      "question": "Ile płaszczyzn węzłowych ma orbital p?",
      "answer": "Orbital p ma jedną płaszczyznę węzłową, która przechodzi przez jądro i jest prostopadła do osi orbitalu."
    },
    {
      "question": "Jakie są orientacje orbitali d?",
      "answer": "Orbitale d mają różne orientacje: dxy, dxz, dyz leżą w płaszczyznach xy, xz, yz i są skierowane wzdłuż dwusiecznych kątów; dz² ma maksima wzdłuż osi z; dx²-y² ma maksima wzdłuż osi x i y."
    }
  ]
};
