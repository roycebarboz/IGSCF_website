import { socialLinks } from '../../../components/social/SocialIcons'

const englishSocialLinks = socialLinks.filter((s) => s.name === 'WhatsApp' || s.name === 'WeChat')

export default function EnglishClass() {
  return (
    <section className="py-12 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Skill Building</p>
        <h2 className="text-3xl font-bold text-[#2c1a0e] mb-5">English Class</h2>

        <div className="flex items-start gap-8">
          <div className="flex-1">
            <p className="text-[#7a6555] text-sm leading-relaxed mb-5">
              Improve your English skills and do better in your career. Our community-run English classes are
              informal, supportive, and free. For more information, join our community group on WhatsApp or
              WeChat.
            </p>
            <button className="bg-[#a32638] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#8a1e2f] transition-colors">
              Learn More →
            </button>
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
