import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error(
      'Gemini API key is not configured. Please set the GEMINI_API_KEY environment variable.'
    )
  }

  return new GoogleGenerativeAI(apiKey)
}

export async function POST(req: Request) {
  try {
    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
    }

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

    if (
      !message ||
      typeof message !== 'string' ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: 'Message is required and must be a non-empty string' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message is too long. Maximum 1000 characters allowed.' },
        { status: 400 }
      )
    }

    const client = getGeminiClient()

    const santaSystemPrompt = `
      You are Santa Claus! 🎅 Keep responses SHORT and SNAPPY.
      Style: Joyful, warm, magical, but CONCISE (2-3 sentences max).
      Be responsive and positive, spreading Christmas cheer!
      Reference: workshop, elves, reindeer, North Pole occasionally.
      Use festive emojis 🎄🎁✨ but don't overdo it.
      
      Guidelines:
      - Always stay in character as Santa Claus
      - Keep responses SHORT (under 50 words)
      - Be warm but BRIEF
      - Avoid lengthy stories or long explanations
      - Quick, positive responses that make people smile
    `

    const model = client.getGenerativeModel({ model: 'gemini-2.0-flash-lite' })

    const fullPrompt = `${santaSystemPrompt}\n\nUser: ${message.trim()}\nSanta:`

    const completion = await model.generateContent(fullPrompt)

    const santaReply = completion.response.text()

    if (!santaReply) {
      throw new Error('No response generated from Gemini API')
    }

    return NextResponse.json({
      reply: santaReply.trim(),
      success: true
    })
  } catch (error) {
    console.error('Santa API Error:', error)

    if (error instanceof Error) {
      if (
        error.message.includes('API key') ||
        error.message.includes('GoogleGenerativeAI')
      ) {
        return NextResponse.json(
          {
            error:
              "Santa's workshop is not properly configured. Please check the Gemini API key.",
            reply: "Ho ho ho! Santa's sleigh needs proper fuel to fly! 🎅❄️"
          },
          { status: 503 }
        )
      }

      if (
        error.message.includes('model') ||
        error.message.includes('Bad Request') ||
        error.message.includes('Not Found') ||
        error.message.includes('404')
      ) {
        return NextResponse.json(
          {
            error: 'Model configuration error',
            reply:
              "Ho ho ho! Santa's workshop tools need adjustment! Try again! 🎄"
          },
          { status: 400 }
        )
      }

      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          {
            error: 'Rate limit exceeded',
            reply:
              "Ho ho ho! Santa's workshop is getting too many requests! Please wait a moment! 🎄"
          },
          { status: 429 }
        )
      }
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        reply:
          "Ho ho ho! Santa's workshop is a bit frozen right now. Try again soon! ❄🎅"
      },
      { status: 500 }
    )
  }
}
