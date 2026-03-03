import { NextRequest, NextResponse } from 'next/server'

const OPENCLAW_URL = process.env.OPENCLAW_GATEWAY_URL || 'http://localhost:18789'
const OPENCLAW_TOKEN = process.env.OPENCLAW_GATEWAY_TOKEN || ''
const MAVEN_AGENT = 'str-sales-chat'

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'message required' }, { status: 400 })
    }

    // Send message to Maven's OpenClaw session
    const response = await fetch(`${OPENCLAW_URL}/api/v1/sessions/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENCLAW_TOKEN}`,
      },
      body: JSON.stringify({
        agentId: MAVEN_AGENT,
        label: sessionId || 'web-visitor',
        message,
        timeoutSeconds: 30,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('OpenClaw error:', err)
      return NextResponse.json({ error: 'AI unavailable' }, { status: 502 })
    }

    const data = await response.json()

    return NextResponse.json({
      reply: data.reply || data.message || "Thanks for your message! I'll follow up shortly.",
    })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json(
      { reply: "Hey! I'm having a quick technical hiccup. Drop your email and I'll follow up directly: hello@mojicusai.com" },
      { status: 200 }
    )
  }
}
