export type Locale = "tr" | "en";

export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "tr" || value === "en";
}

export function localeFromCountry(country: string | null | undefined): Locale {
  return country?.toUpperCase() === "TR" ? "tr" : "en";
}
