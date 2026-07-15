import os
import json
import re

# Set directories
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_MTR_DIR = os.path.join(BASE_DIR, "materiały-źródłowe")
DEST_DIR = os.path.join(BASE_DIR, "src", "data")

def extract_content(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()
    except UnicodeDecodeError:
        try:
            with open(file_path, "r", encoding="windows-1250") as f:
                return f.read()
        except UnicodeDecodeError:
            with open(file_path, "r", encoding="iso-8859-2") as f:
                return f.read()

def read_text_files(directory):
    texts = {}
    if not os.path.exists(directory):
        return texts
    for file in os.listdir(directory):
        if file.endswith('.txt'):
            content = extract_content(os.path.join(directory, file))
            texts[file.replace('.txt', '')] = content
    return texts

anatomy_texts = read_text_files(os.path.join(SRC_MTR_DIR, "anatomia"))
biology_texts = read_text_files(os.path.join(SRC_MTR_DIR, "biologia"))
chemistry_texts = read_text_files(os.path.join(SRC_MTR_DIR, "chemia"))

import random
random.seed(42) # Ensure determinism

used_offsets = {}

def extract_text_for_query(text_obj, query, min_length=3000):
    sources_found = []
    words = [w for w in re.split(r'[\s,.-]+', query.lower()) if w]
    main_word = next((w for w in words if len(w) > 4), words[0] if words else None)

    for source_name, full_text in text_obj.items():
        if source_name not in used_offsets:
            used_offsets[source_name] = []

        lower_text = full_text.lower()
        found_idx = lower_text.find(query.lower())

        if found_idx == -1 and main_word:
            found_idx = lower_text.find(main_word)

        if found_idx == -1:
            if len(full_text) > min_length + 1000:
                found_idx = random.randint(0, len(full_text) - min_length - 1000)
            else:
                found_idx = 0

        attempts = 0
        is_overlapping = True
        while is_overlapping and attempts < 10:
            is_overlapping = any(abs(used - found_idx) < min_length for used in used_offsets[source_name])
            if is_overlapping:
                found_idx += min_length
                if found_idx + min_length > len(full_text):
                    if len(full_text) > min_length + 1000:
                        found_idx = random.randint(0, len(full_text) - min_length - 1000)
                    else:
                        found_idx = 0
            attempts += 1

        found_idx = max(0, found_idx)

        start_idx = found_idx
        while start_idx > 0 and full_text[start_idx] != '\n':
            start_idx -= 1
        start_idx = max(0, start_idx)

        end_idx = start_idx + min_length
        while end_idx < len(full_text) and full_text[end_idx] != '\n':
            end_idx += 1

        if end_idx - start_idx < min_length:
            end_idx = min(len(full_text), start_idx + min_length + 500)

        extracted = full_text[start_idx:end_idx].strip()
        if len(extracted) > 500:
            used_offsets[source_name].append(start_idx)

            clean_title = source_name
            if "Anatomia czlowieka" in clean_title:
                clean_title = clean_title.split(')')[0] + ')'
            if "Biologia na czasie" in clean_title:
                clean_title = clean_title.split(')')[0] + ')'

            sources_found.append({
                "title": clean_title,
                "content": extracted
            })

        if len(sources_found) >= 2:
            break

    return sources_found

def process_ts_file(file_path, texts):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    import_match = re.search(r'import .*?;\n+', content)
    imports = import_match.group(0) if import_match else ''

    var_match = re.search(r'export const (\w+): (TextbookDomain(?:\[\])?) = ', content)
    if not var_match:
        return

    var_name = var_match.group(1)
    type_name = var_match.group(2)

    cleaned = re.sub(r'import .*?;\n+', '', content)
    cleaned = re.sub(r'export const \w+: [a-zA-Z0-9_\[\]]+ = ', '', cleaned)
    cleaned = re.sub(r';?\s*$', '', cleaned)

    try:
        data = json.loads(cleaned)
    except json.JSONDecodeError as e:
        print(f"Parse error in {file_path}: {e}")
        return

    is_array = isinstance(data, list)
    domains = data if is_array else [data]

    for domain in domains:
        if 'sections' not in domain:
            continue
        for section in domain['sections']:
            sources = extract_text_for_query(texts, section.get('title', ''), 3500)
            if sources:
                section['academic_sources'] = sources

    new_json = json.dumps(data, indent=2, ensure_ascii=False)
    new_content = f"{imports}export const {var_name}: {type_name} = {new_json};\n"

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {os.path.basename(file_path)}")

dir_textbook = os.path.join(DEST_DIR, 'textbook')
if os.path.exists(dir_textbook):
    for f in os.listdir(dir_textbook):
        if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts'):
            process_ts_file(os.path.join(dir_textbook, f), anatomy_texts)

dir_biologia = os.path.join(DEST_DIR, 'biologia')
if os.path.exists(dir_biologia):
    for f in os.listdir(dir_biologia):
        if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts'):
            process_ts_file(os.path.join(dir_biologia, f), biology_texts)

dir_chemia = os.path.join(DEST_DIR, 'chemia')
if os.path.exists(dir_chemia):
    for f in os.listdir(dir_chemia):
        if f.endswith('.ts') and f not in ('index.ts', 'index.test.ts', 'index.spec.ts'):
            process_ts_file(os.path.join(dir_chemia, f), chemistry_texts)

print("Done")
