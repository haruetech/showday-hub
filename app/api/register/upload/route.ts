import { NextRequest, NextResponse } from 'next/server';

const API_BASE = process.env.SHOWDAY_API_BASE || 'https://api.showday.kr';
const MAX = 4 * 1024 * 1024; // 호스팅 요청 용량 한도를 고려해 4MB

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const file = fd.get('file');
    if (file instanceof File && file.size > MAX) return NextResponse.json({ error: '이미지 용량은 4MB 이하여야 합니다.' }, { status: 400 });
    const r = await fetch(`${API_BASE}/api/register/upload`, { method: 'POST', body: fd, cache: 'no-store' });
    const data = await r.json().catch(() => ({}));
    return NextResponse.json(data, { status: r.status });
  } catch {
    return NextResponse.json({ error: '업로드 서버에 연결하지 못했습니다.' }, { status: 502 });
  }
}
