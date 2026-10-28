import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { technologies } from '../data/technologies.js'
const benefits = [
  ['Peer-to-peer learning', 'Ask questions, compare approaches, and learn from people who are also building their skills.'],
  ['Technical discussions', 'Break down new concepts together and hear how others solve real development problems.'],
  ['Practical experimentation', 'Try a tool, build a small demo, and learn from what works—and what does not.'],
  ['Open-source participation', 'Explore public code, understand contribution workflows, and learn how software is improved collaboratively.'],
  ['Project collaboration', 'Practise planning, dividing work, reviewing changes, and bringing separate ideas into one result.'],
  ['Knowledge sharing', 'Document a solution, give a short demo, or explain a concept so another learner can use it.']
]
const journey = [['Explore', '#4285F4'], ['Experiment', '#EA4335'], ['Build', '#FBBC05'], ['Collaborate', '#34A853'], ['Share', '#4285F4']]
export default function Community() {
  const [id, setId] = useState(technologies[0].id); const t = technologies.find(x => x.id === id)
  return (<PageTransition title="Community">
    <PageHero glow="#FBBC05" title="Find your people. Grow your skills." text="What taking part can look like for a student developer." />
    <section className="section"><div className="wrap"><SectionHeading title="Community benefits" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([title, desc], i) => <Reveal key={title} delay={i * .05} className="card h-full !p-7"><span className="mb-5 block h-1.5 w-12 rounded-full" style={{background: ['#4285F4','#EA4335','#FBBC05','#34A853','#4285F4','#EA4335'][i]}}/><h3 className="display text-xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{desc}</p></Reveal>)}</div></div></section>
    <section className="section bg-bg2"><div className="wrap grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><SectionHeading title="A learning journey" text="You do not need to master every tool before you start. Make progress in small loops: explore a question, experiment, build a small result, ask for feedback, and share what you learned."/><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85" alt="A small team collaborating during a planning session" loading="lazy" className="mt-8 h-56 w-full rounded-3xl object-cover" onError={e => { e.currentTarget.style.display = 'none' }}/></div><div>
      <ol className="relative space-y-10 border-l border-black/15 pl-8">{journey.map(([s, c], i) => <Reveal as="li" key={s} delay={.05} className="relative"><span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full" style={{ background: c }} /><p className="display text-3xl sm:text-5xl" style={{ color: c }}>{s}</p></Reveal>)}</ol></div></div></section>
    <section className="section"><div className="wrap"><SectionHeading title="Technology explorer" text="Choose an area to see example topics and practical starting points. These are learning suggestions, not a promise that every topic currently has an official workshop." />
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div role="tablist" aria-label="Technology categories" className="flex gap-2 overflow-x-auto lg:flex-col">{technologies.map(x => <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={id === x.id} aria-controls="tech-panel" onClick={() => setId(x.id)} className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${id === x.id ? 'border-black/20 bg-black/5 text-ink' : 'border-black/10 text-mute hover:text-ink'}`}><x.Icon size={18} style={{ color: x.color }} />{x.name}</button>)}</div>
        <AnimatePresence mode="wait"><motion.div key={id} id="tech-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="card !p-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
          <h3 className="display text-3xl">{t.name}</h3><p className="mt-2 text-mute">{t.blurb}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">{t.topics.map(x => <li key={x} className="rounded-xl border border-black/10 px-4 py-3 text-sm">{x}</li>)}</ul></motion.div></AnimatePresence></div></div></section>
    <CtaBand title="Ready to take part?" text="The official community page is the best place to see what is happening." label="Open the official community page" />
  </PageTransition>)
}
