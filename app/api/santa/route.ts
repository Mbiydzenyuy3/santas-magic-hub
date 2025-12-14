import { NextResponse } from 'next/server'

async function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error(
      'Gemini API key is not configured. Please set the GEMINI_API_KEY environment variable.'
    )
  }

  const { GoogleGenerativeAI } = await import('@google/generative-ai')
  return new GoogleGenerativeAI(apiKey)
}

export async function POST(req: Request) {
  try {
    let requestData: { message?: string }

    try {
      requestData = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { message } = requestData

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        {
          error: 'Message is required and must be a non-empty string'
        },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message is too long. Maximum 1000 characters allowed.' },
        { status: 400 }
      )
    }

    const client = await getGeminiClient()

    const model = client.getGenerativeModel({
      model: 'gemini-2.0-flash-lite'
    })

    const santaPrompt = `
      You are Santa Claus! 🎅 Keep responses SHORT and SNAPPY.
      Warm, magical, fun, and under 50 words.
      Add light festive emojis like 🎄🎁✨.
      Stay in character as Santa.
    `

    const finalPrompt = `${santaPrompt}\n\nUser: ${message.trim()}\nSanta:`

    const completion = await model.generateContent(finalPrompt)
    const santaReply = completion.response?.text()?.trim()

    if (!santaReply) {
      throw new Error('No response generated from Gemini API')
    }

    return NextResponse.json({
      reply: santaReply,
      success: true
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Santa API Error:', error)

    // Missing API key
    if (error.message?.includes('API key')) {
      return NextResponse.json(
        {
          error: "Santa's workshop API key is missing.",
          reply: 'Ho ho ho! Santa needs his magic key to reply! 🎅🔑'
        },
        { status: 503 }
      )
    }

    if (error.message?.includes('model')) {
      return NextResponse.json(
        {
          error: 'Model configuration error',
          reply: "Ho ho ho! Santa's model is unavailable! Try again shortly! 🎄"
        },
        { status: 400 }
      )
    }

    if (error.message?.includes('rate')) {
      return NextResponse.json(
        {
          error: 'Rate limit reached',
          reply:
            'Ho ho ho! Too many requests! Santa needs a moment to breathe 🎅✨'
        },
        { status: 429 }
      )
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        reply: "Ho ho ho! Santa's workshop is a bit frozen! ❄️ Try later! 🎅"
      },
      { status: 500 }
    )
  }
}

export function GET() {
  return NextResponse.json({
    status: 'Santa API is running 🎅 Send a POST request to chat!'
  })
}
