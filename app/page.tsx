import {ArrowUpRight, Headphones, MapPinned, Route, House, Ticket, AudioLines, Mic2, Sparkles, Play, Music2, SlidersHorizontal, Users, Disc3} from 'lucide-react';
import {getBiz, SiteHeader, SiteFooter} from '../lib/site';

const destinations = [
  {id:'map',name:'MAP',label:'오늘의 발견',title:'지금 즐길 거리를 찾아보세요',desc:'공연·전시·축제·체험, 내 주변 문화생활',url:'https://map.showday.kr',photo:'/images/now.webp',icon:MapPinned,cta:'지도로 찾아보기'},
  {id:'travel',name:'TRAVEL',label:'여행 일정 만들기',title:'설레는 여행, 계획은 간편하게',desc:'목적지·교통·동선·예산을 한 번에',url:'https://travel.showday.kr',photo:'/images/travel.webp',icon:Route,cta:'여행 계획하기'},
  {id:'stay',name:'STAY',label:'조금 더 오래 머무르기',title:'일주일에서 한 달, 새로운 일상',desc:'지역 체류·숙소·생활비·지원사업 알아보기',url:'https://stay.showday.kr',photo:'/images/stay.webp',icon:House,cta:'머무를 곳 찾기'},
  {id:'venue',name:'VENUE',label:'공연이 있는 하루',title:'공연 전부터 끝난 뒤까지',desc:'공연장 안내·주변 맛집·편의시설',url:'https://seoularena.showday.kr',photo:'/images/venue.webp',icon:Ticket,cta:'공연장 둘러보기'},
];

export default async function Home(){
 const biz=await getBiz();
 return <div className="site home hub-home">
  <SiteHeader tag={false}/>
  <main className="hub-main">
   <section className="hub-hero wrap" aria-labelledby="hub-title">
    <div className="hub-hero-copy">
     <div className="hub-kicker"><span className="hub-kicker-dot"/> MUSIC · CULTURE · TRAVEL · LIFE</div>
     <h1 id="hub-title">음악을 발견하고,<br/><em>나만의 무대를 열다.</em></h1>
     <p>좋아하는 음악을 듣고, 떠오른 멜로디를 만들고,<br className="hub-desktop-break"/> 공연과 여행으로 이어지는 나만의 SHOWDAY.</p>
     <div className="hub-actions"><a className="hub-btn hub-btn-primary" href="https://music.showday.kr" target="_blank" rel="noopener noreferrer">음악 듣기 <ArrowUpRight size={18}/></a><a className="hub-btn hub-btn-outline" href="https://music.showday.kr" target="_blank" rel="noopener noreferrer">음악 만들기 알아보기 <ArrowUpRight size={17}/></a></div>
     <div className="hub-hero-foot"><Headphones size={17}/><span>듣는 즐거움에서, 만드는 즐거움까지</span></div>
    </div>
    <div className="hub-music-visual" aria-label="SHOWDAY MUSIC을 상징하는 그래픽">
      <div className="hub-orbit hub-orbit-one"/><div className="hub-orbit hub-orbit-two"/>
      <div className="hub-disc"><div className="hub-disc-label"><AudioLines size={26}/><span>SHOWDAY<br/>MUSIC</span></div></div>
      <div className="hub-wave" aria-hidden="true">{[26,47,68,36,82,55,96,42,72,32,62,89,49,76,38,58,28].map((v,i)=><span key={i} style={{height:`${v}%`}}/>)}</div>
      <div className="hub-visual-tag"><Mic2 size={15}/> CREATE YOUR SOUND <Sparkles size={14}/></div>
    </div>
   </section>
   <section className="hub-music-zone wrap" aria-labelledby="hub-music-title">
     <div className="hub-music-heading"><div><span className="hub-overline">THE SOUND OF SHOWDAY</span><h2 id="hub-music-title">음악, 듣는 순간부터 만드는 순간까지</h2><p>좋아하는 음악을 발견하고, 나만의 멜로디를 시작해 보세요.</p></div><a href="https://music.showday.kr" target="_blank" rel="noopener noreferrer" className="hub-music-all">MUSIC 둘러보기 <ArrowUpRight size={16}/></a></div>
     <div className="hub-music-path">
       <a href="https://music.showday.kr" target="_blank" rel="noopener noreferrer" className="hub-music-tile"><span className="hub-music-icon"><Headphones size={23}/></span><span className="hub-music-step">LISTEN</span><strong>음악 듣기</strong><span>신곡 · 장르 · 플레이리스트</span><ArrowUpRight className="hub-tile-arrow" size={17}/></a>
       <a href="https://music.showday.kr" target="_blank" rel="noopener noreferrer" className="hub-music-tile hub-music-tile-feature"><span className="hub-music-icon"><Mic2 size={23}/></span><span className="hub-music-step">CREATE</span><strong>음악 만들기</strong><span>허밍에서 시작하는 나만의 곡</span><ArrowUpRight className="hub-tile-arrow" size={17}/></a>
       <a href="https://music.showday.kr" target="_blank" rel="noopener noreferrer" className="hub-music-tile"><span className="hub-music-icon"><SlidersHorizontal size={23}/></span><span className="hub-music-step">STUDIO</span><strong>음악 스튜디오</strong><span>녹음 · 편곡 · 믹싱</span><ArrowUpRight className="hub-tile-arrow" size={17}/></a>
       <a href="https://music.showday.kr" target="_blank" rel="noopener noreferrer" className="hub-music-tile"><span className="hub-music-icon"><Users size={23}/></span><span className="hub-music-step">ARTIST & RELEASE</span><strong>아티스트 · 발매</strong><span>아티스트 발견 · 작품 발표</span><ArrowUpRight className="hub-tile-arrow" size={17}/></a>
     </div>
     <p className="hub-music-disclaimer">※ MUSIC 세부 기능은 서비스 준비 상황에 따라 순차적으로 연결됩니다. 현재는 MUSIC 홈으로 이동합니다.</p>
   </section>
   <section className="hub-explore wrap" aria-labelledby="hub-explore-title">
     <div className="hub-section-heading"><div><span className="hub-overline">EXPLORE SHOWDAY</span><h2 id="hub-explore-title">음악 밖에서도, 즐거움은 계속됩니다</h2></div><p>찾고, 계획하고, 머무르고, 즐기는 모든 순간</p></div>
     <div className="hub-card-grid">{destinations.map(s=><a key={s.id} className="hub-service-card" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}: ${s.title} (새 창)`}>
       <span className="hub-card-image" style={{backgroundImage:`url('${s.photo}')`}}/><span className="hub-card-overlay"/>
       <span className="hub-card-top"><s.icon size={18}/><span>{s.name}</span><ArrowUpRight className="hub-card-arrow" size={18}/></span>
       <span className="hub-card-bottom"><span className="hub-card-label">{s.label}</span><strong>{s.title}</strong><span className="hub-card-desc">{s.desc}</span><span className="hub-card-cta">{s.cta} <ArrowUpRight size={14}/></span></span>
     </a>)}</div>
   </section>
   <section className="hub-bottom-note wrap"><span className="hub-note-line"/><p>듣고, 만들고, 발견하고, 떠나는 순간. <strong>SHOWDAY에서 이어집니다.</strong></p><span className="hub-note-line"/></section>
  </main>
  <SiteFooter biz={biz}/>
 </div>;
}
