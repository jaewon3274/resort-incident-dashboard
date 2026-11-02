import os, openpyxl, json

# 1. Load data.js
with open("data.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

json_str = ""
capture = False
for line in lines:
    if "const INITIAL_INCIDENTS = [" in line:
        capture = True
        json_str += "[\n"
        continue
    if capture:
        if line.strip() == "];":
            json_str += "]\n"
            break
        json_str += line

data_incidents = json.loads(json_str)
data_by_id = {d["id"]: d for d in data_incidents}

# 2. Load excel
fname = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f][0]
wb = openpyxl.load_workbook(os.path.join('C:/Users/HDC Resort/Downloads', fname), data_only=True)
sheet = wb.active

excel_rows = []
for r in range(2, sheet.max_row + 1):
    docNo = sheet.cell(r, 6).value
    if not docNo or not str(docNo).strip():
        continue
    docNo = str(docNo).strip()
    dept = str(sheet.cell(r, 2).value or "").strip()
    area = str(sheet.cell(r, 3).value or "").strip()
    loc = str(sheet.cell(r, 4).value or "").strip()
    victim = str(sheet.cell(r, 5).value or "").strip()
    repDate = str(sheet.cell(r, 7).value or "").strip()
    occDate = str(sheet.cell(r, 8).value or "").strip()
    cat = str(sheet.cell(r, 12).value or "").strip()
    desc = str(sheet.cell(r, 13).value or "").strip()
    prevent = str(sheet.cell(r, 14).value or "").strip()
    cost = str(sheet.cell(r, 16).value or "").strip()
    excel_rows.append({
        "row_idx": r,
        "docNo": docNo,
        "dept": dept,
        "area": area,
        "loc": loc,
        "victim": victim,
        "repDate": repDate,
        "occDate": occDate,
        "cat": cat,
        "desc": desc,
        "prevent": prevent,
        "cost": cost
    })

print(f"data.js items: {len(data_incidents)}")
print(f"excel items: {len(excel_rows)}")

# Check category differences between data.js and excel for matching IDs
diff_cats = []
for er in excel_rows:
    docId = er["docNo"]
    if docId in data_by_id:
        d_cat = data_by_id[docId]["category"]
        e_cat = er["cat"].replace("\n", "")
        if d_cat != e_cat:
            diff_cats.append((docId, "data.js:", d_cat, "excel:", e_cat))

print(f"Category differences for matching IDs: {len(diff_cats)}")
for dc in diff_cats[:10]:
    print(dc)
