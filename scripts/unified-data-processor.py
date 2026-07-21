import os
import json
import re
import random

random.seed(42)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_MTR_DIR = os.path.join(BASE_DIR, "materiały-źródłowe")
DEST_DIR = os.path.join(BASE_DIR, "src", "data")

def clean_ocr(text):
    text = re.sub(r'\b(Ryc\.|Rycina|Tab\.|Tabela)\s+\d+.*?(?=\n|$)', '', text, flags=re.IGNORECASE)
    text = re.sub(r'---\s*STRONA\s+\d+\s*---', '', text, flags=re.IGNORECASE)
    text = text.replace('MnO4', 'MnO₄')
    text = text.replace('H2SO4', 'H₂SO₄')
    text = text.replace('CO2', 'CO₂')
    text = text.replace('O2', 'O₂')
    text = text.replace('H2O', 'H₂O')
    text = text.replace('->', '→')
    text = text.replace('=>', '⇒')
    return text.strip()

def clean_detail_text(text):
    text = clean_ocr(text)
    # user directive: merge broken lines by replacing single newlines with a space using the regex (?<!\n)\n(?!\n)
    text = re.sub(r'(?<!\n)\n(?!\n)', ' ', text)
    text = re.sub(r' {2,}', ' ', text)
    return text.strip()

def extract_content(file_path):
    for enc in ['utf-8', 'windows-1250', 'iso-8859-2']:
        try:
            with open(file_path, "r", encoding=enc) as f:
                return clean_detail_text(f.read())
        except UnicodeDecodeError:
            pass
    return ""

def read_text_files(directory):
    texts = {}
    matura_texts = []
    if not os.path.exists(directory):
        return texts, matura_texts
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.txt'):
                file_path = os.path.join(root, file)
                content = extract_content(file_path)
                if 'matura' in file.lower() or re.search(r'(MBI|MCH|EBIP|ECHP)', file):
                    matura_texts.append(content)
                else:
                    texts[file.replace('.txt', '')] = content
    return texts, matura_texts

anatomy_texts, _ = read_text_files(os.path.join(SRC_MTR_DIR, "anatomia"))
biology_texts, biology_matura = read_text_files(os.path.join(SRC_MTR_DIR, "biologia"))
chemistry_texts, chemistry_matura = read_text_files(os.path.join(SRC_MTR_DIR, "chemia"))

def get_anatomy_text_fragment(keywords_required):
    for name, content in anatomy_texts.items():
        if all(k.lower() in content.lower() for k in keywords_required):
            # Just take a 500 character snippet surrounding the first match
            idx = content.lower().find(keywords_required[0].lower())
            start = max(0, content.rfind('\n', 0, idx))
            end = content.find('\n\n', idx)
            if end == -1: end = min(len(content), idx + 500)
            return content[start:end].strip()
    return ""

rule_3x = "Zasada 3x grubości ściany komory: Ściana lewej komory serca jest około trzy razy grubsza niż ściana prawej komory, co wynika z konieczności pokonania znacznie większego oporu naczyń w krążeniu dużym."
rule_arterial = "Unaczynienie tętnicze kończyny górnej: Krew z lewej komory przepływa przez aortę wstępującą, łuk aorty. Tętnica podobojczykowa przechodzi w tętnicę pachową, następnie tętnicę ramienną, a ta z kolei w dole łokciowym dzieli się na tętnicę promieniową i tętnicę łokciową. Tętnice te tworzą w obrębie dłoni łuk dłoniowy powierzchowny i łuk dłoniowy głęboki."
rule_spinal = "Przekrój rdzenia kręgowego: słupy istoty szarej noszą nazwę rogów (cornua). Dokoła otacza ją istota biała tworząca przedzielone rogami sznury: przedni (funiculus anterior), boczny (funiculus lateralis) i tylny (funiculus posterior)."

def generate_summary(text):
    if not text:
        return ""
    words = text.split()
    if len(words) < 5: return text
    candidates = [w for w in words if len(w) > 6 and w.isalpha()]
    if candidates:
        to_replace = random.sample(candidates, min(2, len(candidates)))
        for w in to_replace:
            text = text.replace(w, '__________', 1)
    return text

def extract_all_matura_questions(matura_texts):
    questions = []
    for text in matura_texts:
        parts = re.split(r'(?i)\n?(?=Zadanie\s+\d+)', text)
        for part in parts:
            if part.lower().startswith('zadanie'):
                q = part.strip()[:600].strip()
                if q and q not in questions:
                    questions.append(q)
    return questions

biology_all_questions = extract_all_matura_questions(biology_matura)
chemistry_all_questions = extract_all_matura_questions(chemistry_matura)

def process_ts_file(file_path, subject):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    import_match = re.search(r'(import .*?;\n+)', content, re.DOTALL)
    imports = import_match.group(1) if import_match else ''

    var_match = re.search(r'export const (\w+): (TextbookDomain(?:\[\])?) = (\[|\{)', content)
    if not var_match:
        return

    var_name = var_match.group(1)
    type_name = var_match.group(2)

    json_str_match = re.search(r'export const \w+: TextbookDomain(?:\[\])? = (.*);?\s*$', content, re.DOTALL)
    if not json_str_match:
        return

    json_str = json_str_match.group(1).strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]

    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"Parse error in {file_path}: {e}")
        return

    domains = data if isinstance(data, list) else [data]

    for domain in domains:
        if 'sections' not in domain:
            continue

        matura_section = None
        for section in domain['sections']:
            if 'Pytania Maturalne' in section.get('title', '') or 'Pytania maturalne' in section.get('title', ''):
                matura_section = section
                break

        if subject in ['biologia', 'chemia'] and not matura_section:
            matura_section = {
                "id": "matura-questions",
                "title": "Pytania Maturalne CKE",
                "summary": "Zbiorcze zestawienie pytań maturalnych CKE.",
                "content": [],
                "recallQuestions": []
            }
            domain['sections'].append(matura_section)

        for section in domain['sections']:
            if section == matura_section:
                continue

            if section.get('academic_detail'):
                section['academic_detail'] = clean_detail_text(section['academic_detail'])

            if section.get('summary'):
                section['summary'] = clean_ocr(section['summary'])
            elif section.get('academic_detail'):
                summary = generate_summary(section['academic_detail'][:300])
                section['summary'] = clean_ocr(summary)

            if subject == 'anatomia':
                if 'cardiovascular' in file_path.lower():
                    if rule_3x not in section.get('academic_detail', ''):
                        section['academic_detail'] = section.get('academic_detail', '') + f"\n\n{rule_3x}"
                    if rule_arterial not in section.get('academic_detail', ''):
                        section['academic_detail'] = section.get('academic_detail', '') + f"\n\n{rule_arterial}"
                elif 'nervous' in file_path.lower():
                    if rule_spinal not in section.get('academic_detail', ''):
                        section['academic_detail'] = section.get('academic_detail', '') + f"\n\n{rule_spinal}"

            if 'maturaQuestions' in section:
                del section['maturaQuestions']

        if subject in ['biologia', 'chemia'] and matura_section:
            questions = biology_all_questions if subject == 'biologia' else chemistry_all_questions
            if questions:
                matura_section['maturaQuestions'] = questions[:5]

    def reorder(obj):
        if isinstance(obj, dict):
            new_obj = {}
            keys = list(obj.keys())
            if 'maturaQuestions' in keys:
                keys.remove('maturaQuestions')
                keys.append('maturaQuestions')
            for k in keys:
                new_obj[k] = reorder(obj[k])
            return new_obj
        elif isinstance(obj, list):
            return [reorder(item) for item in obj]
        return obj

    ordered_data = reorder(data)

    new_json = json.dumps(ordered_data, indent=2, ensure_ascii=False)
    new_content = f"{imports}export const {var_name}: {type_name} = {new_json};\n"

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {os.path.basename(file_path)}")

print("Processing files...")
for f in os.listdir(os.path.join(DEST_DIR, 'textbook')):
    if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts'):
        process_ts_file(os.path.join(DEST_DIR, 'textbook', f), 'anatomia')

for f in os.listdir(os.path.join(DEST_DIR, 'biologia')):
    if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts'):
        process_ts_file(os.path.join(DEST_DIR, 'biologia', f), 'biologia')

for f in os.listdir(os.path.join(DEST_DIR, 'chemia')):
    if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts', 'index.spec.ts'):
        process_ts_file(os.path.join(DEST_DIR, 'chemia', f), 'chemia')

print("Done")
