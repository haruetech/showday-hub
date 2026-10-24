'use client';
import {useEffect,useState} from 'react';
import {Grid2X2,ArrowUpRight,X,Music2,MapPinned,Plane,House,Ticket} from 'lucide-react';
const items=[
 {name:'음악',title:'내 안의 멜로디가 음악이 되는 곳',description:'음악을 듣고, 허밍과 녹음으로 아이디어를 남기고, 나만의 작품을 만드는 여정을 시작하세요.',url:'https://music.showday.kr/',icon:Music2},
 {name:'지도',title:'오늘 가까이에서 만나는 즐거움',description:'공연·전시·축제와 주변 즐길 거리를 지도로 살펴보고, 지금 가볼 만한 곳을 발견하세요.',url:'https://map.showday.kr/',icon:MapPinned},
 {name:'여행',title:'떠나는 길부터 여행의 순간까지',description:'목적지와 이동 방법을 살펴보고, 일정과 코스를 함께 계획하는 여행 서비스입니다.',url:'https://travel.showday.kr/',icon:Plane},
 {name:'한달살기',title:'여행보다 조금 더 오래 머물기',description:'지역·숙박·체류 생활 정보와 지원사업을 살펴보며 새로운 일상을 구상해 보세요.',url:'https://stay.showday.kr/',icon:House},
 {name:'공연장',title:'공연 전후의 하루도 특별하게',description:'공연장 정보부터 주변 이동·식사·숙박까지 공연을 중심으로 하루를 준비하세요.',url:'https://venue.showday.kr/',icon:Ticket}
];
export default function ServiceIntroModal(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{if(!open)return;const old=document.body.style.overflow;document.body.style.overflow='hidden';const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>{document.body.style.overflow=old;window.removeEventListener('keydown',onKey)}},[open]);
 return <>
  <button type="button" className="one-primary one-about-trigger" onClick={()=>setOpen(true)} aria-haspopup="dialog"><Grid2X2 size={19}/> SHOWDAY 서비스 소개 <ArrowUpRight size={17}/></button>
  {open&&<div className="one-about-overlay" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
   <section className="one-about-dialog" role="dialog" aria-modal="true" aria-labelledby="one-about-title">
    <header className="one-about-head"><div><span>DISCOVER SHOWDAY</span><h2 id="one-about-title">하나의 SHOWDAY, 다섯 가지 특별한 경험</h2><p>음악에서 시작된 영감이 문화생활과 여행으로 이어집니다.</p></div><button type="button" className="one-about-close" autoFocus aria-label="서비스 소개 닫기" onClick={()=>setOpen(false)}><X size={23}/></button></header>
    <div className="one-about-flow"><span>음악으로 영감을 얻고</span><span>지도에서 발견하고</span><span>여행과 머무름을 계획하고</span><span>공연장에서 경험하다</span></div>
    <div className="one-about-grid">{items.map((item,i)=><article key={item.name} className="one-about-item"><div className="one-about-item-top"><span className="one-about-number">0{i+1}</span><item.icon size={22}/><strong>{item.name}</strong></div><h3>{item.title}</h3><p>{item.description}</p><a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} 서비스 새 탭에서 열기`}>{item.name} 바로가기 <ArrowUpRight size={15}/></a></article>)}</div>
    <footer className="one-about-foot"><span>원하는 서비스를 선택하면 새 탭에서 열립니다. SHOWDAY 메인은 그대로 유지됩니다.</span><button type="button" onClick={()=>setOpen(false)}>메인으로 돌아가기</button></footer>
   </section>
  </div>}
 </>;
}
