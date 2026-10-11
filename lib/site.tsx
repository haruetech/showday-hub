import {MessageCircle} from 'lucide-react';

export const API_BASE = process.env.SHOWDAY_API_BASE || 'https://api.showday.kr';

export type Biz = { business_name?: string; ceo_name?: string; business_reg_no?: string; mail_order_no?: string; address?: string; support_contact?: string; kakao_channel_id?: string; family_sites?: string; policy_effective_date?: string };

// 사업자 정보·정책 정보는 기존 SHOWDAY 관리자(/admin/business)에 입력한 값을 그대로 가져옵니다. 실패해도 화면은 정상 표시됩니다.
export async function getBiz(): Promise<Biz> {
  try {
    const r = await fetch(`${API_BASE}/api/settings`, { next: { revalidate: 600 } });
    if (!r.ok) return {};
    return await r.json();
  } catch { return {}; }
}

const DEFAULT_FAMILY = [{ name: 'SHOWDAY 소개·제휴', url: 'https://info.showday.kr' }, { name: 'ARENA NOW', url: 'https://arena.showday.kr' }, { name: '오늘하루', url: 'https://oneulharu.co.kr' }, { name: '하루애+', url: 'https://plus.haruepick.com' }];
// 관리자(/admin/business)의 FAMILY SITE 입력값("이름 | 주소" 줄 목록)을 읽어옵니다. https:// 주소만 허용합니다.
function parseFamily(raw?: string) {
  const list = (raw || '').split('\n').map(l => l.split('|').map(x => x.trim())).filter(([n, u]) => n && u && /^https?:\/\//i.test(u)).map(([name, url]) => ({ name, url }));
  return list.length ? list : DEFAULT_FAMILY;
}

export const NAV = [
  { name: 'NOW', url: 'https://map.showday.kr' },
  { name: 'TRAVEL', url: 'https://travel.showday.kr' },
  { name: 'STAY', url: 'https://stay.showday.kr' },
  { name: 'VENUE', url: 'https://seoularena.showday.kr' },
];

export function SiteHeader({ tag = true }: { tag?: boolean }) {
  return <header className="header"><div className="wrap nav"><a className="brand" href="/" aria-label="SHOWDAY 홈">SHOWDAY<span>.</span></a><div className="nav-right">{tag && <span className="nav-tag">공연에서 여행까지, 나에게 맞는 경험</span>}{NAV.map(n => <a key={n.name} className="nav-pill" href={n.url} target="_blank" rel="noopener noreferrer">{n.name}</a>)}</div></div></header>;
}

export function SiteFooter({ biz }: { biz: Biz }) {
  const family = parseFamily(biz.family_sites);
  const kakao = biz.kakao_channel_id ? `https://pf.kakao.com/${biz.kakao_channel_id}` : 'https://pf.kakao.com/_SnjrX';
  const hasBiz = Boolean(biz.business_name || biz.ceo_name || biz.business_reg_no);
  return <footer className="footer"><div className="wrap fx">
    <div className="fx-row">
      <a className="fx-logo" href="/" aria-label="SHOWDAY 홈">SHOWDAY<span>.</span></a>
      <nav className="fx-links" aria-label="하단 메뉴"><a href="/partnership">제휴·광고 문의</a><a href="/register">공연 등록 (주최·기획사)</a></nav>
      <div className="fx-right"><a className="fx-chat" href={kakao} target="_blank" rel="noopener noreferrer"><MessageCircle size={14}/>카카오톡 문의</a>
        <details className="family"><summary>FAMILY SITE</summary><ul>{family.map(f => <li key={f.url}><a href={f.url} target="_blank" rel="noopener noreferrer">{f.name}</a></li>)}</ul></details></div>
    </div>
    <div className="fx-sub">
      {hasBiz && <p className="fx-biz">상호명 {biz.business_name || '-'}<i>·</i>대표 {biz.ceo_name || '-'}<i>·</i>사업자등록번호 {biz.business_reg_no || '-'}{biz.mail_order_no && <><i>·</i>통신판매업신고 {biz.mail_order_no}</>}{biz.address && <><i>·</i>주소 {biz.address}</>}{biz.support_contact && <><i>·</i>고객센터 {biz.support_contact}</>}</p>}
      <span className="fx-copy">© {new Date().getFullYear()} SHOWDAY. All rights reserved.</span>
    </div>
  </div></footer>;
}
