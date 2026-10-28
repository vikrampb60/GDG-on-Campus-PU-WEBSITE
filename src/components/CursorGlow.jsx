import { useEffect, useRef } from 'react'
// Soft light that follows the pointer. Fine pointers only; off for reduced motion.
export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let x = 0, y = 0, tx = 0, ty = 0, raf
    const move = e => { tx = e.clientX; ty = e.clientY }
    const tick = () => { x += (tx - x) * .12; y += (ty - y) * .12; if (ref.current) ref.current.style.transform = `translate3d(${x - 200}px,${y - 200}px,0)`; raf = requestAnimationFrame(tick) }
    addEventListener('pointermove', move, { passive: true }); tick()
    return () => { removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full pointer-fine:block" style={{ background: 'radial-gradient(circle,rgba(66,133,244,.10),transparent 65%)' }} />
}
