import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbzA3azJEWMu5fGHjPpoRsH015R1I5m9OaoMdMX-ZhHZ7Q8JIrtG2eDZwCdiml1LUBcwTA/exec',
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    console.error('Submit error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
