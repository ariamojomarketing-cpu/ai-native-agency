import { ChatBubbleLeftRightIcon, ChartBarIcon, CursorArrowRaysIcon, SparklesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Guest Messaging',
    description: 'AI handles check-in instructions, local recommendations, amenity questions, and check-out reminders. 2-minute average response time, 24/7.',
    stat: '200+ conversations/month',
  },
  {
    icon: SparklesIcon,
    title: 'Social Media & Content',
    description: 'Automated Instagram/Facebook posts, story updates, and review highlights. Maintains consistent brand presence without manual work.',
    stat: '3 posts/week, 40% engagement',
  },
  {
    icon: ChartBarIcon,
    title: 'Dynamic Pricing',
    description: 'AI adjusts rates based on local events, weather, competitor pricing, and booking velocity. Maximizes revenue without constant monitoring.',
    stat: '12-18% higher ADR',
  },
  {
    icon: CursorArrowRaysIcon,
    title: 'Review Management',
    description: 'Automated review responses, sentiment analysis, and issue flagging. Maintains 4.9★ average with personalized, timely replies.',
    stat: '4.9★ average across platforms',
  },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What You Get</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          The exact AI system that runs Mojo Manor — proven with real revenue, real guests, and real results in Waynesville, NC.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div 
              key={feature.title}
              className="p-6 bg-surface rounded-xl border border-gray-800 hover:border-primary-500/50 transition group"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition">
                <Icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-sm text-primary-300 font-medium">
                {feature.stat}
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Testimonial */}
      <div className="mt-16 max-w-3xl mx-auto p-8 bg-gradient-to-r from-surface to-gray-900 rounded-2xl border border-gray-700">
        <div className="flex items-start">
          <div className="mr-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-lg italic text-gray-200 mb-4">
              "We tried three different property managers before switching to the AI system. Our occupancy went from 65% to 92% in one season, 
              and we're saving 15+ hours a week on guest communications. It's like having a full-time assistant who never sleeps."
            </p>
            <div>
              <div className="font-bold">— Mojo Manor Waynesville</div>
              <div className="text-gray-400 text-sm">5-bedroom luxury vacation rental • $9,800/mo summer revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}