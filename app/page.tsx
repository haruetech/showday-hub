import { SERVICES } from '@/lib/services';

function Icon({ id }: { id: string }) {
  const p = { fill: 'none', stroke: '#fff', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
      {id === 'now' && (<g {...p}><path d="M24 6c-7 0-12 5-12 11 0 8 12 24 12 24s12-16 12-24c0-6-5-11-12-11z" /><circle cx="24" cy="17" r="4.5" /></g>)}
      {id === 'travel' && (<g {...p}><path d="M6 24 42 8 30 42 23 28z" /><path d="M23 28 42 8" /></g>)}
      {id === 'stay' && (<g {...p}><path d="M6 22 24 8l18 14" /><path d="M10 20v20h28V20" /><path d="M20 40V28h8v12" /></g>)}
      {id === 'venue' && (<g {...p}><path d="M24 7l4 9 10 1-7.5 7 2.2 10L24 29l-8.7 5 2.2-10L10 17l10-1z" /></g>)}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="in">
          <a className="brand" href="/">SHOW<b>DAY</b></a>
          <nav aria-label="서비스">
            {SERVICES.map((s) => s.live
              ? <a key={s.id} href={s.url}>{s.label}</a>
              : <span key={s.id} className="soon">{s.label}</span>)}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <svg className="art" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#241658" /><stop offset=".4" stopColor="#6A3FA8" />
                <stop offset=".68" stopColor="#E0587E" /><stop offset=".86" stopColor="#FF9A5A" />
                <stop offset="1" stopColor="#FFC76A" />
              </linearGradient>
              <radialGradient id="sun" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#FFF3C4" /><stop offset="1" stopColor="#FFC76A" stopOpacity="0" /></radialGradient>
            </defs>
            <rect width="1200" height="420" fill="url(#sky)" />
            <circle cx="860" cy="300" r="120" fill="url(#sun)" />
            <circle cx="860" cy="300" r="46" fill="#FFF0B8" />
            {[[120,60],[260,110],[420,40],[560,90],[700,50],[980,70],[1100,120],[60,150]].map(([x,y],i)=>(<circle key={i} cx={x} cy={y} r={i%3?1.6:2.4} fill="#fff" opacity=".8" />))}
            <path d="M0 330 C140 290 260 340 420 310 S700 280 860 320 1060 300 1200 330V420H0Z" fill="#3A2273" opacity=".75" />
            <path d="M0 370 C180 340 320 380 520 355 S860 340 1000 366 1130 360 1200 372V420H0Z" fill="#241658" />
          </svg>
          <div className="copy">
            <p className="eyebrow">SHOWDAY</p>
            <h1>오늘 어디로<br />떠나볼까요?</h1>
            <p className="sub">가까운 나들이부터 특별한 여행, 오래 머무는 시간까지.<br />목적에 맞는 서비스를 골라보세요.</p>
          </div>
        </section>

        <section className="cards" aria-label="SHOWDAY 서비스">
          {SERVICES.map((s) => {
            const body = (
              <>
                <i className="ic" style={{ background: `linear-gradient(150deg, ${s.hue[0]}, ${s.hue[1]})` }}><Icon id={s.id} /></i>
                <div className="tx">
                  <span className="lb">{s.label}</span>
                  <b className="q">{s.q}</b>
                  <span className="ds">{s.desc}</span>
                </div>
                <span className={`go${s.live ? '' : ' off'}`}>{s.cta}{s.live ? ' →' : ''}</span>
              </>
            );
            return s.live
              ? <a key={s.id} className="card" href={s.url}>{body}</a>
              : <div key={s.id} className="card dis" aria-disabled="true">{body}</div>;
          })}
        </section>

        <p className="flow">공연을 발견하고 → 주변에서 시간을 보내고 → 여행으로 넓히고 → 오래 머무는 경험까지, SHOWDAY가 이어 드립니다.</p>
      </main>

      <footer>
        <div className="in">
          <span>© SHOWDAY</span>
          <span>정보는 참고용이며 일정·요금은 현장에서 달라질 수 있어요.</span>
        </div>
      </footer>
    </>
  );
}
