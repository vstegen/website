import { NextRequest, NextResponse } from 'next/server'
import MailerLite from '@mailerlite/mailerlite-nodejs'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+.[^\s@]$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body
    console.log(`Email: ${email}`)

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email address is required.' },
        { status: 400 },
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    if (!process.env.MAILERLITE_API_TOKEN) {
      return NextResponse.json(
        {
          success: false,
          message: 'Service temporarily unavailable. Please try again later.',
        },
        { status: 500 },
      )
    }

    const mailerLite = new MailerLite({
      api_key: process.env.MAILERLITE_API_TOKEN,
    })

    const response = await mailerLite.subscribers.createOrUpdate({
      email: email.toLowerCase().trim(),
      groups: ['161066195324240973'],
      status: 'active',
    })
    console.log(`Result of createOrUpdate: ${JSON.stringify(response.data)}`)

    if (response.status === 200 || response.status === 201) {
      return NextResponse.json({
        success: true,
        message: "Thanks! I'll let you know when there is new content.",
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Sorry, seems like something went wrong.' },
        { status: 500 },
      )
    }
  } catch (error) {
    console.log(`Failed to call createOrUpdate`, error)
    return NextResponse.json(
      { success: false, message: 'Sorry, seems like something went wrong.' },
      { status: 500 },
    )
  }
}
