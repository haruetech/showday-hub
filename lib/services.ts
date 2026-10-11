// 서비스 목록 — 주소·이름 바꿀 때는 여기만 고치면 메뉴와 카드에 모두 반영됩니다.
export type Service = {
  id: string; name: string; label: string; q: string; desc: string;
  url: string; live: boolean; cta: string; hue: [string, string];
};
export const SERVICES: Service[] = [
  { id: 'now', name: 'SHOWDAY NOW', label: '오늘 즐기기', q: '오늘 어디 가지?',
    desc: '공연·전시·축제, 내 근처 무료 행사, 남는 시간에 맞는 코스', url: 'https://map.showday.kr',
    live: true, cta: '지도로 찾기', hue: ['#6C63FF', '#3B2FA0'] },
  { id: 'travel', name: 'SHOWDAY TRAVEL', label: '여행 계획하기', q: '이번 여행 어떻게 짜지?',
    desc: '지역·날짜만 고르면 일정·지도·예산·날씨까지 한 번에', url: 'https://travel.showday.kr',
    live: true, cta: '일정 만들기', hue: ['#2FA39A', '#17636A'] },
  { id: 'stay', name: 'SHOWDAY STAY', label: '오래 머물기', q: '어디서 오래 살아볼까?',
    desc: '일주일~한 달 살기, 숙소·생활 편의·체험·비용', url: 'https://stay.showday.kr',
    live: true, cta: '한 달 살기 보기', hue: ['#E8845F', '#B24A5C'] },
  { id: 'venue', name: 'SHOWDAY VENUE', label: '공연 가는 날', q: '공연 전후 뭐 하지?',
    desc: '공연장 주변 식당·카페·주차·짐보관, 서울아레나 특화', url: 'https://seoularena.showday.kr',
    live: true, cta: '서울아레나 보기', hue: ['#D9568A', '#7A2A94'] },
];
