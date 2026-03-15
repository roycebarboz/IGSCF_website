import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import p1 from '../../../assets/images/gallery_photos/IMG-20250901-WA0002.webp'
import p2 from '../../../assets/images/gallery_photos/IMG-20250906-WA0009.webp'
import p3 from '../../../assets/images/gallery_photos/IMG-20250927-WA0009.webp'
import p4 from '../../../assets/images/gallery_photos/IMG-20251128-WA0000.webp'
import p5 from '../../../assets/images/gallery_photos/IMG-20251128-WA0041.webp'
import p6 from '../../../assets/images/gallery_photos/IMG-20260208-WA0011.webp'

const photos = [p1, p2, p3, p4, p5, p6]

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const goTo = useCallback((index, dir) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % photos.length)
    }, 3000)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const handleNext = () => {
    goTo((current + 1) % photos.length, 1)
    resetTimer()
  }

  const handlePrev = () => {
    goTo((current - 1 + photos.length) % photos.length, -1)
    resetTimer()
  }

  const handleDot = (i) => {
    goTo(i, i > current ? 1 : -1)
    resetTimer()
  }

  return (
    <section className="bg-[#f0ebe4] py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Gallery</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-8">Community Photos</h2>

        <div className="relative flex items-center justify-center">
          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white shadow transition-colors text-xl"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Photo frame */}
          <div
            className="w-full overflow-hidden rounded-2xl shadow-lg"
            style={{ maxWidth: '720px', height: 'clamp(220px, 50vw, 500px)' }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={current}
                src={photos[current]}
                alt={`Gallery photo ${current + 1}`}
                loading="lazy"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white shadow transition-colors text-xl"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Animated dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {photos.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to photo ${i + 1}`}
              animate={{
                scale: i === current ? 1.25 : 1,
                backgroundColor: i === current ? '#a32638' : '#9ca3af',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-3.5 h-3.5 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
