import os
from pypdf import PdfReader

def pdf_to_text(pdf_path, txt_path):
    print(f"Konwertuje: {os.path.basename(pdf_path)}...")
    try:
        reader = PdfReader(pdf_path)
        with open(txt_path, "w", encoding="utf-8") as f:
            for i, page in enumerate(reader.pages):
                text = page.extract_text()
                if text:
                    f.write(f"\n--- STRONA {i+1} ---\n")
                    f.write(text)
        print(f"Sukces! Zapisano: {os.path.basename(txt_path)}")
    except Exception as e:
        print(f"Blad przy pliku {pdf_path}: {e}")

# Wykrywanie folderu
base_dir = os.path.dirname(os.path.abspath(__file__))
subjects = ["anatomia", "biologia", "chemia"]

for subject in subjects:
    folder_path = os.path.join(base_dir, "materiały-źródłowe", subject)
    if os.path.exists(folder_path):
        print(f"\n=== KONWERSJA: {subject.upper()} ===")
        for file in os.listdir(folder_path):
            if file.lower().endswith(".pdf"):
                full_pdf_path = os.path.join(folder_path, file)
                full_txt_path = os.path.join(folder_path, file[:-4] + ".txt")
                if not os.path.exists(full_txt_path):
                    pdf_to_text(full_pdf_path, full_txt_path)
                else:
                    print(f"Pominieto (juz istnieje): {file[:-4]}.txt")