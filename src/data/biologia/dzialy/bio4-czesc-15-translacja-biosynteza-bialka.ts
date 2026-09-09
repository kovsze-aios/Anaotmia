import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_15_translacjaBiosyntezaBialkaData: StructuredChapter = {
  "chapterTitle": "Translacja – biosynteza białka",
  "toc": [
    {
      "title": "Aminoacylo-tRNA i budowa rybosomu",
      "anchorId": "aminoacylo-trna-i-budowa-rybosomu"
    },
    {
      "title": "Przebieg translacji",
      "anchorId": "przebieg-translacji"
    },
    {
      "title": "Translacja w komórkach prokariotycznych i eukariotycznych",
      "anchorId": "translacja-prokarioty-i-eukarioty"
    },
    {
      "title": "Zwiększanie wydajności translacji",
      "anchorId": "zwiekszanie-wydajnosci-translacji"
    },
    {
      "title": "Zależności między transkrypcją a translacją",
      "anchorId": "zaleznosci-miedzy-transkrypcja-a-translacja"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"aminoacylo-trna-i-budowa-rybosomu\">Aminoacylo-tRNA i budowa rybosomu</h3><p>Aminokwasy są transportowane do rybosomu w formie związanej z cząsteczkami tRNA. Proces ten wymaga udziału enzymów zwanych syntetazami aminoacylo-tRNA, które kowalencyjnie łączą aminokwas z właściwym tRNA, wykorzystując energię z rozkładu ATP. W wyniku tego powstaje kompleks nazywany aminoacylo-tRNA (aa-tRNA).</p><p>Rybosom składa się z dwóch podjednostek: małej i dużej. W jego strukturze można wyróżnić kilka miejsc aktywnych: miejsce wiązania mRNA, miejsce aminokwasowe (A), do którego dołączają cząsteczki aa-tRNA, miejsce peptydylowe (P), gdzie tworzone jest wiązanie peptydowe, oraz miejsce E (od ang. <em>exit</em> – wyjście), skąd uwalniany jest tRNA pozbawiony aminokwasu.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przebieg-translacji\">Przebieg translacji</h3><p>Translacja, czyli biosynteza białka, zachodzi na rybosomach. Proces ten można podzielić na trzy etapy: inicjację, elongację i terminację.</p><h4>Inicjacja</h4><p>W komórkach eukariotycznych mała podjednostka rybosomu wiąże się z tRNA przenoszącym metioninę (Met-tRNA). Następnie dołącza mRNA, a kodon START (AUG) tworzy wiązania wodorowe z antykodonem UAC Met-tRNA. Na końcu przyłącza się duża podjednostka rybosomu, co kończy inicjację.</p><h4>Elongacja</h4><p>W miejscu A rybosomu ląduje kolejny aa-tRNA. Wiązanie między metioniną a tRNA w Met-tRNA zostaje rozerwane, a jednocześnie powstaje wiązanie peptydowe między metioniną a następnym aminokwasem (np. argininą). Wolny tRNA przemieszcza się do miejsca E, a rybosom przesuwa się o jeden kodon wzdłuż mRNA. Peptydylo-tRNA (tRNA z przyłączonym łańcuchem peptydowym) zajmuje miejsce P, a miejsce A jest gotowe na przyjęcie kolejnego aa-tRNA. Proces ten powtarza się aż do odczytania wszystkich kodonów.</p><h4>Terminacja</h4><p>Gdy w mRNA pojawia się kodon STOP, do rybosomu przyłącza się białkowy czynnik uwalniający. Powoduje on odłączenie łańcucha polipeptydowego od tRNA, a następnie rozpad rybosomu na podjednostki oraz uwolnienie mRNA i czynnika uwalniającego.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"translacja-prokarioty-i-eukarioty\">Translacja w komórkach prokariotycznych i eukariotycznych</h3><p>Ogólny przebieg translacji jest podobny u prokariotów i eukariotów, ale istnieją różnice w inicjacji. U bakterii mała podjednostka rybosomu rozpoznaje specyficzną sekwencję nukleotydów w mRNA, zwaną sekwencją Shine-Dalgarno, która ułatwia przyłączenie do kodonu START. Ponadto pierwszym aminokwasem jest formylometionina (pochodna metioniny), a nie zwykła metionina jak u eukariotów.</p><p>W komórkach eukariotycznych inicjacja jest bardziej złożona – rybosom skanuje mRNA od końca 5' w poszukiwaniu kodonu START, a pierwszy aminokwas to metionina. Mimo tych różnic, zarówno u prokariotów, jak i eukariotów, elongacja i terminacja przebiegają według tych samych zasad.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"zwiekszanie-wydajnosci-translacji\">Zwiększanie wydajności translacji</h3><p>mRNA w komórkach ma ograniczony czas życia (tzw. czas półtrwania), który u eukariotów wynosi od 10 minut (np. u drożdży) do kilkudziesięciu godzin (u ssaków). U prokariotów jest on jeszcze krótszy. Aby zwiększyć wydajność syntezy białek, z jedną cząsteczką mRNA może łączyć się wiele rybosomów jednocześnie, tworząc strukturę zwaną polirybosomem (polisomem). U eukariotów z jednym mRNA związanych jest zwykle około ośmiu rybosomów, a u bakterii – kilkadziesiąt. Dzięki temu w tym samym czasie powstaje wiele kopii tego samego białka.</p>"
    },
    {
      "pageNumber": 5,
      "htmlContent": "<h3 id=\"zaleznosci-miedzy-transkrypcja-a-translacja\">Zależności między transkrypcją a translacją</h3><p>Podczas analizy zależności między DNA, mRNA i tRNA należy pamiętać o kilku zasadach. Sekwencja nici kodującej DNA (5'→3') jest identyczna z sekwencją mRNA (z wyjątkiem tyminy zastąpionej uracylem). Nić matrycowa DNA jest komplementarna do nici kodującej, a mRNA jest komplementarny do matrycy. Antykodony tRNA są komplementarne do kodonów mRNA (zamiast tyminy występuje uracyl).</p><p>Łańcuch peptydowy powstaje w wyniku tworzenia wiązań peptydowych między aminokwasami. Ma on dwa końce: N-końcowy z wolną grupą aminową i C-końcowy z wolną grupą karboksylową.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie są trzy etapy translacji?",
      "answer": "Inicjacja, elongacja i terminacja."
    },
    {
      "question": "Jaka jest rola syntetaz aminoacylo-tRNA?",
      "answer": "Łączą aminokwasy z odpowiednimi cząsteczkami tRNA, tworząc aminoacylo-tRNA."
    },
    {
      "question": "Co to jest polirybosom i jaka jest jego funkcja?",
      "answer": "Polirybosom to kompleks wielu rybosomów związanych z jedną cząsteczką mRNA, umożliwiający równoczesną syntezę wielu identycznych łańcuchów polipeptydowych."
    },
    {
      "question": "Czym różni się inicjacja translacji u prokariotów od eukariotów?",
      "answer": "U prokariotów mała podjednostka rybosomu rozpoznaje sekwencję Shine-Dalgarno, a pierwszym aminokwasem jest formylometionina; u eukariotów rybosom skanuje mRNA od końca 5' i pierwszym aminokwasem jest metionina."
    }
  ]
};
