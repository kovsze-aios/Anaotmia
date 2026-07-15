#!/usr/bin/env python3
"""Generator: write expanded TypeScript data files for biology module."""
import os

BASE = r"C:\DAWID_PRACE\Anatomia\anatomy-3d\src\data"
os.makedirs(os.path.join(BASE, "biologia"), exist_ok=True)

# Read the backup to extract TypeScript interfaces
with open(os.path.join(BASE, "biologia", "domain-01-biology.ts.bak"), "r", encoding="utf-8") as f:
    original = f.read()

# Extract header (interfaces, imports) and footer (export functions, CKE tasks)
header_end = original.index("const introduction")
footer_start = original.index("// ========================" + "============================="*2 + "\n// ZADANIA CKE")
header = original[:header_end]
footer = original[footer_start:]

print(f"Header: {len(header)} chars, Footer: {len(footer)} chars")
print("Ready to build expanded content. Run build_bio.py next.")
