import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from './sections/Hero'
import OurRoots from './sections/OurRoots'
import WhoWeAre from './sections/WhoWeAre'
import Mission from './sections/Mission'
import MeetTeam from './sections/MeetTeam'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OurRoots />
      <WhoWeAre />
      <Mission />
      <MeetTeam />
      <Footer />
    </div>
  )
}
