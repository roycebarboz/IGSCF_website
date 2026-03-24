import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import campusMapImg from '../../../assets/images/Campus_map.webp'
import { ClockIcon, PinIcon, DinnerIcon } from '../icons'

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#2c1a0e]">
      <span className="text-[#a32638]">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default function FridayNights() {
  const [mapOpen, setMapOpen] = useState(false)
  const [note, setNote] = useState('')

  useEffect(() => {
    async function fetchNote() {
      try {
        const snap = await getDoc(doc(db, 'notes', 'friday_nights'))
        if (snap.exists()) setNote(snap.data().text ?? '')
      } catch {
        // Firestore not configured yet
      }
    }
    fetchNote()
  }, [])

  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Every Week</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-3">Friday Nights</h2>
        <p className="text-[#7a6555] text-sm max-w-xl mb-4">
          Join us for free dinner, fun activities, and thoughtful discussions on spirituality and the Bible. Open
          to all faiths and backgrounds — everyone is welcome.
        </p>

        {note && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 border-l-4 border-l-amber-500 rounded-xl px-4 py-3.5 mb-6 max-w-xl shadow-sm">
            <span className="text-amber-500 flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-0.5">Notice</p>
              <p className="text-sm font-medium text-amber-900">{note}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Campus map thumbnail */}
          <div className="w-full md:w-[200px] md:flex-shrink-0 flex flex-col gap-2">
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
            <p className="text-sm font-semibold text-center bg-[#a32638]/10 border border-[#a32638]/30 text-[#a32638] rounded-lg px-3 py-2">
              Campus Map — <span className="underline underline-offset-2">Building #7</span> is Gateway North
            </p>
          </div>

          {/* Lightbox */}
          {mapOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
              onClick={() => setMapOpen(false)}
            >
              <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                <img src={campusMapImg} alt="Campus Map Full" loading="lazy" className="w-full max-h-[82vh] object-contain rounded-xl shadow-2xl" />
                <p className="text-white/70 text-xs text-center mt-2">
                  <span className="font-semibold text-[#a32638]">Building #7</span> — Gateway North, Room 103
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
              <ol className="flex flex-col gap-3">
                {[
                  <>Go to the <span className="font-semibold">Ducklink app</span> on your phone</>,
                  <>Search for <span className="font-semibold">"IGSCF Friday Dinner"</span></>,
                  <>Register and you're all set — see you Friday!</>,
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#2c1a0e]">
                    <span className="w-5 h-5 rounded-full bg-[#a32638] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
