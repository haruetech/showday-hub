# SHOWDAY HUB (showday.kr 통합 입구)

서비스 카드 4개(NOW · TRAVEL · STAY · VENUE)와 공통 상단 메뉴만 있는 가벼운 페이지입니다. DB·API·키 없음.

## 수정
- 서비스 주소·이름·문구: `lib/services.ts` 한 곳 (STAY가 열리면 `live:true`와 url만 바꾸면 됩니다)
- 색·배치: `app/globals.css`

## 배포 (기존 서비스 중단 없이)
1. GitHub에 새 저장소 `showday-hub` 생성 후 업로드
2. Vercel > Add New Project > `showday-hub` (환경변수 없음)
3. 임시 주소(*.vercel.app)에서 화면·링크 확인
4. 기존 `showday.kr` API를 쓰는 곳(map의 SHOWDAY_API_BASE 등)을 먼저 다른 주소로 옮긴 뒤
5. Vercel Settings > Domains에서 `showday.kr`을 이 프로젝트로 이동
