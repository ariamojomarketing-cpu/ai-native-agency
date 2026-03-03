import Hero from '../components/Hero'
import CredibilityBar from '../components/CredibilityBar'
import ServicesGrid from '../components/ServicesGrid'
import HowItWorks from '../components/HowItWorks'
import PitchSection from '../components/PitchSection'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      <Hero />
      <CredibilityBar />
      <ServicesGrid />
      <HowItWorks />
      <PitchSection />
      <Pricing />
      <Footer />
    </div>
  )
}
