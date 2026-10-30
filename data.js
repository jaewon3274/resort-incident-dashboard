/**
 * 리조트 안전사고 모니터링 시스템 - 실무 데이터 (561건 엑셀 원본 100% 매핑)
 * IPARK RESORT SAFETY ACCIDENT DATA
 * 생성일시: 2026-10-30
 * 데이터 소스: ★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx '통합' 시트
 * 총 레코드 수: 561건
 * 총 보험금: 1,652,000원 (6건 반영)
 */
const INITIAL_INCIDENTS = [
  {
    "id": "2026-H1892-000142",
    "date": "2026.10.18 10:40경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인1H",
    "description": "오크 9H에서 티샷한 볼이 파인 1H(150m 지점) 대기 중인 고객 허벅지를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-10-19",
    "timeline": [
      {
        "time": "2026.10.18 10:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.10.18 10:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000140",
    "date": "2026.10.17 16:30경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리4H",
    "description": "파인5H 티샷 볼이 슬라이스가 발생하여 체리 4H에서 대기 중인 고객 우측 발등을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-10-18",
    "timeline": [
      {
        "time": "2026.10.17 16:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.10.17 16:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000141",
    "date": "2026.10.17 10:50경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플1H",
    "description": "오크1H에서 티샷한 볼이 메이플 1H 경계면에서 볼을 찾던 캐디 머리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-10-19",
    "timeline": [
      {
        "time": "2026.10.17 10:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.10.17 10:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000143",
    "date": "2026.10.17",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H 그린 전 돌계단",
    "description": "파인 5H 그린 이동 전 돌계단에서 캐디의 미끄럼 주의 안내를 받은 직후 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "파인5H 그린 전 돌계단",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H 그린 전 돌계단] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-10-19",
    "timeline": [
      {
        "time": "2026.10.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.10.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000139",
    "date": "2026.10.10 10:00경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "오크8H",
    "description": "파인2H에서 고객의 티샷 볼이 악성 훅으로 인해 인접 홀(오크8H)로 넘어와 캐디 안면부에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크8H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-10-10",
    "timeline": [
      {
        "time": "2026.10.10 10:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.10.10 10:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000138",
    "date": "2026.10.09",
    "incidentType": "클럽 파손",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "18H 벙커",
    "description": "18H 벙커에서 세컨샷을 하는 중 벙커 사면에 있던 7번 우드를 로봇모어가 인지하지 못하여 클럽 파손",
    "cost": 482000,
    "notes": "",
    "category": "클럽 파손",
    "resort": "성문안팀",
    "locationDetail": "18H 벙커",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[18H 벙커] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "보험 처리 완료",
    "totalAmount": 482000,
    "companyAmount": 482000,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-10-09",
    "timeline": [
      {
        "time": "2026.10.09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.10.09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000135",
    "date": "2026.09.24 10:50경",
    "incidentType": "감전",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌라B 객실",
    "description": "고객이 커피포트 이용 중 물을 쏟아 주방 아래로 인입되며 누전/감전사고 발생",
    "cost": 0,
    "notes": "",
    "category": "감전",
    "resort": "밸리빌리지",
    "locationDetail": "빌라B 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌라B 객실] 감전 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 객실 주방 콘센트 접지 확인 및 불량 피복 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2026-09-25",
    "timeline": [
      {
        "time": "2026.09.24 10:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.24 10:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000134",
    "date": "2026.09.22 14:45경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리CC",
    "victimType": "고객",
    "location": "밸리CC 1층 로비",
    "description": "스타트 이동 중 1층 홀인원 명패 앞 청소 후 잔여 물기로 인해 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리CC",
    "locationDetail": "밸리CC 1층 로비",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 1층 로비] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-09-25",
    "timeline": [
      {
        "time": "2026.09.22 14:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.22 14:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000131",
    "date": "2026.09.21 18:05경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "고객이 자쿠지 내부 이동 중 수중 좌식 공간을 인지하지 못하고 넘어지며 오른손 중지와 약지에 열상 사고 후 현장 점검에서 자쿠지 내 계단 벽면 급수관 옆 부속품의 파손 및 날카로운 부분 확인",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-09-23",
    "timeline": [
      {
        "time": "2026.09.21 18:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.21 18:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000128",
    "date": "2026.09.21 17:00경",
    "incidentType": "클럽 파손",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리8H 벙커",
    "description": "체리8H 150m 지점 벙커 스윙 중 벙커 안에 돌로 인한 고객 클럽 손상",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "밸리팀",
    "locationDetail": "체리8H 벙커",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리8H 벙커] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-09-22",
    "timeline": [
      {
        "time": "2026.09.21 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.21 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000127",
    "date": "2026.09.21 09:40경",
    "incidentType": "차량사고",
    "businessUnit": "힐스빌리지",
    "victimType": "직원",
    "location": "타워D 주차장",
    "description": "타워D 주차장에서 지상으로 이동 중 PVC 배관이 램프 입구의 보에 걸려 파손되며 지나가던 차량으로 날아가 뒷문 손상",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "힐스빌리지",
    "locationDetail": "타워D 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워D 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-09-22",
    "timeline": [
      {
        "time": "2026.09.21 09:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.21 09:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000125",
    "date": "2026.09.20 14:00경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플2H",
    "description": "메이플2H 티박스 대기 중, 1H 세컨볼이 그린 오버되며 캐디 다리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플2H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-09-21",
    "timeline": [
      {
        "time": "2026.09.20 14:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.20 14:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000129",
    "date": "2026.09.19 15:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H 군도변",
    "description": "뮤지엄산으로 이동 중 파인5H 군도에서 차량 운전석 문이 볼에 맞았다고 주장",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H 군도변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H 군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-09-22",
    "timeline": [
      {
        "time": "2026.09.19 15:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.19 15:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000133",
    "date": "2026.09.19",
    "incidentType": "넘어짐",
    "businessUnit": "밸리CC",
    "victimType": "고객",
    "location": "밸리CC 1층 로비",
    "description": "라운드를 위해 스타트로 내려가는 계단에서 물청소 후 남은 잔여 물기에 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리CC",
    "locationDetail": "밸리CC 1층 로비",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 1층 로비] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-09-25",
    "timeline": [
      {
        "time": "2026.09.19",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.19",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000122",
    "date": "2026.09.17 20:30경",
    "incidentType": "차량사고",
    "businessUnit": "군도변",
    "victimType": "직원",
    "location": "파인5H 군도변",
    "description": "장비 반납을 위해 성문안 장비관리동에서 오크밸리 관리동 방향으로 운행 중이던 중량롤링기 후미를 가해 차량(카니발)이 추돌함",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "군도변",
    "locationDetail": "파인5H 군도변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H 군도변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-09-18",
    "timeline": [
      {
        "time": "2026.09.17 20:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.17 20:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000121",
    "date": "2026.09.15 09:30경",
    "incidentType": "기타",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리7H",
    "description": "체리7H 화이트 티잉그라운드 대기 중 스프링쿨러가 오작동되며 사고자 허리를 타격",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "밸리팀",
    "locationDetail": "체리7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리7H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-09-16",
    "timeline": [
      {
        "time": "2026.09.15 09:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.15 09:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000119",
    "date": "2026.09.13 17:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "파인4H",
    "description": "파인4H 티샷한 볼이 안전망을 넘어 주행 중인 차량 후면을 맞춤",
    "cost": 370000,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "보험 처리 완료",
    "totalAmount": 370000,
    "companyAmount": 370000,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-09-13",
    "timeline": [
      {
        "time": "2026.09.13 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.13 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000120",
    "date": "2026.09.11 13:10경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐3H",
    "description": "힐3H 그린 주변 벙커샷 볼이 오버되며 경기 진행을 위해 그린 위로 이동 중인 캐디 얼굴(광대뼈)를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-09-15",
    "timeline": [
      {
        "time": "2026.09.11 13:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.11 13:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000117",
    "date": "2026.09.11",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "9H",
    "description": "성문안 OUT 9H에서 코스 점검으로 이동 중이던 코스관리팀장의 2인승 업무용 카트가 하차 중이던 고객의 왼쪽 뒤꿈치 부분을 충격함",
    "cost": 100000,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[9H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "보험 처리 완료",
    "totalAmount": 100000,
    "companyAmount": 100000,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-09-11",
    "timeline": [
      {
        "time": "2026.09.11",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.11",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000114",
    "date": "2026.09.05 21:53",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "여자 사우나",
    "description": "여자 습식 사우나 이용 후 외부로 이동하는 바닥면에 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "여자 사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자 사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-09-07",
    "timeline": [
      {
        "time": "2026.09.05 21:53",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.05 21:53",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000113",
    "date": "2026.09.04",
    "incidentType": "열상",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "2F사우나~1F수영장",
    "description": "2F사우나에서 1F수영장으로 이동 중 발을 잘못 디뎌 우측 검지발가락 안쪽에 열상 발생 사고 당시 아이를 안고 내려오다가 시야가 확보되지 못함",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "레저팀",
    "locationDetail": "2F사우나~1F수영장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[2F사우나~1F수영장] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-09-04",
    "timeline": [
      {
        "time": "2026.09.04",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.04",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000123",
    "date": "2026.09.02 10:30경",
    "incidentType": "근골격계 질환",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "2H",
    "description": "티샷한 고객의 공을 찾기 위해 사면을 내려가는 중 미끄러져 허리통증 호소",
    "cost": 0,
    "notes": "",
    "category": "근골격계 질환",
    "resort": "성문안팀",
    "locationDetail": "2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[2H] 근골격계 질환 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-09-18",
    "timeline": [
      {
        "time": "2026.09.02 10:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.09.02 10:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000118",
    "date": "2026.08.29",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "오크6H",
    "description": "오크 6H(150yd지점) 볼을 찾던 중 진흙을 밟아 미끄러지면서 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "오크6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크6H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-09-11",
    "timeline": [
      {
        "time": "2026.08.29",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.29",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000112",
    "date": "2026.08.26",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "파인4H~5H 카트도로",
    "description": "캐디매니저가 카트 운행 중 전방주의 미흡으로 인하여 카트도로 왼쪽 연석 방향으로 카트가 기울어졌고, 카트와 연석 사이 왼쪽 발이 낌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "파인4H~5H 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H~5H 카트도로] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-08-27",
    "timeline": [
      {
        "time": "2026.08.26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000110",
    "date": "2026.08.25",
    "incidentType": "인사사고",
    "businessUnit": "김해도시계획시설",
    "victimType": "직원",
    "location": "김해도시계획시설",
    "description": "일용직 근로자가 잔디식재작업 중 의식을 잃고 쓰러짐(원인미상, 개인 기저질환 추정)",
    "cost": 0,
    "notes": "",
    "category": "인사사고",
    "resort": "김해도시계획시설",
    "locationDetail": "김해도시계획시설",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[김해도시계획시설] 인사사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 고령 및 기저질환 근로자 건강상태 점검 실시 - 응급상황 대처방법 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2026-08-26",
    "timeline": [
      {
        "time": "2026.08.25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000106",
    "date": "2026.08.22",
    "incidentType": "클럽 파손",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H 주변 판석 보도",
    "description": "브릿지4H에서 홀아웃 후 김종수 캐디가 카트로 돌아가기 위해 좌측 옆구리에 고객님들의 클럽(8개)를 좌측 겨드랑이에 파지 후 이동 중 이혜련 고객의 클럽이 판석에 떨어짐",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H 주변 판석 보도",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H 주변 판석 보도] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-08-23",
    "timeline": [
      {
        "time": "2026.08.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000103",
    "date": "2026.08.20 17:50경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "CS팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "차량 주차 중 주차장에 튀어 나와 있는 조경수와 충돌하여 차량 파손 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "CS팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당 구역 반송(4주) 이식 완료",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2026-08-21",
    "timeline": [
      {
        "time": "2026.08.20 17:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.20 17:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000105",
    "date": "2026.08.20 16:00경",
    "incidentType": "대물사고",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "여자 사우나",
    "description": "탈수기 이용을 위해 넣은 수영복이 탈수기 아래쪽 모터 뒤쪽에 들어가 훼손",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "파크로쉬",
    "locationDetail": "여자 사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자 사우나] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 탈수기 유입 원인 확인 및 점검 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-08-21",
    "timeline": [
      {
        "time": "2026.08.20 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.20 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000102",
    "date": "2026.08.20 11:50경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "CS팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "차량 주차 중 주차장에 튀어 나와 있는 조경수와 충돌하여 차량 파손 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "CS팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당 구역 반송(4주) 이식 완료",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2026-08-21",
    "timeline": [
      {
        "time": "2026.08.20 11:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.20 11:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000099",
    "date": "2026.08.18 15:40경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "A콘도 객실",
    "description": "발코니 이용 중 실외기 누수로 인한 넘어짐 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "A콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[A콘도 객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 인스팩슨 강화 - 실외기 점검 및 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-08-18",
    "timeline": [
      {
        "time": "2026.08.18 15:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.18 15:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000108",
    "date": "2026.08.17",
    "incidentType": "기타",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "킹콩부대찌개",
    "description": "새벽 시간대 천장 누수로 인한 냉동고가 작동하지 않아 내부 식자재 해동",
    "cost": 100000,
    "notes": "",
    "category": "기타",
    "resort": "힐스빌리지",
    "locationDetail": "킹콩부대찌개",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[킹콩부대찌개] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "보험 처리 완료",
    "totalAmount": 100000,
    "companyAmount": 100000,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-08-25",
    "timeline": [
      {
        "time": "2026.08.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000100",
    "date": "2026.08.15 17:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H 좌측도로",
    "description": "파인5H 좌측 도로를 운행 중이던 김영철님 차량에 공이 날아가 차량 루프에 맞는 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H 좌측도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H 좌측도로] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-08-20",
    "timeline": [
      {
        "time": "2026.08.15 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.15 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000098",
    "date": "2026.08.15",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "빌라B 주차장",
    "description": "건축파트 임화랑M가 우측 편에 주차된 피해차량(직원차량)을 인지하지 못하고 차량 핸들을 우측으로 돌려 차를 이동 중 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "빌라B 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌라B 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-08-15",
    "timeline": [
      {
        "time": "2026.08.15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000097",
    "date": "2026.08.14 17:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H",
    "description": "브릿지4H에서 티샷한 볼이 월송리~힐스빌리지로 이동 중이던 고객의 차량 뒷 휀다를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-08-15",
    "timeline": [
      {
        "time": "2026.08.14 17:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.14 17:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000096",
    "date": "2026.08.13 12:13경",
    "incidentType": "부딪힘",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "야외수영장 워터플레이존",
    "description": "슬라이드 탑승 후 내려오는 도중 몸이 뒤집혀 턱을 찧어 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "레저팀",
    "locationDetail": "야외수영장 워터플레이존",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[야외수영장 워터플레이존] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 슬라이드 탑승 테스트 및 안전점검 - 슬라이드 탑승 시 탑승 요령 안내 후 출발하도록 근무자 재교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-08-13",
    "timeline": [
      {
        "time": "2026.08.13 12:13",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.13 12:13",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000109",
    "date": "2026.08.12",
    "incidentType": "빠짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플4H",
    "description": "메이플4H 50야드 지점에 위치한 QC밸브 덮개를 밟고 발이 빠짐, 에이밍을 잡기 위해 뒤로 이동 중 발생",
    "cost": 0,
    "notes": "",
    "category": "빠짐",
    "resort": "밸리팀",
    "locationDetail": "메이플4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플4H] 빠짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 시설물 점검 및 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-08-25",
    "timeline": [
      {
        "time": "2026.08.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000094",
    "date": "2026.08.09 08:30경",
    "incidentType": "클럽 파손",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플6H",
    "description": "메이플6H 벙커(230m지점)샷 준비 중 소지하고 있던 클럽 2개 중 유틸리티를 벙커 인근에 내려놓았고, 작업 중인 로봇모어가 인지하지 못하면서 끼인 채로 이동 되어 골프클럽이 손상됨",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "밸리팀",
    "locationDetail": "메이플6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플6H] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-08-11",
    "timeline": [
      {
        "time": "2026.08.09 08:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.09 08:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000093",
    "date": "2026.08.05 16:35경",
    "incidentType": "기타",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워D",
    "description": "객실 이용 고객이 샤워기 헤드의 테두리 부분에 긁혀 오른쪽 볼에 10cm 내외의 상처 발생",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "힐스빌리지",
    "locationDetail": "타워D",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워D] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-08-05",
    "timeline": [
      {
        "time": "2026.08.05 16:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.08.05 16:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000091",
    "date": "2026.07.31 17:00경",
    "incidentType": "부딪힘",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "야외수영장 워터플레이존",
    "description": "야외수영장 워터플레이존 이용고객이 철제 안내판이 바람에 넘어지면서 지나가던 고객 우측어깨와 충돌",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "레저팀",
    "locationDetail": "야외수영장 워터플레이존",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[야외수영장 워터플레이존] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 야외 안내문 전량 점검 - 안내 POP 보양작업",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-31",
    "timeline": [
      {
        "time": "2026.07.31 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.31 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000089",
    "date": "2026.07.26 17:04경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "남자 사우나",
    "description": "노천탕 이용 후 밖으로 이동하던 사고자가 사우나 내부에서 뒤로 미끄러지며 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "남자 사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[남자 사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "미끄럼방지 매트 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-27",
    "timeline": [
      {
        "time": "2026.07.26 17:04",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.26 17:04",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000086",
    "date": "2026.07.19 15:35경",
    "incidentType": "기타",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "야외수영장 유수풀",
    "description": "야외수영장 유수풀에서 아쿠아슈즈와 타일이 미끄러워 물에 빠짐",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "레저팀",
    "locationDetail": "야외수영장 유수풀",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[야외수영장 유수풀] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "수영장 풀 이용 시 아쿠아슈즈 미착용 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-19",
    "timeline": [
      {
        "time": "2026.07.19 15:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.19 15:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000085",
    "date": "2026.07.19 11:09경",
    "incidentType": "넘어짐",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "실내수영장",
    "description": "실내수영장 이동 중 풀 안쪽 타일을 밟아 미끄러져 넘어지는 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "레저팀",
    "locationDetail": "실내수영장",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[실내수영장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-19",
    "timeline": [
      {
        "time": "2026.07.19 11:09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.19 11:09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000087",
    "date": "2026.07.19 10:35경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌라N 승차대",
    "description": "보행 중 승차대 바닥에 설치된 미끄럼방지 패드의 구겨진 부분에 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "빌라N 승차대",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌라N 승차대] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "미끄럼방지 패드 정돈 상태 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-07-21",
    "timeline": [
      {
        "time": "2026.07.19 10:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.19 10:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000083",
    "date": "2026.07.18 17:53경",
    "incidentType": "기타",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "야외수영장 유아풀",
    "description": "야외수영장 유아풀에서 아쿠아슈즈와 타일이 미끄러워 물에 빠진 아이 고객을 건지는데 지연됨",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "레저팀",
    "locationDetail": "야외수영장 유아풀",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[야외수영장 유아풀] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "수영장 풀 이용 시 아쿠아슈즈 미착용 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-18",
    "timeline": [
      {
        "time": "2026.07.18 17:53",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.18 17:53",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000088",
    "date": "2026.07.17 12:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 공이 군도변을 주행 중이던 피해자 차량 하부를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "기존 안전망 높이 연장 예정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-07-23",
    "timeline": [
      {
        "time": "2026.07.17 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.17 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000082",
    "date": "2026.07.11 08:20경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H",
    "description": "브릿지 4H에서 홀아웃 후 이동을 위해 카트로 이동 중 뒷팀의 볼에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-07-11",
    "timeline": [
      {
        "time": "2026.07.11 08:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.11 08:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000079",
    "date": "2026.07.11 04:20경",
    "incidentType": "장비사고(샌드프로)",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "12H 화이트티 내려오는 경사구간",
    "description": "벙커 정리 작업을 수행하던 일용직 작업자가 샌드프로를 운전하여 12H 블루티에서 화이트티 방향으로 이동 중 사고 발생",
    "cost": 0,
    "notes": "사고자 진술 : 커브구간에서 브레이크가 정상적으로 작동되지 않음",
    "category": "장비사고(샌드프로)",
    "resort": "성문안팀",
    "locationDetail": "12H 화이트티 내려오는 경사구간",
    "specialNotes": "사고자 진술 : 커브구간에서 브레이크가 정상적으로 작동되지 않음",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[12H 화이트티 내려오는 경사구간] 장비사고(샌드프로) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-07-11",
    "timeline": [
      {
        "time": "2026.07.11 04:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.11 04:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000081",
    "date": "2026.07.10 18:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H",
    "description": "타워D에 투숙 중이던 고객이 드라이빙레인지 이용을 위해 자차로 월송리 방면으로 이동 중 브릿지6H에서 날아온 볼에 본넷이 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-07-11",
    "timeline": [
      {
        "time": "2026.07.10 18:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.10 18:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000077",
    "date": "2026.07.07 13:37경",
    "incidentType": "열상",
    "businessUnit": "파크로쉬시설팀",
    "victimType": "직원",
    "location": "여자 사우나",
    "description": "여자사우나 내부 시설물 점검 중 노천탕 입구 강화유리가 파손되면서 작업 중이던 근로자(이상덕/시설) 오른쪽 엄지 손가락에 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "파크로쉬시설팀",
    "locationDetail": "여자 사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[여자 사우나] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-07",
    "timeline": [
      {
        "time": "2026.07.07 13:37",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.07 13:37",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000074",
    "date": "2026.07.05 14:43경",
    "incidentType": "감전",
    "businessUnit": "레저팀",
    "victimType": "고객",
    "location": "수영장 사우나",
    "description": "탈수기 사용 중 노출된 타이머 컨트롤러 금속 부분에 접촉하여 미세 감전 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "감전",
    "resort": "레저팀",
    "locationDetail": "수영장 사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장 사우나] 감전 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "전기팀 점검 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-07-05",
    "timeline": [
      {
        "time": "2026.07.05 14:43",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.05 14:43",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000075",
    "date": "2026.07.05 12:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인 4H에서 티샷한 공이 군도변을 지나가는 차량 지붕을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-07-06",
    "timeline": [
      {
        "time": "2026.07.05 12:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.05 12:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000073",
    "date": "2026.07.04 11:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인 4H에서 티샷한 공이 군도변을 지나가는 차량 본네트를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-07-04",
    "timeline": [
      {
        "time": "2026.07.04 11:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.07.04 11:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000071",
    "date": "2026.06.17 12:26경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장 D구역",
    "description": "라운딩 정산 종료 후 차량 전면 유리가 공에 맞아 파손됨",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장 D구역",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장 D구역] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-06-17",
    "timeline": [
      {
        "time": "2026.06.17 12:26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.17 12:26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000070",
    "date": "2026.06.15 13:05경",
    "incidentType": "대물사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H",
    "description": "그린 플레이 중 정차된 5인승 카트를 피해 우회 하려던 작업 차량이 고객 클럽을 파손(임평만 매니저)",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "월송리팀",
    "locationDetail": "10H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-06-15",
    "timeline": [
      {
        "time": "2026.06.15 13:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.15 13:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000069",
    "date": "2026.06.13 13:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H 군도변에서 이동 중인 차량 운전석을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-06-15",
    "timeline": [
      {
        "time": "2026.06.13 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.13 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000067",
    "date": "2026.06.10 14:05경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐1H 그린",
    "description": "힐코스 1H 그린 입구에서 코스 진입 중 잔디보호 매트를 인식하지 못하고 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "힐1H 그린",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐1H 그린] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 잔디보호 매트 점검 및 개선 조치 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-06-10",
    "timeline": [
      {
        "time": "2026.06.10 14:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.10 14:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000066",
    "date": "2026.06.09 13:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "직원",
    "location": "브릿지3H 군도변",
    "description": "자차를 이용하여 출근 중 브릿지 3H에서 날아온 볼에 차량 보닛을 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지3H 군도변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지3H 군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-06-10",
    "timeline": [
      {
        "time": "2026.06.09 13:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.09 13:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000064",
    "date": "2026.06.03 15:10경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리2H 군도변",
    "description": "박찬우 회원님께서 체리2H에서 티샷한 공이 군도변을 주행 중이던 조찬우님 차량 보닛을 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리2H 군도변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리2H 군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-06-04",
    "timeline": [
      {
        "time": "2026.06.03 15:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.03 15:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000063",
    "date": "2026.06.03 14:40경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H 군도변",
    "description": "힐스에서 월송리 방면 군도로 차량 이동 중 브릿지 6H에서 넘어온 공에 차량 전방 보닛을 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 군도변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-06-03",
    "timeline": [
      {
        "time": "2026.06.03 14:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.06.03 14:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000060",
    "date": "2026.05.25 08:39경",
    "incidentType": "열상",
    "businessUnit": "파크로쉬",
    "victimType": "직원",
    "location": "아쿠아클럽",
    "description": "사우나 리프뤠쉬먼트 스테이션 환경 개선을 위해 디스펜서를 세척하는 과정에 노즐 분해/결합 중 날카로운 나사선에 오른쪽 검지 손가락에 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "파크로쉬",
    "locationDetail": "아쿠아클럽",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[아쿠아클럽] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 개인보호구 착용",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-05-26",
    "timeline": [
      {
        "time": "2026.05.25 08:39",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.25 08:39",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000053",
    "date": "2026.05.17 18:28경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "2H",
    "description": "9H에서 티샷한 공이 브릿지 2H로 넘어가 다른 팀 고객의 허벅지를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[2H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-05-18",
    "timeline": [
      {
        "time": "2026.05.17 18:28",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.17 18:28",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000052",
    "date": "2026.05.17 11:00경",
    "incidentType": "화재",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "광장",
    "description": "2부 영업 대기 중인 5인승 68번 카트 키박스 주변에서 화재 발생 블랙박스 배선 작업부 합선 또는 쇼트 추정",
    "cost": 0,
    "notes": "",
    "category": "화재",
    "resort": "월송리팀",
    "locationDetail": "광장",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[광장] 화재 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-05-18",
    "timeline": [
      {
        "time": "2026.05.17 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.17 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000054",
    "date": "2026.05.17",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "16H",
    "description": "16H 세컨샷 준비 중 11H 세컨샷이 넘어와 오른쪽 손등을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-05-18",
    "timeline": [
      {
        "time": "2026.05.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000055",
    "date": "2026.05.16 09:30경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워C 지상주차장",
    "description": "고객이 타워C 앞 지상주차장에서 보행 중 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "타워C 지상주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워C 지상주차장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-05-18",
    "timeline": [
      {
        "time": "2026.05.16 09:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.16 09:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000050",
    "date": "2026.05.16",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H",
    "description": "카트도로를 통해 여성 티 그라운드로 이동 중이던 고객을 리모콘 조작 부주의에 의해 같은 팀 5인승 카트가 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-05-17",
    "timeline": [
      {
        "time": "2026.05.16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000056",
    "date": "2026.05.13 11:30경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "6H↔7H 카트도로",
    "description": "그린 작업을 위해 카트도로 역주행 작업차량이 자동주행 중이던 고객 카트 측면과 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "6H↔7H 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[6H↔7H 카트도로] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 카트도로 내 작업차량 역주행 금지, 사고사례 교육 실시 - 코스 내 작업차량 자동주행 카트 동선에 간섭되지 않도록 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-05-26",
    "timeline": [
      {
        "time": "2026.05.13 11:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.13 11:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000057",
    "date": "2026.05.10 13:50경",
    "incidentType": "차량사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "밸리CC 전기차 주차장",
    "description": "대정 김상기 직원이 직원식당에서 식사 후 차량 출차 과정 중 전기차 충전 구역에 정차되어 있던 고객의 차량과 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리팀",
    "locationDetail": "밸리CC 전기차 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 전기차 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2026-05-26",
    "timeline": [
      {
        "time": "2026.05.10 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.10 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000048",
    "date": "2026.05.10",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "주차장 D구역 주차되어 있던 고객 차량 전면 유리가 공에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-05-10",
    "timeline": [
      {
        "time": "2026.05.10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000049",
    "date": "2026.05.09 12:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인 4H에서 티샷한 공이 군도변을 지나가는 차량 앞 유리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 높이 연장",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-05-11",
    "timeline": [
      {
        "time": "2026.05.09 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.09 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000046",
    "date": "2026.05.06 11:29경",
    "incidentType": "낙상사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "18H 그린주변",
    "description": "티오프를 위해 카트로 이동 중 조수석에 앉아 있던 고객이 자세를 바꾸면서 카트에서 떨어짐",
    "cost": 0,
    "notes": "",
    "category": "낙상사고",
    "resort": "힐스팀",
    "locationDetail": "18H 그린주변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[18H 그린주변] 낙상사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 교육 실시 - 낙상사고 방지를 위한 안전바 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-05-06",
    "timeline": [
      {
        "time": "2026.05.06 11:29",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.06 11:29",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000047",
    "date": "2026.05.05 22:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌라S 객실",
    "description": "아이 고객이 샤워 후 넘어지며 샤워부스 레일에 머리를 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "빌라S 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌라S 객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-05-07",
    "timeline": [
      {
        "time": "2026.05.05 22:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.05.05 22:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000045",
    "date": "2026.04.27",
    "incidentType": "카트사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "야외주차장",
    "description": "고객님의 차량에 캐디백 상차를 위해 클럽하우스 승차대 정면 주차장으로 이동하여 A 고객의 캐디백 상차 후 B고개의 상차를 위해 후진으로 이동 중 동시에 귀가를 위해 주차장을 벗어나려 후진으로 이동하는 고객의 차량과 접촉하며 일어난 사고 임.",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "힐스팀",
    "locationDetail": "야외주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[야외주차장] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 별도 정차구역 설정 후 도보로 이동하여 캐디백 상차 할 수 있도록 운영 방법 변경",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-04-28",
    "timeline": [
      {
        "time": "2026.04.27",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.27",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000043",
    "date": "2026.04.25 11:10경",
    "incidentType": "기타",
    "businessUnit": "힐스빌리지",
    "victimType": "직원",
    "location": "D콘도",
    "description": "11:10경 D콘도 입구 좌측 예초작업 중 예초기 날에 자갈이 부딪혀 날아가 외벽 유리 파손",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 위험요소 제거 후 작업",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-04-25",
    "timeline": [
      {
        "time": "2026.04.25 11:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.25 11:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000041",
    "date": "2026.04.20",
    "incidentType": "차량사고",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "장비관리동 진입로",
    "description": "야간 작업 후 장비동으로 복귀하던 중, 이동 경로 상 조명이 부족해 도로 턱을 인지하지 못했고, 장비가 도로 턱을 통과하는 과정에서 기어 이탈이 발생하여 기기 작동이 불능 상태에 이름. 이에, 근무자 장비 창고동으로 장비 핸들 조정하여 장비 창고 정문 충돌한 사고의 件",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "성문안팀",
    "locationDetail": "장비관리동 진입로",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[장비관리동 진입로] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 작업도로 노면 개선 및 조도 개선",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-04-21",
    "timeline": [
      {
        "time": "2026.04.20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000040",
    "date": "2026.04.16 10:00경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "7H",
    "description": "메이플7H 그린 주변에서 근무 중이던 캐디와 7H 그린 앞 진출로 보식 작업을 진행하던 차량과 부딪히는 사고 발생 / 카트는 자동운행 중이었으며 작업차량 유도선 위에 위치",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[7H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 카트 자동 운행 시 이동 동선 확인 - 카트도로 내 작업차량 정차 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-04-17",
    "timeline": [
      {
        "time": "2026.04.16 10:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.16 10:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000039",
    "date": "2026.04.13 10:15경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "여자 습식사우나",
    "description": "사우나 이용 중 불상의 사유로 사우나 내부에서 미끄러져 넘어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "여자 습식사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자 습식사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "습식사우나 내부 미끄럼 방지매트 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-04-15",
    "timeline": [
      {
        "time": "2026.04.13 10:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.13 10:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000036",
    "date": "2026.04.04 21:20경",
    "incidentType": "차량사고",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "군도변",
    "description": "진부 출발 → 파크로쉬 방향 셔틀 운행 중 고라니 충돌로 인한 차량 파손",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "파크로쉬",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2026-04-09",
    "timeline": [
      {
        "time": "2026.04.04 21:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.04 21:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000035",
    "date": "2026.04.02 13:10경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "장비관리동",
    "description": "16H에서 티샷한 볼이 장비관리동 진입로에서 작업 준비중인 대정골프 근로자 머리에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "장비관리동",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[장비관리동] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 연장 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2026-04-02",
    "timeline": [
      {
        "time": "2026.04.02 13:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.02 13:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000033",
    "date": "2026.04.01 15:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "뮤지엄산 입구",
    "description": "18H 세컨샷 또는 어프로치샷으로 추정되는 볼이 뮤지엄산에서 루이뷔통 VIP고객 파티 행사 진행 중 보안스탭 차량 본닛을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "월송리팀",
    "locationDetail": "뮤지엄산 입구",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[뮤지엄산 입구] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-04-02",
    "timeline": [
      {
        "time": "2026.04.01 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.04.01 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000032",
    "date": "2026.03.22 09:10경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크5H",
    "description": "뒷팀 4H 200yd 지점에서 샷한 공이 쌩크가 발생하여 5H 그린으로 이동 중인 사고자 회원 좌측 종아리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-03-23",
    "timeline": [
      {
        "time": "2026.03.22 09:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.03.22 09:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000031",
    "date": "2026.03.22 05:39경",
    "incidentType": "낙상사고",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌라B 객실",
    "description": "고객이 자다가 침대에서 떨어져 머리를 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "낙상사고",
    "resort": "밸리빌리지",
    "locationDetail": "빌라B 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌라B 객실] 낙상사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-03-22",
    "timeline": [
      {
        "time": "2026.03.22 05:39",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.03.22 05:39",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000042",
    "date": "2026.03.21 16:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "B콘도 로비",
    "description": "고객 빌라B 로비의 조형물을 관람하던 중 단차에 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 로비",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 로비] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 계단주의 바닥 부착 안내문 설치 - 필요 시 A형 계단 넘어짐 사이니지 추가 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-04-22",
    "timeline": [
      {
        "time": "2026.03.21 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.03.21 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000028",
    "date": "2026.03.17",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "18H",
    "description": "18H 레드티 개선 공사로 설치된 차광막에 의한 시인성 불량으로 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "18H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[18H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 시인성 확보 및 작업구획 설정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-03-18",
    "timeline": [
      {
        "time": "2026.03.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.03.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000029",
    "date": "2026.03.16 06:00경",
    "incidentType": "차량사고",
    "businessUnit": "힐스팀",
    "victimType": "직원",
    "location": "브릿지6H 다리",
    "description": "새벽 작업을 위한 이동 중 짙은 안개로 인한 시인성 불량으로 다리난간과 차량 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 다리",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 다리] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 운행 중 저속 운행 - 교량 진입 전 반드시 감속 후 진입",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2026-03-19",
    "timeline": [
      {
        "time": "2026.03.16 06:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.03.16 06:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000025",
    "date": "2026.03.05 13:26경",
    "incidentType": "기타",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "7H",
    "description": "티샷 과정에서 매트 고정핀을 타격하여 오른팔에 부상",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "월송리팀",
    "locationDetail": "7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[7H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 18H 전수조사 및 고정핀 제거 및 위치 변경",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-03-05",
    "timeline": [
      {
        "time": "2026.03.05 13:26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.03.05 13:26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000026",
    "date": "2026.02.28 09:15경",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "아웃코스 티하우스 화장실 진입로",
    "description": "화장실 이용을 위해 진입하던 중 바닥 나무 디딤판에서 미끄러져 오른 발목 및 무릎 충격",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "아웃코스 티하우스 화장실 진입로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃코스 티하우스 화장실 진입로] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 논슬립 테이프 작업",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2026-03-10",
    "timeline": [
      {
        "time": "2026.02.28 09:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.28 09:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000024",
    "date": "2026.02.22 01:48경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "S콘도 객실",
    "description": "객실 내 화장실 세면대 누수로 인한 물고임으로 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "S콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[S콘도 객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 객실 점검 시 화장실 누수 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-02-23",
    "timeline": [
      {
        "time": "2026.02.22 01:48",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.22 01:48",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000023",
    "date": "2026.02.20 15:30경",
    "incidentType": "부딪힘",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "현관",
    "description": "결제 후 퇴장 중 현관 바깥쪽 자동문 옆 유리창에 얼굴을 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "밸리팀",
    "locationDetail": "현관",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[현관] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유리창 보호 라인 스티커 부착 - 유리창 앞 차단봉 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2026-02-23",
    "timeline": [
      {
        "time": "2026.02.20 15:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.20 15:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000021",
    "date": "2026.02.15 19:39경",
    "incidentType": "베임",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "A콘도 객실",
    "description": "거실 화장실 욕실 샤워부스 유리가 파손되며 발등에 자상 발생",
    "cost": 0,
    "notes": "",
    "category": "베임",
    "resort": "밸리빌리지",
    "locationDetail": "A콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[A콘도 객실] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-02-16",
    "timeline": [
      {
        "time": "2026.02.15 19:39",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.15 19:39",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000020",
    "date": "2026.02.15 13:26경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "플라워 리프트",
    "description": "고객 리프트 하차 도움 요청에 리프트 근무자가 넘어짐 방지를 위해 팔을 당겨 균형을 잡아드리려 보조 중 고객이 중심을 잃고 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "플라워 리프트",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[플라워 리프트] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 탑승보조 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-02-16",
    "timeline": [
      {
        "time": "2026.02.15 13:26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.15 13:26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000019",
    "date": "2026.02.10 20:04경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프 최하단부",
    "description": "- G슬로프 하단부에서 안전 배너 하부 빈 공간으로 여러 차례 통과하여 지나치던 중 안전배너에 부딪혀서 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "G슬로프 최하단부",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프 최하단부] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-02-11",
    "timeline": [
      {
        "time": "2026.02.10 20:04",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.10 20:04",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000017",
    "date": "2026.02.07 16:50경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "플라워 리프트",
    "description": "- 플라워 리프트 탑승을 위해 로딩카페트를 따라 이동하던 중 탑승지점 부근에서 고객 스키 앞부분이 탑승보조자 신발과 접촉 후 균형을 잃고 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "플라워 리프트",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[플라워 리프트] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 탑승보조 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-02-10",
    "timeline": [
      {
        "time": "2026.02.07 16:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.07 16:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000014",
    "date": "2026.02.02 16:18경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "눈놀이동산",
    "description": "- 눈썰매장 하단부 고객 이동 동선 내에서 아이 고객이 썰매 줄에 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "눈놀이동산",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[눈놀이동산] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 썰매 탑승을 위한 동선 이동 시 썰매 내 탑승하여 이동 자제 안내 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-02-03",
    "timeline": [
      {
        "time": "2026.02.02 16:18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.02 16:18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000013",
    "date": "2026.02.01",
    "incidentType": "베임",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "N콘도 객실",
    "description": "거실 주방 바닥 타일 깨진 부분에 발바닥 절상",
    "cost": 0,
    "notes": "",
    "category": "베임",
    "resort": "밸리빌리지",
    "locationDetail": "N콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[N콘도 객실] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 객실 정비 및 파손 부위 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2026-02-01",
    "timeline": [
      {
        "time": "2026.02.01",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.02.01",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000016",
    "date": "2026.01.28 19:39경",
    "incidentType": "끼임",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아쿠아클럽",
    "description": "- 아웃도어 자쿠지 이용을 마치고 인도어스파로 이동하던 여성 고객이 내부 출입문이 오른손 검지 손가락이 끼는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "끼임",
    "resort": "파크로쉬",
    "locationDetail": "아쿠아클럽",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아쿠아클럽] 끼임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유압식 도어 클로저 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-02-09",
    "timeline": [
      {
        "time": "2026.01.28 19:39",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.28 19:39",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000009",
    "date": "2026.01.20 15:15경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "13F 루프탑",
    "description": "루프탑을 이용하던 사고자가 뒤로 미끄러져 넘어짐(결빙 의심)",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "13F 루프탑",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[13F 루프탑] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 고객 동선 내 잔설이 남지 않도록 관리",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2026-01-20",
    "timeline": [
      {
        "time": "2026.01.20 15:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.20 15:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000011",
    "date": "2026.01.19",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "A콘도 객실",
    "description": "화장실 이용을 위해 진입, 입구의 제거되지 않은 물기로 인해 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "A콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[A콘도 객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 객실 정비 시 물기제거 현행 유지 및 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-01-21",
    "timeline": [
      {
        "time": "2026.01.19",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.19",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000008",
    "date": "2026.01.15 17:40경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워C",
    "description": "타워C 포레스트 테라스 인근 아이 고객이 뛰며 결빙 구역에서 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "타워C",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워C] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 염화칼슘 살포 - 상습 결빙구역 순회 점검 - 미끄럼주의 사이니지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-01-15",
    "timeline": [
      {
        "time": "2026.01.15 17:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.15 17:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000007",
    "date": "2026.01.11 12:00경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "눈놀이동산",
    "description": "스위트랜드 돔2 이용 목적으로 입장 시 회전문 기울기 및 바닥 고르지 못함으로 발목을 접지르며 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "눈놀이동산",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[눈놀이동산] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 돔 출입구 바닥 보강작업 - 야자매트 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-01-12",
    "timeline": [
      {
        "time": "2026.01.11 12:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.11 12:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000006",
    "date": "2026.01.10 15:20경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워C",
    "description": "강풍으로 인하여 고정되지 않은 조형물이 날아가며 차량 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "타워C",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워C] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당 조형물 임시 이동 - 조형물 보수 및 고정방안 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-01-10",
    "timeline": [
      {
        "time": "2026.01.10 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.10 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000005",
    "date": "2026.01.10 12:00경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "눈놀이동산",
    "description": "눈놀이동산 출입구에 설치된 구조물이 강풍에 의해 넘어지며 사고자를 충돌함",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "눈놀이동산",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[눈놀이동산] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 설치 업체 안전점검 의뢰 - 기존 설치물 전수 조사 진행 및 고정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-01-10",
    "timeline": [
      {
        "time": "2026.01.10 12:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.10 12:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000003",
    "date": "2026.01.05 10:30경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "눈놀이동산",
    "description": "눈썰매장 하단부 감속 목적으로 설치해둔 야자매트 단차에 우측 발이 걸리면서 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "눈놀이동산",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[눈놀이동산] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 야자매트 돌출부 재점검 및 단차 최소화 -썰매 이용고객 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2026-01-05",
    "timeline": [
      {
        "time": "2026.01.05 10:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2026.01.05 10:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000206",
    "date": "2025.12.25 15:20경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "눈놀이동산",
    "description": "눈썰매장 하단부에 감속 목적으로 설치해둔 야자매트에 썰매가 뒤집히며 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "눈놀이동산",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[눈놀이동산] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 근무자 안전교육 및 영업전 안전점검 실시 - 하단부 야자매트 끝부분 단차 최소화 및 바닥 고정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-12-27",
    "timeline": [
      {
        "time": "2025.12.25 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.12.25 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000205",
    "date": "2025.12.23 14:02경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "리조트 시설을 둘러보던 사고자가 사진 촬영을 위해 아웃도어 스파 폭포를 가로질러 이동하던 중 바닥 결빙으로 인하여 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "출입 제한 구조물 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-12-25",
    "timeline": [
      {
        "time": "2025.12.23 14:02",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.12.23 14:02",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000204",
    "date": "2025.12.21 12:10경",
    "incidentType": "끼임",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "눈놀이동산",
    "description": "고객이 탑승한 튜브썰매 도착 지점에서 튜브썰매 제동 및 고객 하차 보조 업무 진행 중 튜브썰매에 손가락이 끼여 꺾이는 사고",
    "cost": 0,
    "notes": "",
    "category": "끼임",
    "resort": "스키장",
    "locationDetail": "눈놀이동산",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[눈놀이동산] 끼임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 하단부 튜브 속도 감속 조치(야자매트 설치) - 직접적 제동 행위 최소화 - 고객 간 충돌 방지를 위한 안전망 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-12-23",
    "timeline": [
      {
        "time": "2025.12.21 12:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.12.21 12:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000203",
    "date": "2025.12.18 17:09경",
    "incidentType": "대물사고",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워D GS편의점",
    "description": "GS편의점 천장 누수로 인한 물품 피해",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "힐스빌리지",
    "locationDetail": "타워D GS편의점",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워D GS편의점] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "누수부 차수판 설치 및 방수 개선작업 예정(시설팀)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-12-23",
    "timeline": [
      {
        "time": "2025.12.18 17:09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.12.18 17:09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2026-H1892-000012",
    "date": "2025.12.16 10:09경",
    "incidentType": "베임",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "공용 구역",
    "description": "객실 내 테이블 유리 돌출로 인한 손등 베임",
    "cost": 100000,
    "notes": "",
    "category": "베임",
    "resort": "밸리빌리지",
    "locationDetail": "공용 구역",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리빌리지] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "보험 처리 완료",
    "totalAmount": 100000,
    "companyAmount": 100000,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2026-01-21",
    "timeline": [
      {
        "time": "2025.12.16 10:09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.12.16 10:09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000202",
    "date": "2025.12.03",
    "incidentType": "차량사고",
    "businessUnit": "스키장",
    "victimType": "직원",
    "location": "플라워 리프트",
    "description": "포터차량 스키장 오픈 작업 중 미끄럼으로 인해 플라워 리프트 앞 주목나무 화분과 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "스키장",
    "locationDetail": "플라워 리프트",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[플라워 리프트] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-12-04",
    "timeline": [
      {
        "time": "2025.12.03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.12.03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000198",
    "date": "2025.11.29",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H 100yd 계류 지역에서 고객이 볼을 찾으러 이동하여 올라오던 중 중심을 잃고 넘어짐 캐디는 위험구역이라 절대 내려가면 안된다 강조 안내 완료",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "계류주의 사이니지 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-11-30",
    "timeline": [
      {
        "time": "2025.11.29",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.29",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000193",
    "date": "2025.11.24 16:25경",
    "incidentType": "차량사고",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "G층 실내 주차장",
    "description": "파크로쉬 셔틀 AR 기사 스타리아 셔틀차량 실내 주차 중 부주의로 주차된 직원 차량과 접촉 사고",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "파크로쉬",
    "locationDetail": "G층 실내 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G층 실내 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전운행 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-11-25",
    "timeline": [
      {
        "time": "2025.11.24 16:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.24 16:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000194",
    "date": "2025.11.24 13:50경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 공이 훅이 발생하여 안전망 미설치 지역 통과 후 주행 중이던 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전망 연장 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-11-25",
    "timeline": [
      {
        "time": "2025.11.24 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.24 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000195",
    "date": "2025.11.19",
    "incidentType": "근골격계 질환",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐4, 힐7H",
    "description": "1차 힐코스4H 100yd 지점에서 고객 볼을 찾던 중 미끄러져 넘어짐 2차 힐코스 7H 레이디 티잉구역 카트에서 앉아잇다 일어서던 중 왼쪽 근둔부 부위에서 \"뚝\"하는 소리와 함께 통증 발생",
    "cost": 0,
    "notes": "",
    "category": "근골격계 질환",
    "resort": "힐스팀",
    "locationDetail": "힐4, 힐7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐4, 힐7H] 근골격계 질환 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "개인 스트레칭 및 사고 위험성 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-11-26",
    "timeline": [
      {
        "time": "2025.11.19",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.19",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000196",
    "date": "2025.11.18 14:10경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크5H",
    "description": "오크5H 홀아웃 중 침하된 지반에 발이 빠져 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "오크5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크5H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "유관부서 전달 코스 점검 강화를 통안 동일 사고 방지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-11-27",
    "timeline": [
      {
        "time": "2025.11.18 14:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.18 14:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000197",
    "date": "2025.11.18",
    "incidentType": "기타",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인9H",
    "description": "파인9H 80yd 오른쪽 라이트 선상 페어웨이 그린 도보 이동 중 낙엽에 가려진 전자변 뚜껑의 약한 고정으로 맨홀에 약 30cm 가량 발빠짐 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "밸리팀",
    "locationDetail": "파인9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인9H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "유관부서 전달 코스 점검 강화를 통안 동일 사고 방지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-11-28",
    "timeline": [
      {
        "time": "2025.11.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000185",
    "date": "2025.11.17",
    "incidentType": "카트사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "카트고 출차 지역",
    "description": "스타트에서 코스로 진입하는 5인승 카트와 카트고에서 출차 중인 5인승 카트가 부딪히는 사고 캐디 운전 부주의(전방 및 좌우 주시)",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "힐스팀",
    "locationDetail": "카트고 출차 지역",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[카트고 출차 지역] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 카트고 출차 동선 반사경 설치 검토 3. 스타트에서 코스 진입 동선 정지선 마킹 작업 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-11-18",
    "timeline": [
      {
        "time": "2025.11.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000184",
    "date": "2025.11.16",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "8H",
    "description": "고객이 8H 티샷을 마친 후 티잉구역 사면으로 내려오다 잔디매트에 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[8H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 담당 캐디 안전사고 안내 강화 2. 잔디매트 관리(들뜸 방지) 3. 잔디매트 설치 최소화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-11-18",
    "timeline": [
      {
        "time": "2025.11.16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000181",
    "date": "2025.11.15 04:15경",
    "incidentType": "차량사고",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "군도변",
    "description": "진부 출발 → 파크로쉬 방향 셔틀 운행 중 고라니 충돌로 인한 차량 파손",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "파크로쉬",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-11-18",
    "timeline": [
      {
        "time": "2025.11.15 04:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.15 04:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000200",
    "date": "2025.11.14",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "9H",
    "description": "9H 티샷 중 매트에서 미끄러져 넘어짐에 의한 우측 정강이 비골 골절 넘어짐 사고 이후 2주 뒤 보험 접수 가능 여부 요청",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[9H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스 내 티 매트 전수조사 및 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-12-01",
    "timeline": [
      {
        "time": "2025.11.14",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.14",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000180",
    "date": "2025.11.11",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인3H",
    "description": "피해 차량이 뮤지엄산 방문을 위해 파인3H 좌측 도로를 지나는 중 파인3H에서 티샷 한 볼이 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인3H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "그물망 설치 여부 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-11-12",
    "timeline": [
      {
        "time": "2025.11.11",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.11",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000186",
    "date": "2025.11.09",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "피해차량 4H 좌측 도로를 지나는 중 볼이 날아와 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전망 연장 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-11-21",
    "timeline": [
      {
        "time": "2025.11.09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000177",
    "date": "2025.11.04",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지2H",
    "description": "브릿지2H 페어웨이로 이동 중 러프에서 미끄러져 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지2H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "경기 진행 시 위험구역 안내 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-11-04",
    "timeline": [
      {
        "time": "2025.11.04",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.04",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000178",
    "date": "2025.11.03 08:10경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16H",
    "description": "16H 70m지점 카트길에서 페어웨이로 건너가는 중 돌 다리에서 미끄러져 넘어지는 사고 발생 지속적인 캐디의 위험 안내 실시",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 결빙 위험구간 패트롤 강화 2. 야자매트 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-11-05",
    "timeline": [
      {
        "time": "2025.11.03 08:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.03 08:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000179",
    "date": "2025.11.02 16:50경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "루프탑",
    "description": "루프탑 이용 중 별자리 관측을 용이하게 등기구를 소등한 상태. 단차를 확인하지 못하고 이동 중 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "루프탑",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[루프탑] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 주의 사이니지 신규 설치 2. 고객 이동동선 조도확보",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-11-05",
    "timeline": [
      {
        "time": "2025.11.02 16:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.02 16:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000172",
    "date": "2025.11.01",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리5H 좌측 도로를 지나는 중 인접 홀에서 볼이 넘어와 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 군도 인접 홀 티샷 시 안내 강화 2. 안전망 보완 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-11-03",
    "timeline": [
      {
        "time": "2025.11.01",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.11.01",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000174",
    "date": "2025.10.30 20:54경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아쿠아클럽 남자 사우나",
    "description": "노천탕 이용 후 밖으로 이동하던 중 계단에서 미끄러짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아쿠아클럽 남자 사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아쿠아클럽 남자 사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "노천탕 입구 계단 미끄럼 방지용 매트 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-11-03",
    "timeline": [
      {
        "time": "2025.10.30 20:54",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.30 20:54",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000171",
    "date": "2025.10.30",
    "incidentType": "기타",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "기타",
    "description": "지갑분실",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "밸리팀",
    "locationDetail": "기타",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[기타] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-11-03",
    "timeline": [
      {
        "time": "2025.10.30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000168",
    "date": "2025.10.29 08:00경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플3H",
    "description": "메이플2H 200yd 지점에서 세컨샷한 공이 슬라이스가 되어 3H 화이트티 옆 카트 안에서 대기중인 고객 무릎에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1.티샷 시 안내멘트 강화 2. 티마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-10-30",
    "timeline": [
      {
        "time": "2025.10.29 08:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.29 08:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000170",
    "date": "2025.10.29",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐5H",
    "description": "힐5H 본인 페어웨이로 이동 중 러프/페어웨이 물기로 인해 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "힐5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐5H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "경기 진행 시 위험구역 안내 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-11-01",
    "timeline": [
      {
        "time": "2025.10.29",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.29",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000167",
    "date": "2025.10.28 20:20경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리9H",
    "description": "야간 그린 작업을 위해 운전석 문 개방 중 후방에서 자동주행으로 오던 카트를 인지하지 못하여 추돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "체리9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리9H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-10-29",
    "timeline": [
      {
        "time": "2025.10.28 20:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.28 20:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000169",
    "date": "2025.10.26",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐7H",
    "description": "힐7H 100m 지역 오른쪽 페어웨이에서 고객의 볼이 오른쪽으로 심한 생크가 발생하여 러프에 있던 고객 오른쪽 손등을 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐7H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1.티샷 시 안내멘트 강화 2. 티마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-11-01",
    "timeline": [
      {
        "time": "2025.10.26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000166",
    "date": "2025.10.22 12:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H 도로를 지나는 중 티샷한 공이 차량 보닛에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 군도 인접 홀 티샷 시 안내 강화 2. 안전망 규모 확대 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-10-24",
    "timeline": [
      {
        "time": "2025.10.22 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.22 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000165",
    "date": "2025.10.20 09:45경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "B콘도 주차장",
    "description": "B콘도 주차장에 주차 중인 지구언 차량 선루프가 인접 홀에서 날아온 공에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "B콘도 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 군도 인접 홀 티샷 시 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-10-24",
    "timeline": [
      {
        "time": "2025.10.20 09:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.20 09:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000162",
    "date": "2025.10.17",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "밸리 라운드를 위해 내장하시던 고객이 파인4H 라운드 중인 고객의 티샷의 훅으로 인해 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 군도 인접 홀 티샷 시 안내 강화 2. 안전망 규모 확대 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-10-18",
    "timeline": [
      {
        "time": "2025.10.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000164",
    "date": "2025.10.16 08:40경",
    "incidentType": "떨어짐",
    "businessUnit": "잠실진주",
    "victimType": "직원",
    "location": "잠실진주",
    "description": "강관비계 작업발판 위에서 해체 작업 중 이동을 위해 안전벨트 이동 체결 전 작업발판에 체결 된 고정 클램프에서 비계 파이프가 빠지며 발판이 아래쪽으로 빠지며 1명은 추락 1명은 고리에 걸림",
    "cost": 0,
    "notes": "",
    "category": "떨어짐",
    "resort": "잠실진주",
    "locationDetail": "잠실진주",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[잠실진주] 떨어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 클램프 체결상태 확인 및 조임작업 실시 후 작업 2. 작업발판 하부에 말비계 설치 후 작업 발판 해제 (안전대 반드시 체결)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-10-21",
    "timeline": [
      {
        "time": "2025.10.16 08:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.16 08:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000161",
    "date": "2025.10.16 08:13경",
    "incidentType": "부딪힘",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "밸리CC 현관",
    "description": "차량 트렁크 백 하차 중 우산을 꺼내려던 찰나 이를 인지하지 못한 현관 근무자가 트렁크를 닫아 고객이 트렁크 문 모서리에 이마를 부딪혀 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "밸리팀",
    "locationDetail": "밸리CC 현관",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[밸리CC 현관] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "협력사 응대 절차 리뷰 및 보완",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-10-16",
    "timeline": [
      {
        "time": "2025.10.16 08:13",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.16 08:13",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000158",
    "date": "2025.10.03",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "스타트하우스 야외데크",
    "description": "9H 턴 후 스타트하우스 이용을 위해 야외데크를 지나가던 중 우천으로 인해 미끄러워진 데크에서 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "스타트하우스 야외데크",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스타트하우스 야외데크] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "미끄럼주의 사이니지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-10-10",
    "timeline": [
      {
        "time": "2025.10.03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.10.03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000157",
    "date": "2025.09.26",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인6H",
    "description": "A고객이 예고없이 친 볼이 카트도로 바운드 후 같은 팀 B고객의 입술을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-09-27",
    "timeline": [
      {
        "time": "2025.09.26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000156",
    "date": "2025.09.22",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "B콘도 주차장",
    "description": "B콘도 후면 주차장에서 오른편에 주차된 피해차량을 인지하지 못하고 차를 이동하던 중 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-09-24",
    "timeline": [
      {
        "time": "2025.09.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000152",
    "date": "2025.09.22",
    "incidentType": "기타",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐4H",
    "description": "힐4H 티잉 구역에서 내려오던 중 잔디 매트에 걸리고 오른쪽 골반 통증 호소",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "힐스팀",
    "locationDetail": "힐4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐4H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 잔디매트 관리(들뜸 방지) 2. 잔디매트 설치 최소화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-09-22",
    "timeline": [
      {
        "time": "2025.09.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000155",
    "date": "2025.09.21",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16H",
    "description": "16H 티샷을 마치고 카트로 이동 중 덜컥 소리와 함께 골프백을 결속한 버클이 풀려 고객의 골프백이 카트도로에 떨어지며 클럽 손상",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "골프백 결속용 스트랩 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-09-24",
    "timeline": [
      {
        "time": "2025.09.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000151",
    "date": "2025.09.17 09:00경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스/월송리사업소",
    "victimType": "직원",
    "location": "힐스/월송리 사업소",
    "description": "스키드로더로 비료 하역 작업을 하던 중 주변에 주차되어 있던 승용차를 충돌",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스/월송리사업소",
    "locationDetail": "힐스/월송리 사업소",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐스/월송리 사업소] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 작업 중 주변 시야 확보 - 운전 중 주변 장애물 확인 철저",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-09-17",
    "timeline": [
      {
        "time": "2025.09.17 09:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.17 09:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000148",
    "date": "2025.09.12",
    "incidentType": "기타",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플4H",
    "description": "메이플4H 그린 전 벙커 스윙 중 벙커 내 암석으로 인해 스윙 후 부상",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "밸리팀",
    "locationDetail": "메이플4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플4H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "벙커 관리 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-09-17",
    "timeline": [
      {
        "time": "2025.09.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000146",
    "date": "2025.09.06",
    "incidentType": "기타",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리6H",
    "description": "체리6H 그린 전 벙커 스윙 중 벙커 내 암석으로 인해 스윙 후 부상",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "밸리팀",
    "locationDetail": "체리6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리6H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "벙커 관리 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-09-10",
    "timeline": [
      {
        "time": "2025.09.06",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.06",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000145",
    "date": "2025.09.03 16:30경",
    "incidentType": "대물사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인9H",
    "description": "파인9H 150YD 우측 러프 쪽으로 미스샷 볼을 찾기 위해 고객 이동. 볼을 찾는 과정 중 하의 하단부와 신발에 야생화로 인한 오염 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "밸리팀",
    "locationDetail": "파인9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인9H] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-09-05",
    "timeline": [
      {
        "time": "2025.09.03 16:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.09.03 16:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000144",
    "date": "2025.08.31 01:30경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워D",
    "description": "타워D 로비 자동문에 머리를 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "타워D",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워D] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "자동문 식별 스티커 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-08-31",
    "timeline": [
      {
        "time": "2025.08.31 01:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.31 01:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000143",
    "date": "2025.08.30 17:10경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리5H 티잉그라운드에서 친 티샷이 좌측 악성 훅이 발생하여 주행 중이던 차량에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 군도 인접 홀 티샷 시 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-08-30",
    "timeline": [
      {
        "time": "2025.08.30 17:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.30 17:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000141",
    "date": "2025.08.28 14:50경",
    "incidentType": "차량사고",
    "businessUnit": "파크로쉬",
    "victimType": "직원",
    "location": "출입구",
    "description": "파크로쉬 출장 후 복귀 중 도로에 설치된 스틸 그레이팅이 튀어 오르며 대우커버 파손",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "파크로쉬",
    "locationDetail": "출입구",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[출입구] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "운전자 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-08-29",
    "timeline": [
      {
        "time": "2025.08.28 14:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.28 14:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000142",
    "date": "2025.08.27 06:30경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "조각공원",
    "description": "조각공원 이용 중 바닥(석재 및 잔디) 습기로 인해 미끄러짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "조각공원",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[조각공원] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 안내용 센서형 야외스피커 설치(7EA) 2. 급경사구간 논슬립테이프 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-08-29",
    "timeline": [
      {
        "time": "2025.08.27 06:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.27 06:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000138",
    "date": "2025.08.26",
    "incidentType": "차량사고",
    "businessUnit": "군도변",
    "victimType": "직원",
    "location": "군도변",
    "description": "군도변 환경작업 후 작업자 및 장비 탑승/적재 완료 후 이동을 위해 후진 중 후방에 주차되어 있는 차량을 인지하지 못하고 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "군도변",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "운전자 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-08-27",
    "timeline": [
      {
        "time": "2025.08.26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000137",
    "date": "2025.08.24 12:40경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "라운드 중 발생된 타구로 인해 차량 파손",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-08-24",
    "timeline": [
      {
        "time": "2025.08.24 12:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.24 12:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000136",
    "date": "2025.08.23 06:50경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "클럽하우스 광장 계단",
    "description": "클럽하우스에서 광장으로 이동하는 계단 끝 부분 잔디 제거용 발판에 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "클럽하우스 광장 계단",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[클럽하우스 광장 계단] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "잔디 제거용 발판 정리",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-08-23",
    "timeline": [
      {
        "time": "2025.08.23 06:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.23 06:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000135",
    "date": "2025.08.21 16:06경",
    "incidentType": "대물사고",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "수영장 내장고객 결제를 위해 휴대폰을 전달받는 과정에서 휴대폰을 놓쳐 훼손됨",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "결제기 위치 조정 -> 데스크 위",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-08-23",
    "timeline": [
      {
        "time": "2025.08.21 16:06",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.21 16:06",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000133",
    "date": "2025.08.21 14:10경",
    "incidentType": "클럽 파손",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플7H",
    "description": "어프로치를 하던 중 벙커 내 돌덩이로 인해 클럽 손상됨",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "밸리팀",
    "locationDetail": "메이플7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플7H] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "벙커 모래 관리 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-08-21",
    "timeline": [
      {
        "time": "2025.08.21 14:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.21 14:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000140",
    "date": "2025.08.18 21:00경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타위C 객실",
    "description": "C814 객실에서 영유아 자녀가 화장실에서 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "타위C 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타위C 객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "화장실 내 미끄럼 주의 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-08-28",
    "timeline": [
      {
        "time": "2025.08.18 21:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.18 21:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000132",
    "date": "2025.08.18 09:30",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "16H",
    "description": "5인승 카트 자동 주행중인 카트와 정차되어 있는 작업차가 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 코스팀(대정) 작업 시 도로에서 벗어나 정차 요청 2. 근무자 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-08-18",
    "timeline": [
      {
        "time": "2025.08.18 09:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.18 09:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000139",
    "date": "2025.08.15 08:50경",
    "incidentType": "차량사고",
    "businessUnit": "군도변",
    "victimType": "직원",
    "location": "댐삼거리",
    "description": "댐삼거리 부근 내리막길에서 운행 중이던 법인차량과 앞서 운행 중이던 고객 차량 간 추돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "군도변",
    "locationDetail": "댐삼거리",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[댐삼거리] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "운전자 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-08-28",
    "timeline": [
      {
        "time": "2025.08.15 08:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.15 08:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000131",
    "date": "2025.08.14 13:40경",
    "incidentType": "떨어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "에어슬라이드를 이용하려 올라가던 중 미끄러져 떨어짐",
    "cost": 0,
    "notes": "",
    "category": "떨어짐",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 떨어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전요원 이용고객 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-08-15",
    "timeline": [
      {
        "time": "2025.08.14 13:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.14 13:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000129",
    "date": "2025.08.13 18:10경",
    "incidentType": "차량사고",
    "businessUnit": "지관사업소",
    "victimType": "직원",
    "location": "단지외",
    "description": "한솔제지 납품 후 복귀 중 식당에서 저녁식사 후 출발 할 때 주차되어 있던 차량을 발견하지 못하고 추돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "지관사업소",
    "locationDetail": "단지외",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[단지외] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2025-08-14",
    "timeline": [
      {
        "time": "2025.08.13 18:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.13 18:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000124",
    "date": "2025.08.09 15:20경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "4H~5H 티잉그라운드 사이",
    "description": "4~5H 티잉 그라운드 사이 고객팀이 대기 중이었던 코스차량과 부딪히는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "4H~5H 티잉그라운드 사이",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H~5H 티잉그라운드 사이] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 카트도로 내 주정차 금지, 역주행 금지 등)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-08-09",
    "timeline": [
      {
        "time": "2025.08.09 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.09 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000128",
    "date": "2025.08.09",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "컨벤션홀",
    "description": "단체행사 고객이 우천으로 인해 미끄러운 철제 받침대를 밟고 이동 중 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "컨벤션홀",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[컨벤션홀] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "동일사고 예방을 위한 쳘제 받침 제거",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-08-11",
    "timeline": [
      {
        "time": "2025.08.09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000123",
    "date": "2025.08.09",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리5H 140Y 벙커 부근 A고객이 친 볼에 같은 팀 B고객 귀 뒷편을 맞아 앞으로 넘어진 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 근무자 안전교육 실시(캐디) - 플레이어가 경기 진행 방향에 위치하지 않도록 제지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-08-09",
    "timeline": [
      {
        "time": "2025.08.09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000122",
    "date": "2025.08.07 09:00경",
    "incidentType": "클럽 파손",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐9H",
    "description": "신입캐디 교육을 위해 2인승 카트 주행 중 힐9H 그린에 정차한 5인승 카트를 인지하지 못하여 충돌",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "힐스팀",
    "locationDetail": "힐9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐9H] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 카트 안전운행 교육 실시 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-08-08",
    "timeline": [
      {
        "time": "2025.08.07 09:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.07 09:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000119",
    "date": "2025.08.01 06:35경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "A콘도 승차대",
    "description": "A콘도 승차대에서 차량으로 짐을 옮기는 중 카트 진입로 단차를 확인하지 못하고 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "A콘도 승차대",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[A콘도 승차대] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "계단주의 사인물 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-08-04",
    "timeline": [
      {
        "time": "2025.08.01 06:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.08.01 06:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000118",
    "date": "2025.07.29 15:20경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "지하주차장",
    "description": "지하주차장 배수펌프 점검을 위해 펜룸 진입 시 내 외부의 차압에 의해 휀룸 안쪽 문이 열리며 앞에 세워져 있던 소화기가 부딪혀 터졌고 분말이 차량 도장면에 묻음",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "파크로쉬",
    "locationDetail": "지하주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[지하주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "소화기 위치 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-07-30",
    "timeline": [
      {
        "time": "2025.07.29 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.29 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000117",
    "date": "2025.07.26 16:20경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워C",
    "description": "타워C 라비 자동문 닫히는 시점에 고객이 외부 방향에서 진입하며 오른쪽 손등을 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "타워C",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워C] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "자동문 센서 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-07-28",
    "timeline": [
      {
        "time": "2025.07.26 16:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.26 16:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000115",
    "date": "2025.07.26 07:00경",
    "incidentType": "베임",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "객실",
    "description": "거실 화장실 샤워 후 문을 닫는 과정에서 샤워 부스 유리가 파손되어 손등이 찢어짐",
    "cost": 0,
    "notes": "",
    "category": "베임",
    "resort": "밸리빌리지",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[객실] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 객실 점검 시 시설물 확인 철저 2. 유리문 시트지 부착 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-07-26",
    "timeline": [
      {
        "time": "2025.07.26 07:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.26 07:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000114",
    "date": "2025.07.25 13:30경",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "발렛데스크",
    "description": "컨베이어에 골프백을 올리는 과정에서 클럽 본체를 컨베이어 벨트의 정중앙에 위치시켜 내려보냄. 백이 내려가는 과정에서 끈이 풀려 벨트와 롤러 사이로 떨어지며 낌.(어깨끈 파손/잘라냄)",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "성문안팀",
    "locationDetail": "발렛데스크",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[발렛데스크] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 현관근로자 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-07-25",
    "timeline": [
      {
        "time": "2025.07.25 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.25 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000116",
    "date": "2025.07.24 20:00",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "자쿠지 내부 단차를 확인하지 못하고 진입하던 중 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "미끄럼주의 및 이용 안내문 보완",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-07-28",
    "timeline": [
      {
        "time": "2025.07.24 20:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.24 20:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000109",
    "date": "2025.07.23 17:20경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "주차장",
    "description": "B1 주차장에서 출차 중 차량 윗쪽에 시멘트 물이 떨어지고 있는 것을 발견",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "파크로쉬",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "누수구역 주차금지 조치 및 보수공사",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-07-23",
    "timeline": [
      {
        "time": "2025.07.23 17:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.23 17:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000108",
    "date": "2025.07.19 19:55경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "수영장 이용 후 이동 중 계단에서 넘어지는 사고 발생 사고 당일 비가 내리고 있었으며, 일행이 빨리 이동하라 재촉하던 상황",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "계단 및 미끄럼주의 사인물 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-07-20",
    "timeline": [
      {
        "time": "2025.07.19 19:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.19 19:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000113",
    "date": "2025.07.19 13:30경",
    "incidentType": "감전",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "객실",
    "description": "객실 내 비치되어 있는 드라이기 사용 중 감전",
    "cost": 0,
    "notes": "",
    "category": "감전",
    "resort": "파크로쉬",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[객실] 감전 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 내 드라이기 전수조사 및 불량제품 교체",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-07-24",
    "timeline": [
      {
        "time": "2025.07.19 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.19 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000107",
    "date": "2025.07.18",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "18H",
    "description": "18H 100m 지점 코스팀 차량의 역주행 및 전방 주시 부주의로 인한 자동주행 중이던 고객 카트와 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "18H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[18H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 역주행 지양 및 운전자 전방주시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-07-18",
    "timeline": [
      {
        "time": "2025.07.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000105",
    "date": "2025.07.12 21:20경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "조각공원",
    "description": "조각공원 산책로 내 단차로 인한 낙상사고 고객 내리막길에 있는 돌이 패여 있어 발을 헛디뎌 발생하였다고함",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "조각공원",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[조각공원] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 위험구간 안내시설 설치 2. 패임구간 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-07-13",
    "timeline": [
      {
        "time": "2025.07.12 21:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.12 21:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000103",
    "date": "2025.07.12",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리3H",
    "description": "파인6H에서 티샷한 볼이 악성 훅으로 인해 인접 홀 체리3H에서 플레이 중이던 고객 발등에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "인접홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-07-12",
    "timeline": [
      {
        "time": "2025.07.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000102",
    "date": "2025.07.12",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리9H",
    "description": "체리9H 화이트티 옆 덮개가 파손된 유도선 맨홀에 발목 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "체리9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리9H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스 정비 시 파손 시설물 교체",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-07-12",
    "timeline": [
      {
        "time": "2025.07.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000101",
    "date": "2025.07.11",
    "incidentType": "대물사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H",
    "description": "고객이 브릿지4H 110m 지점에서 사용한 거리측정기를 바닥에 내려놓은 뒤 챙기지 않고 이동. 이후 5H 블레이 중 거리측정기가 이전 지점에 있는 것을 인지 후 캐디에게 확인 요청한 결과 현장에서 파손된 상태로 발견",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 교육 실시 - 잔디 예지작업 시 서행 운행 및 바닥 장애물 주의",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-07-11",
    "timeline": [
      {
        "time": "2025.07.11",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.11",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000104",
    "date": "2025.07.08",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지3H",
    "description": "브릿지3H 20yd 지점 러프 부근에서 고객 라인 확인 후 볼을 닦던 중 어프로치 샷이 길에 넘어오며 반대쪽에 있던 캐디 머리에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지 - 플레이어 타구 시 항상 응시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-07-13",
    "timeline": [
      {
        "time": "2025.07.08",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.08",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000100",
    "date": "2025.07.05 16:20",
    "incidentType": "대물사고",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "힐스빌리지 2층 여자 사우나 샤워 배관수 연결부 탈락으로 인한 1층 수영장 여자 락커로 물로 보관 중이던 물품이 피해를 입음(휴대폰)",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 점검 및 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-07-07",
    "timeline": [
      {
        "time": "2025.07.05 16:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.05 16:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000099",
    "date": "2025.07.05 16:20",
    "incidentType": "대물사고",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "힐스빌리지 2층 여자 사우나 샤워 배관수 연결부 탈락으로 인한 1층 수영장 여자 락커로 물로 보관 중이던 물품이 피해를 입음(가방 및 화장품)",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 점검 및 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-07-07",
    "timeline": [
      {
        "time": "2025.07.05 16:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.05 16:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000098",
    "date": "2025.07.04 16:10경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H에서 티샷한 볼이 군도변 주행 중이던 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 인접 홀 타구사고 주의 안내 강화 2. 티 마크 일부 수정 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-07-04",
    "timeline": [
      {
        "time": "2025.07.04 16:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.04 16:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000097",
    "date": "2025.07.04 11:40경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "6H",
    "description": "3H에서 티샷한 볼이 6H 세컨 플레이 중이던 고객의 좌측 흉부에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-07-04",
    "timeline": [
      {
        "time": "2025.07.04 11:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.04 11:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000096",
    "date": "2025.07.01 19:32경",
    "incidentType": "클럽 파손",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리6H",
    "description": "체리6H 좌측 그린벙커에서 벙커샷 후 클럽 손상 사고 현장 점검 결과 벙커 내 자갈이 많이 분포되어 있었음",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "밸리팀",
    "locationDetail": "체리6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리6H] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "벙커 모래 관리 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-07-01",
    "timeline": [
      {
        "time": "2025.07.01 19:32",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.07.01 19:32",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000095",
    "date": "2025.06.29 10:00경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "고객이 파인5H 80yd 지점에서 뒤에 오는 자동주행 카트에 부딪힘 근무자가 다른 고객을 챙기는 중 고객 이동동선을 놓치게 되어 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 카트 자동운행 시 이동동선 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-06-30",
    "timeline": [
      {
        "time": "2025.06.29 10:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.29 10:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000092",
    "date": "2025.06.28 08:45경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "군도변",
    "description": "브릿지4H 티잉 구역에서 티샷 한 볼이 넘어가 브릿지1H 좌측 오르막에서 올라오던 차량을 맞춤",
    "cost": 0,
    "notes": "브릿지4H 안전그물망 설치 홀",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "군도변",
    "specialNotes": "브릿지4H 안전그물망 설치 홀",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 군도 인접 홀 티샷 시 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-06-28",
    "timeline": [
      {
        "time": "2025.06.28 08:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.28 08:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000090",
    "date": "2025.06.25 11:26경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "3H",
    "description": "3H 100m 지점 정차되어 있던 코스팀 차량 좌측 뒷 부분과 카트 손잡이 부분이 부딪힘. 카트도로 옆에 충분한 공간이 있었음에도 코스팀 차량이 제대로 정차되어 있지 않음",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 코스팀(대정) 작업 시 도로에서 벗어나 정차 요청 2. 근무자 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-06-25",
    "timeline": [
      {
        "time": "2025.06.25 11:26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.25 11:26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000089",
    "date": "2025.06.25 10:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "군도변",
    "description": "메이플5H 티박스에서 친 티샷이 좌측으로 훅이 발생하여 군도변 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1.티샷 시 안내멘트 강화 2. 티마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-06-25",
    "timeline": [
      {
        "time": "2025.06.25 10:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.25 10:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000088",
    "date": "2025.06.21 22:15",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "객실",
    "description": "객실 내 거실 천장에서 누수가 발생하여 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 정비 시 누수여부 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-06-22",
    "timeline": [
      {
        "time": "2025.06.21 22:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.21 22:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000087",
    "date": "2025.06.21",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "18H",
    "description": "같은 팀이 플레이한 볼이 잘못 맞아 좌측에 있던 동반 고객이 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "18H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[18H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 근무자 안전교육 실시(캐디) - 플레이어가 경기 진행 방향에 위치하지 않도록 제지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-06-21",
    "timeline": [
      {
        "time": "2025.06.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000091",
    "date": "2025.06.18",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "골프백을 차량에 상차하는 도중 운전석 후미 트렁크 하단부 스크래치 발견 CCTV 확인 결과 입차 시 스크래치 확인 불가",
    "cost": 0,
    "notes": "사고예상 시점 2시간 정도 정전으로 CCTV 기록 없음",
    "category": "대물사고(차량피해)",
    "resort": "밸리팀",
    "locationDetail": "주차장",
    "specialNotes": "사고예상 시점 2시간 정도 정전으로 CCTV 기록 없음",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "명확한 원인 규명 불가",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-06-27",
    "timeline": [
      {
        "time": "2025.06.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000086",
    "date": "2025.06.13 19:55경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "군도변 브릿지 3~4H",
    "description": "브릿지4H 티잉구역에서 티샷한 볼이 슬라이스가 발생하여 이동 중인 고객 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "군도변 브릿지 3~4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변 브릿지 3~4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 타구 사고 발생 지역 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-06-14",
    "timeline": [
      {
        "time": "2025.06.13 19:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.13 19:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000085",
    "date": "2025.06.09 15:20경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16H",
    "description": "16H에서 타구한 볼에 성문안 신규 장비관리동 증축 조성을 위해 방문한 작업자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-06-10",
    "timeline": [
      {
        "time": "2025.06.09 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.09 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000083",
    "date": "2025.06.06 23:25경",
    "incidentType": "대물사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "광장 에어컨 앞",
    "description": "5인승 카트 정리 과정 후진 중 뒤에 세어져 있던 골프캐디백이 5인승 카트 백다이에 부딪혀 손상",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "월송리팀",
    "locationDetail": "광장 에어컨 앞",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[광장 에어컨 앞] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "카트 운행 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-06-08",
    "timeline": [
      {
        "time": "2025.06.06 23:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.06 23:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000080",
    "date": "2025.06.06 15:55경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "9H",
    "description": "9H 티잉그라운드 백티에서 I.P거리를 오인하고 진행한 티 샷에 그린 주변에서 어프로치 하던 고객이 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 충분한 안전거리 확보 후 경기 진행 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-06-06",
    "timeline": [
      {
        "time": "2025.06.06 15:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.06 15:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000079",
    "date": "2025.06.04 17:40경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "강풍으로 인해 나뭇가지가 부러지면서 고객 차량을 파손",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "밸리팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "유사 상황 발생 가능 나무 확인 및 조경지원팀 작업 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-06-05",
    "timeline": [
      {
        "time": "2025.06.04 17:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.04 17:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000081",
    "date": "2025.06.04 09:50경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐1H",
    "description": "힐코스1H 180yd 지점에서 플레이한 볼이 쌩크가 나면서 같은 선상 카트에서 대기하던 캐디의 우측 무릎 안쪽을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 개인부주의로 인한 사고/패널티 부과",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-06-07",
    "timeline": [
      {
        "time": "2025.06.04 09:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.06.04 09:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000078",
    "date": "2025.05.31 17:35경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "6H",
    "description": "3H에서 티샷한 볼이 카트도로를 맞은 후 6H 세컨 지점에서 플레이 중이던 고객 갈비뼈에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 타구 사고 발생 지역 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-05-31",
    "timeline": [
      {
        "time": "2025.05.31 17:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.31 17:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000077",
    "date": "2025.05.31 08:45경",
    "incidentType": "벌 쏘임",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리7H",
    "description": "체리7H 레이디티 정차지점에서 티샷 후 카트에서 대기 중 오른쪽 무릎에 벌 쏘임",
    "cost": 0,
    "notes": "",
    "category": "벌 쏘임",
    "resort": "밸리팀",
    "locationDetail": "체리7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리7H] 벌 쏘임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-05-31",
    "timeline": [
      {
        "time": "2025.05.31 08:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.31 08:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000076",
    "date": "2025.05.26 15:10경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크4H",
    "description": "오크4H 고객이 세컨샷한 공이 원바운드 후 앞 팀 고객 등을 맞춘 사고_블라인드 홀",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 -블라인드 홀 앞팀 위치 파악 후 플레이",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-05-27",
    "timeline": [
      {
        "time": "2025.05.26 15:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.26 15:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000075",
    "date": "2025.05.24 09:30경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌리지센터",
    "description": "빌리지센터 3층 타일에서 우천으로 인한 물기와 습기로 인해 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "빌리지센터",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌리지센터] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "우천 시 승차대 ~ 체크인센터 구간 물기 제거 집중",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-05-24",
    "timeline": [
      {
        "time": "2025.05.24 09:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.24 09:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000074",
    "date": "2025.05.22 05:00경",
    "incidentType": "차량사고",
    "businessUnit": "단지내",
    "victimType": "고객",
    "location": "밸리CC 진입 군도",
    "description": "차량운전자 출근길 운전 중, 앞서 가던 벙커레이크 장비운전자를 뒤에서 추돌. 비, 안개로 인한 시야 미 확보",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "단지내",
    "locationDetail": "밸리CC 진입 군도",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 진입 군도] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 2. 코스 정비 차량 전수조사 및 반사스티커 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-05-22",
    "timeline": [
      {
        "time": "2025.05.22 05:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.22 05:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000072",
    "date": "2025.05.18",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "밸리CC 주차장에 주차하여 놓았던 3고객 운전석 휀다 파손. CCTV 사각으로 판독 불가 및 입차 시 파손 흔적 없음",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "밸리팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사각지역 CCTV 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-05-20",
    "timeline": [
      {
        "time": "2025.05.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000070",
    "date": "2025.05.16 18:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리5H 티박스에서 친 샷이 좌측으로 훅이 발생하여 군도변 차량에 맞은 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1.티샷 시 안내멘트 강화 2. 티마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-05-19",
    "timeline": [
      {
        "time": "2025.05.16 18:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.16 18:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000067",
    "date": "2025.05.16 16:30경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "11H",
    "description": "11H 세컨샷을 마치고 그린 플레이를 하려 이동 중 자동 운행 중이던 카트와 코스팀 작업 차량이 부딪히는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "11H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스팀(대정) 작업 시 도로에서 벗어나 정차 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-05-17",
    "timeline": [
      {
        "time": "2025.05.16 16:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.16 16:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000068",
    "date": "2025.05.16",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "3H",
    "description": "3H 그린 주변 고객의 어프로치 샷이 생크가 나면서 캐디 정강이에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시 - 경기 진행방향 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-05-17",
    "timeline": [
      {
        "time": "2025.05.16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000069",
    "date": "2025.05.14 09:00경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지9H",
    "description": "회원 클럽서브를 진행하려 이동 중 카트도로 옆 러프에 가려진 스프링쿨러를 밟고 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지9H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "경기 진행 중 위험구간 주의",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-05-17",
    "timeline": [
      {
        "time": "2025.05.14 09:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.14 09:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000066",
    "date": "2025.05.07 12:40경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지5H",
    "description": "브릿지5H 190m 지점에서 A고객의 세컨샷이 생크가 나면서 우측 라이트 뒤쪽으로 피해있던 캐디의 머리에 맞는 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-05-13",
    "timeline": [
      {
        "time": "2025.05.07 12:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.07 12:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000062",
    "date": "2025.05.05 21:00경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H 티빅사 전 대기장소",
    "description": "10H 이동하여 티샷 대기중에 A고객이 18H 세컨에서 친 볼이 카트도로를 맞고 10H 아래에서 대기 중이던 B고객 얼굴(눈)에 맞는 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "10H 티빅사 전 대기장소",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H 티빅사 전 대기장소] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "타구 사고 관련 멘트 보충",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-05-06",
    "timeline": [
      {
        "time": "2025.05.05 21:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.05 21:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000061",
    "date": "2025.05.05",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "군도변 브릿지 3~4H",
    "description": "브릿지3H 화이트티잉 구역의 티 샷이 악성 쌩크가 발생하여 내려가던 고객의 운전석 뒷문 하단을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "군도변 브릿지 3~4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변 브릿지 3~4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "그물망 설치 여부 검토 요청(유관부서)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-05-06",
    "timeline": [
      {
        "time": "2025.05.05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000060",
    "date": "2025.05.05",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "체리4H 세컨 지점에서 샷 한 볼이 카트도로에 맞고 바운드 되어 파인5H 티박스 지점 대기 중인 고객 손등에 맞고 안면에 맞는 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "위험구역 플레이 시 주의 조치 및 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-05-05",
    "timeline": [
      {
        "time": "2025.05.05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.05.05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000059",
    "date": "2025.04.30 12:30경",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "클럽하우스 현관",
    "description": "힐스CC 클럽하우스 현관근무자가 고객의 골프백 하차 시 바퀴 달린 골프백이 넘어지며 차량 트렁크와 충돌하여 드라이브 샤프트 파손",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "힐스팀",
    "locationDetail": "클럽하우스 현관",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[클럽하우스 현관] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "재발 방지를 위한 현관 근무자 교육 시행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-04-30",
    "timeline": [
      {
        "time": "2025.04.30 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.30 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000058",
    "date": "2025.04.30 11:1경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인7H",
    "description": "고객 동선에 비치된 매트 쪽으로 카트를 정차 했으나, 회원이 클럽을 들기 위해 뒤쪽으로 내려 경사면 쪽으로 걸어 내려가다 발목을 접지른 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "파인7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인7H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "경기 진행 시 위험구역 진입 제지 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-04-30",
    "timeline": [
      {
        "time": "2025.04.30 11:1경",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.30 11:1경",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000056",
    "date": "2025.04.27 12:30경",
    "incidentType": "클럽 파손",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "벙커 내 자갈로 인해 고객 클럽 손상",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "유관부서(코스팀) 사고내용 공유 - 벙커 정리 시 큰 자갈을 걸러 사고 예방",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-04-28",
    "timeline": [
      {
        "time": "2025.04.27 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.27 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000071",
    "date": "2025.04.26 18:40경",
    "incidentType": "열상",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아크아클럽 남자 사우나 샤워부스",
    "description": "벽면 샤워기 홀더에 샤워기를 고정하던 중, 날카로워진 홀더의 하부에 왼손 약지 3cm 가량 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "파크로쉬",
    "locationDetail": "아크아클럽 남자 사우나 샤워부스",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[아크아클럽 남자 사우나 샤워부스] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 전체 샤워부스 전수조사 2. 업무 개시 전 점검사항 추가",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-05-19",
    "timeline": [
      {
        "time": "2025.04.26 18:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.26 18:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000064",
    "date": "2025.04.25 12:12경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "코스 내",
    "description": "신규 리무진 카트를 이용하던 중 전반 9H 티박스에서 카트 멈춤 1차 발생 및 카트 교환. 후반 16H 세컨 지점 교체한 카트도 멈춤 발생.",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "코스 내",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[코스 내] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "카트 출고 당시 배터리 세팅 값이 잘못 되었음",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-05-12",
    "timeline": [
      {
        "time": "2025.04.25 12:12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.25 12:12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000050",
    "date": "2025.04.21 12:40경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인6H",
    "description": "파인6H 세컨 벙커에서 벙커샷을 치고 이동하던 중 좌측 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "파인6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인6H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스 내 안전사고 밴드 및 관제 공지 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-04-21",
    "timeline": [
      {
        "time": "2025.04.21 12:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.21 12:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000052",
    "date": "2025.04.21 08:30경",
    "incidentType": "카트사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지7H",
    "description": "브릿지7H 좌측 100Y 지점 비탈길에서 공을 줍고 온걸 인지한 캐디가 동반자 3분의 클럽 서브를 돕던 도중 주머니에 있던 리모콘이 잘못 눌러져 카트가 자동주행 되어 고객과 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지7H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "카트 안전운전 수칙 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-04-23",
    "timeline": [
      {
        "time": "2025.04.21 08:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.21 08:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000063",
    "date": "2025.04.21",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "1층 자동문",
    "description": "밸리CC 1층 자동문 입구 바닥 청소 후 잔존해 있던 물기로 인한 낙상 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "1층 자동문",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1층 자동문] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 협력사 청소 요청 사항 전달 - 물기 제거 시까지 미끄럼주의 표지판 설치 유지 2. 프런트 근무자 패트롤을 통한 위험 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-05-08",
    "timeline": [
      {
        "time": "2025.04.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000048",
    "date": "2025.04.21",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "9H",
    "description": "뒷 팀 고객의 티 샷이 앞 팀 고객 좌측 둔부를 맞춤 앞팀 고객과 충분한 안전거리 미확보",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 진행 시 앞 팀과의 거리 확보 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-04-21",
    "timeline": [
      {
        "time": "2025.04.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000045",
    "date": "2025.04.15",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리8H → 9H 굴다리 지점",
    "description": "파인 팀에서 9H로 이동 중 맞은편에 역주행으로 오던 코스팀 카트와 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "체리8H → 9H 굴다리 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리8H → 9H 굴다리 지점] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 카트 운행 시 전방 주시 운행 교육 2. 역주행 운행 시 전방 주시하여 운행하도록 유관부서 전달",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-04-16",
    "timeline": [
      {
        "time": "2025.04.15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000040",
    "date": "2025.04.11 16:45경",
    "incidentType": "넘어짐",
    "businessUnit": "단지내",
    "victimType": "직원",
    "location": "오크6H",
    "description": "오크6H 산책로 부근 차광막 제거 및 폐기물 수거 후 이동 중 미끄러져 벌목된 나무에 옆구리 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "단지내",
    "locationDetail": "오크6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크6H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시 - 작업장 주변 및 작업 위치 확보 - 낙상사고 방지를 위한 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-04-14",
    "timeline": [
      {
        "time": "2025.04.11 16:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.11 16:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000065",
    "date": "2025.04.11",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16H",
    "description": "16H 세컨 지점에서 라운드 도중 스프링쿨러 오작동으로 인한 고객 및 골프백이 젖는 피해 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "유관부서(코스관리팀) 스프링쿨러 시스템 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-05-12",
    "timeline": [
      {
        "time": "2025.04.11",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.11",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000047",
    "date": "2025.04.10 12:50경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "여성캐디 대기실",
    "description": "근무 완료 후 환복을 위해 대기실로 들어가 락카로 이동 중 쇼파 지지대에 발을 부딪혀 골절",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스팀",
    "locationDetail": "여성캐디 대기실",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[여성캐디 대기실] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "생활 속 안전 인지 강화 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-04-18",
    "timeline": [
      {
        "time": "2025.04.10 12:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.10 12:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000037",
    "date": "2025.04.07",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "16H",
    "description": "16H 230m 지점 고객에게 클럽 전달 중 발을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-04-09",
    "timeline": [
      {
        "time": "2025.04.07",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.07",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000039",
    "date": "2025.04.06 05:20경",
    "incidentType": "부딪힘",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "객실",
    "description": "화징실 이용 중 문에 발을 부딪혀 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "파크로쉬",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[객실] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 전체 객실 프로파일 탈락 및 유리문 파손여부 조사 특이사항 없음",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-04-13",
    "timeline": [
      {
        "time": "2025.04.06 05:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.06 05:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000036",
    "date": "2025.04.02 12:53경",
    "incidentType": "물체에 맞음",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지1H",
    "description": "브릿지1H에서 연습 스윙을 하던 고객 옆에 있던 캐디의 머리 우측부를 타격하는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "물체에 맞음",
    "resort": "힐스팀",
    "locationDetail": "브릿지1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지1H] 물체에 맞음 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 및 안전교육 실시 - 연습 스윙 중 안전거리 확보",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2025-04-03",
    "timeline": [
      {
        "time": "2025.04.02 12:53",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.04.02 12:53",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000043",
    "date": "2025.03.31 12:00경",
    "incidentType": "기타",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "파크키친",
    "description": "조식메뉴 중 '옥수수 범벅'을 취식하던중 딱딱한 이물질(고객 주장 : 돌)을 씹었다고 알림",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "파크로쉬",
    "locationDetail": "파크키친",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파크키친] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 옥수수 제품 점검 및 변경 2. 직원 위생 교육 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2025-04-16",
    "timeline": [
      {
        "time": "2025.03.31 12:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.31 12:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000034",
    "date": "2025.03.28 15:18경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "4H",
    "description": "5H에서 티샷한 타구가 4H 세컨 지점의 고객의 발에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 2. 코스 패트롤 및 안전사고 예방 안내문 발송",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2025-03-29",
    "timeline": [
      {
        "time": "2025.03.28 15:18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.28 15:18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000029",
    "date": "2025.03.22 16:27경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "오크1H",
    "description": "오크1H 레이디티 우측 40yd 지점에서 고객이 친 볼이 악성 슬라이스가 발생하여 타구선상 앞 카트에 위치하던 담당캐디의 왼쪽 무릎을 타격",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-03-24",
    "timeline": [
      {
        "time": "2025.03.22 16:27",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.22 16:27",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000030",
    "date": "2025.03.22",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "11H",
    "description": "15H에서 티샷 한 볼이 인접 홀 11H 그린 주변에서 홀아웃 하던 고객 우측 전완근에 맞는 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "11H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-03-24",
    "timeline": [
      {
        "time": "2025.03.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000032",
    "date": "2025.03.21 13:30경",
    "incidentType": "차량사고",
    "businessUnit": "파크로쉬",
    "victimType": "직원",
    "location": "1층 후문 케이블카 방향",
    "description": "공사 완료 후 자재 운반을 위해 차량 이동 중 강풍에 철제 도어가 이탈되며 사고 차량 조수석 뒷문과 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "파크로쉬",
    "locationDetail": "1층 후문 케이블카 방향",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1층 후문 케이블카 방향] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설물 사전 점검 및 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-03-27",
    "timeline": [
      {
        "time": "2025.03.21 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.21 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000025",
    "date": "2025.03.15 11:50경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "체리9H",
    "description": "고객의 세컨샷 플레이 타구 볼에 타크에 타고 있는 대정골프 일용직 작업자의 턱밑을 가격 체리코스의 사면 블라인드 되어 보이지 않는 방향",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "이동 시 동선 변경(메이플 9H로만 이동)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-03-17",
    "timeline": [
      {
        "time": "2025.03.15 11:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.15 11:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000031",
    "date": "2025.03.14 09:07경",
    "incidentType": "부딪힘",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "사우나 샤워부스",
    "description": "사우나 이용을 마치고 퇴장하던 고객이 넘어진 세신용 보조 의자에 우측 발등을 찧어 오른쪽 엄지 발가락이 골절됨",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "파크로쉬",
    "locationDetail": "사우나 샤워부스",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[사우나 샤워부스] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "의자세팅 매뉴얼 변경",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-03-24",
    "timeline": [
      {
        "time": "2025.03.14 09:07",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.14 09:07",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000023",
    "date": "2025.03.01 11:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "조각공원",
    "description": "7세 어린이가 조각공원 돌계단 이용 중 낙상하여 치아골절 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "조각공원",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[조각공원] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 안내용 센서형 야외스피커 설치(7EA) 2. 급경사구간 논슬립테이프 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-03-02",
    "timeline": [
      {
        "time": "2025.03.01 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.03.01 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000022",
    "date": "2025.02.27 16:30경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "기타",
    "description": "라운드 종료 후 5인승 카트 운전석 파손된 팔 받침대에 걸려 바지가 찢어짐",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "기타",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[기타] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 전 카트 이상 유무 확인하여 진행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-02-27",
    "timeline": [
      {
        "time": "2025.02.27 16:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.27 16:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000020",
    "date": "2025.02.22 14:50경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "스키구조요원(AR) 대원이 순찰 도중 넘어져 있던 고객을 일으키는 과정에서 고객이 중심을 잃고 대원 스키 플레이트와 접촉으로 2차로 함께 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 패트롤 안전수칙 교육 강화 및 사고사례 전파 - 구조 용품 및 기구 활용",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-02-23",
    "timeline": [
      {
        "time": "2025.02.22 14:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.22 14:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000019",
    "date": "2025.02.22 13:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "직원식당 앞",
    "description": "메이플3H에서 샷한 공이 직원식당 주변으로 넘어와 맞춘 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "직원식당 앞",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[직원식당 앞] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 티 마크 일부 수정 요청 2. 티샷 진행 시 타구사고 위험 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2025-02-22",
    "timeline": [
      {
        "time": "2025.02.22 13:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.22 13:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000018",
    "date": "2025.02.12 11:00경",
    "incidentType": "차량사고",
    "businessUnit": "단지내",
    "victimType": "직원",
    "location": "단지내",
    "description": "B콘도 후면 주차장에서 제설 차량으로 염화칼슘 살포 진행 후진 중 주차중이던 피해자 차량은 인지하지 못하고 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "단지내",
    "locationDetail": "단지내",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[단지내] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 작업 중 주위 상황 파악 강화 2. 장비 주변 장애물 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-02-12",
    "timeline": [
      {
        "time": "2025.02.12 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.12 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000017",
    "date": "2025.02.07 19:40경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "셔틀버스 정거장",
    "description": "스키장 이용 후 셔틀버스 정류장에서 쇠판을 밟고 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "셔틀버스 정거장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[셔틀버스 정거장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 패트롤 점검 시 결빙 여부 체크 2. 미끄럼주의 표지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-02-10",
    "timeline": [
      {
        "time": "2025.02.07 19:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.07 19:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000021",
    "date": "2025.02.07 11:20경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "G 슬로프 순찰 중이던 패트롤 대원이 스키 실력 미숙으로 내려오지 못하는 아이 고객을 안고 슬로프 가장자리로 이동하던 중 보딩 고객과 장비 간 접촉이 발생하여 고객을 안은채로 넘어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 패트롤 안전수칙 교육 강화 및 사고사례 전파 - 구조 용품 및 기구 활용 - 현장 시야 확보 및 주변 상황 파악 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-02-27",
    "timeline": [
      {
        "time": "2025.02.07 11:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.07 11:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000012",
    "date": "2025.02.03 17:53경",
    "incidentType": "열상",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "S콘도",
    "description": "객실 옷장 내부 선반 도장 벗겨진 위치에 아이가 손을 짚으며 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "밸리빌리지",
    "locationDetail": "S콘도",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[S콘도] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 긴급 보수 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-02-03",
    "timeline": [
      {
        "time": "2025.02.03 17:53",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.03 17:53",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000014",
    "date": "2025.02.03 04:30경",
    "incidentType": "차량사고",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "군도변",
    "description": "정선 방향 셔틀 운행 중 고라니 충돌로 인한 차량 파손 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "파크로쉬",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-02-03",
    "timeline": [
      {
        "time": "2025.02.03 04:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.02.03 04:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000013",
    "date": "2025.01.29 16:19경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "플라워 리프트 하차장에서 하차하는 도중 고객이 넘어지는 사고 발생. 리프트 정지 후 기계 밀림 현상으로 고객 간 약간의 부딪힘 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 2. 하차지점 설면 상태 상시 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-02-03",
    "timeline": [
      {
        "time": "2025.01.29 16:19",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.29 16:19",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000016",
    "date": "2025.01.26 11:25경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "고객이 보드를 타고 I슬로프 이용 중 5지역 내려오면서 모글(눈덩이)에 걸려 넘어져 좌측 손목 부상",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "패트롤 시 슬로프 내 위험요소 제거",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-02-08",
    "timeline": [
      {
        "time": "2025.01.26 11:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.26 11:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000015",
    "date": "2025.01.25 12:07경",
    "incidentType": "차량사고",
    "businessUnit": "단지내",
    "victimType": "고객",
    "location": "군도변",
    "description": "뮤지엄산 댐삼거리 방향에 갈퀴를 밟아 차량 손상 및 펑크 발생 접수",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "단지내",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 단지 내 점검 시 도로 내 장애물 확인 및 제거",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-02-04",
    "timeline": [
      {
        "time": "2025.01.25 12:07",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.25 12:07",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000006",
    "date": "2025.01.22 14:20경",
    "incidentType": "차량사고",
    "businessUnit": "월송리팀",
    "victimType": "직원",
    "location": "12H",
    "description": "엔진OFF 상태 차량을 ON상태로 착각하여 사이드브레이크를 풀자 차량이 경사면을 내려가 넘어진 사고",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "월송리팀",
    "locationDetail": "12H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[12H] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2025-01-22",
    "timeline": [
      {
        "time": "2025.01.22 14:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.22 14:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000004",
    "date": "2025.01.17 14:00경",
    "incidentType": "열상",
    "businessUnit": "단지내",
    "victimType": "직원",
    "location": "단지내",
    "description": "전도목 벌목 작업 중 엔진톱이 튀어 오르며 사고자의 안전모를 타격 엔진톱 킥백 현상",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "단지내",
    "locationDetail": "단지내",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[단지내] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 2. 올바른 작업 방법 교육(기계톱 끝부분 작업 금지)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2025-01-20",
    "timeline": [
      {
        "time": "2025.01.17 14:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.17 14:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000007",
    "date": "2025.01.16 18:48경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "체크인센터",
    "description": "체크인센터 승차대 앞 결빙구간 미인지로 인한 넘어짐 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "체크인센터",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체크인센터] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 패트롤 점검 시 결빙 여부 체크 2. 미끄럼주의 표지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-01-23",
    "timeline": [
      {
        "time": "2025.01.16 18:48",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.16 18:48",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000001",
    "date": "2025.01.08 20:30경",
    "incidentType": "열상",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워D",
    "description": "샤워기 헤드 부분이 손상되어 있어 샤워 중 찰과상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "힐스빌리지",
    "locationDetail": "타워D",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[타워D] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 점검 시 샤워기 헤드 확인 및 불량품 교체",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-01-08",
    "timeline": [
      {
        "time": "2025.01.08 20:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.08 20:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000002",
    "date": "2025.01.07 09:46경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "스키를 타고 G슬로프 이용 중 9지역을 내려오면서 좌측부근 위험배너에 다리가 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "슬로프 동선 내 위험요소 제거",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-01-16",
    "timeline": [
      {
        "time": "2025.01.07 09:46",
        "note": "사고 발생 접수"
      },
      {
        "time": "2025.01.07 09:46",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000005",
    "date": "2024.12.27 12:22경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "고객이 I슬로프 이용하여 10지역으로 내려오던 중 우측 구간에서 넘어져 좌측 정강이 부상을 입는 사고 발생. 패트롤 대원이 응급처치 실시 사고원인 : 이동 과정에서 권장되지 않는 보조 방식_폴대를 잡고 이동",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "현장 관리 강화 - 위험 행동(보조 방식) 발견 시 즉시 계도 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2025-01-22",
    "timeline": [
      {
        "time": "2024.12.27 12:22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.12.27 12:22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000210",
    "date": "2024.12.24 22:40경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "S콘도",
    "description": "베란다 및 철제 계단 이용 간 결빙구간 낙상에 따른 머리 및 허리 타박상",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "S콘도",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[S콘도] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 결빙 구간 미끄럼주의 또는 출입금지 사이니지 부착 2. 외부와 연결된 발코니 객실 현장 별도 고객 안내 진행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-12-25",
    "timeline": [
      {
        "time": "2024.12.24 22:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.12.24 22:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000208",
    "date": "2024.12.10 13:50경",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "12H",
    "description": "12H 티샷하려 준비 중 티박스로 내려가다 플라스틱 매트에 미끄러져 넘어짐_고객 살얼음으로 인해 미끄러졌다고 주장",
    "cost": 500000,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "12H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[12H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 라운드 출발 전 결빙 구역 및 코스 내 미끄러움 사전 안내",
    "status": "조치완료",
    "faultRatio": "보험 처리 완료",
    "totalAmount": 500000,
    "companyAmount": 500000,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-12-10",
    "timeline": [
      {
        "time": "2024.12.10 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.12.10 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000211",
    "date": "2024.12.03",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "4H 계류지역",
    "description": "4H 그린주변 계류 지역에 볼을 찾으런 고객 넘어짐 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "4H 계류지역",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H 계류지역] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 2. 위험구간 진입 시 제지 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-12-26",
    "timeline": [
      {
        "time": "2024.12.03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.12.03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000204",
    "date": "2024.11.21 17:00경",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "11H",
    "description": "홀아웃팀 직원 동행 하에 광장 복귀 중 카트를 피해 대기하는 과정에서 가드센서가 작동하여 카트 급정거 그 과정에서 고객이 카트 밖으로 넘어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "11H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 가드센서로 인한 급정거 방지 및 고객 사전 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-11-22",
    "timeline": [
      {
        "time": "2024.11.21 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.21 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000204",
    "date": "2024.11.18 15:50경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐8H 그린 뒤 카트도로",
    "description": "힐코스 8H 90m 지점에서 A고객의 세컨 샷 볼이 오버되어 앞 팀 그린 플레이 종료 후 카트에 서 있던 B고객의 손등을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐8H 그린 뒤 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐8H 그린 뒤 카트도로] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 라운드 진행 시 앞 팀과의 거리 확보 재발방지교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-11-18",
    "timeline": [
      {
        "time": "2024.11.18 15:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.18 15:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000201",
    "date": "2024.11.13 17:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리코스 5H 티박스에서 친 샷이 좌측으로 훅이 발생하여 군도변 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 티 마크 일부 수정 요청 2. 티샷 진행 시 타구사고 위험 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-11-14",
    "timeline": [
      {
        "time": "2024.11.13 17:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.13 17:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000201",
    "date": "2024.11.13 09:38경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지9H 좌측 250yd 거리목 부근",
    "description": "브릿지9H 내장객팀이 9H 블레이 중 IP소나무 부근에서 세컨 플레이한 볼이 120m 좌측 깊은 러프 250yd 거리목 부근에서 슬로프 예초 작업 중이던 작업자를 맞춘 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지9H 좌측 250yd 거리목 부근",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지9H 좌측 250yd 거리목 부근] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 작업자 보호구 착용 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-11-13",
    "timeline": [
      {
        "time": "2024.11.13 09:38",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.13 09:38",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000199",
    "date": "2024.11.11 13:10경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장 D구역",
    "description": "D구역에 주차해 놓앗던 사고자 차량 전면 유리 파손된 사고_18H 타구사고로 추정",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장 D구역",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장 D구역] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전 그물망 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-11-12",
    "timeline": [
      {
        "time": "2024.11.11 13:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.11 13:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000206",
    "date": "2024.11.07",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "피클볼파크",
    "description": "피클볼 대회 참여를 위한 레슨 중 왼쪽 발목 아킬레스건 파열 부상",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "피클볼파크",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[피클볼파크] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-12-04",
    "timeline": [
      {
        "time": "2024.11.07",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.07",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000198",
    "date": "2024.11.02 15:30경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "14H",
    "description": "A고객이 14H 좌측 130m 지점에서 어드레스 중 동일 선상에 B고객이 친 우드샷에 맞은 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "14H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[14H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-11-03",
    "timeline": [
      {
        "time": "2024.11.02 15:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.02 15:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000197",
    "date": "2024.11.02 13:50경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리5H 티박스에서 친 티 샷이 좌측으로 훅이 발생하여 군도변 차량을 맞추는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 티 마크 일부 수정 요청 2. 티샷 진행 시 타구사고 위험 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-11-03",
    "timeline": [
      {
        "time": "2024.11.02 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.02 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000195",
    "date": "2024.11.01 22:09경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "15H 교차구간",
    "description": "12H로 이동중인 A팀과 15H로 이동중인 B팀이 교차 구간에서 서로 양보하다 동시에 출발 버튼을 작동하여 충돌사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "15H 교차구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H 교차구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 사고 발생 지역 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-11-01",
    "timeline": [
      {
        "time": "2024.11.01 22:09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.11.01 22:09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000194",
    "date": "2024.10.29 18:000경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H~18H 교차구간",
    "description": "뒷팀 고객이 교차구간에 정차하고 있던 앞팀 고객 팀과 충돌하는 사고 발생_뒷팀 고객 카트 조작 미숙",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H~18H 교차구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H~18H 교차구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 카트조작 및 안전 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-30",
    "timeline": [
      {
        "time": "2024.10.29 18:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.29 18:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000193",
    "date": "2024.10.29 08:35경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "직원",
    "location": "브릿지4H",
    "description": "브릿지4H 레이디티에서 고객이 티샷한 볼이 군도변으로 넘어가 출근 중인 직원 차량을 맞춘 사고 쌩크성 하이 볼로 인한 원인 추정",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 안전 그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-10-29",
    "timeline": [
      {
        "time": "2024.10.29 08:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.29 08:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000192",
    "date": "2024.10.27 10:23경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "18H 페어웨이에서 주차장 D구역 방향으로 날아온 골프공이 차량 전면부 부분을 타격",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전 그물망 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-29",
    "timeline": [
      {
        "time": "2024.10.27 10:23",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.27 10:23",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000191",
    "date": "2024.10.27",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "15H",
    "description": "15H 티샷 후 세컨 구간 카트를 타고 이동 중 인접홀 타구로 앞좌석 보조석에 타고 있던 고객 가슴 갈비뼈 쪽에 볼이 맞는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "15H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-27",
    "timeline": [
      {
        "time": "2024.10.27",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.27",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000190",
    "date": "2024.10.26 18:20경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지9H",
    "description": "브릿지9H에서 앞 팀이 안전 거리를 벗어나 앞으로 이동하는 것을 확인 후 티샷을 진행하는 과정에서 공이 우측으로 벗어나면서 카트 도로를 맞고 안전거리를 넘어 앞 팀 고객의 손을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 라운드 진행 시 앞 팀과의 거리 확보 재발방지교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-10-26",
    "timeline": [
      {
        "time": "2024.10.26 18:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.26 18:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000189",
    "date": "2024.10.26 10:15경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지6H",
    "description": "브릿지6H 190yd 언덕 앞쪽에 카트를 세워두고 다른 고객님에게 거리를 설명하던 중 언덕 뒤쪽 200yd 지점에서 친 볼이 생크가 나 언덕을 타고 튕겨 캐디 매니저 왼쪽 정강이를 타격",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-10-26",
    "timeline": [
      {
        "time": "2024.10.26 10:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.26 10:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000187",
    "date": "2024.10.24 14:50경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16H 그린 옆 카트도로",
    "description": "16H에서 코스팀(대정) 작업 차량이 카트도로 유도선 위에 주차하여 차동주행하던 카트와 충돌하는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "16H 그린 옆 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H 그린 옆 카트도로] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 코스팀 작업카트 코스 내 주차구역 이동 및 주의 요청 2. 카트 자동 주행 시 전방 주시 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-24",
    "timeline": [
      {
        "time": "2024.10.24 14:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.24 14:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000186",
    "date": "2024.10.24 10:10경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "카트고",
    "description": "캐디 매니저가 근무를 이해 리무진 카트 출차 중 회전반경을 고려하지 않고 주행하여 오른쪽 3열 시트 손잡이 아래 부분이 손상되는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "카트고",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[카트고] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 2. 리무진카트 주차구역 공간 확보",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-24",
    "timeline": [
      {
        "time": "2024.10.24 10:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.24 10:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000184",
    "date": "2024.10.19 09:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "조각공원",
    "description": "조각공원 산책 중 검은색 판석을 밟고 미끄러지며 우측 정강이뼈 골절 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "조각공원",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[조각공원] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 안내용 센서형 야외스피커 설치(7EA) 2. 급경사구간 논슬립테이프 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-10-20",
    "timeline": [
      {
        "time": "2024.10.19 09:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.19 09:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000181",
    "date": "2024.10.12",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "1H",
    "description": "당시 안개로 인한 전방 시야 확보 어려움 및 1H 모니터와 GPS맵의 부정확한 거리 표시로 인한 타구사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 전 고객 사전 안내 활동 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-13",
    "timeline": [
      {
        "time": "2024.10.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000180",
    "date": "2024.10.11 13:30경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "1H",
    "description": "1H 좌측 140m(오비 말뚝 근처 사면)에서 세컨샷을 하는 중 넘어진 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "위험구역 플레이 시 제지 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-11",
    "timeline": [
      {
        "time": "2024.10.11 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.11 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000182",
    "date": "2024.10.09 16:30경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "16H",
    "description": "16H 우측 140m 지점에서 고객님께 클럽을 전달하려 이동 중 잔디 파종으로 설치한 차광망에 발이 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "16H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 작업구역 구획설정 2. 작업구역 사전 공지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-15",
    "timeline": [
      {
        "time": "2024.10.09 16:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.09 16:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000175",
    "date": "2024.10.06 16:52",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인7H 그린",
    "description": "파인7H 그린에서 티샷한 볼이 좌측 러프를 맞고 바운드 되어 다른 팀 고객의 좌측 쇄골에 맞은 사고 담당 캐디의 안내를 따르지 않고 티샷하여 발생한 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인7H 그린",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인7H 그린] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육실시 2. 위험구역 타구 시 제지 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-06",
    "timeline": [
      {
        "time": "2024.10.06 16:52",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.06 16:52",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000179",
    "date": "2024.10.05 16:00경",
    "incidentType": "기타",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "파크키친",
    "description": "2024.10.03 파크키친에서 조식 이용. 요거트, 우유, 아몬드 브리즈를 마시고 복통과 설사 증상이 있었고 이틀이 지나도 증상이 가라앉지 않자 적절한 관리가 이루어지고 있는지 파크키친으로 전화 문의",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "파크로쉬",
    "locationDetail": "파크키친",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파크키친] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "뷔페에서 제공되는 유제품 철저히 관리",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2024-10-10",
    "timeline": [
      {
        "time": "2024.10.05 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.05 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000171",
    "date": "2024.10.03 17:50경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "5H",
    "description": "뒷팀에서 티샷한 볼아 앞 팀 50m 지점에서 이동중인 고객 좌측 종아리에 맞는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 타구 사고 발생 지역 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-03",
    "timeline": [
      {
        "time": "2024.10.03 17:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.03 17:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000173",
    "date": "2024.10.03 11:50경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16H 230m 해저드 지점",
    "description": "16H 왼쪽 230m 지점 해저드 공을 찾으러 이동중 고객이 발을 헛디뎌 얼굴과 다리에 찰과상을 입음",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "16H 230m 해저드 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H 230m 해저드 지점] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 2. 위험구간 진입 시 제지 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-04",
    "timeline": [
      {
        "time": "2024.10.03 11:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.03 11:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000165",
    "date": "2024.10.02 16:57경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "4H 그린",
    "description": "뒷팀이 티샷한 볼이 앞팀 그린에 올라와 피해자의 무릎에 맞는 타구 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "월송리팀",
    "locationDetail": "4H 그린",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H 그린] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 라운드 출발 전 타구 사고 발생 지역 안내 2. 짧은 코스 드라이버 사용 자재 및 아이언 클럽 공략 안내 完",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-02",
    "timeline": [
      {
        "time": "2024.10.02 16:57",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.02 16:57",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000172",
    "date": "2024.10.02 13:50경",
    "incidentType": "카트사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H 100m지점 카트도로",
    "description": "숲에서 볼을 찾고 내려오던 중 리모컨이 잘못 눌러져 카트가 자동으로 움직이며 고객과 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 100m지점 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 100m지점 카트도로] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-10-04",
    "timeline": [
      {
        "time": "2024.10.02 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.02 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000170",
    "date": "2024.10.02 13:10경",
    "incidentType": "근골격계 질환",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "18H",
    "description": "18H 티박스에서 티샷 후 허리를 다침",
    "cost": 0,
    "notes": "",
    "category": "근골격계 질환",
    "resort": "성문안팀",
    "locationDetail": "18H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[18H] 근골격계 질환 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-10-03",
    "timeline": [
      {
        "time": "2024.10.02 13:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.02 13:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000169",
    "date": "2024.10.02 11:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플4H 그린 우측 법사면",
    "description": "고객님의 세컨샷 볼을 찾으러 법사면을 오르다 미끄러지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "메이플4H 그린 우측 법사면",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플4H 그린 우측 법사면] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-10-03",
    "timeline": [
      {
        "time": "2024.10.02 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.02 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000167",
    "date": "2024.10.01 10:08경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "파인9H 그린 좌측 카트도로",
    "description": "파인9H 그린에서 나와 퍼터 정리를 마치고 카트도로 경사면을 오르던 중 우천으로 인해 젖어있던 카트도로에서 미끄러짐",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인9H 그린 좌측 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인9H 그린 좌측 카트도로] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-10-02",
    "timeline": [
      {
        "time": "2024.10.01 10:08",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.10.01 10:08",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000161",
    "date": "2024.09.29 11:10경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도",
    "description": "전일 C동 앞 야외 주차장에 주차를 한 뒤, 08:50경 조식을 먹기 위해 운전을 하던 중 운전석 창문에 스크래치가 난 것을 확인_프론트로 방문하여 차량 파손에 대한 문의_CCTV상 확인 어려움",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2024-09-29",
    "timeline": [
      {
        "time": "2024.09.29 11:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.29 11:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000160",
    "date": "2024.09.29 11:03경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 공이 카트도로 바운드 후 차량 좌측 하단 B필러에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1.티샷 시 안내멘트 강화 2. 티마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-09-29",
    "timeline": [
      {
        "time": "2024.09.29 11:03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.29 11:03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000159",
    "date": "2024.09.25 19:00경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도 후면 도로",
    "description": "힐스CC 라운드 종료 후 귀가 중 D콘도 후면 도로 바닥에 떨어져 있는 철재를 밟아 타이어 및 휠 파손",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 후면 도로",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도 후면 도로] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "도로 및 주차장 등 위험물질 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-09-27",
    "timeline": [
      {
        "time": "2024.09.25 19:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.25 19:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000158",
    "date": "2024.09.16 12:30경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도 지하주차장 2F",
    "description": "D동 지하 2층 주차장 천장 누수로 인한 고객 차량 범퍼에 낙수 흔적 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 지하주차장 2F",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도 지하주차장 2F] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "추가 누수 구역 점검 및 볼라드 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-09-18",
    "timeline": [
      {
        "time": "2024.09.16 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.16 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000157",
    "date": "2024.09.14 18:05경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장 락카",
    "description": "수영장 이용 후 퇴장 도중 낙상사고 방지 튜브매트에 오른쪽 엄지발가락이 걸려 미끌렸고 반대 발로 딛는 과정 중에 왼쪽 엄지 발가락으로 한 번 더 딛게 되면서 양쪽 엄지 발가락에 염좌 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "수영장 락카",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장 락카] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "수영장 고객 동선 내 장애물 제거 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-09-17",
    "timeline": [
      {
        "time": "2024.09.14 18:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.14 18:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000156",
    "date": "2024.09.13 15:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "체크인센터",
    "description": "집중호우 시(시간당 20mm 이상) 체크인센터 및 연회장 내부로 물 유입 방지를 위해 설치해둔 모래 주머니를 인지하지 못하고 고객이 넘어진 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "체크인센터",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체크인센터] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "야외 타일 구배 작업 시행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-09-14",
    "timeline": [
      {
        "time": "2024.09.13 15:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.13 15:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000155",
    "date": "2024.09.13 09:10경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "파인 2H",
    "description": "파인코스 2H 좌측 150Y 오크8H 러프 사이에서 클럽 서브 중 법사면에 미끄러져 우측 발목이 꺾이는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "파인 2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인 2H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 우천 시 미끄러움 주의",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-09-14",
    "timeline": [
      {
        "time": "2024.09.13 09:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.13 09:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000153",
    "date": "2024.09.10 15:14경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "2H 화이트 티박스 카트도로",
    "description": "2H 티샷을 마치고 나오는 중 티마커에 발이 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "2H 화이트 티박스 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[2H 화이트 티박스 카트도로] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "고객 주변 장애물 발견 시 인지하도록 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-09-10",
    "timeline": [
      {
        "time": "2024.09.10 15:14",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.10 15:14",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000152",
    "date": "2024.09.08 17:10경",
    "incidentType": "열상",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크9H 90Y 러프 지점",
    "description": "오크코스 9H 90yd 좌측 B러프 지점에서 고객이 볼을 찾으러 가던 중, SK전자변 덮개가 닫혀 있지 않아 인지하지 못하고 우측 다리가 빠져 정강이 피부 찢어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "밸리팀",
    "locationDetail": "오크9H 90Y 러프 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[오크9H 90Y 러프 지점] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 코스팀 점검 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-09-09",
    "timeline": [
      {
        "time": "2024.09.08 17:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.08 17:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000149",
    "date": "2024.09.05 09:15경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "1H IP부분",
    "description": "9H 세컨샷 볼이 악성 훅으로 인해 1H IP부분에서 세컨샷을 준비하던 고객 뒷목에 볼이 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "1H IP부분",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H IP부분] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-09-06",
    "timeline": [
      {
        "time": "2024.09.05 09:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.05 09:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000150",
    "date": "2024.09.04 14:30경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "클럽하우스 입구",
    "description": "고객이 후반 진입을 위해 카트로 이동하던 중(행자와 이야기를 하며 이동) 광장에서 내려가는 턱을 인지하지 못하고 넘어져 양쪽 무릎에 찰과상을 입음",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "클럽하우스 입구",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[클럽하우스 입구] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "고객 동선에 계단 주의 표지판 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-09-07",
    "timeline": [
      {
        "time": "2024.09.04 14:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.04 14:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000147",
    "date": "2024.09.01 18:25경",
    "incidentType": "열상",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "인도어 스파",
    "description": "실내 스파(액티브) 이용 중 난간을 잡고 일어나던 사고자가 파손된 난간에 왼쪽 손가락을 다침 검지손가락 두 번째 마디에 2cm 열상 및 약지에 경미한 찰과상 확인",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "파크로쉬",
    "locationDetail": "인도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[인도어 스파] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 손상된 핸드레일 보수 2. 아쿠아클럽 교차 점검을 통한 안전사고 예발 활동 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-09-02",
    "timeline": [
      {
        "time": "2024.09.01 18:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.01 18:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000148",
    "date": "2024.09.01 05:50경",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "밸리CC 컨베이어벨트",
    "description": "근무 대기중이던 캐디가 백을 올리는 과정에서 컨베이어벨트에 골프백 어깨끈이 걸려 찢어짐",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "밸리팀",
    "locationDetail": "밸리CC 컨베이어벨트",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 컨베이어벨트] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 백 레일 중앙에 가방 위치 - 어깨끈은 골프백 아래로 내려 백 레일 걸림 방지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-09-03",
    "timeline": [
      {
        "time": "2024.09.01 05:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.09.01 05:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000143",
    "date": "2024.08.26 16:35경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐 4H 72m 지점",
    "description": "코스 내에서 경사면 이동 중 장마기간 동안 침하된 코스지역 내에서 왼쪽 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "힐 4H 72m 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐 4H 72m 지점] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 경사면 이동 시 주의 및 우회 이동 안내 강조",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-08-28",
    "timeline": [
      {
        "time": "2024.08.26 16:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.26 16:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000140",
    "date": "2024.08.25 09:58경",
    "incidentType": "열상",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "C콘도 객실",
    "description": "객실 비치품(소파)에 타카 심이 노출되어 소파에 앉아 있던 아이 팔에 열상 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "힐스빌리지",
    "locationDetail": "C콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[C콘도 객실] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 검수 및 필요 부분 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-08-25",
    "timeline": [
      {
        "time": "2024.08.25 09:58",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.25 09:58",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000141",
    "date": "2024.08.23 10:30경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "5H 60m 우측 러프",
    "description": "성문안 5H 60m 지점에서 티샷한 공이 생크가 발생하여 우측에 대기 중이던 고객 우측 허벅지를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "5H 60m 우측 러프",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[5H 60m 우측 러프] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-08-25",
    "timeline": [
      {
        "time": "2024.08.23 10:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.23 10:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000139",
    "date": "2024.08.23 07:20경",
    "incidentType": "벌레 물림",
    "businessUnit": "기숙사",
    "victimType": "직원",
    "location": "기숙사",
    "description": "출근 전 사내 기숙사에서 출근을 위해 이동 중 벌레(지네) 물림 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "벌레 물림",
    "resort": "기숙사",
    "locationDetail": "기숙사",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[기숙사] 벌레 물림 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사내기숙사 방역 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2024-08-23",
    "timeline": [
      {
        "time": "2024.08.23 07:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.23 07:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000146",
    "date": "2024.08.21 08:35경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "3H 좌측 150m 러프 지점",
    "description": "3H 좌측 150m 러프 지점에서 이동 중 잔디에 미끄러진 사고 당일 비 예보로 잔디가 미끄러운 부분이 있었으며 코스 사면에서 이동 중 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "3H 좌측 150m 러프 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3H 좌측 150m 러프 지점] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 우천 시 미끄러움 주의 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-09-02",
    "timeline": [
      {
        "time": "2024.08.21 08:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.21 08:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000136",
    "date": "2024.08.17 16:24경",
    "incidentType": "열상",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "피해자가 실내풀에서 퇴장을 계단이 아닌 스파 시설로 퇴장 도중 미끄러져 오른쪽 뒷꿈치에 6cm 가량 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[수영장] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 미끄럼주의 사인물 1EA 비치 -> 4EA 추가 비치 2. 안전요원 1명 배치 -> 2명 배치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-08-20",
    "timeline": [
      {
        "time": "2024.08.17 16:24",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.17 16:24",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000135",
    "date": "2024.08.16 19:25경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐 6H 페어웨이 40m 지점",
    "description": "고객이 140m 지점 우측 페어웨이에서 세컨 샷한 타구 볼이 그린 방향이 아닌 같은 팀 피해자 방향으로 날아가 이동 중이던 피해자의 안면부 광대 부위를 타격하는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐 6H 페어웨이 40m 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐 6H 페어웨이 40m 지점] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-08-19",
    "timeline": [
      {
        "time": "2024.08.16 19:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.16 19:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000134",
    "date": "2024.08.16 17:00경",
    "incidentType": "열상",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "C콘도 객실",
    "description": "C713호 빨래 건조대 중 살이 제대로 설치되어 있지 않은 것을 아이가 가지고 놀다 코 부위 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "힐스빌리지",
    "locationDetail": "C콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[C콘도 객실] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 검수 및 필요 부분 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-08-16",
    "timeline": [
      {
        "time": "2024.08.16 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.16 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000133",
    "date": "2024.08.15 22:30경",
    "incidentType": "물체에 맞음",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "B콘도 객실",
    "description": "쇼파에서 휴식 중 쇼파 위 액자가 탈락하면서 아이 좌측 어깨에 부딪힌 사고",
    "cost": 0,
    "notes": "",
    "category": "물체에 맞음",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 객실] 물체에 맞음 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 검수 및 필요 부분 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-08-16",
    "timeline": [
      {
        "time": "2024.08.15 22:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.15 22:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000132",
    "date": "2024.08.11 20:25경",
    "incidentType": "기타",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "로쉬카페",
    "description": "객실 622호에서 로쉬카페에서 픽업 한 음식을 먹는 중 파스타의 딱딱한 부분을 씹어 치아에 금이 간 사고 우민찌에 소뼈로 추정",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "파크로쉬",
    "locationDetail": "로쉬카페",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[로쉬카페] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 업체 측 내용 공유 및 주의 당부 요청 2. 업장 조리 시 2차 분리작업 하도록 재확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2024-08-13",
    "timeline": [
      {
        "time": "2024.08.11 20:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.11 20:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000128",
    "date": "2024.08.09 23:00경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "11H 그린",
    "description": "15H 티샷한 볼이 악성 슬라이스로 인해 11H 그린에서 퍼팅하던 고객 좌측 종아리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "11H 그린",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H 그린] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 출발 전 타구 사고 발생 지역 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-08-10",
    "timeline": [
      {
        "time": "2024.08.09 23:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.09 23:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000130",
    "date": "2024.08.09 07:15경",
    "incidentType": "열상",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "객실",
    "description": "411호 고객이 샤워 중 샤워기 헤드에 긁혀 오른쪽 뺨에서 턱 쪽으로 5~7cm 가량의 찰과상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "파크로쉬",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[객실] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 객실 정비 강화 및 손상된 비품 교체 2. 시설팀 주관 사전 점검 프로세스 추가_2024.08.12",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-08-11",
    "timeline": [
      {
        "time": "2024.08.09 07:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.09 07:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000127",
    "date": "2024.08.01 21:00경",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "17H 레이디티 부근",
    "description": "고객이 17H 레이디티 부근에서 하차하는 중 넘어지면서 좌측 손목이 골절되는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "17H 레이디티 부근",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[17H 레이디티 부근] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 카트 정착점 추가 운영 검토 2. 카트 운행 주의사항 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-08-05",
    "timeline": [
      {
        "time": "2024.08.01 21:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.08.01 21:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000118",
    "date": "2024.07.31 15:38경",
    "incidentType": "차량사고",
    "businessUnit": "힐스빌리지",
    "victimType": "직원",
    "location": "D콘도 지하주차장 2F ↔ 1F",
    "description": "힐스빌리지 물품이동 후 D콘도 지하주차장에서 출차 중 오르막 구간에서 운전부주의로 인한 차량 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 지하주차장 2F ↔ 1F",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도 지하주차장 2F ↔ 1F] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "운전자 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-07-31",
    "timeline": [
      {
        "time": "2024.07.31 15:38",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.31 15:38",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000126",
    "date": "2024.07.28 17:00경",
    "incidentType": "화상",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "사우나",
    "description": "온탕 온수 공급 급수구에 붙어 있던 고객이 좌측 바깥쪽 허벅지에 경미한 화상을 입음",
    "cost": 0,
    "notes": "",
    "category": "화상",
    "resort": "힐스빌리지",
    "locationDetail": "사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[사우나] 화상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 온수주의 사인물 부착 2. 온수 급수구 대리석 보양",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-08-05",
    "timeline": [
      {
        "time": "2024.07.28 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.28 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000117",
    "date": "2024.07.27 16:00경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "직원",
    "location": "10H~18H 교차구간",
    "description": "광장으로 복귀하는 과정에서 10H~18H 교차구간에 카트가 넘어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H~18H 교차구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H~18H 교차구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 근무자 안전교육 2. 타이어 마모 상태 점검 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-07-31",
    "timeline": [
      {
        "time": "2024.07.27 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.27 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000115",
    "date": "2024.07.27 12:30경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "여자사우나 온탕",
    "description": "고객이 온탕에서 퇴장 중 미끄러지며 양쪽 발목과 무릎에 찰과상을 입음",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "여자사우나 온탕",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자사우나 온탕] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "기존 : 미끄럼주의 안내문 부착 및 튜브형 사인물 비치 개선 : 남·여 사우나 입구 튜브형 사인물 추가 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-07-27",
    "timeline": [
      {
        "time": "2024.07.27 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.27 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000114",
    "date": "2024.07.27 10:25경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐 1H",
    "description": "힐 1H 그린 40m 전 벙커 주변에서 어프로치 한 샷에 생크가 발생하여 캐디 척추 부위를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐 1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐 1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-07-27",
    "timeline": [
      {
        "time": "2024.07.27 10:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.27 10:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000113",
    "date": "2024.07.27 10:15경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "15H 화이트티",
    "description": "15H 화이트티에서 레이디티로 이동 중 카트 안에 벌이 들어와 피하는 중 고객이 카트에서 떨어짐",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "15H 화이트티",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H 화이트티] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-07-27",
    "timeline": [
      {
        "time": "2024.07.27 10:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.27 10:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000110",
    "date": "2024.07.25 12:15경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐 2H 40m 카트도로",
    "description": "힐 코스 2H 40m 지점 카트도로 왼쪽 잔디 엣지커팅 부분 단체에 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "힐 2H 40m 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐 2H 40m 카트도로] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-07-25",
    "timeline": [
      {
        "time": "2024.07.25 12:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.25 12:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000111",
    "date": "2024.07.25 07:40경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "4H 그린 전 크리크",
    "description": "고객이 크리크에 물이 없어 건너려다 이끼에 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "4H 그린 전 크리크",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H 그린 전 크리크] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 2. 돌다리 안내 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-07-26",
    "timeline": [
      {
        "time": "2024.07.25 07:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.25 07:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2025-H1892-000110",
    "date": "2024.07.24 14:40경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "직원",
    "location": "주차장",
    "description": "모래 상차 작업 후 이동 중 주차되어 있는 승용차를 인지하지 운행하여 충돌",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 공유 및 안전교육 실시 - 작업 중 주변 시야 확보 - 운전 중 주변 장애물 확인 철저",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2025-07-24",
    "timeline": [
      {
        "time": "2024.07.24 14:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.24 14:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000107",
    "date": "2024.07.22 13:40경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "4H 220m 우측 러프",
    "description": "4H 왼쪽 290m 벙커에서 고객이 친 악성 슬라이스 타구가 220m 우측 러프 지점에서 공을 피해 있던 코스팀 작업자 우측 팔을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "4H 220m 우측 러프",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H 220m 우측 러프] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-07-23",
    "timeline": [
      {
        "time": "2024.07.22 13:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.22 13:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000105",
    "date": "2024.07.16 11:53경",
    "incidentType": "빠짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H",
    "description": "6H 25yd 좌측 맨홀 옆으로 지나가던 중 맨홀 옆 싱크홀에 오른쪽 다리가 빠지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "빠짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H] 빠짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-07-16",
    "timeline": [
      {
        "time": "2024.07.16 11:53",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.16 11:53",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000103",
    "date": "2024.07.15 16:25경",
    "incidentType": "열상",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "12H",
    "description": "12H 화이트 티에서 거리를 측정하기 위해 뒷걸음 중 배토통에 다리가 걸려 오른발 뒷꿈치 찰과상 발생",
    "cost": 0,
    "notes": "",
    "category": "열상",
    "resort": "성문안팀",
    "locationDetail": "12H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[12H] 열상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스 티 세팅 시 주변 시설물 고려하여 세팅",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-07-15",
    "timeline": [
      {
        "time": "2024.07.15 16:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.15 16:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000104",
    "date": "2024.07.15 12:45경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H 우측 내리막",
    "description": "4H에서 라운딩 중이던 고객이 친 볼이 우측 도로 방향으로 벗어나면서 지나가던 차량의 앞면을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H 우측 내리막",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H 우측 내리막] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-07-16",
    "timeline": [
      {
        "time": "2024.07.15 12:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.15 12:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000102",
    "date": "2024.07.14 10:35경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "10:35경 주차장 D구역에 타구소리가 들려 발렛 근무자 방문. 바닥에서 골프공이 튀고 있는 장면을 목격하여 주변 차량 이상유무 확인 후 D구역 주차 중인 차량의 앞 라이트 부분이 파인 자국 발견",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "18H 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-07-15",
    "timeline": [
      {
        "time": "2024.07.14 10:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.14 10:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000124",
    "date": "2024.07.13 16",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리5H 그린",
    "description": "체리5H 그린 홀아웃 중 수풀에 가려진 구멍에 왼쪽 발이 빠지면서 넘어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "체리5H 그린",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H 그린] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-08-05",
    "timeline": [
      {
        "time": "2024.07.13 16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.13 16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000101",
    "date": "2024.07.09 13:05경",
    "incidentType": "기타",
    "businessUnit": "힐스비리지",
    "victimType": "고객",
    "location": "3호 승강기 1F 카 내부",
    "description": "승강기 도어 하부 레일에 이물질 삽입으로 인한 오동작 발생(출입문 열림 불량)",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "힐스비리지",
    "locationDetail": "3호 승강기 1F 카 내부",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3호 승강기 1F 카 내부] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 승강기 점검 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2024-07-10",
    "timeline": [
      {
        "time": "2024.07.09 13:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.09 13:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000099",
    "date": "2024.07.05 14:45경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장 C구역",
    "description": "18H 페어웨이 250m에서 세컨샷한 공이 악성 슬라이스가 발생하여 C구역에 주차되어 있는 차량 천장을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장 C구역",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장 C구역] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "18H 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-07-05",
    "timeline": [
      {
        "time": "2024.07.05 14:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.05 14:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000098",
    "date": "2024.07.03 12:15경",
    "incidentType": "차량사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "클럽하우스 주차장 2층",
    "description": "코스관리팀 소속 직원이 2인승 카트 운행 중 후진하던 차량을 인지하지 못하여 우측 하단 범퍼와 접촉",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리팀",
    "locationDetail": "클럽하우스 주차장 2층",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[클럽하우스 주차장 2층] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-07-03",
    "timeline": [
      {
        "time": "2024.07.03 12:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.07.03 12:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000096",
    "date": "2024.06.26 07:34경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "객실",
    "description": "샤워부스 내 바닥 미끄러움으로 인한 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 및 해당 공간에 대한 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-06-28",
    "timeline": [
      {
        "time": "2024.06.26 07:34",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.26 07:34",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000106",
    "date": "2024.06.24 20:23경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "객실",
    "description": "잔디광장 이용 중 뛰다가 미끄러지며 손목 골절",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설 및 운영 프로세스 점검 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-07-17",
    "timeline": [
      {
        "time": "2024.06.24 20:23",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.24 20:23",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000094",
    "date": "2024.06.23 15:10경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "드라이빙 레인지 잔디 타석 이용 후 주차장으로 돌아와 트렁크에 백을 싣는 중, 주차장 인근 잔디밭에 튀어나온 철근에 발목이 걸리는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고 현장 위험요소 점검 및 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-06-24",
    "timeline": [
      {
        "time": "2024.06.23 15:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.23 15:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000097",
    "date": "2024.06.23 07:45경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "3H 우측 90m 러프 지점",
    "description": "3H 90m 러프 지점에서 고객의 공을 찾으러 이동 중 발이 미끄러져 왼쪽 발목을 접지르고 무릎을 다친 사고. 사고 당시 비로 인해 미끄러웠고 클럽을 들고 있어 바닥을 지탱하기 어려움",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "3H 우측 90m 러프 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3H 우측 90m 러프 지점] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-06-29",
    "timeline": [
      {
        "time": "2024.06.23 07:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.23 07:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000090",
    "date": "2024.06.15 16:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 공이 카트도로 바운드 후 차량 우측 상단 프론트 범퍼에 맞음 ※안전그물망 설치구역",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1.티샷 시 안내멘트 강화 2. 티마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-06-17",
    "timeline": [
      {
        "time": "2024.06.15 16:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.15 16:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000087",
    "date": "2024.06.14 14:20경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "9H 150m 세컨지점",
    "description": "A고객의 1H에서 티샷한 볼이 훅이 나면서 9H 150m 세컨지점에 있던 고객 우측 전완에 볼이 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "9H 150m 세컨지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[9H 150m 세컨지점] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 라운드 출발 전 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-06-15",
    "timeline": [
      {
        "time": "2024.06.14 14:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.14 14:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000086",
    "date": "2024.06.13 19:00경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H~18H 교차구간",
    "description": "A팀이 18H 교행구간에 정차하였고, B팀이 10H 이동중 카트와 충돌하는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H~18H 교차구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H~18H 교차구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 교행구간 태블릿 안내멘트 강화 2. 라운드 출발 전 자동주행 시 전방주의 강조",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-06-14",
    "timeline": [
      {
        "time": "2024.06.13 19:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.13 19:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000085",
    "date": "2024.06.13 08:55경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "1H 그린 뒤 카트도로",
    "description": "캐디가 43번 카트를 1H 그린 뒤쪽으로 자동운행 중 카트도로에 정차 되어 있는 코스팀 작업차량에 카트가 충돌하여 앞 범퍼가 파손된 사고",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "1H 그린 뒤 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H 그린 뒤 카트도로] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스팀(대정) 작업 시 도로에서 벗어나 정차 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-06-14",
    "timeline": [
      {
        "time": "2024.06.13 08:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.13 08:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000084",
    "date": "2024.06.11 18:10경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "직원식당 옆 주차장",
    "description": "밸리CC 직원식당 옆 주차장에 주차 중이던 캐디 차량 좌측 뒷좌석 유리 파손 메이플3H과 인접한 곳이며, 악성 훅이 발생하여 생긴 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "직원식당 옆 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[직원식당 옆 주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 티샷 시 타구사고 위험 안내 강화 2. 티 마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-06-12",
    "timeline": [
      {
        "time": "2024.06.11 18:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.11 18:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000092",
    "date": "2024.06.11 08:50경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H 그린 주변 잔디보호구역",
    "description": "6H 그린 플레이 후 회원이 카트 탑승을 위해 그린 뒤 내리막 출구 구간 이동 중 미끌림 방지 및 잔디보호를 위해 설치 해놓은 보호 매트에 스파이크가 걸려 왼쪽 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 그린 주변 잔디보호구역",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 그린 주변 잔디보호구역] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 미끌림 방지매트 사고내용 전달 및 보수공사 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-06-23",
    "timeline": [
      {
        "time": "2024.06.11 08:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.11 08:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000091",
    "date": "2024.06.11 07:30경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "브릿지5H",
    "description": "브릿지5H 그린 플레이 중 볼마크를 위해 이동 중 단차에서 발을 헛딛어 넘어진 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지5H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-06-17",
    "timeline": [
      {
        "time": "2024.06.11 07:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.11 07:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000083",
    "date": "2024.06.10 15:10경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지5H 화이트 티박스",
    "description": "고객이 브릿지5H 화이트 티박스에서 티샷 종료 후 내려오던 중 훼손된 나무계단을 밟고 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지5H 화이트 티박스",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지5H 화이트 티박스] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 훼손된 나무계단 코스팀 보수 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-06-10",
    "timeline": [
      {
        "time": "2024.06.10 15:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.10 15:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000082",
    "date": "2024.06.09 17:14경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인9H",
    "description": "파인9H 티박스에서 친 티샷이 좌측 훅으로 발생하여 볼이 한성본가 직원 차량 천장에 맞은 사고 발생 ※안전그물망 설치구역",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인9H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 티샷 시 타구사고 위험 안내 강화 2. 티 마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-06-10",
    "timeline": [
      {
        "time": "2024.06.09 17:14",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.09 17:14",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000079",
    "date": "2024.06.07 11:40경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지 7H 그린",
    "description": "브릿지 7H에서 앞팀이 안전 거리를 벗어나 그린 이동을 확인 후 티샷을 진행하였는데 클럽 스윗스팟에 정확히 맞아 그린 방향으로 진행한 볼이 동시간 그린 플레이 중이던 피해자 좌측 둔부에 맞는 사고 ※내리막 지형 및 바람 영향",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지 7H 그린",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지 7H 그린] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 라운드 진행 시 앞 팀과의 거리 확보 재발방지교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-06-07",
    "timeline": [
      {
        "time": "2024.06.07 11:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.07 11:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000080",
    "date": "2024.06.06 17:05경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "월송리CC",
    "description": "5인승 운전석 승차 과정에서 파손된 팔 받침대(암레스트)에 걸려 의류가 손상되는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "월송리CC",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[월송리CC] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "라운드 전 카트 이상 유무 확인하여 진행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-06-08",
    "timeline": [
      {
        "time": "2024.06.06 17:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.06 17:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000076",
    "date": "2024.06.01 06:50경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지 4H",
    "description": "브릿지4H 화이트티잉 그라운드에서 티샷한 볼이 도로 방향으로 넘어가 힐스CC로 이동 중이던 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지 4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지 4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-06-01",
    "timeline": [
      {
        "time": "2024.06.01 06:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.06.01 06:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000077",
    "date": "2024.05.31 15:35경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리3H",
    "description": "파인6H 티샷이 체리3H 세컨 서브 대기 중이던 캐디 좌측 상완부 부위에 날아가 맞는 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 티 마크 일부 수정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-06-01",
    "timeline": [
      {
        "time": "2024.05.31 15:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.31 15:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000075",
    "date": "2024.05.28 11:15경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "16h 150m 카트도로 지점",
    "description": "16H 우측 240m 벙커 옆에서 세컨샷 한 공이 쌩크가 발생하여 150m 카트도로에서 티박스 쪽으로 이동중인 사고자 이마를 맞춘 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "16h 150m 카트도로 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16h 150m 카트도로 지점] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 코스 작업 시 안전보호구 착용 2. 맞은편 이동 시 안전거리 확보 후 이동",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-05-28",
    "timeline": [
      {
        "time": "2024.05.28 11:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.28 11:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000074",
    "date": "2024.05.23 09:46경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인 08:52팀에서 티샷한 공이 차량 루프를 가격함",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-23",
    "timeline": [
      {
        "time": "2024.05.23 09:46",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.23 09:46",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000073",
    "date": "2024.05.21 12:38경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H 50m 지점 우측 군도",
    "description": "브릿지6H 130m 지점에서 고객의 세번째 샷을 한 볼이 카트 도로를 맞고 군도 방향으로 넘어가 월송리 방면으로 지나던 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 50m 지점 우측 군도",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 50m 지점 우측 군도] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전 그물망 설치 검토 -기존 조경수로 벗어난 홀을 예방하기 미흡",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-21",
    "timeline": [
      {
        "time": "2024.05.21 12:38",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.21 12:38",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000072",
    "date": "2024.05.18 11:00경",
    "incidentType": "찔림",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "B217호 침실 내 화장실",
    "description": "물을 사용하려 샤워부스 안쪽으로 들어갔고, 밖으로 물이 튈까봐 부스 문을 밀어 닫으려는 순간 샤워 부스 유리문이 깨지면서 손과 발에 자상 및 찰과상 발생",
    "cost": 0,
    "notes": "",
    "category": "찔림",
    "resort": "밸리빌리지",
    "locationDetail": "B217호 침실 내 화장실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B217호 침실 내 화장실] 찔림 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "객실 정비 중 불량 발견 시 점검 및 수리",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-05-20",
    "timeline": [
      {
        "time": "2024.05.18 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.18 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000071",
    "date": "2024.05.13",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "파인9H",
    "description": "그린 보수 작업자가 파인 9H 좌측 카트도로에서 파인 11:45팀 담당 캐디가 클럽 정리 후 운전석으로 이동하는 순간 2인승 카트로 발등 위를 밟고 지나감",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "파인9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인9H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시(업체)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-16",
    "timeline": [
      {
        "time": "2024.05.13",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.13",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000067",
    "date": "2024.05.05 11:30경",
    "incidentType": "끼임",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H 그린주변 카트도로",
    "description": "그린 플레이 종료 후 정차되어 있는 카트에 탑승하려 하는 순간 카트가 앞으로 움직임 고객이 넘어짐과 동시 카트 운전석 앞바퀴에 발이 끼임",
    "cost": 0,
    "notes": "",
    "category": "끼임",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 그린주변 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 그린주변 카트도로] 끼임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 이상 징후 카트 정비 점검(32번 카트) - 조사결과 이상 없었으나, 재발 방지로 제조사에 점검 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-05-05",
    "timeline": [
      {
        "time": "2024.05.05 11:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.05 11:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000064",
    "date": "2024.05.04 17:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H 좌측 도로 100yd 지점",
    "description": "파인 13:35 팀에서 티샷한 공이 차량 우측 B필러를 가격함",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H 좌측 도로 100yd 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H 좌측 도로 100yd 지점] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 체리5H 안전 그물망 높이 연장 검토 필요 - 기존 5m 높이 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-05-04",
    "timeline": [
      {
        "time": "2024.05.04 17:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.04 17:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000063",
    "date": "2024.05.04 16:00경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "체리4H 티샷한 공이 파인5H 세컨 플레이 중인 고객 안면부에 바운드 되어 턱에 맞는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 코스 사이 안전 그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-04",
    "timeline": [
      {
        "time": "2024.05.04 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.04 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000062",
    "date": "2024.05.03 12:40경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "Practice Range",
    "description": "Practice Range Par 4H 레이디 티에서 티샷 한 공이 악성 훅으로 인하여 코스 좌측 공터에 무단으로 주차된 뮤지업 산 공사 관계자 차량 유리에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "월송리팀",
    "locationDetail": "Practice Range",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[Practice Range] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고 지점 차량 정차 통체 2. 사고 지점 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-03",
    "timeline": [
      {
        "time": "2024.05.03 12:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.03 12:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000061",
    "date": "2024.05.02 14:00경",
    "incidentType": "클럽 파손",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "7H 70m 지점 러프",
    "description": "7H 70m지점 플레이 중 러프에 묻혀있던 작업도구(스페너)로 인한 클럽헤드 파손",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "월송리팀",
    "locationDetail": "7H 70m 지점 러프",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[7H 70m 지점 러프] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고사례 전파 및 안전교육 실시 2. 코스 작업 후 공구 지정된 곳에 위치/정리",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-03",
    "timeline": [
      {
        "time": "2024.05.02 14:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.02 14:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000060",
    "date": "2024.05.01 08:35경",
    "incidentType": "차량사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인 07:45팀에서 티샷한 공이 도로를 맞고 사고자 차량 유리를 타격",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 고객 티샷 전 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-05-02",
    "timeline": [
      {
        "time": "2024.05.01 08:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.05.01 08:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000058",
    "date": "2024.04.26 14:15경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "4H 카트도로 100m 지점",
    "description": "4H 카트도로 100m 지점에서 캐디매니저가 자동 카트 운행 중 카트 도로에 정차되어 있던 작업 2인승 카트 후면에 부딪혀 카트 앞 부분이 파손됨",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "4H 카트도로 100m 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H 카트도로 100m 지점] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "코스팀(대정) 작업 시 도로에서 벗어나 정차 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-04-30",
    "timeline": [
      {
        "time": "2024.04.26 14:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.26 14:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000055",
    "date": "2024.04.26 13:15경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "12H 화이트티 149m 카트도로 지점",
    "description": "10H 화이트티에서 티샷한 공이 악성 훅이 심하게 발생하여 12H 화이트티 카트 안에서 대기중이던 고객의 머리를 맞춘 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "12H 화이트티 149m 카트도로 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[12H 화이트티 149m 카트도로 지점] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 인접 홀 안전 그물망 설치 검토 2. 인접 홀 화이트티 조정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-04-27",
    "timeline": [
      {
        "time": "2024.04.26 13:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.26 13:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000054",
    "date": "2024.04.24 15:40경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "11H 세컨 구간",
    "description": "9H에서 티샷한 공이 훅이 발생하여 1H 세컨에 계시던 고객의 목에 맞은 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "11H 세컨 구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H 세컨 구간] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 태블릿 안내음성메시지 추가 2. 라운딩 전 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-04-25",
    "timeline": [
      {
        "time": "2024.04.24 15:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.24 15:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000052",
    "date": "2024.04.23 13:15경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H 우측 내리막",
    "description": "브릿지 4H에서 티샷한 공이 도로방향으로 날아가 지나가던 덤프트럭 차량의 앞면을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H 우측 내리막",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H 우측 내리막] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 티샷 전 캐디 매니저 사고 위험 안내 사전 안내 강화 2. 사고 지점 안전방 높이 상향은 어려움으로 판단",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-04-24",
    "timeline": [
      {
        "time": "2024.04.23 13:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.23 13:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000053",
    "date": "2024.04.22",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H~18H 교차구간",
    "description": "1.12:30팀 10H 티오프 준비를 위해 이동 중 티박스에 앞 팀이 있어 교차구간 조금 지나쳐서 정차 2. 07:45팀 18H 플레이 마치고 전방에 카트 인지하였으나, 경로상 부딪히지 않을 것이라 판단 3. 카트 운행 중 후미 충돌하여 클럽 파손 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H~18H 교차구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H~18H 교차구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 교행구간 태블릿 안내멘트 강화 2. 안내팻말 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-04-25",
    "timeline": [
      {
        "time": "2024.04.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000050",
    "date": "2024.04.19",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "여자락카",
    "description": "여자락카 D구역에서 락커에 비치되어 있던 스툴에 앉으려는 과정에서 낙상사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "여자락카",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자락카] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "스툴 지지대 위치 변경, 바닥면 고정 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-04-22",
    "timeline": [
      {
        "time": "2024.04.19",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.19",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000048",
    "date": "2024.04.16",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "12H~15H 교행구간",
    "description": "1. A고객 팀 15H 티하우스 이용을 위해 카트 정차(주정차 금지구역 정지) 2. B고객 팀 이동 중 미 정지하여 카트 추돌사고 발생(카트 미 정지)",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "12H~15H 교행구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[12H~15H 교행구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 교행구간 태블릿 안내멘트 강화 2. 안내팻말 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-04-18",
    "timeline": [
      {
        "time": "2024.04.16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000046",
    "date": "2024.04.12 13:50경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지6H 20yd 지점 카트도로",
    "description": "브릿지 6H 200yd 지점 카트도로 오른쪽 패널티 구역 경사면에서 고객이 트러블샷을 진행 중 중심을 잃고 카트도로 쪽으로 넘어지면서 안면 측면부와 양쪽 무릎을 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스팀",
    "locationDetail": "브릿지6H 20yd 지점 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지6H 20yd 지점 카트도로] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-04-13",
    "timeline": [
      {
        "time": "2024.04.12 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.12 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000045",
    "date": "2024.04.06 15:20경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크5H",
    "description": "오크 4H 페어웨이 150yd 부근에서 친 볼이 슬라이스 나며 카트 도로 맞고 사고자의 허벅지를 가격",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "타구사고 예방을 위한 안전망 또는 시설물 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-04-06",
    "timeline": [
      {
        "time": "2024.04.06 15:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.04.06 15:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000042",
    "date": "2024.03.30 16:50경",
    "incidentType": "클럽 파손",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H 150Y 선상 좌측 벙커",
    "description": "체리코스 5H 150yd 선상 좌측 벙커의 우측 러프에서 연습 스윙 중 러프에 가려진 돌에 고객의 마제스티 4번 유틸 하단 클럽 손상되는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "클럽 파손",
    "resort": "밸리팀",
    "locationDetail": "체리5H 150Y 선상 좌측 벙커",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H 150Y 선상 좌측 벙커] 클럽 파손 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 벙커 모래 관리 강화 2. 러프 부근 스윙 시 바닥 상태 확인 사전 안내 3. 코스 내 이물질 제거 철저",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-03-30",
    "timeline": [
      {
        "time": "2024.03.30 16:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.30 16:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000044",
    "date": "2024.03.27 12:30경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐2H 100yd 카트 도로 우측 배토통 지점",
    "description": "힐 코스 2H 세컨 지점에서 디봇트 정리 중이던 캐디가 2H 티샷 한 공이 카트도로에 바운드 되어 맞은 사고",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐2H 100yd 카트 도로 우측 배토통 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐2H 100yd 카트 도로 우측 배토통 지점] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-04-02",
    "timeline": [
      {
        "time": "2024.03.27 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.27 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000038",
    "date": "2024.03.26 13:50경",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "밸리CC 하역장",
    "description": "식음서비스팀 밸리레스토랑 근무자 운행 중 사고 발생. A동 업무와 파인그늘집 근무자 이송으로 이동하기 위해 주차 차량 후진 시 주정차 차량을 확인하지 못하고 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "밸리CC 하역장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 하역장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 근로자 교육 실시 - 주위 상황 파악 강화 - 장비 주변 장애물 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2024-03-27",
    "timeline": [
      {
        "time": "2024.03.26 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.26 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000036",
    "date": "2024.03.26",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플3H",
    "description": "스프링쿨러 설치 부위에 다리를 디뎌 접지름 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "메이플3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플3H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 단지 식별이 될 수 있도록 러프구역 예초 2.라운딩 시 고객 주의 안내 강화 3. 단차가 심한 스프링쿨러는 순차적 수평작업 진행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-03-26",
    "timeline": [
      {
        "time": "2024.03.26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000035",
    "date": "2024.03.14 12:10경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "오크3H 그린 좌측 벙커",
    "description": "2024.03.14 12:10경 캐디가 오크3H 그린 좌측 벙커에서 클럽 서브 중, 벙커 주변 러프에서 미끄러져 좌측 무릎과 발목이 꺾이는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "오크3H 그린 좌측 벙커",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크3H 그린 좌측 벙커] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-03-20",
    "timeline": [
      {
        "time": "2024.03.14 12:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.14 12:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000033",
    "date": "2024.03.13 14:30경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H 150yd 지점 카트 도로에서 캐디가 운행하던 2인승 카트가 고객 카트 추월 중 카트에서 내리던 사고자를 인지하지 못하고 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 카트 안전 운행 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-03-14",
    "timeline": [
      {
        "time": "2024.03.13 14:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.13 14:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000032",
    "date": "2024.03.13",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크2H 페어웨이 초입",
    "description": "오크2H 티샷을 마치고 카트로 이동 중 카트도로 내 설치된 잔디 보호 라인팩에 걸려 바지 찢어짐 및 손가락 골절, 오른쪽 발목 찰과상 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "오크2H 페어웨이 초입",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[오크2H 페어웨이 초입] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 카트 안전 운행 교육 2. 탑승 및 이동 시 카트 밖 신체 노출 불가 고객 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-03-13",
    "timeline": [
      {
        "time": "2024.03.13",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.13",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000030",
    "date": "2024.03.10 16:40경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리1H → 2H 교량",
    "description": "캐디 교육 라운드 진행 중 운전 미숙으로 다리 난간 초입 부분에 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "체리1H → 2H 교량",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리1H → 2H 교량] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-03-13",
    "timeline": [
      {
        "time": "2024.03.10 16:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.03.10 16:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000026",
    "date": "2024.02.27 08:55경",
    "incidentType": "찔림",
    "businessUnit": "월송리팀",
    "victimType": "직원",
    "location": "운치라운지",
    "description": "칼 세척 후 살균 건조기 앞에 넣는 과정에서 칼 앞 끝이 건조기 안쪽 턱에 걸려 손이 미끄러지며 칼 뒷부분에 오른손 검지 두번째 마디에 약 1cm 자상",
    "cost": 0,
    "notes": "",
    "category": "찔림",
    "resort": "월송리팀",
    "locationDetail": "운치라운지",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[운치라운지] 찔림 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-02-27",
    "timeline": [
      {
        "time": "2024.02.27 08:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.27 08:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000023",
    "date": "2024.02.24 08:00경",
    "incidentType": "사망",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "직원식당 휴게공간",
    "description": "2024.02.24 08:00경 직원식당 휴게공간에서 술을 마시고 피를 토한 흔적과 몸이 굳어 있는 모습을 발견하여 119 신고 접수",
    "cost": 0,
    "notes": "",
    "category": "사망",
    "resort": "밸리팀",
    "locationDetail": "직원식당 휴게공간",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "중대재해 (사망/중상)",
    "victimName": "익명",
    "title": "[직원식당 휴게공간] 사망 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "단지 내 업장 점검 및 비인가지역 출입금지 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2025-02-24",
    "timeline": [
      {
        "time": "2024.02.24 08:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.24 08:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000031",
    "date": "2024.02.22",
    "incidentType": "기타",
    "businessUnit": "아이파크콘도",
    "victimType": "고객",
    "location": "도로 주변",
    "description": "2024.02.22 폭설 이후 도로주변 조경수 부러짐",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "아이파크콘도",
    "locationDetail": "도로 주변",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[도로 주변] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고 발생 시 현장 상주 인원이 보고 할 수 있게 업무 협의",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-03-13",
    "timeline": [
      {
        "time": "2024.02.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000019",
    "date": "2024.02.12 14:47경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "7H 세컨 우측 벙커 지점",
    "description": "A고객의 티샷한 볼이 세컨에 있던 B고객님 왼쪽 팔꿈치 부분을 타격 (블라인드 지역으로 화이트 티박스에서 사라밍 보이지 않아 인지하지 못함)",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "7H 세컨 우측 벙커 지점",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[7H 세컨 우측 벙커 지점] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "고객 안내 사이니지 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2024-02-18",
    "timeline": [
      {
        "time": "2024.02.12 14:47",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.12 14:47",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000020",
    "date": "2024.02.11 18:01경",
    "incidentType": "화재",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "로쉬카페",
    "description": "2024.02.11 18:00경 1층 여자화장실 쪽에서 연기 확인 (로쉬카페 주방 오븐에서 발생한 전도열고 벽체 내부 마감재 발화 추정)",
    "cost": 0,
    "notes": "",
    "category": "화재",
    "resort": "파크로쉬",
    "locationDetail": "로쉬카페",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[로쉬카페] 화재 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "전기 및 가스시설 자체 점검 시행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2024-02-19",
    "timeline": [
      {
        "time": "2024.02.11 18:01",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.11 18:01",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000017",
    "date": "2024.02.09 16:42경",
    "incidentType": "물체에 맞음",
    "businessUnit": "객실",
    "victimType": "고객",
    "location": "안방 욕실",
    "description": "안방 욕실에서 샤워하던 중 샤워기가 걸이에서 탈락되며 오른쪽 발등 위로 떨어짐 샤워기가 걸이에 완전히 꽂히지 않음(걸이와 샤워기 헤드 사양이 맞지 않음)",
    "cost": 0,
    "notes": "",
    "category": "물체에 맞음",
    "resort": "객실",
    "locationDetail": "안방 욕실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[안방 욕실] 물체에 맞음 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "유관부서 협업하여 전수조사(필요 시 부품 교체)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-02-11",
    "timeline": [
      {
        "time": "2024.02.09 16:42",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.09 16:42",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000016",
    "date": "2024.02.02 16:17경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프 6~7구역",
    "description": "G슬로프 6~7지역 구간에서 스키장 주간업무 마감 준비를 위해 슬로프 안전배너 철거 작업 중이던 패트롤 대원이, 뒤에서 내려오던 고객과 충돌하는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "G슬로프 6~7구역",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프 6~7구역] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 전파 및 안전교육 실시 - 현장 시야 확보 및 주변 상황 파악 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-02-05",
    "timeline": [
      {
        "time": "2024.02.02 16:17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.02.02 16:17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000015",
    "date": "2024.01.31 13:10경",
    "incidentType": "차량사고",
    "businessUnit": "단지내",
    "victimType": "직원",
    "location": "힐스CC → 월송리CC 군도 사잇길",
    "description": "성문안 카트도로를 부분 보수작업(시멘트 양생) 중이라 진입이 불가하여 재선충 수간주사 작업을 위해 월송리 1H 샛길을 이용하여 성문안 4H로 이동하던 중 눈길에 미끄러져 계곡 아래로 차량이 20m 추락",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "단지내",
    "locationDetail": "힐스CC → 월송리CC 군도 사잇길",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐스CC → 월송리CC 군도 사잇길] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 차량운전자 안전교육 2. 사전 점검 및 통제조치 강화 3. 통행제한 및 임시 폐쇄조치 4. 제설 및 미끄럼 방지 조치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2024-02-01",
    "timeline": [
      {
        "time": "2024.01.31 13:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.31 13:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000014",
    "date": "2024.01.24 08:50경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "파크키친 앞 가든",
    "description": "2024.01.20 ~ 1/21 내린 눈/비로 인해 발생된 살얼음에 케이블카 탑승을 위해 이동하던 고객이 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "파크키친 앞 가든",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파크키친 앞 가든] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "우천/강설 시 패트롤 및 염화칼슘 살포",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2024-01-24",
    "timeline": [
      {
        "time": "2024.01.24 08:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.24 08:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000011",
    "date": "2024.01.22 11:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "그랜드볼룸 출입구 로비",
    "description": "사고자가 출입문을 통해 들어 올 때, 로비 타일에 물기로 인해 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "그랜드볼룸 출입구 로비",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[그랜드볼룸 출입구 로비] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 미끄럼 방지매트 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-01-22",
    "timeline": [
      {
        "time": "2024.01.22 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.22 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000007",
    "date": "2024.01.20 13:15경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "사고자가 주차 차단게이트 옆으로 지나가던 중 차단게이트가 내려와 사고자의 눈썹 위쪽을 내치려 안경 다리가 부러지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 차단게이트 센서 점검 2. 고객 인도 통행 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2024-01-20",
    "timeline": [
      {
        "time": "2024.01.20 13:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.20 13:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000005",
    "date": "2024.01.14 11:00경",
    "incidentType": "시설물",
    "businessUnit": "아이파크콘도",
    "victimType": "고객",
    "location": "타워동",
    "description": "2024.01.14 11:00경 타워동 1024호, 534호 객실 천장 무너짐 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "시설물",
    "resort": "아이파크콘도",
    "locationDetail": "타워동",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[타워동] 시설물 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "전 객실 추가 피해 여부 점검 및 시설물 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-01-14",
    "timeline": [
      {
        "time": "2024.01.14 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.14 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000021",
    "date": "2024.01.13 20:50경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "F슬로프 1지역",
    "description": "고객이 스키를 타고 F슬로프 이용 중 1지역을 내려가면서 좌측부근 스키 바인딩이 풀리며 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "F슬로프 1지역",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[F슬로프 1지역] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 스키렌탈 임대업장 사고사례 공유 - 장비 안전점검 절차 보완 필요 2. 직원 교육 실시 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-02-21",
    "timeline": [
      {
        "time": "2024.01.13 20:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.13 20:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000004",
    "date": "2024.01.07 14:47경",
    "incidentType": "떨어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "스키장",
    "description": "1. 버드리프트 하차장에서 스키 플레이트를 떨어트린 고객이 하차보조요원에게 리프트 정지 및 하차 보조 도움 요청 2. 하차보조요원이 정지버튼을 누른 후 도움을 드리려는 순간 '안전바 올리는 지점' 전에서 미리 안전바를 올린 리프트에서 아이 고객이 약 4m 아래로 떨어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "떨어짐",
    "resort": "힐스빌리지",
    "locationDetail": "스키장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키장] 떨어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 리프트 하차장 안전바 올림 안내문 설치 2. 운영사 및 근로자 비상대책 매뉴얼 교육 실시 - 사고 발생 시 처리 절차 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-01-08",
    "timeline": [
      {
        "time": "2024.01.07 14:47",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.07 14:47",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000003",
    "date": "2024.01.07 10:25경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "군도변",
    "description": "2024.01.07 10:25경 순간 강풍 발생으로 셔틀버스 승강장 주변에 설치해 놓았던 임시주차장 간판이 넘어져 주행중이던 고객 차량의 범퍼를 가격",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "넘어짐 및 위험 물품 점검 및 고정 작업 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-01-08",
    "timeline": [
      {
        "time": "2024.01.07 10:25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2024.01.07 10:25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000053",
    "date": "202311.07 07:32",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "옥외 주차장",
    "description": "테라스에 비치했던 썬베드가 강풍에 의해 주차장으로 떨어지며 피해자 차량을 손상함",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "파크로쉬",
    "locationDetail": "옥외 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[옥외 주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 기상 이슈 발생 시 프로세스 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-11-08",
    "timeline": [
      {
        "time": "202311.07 07:32",
        "note": "사고 발생 접수"
      },
      {
        "time": "202311.07 07:32",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000002",
    "date": "2023.12.31 17:10경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "사우나",
    "description": "남자 사우나 노천탕 이용 중 계단에서 넘어짐 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "1. 사고 위험구간 점검 및 보수 2. 미끄럼주의 표지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2024-01-05",
    "timeline": [
      {
        "time": "2023.12.31 17:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.31 17:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000001",
    "date": "2023.12.30~2023.12.31",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "지하주차장",
    "description": "12/30~12/31 숙박기간 중 D콘도 지하(2F) 주차장 D6-1번 주차구역 석회물 누수로 인한 차량 보험 접수 10건 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "지하주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[지하주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "시설팀 협조 파악된 구역 포함 확인 및 수리",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2024-01-02",
    "timeline": [
      {
        "time": "2023.12.30~2023.",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.30~2023.",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000082",
    "date": "2023.12.27",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "인도어에서 아웃도어 스파로 이동 중 빙판위에서 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고발생 자쿠지 임시 폐쇄 조치 - 미끄럼주의 사이니지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-12-27",
    "timeline": [
      {
        "time": "2023.12.27",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.27",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000081",
    "date": "2023.12.23 16:18경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "I슬로프",
    "description": "보드를 타고 I슬로프 이동 중 4지역 중앙부근에서 콜라 PET병을 밟고 넘어져 부상을 입은 사고라고 주장",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "I슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[I슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 슬로프 내 이물질 제거 철저",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-12-27",
    "timeline": [
      {
        "time": "2023.12.23 16:18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.23 16:18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000079",
    "date": "2023.12.18",
    "incidentType": "차량사고",
    "businessUnit": "기타",
    "victimType": "직원",
    "location": "기타",
    "description": "더밸리키친 크리스마스 디너뷔페 데코레이션 장식품 구매를 위해 업무용 차량을 타고 강남 고속버스터미널로 이동 중 터널에서 앞 차량과 추돌사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "기타",
    "locationDetail": "기타",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[기타] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-12-19",
    "timeline": [
      {
        "time": "2023.12.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000077",
    "date": "2023.12.11 12:40경",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "밸리CC 쓰레기 하역장 캐디대기실 주차장",
    "description": "창고정링세ㅓ 나온 폐기물을 스타렉스 차량에 실으려고 트렁크 문을 열고 후진 주차 중 트렁크 문이 부딪히는 사고 발생(사고 당일 우천으로 인하여 시야 확보 어려움)",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "밸리CC 쓰레기 하역장 캐디대기실 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리CC 쓰레기 하역장 캐디대기실 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-12-11",
    "timeline": [
      {
        "time": "2023.12.11 12:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.11 12:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2024-H1892-000034",
    "date": "2023.12.10",
    "incidentType": "차량사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "2023.12.10 골프라인딩 후 사고자 차량 파손 흔적 발견",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "주차 통제 시스템 추가 도입",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2024-03-19",
    "timeline": [
      {
        "time": "2023.12.10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.12.10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000072",
    "date": "2023.11.28 15:40경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "8H",
    "description": "앞팀 7H 블루티에서 티샷한 볼이 슬라이스가 나면서 8H에 있던 고객 뒷목에 맞음 - 담당 캐디 주의 무전은 하였지만 시간이 촉박하여 피하지 못함",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[8H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-11-28",
    "timeline": [
      {
        "time": "2023.11.28 15:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.28 15:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000068",
    "date": "2023.11.28 11:26경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "골프빌리지 이동 중 파인5H에서 좌측으로 날아온 볼에 차량이 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 설치 검토 - 군도변 티샷 전 안내멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-11-28",
    "timeline": [
      {
        "time": "2023.11.28 11:26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.28 11:26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000074",
    "date": "2023.11.28",
    "incidentType": "베임",
    "businessUnit": "파크로쉬",
    "victimType": "직원",
    "location": "로쉬카페 주방",
    "description": "단호박 재료 손질 작업 중 부주의로 인해 칼이 미끄러지며 베임",
    "cost": 0,
    "notes": "",
    "category": "베임",
    "resort": "파크로쉬",
    "locationDetail": "로쉬카페 주방",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[로쉬카페 주방] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전교육 실시 - 베임 방지 장갑 구매 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-11-30",
    "timeline": [
      {
        "time": "2023.11.28",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.28",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000070",
    "date": "2023.11.18 18:30경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "아웃도어 스파로 이동 중 빙판 위에서 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 미끄럼방지 매트 및 사이니지 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-11-28",
    "timeline": [
      {
        "time": "2023.11.18 18:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.18 18:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000067",
    "date": "2023.11.18",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "3H~8H 교행구간",
    "description": "고객 카트와 3H 티잉그라운드에 정차 중이었던 작업차량과 충돌 고객 전방주시 태만 및 카트도로 정차 중이었던 작업차량이 원인",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "3H~8H 교행구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3H~8H 교행구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 전 안전수칙 멘트 안내 강화 - 코스 내 작업차량 정차 금지 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-11-21",
    "timeline": [
      {
        "time": "2023.11.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000066",
    "date": "2023.11.18",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "15H~16H 티잉그라운드",
    "description": "고객 카트와 16H 티에 정차 중이었던 작업차량과 추돌 고객 전방주시 태만과 16H 티잉그라운드에 정차되어 있던 차량이 원인",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "15H~16H 티잉그라운드",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H~16H 티잉그라운드] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 전 안전수칙 멘트 안내 강화 - 코스 내 작업차량 정차 금지 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-11-21",
    "timeline": [
      {
        "time": "2023.11.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000058",
    "date": "2023.11.11 13:30경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지3H",
    "description": "브릿지 3H에서 타구 한 볼이 군도변을 지나던 마샬 캐디의 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지3H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 설치 검토 - 군도변 티샷 전 안내멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-11-11",
    "timeline": [
      {
        "time": "2023.11.11 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.11 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000055",
    "date": "2023.11.07",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "6H",
    "description": "브릿지6H 170m 지점에서 세컨 샷 한 공을 찾으러 가는 중 잔디 예지물로 가려져 있던 스프링쿨러를 밟으며 발목을 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[6H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유관부서 내용 전달 및 조치 진행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-11-09",
    "timeline": [
      {
        "time": "2023.11.07",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.07",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000046",
    "date": "2023.11.03",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "9H",
    "description": "9H 그린에서 그린 서브를 도와주고 있던 중 좌측 벙커 앞 러프에서 어프로치를 한 고객의 볼에 캐디가 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 타구자 전방 위치 금지 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-11-04",
    "timeline": [
      {
        "time": "2023.11.03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000056",
    "date": "2023.11.02 19:00",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "야간시간 아웃도어 스파 공용 자쿠지로 입장 중 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 일몰 후 공용 자쿠지 내부등 상시 점등 점검",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-11-09",
    "timeline": [
      {
        "time": "2023.11.02 19:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.02 19:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000047",
    "date": "2023.11.02 10:10경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "잔디광장",
    "description": "객실 퇴실 후 야외 광장에서 바닥 단차를 인지하지 못하고 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "잔디광장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[잔디광장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 단차부 점검 및 보수 의뢰",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-11-04",
    "timeline": [
      {
        "time": "2023.11.02 10:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.11.02 10:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000045",
    "date": "2023.10.31 16:40경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플7H->8H",
    "description": "뒷팀 메이플7H 이치, 앞팀 8H 티박스로 이동 중 고객의 세컨샷 볼이 악성 훅으로 인해 앞팀 캐디가 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플7H->8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플7H->8H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-10-31",
    "timeline": [
      {
        "time": "2023.10.31 16:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.31 16:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000043",
    "date": "2023.10.23",
    "incidentType": "대물사고",
    "businessUnit": "힐스팀",
    "victimType": "직원",
    "location": "클럽하우스",
    "description": "드림투어 대회 경기를 위해 골프백을 현관 직원이 컨베이어 벨트에 하차 중 골프백 등이 파손됨 (골프백, 드라이버버, 드라이버 샤프트 스크래치, 거리측정기 케이스, 골프 네임텍)",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "힐스팀",
    "locationDetail": "클럽하우스",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[클럽하우스] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 현관 근로자 상/하차 교육 진행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-10-23",
    "timeline": [
      {
        "time": "2023.10.23",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.23",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000075",
    "date": "2023.10.22",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "캐디 락커 이동 구간",
    "description": "근무 종료 후 카트 세척을 하고 락커로 이동 중 문턱 앞에서 미끄러저 념어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "캐디 락커 이동 구간",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[캐디 락커 이동 구간] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전사고 예방교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-11-30",
    "timeline": [
      {
        "time": "2023.10.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000040",
    "date": "2023.10.21",
    "incidentType": "차량사고",
    "businessUnit": "단지내",
    "victimType": "고객",
    "location": "댐삼거리",
    "description": "밸리CC에서 댐 쪽으로 운행 중 댐 쪽 카트도로로 차량 전복",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "단지내",
    "locationDetail": "댐삼거리",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[댐삼거리] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 댐삼검리 카트도로 방면 야간 시인성 개선",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-10-21",
    "timeline": [
      {
        "time": "2023.10.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000039",
    "date": "2023.10.19 17:45경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리4H",
    "description": "체리4H에서 세컨샷 한 볼이 나무를 맞고 캐디 좌측 눈 밑에 맞음 (캐디는 다른 동반자들 서브 중이었음)",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-10-19",
    "timeline": [
      {
        "time": "2023.10.19 17:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.19 17:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000038",
    "date": "2023.10.18 15:45경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인9H",
    "description": "체리1H 100m 지점에서 세컨샷 한 볼이 썡크로 인해 파인코스 9H 화이트티 옆 카트에 앉아 있던 고객의 어깨를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 예방 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-10-18",
    "timeline": [
      {
        "time": "2023.10.18 15:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.18 15:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000035",
    "date": "2023.10.16",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "1H",
    "description": "고객이 어프로치한 볼이 쌩크가 발생하여 다른 고객 머리에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 캐디 안전교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-10-16",
    "timeline": [
      {
        "time": "2023.10.16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000034",
    "date": "2023.10.14 18:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지4H",
    "description": "브릿지4H에서 넘어온 볼이 군도변에 피해자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "힐스팀",
    "locationDetail": "브릿지4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 설치 검토 - 군도변 티샷 전 안내멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-10-14",
    "timeline": [
      {
        "time": "2023.10.14 18:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.14 18:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000030",
    "date": "2023.10.13 14:00경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "5H",
    "description": "카트를 자동 주행으로 보낸 후 고객과 걸어가며 클럽 전달 중 작업차량에 카트가 추돌함",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[5H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유도리모컨 조작 시 전방 확인 교육 실시 - 코스팀 작업 카트 코스 내 주차 이동 주의 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-10-13",
    "timeline": [
      {
        "time": "2023.10.13 14:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.13 14:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000025",
    "date": "2023.10.10 18:55경",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "B콘도 주차장",
    "description": "B콘도 주차장 후면 주차 중 차량 뒷 부분 조경석과 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-10-12",
    "timeline": [
      {
        "time": "2023.10.10 18:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.10 18:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000021",
    "date": "2023.10.08 12:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H에서 티샷한 볼이 악성 훅이 발생하여 밸리CC 라운드 종료 후 귀가 중이던 피해자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 설치 검토 - 군도변 티샷 전 안내멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-10-08",
    "timeline": [
      {
        "time": "2023.10.08 12:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.08 12:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000037",
    "date": "2023.10.08 02:30경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도 객실",
    "description": "음주 후 화장실 이용 중 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도 객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 고객 부주의(음주)로 인한 사고라 판단됨. - 객실 화장실 위험 요소 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-10-16",
    "timeline": [
      {
        "time": "2023.10.08 02:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.08 02:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000026",
    "date": "2023.10.05 16:30경",
    "incidentType": "차량사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "주차장",
    "description": "고객 주차장에서 캐디가 카트 후진 이동 중 피해자 차량을 앞범퍼와 추돌함",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 전파 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-10-12",
    "timeline": [
      {
        "time": "2023.10.05 16:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.05 16:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000024",
    "date": "2023.10.04",
    "incidentType": "기타",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "객실",
    "description": "- 투면시 더워 침대가 아닌 창가쪽 벤치 소파를 이용하여 수면 - 퇴실 후 아이고객 상체 피부 발진 발생",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "파크로쉬",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[객실] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 방역업체 방문(특이사항 없음) - 벤치소파 커버 세탁",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-10-10",
    "timeline": [
      {
        "time": "2023.10.04",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.10.04",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000028",
    "date": "2023.09.28 16:15경",
    "incidentType": "부딪힘",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "여자사우나",
    "description": "여자사우나 이용 중 계단 단차에 발가락을 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "파크로쉬",
    "locationDetail": "여자사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자사우나] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 시인성 개선을 위한 스티커 부착 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-10-12",
    "timeline": [
      {
        "time": "2023.09.28 16:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.28 16:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000017",
    "date": "2023.09.28",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "7H",
    "description": "B팀 고객이 7H 그린 앞 15M 지점에서 뒷팀에서 친 볼에 맞음 (캐디의 무전을 받고 티샷함)",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[7H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 캐디 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-09-28",
    "timeline": [
      {
        "time": "2023.09.28",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.28",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000016",
    "date": "2023.09.25",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "15H",
    "description": "티샷을 하고 날아가는 공을 보며 카트로 이동 중 티 마크에 발이 걸려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "15H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-26",
    "timeline": [
      {
        "time": "2023.09.25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000013",
    "date": "2023.09.24 13:30경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "9H",
    "description": "고객이 9H 서드에서 샷한 볼이 9H 그린 뒤 카트도로에서 클럽 정리 중이던 피해자를 맞춤 (블라인드홀)",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 사고예방 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-09-24",
    "timeline": [
      {
        "time": "2023.09.24 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.24 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000008",
    "date": "2023.09.22 09:45경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "17H",
    "description": "- A고객이 샷한 볼이 그린 주변 벙커에 대기중이던 고객 머리를 맞춤 * 캐디 매니저 주의안내 3회(지시에 따라주지 않음)",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "17H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[17H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전교육 실시 - 미 통제 고객 사고 발생 전 응대 방법 강구",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-22",
    "timeline": [
      {
        "time": "2023.09.22 09:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.22 09:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000009",
    "date": "2023.09.22",
    "incidentType": "낙상사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "1H->2H 홀 진입 코너",
    "description": "1H 홀아웃 후 2H 홀 코너 구간 진입하는 중 우천에 의해 시트가 젖어 있었고 고객의 비닐 우비와 미끄러지며 카트에서 떨어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "낙상사고",
    "resort": "성문안팀",
    "locationDetail": "1H->2H 홀 진입 코너",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H->2H 홀 진입 코너] 낙상사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 우천 라운드 시 사전 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-22",
    "timeline": [
      {
        "time": "2023.09.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00276",
    "date": "2023.09.12",
    "incidentType": "벌 쏘임",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "14H",
    "description": "14H에서 티샷 대기 중 벌에 쏘임",
    "cost": 0,
    "notes": "",
    "category": "벌 쏘임",
    "resort": "성문안팀",
    "locationDetail": "14H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[14H] 벌 쏘임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 벌집 유무 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-12",
    "timeline": [
      {
        "time": "2023.09.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00275",
    "date": "2023.09.12",
    "incidentType": "벌 쏘임",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "17H",
    "description": "17H에서 티샷 준비 중 벌에 쏘임",
    "cost": 0,
    "notes": "",
    "category": "벌 쏘임",
    "resort": "성문안팀",
    "locationDetail": "17H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[17H] 벌 쏘임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 벌집 유무 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-12",
    "timeline": [
      {
        "time": "2023.09.12",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.12",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00274",
    "date": "2023.09.10 15:40경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리3H",
    "description": "고객이 벙커에서 샷 한 볼이 캐디 좌측 눈썹을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시 - 플레이 중 플레이어 응시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-09-10",
    "timeline": [
      {
        "time": "2023.09.10 15:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.10 15:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00273",
    "date": "2023.09.09",
    "incidentType": "부딪힘",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "7H",
    "description": "유도 주행 중이던 카트가 경고음 소리와 함께 급정거를 함. 고객 몸이 앞으로 쏠리며 카트 중앙부 안전손잡이에 가슴을 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "성문안팀",
    "locationDetail": "7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[7H] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 카트 점검 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-09",
    "timeline": [
      {
        "time": "2023.09.09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00271",
    "date": "2023.09.08",
    "incidentType": "벌 쏘임",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "8H",
    "description": "고객이 8H 티샷을 하던 중 벌에 쏘임",
    "cost": 0,
    "notes": "",
    "category": "벌 쏘임",
    "resort": "성문안팀",
    "locationDetail": "8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[8H] 벌 쏘임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 벌집 유무 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-09-09",
    "timeline": [
      {
        "time": "2023.09.08",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.08",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00270",
    "date": "2023.09.07 11:00경",
    "incidentType": "대물사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리6H, 7H 사이 카트도로",
    "description": "고객 체리6H 티샷 후 그린으로 자동주행시킨 카트가 체리7H에서 작동 중이 스프링쿨러로 인해 카메라가 물에 젖음",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "밸리팀",
    "locationDetail": "체리6H, 7H 사이 카트도로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리6H, 7H 사이 카트도로] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유관부서 내용 전달",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-09-07",
    "timeline": [
      {
        "time": "2023.09.07 11:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.07 11:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00266",
    "date": "2023.09.03 18:30경",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "A콘도 지하주차장",
    "description": "- 후방 주차 중 차량 후면이 벽면 기둥에 부딪혀 차량 손상 발생 - 스토퍼 설치 위치 상이",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "A콘도 지하주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[A콘도 지하주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 스토퍼 위치 전수 조사 및 이동 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-09-03",
    "timeline": [
      {
        "time": "2023.09.03 18:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.03 18:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00264",
    "date": "2023.09.03 12:00경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플5H",
    "description": "메이플5H 벙커에서 샷 한 볼이 생크가 발생하여 그린에서 서브 중인 캐디 후두부를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시 - 플레이 중 플레이어 응시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-09-03",
    "timeline": [
      {
        "time": "2023.09.03 12:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.03 12:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-H1892-000005",
    "date": "2023.09.02 14:41경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "야외수영장 슬라이드",
    "description": "야외수영장 슬라이드에서 내려오는 자녀를 받아주려고 하다 자녀의 머리와 부상자의 코가 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "야외수영장 슬라이드",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[야외수영장 슬라이드] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 탑승 시 안전요원 탑승요령 및 안전수칙 고지 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-09-20",
    "timeline": [
      {
        "time": "2023.09.02 14:41",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.02 14:41",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00263",
    "date": "2023.09.02 14:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 볼이 훅이 발생하여 뮤지엄산에서 오크밸리로 이동 중이던 피해자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 설치 검토 - 군도변 티샷 전 안내멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-09-02",
    "timeline": [
      {
        "time": "2023.09.02 14:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.02 14:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00267",
    "date": "2023.09.02",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐1H",
    "description": "A팀 라운드 중 힐1H 티샷을 마치고 이동 중 B팀 6H에서 티샷한 볼이 훅이 발생하여 A팀 고객을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전사고 및 타구사고 방지 안내 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-09-04",
    "timeline": [
      {
        "time": "2023.09.02",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.02",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00262",
    "date": "2023.09.01 10:20경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "파인1H",
    "description": "피인1H 그린 좌측 카트도로에서 그린으로 이동 중 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "파인1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인1H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 경사로 이동 시 낙상주의 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-09-01",
    "timeline": [
      {
        "time": "2023.09.01 10:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.09.01 10:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00252",
    "date": "2023.08.27 11:35경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "메이플9H",
    "description": "고객이 메이플 9H에서 서드샷 한 볼이 우측 그린 카트도로에서 백 정리 중이던 피해 고객 골반뼈를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플9H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-08-27",
    "timeline": [
      {
        "time": "2023.08.27 11:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.27 11:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00255",
    "date": "2023.08.27 11:08경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "실내수영장",
    "description": "사고자가 실내 수영 출입 계단으로 입장하는 중 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "실내수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[실내수영장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 출입계단 논슬립 타일 교체 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-08-27",
    "timeline": [
      {
        "time": "2023.08.27 11:08",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.27 11:08",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00257",
    "date": "2023.08.25 15:10경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리5H",
    "description": "고객이 체리5H 서드에서 어프로치 샷 한 볼이 5H 그린으로 서브를 위해 이동 중이던 캐디 후두부를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시 - 플레이 중 플레이어 응시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-08-29",
    "timeline": [
      {
        "time": "2023.08.25 15:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.25 15:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00241",
    "date": "2023.08.21 15:30경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인8H",
    "description": "파인8H 해저드 티잉 구역에서 친 샷이 전방에 있던 고객의 정강이를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인8H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시 - 타구자 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-08-21",
    "timeline": [
      {
        "time": "2023.08.21 15:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.21 15:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00240",
    "date": "2023.08.20 18:03경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H",
    "description": "A팀 카트 운행 중 전방주시 미확보로 인한 정차 중인 B팀 카트와 충돌 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 전 안전 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-08-21",
    "timeline": [
      {
        "time": "2023.08.20 18:03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.20 18:03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00249",
    "date": "2023.08.20 10:20경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플4H",
    "description": "고객이 메이플4H에서 세컨샷한 볼이 써드에서 서브 중이던 캐디 턱을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 방지 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-08-25",
    "timeline": [
      {
        "time": "2023.08.20 10:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.20 10:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00243",
    "date": "2023.08.20 03:00경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "직원",
    "location": "군도변",
    "description": "인턴기간 마지막 휴식일 개인적인 식사 자리 이후 발생한 교통사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2023-08-22",
    "timeline": [
      {
        "time": "2023.08.20 03:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.20 03:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00242",
    "date": "2023.08.20",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "고객 라운드 종료 후 주차장으로 이동하여 차량에 클럽 상차 중 코스에서 날아온 볼이 차량에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-08-22",
    "timeline": [
      {
        "time": "2023.08.20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00235",
    "date": "2023.08.15 14:00경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "더밸리키친 주방",
    "description": "그릴앤시즐 영업준비로 인해 더밸리 키친 주방으로 이동하여 렉카트를 밟고 옆으로 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "더밸리키친 주방",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[더밸리키친 주방] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-08-17",
    "timeline": [
      {
        "time": "2023.08.15 14:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.15 14:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00231",
    "date": "2023.08.15",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지7H",
    "description": "코스 내 예지작업 중 거리목을 옮김 -> 기존 구멍을 메우지 않아 고객 이동 중 발목 끼임",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "브릿지7H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지7H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유관부서 내용 공유 및 교육 실시 - 해당지역 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-08-15",
    "timeline": [
      {
        "time": "2023.08.15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00232",
    "date": "2023.08.14 21:15경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도 객실",
    "description": "객실 붙박이장 선반 받침(고정핀)이 일부 누락되어 불안정한 상태로 사용 중 선반이 낙하하며 아래에 있던 아이 고객 손가락 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[D콘도 객실] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 객실 위험요소 발견 시 즉시 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-08-15",
    "timeline": [
      {
        "time": "2023.08.14 21:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.14 21:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00230",
    "date": "2023.08.13 16:22경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "실내수영장",
    "description": "실내수영장 성인풀 출입 계단에서 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "실내수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[실내수영장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 출입계단 논슬립 타일 교체 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-08-14",
    "timeline": [
      {
        "time": "2023.08.13 16:22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.13 16:22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00223",
    "date": "2023.08.13 08:45경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H에서 티샷한 볼이 뮤지엄산으로 이동중이던 피해자의 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전망 설치 검토 - 군도변 티샷 전 안내멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-08-13",
    "timeline": [
      {
        "time": "2023.08.13 08:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.13 08:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00222",
    "date": "2023.08.11",
    "incidentType": "부딪힘",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "클럽하우스",
    "description": "락커 이용 후 외부로 이동 중 통창문을 인지하지 못하여 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "월송리팀",
    "locationDetail": "클럽하우스",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[클럽하우스] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 통창문 시인성 개선",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-08-12",
    "timeline": [
      {
        "time": "2023.08.11",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.11",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00220",
    "date": "2023.08.10 16:00경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "B콘도 주차장",
    "description": "강풒ㅇ에 의해 탈락된 슁글 파편으로 인한 차량 손상",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 지붕 보수",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-08-11",
    "timeline": [
      {
        "time": "2023.08.10 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.10 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00246",
    "date": "2023.08.09 11:50경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "야외수영장 에어바운스 슬라이드",
    "description": "부상자가 에어바운스 출발 준비 중 미끄러져 슬라이드 벽면에 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "야외수영장 에어바운스 슬라이드",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[야외수영장 에어바운스 슬라이드] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 슬라이드 탑승 시 고객 이용수칙 준수 강화 안내 - 슬라이드 위험요소 수시 체크 및 정비",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-08-24",
    "timeline": [
      {
        "time": "2023.08.09 11:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.09 11:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00216",
    "date": "2023.08.07 14:35경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "야외수영장",
    "description": "고객이 물놀이 중 발을 헛디뎌 좌측 새끼발가락 골절 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "야외수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[야외수영장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 수영장 입장 고객 아쿠아슈즈 착용 권장",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-08-08",
    "timeline": [
      {
        "time": "2023.08.07 14:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.07 14:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00217",
    "date": "2023.08.07",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "12H, 15H 티하우스 교차구간",
    "description": "1. A팀 고객 14H 홀아웃 후 화장실 이용을 위해 교차 구간에 카트 정차 2. 11H -> 12H 이동 중이던 B팀 고객이 티하우스 앞에서 두번 정차 후 앞 팀 카트와 부딪히지 않을 줄 알고 출발 하였으나, 클럽에 A팀 고객 안면부를 맞음(추가로 퍼터 통 부분 손상)",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "12H, 15H 티하우스 교차구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[12H, 15H 티하우스 교차구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 전 카트 이용법 및 안내 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-08-09",
    "timeline": [
      {
        "time": "2023.08.07",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.07",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00208",
    "date": "2023.08.05 14:22경",
    "incidentType": "부딪힘",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "오크3H",
    "description": "캐디가 오크3H 세컨 좌측 150Y 지점에서 고객의 볼을 찾던 중 산책로 등 갓에 부딪혀 좌측 무릎 위 허벅지가 찢어짐",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "밸리팀",
    "locationDetail": "오크3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크3H] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당 시설물 보수 요청(마감처리)",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-08-06",
    "timeline": [
      {
        "time": "2023.08.05 14:22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.05 14:22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00206",
    "date": "2023.08.04 13:58경",
    "incidentType": "기타",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리4H",
    "description": "고객이 체리4H에서 연습 스윙을 2번 하고 물러서던 중 의식을 잃고 쓰러짐(나이 71세)",
    "cost": 0,
    "notes": "",
    "category": "기타",
    "resort": "밸리팀",
    "locationDetail": "체리4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리4H] 기타 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-08-04",
    "timeline": [
      {
        "time": "2023.08.04 13:58",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.04 13:58",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00268",
    "date": "2023.08.04 09:37경",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "B콘도 주차장",
    "description": "세탁차량 주차 확보를 위해 하우스키핑 업무용 차량 이동주차 중 차량 후면이 뒤에 있던 나무에 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-09-06",
    "timeline": [
      {
        "time": "2023.08.04 09:37",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.04 09:37",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00200",
    "date": "2023.08.04 08:15경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크4H",
    "description": "오크4H에서 티샷한 볼이 4H 써드에서 어프로치 준비 중이던 피해자 왼쪽 종아리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 안전사고 예방 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-08-04",
    "timeline": [
      {
        "time": "2023.08.04 08:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.08.04 08:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00194",
    "date": "2023.07.29 10:35경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "사고자가 실내수영장 출입계단으로 슬라이딩하여 입장하는 중 우측 계단 난간 모서리를 보지 못하고 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전요원 근무지 위치 변경",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-07-29",
    "timeline": [
      {
        "time": "2023.07.29 10:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.29 10:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00261",
    "date": "2023.07.28",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "실내수영장",
    "description": "사고자가 실내수영장 입장 중 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "실내수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[실내수영장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 출입계단 논슬립 타일 교체 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-08-31",
    "timeline": [
      {
        "time": "2023.07.28",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.28",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00192",
    "date": "2023.07.23 12:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 볼이 악성 훅이 발생하여 이동 중이던 피해자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 기존 안전 그물망 보완 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-07-24",
    "timeline": [
      {
        "time": "2023.07.23 12:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.23 12:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00189",
    "date": "2023.07.23 08:57경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "15H 티하우스",
    "description": "고객이 15H 티하우스를 이용하려 진입 중 바닥이 미끄러워 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "15H 티하우스",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H 티하우스] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 매트 등 미끄럼주의 시설물 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-07-23",
    "timeline": [
      {
        "time": "2023.07.23 08:57",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.23 08:57",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00191",
    "date": "2023.07.22",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "5H",
    "description": "4H에서 뒷팀 고객이 친 볼이 티잉그라운드로 날아가 대기 중인 고객의 허리에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[5H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 인접 홀 플레이 시 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-07-24",
    "timeline": [
      {
        "time": "2023.07.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00186",
    "date": "2023.07.21",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "B콘도 주차장",
    "description": "주차된 피해차량을 인지하지 못하고 차량 이동 중 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "B콘도 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B콘도 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-07-21",
    "timeline": [
      {
        "time": "2023.07.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00185",
    "date": "2023.07.21",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "파인6H",
    "description": "파인6H 고객의 샷이 쌩크가 발생하여 서브 대기중인 캐디 우측 정강이를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "파인6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 플레이시 플레이어 전방 위치 금지",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-07-21",
    "timeline": [
      {
        "time": "2023.07.21",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.21",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00184",
    "date": "2023.07.20 15:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "군도변",
    "description": "체리3H에서 티샷한 볼이 악성 슬라이스가 발생하여 이동 중이던 피해자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "군도변",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[군도변] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 군도변 플레이 시 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-07-20",
    "timeline": [
      {
        "time": "2023.07.20 15:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.20 15:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00183",
    "date": "2023.07.16 09:03경",
    "incidentType": "넘어짐",
    "businessUnit": "월송리팀",
    "victimType": "직원",
    "location": "5H",
    "description": "5H 석축 점검 중 사면에서 넘어지며 다리 골절",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "월송리팀",
    "locationDetail": "5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[5H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-07-17",
    "timeline": [
      {
        "time": "2023.07.16 09:03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.16 09:03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00181",
    "date": "2023.07.15",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "체리6H",
    "description": "장마기간 우천으로 인해 직원이 코스 안전점검 패트롤 중 나무가 카트도로 쪽으로 쓰러지며 카트를 덮침",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "체리6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리6H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-07-15",
    "timeline": [
      {
        "time": "2023.07.15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00178",
    "date": "2023.07.08 14:30경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리1H",
    "description": "고객이 체리1H에서 티샷 한 볼이 악성 훅이 발생하여 이동 중이던 피해자 오른쪽 대둔근을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당캐디 면담 실시 - 코스 내 안전사고 예방교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-07-08",
    "timeline": [
      {
        "time": "2023.07.08 14:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.08 14:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00174",
    "date": "2023.07.06",
    "incidentType": "넘어짐",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐6H",
    "description": "고객이 힐코스 6H 150야드 지점으로 세컨샷을 하기 위해 이동하던 중 잔디를 밟아 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스팀",
    "locationDetail": "힐6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐6H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당구역 코스팀 보수 완료 - 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-07-07",
    "timeline": [
      {
        "time": "2023.07.06",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.06",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00173",
    "date": "2023.07.05",
    "incidentType": "대물사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "광장",
    "description": "라운드 종료 후 직원이 고객 카트를 광장으로 수동운전 하는 과정에서 클럽백이 쏟아지며 클럽 파선",
    "cost": 0,
    "notes": "",
    "category": "대물사고",
    "resort": "월송리팀",
    "locationDetail": "광장",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[광장] 대물사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 클럽백 고정상태 확인 철저",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-07-05",
    "timeline": [
      {
        "time": "2023.07.05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00180",
    "date": "2023.07.04 작업 종료 후",
    "incidentType": "차량사고",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "16H 우측 관리동",
    "description": "2023.07.04 작업 종료 후 전면 주차를 하던 중 모래에 미끄러져 코스관리동 벽에 차량을 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "성문안팀",
    "locationDetail": "16H 우측 관리동",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[16H 우측 관리동] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 차량운행 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-07-13",
    "timeline": [
      {
        "time": "2023.07.04 작업 종료",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.04 작업 종료",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00172",
    "date": "2023.07.01 20:32경",
    "incidentType": "부딪힘",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "인도어 스파",
    "description": "남성 고객이 1층 인도어스파 슬라이딩 도어에 이마를 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "파크로쉬",
    "locationDetail": "인도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[인도어 스파] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전문구 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-07-02",
    "timeline": [
      {
        "time": "2023.07.01 20:32",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.07.01 20:32",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00163",
    "date": "2023.06.24 18:13경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "여자사우나",
    "description": "사우나 파우더룸에서 넘어져 좌측 콧볼 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "여자사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[여자사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사우나 출구쪽 발매트 확장 - 사우나 패트롤 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-06-25",
    "timeline": [
      {
        "time": "2023.06.24 18:13",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.24 18:13",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00157",
    "date": "2023.06.20 13:05경",
    "incidentType": "차량사고",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "밸리 장비관리동 삼거리",
    "description": "코스 작업자가 오후 작업을 위해 현장으로 이동 중 관리동 삼거리에서 직진으로 내려오는 차량을 인지 하지 못하고 충돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리팀",
    "locationDetail": "밸리 장비관리동 삼거리",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[밸리 장비관리동 삼거리] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-06-21",
    "timeline": [
      {
        "time": "2023.06.20 13:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.20 13:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00158",
    "date": "2023.06.16",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "11H~12H 교행구간",
    "description": "1. I코스팀이 14H 홀아웃 후 화장실 이용을 위해 15H 티하우스 앞 12H 교차 구간에 정차. 2. 11H -> 12H 이동 중이던 O코스팀 카트가 티 하우스 앞 지점에서 1차 정지 3. 15H 티하우스에서 정차 중인 고객이 카트를 보내도 된다는 수신호를 보내 진행중 충돌사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "11H~12H 교행구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H~12H 교행구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 현장 패트롤 강화 - 11H 12H 교행구간 안전사고 관련 사이니지 설치 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-06-22",
    "timeline": [
      {
        "time": "2023.06.16",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.16",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00151",
    "date": "2023.06.15 13:09경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "3H",
    "description": "앞팀 3H홀아웃 후 그린에서 정차 중 뒤팀에서 티샷한 볼이 잔디를 맞고 튀며 뒷자리에 앉아 있던 고객을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 시작 전 안전사고 예방 멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-06-15",
    "timeline": [
      {
        "time": "2023.06.15 13:09",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.15 13:09",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00156",
    "date": "2023.06.13 13:50경",
    "incidentType": "타구사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "힐3H",
    "description": "힐코스 3H sign play 중 뒷 팀에서 친 볼이 캐디를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "힐스팀",
    "locationDetail": "힐3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-06-20",
    "timeline": [
      {
        "time": "2023.06.13 13:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.13 13:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00145",
    "date": "2023.06.11",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "힐스CC 현관",
    "description": "우천으로 인해 라운딩 캔슬 후 담당 캐디와 직원이 캐디백을 상차하여 올리는 중 캐디백이 컨베이어벨트 사이에 끼어 스크래치 발생",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "힐스팀",
    "locationDetail": "힐스CC 현관",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[힐스CC 현관] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 현관 근로자 및 캐디 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-06-12",
    "timeline": [
      {
        "time": "2023.06.11",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.11",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00144",
    "date": "2023.06.10 16:00경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "체리3H",
    "description": "파인6H에서 티샷한 볼이 악성 훅이 발생하여 체리 3H 페어웨이에서 서브 중이던 피해자(캐디)를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "체리3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-06-12",
    "timeline": [
      {
        "time": "2023.06.10 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.10 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00146",
    "date": "2023.06.10 08:45경",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "6H",
    "description": "7H 티박스에서 티샷한 공이 뒤 팀인 고객 목 부위를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 인전 간섭 홀 안전사고 예방멘트 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-06-12",
    "timeline": [
      {
        "time": "2023.06.10 08:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.10 08:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00142",
    "date": "2023.06.10",
    "incidentType": "부딪힘",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "파우더룸",
    "description": "남자락카 파우더룸 이용 중 소지품 보관함이 떨어지며 발가락을 맞음",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스팀",
    "locationDetail": "파우더룸",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파우더룸] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 파우더룸 물품보관함 변경 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-06-11",
    "timeline": [
      {
        "time": "2023.06.10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00140",
    "date": "2023.06.05 15:40경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "수영장",
    "description": "수영장 발권 후 입장 과정에서 퇴장 고객이 여는 문 손잡이에 피해 아이 고객의 이마를 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "수영장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[수영장] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-06-06",
    "timeline": [
      {
        "time": "2023.06.05 15:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.05 15:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00149",
    "date": "2023.06.04 16:36경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "남자사우나",
    "description": "사우나에서 샤워 후 퇴장 과정하는 과정 중 출입문(탕방향)에서 미끄러져 뒤로 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "남자사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[남자사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사우나 출입구 바닥 논슬립 테이프 추가 부착 - 사우나 근무자 업장 패트롤 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-06-15",
    "timeline": [
      {
        "time": "2023.06.04 16:36",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.04 16:36",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00136",
    "date": "2023.06.04 16:36경",
    "incidentType": "넘어짐",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "남자 사우나 출입구",
    "description": "사우나 샤워 후 퇴장하는 과정 중 출입문에서 뒤로 넘어져 후두부를 바닥에 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "힐스빌리지",
    "locationDetail": "남자 사우나 출입구",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[남자 사우나 출입구] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사우나 출입구 바닥 논슬립 테이프 추가 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-06-04",
    "timeline": [
      {
        "time": "2023.06.04 16:36",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.06.04 16:36",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00131",
    "date": "2023.05.31 08:36경",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "4H->5H 티 박스 진입로",
    "description": "유도선 이동 구간에 정차되어 있는 코스팀 차량을 고객의 전방 주시 태만으로 인한 추돌 사고",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "4H->5H 티 박스 진입로",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H->5H 티 박스 진입로] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 시작 전 사고 예방 안내 강화 - 급커브 구간 태블릿 음성 안내 보완 - 코스팀 작업 차량 통제 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-06-01",
    "timeline": [
      {
        "time": "2023.05.31 08:36",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.31 08:36",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00132",
    "date": "2023.05.31",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "10H ↔ 18H 교행구간",
    "description": "10H 18H 교행 지점 카트 추돌 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "10H ↔ 18H 교행구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H ↔ 18H 교행구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 전 리모컨 조작 안내 주의 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-06-01",
    "timeline": [
      {
        "time": "2023.05.31",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.31",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00125",
    "date": "2023.05.25 11:45경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크3H",
    "description": "오크3H 그린 주변에서 같은 팀 간 머리를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크3H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크3H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시 - 고객 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-05-25",
    "timeline": [
      {
        "time": "2023.05.25 11:45",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.25 11:45",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00121",
    "date": "2023.05.23 09:15경",
    "incidentType": "카트사고",
    "businessUnit": "힐스팀",
    "victimType": "직원",
    "location": "브릿지9H",
    "description": "홀아웃을 위해 정차되어 있는 카트를 자동유도 진행 중 코스팀 직원이 운행하던 작업 차량이 카트를 추돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "힐스팀",
    "locationDetail": "브릿지9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지9H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-05-22",
    "timeline": [
      {
        "time": "2023.05.23 09:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.23 09:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00122",
    "date": "2023.05.22",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "4H",
    "description": "4H에서 뒷팀 고객이 티샷한 볼이 카트드로를 맞고 앞팀 고객 등을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[4H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 라운딩 전 안전수칙 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-05-23",
    "timeline": [
      {
        "time": "2023.05.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00116",
    "date": "2023.05.20 13:00경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "스타트하우스",
    "description": "스타트하우스 내부에서 테라스로 이동 중 입구(데크바닥)에서 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "스타트하우스",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스타트하우스] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 미끄럼주의 사이니지 설치 - 논슬립 테이프 부착 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-05-20",
    "timeline": [
      {
        "time": "2023.05.20 13:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.20 13:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00117",
    "date": "2023.05.20 11:48경",
    "incidentType": "부딪힘",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌리지센터 승강장",
    "description": "빌리지센터 1층 자동문에 아이 고객이 충돌",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "밸리빌리지",
    "locationDetail": "빌리지센터 승강장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌리지센터 승강장] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 유리문 시인성 향상을 위한 필름 부착",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-05-20",
    "timeline": [
      {
        "time": "2023.05.20 11:48",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.20 11:48",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00115",
    "date": "2023.05.19 13:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H에서 티샷한 볼이 악성 훅이 발생하여, 클럽하우스로 이동 중이던 피해자 차량을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 차량 도로와 인접한 코스이므로 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-05-19",
    "timeline": [
      {
        "time": "2023.05.19 13:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.19 13:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00112",
    "date": "2023.05.15 14:00경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "고객이 주차장 E구역에서 골프백을 회수하는 과정 중 낙상사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 골프백 업무 매뉴얼 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-05-15",
    "timeline": [
      {
        "time": "2023.05.15 14:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.15 14:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00111",
    "date": "2023.05.14 16:00경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H에서 티샷한 볼이 악성 훅이 발생하여 이동 중이던 피해자 차량 렌진룸 후드를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-05-14",
    "timeline": [
      {
        "time": "2023.05.14 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.14 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00109",
    "date": "2023.05.13 16:50rud",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리5H",
    "description": "체리5H에서 티샷한 볼이 악성 훅이 발생하여 이동 중이던 차량 우륵 리어 휀다 파손",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 기존 안전망 점검/보완 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-05-13",
    "timeline": [
      {
        "time": "2023.05.13 16:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.13 16:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00110",
    "date": "2023.05.12 23:00경",
    "incidentType": "대물사고(골프백)",
    "businessUnit": "힐스팀",
    "victimType": "고객",
    "location": "브릿지9H",
    "description": "브릿지9H 티박스에서 대기 중 스프링쿨러가 작동하여 카트에 있던 골프백 및 파우치가 젖음",
    "cost": 0,
    "notes": "",
    "category": "대물사고(골프백)",
    "resort": "힐스팀",
    "locationDetail": "브릿지9H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[브릿지9H] 대물사고(골프백) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 스프링쿨러 시간 재설정",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-05-13",
    "timeline": [
      {
        "time": "2023.05.12 23:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.12 23:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00108",
    "date": "2023.05.10 09:20경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "5H",
    "description": "5H 벙커에서 세컨 샷을 치고 나오는 도중 사면에 물기와 예지물로 인해 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[5H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 코스 내 예지물 처리 요청 - 코스 패트롤 시 주변 정리 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-05-11",
    "timeline": [
      {
        "time": "2023.05.10 09:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.10 09:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00106",
    "date": "2023.05.08",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "C/B 진입로",
    "description": "업무용 포터 차량 정주행 중 C/B 진입로 룸메이드 차량 중앙선 침범으로 차량 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "C/B 진입로",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[C/B 진입로] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 차량 유도선 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-05-08",
    "timeline": [
      {
        "time": "2023.05.08",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.08",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00103",
    "date": "2023.05.03",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크2H",
    "description": "세컨 이동 중 맨홀 가장자리를 밟고 발목이 꺾임",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "오크2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크2H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 페어웨이 내 낙엽 제거 및 맨홀 점검 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-05-03",
    "timeline": [
      {
        "time": "2023.05.03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.05.03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00104",
    "date": "2023.04.30 20:00경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "여자사우나",
    "description": "여자 고객 한분이 여자 사우나 탈수기 옆 탕 계단에서 미끄러짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "여자사우나",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[여자사우나] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 바닥 물기 제거 작업 - 입장 전 안전멘트 시행",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-05-04",
    "timeline": [
      {
        "time": "2023.04.30 20:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.30 20:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00098",
    "date": "2023.04.30 17:10경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "S콘도",
    "description": "신비아파트 캐릭터룸에서 추숙 중인 아이 고객이 미끄럼틀에서 내려오다 떨어져 후두부가 찢어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "S콘도",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[S콘도] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 동일 타입 객실 점검 및 모서리 가드 등 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-05-01",
    "timeline": [
      {
        "time": "2023.04.30 17:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.30 17:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00099",
    "date": "2023.04.30 17:00경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "캐디",
    "location": "15H",
    "description": "그린 서브를 진행하고 있던 캐디가 고객의 어프로치 샷에 복숭아 뼈를 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "15H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[15H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 고객 후방 위치 자체 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-05-01",
    "timeline": [
      {
        "time": "2023.04.30 17:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.30 17:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00105",
    "date": "2023.04.30 16:00경",
    "incidentType": "화상",
    "businessUnit": "파크로쉬",
    "victimType": "직원",
    "location": "로쉬카페 주방",
    "description": "로쉬카페 튀김기 앞 튀김 작업 중 기름기를 제거 중 튀김망을 튀김기에 떨어뜨리며 오른쪽 팔목에 화상",
    "cost": 0,
    "notes": "",
    "category": "화상",
    "resort": "파크로쉬",
    "locationDetail": "로쉬카페 주방",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[로쉬카페 주방] 화상 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 튀김기 안전 사용 수칙 등 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-05-06",
    "timeline": [
      {
        "time": "2023.04.30 16:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.30 16:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00101",
    "date": "2023.04.30 12:37경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "체리5H",
    "description": "체리5H 레이디티에서 티샷 한 볼이 악성 훅이 발생하여 이동 중이던 피해자 차량 루프 파손",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "체리5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 기존 안전망 점검/보완 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-05-02",
    "timeline": [
      {
        "time": "2023.04.30 12:37",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.30 12:37",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00097",
    "date": "2023.04.28",
    "incidentType": "카트사고",
    "businessUnit": "힐스팀",
    "victimType": "캐디",
    "location": "광장",
    "description": "근무 준비를 위해 카트고에서 광장으로 이동하여 정차하기 위해 브레이크를 밟았으나 브레이크 오작동으로 인해 전방에 주차중인 카트 후면부와 추돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "힐스팀",
    "locationDetail": "광장",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[광장] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "힐스팀",
    "dept": "힐스팀",
    "reportDate": "2023-04-28",
    "timeline": [
      {
        "time": "2023.04.28",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.28",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00095",
    "date": "2023.04.26 13:30경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "13:30경 발렛 팀장으로부터 주차장 B구역 레스토랑 고객 차량 보넷 위 석회수 낙수 자국 발견",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 누구수역 보수 작업 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-04-26",
    "timeline": [
      {
        "time": "2023.04.26 13:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.26 13:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00091",
    "date": "2023.04.24 15:40경",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "1H",
    "description": "10H 챔피언 티에서 티샷한 볼이 인접홀 1H로 넘어가 대기 중이던 고객을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-04-25",
    "timeline": [
      {
        "time": "2023.04.24 15:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.24 15:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00096",
    "date": "2023.04.24 13:00경",
    "incidentType": "베임",
    "businessUnit": "월송리팀",
    "victimType": "직원",
    "location": "운치",
    "description": "애호박을 채칼로 썰던 중 자상 발생",
    "cost": 0,
    "notes": "",
    "category": "베임",
    "resort": "월송리팀",
    "locationDetail": "운치",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[운치] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시 - 칼 등 취급 시 장갑 착용 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-04-27",
    "timeline": [
      {
        "time": "2023.04.24 13:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.24 13:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00089",
    "date": "2023.04.24",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "11~12H 교행구간",
    "description": "14H 홀아웃 후 화장실 이용을 위해 15H 티하우스 자동 정지점 정차 중 11~12H 이동 중이었던 고객의 전방주시 부주의로 인해 대기중인 카트와 충돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "11~12H 교행구간",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11~12H 교행구간] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 티잉 전 카트 안전수칙 안내 강화 - 경기 중 안전관련 메시지 송부",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-04-24",
    "timeline": [
      {
        "time": "2023.04.24",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.24",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00086",
    "date": "2023.04.23 20:00",
    "incidentType": "베임",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "피오레토",
    "description": "디너 행사 음식을 서비스하기 위해 주방에서 밖으로 나오던 중 넘어짐. 음식 접시가 깨지며 손가락에 자상을 입음.",
    "cost": 0,
    "notes": "",
    "category": "베임",
    "resort": "성문안팀",
    "locationDetail": "피오레토",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[피오레토] 베임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 - 카페트 물기 제거 후 이동 할 수 있도록 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-04-23",
    "timeline": [
      {
        "time": "2023.04.23 20:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.23 20:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00088",
    "date": "2023.04.22",
    "incidentType": "타구사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "6H",
    "description": "7H에서 앞 팀이 티샷한 볼이 우측 바위를 맞고 뒤로 튀어 뒷 팀 6H 그린에서 대기 중이던 고객 팔꿈치에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "월송리팀",
    "locationDetail": "6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[6H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-04-24",
    "timeline": [
      {
        "time": "2023.04.22",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.22",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00094",
    "date": "2023.04.21 10:00경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "캐디",
    "location": "메이플8H",
    "description": "코스팀 직원이 메이플8H 우측 카트도로에서 메이플7H 스프링쿨러 누수 보완 작업을 위해 차량 운행 중 메이플6H에서 배토 후 경기과 복귀 중이던 캐디 매니저 카트와 추돌사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "메이플8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플8H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-04-26",
    "timeline": [
      {
        "time": "2023.04.21 10:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.21 10:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00082",
    "date": "2023.04.20",
    "incidentType": "카트사고",
    "businessUnit": "월송리팀",
    "victimType": "고객",
    "location": "8H",
    "description": "8H 티잉그라운드에서 정차중인 앞 팀 카트를 뒤 팀 카트가 추돌",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "월송리팀",
    "locationDetail": "8H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[8H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 자도 정지지점 추가 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-04-21",
    "timeline": [
      {
        "time": "2023.04.20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00079",
    "date": "2023.04.15 20:03분",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "빌리지센터 승강장",
    "description": "빌리지센터 3층 E/V 옆 비상계단 이용 중 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "빌리지센터 승강장",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[빌리지센터 승강장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 불필요한 계산 사용 방지를 위해 가이드 폴 설치",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-04-16",
    "timeline": [
      {
        "time": "2023.04.15 20:03",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.15 20:03",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00076",
    "date": "2023.04.14 13:15경",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "메이플2H",
    "description": "메이플2H에서 세컨샷한 볼이 우측 그린 벙커에서 작업 중이던 코스팀 직원 안전모를 가격",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "메이플2H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[메이플2H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-04-14",
    "timeline": [
      {
        "time": "2023.04.14 13:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.14 13:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00078",
    "date": "2023.04.14",
    "incidentType": "타구사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "10H",
    "description": "08:20 티오프 후 11H에서 티샷한 볼이 악성 훅으로 인해 10H에서 플레이 하던 고객을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "성문안팀",
    "locationDetail": "10H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[10H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전교육 실시 - 11H 티샷 전 무전 실시 교육",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-04-15",
    "timeline": [
      {
        "time": "2023.04.14",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.14",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00074",
    "date": "2023.04.09 14:20경",
    "incidentType": "넘어짐",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "스타트하우스",
    "description": "스타트하우스 내부 화장실 이용을 위해 계단을 오라가는 중 바람으로 인해 파로솔 고객이 뒤로 쓰러지며 고객과 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "성문안팀",
    "locationDetail": "스타트하우스",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스타트하우스] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 악천후 시 파라솔 제한적 운영 - 파라솔 고정 방안 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-04-10",
    "timeline": [
      {
        "time": "2023.04.09 14:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.09 14:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00073",
    "date": "2023.04.07 07:30경",
    "incidentType": "차량사고",
    "businessUnit": "지관사업소",
    "victimType": "고객",
    "location": "농로",
    "description": "전일 납품 후 화출차 출근 중 농로에서 나오는 25톤 트럭이 중앙선을 침범하여 후진하였고, 짙은 안개로 전방 시야가 확보되지 않은 상태에서 25톤 트럭 적재함과 추돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "지관사업소",
    "locationDetail": "농로",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[농로] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "시설팀",
    "dept": "시설팀",
    "reportDate": "2023-04-10",
    "timeline": [
      {
        "time": "2023.04.07 07:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.07 07:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00072",
    "date": "2023.04.04 12:30경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "카트고 내부",
    "description": "당번 근무자가 카트 정리를 위해, 카트를 카트고 내 이동주차 중 무주의로 인해 프론트 바디 파손",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "카트고 내부",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[카트고 내부] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-04-05",
    "timeline": [
      {
        "time": "2023.04.04 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.04 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00069",
    "date": "2023.04.03 15:00경",
    "incidentType": "카트사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인6H",
    "description": "세컨샷 이후 카트를 탑승하여 그린 방향으로 이동 중 볼 마커를 주우려다 중심을 잃고 카트 밖으로 떨어짐. 떨어지는 과정에서 왼쪽 다리가 카트 뒷바퀴에 걸려 2~3미터 끌려간 것으로 판단",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "밸리팀",
    "locationDetail": "파인6H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인6H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 교육 실시 - 카트 운행 중 무리한 행동 금지 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-04-04",
    "timeline": [
      {
        "time": "2023.04.03 15:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.03 15:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00070",
    "date": "2023.04.01 12:05경",
    "incidentType": "타구사고(카트)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "체리4H 진입도로변",
    "description": "체리4H에서 세컨샷 한 볼이 악성 생크가 발생하여 카트도로에서 정차 중이던 카트를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(카트)",
    "resort": "밸리팀",
    "locationDetail": "체리4H 진입도로변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리4H 진입도로변] 타구사고(카트) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-04-05",
    "timeline": [
      {
        "time": "2023.04.01 12:05",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.04.01 12:05",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00067",
    "date": "2023.03.31 13:35경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인5H",
    "description": "파인5H에서 티샷한 볼이 악성 훅이 발생하여, 이동 중이던 피해자 차량 좌측 사이드미러 파손",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인5H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인5H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-04-03",
    "timeline": [
      {
        "time": "2023.03.31 13:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.31 13:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00058",
    "date": "2023.03.24 14:10경",
    "incidentType": "카트사고",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "11H",
    "description": "캐디가 유도주행을 작동하여 그린 앞 쪽에서 그린 뒤로 카트 이동을 진행하였고, 대정골프 직원의 카트 주차 범위가 카트도로에 침범하여 샌드프로 작업차량과 카트가 충돌하는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "카트사고",
    "resort": "성문안팀",
    "locationDetail": "11H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[11H] 카트사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 공유 및 교육 실시 - 협력사 작업 차량 주차 금지 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-03-24",
    "timeline": [
      {
        "time": "2023.03.24 14:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.24 14:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00056",
    "date": "2023.03.23 07:46경",
    "incidentType": "인사사고",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "인도어 스파",
    "description": "여성고객 사우나 입장 후 의식을 잃고 쓰러짐",
    "cost": 0,
    "notes": "AED 추가 비치",
    "category": "인사사고",
    "resort": "파크로쉬",
    "locationDetail": "인도어 스파",
    "specialNotes": "AED 추가 비치",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[인도어 스파] 인사사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-03-23",
    "timeline": [
      {
        "time": "2023.03.23 07:46",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.23 07:46",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00054",
    "date": "2023.03.18 10:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 볼이 악성 훅이 발생하여 이동 중이던 피해자 차량 앞 창문을 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-03-19",
    "timeline": [
      {
        "time": "2023.03.18 10:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.18 10:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00053",
    "date": "2023.03.13 13:20경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "파인4H",
    "description": "파인4H에서 티샷한 볼이 악성 훅이 발생하여 이동 중이던 피해자 차량 우측 앞 범퍼를 맞춤",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "밸리팀",
    "locationDetail": "파인4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[파인4H] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-03-19",
    "timeline": [
      {
        "time": "2023.03.13 13:20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.13 13:20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00041",
    "date": "2023.03.06",
    "incidentType": "타구사고",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크1H",
    "description": "오크2H 티에서 티샷한 볼이 악성 슬라이스로 인해 1H 세컨 플레이 중이던 회원의 오른손 검지손가락과 우측 복부에 맞음",
    "cost": 0,
    "notes": "",
    "category": "타구사고",
    "resort": "밸리팀",
    "locationDetail": "오크1H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크1H] 타구사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토 - 인접 홀 타구사고 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-03-06",
    "timeline": [
      {
        "time": "2023.03.06",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.06",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00037",
    "date": "2023.03.05 16:17경",
    "incidentType": "끼임",
    "businessUnit": "성문안팀",
    "victimType": "직원",
    "location": "피오레토",
    "description": "파스타 기계를 분해하던 중, 내부의 잔여 반죽 때문에 쉽게 분해되지 않던 기계를 빠르게 분해 하고자 해당 부위에 손을 넣고 분해를 시도하던 중 오른손 중지가 끼이는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "끼임",
    "resort": "성문안팀",
    "locationDetail": "피오레토",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[피오레토] 끼임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 사고사례 전파 및 안전교육 실시 - 파스타 기계 정리 시 도구 사용",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "식음팀",
    "dept": "식음팀",
    "reportDate": "2023-03-05",
    "timeline": [
      {
        "time": "2023.03.05 16:17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.03.05 16:17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00029",
    "date": "2023.02.26",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "아이파크콘도",
    "victimType": "고객",
    "location": "주차장",
    "description": "아이파크콘도 일대 강풍으로 인해 본관동 지붕층 탈락된 마감재가 고객 차량 조수석 뒷문 충격",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "아이파크콘도",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 콘도 지붕층 파손여부 점검 - 강품 및 강풍 예상 시 지하주차장 이용 안내",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-02-17",
    "timeline": [
      {
        "time": "2023.02.26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00035",
    "date": "2023.02.25",
    "incidentType": "넘어짐",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "객실",
    "description": "침대에서 일어나던 중 넘어져 머리에 열상 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리빌리지",
    "locationDetail": "객실",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[객실] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-02-25",
    "timeline": [
      {
        "time": "2023.02.25",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.25",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00049",
    "date": "2023.02.24 12:30경",
    "incidentType": "넘어짐",
    "businessUnit": "밸리팀",
    "victimType": "고객",
    "location": "오크4H",
    "description": "세컨샷 후 그린 방향으로 이동 중 OB티 좌측 인근 경사면에서 미끄러져 우측 발목 접지름",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "밸리팀",
    "locationDetail": "오크4H",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[오크4H] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 위험 구간 주의 안내 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-03-12",
    "timeline": [
      {
        "time": "2023.02.24 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.24 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00031",
    "date": "2023.02.19 17:55경",
    "incidentType": "부딪힘",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "타워C",
    "description": "타워C 1층 승차대 방향 부근 방풍실 출입문 하단 석재 들뜸으로 인해 방풍실 출입문이 정상 개방되지 않고 중간에 걸리면서 실내에서 외부로 이동 중이던 사고자가 문에 우측 뺨을 충돌하며 열상 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "힐스빌리지",
    "locationDetail": "타워C",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경상 (통원치료)",
    "victimName": "익명",
    "title": "[타워C] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 해당 출입문 임시 폐쇄 조치 및 유관부서 보수 요청",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-02-20",
    "timeline": [
      {
        "time": "2023.02.19 17:55",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.19 17:55",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00032",
    "date": "2023.02.15 19:24경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프 이용 중 G-3지점에서 혼자 넘어지면서 우측 손목을 집으며 골절 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "중상 (병원후송)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "슬로프 설질 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-22",
    "timeline": [
      {
        "time": "2023.02.15 19:24",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.15 19:24",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00030",
    "date": "2023.02.11 20:13경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프 하단부에서 스킹하던 중 스키 플레이트가 엉켜 넘어지면서 좌측 무릎 부상",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "슬로프 설질 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-20",
    "timeline": [
      {
        "time": "2023.02.11 20:13",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.11 20:13",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00028",
    "date": "2023.02.11 20:10경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "I슬로프",
    "description": "I슬로프에서 혼자 보드를 타던 중 넘어지면서 오른쪽 손으로 바닥을 짚어 손목 부상 넘어진 부분에 눈이 얼어 있어서 보드가 미끄러졌다(고객)",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "I슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[I슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "슬로프 설질 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-14",
    "timeline": [
      {
        "time": "2023.02.11 20:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.11 20:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00025",
    "date": "2023.02.10 19:39경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "아웃도어 스파 앞 바닥 낙상사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 고객 입장 시 논슬립 슬리퍼 제공 - 입장시 미끄러움 가능성 알림",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-13",
    "timeline": [
      {
        "time": "2023.02.10 19:39",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.10 19:39",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00026",
    "date": "2023.02.09 15:26경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "버드 리프트 승차장",
    "description": "버드 리프트 승차장에서 보드를 한쪽 발에 바인딩 한 채로 리프트 승차하던 중 바닥에 보드가 걸리며 살짝 튕겨져 올라옴. 동시에 무릎에 충격이 가해지며 무릎 통증 및 붓기 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "버드 리프트 승차장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[버드 리프트 승차장] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "리프트 승·하차 시 장비 움직임 주의 안내 강조",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-13",
    "timeline": [
      {
        "time": "2023.02.09 15:26",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.09 15:26",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00021",
    "date": "2023.02.05 12:30경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프 중단부에서 스킹하던 중 넘어지면서 팔꿈치 부상을 입음",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-05",
    "timeline": [
      {
        "time": "2023.02.05 12:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.05 12:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00020",
    "date": "2023.02.04 10:58경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프에서 스킹하던 중 혼자 넘어지면서 부상을 입음",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-04",
    "timeline": [
      {
        "time": "2023.02.04 10:58",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.04 10:58",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00019",
    "date": "2023.02.02 17:35경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "F슬로프",
    "description": "F슬로프 중단부에서 앞서가던 보더와 뒤따르던 스키어의 충돌사고 발생",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "F슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[F슬로프] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-03",
    "timeline": [
      {
        "time": "2023.02.02 17:35",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.02.02 17:35",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00023",
    "date": "2023.01.30 09:50경",
    "incidentType": "차량사고",
    "businessUnit": "단지내",
    "victimType": "직원",
    "location": "체리4H 진입도로변",
    "description": "업무용 차량을 운전하여 체리 4H을 지나 진입도로로 진입하던 중 월송리에서 골프장 방향으로 진행하던 고객차량과 접촉사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "단지내",
    "locationDetail": "체리4H 진입도로변",
    "specialNotes": "",
    "zone": "골프 코스",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[체리4H 진입도로변] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "운전자 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "월송리팀",
    "dept": "월송리팀",
    "reportDate": "2023-02-06",
    "timeline": [
      {
        "time": "2023.01.30 09:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.30 09:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00027",
    "date": "2023.01.28 21:48경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "고객이 혼자 스키를 타던 중 속도를 제어하지 못하여 펜스에 부딪힘 당시 설질이 좋지 않아 브레이크 잡기가 힘들었다(고객)",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "슬로프 설질 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-14",
    "timeline": [
      {
        "time": "2023.01.28 21:48",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.28 21:48",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00024",
    "date": "2023.01.23 21:10경",
    "incidentType": "넘어짐",
    "businessUnit": "파크로쉬",
    "victimType": "고객",
    "location": "아웃도어 스파",
    "description": "일행과 아웃도어 스파 공용잨지를 이용하고 인도어스파로 들어오면서 출입문 앞 바닥 타일에 미끄러져 뒤로 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "파크로쉬",
    "locationDetail": "아웃도어 스파",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[아웃도어 스파] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 고객 입장 시 논슬립 슬리퍼 제공 - 입장시 미끄러움 가능성 알림",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-08",
    "timeline": [
      {
        "time": "2023.01.23 21:10",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.23 21:10",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00033",
    "date": "2023.01.23 18:18경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "23.01.23 월요일 17:55경 보드를 타던 중 얼음에 걸려 앞으로 넘어지면서 오른쪽 갈비뼈 통증 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "슬로프 설질 확인",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-02-24",
    "timeline": [
      {
        "time": "2023.01.23 18:18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.23 18:18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00013",
    "date": "2023.01.19 08:00경",
    "incidentType": "끼임",
    "businessUnit": "밸리팀",
    "victimType": "직원",
    "location": "카트고 앞 광장",
    "description": "신형카트 입고 실물 검 수 중 카트 후면 퍼터통 거치바에 오른손 약지 손가락 마디가 끼임",
    "cost": 0,
    "notes": "",
    "category": "끼임",
    "resort": "밸리팀",
    "locationDetail": "카트고 앞 광장",
    "specialNotes": "",
    "zone": "공용 구역",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[카트고 앞 광장] 끼임 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "밸리팀",
    "dept": "밸리팀",
    "reportDate": "2023-01-19",
    "timeline": [
      {
        "time": "2023.01.19 08:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.19 08:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00018",
    "date": "2023.01.18",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "F슬로프",
    "description": "F슬로프에서 스킹하던 중 턴을 하다 무릎에 힘이 풀려 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "F슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[F슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-31",
    "timeline": [
      {
        "time": "2023.01.18",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.18",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00014",
    "date": "2023.01.17",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프에서 근무하던 중 14:00경 스키 실력이 미숙한 손님을 에스코트하여 내려오던 중 손님의 스키플레이트와 발이 엉켜 넘어지면서 무릎 부상을 입은 사고",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "사고사례 공유 및 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-22",
    "timeline": [
      {
        "time": "2023.01.17",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.17",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00010",
    "date": "2023.01.16 16:28경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도 지하주차장",
    "description": "D콘도 지하2F 주차장 A1 구역 우측 기둥에서 2번째 천장 누수로 인한 차량 도장 오염",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 지하주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도 지하주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "누수지역 통제 및 방수공사 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-01-16",
    "timeline": [
      {
        "time": "2023.01.16 16:28",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.16 16:28",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00012",
    "date": "2023.01.16 13:00경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "스키 광장",
    "description": "스키 광장에서 혼자 넘어지는 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "스키 광장",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[스키 광장] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "이동동선 내 위험요소 제거",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-19",
    "timeline": [
      {
        "time": "2023.01.16 13:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.16 13:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00005",
    "date": "2023.01.15 12:40경",
    "incidentType": "대물사고(차량피해)",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "D콘도 지하주차장",
    "description": "지하주차장에 주차했던 차량이 천정 배관 누수로 인해 훼손",
    "cost": 0,
    "notes": "",
    "category": "대물사고(차량피해)",
    "resort": "힐스빌리지",
    "locationDetail": "D콘도 지하주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[D콘도 지하주차장] 대물사고(차량피해) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "누수지역 통제 및 방수공사 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-01-15",
    "timeline": [
      {
        "time": "2023.01.15 12:40",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.15 12:40",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00006",
    "date": "2023.01.15 10:00경",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "직원",
    "location": "N콘도 입구",
    "description": "협력사 직원이 제설작업 중 제설 차량으로 작업 중 내리막길에서 고객 차량을 발견하고 제동을 하였으나 길이 미끄러워 정지하지 못하고 후미를 추돌",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "N콘도 입구",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[N콘도 입구] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "안전운전 교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-01-16",
    "timeline": [
      {
        "time": "2023.01.15 10:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.15 10:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00009",
    "date": "2023.01.13 15:15경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프에서 내려오던 중 속도를 제어하지 못하여 안전망에 부딪힘",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "기상 악화 시 방송 및 근무자를 통한 안내 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-16",
    "timeline": [
      {
        "time": "2023.01.13 15:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.13 15:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00007",
    "date": "2023.01.13 15:15경",
    "incidentType": "부딪힘",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프에서 내려오던 중 속도를 제어하지 못하면서 안전망에 부딪힘 사고자는 오전에 내린 비로 인해 설질 불량 및 가시거리 저하를 지적",
    "cost": 0,
    "notes": "",
    "category": "부딪힘",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 부딪힘 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "기상 악화 시 방송 및 근무자를 통한 안내 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-16",
    "timeline": [
      {
        "time": "2023.01.13 15:15",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.13 15:15",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00003",
    "date": "2023.01.06 10:30경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "G슬로프",
    "description": "G슬로프 하단부 합류지점 근처에서 보드를 타던 다른 고객과 충돌 후 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "G슬로프",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[G슬로프] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "패트롤 순찰 강화",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-06",
    "timeline": [
      {
        "time": "2023.01.06 10:30",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.06 10:30",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00002",
    "date": "2023.01.02 14:50경",
    "incidentType": "넘어짐",
    "businessUnit": "스키장",
    "victimType": "고객",
    "location": "장비렌탈샵 앞",
    "description": "렌탈샵 앞 논슬립이 안깔린 부분에서 장비를 들고 있다가 돌아서면서 미끄러져 넘어짐",
    "cost": 0,
    "notes": "",
    "category": "넘어짐",
    "resort": "스키장",
    "locationDetail": "장비렌탈샵 앞",
    "specialNotes": "",
    "zone": "스키장/슬로프",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[장비렌탈샵 앞] 넘어짐 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "렌탈샵 앞 이동동선 논슬립 추가 설매",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "레저팀",
    "dept": "레저팀",
    "reportDate": "2023-01-02",
    "timeline": [
      {
        "time": "2023.01.02 14:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023.01.02 14:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00052",
    "date": "2023-03-18 12:50경",
    "incidentType": "타구사고(차량)",
    "businessUnit": "성문안팀",
    "victimType": "고객",
    "location": "주차장",
    "description": "오후 12:50경 고객 라운딩 종료 후 차량 출차 과정에서 차량 지붕에 골프공 타구 소리 확인",
    "cost": 0,
    "notes": "",
    "category": "타구사고(차량)",
    "resort": "성문안팀",
    "locationDetail": "주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[주차장] 타구사고(차량) 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "- 안전그물망 설치 검토",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "성문안팀",
    "dept": "성문안팀",
    "reportDate": "2023-03-18",
    "timeline": [
      {
        "time": "2023-03-18 12:50",
        "note": "사고 발생 접수"
      },
      {
        "time": "2023-03-18 12:50",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00016",
    "date": "2022.12.20",
    "incidentType": "차량사고",
    "businessUnit": "밸리빌리지",
    "victimType": "고객",
    "location": "N콘도 승차대",
    "description": "폭설로 인하여 대정엔지니어링 측에서 브러쉬 트렉터 장비로 제설작업 진행 중 노스콘도 승차대 회전차로 주변에 주차되어 있는 고객 차량 파손 사고 발생",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "밸리빌리지",
    "locationDetail": "N콘도 승차대",
    "specialNotes": "",
    "zone": "콘도/숙박동",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[N콘도 승차대] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "운전자 안전교육 실시",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-01-26",
    "timeline": [
      {
        "time": "2022.12.20",
        "note": "사고 발생 접수"
      },
      {
        "time": "2022.12.20",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  },
  {
    "id": "2023-HDC-R036-00011",
    "date": "2022.12.17 18:00경",
    "incidentType": "차량사고",
    "businessUnit": "힐스빌리지",
    "victimType": "고객",
    "location": "B-1 주차장",
    "description": "콘도 이용 중 B-1 주차장 앞 도로면 부근에서 주차되어 있던 고객 차량 옆면을 파손",
    "cost": 0,
    "notes": "",
    "category": "차량사고",
    "resort": "힐스빌리지",
    "locationDetail": "B-1 주차장",
    "specialNotes": "",
    "zone": "클럽하우스/부대시설",
    "severity": "경미 (현장처치)",
    "victimName": "익명",
    "title": "[B-1 주차장] 차량사고 사고",
    "actionTaken": "현장 초동 조치 및 고객 케어 완료",
    "preventiveMeasure": "-",
    "status": "조치완료",
    "faultRatio": "과실 미산정",
    "totalAmount": 0,
    "companyAmount": 0,
    "personalAmount": 0,
    "manager": "객실팀",
    "dept": "객실팀",
    "reportDate": "2023-01-18",
    "timeline": [
      {
        "time": "2022.12.17 18:00",
        "note": "사고 발생 접수"
      },
      {
        "time": "2022.12.17 18:00",
        "note": "조치 내역: 현장 초동 조치 및 고객 케어 완료"
      }
    ]
  }
];

// 하위 호환 및 전역 바인딩 (initialIncidents 변수 영구 보장)
const initialIncidents = INITIAL_INCIDENTS;
if (typeof window !== "undefined") {
  window.INITIAL_INCIDENTS = INITIAL_INCIDENTS;
  window.initialIncidents = INITIAL_INCIDENTS;
}

// 로컬 스토리지 키 (영구 보존용 단일 표준 키)
const STORAGE_KEY = "resort_incidents_data";
const LEGACY_STORAGE_KEY = "resort_incident_records_v2";

// 데이터 매니저 (IncidentStorage - 오염 자동 치유 및 엑셀 원본 100% 동기화 탑재)
const IncidentStorage = {
  getAll() {
    try {
      if (typeof localStorage === "undefined") return INITIAL_INCIDENTS;
      let data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacyData) {
          data = legacyData;
          localStorage.setItem(STORAGE_KEY, legacyData);
        }
      }
      if (data) {
        const records = JSON.parse(data);
        if (Array.isArray(records) && records.length > 0) {
          let migrated = false;
          const initialMap = new Map();
          INITIAL_INCIDENTS.forEach(item => initialMap.set(item.id, item));

          records.forEach(item => {
            const orig = initialMap.get(item.id);
            if (orig) {
              // 1. 사고유형 및 제목 100% 원본 동기화
              if (item.incidentType !== orig.incidentType || item.category !== orig.category) {
                item.incidentType = orig.incidentType;
                item.category = orig.category;
                item.title = orig.title;
                migrated = true;
              }
              // 2. 실무 보험금 동기화
              if (item.cost !== orig.cost) {
                item.cost = orig.cost;
                item.totalAmount = orig.totalAmount;
                item.companyAmount = orig.companyAmount;
                item.personalAmount = orig.personalAmount;
                item.faultRatio = orig.faultRatio;
                migrated = true;
              }
              // 3. 부서 및 사업부 동기화
              if (item.businessUnit !== orig.businessUnit || item.resort !== orig.resort) {
                item.businessUnit = orig.businessUnit;
                item.resort = orig.resort;
                item.dept = orig.dept;
                migrated = true;
              }
              // 4. 피해자 유형 및 위치 동기화
              if (item.victimType !== orig.victimType) {
                item.victimType = orig.victimType;
                migrated = true;
              }
              if (item.location !== orig.location) {
                item.location = orig.location;
                item.locationDetail = orig.locationDetail;
                migrated = true;
              }
              if (item.notes !== orig.notes) {
                item.notes = orig.notes;
                item.specialNotes = orig.notes;
                migrated = true;
              }
            }
          });
          if (migrated) this.saveAll(records);
          return records;
        }
      }
      // 로컬스토리지에 데이터가 없는 경우 561건 원본 기본값 저장 후 반환
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
      return INITIAL_INCIDENTS;
    } catch (e) {
      console.error("Storage load error:", e);
      return INITIAL_INCIDENTS;
    }
  },

  saveAll(records) {
    try {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error("Storage save error:", e);
    }
  },

  add(record) {
    const list = this.getAll();
    list.unshift(record);
    this.saveAll(list);
    return list;
  },

  update(id, updatedFields) {
    const list = this.getAll();
    const idx = list.findIndex(item => item.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedFields };
      this.saveAll(list);
    }
    return list;
  },

  delete(id) {
    const list = this.getAll().filter(item => item.id !== id);
    this.saveAll(list);
    return list;
  },

  reset() {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
    }
    return INITIAL_INCIDENTS;
  }
};

if (typeof window !== "undefined") {
  window.STORAGE_KEY = STORAGE_KEY;
  window.IncidentStorage = IncidentStorage;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { INITIAL_INCIDENTS, initialIncidents, IncidentStorage };
}
