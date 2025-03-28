import "@/src/styles/shadcn.css";
import "@/src/styles/layout.scss";
import "@/src/styles/components.scss";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "@/public/fontawesome/css/all.min.css";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { localeDefault } from "../i18n/routing";
import { ThemeProvider } from "next-themes";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import NextTopLoader from "nextjs-toploader";

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
          <ThemeProvider>
            <NextTopLoader
              color="#000"
              initialPosition={0.08}
              crawlSpeed={200}
              height={2}
              crawl={true}
              showSpinner={false}
              easing="ease-in-out"
              speed={200}
              shadow="0 0 10px #000,0 0 5px #000"
            />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
