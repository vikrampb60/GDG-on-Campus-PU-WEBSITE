import { useEffect } from 'react'
import { motion } from 'framer-motion'
export default function PageTransition({ title, children }) {
  useEffect(() => { document.title = title ? `${title} — GDG on Campus Poornima University` : 'GDG on Campus Poornima University' }, [title])
  return <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35, ease: 'easeOut' }}>{children}</motion.div>
}
