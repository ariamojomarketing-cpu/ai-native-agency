import FadeIn from './FadeIn'

const steps = [
  {
    number: '01',
    title: 'Tell us your biggest headache',
    description:
      "We start by understanding what's eating your time and money. No jargon, no fluff — just a direct conversation about where your business is bleeding.",
  },
  {
    number: '02',
    title: 'We build the system',
    description:
      'Our team designs and deploys a custom AI stack built around your specific business. You see it working before we call it done.',
  },
  {
    number: '03',
    title: 'It runs. You grow.',
    description:
      "The system operates autonomously and reports back to you. You stay in the loop without being in the weeds — free to focus on what actually moves the needle.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: '#0d0d15' }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            How It <span className="gradient-text">Works</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-7 left-[calc(33.33%+8px)] right-[calc(33.33%+8px)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.5), rgba(168,85,247,0.5))' }}
            aria-hidden="true"
          />

          {steps.map(({ number, title, description }, i) => (
            <FadeIn key={number} delay={i * 120}>
              <div className="flex flex-col items-start md:items-center text-left md:text-center">
                {/* Step number circle */}
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white mb-6 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
                >
                  {number}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
