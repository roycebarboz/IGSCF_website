function GlobeIcon() {
  return (
    <svg className="w-8 h-8 text-[#3bbfbf]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function GradCapIcon() {
  return (
    <svg className="w-8 h-8 text-[#a32638]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" />
    </svg>
  )
}

export default function OurRoots() {
  return (
    <section className="bg-[#f5f0e8] py-14 px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Our Roots</p>
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">How We're Connected</h2>
        <p className="text-[#6b5c4e] text-sm mb-10 max-w-xl">
          IGSCF Hoboken is the local graduate chapter of International Students, Inc. (ISI) — a national
          organization serving international students across the United States since 1953.
        </p>

        {/* Hierarchy diagram */}
        <div className="flex flex-col items-center gap-0">
          {/* Parent org card */}
          <a
            href="https://internationalstudents.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center block hover:shadow-md hover:border-[#3bbfbf]/40 transition-all"
          >
            <div className="flex justify-center mb-3">
              <GlobeIcon />
            </div>
            <span className="inline-block bg-[#3bbfbf]/15 text-[#3bbfbf] text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-full mb-3">
              Parent Organization
            </span>
            <h3 className="font-bold text-[#1a1a1a] text-lg">International Students, Inc.</h3>
            <p className="text-[#6b5c4e] text-xs mb-1">ISI</p>
            <p className="text-[#6b5c4e] text-sm mt-2 max-w-xs mx-auto">
              A national ministry serving international students at universities across the United States since 1953.
            </p>
          </a>

          {/* Connector */}
          <div className="flex flex-col items-center py-3 gap-1">
            <div className="w-0.5 h-8 bg-[#a32638]/70" />
            <span className="text-[#6b5c4e] text-xs uppercase tracking-widest font-medium px-3">
              Local Graduate Chapter of
            </span>
            <div className="w-0.5 h-8 bg-[#a32638]/70" />
          </div>

          {/* Local chapter card */}
          <div className="w-full max-w-md bg-white rounded-xl border-2 border-[#a32638]/20 shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3">
              <GradCapIcon />
            </div>
            <span className="inline-block bg-[#a32638]/10 text-[#a32638] text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-full mb-3">
              Local Chapter
            </span>
            <h3 className="font-bold text-[#1a1a1a] text-lg leading-snug">
              International Graduate Students Christian Fellowship
            </h3>
            <p className="text-[#6b5c4e] text-xs mb-1">IGSCF Hoboken, NJ</p>
            <p className="text-[#6b5c4e] text-sm mt-2 max-w-xs mx-auto">
              Serving international graduate students, postdocs, and visiting scholars at Stevens
              Institute of Technology and the greater Hoboken area.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
