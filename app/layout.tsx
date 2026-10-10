import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SHOWDAY — 오늘부터 여행까지',
  description: '공연·나들이·여행·한 달 살기. 목적에 맞는 SHOWDAY 서비스를 골라보세요.',
  metadataBase: new URL('https://showday.kr'),
  openGraph: { title: 'SHOWDAY', description: '오늘 즐기기 · 여행 계획 · 오래 머물기 · 공연 가는 날', url: 'https://showday.kr', type: 'website' },
};
export const viewport: Viewport = { themeColor: '#4a47b8', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
