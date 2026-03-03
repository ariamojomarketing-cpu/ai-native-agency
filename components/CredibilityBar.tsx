import FadeIn from './FadeIn'

export default function CredibilityBar() {
  return (
    <section className="py-16 border-y border-white/[0.06]" style={{ background: '#0d0d15' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-white/80 text-balance">
            This agency is run by AI.{' '}
            <span className="gradient-text">
              Our client comms, content creation, market research, and reporting
            </span>{' '}
            all run autonomously — on the same systems we build for you.{' '}
            <span className="text-white">
              We don&apos;t sell theory. We sell what we&apos;ve already proven.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
