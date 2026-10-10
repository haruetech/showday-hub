import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'SHOWDAY | 가고 싶은 곳, 즐기고 싶은 순간',description:'공연과 전시, 여행 계획, 한 달 살기, 공연 전후의 즐거움까지. SHOWDAY에서 나에게 맞는 시간을 찾아보세요.',openGraph:{title:'SHOWDAY',description:'가고 싶은 곳, 즐기고 싶은 순간',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
