import type {Metadata} from 'next';
import {getBiz, SiteHeader, SiteFooter} from '../../lib/site';

export const metadata: Metadata = { title: '이용약관 | SHOWDAY' };

const SECTIONS: [string, string][] = [
  ["제1조 (목적)", "이 약관은 {company}(이하 \"회사\")이 운영하는 SHOWDAY(이하 \"서비스\")의 이용조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다."],
  ["제2조 (서비스의 내용)", "서비스는 공연예술통합전산망(KOPIS) 등 공공데이터와 이용자가 등록한 정보를 바탕으로 공연 정보를 제공하며, 실제 예매는 각 예매처(인터파크, 예스24 등 외부 사이트)를 통해 이루어집니다. 회사는 예매 대행업체가 아니며, 예매 과정에서 발생하는 사항은 해당 예매처의 정책을 따릅니다."],
  ["제3조 (회원가입 및 소셜 로그인)", "이용자는 카카오 계정을 통한 소셜 로그인으로 회원가입을 할 수 있으며, 이 과정에서 카카오로부터 제공받는 정보의 범위는 개인정보처리방침에 따릅니다."],
  ["제4조 (이용자의 의무)", "이용자는 관련 법령, 이 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 사항을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다."],
  ["제5조 (면책조항)", "회사는 외부 예매처의 정보 오류, 공연 취소·변경, 결제 관련 분쟁에 대해 직접적인 책임을 지지 않으며, 공공데이터(KOPIS 등) 출처 정보의 정확성에 대해서도 보증하지 않습니다."],
  ["제6조 (문의)", "서비스 관련 문의: {contact}"],
];

export default async function TermsPage() {
  const biz = await getBiz();
  const company = biz.business_name || 'SHOWDAY';
  const contact = biz.support_contact || '고객센터';
  const fill = (s: string) => s.replace('{company}', company).replace('{contact}', contact);
  return <div className="site">
    <SiteHeader tag={false}/>
    <main className="wrap legal">
      <p className="eyebrow">SHOWDAY</p>
      <h1>이용약관</h1>
      <p className="legal-date">시행일: {biz.policy_effective_date || '준비 중'}</p>
      {SECTIONS.map(([h, b]) => <section key={h}><h2>{h}</h2><p>{fill(b)}</p></section>)}
    </main>
    <SiteFooter biz={biz}/>
  </div>;
}
