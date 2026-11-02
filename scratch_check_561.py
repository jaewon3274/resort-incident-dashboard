import os, openpyxl, json
from collections import Counter

fname = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f][0]
wb = openpyxl.load_workbook(os.path.join('C:/Users/HDC Resort/Downloads', fname), data_only=True)
sheet = wb.active

categories = Counter()
items = []
for r in range(2, sheet.max_row + 1):
    docNo = sheet.cell(r, 6).value
    if not docNo or not str(docNo).strip():
        continue
    cat = str(sheet.cell(r, 12).value or "").strip()
    categories[cat] += 1

out = {
    "total": sum(categories.values()),
    "distribution": [
        {"category": k, "count": v, "percentage": f"{v/sum(categories.values())*100:.1f}%"}
        for k, v in categories.most_common()
    ]
}

with open("category_distribution.json", "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)
print("Saved category_distribution.json")
