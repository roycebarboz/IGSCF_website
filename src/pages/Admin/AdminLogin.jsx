import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function AdminLogin() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (user) {
    navigate('/admin')
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      const code = err?.code
      if (code === 'auth/operation-not-allowed') {
        setError('Email/Password sign-in is not enabled. Enable it in Firebase Console → Authentication → Sign-in method.')
      } else if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
        setError('Invalid email or password.')
      } else {
        setError(`Login failed: ${code || err.message}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-2">Admin Portal</p>
            <h1 className="text-3xl font-bold text-[#2c1a0e]">IGSCF</h1>
            <p className="text-[#7a6555] text-sm mt-2">Sign in to manage content</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-6"
          >
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#2c1a0e]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="volunteer@igscf.org"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#2c1a0e] focus:outline-none focus:border-[#a32638]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#2c1a0e]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#2c1a0e] focus:outline-none focus:border-[#a32638]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#a32638] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#8a1e2f] transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs text-[#7a6555] mt-5">
            Only authorized volunteers can access this page.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
