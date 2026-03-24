import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'
const DEFAULT_LINK =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=4_O3x3gK5EOb4YO8II4icFNUUgF_4KFNsVfJ9PdOpWRUOTBWODI1RU0yVEtHUEI4TVFVSk44RU85Si4u&origin=QRCode'

const scheduleItems = [
  {
    color: '#a32638',
    title: 'Monthly Gatherings',
    desc: 'Rotating host homes across Hoboken',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    color: '#3bbfbf',
    title: 'Free Dinner',
    desc: 'Home-cooked meals shared together',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 11h18M5 11V19M19 11V19M12 11V19M7 3v4M17 3v4M12 3v4" />
      </svg>
    ),
  },
  {
    color: '#1e2a3a',
    title: 'Discussion & Activities',
    desc: 'Thoughtful conversations, games, and fun',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function HomeGroups() {
  const [link, setLink] = useState(DEFAULT_LINK)

  useEffect(() => {
    async function fetchSettings() {
      try {
        const snap = await getDoc(doc(db, 'settings', 'main'))
        if (snap.exists() && snap.data().homeGroupLink) {
          setLink(snap.data().homeGroupLink)
        }
      } catch {
        // Firestore not configured yet — keep static fallback
      }
    }
    fetchSettings()
  }, [])

  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-3">Home Groups</h2>
        <p className="text-[#7a6555] text-sm mb-2">
          Same as Friday Night — free dinner, fun activities, and thoughtful discussion — but held in the
          homes of student alumni and volunteers.
        </p>
        <p className="text-[#7a6555] text-sm mb-8">
          Home groups meet bi-weekly at different locations around Hoboken. It's a great way to build deeper
          friendships in a relaxed, home setting.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Register card */}
          <div className="flex-1 md:max-w-xs bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-4">
            <h3 className="font-bold text-[#2c1a0e] text-base self-start">Register for a Home Group</h3>
            <p className="text-[#7a6555] text-sm self-start">
              Click the link below to sign up for your nearest home group.
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#a32638] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#8a1e2f] transition-colors text-center"
            >
              Click the Link to Register →
            </a>
          </div>

          {/* Schedule */}
          <div className="flex-1">
            <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-4">Schedule</p>
            <div className="flex flex-col gap-4">
              {scheduleItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c1a0e] text-sm">{item.title}</p>
                    <p className="text-[#7a6555] text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
