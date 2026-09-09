import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_26_rozwiazywanieZadanZZakresuIPrawaMendlaData: StructuredChapter = {
  "chapterTitle": "Rozwiązywanie zadań z zakresu I prawa Mendla",
  "toc": [
    {
      "title": "Przykład 1: Krzyżówka testowa",
      "anchorId": "przyklad-1-krzyzowka-testowa"
    },
    {
      "title": "Przykład 2: Dziedziczenie grup krwi Rh",
      "anchorId": "przyklad-2-dziedziczenie-grup-rh"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"przyklad-1-krzyzowka-testowa\">Przykład 1: Krzyżówka testowa</h3><p>Żółta barwa nasion grochu (<em>Pisum sativum</em>) jest cechą dominującą (allele <strong>B</strong>), natomiast zielona barwa jest recesywna (allele <strong>b</strong>). Aby sprawdzić, czy osobnik o żółtych nasionach jest heterozygotą (<strong>Bb</strong>) czy homozygotą dominującą (<strong>BB</strong>), wykonuje się krzyżówkę testową z homozygotą recesywną (<strong>bb</strong>).</p><p>Krok 1: Wypisz możliwe genotypy rośliny o żółtych nasionach. Może to być heterozygota (<strong>Bb</strong>) lub homozygota dominująca (<strong>BB</strong>).</p><p>Krok 2: Przeprowadź krzyżówkę testową dla obu przypadków:</p><ul><li>Przypadek a) Badany osobnik jest heterozygotą (<strong>Bb</strong>): krzyżówka <strong>Bb</strong> × <strong>bb</strong> daje potomstwo w proporcji 50% <strong>Bb</strong> (żółte) i 50% <strong>bb</strong> (zielone).</li><li>Przypadek b) Badany osobnik jest homozygotą dominującą (<strong>BB</strong>): krzyżówka <strong>BB</strong> × <strong>bb</strong> daje w 100% potomstwo <strong>Bb</strong> (żółte).</li></ul><p>Krok 3: Interpretacja wyników. Jeśli w potomstwie pojawiają się rośliny o zielonych nasionach, badany osobnik jest heterozygotą. Jeśli całe potomstwo ma nasiona żółte, badany osobnik jest homozygotą dominującą.</p><p><strong>Odpowiedź:</strong> W opisanym przypadku, gdy całe potomstwo ma nasiona żółte, badany osobnik nie jest heterozygotą, lecz homozygotą dominującą (<strong>BB</strong>).</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"przyklad-2-dziedziczenie-grup-rh\">Przykład 2: Dziedziczenie grup krwi Rh</h3><p>Grupa krwi Rh+ jest uwarunkowana obecnością antygenu D na powierzchni erytrocytów, kodowanego przez allel dominujący <strong>D</strong>. Osoby z grupą Rh- są homozygotami recesywnymi (<strong>dd</strong>) i nie mają tego antygenu.</p><p>Krok 1: Zapisz genotypy rodziców. Aby dziecko mogło mieć grupę Rh-, musi otrzymać allel recesywny <strong>d</strong> od obojga rodziców. Zatem oboje rodzice muszą być heterozygotami (<strong>Dd</strong>).</p><p>Krok 2: Uzupełnij szachownicę Punnetta dla krzyżówki <strong>Dd</strong> × <strong>Dd</strong>. Możliwe genotypy potomstwa to: <strong>DD</strong>, <strong>Dd</strong> (dwa razy) oraz <strong>dd</strong>. Osobniki z genotypem <strong>dd</strong> mają grupę Rh-.</p><p>Krok 3: Oblicz prawdopodobieństwo urodzenia dziecka z grupą Rh-. Spośród czterech możliwych kombinacji tylko jedna daje genotyp <strong>dd</strong>, zatem prawdopodobieństwo wynosi 1/4, czyli 25%.</p><p><strong>Odpowiedź:</strong> Rodzice o grupie Rh+ mogą mieć dziecko z grupą Rh-, pod warunkiem że oboje są heterozygotami (<strong>Dd</strong>). Prawdopodobieństwo urodzenia takiego dziecka wynosi 25%.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie genotypy może mieć roślina grochu o żółtych nasionach?",
      "answer": "Może być heterozygotą (Bb) lub homozygotą dominującą (BB)."
    },
    {
      "question": "Jaki jest wynik krzyżówki testowej heterozygoty (Bb) z homozygotą recesywną (bb)?",
      "answer": "Potomstwo będzie w połowie heterozygotyczne (Bb) o żółtych nasionach i w połowie homozygotyczne recesywne (bb) o zielonych nasionach."
    },
    {
      "question": "Jaki genotyp muszą mieć rodzice, aby mogli mieć dziecko z grupą krwi Rh-?",
      "answer": "Oboje muszą być heterozygotami (Dd), aby mogli przekazać allel recesywny d."
    },
    {
      "question": "Jakie jest prawdopodobieństwo urodzenia dziecka z grupą Rh- od rodziców heterozygotycznych (Dd)?",
      "answer": "Prawdopodobieństwo wynosi 25% (1/4)."
    }
  ]
};
