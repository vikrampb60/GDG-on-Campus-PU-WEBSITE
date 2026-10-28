import { technologies } from '../data/technologies.js'
export default function Marquee() {
  const row = [...technologies, ...technologies]
  return (<div className="overflow-hidden border-y border-black/10 bg-white py-4" aria-label="Areas of exploration">
    <div className="marquee flex w-max gap-10" aria-hidden>{[...row, ...row].map((t, i) => <span key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-semibold text-mute"><span className="h-2 w-2 rounded-full" style={{ background: t.color }} />{t.name}</span>)}</div></div>)
}
