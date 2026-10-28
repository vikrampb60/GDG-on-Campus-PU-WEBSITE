import { useParams } from 'react-router-dom'
import { ArrowLeft, Users, BookOpen, Hammer, Share2 } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import Ticket from '../components/Ticket.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { events } from '../data/events.js'
import { site } from '../data/siteConfig.js'
import NotFound from './NotFound.jsx'
const flow = [[Users, 'Arrive & connect', 'Meet the people in the room.'], [BookOpen, 'Learn', 'A guided look at the topic.'], [Hammer, 'Build', 'Try it hands-on.'], [Share2, 'Share', 'Show what you made.']]
export default function EventDetails() {
  const { slug } = useParams(); const i = events.findIndex(x => x.slug === slug)
  if (i < 0) return <NotFound />
  const e = events[i]; const more = events.filter(x => x.slug !== slug).slice(0, 2)
  return (<PageTransition title={e.title}>
    <div className="wrap max-w-4xl pb-24 pt-32">
      <Button to="/events" variant="text" icon={false}><ArrowLeft size={16} /> Back to events</Button>
      <div className="mt-6"><Ticket event={e} index={i} large /></div>
      <div className="mt-6 flex flex-wrap gap-3">{e.registerUrl ? <Button href={e.registerUrl}>Register</Button> : <Button href={site.communityUrl} variant="secondary">Check the official page for updates</Button>}</div>
      <h2 className="display mt-16 text-2xl">What a session could look like</h2><p className="mt-2 text-sm text-mute">A typical format outline, not a confirmed schedule.</p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-4">{flow.map(([I, t, d], k) => <Reveal as="li" key={t} delay={k * .12}><div className="relative h-full rounded-3xl border border-black/10 bg-white p-5">
        <span className="absolute -top-3 left-5 rounded-full px-2.5 py-0.5 text-xs font-bold text-white" style={{ background: e.accent }}>0{k + 1}</span><I size={22} style={{ color: e.accent }} aria-hidden /><h3 className="display mt-3 text-lg">{t}</h3><p className="mt-1 text-sm text-mute">{d}</p></div></Reveal>)}</ol>
      <h2 className="display mb-6 mt-16 text-2xl">More formats</h2>
      <div className="grid gap-6 lg:grid-cols-2">{more.map(m => <Ticket key={m.slug} event={m} index={events.indexOf(m)} />)}</div>
    </div></PageTransition>)
}
