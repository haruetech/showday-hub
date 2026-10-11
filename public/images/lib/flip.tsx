// 평소엔 한글, 마우스를 올리면(.fh 영역) 영문으로 부드럽게 바뀝니다. 터치 화면에서는 한글만 표시합니다.
export default function Flip({ ko, en }: { ko: string; en: string }) {
  return <span className="flip"><span className="nf nf-ko">{ko}</span><span className="nf nf-en" aria-hidden="true">{en}</span></span>;
}
