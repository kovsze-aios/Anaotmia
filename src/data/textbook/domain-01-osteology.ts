import type { TextbookDomain } from "@/types/textbook";

export const osteology: TextbookDomain = {
  id: "osteology",
  title: "Osteologia i Artrologia",
  shortTitle: "Osteologia",
  icon: "🦴",
  sections: [
    {
      id: "wprowadzenie-kosci",
      title: "Wprowadzenie — budowa kości i stawów",
      content: [
        {
          type: "paragraph",
          text: "Szkielet dorosłego człowieka tworzy około 206 kości. Połączone ze sobą na różne sposoby kości umożliwiają: osiągnięcie określonej wielkości i kształtu ciała, utrzymanie postawy ciała, ochronę narządów wewnętrznych oraz wykonywanie ruchów.",
        },
        {
          type: "heading",
          level: 3,
          text: "Budowa typowego stawu",
        },
        {
          type: "paragraph",
          text: "W stawach można zawsze wyróżnić trzy podstawowe elementy:",
        },
        {
          type: "list",
          items: [
            "Powierzchnie stawowe pokryte chrząstką stawową (szklistą) — cechuje ją duża odporność na ścieranie. Mogą być wypukłe (główki stawowe) lub wklęsłe (panewki stawowe).",
            "Jama stawowa — przestrzeń pomiędzy powierzchniami stawowymi, wypełniona śliską i tłustą mazią stawową.",
            "Torebka stawowa — osłona otaczająca staw. Zewnętrzną powierzchnię buduje tkanka łączna włóknista, wewnętrzną wyścieła błona maziowa produkująca maź stawową.",
          ],
        },
        {
          type: "paragraph",
          text: "Łąkotki zbudowane są z tkanki chrzęstnej (pytanie nr 38).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-1",
          question: "Ile kości tworzy szkielet dorosłego człowieka?",
          answer: "Około 206 kości.",
          examRef: "Q-wiedza",
        },
        {
          id: "ost-2",
          question: "Jakie trzy podstawowe elementy wyróżniamy w stawie?",
          answer: "1) Powierzchnie stawowe pokryte chrząstką szklistą, 2) Jama stawowa wypełniona mazią stawową, 3) Torebka stawowa z błoną maziową.",
          examRef: "Q-wiedza",
        },
        {
          id: "ost-3",
          question: "Z jakiej tkanki zbudowane są łąkotki?",
          answer: "Z tkanki chrzęstnej.",
          examRef: "Q38",
        },
      ],
    },
    {
      id: "czaszka",
      title: "Czaszka",
      content: [
        {
          type: "paragraph",
          text: "Czaszka człowieka składa się z dwóch zasadniczych części: mózgoczaszki (ochraniającej mózgowie) i trzewioczaszki (otaczającej początkowe odcinki dróg pokarmowych i oddechowych oraz narządy zmysłowe).",
        },
        {
          type: "heading",
          level: 3,
          text: "Mózgoczaszka",
        },
        {
          type: "paragraph",
          text: "W skład mózgoczaszki wchodzą kości: czołowa, dwie ciemieniowe, potyliczna, dwie skroniowe (widoczne od zewnątrz) oraz kości sitowa i klinowa (tworzące podstawę czaszki).",
        },
        {
          type: "heading",
          level: 3,
          text: "Połączenia stawowe czaszki",
        },
        {
          type: "paragraph",
          text: "Powierzchnie stawowe czaszki zlokalizowane są na kości potylicznej i skroniowej (pytanie nr 33). Staw skroniowo-żuchwowy — na nim działają mięśnie żuciowe (pytanie nr 24).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-4",
          question: "Na jakich kościach zlokalizowane są powierzchnie stawowe czaszki?",
          answer: "Na kości potylicznej i skroniowej.",
          examRef: "Q33",
        },
        {
          id: "ost-5",
          question: "Wymień kości mózgoczaszki.",
          answer: "Czołowa, dwie ciemieniowe, potyliczna, dwie skroniowe, sitowa i klinowa.",
          examRef: "Q-wiedza",
        },
      ],
    },
    {
      id: "kregoslup-kregi",
      title: "Kręgosłup i kręgi",
      content: [
        {
          type: "paragraph",
          text: "Kręgosłup człowieka składa się z odcinków: szyjnego (7 kręgów), piersiowego (12 kręgów), lędźwiowego (5 kręgów), krzyżowego (5 zrośniętych w kość krzyżową) i ogonowego (szczątkowe, zrastające się w kość guziczną).",
        },
        {
          type: "paragraph",
          text: "Najwięcej kręgów występuje w odcinku piersiowym (pytanie nr 35 — 12 kręgów piersiowych). Kręgi piersiowe mają powierzchnie stawowe do połączenia z żebrami.",
        },
        {
          type: "paragraph",
          text: "Ruch zginania kręgosłupa ogranicza więzadło nadkolcowe (pytanie nr 39). Zginanie podudzia zachodzi w stawie kolanowym (pytanie nr 37).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-6",
          question: "W którym odcinku kręgosłupa jest najwięcej kręgów? Jaka jest ich liczba?",
          answer: "W odcinku piersiowym — 12 kręgów.",
          examRef: "Q35",
        },
        {
          id: "ost-7",
          question: "Które więzadło ogranicza ruch zginania kręgosłupa?",
          answer: "Więzadło nadkolcowe.",
          examRef: "Q39",
        },
      ],
    },
    {
      id: "klatka-piersiowa",
      title: "Klatka piersiowa",
      content: [
        {
          type: "paragraph",
          text: "Klatkę piersiową tworzą kręgi piersiowe (12), żebra (12 par) oraz mostek. Razem tworzą one ażurową, sprężystą osłonę płuc, serca i przełyku, pozwalającą na wykonywanie ruchów oddechowych.",
        },
        {
          type: "list",
          items: [
            "Żebra prawdziwe (I-VII) — łączą się bezpośrednio z mostkiem",
            "Żebra rzekome (VIII-X) — zrastają się z chrząstkami żeber położonych wyżej",
            "Żebra wolne (XI-XII) — nie łączą się z mostkiem ani wyższymi żebrami",
          ],
        },
        {
          type: "paragraph",
          text: "Mostek jest nieparzystą kością płaską, zbudowaną z rękojeści, trzonu i wyrostka mieczykowatego. Punktem kostnym łatwo wyczuwalnym jest guzowatość piszczelowa (pytanie nr 31).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-8",
          question: "Ile par żeber wyróżniamy? Wymień ich typy.",
          answer: "12 par: prawdziwe (I-VII, łączą się z mostkiem), rzekome (VIII-X, zrastają się z wyższymi), wolne (XI-XII, nie łączą się z mostkiem).",
          examRef: "Q-wiedza",
        },
        {
          id: "ost-9",
          question: "Podaj przykład punktu kostnego łatwo wyczuwalnego.",
          answer: "Guzowatość piszczelowa.",
          examRef: "Q31",
        },
      ],
    },
    {
      id: "konczyna-gorna",
      title: "Kościec kończyny górnej",
      content: [
        {
          type: "paragraph",
          text: "W skład kośćca kończyny górnej wchodzą: kości obręczy górnej (łopatka i obojczyk) oraz kości kończyny górnej wolnej (kość ramienna, kości przedramienia — łokciowa i promieniowa, oraz kości dłoni — nadgarstka, śródręcza i palców).",
        },
        {
          type: "paragraph",
          text: "Obojczyk łączy rękojeść mostka z wyrostkiem barkowym łopatki, zapewniając połączenie kończyny ze szkieletem osiowym. Bruzda nerwu promieniowego leży na kości ramiennej (pytanie nr 30). Kość łokciowa łączy się stawowo z 2 kośćmi (pytanie nr 29).",
        },
        {
          type: "heading",
          level: 3,
          text: "Staw ramienny",
        },
        {
          type: "paragraph",
          text: "Podczas zwichnięcia stawu ramiennego najłatwiej można uszkodzić nerw pachowy (pytanie nr 1). Ramię w stawie ramiennym odwodzi mięsień naramienny część boczna (pytanie nr 21). Ścięgno mięśnia leży wewnątrz stawu ramiennego (pytanie nr 40).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-10",
          question: "Jaki nerw najłatwiej uszkodzić podczas zwichnięcia stawu ramiennego?",
          answer: "Nerw pachowy.",
          examRef: "Q1",
        },
        {
          id: "ost-11",
          question: "Na której kości leży bruzda nerwu promieniowego?",
          answer: "Na kości ramiennej.",
          examRef: "Q30",
        },
        {
          id: "ost-12",
          question: "Z iloma kośćmi łączy się stawowo kość łokciowa?",
          answer: "Z 2 kośćmi.",
          examRef: "Q29",
        },
      ],
    },
    {
      id: "konczyna-dolna",
      title: "Kościec kończyny dolnej",
      content: [
        {
          type: "paragraph",
          text: "W skład kośćca kończyny dolnej wchodzą: kości obręczy dolnej (kości miedniczne — biodrowa, kulszowa, łonowa) oraz kości kończyny dolnej wolnej (kość udowa, rzepka, kości podudzia — piszczelowa i strzałkowa, oraz kości stopy).",
        },
        {
          type: "paragraph",
          text: "Główkę w stawie skokowym górnym tworzy kość skokowa (pytanie nr 32). Więzadłem najsilniej ograniczającym prostowanie uda jest więzadło biodrowo-udowe (pytanie nr 22).",
        },
        {
          type: "paragraph",
          text: "Główka należy do kości: humerus (ramienna) i femur (udowa) — pytanie nr 34.",
        },
        {
          type: "heading",
          level: 3,
          text: "Stawy — ruchy",
        },
        {
          type: "paragraph",
          text: "Ruch odwodzenia może zajść w stawie: szczytowo-potylicznym, biodrowym i ramiennym (pytanie nr 36). Celem nawrócenia ręki (pronacji) należy zaangażować 3 stawy (pytanie nr 19).",
        },
      ],
      recallQuestions: [
        {
          id: "ost-13",
          question: "Która kość tworzy główkę w stawie skokowym górnym?",
          answer: "Kość skokowa (talus).",
          examRef: "Q32",
        },
        {
          id: "ost-14",
          question: "Które więzadło najsilniej ogranicza prostowanie uda?",
          answer: "Więzadło biodrowo-udowe.",
          examRef: "Q22",
        },
        {
          id: "ost-15",
          question: "Jakie stawy umożliwiają ruch odwodzenia?",
          answer: "Staw szczytowo-potyliczny, biodrowy i ramienny.",
          examRef: "Q36",
        },
      ],
    },
  ],
};
