import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ScrollReveal from '../../components/ui/ScrollReveal'

export default function PartnerWithUs() {
  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#a32638] focus:font-semibold focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <ScrollReveal variant="fadeIn" delay={100}>
          <div className="max-w-5xl mx-auto px-8 py-16 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-[#2c1a0e]">Partner with Us</h1>
            <p className="text-[#7a6555] text-sm mt-4">Coming soon.</p>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
