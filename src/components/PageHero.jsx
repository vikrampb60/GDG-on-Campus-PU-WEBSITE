import Reveal from './Reveal.jsx'
export default function PageHero({ title, text, children, align = 'left', glow = '#4285F4' }) {
  return (<section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
    
    <div aria-hidden className="absolute inset-0" style={{ background: `radial-gradient(60% 50% at ${align === 'left' ? '15%' : '50%'} 0%, ${glow}26, transparent)` }} />
    <div className={`wrap relative ${align === 'center' ? 'text-center' : ''}`}>
      <Reveal><h1 className={`display h-page max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>{title}</h1></Reveal>
      {text && <Reveal delay={.12}><p className={`mt-6 max-w-2xl text-lg leading-relaxed text-mute ${align === 'center' ? 'mx-auto' : ''}`}>{text}</p></Reveal>}
      {children && <Reveal delay={.24} className="mt-8">{children}</Reveal>}
    </div></section>)
}
