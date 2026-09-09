import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_60_efektywnaLiczbaAtomowaIEkranowanieElektronowWAtomachWieloelektronowychData: StructuredChapter = {
  "chapterTitle": "Efektywna liczba atomowa i ekranowanie elektronów w atomach wieloelektronowych",
  "toc": [
    {
      "title": "Moment magnetyczny efektywny",
      "anchorId": "moment-magnetyczny-efektywny"
    },
    {
      "title": "Efektywna liczba atomowa i ekranowanie",
      "anchorId": "efektywna-liczba-atomowa-ekranowanie"
    },
    {
      "title": "Reguły Slatera",
      "anchorId": "reguly-slatera"
    },
    {
      "title": "Przykłady obliczeń",
      "anchorId": "przyklady-obliczen"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"moment-magnetyczny-efektywny\">Moment magnetyczny efektywny</h3><p>Na podstawie danych doświadczalnych można wyznaczyć moment magnetyczny jonów lub cząsteczek paramagnetycznych, korzystając z zależności:</p><p>µ = √(3R / (µ₀N²)) · √(χM(T + θ))</p><p>gdzie R to stała gazowa, µ₀ przenikalność magnetyczna próżni, N liczba Avogadra, χM podatność magnetyczna molowa, T temperatura bezwzględna, a θ stała Curie-Weissa. Tak wyznaczony moment magnetyczny nazywany jest często <strong>momentem magnetycznym efektywnym</strong>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"efektywna-liczba-atomowa-ekranowanie\">Efektywna liczba atomowa i ekranowanie</h3><p>W atomach wieloelektronowych zachowanie elektronów można opisać za pomocą orbitali typu wodorowego, pod warunkiem wprowadzenia poprawki na oddziaływania międzyelektronowe. Poprawka ta polega na zastąpieniu rzeczywistej liczby atomowej Z przez <strong>efektywną liczbę atomową</strong> Z*, która uwzględnia częściowe przesłanianie ładunku jądra przez elektrony wewnętrzne. Energia elektronu wyraża się wówczas wzorem:</p><p>E = −(Z*² mₑ e⁴) / (8 ε₀² h² n²)</p><p>gdzie mₑ to masa elektronu, e ładunek elementarny, ε₀ przenikalność elektryczna próżni, h stała Plancka, a n główna liczba kwantowa.</p><p>Rozważmy atom litu (Z=3). Elektron walencyjny na orbitalu 2s jest przyciągany przez jądro o ładunku +3e, ale jednocześnie odpychany przez dwa elektrony z powłoki 1s. W zamkniętej powłoce 1s rozkład ładunku ma symetrię kulistą, więc elektron 2s odczuwa działanie tych elektronów tak, jakby były one zlokalizowane w jądrze. W rezultacie ładunek efektywny działający na elektron walencyjny wynosi Z*e = 3e − 2e = e, czyli Z* = 1. Ten wynik byłby ścisły, gdyby chmura elektronowa 2s nie przenikała w głąb powłoki 1s. Jednak analiza radialnych funkcji gęstości prawdopodobieństwa pokazuje, że elektrony 2s częściowo penetrują powłokę 1s, co sprawia, że ekranowanie jądra przez elektrony 1s jest nieco mniej skuteczne, niż wynikałoby to z prostego odejmowania. Podobnie zachowują się elektrony p, natomiast elektrony d słabiej penetrują wewnętrzne powłoki i są ekranowane silniej.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"reguly-slatera\">Reguły Slatera</h3><p>John Slater opracował zestaw empirycznych reguł pozwalających obliczyć <strong>stałą ekranowania</strong> S, która wyraża różnicę między liczbą atomową Z a efektywną liczbą atomową Z*: Z* = Z − S. Aby zastosować te reguły, należy najpierw zapisać konfigurację elektronową atomu, grupując orbitale w następujący sposób:</p><p>(1s)(2s,2p)(3s,3p)(3d)(4s,4p)(4d)(4f)(5s,5p) itd.</p><p>Obliczając stałą S dla elektronu ns lub np, przyjmuje się następujące udziały:</p><ul><li>elektrony znajdujące się w grupach na prawo od grupy (ns,np) nie wnoszą wkładu do stałej ekranowania;</li><li>każdy z pozostałych elektronów w tej samej grupie (ns,np) wnosi 0,35 (z wyjątkiem elektronów 1s, które wnoszą 0,30);</li><li>każdy elektron z powłoki (n−1) wnosi 0,85;</li><li>każdy elektron z powłok (n−2) i głębszych wnosi 1,00.</li></ul><p>Dla elektronów nd lub nf reguły są analogiczne, z tą różnicą, że każdy elektron z grup położonych na lewo od nd lub nf wnosi wkład 1,00.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"przyklady-obliczen\">Przykłady obliczeń</h3><p><strong>Przykład 1: Atom tlenu (Z=8).</strong> Konfiguracja elektronowa: 1s² 2s² 2p⁴. Grupujemy elektrony zgodnie z regułami Slatera: (1s)² (2s,2p)⁶. Dla elektronu walencyjnego (2s lub 2p) stała ekranowania wynosi: S = 5·0,35 + 2·0,85 = 1,75 + 1,70 = 3,45. Zatem Z* = 8 − 3,45 = 4,55.</p><p><strong>Przykład 2: Atom miedzi (Z=29).</strong> Konfiguracja elektronowa: (1s)² (2s,2p)⁸ (3s,3p)⁸ (3d)¹⁰ (4s)¹. Dla elektronu 4s: S = 18·0,85 + 10·1,0 = 15,3 + 10,0 = 25,3; Z* = 29 − 25,3 = 3,7. Dla elektronu 3d: S = 9·0,35 + 18·1,0 = 3,15 + 18,0 = 21,15; Z* = 29 − 21,15 = 7,85.</p><p><strong>Przykład 3: Atom potasu (Z=19).</strong> Rozważmy, dlaczego elektron walencyjny w atomie potasu zajmuje orbital 4s, a nie 3d. Dla elektronu na orbitalu 4s (konfiguracja (1s)²(2s,2p)⁸(3s,3p)⁸(4s)¹) stała ekranowania wynosi S = 8·0,85 + 10·1,0 = 16,8, a Z* = 19 − 16,8 = 2,2. Dla elektronu na orbitalu 3d (konfiguracja (1s)²(2s,2p)⁸(3s,3p)⁸(3d)¹) stała ekranowania wynosi S = 18·1,0 = 18, a Z* = 19 − 18 = 1. Ponieważ efektywna liczba atomowa dla orbitalu 4s jest większa niż dla 3d, elektron na orbitalu 4s ma niższą energię (jest silniej związany) niż elektron na orbitalu 3d. To wyjaśnia, dlaczego w atomie potasu elektron walencyjny zajmuje orbital 4s. Wynik ten jest zgodny z obserwacją, że elektrony d są silniej ekranowane niż elektrony s i p.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co to jest efektywna liczba atomowa i jak się ją oblicza?",
      "answer": "Efektywna liczba atomowa (Z*) to zastępcza liczba atomowa uwzględniająca ekranowanie ładunku jądra przez elektrony wewnętrzne. Oblicza się ją jako różnicę rzeczywistej liczby atomowej Z i stałej ekranowania S: Z* = Z − S."
    },
    {
      "question": "Jakie są reguły Slatera dla obliczania stałej ekranowania elektronów s i p?",
      "answer": "Dla elektronów ns/np: elektrony z grup po prawej nie wnoszą wkładu; elektrony z tej samej grupy wnoszą 0,35 (0,30 dla 1s); elektrony z powłoki (n−1) wnoszą 0,85; elektrony z głębszych powłok wnoszą 1,0."
    },
    {
      "question": "Dlaczego w atomie potasu elektron walencyjny zajmuje orbital 4s zamiast 3d?",
      "answer": "Ponieważ dla elektronu 4s efektywna liczba atomowa wynosi 2,2, a dla 3d tylko 1. Większa wartość Z* dla 4s oznacza silniejsze przyciąganie przez jądro i niższą energię, dlatego orbital 4s jest preferowany."
    }
  ]
};
