import "@/src/styles/shadcn.css";
import "@/src/styles/layout.scss";
import "@/src/styles/components.scss";
import "aos/dist/aos.css";
import "@/public/fontawesome/css/all.min.css";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { localeDefault } from "../i18n/routing";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "next-themes";
import PreNextTopLoader from "@/src/hooks/PreNextTopLoader";
import PreParallaxProvider from "@/src/hooks/PreParallaxProvider";
import { ScrollProgress } from "@/src/components/magicui/scroll-progress";
import { Cursor } from "@/src/components/cursor";

export const metadata = {
  title: "Kasidit Katcharoen | Frontend Developer & Full Stack Developer",
  description:
    "Kasidit Katcharoen | Frontend Developer & Full Stack Developer. I'm an experienced web developer, creating and developing digital platforms while collaborating with both leading companies and ambitious startups!",
};

export default function RootLayout({ children }) {
  const locale = useLocale();
  return (
    <NextIntlClientProvider>
      <html lang={locale || localeDefault} suppressHydrationWarning>
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
        <body>
          <ThemeProvider defaultTheme="light">
            <Cursor />
            <PreNextTopLoader />
            <ScrollProgress />
            <Header />
            <PreParallaxProvider>{children}</PreParallaxProvider>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
