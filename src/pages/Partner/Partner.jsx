import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ScrollReveal from '../../components/ui/ScrollReveal'
import PartnerHero from './sections/PartnerHero'
import PartnerIntro from './sections/PartnerIntro'
import WaysToPartner from './sections/WaysToPartner'
import PartnerBanner from './sections/PartnerBanner'
import PartnerContact from './sections/PartnerContact'

export default function PartnerWithUs() {
  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#a32638] focus:font-semibold focus:rounded"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero — page title + icon */}
        <ScrollReveal variant="fadeIn" delay={100}>
          <PartnerHero />
        </ScrollReveal>

        {/* Intro paragraph */}
        <ScrollReveal variant="fadeUp" delay={0}>
          <PartnerIntro />
        </ScrollReveal>

        {/* Bulleted ways-to-partner list */}
        <ScrollReveal variant="fadeUp" delay={0}>
          <WaysToPartner />
        </ScrollReveal>

        {/* Dark inspirational banner */}
        <ScrollReveal variant="fadeUp" delay={0}>
          <PartnerBanner />
        </ScrollReveal>

        {/* Contact / sign-up form */}
        <ScrollReveal variant="fadeUp" delay={0}>
          <PartnerContact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
