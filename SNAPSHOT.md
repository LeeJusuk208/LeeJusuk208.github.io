# PWA 운동 기록 앱 작업 현황 스냅샷 (최신 v1.1)

## 1. 프로젝트 개요
- 모바일(안드로이드 Chrome) 중심의 PWA 운동 기록 앱
- Google OAuth 2.0 로그인 및 Google Drive AppData 폴더를 이용한 데이터 자동 동기화 기능 포함
- GitHub Pages 프로젝트 사이트 배포 (`/workout-app/` 서브 경로 적용)

## 2. 사용 환경 및 기술 스택
- 타겟 환경: 안드로이드 Chrome (PWA Standalone 지원)
- 기술 스택: HTML, CSS, JavaScript (Vanilla JS), Service Worker, PWA Web App Manifest
- 배포 환경: GitHub Pages (URL: https://<username>.github.io/workout-app/)

## 3. 주요 설정 및 적용 내용
- PWA 설치 및 서브 경로(/workout-app/) 대응:
  - 경로 설정: 서브 경로 기반 절대 경로 지정 (`/workout-app/manifest.json`, `/workout-app/sw.js`, `/workout-app/icon-192.png` 등)
  - `manifest.json`: `start_url`을 `/workout-app/index.html`로 지정, `purpose: "any maskable"`, `display: "standalone"`
  - `sw.js`: `/workout-app/` 스코프 내 캐싱 로직 및 `fetch` 이벤트 처리 구현
  - `icon-192.png`, `icon-512.png`: 서브 경로 지정
- 디자인 및 최상단 상태 표시줄(Status Bar) 설정:
  - 안드로이드 최상단 상태 표시줄을 기기 모드와 관계없이 항상 어둡게 고정 (`#121212`)
  - HTML: `<meta name="theme-color" content="#121212">`
  - Manifest: `"theme_color": "#121212"`, `"background_color": "#121212"`
- 설치 방식:
  - Chrome 브라우저의 기본 PWA 설치 기능을 활용하기 위해 브라우저 이벤트(`beforeinstallprompt`)를 별도로 제어하지 않음.

## 4. 파일 구조
- index.html (메인 UI, 운동 기록/프리셋 및 구글 드라이브 동기화, PWA 등록 및 서브 경로 설정)
- manifest.json (PWA 설정 및 서브 경로 아이콘 설정)
- sw.js (서비스 워커 캐싱 및 서브 경로 처리)
- icon-192.png, icon-512.png (앱 아이콘)
