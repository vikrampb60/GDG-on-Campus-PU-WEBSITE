import { motion, useScroll, useTransform } from 'framer-motion'
import bg from '../assets/site-backdrop.jpg'
// Fixed page background (the chapter banner artwork). Fades back as you scroll so content stays readable.
export default function SiteBackdrop() {
  const { scrollY } = useScroll(); const o = useTransform(scrollY, [0, 700], [1, .38])
  return (<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-white">
    <motion.img src={bg} alt="" width="1672" height="941" fetchpriority="high" style={{ opacity: o }} className="h-full w-full object-cover object-[28%_top] md:object-center" />
    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/25 to-white/60" />
  </div>)
}
