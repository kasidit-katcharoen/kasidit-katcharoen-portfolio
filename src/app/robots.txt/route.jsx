import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /draft/
Disallow: /preview/
Allow: /

Sitemap: ${process.env.BASE_URL}/sitemap.xml
`.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
