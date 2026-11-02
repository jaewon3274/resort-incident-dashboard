import json

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

gita_items = []
for idx, item in enumerate(data_incidents):
    cat = item.get("category", "")
    title = item.get("title", "")
    desc = item.get("description", "")
    if "기타 사고" in title:
        gita_items.append((item["id"], cat, title, desc[:50]))

print(f"Total items in data.js: {len(data_incidents)}")
print(f"Items with '기타 사고' in title: {len(gita_items)}")
for g in gita_items[:10]:
    print(g)
