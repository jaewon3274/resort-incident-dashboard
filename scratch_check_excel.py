import os, json, openpyxl

files = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f]
for fname in files:
    full_path = os.path.join('C:/Users/HDC Resort/Downloads', fname)
    wb = openpyxl.load_workbook(full_path, data_only=True)
    sheet = wb.active
    headers = [sheet.cell(1, col).value for col in range(1, 25)]
    out = {
        "headers": headers,
        "sample_rows": []
    }
    for r in range(2, 6):
        vals = [str(sheet.cell(r, col).value) for col in range(1, 20)]
        out["sample_rows"].append(vals)
    
    with open("excel_info.json", "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print("Wrote excel_info.json successfully")
