const cards = [
  {
    title: 'A Welcoming Home',
    description:
      'IGSCF is a community for international graduate students, visiting scholars at Stevens Institute of Technology and beyond. We exist to make Hoboken feel like home — no matter where you\'re from or what you believe.',
  },
  {
    title: 'Open to Everyone',
    description:
      'Our programs and activities are open to people from all religious and ethnic backgrounds. Whether you\'re curious about faith, looking for friends, or just want a free meal and good conversation — you belong here.',
  },
  {
    title: 'What We Offer',
    description:
      'Friday Night gatherings with free dinner, special events throughout the year (hiking, Thanksgiving dinner, Christmas concerts), intimate home groups, English classes, and a warm community to call your own in the U.S.',
  },
  {
    title: 'Rooted in Hoboken',
    description:
      'Based in Hoboken, NJ — just across the Hudson from New York City — we serve one of the most internationally diverse academic communities in the region. Stevens Institute of Technology is our home campus.',
  },
]

export default function WhoWeAre() {
  return (
    <section className="bg-white py-14 px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Our Community</p>
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Who We Are</h2>
        <div className="grid grid-cols-2 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-[#1a1a1a] text-base mb-2">{card.title}</h3>
              <p className="text-[#6b5c4e] text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
