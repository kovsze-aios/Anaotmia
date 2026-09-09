import type { StructuredChapter } from "@/types/theory";

export const bio4_czesc_64_enzymyRestrykcyjneILigazyWInzynieriiGenetycznejData: StructuredChapter = {
  "chapterTitle": "Enzymy restrykcyjne i ligazy w inżynierii genetycznej",
  "toc": [
    {
      "title": "Cięcie DNA przez enzymy restrykcyjne",
      "anchorId": "ciecie-dna-przez-enzymy-restrykcyjne"
    },
    {
      "title": "Ligazy – łączenie fragmentów DNA",
      "anchorId": "ligazy-laczenie-fragmentow-dna"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"ciecie-dna-przez-enzymy-restrykcyjne\">Cięcie DNA przez enzymy restrykcyjne</h3><p>Enzymy restrykcyjne (nazywane też restryktazami) to białka, które rozpoznają specyficzne, charakterystyczne dla siebie sekwencje nukleotydowe w dwuniciowej cząsteczce DNA i przecinają ją w ściśle określonym punkcie, zwanym <strong>miejscem restrykcyjnym</strong>. Każda restryktaza ma unikatowe miejsce rozpoznawania, co pozwala na precyzyjne cięcie DNA w pożądanych lokalizacjach.</p><p>W wyniku działania enzymów restrykcyjnych powstają fragmenty DNA o różnych typach zakończeń. Mogą to być <strong>lepkie końce</strong> (kohezyjne), które mają jednoniciowe wystające odcinki, lub <strong>tępe końce</strong>, gdzie obie nici są przecięte w tym samym miejscu, bez żadnych wystających fragmentów. Przykładem enzymu tworzącego lepkie końce jest <em>EcoRI</em>, który rozpoznaje sekwencję 5'-GAATTC-3' i tnie ją między G a A, pozostawiając jednoniciowe ogony. Z kolei <em>SmaI</em> rozpoznaje sekwencję 5'-CCCGGG-3' i przecina obie nici w środku, generując tępe końce.</p><p>Częstość występowania miejsc restrykcyjnych w DNA jest różna i zależy od długości sekwencji rozpoznawanej przez dany enzym. Krótkie sekwencje, np. czteronukleotydowe, występują znacznie częściej – średnio raz na 44 pary zasad (czyli 256 pz), podczas gdy dłuższe, np. ośmionukleotydowe, pojawiają się rzadziej – około raz na 48 pz (65 536 pz). Dzięki temu, stosując różne enzymy restrykcyjne, można uzyskać fragmenty DNA o pożądanej długości, co jest kluczowe przy analizie dużych cząsteczek, takich jak całe chromosomy.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"ligazy-laczenie-fragmentow-dna\">Ligazy – łączenie fragmentów DNA</h3><p><strong>Ligazy</strong> to enzymy, które katalizują łączenie fragmentów DNA, na przykład tych powstałych po cięciu restryktazami. Ich działanie polega na tworzeniu wiązań fosfodiestrowych między sąsiednimi nukleotydami w obrębie tej samej nici, co prowadzi do scalenia dwóch cząsteczek w jedną. Reakcja ligacji wymaga, aby końce łączonych fragmentów znalazły się w bliskim sąsiedztwie – wtedy ligaza może efektywnie połączyć obie nici.</p><p>Najwydajniejsza ligacja zachodzi, gdy fragmenty mają komplementarne lepkie końce, które samorzutnie łączą się ze sobą poprzez wiązania wodorowe, ułatwiając ligazie zadanie. W przypadku tępych końców ligacja jest również możliwa, ale wymaga wyższego stężenia enzymu i substratów. W wyniku ligacji powstaje ciągła, stabilna cząsteczka DNA, co jest podstawą wielu technik inżynierii genetycznej, takich jak klonowanie czy konstrukcja wektorów.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie są dwa główne typy zakończeń fragmentów DNA powstających po działaniu enzymów restrykcyjnych?",
      "answer": "Lepkie końce (kohezyjne) i tępe końce."
    },
    {
      "question": "Jaka jest różnica w częstości występowania miejsc restrykcyjnych dla sekwencji czteronukleotydowych i ośmionukleotydowych?",
      "answer": "Sekwencje czteronukleotydowe występują znacznie częściej (średnio co 256 pz) niż ośmionukleotydowe (średnio co 65 536 pz)."
    },
    {
      "question": "Jaką rolę pełnią ligazy w inżynierii genetycznej?",
      "answer": "Ligazy łączą fragmenty DNA, tworząc wiązania fosfodiestrowe między nukleotydami, co umożliwia scalenie przeciętych cząsteczek."
    }
  ]
};
