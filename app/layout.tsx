import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'SHOWDAY | 오늘의 즐거움부터 새로운 여행까지',description:'공연과 전시, 여행 계획, 한 달 살기, 공연 전후의 즐거움까지. SHOWDAY에서 나에게 맞는 시간을 찾아보세요.',openGraph:{title:'SHOWDAY',description:'오늘의 즐거움부터 새로운 여행까지',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
