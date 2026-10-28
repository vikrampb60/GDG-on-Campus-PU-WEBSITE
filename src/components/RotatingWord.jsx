import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
export default function RotatingWord({ words }) {
  const reduce = useReducedMotion(); const [i, setI] = useState(0); const [n, setN] = useState(0); const [del, setDel] = useState(false)
  useEffect(() => {
    if (reduce) return
    const w = words[i]; const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1); else if (!del) setDel(true); else if (n > 0) setN(n - 1); else { setDel(false); setI((i + 1) % words.length) }
    }, !del && n === w.length ? 1300 : del ? 40 : 80)
    return () => clearTimeout(t)
  }, [n, del, i, reduce, words])
  return <><span className="sr-only">Exploring {words.join(', ')}</span><span aria-hidden className="font-mono text-gblue">{reduce ? words[0] : words[i].slice(0, n)}<span className="caret">|</span></span></>
}
