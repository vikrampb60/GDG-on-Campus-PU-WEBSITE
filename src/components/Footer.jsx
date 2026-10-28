import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { site } from '../data/siteConfig.js'
import { Wordmark } from './Navbar.jsx'
import SocialLinks from './SocialLinks.jsx'
import pu from '../assets/pu-logo.png'
export default function Footer() {
  return (<footer className="relative overflow-hidden border-t border-black/10 bg-bg2">
    <div className="h-1" style={{ background: 'linear-gradient(90deg,#4285F4 0 25%,#EA4335 25% 50%,#FBBC05 50% 75%,#34A853 75%)' }} />
    <div className="wrap relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.8fr_1fr]">
      <div><Wordmark logo={false} />
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">Your community for code, tech and collaboration. A student developer community at {site.chapter}, {site.city}.</p>
        <a href={site.universityUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-3 pr-5 transition hover:border-black/20 hover:shadow-md">
          <img src={pu} alt="Poornima University logo" width="48" height="48" loading="lazy" className="h-12 w-12" />
          <span className="text-left text-sm"><span className="block font-semibold">Poornima University</span><span className="text-mute">Jaipur, Rajasthan</span></span></a></div>
      <nav aria-label="Footer"><h2 className="mb-4 text-sm font-semibold">Explore</h2><ul className="space-y-2.5 text-sm text-mute">{[...site.nav, ['Join', '/join']].map(([l, to]) => <li key={to}><Link className="transition hover:text-ink" to={to}>{l}</Link></li>)}</ul></nav>
      <div><h2 className="mb-4 text-sm font-semibold">Official</h2><ul className="space-y-2.5 text-sm text-mute">
        {[['GDG community page', site.communityUrl], ['Poornima University', site.universityUrl]].map(([l, u]) => <li key={u}><a className="inline-flex items-center gap-1 transition hover:text-ink" href={u} target="_blank" rel="noopener noreferrer">{l}<ArrowUpRight size={14} aria-hidden /></a></li>)}</ul></div>
      <div><h2 className="mb-4 text-sm font-semibold">Stay connected</h2><p className="mb-4 text-sm text-mute">Chat, follow and hear about what's next.</p><SocialLinks /></div>
    </div>
    <p aria-hidden className="display pointer-events-none select-none whitespace-nowrap text-center text-[clamp(2.5rem,12vw,10rem)] leading-none text-black/[.045]">BUILD WHAT'S NEXT.</p>
    <div className="wrap relative flex flex-col gap-3 border-t border-black/10 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {site.name} {site.chapter}. An independent community website, not a Google product.</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 font-medium transition hover:text-ink">Back to top <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" /></button></div>
  </footer>)
}
