import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Features from '@/components/Features'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Hero />
      <Features />
      <Pricing />
      <ContactForm />
      
      {/* Pilot spots CTA */}
      <div className="mt-20 mb-16 text-center">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full animate-pulse">
          <p className="text-lg font-semibold">🎯 Limited pilot spots available — only 3 at $1,500/mo</p>
        </div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Join Mojo Manor and two other hosts in the pilot program. Get the full AI operations system at the managed tier price, 
          plus priority support and feature requests.
        </p>
        <a 
          href="#contact" 
          className="mt-6 inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
        >
          Book Your Pilot Spot →
        </a>
      </div>
    </div>
  )
}