import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const DEFAULTS = {
  partnerFormLink: 'https://forms.gle/demo',
  partnerEmail: 'partner@igscf.org',
  partnerPhone: '',
}

export default function PartnerContact() {
  const [contact, setContact] = useState(DEFAULTS)

  useEffect(() => {
    async function fetchSettings() {
      try {
        const snap = await getDoc(doc(db, 'settings', 'main'))
        if (snap.exists()) {
          const data = snap.data()
          setContact({
            partnerFormLink: data.partnerFormLink ?? DEFAULTS.partnerFormLink,
            partnerEmail: data.partnerEmail ?? DEFAULTS.partnerEmail,
            partnerPhone: data.partnerPhone ?? DEFAULTS.partnerPhone,
          })
        }
      } catch (err) {
        console.error('Failed to load partner contact settings:', err)
      }
    }
    fetchSettings()
  }, [])

  return (
    <section className="bg-[#faf6f0] py-16 px-4 sm:px-8" id="partner-contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-2">
          Get Involved
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-3">
          Ready to Partner with Us?
        </h2>
        <p className="text-[#7a6555] text-sm mb-10 leading-relaxed">
          Fill out our form or reach out directly — we'd love to connect with you.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 flex flex-col items-center gap-6">
          <a
            href={contact.partnerFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a32638] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#8a1e2f] transition-colors shadow-sm"
          >
            Fill Out Our Form →
          </a>

          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">or contact us</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href={`mailto:${contact.partnerEmail}`}
              className="text-[#a32638] text-sm font-semibold hover:underline"
            >
              {contact.partnerEmail}
            </a>

            {contact.partnerPhone && (
              <>
                <span className="text-xs text-gray-300">·</span>
                <a
                  href={`tel:${contact.partnerPhone}`}
                  className="text-[#a32638] text-sm font-semibold hover:underline"
                >
                  {contact.partnerPhone}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
