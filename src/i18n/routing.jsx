import { defineRouting } from "next-intl/routing";

export const locales = [
  { code: "en", label: "EN", flag: "sh" },
  { code: "th", label: "ไทย", flag: "th" },
];

export const localeDefault = "en";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales.map((locale) => locale.code),

  // Used when no locale matches
  defaultLocale: localeDefault,
});
