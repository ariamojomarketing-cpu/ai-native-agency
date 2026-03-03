import FadeIn from './FadeIn'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ShareIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'AI Website Chatbot',
    description: 'Captures leads, answers questions, and books calls 24/7 — no human required.',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Custom AI Apps',
    description: 'Bespoke tools built around your workflow. Automate decisions, not just tasks.',
    Icon: CpuChipIcon,
  },
  {
    title: 'Social Media Management',
    description: 'AI-generated posts, scheduling, and engagement across every platform — on autopilot.',
    Icon: ShareIcon,
  },
  {
    title: 'SEO Content & Blogging',
    description: 'Keyword-optimized content published consistently to rank and convert.',
    Icon: DocumentTextIcon,
  },
  {
    title: 'Email Marketing & Automation',
    description: 'Personalized drip campaigns and follow-up sequences — automated end-to-end.',
    Icon: EnvelopeIcon,
  },
  {
    title: 'Reputation Management',
    description: 'Monitor, respond to, and amplify your reviews across Google, Yelp, and beyond.',
    Icon: StarIcon,
  },
  {
    title: 'Competitor Intelligence',
    description: 'Continuous automated analysis of what competitors are doing so you stay ahead.',
    Icon: ChartBarIcon,
  },
  {
    title: 'Website & Landing Pages',
    description: 'High-converting pages built fast — designed to impress and optimized to close.',
    Icon: GlobeAltIcon,
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every system we offer is already running inside our own business. You&apos;re buying proven infrastructure, not a promise.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ title, description, Icon }, i) => (
            <FadeIn key={title} delay={i * 55}>
              <div className="glass-card p-6 h-full cursor-default">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                  }}
                >
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white text-[15px] mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
