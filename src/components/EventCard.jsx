import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
export default function EventCard({ event: e }) {
  return (<Link to={`/events/${e.slug}`} className="card group flex h-full flex-col overflow-hidden !p-0">
    <div className="relative h-48 overflow-hidden" style={{ background: `radial-gradient(circle at 20% 20%, ${e.accent}55, transparent 60%), #F8F9FA` }}>
      <svg aria-hidden viewBox="0 0 200 100" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110"><path d="M20 70 L80 30 L130 60 L180 20" stroke={e.accent} strokeOpacity=".5" fill="none" /><g fill={e.accent}><circle cx="20" cy="70" r="4" /><circle cx="80" cy="30" r="4" /><circle cx="130" cy="60" r="4" /><circle cx="180" cy="20" r="4" /></g></svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-xs font-semibold text-ink">{e.category}</span>
      {e.isPlaceholder && <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#8A6500] shadow-sm">Example format</span>}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="display text-xl">{e.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{e.summary}</p>
      <p className="mt-5 flex items-center gap-2 text-xs text-mute"><CalendarDays size={14} />{e.date ?? 'Date to be announced'} · {e.status}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gblue">View details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
    </div></Link>)
}
