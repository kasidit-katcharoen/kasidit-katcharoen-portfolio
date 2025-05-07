import Head from "next/head";
import React from "react";

export default function PreHead() {
  return (
    <Head>
      {/* favicon */}
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph (Facebook, LINE, LinkedIn) */}
      <meta property="og:title" content="ชื่อหน้าสุดเท่ | MyCoolSite" />
      <meta
        property="og:description"
        content="คำอธิบายเว็บสำหรับแชร์บนโซเชียล"
      />
      <meta property="og:image" content="https://mycool.site/og-image.jpg" />
      <meta property="og:url" content="https://mycool.site/page-path" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ชื่อหน้าสุดเท่ | MyCoolSite" />
      <meta name="twitter:description" content="คำอธิบายแบบย่อสำหรับ Twitter" />
      <meta
        name="twitter:image"
        content="https://mycool.site/twitter-image.jpg"
      />
    </Head>
  );
}
