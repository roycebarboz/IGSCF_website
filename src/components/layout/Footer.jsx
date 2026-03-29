import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import logoImg from '../../assets/logos/logo.jpg'

export default function Footer() {
  const { user } = useAuth()

  return (
    <footer className="bg-[#363d45] py-8 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Logo + privacy */}
        <div className="flex items-center gap-4">
          <img
            src={logoImg}
            alt="IGSCF Logo"
            className="w-11 h-11 rounded-full border-2 border-white object-cover flex-shrink-0"
          />
          <div>
            <div className="text-white text-xs font-semibold leading-snug">
              <div>International Graduate Chapter of</div>
              <div>Stevens Christian Fellowship</div>
              <div>Hoboken, NJ</div>
            </div>
            <Link to="/privacy" className="text-white/60 text-xs hover:underline mt-1 block">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 text-sm text-white">
          <Link to="/about" className="hover:text-white/75 transition-colors py-2 sm:px-3 sm:py-0 sm:min-h-[44px] sm:flex sm:items-center">About Us</Link>
          <span className="hidden sm:inline text-white/40">|</span>
          <Link to="/" className="hover:text-white/75 transition-colors py-2 sm:px-3 sm:py-0 sm:min-h-[44px] sm:flex sm:items-center">Home</Link>
          <span className="hidden sm:inline text-white/40">|</span>
          <Link to="/students" className="hover:text-white/75 transition-colors py-2 sm:px-3 sm:py-0 sm:min-h-[44px] sm:flex sm:items-center">Students</Link>
          <span className="hidden sm:inline text-white/40">|</span>
          <Link to="/partner" className="hover:text-white/75 transition-colors py-2 sm:px-3 sm:py-0 sm:min-h-[44px] sm:flex sm:items-center">Partner with Us</Link>
        </div>

      </div>

      {/* Admin link — subtle, for volunteers only */}
      <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-white/10 flex justify-end">
        {user ? (
          <Link to="/admin" className="text-white/50 text-xs hover:text-white/80 transition-colors">
            Admin Dashboard
          </Link>
        ) : (
          <Link to="/admin/login" className="text-white/50 text-xs hover:text-white/80 transition-colors">
            Volunteer Login
          </Link>
        )}
      </div>
    </footer>
  )
}
