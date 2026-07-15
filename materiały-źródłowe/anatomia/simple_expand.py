#!/usr/bin/env python3
"""Minimal safe CKE task injector - ASCII only."""
import os

BASE = r"C:\DAWID_PRACE\Anatomia\anatomy-3d\src\data"

def readf(p):
    with open(p, 'r', encoding='utf-8') as f:
        return f.read()

def writef(p, c):
    with open(p, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"  Wrote {os.path.basename(p)}: {len(c):,} chars")

# Biology extra tasks
bio = """
  { id: "cke-bio-18", year: 2015, taskNumber: "18", chapter: "Cytologia",
    question: "Wyjasnij zjawisko plazmolizy i deplazmolizy w komorkach roslinnych. W jakich warunkach zachodza?",
    answer: "Plazmoliza - odstawanie protoplastu od sciany komorkowej w roztworze hipertonicznym. Deplazmoliza - powrot protoplastu po przeniesieniu do roztworu hipotonicznego. Procesy te sa odwracalne tylko do pewnego stopnia - zbyt silna plazmoliza powoduje smierc komorki." },
  { id: "cke-bio-19", year: 2016, taskNumber: "19", chapter: "Metabolizm",
    question: "Porownaj fotosynteze C3, C4 i CAM pod wzgledem pierwszego produktu karboksylacji, anatomii liscia i wydajnosci wodnej.",
    answer: "C3: pierwszy produkt 3-PGA, chloroplasty w mezofilu, wydajnosc ~500 g H2O/g CO2. C4: szczawiooctan, anatomia Kranza, wydajnosc ~250. CAM: jablczan w nocy, sukulenty, wydajnosc ~50-100. C4 i CAM minimalizuja fotooddychanie w warunkach suchych i goracych." },
  { id: "cke-bio-20", year: 2017, taskNumber: "20", chapter: "Genetyka",
    question: "Wyjasnij mechanizm dziedziczenia mitochondrialnego. Dlaczego choroby mitochondrialne dziedzicza sie wylacznie po matce?",
    answer: "mtDNA znajduje sie w mitochondriach. Podczas zaplodnienia mitochondria plemnika sa degradowane - zygota otrzymuje mitochondria tylko od matki. Dzieci kobiety z mutacja mtDNA dziedzicza ja. Choroby: LHON, MELAS, zespol Leigha." },
  { id: "cke-bio-21", year: 2018, taskNumber: "21", chapter: "Anatomia czlowieka",
    question: "Wymien co najmniej 5 funkcji watroby niezwiqzanych bezposrednio z trawieniem.",
    answer: "1) Detoksykacja (cytochrom P450). 2) Magazynowanie witamin (A, D, B12) i zelaza (ferrytyna). 3) Fagocytoza (komorki Kupffera). 4) Termogeneza (najcieplejszy narzad). 5) Synteza heparyny. 6) Degradacja hormonow. 7) Synteza bialek osocza (albuminy, czynniki krzepniecia)." },
  { id: "cke-bio-22", year: 2019, taskNumber: "22", chapter: "Botanika",
    question: "Wyjasnij mechanizm otwierania i zamykania aparatow szparkowych. Jakie czynniki reguluja ten proces?",
    answer: "Komorki szparkowe gromadza K+ -> naplyw H2O -> wzrost turgoru -> wygiecie -> szpara otwarta. Zamykanie: wyplyw K+ i H2O. Regulacja: swiatlo niebieskie (fototropina), niskie CO2 (otwiera), deficyt wody -> ABA (zamyka), rytm dobowy." },
  { id: "cke-bio-23", year: 2020, taskNumber: "23", chapter: "Zoologia",
    question: "Porownaj uklad krwionosny ryb, plazow, gadow, ptakow i ssakow.",
    answer: "Ryby: serce dwuczesciowe, jeden obieg. Plazy: serce trojjamowe, czesciowe mieszanie krwi. Gady: trojjamowe z niepelna przegroda. Krokodyle/ptaki/ssaki: czterojamowe, calkowite rozdzielenie krwi. Im pelniejsze rozdzielenie, tym wydajniejszy transport O2 -> szybszy metabolizm -> endotermia." },
  { id: "cke-bio-24", year: 2021, taskNumber: "24", chapter: "Ekologia",
    question: "Wyjasnij pojecie sukcesji ekologicznej. Rozroznij sukcesje pierwotna i wtorna.",
    answer: "Sukcesja - kierunkowy proces zmian skladu gatunkowego biocenozy do ekosystemu klimaksowego. Pierwotna: na terenie niezasiedlonym (skala, lawa) - porosty -> trawy -> krzewy -> las. Wtorna: na terenie zniszczonym z zachowana gleba (pozar, pole) - szybciej. Zmiany: wzrost biomasy, bioroznorodnosci, rozwoj gleby." },
  { id: "cke-bio-25", year: 2022, taskNumber: "25", chapter: "Ewolucjonizm",
    question: "Czym rozni sie dryf genetyczny od doboru naturalnego? Kiedy dryf odgrywa istotna role?",
    answer: "Dobor naturalny - nielosowy, allele korzystne staja sie czestsze. Dryf - losowe zmiany czestosci alleli, niezalezne od dostosowania. Istotny w malych populacjach, przy efekcie zalozyciela i efekcie waskiego gardla. Dryf zmniejsza roznorodnosc genetyczna." },
  { id: "cke-bio-26", year: 2023, taskNumber: "26", chapter: "Anatomia czlowieka",
    question: "Opisz regulacje wydzielania hormonow tarczycy na osi podwzgorze-przysadka-tarczyca.",
    answer: "Podwzgorze -> TRH -> przysadka -> TSH -> tarczyca -> T3/T4. Ujemne sprzezenie: wysokie T3/T4 hamuje TRH i TSH. W chorobie Gravesa-Basedowa autoprzeciwciala anty-TSHR nasladuja TSH -> nadczynnosc." },
  { id: "cke-bio-27", year: 2024, taskNumber: "27", chapter: "Metabolizm",
    question: "Wyjasnij role chemiosmozy w syntezie ATP w mitochondriach i chloroplastach.",
    answer: "Oba wykorzystuja gradient protonowy do napedzania syntazy ATP (teoria Mitchella). Mitochondria: H+ z macierzy do przestrzeni miedzyblonowej, akceptor O2. Chloroplasty: H+ ze stromy do swiatla tylakoidu, zrodlo energii: swiatlo, akceptor NADP+." },
"""

# Chemistry extra tasks
chem = """
  { id: "cke-chem-18", year: 2015, taskNumber: "18", chapter: "Chemia organiczna",
    question: "Dlaczego fenol jest slabszym kwasem niz kwas octowy, ale silniejszym niz etanol?",
    answer: "Moc kwasu zalezy od stabilnosci anionu. Fenolan stabilizowany rezonansem. Jon octanowy silniej stabilizowany (ladunek na 2 atomach O). Etanolan bez stabilizacji. Stad: CH3COOH (pKa~4,8) > C6H5OH (pKa~10) > C2H5OH (pKa~16)." },
  { id: "cke-chem-19", year: 2017, taskNumber: "19", chapter: "Chemia ogolna",
    question: "Oblicz entalpie reakcji 2H2(g) + O2(g) -> 2H2O(g) na podstawie energii wiazan: E(H-H)=436, E(O=O)=498, E(O-H)=464 kJ/mol.",
    answer: "Delta H = (2x436 + 498) - (4x464) = 1370 - 1856 = -486 kJ/mol. Reakcja silnie egzotermiczna." },
  { id: "cke-chem-20", year: 2018, taskNumber: "20", chapter: "Chemia nieorganiczna",
    question: "Opisz procesy na elektrodach podczas elektrolizy wodnego CuSO4 z anoda miedziana.",
    answer: "Anoda Cu: Cu -> Cu2+ + 2e- (roztwarzanie). Katoda: Cu2+ + 2e- -> Cu (osadzanie). Elektrorafinacja miedzi." },
  { id: "cke-chem-21", year: 2019, taskNumber: "21", chapter: "Chemia organiczna",
    question: "Napisz rownanie polimeryzacji kondensacyjnej kwasu 6-aminoheksanowego do nylonu 6.",
    answer: "n H2N-(CH2)5-COOH -> [-NH-(CH2)5-CO-]n + n H2O. Wiazanie amidowe -CO-NH-. Nylon 6." },
  { id: "cke-chem-22", year: 2020, taskNumber: "22", chapter: "Chemia ogolna",
    question: "Oblicz Kc dla N2 + 3H2 = 2NH3, gdy [N2]=0,5M, [H2]=1,0M, [NH3]=0,8M.",
    answer: "Kc = 0,64 / 0,5 = 1,28 [dm6/mol2]." },
  { id: "cke-chem-23", year: 2021, taskNumber: "23", chapter: "Chemia nieorganiczna",
    question: "Dlaczego HF trawi szklo, a HCl, HBr, HI nie?",
    answer: "SiO2 + 4HF -> SiF4 + 2H2O. Wiazanie Si-F (~565 kJ/mol) bardzo silne. Inne halogenowodory nie reaguja. HF w PE lub PTFE." },
  { id: "cke-chem-24", year: 2022, taskNumber: "24", chapter: "Chemia organiczna",
    question: "Dlaczego fruktoza (ketoza) daje pozytywna probe Tollensa?",
    answer: "W srodowisku zasadowym fruktoza enolizuje i izomeryzuje do glukozy (przemiana Lobry de Bruyn-van Ekensteina). Glukoza daje pozytywna probe." },
  { id: "cke-chem-25", year: 2023, taskNumber: "25", chapter: "Chemia ogolna",
    question: "Wyjasnij pasywacje glinu i zelaza w stezonym HNO3.",
    answer: "Stezony HNO3 tworzy szczelna warstwe tlenku (Al2O3, Fe3O4) chroniaca przed dalszym atakiem. Rozcienczony nie pasywuje." },
"""

if __name__ == "__main__":
    print("SAFE EXPANSION - CKE Tasks Only")
    print("=" * 40)

    bio_path = os.path.join(BASE, "biologia", "domain-01-biology.ts")
    c = readf(bio_path)
    pos = c.rfind("];")
    if pos > 0:
        c = c[:pos] + bio + "\n];" + c[pos+2:]
        writef(bio_path, c)
        print(f"  Biology: +{bio.count('id:')} CKE tasks")

    chem_path = os.path.join(BASE, "chemia", "domain-01-chemistry.ts")
    c = readf(chem_path)
    pos = c.rfind("];")
    if pos > 0:
        c = c[:pos] + chem + "\n];" + c[pos+2:]
        writef(chem_path, c)
        print(f"  Chemistry: +{chem.count('id:')} CKE tasks")

    print("\nDone!")
