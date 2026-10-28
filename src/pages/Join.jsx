import { CalendarCheck, Compass, Hammer, Users, Share2, Bell } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { site } from '../data/siteConfig.js'
const ways = [[CalendarCheck, 'Attend community events'], [Compass, 'Explore technologies'], [Hammer, 'Build personal projects'], [Users, 'Collaborate with peers'], [Share2, 'Share what you learn'], [Bell, 'Follow official announcements']]
const start = ['Explore the community.', 'Find an event or learning opportunity.', 'Connect with other developers.', 'Start building.']
export default function Join() {
  return (<PageTransition title="Join">
    <PageHero glow="#34A853" title="Don't just watch technology evolve. Help build it." text="Start exploring, connect with fellow developers, and find your place in the community.">
      <div className="flex flex-wrap gap-3"><Button href={site.communityUrl}>Join the Official Community</Button><Button to="/events" variant="secondary">Browse events</Button></div></PageHero>
    <section className="section"><div className="wrap"><SectionHeading title="Ways to participate" text="There is more than one way to get involved. Start with what feels accessible now, then stretch into a new role as your confidence grows." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{ways.map(([I, t], i) => <Reveal key={t} delay={(i % 3) * .08}><div className="card h-full"><I className="text-gblue" aria-hidden /><h3 className="display mt-4 text-xl">{t}</h3></div></Reveal>)}</div></div></section>
    <section className="section bg-bg2"><div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1fr]"><div><SectionHeading title="Getting started" text="You do not need a perfect idea or an advanced skill set. A small first step—following the chapter, attending an event, or sharing a project—is enough to begin." />
      <ol className="grid gap-6 sm:grid-cols-2">{start.map((s, i) => <Reveal as="li" key={s} delay={i * .1}><p className="display text-5xl text-black/20">{String(i + 1).padStart(2, '0')}</p><p className="mt-3 text-lg">{s}</p></Reveal>)}</ol></div><Reveal delay={.1}><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Students and teammates sharing ideas around a table" loading="lazy" className="h-[300px] w-full rounded-[2rem] object-cover shadow-[0_18px_50px_rgba(60,64,67,.12)] sm:h-[360px]" onError={e => { e.currentTarget.style.display = 'none' }}/></Reveal></div></section>
  </PageTransition>)
}
