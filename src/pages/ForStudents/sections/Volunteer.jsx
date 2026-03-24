import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

export default function Volunteer() {
  const [link, setLink] = useState('')

  useEffect(() => {
    async function fetchLink() {
      try {
        const snap = await getDoc(doc(db, 'settings', 'main'))
        if (snap.exists() && snap.data().volunteerLink) {
          setLink(snap.data().volunteerLink)
        }
      } catch {
        // Firestore not configured yet — button stays visible without href
      }
    }
    fetchLink()
  }, [])

  return (
    <section className="py-14 px-4 sm:px-8 bg-[#faf6f0]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-4">Want to Make a Difference?</h2>
        <p className="text-[#7a6555] text-sm leading-relaxed mb-6 max-w-md">
          If you are a student and want to be part of our community, register as a volunteer. Help us welcome
          new internationals and make Hoboken feel like home for everyone.
        </p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#a32638] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#8a1e2f] transition-colors"
          >
            Click Here to Volunteer
          </a>
        ) : (
          <button className="bg-[#a32638] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#8a1e2f] transition-colors">
            Click Here to Volunteer
          </button>
        )}
      </div>
    </section>
  )
}
