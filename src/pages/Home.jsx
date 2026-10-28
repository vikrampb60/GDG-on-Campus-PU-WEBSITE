import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Rocket, Share2, Hammer, Code2, Lightbulb, Cloud, GitBranch } from 'lucide-react'
import banner from '../assets/gdg-banner.png'
import hawa from '../assets/hawa-mahal.png'
import Tilt from '../components/Tilt.jsx'
import Marquee from '../components/Marquee.jsx'
import RotatingWord from '../components/RotatingWord.jsx'
import CampusCollage from '../components/CampusCollage.jsx'
import PageTransition from '../components/PageTransition.jsx'
import AnimatedBackground from '../components/AnimatedBackground.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EventCard from '../components/EventCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { technologies } from '../data/technologies.js'
import { events } from '../data/events.js'
import { site } from '../data/siteConfig.js'
const ease = [.22, 1, .36, 1]
const benefits = [
  [Hammer, 'Learn by building', 'Move beyond tutorials. Break a problem into steps, experiment with tools, and turn what you learn into something you can demonstrate.'],
  [Users, 'Collaborate with peers', 'Work alongside students with different strengths, exchange feedback, and learn how other developers approach the same challenge.'],
  [Rocket, 'Explore emerging technology', 'Get curious about web, AI, cloud, Android, open source, and the tools changing how software is made.'],
  [Share2, 'Share knowledge', 'Explain a concept, present a project, or document a solution. Sharing what you learn helps the whole community grow.'],
  [BookOpen, 'Build a portfolio', 'Use personal projects and practical experiments to create evidence of your skills—not just a list of technologies on a resume.'],
]
const moments = [
  { icon: Code2, title: 'Make ideas tangible', text: 'Start with a question, sketch a solution, and turn it into a working prototype.', color: '#4285F4' },
  { icon: Lightbulb, title: 'Stay curious', text: 'Explore unfamiliar tools and learn through small, low-pressure experiments.', color: '#EA4335' },
  { icon: Cloud, title: 'Understand the ecosystem', text: 'Connect the dots between interfaces, APIs, cloud platforms, data, and deployment.', color: '#34A853' },
  { icon: GitBranch, title: 'Build in the open', text: 'Practice version control, thoughtful collaboration, and sharing your progress.', color: '#8A6D00' },
]
export default function Home() {
  return (<PageTransition title="">
    <section className="relative flex min-h-[88svh] items-center overflow-hidden pb-14 pt-28 sm:pt-32">
      <AnimatedBackground />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs font-semibold tracking-wide text-mute shadow-sm"><span className="h-2 w-2 rounded-full bg-ggreen" /> DEVELOPER COMMUNITY · JAIPUR, INDIA</p>
          <h1 className="display h-hero max-w-4xl">{["BUILD WHAT'S", 'NEXT.'].map((l, i) => <span key={l} className="block overflow-hidden pb-2"><motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: .1 + i * .15, ease }}>{l}</motion.span></span>)}</h1>
          <motion.p className="mt-6 max-w-xl text-lg leading-relaxed text-mute sm:text-xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6, duration: .7 }}>A place for curious minds to explore technology, learn with other developers, and turn ideas into real-world projects at Poornima University.</motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8, duration: .7 }}><Button to="/community">Explore the community</Button><Button to="/events" variant="secondary">Discover events</Button></motion.div>
          <p className="mt-5 text-sm text-mute">New to development? You can start with curiosity—not experience.</p>
        </div>
        <Reveal delay={.18} className="relative">
          <Tilt max={6}><div className="gborder rounded-[2rem] p-[2px] shadow-[0_24px_70px_rgba(60,64,67,.14)]"><div className="rounded-[calc(2rem-2px)] bg-white p-3">
            <img src={banner} alt="Google Developer Groups Poornima University chapter banner" width="738" height="234" className="w-full rounded-[1.4rem]" />
            <div className="mt-3 rounded-2xl bg-[#F8F9FA] p-5 font-mono text-xs leading-relaxed text-mute sm:text-sm">
              <p><span className="text-ggreen">●</span> community.status = <span className="text-ink">"online"</span></p>
              <p>location = <span className="text-ink">"Jaipur, India"</span></p>
              <p>exploring = <RotatingWord words={['web', 'AI', 'cloud', 'android', 'open source']} /></p></div></div></div></Tilt>
          <div className="bob absolute -right-3 -top-5 hidden rounded-2xl border border-black/10 bg-white px-4 py-2 font-mono text-sm shadow-lg sm:block" aria-hidden><span className="text-gred">&lt;/&gt;</span> learn</div>
          <div className="bob absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-white px-4 py-2 font-mono text-sm shadow-lg sm:block" style={{ animationDelay: '-2.5s' }} aria-hidden><span className="text-ggreen">{'{ }'}</span> build</div>
        </Reveal>
      </div>
    </section>
    <Marquee />

    <section className="section bg-bg2"><div className="wrap grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <Reveal><p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-gblue">More than a club</p><h2 className="display h-sec">Technology is better when we build together.</h2></Reveal>
      <Reveal delay={.1}><p className="text-lg leading-relaxed text-mute">GDG on Campus at Poornima University is part of a global community of developers who learn, share, and build with technology. On campus, that idea can look like a hands-on session, a discussion about a new tool, a collaborative project, or simply asking a question and finding people who want to explore it with you.</p><p className="mt-4 leading-relaxed text-mute">This website introduces the community and its areas of interest. For confirmed activities, dates, and registration, always check the official chapter page.</p><div className="mt-6"><Button href={site.communityUrl} variant="text">Visit the official community page <ArrowRight size={16}/></Button></div></Reveal>
    </div></section>

    <section className="section"><div className="wrap"><SectionHeading title="Explore the technology landscape" text="From the browser to the cloud, there are many ways to turn curiosity into practical skills. Start with an area that interests you and follow the questions that come next." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{technologies.map((t, i) => <Reveal key={t.id} delay={(i % 3) * .08} className="h-full"><Link to="/community" className="card group block h-full"><div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${t.color}14` }}><t.Icon size={25} style={{ color: t.color }} aria-hidden /></div><h3 className="display mt-5 text-xl">{t.name}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{t.blurb}</p><div className="mt-4 flex flex-wrap gap-2">{t.topics.slice(0, 3).map(topic => <span key={topic} className="rounded-full bg-[#F8F9FA] px-3 py-1 text-xs text-mute">{topic}</span>)}</div><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gblue">Explore topics <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span></Link></Reveal>)}</div></div></section>

    <section className="section bg-bg2"><div className="wrap grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <Reveal><CampusCollage /></Reveal>
      <Reveal delay={.1}><p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-ggreen">From curiosity to confidence</p><h2 className="display h-sec">A practical path to becoming a better builder.</h2><p className="mt-5 leading-relaxed text-mute">You do not need to know everything before you begin. The useful habit is to keep asking questions, test what you learn, and reflect on what worked. Community learning can make that process more social, more consistent, and a lot less intimidating.</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{moments.map(({icon: Icon, title, text, color}) => <div key={title} className="border-l-2 pl-4" style={{borderColor:color}}><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-mute">{text}</p></div>)}</div></Reveal>
    </div></section>

    <section className="section"><div className="wrap"><SectionHeading title="Featured event formats" text="A look at the kinds of activities a developer community may explore. These are illustrative examples—not confirmed or scheduled events." /><div className="grid gap-5 md:grid-cols-3">{events.slice(0, 3).map((e, i) => <Reveal key={e.slug} delay={i * .08}><EventCard event={e} /></Reveal>)}</div><div className="mt-8"><Button to="/events" variant="text">Explore event formats <ArrowRight size={16}/></Button></div></div></section>

    <section className="section bg-bg2"><div className="wrap"><SectionHeading title="What you can take away" text="The value is not just attending an event. It is what you practise, make, and share afterwards."/><ul className="divide-y divide-black/10 border-y border-black/10">{benefits.map(([I, t, d], i) => <Reveal as="li" key={t} delay={i * .05} className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-6 sm:grid-cols-[auto_1fr_1.2fr] sm:items-center"><I className="mt-1 text-gblue sm:mt-0" aria-hidden /><h3 className="display text-xl sm:text-2xl">{t}</h3><p className="col-span-2 leading-relaxed text-mute sm:col-span-1">{d}</p></Reveal>)}</ul></div></section>
    <section className="section"><div className="wrap grid items-center gap-10 lg:grid-cols-2">
      <Reveal><Tilt max={5}><img src={hawa} alt="Illustration of Hawa Mahal, the palace in Jaipur" loading="lazy" width="560" height="560" className="mx-auto w-full max-w-md" /></Tilt></Reveal>
      <Reveal delay={.1}><h2 className="display h-sec">Built in Jaipur.</h2><p className="mt-4 text-lg leading-relaxed text-mute">Our chapter is based at Poornima University in Jaipur, Rajasthan. A city shaped by centuries of design and craft is a fitting home for a community that builds new things.</p><div className="mt-6"><Button to="/about" variant="text">About the community</Button></div></Reveal></div></section>
    <CtaBand title="Your next idea starts here." text="Explore the official chapter page for current community updates and opportunities to participate." label="Join the community" />
  </PageTransition>)
}
