import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ScrollReveal from '../../components/ui/ScrollReveal'
import Hero from './sections/Hero'
import Welcome from './sections/Welcome'
import Programs from './sections/Programs'
import Gallery from './sections/Gallery'
import Connect from './sections/Connect'
import Testimonials from './sections/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#a32638] focus:font-semibold focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
      <Hero />
      <ScrollReveal variant="fadeUp" delay={0}>
        <Welcome />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <Programs />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <Connect />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <Testimonials />
      </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
