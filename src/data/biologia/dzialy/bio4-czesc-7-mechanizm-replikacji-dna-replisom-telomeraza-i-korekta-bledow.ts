import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_7_mechanizmReplikacjiDnaReplisomTelomerazaIKorektaBledowData: StructuredChapter = {
  "chapterTitle": "Mechanizm replikacji DNA: replisom, telomeraza i korekta błędów",
  "toc": [
    {
      "title": "Replisom – molekularna maszyna replikacyjna",
      "anchorId": "replisom"
    },
    {
      "title": "Replikacja końców liniowych cząsteczek DNA – rola telomerazy",
      "anchorId": "telomeraza"
    },
    {
      "title": "Korekta błędów replikacyjnych przez polimerazę DNA",
      "anchorId": "korekta-bledow"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"replisom\">Replisom – molekularna maszyna replikacyjna</h3><p>W procesie replikacji DNA kluczową rolę odgrywa <strong>replisom</strong> – wielopodjednostkowy kompleks białkowy formujący się w obrębie widełek replikacyjnych. Jego zadaniem jest koordynacja działania enzymów odpowiedzialnych za rozplatanie podwójnej helisy i syntezę nowych nici.</p><p>W skład replisomu wchodzą dwa zasadnicze elementy: <strong>prymosom</strong> oraz <strong>polimeraza III</strong>. Prymosom jest mniejszym kompleksem, który zawiera m.in. <em>helikazę</em> i <em>prymazę</em>. Dzięki połączeniu tych enzymów w jedną całość możliwa jest precyzyjna i zsynchronizowana praca całego aparatu replikacyjnego.</p><p>Helikaza rozwija podwójną helisę DNA, a współdziałająca z nią prymaza syntetyzuje krótkie odcinki RNA, zwane <strong>starterami</strong> (ang. <em>primers</em>). Tuż za prymazą porusza się polimeraza III, która dobudowuje nukleotydy DNA, rozpoczynając od końca 3' każdego startera. U bakterii <em>Escherichia coli</em> replisom pracuje z imponującą szybkością około 2000 par zasad na sekundę.</p><p>Inicjacja replikacji następuje w specyficznym miejscu zwanym <strong>ori</strong> (od ang. <em>origin of replication</em>). Po utworzeniu widełek replikacyjnych synteza nici wiodącej przebiega w sposób ciągły, natomiast nić opóźniona jest syntetyzowana w krótkich odcinkach – fragmentach Okazaki. Każdy taki fragment rozpoczyna się starterem RNA, który później jest usuwany przez <strong>polimerazę I</strong>. Enzym ten wypełnia powstałe luki nukleotydami DNA, a następnie <strong>ligaza</strong> łączy poszczególne fragmenty Okazaki w jedną, ciągłą nić.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"telomeraza\">Replikacja końców liniowych cząsteczek DNA – rola telomerazy</h3><p>W komórkach eukariotycznych cząsteczki DNA mają postać liniową, co stwarza problem podczas replikacji ich końców. Po usunięciu ostatniego startera z końca nici opóźnionej, polimeraza DNA nie ma możliwości dobudowania brakującego fragmentu. W konsekwencji każda kolejna replikacja prowadzi do skracania końców chromosomów – cząsteczki potomne są krótsze od macierzystej.</p><p>Za odbudowę końców cząsteczek DNA odpowiada enzym <strong>telomeraza</strong>. Ten rybonukleoproteinowy kompleks dobudowuje nukleotydy do końca matrycy nici opóźnionej, tworząc powtarzalne sekwencje zwane <strong>telomerami</strong>. Telomery to wielokrotnie powtórzone, kilkunukleotydowe odcinki DNA o charakterystycznej, stałej kolejności zasad azotowych.</p><p>Telomeraza wykazuje aktywność w komórkach embrionalnych, w komórkach linii płciowej oraz w komórkach macierzystych. W większości dojrzałych komórek enzym ten jest nieaktywny, co prowadzi do stopniowego skracania telomerów podczas kolejnych podziałów. Jednak ubytki dotyczą wyłącznie sekwencji telomerowych, dzięki czemu regiony kodujące geny pozostają nienaruszone. Brak aktywności telomerazy obserwuje się także w komórkach starzejących się, w których procesy podziałowe i replikacja DNA zostały zahamowane.</p><p>Warto zauważyć, że w komórkach nowotworowych telomeraza ulega często reaktywacji, co umożliwia im nieograniczone podziały i uniknięcie skracania chromosomów.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"korekta-bledow\">Korekta błędów replikacyjnych przez polimerazę DNA</h3><p>Podczas drugiego etapu replikacji DNA, czyli wydłużania nowych nici, dochodzi niekiedy do błędów – polimeraza DNA może wstawić niewłaściwy nukleotyd. Szacuje się, że pomyłki takie zdarzają się z częstością około jednego na 100 tysięcy prawidłowo wstawionych nukleotydów.</p><p>Na szczęście polimeraza DNA posiada zdolność korekty – w trakcie syntezy sprawdza, czy nowo przyłączony nukleotyd utworzył prawidłową parę z nukleotydem matrycowym. Jeśli wykryje niezgodność, usuwa błędny nukleotyd i zastępuje go właściwym. Dzięki tej mechanizmowi, zwanemu <strong>korektą błędów</strong> (ang. <em>proofreading</em>), częstość pomyłek spada do zaledwie jednego błędnego nukleotydu na 100 milionów prawidłowo wstawionych.</p><p>Proces ten można przedstawić w kilku krokach: (1) polimeraza DNA przyłącza nieprawidłowy nukleotyd, (2) rozpoznaje błąd i usuwa go, (3) wstawia właściwy nukleotyd, (4) synteza łańcucha jest kontynuowana. Dzięki tej precyzyjnej kontroli jakości replikacja DNA przebiega z niezwykle wysoką wiernością, co jest kluczowe dla zachowania integralności informacji genetycznej.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie dwa główne elementy wchodzą w skład replisomu?",
      "answer": "W skład replisomu wchodzą prymosom (zawierający helikazę i prymazę) oraz polimeraza III."
    },
    {
      "question": "Jaka jest funkcja telomerazy w komórkach eukariotycznych?",
      "answer": "Telomeraza dobudowuje powtarzalne sekwencje telomerowe do końców liniowych cząsteczek DNA, zapobiegając ich skracaniu podczas replikacji."
    },
    {
      "question": "Na czym polega korekta błędów dokonywana przez polimerazę DNA?",
      "answer": "Polimeraza DNA sprawdza poprawność parowania nowo wstawionego nukleotydu z matrycą; jeśli wykryje błąd, usuwa niewłaściwy nukleotyd i zastępuje go prawidłowym."
    }
  ]
};
