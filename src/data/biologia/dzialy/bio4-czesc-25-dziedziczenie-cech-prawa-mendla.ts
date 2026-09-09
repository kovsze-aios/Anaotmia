import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_25_dziedziczenieCechPrawaMendlaData: StructuredChapter = {
  "chapterTitle": "Dziedziczenie cech. Prawa Mendla",
  "toc": [
    {
      "title": "Obliczanie prawdopodobieństwa genotypów",
      "anchorId": "obliczanie-prawdopodobienstwa-genotypow"
    },
    {
      "title": "Krzyżówki testowe",
      "anchorId": "krzyzowki-testowe"
    },
    {
      "title": "Cechy człowieka warunkowane allelami",
      "anchorId": "cechy-czlowieka-warunkowane-allelami"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"obliczanie-prawdopodobienstwa-genotypow\">Obliczanie prawdopodobieństwa genotypów</h3><p>W dziedziczeniu cech często istotne jest określenie, jakie jest prawdopodobieństwo pojawienia się określonego genotypu u potomstwa. Można to zrobić, wykorzystując podstawowe zasady rachunku prawdopodobieństwa, w tym regułę mnożenia dla zdarzeń niezależnych oraz regułę dodawania dla zdarzeń wzajemnie się wykluczających.</p><p>Rozważmy przykład krzyżówki dwóch heterozygot grochu zwyczajnego (<em>Pisum sativum</em>) o genotypie Aa, gdzie allel A warunkuje czerwoną barwę kwiatów, a allel a – białą. Każdy z rodziców wytwarza gamety zawierające allel A lub a z prawdopodobieństwem 0,5.</p><p><strong>Prawdopodobieństwo homozygoty dominującej (AA)</strong>: Aby powstał osobnik AA, komórka jajowa z allelem A musi zostać zapłodniona przez plemnik z allelem A. Są to zdarzenia niezależne, więc prawdopodobieństwo ich jednoczesnego wystąpienia wynosi iloczyn prawdopodobieństw: 0,5 × 0,5 = 0,25 (25%).</p><p><strong>Prawdopodobieństwo heterozygoty (Aa)</strong>: Heterozygota może powstać na dwa sposoby: gdy komórka jajowa z allelem A łączy się z plemnikiem z allelem a, lub gdy komórka jajowa z allelem a łączy się z plemnikiem z allelem A. Każda z tych sytuacji ma prawdopodobieństwo 0,25. Ponieważ są to zdarzenia wzajemnie się wykluczające, sumujemy ich prawdopodobieństwa: 0,25 + 0,25 = 0,5 (50%).</p><p><strong>Prawdopodobieństwo homozygoty recesywnej (aa)</strong>: Podobnie jak w przypadku AA, prawdopodobieństwo wynosi 0,5 × 0,5 = 0,25 (25%).</p><p>Podsumowując, w potomstwie heterozygotycznych rodziców (Aa × Aa) oczekujemy, że 25% osobników będzie homozygotami dominującymi, 50% heterozygotami, a 25% homozygotami recesywnymi.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"krzyzowki-testowe\">Krzyżówki testowe</h3><p>Osobniki o genotypie homozygotycznym dominującym (np. AA) i heterozygotycznym (Aa) mają identyczny fenotyp, ponieważ allel dominujący maskuje efekt allelu recesywnego. Aby ustalić, czy osobnik wykazujący cechę dominującą jest homozygotą czy heterozygotą, przeprowadza się <strong>krzyżówkę testową</strong> (wsteczną). Polega ona na skrzyżowaniu takiego osobnika z homozygotą recesywną (aa). Homozygota recesywna wytwarza tylko jeden typ gamet (z allelem a), więc o fenotypach potomstwa decydują rodzaje gamet wytwarzanych przez osobnika badanego.</p><p><strong>Wariant I – badany osobnik jest homozygotą dominującą (AA)</strong>: Krzyżówka AA × aa daje potomstwo wyłącznie heterozygotyczne (Aa), które fenotypowo wykazuje cechę dominującą. Wszystkie osobniki potomne mają więc ten sam fenotyp dominujący.</p><p><strong>Wariant II – badany osobnik jest heterozygotą (Aa)</strong>: Krzyżówka Aa × aa daje potomstwo w połowie heterozygotyczne (Aa) o fenotypie dominującym, a w połowie homozygotyczne recesywne (aa) o fenotypie recesywnym. Obserwacja rozszczepienia fenotypowego w stosunku 1:1 wskazuje na heterozygotyczność osobnika badanego.</p><p><strong>Praktyczne zastosowanie krzyżówek testowych</strong>: Krzyżówki testowe są szeroko wykorzystywane w hodowli zwierząt i uprawie roślin w celu uzyskania osobników o pożądanych cechach użytkowych. Na przykład u kotów rasy brytyjskiej allel dominujący B warunkuje czarną barwę sierści, a allel recesywny b – barwę czekoladową. Jeśli hodowca pragnie otrzymywać wyłącznie kocięta czarne, powinien krzyżować ze sobą tylko homozygoty dominujące (BB), ponieważ krzyżówka heterozygot (Bb) z homozygotami recesywnymi (bb) daje część potomstwa o umaszczeniu czekoladowym.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"cechy-czlowieka-warunkowane-allelami\">Cechy człowieka warunkowane allelami</h3><p>Wiele cech człowieka jest warunkowanych przez allele dominujące i recesywne. Przykłady obejmują: ciemne włosy (dominujące) i jasne włosy (recesywne), kręcone włosy (dominujące) i proste włosy (recesywne), długie rzęsy (dominujące) i krótkie rzęsy (recesywne), ciemne oczy (dominujące) i jasne oczy (recesywne), odstające uszy (dominujące) i przylegające uszy (recesywne), piegi (dominujące) i brak piegów (recesywne), orli nos (dominujący) i prosty nos (recesywny), a także grupę krwi Rh+ (dominującą) i Rh– (recesywną). Należy jednak pamiętać, że większość z tych cech jest determinowana wielogenowo, a tylko grupa krwi Rh jest warunkowana przez pojedynczą parę alleli.</p><p><strong>Dziedziczenie barwy oczu u człowieka</strong>: Barwa oczu zależy od obecności melaniny w tęczówce. Tęczówka składa się z dwóch warstw: przedniej i tylnej. W warstwie tylnej melanina występuje zawsze, co nadaje oczom niebieski odcień – jest to cecha recesywna. Obecność melaniny w warstwie przedniej warunkuje inną barwę oczu (np. szarą, zieloną, brązową, czarną) – jest to cecha dominująca. Osoby o niebieskich oczach są więc homozygotami recesywnymi (aa), podczas gdy osoby o innych kolorach oczu mogą być homozygotami dominującymi (AA) lub heterozygotami (Aa).</p><p><strong>Rodowód genetyczny</strong>: Dziedziczenie barwy oczu w rodzinie można przedstawić graficznie za pomocą rodowodu genetycznego. Analiza rodowodu pozwala ustalić genotypy poszczególnych członków rodziny. Podstawowe zasady konstruowania rodowodu:</p><ul><li>Kolejne pokolenia numeruje się cyframi rzymskimi (I, II, III itd.).</li><li>Osoby w obrębie jednego pokolenia numeruje się cyframi arabskimi (1, 2, 3 itd.).</li><li>Kółko oznacza osobę płci żeńskiej, a kwadrat – osobę płci męskiej.</li><li>Pozioma kreska łącząca dwoje ludzi oznacza rodziców (np. małżeństwo).</li><li>Pionowa kreska z rozgałęzieniami prowadzi do potomstwa danej pary.</li></ul><p>Na przykład w rodowodzie, w którym rodzice mają oczy brązowe (genotypy Aa), a jedno z dzieci ma oczy niebieskie (aa), można wywnioskować, że oboje rodzice są heterozygotami.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie jest prawdopodobieństwo pojawienia się heterozygoty (Aa) w potomstwie krzyżówki dwóch heterozygot (Aa × Aa)?",
      "answer": "Prawdopodobieństwo wynosi 50% (0,5)."
    },
    {
      "question": "Na czym polega krzyżówka testowa i kiedy się ją stosuje?",
      "answer": "Krzyżówka testowa polega na skrzyżowaniu osobnika o nieznanym genotypie (wykazującego cechę dominującą) z homozygotą recesywną. Stosuje się ją w celu ustalenia, czy badany osobnik jest homozygotą dominującą czy heterozygotą."
    },
    {
      "question": "Dlaczego osoby o niebieskich oczach są zawsze homozygotami recesywnymi?",
      "answer": "Ponieważ niebieska barwa oczu jest cechą recesywną, warunkowaną brakiem melaniny w przedniej warstwie tęczówki. Aby cecha recesywna ujawniła się, osobnik musi posiadać dwa allele recesywne (aa)."
    }
  ]
};
