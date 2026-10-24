import { Music2, MapPinned, Plane, House, Ticket, ArrowUpRight, PlayCircle, Grid2X2, CalendarDays, LocateFixed, BedDouble, ChevronRight, Search, Mic2 } from 'lucide-react';
import {getBiz,SiteHeader,SiteFooter} from '../lib/site';

const services=[
 {number:'01',name:'음악',description:'듣기 · 허밍 · 제작 · 발표',url:'https://music.showday.kr/',icon:Music2,image:'/images/showday-service-1.webp'},
 {number:'02',name:'지도',description:'공연 · 전시 · 축제 · 내 주변',url:'https://map.showday.kr/',icon:MapPinned,image:'/images/showday-service-2.webp'},
 {number:'03',name:'여행',description:'교통 · 일정 · 코스 · 추천',url:'https://travel.showday.kr/',icon:Plane,image:'/images/showday-service-3.webp'},
 {number:'04',name:'한달살기',description:'지역 · 숙박 · 체류 지원사업',url:'https://stay.showday.kr/',icon:House,image:'/images/showday-service-4.webp'},
 {number:'05',name:'공연장',description:'대형 공연장 · 주변 서비스',url:'https://venue.showday.kr/',icon:Ticket,image:'/images/showday-service-5.webp'}
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
   <p>음악 · 공연 · 문화생활 · 여행 · 한달살기까지, <strong>SHOWDAY 하나로.</strong></p>
   <div className="one-actions"><a className="one-primary" href="#services"><Grid2X2 size={19}/> SHOWDAY 둘러보기 <ArrowUpRight size={17}/></a><a className="one-secondary" href="#intro-video"><PlayCircle size={21}/> SHOWDAY 소개 영상 <ArrowUpRight size={16}/></a></div>
  </div></section>
  <section id="services" className="one-service-grid" aria-label="SHOWDAY 주요 서비스">{services.map(s=><a className="one-service" key={s.number} href={s.url} aria-label={`${s.name} 서비스로 이동`}><div className="one-service-info"><div className="one-service-title"><span className="one-index">{s.number}</span><s.icon size={24}/><strong>{s.name}</strong><span className="one-arrow"><ArrowUpRight size={19}/></span></div><p>{s.description}</p></div><div className="one-service-photo" style={{backgroundImage:`url(${s.image})`}}/></a>)}</section>
  <nav className="one-quick" aria-label="SHOWDAY 빠른 서비스">{quick.map(q=><a key={q.name} href={q.url}><span className="one-quick-icon"><q.icon size={24}/></span><span className="one-quick-text"><strong>{q.name}</strong><small>{q.desc}</small></span><ChevronRight className="one-quick-chevron" size={17}/></a>)}</nav>
 </main>
 <section id="intro-video" className="one-intro"><div><span>ABOUT SHOWDAY</span><h2>SHOWDAY 소개 영상</h2><p>SHOWDAY의 다섯 가지 서비스를 소개하는 영상이 준비되면 이 영역에서 바로 재생할 수 있습니다.</p></div><div className="one-video-placeholder"><PlayCircle size={40}/><strong>소개 영상 준비 중</strong><small>영상 파일 또는 영상 링크 연결 예정</small></div></section>
 <SiteFooter biz={biz}/></div>
}
