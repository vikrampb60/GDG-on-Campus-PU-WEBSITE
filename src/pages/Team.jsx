import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import TeamCard from '../components/TeamCard.jsx'
import Button from '../components/Button.jsx'
import { team } from '../data/team.js'
import { CalendarDays, MessagesSquare, Lightbulb } from 'lucide-react'
import { site } from '../data/siteConfig.js'
export default function Team() {
  return (<PageTransition title="Team">
    <PageHero glow="#34A853" title="Different minds. One community." text="A student community runs on organization, clear communication, creativity and technical contribution." />
    <section className="wrap pb-20"><p className="mb-8 text-sm text-mute">Organizers as listed on the official GDG community page.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{team.map((p, i) => <Reveal key={p.name} delay={i * .1}><TeamCard person={p} /></Reveal>)}</div><p className="mt-6 max-w-3xl text-sm leading-relaxed text-mute">Profiles are limited to information available from the chapter's public organizer listing. Personal biographies and social links are intentionally omitted unless verified.</p></section>
    <section className="section bg-bg2"><div className="wrap"><h2 className="display h-sec max-w-3xl">A community takes more than code.</h2><p className="mt-4 max-w-2xl leading-relaxed text-mute">Developer communities work because people contribute in different ways. Alongside technical skills, organizing, welcoming newcomers, and sharing knowledge help create an environment where others can learn.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{[[CalendarDays,'Create opportunities','Help make workshops, meetups, and collaborative sessions easier to discover and participate in.','#4285F4'],[MessagesSquare,'Keep people connected','Share updates clearly, help newcomers find information, and encourage respectful discussion.','#EA4335'],[Lightbulb,'Make learning visible','Show projects, document useful lessons, and help ideas travel beyond one person or team.','#34A853']].map(([I,title,desc,color]) => <Reveal key={title} className="card h-full !p-7"><I size={25} style={{color}}/><h3 className="display mt-4 text-xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{desc}</p></Reveal>)}</div></div></section>
    <section className="section bg-bg2"><Reveal className="wrap max-w-2xl"><h2 className="display h-sec">Want to be part of it?</h2>
      <p className="mt-4 text-lg text-mute">Start by joining the community and attending what is on offer. Any team application process will be announced on the official page.</p>
      <div className="mt-6"><Button href={site.communityUrl} variant="secondary">Visit the official page</Button></div></Reveal></section></PageTransition>)
}
