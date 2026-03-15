export default function PartnerBanner() {
  return (
    <section className="bg-[#363d45] py-14 px-8 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mb-6" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-[#a32638]" />
          <span className="w-2 h-2 rounded-full bg-[#a32638]/50" />
          <span className="w-2 h-2 rounded-full bg-[#a32638]/25" />
        </div>

        <h2 className="text-white text-2xl md:text-3xl font-bold mb-5 leading-snug">
          "Be the bridge between two worlds."
        </h2>

        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Every friendship built with an international student is a seed of
          Christ's love planted in a heart that may carry it back across the
          globe. Your time, your home, and your hospitality matter more than you
          know.
        </p>
      </div>
    </section>
  )
}
