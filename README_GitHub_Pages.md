# EXPRIM MILLER 269 — GitHub Pages 설정 가이드

## 📁 파일 구조
```
EXPRIM_MILLER_GitHub_v6.zip 압축 해제 후:

dashboard/
├── index.html          ← 대시보드 UI (83% 경량화, 115KB)
└── data/
    ├── main.json       ← 구매자/제품 데이터 (493KB)
    └── config.json     ← 설정 (0.2KB)
```

## 🚀 GitHub Pages 배포 방법 (5분)

### 1단계: 저장소 생성
1. GitHub.com에서 새 저장소(repository) 생성
2. 이름: `exprim-miller-dashboard` (원하는 이름 가능)

### 2단계: 파일 업로드
```
ZIP 파일 내의 dashboard/ 폴더 내용을 루트에 업로드:
  - index.html
  - data/main.json
  - data/config.json
```

### 3단계: GitHub Pages 활성화
1. 저장소 → Settings → Pages
2. Branch: main, Folder: / (root)
3. Save → 몇 분 후 URL 생성: `https://[아이디].github.io/[저장소명]`

---

## 🔄 매월 데이터 업데이트

### 방법 A: 엑셀 자동 변환 (권장)
1. `EXPRIM_EXCEL_TO_JSON_Converter.html` 열기
2. 엑셀 파일 업로드
3. `main.json` 다운로드
4. GitHub의 `data/main.json` 파일 교체

### 방법 B: 직접 수정
- `data/main.json`만 수정 → index.html 건드리지 않아도 됨
- JSON 편집기 사용 권장 (VS Code, etc.)

---

## ❓ 문제 해결

### 대시보드가 빈 화면으로 뜨는 경우
- 브라우저 개발자 도구(F12) → Console 탭 확인
- `data/main.json` 경로가 올바른지 확인
- CORS 오류 시: 로컬 파일 직접 열기 불가 → 반드시 웹 서버 필요

### data/main.json 404 오류
- `data/` 폴더와 `main.json`이 저장소에 업로드되었는지 확인
- 파일명 대소문자 확인 (main.json, Main.json 구분)

