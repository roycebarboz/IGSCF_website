import videoSrc from '../../../assets/images/IS_video.mp4'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '220px' }}>
      <video
        className="w-full h-auto block object-contain"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div className="border border-white/40 px-10 py-8 max-w-2xl">
          <p className="text-2xl md:text-3xl font-bold leading-snug">
            International Students,<br />
            at Stevens Institute of Technology<br />
            from All Religious &amp; Ethnic Backgrounds<br />
            Welcome to Hoboken, New Jersey!
          </p>
        </div>
      </div>
    </section>
  )
}
