import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_24_zastosowanieIzotopowWBadaniachChemicznychData: StructuredChapter = {
  "chapterTitle": "Zastosowanie izotopów w badaniach chemicznych",
  "toc": [
    {
      "title": "Datowanie radiowęglowe",
      "anchorId": "datowanie-radioweglowe"
    },
    {
      "title": "Datowanie minerałów uranowych",
      "anchorId": "datowanie-mineralow-uranowych"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"datowanie-radioweglowe\">Datowanie radiowęglowe</h3><p>W przyrodzie węgiel występuje w postaci mieszaniny izotopów trwałych, takich jak <sup>12</sup>C i <sup>13</sup>C, oraz izotopu promieniotwórczego <sup>14</sup>C. Ten ostatni powstaje w górnych warstwach atmosfery w wyniku reakcji neutronów z azotem, a następnie ulega utlenieniu do dwutlenku węgla. Dzięki temu rośliny, pobierając CO<sub>2</sub> w procesie fotosyntezy, włączają do swojej biomasy również atomy węgla promieniotwórczego. W ten sposób wszystkie żywe organizmy utrzymują stały stosunek zawartości <sup>14</sup>C do <sup>12</sup>C, charakterystyczny dla atmosfery.</p><p>Gdy jednak organizm obumiera, np. gdy odetnie się konar od drzewa, przestaje wymieniać węgiel z otoczeniem. Wówczas zawarty w nim <sup>14</sup>C ulega rozpadowi beta minus, a jego ilość maleje zgodnie z prawem rozpadu promieniotwórczego. Mierząc stosunek aktywności promieniotwórczej <sup>14</sup>C do zawartości trwałego <sup>12</sup>C w próbce drewna, można obliczyć czas, jaki upłynął od śmierci drzewa. Metoda ta, zwana datowaniem radiowęglowym, pozwala określać wiek obiektów archeologicznych i geologicznych nawet do około 50 tysięcy lat.</p><h3 id=\"datowanie-mineralow-uranowych\">Datowanie minerałów uranowych</h3><p>Analogiczną techniką, stosowaną do znacznie starszych materiałów, jest datowanie na podstawie rozpadu uranu. Minerały uranowe, takie jak uraninit, zawierają naturalne izotopy <sup>238</sup>U i <sup>235</sup>U, które ulegają rozpadowi alfa i beta, tworząc szeregi promieniotwórcze kończące się na trwałych izotopach ołowiu. W momencie krystalizacji minerału nie zawiera on ołowiu, a cały ołów obecny w minerale pochodzi z rozpadu uranu. Mierząc stosunek ilości ołowiu do pozostałego uranu, można wyznaczyć wiek minerału, a tym samym wiek skał, w których występuje.</p><p>Metoda ta jest niezwykle cenna w geologii i kosmochemii, ponieważ pozwala datować próbki liczące nawet miliardy lat. Dzięki niej określono między innymi wiek Ziemi oraz wiek meteorytów. Należy jednak pamiętać, że dokładność datowania zależy od czystości minerału – obecność domieszek ołowiu pochodzenia niezwiązanego z rozpadem uranu może prowadzić do błędów. Dlatego przed pomiarem próbki są starannie oczyszczane, a analizy wykonuje się z użyciem spektrometrii mas.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Na czym polega metoda datowania radiowęglowego?",
      "answer": "Metoda datowania radiowęglowego polega na pomiarze stosunku zawartości izotopu promieniotwórczego węgla-14 do trwałego węgla-12 w próbce pochodzenia organicznego. Ponieważ po śmierci organizmu dopływ nowego węgla-14 ustaje, a jego ilość maleje zgodnie z prawem rozpadu, na podstawie zmierzonego stosunku można obliczyć czas, jaki upłynął od śmierci organizmu."
    },
    {
      "question": "Jak określa się wiek minerałów uranowych?",
      "answer": "Wiek minerałów uranowych określa się, mierząc stosunek zawartości ołowiu (produktu rozpadu uranu) do zawartości pozostałego uranu. Ponieważ w momencie krystalizacji minerał nie zawiera ołowiu, cały znaleziony w nim ołów pochodzi z rozpadu uranu, co pozwala obliczyć czas, jaki upłynął od krystalizacji."
    }
  ]
};
