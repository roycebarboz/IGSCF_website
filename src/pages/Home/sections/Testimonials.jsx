import { testimonials } from '../../../data/testimonials'

function Avatar({ name, color }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block border border-gray-300 text-[#7a6555] text-xs px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-[#2c1a0e]">What our community says</h2>
          <p className="text-sm text-[#7a6555] mt-2">See what our members have to say about us.</p>
        </div>

        <div className="columns-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-4 bg-white border border-gray-100 rounded-[10px] p-5 shadow-sm"
            >
              <p className="text-sm text-[#2c1a0e] leading-relaxed mb-4">{t.quote}</p>
              <div className="flex items-center gap-2">
                <Avatar name={t.name} color={t.color} />
                <div>
                  <p className="text-xs font-semibold text-[#2c1a0e]">{t.name}</p>
                  <p className="text-xs text-[#7a6555]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
