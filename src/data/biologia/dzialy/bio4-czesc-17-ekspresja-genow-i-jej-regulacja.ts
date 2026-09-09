import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_17_ekspresjaGenowIJejRegulacjaData: StructuredChapter = {
  "chapterTitle": "Ekspresja genów i jej regulacja",
  "toc": [
    {
      "title": "Określanie nici kodującej i matrycowej DNA",
      "anchorId": "okreslanie-nici-dna"
    },
    {
      "title": "Modyfikacje potranslacyjne białek",
      "anchorId": "modyfikacje-potranslacyjne"
    },
    {
      "title": "Fałdowanie białek",
      "anchorId": "faldowanie-bialek"
    },
    {
      "title": "Regulacja ekspresji genów u prokariotów",
      "anchorId": "regulacja-prokarioty"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"okreslanie-nici-dna\">Określanie nici kodującej i matrycowej DNA</h3><p>Na podstawie sekwencji peptydu można ustalić, która z dwóch nici DNA jest nicią kodującą, a która matrycową. Nić kodująca ma taką samą sekwencję jak mRNA (z wyjątkiem tyminy zamiast uracylu), natomiast nić matrycowa jest komplementarna do mRNA.</p><p>Rozważmy przykład genu kodującego peptyd złożony z siedmiu aminokwasów: metionina – prolina – walina – izoleucyna – lizyna – treonina – fenyloalanina (Met-Pro-Val-Ile-Lys-Thr-Phe). Dwie nici DNA mają sekwencje:</p><ul><li>Nici 1: AACGCGCTAGTAATGCCCGTCATAAAGACTTTCTGAAAGGGCGC</li><li>Nici 2: TTGCGCGATCATTACGGGCAGTATTTCTGAAAGACTTTCCCGCG</li></ul><p>Aby określić nić matrycową, należy znaleźć w jednej z nici sekwencję kodującą, która po transkrypcji da mRNA o kodonach odpowiadających aminokwasom peptydu. Kodony dla poszczególnych aminokwasów to: metionina – AUG, prolina – CCC, walina – GUC, izoleucyna – AUC, lizyna – AAG, treonina – ACU, fenyloalanina – UUC. Nić matrycowa musi zawierać sekwencje komplementarne do tych kodonów (czyli TAC, GGG, CAG, TAG, TTC, TGA, AAG). Analiza obu nici pokazuje, że nić 2 zawiera od lewej: TAC (dla metioniny), GGG (dla proliny), CAG (dla waliny), TAG (dla izoleucyny), TTC (dla lizyny), TGA (dla treoniny), AAG (dla fenyloalaniny). Zatem nić 2 jest nicią matrycową, a nić 1 – nicią kodującą.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"modyfikacje-potranslacyjne\">Modyfikacje potranslacyjne białek</h3><p>Po translacji białka nie są od razu w pełni funkcjonalne. Aby uzyskać aktywność biologiczną, przechodzą modyfikacje potranslacyjne, które często wiążą się z procesem fałdowania, czyli przyjmowania odpowiedniej struktury przestrzennej. Modyfikacje te mogą obejmować wycinanie fragmentów łańcucha polipeptydowego, np. usunięcie metioniny z początku łańcucha lub innych aminokwasów ze środka czy końca, co prowadzi do powstania krótszych form białka lub kilku mniejszych polipeptydów o specyficznych funkcjach.</p><p>Innym rodzajem modyfikacji jest przyłączanie do aminokwasów dodatkowych grup chemicznych, takich jak reszty cukrowe, lipidowe czy fosforanowe. Procesy te pełnią również funkcję znakowania białek, co umożliwia ich sortowanie i kierowanie do odpowiednich miejsc w komórce lub poza nią.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"faldowanie-bialek\">Fałdowanie białek</h3><p>Fałdowanie (zwijanie) białek to proces, w którym białko uzyskuje swoją ostateczną, fizjologicznie czynną strukturę przestrzenną – najczęściej trzeciorzędową lub czwartorzędową. Ta natywna konformacja jest niezbędna do pełnienia funkcji biologicznych. Fałdowanie rozpoczyna się już w trakcie translacji i zachodzi spontanicznie, choć często wspomagają je białka opiekuńcze, które pomagają nowo powstałemu polipeptydowi przyjąć właściwą strukturę.</p><p>W wyniku translacji powstaje nieaktywne białko o strukturze pierwszorzędowej, które dopiero po fałdowaniu staje się aktywne biologicznie.</p>"
    },
    {
      "pageNumber": 4,
      "htmlContent": "<h3 id=\"regulacja-prokarioty\">Regulacja ekspresji genów u prokariotów</h3><p>Organizmy prokariotyczne, takie jak bakterie, muszą szybko reagować na zmiany w środowisku, dlatego regulacja ekspresji genów jest u nich kluczowa. Sygnały ze środowiska zewnętrznego lub wewnętrznego powodują zmiany w aktywności genów, co prowadzi do wzrostu lub spadku ilości odpowiednich białek w komórce. Regulacja odbywa się głównie na etapie inicjacji transkrypcji, ale także na etapie inicjacji translacji, co pozwala na szybkie przerwanie ekspresji genu nawet po wytworzeniu mRNA.</p><p>U bakterii regulacja ma na celu włączanie genów kodujących białka aktualnie potrzebne oraz wyłączanie genów kodujących białka zbędne. Dzięki temu komórka oszczędza energię i zasoby, dostosowując swój metabolizm do warunków.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Która nić DNA jest matrycowa w procesie transkrypcji?",
      "answer": "Nić matrycowa to ta, która jest komplementarna do mRNA; na podstawie sekwencji peptydu można ją zidentyfikować, szukając sekwencji kodujących aminokwasy."
    },
    {
      "question": "Jakie modyfikacje potranslacyjne mogą zachodzić w białkach?",
      "answer": "Modyfikacje potranslacyjne obejmują wycinanie fragmentów polipeptydu (np. metioniny), przyłączanie grup chemicznych (cukrowych, lipidowych, fosforanowych) oraz fałdowanie do struktury natywnej."
    },
    {
      "question": "Na jakim etapie regulacji ekspresji genów u prokariotów najczęściej działa regulacja?",
      "answer": "U prokariotów regulacja najczęściej zachodzi na etapie inicjacji transkrypcji, ale także na etapie inicjacji translacji."
    }
  ]
};
