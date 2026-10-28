import { useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { site } from '../data/siteConfig.js'
const faqs = [['What is GDG on Campus?', 'Google Developer Groups on Campus are student-led developer communities at universities. This chapter is at Poornima University, Jaipur.'], ['Who can participate?', 'Eligibility can vary by event. Check the official community page for details on each opportunity.'], ['What technologies can I explore?', 'Areas of interest include web, AI, cloud, Android, open source and developer tools.'], ['Where can I find upcoming events?', 'On the official GDG community page for this chapter.'], ['How can I get involved?', 'Join the community on the official page and watch for announcements.']]
const init = { name: '', email: '', subject: '', message: '' }
export default function Contact() {
  const [v, setV] = useState(init); const [err, setErr] = useState({}); const [state, setState] = useState('idle')
  const validate = () => { const e = {}; if (!v.name.trim()) e.name = 'Enter your name.'; if (!v.email.trim()) e.email = 'Enter your email address.'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address, like name@example.com.'; if (!v.subject.trim()) e.subject = 'Enter a subject.'; if (!v.message.trim()) e.message = 'Write a message.'; return e }
  const submit = ev => { ev.preventDefault(); const e = validate(); setErr(e); if (Object.keys(e).length) return; setState('loading'); setTimeout(() => setState('done'), 800) }
  const field = (k, label, extra = {}) => { const T = k === 'message' ? 'textarea' : 'input'; return (<div><label htmlFor={k} className="mb-1.5 block text-sm font-medium">{label}</label>
    <T id={k} name={k} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-err` : undefined} rows={k === 'message' ? 5 : undefined} {...extra}
      className="w-full rounded-xl border border-black/15 bg-surface px-4 py-3 text-sm placeholder:text-mute/60 focus:border-gblue" />
    {err[k] && <p id={`${k}-err`} className="mt-1 text-sm text-gred">{err[k]}</p>}</div>) }
  return (<PageTransition title="Contact">
    <PageHero glow="#EA4335" title="Let's make something happen." text="Students, speakers, collaborators and curious people are all welcome to reach out." />
    <section className="wrap grid gap-10 pb-20 lg:grid-cols-[1fr_1.2fr]">
      <div><h2 className="display text-2xl">Official channels</h2><p className="mt-3 text-mute">No public email or phone number has been verified for this chapter, so none is shown. Reach the community on the channels below.</p>
        <div className="mt-5"><Button href={site.communityUrl} variant="secondary">Official community page</Button></div><h3 className="display mt-8 text-lg">Chat and follow</h3><SocialLinks labeled className="mt-3" /></div>
      {state === 'done' ? <div className="card" role="status"><h2 className="display text-2xl">Form checked. Nothing was sent.</h2><p className="mt-3 text-mute">This demo form is not connected to a message-delivery service, so the organizers have not received your message. Please use the official community page to get in touch.</p>
        <div className="mt-5 flex gap-3"><Button href={site.communityUrl}>Open official page</Button><button className="btn btn-secondary" onClick={() => { setV(init); setState('idle') }}>Start over</button></div></div>
      : <form onSubmit={submit} noValidate className="card space-y-4 !p-8" aria-label="Contact form (demo)">
        <p className="text-sm text-gyellow">Demo form: messages are not delivered anywhere.</p>
        {field('name', 'Name', { autoComplete: 'name' })}{field('email', 'Email', { type: 'email', autoComplete: 'email' })}{field('subject', 'Subject')}{field('message', 'Message')}
        <Button type="submit" disabled={state === 'loading'} icon={false}>{state === 'loading' ? 'Checking…' : 'Check my message'}</Button></form>}
    </section>
    <section className="section bg-bg2"><div className="wrap max-w-3xl"><h2 className="display h-sec mb-8">Questions</h2>
      <div className="divide-y divide-black/10 border-y border-black/10">{faqs.map(([q, a]) => <Reveal key={q}><details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold">{q}<span aria-hidden className="text-gblue transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-mute">{a}</p></details></Reveal>)}</div></div></section>
  </PageTransition>)
}
