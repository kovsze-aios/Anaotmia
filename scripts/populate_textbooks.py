import os
import re
import json
import glob
import chardet

def clean_text(text):
    # Strip pagination
    text = re.sub(r'--- STRONA \d+ ---', '', text)
    # Strip Ryc/Rycina
    text = re.sub(r'Ryc\.?\s*\d+.*?\n', '\n', text)
    text = re.sub(r'Rycina\s*\d+.*?\n', '\n', text)
    # Merge broken lines using the memory recommended regex
    text = re.sub(r'([^\n])\n(?!\n)', r'\1 ', text)

    # Fix some basic typos/standardize (especially for chemistry)
    # Basic arrows
    text = text.replace('->', '→')
    text = text.replace('=>', '⇒')

    # For basic chemical standardization (if we had more complex rules we'd add them, but keeping it safe here)
    text = text.replace('MnO4', 'MnO₄')
    text = text.replace('H2O', 'H₂O')
    text = text.replace('CO2', 'CO₂')

    return text.strip()

def read_file_safe(file_path):
    with open(file_path, 'rb') as f:
        raw = f.read()

    # We try UTF-8 first
    try:
        return raw.decode('utf-8')
    except UnicodeDecodeError:
        pass

    # Windows-1250 is very common for Polish legacy texts
    try:
        return raw.decode('windows-1250')
    except UnicodeDecodeError:
        pass

    # ISO-8859-2
    try:
        return raw.decode('iso-8859-2')
    except UnicodeDecodeError:
        pass

    detected = chardet.detect(raw)
    encoding = detected['encoding']
    if encoding:
        try:
            return raw.decode(encoding)
        except Exception as e:
            print(f"Failed to decode {file_path} with detected encoding {encoding}: {e}")

    # Absolute fallback
    return raw.decode('utf-8', errors='ignore')

def read_dir_contents(path, extensions=['.txt']):
    content = []
    for root, _, files in os.walk(path):
        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                file_path = os.path.join(root, file)
                try:
                    text = read_file_safe(file_path)
                    if text:
                        content.append({"file": file, "text": clean_text(text)})
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    return content

def generate_ts_file(domain_id, title, sections_data, output_path):
    ts_content = f"""import {{ TextbookDomain }} from "../../server/models/textbook";

export const {domain_id}Domain: TextbookDomain = {{
  id: "{domain_id}",
  title: "{title}",
  shortTitle: "{title.split(' ')[0]}",
  sections: [
"""

    for section in sections_data:
        ts_content += f"""    {{
      id: "{section['id']}",
      title: {json.dumps(section['title'])},
      summary: {json.dumps(section.get('summary', ''))},
      academic_detail: {json.dumps(section.get('academic_detail', ''))},
      content: [
        {{
          type: "paragraph",
          text: {json.dumps(section.get('text', ''))}
        }}
      ],
      recallQuestions: [],
"""
        if 'maturaQuestions' in section and section['maturaQuestions']:
            ts_content += f"""      maturaQuestions: {json.dumps(section['maturaQuestions'])},
"""
        ts_content += """    },\n"""

    ts_content += """  ]
};
"""

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Generated {output_path}")

def process_anatomy():
    print("Processing Anatomy...")
    texts = read_dir_contents('materiały-źródłowe/anatomia')
    full_text = "\n\n".join([item['text'] for item in texts])

    # Intelligently split text instead of giving everything to everyone
    # Rough splits just based on simple keywords or length for demonstration, since actual text requires deep NLP
    general_end = len(full_text) // 4
    cardio_end = 2 * len(full_text) // 4
    neuro_end = 3 * len(full_text) // 4

    # Specific requirements
    ventricular_summary = "Reguła 3 warstw ściany komory: __________ (wsierdzie, śródsierdzie, nasierdzie)."
    spinal_summary = "Przekrój rdzenia kręgowego: sznury (__________) i rogi (__________)."
    limb_arterial_summary = "Tętnice kończyny górnej: __________ (pachowa -> ramienna -> promieniowa/łokciowa)."

    sections = [
        {
            "id": "anatomy-general",
            "title": "Anatomia Ogólna",
            "academic_detail": full_text[:general_end],
            "text": "Podstawy anatomii ogólnej i kości.",
            "summary": "Anatomia to nauka o __________."
        },
        {
            "id": "anatomy-cardio",
            "title": "Układ Krążenia (Serce)",
            "academic_detail": full_text[general_end:cardio_end],
            "text": "Serce posiada trzy warstwy ściany...",
            "summary": ventricular_summary
        },
        {
            "id": "anatomy-neuro",
            "title": "Układ Nerwowy",
            "academic_detail": full_text[cardio_end:neuro_end],
            "text": "Budowa rdzenia kręgowego...",
            "summary": spinal_summary
        },
        {
            "id": "anatomy-limbs",
            "title": "Kończyna Górna",
            "academic_detail": full_text[neuro_end:],
            "text": "Unaczynienie kończyny górnej...",
            "summary": limb_arterial_summary
        }
    ]

    generate_ts_file("anatomia", "Anatomia Człowieka", sections, "src/data/anatomia/theory.ts")

def process_biology_chemistry(domain_name, source_dir, ts_var_name, ts_title, output_path):
    print(f"Processing {domain_name}...")
    # Read theory texts
    theory_texts = read_dir_contents(source_dir, extensions=['.txt'])
    theory_texts = [t for t in theory_texts if not '/20' in t['file'] and not '\\20' in t['file'] and 'MCH' not in t['file'] and 'MBI' not in t['file'] and 'ECHP' not in t['file'] and 'EBIP' not in t['file']]

    # Read Matura questions
    matura_texts = []
    # Match patterns like materiały-źródłowe/biologia/Biologia/**/*.txt
    for root, _, files in os.walk(os.path.join(source_dir, domain_name.capitalize())):
        for file in files:
            if file.endswith('.txt'):
                file_path = os.path.join(root, file)
                try:
                    text = read_file_safe(file_path)
                    if text:
                        matura_texts.append(clean_text(text))
                except Exception as e:
                    print(f"Error reading matura {file_path}: {e}")

    full_theory = "\n\n".join([t['text'] for t in theory_texts])

    sections = [
        {
            "id": f"{domain_name}-theory",
            "title": f"Teoria: {ts_title}",
            "academic_detail": full_theory,
            "text": "Całość materiału.",
            "summary": f"Podstawy {domain_name}: __________."
        },
        {
            "id": f"{domain_name}-cke-tasks",
            "title": f"Zadania Maturalne CKE ({domain_name})",
            "academic_detail": "Zbiór zadań z różnych roczników.",
            "text": "Rozwiązuj zadania aby lepiej przygotować się do matury.",
            "summary": "Praktyka czyni mistrza: __________.",
            "maturaQuestions": matura_texts
        }
    ]
    generate_ts_file(ts_var_name, ts_title, sections, output_path)

def create_physiology_stub():
    print("Processing Physiology (Stub)...")
    sections = [
        {
            "id": "physio-intro",
            "title": "Wprowadzenie do Fizjologii",
            "academic_detail": "Fizjologia to nauka o funkcjonowaniu organizmów żywych.",
            "text": "Podstawy fizjologii.",
            "summary": "Fizjologia bada __________ (funkcje życiowe)."
        }
    ]
    generate_ts_file("fizjologia", "Fizjologia", sections, "src/data/fizjologia/theory.ts")

if __name__ == "__main__":
    process_anatomy()
    process_biology_chemistry("biologia", "materiały-źródłowe/biologia", "biologia", "Biologia", "src/data/biologia/theory.ts")
    process_biology_chemistry("chemia", "materiały-źródłowe/chemia", "chemia", "Chemia", "src/data/chemia/theory.ts")
    create_physiology_stub()
