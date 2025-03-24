import "@/src/styles/layout.scss";
import "@/src/styles/components.scss";
import "swiper/css";
import "swiper/css/pagination";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { localeDefault } from "../i18n/routing";
import { LangProvider } from "../context/LangContext";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export const metadata = {
  title: "Portfolio | Kasidit Katcharoen",
  description: "kasidit katcharoen developer portfolio",
};

export default function RootLayout({ children }) {
  const locale = useLocale();
  return (
    <NextIntlClientProvider>
      <LangProvider lang={locale || localeDefault}>
        <html lang={locale || localeDefault}>
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </LangProvider>
    </NextIntlClientProvider>
  );
}
