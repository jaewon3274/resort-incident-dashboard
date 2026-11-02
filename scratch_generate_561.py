import os, openpyxl, json, re

fname = [f for f in os.listdir('C:/Users/HDC Resort/Downloads') if '20261029' in f][0]
full_path = os.path.join('C:/Users/HDC Resort/Downloads', fname)
wb = openpyxl.load_workbook(full_path, data_only=True)
sheet = wb.active

# Load existing 558 data.js to preserve timeline and any special fields
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

# Load inferDept logic in Python matching app.js
def infer_dept(item):
    origDept = (item.get("dept") or "").strip()
    resort = (item.get("resort") or "").strip()
    loc = (item.get("locationDetail") or "").strip()
    zone = (item.get("zone") or "").strip()
    title = (item.get("title") or "").strip()
    desc = (item.get("description") or "").strip()
    cat = (item.get("category") or "").strip()
    fullText = f"{origDept} {resort} {loc} {zone} {title} {desc} {cat}".lower()

    isGolfCourseSpecific = bool(re.search(r'파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h|오크\s*\d*h|힐\s*\d*h|브릿지\s*\d*h|루나\s*\d*h|솔라\s*\d*h|인\s*\d*h|아웃\s*\d*h|\b\d+h\b|페어웨이|티잉|티박스|그린|벙커|러프|해저드|크리크|카트도로|캐디|골프카트', fullText, re.I))
    
    isCondoRoomVillage = bool(
        re.search(r'콘도|객실|호실|빌리지|d콘도|골프빌리지|타워[a-d]?|숙박|프런트|하우스키핑|스위트|베개|침대|욕실|발코니|테라스|객실키|침구', fullText, re.I) or
        re.search(r'빌리지|콘도|객실', resort, re.I) or
        re.search(r'빌리지|콘도|객실', loc, re.I)
    )

    isSaunaLeisure = bool(
        re.search(r'사우나|스파|아쿠아|수영장|자쿠지|노천탕|락커|락카|냉탕|온탕|열탕|샤워실', fullText, re.I) or
        re.search(r'스키장|스키|눈썰매|슬로프|리프트|렌탈', fullText, re.I) or
        "레저팀" in resort or "스키장" in resort or "레저팀" in origDept
    )

    isFnb = bool(
        re.search(r'식음|f&b|레스토랑|카페|주방|조식|뷔페|식당|다이닝|바비큐|베이커리|피오레토|파크키친', fullText, re.I) or
        "식음팀" in origDept
    )

    isFacility = bool(
        re.search(r'시설|기계|전기|보일러|영선|승강기|엘리베이터|방재|소방|변전|정화조|누수|정전|동파|조경', fullText, re.I) or
        "시설팀" in origDept
    )

    if not isGolfCourseSpecific:
        if isCondoRoomVillage and not isSaunaLeisure and not isFnb:
            return "객실팀"
        if isSaunaLeisure:
            return "레저팀"
        if isFnb:
            return "식음팀"
        if isFacility:
            return "시설팀"

    # Golf CC mapping
    if re.search(r'성문안|루나|솔라', fullText, re.I):
        return "성문안팀"
    if re.search(r'월송리|월송|인\s*\d*h|아웃\s*\d*h', fullText, re.I):
        return "월송리팀"
    if re.search(r'힐스팀|힐스cc|힐\s*\d*h|브릿지\s*\d*h', fullText, re.I):
        return "힐스팀"
    if re.search(r'밸리팀|밸리cc|오크\s*\d*h|파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h', fullText, re.I):
        return "밸리팀"

    if origDept in ["밸리팀", "힐스팀", "성문안팀", "월송리팀", "레저팀", "시설팀", "객실팀", "식음팀"]:
        return origDept
    if resort in ["밸리팀", "힐스팀", "성문안팀", "월송리팀", "레저팀", "시설팀", "객실팀", "식음팀"]:
        return resort
    if "골프" in resort or "경기" in origDept:
        return "밸리팀"
    return "시설팀"

def infer_zone(loc, dept, resort):
    t = f"{loc} {dept} {resort}".lower()
    if re.search(r'그린|티|홀|\d+h|페어웨이|벙커|코스|카트도로|러프', t):
        return "골프 코스"
    if re.search(r'클럽하우스|로비|프런트|락카|락커|스타트|현관|주차장|사우나', t):
        return "클럽하우스/부대시설"
    if re.search(r'슬로프|리프트|렌탈|스키', t):
        return "스키장/슬로프"
    if re.search(r'콘도|객실|빌리지|타워', t):
        return "콘도/숙박동"
    return "공용 구역"

def infer_severity(desc, cat):
    t = f"{desc} {cat}".lower()
    if re.search(r'사망|심정지|의식불명', t):
        return "중대재해 (사망/중상)"
    if re.search(r'골절|수술|입원|119|후송|파열|뇌진탕', t):
        return "중상 (병원후송)"
    if re.search(r'봉합|꿰매|열상|응급실|통원', t):
        return "경상 (통원치료)"
    return "경미 (현장처치)"

# Process all 561 rows from Excel
all_561_incidents = []
for r in range(2, sheet.max_row + 1):
    docNo = sheet.cell(r, 6).value
    if not docNo or not str(docNo).strip():
        continue
    docNo = str(docNo).strip()

    dept_col = str(sheet.cell(r, 2).value or "").strip()
    resort_col = str(sheet.cell(r, 3).value or "").strip()
    loc_col = str(sheet.cell(r, 4).value or "").strip()
    victim_col = str(sheet.cell(r, 5).value or "").strip()
    repDate_col = str(sheet.cell(r, 7).value or "").strip()
    occDate_col = str(sheet.cell(r, 8).value or "").strip()
    cat_col = str(sheet.cell(r, 12).value or "").strip()
    desc_col = str(sheet.cell(r, 13).value or "").strip()
    prevent_col = str(sheet.cell(r, 14).value or "").strip()

    # Clean dates
    if repDate_col and " 00:00:00" in repDate_col:
        repDate_col = repDate_col.replace(" 00:00:00", "")
    if not repDate_col:
        repDate_col = "2026-01-01"

    # Category normalization (remove newline in category)
    clean_cat = cat_col.replace("\n", "").replace("\r", "").strip()
    if not clean_cat:
        clean_cat = "기타"
    
    # Check if existing item in data.js has existing metadata
    existing = data_by_id.get(docNo)
    
    # Location
    loc = loc_col if loc_col and loc_col != "None" else (existing.get("locationDetail", "공용 구역") if existing else "공용 구역")
    resort = resort_col if resort_col and resort_col != "None" else (existing.get("resort", "IPARK 리조트") if existing else "IPARK 리조트")
    desc = desc_col if desc_col and desc_col != "None" else (existing.get("description", "경위 기록 없음") if existing else "경위 기록 없음")
    prevent = prevent_col if prevent_col and prevent_col != "None" else (existing.get("preventiveMeasure", "시설 및 운영 프로세스 점검 강화") if existing else "시설 및 운영 프로세스 점검 강화")
    victim = victim_col if victim_col and victim_col != "None" else (existing.get("victimType", "고객") if existing else "고객")
    
    # Occur Date
    occ_date = occDate_col if occDate_col and occDate_col != "None" else (existing.get("date", repDate_col) if existing else repDate_col)
    occ_date = occ_date.replace("\r", " ").replace("\n", " ").strip()

    # Title reconstruction: [장소] {원래사고유형} 사고
    locPrefix = f"[{loc}]" if loc and loc != "공용 구역" else (f"[{resort}]" if resort else "")
    title = f"{locPrefix} {clean_cat} 사고".strip()

    zone = infer_zone(loc, dept_col, resort)
    severity = infer_severity(desc, clean_cat)

    # Department
    temp_item = {
        "dept": dept_col,
        "resort": resort,
        "locationDetail": loc,
        "zone": zone,
        "title": title,
        "description": desc,
        "category": clean_cat
    }
    final_dept = infer_dept(temp_item)

    incident = {
        "id": docNo,
        "date": occ_date,
        "resort": resort,
        "zone": zone,
        "locationDetail": loc,
        "category": clean_cat,
        "severity": severity,
        "victimType": victim,
        "victimName": "익명",
        "title": title,
        "description": desc,
        "actionTaken": "현장 초동 조치 및 고객 케어 완료",
        "preventiveMeasure": prevent if prevent else "시설 및 운영 프로세스 점검 강화",
        "status": "조치완료",
        "cost": 0,
        "faultRatio": "과실 미산정",
        "totalAmount": 0,
        "companyAmount": 0,
        "personalAmount": 0,
        "manager": "안전관리팀" if "팀" not in final_dept else final_dept,
        "dept": final_dept,
        "reportDate": repDate_col[:10],
        "timeline": [
            { "time": occ_date[:16], "note": "사고 발생 접수" },
            { "time": occ_date[:16], "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료" }
        ]
    }
    all_561_incidents.append(incident)

print("Generated total incidents:", len(all_561_incidents))
# Sort descending by docNo / date
all_561_incidents.sort(key=lambda x: (x["date"], x["id"]), reverse=True)

with open("scratch_561_records.json", "w", encoding="utf-8") as f:
    json.dump(all_561_incidents, f, ensure_ascii=False, indent=2)
print("Saved scratch_561_records.json successfully")
