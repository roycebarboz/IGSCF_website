import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-[#2c1a0e]">About Us</h1>
        <p className="text-[#7a6555] text-sm mt-4">Coming soon.</p>
      </div>
      <Footer />
    </div>
  )
}
