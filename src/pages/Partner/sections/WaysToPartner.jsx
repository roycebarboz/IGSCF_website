const ways = [
  {
    id: 'transport',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M1 3h15l3 6-3 6H1z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="14" cy="18" r="2" />
        <path d="M19 9h3l1 4v2h-4" />
      </svg>
    ),
    text: 'Provide transportation to and from airports and for special events, such as picnics and hiking.',
  },
  {
    id: 'dinner',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M3 11l2-2 4 4 4-4 2 2" />
        <path d="M5 21V3" />
        <path d="M19 3v4a4 4 0 0 1-4 4v10" />
      </svg>
    ),
    text: 'Prepare and serve dinner on Friday Night gatherings.',
  },
  {
    id: 'discussion',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    text: 'Facilitate small group discussions on Friday Night gatherings.',
  },
  {
    id: 'bible',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    text: 'Facilitate a mid-week Bible study.',
  },
  {
    id: 'thanksgiving',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M3 9v11h18V9" />
        <path d="M21 3H3v6h18z" />
        <path d="M12 3v18" />
      </svg>
    ),
    text: 'Host a Thanksgiving meal at home for international students.',
  },
  {
    id: 'community',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    text: 'Host other creative and community-building activities.',
  },
  {
    id: 'ideas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="10" r="4" />
        <path d="M12 14v4" />
        <path d="M10 18h4" />
        <path d="M9 10a3 3 0 0 1 6 0" />
      </svg>
    ),
    text: 'Bring your creative ideas that would be good for international students.',
  },
]

export default function WaysToPartner() {
  return (
    <section
      id="get-involved"
      className="bg-gray-100 py-16 px-8"
      aria-labelledby="ways-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="ways-heading"
          className="text-2xl md:text-4xl font-bold text-[#2c1a0e] mb-10"
        >
          Some of the Ways to Partner
        </h2>

        <ul className="space-y-5" role="list">
          {ways.map((way) => (
            <li
              key={way.id}
              className="flex items-start gap-4 group"
            >
              {/* Icon badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#a32638] shadow-sm group-hover:bg-[#a32638] group-hover:text-white group-hover:border-[#a32638] transition-colors duration-300">
                {way.icon}
              </div>
              <p className="text-[#4a3728] text-base leading-relaxed pt-2.5">
                {way.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
