'use client';
import { FormEvent, useMemo, useState } from 'react';

const GENRES = ['콘서트', '뮤지컬', '연극', '클래식', '전시회', '축제', '체험·가족행사', '기타'];
const AGES = ['전체관람가', '8세 이상 관람가', '12세 이상 관람가', '15세 이상 관람가', '19세 이상 관람가'];
const init = { title: '', genre: '콘서트', venue: '', region: '', startDate: '', endDate: '', booking_url: '', poster_url: '', age_label: '전체관람가', running_time: '', synopsis: '', cast_info: '', producer: '', agency_name: '', agency_contact: '', agency_email: '', poster_rights_confirmed: false, privacy_consent: false, website: '' };
type S = { performance_date: string; start_time: string };
type P = { seat_grade: string; price: string; price_note: string };
const eS = (): S => ({ performance_date: '', start_time: '' });
const eP = (): P => ({ seat_grade: 'R석', price: '', price_note: '' });

export default function RegisterForm() {
  const [f, setF] = useState(init);
  const [sch, setSch] = useState<S[]>([eS()]);
  const [pr, setPr] = useState<P[]>([eP()]);
  const [busy, setBusy] = useState(false);
  const [up, setUp] = useState(false);
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof init, v: string | boolean) => setF(p => ({ ...p, [k]: v }));
  const period = useMemo(() => { const m = (v: string) => v.replaceAll('-', '.'); return f.startDate && f.endDate ? `${m(f.startDate)}~${m(f.endDate)}` : m(f.startDate || f.endDate); }, [f.startDate, f.endDate]);

  async function upload(file: File) {
    setErr('');
    if (file.size > 4 * 1024 * 1024) return setErr('이미지 용량은 4MB 이하여야 합니다.');
    setUp(true);
    try {
      const fd = new FormData(); fd.append('file', file);
      const r = await fetch('/api/register/upload', { method: 'POST', body: fd });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) setErr(d.error || '포스터 업로드에 실패했습니다.'); else set('poster_url', d.url || '');
    } catch { setErr('포스터 업로드 중 오류가 발생했습니다.'); }
    setUp(false);
  }

  async function submit(e: FormEvent) {
    e.preventDefault(); setErr('');
    if (!f.title || !f.venue || !period || !f.agency_name || !f.agency_contact || !f.agency_email) return setErr('필수 항목을 확인해주세요. 공연명, 공연장, 기간, 업체명, 연락처, 이메일은 필수입니다.');
    if (!/^\S+@\S+\.\S+$/.test(f.agency_email.trim())) return setErr('이메일 주소를 확인해주세요.');
    if (sch.some(s => (s.performance_date && !s.start_time) || (!s.performance_date && s.start_time))) return setErr('공연 회차는 날짜와 시작시간을 함께 입력해주세요.');
    if (pr.some(p => !p.seat_grade && p.price !== '')) return setErr('가격을 입력한 좌석은 등급 이름도 입력해주세요.');
    if (!f.poster_rights_confirmed) return setErr('포스터 이미지 사용 권한 확인에 동의해주세요.');
    if (!f.privacy_consent) return setErr('개인정보 수집·이용에 동의해주세요.');
    setBusy(true);
    try {
      const r = await fetch('/api/register', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...f, period, schedules: sch.filter(s => s.performance_date && s.start_time), ticket_prices: pr.filter(p => p.seat_grade && p.price !== '').map(p => ({ ...p, price: Number(String(p.price).replaceAll(',', '')) })) }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) setErr(d.error || '등록 신청에 실패했습니다.'); else { setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    } catch { setErr('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'); }
    setBusy(false);
  }

  if (done) return <div className="fcard fdone"><div className="ok">✓</div><h1>공연 등록 신청이 완료되었습니다.</h1><p>SHOWDAY 운영팀이 내용을 확인한 후 승인된 공연만 공개합니다. 정보 보완이 필요한 경우 입력하신 연락처 또는 이메일로 연락드릴 수 있습니다.</p><div className="btns"><button onClick={() => { setF(init); setSch([eS()]); setPr([eP()]); setDone(false); }}>다른 공연 등록하기</button><a className="pri" href="/">SHOWDAY 홈</a></div></div>;

  const inp = (k: keyof typeof init, label: string, o: { req?: boolean; type?: string; max?: number; ph?: string } = {}) =>
    <label className="fld">{label}{o.req && ' *'}<input type={o.type || 'text'} value={f[k] as string} maxLength={o.max} placeholder={o.ph} onChange={e => set(k, e.target.value)} /></label>;

  return <form className="fcard" onSubmit={submit} noValidate>
    <input className="hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={e => set('website', e.target.value)} />
    <h2>공연 정보</h2>
    <div className="fgrid">
      {inp('title', '공연명', { req: true, max: 200 })}
      <label className="fld">장르<select value={f.genre} onChange={e => set('genre', e.target.value)}>{GENRES.map(g => <option key={g}>{g}</option>)}</select></label>
      {inp('venue', '공연장', { req: true, max: 200 })}
      {inp('region', '지역', { max: 100, ph: '예: 서울 도봉구' })}
      {inp('startDate', '시작일', { req: true, type: 'date' })}
      {inp('endDate', '종료일', { type: 'date' })}
      <label className="fld">관람 연령<select value={f.age_label} onChange={e => set('age_label', e.target.value)}>{AGES.map(a => <option key={a}>{a}</option>)}</select></label>
      {inp('running_time', '러닝타임', { max: 50, ph: '예: 120분' })}
    </div>
    {inp('booking_url', '예매 링크', { type: 'url', max: 500, ph: 'https://' })}

    <h2>공연 회차</h2>
    <div className="rows">{sch.map((s, i) => <div className="row3" key={i}>
      <input type="date" aria-label="공연 날짜" value={s.performance_date} onChange={e => setSch(r => r.map((x, j) => j === i ? { ...x, performance_date: e.target.value } : x))} />
      <input type="time" aria-label="시작 시간" value={s.start_time} onChange={e => setSch(r => r.map((x, j) => j === i ? { ...x, start_time: e.target.value } : x))} />
      <button type="button" className="mini" onClick={() => setSch(r => r.length === 1 ? [eS()] : r.filter((_, j) => j !== i))}>삭제</button></div>)}
      <button type="button" className="mini add" onClick={() => setSch(r => [...r, eS()])}>+ 회차 추가</button></div>

    <h2>티켓 가격</h2>
    <div className="rows">{pr.map((p, i) => <div className="row3 price" key={i}>
      <input placeholder="좌석 등급" aria-label="좌석 등급" value={p.seat_grade} onChange={e => setPr(r => r.map((x, j) => j === i ? { ...x, seat_grade: e.target.value } : x))} />
      <input placeholder="가격(원)" aria-label="가격" inputMode="numeric" value={p.price} onChange={e => setPr(r => r.map((x, j) => j === i ? { ...x, price: e.target.value } : x))} />
      <input placeholder="비고(선택)" aria-label="비고" value={p.price_note} onChange={e => setPr(r => r.map((x, j) => j === i ? { ...x, price_note: e.target.value } : x))} />
      <button type="button" className="mini" onClick={() => setPr(r => r.length === 1 ? [eP()] : r.filter((_, j) => j !== i))}>삭제</button></div>)}
      <button type="button" className="mini add" onClick={() => setPr(r => [...r, { seat_grade: '', price: '', price_note: '' }])}>+ 좌석 추가</button></div>

    <h2>포스터 · 소개</h2>
    <div className="fld">포스터 이미지 <small>JPG·PNG·WEBP, 4MB 이하</small>
      <div className="poster-up">{f.poster_url && <img src={f.poster_url} alt="포스터 미리보기" />}<input type="file" accept="image/jpeg,image/png,image/webp" disabled={up} onChange={e => { const file = e.target.files?.[0]; if (file) upload(file); }} />{up && <small>업로드 중…</small>}</div></div>
    <label className="fld">공연 소개<textarea value={f.synopsis} maxLength={5000} onChange={e => set('synopsis', e.target.value)} /></label>
    <div className="fgrid">{inp('cast_info', '출연진', { max: 500 })}{inp('producer', '주최·제작', { max: 200 })}</div>

    <h2>담당 업체</h2>
    <div className="fgrid">{inp('agency_name', '업체명', { req: true, max: 200 })}{inp('agency_contact', '담당자 연락처', { req: true, max: 100 })}</div>
    {inp('agency_email', '이메일', { req: true, type: 'email', max: 200 })}

    <p className="notice">수집 항목: 업체명, 담당자 연락처, 이메일 · 이용 목적: 등록 내용 확인 및 승인 안내 · 보유 기간: 공연 종료 후 지체 없이 파기(관계 법령에 따라 보관이 필요한 경우 제외)</p>
    <label className="agree"><input type="checkbox" checked={f.poster_rights_confirmed} onChange={e => set('poster_rights_confirmed', e.target.checked)} />등록하는 포스터 이미지의 사용 권한을 보유하고 있습니다. (필수)</label>
    <label className="agree"><input type="checkbox" checked={f.privacy_consent} onChange={e => set('privacy_consent', e.target.checked)} />위 개인정보 수집·이용에 동의합니다. (필수)</label>
    {err && <div className="ferr" role="alert">{err}</div>}
    <button className="fsubmit" disabled={busy || up}>{busy ? '신청 중…' : '등록 신청하기'}</button>
  </form>;
}
