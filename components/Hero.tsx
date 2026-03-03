'use client'

export default function Hero() {
  const openChat = () => window.dispatchEvent(new Event('open-chat'))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[18%] left-[12%] w-[520px] h-[520px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)',
            filter: 'blur(48px)',
            animation: 'blob1 11s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[28%] right-[8%] w-[480px] h-[480px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)',
            filter: 'blur(48px)',
            animation: 'blob2 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[12%] left-[42%] w-[360px] h-[360px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
            filter: 'blur(64px)',
            animation: 'blob3 9s ease-in-out infinite',
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8"
          style={{ animation: 'fadeInUp 0.7s ease 0.1s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          AI-Native Agency — We Run on What We Build
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
          style={{ animation: 'fadeInUp 0.7s ease 0.2s both' }}
        >
          The Future of Business
          <br />
          Runs on AI.{' '}
          <span className="gradient-text">Is Yours Ready?</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
        >
          Apex AI Labs builds and operates AI systems for businesses that are done leaving money on the table.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 0.7s ease 0.5s both' }}
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              boxShadow: '0 0 32px rgba(99,102,241,0.4)',
            }}
          >
            See What We Build
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 011.414-1.414l6 6z" clipRule="evenodd" />
            </svg>
          </a>

          <button
            onClick={openChat}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-200 hover:scale-[1.02]"
          >
            Talk to Our AI
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </button>
        </div>

        {/* Scroll cue */}
        <div
          className="mt-20 flex flex-col items-center gap-2"
          style={{ animation: 'fadeInUp 0.7s ease 0.9s both' }}
          aria-hidden="true"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600">Scroll</span>
          <div
            className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"
            style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
