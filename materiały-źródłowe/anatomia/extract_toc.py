import fitz

doc = fitz.open(r'C:/DAWID_PRACE/Anatomia/Anatomia Człowieka Tom 1 Anatomia Ogólna, kości, stawy i więzadła, mięśnie. (Adam Bochenek, Michał Reicher) (Z-Library).pdf')
toc = doc.get_toc()
for item in toc[:100]:
    print(f"{'  '*(item[0]-1)}[{item[0]}] {item[1]} -> p.{item[2]}")
doc.close()
