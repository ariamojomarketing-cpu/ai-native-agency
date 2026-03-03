'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

const SESSION_ID = `visitor_${Date.now()}`

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey! I'm Maven, the AI behind Apex AI Labs. I can answer questions about our services, pricing, and how everything works. What brought you here today?",
      sender: 'bot',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Allow Hero CTA to open the chat
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true)
    window.addEventListener('open-chat', handleOpenChat)
    return () => window.removeEventListener('open-chat', handleOpenChat)
  }, [])

  const handleSend = async () => {
    if (!message.trim() || isTyping) return

    const userMessage = message.trim()
    setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }])
    setMessage('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, sessionId: SESSION_ID }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "Having a quick tech hiccup — drop your email and I'll follow up directly: hello@apexailabs.ai",
          sender: 'bot',
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-50"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            boxShadow: '0 0 32px rgba(99,102,241,0.45)',
          }}
          aria-label="Chat with Maven"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 w-96 h-[520px] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          style={{ background: '#111118', border: '1px solid rgba(99,102,241,0.22)' }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(79,70,229,0.95) 0%, rgba(147,51,234,0.95) 100%)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Maven</div>
                <div className="text-xs text-white/70">AI Assistant · Apex AI Labs</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition"
              aria-label="Close chat"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3"
            style={{ background: '#0d0d14' }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
                  }`}
                  style={
                    msg.sender === 'user'
                      ? {
                          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                          color: 'white',
                        }
                      : {
                          background: 'rgba(255,255,255,0.07)',
                          color: '#e2e8f0',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-none"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="p-3 flex-shrink-0"
            style={{
              background: '#111118',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex gap-2 items-end">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about services, pricing..."
                rows={1}
                className="flex-1 px-3 py-2 rounded-xl text-sm resize-none focus:outline-none text-white placeholder-gray-600"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  maxHeight: '80px',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(99,102,241,0.5)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              />
              <button
                onClick={handleSend}
                disabled={!message.trim() || isTyping}
                className="w-9 h-9 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition hover:brightness-110 flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                }}
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-xs text-gray-700 mt-1.5 text-center">Apex AI Labs</p>
          </div>
        </div>
      )}
    </>
  )
}
