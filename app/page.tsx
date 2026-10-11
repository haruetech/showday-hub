import {ArrowUpRight, Compass, CalendarDays, House, Ticket} from 'lucide-react';
import {getBiz, SiteHeader, SiteFooter} from '../lib/site';

const services = [
 {id:'now',name:'NOW',eyebrow:'가까운 문화생활',title:'공연·전시·나들이',desc:'내 주변에서 즐길 공연과 전시, 축제를 찾아보세요.',url:'https://map.showday.kr',cta:'즐길 거리 찾기',photo:'/images/now.webp',alt:'현장 조명과 사람들이 어우러진 문화 축제',icon:Compass},
 {id:'travel',name:'TRAVEL',eyebrow:'맞춤 여행 계획',title:'여행 일정 만들기',desc:'목적지부터 교통·숙소·동선·예산까지 한 번에.',url:'https://travel.showday.kr',cta:'여행 계획하기',photo:'/images/travel.webp',alt:'여행 가방과 지도를 펼쳐 둔 여행 준비 장면',icon:CalendarDays},
 {id:'stay',name:'STAY',eyebrow:'오래 머무는 여행',title:'일주일·한 달 살기',desc:'머물 지역과 숙소, 생활비를 여유 있게 준비하세요.',url:'https://stay.showday.kr',cta:'한 달 살기 보기',photo:'/images/stay.webp',alt:'정원이 있는 편안한 숙소',icon:House},
 {id:'venue',name:'VENUE',eyebrow:'공연장 중심의 하루',title:'공연 전후 즐기기',desc:'공연장 주변 식당·카페·주차와 편의시설까지.',url:'https://seoularena.showday.kr',cta:'공연장 주변 보기',photo:'/images/venue.webp',alt:'관객과 조명이 있는 라이브 공연 무대',icon:Ticket},
];

export default async function Home(){const biz=await getBiz();return <div className="site home">
<SiteHeader tag={false}/>
<main className="wrap stage-wrap">
<section className="hero"><h1>가고 싶은 곳, 즐기고 싶은 순간.</h1><p>공연·전시부터 여행, 한 달 살기까지. 마음 가는 곳을 골라보세요.</p></section>
<section className="stage" aria-label="SHOWDAY 서비스">{services.map(s=><a key={s.id} id={s.id} className="panel" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} — ${s.title} (새 창)`}>
<span className="panel-bg" style={{backgroundImage:`url("${s.photo}")`}} role="img" aria-label={s.alt}/><span className="panel-shade"/>
<span className="panel-go"><ArrowUpRight size={18}/></span>
<span className="panel-body"><span className="panel-eyebrow"><s.icon size={15}/>{s.eyebrow}</span><strong className="panel-name">{s.name}</strong><span className="panel-title">{s.title}</span>
<span className="panel-more"><span className="panel-desc">{s.desc}</span><span className="panel-cta">{s.cta}<i><ArrowUpRight size={16}/></i></span></span></span>
</a>)}</section>
</main>
<SiteFooter biz={biz}/>
</div>}
