import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { socialLinks } from '../../../components/social/SocialIcons'

const englishSocialLinks = socialLinks.filter((s) => s.name === 'WhatsApp' || s.name === 'WeChat')

export default function EnglishClass() {
  const [note, setNote] = useState('')

  useEffect(() => {
    async function fetchNote() {
      try {
        const snap = await getDoc(doc(db, 'notes', 'english_class'))
        if (snap.exists()) setNote(snap.data().text ?? '')
      } catch {
        // Firestore not configured yet
      }
    }
    fetchNote()
  }, [])

  return (
    <section className="py-12 px-4 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Skill Building</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-4">English Class</h2>

        {note && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 border-l-4 border-l-amber-500 rounded-xl px-4 py-3.5 mb-5 max-w-xl shadow-sm">
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

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1">
            <p className="text-[#7a6555] text-sm leading-relaxed">
              Improve your English skills and do better in your career. Our community-run English classes are
              informal, supportive, and free. For more information, join our community group on WhatsApp or
              WeChat.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-[#faf6f0] border border-[#e8ddd4] rounded-xl px-6 py-4">
            <p className="text-xs font-semibold text-[#7a6555] uppercase tracking-widest">Join us on</p>
            <div className="flex gap-6">
              {englishSocialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 group"
                >
                  <div
                    className="w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                    style={{ background: s.bg }}
                  >
                    {s.icon}
                  </div>
                  <span className="text-xs text-[#7a6555] font-medium">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
