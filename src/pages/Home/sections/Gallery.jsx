import { useState, useEffect, useCallback } from 'react'

import p1 from '../../../assets/images/gallery_photos/IMG-20250901-WA0002.jpg'
import p2 from '../../../assets/images/gallery_photos/IMG-20250906-WA0009.jpg'
import p3 from '../../../assets/images/gallery_photos/IMG-20250927-WA0009.jpg'
import p4 from '../../../assets/images/gallery_photos/IMG-20251128-WA0000.jpg'
import p5 from '../../../assets/images/gallery_photos/IMG-20251128-WA0041.jpg'
import p6 from '../../../assets/images/gallery_photos/IMG-20260208-WA0011.jpg'

const photos = [p1, p2, p3, p4, p5, p6]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % photos.length)
  }, [])

  const prev = () => {
    setCurrent((c) => (c - 1 + photos.length) % photos.length)
  }

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-[#f0ebe4] py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#e89c2f] text-xs font-semibold uppercase tracking-widest mb-1">Gallery</p>
        <h2 className="text-3xl font-bold text-[#2c1a0e] mb-8">Community Photos</h2>

        <div className="relative flex items-center justify-center">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white shadow transition-colors text-xl"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Photo frame */}
          <div
            className="w-full overflow-hidden rounded-2xl shadow-lg"
            style={{ maxWidth: '640px', height: '420px' }}
          >
            <img
              key={current}
              src={photos[current]}
              alt={`Gallery photo ${current + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{ animation: 'fadeIn 0.5s ease' }}
            />
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white shadow transition-colors text-xl"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#e89c2f] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
