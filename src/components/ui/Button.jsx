export default function Button({ children, onClick, href, variant = 'primary', className = '' }) {
  const base = 'text-sm font-semibold px-5 py-2 rounded-full transition-colors'
  const variants = {
    primary: 'bg-[#e89c2f] text-white hover:bg-[#f0b84a]',
    outline: 'border border-[#e89c2f] text-[#e89c2f] hover:bg-[#e89c2f] hover:text-white',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
