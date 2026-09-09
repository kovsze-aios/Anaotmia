import type { StructuredChapter } from "@/types/theory";

export const bio1_czesc_54_regulacjaAktywnosciEnzymowKrzywaMichaelisaMentenData: StructuredChapter = {
  "chapterTitle": "Regulacja aktywności enzymów: Krzywa Michaelisa-Menten",
  "toc": [
    {
      "title": "Krzywa Michaelisa-Menten",
      "anchorId": "krzywa-michaelisa-menten"
    },
    {
      "title": "Porównywanie powinowactwa enzymów",
      "anchorId": "porownywanie-powinowactwa-enzymow"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"krzywa-michaelisa-menten\">Krzywa Michaelisa-Menten</h3><p>Krzywa Michaelisa-Menten to graficzna zależność między stężeniem substratu a szybkością reakcji enzymatycznej. Na osi Y (pionowej) odkładamy szybkość reakcji (V), a na osi X (poziomej) – stężenie substratu.</p><p>Krzywa ta ma charakterystyczny przebieg: początkowo szybkość reakcji rośnie niemal liniowo wraz ze wzrostem stężenia substratu, ale przy wyższych stężeniach wzrost ten stopniowo maleje, aż do osiągnięcia plateau. Oznacza to, że enzym ulega wysyceniu substratem.</p><p>Kluczowym parametrem krzywej jest <strong>Vmax</strong> – maksymalna szybkość reakcji, jaką może osiągnąć dany enzym. Po osiągnięciu Vmax dalsze zwiększanie stężenia substratu nie przyspiesza już reakcji, a krzywa przebiega poziomo.</p><p>Drugim ważnym parametrem jest <strong>stała Michaelisa (KM)</strong>. Wyznacza się ją, znajdując na osi Y połowę Vmax (czyli ½ Vmax), a następnie prowadząc linię poziomą do przecięcia z krzywą. Z tego punktu prowadzi się linię pionową do osi X – odczytana wartość to właśnie KM.</p><p>KM odpowiada takiemu stężeniu substratu, przy którym szybkość reakcji osiąga połowę wartości maksymalnej. Gdy stężenie substratu jest równe KM, połowa cząsteczek enzymu tworzy w danym momencie kompleks enzym-substrat (ES). Przy stężeniu dwukrotnie większym niż KM szybkość reakcji osiąga wartość maksymalną, ponieważ wszystkie cząsteczki enzymu są wysycone substratem.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"porownywanie-powinowactwa-enzymow\">Porównywanie powinowactwa enzymów do substratów</h3><p>Wartość KM jest miarą powinowactwa enzymu do substratu. Im niższe stężenie substratu jest potrzebne do osiągnięcia połowy Vmax, tym większe powinowactwo – enzym łatwiej wiąże substrat.</p><p>Porównując dwa enzymy, można określić, który ma wyższe powinowactwo, analizując ich krzywe Michaelisa-Menten. Enzym o niższej wartości KM osiąga połowę swojej maksymalnej szybkości przy niższym stężeniu substratu, co świadczy o jego większym powinowactwie.</p><p>Przykład: Na wykresie przedstawiono krzywe dla dwóch enzymów, A i B. Oba osiągają tę samą wartość Vmax (0,3 mol/s). Aby wyznaczyć KM, znajdujemy na osi Y połowę Vmax (0,15 mol/s) i prowadzimy linię poziomą do przecięcia z każdą krzywą. Następnie z punktów przecięcia prowadzimy linie pionowe do osi X.</p><p>Z wykresu odczytujemy, że KM dla enzymu A jest niższe niż dla enzymu B. Oznacza to, że enzym A ma większe powinowactwo do substratu, ponieważ potrzebuje niższego stężenia substratu, aby osiągnąć połowę swojej maksymalnej szybkości.</p><p>Odpowiedź: Enzym A ma większe powinowactwo do substratu niż enzym B.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Co oznacza stała Michaelisa (K_M) w kontekście kinetyki enzymatycznej?",
      "answer": "K_M to stężenie substratu, przy którym szybkość reakcji osiąga połowę wartości maksymalnej (V_max)."
    },
    {
      "question": "Jak zmienia się szybkość reakcji enzymatycznej, gdy stężenie substratu jest równe K_M?",
      "answer": "Szybkość reakcji wynosi wówczas połowę wartości maksymalnej (½ V_max)."
    },
    {
      "question": "Który enzym ma większe powinowactwo do substratu: ten o niższej czy wyższej wartości K_M?",
      "answer": "Enzym o niższej wartości K_M ma większe powinowactwo, ponieważ potrzebuje niższego stężenia substratu do osiągnięcia połowy V_max."
    }
  ]
};
