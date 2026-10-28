import { Instagram, Linkedin, Send, MessageCircle } from 'lucide-react'
import { site } from '../data/siteConfig.js'
const icons = { whatsapp: MessageCircle, instagram: Instagram, linkedin: Linkedin, telegram: Send }
export default function SocialLinks({ labeled = false, className = '' }) {
  return (<ul className={`flex flex-wrap gap-2 ${className}`}>{site.socials.map(s => { const I = icons[s.id]; return (<li key={s.id}>
    <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in new tab)`} className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2.5 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-gblue/40 hover:shadow-[0_8px_20px_rgba(66,133,244,.15)]">
      <I size={18} className="text-gblue" aria-hidden />{labeled && s.label}</a></li>) })}</ul>)
}
