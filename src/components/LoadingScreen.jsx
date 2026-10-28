import { motion, useReducedMotion } from 'framer-motion'
import pu from '../assets/pu-logo-loader.png'
// Scene 1: the PU logo revolves on white while a ring fills. When the spin completes the logo
// zooms toward the viewer and fades out (the exit animation), revealing the next scene. Click to skip.
export default function LoadingScreen({ onDone }) {
  const reduce = useReducedMotion()
  const spin = reduce ? 0.5 : 2.6
  return (<motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden" role="status" aria-label="Loading Poornima University GDG on Campus" onClick={onDone}
    exit={{ transition: { duration: .9 } }}>
    <motion.div className="absolute inset-0 bg-white" exit={{ opacity: 0 }} transition={{ duration: .5, delay: .4 }} />
    <div className="relative grid h-44 w-44 place-items-center sm:h-52 sm:w-52" style={{ perspective: 900 }}>
      <motion.svg viewBox="0 0 100 100" className="absolute inset-[-14px] h-[calc(100%+28px)] w-[calc(100%+28px)] -rotate-90" fill="none" aria-hidden exit={{ opacity: 0 }} transition={{ duration: .15 }}>
        <circle cx="50" cy="50" r="48" stroke="#E8EAED" strokeWidth="1.5" />
        <motion.circle cx="50" cy="50" r="48" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: spin, ease: 'easeInOut' }} />
      </motion.svg>
      <motion.div className="h-full w-full" exit={{ scale: 16, opacity: 0 }} transition={{ duration: .9, ease: [.7, 0, .84, 0] }}>
        <motion.img src={pu} alt="Poornima University logo" width="330" height="330" className="h-full w-full"
          initial={{ rotateY: 0 }} animate={{ rotateY: reduce ? 0 : 720 }} transition={{ duration: spin, ease: [.45, 0, .25, 1] }}
          onAnimationComplete={onDone} />
      </motion.div>
    </div></motion.div>)
}
