import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '../../../data/programs'

function ProgramCard({ headerBg, headerText, title, time, description, tabId }) {
  return (
    <div className="w-full max-w-sm mx-auto rounded-[10px] overflow-hidden shadow-sm border border-gray-100 bg-white">
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
          className="mt-6 inline-block bg-[#a32638] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#8a1e2f] transition-colors"
        >
          More Info
        </Link>
      </div>
    </div>
  )
}

const VISIBLE = 1
const FADE_MS = 300

export default function Programs() {
  const [start, setStart] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const total = programs.length
  const timerRef = useRef(null)

  const transition = useCallback((newStart) => {
    setOpacity(0)
    setTimeout(() => {
      setStart(newStart)
      setOpacity(1)
    }, FADE_MS)
  }, [])

  const next = useCallback(() => {
    transition((start + 1) % total)
  }, [start, total, transition])

  const prev = () => {
    transition((start - 1 + total) % total)
  }

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setStart((s) => {
        const ns = (s + 1) % total
        setOpacity(0)
        setTimeout(() => setOpacity(1), FADE_MS)
        return ns
      })
    }, 4000)
  }, [total])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const handleNext = () => { next(); resetTimer() }
  const handlePrev = () => { prev(); resetTimer() }
  const handleDot = (i) => { transition(i); resetTimer() }

  const visible = Array.from({ length: VISIBLE }, (_, i) => programs[(start + i) % total])

  return (
    <section className="bg-[#faf6f0] py-12 px-8" id="students">
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
            <div className="flex gap-1.5">
              {programs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDot(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === start ? 'bg-[#a32638] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
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

        <div
          className="flex gap-6"
          style={{ opacity, transition: `opacity ${FADE_MS}ms ease` }}
        >
          {visible.map((p, i) => (
            <ProgramCard key={`${p.tabId}-${i}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
