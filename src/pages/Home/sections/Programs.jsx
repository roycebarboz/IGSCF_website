import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { programs } from '../../../data/programs'

function ProgramCard({ headerBg, headerText, title, time, description, tabId }) {
  return (
    <m.div
      className="w-full max-w-sm mx-auto rounded-[10px] overflow-hidden shadow-sm border border-gray-100 bg-white"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={`${headerBg} py-6 text-center`}>
        <span className="text-white font-bold text-lg">{headerText}</span>
      </div>
      <div className="p-6">
        <h3 className="text-[#a32638] font-bold text-base">{title}</h3>
        <p className="text-[#a32638] text-xs mt-1">{time}</p>
        <div className="w-8 h-0.5 bg-[#a32638] my-3" />
        <p className="text-[#7a6555] text-sm leading-relaxed">{description}</p>
        <Link
          to={tabId ? `/students#${tabId}` : '/students'}
          aria-label={`More info about ${title}`}
          className="mt-6 inline-block bg-[#a32638] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#8a1e2f] transition-colors"
        >
          More Info
        </Link>
      </div>
    </m.div>
  )
}

export default function Programs() {
  const [start, setStart] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = programs.length
  const timerRef = useRef(null)

  const goTo = useCallback((index, dir) => {
    setDirection(dir)
    setStart(index)
  }, [])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setStart((s) => (s + 1) % total)
    }, 4000)
  }, [total])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const handleNext = () => {
    goTo((start + 1) % total, 1)
    resetTimer()
  }

  const handlePrev = () => {
    goTo((start - 1 + total) % total, -1)
    resetTimer()
  }

  const handleDot = (i) => {
    goTo(i, i > start ? 1 : -1)
    resetTimer()
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section className="bg-[#faf6f0] py-12 px-4 sm:px-8" id="students">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Programs</p>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e]">For Students</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Animated dots */}
            <div className="flex gap-1.5">
              {programs.map((_, i) => (
                <m.button
                  key={i}
                  onClick={() => handleDot(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  animate={{
                    scale: i === start ? 1.25 : 1,
                    backgroundColor: i === start ? '#a32638' : '#d1d5db',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Animated card */}
        <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={start}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex gap-6"
            >
              <ProgramCard {...programs[start]} />
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
