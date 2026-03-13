import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from './sections/Hero'
import Welcome from './sections/Welcome'
import Programs from './sections/Programs'
import Gallery from './sections/Gallery'
import Connect from './sections/Connect'
import Testimonials from './sections/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <Navbar />
      <Hero />
      <Welcome />
      <Programs />
      <Gallery />
      <Connect />
      <Testimonials />
      <Footer />
    </div>
  )
}
