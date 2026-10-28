import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
export default function Tilt({ children, className = '', max = 7 }) {
  const ref = useRef(null); const reduce = useReducedMotion()
  const move = e => { if (reduce) return; const r = ref.current.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5
    ref.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg)` }
  return <div ref={ref} onPointerMove={move} onPointerLeave={() => { ref.current.style.transform = '' }} className={`transition-transform duration-200 ease-out will-change-transform ${className}`}>{children}</div>
}
