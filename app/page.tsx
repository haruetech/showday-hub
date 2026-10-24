import {ArrowUpRight, Headphones, Mic2, AudioLines, Users, Disc3, MapPinned, Route, House, Ticket, Play, Sparkles, MoveRight, Radio, ChevronRight, Music2, CalendarDays} from 'lucide-react';
import {getBiz, SiteHeader, SiteFooter} from '../lib/site';

const music = [
 {n:'01',eyebrow:'DISCOVER',title:'음악 듣기',desc:'새로운 음악과 플레이리스트를 발견하세요',url:'https://music.showday.kr/discover/',icon:Headphones,cls:'listen'},
 {n:'02',eyebrow:'HUMMING',title:'허밍 녹음하기',desc:'떠오른 멜로디를 목소리로 남겨보세요',url:'https://music.showday.kr/create/humming/',icon:Mic2,cls:'humming'},
 {n:'03',eyebrow:'CREATE · STUDIO',title:'음악 만들기',desc:'허밍에서 시작해 나만의 곡을 만들어보세요',url:'https://music.showday.kr/create/',icon:AudioLines,cls:'create'},
 {n:'04',eyebrow:'ARTIST',title:'아티스트 발견',desc:'새로운 아티스트와 작품을 만나보세요',url:'https://music.showday.kr/artist/',icon:Users,cls:'artist'},
 {n:'05',eyebrow:'RELEASE',title:'작품 · 음원 발표',desc:'나의 음악을 세상에 선보이는 길',url:'https://music.showday.kr/release/',icon:Disc3,cls:'release'},
];
const explore = [
 {eyebrow:'MAP · NOW',title:'공연 · 전시 · 즐길 거리',desc:'오늘 가까이에서 즐길 문화생활',url:'https://map.showday.kr/',img:'/images/now.webp',icon:MapPinned,cta:'즐길 거리 찾기'},
 {eyebrow:'TRAVEL',title:'여행 계획하기',desc:'교통부터 동선과 일정까지 한 번에',url:'https://travel.showday.kr/',img:'/images/travel.webp',icon:Route,cta:'여행 시작하기'},
 {eyebrow:'STAY',title:'일주일 · 한 달 머물기',desc:'머물 지역과 숙소, 생활을 준비하세요',url:'https://stay.showday.kr/',img:'/images/stay.webp',icon:House,cta:'머물기 둘러보기'},
 {eyebrow:'VENUE',title:'전국 공연장 둘러보기',desc:'공연장부터 교통·맛집·주차까지',url:'https://venue.showday.kr/',img:'/images/venue.webp',icon:Ticket,cta:'공연장 찾기'},
];
export default async function Home(){
 const biz=await getBiz();
 return <div className="site sd26-site"><SiteHeader tag={false}/><main>
 <section className="sd26-hero" aria-labelledby="sd26-title"><div className="wrap sd26-hero-grid">
  <div className="sd26-hero-copy"><div className="sd26-eyebrow"><span className="sd26-live"/> THE WORLD OF SHOWDAY <span className="sd26-eyebrow-line"/></div>
   <h1 id="sd26-title">음악을 만들고,<br/><span>세상과 만나고,</span><br/>특별한 하루를 즐기다.</h1>
   <p>듣고 · 허밍하고 · 녹음하고 · 발표하고.<br/>공연과 여행, 머무는 순간까지 <strong>SHOWDAY 하나로.</strong></p>
   <div className="sd26-hero-actions"><a className="sd26-btn sd26-btn-main" href="https://music.showday.kr/create/humming/">허밍으로 시작하기 <Mic2 size={18}/></a><a className="sd26-btn sd26-btn-ghost" href="https://music.showday.kr/discover/">음악 먼저 들어보기 <Play size={16}/></a></div>
   <div className="sd26-hero-mini"><span><Music2 size={15}/> 음악</span><i/><span><Radio size={15}/> 작품 발표</span><i/><span><Ticket size={15}/> 공연</span><i/><span><Route size={15}/> 여행</span></div>
  </div>
  <div className="sd26-hero-art" aria-label="음악 창작에서 공연과 여행까지 이어지는 SHOWDAY 서비스 흐름"><div className="sd26-art-glow"/><div className="sd26-art-ring sd26-art-ring-a"/><div className="sd26-art-ring sd26-art-ring-b"/><div className="sd26-art-disc"><div className="sd26-art-disc-core"><AudioLines size={32}/><b>SHOWDAY</b><span>MUSIC & LIFE</span></div></div><div className="sd26-art-wave">{[22,40,63,35,76,46,92,57,38,78,51,88,44,66,31,55,24].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)}</div><div className="sd26-floating sd26-floating-a"><Mic2 size={18}/> 허밍에서 시작</div><div className="sd26-floating sd26-floating-b"><Ticket size={18}/> 공연으로 이어지는 하루</div><div className="sd26-floating sd26-floating-c"><Sparkles size={17}/> YOUR DAY, YOUR STAGE</div></div>
 </div></section>
 <section className="sd26-music wrap" aria-labelledby="sd26-music-title"><div className="sd26-section-heading"><div><div className="sd26-overline">01 — CREATE YOUR SOUND</div><h2 id="sd26-music-title">음악, <em>누구나 시작할 수 있도록.</em></h2><p>듣는 사람도, 처음 만드는 사람도, 작품을 발표하는 아티스트도.</p></div><a className="sd26-heading-link" href="https://music.showday.kr/">SHOWDAY MUSIC <ArrowUpRight size={16}/></a></div>
  <div className="sd26-music-grid">{music.map(m=><a className={`sd26-music-card sd26-${m.cls}`} key={m.n} href={m.url}><div className="sd26-music-card-top"><span className="sd26-music-icon"><m.icon size={23}/></span><ArrowUpRight size={17}/></div><div className="sd26-music-card-content"><span className="sd26-card-eyebrow">{m.n} / {m.eyebrow}</span><h3>{m.title}</h3><p>{m.desc}</p></div></a>)}</div>
  <div className="sd26-studio-strip"><span><Sparkles size={16}/> 더 깊이 만들고 싶다면</span><strong>HARU’E MUSIC STUDIO</strong><p>녹음 · 편곡 · 믹싱을 위한 전문 Windows 제작 프로그램</p><a href="https://music.showday.kr/studio/">스튜디오 알아보기 <ArrowUpRight size={15}/></a></div>
 </section>
 <section className="sd26-explore" aria-labelledby="sd26-explore-title"><div className="wrap"><div className="sd26-section-heading"><div><div className="sd26-overline">02 — EXPLORE YOUR DAY</div><h2 id="sd26-explore-title">음악 다음의 순간도, <em>SHOWDAY에서.</em></h2><p>오늘의 즐길 거리부터 여행, 머물기, 공연장까지 한눈에.</p></div></div><div className="sd26-explore-grid">{explore.map(x=><a key={x.eyebrow} className="sd26-explore-card" href={x.url}><span className="sd26-explore-photo" style={{backgroundImage:`url('${x.img}')`}}/><span className="sd26-explore-shade"/><span className="sd26-explore-top"><x.icon size={19}/><span>{x.eyebrow}</span><ArrowUpRight size={17}/></span><span className="sd26-explore-bottom"><strong>{x.title}</strong><span>{x.desc}</span><b>{x.cta} <MoveRight size={15}/></b></span></a>)}</div></div></section>
 <section className="sd26-final wrap"><div><span>YOUR SOUND. YOUR STAGE. YOUR DAY.</span><h2>좋아하는 순간에서<br/>나만의 이야기까지.</h2></div><a href="https://music.showday.kr/">SHOWDAY MUSIC 시작하기 <ChevronRight size={18}/></a></section>
 </main><SiteFooter biz={biz}/></div>;
}
