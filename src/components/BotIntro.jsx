import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import bot from '../assets/googlebot.png'
import pu from '../assets/pu-logo.png'
const COLORS = ['#EA4335', '#FBBC05', '#34A853', '#4285F4']
const notes = [['♪', '-8%', '#EA4335', '-40px', '-20deg', '0s'], ['♫', '92%', '#4285F4', '40px', '18deg', '.7s'], ['♪', '8%', '#34A853', '-30px', '-12deg', '1.4s'], ['♫', '80%', '#FBBC05', '30px', '14deg', '.35s']]
// Second intro beat: a dancing Googlebot greets the visitor, then four colour bars sweep the screen away.
export default function BotIntro({ onDone }) {
  const reduce = useReducedMotion(); const total = reduce ? 600 : 3200
  useEffect(() => { const t = setTimeout(onDone, total); return () => clearTimeout(t) }, [onDone, total])
  return (<motion.div className="fixed inset-0 z-[99]" role="status" aria-label="Welcome to GDG on Campus Poornima">
    <motion.div className="grid-bg absolute inset-0 bg-white" exit={{ opacity: 0 }} transition={{ delay: .7, duration: .1 }} />
    {COLORS.map((c, i) => <motion.div key={c} aria-hidden className="absolute inset-y-0" style={{ left: `${i * 25}%`, width: '25%', background: c }} initial={{ y: '100%' }} exit={{ y: ['100%', '0%', '-100%'] }} transition={{ duration: .9, delay: i * .07, times: [0, .5, 1], ease: 'easeInOut' }} />)}
    <motion.div className="absolute inset-0 grid place-items-center px-6" exit={{ opacity: 0 }} transition={{ duration: .2 }}>
      <div className="flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: .6, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .5, type: 'spring', stiffness: 220, damping: 16 }} className="relative mb-4 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold shadow-lg">
          Hi! Welcome to GDG on Campus.<span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-black/10 bg-white" /></motion.div>
        <div className="relative w-56 sm:w-64">
          {notes.map(([n, left, c, dx, r, d], i) => <span key={i} aria-hidden className="note absolute top-1/3 text-3xl font-bold" style={{ left, color: c, '--dx': dx, '--r': r, animationDelay: d }}>{n}</span>)}
          <img src={bot} alt="Googlebot-style robot mascot dancing" width="548" height="352" className="dance relative w-full" />
          <div className="dance-shadow mx-auto -mt-2 h-3 w-24 rounded-full bg-black/15 blur-sm" />
        </div>
        <div className="mt-5 flex h-8 items-end gap-1.5" aria-hidden>{[0, 1, 2, 3, 4, 5, 6].map(i => <i key={i} className="eq h-full w-1.5 rounded-full" style={{ background: COLORS[i % 4], animationDelay: `${i * .12}s` }} />)}</div>
        <p className="mt-5 font-display text-2xl font-bold">Let's build something.</p>
        <div className="mt-4 flex items-center gap-3"><img src={pu} alt="Poornima University logo" width="56" height="56" className="h-14 w-14" /><p className="text-left text-sm leading-tight text-mute"><b className="block text-base text-ink">Poornima University</b>Jaipur, Rajasthan</p></div>
        <button onClick={onDone} className="mt-6 rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-mute transition hover:text-ink">Skip intro</button>
      </div></motion.div></motion.div>)
}
