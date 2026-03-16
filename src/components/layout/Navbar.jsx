import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../assets/logos/logo.jpg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const navLinkClass = (path) =>
    `text-white text-sm transition-colors hover:text-white/75 ${
      pathname === path ? 'underline underline-offset-4 font-semibold' : ''
    }`

  const mobileNavLinkClass = (path) =>
    `text-white text-sm px-8 py-4 hover:bg-white/10 transition-colors border-b border-white/10 ${
      pathname === path ? 'bg-white/10 font-semibold' : ''
    }`

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
        <Link to="/" className={navLinkClass('/')}>Home</Link>
        <Link to="/students" className={navLinkClass('/students')}>For Students</Link>
        <Link to="/about" className={navLinkClass('/about')}>About</Link>
        <Link
          to="/partner"
          className={`text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
            pathname === '/partner'
              ? 'bg-white/80 text-[#a32638]'
              : 'bg-white text-[#a32638] hover:bg-gray-100'
          }`}
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
          <Link to="/" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass('/')}>Home</Link>
          <Link to="/students" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass('/students')}>For Students</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass('/about')}>About</Link>
          <div className="px-8 py-4">
            <Link
              to="/partner"
              onClick={() => setMenuOpen(false)}
              className={`inline-block text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
                pathname === '/partner'
                  ? 'bg-white/80 text-[#a32638]'
                  : 'bg-white text-[#a32638] hover:bg-gray-100'
              }`}
            >
              Partner with Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
