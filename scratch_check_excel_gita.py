import os, openpyxl, json

fname = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f][0]
wb = openpyxl.load_workbook(os.path.join('C:/Users/HDC Resort/Downloads', fname), data_only=True)
sheet = wb.active

gita_records = []
for r in range(2, sheet.max_row + 1):
    docNo = sheet.cell(r, 6).value
    if not docNo:
        continue
    cat = str(sheet.cell(r, 12).value or "").strip()
    if cat == "기타" or not cat:
        gita_records.append({
            "docNo": str(docNo).strip(),
            "loc": str(sheet.cell(r, 4).value or "").strip(),
            "cat": cat,
            "desc": str(sheet.cell(r, 13).value or "").strip(),
            "prevent": str(sheet.cell(r, 14).value or "").strip()
        })

print("Total '기타' in Excel:", len(gita_records))
with open("gita_records.json", "w", encoding="utf-8") as f:
    json.dump(gita_records, f, ensure_ascii=False, indent=2)
print("Saved gita_records.json")
