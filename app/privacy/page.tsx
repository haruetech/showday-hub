import type {Metadata} from 'next';
import {getBiz, SiteHeader, SiteFooter} from '../../lib/site';

export const metadata: Metadata = { title: '개인정보처리방침 | SHOWDAY' };

const SECTIONS: [string, string][] = [
  ["1. 수집하는 개인정보 항목", "카카오 소셜 로그인 시: 닉네임, 프로필 사진, 카카오계정(이메일)\n온보딩(추천 설정) 시: 관심 지역, 동행자 유형, 연령대, 선호 요일, 이동 가능 거리, 관심 장르"],
  ["2. 개인정보의 수집 및 이용 목적", "회원 식별 및 로그인 유지, 맞춤 공연 추천 제공, 관심 공연 저장·알림 기능 제공을 위해 이용합니다."],
  ["3. 개인정보의 보유 및 이용 기간", "회원 탈퇴 시 또는 카카오 로그인 연동 해제 시까지 보유하며, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다."],
  ["4. 개인정보의 제3자 제공", "회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 예매 버튼을 통해 외부 예매처로 이동하는 경우, 해당 예매처의 개인정보처리방침이 별도로 적용됩니다."],
  ["5. 이용자의 권리", "이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 회원 탈퇴를 통해 개인정보 이용에 대한 동의를 철회할 수 있습니다."],
  ["6. 개인정보 보호책임자", "성명: {officer} · 연락처: {contact}"],
];

export default async function PrivacyPage() {
  const biz = await getBiz();
  const officer = biz.ceo_name || '준비 중';
  const contact = biz.support_contact || '준비 중';
  const fill = (s: string) => s.replace('{officer}', officer).replace('{contact}', contact);
  return <div className="site">
    <SiteHeader tag={false}/>
    <main className="wrap legal">
      <p className="eyebrow">SHOWDAY</p>
      <h1>개인정보처리방침</h1>
      <p className="legal-date">시행일: {biz.policy_effective_date || '준비 중'}</p>
      {SECTIONS.map(([h, b]) => <section key={h}><h2>{h}</h2><p>{fill(b)}</p></section>)}
    </main>
    <SiteFooter biz={biz}/>
  </div>;
}
