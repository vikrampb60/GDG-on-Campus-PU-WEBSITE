import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
const SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
function Flap({ ch, delay }) {
  const reduce = useReducedMotion(); const [c, setC] = useState(reduce ? ch : ' ')
  useEffect(() => { if (reduce) { setC(ch); return } let n = 0, id
    const t = setTimeout(() => { id = setInterval(() => { n++; setC(n > 6 ? ch : SET[Math.floor(Math.random() * SET.length)]); if (n > 6) clearInterval(id) }, 70) }, delay)
    return () => { clearTimeout(t); clearInterval(id) } }, [ch, delay, reduce])
  return <span className="flap"><span key={c} className="flip">{c}</span></span>
}
const Row = ({ text, base }) => <div className="flex flex-wrap gap-x-4 gap-y-1">{text.split(' ').map((w, wi) => <span key={wi} className="flex">{[...w].map((ch, i) => <Flap key={i} ch={ch} delay={base + (wi * 5 + i) * 60} />)}</span>)}</div>
// Airport departure board: split-flap tiles settle on the current event status. Decorative, text provided via aria-label.
export default function DepartureBoard({ rows }) {
  return (<div role="img" aria-label={rows.map(r => r[0]).join('. ')} className="rounded-[1.75rem] border border-black/10 bg-[#202124] p-5 text-[clamp(.8rem,2.4vw,1.3rem)] shadow-[0_24px_60px_rgba(32,33,36,.28)] sm:p-8">
    <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-white/60"><span className="h-2 w-2 animate-pulse rounded-full bg-ggreen" />Departures</div>
    <div className="space-y-3" aria-hidden>{rows.map(([t], i) => <Row key={t} text={t} base={i * 500} />)}</div></div>)
}
