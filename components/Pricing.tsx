import { CheckIcon } from '@heroicons/react/24/solid'

const tiers = [
  {
    name: 'Managed',
    price: '$1,500',
    period: '/month',
    description: 'We run everything for you',
    featured: true,
    cta: 'Book Pilot Spot',
    features: [
      'Daily guest messaging automation',
      'Social media posting (3x/week)',
      'Review response & management',
      'Dynamic pricing adjustments',
      'Weekly performance report',
      'Email & SMS support',
      'No long-term contract',
    ],
  },
  {
    name: 'Full Stack',
    price: '$3,000',
    period: '/month',
    description: 'Full AI automation + custom integrations',
    featured: false,
    cta: 'Get Started',
    features: [
      'Everything in Managed, plus:',
      'Custom API integrations',
      'Booking platform sync',
      'Advanced analytics dashboard',
      'Competitor monitoring',
      'Priority support (24h)',
      'Quarterly strategy review',
    ],
  },
  {
    name: 'Custom Build',
    price: '$5,000',
    period: 'one-time',
    description: 'Bespoke AI system built for your portfolio',
    featured: false,
    cta: 'Schedule Consult',
    features: [
      'Custom AI model training',
      'Portfolio-wide automation',
      'White-label dashboard',
      'Dedicated engineering team',
      'Unlimited integrations',
      'SLA guarantees',
      'Ongoing maintenance optional',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Choose Your Automation Level</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From hands-off management to custom AI solutions — pick the tier that matches your portfolio size and ambition.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, index) => (
          <div 
            key={tier.name}
            className={`rounded-2xl p-8 border-2 ${
              tier.featured 
                ? 'border-primary-500 bg-gradient-to-b from-surface to-gray-900 scale-105 shadow-2xl' 
                : 'border-gray-700 bg-surface'
            }`}
          >
            {tier.featured && (
              <div className="inline-block px-4 py-1 bg-primary-500 text-white text-sm font-bold rounded-full mb-6">
                🚀 PILOT TIER
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-gray-400">{tier.period}</span>
            </div>
            <p className="text-gray-300 mb-6">{tier.description}</p>
            
            <a
              href="#contact"
              className={`block w-full py-3 text-center font-bold rounded-lg mb-8 ${
                tier.featured
                  ? 'bg-primary-600 hover:bg-primary-700'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {tier.cta}
            </a>
            
            <ul className="space-y-4">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-400">
        <p>All plans include access to the Mojo Manor proven AI system. No hidden fees. Cancel anytime.</p>
      </div>
    </section>
  )
}