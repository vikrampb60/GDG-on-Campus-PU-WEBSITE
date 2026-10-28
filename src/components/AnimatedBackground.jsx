import ParticleNetwork from './ParticleNetwork.jsx'
// Decorative: blueprint grid + scan beam + soft colour light + (optionally) the interactive node network.
export default function AnimatedBackground({ visual = true }) {
  return (<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    <div className="drift absolute -left-40 top-[-10%] h-[600px] w-[600px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle,rgba(66,133,244,.28),transparent 65%)' }} />
    <div className="drift absolute -right-32 top-[20%] h-[500px] w-[500px] rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle,rgba(52,168,83,.2),transparent 65%)', animationDelay: '-8s' }} />
    {visual && <><ParticleNetwork /><div className="beam absolute inset-x-0 h-24" /></>}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
  </div>)
}
