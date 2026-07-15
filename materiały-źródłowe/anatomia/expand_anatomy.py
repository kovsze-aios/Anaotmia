#!/usr/bin/env python3
"""Inject anatomy notes into textbook domain files."""
import os

BASE = r"C:\DAWID_PRACE\Anatomia\anatomy-3d\src\data\textbook"
NOTES = r"C:\DAWID_PRACE\Anatomia\anatomy_notes_extracted.txt"

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {os.path.basename(path)} ({len(content):,} chars)")

# Load anatomy notes
with open(NOTES, 'r', encoding='utf-8') as f:
    notes_text = f.read()

# Extract relevant sections from notes
# Split notes into rough topic areas
notes_lower = notes_text.lower()

# Find relevant passages for each system
def extract_section(start_keywords, end_keywords=None):
    """Extract text between start and end keywords from notes."""
    text_lower = notes_text.lower()
    start_idx = 0
    for kw in start_keywords:
        idx = text_lower.find(kw.lower())
        if idx >= 0:
            start_idx = min(start_idx or 999999, idx)
            break

    if not start_idx:
        return ""

    end_idx = len(notes_text)
    if end_keywords:
        for kw in end_keywords:
            idx = text_lower.find(kw.lower(), start_idx + 100)
            if idx >= 0:
                end_idx = min(end_idx, idx)

    return notes_text[start_idx:end_idx].strip()[:3000]  # Limit to manageable chunks

# Get cardiovascular/respiratory notes
cardio_start = ["serce", "uklad naczyniowy", "uklad krazenia", "krew"]
cardio_end = ["pokarmowy", "trawienny", "uklad pokarmowy"]
cardio_text = extract_section(cardio_start, cardio_end)

# Get digestive notes
digest_start = ["pokarmowy", "trawienny", "zoladek", "jelito"]
digest_end = ["moczowy", "wydalniczy", "nerki", "rozrodczy"]
digest_text = extract_section(digest_start, digest_end)

# Get urinary notes
urin_start = ["moczowy", "wydalniczy", "nerki", "nefron"]
urin_end = ["nerwowy", "mozg", "hormonalny", "zmysl"]
urin_text = extract_section(urin_start, urin_end)

# Get nervous system notes
nerv_start = ["nerwowy", "mozg", "rdzen", "neuron"]
nerv_end = ["zmysl", "oko", "ucho", "hormonalny", "endokrynny"]
nerv_text = extract_section(nerv_start, nerv_end)

print(f"Cardio text: {len(cardio_text)} chars")
print(f"Digest text: {len(digest_text)} chars")
print(f"Urinary text: {len(urin_text)} chars")
print(f"Nervous text: {len(nerv_text)} chars")

# Now inject into each domain file
domain_mapping = {
    "domain-05-cardiovascular-respiratory.ts": "cardiovascular",
    "domain-06-digestive.ts": "digestive",
    "domain-07-urinary-reproductive.ts": "urinary",
    "domain-03-nervous.ts": "nervous",
}

for filename, system in domain_mapping.items():
    path = os.path.join(BASE, filename)
    if not os.path.exists(path):
        continue

    content = read_file(path)
    extra = ""

    if system == "cardiovascular" and cardio_text:
        extra = f"""
        {{
          type: "paragraph",
          text: `PEŁNY WYKŁAD ANATOMII UKŁADU KRĄŻENIA I ODDECHOWEGO (na podstawie notatek anatomicznych):

{cardio_text[:2000]}
`,
        }},
"""
    elif system == "digestive" and digest_text:
        extra = f"""
        {{
          type: "paragraph",
          text: `PEŁNY WYKŁAD ANATOMII UKŁADU POKARMOWEGO (na podstawie notatek anatomicznych):

{digest_text[:1500]}
`,
        }},
"""
    elif system == "urinary" and urin_text:
        extra = f"""
        {{
          type: "paragraph",
          text: `PEŁNY WYKŁAD ANATOMII UKŁADU MOCZOWO-PŁCIOWEGO (na podstawie notatek anatomicznych):

{urin_text[:1500]}
`,
        }},
"""
    elif system == "nervous" and nerv_text:
        extra = f"""
        {{
          type: "paragraph",
          text: `PEŁNY WYKŁAD NEUROANATOMII (na podstawie notatek anatomicznych):

{nerv_text[:2000]}
`,
        }},
"""

    if extra:
        # Inject after the first content block
        anchor = 'content: ['
        anchor_pos = content.find(anchor)
        if anchor_pos > 0:
            bracket_pos = content.find('{', anchor_pos)
            if bracket_pos > 0:
                content = content[:bracket_pos+1] + extra + content[bracket_pos+1:]
                write_file(path, content)
                print(f"  {filename}: Injected {system} notes ({len(extra)} chars)")
    else:
        print(f"  {filename}: No relevant notes found, skipping")

print("\nAnatomy textbook expansion complete!")
