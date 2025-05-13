// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const BASE_URL = process.env.BASE_URL || "https://example.com";
  const languages = ["en", "th"];
  const pages = ["/", "/home"];

  const urls = pages
    .map((page) => {
      const links = languages
        .map(
          (lang) =>
            `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}${page}" />`
        )
        .join("\n        ");

      return `
    <url>
      <loc>${BASE_URL}${page}</loc>
      ${links}
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
