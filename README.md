# Snap for Gemini

# PWA 운동 기록 앱 작업 현황 스냅샷 (최신)

## 1. 프로젝트 개요
- 모바일(안드로이드 Chrome) 중심의 PWA 운동 기록 앱
- Google OAuth 2.0 로그인 및 Google Drive AppData 폴더를 이용한 데이터 자동 동기화 기능 포함

## 2. 사용 환경 및 기술 스택
- 타겟 환경: 안드로이드 Chrome (PWA Standalone 지원)
- 기술 스택: HTML, CSS, JavaScript (Vanilla JS), Service Worker, PWA Web App Manifest

## 3. 주요 설정 및 적용 내용
- PWA 설치 요건 충족:
  - 경로 설정: 모든 PWA 리소스 경로를 루트 절대 경로(`/`)로 지정 (`/manifest.json`, `/sw.js`, `/icon-192.png` 등)
  - `manifest.json`: `purpose: "any maskable"` 지정, `display: "standalone"`
  - `sw.js`: 절대 경로 캐싱 로직 및 `fetch` 이벤트 처리 구현
  - `icon-192.png`, `icon-512.png`: 최상위 루트 경로에 위치
- 디자인 및 최상단 상태 표시줄(Status Bar) 설정:
  - 안드로이드 최상단 상태 표시줄을 기기 모드와 관계없이 항상 어둡게 고정 (`#121212`)
  - HTML: `<meta name="theme-color" content="#121212">`
  - Manifest: `"theme_color": "#121212"`, `"background_color": "#121212"`
- 설치 방식:
  - Chrome 브라우저의 기본 PWA 설치 기능을 활용하기 위해 브라우저 이벤트(`beforeinstallprompt`)를 별도로 제어하지 않음.

## 4. 파일 구조
- index.html (메인 UI, 운동 기록/프리셋 및 구글 드라이브 동기화, PWA 등록)
- manifest.json (PWA 설정 및 다크 상태 표시줄 테마)
- sw.js (서비스 워커)
- icon-192.png, icon-512.png (앱 아이콘)
