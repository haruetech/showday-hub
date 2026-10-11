import type { Metadata } from 'next';
import { getBiz, SiteHeader, SiteFooter } from '../../lib/site';
import PartnershipForm from './form';

export const metadata: Metadata = { title: '제휴·광고 문의 | SHOWDAY' };

export default async function PartnershipPage() {
  const biz = await getBiz();
  return <div className="site">
    <SiteHeader tag={false} />
    <main className="wrap fpage">
      <span className="eyebrow">PARTNERSHIP</span>
      <h1>제휴·광고 문의</h1>
      <p className="lead">공연장·티켓 플랫폼·브랜드 제휴, 지면·배너 광고 등 SHOWDAY와의 협업을 원하시면 아래 내용을 남겨주세요. 회원가입 없이 접수되며, 확인 후 회신드립니다.</p>
      <PartnershipForm />
    </main>
    <SiteFooter biz={biz} />
  </div>;
}
