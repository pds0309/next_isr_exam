import { NextRequest, NextResponse } from "next/server";

/*
  redirect() - Returns a NextResponse with a redirect set
  rewrite() - Returns a NextResponse with a rewrite set
  next() - Returns a NextResponse that will continue the middleware chain
  - reference: 'https://nextjs.org/docs/api-reference/next/server'
 */
export function middleware(request: NextRequest, response: NextResponse) {
  const secret = process.env.NEXT_PUBLIC_REVALIDATION_SECRET;
  return NextResponse.rewrite(
    new URL(`/api/revalidate?secret=${secret}`, request.nextUrl.origin)
  );
}

export const config = {
  matcher: ["/api/revalidate"],
};
