import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_21_regulacjaEkspresjiGenowData: StructuredChapter = {
  "chapterTitle": "Regulacja ekspresji genów",
  "toc": [
    {
      "title": "Alternatywne składanie RNA",
      "anchorId": "alternatywne-skladanie-rna"
    },
    {
      "title": "Okres półtrwania mRNA i mechanizmy regulacji translacji",
      "anchorId": "okres-poltwania-mrna"
    },
    {
      "title": "Regulacja ekspresji genów przez miRNA",
      "anchorId": "regulacja-przez-mirna"
    },
    {
      "title": "Celowe hamowanie ekspresji genów w medycynie",
      "anchorId": "hamowanie-ekspresji-w-medycynie"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"alternatywne-skladanie-rna\">Alternatywne składanie RNA</h3><p>Alternatywne składanie RNA (<em>alternative splicing</em>) to proces, w wyniku którego z tego samego genu mogą powstawać różne warianty dojrzałego mRNA, a w konsekwencji różne białka. Dzieje się tak, ponieważ podczas obróbki pre-mRNA introny są usuwane, a eksony mogą być łączone w różnych kombinacjach. Dzięki temu jeden gen może kodować wiele białek o odmiennych funkcjach, co zwiększa różnorodność proteomu bez zwiększania liczby genów.</p><p>Proces ten zachodzi głównie w komórkach eukariotycznych i jest szczególnie ważny w tkankach, gdzie potrzebna jest precyzyjna regulacja ekspresji genów. Na przykład w komórkach nerwowych alternatywne składanie umożliwia wytwarzanie różnych izoform białek receptorowych, co wpływa na ich wrażliwość na neuroprzekaźniki.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"okres-poltwania-mrna\">Okres półtrwania mRNA i mechanizmy regulacji translacji</h3><p>Okres półtrwania mRNA w komórkach eukariotycznych jest bardzo zróżnicowany – od kilku minut do wielu godzin. Aby zapobiec niekontrolowanej translacji, komórki wykształciły mechanizmy regulujące dostępność mRNA dla rybosomów. Jednym z nich jest udział oligonukleotydów, takich jak mikroRNA (miRNA), oraz białek regulatorowych, w tym czynników inicjacji translacji.</p><p>Czynniki inicjacji translacji to białka, które łączą się z mRNA i rybosomem, ułatwiając rozpoznanie kodonu START i rozpoczęcie syntezy białka. Inne białka regulatorowe mogą blokować translację, przyłączając się do mRNA i uniemożliwiając jego przesuwanie się przez rybosom. W ten sposób komórka może szybko zatrzymać produkcję białka, gdy jest to konieczne.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"regulacja-przez-mirna\">Regulacja ekspresji genów przez miRNA</h3><p>MikroRNA (miRNA) to krótkie, jednoniciowe cząsteczki RNA (ok. 21–23 nukleotydów), które regulują ekspresję około 30% genów człowieka. Działają one na poziomie potranskrypcyjnym, najczęściej przez częściową komplementarność do mRNA. Jeśli miRNA przyłączy się do mRNA z niedokładnym dopasowaniem, translacja zostaje zablokowana – rybosom nie może przesuwać się wzdłuż mRNA. Natomiast gdy komplementarność jest pełna, mRNA ulega degradacji, co prowadzi do trwałego wyciszenia genu.</p><p>Mechanizm ten jest niezwykle istotny w procesach rozwojowych, różnicowaniu komórek oraz w odpowiedzi na stres. Zaburzenia w funkcjonowaniu miRNA mogą prowadzić do rozwoju chorób, w tym nowotworów.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"hamowanie-ekspresji-w-medycynie\">Celowe hamowanie ekspresji genów w medycynie</h3><p>Celowe hamowanie ekspresji genów znajduje zastosowanie w terapii chorób oraz w badaniach naukowych. W leczeniu infekcji bakteryjnych i nowotworów wykorzystuje się antybiotyki, które blokują transkrypcję lub translację u patogenów. Na przykład <strong>rifampicyna</strong> wiąże się z bakteryjną polimerazą RNA, uniemożliwiając transkrypcję. <strong>Streptomycyna</strong> i <strong>tetracyklina</strong> oddziałują z małą podjednostką rybosomu bakteryjnego, a <strong>erytromycyna</strong> z dużą podjednostką – wszystkie te leki hamują syntezę białek bakteryjnych.</p><p>W badaniach nad chorobami człowieka stosuje się <strong>nokaut genowy</strong>, który polega na celowej inaktywacji wybranych genów u zwierząt laboratoryjnych, najczęściej myszy. Dzięki temu można tworzyć modele chorób, takich jak cukrzyca, choroby sercowo-naczyniowe czy neurodegeneracyjne, i testować na nich nowe terapie. Nokaut genowy pozwala również poznać funkcję poszczególnych genów w organizmie.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega alternatywne składanie RNA i jakie ma znaczenie dla komórki?",
      "answer": "Alternatywne składanie RNA polega na łączeniu eksonów w różnych kombinacjach podczas obróbki pre-mRNA. Dzięki temu z jednego genu powstaje wiele różnych mRNA, a w konsekwencji różne białka, co zwiększa różnorodność proteomu bez zwiększania liczby genów."
    },
    {
      "question": "Jak miRNA reguluje ekspresję genów?",
      "answer": "miRNA przyłącza się do mRNA na zasadzie komplementarności. Jeśli dopasowanie jest częściowe, blokuje translację, a jeśli pełne – powoduje degradację mRNA, co prowadzi do wyciszenia ekspresji genu."
    },
    {
      "question": "Podaj przykład antybiotyku hamującego transkrypcję u bakterii i wyjaśnij mechanizm jego działania.",
      "answer": "Rifampicyna – wiąże się z bakteryjną polimerazą RNA, blokując inicjację transkrypcji, co uniemożliwia syntezę bakteryjnych białek."
    },
    {
      "question": "Do czego służy nokaut genowy w medycynie?",
      "answer": "Nokaut genowy polega na inaktywacji wybranych genów u zwierząt laboratoryjnych, co pozwala tworzyć modele chorób człowieka (np. cukrzycy, chorób neurodegeneracyjnych) i badać mechanizmy ich rozwoju oraz testować terapie."
    }
  ]
};
