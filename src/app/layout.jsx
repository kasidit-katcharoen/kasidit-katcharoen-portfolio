import "@/src/styles/shadcn.css";
import "@/src/styles/layout.scss";
import "@/src/styles/components.scss";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "@/public/fontawesome/css/all.min.css";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { localeDefault } from "../i18n/routing";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import PreNextTopLoader from "../hooks/PreNextTopLoader";

export const metadata = {
  title: "Portfolio | KKDEV",
  description: "Portfolio kasidit katcharoen developer",
};

export default function RootLayout({ children }) {
  const locale = useLocale();
  return (
    <NextIntlClientProvider>
      <html lang={locale || localeDefault} suppressHydrationWarning>
        <body>
          <ThemeProvider defaultTheme="system">
            <PreNextTopLoader/>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
