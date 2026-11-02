import json, os, openpyxl

# Load data.js
with open("data.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Extract json array between INITIAL_INCIDENTS = [ and ];
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
print("data.js count:", len(data_incidents))
data_ids = set(d["id"] for d in data_incidents)

# Load excel 561
fname = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f][0]
wb = openpyxl.load_workbook(os.path.join('C:/Users/HDC Resort/Downloads', fname), data_only=True)
sheet = wb.active
excel_items = []
for r in range(2, sheet.max_row + 1):
    docNo = sheet.cell(r, 6).value
    if not docNo or not str(docNo).strip():
        continue
    docNo = str(docNo).strip()
    cat = str(sheet.cell(r, 12).value or "").strip()
    excel_items.append((docNo, cat, r))

excel_ids = set(e[0] for e in excel_items)
print("excel count:", len(excel_items))

diff_in_excel = excel_ids - data_ids
print("In excel but not in data.js:", diff_in_excel)

diff_in_data = data_ids - excel_ids
print("In data.js but not in excel:", diff_in_data)
