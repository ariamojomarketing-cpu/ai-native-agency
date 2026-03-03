export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          <span
            className="font-bold text-base"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Apex AI Labs
          </span>
          <span className="text-white/10 hidden sm:block">|</span>
          <a
            href="mailto:hello@apexailabs.ai"
            className="hover:text-white transition-colors duration-200"
          >
            hello@apexailabs.ai
          </a>
        </div>

        <div className="flex items-center gap-1.5">
          <span>Powered by</span>
          <span className="text-white/60 font-medium">Mojicus AI</span>
        </div>
      </div>
    </footer>
  )
}
