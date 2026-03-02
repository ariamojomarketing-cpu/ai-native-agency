'use client'

import { useState, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    { text: "Hi! I'm Moji, the AI behind Mojo Manor. Ask me anything about our AI operations for STR hosts.", sender: 'bot' }
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!message.trim()) return
    
    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }])
    const userMessage = message
    setMessage('')
    setIsTyping(true)
    
    // Simulate AI response (in production, this would hit your backend → Telegram)
    setTimeout(() => {
      const responses = [
        "Great question! Our AI handles guest messaging with 2-minute average response time, 24/7.",
        "The $1,500/mo Managed tier includes daily automation, social media posting, review responses, and pricing adjustments.",
        "Yes, we use the exact same system running Mojo Manor — proven with $9,800/mo summer revenue.",
        "Pilot spots are limited to 3 hosts. You'll get priority support and direct input on feature development.",
        "We can schedule a 15-minute demo to show you the dashboard and answer specific questions about your properties."
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all z-50"
        aria-label="Open chat"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-surface rounded-2xl border border-gray-700 shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3"></div>
              <div>
                <div className="font-bold">Moji AI Assistant</div>
                <div className="text-xs text-gray-400">Ask about AI operations for STR hosts</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div className={`inline-block max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : 'bg-gray-800 text-gray-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {msg.sender === 'bot' ? 'Moji' : 'You'}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block px-4 py-2 bg-gray-800 text-gray-100 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about pricing, features, or the pilot program..."
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="px-4 bg-primary-600 hover:bg-primary-700 font-medium rounded-r-lg"
                disabled={!message.trim()}
              >
                Send
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Real responses come via email within 24h. This demo simulates AI conversation.
            </div>
          </div>
        </div>
      )}
    </>
  )
}