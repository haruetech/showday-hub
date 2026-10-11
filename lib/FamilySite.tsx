'use client';
import { useEffect, useRef, useState } from 'react';
import Flip from './flip';

// 클릭하면 열리고, 마우스가 벗어나거나 바깥을 누르거나 Esc를 누르면 닫힙니다.
export default function FamilySite({ items }: { items: { name: string; url: string }[] }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    const outside = (e: Event) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', outside);
    document.addEventListener('touchstart', outside);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', outside); document.removeEventListener('touchstart', outside); document.removeEventListener('keydown', esc); };
  }, [open]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  return <div className="family" ref={box}
    onMouseEnter={() => window.clearTimeout(timer.current)}
    onMouseLeave={() => { window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setOpen(false), 250); }}>
    <button type="button" className="family-btn fh" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(o => !o)}>
      <Flip ko="패밀리 사이트" en="FAMILY SITE" /><span className="family-caret" aria-hidden="true">{open ? '▴' : '▾'}</span>
    </button>
    {open && <ul>{items.map(f => <li key={f.url}><a href={f.url} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{f.name}</a></li>)}</ul>}
  </div>;
}
