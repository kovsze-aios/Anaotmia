import os
import re
import json

def clean_text(text, is_chemistry=False):
    # Merge broken lines using negative lookahead, preserve double newlines
    text = re.sub(r'([^\n])\n(?!\n)', r'\1 ', text)
    # Strip pagination artifacts
    text = re.sub(r'---\s*STRONA\s*\d+\s*---', '', text)
    # Strip visual description artifacts
    text = re.sub(r'Ryc\..*?(?=\n\n|\Z)', '', text, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r'Rycina\b.*?(?=\n\n|\Z)', '', text, flags=re.IGNORECASE | re.DOTALL)
    # Strip footnotes (basic approximation)
    text = re.sub(r'^\*.*?\n', '', text, flags=re.MULTILINE)

    if is_chemistry:
        # Standardize formulas and arrows
        text = text.replace('->', '→')
        # Typical OCR fixes for chemistry
        text = text.replace('MnO4-', 'MnO₄⁻')
        text = text.replace('MnO4', 'MnO₄')

    # Clean up excess whitespace
    text = re.sub(r' {2,}', ' ', text)
    return text.strip()

def process_domain(name, src_dir, out_file, is_chemistry=False):
    academic_detail_parts = []
    matura_questions = []

    if os.path.exists(src_dir):
        for root, dirs, files in os.walk(src_dir):
            for file in sorted(files):
                if file.endswith('.txt'):
                    path = os.path.join(root, file)
                    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()

                    cleaned = clean_text(content, is_chemistry)

                    # Heuristic to separate CKE matura questions based on file paths/names
                    is_cke = '2015' in path or '2016' in path or '2017' in path or '2018' in path or '2019' in path or '2020' in path or '2021' in path or '2022' in path or '2023' in path or '2024' in path or 'zasady' in file.lower() or 'zadania maturalne' in file.lower()

                    if is_cke:
                        # Extract chunks of questions
                        questions = cleaned.split('\n\n')
                        for q in questions:
                            if q.strip():
                                matura_questions.append(q.strip())
                    else:
                        academic_detail_parts.append(cleaned)

    academic_detail = "\n\n".join(academic_detail_parts)

    # Anatomy specifics
    if name == "anatomia":
        academic_detail += "\n\nZasada 3 warstw ściany serca (3x ventricular wall rule): Wsierdzie (Endocardium), Śródsierdzie (Myocardium), Osierdzie (Epicardium)."
        academic_detail += "\n\nRdzeń kręgowy - przekroje (spinal cord cross-sections): Istota szara tworzy rogi przednie (ruchowe), tylne (czuciowe) i boczne (współczulne). Istota biała tworzy sznury przednie, boczne i tylne."
        academic_detail += "\n\nPrzebieg tętnic kończyny górnej (upper limb arterial tracking): Tętnica pachowa (a. axillaris) → tętnica ramienna (a. brachialis) → podział na tętnicę promieniową (a. radialis) i tętnicę łokciową (a. ulnaris)."

    # Group CKE matura questions exclusively at the bottom
    cke_tasks_section = {
        "id": f"{name}-cke-tasks",
        "title": f"Zadania CKE - {name.capitalize()}",
        "summary": "Zbiorcze zadania maturalne CKE. Uzupełnij luki: __________.",
        "academic_detail": "Sekcja zawiera wyłącznie zgrupowane zadania maturalne CKE.",
        "content": [{"type": "paragraph", "text": "Zadania CKE:"}],
        "recallQuestions": [],
        "maturaQuestions": matura_questions
    }

    main_section = {
        "id": f"{name}-main",
        "title": f"Podstawy - {name.capitalize()}",
        "summary": "Ważna esencja teoretyczna do powtórki. Pamiętaj o: __________.",
        "academic_detail": academic_detail,
        "content": [{"type": "paragraph", "text": "Wprowadzenie do teorii."}],
        "recallQuestions": []
    }

    ts_content = f"""import type {{ TextbookDomain }} from "../../server/models";

export const {name}Theory: TextbookDomain[] = [
  {{
    id: "{name}-domain",
    title: "{name.capitalize()}",
    shortTitle: "{name.capitalize()}",
    sections: [
      {json.dumps(main_section, indent=6, ensure_ascii=False)},
      {json.dumps(cke_tasks_section, indent=6, ensure_ascii=False)}
    ]
  }}
];
"""
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Generated {out_file}")

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src_base = os.path.join(base_dir, 'materiały-źródłowe')
    out_base = os.path.join(base_dir, 'src', 'data')

    process_domain('anatomia', os.path.join(src_base, 'anatomia'), os.path.join(out_base, 'anatomia', 'theory.ts'))
    process_domain('biologia', os.path.join(src_base, 'biologia'), os.path.join(out_base, 'biologia', 'theory.ts'))
    process_domain('chemia', os.path.join(src_base, 'chemia'), os.path.join(out_base, 'chemia', 'theory.ts'), True)

if __name__ == '__main__':
    main()
