import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ScrollReveal from '../../components/ui/ScrollReveal'
import Hero from './sections/Hero'
import OurRoots from './sections/OurRoots'
import WhoWeAre from './sections/WhoWeAre'
import Mission from './sections/Mission'
import MeetTeam from './sections/MeetTeam'

export default function About() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#a32638] focus:font-semibold focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
      <ScrollReveal variant="fadeIn" delay={100}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <OurRoots />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <WhoWeAre />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <Mission />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0}>
        <MeetTeam />
      </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
