import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_99_charakteryReprezentacjiGrupSymetriiAOrbitaleAtomoweData: StructuredChapter = {
  "chapterTitle": "Charaktery reprezentacji grup symetrii a orbitale atomowe",
  "toc": [
    {
      "title": "Wektory i iloczyny współrzędnych jako bazy reprezentacji",
      "anchorId": "wektory-i-iloczyny-wspolrzednych"
    },
    {
      "title": "Transformacje orbitali d w grupie C4v",
      "anchorId": "transformacje-orbitali-d"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"wektory-i-iloczyny-wspolrzednych\">Wektory i iloczyny współrzędnych jako bazy reprezentacji</h3><p>W tablicach charakterów grup symetrii często podaje się, jakie funkcje (np. współrzędne kartezjańskie) stanowią bazy poszczególnych reprezentacji. Dla grupy C<sub>4v</sub> wektory <em>x</em> i <em>y</em> należą do reprezentacji jednowymiarowych oznaczanych symbolami, natomiast wektor <em>z</em> jest bazą reprezentacji A”. W przypadku grupy T wektory <em>x</em>, <em>y</em>, <em>z</em> tworzą wspólnie bazę trójwymiarowej reprezentacji T<sub>2</sub>. Symbole R<sub>x</sub>, R<sub>y</sub>, R<sub>z</sub> (oznaczające obroty wokół osi) nie będą tu omawiane.</p><p>Kolumna czwarta tablic charakterów określa własności transformacyjne kwadratów i iloczynów dwuczynnikowych współrzędnych. Dla grupy C<sub>4v</sub> wynika z niej, że <em>z</em><sup>2</sup> oraz suma <em>x</em><sup>2</sup> + <em>y</em><sup>2</sup> transformują się według reprezentacji A<sub>1</sub>, różnica <em>x</em><sup>2</sup> – <em>y</em><sup>2</sup> według B<sub>1</sub>, iloczyn <em>xy</em> według B<sub>2</sub>, a pary iloczynów (<em>xz</em>, <em>yz</em>) wspólnie według dwuwymiarowej reprezentacji E.</p><p>Te informacje są istotne, ponieważ pozwalają wnioskować o symetrii orbitali atomowych. Orbitale <em>p</em><sub>x</sub>, <em>p</em><sub>y</sub>, <em>p</em><sub>z</sub> transformują się tak samo jak wektory <em>x</em>, <em>y</em>, <em>z</em>. Orbitale <em>d</em><sub>xy</sub>, <em>d</em><sub>xz</sub>, <em>d</em><sub>yz</sub> mają własności transformacyjne identyczne z iloczynami <em>xy</em>, <em>xz</em>, <em>yz</em>. Z kolei orbitale <em>d</em><sub>z²</sub> i <em>d</em><sub>x²−y²</sub> odpowiadają odpowiednio funkcjom <em>z</em><sup>2</sup> oraz <em>x</em><sup>2</sup> – <em>y</em><sup>2</sup>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"transformacje-orbitali-d\">Transformacje orbitali d w grupie C<sub>4v</sub></h3><p>Rozważmy działanie operacji symetrii grupy C<sub>4v</sub> na orbital <em>d</em><sub>z²</sub>. Orbital ten nie zmienia się pod wpływem operacji tożsamościowej, więc charakter χ(E) = 1. Pozostaje on również niezmieniony przy obrotach wokół osi C<sub>4</sub> i C<sub>2</sub> oraz przy odbiciach w płaszczyznach σ<sub>v</sub> (np. <em>xz</em>) i σ<sub>d</sub> (płaszczyzna połowiąca kąt między <em>xz</em> i <em>yz</em>). Dla wszystkich tych operacji charakter wynosi 1. Zestawienie charakterów: χ(E) = 1, χ(C<sub>4</sub>) = 1, χ(C<sub>2</sub>) = 1, χ(σ<sub>v</sub>) = 1, χ(σ<sub>d</sub>) = 1 wskazuje, że orbital <em>d</em><sub>z²</sub> należy do reprezentacji A<sub>1</sub>, podobnie jak wektor <em>z</em>.</p><p>Następnie przeanalizujmy orbital <em>d</em><sub>x²−y²</sub>. Dla operacji tożsamościowej charakter wynosi 1. Obrót o 90° wokół osi C<sub>4</sub> przenosi dodatnie płaty orbitalu w miejsca ujemnych i odwrotnie, co powoduje zmianę znaku funkcji, więc χ(C<sub>4</sub>) = −1. Z kolei obrót o 180° wokół osi C<sub>2</sub> pozostawia orbital niezmienionym (dodatnie płaty przechodzą w dodatnie, ujemne w ujemne), stąd χ(C<sub>2</sub>) = 1. Odbicie w płaszczyźnie σ<sub>v</sub> (np. <em>xz</em>) nie zmienia znaku orbitalu, dając χ(σ<sub>v</sub>) = 1, natomiast odbicie w płaszczyźnie σ<sub>d</sub> powoduje zmianę znaku, więc χ(σ<sub>d</sub>) = −1.</p><p>Zestawiając wszystkie charaktery: χ(E) = 1, χ(C<sub>4</sub>) = −1, χ(C<sub>2</sub>) = 1, χ(σ<sub>v</sub>) = 1, χ(σ<sub>d</sub>) = −1, stwierdzamy, że orbital <em>d</em><sub>x²−y²</sub> stanowi bazę reprezentacji B<sub>1</sub> w grupie C<sub>4v</sub>, analogicznie do różnicy <em>x</em><sup>2</sup> – <em>y</em><sup>2</sup>.</p><p>Na koniec warto dodać, że orbitale <em>s</em> o symetrii kulistej należą do reprezentacji całkowicie symetrycznej (np. A<sub>1</sub>), dla której wszystkie charaktery wynoszą +1.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Do której reprezentacji grupy C4v należy orbital dz²?",
      "answer": "Orbital dz² należy do reprezentacji A1, ponieważ transformuje się jak funkcja z²."
    },
    {
      "question": "Jaki charakter ma orbital dx²−y² dla obrotu C4 w grupie C4v?",
      "answer": "Charakter wynosi −1, ponieważ obrót o 90° zmienia znak orbitalu."
    },
    {
      "question": "Jakie orbitale atomowe transformują się jak iloczyny xy, xz i yz?",
      "answer": "Orbitale dxy, dxz i dyz transformują się odpowiednio jak iloczyny xy, xz i yz."
    }
  ]
};
