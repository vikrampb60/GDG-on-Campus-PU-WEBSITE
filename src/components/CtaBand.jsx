import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { site } from '../data/siteConfig.js'
export default function CtaBand({ title = 'Your next idea starts here.', text = 'Connect with fellow developers, explore new technologies, and start building.', label = 'Join GDG on Campus' }) {
  return (<section className="section bg-gradient-to-b from-[#F8F9FA] to-[#E8F0FE]"><Reveal className="wrap text-center">
    <h2 className="display h-sec mx-auto max-w-3xl">{title}</h2><p className="mx-auto mt-4 max-w-xl text-lg text-mute">{text}</p>
    <div className="mt-8"><Button href={site.communityUrl}>{label}</Button></div></Reveal></section>)
}
