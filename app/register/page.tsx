import type { Metadata } from 'next';
import { getBiz, SiteHeader, SiteFooter } from '../../lib/site';
import RegisterForm from './form';

export const metadata: Metadata = { title: '공연 등록 | SHOWDAY' };

export default async function RegisterPage() {
  const biz = await getBiz();
  return <div className="site">
    <SiteHeader tag={false} />
    <main className="wrap fpage">
      <span className="eyebrow">FOR ORGANIZERS</span>
      <h1>공연 등록 (주최·기획사)</h1>
      <p className="lead">주최·기획사에서 직접 공연 정보를 등록해 주세요. 운영팀 확인 후 승인된 공연만 SHOWDAY에 공개됩니다.</p>
      <RegisterForm />
    </main>
    <SiteFooter biz={biz} />
  </div>;
}
