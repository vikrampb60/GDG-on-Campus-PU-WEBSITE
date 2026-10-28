import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SearchX } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Ticket from '../components/Ticket.jsx'
import DepartureBoard from '../components/DepartureBoard.jsx'
import Reveal from '../components/Reveal.jsx'
import { events, categories } from '../data/events.js'
import { site } from '../data/siteConfig.js'
export default function Events() {
  const [cat, setCat] = useState('All')
  const list = useMemo(() => cat === 'All' ? events : events.filter(e => e.category === cat), [cat])
  const count = c => c === 'All' ? events.length : events.filter(e => e.category === c).length
  return (<PageTransition title="Events">
    <PageHero glow="#EA4335" title="Learn something. Build something." text="Workshops, technical sessions, hackathons and meetups. The tickets below show example formats, not scheduled events." />
    <section className="wrap pb-12"><Reveal><DepartureBoard rows={[['NEXT EVENT TO BE ANNOUNCED'], ['SEE OFFICIAL GDG PAGE']]} /></Reveal>
      <p className="mt-4 text-sm text-mute">No verified upcoming events are listed yet. Check the <a className="font-semibold text-gblue underline" href={site.communityUrl} target="_blank" rel="noopener noreferrer">official community page</a> for current opportunities.</p></section>
    <section className="wrap pb-28">
      <div role="group" aria-label="Filter events" className="mb-10 inline-flex max-w-full flex-wrap gap-1 rounded-full border border-black/10 bg-white/90 p-1.5 shadow-sm backdrop-blur">
        {categories.map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors">
          {cat === c && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
          <span className={`relative ${cat === c ? 'text-white' : 'text-mute hover:text-ink'}`}>{c} <span className="opacity-60">{count(c)}</span></span></button>)}</div>
      <p className="sr-only" aria-live="polite">{list.length} events shown</p>
      {list.length ? <motion.div layout className="grid gap-6 lg:grid-cols-2"><AnimatePresence mode="popLayout">{list.map((e, i) =>
        <motion.div layout key={e.slug} exit={{ opacity: 0, scale: .96 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="lg:even:mt-10"><Ticket event={e} index={events.indexOf(e)} /></motion.div>)}</AnimatePresence></motion.div>
        : <div className="card py-16 text-center"><SearchX className="mx-auto text-mute" /><h2 className="display mt-4 text-2xl">No events in this category</h2><p className="mt-2 text-mute">Try another filter.</p><button className="btn btn-secondary mt-6" onClick={() => setCat('All')}>Reset filters</button></div>}
    </section></PageTransition>)
}
