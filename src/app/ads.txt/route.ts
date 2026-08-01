import { NextResponse } from 'next/server';

export async function GET() {
  const content = 'google.com, pub-4263728957042690, DIRECT, f08c47fec0942fa0\n';
  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
