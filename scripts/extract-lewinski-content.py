import fitz, sys, re, json
sys.stdout.reconfigure(encoding='utf-8')

doc = fitz.open(r'C:/DAWID_PRACE/Anatomia/Anatomia i fizjologia człowieka (Waldemar Lewiński) (Z-Library).pdf')

# Define search terms per domain
domains = {
    "osteology": ["kości", "szkielet", "czaszka", "kręgosłup", "kręg", "mostek", "żebra",
                  "kończyna górna", "kończyna dolna", "staw", "chrząstka", "więzadł",
                  "kość ramienna", "kość promieniowa", "kość łokciowa", "kość udowa",
                  "kość piszczelowa", "kość strzałkowa", "kość skokowa", "miednica",
                  "obojczyk", "łopatka", "rzepka"],
    "myology": ["mięsień", "mięśniowy", "skurcz mięśnia", "mięsień szkieletowy",
                "mięsień gładki", "mięsień sercowy", "prążkowany", "sarkomer",
                "śródmięsie", "rozrusznik", "mięsień czworogłowy", "mięsień naramienny",
                "przepona", "mięsień międzyżebrowy", "mięsień żuciowy", "zginacz", "prostownik"],
    "nervous": ["nerw", "mózg", "mózgowie", "rdzeń kręgowy", "neuron", "synapsa",
                "ośrodkowy układ nerwowy", "obwodowy układ nerwowy", "móżdżek",
                "kora mózgowa", "droga korowo-rdzeniowa", "nerw czaszkowy",
                "nerw rdzeniowy", "splot ramienny", "opona", "komora mózgu",
                "nerw promieniowy", "nerw pachowy", "nerw twarzowy", "nerw trójdzielny",
                "nerw błędny", "nerw żuchwowy", "nerw szczękowy", "pień mózgu",
                "wzgórze", "podwzgórze", "przysadka"],
    "endocrine": ["hormon", "gruczoł dokrewny", "tarczyca", "przytarczyce", "nadnercza",
                  "grasica", "szyszynka", "trzustka", "przysadka", "podwzgórze",
                  "tyroksyna", "insulina", "glukagon", "kortyzol", "adrenalina"],
    "cardiovascular": ["serce", "tętnica", "żyła", "naczynie krwionośne", "aorta",
                       "płuco", "oskrzela", "krtań", "tchawica", "pęcherzyki płucne",
                       "krążenie płucne", "krążenie duże", "mięsień sercowy",
                       "żyła wrotna", "żyła główna", "tętnica płucna", "żyła płucna",
                       "osierdzie", "wsierdzie", "nasierdzie", "śródosierdzie",
                       "chrząstka tarczowata", "chrząstka nalewkowata",
                       "chrząstka pierścieniowata", "nagłośnia"],
    "digestive": ["żołądek", "jelito", "dwunastnica", "jelito czcze", "jelito kręte",
                  "wątroba", "trzustka", "przełyk", "jama ustna", "gardło",
                  "układ trawienny", "jelito grube", "esica", "okrężnica",
                  "odbytnica", "żyła wrotna", "kosmek jelitowy", "trzustka"],
    "urinary_reproductive": ["nerka", "nefron", "moczowód", "pęcherz moczowy",
                             "cewka moczowa", "nerka", "układ moczowy",
                             "macica", "jajnik", "jajowód", "jądro", "nasieniowód",
                             "przewód wytryskowy", "gruczoł krokowy", "pochwa",
                             "układ rozrodczy", "srom"],
    "sensory": ["oko", "siatkówka", "rogówka", "soczewka", "źrenica", "ciało szkliste",
                "ucho", "ślimak", "błędnik", "przychłonka", "śródchłonka",
                "narząd słuchu", "narząd wzroku", "smak", "węch", "skóra",
                "receptor", "narząd zmysłu", "trąbka słuchowa", "kosteczki słuchowe"]
}

def extract_pages_around(doc, terms, context_pages=2):
    """Search for terms and return surrounding pages"""
    results = {}
    for term in terms:
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            if term.lower() in text.lower():
                start = max(0, page_num - context_pages)
                end = min(len(doc), page_num + context_pages + 1)
                key = f"p{page_num+1}"
                if key not in results:
                    results[key] = []
                # Get a snippet
                for line in text.split('\n'):
                    if term.lower() in line.lower():
                        results[key].append(line.strip()[:200])
                break
    return results

# Extract content for each domain
all_content = {}
for domain_name, terms in domains.items():
    print(f"\n=== Searching {domain_name} ===")
    domain_pages = set()
    for term in terms:
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            if term.lower() in text.lower():
                domain_pages.add(page_num)
                break

    print(f"  Found on pages: {sorted([p+1 for p in domain_pages])}")

    # Extract full text from relevant pages
    pages_content = {}
    for pn in sorted(domain_pages):
        page = doc[pn]
        text = page.get_text()
        pages_content[pn+1] = text[:2000]

    all_content[domain_name] = pages_content

# Save all extracted content to a JSON file
with open('docs/research/lewinski-extracted-content.json', 'w', encoding='utf-8') as f:
    json.dump(all_content, f, ensure_ascii=False, indent=2)

print(f"\n\n=== Extraction complete. Saved to docs/research/lewinski-extracted-content.json ===")
print(f"Pages found per domain:")
for domain, pages in all_content.items():
    print(f"  {domain}: {len(pages)} pages = {sorted(pages.keys())}")

doc.close()
