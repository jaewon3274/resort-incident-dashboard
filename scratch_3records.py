import os, openpyxl, json

fname = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f][0]
wb = openpyxl.load_workbook(os.path.join('C:/Users/HDC Resort/Downloads', fname), data_only=True)
sheet = wb.active

target_ids = {'2026-H1892-000108', '2026-H1892-000094', '2026-H1892-000012'}
headers = [str(sheet.cell(1, c).value) for c in range(1, 20)]

records = []
for r in range(2, sheet.max_row + 1):
    docNo = sheet.cell(r, 6).value
    if docNo and str(docNo).strip() in target_ids:
        row_dict = {headers[c-1]: sheet.cell(r, c).value for c in range(1, 18)}
        records.append(row_dict)

with open("new_3records.json", "w", encoding="utf-8") as f:
    json.dump(records, f, ensure_ascii=False, indent=2, default=str)
print("Saved new_3records.json")
