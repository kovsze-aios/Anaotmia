import docx

doc = docx.Document("materiały-źródłowe/anatomia/Test.docx")
for para in doc.paragraphs:
    if para.text.strip():
        print(para.text[:50])
        break
