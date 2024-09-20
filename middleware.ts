import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const currentHost = hostname.replace(`.localhost:3000`, '');

  if (hostname === 'localhost:3000') {
    return NextResponse.next();
  }

  if (url.pathname.startsWith(`/_sites`)) {
    return new NextResponse(null, { status: 404 });
  }

  if (hostname === 'app.localhost:3000') {
    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
