import type { StructuredChapter } from "@/types/theory";

export const chem1_czesc_108_silyMiedzyczasteczkoweIIchRolaWStanachSkupieniaMateriiData: StructuredChapter = {
  "chapterTitle": "Siły międzycząsteczkowe i ich rola w stanach skupienia materii",
  "toc": [
    {
      "title": "Charakterystyka sił międzycząsteczkowych",
      "anchorId": "charakterystyka-sil-miedzyczasteczkowych"
    },
    {
      "title": "Rodzaje oddziaływań międzycząsteczkowych",
      "anchorId": "rodzaje-oddzialywan-miedzyczasteczkowych"
    },
    {
      "title": "Energia oddziaływań a odległość międzycząsteczkowa",
      "anchorId": "energia-oddzialywan-a-odleglosc"
    }
  ],
  "pages": [
    {
      "pageNumber": 1,
      "htmlContent": "<h3 id=\"charakterystyka-sil-miedzyczasteczkowych\">Charakterystyka sił międzycząsteczkowych</h3><p>Siły międzycząsteczkowe odpowiadają za odchylenia zachowania gazów rzeczywistych od modelu gazu doskonałego. W porównaniu z wiązaniami chemicznymi wewnątrz cząsteczek są to oddziaływania o stosunkowo niewielkiej energii, zazwyczaj w zakresie od 5 do 40 kJ·mol<sup>−1</sup>. Dla kontrastu, energia typowego wiązania kowalencyjnego może sięgać nawet 400 kJ·mol<sup>−1</sup>.</p><p>Mimo swojej słabości, oddziaływania te są wszechobecne i odgrywają kluczową rolę w procesach skraplania większości gazów. Ich cechą charakterystyczną jest bardzo szybki zanik wraz ze wzrostem odległości między oddziałującymi cząsteczkami.</p>"
    },
    {
      "pageNumber": 2,
      "htmlContent": "<h3 id=\"rodzaje-oddzialywan-miedzyczasteczkowych\">Rodzaje oddziaływań międzycząsteczkowych</h3><p>Współczesny opis sił międzycząsteczkowych uwzględnia co najmniej trzy główne typy oddziaływań. Pierwszy z nich dotyczy substancji polarnych, gdzie trwałe dipole elektryczne cząsteczek wzajemnie się przyciągają lub odpychają, dążąc do uporządkowanego ustawienia. Energia uwalniana podczas takiego uporządkowania nosi nazwę <strong>energii orientacji</strong>.</p><p>Drugi typ to oddziaływanie między dipolem trwałym a dipolem indukowanym. Stały moment dipolowy cząsteczki polarnej może polaryzować sąsiednią cząsteczkę lub atom, wywołując w niej chwilowy rozkład ładunku. Energia tego oddziaływania jest nazywana <strong>energią indukcji</strong>.</p><p>Trzeci rodzaj to <strong>siły dyspersyjne</strong> (zwane też siłami Londona). Występują one zawsze, niezależnie od polarności cząsteczek. Nawet w atomach takich jak hel, chmura elektronowa może chwilowo wykazywać niesymetryczny rozkład ładunku, tworząc chwilowy moment dipolowy. Ten z kolei indukuje podobny moment w sąsiednich atomach, co prowadzi do przyciągania. Energię dyspersji można obliczyć metodami mechaniki kwantowej.</p>"
    },
    {
      "pageNumber": 3,
      "htmlContent": "<h3 id=\"energia-oddzialywan-a-odleglosc\">Energia oddziaływań a odległość międzycząsteczkowa</h3><p>Siły międzycząsteczkowe zanikają bardzo szybko wraz ze wzrostem odległości. Energia przyciągania maleje proporcjonalnie do szóstej potęgi odległości (<em>r</em><sup>6</sup>), podczas gdy energia oddziaływań kulombowskich maleje tylko proporcjonalnie do pierwszej potęgi. Przyjmując, że energia potencjalna cząsteczek w dużej odległości jest równa zeru, zbliżenie cząsteczek powoduje jej obniżenie do wartości ujemnych.</p><p>Przy bardzo małych odległościach zaczynają dominować siły odpychania, wynikające z odpychania elektronów w zamkniętych powłokach. Energia odpychania rośnie bardzo gwałtownie, proporcjonalnie do odwrotności dwunastej potęgi odległości (<em>r</em><sup>12</sup>). Wypadkowa energia potencjalna dwóch cząsteczek jest sumą członu przyciągającego i odpychającego, co opisuje wzór:</p><p><strong>E = a/r<sup>6</sup> − b/r<sup>12</sup></strong></p><p>gdzie <em>a</em> i <em>b</em> to stałe charakterystyczne dla danej substancji. Funkcja ta przechodzi przez minimum odpowiadające odległości równowagowej <em>r</em><sub>0</sub>, która jest najkorzystniejszą odległością między cząsteczkami w stanie skondensowanym, takim jak ciecz czy ciało stałe.</p>"
    }
  ],
  "chapterQuiz": [
    {
      "question": "Jakie są trzy główne rodzaje oddziaływań międzycząsteczkowych?",
      "answer": "Oddziaływania orientacyjne (dipol trwały – dipol trwały), indukcyjne (dipol trwały – dipol indukowany) oraz dyspersyjne (chwilowe dipole)."
    },
    {
      "question": "Dlaczego energia oddziaływań międzycząsteczkowych maleje szybciej niż energia oddziaływań kulombowskich?",
      "answer": "Ponieważ energia przyciągania międzycząsteczkowego maleje proporcjonalnie do 1/r^6, podczas gdy energia kulombowska maleje proporcjonalnie do 1/r."
    },
    {
      "question": "Co odpowiada za odpychanie między cząsteczkami przy bardzo małych odległościach?",
      "answer": "Odpychanie elektronów w zamkniętych powłokach elektronowych, co opisuje człon proporcjonalny do 1/r^12."
    }
  ]
};
