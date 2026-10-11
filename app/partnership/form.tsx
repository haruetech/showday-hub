'use client';
import { FormEvent, useState } from 'react';

const TYPES = ['제휴', '광고', '기타'] as const;
const init = { inquiry_type: '제휴', company_name: '', contact_name: '', contact_email: '', contact_phone: '', message: '', privacy_consent: false, website: '' };

export default function PartnershipForm() {
  const [f, setF] = useState(init);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof init, v: string | boolean) => setF(p => ({ ...p, [k]: v }));

  async function submit(e: FormEvent) {
    e.preventDefault(); setErr('');
    if (!f.company_name.trim() || !f.contact_name.trim() || !f.contact_email.trim() || !f.message.trim()) return setErr('필수 항목을 모두 입력해주세요.');
    if (!/^\S+@\S+\.\S+$/.test(f.contact_email.trim())) return setErr('이메일 주소를 확인해주세요.');
    if (!f.privacy_consent) return setErr('개인정보 수집·이용 동의가 필요합니다.');
    setBusy(true);
    try {
      const r = await fetch('/api/partnership', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(f) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) setErr(d.error || '문의 접수에 실패했습니다.'); else { setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    } catch { setErr('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'); }
    setBusy(false);
  }

  if (done) return <div className="fcard fdone"><div className="ok">✓</div><h1>문의가 접수되었습니다.</h1><p>SHOWDAY 운영팀이 내용을 확인한 후, 입력하신 이메일 또는 연락처로 순차적으로 회신드립니다.</p><div className="btns"><button onClick={() => { setF(init); setDone(false); }}>다른 문의 남기기</button><a className="pri" href="/">SHOWDAY 홈</a></div></div>;

  return <form className="fcard" onSubmit={submit} noValidate>
    <input className="hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={e => set('website', e.target.value)} />
    <div className="fld">문의 유형<div className="chips">{TYPES.map(t => <label key={t}><input type="radio" name="t" checked={f.inquiry_type === t} onChange={() => set('inquiry_type', t)} /><span>{t}</span></label>)}</div></div>
    <div className="fgrid">
      <label className="fld">회사·단체명 *<input value={f.company_name} onChange={e => set('company_name', e.target.value)} maxLength={200} /></label>
      <label className="fld">담당자 *<input value={f.contact_name} onChange={e => set('contact_name', e.target.value)} maxLength={100} /></label>
      <label className="fld">이메일 *<input type="email" value={f.contact_email} onChange={e => set('contact_email', e.target.value)} maxLength={200} /></label>
      <label className="fld">연락처 <small>(선택)</small><input type="tel" value={f.contact_phone} onChange={e => set('contact_phone', e.target.value)} maxLength={50} /></label>
    </div>
    <label className="fld">문의 내용 *<textarea value={f.message} onChange={e => set('message', e.target.value)} maxLength={3000} placeholder="제안하실 내용을 자유롭게 적어주세요." /></label>
    <p className="notice">수집 항목: 회사명, 담당자명, 이메일, 연락처(선택) · 이용 목적: 문의 확인 및 회신 · 보유 기간: 문의 처리 완료 후 지체 없이 파기(관계 법령에 따라 보관이 필요한 경우 제외)</p>
    <label className="agree"><input type="checkbox" checked={f.privacy_consent} onChange={e => set('privacy_consent', e.target.checked)} />위 개인정보 수집·이용에 동의합니다. (필수)</label>
    {err && <div className="ferr" role="alert">{err}</div>}
    <button className="fsubmit" disabled={busy}>{busy ? '접수 중…' : '문의 보내기'}</button>
  </form>;
}
