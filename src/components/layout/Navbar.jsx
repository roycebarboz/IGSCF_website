import { Link } from 'react-router-dom'
import logoImg from '../../assets/logos/logo.jpg'

export default function Navbar() {
  return (
    <nav className="bg-[#a32638] px-8 py-3 flex items-center justify-between">
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

      <div className="flex items-center gap-6">
        <Link to="/about" className="text-white text-sm hover:text-white/75 transition-colors">About</Link>
        <Link to="/" className="text-white text-sm hover:text-white/75 transition-colors">Home</Link>
        <Link to="/students" className="text-white text-sm hover:text-white/75 transition-colors font-semibold">For Students</Link>
        <Link
          to="/#partner"
          className="bg-white text-[#a32638] text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          Partner with Us
        </Link>
      </div>
    </nav>
  )
}
