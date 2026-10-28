import Reveal from './Reveal.jsx'
export default function SectionHeading({ title, text, align = 'left' }) {
  return (<Reveal className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <h2 className="display h-sec">{title}</h2>
    {text && <p className="mt-4 text-lg leading-relaxed text-mute">{text}</p>}
  </Reveal>)
}
