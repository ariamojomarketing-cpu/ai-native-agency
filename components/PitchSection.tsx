'use client'

import FadeIn from './FadeIn'

export default function PitchSection() {
  const openChat = () => window.dispatchEvent(new Event('open-chat'))

  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="gradient-border-card p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Still running your business{' '}
              <span className="gradient-text">manually?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              While you&apos;re buried in repetitive tasks, your competitors are deploying AI that works
              around the clock. Every week you wait is revenue, leads, and leverage left on the table.
              The businesses that win the next decade are building their AI stack now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  boxShadow: '0 0 40px rgba(99,102,241,0.35)',
                }}
              >
                Let&apos;s Build Your AI Stack
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 011.414-1.414l6 6z" clipRule="evenodd" />
                </svg>
              </a>

              <button
                onClick={openChat}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white text-base border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-200 hover:scale-[1.02]"
              >
                Ask Maven Anything
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
