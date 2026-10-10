import {ArrowUpRight, Compass, CalendarDays, House, Ticket, MapPin, Route, Coffee, Clock3} from 'lucide-react';

const services = [
 {id:'now',name:'NOW',eyebrow:'가까운 문화생활',title:'공연·전시·나들이',desc:'내 주변에서 즐길 공연과 전시, 축제를 찾아보세요.',url:'https://map.showday.kr',cta:'즐길 거리 찾기',photo:'/images/now.webp',alt:'현장 조명과 사람들이 어우러진 문화 축제',icon:Compass},
 {id:'travel',name:'TRAVEL',eyebrow:'맞춤 여행 계획',title:'여행 일정 만들기',desc:'목적지부터 교통·숙소·동선·예산까지 한 번에.',url:'https://travel.showday.kr',cta:'여행 계획하기',photo:'/images/travel.webp',alt:'여행 가방과 지도를 펼쳐 둔 여행 준비 장면',icon:CalendarDays},
 {id:'stay',name:'STAY',eyebrow:'오래 머무는 여행',title:'일주일·한 달 살기',desc:'머물 지역과 숙소, 생활비를 여유 있게 준비하세요.',url:'',cta:'준비 중',photo:'/images/stay.webp',alt:'정원이 있는 편안한 숙소',icon:House},
 {id:'venue',name:'VENUE',eyebrow:'공연장 중심의 하루',title:'공연 전후 즐기기',desc:'공연장 주변 식당·카페·주차와 편의시설까지.',url:'https://seoularena.showday.kr',cta:'공연장 주변 보기',photo:'/images/venue.webp',alt:'관객과 조명이 있는 라이브 공연 무대',icon:Ticket},
];
export default function Home(){return <div className="site">
<header className="header"><div className="wrap nav"><a className="brand" href="/" aria-label="SHOWDAY 홈">SHOWDAY<span>.</span></a><div className="nav-right"><span className="nav-tag">공연에서 여행까지, 나에게 맞는 경험</span><a href="https://map.showday.kr">NOW</a><a href="https://travel.showday.kr">TRAVEL</a><a href="#stay">STAY</a><a href="https://seoularena.showday.kr">VENUE</a></div></div></header>
<main className="wrap main"><section className="intro"><div className="intro-copy"><span className="eyebrow">EXPLORE YOUR WAY</span><h1>가고 싶은 곳, <em>즐기고 싶은 순간.</em></h1><p>가까운 문화생활부터 여행 계획, 오래 머무는 시간까지. 원하는 경험을 골라 바로 시작하세요.</p></div><div className="intro-aside"><span><MapPin size={15}/> 주변 발견</span><span><Route size={15}/> 여행 설계</span><span><Clock3 size={15}/> 공연 전후</span></div></section>
<section className="services" aria-label="SHOWDAY 서비스"><div className="section-heading"><h2>어떤 경험을 찾으세요?</h2><p>아래에서 원하는 서비스를 선택하세요.</p></div><div className="service-grid">{services.map(s=><article key={s.id} id={s.id} className={'service-card '+s.id}><div className="photo" style={{backgroundImage:`linear-gradient(180deg,transparent 35%,rgba(7,17,29,.56)),url("${s.photo}")`}} role="img" aria-label={s.alt}><span className="photo-label">{s.name}</span>{!s.url&&<span className="soon-flag">준비 중</span>}</div><div className="card-body"><span className="card-eyebrow"><s.icon size={15}/>{s.eyebrow}</span><h3>{s.title}</h3><p>{s.desc}</p>{s.url?<a className="card-link" href={s.url}>{s.cta}<ArrowUpRight size={18}/></a>:<span className="card-link disabled">서비스 준비 중</span>}</div></article>)}</div></section>
<div className="bottom-line"><span><Coffee size={16}/> SHOWDAY — 일상과 여행 사이, 더 많은 경험을 연결합니다.</span><a href="https://travel.showday.kr">여행 계획 시작하기 <ArrowUpRight size={15}/></a></div></main>
<footer className="footer"><div className="wrap footer-inner"><span>© {new Date().getFullYear()} SHOWDAY</span><span>NOW · TRAVEL · STAY · VENUE</span></div></footer>
</div>}
