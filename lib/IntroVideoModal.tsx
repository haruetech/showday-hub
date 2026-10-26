'use client';

import {useEffect, useState} from 'react';
import {ArrowUpRight, PlayCircle, X, Youtube} from 'lucide-react';

// Replace with the SHOWDAY YouTube video ID after upload, e.g. 'dQw4w9WgXcQ'.
const SHOWDAY_YOUTUBE_VIDEO_ID = '';

export default function IntroVideoModal(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{
  if(!open)return;
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};
  window.addEventListener('keydown',onKey);
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  return ()=>{window.removeEventListener('keydown',onKey);document.body.style.overflow=previous};
 },[open]);
 return <>
  <button className="one-secondary" type="button" onClick={()=>setOpen(true)} aria-haspopup="dialog"><PlayCircle size={21}/> SHOWDAY 소개 영상 <ArrowUpRight size={16}/></button>
  {open&&<div className="one-video-overlay" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
   <section className="one-video-dialog" role="dialog" aria-modal="true" aria-labelledby="one-video-heading">
    <div className="one-video-dialog-head"><div><span>ABOUT SHOWDAY</span><h2 id="one-video-heading">SHOWDAY 소개 영상</h2></div><button type="button" className="one-video-close" aria-label="소개 영상 닫기" autoFocus onClick={()=>setOpen(false)}><X size={24}/></button></div>
    <div className="one-video-frame">{SHOWDAY_YOUTUBE_VIDEO_ID?<iframe src={`https://www.youtube-nocookie.com/embed/${SHOWDAY_YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`} title="SHOWDAY 소개 영상" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>:<div className="one-video-waiting"><Youtube size={48}/><strong>SHOWDAY 소개 영상 준비 중</strong><p>공식 소개 영상이 공개되면 이 창에서 바로 시청할 수 있습니다.</p></div>}</div>
    <p className="one-video-hint">창 밖을 클릭하거나 ESC 키를 누르면 닫힙니다.</p>
   </section>
  </div>}
 </>;
}
