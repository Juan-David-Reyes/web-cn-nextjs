import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const baseUrl = request.nextUrl.origin

  try {
    const res = await fetch(`${baseUrl}/api/redirects?where[from][equals]=${encodeURIComponent(pathname)}&depth=1`, {
      next: { revalidate: 60 },
    })

    if (res.ok) {
      const data = await res.json()
      const redirects = data.docs

      if (redirects && redirects.length > 0) {
        const redirect = redirects[0]
        let destination = ''

        if (redirect.to?.type === 'custom' && redirect.to?.url) {
          destination = redirect.to.url
        } else if (redirect.to?.type === 'reference' && redirect.to?.reference?.value) {
          const relationTo = redirect.to.reference.relationTo
          const value = redirect.to.reference.value
          const slug = typeof value === 'object' ? value.slug : value
          
          if (relationTo === 'posts') {
            destination = `/blog/${slug}`
          } else {
            destination = `/${slug}`
          }
        }

        if (destination && destination !== pathname) {
          // El plugin de redirects suele guardar el tipo de redirección
          let status = 302 // Default
          if (redirect.type === '301' || redirect.type === 301 || redirect.statusCode === 301) {
            status = 301
          }
          
          return NextResponse.redirect(new URL(destination, request.url), status)
        }
      }
    }
  } catch (error) {
    console.error('Error fetching redirects in middleware:', error)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|admin|images).*)',
  ],
}
