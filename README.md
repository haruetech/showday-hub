# SHOWDAY HUB
SHOWDAY의 통합 입구용 독립 Next.js 프로젝트입니다.

## 서비스 링크
- NOW: https://map.showday.kr
- TRAVEL: https://travel.showday.kr
- STAY: https://stay.showday.kr
- VENUE: https://seoularena.showday.kr

## 실행
```bash
npm install
npm run dev
npm run build
```

## 배포 시 주의
**showday.kr을 바로 연결하지 마세요.** 먼저 Vercel의 임시 주소에서 검증하세요.
기존 showday.kr/api/events/search API를 사용하는 MAP 등 서비스의 의존성을 조사하고, 기존 API를 api.showday.kr 등의 독립 주소로 이전해 정상 동작을 검증한 후에만 대표 도메인을 전환해야 합니다.
본 프로젝트에는 공연 API가 없으며 기존 API를 대체하지 않습니다.

## 이미지
Unsplash의 외부 사진 URL을 사용합니다. 실제 배포 전 이미지 사용 조건, 적합성, 접근 가능성을 확인하고 자체 라이선스 확보 이미지를 /public에 저장하는 것을 권장합니다.

## Local images
Images are served from `public/images/`. Included WebP files are gradient placeholders, not photographs. Replace with licensed photos using the same filenames. No external Unsplash dependency.


## 2026-10-25 통합 메인 개편
- `app/page.tsx`: 음악 5개 경로 + MAP/TRAVEL/STAY/VENUE 4개 경로를 한 화면에서 인지할 수 있도록 재구성
- `app/globals.css`: `sd26-` 접두사로 새 메인 스타일 격리, 모바일 반응형
- `lib/site.tsx`: VENUE를 통합 공연장 `https://venue.showday.kr`로 연결
- 기존 `/partnership`, `/register`, `/privacy`, `/terms`, API route 및 비즈니스 정보 연동 유지
- 실제 녹음/발매 기능은 연결 사이트의 구현 수준에 따름. 본 ZIP은 허브 UI와 링크만 구현함
- Vercel Root Directory: 압축 해제 후 `showday-hub-main` 안의 파일을 저장소 루트에 업로드했다면 `./`
