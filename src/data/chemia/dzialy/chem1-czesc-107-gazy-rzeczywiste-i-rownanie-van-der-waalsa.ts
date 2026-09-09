import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_107_gazyRzeczywisteIRownanieVanDerWaalsaData: StructuredChapter = {
  "chapterTitle": "Gazy rzeczywiste i równanie van der Waalsa",
  "toc": [
    {
      "title": "Odstępstwa od praw gazu doskonałego",
      "anchorId": "odchylenia-od-praw-gazu-doskonalego"
    },
    {
      "title": "Przyczyny odstępstw: siły międzycząsteczkowe i objętość własna cząsteczek",
      "anchorId": "przyczyny-odstępstw"
    },
    {
      "title": "Równanie van der Waalsa",
      "anchorId": "rownanie-van-der-waalsa"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"odchylenia-od-praw-gazu-doskonalego\">Odstępstwa od praw gazu doskonałego</h3><p>W warunkach wysokiej temperatury i niskiego ciśnienia większość gazów wykazuje zachowanie zbliżone do gazu doskonałego. Jednak w miarę obniżania temperatury, zwłaszcza w pobliżu punktu skroplenia, oraz przy wzroście ciśnienia, obserwuje się coraz wyraźniejsze odchylenia od klasycznych praw gazu doskonałego. W takich przypadkach proste równanie stanu, uwzględniające jedynie pierwszy współczynnik wirialny, przestaje być wystarczające i konieczne staje się zastosowanie pełniejszego opisu, np. równania wirialnego z dalszymi współczynnikami.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyczyny-odstępstw\">Przyczyny odstępstw: siły międzycząsteczkowe i objętość własna cząsteczek</h3><p>Odchylenia od idealnego zachowania wynikają z dwóch głównych przyczyn. Po pierwsze, przy wysokich ciśnieniach, gdy odległości między cząsteczkami znacznie się zmniejszają, istotną rolę zaczynają odgrywać siły przyciągania międzycząsteczkowego. Zjawisko to po raz pierwszy opisał holenderski uczony Johannes van der Waals w 1873 roku, dlatego siły te nazywane są siłami van der Waalsa. Siły te umożliwiają skroplenie gazów i charakteryzują się bardzo szybkim zanikiem wraz ze wzrostem odległości między cząsteczkami.</p><p>Drugą przyczyną jest skończona objętość własna cząsteczek gazu. W modelu gazu doskonałego zakłada się, że cząsteczki są punktami materialnymi o zerowych rozmiarach, co prowadzi do wniosku, że objętość gazu może dążyć do zera wraz ze spadkiem temperatury. W rzeczywistości jednak minimalna objętość, jaką może zająć gaz, jest ograniczona przez objętość własną cząsteczek i nigdy nie osiąga zera.</p><p>Działanie sił międzycząsteczkowych powoduje zmniejszenie objętości gazu w porównaniu z gazem doskonałym, natomiast skończona objętość cząsteczek działa w przeciwnym kierunku – zwiększa objętość. W zależności od warunków (temperatury i ciśnienia) jeden z tych efektów może dominować. Gdy przeważa wpływ sił przyciągania, iloczyn pV dla jednego mola gazu jest mniejszy od RT (czyli pV/(RT) &lt; 1). Gdy dominuje wpływ objętości własnej, iloczyn pV staje się większy od RT (pV/(RT) &gt; 1).</p><p>Na wykresie zależności pV/(RT) od ciśnienia dla azotu (rys. 6.3) widać, że w temperaturze 203 K oraz w temperaturze pokojowej (ok. 293 K) wartość pV/(RT) początkowo maleje poniżej 1, co świadczy o przewadze sił przyciągania. Przy dalszym wzroście ciśnienia krzywe osiągają minimum, a następnie zaczynają rosnąć, co oznacza, że coraz większy wpływ ma skończona objętość cząsteczek. W wysokiej temperaturze (673 K) przez cały zakres ciśnień pV/(RT) &gt; 1, co wskazuje na dominację efektu odpychania wynikającego z objętości własnej.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"rownanie-van-der-waalsa\">Równanie van der Waalsa</h3><p>Równanie van der Waalsa stanowi modyfikację równania stanu gazu doskonałego, uwzględniającą oba opisane efekty. Aby skorygować wpływ sił międzycząsteczkowych, van der Waals zaproponował, aby do ciśnienia zewnętrznego dodać człon korekcyjny <strong>a/v<sup>2</sup></strong>, który nazywany jest ciśnieniem wewnętrznym. Jest on odwrotnie proporcjonalny do kwadratu objętości molowej. Z kolei skończona objętość cząsteczek jest uwzględniana poprzez odjęcie od całkowitej objętości molowej stałej <strong>b</strong>, która reprezentuje objętość własną cząsteczek. W ten sposób w równaniu zamiast v stosuje się wyrażenie (v – b).</p><p>Po wprowadzeniu obu poprawek równanie stanu dla jednego mola gazu przyjmuje postać:</p><p><strong>(p + a/v<sup>2</sup>)(v – b) = RT</strong></p><p>gdzie: p – ciśnienie, v – objętość molowa, T – temperatura bezwzględna, R – stała gazowa, a i b – stałe charakterystyczne dla danego gazu. Szczegółowa analiza równania van der Waalsa, w tym jego przewidywania dotyczące skraplania i temperatury krytycznej, jest przedmiotem chemii fizycznej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie są dwie główne przyczyny odstępstw gazów rzeczywistych od praw gazu doskonałego?",
      "answer": "Siły przyciągania międzycząsteczkowe (siły van der Waalsa) oraz skończona objętość własna cząsteczek."
    },
    {
      "question": "Jak zmienia się iloczyn pV/(RT) dla gazu rzeczywistego, gdy dominują siły przyciągania?",
      "answer": "Wartość pV/(RT) jest mniejsza od 1."
    },
    {
      "question": "Jakie poprawki wprowadza równanie van der Waalsa do równania gazu doskonałego?",
      "answer": "Do ciśnienia dodaje się człon a/v² (ciśnienie wewnętrzne), a od objętości odejmuje się stałą b (objętość własna cząsteczek)."
    }
  ]
};
