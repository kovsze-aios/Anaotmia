import type { MaturaSubject } from "@/types/matura";

export const biologia: MaturaSubject = {
  id: "biologia",
  title: "Biologia — Matura CKE 2015+",
  shortTitle: "Biologia",
  icon: "🧬",
  records: [
    {
      year: 2016,
      month: "maj",
      examCode: "MBI-R1_1P-162",
      answerKeyPath: "../biologia/Biologia/2016/MBI-R1-N.pdf",
      questions: [
        {
          id: "bio-2016-1",
          year: 2016,
          month: "maj",
          questionNumber: 1,
          instruction:
            "Na poniższym schemacie przedstawiono uproszczony przebieg reakcji fotochemicznych fazy jasnej fotosyntezy zachodzących w tylakoidach chloroplastów. Strzałkami oznaczono kierunki przepływu elektronów i protonów.",
          questionText:
            "Wykaż związek między przepływem protonów (H+) przez błonę tylakoidu a wytwarzaniem ATP w chloroplastach.",
          officialCkeAnswer:
            "1 pkt – za poprawne wykazanie związku, że przepływ protonów przez syntazę ATP (CF1-CFo) umożliwia fosforylację ADP do ATP. Przykładowa odpowiedź: Przepływ protonów (H+) przez syntazę ATP z wnętrza tylakoidu do stromy dostarcza energii do syntezy ATP z ADP i Pi.",
          points: 1,
          topicCategory: "Metabolizm — fotosynteza",
        },
        {
          id: "bio-2016-2",
          year: 2016,
          month: "maj",
          questionNumber: 2,
          instruction:
            "Geny oporności na antybiotyki u bakterii często znajdują się na plazmidach. Na schemacie przedstawiono dwa szczepy bakterii: jeden zawierający plazmid z genem oporności na ampicylinę (Apr), drugi — bez plazmidu. Szczepy hodowano na pożywce bez antybiotyku, a następnie przeniesiono na pożywkę z ampicyliną.",
          questionText:
            "Określ, które z tych dwóch szczepów bakterii przeżyją na pożywce z ampicyliną. Odpowiedź uzasadnij, odnosząc się do informacji o plazmidzie.",
          officialCkeAnswer:
            "1 pkt – za wskazanie szczepu z plazmidem Apr i uzasadnienie, że gen oporności na plazmidzie umożliwia syntezę białka dezaktywującego ampicylinę. Przykładowa odpowiedź: Przeżyje szczep z plazmidem Apr, ponieważ zawiera gen warunkujący oporność na ampicylinę, dzięki czemu bakterie mogą rosnąć w obecności tego antybiotyku.",
          points: 1,
          topicCategory: "Genetyka — inżynieria genetyczna",
        },
        {
          id: "bio-2016-3",
          year: 2016,
          month: "maj",
          questionNumber: 3,
          instruction:
            "W układzie krwionośnym człowieka wyróżnia się tętnice, żyły i naczynia włosowate. Na schemacie przedstawiono fragment układu krążenia z zaznaczonym naczyniem X, które łączy tętniczkę doprowadzającą z tętniczką odprowadzającą w nerce.",
          questionText:
            "Podaj nazwę opisanego naczynia X oraz określ, czy jest to sieć tętniczo-tętnicza, czy tętniczo-żylna. Uzasadnij odpowiedź.",
          officialCkeAnswer:
            "1 pkt – za podanie nazwy: kłębuszek nerkowy (sieć naczyń włosowatych kłębuszka) i określenie: sieć tętniczo-tętnicza (rete mirabile), ponieważ naczynie włosowate łączy dwie tętniczki: doprowadzającą i odprowadzającą.",
          points: 1,
          topicCategory: "Anatomia — układ krwionośny / dziwne sieci",
        },
        {
          id: "bio-2016-4",
          year: 2016,
          month: "maj",
          questionNumber: 4,
          instruction:
            "U roślin motylkowych (bobowatych) na korzeniach rozwijają się brodawki korzeniowe zawierające bakterie symbiotyczne z rodzaju Rhizobium. Bakterie te przekształcają azot cząsteczkowy (N₂) w amoniak (NH₃).",
          questionText:
            "Wyjaśnij, dlaczego obecność brodawek korzeniowych wpływa korzystnie na wzrost roślin motylkowych na glebach ubogich w azot.",
          officialCkeAnswer:
            "1 pkt – za wyjaśnienie, że bakterie w brodawkach wiążą azot atmosferyczny, dostarczając roślinie związków azotu (jonów amonowych) niezbędnych do syntezy aminokwasów i kwasów nukleinowych. Przykładowa odpowiedź: Bakterie Rhizobium przekształcają N₂ w NH₃, który roślina wykorzystuje do budowy związków organicznych, co umożliwia wzrost na glebie ubogiej w azot przyswajalny.",
          points: 1,
          topicCategory: "Fizjologia roślin — symbioza",
        },
        {
          id: "bio-2016-5",
          year: 2016,
          month: "maj",
          questionNumber: 5,
          instruction:
            "W tabeli przedstawiono wyniki badania poziomu glukozy we krwi u zdrowej osoby po spożyciu 100 g glukozy na czczo. Pomiary wykonano w określonych odstępach czasu od spożycia.",
          questionText:
            "Na podstawie danych przedstaw zmiany stężenia glukozy we krwi w czasie 180 minut od spożycia glukozy. Wyjaśnij mechanizm odpowiedzialny za powrót poziomu glukozy do wartości wyjściowych po 120–180 minutach.",
          officialCkeAnswer:
            "2 pkt – 1 pkt za opisanie zmian (wzrost do 30', szczyt, spadek) oraz 1 pkt za wyjaśnienie roli insuliny. Przykładowa odpowiedź: Po spożyciu glukozy jej poziom we krwi wzrasta, osiągając maksimum po ok. 30–60 min. Wzrost stężenia glukozy pobudza trzustkę do wydzielania insuliny, która zwiększa wychwyt glukozy przez komórki (wątroba, mięśnie) i hamuje glukoneogenezę, co powoduje obniżenie glikemii do wartości wyjściowych.",
          points: 2,
          topicCategory: "Fizjologia człowieka — homeostaza / regulacja hormonalna",
        },
        {
          id: "bio-2016-6",
          year: 2016,
          month: "maj",
          questionNumber: 6,
          instruction:
            "Na rysunku przedstawiono fragment szkieletu człowieka z zaznaczonymi kośćmi A i B. Kość A jest przykładem kości długiej, a kość B przykładem kości płaskiej.",
          questionText:
            "Podaj, którą z kości (A czy B) cechuje większa odporność na złamania przy obciążeniach mechanicznych, oraz uzasadnij swój wybór, odnosząc się do różnic w budowie histologicznej tkanki kostnej tych dwóch typów kości.",
          officialCkeAnswer:
            "1 pkt – za wskazanie kości A (długiej) i uzasadnienie, że w kości długiej blaszki kostne istoty zbitej ułożone są w systemy Haversa (osteony), co zapewnia większą wytrzymałość mechaniczną niż w kości płaskiej zbudowanej z dwóch blaszek istoty zbitej oddzielonych istotą gąbczastą.",
          points: 1,
          topicCategory: "Anatomia — układ szkieletowy",
        },
        {
          id: "bio-2016-7",
          year: 2016,
          month: "maj",
          questionNumber: 7,
          instruction:
            "Podczas ćwiczeń fizycznych wzrasta zapotrzebowanie mięśni na tlen. W komórkach mięśniowych przy niedoborze tlenu zachodzi fermentacja mlekowa.",
          questionText:
            "Wykaż, że fermentacja mlekowa w mięśniach podczas intensywnego wysiłku jest procesem mniej wydajnym energetycznie niż oddychanie tlenowe. W odpowiedzi uwzględnij liczbę cząsteczek ATP powstających w obu procesach z jednej cząsteczki glukozy.",
          officialCkeAnswer:
            "1 pkt – za wykazanie, że fermentacja mlekowa dostarcza 2 ATP z 1 cząsteczki glukozy podczas gdy oddychanie tlenowe dostarcza 36–38 ATP, więc jest ok. 18–19 razy mniej wydajna.",
          points: 1,
          topicCategory: "Metabolizm — oddychanie komórkowe",
        },
      ],
    },
  ],
};

export function getBiologiaRecords() {
  return biologia.records;
}

export function getBiologiaRecord(year: number, month: string) {
  return biologia.records.find(
    (r) => r.year === year && r.month === month,
  );
}
