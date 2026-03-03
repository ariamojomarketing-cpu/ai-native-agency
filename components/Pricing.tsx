import FadeIn from './FadeIn'

const plans = [
  {
    name: 'A La Carte',
    price: 'From $299',
    period: 'one-time',
    description: 'Pick exactly what you need. No commitment, no recurring fees. Pay once, own it.',
    features: [
      'Single service of your choice',
      'No monthly commitment',
      'Full ownership of deliverables',
      'One-time setup & configuration',
      '30-day email support',
    ],
    cta: 'Start Building',
    popular: false,
  },
  {
    name: 'Starter',
    price: '$697',
    period: '/mo',
    description: 'The essentials for a brand that shows up consistently and protects its reputation.',
    features: [
      'Social media management',
      'Reputation monitoring',
      'Monthly AI-generated report',
      'Review response automation',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$1,497',
    period: '/mo',
    description: 'The full system. AI working on every major revenue channel simultaneously.',
    features: [
      'Everything in Starter',
      'AI website chatbot',
      'SEO content & blogging',
      'Email marketing automation',
      'Competitor intelligence',
      'Priority support',
    ],
    cta: 'Get Growth',
    popular: true,
  },
  {
    name: 'Custom',
    price: "Let's Talk",
    period: '',
    description: 'Full buildout with custom apps, dedicated AI agents, and enterprise-level automation.',
    features: [
      'Everything in Growth',
      'Custom AI app development',
      'Dedicated AI agent',
      'Advanced workflow automation',
      'Quarterly strategy sessions',
      'SLA-backed support',
    ],
    cta: 'Book a Call',
    popular: false,
  },
]

function FeatureCheck() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="rgba(99,102,241,0.4)" strokeWidth="1" />
      <path d="M7 10l2 2 4-4" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: '#0d0d15' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Simple,{' '}
            <span className="gradient-text">Transparent</span>{' '}
            Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Start with one service or go all-in. Scale as your business grows.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 80}>
              <div
                className={`relative flex flex-col p-7 h-full ${
                  plan.popular ? 'pricing-popular' : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className={`font-bold text-white ${
                        plan.price === "Let's Talk" ? 'text-2xl' : 'text-3xl'
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <FeatureCheck />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${
                    plan.popular
                      ? 'text-white hover:brightness-110'
                      : 'text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/40'
                  }`}
                  style={
                    plan.popular
                      ? {
                          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                          boxShadow: '0 0 25px rgba(99,102,241,0.35)',
                        }
                      : undefined
                  }
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
