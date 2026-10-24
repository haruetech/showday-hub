import IntroVideoModal from '../lib/IntroVideoModal';
import ServiceIntroModal from '../lib/ServiceIntroModal';
import { Music2, MapPinned, Plane, House, Ticket, ArrowUpRight, PlayCircle, Grid2X2, CalendarDays, LocateFixed, BedDouble, ChevronRight, Search, Mic2 } from 'lucide-react';
import {getBiz,SiteHeader,SiteFooter} from '../lib/site';

const services=[
 {number:'01',name:'음악제작의 모든 것',en:'MUSIC CREATION',description:'작곡 · 편곡 · 녹음 · 믹싱 · 발표',url:'https://music.showday.kr/',icon:Music2,image:'/images/showday-service-1.webp'},
 {number:'02',name:'공연장',en:'VENUES',description:'공연 일정 · 아티스트 · 주변 서비스',url:'https://venue.showday.kr/',icon:Ticket,image:'/images/showday-service-5.webp'},
 {number:'03',name:'공연·여행지 찾기',en:'DISCOVER',description:'공연 · 축제 · 핫플 · 주변 명소',url:'https://map.showday.kr/',icon:MapPinned,image:'/images/showday-service-2.webp'},
 {number:'04',name:'여행 플랜',en:'TRAVEL PLANNER',description:'교통 · 숙소 · 일정 · 테마 코스 추천',url:'https://travel.showday.kr/',icon:Plane,image:'/images/showday-service-3.webp'},
 {number:'05',name:'로컬 라이프',en:'LOCAL LIFE',description:'한 지역에서 머물며 즐기는 특별한 일상',url:'https://stay.showday.kr/',icon:House,image:'/images/showday-service-4.webp'}
];
const quick=[
 {name:'오늘의 공연',desc:'지금 열리는 공연을 한눈에',url:'https://map.showday.kr/',icon:CalendarDays},
 {name:'내 주변 행사',desc:'가까운 축제와 전시 확인',url:'https://map.showday.kr/',icon:LocateFixed},
 {name:'주말 여행지',desc:'이번 주 어디로 떠날까요?',url:'https://travel.showday.kr/',icon:Plane},
 {name:'한달살기 지원',desc:'지역별 체류 지원사업 확인',url:'https://stay.showday.kr/',icon:BedDouble},
 {name:'서울아레나',desc:'공연장과 주변 정보',url:'https://seoularena.showday.kr/',icon:Ticket}
];
export default async function Home(){
 const biz=await getBiz();
 return <div className="site showday-one"><SiteHeader tag={false}/><main className="one-main">
  <section className="one-hero" aria-labelledby="one-heading"><div className="one-hero-image" aria-hidden="true"/><div className="one-hero-shade"/><div className="one-copy">
   <div className="one-eyebrow">✦ THE WORLD OF SHOWDAY <span/></div>
   <h1 id="one-heading">음악을 만들고,<br/><em>세상과 만나고,</em><br/>특별한 하루를 즐기다.</h1>
   <p>작곡부터 제작, 공연까지. 여행과 일상이 이어지는 <strong>SHOWDAY.</strong></p>
   <div className="one-actions"><ServiceIntroModal/><IntroVideoModal/></div>
  </div></section>
  <section id="services" className="one-service-grid" aria-label="SHOWDAY 주요 서비스">{services.map(s=><a className="one-service" key={s.number} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} 서비스 새 탭에서 열기`}><div className="one-service-info"><div className="one-service-title"><span className="one-index">{s.number}</span><s.icon size={24}/><strong className="one-card-bilingual"><span className="one-card-ko">{s.name}</span><span className="one-card-en" aria-hidden="true">{s.en}</span></strong><span className="one-arrow"><ArrowUpRight size={19}/></span></div><p>{s.description}</p></div><div className="one-service-photo" style={{backgroundImage:`url(${s.image})`}}/></a>)}</section>
  <nav className="one-quick" aria-label="SHOWDAY 빠른 서비스">{quick.map(q=><a key={q.name} href={q.url} target="_blank" rel="noopener noreferrer"><span className="one-quick-icon"><q.icon size={24}/></span><span className="one-quick-text"><strong>{q.name}</strong><small>{q.desc}</small></span><ChevronRight className="one-quick-chevron" size={17}/></a>)}</nav>
 </main>
 <SiteFooter biz={biz}/></div>
}
