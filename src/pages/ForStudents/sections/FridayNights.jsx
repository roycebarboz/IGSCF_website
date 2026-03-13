import { useState } from 'react'
import campusMapImg from '../../../assets/images/Campus_map.png'
import { ClockIcon, PinIcon, DinnerIcon } from '../icons'

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#2c1a0e]">
      <span className="text-[#e89c2f]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default function FridayNights() {
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <section className="py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#e89c2f] text-xs font-semibold uppercase tracking-widest mb-1">Every Week</p>
        <h2 className="text-3xl font-bold text-[#2c1a0e] mb-3">Friday Nights</h2>
        <p className="text-[#7a6555] text-sm max-w-xl mb-8">
          Join us for free dinner, fun activities, and thoughtful discussions on spirituality and the Bible. Open
          to all faiths and backgrounds — everyone is welcome.
        </p>

        <div className="flex gap-8">
          {/* Campus map thumbnail */}
          <div className="flex-1 max-w-xs flex flex-col gap-2">
            <button
              onClick={() => setMapOpen(true)}
              className="rounded-xl overflow-hidden border border-gray-200 block w-full group relative"
              title="Click to enlarge map"
            >
              <img
                src={campusMapImg}
                alt="Campus Map"
                className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full">Click to enlarge</span>
              </div>
            </button>
            <p className="text-[#7a6555] text-xs text-center">
              Campus Map — <span className="font-semibold text-[#e89c2f]">Building #7</span> is Gateway North
            </p>
          </div>

          {/* Lightbox */}
          {mapOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
              onClick={() => setMapOpen(false)}
            >
              <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <img src={campusMapImg} alt="Campus Map Full" className="w-full h-auto rounded-xl shadow-2xl" />
                <p className="text-white/70 text-xs text-center mt-2">
                  <span className="font-semibold text-[#e89c2f]">Building #7</span> — Gateway North, Room 103
                </p>
                <button
                  onClick={() => setMapOpen(false)}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-[#2c1a0e] font-bold text-sm flex items-center justify-center hover:bg-gray-100 shadow"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Details + Register */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <InfoRow icon={<ClockIcon />} text="Every Friday @ 7:00 PM" />
              <InfoRow icon={<PinIcon />} text="Gateway North, Room 103" />
              <InfoRow icon={<DinnerIcon />} text="Free Dinner Included" />
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#2c1a0e] text-base mb-3">Register for Friday Night</h3>
              <p className="text-[#7a6555] text-sm mb-3">To join our Friday Night dinners, follow these steps:</p>
              <ol className="flex flex-col gap-2">
                {[
                  <>Go to the <span className="font-semibold">Duckling app</span> on your phone</>,
                  <>Search for <span className="font-semibold">"IGSCF Friday Dinner"</span></>,
                  <>Register and you're all set — see you Friday!</>,
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#2c1a0e]">
                    <span className="w-5 h-5 rounded-full bg-[#e89c2f] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <button className="mt-4 bg-[#e89c2f] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#f0b84a] transition-colors">
                Register Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
