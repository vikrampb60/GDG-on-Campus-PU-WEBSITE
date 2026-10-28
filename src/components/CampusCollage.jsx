import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import campus from '../assets/campus.jpg'
import hawa from '../assets/hawa-photo.jpg'
import pu from '../assets/pu-logo.png'
import { team } from '../data/team.js'
// Real-world composition: the campus, Jaipur's Hawa Mahal, the university seal and the listed organizers.
export default function CampusCollage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [34, -34]), y2 = useTransform(scrollYProgress, [0, 1], [-24, 44])
  return (<figure ref={ref} className="relative mx-auto h-[430px] w-full max-w-xl sm:h-[520px]">
    <motion.div style={{ y: y1 }} className="absolute left-0 top-0 h-[76%] w-[80%] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_60px_rgba(60,64,67,.16)]">
      <img src={campus} alt="Poornima University campus building" loading="lazy" width="620" height="505" className="h-full w-full object-cover" /></motion.div>
    <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 h-[56%] w-[52%] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_24px_60px_rgba(60,64,67,.18)]">
      <img src={hawa} alt="Hawa Mahal, Jaipur" loading="lazy" width="582" height="661" className="h-full w-full object-cover object-left" /></motion.div>
    <div className="spin-slow absolute right-3 top-2 h-20 w-20 rounded-full bg-white p-1.5 shadow-lg sm:h-24 sm:w-24"><img src={pu} alt="Poornima University seal" width="96" height="96" className="h-full w-full" /></div>
    <motion.figcaption initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .3 }} className="absolute bottom-3 left-2 flex items-center gap-3 rounded-full border border-black/10 bg-white py-2 pl-2 pr-5 shadow-lg">
      <span className="flex -space-x-3">{team.map(p => <img key={p.name} src={p.photo} alt={p.name} loading="lazy" width="40" height="40" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" />)}</span>
      <span className="text-xs leading-tight"><b className="block text-sm">Your organizers</b><span className="text-mute">as listed on the GDG page</span></span></motion.figcaption>
  </figure>)
}
