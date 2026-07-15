import fitz

doc = fitz.open(r'C:/DAWID_PRACE/Anatomia/Anatomia i fizjologia człowieka (Waldemar Lewiński) (Z-Library).pdf')

# Extract key pages for Femur, Pelvis, Skull
pages_of_interest = {
    'skull': list(range(11, 16)),       # pages 12-16 (0-indexed: 11-15)
    'pelvis': list(range(16, 20)),      # pages 17-21
    'femur': list(range(17, 22)),       # pages 18-23
}

# First search for "miednica" or "miednic" or "kości miedniczne"
print("=== SEARCHING FOR PELVIS/MIEDNICA ===")
for page_num in range(len(doc)):
    page = doc[page_num]
    t = page.get_text()
    if 'miednic' in t.lower():
        lines = [l.strip() for l in t.split('\n') if 'miednic' in l.lower()]
        for line in lines[:5]:
            print(f'p{page_num+1}: {line[:150]}')

print("\n=== SEARCHING FOR FEMUR DETAILS ===")
for page_num in range(len(doc)):
    page = doc[page_num]
    t = page.get_text()
    if 'udowa' in t.lower():
        lines = [l.strip() for l in t.split('\n') if 'udowa' in l.lower()]
        for line in lines[:5]:
            print(f'p{page_num+1}: {line[:150]}')

print("\n=== PAGES 17-22 FULL TEXT (Lower limb / Femur area) ===")
for pn in range(16, 23):
    page = doc[pn]
    t = page.get_text()
    print(f'\n--- Page {pn+1} ---')
    print(t[:2000])

doc.close()
