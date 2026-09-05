import { cookies, headers } from "next/headers";
import { isLocale, localeFromCountry, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const saved = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) {
    return saved;
  }

  const headerStore = await headers();
  const country =
    headerStore.get("cf-ipcountry") ??
    headerStore.get("x-vercel-ip-country") ??
    headerStore.get("x-country-code");

  return localeFromCountry(country);
}
