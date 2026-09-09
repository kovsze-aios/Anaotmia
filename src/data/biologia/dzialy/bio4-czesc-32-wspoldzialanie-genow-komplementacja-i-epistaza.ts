import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_32_wspoldzialanieGenowKomplementacjaIEpistazaData: StructuredChapter = {
  "chapterTitle": "Współdziałanie genów: komplementacja i epistaza",
  "toc": [
    {
      "title": "Komplementacja genów – przykład dzwonka karpackiego",
      "anchorId": "komplementacja-genow-przyklad-dzwonka-karpackiego"
    },
    {
      "title": "Epistaza – geny epistatyczne i hipostatyczne",
      "anchorId": "epistaza-geny-epistatyczne-i-hipostatyczne"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"komplementacja-genow-przyklad-dzwonka-karpackiego\">Komplementacja genów – przykład dzwonka karpackiego</h3><p>U dzwonka karpackiego (<em>Campanula carpatica</em>) barwa kwiatów jest determinowana przez dwa komplementarne geny. Dominujące allele obu genów (<strong>A</strong> i <strong>B</strong>) są niezbędne do syntezy dwóch różnych enzymów, które wspólnie uczestniczą w szlaku prowadzącym do powstania niebieskiego barwnika. Jeśli którykolwiek z tych alleli jest nieobecny (genotyp recesywny pod jednym lub oboma loci), barwnik nie jest wytwarzany i kwiaty pozostają białe.</p><p>W doświadczeniu skrzyżowano dwie białokwitnące homozygotyczne odmiany dzwonka karpackiego o genotypach <strong>aaBB</strong> i <strong>AAbb</strong>. Całe pokolenie F1 uzyskało kwiaty niebieskie, a ich genotyp to <strong>AaBb</strong>. W pokoleniu F2, po samozapyleniu roślin F1, zaobserwowano rozszczepienie fenotypowe: rośliny o kwiatach niebieskich i białych wystąpiły w stosunku 9:7.</p><p>Aby zrozumieć ten stosunek, należy przeanalizować krzyżówkę genetyczną. Po skrzyżowaniu osobników F1 (<em>AaBb</em> × <em>AaBb</em>) otrzymuje się w szachownicy Punnetta 16 równoprawnych kombinacji genotypów. Rośliny o kwiatach niebieskich to te, które posiadają przynajmniej jeden dominujący allel <strong>A</strong> oraz przynajmniej jeden dominujący allel <strong>B</strong> (czyli genotypy: <em>AABB</em>, <em>AABb</em>, <em>AaBB</em>, <em>AaBb</em>). Stanowią one 9 z 16 możliwych kombinacji. Pozostałe 7 kombinacji obejmuje genotypy, w których brakuje dominującego allelu w jednym lub obu loci: <em>AAbb</em>, <em>Aabb</em>, <em>aaBB</em>, <em>aaBb</em> oraz <em>aabb</em> – wszystkie one dają kwiaty białe.</p><p>Podsumowując, genotypy roślin o białych kwiatach w pokoleniu F2 to: <strong>AAbb</strong>, <strong>Aabb</strong>, <strong>aaBB</strong>, <strong>aaBb</strong> oraz <strong>aabb</strong>.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"epistaza-geny-epistatyczne-i-hipostatyczne\">Epistaza – geny epistatyczne i hipostatyczne</h3><p>W niektórych przypadkach jeden gen może maskować fenotypowy efekt działania innego, niezwiązanego z nim genu. Zjawisko to nazywamy <strong>epistazą</strong>. Gen, który wywiera efekt maskujący, określa się mianem <strong>genu epistatycznego</strong>, natomiast gen, którego działanie jest maskowane, to <strong>gen hipostatyczny</strong>. Allel warunkujący epistazę może być dominujący (epistaza dominująca) lub recesywny (epistaza recesywna).</p><p>Klasycznym przykładem epistazy dominującej jest dziedziczenie barwy sierści u gryzoni, takich jak myszy. Na ostateczny fenotyp wpływa kilka genów, w tym gen warunkujący wytwarzanie barwnika (allele <strong>C</strong> – barwnik obecny, <strong>c</strong> – brak syntezy barwnika, co daje białą sierść) oraz gen odpowiedzialny za rozmieszczenie barwnika we włosie (allele <strong>A</strong> – ubarwienie typu agouti, gdzie barwnik nie występuje w szczytowej części włosa, pozostawiając ją białą, oraz <strong>a</strong> – równomierne rozmieszczenie barwnika).</p><p>Jeśli osobnik posiada genotyp <em>cc</em>, to niezależnie od alleli genu <em>A</em>, nie wytworzy barwnika i będzie miał białą sierść. W tym przypadku allel recesywny <strong>c</strong> w układzie homozygotycznym działa epistatycznie, maskując efekty genu <em>A</em>. Z kolei u osobników z przynajmniej jednym allelem <strong>C</strong>, fenotyp zależy od obecności alleli <strong>A</strong> lub <strong>a</strong>: obecność <strong>A</strong> daje umaszczenie agouti, a homozygota <em>aa</em> – jednolite ciemne umaszczenie.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie genotypy roślin dzwonka karpackiego dają białe kwiaty w pokoleniu F2 po skrzyżowaniu odmian aaBB i AAbb?",
      "answer": "Genotypy roślin o białych kwiatach to: AAbb, Aabb, aaBB, aaBb oraz aabb."
    },
    {
      "question": "Co to jest epistaza i jakie są jej rodzaje?",
      "answer": "Epistaza to zjawisko, w którym jeden gen maskuje efekt działania innego genu. Gen maskujący to gen epistatyczny, a maskowany – hipostatyczny. Wyróżniamy epistazę dominującą (gdy allel dominujący maskuje) i recesywną (gdy homozygota recesywna maskuje)."
    }
  ]
};
