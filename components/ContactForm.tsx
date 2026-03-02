'use client'

import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [portfolioSize, setPortfolioSize] = useState('1')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would post to your backend
    console.log({ name, email, portfolioSize, message })
    
    // Simulate submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setEmail('')
      setPortfolioSize('1')
      setMessage('')
    }, 3000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Book Your Pilot Spot</h2>
          <p className="text-gray-300">
            Only 3 spots available at the $1,500/mo Managed tier. Fill out this form and we'll schedule a 15-minute demo within 24 hours.
          </p>
        </div>
        
        <div className="bg-surface rounded-2xl p-8 border border-gray-700">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <PaperAirplaneIcon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
              <p className="text-gray-300">
                We'll email you within 24 hours to schedule your demo. Check your inbox for next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Alex Johnson"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="alex@yourproperty.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Properties
                </label>
                <select
                  id="portfolio"
                  value={portfolioSize}
                  onChange={(e) => setPortfolioSize(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="1">1 property</option>
                  <option value="2-5">2-5 properties</option>
                  <option value="6-10">6-10 properties</option>
                  <option value="10+">10+ properties</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  What's your biggest challenge right now? (optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., too much time spent on guest messages, inconsistent pricing, low occupancy..."
                />
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-3 w-4 h-4 rounded border-gray-600 bg-gray-800"
                  required
                />
                <label htmlFor="terms">
                  I agree to receive a demo and pricing details. No spam, unsubscribe anytime.
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 font-bold rounded-lg transition flex items-center justify-center"
              >
                <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                Request Pilot Spot
              </button>
              
              <p className="text-center text-sm text-gray-500">
                Pilot spots are first-come, first-served. You'll get priority support and direct input on feature development.
              </p>
            </form>
          )}
        </div>
        
        {/* Contact info */}
        <div className="mt-12 text-center text-gray-400">
          <p className="mb-4">Questions? Reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@mojomanorwaynesville.com" 
              className="text-primary-400 hover:text-primary-300"
            >
              hello@mojomanorwaynesville.com
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:18284230805" 
              className="text-primary-400 hover:text-primary-300"
            >
              (828) 423-0805
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}