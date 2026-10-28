import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export default function Button({ to, href, variant = 'primary', icon = true, children, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`
  const inner = <>{children}{icon && <ArrowRight className="arrow h-4 w-4" aria-hidden />}</>
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{inner}<span className="sr-only"> (opens in new tab)</span></a>
  return <button className={cls} {...rest}>{inner}</button>
}
