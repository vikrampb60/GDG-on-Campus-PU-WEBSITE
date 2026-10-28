import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Plane } from 'lucide-react'
const bars = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; const out = []; let x = 0
  for (let i = 0; i < 34; i++) { h = (h * 1103515245 + 12345) >>> 0; const w = 1 + (h >> 16) % 3; if (i % 2 === 0) out.push([x, w]); x += w + 1 } return [out, x] }
const val = v => v ?? 'TBA'
// Boarding-pass style event ticket. `large` = detail view (no link, full description).
export default function Ticket({ event: e, index = 0, large = false }) {
  const [b, bw] = useMemo(() => bars(e.slug), [e.slug]); const num = String(index + 1).padStart(2, '0')
  const inner = (<>
    <div className="relative flex shrink-0 flex-col items-center justify-between py-5 text-white" style={{ width: 'var(--s)', background: e.accent }}>
      <span className="display text-3xl">{num}</span>
      <span className="rotate-180 text-[11px] font-bold uppercase tracking-[.22em] [writing-mode:vertical-rl]">{e.category}</span>
      <Plane size={20} className="-rotate-45 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden /></div>
    <div className="relative min-w-0 flex-1 p-5 sm:p-7">
      <span aria-hidden className="absolute inset-y-4 left-0 border-l-2 border-dashed border-black/15" />
      <p className="text-[11px] font-bold uppercase tracking-[.2em] text-mute">GDG on Campus · Poornima</p>
      {large ? <h1 className="display h-page mt-2">{e.title}</h1> : <h3 className="display mt-2 text-xl sm:text-2xl">{e.title}</h3>}
      <p className={`mt-2 text-sm leading-relaxed text-mute ${large ? 'max-w-2xl text-base' : 'line-clamp-2'}`}>{large ? e.description : e.summary}</p>
      <dl className="mt-5 grid grid-cols-3 gap-3 text-xs">{[['Date', e.date], ['Venue', e.venue], ['Status', e.status]].map(([k, v]) => <div key={k}><dt className="font-bold uppercase tracking-widest text-mute/70">{k}</dt><dd className="mt-0.5 font-semibold">{val(v)}</dd></div>)}</dl>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="relative"><svg viewBox={`0 0 ${bw} 24`} className="h-8 w-28" preserveAspectRatio="none" aria-hidden>{b.map(([x, w], i) => <rect key={i} x={x} width={w} height="24" fill="#202124" />)}</svg>
          <span aria-hidden className="scan absolute inset-y-0 left-0 w-0.5 bg-gred opacity-0 group-hover:opacity-100" /></div>
        {!large && <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gblue">Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>}</div>
      {e.isPlaceholder && <span className="absolute right-4 top-4 -rotate-6 rounded-md border-2 border-gyellow px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#8A6500]">Example · not scheduled</span>}
    </div></>)
  const cls = 'ticket group flex bg-white'
  return (<motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .6, delay: (index % 2) * .1, ease: [.22, 1, .36, 1] }}
    className="drop-shadow-[0_12px_24px_rgba(60,64,67,.13)] transition duration-300 hover:-translate-y-1 hover:drop-shadow-[0_18px_30px_rgba(60,64,67,.2)]">
    {large ? <div className={cls}>{inner}</div> : <Link to={`/events/${e.slug}`} className={cls} aria-label={`${e.title}, ${e.category}`}>{inner}</Link>}</motion.div>)
}
