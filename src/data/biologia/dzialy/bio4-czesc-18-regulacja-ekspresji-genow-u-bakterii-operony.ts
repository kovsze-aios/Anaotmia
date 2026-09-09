import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_18_regulacjaEkspresjiGenowUBakteriiOperonyData: StructuredChapter = {
  "chapterTitle": "Regulacja ekspresji genów u bakterii – operony",
  "toc": [
    {
      "title": "Budowa i działanie operonu",
      "anchorId": "budowa-i-dzialanie-operonu"
    },
    {
      "title": "Operon tryptofanowy – regulacja negatywna",
      "anchorId": "operon-tryptofanowy"
    },
    {
      "title": "Operon laktozowy – regulacja negatywna i pozytywna",
      "anchorId": "operon-laktozowy"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"budowa-i-dzialanie-operonu\">Budowa i działanie operonu</h3><p>Geny bakterii często są zorganizowane w jednostki transkrypcyjne zwane <strong>operonami</strong>, które podlegają wspólnej regulacji. Każdy operon składa się z <strong>genów struktury</strong> kodujących białka (zazwyczaj enzymy) oraz z <strong>sekwencji regulatorowych</strong> pełniących funkcję przełącznika molekularnego.</p><p>Geny struktury w obrębie jednego operonu warunkują zazwyczaj jedną cechę, np. syntezę lub rozkład określonego związku. Często kodują one kolejne enzymy tego samego szlaku metabolicznego, np. szlaku syntezy tryptofanu – aminokwasu niezbędnego do budowy białek. Dzięki temu komórka może wytworzyć potrzebny związek, gdy jego stężenie w środowisku jest niewystarczające.</p><p>Do sekwencji regulatorowych należą <strong>promotor</strong> (miejsce wiązania polimerazy RNA) oraz <strong>operator</strong> – odcinek DNA, który kontroluje dostęp polimerazy do genów struktury. W regulacji operonów uczestniczą także białka regulatorowe, które mogą działać dwojako: w <strong>regulacji negatywnej</strong> białko zwane <em>represorem</em> wyłącza operon, natomiast w <strong>regulacji pozytywnej</strong> białko zwane <em>aktywatorem</em> włącza operon, umożliwiając ekspresję genów struktury.</p><p>Każdy gen struktury zawiera <strong>ramkę odczytu</strong> – sekwencję kodonów rozpoczynającą się kodonem START, a kończącą kodonem STOP. Podczas transkrypcji cały operon jest przepisywany na jedną cząsteczkę <strong>mRNA wielogenowego (policistronowego)</strong>. W trakcie translacji rybosom kolejno odczytuje poszczególne geny: po zakończeniu syntezy jednego białka przesuwa się do następnego kodonu START, dzięki czemu powstają wszystkie enzymy danego szlaku metabolicznego.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"operon-tryptofanowy\">Operon tryptofanowy – regulacja negatywna</h3><p>Operon tryptofanowy (<em>trp</em>) zawiera pięć genów struktury kodujących enzymy szlaku syntezy tryptofanu. Jego regulacja opiera się na mechanizmie negatywnym, w którym kluczową rolę odgrywa <strong>represor</strong> – białko wytwarzane konstytutywnie, ale w formie nieaktywnej, która nie wiąże się z operatorem.</p><p>Gdy w środowisku (a więc i wewnątrz komórki) brakuje tryptofanu, represor pozostaje nieaktywny. Polimeraza RNA może wówczas przyłączyć się do promotora i przeprowadzić transkrypcję genów struktury. W efekcie powstają wszystkie enzymy szlaku syntezy tryptofanu, co prowadzi do zwiększenia stężenia tego aminokwasu w komórce.</p><p>Gdy stężenie tryptofanu wzrośnie, cząsteczki tryptofanu pełnią rolę <strong>korepresora</strong> – łączą się z nieaktywnym represorem, powodując zmianę jego kształtu i aktywację. Aktywny represor wiąże się z operatorem, blokując transkrypcję genów struktury. W ten sposób operon zostaje wyłączony, a synteza tryptofanu ustaje, dopóki jego zapas nie zostanie ponownie wykorzystany.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"operon-laktozowy\">Operon laktozowy – regulacja negatywna i pozytywna</h3><p>Operon laktozowy (<em>lac</em>) umożliwia bakteriom dostosowanie produkcji enzymów do dostępności glukozy i laktozy w środowisku. Jego regulacja jest dwustopniowa: obejmuje zarówno regulację negatywną (z udziałem represora), jak i pozytywną (z udziałem aktywatora CAP i cAMP).</p><h4>Regulacja negatywna</h4><p>Represor operonu laktozowego jest syntetyzowany w formie aktywnej, która wiąże się z operatorem. Gdy w środowisku jest glukoza, a brak laktozy, aktywny represor blokuje operator, uniemożliwiając polimerazie RNA transkrypcję genów struktury. W rezultacie bakteria nie wytwarza enzymów potrzebnych do transportu i rozkładu laktozy.</p><p>Gdy w środowisku zabraknie glukozy, a pojawi się laktoza, laktoza działa jako <strong>induktor</strong>: łączy się z aktywnym represorem, zmieniając jego kształt i czyniąc go nieaktywnym. Nieaktywny represor nie wiąże się z operatorem, dzięki czemu polimeraza RNA może przeprowadzić transkrypcję. W efekcie powstają enzymy odpowiedzialne za transport i rozkład laktozy.</p><h4>Regulacja pozytywna</h4><p>W regulacji pozytywnej uczestniczy białko <strong>CAP</strong> (kataboliczny aktywator genów), które jest syntetyzowane w formie nieaktywnej. Jego aktywacja wymaga związania z <strong>cyklicznym AMP (cAMP)</strong>. Gdy stężenie glukozy w komórce jest wysokie, poziom cAMP jest niski, więc CAP pozostaje nieaktywny i nie może wspomóc transkrypcji. W takich warunkach operon laktozowy pozostaje wyłączony nawet w obecności laktozy.</p><p>Gdy stężenie glukozy spada, wzrasta poziom cAMP. cAMP łączy się z CAP, aktywując go. Aktywny CAP wiąże się z określoną sekwencją w pobliżu promotora, ułatwiając przyłączenie polimerazy RNA. Dzięki temu, nawet jeśli represor jest nieaktywny, transkrypcja genów operonu laktozowego zachodzi wydajnie, co pozwala bakteriom wykorzystać laktozę jako alternatywne źródło energii.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie elementy wchodzą w skład operonu i jakie są ich funkcje?",
      "answer": "Operon składa się z genów struktury (kodujących białka, zwykle enzymy) oraz sekwencji regulatorowych, do których należą promotor (miejsce wiązania polimerazy RNA) i operator (kontroluje dostęp polimerazy do genów)."
    },
    {
      "question": "Na czym polega regulacja negatywna operonu tryptofanowego?",
      "answer": "W regulacji negatywnej operonu trp represor jest wytwarzany w formie nieaktywnej. Gdy w komórce jest dużo tryptofanu, pełni on rolę korepresora – łączy się z represorem, aktywując go. Aktywny represor wiąże się z operatorem i blokuje transkrypcję genów struktury."
    },
    {
      "question": "Jak działa regulacja pozytywna operonu laktozowego?",
      "answer": "W regulacji pozytywnej operonu lac uczestniczy białko CAP, które jest aktywowane przez cAMP. Gdy stężenie glukozy jest niskie, wzrasta poziom cAMP, który aktywuje CAP. Aktywny CAP wiąże się z promotorem, ułatwiając polimerazie RNA transkrypcję genów struktury."
    }
  ]
};
