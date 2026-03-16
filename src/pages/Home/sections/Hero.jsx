import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import videoSrc from '../../../assets/images/IS_video.mp4'
import mobileVideoSrc from '../../../assets/images/mobile_video.mp4'

export default function Hero() {
  const [isPaused, setIsPaused] = useState(false)
  const mobileVideoRef = useRef(null)
  const desktopVideoRef = useRef(null)

  const togglePause = () => {
    const mobileVid = mobileVideoRef.current
    const desktopVid = desktopVideoRef.current
    if (isPaused) {
      mobileVid?.play()
      desktopVid?.play()
    } else {
      mobileVid?.pause()
      desktopVid?.pause()
    }
    setIsPaused((p) => !p)
  }

  return (
    <section className="relative w-full h-[85vh] md:h-[70vh] overflow-hidden">
      {/* Mobile portrait video */}
      <video
        ref={mobileVideoRef}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={mobileVideoSrc}
      />
      {/* Desktop landscape video */}
      <video
        ref={desktopVideoRef}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={videoSrc}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
        <div className="border border-white/40 px-6 py-6 sm:px-10 sm:py-8 w-full max-w-2xl flex flex-col items-center gap-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            International Students,<br />
            at Stevens Institute of Technology<br />
            from All Religious &amp; Ethnic Backgrounds<br />
            Welcome to Hoboken, New Jersey!
          </p>
          <Link
            to="/students"
            className="bg-white text-[#a32638] font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Join Us This Friday
          </Link>
        </div>
      </div>

      {/* Pause/play button — WCAG 2.1 SC 2.2.2 */}
      <button
        onClick={togglePause}
        aria-label={isPaused ? 'Play video' : 'Pause video'}
        className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
      >
        {isPaused ? (
          <svg className="w-4 h-4 text-[#2c1a0e]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-[#2c1a0e]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
    </section>
  )
}
