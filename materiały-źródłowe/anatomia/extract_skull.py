import fitz

doc = fitz.open(r'C:/DAWID_PRACE/Anatomia/Anatomia i fizjologia człowieka (Waldemar Lewiński) (Z-Library).pdf')

print("=== SKULL PAGES (11-16) ===")
for pn in range(10, 17):
    page = doc[pn]
    t = page.get_text()
    print(f'\n--- Page {pn+1} ---')
    print(t[:2500])

print("\n\n=== PELVIS SEARCH - full page 18 ===")
page = doc[17]
print(page.get_text()[:3000])

doc.close()
