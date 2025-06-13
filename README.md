#  하나무역 중고차 수출 견적 플랫폼

> 중고차 수출 플랫폼 프론트엔드 구현 프로젝트  
> React 기반 반응형 웹앱 + 실시간 상담현황 + 견적신청 폼 연동  
> **하나무역** 브랜드 스타일에 맞춰 디자인 커스터마이징

---

##  배포 주소
- [ 프론트엔드](https://your-project.netlify.app) ← Netlify 주소 붙여줘!
- [ 백엔드](https://api.hanatrade.com) ← 추후 EC2 배포 예정

---

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|------|
| 프론트엔드 | React, TailwindCSS, Swiper.js, AOS |
| 기타 사용 기술 | Axios, Bootstrap, React Icons |
| 배포환경 | Netlify (프론트), AWS EC2 (백엔드 예정) |

---

##✨ 주요 기능

-  차량 정보 입력 폼 (차량명, 연식, 연료, 연락처, 지역)
-  실시간 수출가 비교 섹션
-  상담현황 슬라이드 (DB 연동 자동 스크롤)
-  PC /  모바일 완전 분리형 반응형 UI
- 개인정보 동의 모달 + 유효성 검사 포함
-  브라운/옅은 베이지 기반 UI 톤 통일

---

##  캡처 이미지

| PC 화면 예시 | 모바일 화면 예시 |
|--------------|-------------------|
| ![pc](./screenshots/pc-home.png) | ![mobile](./screenshots/mobile-home.png) |

> `./screenshots` 폴더에 이미지 추가해주면 위처럼 자동 표시돼요.

---

## 프로젝트 구조 요약
 frontend
┣ components
┃ ┣ PcHome.jsx
┃ ┣ MobileHome.jsx
┃ ┣ Header.jsx / Footer.jsx
┃ ┗ EstimateComparePC.jsx
┣ pages
┃ ┗ Home.jsx
┣ styles
┃ ┗ fonts.css
┣  main.jsx
┗  App.jsx

---

##  개발자 정보

- 이름: **강현우**
- 이메일: [kang695769@gmail.com]
- GitHub: [github.com/kasuk123](https://github.com/kasuk123)

---

## 📌 사용법

```bash
npm install
npm run dev     # 개발 모드
npm run build   # 배포용 정적 파일 생성
