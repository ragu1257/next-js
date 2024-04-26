import {NextResponse, type NextRequest} from 'next/server'

export function middleware(request: NextRequest){
  if(request.nextUrl.pathname === "/hello"){
  return NextResponse.redirect(new URL("/photo-feed", request.url))
  }
}

// export const config = {
//   matcher: "/hello"
// }