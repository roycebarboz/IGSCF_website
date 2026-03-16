import { motion } from 'framer-motion'
import { testimonials } from '../../../data/testimonials'

function Avatar({ name, color }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  )
}

function TestimonialCard({ quote, name, role, color }) {
  return (
    <motion.div
      className="bg-[#faf6f0] border border-[#e8ddd4] rounded-xl p-6 shadow-sm flex flex-col gap-4 mb-4"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <p className="text-sm text-[#2c1a0e] leading-relaxed flex-1">"{quote}"</p>
      <div className="flex items-center gap-3 pt-3 border-t border-[#e8ddd4]">
        <Avatar name={name} color={color} />
        <div>
          <p className="text-sm font-semibold text-[#2c1a0e]">{name}</p>
          <p className="text-xs text-[#7a6555]">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

function TestimonialsColumn({ items, duration = 15, className = '' }) {
  // Duplicate items to create a seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        animate={{ y: ['0%', '-50%'] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  // Split testimonials into 3 columns
  const col1 = testimonials.slice(0, 3)
  const col2 = testimonials.slice(3, 6)
  const col3 = testimonials.slice(6, 9)

  return (
    <section className="bg-[#fdf8f4] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block border border-[#e8ddd4] text-[#7a6555] text-xs px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e]">
            What our community says
          </h2>
          <p className="text-sm text-[#7a6555] mt-2">
            See what our members have to say about us.
          </p>
        </div>

        {/* Columns container with gradient masks */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ height: '520px' }}
        >
          {/* Top and bottom gradient fade */}
          <div
            className="absolute inset-x-0 top-0 h-20 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #fdf8f4, transparent)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #fdf8f4, transparent)',
            }}
          />

          <TestimonialsColumn items={col1} duration={18} />
          <TestimonialsColumn items={col2} duration={22} className="hidden md:block" />
          <TestimonialsColumn items={col3} duration={16} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
