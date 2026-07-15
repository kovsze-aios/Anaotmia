import os

# Próba importu właściwej klasy w zależności od wersji biblioteki rapidocr-pdf
try:
    from rapidocr_pdf import RapidOCRPDF as PDFExtractor
except ImportError:
    try:
        from rapidocr_pdf import PDFExtracter as PDFExtractor
    except ImportError:
        print("Blad: Nie mozna zaimportowac zadnej klasy z rapidocr_pdf. Upewnij sie, ze biblioteka jest zainstalowana.")
        exit(1)

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    subjects = ["anatomia", "biologia", "chemia"]
    
    print("Inicjalizacja silnika OCR (ladowanie modeli)...")
    try:
        extractor = PDFExtractor()
    except Exception as e:
        print(f"Blad inicjalizacji: {e}")
        return
    
    for subject in subjects:
        folder_path = os.path.join(base_dir, "materiały-źródłowe", subject)
        if os.path.exists(folder_path):
            print(f"\n=== URUCHAMIANIE OCR (AI): {subject.upper()} ===")
            for file in os.listdir(folder_path):
                if file.lower().endswith(".pdf"):
                    pdf_path = os.path.join(folder_path, file)
                    txt_path = os.path.join(folder_path, file[:-4] + ".txt")
                    
                    # Jeśli plik .txt istnieje i nie jest pusty (ma powyżej 1 KB), omijamy go
                    if os.path.exists(txt_path) and os.path.getsize(txt_path) > 1024:
                        print(f"Pominieto (juz istnieje): {file[:-4]}.txt")
                        continue
                        
                    print(f"Przetwarzanie dokumentu OCR: {file}...")
                    try:
                        # Wyciąganie tekstu z PDF przy użyciu sieci neuronowych
                        results = extractor(pdf_path, force_ocr=True)
                        
                        if not results:
                            print(f"Brak tekstu do wyciagniecia z {file}")
                            continue
                            
                        text_lines = []
                        for item in results:
                            if len(item) >= 2:
                                page_num = item[0]
                                page_text = item[1]
                                if page_text:
                                    text_lines.append(f"\n--- STRONA {page_num + 1} ---\n{page_text}")
                        
                        full_text = "\n".join(text_lines)
                        
                        with open(txt_path, "w", encoding="utf-8") as f:
                            f.write(full_text)
                        print(f"Sukces! Zapisano: {file[:-4]}.txt ({len(full_text)} znakow)")
                        
                    except Exception as e:
                        print(f"Blad przy OCR pliku {file}: {e}")

if __name__ == "__main__":
    main()