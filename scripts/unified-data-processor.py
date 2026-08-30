import os
import json
import re
import random
import chardet

random.seed(42)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_MTR_DIR = os.path.join(BASE_DIR, "materiały-źródłowe")
DEST_DIR = os.path.join(BASE_DIR, "src", "data")

def clean_ocr(text):
    text = re.sub(r'\b(Ryc\.|Rycina|Tab\.|Tabela|Rysunek|Wykres)\s+\d+.*?(?=\n|$)', '', text, flags=re.IGNORECASE)
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


def linguistic_audit(text, subject):
    if subject == 'chemia':
        # Simple chemistry typo fixes
        text = text.replace('kwas siarkowy(Vl)', 'kwas siarkowy(VI)')
        text = text.replace('wodorotlenkek', 'wodorotlenek')
        text = text.replace('reakcja redok', 'reakcja redoks')
    return text

def extract_content(file_path):
    with open(file_path, 'rb') as f:
        raw_data = f.read()

    result = chardet.detect(raw_data)
    encoding = result['encoding']
    if not encoding:
        encoding = 'utf-8'

    try:
        text = raw_data.decode(encoding)
        return clean_detail_text(text)
    except UnicodeDecodeError:
        try:
            return clean_detail_text(raw_data.decode('utf-8'))
        except:
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

def get_text_fragment(texts_dict, section_title):
    # Try to find a meaningful chunk from the texts that matches the section title or its keywords
    keywords = [word for word in re.split(r'\W+', section_title) if len(word) > 4]

    if not keywords:
        return ""

    for name, content in texts_dict.items():
        content_lower = content.lower()
        # Find matches for keywords
        match_scores = []
        for kw in keywords:
            if kw.lower() in content_lower:
                match_scores.append(kw)

        if len(match_scores) >= min(2, len(keywords)):
            # Find the first occurrence of one of the matched keywords
            idx = content_lower.find(match_scores[0].lower())

            # Extract a substantial chunk around it
            start = max(0, content.rfind('\n', 0, max(0, idx - 500)))
            end = content.find('\n\n\n', idx)
            if end == -1: end = min(len(content), idx + 2000)

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

    # Try to pick meaningful words (nouns/adjectives) longer than 5 chars
    candidates = [w for w in words if len(w) > 5 and w.isalpha()]

    # Generate gaps using _________
    if candidates:
        num_gaps = min(3, max(1, len(candidates) // 10))
        to_replace = random.sample(candidates, num_gaps)
        for w in to_replace:
            # Replace complete word, but preserve punctuation if we were using regex
            # Simple replace is ok for our purposes
            text = re.sub(rf'\b{re.escape(w)}\b', '__________', text, count=1)

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

    texts_dict = anatomy_texts if subject == 'anatomia' else (biology_texts if subject == 'biologia' else chemistry_texts)

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

            # Populate academic_detail from raw texts if it's missing or too short
            if not section.get('academic_detail') or len(section.get('academic_detail', '')) < 100:
                extracted = get_text_fragment(texts_dict, section.get('title', ''))
                if extracted:
                    section['academic_detail'] = extracted

            if section.get('academic_detail'):
                section['academic_detail'] = linguistic_audit(clean_detail_text(section['academic_detail']), subject)

            # Populate summary with ActiveRecall gaps if not present or doesn't have gaps
            if not section.get('summary') or '__________' not in section.get('summary', ''):
                if section.get('academic_detail'):
                    # Take first 300 chars for summary
                    summary_text = section['academic_detail'][:300]
                    # Make sure it ends at a word boundary
                    last_space = summary_text.rfind(' ')
                    if last_space > 0:
                        summary_text = summary_text[:last_space] + "..."

                    section['summary'] = clean_ocr(generate_summary(summary_text))

            # Domain specific logic
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
                # Add all matura questions to the matura section
                matura_section['maturaQuestions'] = questions

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
for f in os.listdir(os.path.join(DEST_DIR, 'anatomia')):
    if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts'):
        process_ts_file(os.path.join(DEST_DIR, 'anatomia', f), 'anatomia')

for f in os.listdir(os.path.join(DEST_DIR, 'biologia')):
    if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts'):
        process_ts_file(os.path.join(DEST_DIR, 'biologia', f), 'biologia')

for f in os.listdir(os.path.join(DEST_DIR, 'chemia')):
    if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts', 'index.spec.ts'):
        process_ts_file(os.path.join(DEST_DIR, 'chemia', f), 'chemia')

print("Done")
