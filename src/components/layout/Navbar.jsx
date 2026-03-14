import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logos/logo.jpg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav role="navigation" className="bg-[#a32638] px-8 py-3 flex items-center justify-between relative">
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logoImg}
          alt="IGSCF Logo"
          className="w-10 h-10 rounded-full border-2 border-white object-cover flex-shrink-0"
        />
        <div className="text-white text-xs font-semibold leading-tight">
          <div>International Graduate Chapter of</div>
          <div>Stevens Christian Fellowship –</div>
          <div>Hoboken, NJ</div>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-6">
        <Link to="/about" className="text-white text-sm hover:text-white/75 transition-colors">About</Link>
        <Link to="/" className="text-white text-sm hover:text-white/75 transition-colors">Home</Link>
        <Link to="/students" className="text-white text-sm hover:text-white/75 transition-colors font-semibold">For Students</Link>
        <Link
          to="/partner"
          className="bg-white text-[#a32638] text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          Partner with Us
        </Link>
      </div>

      {/* Hamburger button */}
      <button
        className="lg:hidden text-white p-2"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#a32638] border-t border-white/20 flex flex-col z-50 lg:hidden">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-sm px-8 py-4 hover:bg-white/10 transition-colors border-b border-white/10">About</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-white text-sm px-8 py-4 hover:bg-white/10 transition-colors border-b border-white/10">Home</Link>
          <Link to="/students" onClick={() => setMenuOpen(false)} className="text-white text-sm px-8 py-4 hover:bg-white/10 transition-colors font-semibold border-b border-white/10">For Students</Link>
          <div className="px-8 py-4">
            <Link
              to="/partner"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-white text-[#a32638] text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
