import { useEffect, useRef, useState } from 'react'

const variants = {
  fadeUp:    'opacity-0 translate-y-8',
  fadeIn:    'opacity-0',
  slideLeft: 'opacity-0 translate-x-8',
  slideRight:'opacity-0 -translate-x-8',
}

export default function ScrollReveal({ children, variant = 'fadeUp', delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible ? 'opacity-100 translate-y-0 translate-x-0' : variants[variant]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
