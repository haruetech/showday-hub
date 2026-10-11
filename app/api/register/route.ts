import { NextRequest, NextResponse } from 'next/server';

// 공연 등록 신청은 기존 SHOWDAY 서버(api.showday.kr)로 그대로 전달되어 기존 관리자 화면에서 승인합니다.
const API_BASE = process.env.SHOWDAY_API_BASE || 'https://api.showday.kr';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const r = await fetch(`${API_BASE}/api/register`, { method: 'POST', headers: { 'content-type': 'application/json' }, body, cache: 'no-store' });
    const data = await r.json().catch(() => ({}));
    return NextResponse.json(data, { status: r.status });
  } catch {
    return NextResponse.json({ error: '접수 서버에 연결하지 못했습니다. 잠시 후 다시 시도해주세요.' }, { status: 502 });
  }
}
