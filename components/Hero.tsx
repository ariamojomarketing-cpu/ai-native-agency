export default function Hero() {
  return (
    <section className="pt-16 pb-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30 mb-6">
          <span className="text-primary-400 font-medium">YC Spring 2026 Top Opportunity</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          AI Operations for{' '}
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            STR Hosts
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Automated guest messaging, social media, review responses, and pricing. 
          <span className="font-semibold text-primary-300"> Powered by the same system running Mojo Manor.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing" 
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 font-bold rounded-lg transition shadow-lg hover:shadow-xl"
          >
            View Pricing Plans
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-600 hover:border-primary-500 font-bold rounded-lg transition hover:bg-white/5"
          >
            Schedule a Demo
          </a>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-surface rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary-400">99%</div>
            <div className="text-gray-300 mt-2">Guest response rate</div>
            <div className="text-sm text-gray-500 mt-1">Average 2-minute reply time</div>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary-400">4.9★</div>
            <div className="text-gray-300 mt-2">Average review score</div>
            <div className="text-sm text-gray-500 mt-1">Across 200+ reviews on Mojo Manor</div>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary-400">$9.8K</div>
            <div className="text-gray-300 mt-2">Monthly summer revenue</div>
            <div className="text-sm text-gray-500 mt-1">Mojo Manor peak performance</div>
          </div>
        </div>
      </div>
    </section>
  )
}