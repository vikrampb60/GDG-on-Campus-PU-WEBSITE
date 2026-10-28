import { useEffect, useRef } from 'react'
const COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
// Interactive node network drawn on <canvas>. Reacts to the pointer; static when reduced motion is on.
export default function ParticleNetwork() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, raf, pts = [], vis = true; const m = { x: -999, y: -999 }
    const resize = () => {
      const r = c.parentElement.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2)
      w = r.width; h = r.height; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0)
      const n = Math.round(Math.min(80, (w * h) / 14000))
      pts = Array.from({ length: n }, (_, i) => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, c: COLORS[i % 4] }))
      draw()
    }
    const line = (a, b, s, al) => { ctx.strokeStyle = s.replace('A', al); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke() }
    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1
          const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy); if (d < 110 && d > 0) { p.x += dx / d * 1.4; p.y += dy / d * 1.4 } }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        for (let j = i + 1; j < pts.length; j++) { const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y); if (d < 130) line(a, b, 'rgba(95,99,104,A)', .28 * (1 - d / 130)) }
        const dm = Math.hypot(a.x - m.x, a.y - m.y); if (dm < 170) line(a, m, 'rgba(66,133,244,A)', .7 * (1 - dm / 170))
        ctx.fillStyle = a.c; ctx.beginPath(); ctx.arc(a.x, a.y, 2.6, 0, 7); ctx.fill()
      }
      if (!reduce && vis) raf = requestAnimationFrame(draw)
    }
    const move = e => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top }
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; cancelAnimationFrame(raf); if (vis) draw() })
    io.observe(c); resize(); addEventListener('resize', resize); addEventListener('pointermove', move, { passive: true })
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', resize); removeEventListener('pointermove', move) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />
}
