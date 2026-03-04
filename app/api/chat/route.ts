import { NextRequest, NextResponse } from 'next/server'

const OPENCLAW_URL = process.env.OPENCLAW_GATEWAY_URL || 'http://localhost:18789'
const OPENCLAW_TOKEN = process.env.OPENCLAW_GATEWAY_TOKEN || ''

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'message required' }, { status: 400 })
    }

    // Use OpenClaw's OpenAI-compatible /v1/chat/completions endpoint
    // targeting the str-sales-chat (Maven) agent
    const response = await fetch(`${OPENCLAW_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENCLAW_TOKEN}`,
        'x-openclaw-agent-id': 'str-sales-chat',
        'x-openclaw-session-key': `web-visitor-${sessionId || 'default'}`,
      },
      body: JSON.stringify({
        model: 'openclaw:str-sales-chat',
        messages: [{ role: 'user', content: message }],
        stream: false,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('OpenClaw error:', response.status, err)
      return NextResponse.json({ reply: "Hey! I'm having a quick technical hiccup. Drop your email and I'll follow up directly: hello@apexailabs.com" }, { status: 200 })
    }

    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content || "Thanks for reaching out! Drop your email at hello@apexailabs.com and I'll follow up."

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json(
      { reply: "Hey! I'm having a quick technical hiccup. Drop your email and I'll follow up directly: hello@apexailabs.com" },
      { status: 200 }
    )
  }
}
