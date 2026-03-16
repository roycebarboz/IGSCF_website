import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <section className="bg-gray-100 py-20 flex flex-col items-center text-center px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-[#2c1a0e] mb-6">Who are we?</h2>
      <p className="max-w-2xl text-base md:text-lg text-[#5c4033] leading-relaxed mb-6">
        We are IGSCF — a community welcoming international graduate students, postdocs,
        and visiting scholars from all backgrounds to feel at home in Hoboken, NJ.
      </p>
      <Link
        to="/about"
        className="text-[#a32638] font-semibold text-sm hover:underline"
      >
        Learn More About Us →
      </Link>
    </section>
  )
}
