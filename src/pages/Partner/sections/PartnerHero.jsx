import { Link } from 'react-router-dom'

export default function PartnerHero() {
  return (
    <section className="bg-gray-100 py-14 px-8 text-center">
      {/* Icon — hands cupped with heart, drawn with SVG */}
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 flex items-center justify-center">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Outer circle */}
            <circle cx="40" cy="40" r="37" stroke="#a32638" strokeWidth="2.5" />

            {/* Heart */}
            <path
              d="M40 30c0 0-2.5-4-6-4a5 5 0 0 0-5 5c0 6 11 13 11 13s11-7 11-13a5 5 0 0 0-5-5c-3.5 0-6 4-6 4z"
              stroke="#a32638"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Left hand */}
            <path
              d="M22 52c2-4 5-7 10-8l6 2"
              stroke="#a32638"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Right hand */}
            <path
              d="M58 52c-2-4-5-7-10-8l-6 2"
              stroke="#a32638"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Palm base left */}
            <path
              d="M18 56c1-3 3-5 6-5h32c3 0 5 2 6 5"
              stroke="#a32638"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-[#2c1a0e]">
        Partner with Us
      </h1>

      <p className="mt-4 text-[#7a6555] text-sm max-w-md mx-auto leading-relaxed">
        Join us in welcoming international scholars to Hoboken and sharing
        Christ's love.
      </p>

      
    </section>
  )
}
