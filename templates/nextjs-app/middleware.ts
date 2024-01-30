import { NextResponse, NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/((?!_next|api/auth).*)(.+)'
  ]
}

export async function middleware (request: NextRequest) {
  return NextResponse.next()
}
