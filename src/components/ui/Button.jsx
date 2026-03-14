export default function Button({ children, onClick, href, variant = 'primary', className = '' }) {
  const base = 'text-sm font-semibold px-5 py-2 rounded-full transition-colors'
  const variants = {
    primary: 'bg-[#a32638] text-white hover:bg-[#8a1e2f]',
    outline: 'border border-[#a32638] text-[#a32638] hover:bg-[#a32638] hover:text-white',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
