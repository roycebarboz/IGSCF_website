export default function Volunteer() {
  return (
    <section className="py-14 px-8 bg-[#faf6f0]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-4">Want to Make a Difference?</h2>
          <p className="text-[#7a6555] text-sm leading-relaxed mb-6 max-w-md">
            If you are a student and want to be part of our community, register as a volunteer. Help us welcome
            new internationals and make Hoboken feel like home for everyone.
          </p>
          <button className="bg-[#a32638] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#8a1e2f] transition-colors">
            Click Here to Volunteer →
          </button>
          <p className="text-[#7a6555] text-xs mt-3">or scan the QR code</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-white rounded-xl p-3 border-2 border-[#a32638]">
            <img src="https://placehold.co/120x120?text=QR" alt="Volunteer QR Code" className="w-28 h-28" />
          </div>
          <p className="text-[#7a6555] text-xs text-center">Demo QR Code — replace with real link</p>
        </div>
      </div>
    </section>
  )
}
