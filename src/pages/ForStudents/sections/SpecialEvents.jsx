import { useState } from 'react'
import { events } from '../../../data/events'

function TagPill({ label }) {
  return (
    <span className="flex items-center gap-1 text-white/80 text-xs border border-white/30 rounded-full px-2 py-0.5">
      {label}
    </span>
  )
}

export default function SpecialEvents() {
  const [current, setCurrent] = useState(0)
  const event = events[current]

  return (
    <section className="py-12 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Throughout the Year</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-3">Special Events</h2>
        <p className="text-[#7a6555] text-sm mb-8">
          We organize memorable events across the year — from outdoor adventures to festive celebrations.
          Something for everyone!
        </p>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: event.bg, minHeight: '220px' }}
        >
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/10 to-transparent" />

          <button
            onClick={() => setCurrent((c) => (c - 1 + events.length) % events.length)}
            aria-label="Previous event"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
          >
            ←
          </button>

          <div className="relative px-16 py-10">
            <span className="inline-block bg-[#a32638] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              {event.badge}
            </span>
            <h3 className="text-white text-2xl font-bold mb-2">{event.title}</h3>
            <p className="text-white/80 text-sm max-w-xl mb-4">{event.description}</p>
            <div className="flex gap-2 flex-wrap">
              {event.tags.map((t) => <TagPill key={t} label={t} />)}
            </div>
          </div>

          <button
            onClick={() => setCurrent((c) => (c + 1) % events.length)}
            aria-label="Next event"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {events.map((e, i) => (
            <button
              key={e.title}
              onClick={() => setCurrent(i)}
              aria-label={`Go to event: ${e.title}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#a32638]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
