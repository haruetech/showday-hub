# SHOWDAY HUB
SHOWDAY의 통합 입구용 독립 Next.js 프로젝트입니다.

## 서비스 링크
- NOW: https://map.showday.kr
- TRAVEL: https://travel.showday.kr
- STAY: 준비 중
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
카드 이미지는 `public/images/{now,travel,stay,venue}.webp` (직접 제작한 일러스트, 1100x440). 실제 사진으로 바꾸려면 같은 파일명의 WebP로 덮어쓰면 됩니다. 외부 사이트 주소는 쓰지 않습니다.
