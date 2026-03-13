import { Link } from 'react-router-dom'
import logoImg from '../../assets/logos/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-[#3d1f0f] py-5 px-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        {/* Logo + privacy */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="IGSCF Logo"
            className="w-9 h-9 rounded-full border-2 border-[#e89c2f] object-cover flex-shrink-0"
          />
          <div>
            <div className="text-[#e89c2f] text-xs font-semibold leading-tight">
              <div>International Graduate Chapter of</div>
              <div>Stevens Christian Fellowship</div>
              <div>Hoboken, NJ</div>
            </div>
            <a href="#privacy" className="text-[#e89c2f] text-xs hover:underline mt-0.5 block">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-1 text-sm text-white">
          <a href="#about" className="hover:text-[#e89c2f] transition-colors px-2">About Us</a>
          <span className="text-white/40">|</span>
          <Link to="/students" className="hover:text-[#e89c2f] transition-colors px-2">Students</Link>
          <span className="text-white/40">|</span>
          <a href="#donors" className="hover:text-[#e89c2f] transition-colors px-2">Donors</a>
        </div>

        {/* CTA */}
        <a
          href="#partner"
          className="bg-[#e89c2f] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#f0b84a] transition-colors"
        >
          Partner with Us
        </a>
      </div>
    </footer>
  )
}
