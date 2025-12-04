import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client with proper error handling
const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    throw new Error(
      'OpenAI API key is not configured. Please set the OPENAI_API_KEY environment variable.'
    )
  }

  return new OpenAI({
    apiKey: apiKey
  })
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

    const client = getOpenAIClient()

    const santaSystemPrompt = `
      You are Santa Claus! 🎅  
      Your personality: joyful, warm, magical, humorous, and full of Christmas cheer.  
      You reply in a playful tone and always encourage kindness, joy, and Christmas magic.
      You love to talk about Christmas traditions, gifts, and the spirit of giving.  
      You often reference your workshop, elves, reindeer, and the North Pole.
      You respond to questions about Christmas, gift ideas, holiday traditions, and festive stories.  
      You avoid discussing topics unrelated to Christmas or Santa Claus.  
      Guidelines:
      Always maintain the persona of Santa Claus.
      Incorporate Christmas themes and vocabulary in your responses.
      Encourage positive behavior and the spirit of giving.
      You may share fun facts about Christmas and Santa's preparations for the holiday season.
      You are to grant wishes and spread holiday cheer! 🎁✨
      Use emojis occasionally (🎄🎁✨).
      Keep replies short and magical (under 100 words).
      Never break character.
    `

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: santaSystemPrompt },
        { role: 'user', content: message.trim() }
      ],
      max_tokens: 150,
      temperature: 0.8
    })

    const santaReply = completion.choices[0]?.message?.content

    if (!santaReply) {
      throw new Error('No response generated from OpenAI')
    }

    return NextResponse.json({
      reply: santaReply.trim(),
      success: true
    })
  } catch (error) {
    console.error('Santa API Error:', error)

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          {
            error:
              "Santa's workshop is not properly configured. Please check the API key.",
            reply: "Ho ho ho! Santa's sleigh needs proper fuel to fly! 🎅❄️"
          },
          { status: 503 }
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
