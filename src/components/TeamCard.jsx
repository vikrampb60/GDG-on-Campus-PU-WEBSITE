import Tilt from './Tilt.jsx'
import { ExternalLink } from 'lucide-react'
export default function TeamCard({ person: p }) {
  return (<Tilt max={4}><article className="card group overflow-hidden !p-0">
    <div className="aspect-square overflow-hidden"><img src={p.photo} alt={`Portrait of ${p.name}`} loading="lazy" width="500" height="500" className="h-full w-full object-cover grayscale-[30%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /></div>
    <div className="p-6"><h3 className="display text-xl">{p.name}</h3><p className="mt-1 text-sm text-gblue">{p.role}</p><p className="mt-1 text-sm text-mute">{p.org}</p>
      {p.bio && <p className="mt-3 text-sm text-mute">{p.bio}</p>}
      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-gblue hover:text-gblue">Profile <ExternalLink size={14} /></a>}</div></article></Tilt>)
}
