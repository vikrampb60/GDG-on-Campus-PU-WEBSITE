import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../data/siteConfig.js'
import pu from '../assets/pu-logo.png'
import Button from './Button.jsx'
export function Wordmark({ logo = true }) {
  return <span className="flex items-center gap-2.5 font-display font-bold">
    <span aria-hidden className="flex gap-1"><i className="h-2.5 w-2.5 rounded-full bg-gred" /><i className="h-2.5 w-2.5 rounded-full bg-gyellow" /><i className="h-2.5 w-2.5 rounded-full bg-ggreen" /></span>
    <span>GDG on Campus <span className="font-medium text-mute">Poornima</span></span>{logo && <><span aria-hidden className="hidden h-6 w-px bg-black/15 sm:block" /><img src={pu} alt="Poornima University logo" width="32" height="32" className="h-8 w-8" /></>}</span>
}
export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const { pathname } = useLocation()
  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'border-b border-black/10 bg-bg/80 backdrop-blur-xl' : 'bg-white/55 backdrop-blur-md'}`}>
    <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
      <Link to="/" aria-label="GDG on Campus Poornima, home"><Wordmark /></Link>
      <ul className="hidden items-center gap-1 lg:flex">
        {site.nav.map(([l, to]) => <li key={to}><NavLink to={to} end={to === '/'} className={({ isActive }) => `relative block px-4 py-2 text-sm transition-colors ${isActive ? 'text-ink' : 'text-mute hover:text-ink'}`}>
          {({ isActive }) => <>{l}{isActive && <motion.span layoutId="nav-ind" className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded bg-gblue" />}</>}</NavLink></li>)}
      </ul>
      <div className="flex items-center gap-2">
        <Button to="/join" className="hidden !py-2 sm:inline-flex" icon={false}>Join the Community</Button>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-black/15 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
    </nav>
    <AnimatePresence>{open && <motion.div id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }} className="overflow-hidden lg:hidden">
      <ul className="wrap flex flex-col gap-1 pb-6">
        {[...site.nav, ['Join the Community', '/join']].map(([l, to]) => <li key={to}><NavLink to={to} end={to === '/'} className={({ isActive }) => `block rounded-xl px-3 py-3 font-display text-lg font-semibold ${isActive ? 'bg-black/5 text-ink' : 'text-mute'}`}>{l}</NavLink></li>)}
      </ul></motion.div>}</AnimatePresence>
  </header>)
}
