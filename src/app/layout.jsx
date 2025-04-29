import "@/src/styles/shadcn.css";
import "@/src/styles/layout.scss";
import "@/src/styles/components.scss";
import "aos/dist/aos.css";
import "@/public/fontawesome/css/all.min.css";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { localeDefault } from "../i18n/routing";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import PreNextTopLoader from "../hooks/PreNextTopLoader";
import PreParallaxProvider from "../hooks/PreParallaxProvider";
import { ScrollProgress } from "../components/magicui/scroll-progress";
import { Cursor } from "../components/cursor";

export const metadata = {
  title: "Portfolio | KKDEV",
  description: "Kasidit Katcharoen | Frontend Developer | Full Stack Developer",
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
